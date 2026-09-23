import { sleep } from './util.js';

/**
 * GitLab REST(v4) 최소 클라이언트 - GitHub 클라이언트와 같은 모양(createPullRequest·getPullRequest·waitMergeable·mergePullRequest·listRuns·deleteBranch).
 * 셀프호스팅 GitLab 도 된다: baseUrl 은 저장소 주소의 origin(예: https://gitlab.example.com:53000), project 는 "그룹/프로젝트".
 * 토큰은 프로젝트 env 의 GITLAB_TOKEN(api + write_repository 스코프). git 푸시는 `oauth2:<token>` Basic 인증.
 */
export class GitLab {
  /**
   * @param {string} baseUrl  https://host[:port]
   * @param {string} project  group/name
   * @param {() => string|null} token
   */
  constructor(baseUrl, project, token, log = console) {
    this.baseUrl = String(baseUrl || '').replace(/\/+$/, '');
    this.project = project;
    this.repo = project;                         // 로그·프롬프트에서 githubRepo 대신 쓰는 표시명
    this.token = token;
    this.log = log;
  }

  isConfigured() { return !!this.token() && !!this.project && !!this.baseUrl; }

  gitAuthHeader() {
    const basic = Buffer.from(`oauth2:${this.token()}`, 'utf8').toString('base64');
    return `Authorization: Basic ${basic}`;
  }

  async call(method, path, body) {
    if (!this.isConfigured()) throw new Error('GitLab 연동이 설정되지 않았습니다(GITLAB_TOKEN / projects.*.repo).');
    const res = await fetch(`${this.baseUrl}/api/v4/projects/${encodeURIComponent(this.project)}${path}`, {
      method,
      headers: { 'PRIVATE-TOKEN': this.token(), Accept: 'application/json', 'User-Agent': 'bugfix-kit', ...(body ? { 'Content-Type': 'application/json' } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    const text = await res.text();
    let json = null;
    try { json = text ? JSON.parse(text) : null; } catch { /* 본문 없음 */ }
    if (!res.ok) {
      const m = json?.message;
      const msg = m ? ` ${typeof m === 'string' ? m : JSON.stringify(m)}` : '';
      throw new Error(`GitLab ${method} ${path} 실패: HTTP ${res.status}${msg}`);
    }
    return json;
  }

  /** MR 생성. number 는 프로젝트 안 번호(iid) */
  async createPullRequest(title, body, head, base) {
    const r = await this.call('POST', '/merge_requests', { title, description: body, source_branch: head, target_branch: base, remove_source_branch: false });
    if (!r?.web_url) throw new Error('GitLab MR 생성 응답이 비었습니다.');
    this.log.info(`[bugfix] MR 생성 ${r.web_url}`);
    return { number: r.iid, url: r.web_url };
  }

  /**
   * GitHub 와 같은 모양으로: state open/closed, merged, mergeable(true/false/null=계산 중), mergeableState, headSha.
   * GitLab 의 detailed_merge_status: mergeable · checking/unchecked(계산 중) · conflict · ci_must_pass · need_rebase · not_open …
   */
  async getPullRequest(number) {
    const r = await this.call('GET', `/merge_requests/${number}`);
    const dms = String(r.detailed_merge_status || r.merge_status || 'unknown');
    const merged = r.state === 'merged';
    const calculating = ['checking', 'unchecked', 'preparing'].includes(dms);
    const mergeable = merged ? false : (calculating ? null : dms === 'mergeable');
    return { state: r.state === 'opened' ? 'open' : 'closed', merged, mergeable, mergeableState: calculating ? 'unknown' : (dms === 'conflict' ? 'dirty' : dms), headSha: r.sha || '' };
  }

  async waitMergeable(number, waitSec, headSha = null) {
    const until = Date.now() + waitSec * 1000;
    let st;
    do {
      st = await this.getPullRequest(number);
      if (st.merged) return st;
      const headOk = !headSha || st.headSha === headSha;
      if (headOk && st.mergeable != null && st.mergeableState !== 'unknown') return st;
      await sleep(3000);
    } while (Date.now() < until);
    return st;
  }

  /** MR 병합(merge commit). 돌려주는 값은 병합 커밋 sha */
  async mergePullRequest(number, commitTitle) {
    const r = await this.call('PUT', `/merge_requests/${number}/merge`, { merge_commit_message: commitTitle, should_remove_source_branch: false, squash: false });
    if (r?.state !== 'merged') throw new Error(`GitLab 이 병합을 거부했습니다: ${r?.merge_error || r?.detailed_merge_status || ''}`);
    this.log.info(`[bugfix] MR !${number} 병합 ${r.merge_commit_sha || r.sha}`);
    return String(r.merge_commit_sha || r.sha);
  }

  /** 해당 커밋의 파이프라인 - GitHub Actions 실행 목록과 같은 모양 */
  async listRuns(sha) {
    const r = await this.call('GET', `/pipelines?sha=${sha}&per_page=20`);
    return (r || []).map((p) => {
      const done = ['success', 'failed', 'canceled', 'skipped', 'manual'].includes(p.status);
      return { id: p.id, name: `GitLab CI ${p.ref || ''}`.trim(), status: done ? 'completed' : (['created', 'waiting_for_resource', 'preparing', 'pending', 'scheduled'].includes(p.status) ? 'queued' : 'in_progress'), conclusion: done ? p.status : null, url: p.web_url };
    });
  }

  async deleteBranch(branch) {
    try { await this.call('DELETE', `/repository/branches/${encodeURIComponent(branch)}`); }
    catch (e) { this.log.warn(`[bugfix] 브랜치 삭제 실패 ${branch}: ${e.message}`); }
  }
}

/** 저장소 URL 로 호스트 종류·GitLab 주소·프로젝트 경로를 알아낸다 */
export function detectHost(repoUrl, explicit) {
  const url = String(repoUrl || '');
  if (explicit === 'github' || (!explicit && /github\.com[/:]/.test(url))) return { host: 'github' };
  const m = url.match(/^(https?:\/\/[^/]+)\/(.+?)(?:\.git)?\/?$/);
  if (m) return { host: 'gitlab', gitlabUrl: m[1], gitlabProject: m[2] };
  const s = url.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
  if (s) return { host: 'gitlab', gitlabUrl: `https://${s[1]}`, gitlabProject: s[2] };
  return { host: explicit || 'github' };
}
