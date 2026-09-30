/**
 * 설정 없이 붙는 진입점 - 빌드 플러그인(devloop/vite 등)이 index.html 에 넣어 부른다.
 * 앱 코드에는 아무것도 안 넣어도 되고, 더 담고 싶은 것이 있으면 window.__devloop 에 걸어 둔다(전부 선택):
 *   window.__devloop = {
 *     context: () => ({ scenario, menu }),   // 신고에 붙일 앱 상태
 *     user: () => 'hskim',                    // 보고자
 *     beforeCapture: () => viewer.render(),   // 캔버스 찍기 직전(preserveDrawingBuffer 가 꺼진 WebGL)
 *     mutation: zustandSource(useStore),      // 상태 변화 기록 소스
 *     options: { ... },                       // createDevloop 옵션 덮어쓰기
 *   }
 */
import { createDevloop } from './index.js';

export function autoMount(o = {}) {
  if (typeof window === 'undefined') return null;
  if (window.devloopKit) return window.devloopKit;
  const hook = () => window.__devloop || {};
  const restBase = o.restBase ? String(o.restBase).replace(/\/+$/, '') : '';
  const kit = createDevloop({
    endpoint: o.endpoint || '/devloop',
    project: o.project || 'app',
    apiKey: o.apiKey || '',
    user: () => { try { return hook().user?.() ?? 'anonymous'; } catch { return 'anonymous'; } },
    context: () => { try { return hook().context?.() ?? {}; } catch { return {}; } },
    capture: {
      // 화면에 보이는 큰 캔버스(지도·3D)를 배경으로 깐다. WebGL 이 preserveDrawingBuffer 없이 그리면 beforeCapture 로 한 프레임 다시 그린다
      canvases: () => [...document.querySelectorAll('canvas')].filter((c) => c.width > 200 && c.height > 200 && c.getClientRects().length).sort((a, b) => b.width * b.height - a.width * a.height).slice(0, 2),
      beforeCapture: () => { try { hook().beforeCapture?.(); } catch { /* 무시 */ } },
    },
    // 백엔드 어댑터(devloop-adapter)의 최근 로그 끝점 - REST 경로를 알 때만
    backendLogs: restBase ? async () => { const r = await fetch(`${restBase}/debug/recent-logs?level=INFO&limit=300`); if (!r.ok) return []; const j = await r.json(); return Array.isArray(j) ? j : (j?.content ?? []); } : undefined,
    interceptors: { console: true, network: { fetch: true, xhr: true }, router: true, mutation: hook().mutation },
    hotkeys: { report: 'Shift+F9', viewer: 'Shift+F10' },
    ...(hook().options || {}),
  }).mount();
  window.devloopKit = kit;
  return kit;
}

export { createDevloop } from './index.js';
export { reduxMiddleware, zustandSource } from './core/interceptors.js';
