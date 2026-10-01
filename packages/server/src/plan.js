import fs from 'node:fs/promises';
import path from 'node:path';
import { sessionIdOf, claudeSummary } from './claude.js';
import { writeReportFiles } from './reportFiles.js';
import { firstLine, notBlank, parseResult, stamp } from './util.js';

/**
 * 작업(task) - 버그가 아닌 기능·개선 요청의 흐름.  Runner 에 섞여 들어가는 메서드들(Object.assign(Runner.prototype, planMixin)).
 *
 *   요청 → [계획] AI 가 .devloop/plan.json(건드릴 파일·단계·위험·인수 조건)을 씀 → 개입 방식(mode)에 따라
 *     auto : 바로 구현
 *     plan : 사람이 계획을 승인(수정 가능)한 뒤 구현            ← 기본
 *     step : 승인 뒤 단계 하나씩 구현·검증·커밋·버전, 단계마다 멈춰 '다음 단계' 를 기다림
 *   → 마지막 단계가 끝나면 인수 조건을 .devloop/repro.json 으로 두고 재현 검증(afterFix) → 내보내기(deliver)
 *
 * 리포트 필드: kind(bug|feature|improve) · mode(auto|plan|step) · plan(JSON) · planStep(다음에 할 단계, 0부터) · planNote
 * 상태: PLANNING(계획 중) · PLANNED(승인 대기) · STEP_WAIT(다음 단계 대기) + 기존 QUEUED/RUNNING/READY/…
 */
const GIT_ID = ['-c', 'user.name=Claude Devloop', '-c', 'user.email=claude-devloop@devloop.local'];
const KIND_LABEL = { bug: '버그', feature: '기능', improve: '개선' };
const COMMIT_PREFIX = { bug: 'fix', feature: 'feat', improve: 'refactor' };

async function readIfExists(p) { try { return await fs.readFile(p, 'utf8'); } catch { return ''; } }

/** Claude 가 쓴 plan.json 을 관대하게 정규화 */
export function normalizePlan(x) {
  if (!x || typeof x !== 'object') return null;
  const steps = (Array.isArray(x.steps) ? x.steps : []).map((s, i) => (typeof s === 'string' ? { title: s } : s)).filter((s) => s && (s.title || s.detail))
    .map((s, i) => ({ n: i + 1, title: String(s.title || s.name || `단계 ${i + 1}`).slice(0, 200), detail: String(s.detail || s.description || '').slice(0, 2000), files: Array.isArray(s.files) ? s.files.map(String).slice(0, 40) : [] }));
  if (!steps.length) return null;
  const acc = x.acceptance && typeof x.acceptance === 'object' ? x.acceptance : {};
  return {
    summary: String(x.summary || x.title || '').slice(0, 1000),
    approach: String(x.approach || x.design || '').slice(0, 4000),
    files: (Array.isArray(x.files) ? x.files : []).map(String).slice(0, 80),
    steps,
    risks: (Array.isArray(x.risks) ? x.risks : []).map(String).slice(0, 20),
    questions: (Array.isArray(x.questions) ? x.questions : []).map(String).slice(0, 20),
    acceptance: { api: Array.isArray(acc.api) ? acc.api.slice(0, 20) : [], steps: Array.isArray(acc.steps) ? acc.steps.slice(0, 40) : [], manual: (Array.isArray(acc.manual) ? acc.manual : []).map(String).slice(0, 20) },
    estimate: String(x.estimate || '').slice(0, 200),
  };
}

export const planMixin = {
  kindLabel(r) { return KIND_LABEL[r?.kind] || KIND_LABEL.bug; },
  taskTitle(r) { return notBlank(r.title) ? r.title : firstLine(r.problem || '', 80); },

  // ── 계획 ─────────────────────────────────────────────────────────────────
  async enqueuePlan(project, id, { note = '' } = {}) {
    await this.updateFix(project, id, { fixStatus: 'QUEUED', planNote: note || null });
    const ahead = this.submit(project, id, () => this.runPlan(project, id, note), async (e) => {
      await this.logLine(project, id, `✗ 계획 실패: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: `계획 실패: ${firstLine(e.message, 200)}` });
      this.notifier?.send(project, 'fix.failed', { title: `계획 실패 - #${id}`, lines: [firstLine(e.message, 200)], url: `/reports/${id}`, level: 'bad' }).catch(() => {});
    }, 'fix');
    if (ahead > 0) await this.logLine(project, id, `▶ 대기열 등록 (앞에 ${ahead}건)`);
  },

  async runPlan(project, id, note) {
    const r = await this.withFeature(project, await this.store.get(project.name, id));
    if (!r) throw new Error(`리포트 없음: ${id}`);
    await this.updateFix(project, id, { fixStatus: 'PLANNING' });
    const L = (s) => this.logLine(project, id, s);
    await L(`▶ 계획 수립 시작 (${this.kindLabel(r)} · 개입 ${r.mode || 'plan'})${note ? ` - 메모: ${firstLine(note, 120)}` : ''}`);
    const ex = this.ex(project);
    const gh = this.gh(project);
    const base = project.baseBranch;
    const { repo, jobs, wt } = this.paths(project, id);
    const auth = gh.gitAuthHeader();
    await this.prepareRepo(project, ex, auth, L);
    if (!await this.fetch(project, ex, auth, [base])) throw new Error(`origin/${base} 를 받지 못했습니다`);
    await this.freshWorktree(ex, repo, jobs, wt, `origin/${base}`);
    try {
      await writeReportFiles(path.join(wt, '.devloop'), r);
      const kg = await this.knowledge?.writeFor(project, path.join(wt, '.devloop'), r).catch(() => false);
      await L(`요청 자료 준비 (.devloop/)${kg ? ' + 지식 그래프 관련 부분' : ''}`);
      await L('Claude Code 가 저장소를 읽고 계획을 씁니다… (코드는 바꾸지 않음)');
      const prev = r.plan ? `\n\n이전 계획(사람이 "다시 계획" 을 눌렀습니다${note ? ` - 메모: ${note}` : ''}):\n${r.plan}\n` : '';
      const out = await this.claude(project, ex, id, wt, Math.max(10, Math.floor(this.cfg.server.timeoutMinutes / 2)),
        ['-p', this.planPrompt(project, r) + prev, '--max-turns', '40', '--permission-mode', 'acceptEdits', '--allowedTools', this.allowedTools(project).join(',')]);
      await this.updateFix(project, id, { fixSessionId: sessionIdOf(out) });
      await L(`Claude 종료 (${claudeSummary(out)})`);
      // 계획 단계에서 코드가 바뀌었으면 되돌린다(계획만 받는다)
      await ex.exec(wt, 1, ['git', 'checkout', '--', '.']);
      await ex.exec(wt, 1, ['git', 'clean', '-fdq', '-e', '.devloop']);
      let plan = null;
      try { plan = normalizePlan(JSON.parse(await readIfExists(path.join(wt, '.devloop/plan.json')) || 'null')); } catch (e) { await L(`plan.json 파싱 실패: ${firstLine(e.message, 100)}`); }
      if (!plan) throw new Error('AI 가 계획(.devloop/plan.json)을 쓰지 못했습니다 - 진행 로그의 답변을 보고 요청을 더 구체적으로 적어 주세요');
      const md = await readIfExists(path.join(wt, '.devloop/plan.md'));
      await this.updateFix(project, id, { plan: JSON.stringify(plan), planMd: md.slice(0, 20000) || null, planStep: 0, fixSummary: plan.summary || this.taskTitle(r) });
      await L(`✓ 계획: ${plan.steps.length}단계 · 파일 ${plan.files.length}개${plan.risks.length ? ` · 위험 ${plan.risks.length}건` : ''}${plan.questions.length ? ` · 확인 질문 ${plan.questions.length}건` : ''}\n${plan.steps.map((s) => `  ${s.n}. ${s.title}`).join('\n')}`);
      if ((r.mode || 'plan') === 'auto' && !plan.questions.length) {
        await L('개입 방식 자동 - 바로 구현을 시작합니다');
        await this.updateFix(project, id, { fixStatus: 'QUEUED' });
        this.enqueueImplement(project, id);
      } else {
        await this.updateFix(project, id, { fixStatus: 'PLANNED' });
        await L(plan.questions.length ? '계획에 확인 질문이 있습니다 - 답을 메모에 적어 "다시 계획" 하거나, 그대로 승인하세요' : '계획 승인 대기 - 콘솔/뷰어에서 계획을 확인하고 승인하면 구현을 시작합니다');
        this.notifier?.send(project, 'plan.ready', { title: `계획 승인 대기 - #${id} ${this.taskTitle(r)}`, lines: [plan.summary || '', `${plan.steps.length}단계`], url: `/reports/${id}`, level: 'info' }).catch(() => {});
      }
    } finally {
      await this.removeWorktree(ex, repo, wt);
    }
  },

  planPrompt(project, r) {
    const mods = project.modules.length
      ? project.modules.map((m) => `  - \`${m.dir}\` (${m.name}): ${m.verify.length ? m.verify.map((v) => `\`${v}\``).join(' → ') : '검증 명령 없음'}`).join('\n')
      : '  - (모듈 규칙 없음 - 저장소 구조를 보고 판단하세요)';
    return `${project.description || `\`${project.githubRepo}\``} 저장소입니다.
아래 ${this.kindLabel(r)} 요청 #${r.bugReportId}${r.featureInfo ? ` (기능 "${r.featureInfo.name}" 의 일부 - summary.md 의 기능 범위·관련 파일부터 보세요)` : ''} 의 **구현 계획**을 세워 주세요. 이 단계에서는 코드를 바꾸지 않습니다(바꿔도 버립니다). 저장소와 \`.devloop/\` 자료(summary.md, knowledge.md 가 있으면 관련 메뉴·기능·파일·API)를 읽고 판단하세요.

## 요청
${this.taskTitle(r)}

${r.problem || ''}

## 모듈·검증 명령
${mods}

## 결과물 (둘 다 반드시)
1. \`.devloop/plan.json\` - 서버가 읽는 구조화된 계획:
\`\`\`
{ "summary": "한 줄 요약(60자)",
  "approach": "설계·접근 방식 설명(몇 문단, 마크다운)",
  "files": ["건드릴 파일 경로", …],
  "steps": [ { "title": "단계 제목", "detail": "이 단계에서 정확히 무엇을 어떻게 바꾸는지", "files": ["파일"] }, … ],
  "risks": ["위험·주의점", …],
  "questions": ["요청이 모호해 사람에게 물어야 할 것(없으면 빈 배열)"],
  "acceptance": { "api": [ { "method": "GET", "path": "/api/…", "expect": { "status": 200 } } ], "steps": [ { "goto": "/route" }, { "expect": { "selector": "…", "count": 1 } } ], "manual": ["사람이 눈으로 확인할 항목"] },
  "estimate": "예상 규모(파일 수·난이도)" }
\`\`\`
   - steps 는 **독립적으로 검증·커밋할 수 있는 단위**로 2~8개. 각 단계가 끝나도 앱이 깨지지 않게 순서를 잡으세요(예: 백엔드 API → 프론트 화면 → 마무리).
   - acceptance 는 구현이 끝난 뒤 서버가 미리보기에서 자동으로 돌려 확인하는 인수 조건입니다. api 는 앱 REST 접두 경로(/rest, /api 등)를 뺀 경로, 저장 대상 식별자는 미리보기 전용 값. 확실하지 않으면 manual 에 적으세요.
2. \`.devloop/plan.md\` - 사람이 읽을 계획서(요청 이해 → 접근 → 단계 → 위험 → 인수 조건). 한국어.

## 규칙
- ${project.conventions || '저장소의 기존 컨벤션을 따릅니다.'}
- 모르는 것을 지어내지 말고 questions 에 적으세요. 요청 범위를 넘는 개선은 risks 나 별도 제안으로만.
- git 커밋·푸시는 하지 마세요. .devloop/ 아래 두 파일 외에는 쓰지 마세요.`;
  },

  // ── 구현 ─────────────────────────────────────────────────────────────────
  async enqueueImplement(project, id) {
    const ahead = this.submit(project, id, () => this.runImplement(project, id), async (e) => {
      await this.logLine(project, id, `✗ 구현 실패: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: `구현 실패: ${firstLine(e.message, 200)}` });
      this.notifier?.send(project, 'fix.failed', { title: `구현 실패 - #${id}`, lines: [firstLine(e.message, 200)], url: `/reports/${id}`, level: 'bad' }).catch(() => {});
    }, 'fix');
    if (ahead > 0) await this.logLine(project, id, `▶ 대기열 등록 (앞에 ${ahead}건)`);
  },

  async runImplement(project, id) {
    const r = await this.withFeature(project, await this.store.get(project.name, id));
    if (!r) throw new Error(`리포트 없음: ${id}`);
    let plan = null; try { plan = normalizePlan(JSON.parse(r.plan || 'null')); } catch { /* */ }
    if (!plan) throw new Error('승인된 계획이 없습니다');
    const mode = r.mode || 'plan';
    const from = Number(r.planStep) || 0;
    if (from >= plan.steps.length) throw new Error('남은 단계가 없습니다');
    const to = mode === 'step' ? from + 1 : plan.steps.length;   // [from, to)
    const last = to >= plan.steps.length;
    await this.updateFix(project, id, { fixStatus: 'RUNNING' });
    const L = (s) => this.logLine(project, id, s);
    await L(`▶ 구현 시작: ${mode === 'step' ? `${from + 1}/${plan.steps.length} 단계 - ${plan.steps[from].title}` : `${from + 1}~${plan.steps.length} 단계 (${plan.steps.length - from}개)`}`);
    const ex = this.ex(project);
    const gh = this.gh(project);
    const base = project.baseBranch;
    const { repo, jobs, wt } = this.paths(project, id);
    const auth = gh.gitAuthHeader();
    await this.prepareRepo(project, ex, auth, L);
    if (!await this.fetch(project, ex, auth, [base])) throw new Error(`origin/${base} 를 받지 못했습니다`);
    // 이어서 할 단계면 보관된 브랜치(키트 저장소 안)에서, 아니면 base 에서
    let branch = r.fixBranch;
    let cont = false;
    if (from > 0 && notBlank(branch) && (await ex.execRc(repo, 1, ['git', 'rev-parse', '--verify', '-q', `refs/heads/${branch}`])) === 0) cont = true;
    // 재시작으로 끊긴 구현이면 작업 사본을 그대로(브랜치도 그대로) 이어간다
    const rs = await this.resumeWorktree(project, r, ex, repo, jobs, wt, cont ? branch : `origin/${base}`, L);
    if (rs.resume) {
      const cur = (await ex.exec(wt, 1, ['git', 'rev-parse', '--abbrev-ref', 'HEAD'])).trim();
      if (cur === 'HEAD') { if (!notBlank(branch) || !cont) branch = `claude/devloop-${id}-${stamp()}`; await ex.exec(wt, 1, ['git', 'checkout', '-q', '-b', branch]); } else branch = cur;
    } else {
      if (!cont) branch = `claude/devloop-${id}-${stamp()}`;
      if (cont) await ex.exec(wt, 1, ['git', 'checkout', '-q', '-B', branch, branch]);
      else await ex.exec(wt, 1, ['git', 'checkout', '-q', '-b', branch]);
      await L(`작업 사본: ${cont ? `브랜치 ${branch} 이어서` : `${base} 에서 새 브랜치 ${branch}`} @ ${(await ex.exec(wt, 1, ['git', 'rev-parse', '--short', 'HEAD'])).trim()}`);
    }
    try {
      await writeReportFiles(path.join(wt, '.devloop'), r);
      await fs.writeFile(path.join(wt, '.devloop/plan.json'), JSON.stringify(plan, null, 2), 'utf8');
      if (r.planMd) await fs.writeFile(path.join(wt, '.devloop/plan.md'), r.planMd, 'utf8');
      await this.knowledge?.writeFor(project, path.join(wt, '.devloop'), r).catch(() => false);
      await this.prepareNodeModules(project, ex, wt, L);
      await L(`Claude Code 실행 중… (최대 ${this.cfg.server.timeoutMinutes}분)`);
      const prompt = (rs.resume ? this.resumePreface(rs.changed) : '') + this.implementPrompt(project, r, plan, from, to);
      const out = await this.claudeResume(project, ex, id, wt, r.fixSessionId, prompt, this.allowedTools(project), Math.max(20, this.cfg.server.maxTurns));
      const sid = sessionIdOf(out) || r.fixSessionId;
      await this.updateFix(project, id, { fixSessionId: sid });
      await L(`Claude 종료 (${claudeSummary(out)})`);
      await this.revertProtected(project, ex, wt, L);
      const changed = (await ex.exec(wt, 1, ['git', 'status', '--porcelain'])).trim();
      if (!changed) {
        const reason = await readIfExists(path.join(wt, '.devloop/result.md'));
        if (from === 0) {
          // 첫 구현부터 아무것도 안 바꿨으면 실패 - 계획으로 되돌린다
          await this.updateFix(project, id, { fixStatus: 'PLANNED', fixSummary: `AI 가 코드를 바꾸지 않았습니다. ${firstLine(reason, 200)}` });
          await L(`✗ 변경 없음 - 결과:\n${reason.trim().slice(0, 1500)}`);
          return;
        }
        // 검증·확인만 하는 단계(빌드 검증 등)는 코드 변경이 없어도 완료로 친다
        await L(`이 단계는 코드 변경이 없습니다(검증·확인 단계로 봄) - 완료 처리\n${reason.trim().slice(0, 800)}`);
        await this.updateFix(project, id, { planStep: to });
        if (!last) {
          await this.updateFix(project, id, { fixStatus: 'STEP_WAIT' });
          await L(`■ ${to}/${plan.steps.length} 단계 완료 - 다음 단계 대기`);
          return;
        }
        const n0 = r.fixVersion;
        if (n0 == null) throw new Error('커밋된 변경이 없어 내보낼 것이 없습니다');
        if (!await readIfExists(path.join(wt, '.devloop/repro.json')) && (plan.acceptance.api.length || plan.acceptance.steps.length)) {
          await fs.writeFile(path.join(wt, '.devloop/repro.json'), JSON.stringify({ api: plan.acceptance.api, steps: plan.acceptance.steps }, null, 2), 'utf8');
          await L('인수 조건(계획의 acceptance)을 재현 절차로 사용합니다');
        }
        const repro0 = await this.afterFix(project, id, ex, wt, branch, base, r.fixSummary || this.taskTitle(r), n0, [], sid);
        const prBody0 = `${this.kindLabel(r)} 요청 #${id}: ${this.taskTitle(r)}\n\n## 계획\n${plan.summary}\n${plan.steps.map((s) => `${s.n}. ${s.title}`).join('\n')}${repro0.ran ? `\n\n## 인수 조건 검증\n${repro0.passed ? '✓ 통과' : '✗ 실패'} (${repro0.rounds}회)\n${repro0.note}` : ''}${plan.acceptance.manual.length ? `\n\n## 사람이 확인할 것\n${plan.acceptance.manual.map((m) => `- [ ] ${m}`).join('\n')}` : ''}\n\n---\n이 PR 은 DevLoop 의 ${this.kindLabel(r)} 요청 흐름(계획 → 구현 → 검증)으로 만들어졌습니다.`;
        await this.deliver(project, ex, gh, id, wt, branch, auth, { summary: r.fixSummary || this.taskTitle(r), prBody: prBody0, existingPr: null }, []);
        return;
      }
      await L(`변경 파일:\n${changed}`);
      const mods = this.changedModules(project, changed);
      await L(`검증(${mods.map((m) => m.name).join(' · ') || '규칙 없음'})…`);
      await this.verify(project, ex, wt, mods);
      await L('✓ 검증 통과');
      const check = await this.frontCheck(project, ex, id, wt, mods);
      const result = parseResult(await readIfExists(path.join(wt, '.devloop/result.md')));
      const stepLabel = mode === 'step' ? ` [${from + 1}/${plan.steps.length}] ${plan.steps[from].title}` : '';
      const summary = result.title || `${this.taskTitle(r)}${stepLabel}`;
      await this.saveSuggestions(project, id, result.body, changed);
      const prefix = COMMIT_PREFIX[r.kind] || 'feat';
      await ex.exec(wt, 1, ['git', 'add', '-A']);
      await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '-q', '-F', '-'], { stdin: `${prefix}: ${summary} (${this.kindLabel(r)} #${id}${stepLabel})\n\n${result.body || ''}\n\nCo-Authored-By: Claude <noreply@anthropic.com>` });
      await this.updateFix(project, id, { fixBranch: branch, fixSummary: summary, fixPushed: false, planStep: to });
      const n = await this.recordVersion(project, id, ex, wt, branch, base, summary, L);
      if (!last) {
        // 단계 모드: 여기서 멈추고 사람이 '다음 단계' 를 누를 때까지 기다린다 - 확인할 수 있게 미리보기는 띄워 둔다
        await this.updateFix(project, id, { fixStatus: 'STEP_WAIT' });
        await L(`■ ${to}/${plan.steps.length} 단계 완료 - 다음 단계 대기 (미리보기로 확인한 뒤 '다음 단계')`);
        if (n != null && this.versions?.recipe(project) && project.previewAuto !== false) this.versions.start(project, n, { low: true }).catch(() => {});
        this.notifier?.send(project, 'step.wait', { title: `${to}/${plan.steps.length} 단계 완료 - #${id} ${this.taskTitle(r)}`, lines: [summary], url: `/reports/${id}`, level: 'info' }).catch(() => {});
        return;
      }
      // 마지막 단계: 인수 조건을 재현 절차로 두고(AI 가 안 썼으면) 검증 → 내보내기
      if (!await readIfExists(path.join(wt, '.devloop/repro.json')) && (plan.acceptance.api.length || plan.acceptance.steps.length)) {
        await fs.writeFile(path.join(wt, '.devloop/repro.json'), JSON.stringify({ api: plan.acceptance.api, steps: plan.acceptance.steps }, null, 2), 'utf8');
        await L('인수 조건(계획의 acceptance)을 재현 절차로 사용합니다');
      }
      const repro = await this.afterFix(project, id, ex, wt, branch, base, summary, n, mods, sid);
      const latest = parseResult(await readIfExists(path.join(wt, '.devloop/result.md')));
      const prBody = `${this.kindLabel(r)} 요청 #${id}: ${this.taskTitle(r)}\n\n## 계획\n${plan.summary}\n${plan.steps.map((s) => `${s.n}. ${s.title}`).join('\n')}\n\n${latest.body || result.body || ''}${check ? `\n\n## 화면 확인(front-check)\n${check}` : ''}${repro.ran ? `\n\n## 인수 조건 검증\n${repro.passed ? '✓ 통과' : '✗ 실패'} (${repro.rounds}회)\n${repro.note}` : ''}${plan.acceptance.manual.length ? `\n\n## 사람이 확인할 것\n${plan.acceptance.manual.map((m) => `- [ ] ${m}`).join('\n')}` : ''}\n\n---\n이 PR 은 DevLoop 의 ${this.kindLabel(r)} 요청 흐름(계획 → 구현 → 검증)으로 만들어졌습니다.`;
      await this.deliver(project, ex, gh, id, wt, branch, auth, { summary: latest.title || summary, prBody, existingPr: null }, mods);
    } finally {
      await this.removeWorktree(ex, repo, wt);
    }
  },

  implementPrompt(project, r, plan, from, to) {
    const steps = plan.steps.slice(from, to);
    const mods = project.modules.length
      ? project.modules.map((m) => `  - \`${m.dir}\` (${m.name}): ${m.verify.length ? m.verify.map((v) => `\`${v}\``).join(' → ') : '검증 명령 없음'}`).join('\n')
      : '  - (모듈 규칙 없음)';
    const done = plan.steps.slice(0, from);
    return `${this.kindLabel(r)} 요청 #${r.bugReportId} "${this.taskTitle(r)}" 를 **승인된 계획대로 구현**하세요. 계획 전체는 \`.devloop/plan.json\`·\`plan.md\`, 요청 원문은 \`.devloop/summary.md\` 에 있습니다.
${done.length ? `\n이미 끝난 단계(이 브랜치에 커밋돼 있음): ${done.map((s) => `${s.n}. ${s.title}`).join(' / ')}\n` : ''}
## 이번에 구현할 단계
${steps.map((s) => `### ${s.n}. ${s.title}\n${s.detail}${s.files.length ? `\n파일: ${s.files.join(', ')}` : ''}`).join('\n\n')}

## 규칙
- 이 단계(들)의 범위만 구현합니다. 계획과 다르게 해야 한다면 그 이유를 result.md 에 적으세요.
- 모듈·검증:
${mods}
  빠른 확인(lint·compileJava·단위 테스트)만 직접 돌리세요. 전체 빌드(npm run build, bootWar)는 몇 분이 걸리고 서버가 검증 단계에서 다시 돌리니 직접 돌리지 마세요.
- ${project.conventions || '저장소의 기존 컨벤션을 따릅니다.'}
- 마지막에 \`.devloop/result.md\` 를 씁니다. 첫 줄이 커밋/PR 제목(한 줄, 60자 이내, 한국어), 아래에 ## 바꾼 내용 · ## 검증 · ## 확인이 필요한 점.
${to >= plan.steps.length ? `- 마지막 단계이니 \`.devloop/repro.json\` 에 인수 조건 검증 절차(api 배열·steps)를 계획의 acceptance 를 바탕으로 실제 구현에 맞게 씁니다. 저장 대상 식별자는 미리보기 전용 값으로.\n` : ''}- git 커밋·푸시는 하지 마세요(서버가 합니다). .devloop/ 아래는 커밋되지 않습니다.`;
  },
};
