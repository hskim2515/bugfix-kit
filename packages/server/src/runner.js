import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { makeExec } from './exec.js';
import { GitHub } from './github.js';
import { runClaudeStream, sessionIdOf, resultTextOf, claudeSummary } from './claude.js';
import { writeReportFiles } from './reportFiles.js';
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
    this.chain = Promise.resolve();
    this.pending = 0;
    this.execs = new Map();
  }

  ex(project) {
    if (!this.execs.has(project.name)) this.execs.set(project.name, makeExec(this.cfg.server, project, this.log));
    return this.execs.get(project.name);
  }
  gh(project) { return new GitHub(project.githubRepo, () => this.cfg.githubToken(), this.log); }
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
    const clean = Object.fromEntries(Object.entries(patch).filter(([, v]) => v !== undefined));
    return this.store.update(project.name, id, (c) => ({ ...c, ...clean, fixUpdatedAt: nowIso() }));
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
  submit(project, id, job, onError) {
    const ahead = this.pending++;
    const p = this.chain.then(async () => {
      this.pending--;
      try { await job(); }
      catch (e) { this.log.error(`[bugfix ${project.name}#${id}] 실패`, e); await onError(e); }
    });
    this.chain = p.catch(() => {});
    return ahead;
  }

  async enqueue(project, id) {
    const ahead = this.submit(project, id, () => this.run(project, id), async (e) => {
      await this.logLine(project, id, `✗ 실패: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: `실패: ${firstLine(e.message, 200)}` });
    });
    if (ahead > 0) await this.logLine(project, id, `▶ 대기열 등록 (앞에 ${ahead}건, 한 번에 하나씩 실행)`);
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
    await ex.exec(repo, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', '--prune', 'origin', base]);
    await this.freshWorktree(ex, repo, jobs, wt, `origin/${base}`);
    await L(`작업 사본 준비: ${base} @ ${(await ex.exec(wt, 1, ['git', 'rev-parse', '--short', 'HEAD'])).trim()}`);

    try {
      await writeReportFiles(path.join(wt, '.bugfix'), r);
      await L('리포트 자료 준비 (.bugfix/)');
      await this.prepareNodeModules(project, ex, wt, L);

      await L(`Claude Code 실행 중… (최대 ${this.cfg.server.timeoutMinutes}분)`);
      const out = await this.claude(project, ex, id, wt, this.cfg.server.timeoutMinutes,
        ['-p', this.prompt(project, r), '--max-turns', String(Math.max(10, this.cfg.server.maxTurns)), '--permission-mode', 'acceptEdits', '--allowedTools', this.allowedTools(project).join(',')]);
      await this.updateFix(project, id, { fixSessionId: sessionIdOf(out) });
      await L(`Claude 종료 (${claudeSummary(out)})`);

      const changed = (await ex.exec(wt, 1, ['git', 'status', '--porcelain'])).trim();
      if (!changed) {
        const reason = await readIfExists(path.join(wt, '.bugfix/result.md'));
        await this.updateFix(project, id, { fixStatus: 'FAILED', fixSummary: `Claude 가 코드를 바꾸지 않았습니다. ${firstLine(reason, 200)}` });
        await L(`✗ 변경 없음 - 결과: ${firstLine(reason, 500)}`);
        return;
      }
      await L(`변경 파일:\n${changed}`);
      const mods = this.changedModules(project, changed);
      await L(`검증(${mods.map((m) => m.name).join(' · ') || '규칙 없음'})…`);
      await this.verify(project, ex, wt, mods);
      await L('✓ 검증 통과');

      const result = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
      const summary = result.title || `버그 #${id} 수정`;
      await this.saveSuggestions(project, id, result.body);
      const commitMsg = `fix: ${summary} (버그 #${id})\n\n${result.body || ''}\n\n버그 리포트 #${id}\n\nCo-Authored-By: Claude <noreply@anthropic.com>`;
      await ex.exec(wt, 1, ['git', 'checkout', '-b', branch]);
      await ex.exec(wt, 1, ['git', 'add', '-A']);
      await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '-q', '-F', '-'], { stdin: commitMsg });
      await ex.exec(wt, 5, ['git', '-c', `http.extraheader=${auth}`, 'push', '-u', 'origin', branch]);
      await this.updateFix(project, id, { fixBranch: branch, fixSummary: summary });
      await L(`브랜치 푸시: ${branch}`);

      // 보고자·문제 원문은 저장소를 보는 모든 사람에게 공개되므로 넣지 않는다 - 번호로 앱 안에서 찾아본다
      const prTitle = `fix: ${summary} (버그 #${id})`;
      const prBody = `버그 리포트 #${id} (앱의 버그 리포트 화면에서 확인)\n\n${result.body || ''}\n\n---\n이 PR 은 버그 리포트 화면의 'Claude 에게 수정 요청' 으로 bugfix-kit 이 Claude Code 를 돌려 만들었습니다. `
        + (project.autoMerge ? '검증이 통과해 자동으로 병합됩니다.' : '검토 후 병합하세요.');
      const pr = await gh.createPullRequest(prTitle, prBody, branch, base);
      await this.updateFix(project, id, { fixStatus: 'PR_OPENED', fixPrUrl: pr.url, fixPrNumber: pr.number });
      await L(`✓ PR: ${pr.url}`);

      if (project.autoMerge) await this.autoMerge(project, ex, gh, id, wt, branch, auth, pr, prTitle, mods);
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
    await ex.exec(repo, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', '--prune', 'origin', base]);
    let startRef = `origin/${base}`;
    if (prOpen) {
      if ((await ex.execRc(repo, 5, ['git', '-c', `http.extraheader=${auth}`, 'fetch', 'origin', r.fixBranch])) === 0) startRef = `origin/${r.fixBranch}`;
      else prOpen = false;
    }
    await this.freshWorktree(ex, repo, jobs, wt, startRef);
    if (prOpen) await ex.exec(wt, 1, ['git', 'checkout', '-q', '-B', r.fixBranch, startRef]);
    await writeReportFiles(path.join(wt, '.bugfix'), r);
    await this.prepareNodeModules(project, ex, wt, L, true);

    try {
      const allowed = allowChange ? this.allowedTools(project) : READ_ONLY_TOOLS;
      const preface = allowChange
        ? '사용자의 추가 요청입니다. 앞서 고친 내용 위에 아래 요청을 반영하세요. 고친 뒤 검증 명령을 통과시키고, '
          + '`.bugfix/result.md` 를 같은 형식(# 한 줄 요약 / ## 원인 / ## 고친 내용 / ## 검증 / ## 확인이 필요한 점 / ## 추천 개선)으로 다시 쓰세요. '
          + '## 추천 개선 은 이번 요청으로 끝난 항목은 빼고 남은 것만 적습니다. '
          + 'git 커밋·푸시는 하지 마세요. 마지막 답변은 무엇을 바꿨는지 한국어로 간단히.\n\n요청: '
        : '사용자의 질문입니다. 코드를 바꾸지 말고 한국어로 간결하게 답하세요. 필요하면 파일을 읽어 근거를 대세요.\n\n질문: ';
      const out = await this.claudeResume(project, ex, id, wt, r.fixSessionId, preface + message, allowed, allowChange ? 40 : 15);
      const sid = sessionIdOf(out);
      if (sid) await this.updateFix(project, id, { fixSessionId: sid });
      const answer = resultTextOf(out);
      await this.appendChat(project, id, 'assistant', notBlank(answer) ? answer : '(답변 없음)');
      await L(`Claude 답변: ${firstLine(answer, 200)}`);

      const changed = (await ex.exec(wt, 1, ['git', 'status', '--porcelain'])).trim();
      if (!allowChange || !changed) {
        if (changed) { await ex.exec(wt, 1, ['git', 'checkout', '--', '.']); await ex.exec(wt, 1, ['git', 'clean', '-fdq', '-e', '.bugfix']); await L('질문 모드 - 변경 되돌림'); }
        await this.updateFix(project, id, { fixStatus: prevStatus || 'FAILED' });
        return;
      }
      await L(`변경 파일:\n${changed}`);
      const mods = this.changedModules(project, changed);
      await L('검증…');
      await this.verify(project, ex, wt, mods);
      await L('✓ 검증 통과');
      const result = parseResult(await readIfExists(path.join(wt, '.bugfix/result.md')));
      const summary = result.title || `버그 #${id} 추가 수정`;
      await this.saveSuggestions(project, id, result.body);
      const commitMsg = `fix: ${summary} (버그 #${id} 추가 요청)\n\n${result.body || ''}\n\n요청: ${firstLine(message, 200)}\n\nCo-Authored-By: Claude <noreply@anthropic.com>`;
      const branch = prOpen ? r.fixBranch : `claude/bugfix-${id}-${stamp()}`;
      if (!prOpen) await ex.exec(wt, 1, ['git', 'checkout', '-q', '-b', branch]);
      await ex.exec(wt, 1, ['git', 'add', '-A']);
      await ex.exec(wt, 1, ['git', ...GIT_ID, 'commit', '-q', '-F', '-'], { stdin: commitMsg });
      await ex.exec(wt, 5, ['git', '-c', `http.extraheader=${auth}`, 'push', '-u', 'origin', branch]);
      await this.updateFix(project, id, { fixBranch: branch, fixSummary: summary });
      await L(`브랜치 푸시: ${branch}`);
      const prTitle = `fix: ${summary} (버그 #${id})`;
      let pr;
      if (prOpen && r.fixPrNumber != null) {
        pr = { number: r.fixPrNumber, url: r.fixPrUrl };
        await L(`기존 PR 갱신: ${pr.url}`);
      } else {
        const prBody = `버그 리포트 #${id} 추가 요청 (앱의 버그 리포트 화면에서 확인)\n\n${result.body || ''}\n\n---\n이 PR 은 버그 리포트 화면의 Claude 자동 수정(추가 요청)으로 bugfix-kit 이 만들었습니다.`
          + (project.autoMerge ? ' 검증이 통과해 자동으로 병합됩니다.' : ' 검토 후 병합하세요.');
        pr = await gh.createPullRequest(prTitle, prBody, branch, base);
        await this.updateFix(project, id, { fixPrNumber: pr.number });
        await L(`✓ PR: ${pr.url}`);
      }
      await this.updateFix(project, id, { fixStatus: 'PR_OPENED', fixPrUrl: pr.url });
      if (project.autoMerge) await this.autoMerge(project, ex, gh, id, wt, branch, auth, pr, prTitle, mods);
    } finally {
      await this.removeWorktree(ex, repo, wt);
    }
  }

  // ── 자동 병합 ──────────────────────────────────────────────────────────
  async autoMerge(project, ex, gh, id, wt, branch, auth, pr, prTitle, mods) {
    const base = project.baseBranch;
    const L = (s) => this.logLine(project, id, s);
    try {
      await ex.exec(wt, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', 'origin', base]);
      const behind = (await ex.exec(wt, 1, ['git', 'rev-list', '--count', `HEAD..origin/${base}`])).trim();
      if (behind !== '0') {
        await L(`${base} 가 ${behind}커밋 앞서 있어 합칩니다…`);
        const rc = await ex.execRc(wt, 5, ['git', ...GIT_ID, 'merge', '--no-edit', `origin/${base}`]);
        if (rc !== 0) {
          const conflicts = (await ex.exec(wt, 1, ['git', 'diff', '--name-only', '--diff-filter=U'])).trim();
          if (!conflicts) throw new Error('병합 실패(충돌 아님)');
          await L(`충돌 ${conflicts.split(/\r?\n/).length}개 파일 - Claude 가 해결 중…\n${conflicts}`);
          await this.claudeConflict(project, ex, id, wt, conflicts);
          const left = (await ex.exec(wt, 1, ['git', 'diff', '--name-only', '--diff-filter=U'])).trim();
          if (left) throw new Error(`충돌이 남아 있습니다:\n${left}`);
          const markers = await ex.execOut(wt, 1, ['git', 'grep', '-l', '-E', '^(<<<<<<<|=======|>>>>>>>)( |$)', '--', '.', ':!*.md', ':!.bugfix/*']);
          if (markers.trim()) throw new Error(`충돌 표시가 남아 있습니다:\n${markers}`);
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
      // 푸시 직후엔 GitHub 가 병합 가능 여부를 계산 중이라 곧바로 병합하면 405 - 계산을 기다리고 실패하면 몇 번 더
      const st = await gh.waitMergeable(pr.number, 45);
      if (st.merged) throw new Error(`PR #${pr.number} 은 이미 병합된 PR 입니다 - 이번 변경은 들어가지 않았습니다. 새 PR 이 필요합니다.`);
      if (st.mergeable === false) throw new Error(`GitHub 가 병합 불가로 판단: ${st.mergeableState}`);
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
      await ex.exec(wt, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', 'origin', base]);
      if ((await ex.execRc(wt, 1, ['git', 'merge-base', '--is-ancestor', 'HEAD', `origin/${base}`])) !== 0) {
        throw new Error(`GitHub 는 병합됐다고 했지만 ${base} 에 이번 커밋이 없습니다(응답 sha ${sha.slice(0, 8)})`);
      }
      await this.updateFix(project, id, { fixStatus: 'MERGED', status: 'RESOLVED' });
      await L(`✓ 병합 완료 ${base} @ ${sha.slice(0, 8)} - CI/CD 배포가 이어집니다`);
      await gh.deleteBranch(branch);
    } catch (e) {
      this.log.warn(`[bugfix ${project.name}#${id}] 자동 병합 실패`, e);
      await L(`✗ 자동 병합 실패 - PR 은 열려 있습니다: ${firstLine(e.message, 300)}`);
      await this.updateFix(project, id, { fixStatus: 'PR_OPENED' });
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
      } else if (project.autoMerge && st.mergeable === true) {
        const sha = await gh.mergePullRequest(r.fixPrNumber, `fix: ${orDash(r.fixSummary)} (버그 #${id})`);
        await this.updateFix(project, id, { fixStatus: 'MERGED', status: 'RESOLVED' });
        await L(`✓ 병합 완료(새로고침에서 재시도) @ ${sha.slice(0, 8)}`);
        if (notBlank(r.fixBranch)) await gh.deleteBranch(r.fixBranch);
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
한쪽을 통째로 버리지 마세요. 해결한 파일은 \`git add <파일>\` 로 표시하세요. 커밋은 하지 마세요.
충돌 표시를 하나도 남기지 마세요. 해결 내용을 \`.bugfix/result.md\` 끝에 "## 충돌 해결" 절로 덧붙이세요.`;
    await this.claude(project, ex, id, wt, Math.max(5, Math.floor(this.cfg.server.timeoutMinutes / 2)),
      ['-p', prompt, '--max-turns', '30', '--permission-mode', 'acceptEdits', '--allowedTools', CONFLICT_TOOLS.join(',')]);
  }

  /** 추천 개선을 리포트에 둔다 - 뷰어가 목록으로 보여 주고, 누르면 그 줄을 추가 요청으로 보낸다. 실패해도 작업은 계속 */
  async saveSuggestions(project, id, body) {
    try {
      const items = parseSuggestions(body);
      await this.updateFix(project, id, { fixSuggestions: items.length ? JSON.stringify(items) : null });
    } catch (e) { this.log.warn(`[bugfix ${project.name}#${id}] 추천 개선 저장 실패: ${e.message}`); }
  }

  allowedTools(project) { return [...new Set([...DEFAULT_TOOLS, ...(project.allowedTools || [])])]; }

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
  - frontend-logs.json / backend-logs.json / network-logs.json / mutation-log.json: 신고 직전 로그
    (이미 오류 위주로 추려 둔 것입니다. 앞쪽이 오류, 뒤쪽이 최근 순입니다)

토큰을 아끼세요: 스크린샷은 한 번만 보고, 로그 파일은 통째로 읽지 말고 Grep 으로 "error"·"status"·오류 메시지를 찾아
필요한 줄만 읽으세요. 소스도 관련 파일만 읽고, 큰 파일은 Grep 으로 자리를 찾은 뒤 그 부분만 읽으세요.

모듈과 검증 명령(각 모듈 디렉터리에서 실행):
${mods}
${project.conventions ? `\n프로젝트 규약:\n${project.conventions.trim()}\n` : ''}
진행 방법:
  1. summary.md 와 screenshot.png, 로그의 오류 항목을 보고 무엇이 잘못됐는지 한 문장으로 정리합니다.
  2. 로그의 오류 메시지 · URL · 컴포넌트 이름으로 원인 코드를 찾습니다. 추측으로 여러 곳을 고치지 말고 원인 하나를 확정하세요.
     원인을 확정할 수 없으면 코드를 고치지 말고 \`.bugfix/result.md\` 에 "원인 미확정" 과 조사 결과, 더 필요한 정보를 적고 끝내세요.
  3. 최소 범위로 고칩니다.
  4. 고친 모듈의 검증 명령이 통과해야 합니다. 통과하지 못하면 고치거나 되돌리세요. (바깥에서 한 번 더 검증합니다)
  5. 마지막에 \`.bugfix/result.md\` 를 아래 형식으로 씁니다. 첫 줄이 PR 제목이 됩니다(한 줄, 60자 이내, 한국어).
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

  // ── 검증·모듈 ─────────────────────────────────────────────────────────
  /** git status --porcelain 출력에서 바뀐 파일이 속한 모듈 */
  changedModules(project, porcelain) {
    const files = porcelain.split(/\r?\n/).map((l) => l.slice(3).trim().split(' -> ').pop()).filter(Boolean);
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
    const cache = path.join(this.paths(project, 0).cache, m.name);
    const cacheNm = path.join(cache, 'node_modules');
    const stampFile = path.join(cache, 'package-lock.sha');
    const lock = await readIfExists(path.join(fe, 'package-lock.json'));
    const sha = lock ? crypto.createHash('sha1').update(lock).digest('hex') : '';
    const fresh = fss.existsSync(cacheNm) && sha === (await readIfExists(stampFile)).trim();
    if (!fresh) {
      await ex.exec(fe, 1, ['sh', '-c', 'rm -rf node_modules']);
      await ex.exec(fe, 20, ['npm', 'install', '--legacy-peer-deps', '--no-audit', '--no-fund']);
      await fs.mkdir(cache, { recursive: true });
      await ex.exec(fe, 5, ['sh', '-c', `rm -rf '${cacheNm}' && mv node_modules '${cacheNm}'`]);
      await fs.writeFile(stampFile, sha, 'utf8');
    }
    await ex.exec(fe, 1, ['sh', '-c', `rm -rf node_modules && ln -s '${cacheNm}' node_modules`]);
  }

  // ── 저장소·worktree ────────────────────────────────────────────────────
  async prepareRepo(project, ex, auth, L) {
    const { root, repo, jobs } = this.paths(project, 0);
    await fs.mkdir(jobs, { recursive: true });
    if (!fss.existsSync(path.join(repo, '.git'))) {
      await L('저장소 복제 중…');
      await ex.exec(root, 20, ['git', '-c', `http.extraheader=${auth}`, 'clone', '--no-checkout', '--branch', project.baseBranch, project.repo, repo]);
      await fs.writeFile(path.join(repo, '.git', 'info', 'exclude'), '.bugfix/\n', 'utf8');
    }
  }
  async freshWorktree(ex, repo, jobs, wt, ref) {
    if (fss.existsSync(wt)) { try { await ex.exec(repo, 2, ['git', 'worktree', 'remove', '--force', wt]); } catch { /* 아래 prune */ } }
    await ex.exec(repo, 2, ['git', 'worktree', 'prune']);
    await fs.rm(wt, { recursive: true, force: true });
    await ex.exec(repo, 2, ['git', 'worktree', 'add', '--detach', wt, ref]);
  }
  async removeWorktree(ex, repo, wt) {
    try { await ex.exec(repo, 2, ['git', 'worktree', 'remove', '--force', wt]); }
    catch (e) { this.log.warn('[bugfix] worktree 정리 실패:', e.message); }
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
function uniqBy(arr, key) {
  const seen = new Set();
  return arr.filter((x) => { const k = key(x); if (seen.has(k)) return false; seen.add(k); return true; });
}
