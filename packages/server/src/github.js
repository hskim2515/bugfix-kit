import { sleep } from './util.js';

/** GitHub REST 최소 클라이언트 - PR 생성·조회·병합·브랜치 삭제. 푸시용 git 인증 헤더도 여기서 */
export class GitHub {
  /**
   * @param {string} repo  owner/name
   * @param {() => string|null} token
   */
  constructor(repo, token, log = console) {
    this.repo = repo;
    this.token = token;
    this.log = log;
  }

  isConfigured() { return !!this.token() && !!this.repo; }

  /** git fetch/push 에 붙일 `http.extraheader` 값 - 토큰을 .git/config 에 남기지 않는다 */
  gitAuthHeader() {
    const basic = Buffer.from(`x-access-token:${this.token()}`, 'utf8').toString('base64');
    return `Authorization: Basic ${basic}`;
  }

  async call(method, path, body) {
    if (!this.isConfigured()) throw new Error('GitHub 연동이 설정되지 않았습니다(github 토큰 / projects.*.githubRepo).');
    // 저장소·브랜치 이름의 '/' 는 그대로 경로에 이어 붙인다 (인코딩하면 404)
    const res = await fetch(`https://api.github.com/repos/${this.repo}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.token()}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'bugfix-kit',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const text = await res.text();
    let json = null;
    try { json = text ? JSON.parse(text) : null; } catch { /* 본문 없음 */ }
    if (!res.ok) {
      const msg = json?.message ? ` ${json.message}` : '';
      throw new Error(`GitHub ${method} ${path} 실패: HTTP ${res.status}${msg}`);
    }
    return json;
  }

  /** @returns {Promise<{number:number, url:string}>} */
  async createPullRequest(title, body, head, base) {
    const r = await this.call('POST', '/pulls', { title, body, head, base, draft: false });
    if (!r?.html_url) throw new Error('GitHub PR 생성 응답이 비었습니다.');
    this.log.info(`[bugfix] PR 생성 ${r.html_url}`);
    return { number: r.number, url: r.html_url };
  }

  /** @returns {Promise<{state:string, merged:boolean, mergeable:boolean|null, mergeableState:string, headSha:string}>} */
  async getPullRequest(number) {
    const r = await this.call('GET', `/pulls/${number}`);
    return { state: String(r.state), merged: r.merged === true, mergeable: r.mergeable == null ? null : r.mergeable === true, mergeableState: String(r.mergeable_state), headSha: r.head?.sha || '' };
  }

  /** 푸시 직후 GitHub 가 병합 가능 여부를 계산할 때까지(최대 waitSec) 기다린다 - 바로 병합하면 405 */
  async waitMergeable(number, waitSec) {
    const until = Date.now() + waitSec * 1000;
    let st;
    do {
      st = await this.getPullRequest(number);
      if (st.merged || (st.mergeable != null && st.mergeableState !== 'unknown')) return st;
      await sleep(3000);
    } while (Date.now() < until);
    return st;
  }

  /** PR 병합(merge commit). 실패면 예외. 돌려주는 값은 병합 커밋 sha */
  async mergePullRequest(number, commitTitle) {
    const r = await this.call('PUT', `/pulls/${number}/merge`, { commit_title: commitTitle, merge_method: 'merge' });
    if (!r?.merged) throw new Error(`GitHub 가 병합을 거부했습니다: ${r?.message || ''}`);
    this.log.info(`[bugfix] PR #${number} 병합 ${r.sha}`);
    return String(r.sha);
  }

  /** 병합 뒤 작업 브랜치 정리 - 실패해도 치명적이지 않다 */
  async deleteBranch(branch) {
    try { await this.call('DELETE', `/git/refs/heads/${branch}`); }
    catch (e) { this.log.warn(`[bugfix] 브랜치 삭제 실패 ${branch}: ${e.message}`); }
  }
}
