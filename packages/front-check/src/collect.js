/** 페이지의 콘솔 오류·경고, 페이지 예외, 실패 요청(네트워크 오류 · 4xx/5xx)을 모은다 */
export function attachCollectors(page, cfg) {
  const match = (list, s) => list.some((p) => (p instanceof RegExp ? p.test(s) : String(s).includes(p)));
  const consoleMsgs = [];
  const pageErrors = [];
  const failedRequests = [];

  page.on('console', (m) => {
    const type = m.type();
    if (type !== 'error' && type !== 'warning') return;
    const text = m.text();
    const loc = m.location();
    // "Failed to load resource" 류는 본문에 URL 이 없고 location 에만 있다 - 둘을 합쳐 무시 목록과 비교
    if (match(cfg.ignoreConsole, `${text} ${loc?.url || ''}`)) return;
    consoleMsgs.push({ type, text: text.slice(0, 1000), at: loc?.url ? `${loc.url.split('/').pop()}:${loc.lineNumber}` : '' });
  });
  page.on('pageerror', (e) => pageErrors.push({ message: String(e.message || e).slice(0, 1000), stack: String(e.stack || '').split('\n').slice(0, 4).join('\n') }));
  page.on('requestfailed', (r) => { if (!match(cfg.ignoreRequests, r.url())) failedRequests.push({ url: r.url().slice(0, 300), method: r.method(), status: 'ERR', error: r.failure()?.errorText || '' }); });
  page.on('response', (r) => { if (r.status() >= 400 && !match(cfg.ignoreRequests, r.url())) failedRequests.push({ url: r.url().slice(0, 300), method: r.request().method(), status: r.status() }); });

  return {
    consoleMsgs, pageErrors, failedRequests,
    summary() {
      return {
        consoleErrors: consoleMsgs.filter((m) => m.type === 'error').length,
        consoleWarnings: consoleMsgs.filter((m) => m.type === 'warning').length,
        pageErrors: pageErrors.length,
        failedRequests: failedRequests.length,
      };
    },
  };
}
