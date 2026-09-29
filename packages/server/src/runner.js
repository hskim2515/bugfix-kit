import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { makeExec } from './exec.js';
import { GitHub } from './github.js';
import { GitLab } from './gitlab.js';
import { runClaudeStream, sessionIdOf, resultTextOf, claudeSummary } from './claude.js';
import { writeReportFiles } from './reportFiles.js';
import { Shots, mergeShots } from './shots.js';
import { firstLine, hhmmss, notBlank, nowIso, orDash, parseResult, sleep, stamp } from './util.js';

const DEFAULT_TOOLS = [
  'Read', 'Edit', 'Write', 'Glob', 'Grep', 'MultiEdit',
  'Bash(npm run build)', 'Bash(npm run build:*)', 'Bash(npm install:*)', 'Bash(npx:*)', 'Bash(cd:*)', 'Bash(node:*)',
  'Bash(git diff:*)', 'Bash(git status:*)', 'Bash(git log:*)', 'Bash(git show:*)', 'Bash(git blame:*)',
  'Bash(ls:*)', 'Bash(cat:*)', 'Bash(head:*)', 'Bash(tail:*)', 'Bash(grep:*)', 'Bash(find:*)', 'Bash(wc:*)', 'Bash(sed -n:*)',
];
const READ_ONLY_TOOLS = [
  'Read', 'Glob', 'Grep', 'Bash(git diff:*)', 'Bash(git status:*)', 'Bash(git log:*)', 'Bash(git show:*)',
  'Bash(cat:*)', 'Bash(head:*)', 'Bash(tail:*)', 'Bash(grep:*)', 'Bash(ls:*)', 'Bash(find:*)', 'Bash(wc:*)',
];
const CONFLICT_TOOLS = [
  'Read', 'Edit', 'Write', 'MultiEdit', 'Glob', 'Grep',
  'Bash(git diff:*)', 'Bash(git status:*)', 'Bash(git log:*)', 'Bash(git show:*)', 'Bash(git add:*)',
  'Bash(cat:*)', 'Bash(head:*)', 'Bash(tail:*)', 'Bash(grep:*)', 'Bash(sed -n:*)',
  'Bash(node --check:*)', 'Bash(npm test:*)',
];
const GIT_ID = ['-c', 'user.name=Claude Bugfix', '-c', 'user.email=claude-bugfix@bugfix-kit.local'];

/**
 * 버그 리포트를 Claude Code 로 고쳐 브랜치를 푸시하고 PR 을 만든 뒤 병합까지 한다.
 *
 * 한 번에 하나씩(프로세스 전체 단일 큐 - Claude 를 동시에 여러 개 돌리지 않는다). 작업마다:
 *   1. {workDir}/{project}/repo 가 없으면 clone, 있으면 fetch → {workDir}/{project}/jobs/{id} 에 base 브랜치 worktree
 *   2. 리포트를 worktree/.bugfix/ 에 파일로 푼다
 *   3. claude -p <프롬프트> (stream-json 으로 진행 로그) - Claude 는 .bugfix/result.md 에 결과를 쓴다
 *   4. 변경이 없으면 FAILED. 있으면 바뀐 모듈의 verify 명령으로 검증
 *   5. 브랜치 claude/bugfix-{id}-{시각} 커밋·푸시 → PR → PR_OPENED
 *   6. (autoMerge) base 가 움직였으면 합쳐 재검증(충돌은 Claude 가 해결) → 푸시 → 병합 → 실제 반영 확인 → MERGED
 *   7. worktree 정리
 * 단계마다 fixLog 에 한 줄씩 남겨 화면에서 진행을 볼 수 있다. 토큰은 git 의 http.extraheader 로만 넘긴다.
 */
export class Runner {
  constructor(cfg, store, log = console) {
    this.cfg = cfg;
    this.store = store;
    this.log = log;
    // 종류별 레인 - 수정(fix)·제안(insights)·지식(knowledge)은 서로 기다리지 않는다. 레인 안에서는 한 번에 하나.
    this.lanes = new Map();
    this.mutexes = new Map();
    this.execs = new Map();
  }
  lane(name) {
    if (!this.lanes.has(name)) this.lanes.set(name, { queue: [], pending: 0, busy: false });
    return this.lanes.get(name);
  }
  /** 이 레인에 사람이 넣은(낮은 우선순위가 아닌) 작업이 기다리고 있나 - 루프가 다음 작업을 넣기 전에 본다 */
  userPending(laneName) { return this.lane(laneName).queue.some((q) => !q.low); }
  /** 대기 중인 작업 수(전체) - /health 와 콘솔이 본다 */
  get pending() { let n = 0; for (const l of this.lanes.values()) n += l.pending; return n; }
  get busy() { for (const l of this.lanes.values()) if (l.busy) return true; return false; }
  laneState() { const o = {}; for (const [k, l] of this.lanes) o[k] = { pending: l.pending, busy: l.busy, low: l.queue.filter((q) => q.low).length }; return o; }
  /** 같은 키의 작업이 겹치지 않게 - 공유 저장소의 git 조작·node_modules 캐시처럼 레인이 달라도 같은 디스크를 만지는 곳에 */
  async mutex(key, fn) {
    const prev = this.mutexes.get(key) || Promise.resolve();
    let release;
    const cur = new Promise((r) => { release = r; });
    const chain = prev.then(() => cur);
    this.mutexes.set(key, chain);
    await prev;
    try { return await fn(); }
    finally { release(); if (this.mutexes.get(key) === chain) this.mutexes.delete(key); }
  }

  ex(project) {
    if (!this.execs.has(project.name)) this.execs.set(project.name, makeExec(this.cfg.server, project, this.log));
    return this.execs.get(project.name);
  }
  gh(project) { return gitClient(project, this.cfg, this.log); }
  paths(project, id) {
    const root = path.join(this.cfg.server.workDir, project.name);
    // 리포트마다 고정 경로 - Claude 세션은 작업 디렉터리에 묶이므로(--resume) 후속 대화 때 같은 경로를 써야 한다
    return { root, repo: path.join(root, 'repo'), jobs: path.join(root, 'jobs'), wt: path.join(root, 'jobs', String(id)), cache: path.join(root, 'cache') };
  }

  // ── 상태·로그 ────────────────────────────────────────────────────────────
  async logLine(project, id, line) {
    const stamped = `${hhmmss()}  ${line}`;
    try { await this.store.update(project.name, id, (c) => ({ ...c, fixLog: (c.fixLog || '') + stamped + '\n', fixUpdatedAt: nowIso() })); }
    catch (e) { this.log.warn('[bugfix] fixLog 기록 실패:', e.message); }
    this.log.info(`[bugfix ${project.name}#${id}] ${line}`);
  }
  /** fixStatus 등 부분 갱신 (null 값은 건너뜀) */
  async updateFix(project, id, patch) {
    let before = null;
    const after = await this.store.update(project.name, id, (c) => {
      before = c;
      const p = typeof patch === 'function' ? patch(c) : patch;
      const clean = Object.fromEntries(Object.entries(p).filter(([, v]) => v !== undefined));
      return { ...c, ...clean, fixUpdatedAt: nowIso() };
    });
    // 상태가 바뀌었으면 알림 (실패해도 작업은 계속)
    if (after && before && after.fixStatus !== before.fixStatus) this.notifyFix(project, before, after).catch(() => {});
    return after;
  }
  async notifyFix(project, before, r) {
    if (!this.notifier) return;
    const id = r.bugReportId;
    const head = `#${id} ${firstLine(r.fixSummary || r.problem || '', 80)}`;
    const ev = { READY: 'fix.ready', PR_OPENED: 'fix.pr', MERGED: 'fix.merged', FAILED: 'fix.failed' }[r.fixStatus];
    if (!ev) return;
    const lines = [head];
    if (r.fixStatus === 'READY') lines.push(r.fixPushed ? `원격 브랜치 ${r.fixBranch} (PR 없음)` : `이 서버에만 보관 · 브랜치 ${r.fixBranch}`, r.fixVersion ? `버전 v${r.fixVersion} - 콘솔 버전 탭에서 미리보기·원격으로 보내기` : '');
    if (r.fixStatus === 'PR_OPENED') lines.push(`PR/MR: ${r.fixPrUrl || '-'}`);
    if (r.fixStatus === 'MERGED') lines.push(`${project.baseBranch} @ ${(r.fixMergeSha || '').slice(0, 8)} - 배포 추적 중`);
    if (r.fixStatus === 'FAILED') lines.push(firstLine(r.fixSummary || '', 200));
    await this.notifier.send(project, ev, { title: `${({ READY: '수정본 준비', PR_OPENED: 'PR/MR 생성', MERGED: '병합 완료', FAILED: '수정 실패' })[r.fixStatus]} - ${head}`, lines, url: r.fixStatus === 'PR_OPENED' ? r.fixPrUrl : '', level: r.fixStatus === 'FAILED' ? 'bad' : r.fixStatus === 'MERGED' ? 'ok' : 'info', data: { reportId: id, fixStatus: r.fixStatus, prUrl: r.fixPrUrl, version: r.fixVersion } });
  }
  async appendChat(project, id, role, text) {
    await this.store.update(project.name, id, (c) => {
      let arr = [];
      try { arr = c.fixChat ? JSON.parse(c.fixChat) : []; } catch { arr = []; }
      arr.push({ role, text, at: nowIso() });
      return { ...c, fixChat: JSON.stringify(arr), fixUpdatedAt: nowIso() };
    });
  }

  // ── 큐 ──────────────────────────────────────────────────────────────────
  /**
   * 레인 큐에 넣는다. low=true(루프가 만든 작업)는 사람이 넣은 작업 뒤로 - 나중에 들어온 사람 작업이 앞지른다.
   * 돌려주는 값은 이 작업 앞에 있는 개수(등록 시점).
   */
  submit(project, id, job, onError, laneName = 'fix', { low = false } = {}) {
    const lane = this.lane(laneName);
    const item = { project: project.name, id, job, onError, low, at: Date.now() };
    const ahead = lane.queue.length + (lane.busy ? 1 : 0);
    lane.queue.push(item);
    lane.pending = lane.queue.length;
    this.pump(lane);
    return ahead;
  }
  pump(lane) {
    if (lane.busy || !lane.queue.length) return;
    // 사람 작업(low=false) 먼저, 같은 등급이면 먼저 들어온 것
    let idx = 0;
    for (let i = 1; i < lane.queue.length; i++) if (!lane.queue[i].low && lane.queue[idx].low) { idx = i; break; }
    const [item] = lane.queue.splice(idx, 1);
    lane.pending = lane.queue.length;
    lane.busy = true;
    (async () => {
      try { await item.job(); }
      catch (e) { this.log.error(`[bugfix ${item.project}#${item.id}] 실패`, e); try { await item.onError(e); } catch { /* */ } }
      finally { lane.busy = false; this.pump(lane); }
    })();
  }

  async enqueue(project, id, { low = false } = {}) {
    const ahead = this.submit(project, id, () => this.run(project, id), async (e) => {
      await this.logLine(project, id, `✗ 실패: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: `실패: ${firstLine(e.message, 200)}` });
    }, 'fix', { low });
    if (ahead > 0) await this.logLine(project, id, `▶ 대기열 등록 (앞에 수정 ${ahead}건, 수정은 한 번에 하나씩 실행${low ? ' · 루프 작업이라 사람 요청이 먼저' : ''})`);
  }

  async enqueueFollowUp(project, id, message, mode) {
    // 큐에 넣는 순간 QUEUED 로 - 앞 작업이 끝날 때까지 뷰어가 '진행 중' 으로 보이고 같은 리포트에 중복 요청이 막힌다
    const before = await this.store.get(project.name, id);
    const prevStatus = before?.fixStatus ?? null;
    await this.updateFix(project, id, { fixStatus: 'QUEUED' });
    const ahead = this.submit(project, id, async () => {
      const r = await this.store.get(project.name, id);
      if (!r) throw new Error(`리포트 없음: ${id}`);
      await this.updateFix(project, id, { fixStatus: 'RUNNING' });
      await this.runFollowUp(project, { ...r, fixStatus: prevStatus }, message, mode === 'change');
    }, async (e) => {
      await this.logLine(project, id, `✗ 후속 대화 실패: ${firstLine(e.message, 300)}`);
      await this.appendChat(project, id, 'assistant', `(실패) ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: !prevStatus || ['RUNNING', 'QUEUED'].includes(prevStatus) ? 'FAILED' : prevStatus });
    });
    await this.logLine(project, id, `▶ 대기열 등록${ahead > 0 ? ` (앞에 ${ahead}건, 한 번에 하나씩 실행)` : ''}`);
  }

  // ── 본 작업 ─────────────────────────────────────────────────────────────
  async run(project, id) {
    const r = await this.store.get(project.name, id);
    if (!r) throw new Error(`리포트 없음: ${id}`);
    await this.updateFix(project, id, { fixStatus: 'RUNNING' });
    await this.logLine(project, id, '▶ 시작');
    const ex = this.ex(project);
    const gh = this.gh(project);
    const base = project.baseBranch;
    const { repo, jobs, wt } = this.paths(project, id);
    const branch = `claude/bugfix-${id}-${stamp()}`;
    const auth = gh.gitAuthHeader();
    const L = (s) => this.logLine(project, id, s);

    await this.prepareRepo(project, ex, auth, L);
    if (!await this.fetch(project, ex, auth, [base])) throw new Error(`origin/${base} 를 받지 못했습니다`);
    await this.freshWorktree(ex, repo, jobs, wt, `origin/${base}`);
    await L(`작업 사본 준비: ${base} @ ${(await ex.exec(wt, 1, ['git', 'rev-parse', '--short', 'HEAD'])).trim()}`);

    try {
      await writeReportFiles(path.join(wt, '.bugfix'), r);
      const kg = await this.knowledge?.writeFor(project, path.join(wt, '.bugfix'), r).catch(() => false);
      await L(`리포트 자료 준비 (.bugfix/)${kg ? ' + 지식 그래프 관련 부분' : ''}`);
      await this.prepareNodeModules(project, ex, wt, L);

      await L(`Claude Code 실행 중… (최대 ${this.cfg.server.timeoutMinutes}분)`);
      const out = await this.claude(project, ex, id, wt, this.cfg.server.timeoutMinutes,
        ['-p', this.prompt(project, r), '--max-turns', String(Math.max(10, this.cfg.server.maxTurns)), '--permission-mode', 'acceptEdits', '--allowedTools', this.allowedTools(project).join(',')]);
      await this.updateFix(project, id, { fixSessionId: sessionIdOf(out) });
      await L(`Claude 종료 (${claudeSummary(out)})`);

      await this.revertProtected(project, ex, wt, L);
      const changed = (await ex.exec(wt, 1, ['git', 'status', '--porcelain'])).trim();
      if (!changed) {
        const reason = await readIfExists(path.join(wt, '.bugfix/result.md'));
        const lib = /^#\s*라이브러리 문제/.test(reason.trim());
        await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: lib ? `${firstLine(reason, 120)} - 이 저장소가 아니라 해당 패키지 저장소에서 고쳐야 합니다 (진행 로그의 결과 참고)` : `Claude 가 코드를 바꾸지 않았습니다. ${firstLine(reason, 200)}` });
        await L(`✗ 변경 없음 - 결과:\n${reason.trim().slice(0, 1500)}`);
        return;
      }
      await L(`변경 파일:\n${changed}`);
      const mods = this.changedModules(project, changed);
      await L(`검증(${mods.map((m) => m.name).join(' · ') || '규칙 없음'})…`);
      await this.verify(project, ex, wt, mods);
      await L('✓ 검증 통과');
      const check = await this.frontCheck(project, ex, id, wt, mods);

      const result = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
      const summary = result.title || `버그 #${id} 수정`;
      await this.saveSuggestions(project, id, result.body, changed);
      const commitMsg = `fix: ${summary} (버그 #${id})\n\n${result.body || ''}\n\n버그 리포트 #${id}\n\nCo-Authored-By: Claude <noreply@anthropic.com>`;
      await ex.exec(wt, 1, ['git', 'checkout', '-b', branch]);
      await ex.exec(wt, 1, ['git', 'add', '-A']);
      await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '-q', '-F', '-'], { stdin: commitMsg });
      await this.updateFix(project, id, { fixBranch: branch, fixSummary: summary, fixPushed: false });
      const n = await this.recordVersion(project, id, ex, wt, branch, base, summary, L);
      const repro = await this.afterFix(project, id, ex, wt, branch, base, summary, n, mods, sessionIdOf(out));
      // 보고자·문제 원문은 저장소를 보는 모든 사람에게 공개되므로 PR 본문에 넣지 않는다 - 번호로 앱 안에서 찾아본다
      const latest = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
      const prBody = `버그 리포트 #${id} (앱의 버그 리포트 화면에서 확인)\n\n${latest.body || result.body || ''}${check ? `\n\n## 화면 확인(front-check)\n${check}` : ''}${repro.ran ? `\n\n## 재현 검증\n${repro.passed ? '✓ 통과' : '✗ 실패'} (${repro.rounds}회)\n${repro.note}` : ''}\n\n---\n이 PR 은 버그 리포트 화면의 'Claude 에게 수정 요청' 으로 bugfix-kit 이 Claude Code 를 돌려 만들었습니다. `;
      await this.deliver(project, ex, gh, id, wt, branch, auth, { summary: latest.title || summary, prBody, existingPr: null }, mods);
    } finally {
      await this.removeWorktree(ex, repo, wt);
    }
  }

  // ── 후속 대화: 같은 세션을 이어 질문(ask) 또는 추가 수정(change) ───────────
  async runFollowUp(project, r, message, allowChange) {
    const id = r.bugReportId;
    let prevStatus = r.fixStatus;
    const ex = this.ex(project);
    const gh = this.gh(project);
    const base = project.baseBranch;
    const { repo, jobs, wt } = this.paths(project, id);
    const auth = gh.gitAuthHeader();
    const L = (s) => this.logLine(project, id, s);
    await L(`▶ 후속 ${allowChange ? '추가 요청' : '질문'}: ${firstLine(message, 120)}`);

    // 코드 상태: PR 이 열려 있으면 그 브랜치, 아니면 base(병합됐으면 그 안에 수정이 들어 있다)
    let prOpen = prevStatus === 'PR_OPENED' && notBlank(r.fixBranch);
    // ⚠️ 저장된 PR_OPENED 는 오래됐을 수 있다(사람이 GitHub 에서 직접 병합·닫음). 이미 병합된 PR 번호를 다시 쓰면
    //    GitHub 가 예전 병합 sha 를 돌려줘 "병합 완료" 로 착각하고 실제로는 base 에 아무것도 안 들어간다
    if (prOpen && r.fixPrNumber != null) {
      try {
        const st = await gh.getPullRequest(r.fixPrNumber);
        if (st.merged || st.state !== 'open') {
          await L(`기존 PR #${r.fixPrNumber} 은 이미 ${st.merged ? '병합됨' : '닫힘'} - ${base} 에서 새 브랜치로 시작`);
          prOpen = false;
          prevStatus = st.merged ? 'MERGED' : 'FAILED';
        }
      } catch (e) { await L(`PR 상태 확인 실패(브랜치를 이어 씁니다): ${firstLine(e.message, 120)}`); }
    }
    await this.prepareRepo(project, ex, auth, L);
    if (!await this.fetch(project, ex, auth, [base])) throw new Error(`origin/${base} 를 받지 못했습니다`);
    let startRef = `origin/${base}`;
    // 이어 쓸 브랜치: PR 이 열려 있으면 원격 브랜치, 아니면(보관만·푸시만 모드) 키트 저장소에 남은 브랜치
    let cont = false;
    if (prOpen) {
      if (await this.fetch(project, ex, auth, [r.fixBranch], { prune: false })) { startRef = `origin/${r.fixBranch}`; cont = true; }
      else prOpen = false;
    } else if (r.fixStatus === 'READY' && notBlank(r.fixBranch)) {
      if (r.fixPushed && await this.fetch(project, ex, auth, [r.fixBranch], { prune: false })) { startRef = `origin/${r.fixBranch}`; cont = true; }
      else if ((await ex.execRc(repo, 1, ['git', 'rev-parse', '--verify', '-q', `refs/heads/${r.fixBranch}`])) === 0) { startRef = r.fixBranch; cont = true; }
      if (cont) await L(`보관된 수정본 브랜치 이어서: ${r.fixBranch}`);
    }
    await this.freshWorktree(ex, repo, jobs, wt, startRef);
    if (cont) await ex.exec(wt, 1, ['git', 'checkout', '-q', '-B', r.fixBranch, startRef]);
    await writeReportFiles(path.join(wt, '.bugfix'), r);
    await this.knowledge?.writeFor(project, path.join(wt, '.bugfix'), r).catch(() => false);
    await this.prepareNodeModules(project, ex, wt, L, true);

    try {
      const allowed = allowChange ? this.allowedTools(project) : READ_ONLY_TOOLS;
      const preface = allowChange
        ? '사용자의 추가 요청입니다. 앞서 고친 내용 위에 아래 요청을 반영하세요. 고친 뒤 검증 명령을 통과시키고, '
          + '`.bugfix/result.md` 를 같은 형식(# 한 줄 요약 / ## 원인 / ## 고친 내용 / ## 검증 / ## 확인이 필요한 점 / ## 추천 개선)으로 다시 쓰세요. '
          + '## 추천 개선 은 이번 요청으로 끝난 항목은 빼고 남은 것만 적습니다. `.bugfix/repro.json`(재현 절차: api·steps, 저장 대상 식별자는 미리보기 전용 값)도 맞게 두세요 - 고친 뒤 서버가 미리보기에서 그 절차를 돌려 확인합니다. '
          + 'git 커밋·푸시는 하지 마세요. 마지막 답변은 무엇을 바꿨는지 한국어로 간단히.\n\n요청: '
        : '사용자의 질문입니다. 코드를 바꾸지 말고 한국어로 간결하게 답하세요. 필요하면 파일을 읽어 근거를 대세요.\n\n질문: ';
      let out = await this.claudeResume(project, ex, id, wt, r.fixSessionId, preface + message, allowed, allowChange ? 40 : 20);
      let sid = sessionIdOf(out);
      if (sid) await this.updateFix(project, id, { fixSessionId: sid });
      let answer = resultTextOf(out);
      // 위임·대기로 끝난 답(하위 에이전트를 기다리다 턴이 끝남)이면 한 번 더 이어서 결론을 받는다
      if (/delegat|subagent|will resume|waiting for|기다리|위임/i.test(answer) && answer.length < 600) {
        await L('답이 "기다리는 중" 으로 끝나 이어서 결론을 요청합니다');
        out = await this.claudeResume(project, ex, id, wt, sid || r.fixSessionId, '기다리지 말고 직접 확인해서 지금 결론을 한국어로 답하세요. 하위 에이전트는 쓰지 마세요.' + (allowChange ? ' 고칠 것이 있으면 바로 고치세요.' : ''), allowed, allowChange ? 30 : 15);
        sid = sessionIdOf(out) || sid;
        if (sid) await this.updateFix(project, id, { fixSessionId: sid });
        answer = resultTextOf(out);
      }
      await this.appendChat(project, id, 'assistant', notBlank(answer) ? answer : '(답변 없음)');
      await L(`Claude 답변: ${firstLine(answer, 200)}`);

      await this.revertProtected(project, ex, wt, L);
      const changed = (await ex.exec(wt, 1, ['git', 'status', '--porcelain'])).trim();
      if (!allowChange || !changed) {
        if (changed) { await ex.exec(wt, 1, ['git', 'checkout', '--', '.']); await ex.exec(wt, 1, ['git', 'clean', '-fdq', '-e', '.bugfix']); await L('질문 모드 - 변경 되돌림'); }
        // 코드는 안 바꿨지만 재현 절차(.bugfix/repro.json)를 썼으면 보관된 버전으로 재현 검증만 돌린다 - 검증이 다시 고치면 그 커밋을 내보낸다
        if (allowChange && cont && r.fixVersion != null && (await readIfExists(path.join(wt, '.bugfix/repro.json')) || notBlank(r.fixReproSpec))) {
          await L(`코드 변경은 없지만 재현 절차가 있어 v${r.fixVersion} 으로 재현 검증만 합니다`);
          const before = (await ex.exec(wt, 1, ['git', 'rev-parse', 'HEAD'])).trim();
          const repro = await this.afterFix(project, id, ex, wt, r.fixBranch, base, r.fixSummary || `버그 #${id}`, r.fixVersion, [], sid || r.fixSessionId);
          const after = (await ex.exec(wt, 1, ['git', 'rev-parse', 'HEAD'])).trim();
          if (after !== before) {
            const latest = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
            const prBody = `버그 리포트 #${id} 재현 검증 뒤 수정 (앱의 버그 리포트 화면에서 확인)\n\n${latest.body || ''}\n\n## 재현 검증\n${repro.passed ? '✓ 통과' : '✗ 실패'} (${repro.rounds}회)\n${repro.note}\n\n---\n이 PR 은 bugfix-kit 의 재현 검증 루프가 만들었습니다.`;
            await this.deliver(project, ex, gh, id, wt, r.fixBranch, auth, { summary: latest.title || r.fixSummary, prBody, existingPr: prOpen && r.fixPrNumber != null ? { number: r.fixPrNumber, url: r.fixPrUrl } : null }, []);
            return;
          }
        }
        await this.updateFix(project, id, { fixStatus: prevStatus || 'FAILED' });
        return;
      }
      await L(`변경 파일:\n${changed}`);
      const mods = this.changedModules(project, changed);
      await L('검증…');
      await this.verify(project, ex, wt, mods);
      await L('✓ 검증 통과');
      const check = await this.frontCheck(project, ex, id, wt, mods);
      const result = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
      const summary = result.title || `버그 #${id} 추가 수정`;
      await this.saveSuggestions(project, id, result.body, changed);
      const commitMsg = `fix: ${summary} (버그 #${id} 추가 요청)\n\n${result.body || ''}\n\n요청: ${firstLine(message, 200)}\n\nCo-Authored-By: Claude <noreply@anthropic.com>`;
      const branch = cont ? r.fixBranch : `claude/bugfix-${id}-${stamp()}`;
      if (!cont) await ex.exec(wt, 1, ['git', 'checkout', '-q', '-b', branch]);
      await ex.exec(wt, 1, ['git', 'add', '-A']);
      await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '-q', '-F', '-'], { stdin: commitMsg });
      await this.updateFix(project, id, { fixBranch: branch, fixSummary: summary });
      const n = await this.recordVersion(project, id, ex, wt, branch, base, summary, L);
      const repro = await this.afterFix(project, id, ex, wt, branch, base, summary, n, mods, sid || r.fixSessionId);
      const latest = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
      const prBody = `버그 리포트 #${id} 추가 요청 (앱의 버그 리포트 화면에서 확인)\n\n${latest.body || result.body || ''}${check ? `\n\n## 화면 확인(front-check)\n${check}` : ''}${repro.ran ? `\n\n## 재현 검증\n${repro.passed ? '✓ 통과' : '✗ 실패'} (${repro.rounds}회)\n${repro.note}` : ''}\n\n---\n이 PR 은 버그 리포트 화면의 Claude 자동 수정(추가 요청)으로 bugfix-kit 이 만들었습니다.`;
      const existingPr = prOpen && r.fixPrNumber != null ? { number: r.fixPrNumber, url: r.fixPrUrl } : null;
      await this.deliver(project, ex, gh, id, wt, branch, auth, { summary: latest.title || summary, prBody, existingPr }, mods);
    } finally {
      await this.removeWorktree(ex, repo, wt);
    }
  }

  /** 수정 커밋 뒤: 재현 검증(켜져 있고 레시피가 있으면) 아니면 미리보기 자동 생성 */
  async afterFix(project, id, ex, wt, branch, base, summary, n, mods, sessionId) {
    const none = { ran: false, passed: null, rounds: 0, note: '' };
    if (n == null || !this.versions?.recipe(project)) return none;
    if (project.reproCheck !== false) {
      try { return await this.reproLoop(project, id, ex, wt, branch, base, summary, n, mods, sessionId); }
      catch (e) { await this.logLine(project, id, `재현 검증 오류(계속): ${firstLine(e.message, 200)}`); await this.updateFix(project, id, { fixRepro: JSON.stringify({ passed: null, rounds: 0, evidence: [], note: `재현 검증 오류: ${firstLine(e.message, 200)}` }) }); return none; }
    }
    if (project.previewAuto !== false) { await this.logLine(project, id, `미리보기 v${n} 자동 생성 예약`); this.versions.start(project, n, { low: true }).catch(() => {}); }
    return none;
  }

  /** HEAD 를 버전으로 기록(같은 sha 면 기존 번호). 돌려주는 값은 버전 번호(없으면 null) */
  async recordVersion(project, id, ex, wt, branch, base, summary, L) {
    if (!this.versions) return null;
    try {
      const sha = (await ex.exec(wt, 1, ['git', 'rev-parse', 'HEAD'])).trim();
      const dup = (await this.versions.list(project.name)).find((v) => v.sha === sha);
      if (dup) { await L(`버전 v${dup.n} (${sha.slice(0, 8)}) 그대로`); return dup.n; }
      const baseSha = (await ex.execOut(wt, 1, ['git', 'merge-base', 'HEAD', `origin/${base}`])).trim() || (await ex.execOut(wt, 1, ['git', 'rev-parse', `origin/${base}`])).trim();
      const files = (await ex.execOut(wt, 1, ['git', 'diff', '--name-only', `${baseSha}..HEAD`])).trim().split(/\r?\n/).filter(Boolean);
      const n = await this.versions.record(project, { reportId: id, branch, sha, base: baseSha, summary, files });
      await this.updateFix(project, id, { fixVersion: n });
      await L(`버전 v${n} 기록 (${sha.slice(0, 8)}) - 콘솔 '버전' 탭에서 미리보기·diff`);
      return n;
    } catch (e) { await L(`버전 기록 실패(계속): ${firstLine(e.message, 150)}`); return null; }
  }

  /**
   * 재현 검증: 수정본 미리보기를 띄우고 신고된 요청(api)·화면 절차(steps)를 다시 돌려 고쳐졌는지 본다.
   * 여전히 실패하면 응답·미리보기 백엔드 로그·절차 실패를 증거로 Claude 를 이어 돌려 다시 고치고(최대 reproRounds 회) 검증·커밋·버전 갱신·미리보기 재시작.
   * 돌려주는 값: { ran, passed, rounds, note }
   */
  async reproLoop(project, id, ex, wt, branch, base, summary, n, mods, sessionId) {
    const L = (s) => this.logLine(project, id, s);
    const out = { ran: false, passed: null, rounds: 0, note: '' };
    if (!this.versions || n == null) return out;
    const recipe = this.versions.recipe(project);
    if (!recipe) { await L('재현 검증 건너뜀 - 미리보기 레시피가 없습니다(프로젝트 탭)'); return out; }
    const r = await this.store.get(project.name, id);
    let repro = null;
    try { repro = normRepro(JSON.parse(await readIfExists(path.join(wt, '.bugfix/repro.json')) || 'null')); } catch (e) { await L(`repro.json 을 읽지 못했습니다(${firstLine(e.message, 80)}) - 이전 절차·신고 요청으로 대체`); repro = null; }
    // 이번에 안 썼으면 지난번 절차(.bugfix 는 커밋되지 않으므로 리포트에 보관해 둔 것)
    if (!repro || (!repro.api.length && !repro.steps.length)) { try { repro = normRepro(JSON.parse(r.fixReproSpec || 'null')); } catch { repro = null; } }
    // 그것도 없으면 신고된 실패 요청으로 만든다
    if (!repro || (!repro.api.length && !repro.steps.length)) {
      let net = []; try { net = JSON.parse(r.networkLogs || '[]'); } catch { /* */ }
      const bad = net.filter((x) => x && (x.error || (Number(x.status) >= 500) || (Number(x.status) >= 400 && ![401, 403, 404].includes(Number(x.status)))));
      const seen = new Set();
      const api = [];
      for (const x of bad.slice(-10)) {
        const key = `${x.method} ${String(x.url).split('?')[0]}`; if (seen.has(key)) continue; seen.add(key);
        let body = null; try { body = x.requestBody ? JSON.parse(x.requestBody) : null; } catch { body = x.requestBody || null; }
        const a = { method: x.method || 'GET', path: String(x.url), note: `신고된 ${x.status || x.error} 요청`, timeoutSec: 240 };
        if (body && typeof body === 'object' && body.__form) { a.contentType = 'multipart'; a.form = body.__form; if (body.__files) a.note += ` (파일 ${body.__files}개는 재현에서 빠짐)`; }
        else if (body && typeof body === 'object' && body.__urlencoded) { a.contentType = 'form'; a.form = body.__urlencoded; }
        else a.body = body;
        api.push(a);
      }
      repro = normRepro({ api, steps: [] });
    }
    if (!repro.api.length && !repro.steps.length) { await L('재현 검증 건너뜀 - 재현할 요청·절차가 없습니다(신고에 실패 요청이 없고 repro.json 도 비어 있음)'); return out; }
    await this.updateFix(project, id, { fixReproSpec: JSON.stringify(repro).slice(0, 20_000) });
    await L(`재현 절차: 요청 ${repro.api.length}건${repro.api.map((a) => ` · ${a.method} ${a.path}`).join('').slice(0, 300)} · 화면 절차 ${repro.steps.length}단계`);
    out.ran = true;
    const maxRounds = Number(project.reproRounds) > 0 ? Number(project.reproRounds) : 2;
    let sid = sessionId;
    for (let round = 1; round <= maxRounds + 1; round++) {
      await L(`▶ 재현 검증 ${round}회: 미리보기 v${n} 준비…`);
      await this.versions.start(project, n).catch((e) => { if (e.status !== 409) throw e; });
      const deadline = Date.now() + 15 * 60_000;
      let v;
      for (;;) { v = await this.versions.get(project.name, n); if (!['QUEUED', 'BUILDING', 'STARTING'].includes(v?.preview?.status)) break; if (Date.now() > deadline) break; await sleep(8000); }
      if (v?.preview?.status !== 'UP') { out.note = `미리보기가 뜨지 않아 재현 검증을 못 했습니다(${v?.preview?.status || '?'}: ${firstLine(v?.preview?.error || '', 120)})`; await L(`✗ ${out.note}`); return out; }
      const evid = [];
      let failed = false;
      // 1) API 재실행 - 사용자가 쓰는 경로 그대로(앱 프록시 → 워커 → 미리보기 백엔드). 앱 주소가 없거나 그 경로가 안 닿으면 백엔드로 직접
      const appUrl0 = this.notifier?.appUrl(project) || '';
      const publicBack = appUrl0 ? `${appUrl0}${String(v.preview.url || '').replace(/\/+$/, '')}/back` : '';
      const directBack = `http://${recipe.host}:${v.preview.port}`;
      const prefixes = [...new Set([project.restBase, '/rest', '/api', '/lhdt-rest', ''].filter((x) => x != null))];
      for (const a of repro.api.slice(0, 8)) {
        let p = String(a.path || '').replace(/^https?:\/\/[^/]+/, '');
        const m = p.match(/\/v\/[^/]+\/\d+\/back(\/.*)$/); if (m) p = m[1];
        if (a.query && typeof a.query === 'object') p += (p.includes('?') ? '&' : '?') + new URLSearchParams(Object.entries(a.query).map(([k, v]) => [k, typeof v === 'string' ? v : JSON.stringify(v)])).toString();
        const cands = [p, ...prefixes.filter((pf) => pf && p.startsWith(pf + '/')).map((pf) => p.slice(pf.length))];
        let res = null;
        for (const [via, backBase] of [['공개 경로', publicBack], ['백엔드 직접', directBack]]) {
          if (!backBase) continue;
          for (const cp of [...new Set(cands)]) {
            try {
              const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), Math.min(600, Number(a.timeoutSec) || 120) * 1000);
              const { body, headers } = reqBody(a);
              const resp = await fetch(backBase + cp, { method: a.method, headers, body, signal: ctl.signal });
              clearTimeout(t);
              const text = (await resp.text().catch(() => '')).slice(0, 400);
              res = { path: cp, status: resp.status, text, via };
              if (resp.status !== 404) break;
            } catch (e) { res = { path: cp, status: 'ERR', text: e.message, via }; }
          }
          // 공개 경로가 아예 안 닿을 때(연결 실패·502/503 게이트웨이)만 백엔드 직접으로 - 500 은 그대로 실패로 친다
          if (res && res.status !== 'ERR' && ![502, 503, 504].includes(res.status)) break;
        }
        const ok = res && typeof res.status === 'number' && (a.expect?.status ? res.status === Number(a.expect.status) : res.status < (Number(a.expect?.statusLt) || 500));
        if (!ok) failed = true;
        evid.push(`${ok ? '✓' : '✗'} ${a.method} ${res?.path || p} (${res?.via || '-'}) → ${res?.status}${res?.text ? ` ${firstLine(res.text, 200)}` : ''}`);
      }
      // 2) 화면 절차 - front-check 로 공개 미리보기 주소에서
      if (repro.steps?.length) {
        const appUrl = this.notifier?.appUrl(project) || (project.cors || [])[0] || '';
        const url = appUrl ? `${appUrl}${v.preview.url}` : null;
        if (!url) evid.push('- 화면 절차: 앱 주소(프로젝트 탭)가 없어 건너뜀');
        else {
          try {
            const bin = path.join(path.dirname(new URL(import.meta.url).pathname), '..', '..', 'front-check', 'bin', 'front-check.mjs');
            const outDir = path.join(wt, '.bugfix', 'repro-out');
            const txt = await ex.exec(wt, 10, ['node', bin, 'check', '--url', url, '--no-serve', '--json', '--out', outDir, '--steps', JSON.stringify(repro.steps.slice(0, 30))], { env: { ...process.env, ...(project.env || {}) } });
            const i = txt.indexOf('{'); const j = i >= 0 ? JSON.parse(txt.slice(i)) : null;
            const c = j?.collected || {};
            const bad = (j?.failures || []).length > 0 || (c.pageErrors || 0) > 0;
            if (bad) failed = true;
            evid.push(`${bad ? '✗' : '✓'} 화면 절차: 절차 실패 ${(j?.failures || []).length} · 페이지 예외 ${c.pageErrors || 0} · 실패 요청 ${c.failedRequests || 0}`, ...(j?.failures || []).slice(0, 3).map((f) => `  - ${firstLine(f, 160)}`));
            await this.keepShots(project, id, j, wt, `재현 검증 ${round}회`).catch(() => []);
          } catch (e) { evid.push(`- 화면 절차 실행 실패: ${firstLine(e.message, 160)}`); }
        }
      }
      out.rounds = round;
      await L(`재현 검증 ${round}회 결과:\n${evid.join('\n')}`);
      if (!failed) { out.passed = true; out.note = evid.join('\n'); await L('✓ 재현 검증 통과 - 신고된 실패가 재현되지 않습니다'); await this.updateFix(project, id, { fixRepro: JSON.stringify({ passed: true, rounds: round, evidence: evid }) }); return out; }
      if (round > maxRounds) { out.passed = false; out.note = evid.join('\n'); await L(`✗ 재현 검증 실패 - ${maxRounds}회 다시 고쳤지만 여전히 실패합니다. 사람이 봐야 합니다`); await this.updateFix(project, id, { fixRepro: JSON.stringify({ passed: false, rounds: round, evidence: evid }) }); return out; }
      // 3) 증거 모아 다시 고치기
      const logs = (await ex.execOut(wt, 1, ['docker', 'logs', '--tail', '300', v.preview.container])).split(/\r?\n/);
      const errLines = logs.filter((l) => /exception|error|caused by|\tat /i.test(l)).slice(-60);
      const msg = `재현 검증 ${round}회에서 **여전히 실패**했습니다. 수정본을 실제로 띄워(미리보기 v${n}) 신고된 요청·절차를 다시 돌린 결과입니다:\n${evid.join('\n')}\n\n미리보기 백엔드 로그(오류 부분):\n${errLines.join('\n').slice(0, 6000) || '(오류 줄 없음)'}\n\n증상 은폐(오류 메시지만 고치기)가 아니라 **실제 원인**을 찾아 고치세요. 요청은 사용자가 쓰는 경로 그대로(앱 → bugfix-kit 프록시 → 미리보기 백엔드) 보냈으니, 백엔드 로그에 요청이 정상 파라미터로 도착했는지부터 보세요. 필요하면 로그의 스택트레이스를 따라가세요. 고친 뒤 검증 명령을 통과시키고 \`.bugfix/result.md\` 를 갱신하고, 재현 절차가 잘못됐으면 \`.bugfix/repro.json\` 도 고치세요. git 커밋은 하지 마세요.`;
      await L(`Claude 에게 증거를 주고 다시 고칩니다 (${round}/${maxRounds})…`);
      const o2 = await this.claudeResume(project, ex, id, wt, sid, msg, this.allowedTools(project), 40);
      sid = sessionIdOf(o2) || sid; if (sid) await this.updateFix(project, id, { fixSessionId: sid });
      await L(`Claude 답변: ${firstLine(resultTextOf(o2), 200)}`);
      await this.revertProtected(project, ex, wt, L);
      const changed = (await ex.exec(wt, 1, ['git', 'status', '--porcelain'])).trim();
      if (!changed) { out.passed = false; out.note = 'AI 가 더 고칠 곳을 찾지 못했습니다'; await L(`✗ ${out.note}`); await this.updateFix(project, id, { fixRepro: JSON.stringify({ passed: false, rounds: round, evidence: evid, note: out.note }) }); return out; }
      await L(`변경 파일:\n${changed}`);
      const mods2 = uniqBy([...mods, ...this.changedModules(project, changed)], (m) => m.name);
      await L('검증…'); await this.verify(project, ex, wt, mods2); await L('✓ 검증 통과');
      const result = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
      await this.saveSuggestions(project, id, result.body, (await ex.execOut(wt, 1, ['git', 'diff', '--name-only', `origin/${base}...HEAD`])).trim() + '\n' + changed);
      await ex.exec(wt, 1, ['git', 'add', '-A']);
      await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '-q', '-F', '-'], { stdin: `fix: ${result.title || summary} (버그 #${id} · 재현 검증 ${round}회 뒤 수정)\n\n${result.body || ''}\n\nCo-Authored-By: Claude <noreply@anthropic.com>` });
      const sha = (await ex.exec(wt, 1, ['git', 'rev-parse', 'HEAD'])).trim();
      const files = (await ex.execOut(wt, 1, ['git', 'diff', '--name-only', `origin/${base}...HEAD`])).trim().split(/\r?\n/).filter(Boolean);
      await this.versions.retag(project, n, sha, files);
      if (result.title) await this.updateFix(project, id, { fixSummary: result.title });
      await L(`버전 v${n} 을 새 커밋 ${sha.slice(0, 8)} 으로 갱신`);
    }
    return out;
  }

  // ── 내보내기: 프로젝트 delivery 모드만큼 (local 보관 · branch 푸시 · pr · merge) ─────────────
  async deliver(project, ex, gh, id, wt, branch, auth, { summary, prBody, existingPr }, mods, modeOverride = null) {
    const L = (s) => this.logLine(project, id, s);
    const base = project.baseBranch;
    const mode = modeOverride || project.delivery || 'merge';
    // 어느 모드든 커밋된 소스 상태는 키트가 버전으로 갖는다(태그 bugfix/v{n}) - 콘솔 '버전' 탭에서 미리보기·diff·내보내기
    await this.recordVersion(project, id, ex, wt, branch, base, summary, L);
    if (mode === 'local') {
      await this.updateFix(project, id, { fixStatus: 'READY', fixPushed: false });
      await L(`✓ 수정본 보관: 브랜치 ${branch} (키트 저장소 안에만 - 콘솔에서 '내보내기' 로 푸시·PR·병합)`);
      return;
    }
    await ex.exec(wt, 5, ['git', '-c', `http.extraheader=${auth}`, 'push', '-u', 'origin', branch]);
    await this.updateFix(project, id, { fixPushed: true });
    await L(`브랜치 푸시: ${branch}`);
    if (mode === 'branch') {
      await this.updateFix(project, id, { fixStatus: 'READY' });
      await L(`✓ 원격 브랜치까지 (PR 은 안 만듦 - 콘솔에서 '내보내기' 로 PR·병합)`);
      return;
    }
    const prTitle = `fix: ${summary} (버그 #${id})`;
    let pr = existingPr;
    if (pr) await L(`기존 PR 갱신: ${pr.url}`);
    else {
      pr = await gh.createPullRequest(prTitle, prBody + (mode === 'merge' ? '검증이 통과해 자동으로 병합됩니다.' : '검토 후 병합하세요.'), branch, base);
      await this.updateFix(project, id, { fixPrNumber: pr.number });
      await L(`✓ PR: ${pr.url}`);
    }
    await this.updateFix(project, id, { fixStatus: 'PR_OPENED', fixPrUrl: pr.url });
    if (mode === 'merge') await this.autoMerge(project, ex, gh, id, wt, branch, auth, pr, prTitle, mods);
  }

  // ── 자동 병합 ──────────────────────────────────────────────────────────
  async autoMerge(project, ex, gh, id, wt, branch, auth, pr, prTitle, mods) {
    const base = project.baseBranch;
    const L = (s) => this.logLine(project, id, s);
    try {
      await this.mutex(this.repoKey(project), () => ex.exec(wt, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', 'origin', base]));
      const behind = (await ex.exec(wt, 1, ['git', 'rev-list', '--count', `HEAD..origin/${base}`])).trim();
      if (behind !== '0') {
        await L(`${base} 가 ${behind}커밋 앞서 있어 합칩니다…`);
        const rc = await ex.execRc(wt, 5, ['git', ...GIT_ID, 'merge', '--no-edit', `origin/${base}`]);
        if (rc !== 0) {
          const conflicts = (await ex.exec(wt, 1, ['git', 'diff', '--name-only', '--diff-filter=U'])).trim();
          if (!conflicts) throw new Error('병합 실패(충돌 아님)');
          await L(`충돌 ${conflicts.split(/\r?\n/).length}개 파일 - Claude 가 해결 중…\n${conflicts}`);
          await this.claudeConflict(project, ex, id, wt, conflicts);
          const markers = await ex.execOut(wt, 1, ['git', 'grep', '-l', '-E', '^(<<<<<<<|=======|>>>>>>>)( |$)', '--', '.', ':!*.md', ':!.bugfix/*']);
          if (markers.trim()) throw new Error(`충돌 표시가 남아 있습니다:\n${markers}`);
          // Claude 가 표시는 다 지웠는데 git add 를 못 했으면(경로·권한) 우리가 한다 - 표시가 없으니 해결된 파일이다
          const left = (await ex.exec(wt, 1, ['git', 'diff', '--name-only', '--diff-filter=U'])).trim();
          if (left) await ex.exec(wt, 1, ['git', 'add', '--', ...left.split(/\r?\n/)]);
          const still = (await ex.exec(wt, 1, ['git', 'diff', '--name-only', '--diff-filter=U'])).trim();
          if (still) throw new Error(`충돌이 남아 있습니다:\n${still}`);
          await this.revertProtected(project, ex, wt, L, `origin/${base}`);
          await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '-q', '--no-edit']);
          await L('충돌 해결 완료');
        }
        // 합친 결과를 다시 검증 - 어느 쪽이든 손댔으면 다 본다
        const merged = (await ex.exec(wt, 1, ['git', 'diff', '--name-only', `origin/${base}...HEAD`])).trim();
        const all = uniqBy([...mods, ...this.changedModules(project, merged.split(/\r?\n/).map((f) => `M  ${f}`).join('\n'))], (m) => m.name);
        await L('합친 결과 재검증…');
        await this.verify(project, ex, wt, all);
        await ex.exec(wt, 5, ['git', '-c', `http.extraheader=${auth}`, 'push', '--force-with-lease', 'origin', branch]);
        await L('✓ 재검증 통과, 브랜치 갱신');
      }
      // 푸시 직후엔 GitHub 가 병합 가능 여부를 계산 중이라 곧바로 병합하면 405 - 계산을 기다리고 실패하면 몇 번 더.
      // 푸시 전 값(dirty)이 잠깐 남아 있으므로 PR head 가 우리 HEAD 와 같아진 뒤의 값만 믿는다
      const head = (await ex.exec(wt, 1, ['git', 'rev-parse', 'HEAD'])).trim();
      let st = await gh.waitMergeable(pr.number, 60, head);
      if (st.merged) throw new Error(`PR #${pr.number} 은 이미 병합된 PR 입니다 - 이번 변경은 들어가지 않았습니다. 새 PR 이 필요합니다.`);
      if (st.mergeable === false && st.mergeableState === 'dirty') {
        // 로컬에선 이미 origin/base 를 합쳐 충돌이 없다 - 캐시가 늦게 갱신된 것이니 조금 더 기다려 본다
        await L('저장소가 아직 충돌로 표시 - 재계산 대기…');
        await sleep(8000);
        st = await gh.waitMergeable(pr.number, 60, head);
      }
      if (st.mergeable === false) throw new Error(`저장소가 병합 불가로 판단: ${st.mergeableState}`);
      let sha = null;
      for (let attempt = 1; attempt <= 4 && !sha; attempt++) {
        try { sha = await gh.mergePullRequest(pr.number, prTitle); }
        catch (e) {
          if (attempt === 4 || (await gh.getPullRequest(pr.number)).merged) throw e;
          await L(`병합 재시도 ${attempt}/3 (${firstLine(e.message, 80)})`);
          await sleep(5000 * attempt);
        }
      }
      // 정말 들어갔는지 확인 - 우리 HEAD 가 base 의 조상이어야 한다
      await this.mutex(this.repoKey(project), () => ex.exec(wt, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', 'origin', base]));
      if ((await ex.execRc(wt, 1, ['git', 'merge-base', '--is-ancestor', 'HEAD', `origin/${base}`])) !== 0) {
        throw new Error(`GitHub 는 병합됐다고 했지만 ${base} 에 이번 커밋이 없습니다(응답 sha ${sha.slice(0, 8)})`);
      }
      await this.updateFix(project, id, { fixStatus: 'MERGED', status: 'RESOLVED', fixMergeSha: sha, fixMergedAt: nowIso(), fixDeploy: 'WATCHING' });
      await L(`✓ 병합 완료 ${base} @ ${sha.slice(0, 8)}`);
      // 코드가 바뀌었으니 지식 그래프도 따라 갱신 (같은 큐 뒤에 붙는다)
      this.knowledge?.afterMerge(project, `#${id} 병합`).catch(() => {});
      await gh.deleteBranch(branch);
      // 배포(GitHub Actions)는 큐를 막지 않고 따로 지켜본다 - 사용자에게 "끝까지" 는 배포까지다
      this.watchDeploy(project, gh, id, sha).catch((e) => this.log.warn(`[bugfix ${project.name}#${id}] 배포 추적 실패: ${e.message}`));
    } catch (e) {
      this.log.warn(`[bugfix ${project.name}#${id}] 자동 병합 실패`, e);
      await L(`✗ 자동 병합 실패 - PR 은 열려 있습니다: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: 'PR_OPENED' });
    }
  }

  /**
   * 병합 커밋으로 시작된 워크플로(배포)를 완료될 때까지 지켜보고 진행 로그에 남긴다. 최대 waitMin 분.
   * 워크플로가 하나도 안 잡히면(경로 필터 등) 그 사실도 남긴다. 큐와 무관하게 백그라운드로 돈다.
   */
  async watchDeploy(project, gh, id, sha, waitMin = 30) {
    const L = (s) => this.logLine(project, id, s);
    const done = (fixDeploy) => this.updateFix(project, id, { fixDeploy });
    const until = Date.now() + waitMin * 60_000;
    const seen = new Map();          // run id → 마지막으로 로그한 status
    let anyRun = false;
    await sleep(15_000);             // 워크플로가 만들어질 시간
    while (Date.now() < until) {
      const runs = await gh.listRuns(sha);
      for (const r of runs) {
        anyRun = true;
        const key = `${r.status}:${r.conclusion || ''}`;
        if (seen.get(r.id) === key) continue;
        seen.set(r.id, key);
        if (r.status === 'completed') await L(`${r.conclusion === 'success' ? '✓' : '✗'} 배포 ${r.name}: ${r.conclusion === 'success' ? '완료' : r.conclusion}${r.conclusion === 'success' ? '' : ` (${r.url})`}`);
        else await L(`배포 ${r.name}: ${r.status === 'queued' ? '대기 중' : '진행 중'}…`);
      }
      if (anyRun && runs.every((r) => r.status === 'completed')) {
        const ok = runs.every((r) => r.conclusion === 'success');
        await L(ok ? '✓ 배포 완료 - 개발서버에 반영됐습니다' : `✗ 배포 중 실패한 워크플로가 있습니다 - ${project.host === 'gitlab' ? 'GitLab CI' : 'GitHub Actions'} 를 확인하세요`);
        await done(ok ? 'DONE' : 'FAILED');
        this.notifier?.send(project, ok ? 'deploy.done' : 'deploy.failed', { title: `배포 ${ok ? '완료' : '실패'} - #${id}`, lines: runs.map((r) => `${r.name}: ${r.conclusion}`), url: ok ? '' : (runs.find((r) => r.conclusion !== 'success')?.url || ''), level: ok ? 'ok' : 'bad' }).catch(() => {});
        return;
      }
      if (!anyRun && Date.now() - (until - waitMin * 60_000) > 120_000) {
        await L('배포 워크플로가 시작되지 않았습니다 - 바뀐 경로가 배포 대상(paths)에 없거나 워크플로가 없는 저장소입니다');
        await done('NONE');
        return;
      }
      await sleep(30_000);
    }
    await L(`배포 추적 종료(${waitMin}분 경과) - ${project.host === 'gitlab' ? 'GitLab CI' : 'GitHub Actions'} 에서 확인하세요`);
    await done('TIMEOUT');
  }

  /**
   * 워커 재시작 뒤 끊긴 배포 추적을 잇는다 - 앱 안에서 도는 워커는 "병합 → 배포" 가 곧 자기 자신의 재시작이라
   * 추적이 매번 끊긴다. 병합 2시간 안쪽의 WATCHING 리포트를 이어서 지켜본다.
   */
  async resumeDeployWatch() {
    for (const project of Object.values(this.cfg.projects)) {
      let list = [];
      try { list = await this.store.list(project.name); } catch { continue; }
      for (const r of list) {
        if (r.fixStatus !== 'MERGED' || r.fixDeploy !== 'WATCHING' || !r.fixMergeSha) continue;
        const age = Date.now() - Date.parse(r.fixMergedAt || 0);
        if (!(age < 2 * 3600_000)) { await this.updateFix(project, r.bugReportId, { fixDeploy: 'TIMEOUT' }); continue; }
        await this.logLine(project, r.bugReportId, '워커가 다시 떠서 배포 추적을 이어갑니다…');
        this.watchDeploy(project, this.gh(project), r.bugReportId, r.fixMergeSha, Math.max(5, 30 - Math.floor(age / 60_000)))
          .catch((e) => this.log.warn(`[bugfix ${project.name}#${r.bugReportId}] 배포 추적 실패: ${e.message}`));
      }
    }
  }

  /**
   * 열려 있는 PR 을 정식 경로로 병합한다: base 와 합치고(충돌은 Claude) → 재검증 → 푸시 → 병합 → 실제 반영 확인.
   * 새로고침(fix-sync)이 autoMerge 프로젝트의 열린 PR 에 대해 부르고, 큐에서 하나씩 돈다.
   */
  /**
   * 되돌리기: 병합된 수정(fixMergeSha)을 revert 한 브랜치 claude/revert-{id}-{시각} 을 만들어 검증 → 푸시 → PR → (프로젝트가 자동 병합이면) 병합.
   * 원래 리포트는 REVERTED 로, 상태는 OPEN 으로 돌아간다. 보관만(local) 프로젝트라도 되돌리기는 원격에 가야 뜻이 있으니 최소 PR 까지.
   */
  async enqueueRevert(project, id, reason = '') {
    const r = await this.store.get(project.name, id);
    if (!r || r.fixStatus !== 'MERGED' || !notBlank(r.fixMergeSha)) throw Object.assign(new Error('병합된 수정만 되돌릴 수 있습니다(병합 커밋을 모르는 옛 리포트는 저장소에서 직접)'), { status: 409 });
    await this.updateFix(project, id, { fixStatus: 'QUEUED', fixRevertReason: reason });
    const ahead = this.submit(project, id, () => this.runRevert(project, id, reason), async (e) => {
      await this.logLine(project, id, `✗ 되돌리기 실패: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: 'MERGED' });
    });
    await this.logLine(project, id, `▶ 되돌리기 대기열 등록${ahead > 0 ? ` (앞에 ${ahead}건)` : ''}${reason ? ` - ${reason}` : ''}`);
  }
  async runRevert(project, id, reason) {
    const r = await this.store.get(project.name, id);
    const ex = this.ex(project);
    const gh = this.gh(project);
    const base = project.baseBranch;
    const auth = gh.gitAuthHeader();
    const { repo, jobs, wt } = this.paths(project, id);
    const L = (s) => this.logLine(project, id, s);
    await this.updateFix(project, id, { fixStatus: 'RUNNING' });
    await L(`▶ 되돌리기 시작: ${base} 의 ${r.fixMergeSha.slice(0, 8)} 를 revert`);
    await this.prepareRepo(project, ex, auth, L);
    if (!await this.fetch(project, ex, auth, [base])) throw new Error(`origin/${base} 를 받지 못했습니다`);
    await this.freshWorktree(ex, repo, jobs, wt, `origin/${base}`);
    const branch = `claude/revert-${id}-${stamp()}`;
    try {
      if ((await ex.execRc(wt, 1, ['git', 'cat-file', '-e', `${r.fixMergeSha}^{commit}`])) !== 0) throw new Error(`병합 커밋 ${r.fixMergeSha.slice(0, 8)} 이 ${base} 에 없습니다(강제 푸시로 사라졌나?)`);
      if ((await ex.execRc(wt, 1, ['git', 'merge-base', '--is-ancestor', r.fixMergeSha, 'HEAD'])) !== 0) throw new Error(`병합 커밋이 현재 ${base} 의 조상이 아닙니다 - 이미 되돌려졌거나 브랜치가 바뀌었습니다`);
      await ex.exec(wt, 1, ['git', 'checkout', '-q', '-b', branch]);
      // 병합 커밋이면 -m 1, 아니면(fast-forward·squash) 그냥 revert
      const parents = (await ex.execOut(wt, 1, ['git', 'rev-list', '--parents', '-n', '1', r.fixMergeSha])).trim().split(/\s+/).length - 1;
      const rc = await ex.execRc(wt, 2, ['git', ...GIT_ID, 'revert', '--no-edit', ...(parents > 1 ? ['-m', '1'] : []), r.fixMergeSha]);
      if (rc !== 0) { await ex.execOut(wt, 1, ['git', 'revert', '--abort']); throw new Error('revert 가 충돌했습니다 - 그 뒤의 변경과 겹칩니다. 저장소에서 직접 되돌리세요'); }
      const changed = (await ex.execOut(wt, 1, ['git', 'diff', '--name-only', `origin/${base}...HEAD`])).trim();
      if (!changed) throw new Error('되돌릴 변경이 없습니다');
      await L(`되돌린 파일:\n${changed}`);
      const mods = this.changedModules(project, changed.split(/\r?\n/).map((f) => `M  ${f}`).join('\n'));
      await this.prepareNodeModules(project, ex, wt, L, true);
      await L(`검증(${mods.map((m) => m.name).join(' · ') || '규칙 없음'})…`);
      await this.verify(project, ex, wt, mods);
      await L('✓ 검증 통과');
      await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '--amend', '-q', '-F', '-'], { stdin: `revert: 버그 #${id} 수정 되돌림 (${r.fixMergeSha.slice(0, 8)})\n\n${reason || ''}\n\n원래 수정: ${firstLine(r.fixSummary || '', 120)}\n\nCo-Authored-By: Claude <noreply@anthropic.com>` });
      await ex.exec(wt, 5, ['git', '-c', `http.extraheader=${auth}`, 'push', '-u', 'origin', branch]);
      await L(`브랜치 푸시: ${branch}`);
      const prTitle = `revert: 버그 #${id} 수정 되돌림`;
      const pr = await gh.createPullRequest(prTitle, `버그 리포트 #${id} 의 수정(${r.fixMergeSha.slice(0, 8)})을 되돌립니다.${reason ? `\n\n사유: ${reason}` : ''}\n\n---\nbugfix-kit 콘솔의 '되돌리기' 로 만들었습니다.`, branch, base);
      await L(`✓ 되돌리기 PR: ${pr.url}`);
      await this.updateFix(project, id, { fixRevertPrUrl: pr.url, fixRevertBranch: branch });
      if (project.delivery === 'merge') {
        await this.autoMerge(project, ex, gh, id, wt, branch, auth, pr, prTitle, mods);
        const after = await this.store.get(project.name, id);
        if (after.fixStatus === 'MERGED') {
          await this.updateFix(project, id, { fixStatus: 'REVERTED', status: 'OPEN', fixRevertedAt: nowIso(), fixRevertSha: after.fixMergeSha, fixMergeSha: r.fixMergeSha });
          await L('✓ 되돌림 병합 완료 - 리포트는 다시 OPEN');
          this.notifier?.send(project, 'fix.reverted', { title: `되돌림 병합 - #${id}`, lines: [firstLine(r.fixSummary || '', 80), reason], url: pr.url, level: 'warn' }).catch(() => {});
        }
      } else {
        await this.updateFix(project, id, { fixStatus: 'REVERTED', status: 'OPEN', fixRevertedAt: nowIso() });
        await L('되돌리기 PR 이 열렸습니다 - 병합은 사람이');
        this.notifier?.send(project, 'fix.reverted', { title: `되돌리기 PR - #${id}`, lines: [firstLine(r.fixSummary || '', 80), reason], url: pr.url, level: 'warn' }).catch(() => {});
      }
    } finally {
      await this.removeWorktree(ex, repo, wt);
    }
  }

  /** 내보내기·병합: mode 는 branch|pr|merge (기본 merge). READY(보관·푸시만) 리포트도 여기서 푸시·PR·병합까지 간다 */
  async enqueueMerge(project, id, mode = 'merge', { low = false } = {}) {
    const r = await this.store.get(project.name, id);
    if (!notBlank(r?.fixBranch) || !['READY', 'PR_OPENED', 'FAILED'].includes(r.fixStatus)) throw Object.assign(new Error('내보낼 수정본이 없습니다'), { status: 409 });
    if (r.fixStatus === 'FAILED' && r.fixPrNumber == null) throw Object.assign(new Error('내보낼 수정본이 없습니다'), { status: 409 });
    const prev = r.fixStatus;
    await this.updateFix(project, id, { fixStatus: 'QUEUED' });
    const ahead = this.submit(project, id, () => this.runMerge(project, id, mode), async (e) => {
      await this.logLine(project, id, `✗ 내보내기·병합 실패: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: prev === 'FAILED' ? 'PR_OPENED' : prev });
    }, 'fix', { low });
    await this.logLine(project, id, `▶ 내보내기(${mode}) 대기열 등록${ahead > 0 ? ` (앞에 ${ahead}건)` : ''}`);
  }

  async runMerge(project, id, mode = 'merge') {
    const r = await this.store.get(project.name, id);
    const gh = this.gh(project);
    const L = (s) => this.logLine(project, id, s);
    if (r.fixPrNumber != null) {
      const st = await gh.getPullRequest(r.fixPrNumber);
      if (st.merged) { await this.updateFix(project, id, { fixStatus: 'MERGED', status: 'RESOLVED' }); await L('✓ 이미 병합됨'); return; }
      if (st.state !== 'open') { await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: 'PR 이 병합되지 않고 닫혔습니다.' }); await L('✗ PR 이 닫힘'); return; }
    }
    await this.updateFix(project, id, { fixStatus: 'RUNNING' });
    await L(r.fixPrNumber != null ? `▶ PR #${r.fixPrNumber} 병합 시작` : `▶ 수정본 내보내기(${mode}) 시작: ${r.fixBranch}`);
    const ex = this.ex(project);
    const base = project.baseBranch;
    const auth = gh.gitAuthHeader();
    const { repo, jobs, wt } = this.paths(project, id);
    await this.prepareRepo(project, ex, auth, L);
    if (!await this.fetch(project, ex, auth, [base])) throw new Error(`origin/${base} 를 받지 못했습니다`);
    // 브랜치 위치: 푸시된 것은 원격, 보관만 한 것은 키트 저장소의 로컬 브랜치
    let ref = null;
    if ((r.fixPushed || r.fixPrNumber != null) && await this.fetch(project, ex, auth, [r.fixBranch], { prune: false })) ref = `origin/${r.fixBranch}`;
    else if ((await ex.execRc(repo, 1, ['git', 'rev-parse', '--verify', '-q', `refs/heads/${r.fixBranch}`])) === 0) ref = r.fixBranch;
    if (!ref) throw new Error(`수정본 브랜치 ${r.fixBranch} 를 찾지 못했습니다(원격에도 키트 저장소에도 없음)`);
    await this.freshWorktree(ex, repo, jobs, wt, ref);
    await ex.exec(wt, 1, ['git', 'checkout', '-q', '-B', r.fixBranch, ref]);
    try {
      const changed = (await ex.execOut(wt, 1, ['git', 'diff', '--name-only', `origin/${base}...HEAD`])).trim();
      const mods = this.changedModules(project, changed.split(/\r?\n/).map((f) => `M  ${f}`).join('\n'));
      await this.prepareNodeModules(project, ex, wt, L, true);
      if (r.fixPrNumber != null) {
        if (mode === 'merge') await this.autoMerge(project, ex, gh, id, wt, r.fixBranch, auth, { number: r.fixPrNumber, url: r.fixPrUrl }, `fix: ${orDash(r.fixSummary)} (버그 #${id})`, mods);
        else { await this.updateFix(project, id, { fixStatus: 'PR_OPENED' }); await L('PR 은 이미 있습니다 - 병합은 merge 모드로'); }
      } else {
        const prBody = `버그 리포트 #${id} (앱의 버그 리포트 화면에서 확인)\n\n${orDash(r.fixSummary)}\n\n---\n이 PR 은 bugfix-kit 콘솔의 '내보내기' 로 만들었습니다. `;
        await this.deliver(project, ex, gh, id, wt, r.fixBranch, auth, { summary: orDash(r.fixSummary), prBody, existingPr: null }, mods, mode);
      }
    } finally {
      await this.removeWorktree(ex, repo, wt);
    }
  }

  /** GitHub 의 PR 상태와 리포트 상태를 맞춘다 (뷰어 '새로고침'). PR 이 열려 있으면 병합도 다시 시도 */
  async syncWithGitHub(project, id) {
    const r = await this.store.get(project.name, id);
    if (!r) return null;
    // PR 이 있으면 상태가 FAILED(재시작 중단 등)라도 GitHub 기준으로 맞춘다
    if (r.fixPrNumber == null || !['PR_OPENED', 'FAILED'].includes(r.fixStatus)) return r;
    const gh = this.gh(project);
    const L = (s) => this.logLine(project, id, s);
    try {
      const st = await gh.getPullRequest(r.fixPrNumber);
      if (st.merged) {
        await this.updateFix(project, id, { fixStatus: 'MERGED', status: 'RESOLVED' });
        await L('✓ GitHub 에서 병합 확인');
        if (notBlank(r.fixBranch)) await gh.deleteBranch(r.fixBranch);
      } else if (st.state === 'closed') {
        await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: 'PR 이 병합되지 않고 닫혔습니다.' });
        await L('✗ PR 이 닫힘(미병합)');
      } else if (project.autoMerge && notBlank(r.fixBranch)) {
        // 바로 병합하지 않고 정식 경로(base 합치기 → 충돌 해결 → 재검증 → 병합)를 큐에 넣는다
        await this.enqueueMerge(project, id);
        return this.store.get(project.name, id);
      } else if (r.fixStatus === 'FAILED') {
        await this.updateFix(project, id, { fixStatus: 'PR_OPENED' });
      }
    } catch (e) {
      await L(`GitHub 상태 확인 실패: ${firstLine(e.message, 150)}`);
    }
    return this.store.get(project.name, id);
  }

  // ── Claude ──────────────────────────────────────────────────────────────
  claude(project, ex, id, wt, timeoutMin, args) {
    const cmd = [this.cfg.server.claudeBin || 'claude', ...args];
    if (notBlank(this.cfg.server.model)) cmd.push('--model', this.cfg.server.model);
    return runClaudeStream(ex, wt, timeoutMin, cmd, (line) => { this.logLine(project, id, `  ${line}`); });
  }

  /** 세션 이어 실행. 세션을 못 찾으면 새 세션으로 한 번 더 */
  async claudeResume(project, ex, id, wt, sessionId, prompt, allowed, maxTurns) {
    const tailArgs = ['--max-turns', String(maxTurns), '--permission-mode', 'acceptEdits', '--allowedTools', allowed.join(',')];
    const timeout = Math.max(5, Math.floor(this.cfg.server.timeoutMinutes / 2));
    if (notBlank(sessionId)) {
      try { return await this.claude(project, ex, id, wt, timeout, ['-p', '--resume', sessionId, prompt, ...tailArgs]); }
      catch (e) { this.log.warn(`[bugfix] 세션 이어가기 실패, 새 세션으로: ${firstLine(e.message, 200)}`); await this.logLine(project, id, '이전 세션을 못 찾아 새 세션으로 시작'); }
    }
    return this.claude(project, ex, id, wt, timeout,
      ['-p', '이전 대화 세션을 찾지 못해 새로 시작합니다. `.bugfix/summary.md` 와 `.bugfix/result.md`(있으면), `git log -3` 로 앞서 한 일을 먼저 파악하세요.\n\n' + prompt, ...tailArgs]);
  }

  async claudeConflict(project, ex, id, wt, conflicts) {
    const prompt = `이 작업 사본에서 \`git merge origin/${project.baseBranch}\` 를 하다가 충돌이 났습니다. 충돌 파일:
${conflicts}

각 파일의 충돌 표시(<<<<<<<, =======, >>>>>>>)를 보고 양쪽 변경의 의도를 모두 살리는 쪽으로 해결하세요.
HEAD 쪽은 이 브랜치의 버그 수정(.bugfix/summary.md 참고), 다른 쪽은 그사이 base 에 들어온 다른 사람의 변경입니다.
한쪽을 통째로 버리지 마세요. 현재 디렉터리가 작업 사본이므로 해결한 파일은 그냥 \`git add <상대경로>\` 로 표시하세요(\`git -C\` 나 절대경로는 허용되지 않습니다). \`node --check\`, \`npm test\` 는 쓸 수 있습니다. 커밋은 하지 마세요.
충돌 표시를 하나도 남기지 마세요. 해결 내용을 \`.bugfix/result.md\` 끝에 "## 충돌 해결" 절로 덧붙이세요.`;
    await this.claude(project, ex, id, wt, Math.max(5, Math.floor(this.cfg.server.timeoutMinutes / 2)),
      ['-p', prompt, '--max-turns', '30', '--permission-mode', 'acceptEdits', '--allowedTools', CONFLICT_TOOLS.join(',')]);
  }

  /** 추천 개선을 리포트에 둔다 - 뷰어가 목록으로 보여 주고, 누르면 그 줄을 추가 요청으로 보낸다. 실패해도 작업은 계속 */
  /** result.md 본문(원인·고친 내용·검증·확인 필요)과 바뀐 파일을 리포트에 남긴다 - 뷰어 '수정 결과' 에 보인다 */
  async saveSuggestions(project, id, body, changed = '') {
    try {
      const items = parseSuggestions(body);
      const files = String(changed || '').split(/\r?\n/).map((l) => l.trim().replace(/^[A-Z?! ]{1,3}\s+/, '')).filter(Boolean);
      await this.updateFix(project, id, { fixSuggestions: items.length ? JSON.stringify(items) : null, fixReport: notBlank(body) ? body.slice(0, 20000) : undefined, fixFiles: files.length ? JSON.stringify(files.slice(0, 100)) : undefined });
    } catch (e) { this.log.warn(`[bugfix ${project.name}#${id}] 수정 결과 저장 실패: ${e.message}`); }
  }

  /** 기본 도구 + 프로젝트 허용 도구 + 검증 명령의 첫 단어(./gradlew, mvn …) - Claude 가 고친 뒤 스스로 컴파일해 볼 수 있게(승인 요청으로 턴을 낭비하지 않게) */
  allowedTools(project) {
    const fromVerify = (project.modules || []).flatMap((m) => m.verify || []).map((c) => String(c).trim().split(/\s+/)[0]).filter((w) => w && !['sh', 'bash', 'sudo', 'docker', 'rm'].includes(w)).map((w) => `Bash(${w}:*)`);
    return [...new Set([...DEFAULT_TOOLS, ...fromVerify, ...(project.allowedTools || [])])];
  }

  prompt(project, r) {
    const mods = project.modules.length
      ? project.modules.map((m) => `  - \`${m.dir}\` (${m.name}): ${m.verify.length ? m.verify.map((v) => `\`${v}\``).join(' → ') : '검증 명령 없음'}`).join('\n')
      : '  - (모듈 규칙 없음 - 저장소 구조를 보고 판단하세요)';
    return `${project.description || `\`${project.githubRepo}\``} 저장소입니다.
사용자가 앱 안에서 신고한 버그 리포트 #${r.bugReportId} 를 고쳐 주세요. 이 작업은 서버에서 자동으로 돌고, 끝나면 사람이 검토할 PR 이 만들어집니다.

리포트 자료는 \`.bugfix/\` 에 있습니다 (수정하거나 커밋하지 마세요):
  - summary.md: 문제 · 재현 절차 · 기대 결과
  - screenshot.png: 신고 당시 화면 (있으면 반드시 열어 보세요)
  - context.json: 앱 상태(화면·메뉴·켜진 데이터 등)
  - knowledge.md (있으면): 프로젝트 지식 그래프 중 이 신고와 관련된 메뉴·기능·파일·API - 원인 파일을 찾을 때 먼저 보세요
  - frontend-logs.json / backend-logs.json / network-logs.json / mutation-log.json: 신고 직전 로그
    (이미 오류 위주로 추려 둔 것입니다. 앞쪽이 오류, 뒤쪽이 최근 순입니다)

토큰을 아끼세요: 스크린샷은 한 번만 보고, 로그 파일은 통째로 읽지 말고 Grep 으로 "error"·"status"·오류 메시지를 찾아
필요한 줄만 읽으세요. 소스도 관련 파일만 읽고, 큰 파일은 Grep 으로 자리를 찾은 뒤 그 부분만 읽으세요.

모듈과 검증 명령(각 모듈 디렉터리에서 실행):
${mods}
${project.conventions ? `\n프로젝트 규약:\n${project.conventions.trim()}\n` : ''}${project.protectedPaths?.length ? `\n건드리면 안 되는 경로(바꿔도 되돌려집니다): ${project.protectedPaths.join(', ')}\n` : ''}
진행 방법:
  1. summary.md 와 screenshot.png, 로그의 오류 항목을 보고 무엇이 잘못됐는지 한 문장으로 정리합니다.
  2. 로그의 오류 메시지 · URL · 컴포넌트 이름으로 원인 코드를 찾습니다. 추측으로 여러 곳을 고치지 말고 원인 하나를 확정하세요.
     원인을 확정할 수 없으면 코드를 고치지 말고 \`.bugfix/result.md\` 에 "원인 미확정" 과 조사 결과, 더 필요한 정보를 적고 끝내세요.
     원인이 이 저장소 밖(\`node_modules\` 의 패키지 - 예: 버그 신고 창·뷰어 자체는 \`bugfix-kit\` 패키지)에 있으면 **아무 코드도 고치지 말고**
     result.md 첫 줄을 \`# 라이브러리 문제: <패키지명>\` 으로 쓰고, 패키지 안의 파일·원인·고칠 방법을 적고 끝내세요. node_modules 를 고치거나
     앱 쪽에 우회 코드를 덧대지 마세요 - 그 패키지의 저장소에서 고칩니다.
  3. 최소 범위로 고칩니다.
  4. 고친 모듈의 검증 명령이 통과해야 합니다. 통과하지 못하면 고치거나 되돌리세요. (바깥에서 한 번 더 검증합니다)
  5. \`.bugfix/repro.json\` 에 **재현 절차**를 씁니다. 고친 뒤 서버가 수정본을 실제로 띄워(미리보기) 이 절차를 돌려 고쳐졌는지 확인하고,
     여전히 실패하면 증거(응답·서버 로그)를 주고 다시 고치게 합니다. 형식:
     \`\`\`
     { "api": [ { "method": "POST", "path": "/network/import/ktdb/save", "contentType": "multipart", "form": { "south": 37.5, "west": 127.0, "north": 37.51, "east": 127.01, "polygon": "[[[127.0,37.5],…]]" }, "timeoutSec": 180, "note": "신고된 500 요청" },
                { "method": "POST", "path": "/api/things", "body": { "name": "x" } } ],
       "steps": [ { "goto": "/some/route" }, { "click": { "text": "가져오기" } }, { "waitFor": 2000 }, { "expect": { "selector": ".toast-error", "count": 0 } } ] }
     \`\`\`
     - api 는 **반드시 배열**. 각 항목: method · path(앱 REST 접두 경로 /rest, /api 등을 뺀 경로) · JSON 이면 body, 폼이면 contentType "multipart"|"form" 과 form{필드:값}(파일 업로드는 files:[{field,name,content}]) · 선택 expect{status} · timeoutSec.
       신고된 실패 요청(network-logs.json 의 status ≥ 400 항목)을 프론트가 실제로 보내는 형식대로. 실패 요청이 없으면 [].
     - steps: 화면에서 재현할 수 있으면 front-check 절차(goto/click/fill/waitFor/expect). 확실하지 않으면 [].
     - 통과 기준: 응답 status < 500 (expect.status 를 주면 그 값). 그러니 400대로 "정상 거절" 되는 요청은 넣지 마세요.
     - **저장 대상 식별자(versionId·시나리오 키·파일 이름 등)는 실제 데이터 이름을 쓰지 말고 미리보기 전용 값(예: "bugfix-repro")** 으로 바꾸세요.
       재현은 미리보기(DB·파일 사본)에서 돌지만 바깥 자원(SFTP·큐 등)을 공유할 수 있어 실제 데이터를 덮어쓰면 안 됩니다. 읽기는 실제 이름이어도 됩니다.
  6. 마지막에 \`.bugfix/result.md\` 를 아래 형식으로 씁니다. 첫 줄이 PR 제목이 됩니다(한 줄, 60자 이내, 한국어).
     \`\`\`
     # <한 줄 요약>
     ## 원인
     ...
     ## 고친 내용
     ...
     ## 검증
     ...
     ## 확인이 필요한 점
     ...
     ## 추천 개선
     - <이어서 하면 좋을 개선 한 가지. 이 줄 그대로 AI 에게 수정 요청으로 보내 실행할 수 있게 구체적으로>
     \`\`\`
     \`## 추천 개선\` 은 앱의 버그 리포트 화면에 목록으로 뜨고, 사용자가 누르면 그 줄이 그대로 추가 요청으로 실행됩니다.
     한 항목을 \`- \` 로 시작하는 한 줄로 쓰고(들여쓴 하위 목록 금지), 많아야 5개까지 적습니다. 없으면 절을 빼세요.
git 커밋·푸시·PR 은 하지 마세요 - 바깥에서 처리합니다.
`;
  }

  /**
   * 보호 경로(project.protectedPaths)에 생긴 변경을 되돌린다 - 버그 신고 연결 파일·CI 설정처럼 AI 가 건드리면 안 되는 곳.
   * 되돌린 파일은 로그에 남긴다. ref 를 주면 그 기준으로(충돌 해결 뒤 base 쪽 내용으로) 되돌린다.
   */
  async revertProtected(project, ex, wt, L, ref = null) {
    const paths = project.protectedPaths || [];
    if (!paths.length) return;
    const status = (await ex.execOut(wt, 1, ['git', 'status', '--porcelain'])).trim();
    const files = parsePorcelain(status);
    const hit = files.filter((f) => paths.some((p) => f.file === p || f.file.startsWith(p.endsWith('/') ? p : p + '/')));
    if (!hit.length) return;
    for (const f of hit) {
      if (f.code.includes('?') || f.code.startsWith('A')) await ex.execOut(wt, 1, ['rm', '-rf', f.file]);
      else await ex.execOut(wt, 1, ['git', 'checkout', ...(ref ? [ref] : []), '--', f.file]);
    }
    await L(`보호 경로 변경 되돌림(${hit.length}): ${hit.map((f) => f.file).join(', ')}`);
  }

  // ── 검증·모듈 ─────────────────────────────────────────────────────────
  /** git status --porcelain 출력에서 바뀐 파일이 속한 모듈 */
  changedModules(project, porcelain) {
    const files = parsePorcelain(porcelain).map((f) => f.file);
    return project.modules.filter((m) => files.some((f) => f.startsWith(m.match)));
  }

  async verify(project, ex, wt, mods) {
    const tmo = this.cfg.server.verifyTimeoutMinutes;
    const changed = (await ex.exec(wt, 1, ['git', 'status', '--porcelain'])).trim()
      + '\n' + (await ex.execOut(wt, 1, ['git', 'diff', '--name-only', `origin/${project.baseBranch}...HEAD`]));
    for (const m of mods) {
      const dir = path.join(wt, m.dir);
      if (m.nodeModulesCache) await this.ensureNodeModules(project, ex, dir, m);
      // 사전 빌드(예: SCSS → CSS) - Claude 가 빼먹어도 결과가 완전하도록
      for (const pb of m.prebuild || []) {
        if (pb.when && !changed.includes(pb.when)) continue;
        await ex.sh(path.join(wt, pb.cwd || m.dir), tmo, pb.run);
      }
      for (const cmd of m.verify || []) await ex.sh(dir, tmo, cmd);
    }
  }

  /**
   * 검증 뒤 실제 화면 확인(front-check). 프로젝트 설정 frontCheck: { cwd, command, when: [모듈명], timeoutMinutes }.
   * 실패해도 작업은 계속하고(비치명), 요약을 진행 로그와 PR 본문에 남긴다. command 는 --json 으로 result 를 stdout 에 내야 한다.
   */
  async frontCheck(project, ex, id, wt, mods) {
    const fc = project.frontCheck;
    if (!fc?.command) return null;
    if (fc.when?.length && !mods.some((m) => fc.when.includes(m.name))) return null;
    const L = (s) => this.logLine(project, id, s);
    await L('화면 확인(front-check)…');
    const summarize = (r) => { const c = r.collected || {}; return `${r.ok ? '✓' : '✗'} 콘솔 오류 ${c.consoleErrors ?? 0} · 페이지 예외 ${c.pageErrors ?? 0} · 실패 요청 ${c.failedRequests ?? 0} · 절차 실패 ${(r.failures || []).length}${r.fatal ? ` · 치명: ${firstLine(r.fatal, 120)}` : ''}`; };
    try {
      const out = await ex.sh(path.join(wt, fc.cwd || '.'), fc.timeoutMinutes || 10, fc.command);
      const i = out.indexOf('{');
      const r = i >= 0 ? JSON.parse(out.slice(i)) : null;
      if (!r) throw new Error('front-check 출력에 JSON 이 없습니다');
      const line = summarize(r);
      await L(`화면 확인 ${line}`);
      const details = [
        ...(r.console || []).filter((m) => m.type === 'error').slice(0, 3).map((m) => `- 콘솔: ${firstLine(m.text, 140)}`),
        ...(r.failures || []).slice(0, 3).map((f) => `- 절차: ${firstLine(f, 140)}`),
      ];
      const shots = await this.keepShots(project, id, r, path.join(wt, fc.cwd || '.'), line);
      if (shots.length) details.push(`- 스크린샷 ${shots.length}장: ${shots.map((s) => s.name).join(', ')} (리포트 화면에서 보기)`);
      return [line, ...details].join('\n');
    } catch (e) {
      // exit 1(기준 초과)도 명령 실패로 오므로 출력에서 JSON 을 건져 본다
      const m = String(e.message || '').match(/\{[\s\S]*\}\s*$/);
      if (m) { try { const r = JSON.parse(m[0]); const line = summarize(r); await L(`화면 확인 ${line}`); await this.keepShots(project, id, r, path.join(wt, fc.cwd || '.'), line); return line; } catch { /* 아래 */ } }
      // 원인이 보이도록 명령 출력의 마지막 줄들도 남긴다
      const tailLines = String(e.message || '').split(/\r?\n/).filter((l) => l.trim() && !/^\s+at /.test(l)).slice(-4).join('\n');
      await L(`화면 확인 실패(계속 진행):\n${tailLines.slice(0, 600)}`);
      return `(실행 실패) ${firstLine(e.message, 200)}`;
    }
  }

  /** front-check 결과의 스크린샷을 서버 데이터로 옮기고 리포트(fixShots)에 기록한다 - 작업 사본은 곧 지워진다 */
  async keepShots(project, id, r, cwd, label) {
    if (!r?.screenshots?.length) return [];
    try {
      const outDir = path.resolve(cwd, r.outDir || 'front-check-out');
      const shots = new Shots(this.cfg.server.dataDir);
      const saved = await shots.save(project.name, 'fix', id, outDir, r.screenshots, { label });
      if (saved.length) await this.updateFix(project, id, (cur) => ({ fixShots: mergeShots(cur.fixShots, saved) }));
      return saved;
    } catch (e) { this.log.warn(`[bugfix ${project.name}#${id}] 스크린샷 보관 실패: ${e.message}`); return []; }
  }

  async prepareNodeModules(project, ex, wt, L, quiet = false) {
    for (const m of project.modules.filter((x) => x.nodeModulesCache)) {
      try { await this.ensureNodeModules(project, ex, path.join(wt, m.dir), m); if (!quiet) await L(`node_modules 준비(캐시): ${m.dir}`); }
      catch (e) { await L(`node_modules 준비 실패(계속 진행): ${firstLine(e.message, 200)}`); }
    }
  }

  /**
   * node_modules 는 작업마다 새로 받으면 몇 분씩 걸린다. {workDir}/{project}/cache/{module}/node_modules 에 한 번 받아 두고
   * 작업 사본에는 심볼릭 링크로 넣는다. package-lock 이 바뀌면 캐시를 갱신한다.
   */
  async ensureNodeModules(project, ex, fe, m) {
    return this.mutex(`nm:${project.name}:${m.name}`, () => this.ensureNodeModulesLocked(project, ex, fe, m));
  }
  async ensureNodeModulesLocked(project, ex, fe, m) {
    const cache = path.join(this.paths(project, 0).cache, m.name);
    const cacheNm = path.join(cache, 'node_modules');
    const stampFile = path.join(cache, 'package-lock.sha');
    // 잠금 파일 종류로 패키지 관리자를 고른다: yarn.lock 이면 yarn(npx 로 받아 씀), 아니면 npm
    const yarnLock = await readIfExists(path.join(fe, 'yarn.lock'));
    const npmLock = await readIfExists(path.join(fe, 'package-lock.json'));
    const useYarn = !!yarnLock && !npmLock;
    const lock = useYarn ? yarnLock : npmLock;
    const sha = lock ? crypto.createHash('sha1').update(lock).digest('hex') : '';
    const fresh = fss.existsSync(cacheNm) && sha === (await readIfExists(stampFile)).trim();
    if (!fresh) {
      await ex.exec(fe, 1, ['sh', '-c', 'rm -rf node_modules']);
      if (useYarn) await ex.exec(fe, 20, ['npx', '-y', 'yarn@1.22.22', 'install', '--frozen-lockfile', '--non-interactive', '--ignore-engines']);
      else await ex.exec(fe, 20, ['npm', 'install', '--legacy-peer-deps', '--no-audit', '--no-fund']);
      await fs.mkdir(cache, { recursive: true });
      await ex.exec(fe, 5, ['sh', '-c', `rm -rf '${cacheNm}' && mv node_modules '${cacheNm}'`]);
      await fs.writeFile(stampFile, sha, 'utf8');
    }
    await ex.exec(fe, 1, ['sh', '-c', `rm -rf node_modules && ln -s '${cacheNm}' node_modules`]);
  }

  // ── 저장소·worktree ────────────────────────────────────────────────────
  // 공유 저장소({workDir}/{project}/repo)의 clone·fetch·worktree 조작은 레인이 달라도 겹치면 안 되므로 프로젝트별 뮤텍스 안에서
  repoKey(project) { return `repo:${project.name}`; }
  async prepareRepo(project, ex, auth, L) {
    await this.mutex(this.repoKey(project), async () => {
      const { root, repo, jobs } = this.paths(project, 0);
      await fs.mkdir(jobs, { recursive: true });
      if (!fss.existsSync(path.join(repo, '.git'))) {
        await L('저장소 복제 중…');
        await ex.exec(root, 20, ['git', '-c', `http.extraheader=${auth}`, 'clone', '--no-checkout', '--branch', project.baseBranch, project.repo, repo]);
        await fs.writeFile(path.join(repo, '.git', 'info', 'exclude'), '.bugfix/\n', 'utf8');
      }
    });
  }
  /** origin 에서 refs 를 받는다(--prune). 없는 ref 가 있으면 false */
  async fetch(project, ex, auth, refs, { prune = true } = {}) {
    const { repo } = this.paths(project, 0);
    return this.mutex(this.repoKey(project), async () =>
      (await ex.execRc(repo, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', ...(prune ? ['--prune'] : []), 'origin', ...refs])) === 0);
  }
  async freshWorktree(ex, repo, jobs, wt, ref) {
    await this.mutex(`repo:${path.basename(path.dirname(repo))}`, async () => {
      if (fss.existsSync(wt)) { try { await ex.exec(repo, 2, ['git', 'worktree', 'remove', '--force', wt]); } catch { /* 아래 prune */ } }
      await ex.exec(repo, 2, ['git', 'worktree', 'prune']);
      await fs.rm(wt, { recursive: true, force: true });
      await ex.exec(repo, 2, ['git', 'worktree', 'add', '--detach', wt, ref]);
    });
  }
  async removeWorktree(ex, repo, wt) {
    await this.mutex(`repo:${path.basename(path.dirname(repo))}`, async () => {
      try { await ex.exec(repo, 2, ['git', 'worktree', 'remove', '--force', wt]); }
      catch (e) { this.log.warn('[bugfix] worktree 정리 실패:', e.message); }
    });
  }
}

/** result.md 본문의 '## 추천 개선' 절 → 한 줄 항목 목록 (맨 앞 '- ' / '1. ' 만, 들여쓴 줄은 무시) */
export function parseSuggestions(body) {
  const out = [];
  if (!body) return out;
  let inSection = false;
  for (const line of String(body).split(/\r?\n/)) {
    if (line.startsWith('#')) { inSection = /^#{1,3}\s*추천/.test(line); continue; }
    if (!inSection) continue;
    const m = line.match(/^(?:[-*]|\d+[.)])\s+(.+)$/);
    if (!m) continue;
    const item = m[1].replace(/\*\*/g, '').trim();
    if (!item) continue;
    out.push(item.length > 500 ? item.slice(0, 500) + '…' : item);
    if (out.length >= 8) break;
  }
  return out;
}

async function readIfExists(p) {
  try { return await fs.readFile(p, 'utf8'); } catch { return ''; }
}
/** Claude 가 쓴 repro.json 을 관대하게 정규화: api 는 배열(객체 하나면 감싸기, requests/apis 도 인정), path|url, method 대문자 */
function normRepro(x) {
  if (!x || typeof x !== 'object') return { api: [], steps: [] };
  let api = x.api ?? x.requests ?? x.apis ?? [];
  if (!Array.isArray(api)) api = api && typeof api === 'object' ? [api] : [];
  api = api.filter((a) => a && typeof a === 'object' && (a.path || a.url)).map((a) => ({ ...a, path: String(a.path || a.url), method: String(a.method || 'GET').toUpperCase() }));
  let steps = x.steps ?? x.ui ?? [];
  if (!Array.isArray(steps)) steps = [];
  return { api, steps: steps.filter((s) => s && typeof s === 'object') };
}
/** 요청 본문: contentType(json 기본 | form | multipart) · body 또는 form · files[{field,name,content}] */
function reqBody(a) {
  const headers = {}; for (const [k, v] of Object.entries(a.headers || {})) if (!/^content-type$/i.test(k)) headers[k] = v;
  if (['GET', 'HEAD'].includes(a.method)) return { body: undefined, headers };
  const declared = String(a.contentType || Object.entries(a.headers || {}).find(([k]) => /^content-type$/i.test(k))?.[1] || (a.form || a.files ? 'multipart' : 'json')).toLowerCase();
  const data = a.form ?? a.body;
  const str = (v) => (typeof v === 'string' ? v : JSON.stringify(v));
  if (declared.includes('multipart')) {
    const fd = new FormData();
    for (const [k, v] of Object.entries(data && typeof data === 'object' ? data : {})) fd.append(k, str(v));
    for (const f of Array.isArray(a.files) ? a.files : []) fd.append(f.field || 'file', new Blob([String(f.content ?? '')]), f.name || 'file.txt');
    return { body: fd, headers };
  }
  if (declared.includes('form')) return { body: new URLSearchParams(Object.entries(data && typeof data === 'object' ? data : {}).map(([k, v]) => [k, str(v)])).toString(), headers: { ...headers, 'Content-Type': 'application/x-www-form-urlencoded' } };
  return { body: data == null ? undefined : str(data), headers: { ...headers, 'Content-Type': 'application/json' } };
}

function uniqBy(arr, key) {
  const seen = new Set();
  return arr.filter((x) => { const k = key(x); if (seen.has(k)) return false; seen.add(k); return true; });
}

/**
 * `git status --porcelain` 줄 → { code, file }. 호출하는 쪽이 출력을 trim() 해 첫 줄의 앞 공백(" M path")이 사라져도
 * 경로 첫 글자를 잘라먹지 않도록 상태 코드를 정규식으로 뗀다. 이름 바뀜(R)은 새 이름만.
 */
export function parsePorcelain(text) {
  return String(text || '').split(/\r?\n/).map((l) => l.replace(/\s+$/, '')).filter(Boolean).map((l) => {
    const m = l.match(/^\s*([MADRCU?!]{1,2})\s+(.*)$/);
    if (!m) return null;
    return { code: m[1].padStart(2, ' '), file: m[2].trim().split(' -> ').pop().replace(/^"|"$/g, '') };
  }).filter(Boolean);
}

/** 프로젝트의 git 호스트에 맞는 클라이언트(GitHub / GitLab) - 인터페이스는 같다 */
export function gitClient(project, cfg, log = console) {
  if (project.host === 'gitlab') return new GitLab(project.gitlabUrl, project.gitlabProject, () => cfg.githubToken(project), log);
  return new GitHub(project.githubRepo, () => cfg.githubToken(project), log);
}
