import { localTime } from './interceptors.js';

/**
 * 신고 시점의 컨텍스트 스냅샷. 공통 항목(브라우저·화면·메모리·연결·localStorage·최근 이벤트·상태 변화·경로)에
 * 앱이 준 `context()` 결과(카메라·메뉴·켜진 데이터 등 앱 전용)를 합친다.
 * @param {object} kit  createBugfix() 결과
 */
export function captureContext(kit) {
  let memory = null;
  try { const pm = performance?.memory; if (pm) memory = { usedMB: +(pm.usedJSHeapSize / 1048576).toFixed(1), limitMB: +(pm.jsHeapSizeLimit / 1048576).toFixed(1) }; } catch { /* 미지원 */ }
  let connection = null;
  try { const nc = navigator.connection; if (nc) connection = { effectiveType: nc.effectiveType, downlink: nc.downlink, rtt: nc.rtt }; } catch { /* 미지원 */ }

  // localStorage - 민감 키 제외, 값은 200자
  let storage = null;
  try {
    const exclude = ['token', 'password', 'secret', 'auth-tokens-', ...(kit.options.storageExclude || [])].map((s) => s.toLowerCase());
    storage = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (exclude.some((p) => key.toLowerCase().includes(p))) continue;
      const val = localStorage.getItem(key);
      storage[key] = val && val.length > 200 ? val.slice(0, 200) + '…' : val;
    }
  } catch { /* 접근 불가 */ }

  let app = {};
  try { app = kit.options.context?.() || {}; } catch (e) { app = { _contextError: String(e?.message || e) }; }

  return {
    datetime: localTime(true),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    url: window.location.href,
    browser: { userAgent: navigator.userAgent, language: navigator.language, platform: navigator.platform },
    screen: { resolution: `${screen.width}x${screen.height}`, viewport: `${window.innerWidth}x${window.innerHeight}`, devicePixelRatio: window.devicePixelRatio },
    memory,
    connection,
    ...app,
    recentEvents: kit.getEvents().slice(-50).reverse(),
    mutationLog: kit.getMutations().slice(-100).reverse(),
    routeHistory: kit.getRoutes(),
    storage,
  };
}
