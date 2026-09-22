/**
 * bugfix-server 클라이언트. 응답 `{ content }` 를 벗겨서 돌려주고, 오류는 서버의 `{ message }` 로 Error 를 만든다.
 * endpoint 가 비어 있으면 enabled=false - 신고 UI 는 복사·다운로드만 제공한다.
 */
export function createApi({ endpoint, project, apiKey, user, adminKey }) {
  const base = endpoint ? `${String(endpoint).replace(/\/+$/, '')}/p/${project}` : '';
  const enabled = !!base;

  async function call(method, path, body, { query, blob } = {}) {
    if (!enabled) throw new Error('버그 리포트 서버가 설정되지 않았습니다(endpoint).');
    const headers = { Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (apiKey) headers['X-Bugfix-Key'] = apiKey;
    if (adminKey) headers['X-Bugfix-Admin'] = adminKey;
    const u = typeof user === 'function' ? user() : user;
    if (u) headers['X-Bugfix-User'] = String(u);
    const qs = query ? '?' + new URLSearchParams(query).toString() : '';
    const res = await fetch(base + path + qs, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
    if (blob) { if (!res.ok) throw Object.assign(new Error(`HTTP ${res.status}`), { status: res.status }); return URL.createObjectURL(await res.blob()); }
    if (res.status === 204) return null;
    const text = await res.text();
    let json = null;
    try { json = text ? JSON.parse(text) : null; } catch { /* 본문 없음 */ }
    if (!res.ok) {
      const err = new Error(json?.message || `HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return json?.content ?? json;
  }

  return {
    enabled,
    base,
    info: () => call('GET', '/info'),
    save: (payload) => call('POST', '/reports', payload),
    list: () => call('GET', '/reports'),
    get: (id) => call('GET', `/reports/${id}`),
    fixState: (id) => call('GET', `/reports/${id}/fix`),
    setStatus: (id, status) => call('PATCH', `/reports/${id}/status`, { status }),
    remove: (id) => call('DELETE', `/reports/${id}`),
    requestFix: (id) => call('POST', `/reports/${id}/request-fix`),
    fixChat: (id, message, mode) => call('POST', `/reports/${id}/fix-chat`, { message, mode }),
    fixSync: (id) => call('POST', `/reports/${id}/fix-sync`),
    /** 스크린샷 → object URL (img src 로 쓰고, 다 쓰면 URL.revokeObjectURL) */
    shot: (file) => call('GET', `/shots/${String(file).split('/').map(encodeURIComponent).join('/')}`, undefined, { blob: true }),
  };
}
