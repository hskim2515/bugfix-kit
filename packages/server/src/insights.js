import fs from 'node:fs/promises';
import path from 'node:path';
import { runClaudeStream, claudeSummary } from './claude.js';
import { firstLine, hhmmss, nowIso } from './util.js';

const READ_TOOLS = ['Read', 'Glob', 'Grep', 'Bash(git log:*)', 'Bash(git diff:*)', 'Bash(git show:*)', 'Bash(git blame:*)', 'Bash(cat:*)', 'Bash(head:*)', 'Bash(tail:*)', 'Bash(grep:*)', 'Bash(rg:*)', 'Bash(ls:*)', 'Bash(find:*)', 'Bash(wc:*)', 'Write(.bugfix/insights.json)'];

/**
 * 사람이 신고하기 전에 AI 가 고칠 점을 먼저 찾는다.
 * 재료: 최근 리포트(문제·실패 이유·미실행 추천 개선) + 최근 커밋 + 코드 스캔(읽기 전용).
 * 결과는 {dataDir}/{project}/insights.json 에 { status, log, items[], updatedAt } 로 두고, 항목은 리포트로 바꿔 파이프라인에 태운다.
 */
export class Insights {
  constructor(cfg, store, runner, log = console) {
    this.cfg = cfg; this.store = store; this.runner = runner; this.log = log;
    this.timers = new Map();
  }

  file(project) { return path.join(this.cfg.server.dataDir, project, 'insights.json'); }

  async state(project) {
    try { return JSON.parse(await fs.readFile(this.file(project), 'utf8')); }
    catch { return { status: 'NONE', log: '', items: [], updatedAt: null }; }
  }
  async save(project, patch) {
    const cur = await this.state(project);
    const next = { ...cur, ...patch, updatedAt: nowIso() };
    await fs.mkdir(path.dirname(this.file(project)), { recursive: true });
    await fs.writeFile(this.file(project), JSON.stringify(next), 'utf8');
    return next;
  }
  async logLine(project, line) {
    const cur = await this.state(project);
    await this.save(project, { log: (cur.log || '') + `${hhmmss()}  ${line}\n` });
    this.log.info(`[insights ${project}] ${line}`);
  }

  /** 큐에 넣는다(수정 작업과 같은 큐 - Claude 하나씩). focus: 사용자가 준 관심사(선택) */
  async enqueue(project, { focus = '' } = {}) {
    const cur = await this.state(project.name);
    if (['QUEUED', 'RUNNING'].includes(cur.status)) throw Object.assign(new Error('이미 분석이 진행 중입니다'), { status: 409 });
    await this.save(project.name, { status: 'QUEUED', log: '', focus });
    const ahead = this.runner.submit(project, 'insights', () => this.run(project, focus), async (e) => {
      await this.logLine(project.name, `✗ 실패: ${firstLine(e.message, 300)}`);
      await this.save(project.name, { status: 'FAILED' });
    });
    await this.logLine(project.name, `▶ 대기열 등록${ahead > 0 ? ` (앞에 ${ahead}건)` : ''}`);
  }

  async run(project, focus) {
    const name = project.name;
    const L = (s) => this.logLine(name, s);
    await this.save(name, { status: 'RUNNING' });
    await L('▶ 분석 시작');
    const ex = this.runner.ex(project);
    const gh = this.runner.gh(project);
    const auth = gh.gitAuthHeader();
    const { repo, jobs } = this.runner.paths(project, 0);
    const wt = path.join(jobs, 'insights');
    await this.runner.prepareRepo(project, ex, auth, L);
    await ex.exec(repo, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', '--prune', 'origin', project.baseBranch]);
    await this.runner.freshWorktree(ex, repo, jobs, wt, `origin/${project.baseBranch}`);
    await L(`작업 사본: ${project.baseBranch} @ ${(await ex.exec(wt, 1, ['git', 'rev-parse', '--short', 'HEAD'])).trim()}`);

    try {
      // 재료 1: 최근 리포트 요약 (원문은 짧게)
      const reports = (await this.store.list(name)).slice(0, 30);
      const lines = [];
      for (const r of reports) {
        const full = await this.store.get(name, r.bugReportId);
        let sug = [];
        try { sug = full?.fixSuggestions ? JSON.parse(full.fixSuggestions) : []; } catch { /* */ }
        lines.push(`- #${r.bugReportId} [${r.severity || '-'}|${r.fixStatus || '요청 전'}] ${firstLine(r.problem, 200)}${r.fixSummary ? `\n    결과: ${firstLine(r.fixSummary, 160)}` : ''}${sug.length ? `\n    남은 추천: ${sug.map((s) => firstLine(s, 120)).join(' / ')}` : ''}`);
      }
      const dir = path.join(wt, '.bugfix');
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(path.join(dir, 'reports.md'), `# 최근 리포트 ${reports.length}건\n\n${lines.join('\n') || '(없음)'}\n`, 'utf8');
      await fs.writeFile(path.join(dir, 'recent-commits.txt'), await ex.execOut(wt, 1, ['git', 'log', '-30', '--stat', '--format=%h %ad %an %s', '--date=short']), 'utf8');
      await L(`재료 준비: 리포트 ${reports.length}건 · 최근 커밋 30개`);

      await L('Claude 분석 중… (읽기 전용)');
      const out = await runClaudeStream(ex, wt, Math.max(5, Math.floor(this.cfg.server.timeoutMinutes / 2)),
        [this.cfg.server.claudeBin || 'claude', '-p', this.prompt(project, focus), '--max-turns', '30', '--permission-mode', 'acceptEdits', '--allowedTools', READ_TOOLS.join(','), ...(this.cfg.server.model ? ['--model', this.cfg.server.model] : [])],
        (line) => this.logLine(name, `  ${line}`));
      await L(`Claude 종료 (${claudeSummary(out)})`);

      let items = [];
      try {
        const raw = await fs.readFile(path.join(dir, 'insights.json'), 'utf8');
        const j = JSON.parse(raw);
        items = (Array.isArray(j) ? j : j.items || []).map((x, i) => ({
          id: i + 1, title: String(x.title || '').slice(0, 160), severity: ['HIGH', 'MEDIUM', 'LOW'].includes(String(x.severity).toUpperCase()) ? String(x.severity).toUpperCase() : 'MEDIUM',
          kind: String(x.kind || 'bug'), files: [].concat(x.files || []).slice(0, 8).map(String), evidence: String(x.evidence || '').slice(0, 600), proposal: String(x.proposal || '').slice(0, 800), confidence: Number(x.confidence) || 0,
        })).filter((x) => x.title).slice(0, 20);
      } catch (e) { await L(`결과 파일을 읽지 못했습니다: ${firstLine(e.message, 120)}`); }
      await this.save(name, { status: 'DONE', items, ranAt: nowIso(), head: (await ex.exec(wt, 1, ['git', 'rev-parse', '--short', 'HEAD'])).trim() });
      await L(`✓ 제안 ${items.length}건`);
    } finally {
      await this.runner.removeWorktree(ex, repo, wt);
    }
  }

  prompt(project, focus) {
    const mods = project.modules.map((m) => `  - \`${m.dir}\`: ${m.verify.map((v) => `\`${v}\``).join(' → ') || '검증 없음'}`).join('\n');
    return `${project.description || `\`${project.githubRepo}\``} 저장소입니다. 사용자가 신고하기 전에 **고칠 점을 먼저 찾는** 일입니다. 코드는 고치지 마세요 - 찾아서 목록으로만.

재료:
  - \`.bugfix/reports.md\`: 최근 버그 리포트(문제 · 수정 결과 · 아직 실행 안 한 추천 개선). 반복되는 문제, 실패로 끝난 리포트, 남은 추천을 눈여겨보세요.
  - \`.bugfix/recent-commits.txt\`: 최근 커밋 30개와 바뀐 파일. 최근에 많이 바뀐 곳이 위험합니다.
  - 코드 자체. 모듈:
${mods || '  - (모듈 규칙 없음)'}
${focus ? `\n사용자가 특히 보고 싶은 것: ${focus}\n` : ''}
찾을 것(우선순위 순):
  1. 실제로 동작이 틀리는 결함 - 예외 처리 누락으로 화면이 멈추는 곳, null/undefined 접근, 잘못된 조건, 경합, 리소스 누수, 잘못된 API 사용
  2. 사용자가 반복해서 겪는 문제(리포트 패턴)의 근본 원인
  3. 명백한 UX 결함(깨진 레이아웃 코드, 접근 불가 상태, 오타가 있는 화면 문구)
  4. 위험한 관행(비밀값 하드코딩, 오류를 삼키는 catch, 무한 재시도)
토큰을 아끼세요: 전체를 읽지 말고 Grep 으로 후보(\`catch {}\`, \`TODO|FIXME|HACK\`, \`console.error\`, \`any\`, \`!.\`, \`setTimeout(.*0)\`, 최근 커밋의 파일)를 찾아 그 부분만 읽으세요.
추측을 적지 마세요 - 파일과 줄을 실제로 확인한 것만, 근거(evidence)에 파일:줄과 코드 한 줄을 인용하세요. 확신이 낮으면 confidence 를 낮게.

마지막에 \`.bugfix/insights.json\` 을 이 형식의 JSON 배열로 쓰세요 (최대 12개, 중요한 것부터):
[
  { "title": "한 줄 제목(한국어, 60자 이내)", "severity": "HIGH|MEDIUM|LOW", "kind": "bug|ux|risk|cleanup",
    "files": ["경로:줄"], "evidence": "무엇을 봤는지(코드 인용 포함, 3줄 이내)",
    "proposal": "어떻게 고칠지 - 이 문장을 그대로 AI 에게 수정 요청으로 보낼 수 있게 구체적으로", "confidence": 0.0~1.0 }
]
파일 쓰기는 \`.bugfix/insights.json\` 만 허용됩니다. 다른 파일은 절대 고치지 마세요.`;
  }

  /** 제안 → 리포트 (원하면 바로 수정 요청까지) */
  async toReport(project, item, { fix = false, reporter = 'insights' } = {}) {
    const problem = `[AI 제안·${item.kind}] ${item.title}\n\n근거: ${item.evidence}\n\n관련 파일: ${item.files.join(', ') || '-'}\n\n요청: ${item.proposal}`;
    const saved = await this.store.save(project.name, { severity: item.severity, problem, reproSteps: '', expectedResult: item.proposal, reporter, contextJson: JSON.stringify({ source: 'insights', files: item.files }) });
    if (fix) {
      await this.store.update(project.name, saved.bugReportId, (c) => ({ ...c, fixStatus: 'QUEUED', fixLog: '', fixRequestedAt: nowIso(), status: 'IN_PROGRESS' }));
      await this.runner.enqueue(project, saved.bugReportId);
    }
    return saved.bugReportId;
  }

  /** 매일 정해진 시각(HH:MM)에 자동 실행 - server.insightsSchedule 또는 project.insights.schedule */
  startSchedules() {
    for (const p of Object.values(this.cfg.projects)) {
      const at = p.insights?.schedule || this.cfg.server.insightsSchedule;
      if (!at || !/^\d{1,2}:\d{2}$/.test(at)) continue;
      const tick = async () => {
        const now = new Date();
        const [h, m] = at.split(':').map(Number);
        if (now.getHours() === h && now.getMinutes() === m) {
          try { await this.enqueue(p); } catch (e) { this.log.warn(`[insights ${p.name}] 예약 실행 실패: ${e.message}`); }
        }
      };
      this.timers.set(p.name, setInterval(tick, 60_000));
      this.log.info(`[insights ${p.name}] 매일 ${at} 자동 분석`);
    }
  }
}
