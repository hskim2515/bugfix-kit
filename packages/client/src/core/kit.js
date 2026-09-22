import { createApi } from './api.js';
import { captureScreen } from './capture.js';
import { captureContext } from './context.js';
import { installConsole, installNetwork, installMutation, installRouter, installEvents } from './interceptors.js';

const noop = () => [];

/**
 * SDK 진입점.
 *
 *   const kit = createBugfix({
 *     endpoint: 'https://lhdt.gaia3d.dev/bugfix',   // bugfix-server (…/api 까지. 비우면 서버 저장 없이 복사·다운로드만)
 *     project: 'lhdt',
 *     apiKey: '…',                                   // X-Bugfix-Key (공개 키 - 남용 방지 수준)
 *     user: () => loginId,                           // 보고자 표시명
 *     context: () => ({ camera, menus, activeData }),// 앱 전용 컨텍스트
 *     capture: { canvases: () => [viewer.canvas], beforeCapture: () => viewer.render(), ignore: ['.fab'] },
 *     backendLogs: async () => [...],                // 신고 시 백엔드 로그(선택). 네트워크 오류가 있을 때만 부른다
 *     interceptors: { console: true, network: { axios: [rest, gis], fetch: false }, mutation: store, router, events: emitter },
 *     hotkeys: { report: 'Shift+F9', viewer: 'Shift+F10' },
 *     notify: ({ title, message, type }) => …,       // 알림 훅(없으면 UI 안에 표시)
 *   });
 *   kit.mount();            // <bugfix-report-modal>, <bugfix-viewer> 를 body 에 붙인다 (Web Component 빌드)
 *   kit.openReport(); kit.openViewer();
 */
export function createBugfix(options = {}) {
  const opt = { project: 'default', hotkeys: { report: 'Shift+F9', viewer: 'Shift+F10' }, interceptors: { console: true }, ...options };
  const ic = opt.interceptors || {};
  const getLogs = ic.console === false ? noop : installConsole(ic.console === true ? {} : ic.console);
  const getNetwork = ic.network ? installNetwork(ic.network) : noop;
  const getMutations = ic.mutation ? installMutation(ic.mutation) : noop;
  const getRoutes = ic.router ? installRouter(ic.router === true ? null : ic.router) : noop;
  const getEvents = ic.events ? installEvents(ic.events.emitter || ic.events, ic.events.emitter ? ic.events : {}) : noop;

  // 신고 대상 프로젝트 목록: projects: [{ key, label, apiKey? }]. 없으면 project 하나. 첫 항목이 기본
  const projects = (opt.projects?.length ? opt.projects : [{ key: opt.project, label: opt.project }]).map((p) => (typeof p === 'string' ? { key: p, label: p } : p));
  const kit = {
    options: opt,
    projects,
    project: projects[0].key,
    api: createApi({ ...opt, project: projects[0].key, apiKey: projects[0].apiKey ?? opt.apiKey }),
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(key) {
      const p = projects.find((x) => x.key === key);
      if (!p) return;
      kit.project = p.key;
      kit.api = createApi({ ...opt, project: p.key, apiKey: p.apiKey ?? opt.apiKey });
    },
    getLogs, getNetwork, getMutations, getRoutes, getEvents,
    captureScreen: (extra = {}) => captureScreen({ ...(opt.capture || {}), ...extra, ignore: [...(opt.capture?.ignore || []), ...(extra.ignore || [])] }),
    captureContext: () => captureContext(kit),
    fetchBackendLogs: async () => (opt.backendLogs ? await opt.backendLogs() : null),
    notify: (n) => { if (opt.notify) opt.notify(n); else kit._listeners.forEach((l) => l(n)); },
    _listeners: new Set(),
    onNotify(fn) { kit._listeners.add(fn); return () => kit._listeners.delete(fn); },
    _els: {},
    /** Web Component 빌드에서: 두 엘리먼트를 body 에 붙이고 kit 을 넘긴다 */
    mount() {
      if (kit._els.modal) return kit;
      const modal = document.createElement('bugfix-report-modal');
      const viewer = document.createElement('bugfix-viewer');
      modal.kit = kit; viewer.kit = kit;
      document.body.append(modal, viewer);
      kit._els = { modal, viewer };
      return kit;
    },
    openReport: () => kit._els.modal?.open?.() ?? kit._open?.report?.(),
    openViewer: () => kit._els.viewer?.open?.() ?? kit._open?.viewer?.(),
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(kind, fn) { kit._open[kind] = fn; },
  };

  if (opt.hotkeys) {
    const match = (e, spec) => {
      if (!spec) return false;
      const parts = spec.split('+').map((s) => s.trim().toLowerCase());
      const key = parts.pop();
      return e.key.toLowerCase() === key && parts.includes('shift') === e.shiftKey && parts.includes('ctrl') === e.ctrlKey && parts.includes('alt') === e.altKey && parts.includes('meta') === e.metaKey;
    };
    window.addEventListener('keydown', (e) => {
      if (match(e, opt.hotkeys.report)) { e.preventDefault(); kit.openReport(); }
      else if (match(e, opt.hotkeys.viewer)) { e.preventDefault(); kit.openViewer(); }
    });
  }
  return kit;
}
