/**
 * 수집기 - 신고 직전 상황을 재구성할 재료를 링 버퍼에 모아 둔다.
 * 전부 선택 사항이고, 앱 프레임워크에 묶이지 않는다:
 *   console  : console.log/warn/error + window error/unhandledrejection
 *   network  : axios 인스턴스(interceptors) 와/또는 fetch·XHR 패치. 인증 관련 본문은 마스킹
 *   mutation : `subscribe(fn)` 을 가진 스토어(Vuex, Pinia $subscribe 래퍼 등)
 *   router   : `afterEach(fn)` 을 가진 라우터(vue-router) 또는 history API 패치
 *   events   : `emit(type, payload)` 을 가진 이벤트 버스(mitt 등)
 */

const pad = (n, l = 2) => String(n).padStart(l, '0');
export function localTime(withDate = false) {
  const d = new Date();
  const t = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(d.getMilliseconds(), 3)}`;
  return withDate ? `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${t}` : t;
}

function ring(max) {
  const arr = [];
  return { push(e) { arr.push(e); if (arr.length > max) arr.shift(); }, get: () => [...arr] };
}

// ── console ────────────────────────────────────────────────────────────────
const DEFAULT_SILENT = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];

function serialize(a) {
  if (a === null || a === undefined) return String(a);
  if (a instanceof Error) return a.stack || a.toString();
  if (typeof a === 'object') { try { return JSON.stringify(a); } catch { return String(a); } }
  return String(a);
}

export function installConsole({ max = 200, silent = DEFAULT_SILENT } = {}) {
  const logs = ring(max);
  for (const method of ['log', 'warn', 'error']) {
    const orig = console[method].bind(console);
    console[method] = (...args) => {
      const message = args.map(serialize).join(' ');
      if (silent.some((p) => p.test(message))) return;     // 노이즈는 콘솔에도 안 찍는다
      logs.push({ level: method, time: localTime(true), message });
      orig(...args);
    };
  }
  window.addEventListener('error', (e) => logs.push({ level: 'error', time: localTime(true), message: `[GlobalError] ${e.message} (${e.filename}:${e.lineno})` }));
  window.addEventListener('unhandledrejection', (e) => {
    const msg = e.reason instanceof Error ? e.reason.message : String(e.reason);
    logs.push({ level: 'error', time: localTime(true), message: `[UnhandledRejection] ${msg}` });
  });
  return logs.get;
}

// ── network ────────────────────────────────────────────────────────────────
// 인증·비밀번호 관련 요청은 본문을 기록하지 않는다 - 리포트가 Claude(외부)와 관리자에게 전달되므로
const SENSITIVE_URL = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i;
const SENSITIVE_KEY = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;

function truncate(data, maxLen = 2000) {
  if (data === null || data === undefined) return null;
  let str;
  try { str = typeof data === 'string' ? data : JSON.stringify(data); } catch { return '[unserializable]'; }
  return str.length > maxLen ? str.slice(0, maxLen) + '…[truncated]' : str;
}
function safeBody(url, v) {
  if (v == null) return v;
  const str = typeof v === 'string' ? v : (() => { try { return JSON.stringify(v); } catch { return String(v); } })();
  if (SENSITIVE_URL.test(url || '') || SENSITIVE_KEY.test(str)) return '[masked]';
  return truncate(v);
}

export function installNetwork({ max = 50, axios = [], fetch: patchFetch = false, xhr = false, ignore = [] } = {}) {
  const reqs = ring(max);
  const skip = (url) => ignore.some((p) => (p instanceof RegExp ? p.test(url) : String(url).includes(p)));

  // axios: [instance] 또는 [{ instance, label }]
  for (const item of axios) {
    const inst = item?.interceptors ? item : item?.instance;
    const label = item?.label || 'axios';
    if (!inst?.interceptors) continue;
    inst.interceptors.request.use((c) => { c._bk = { t0: Date.now(), time: localTime(true) }; return c; }, (e) => Promise.reject(e));
    inst.interceptors.response.use((res) => {
      const n = res.config._bk || {};
      if (!skip(res.config.url)) reqs.push({ server: label, time: n.time, duration: n.t0 ? Date.now() - n.t0 : null, method: res.config.method?.toUpperCase(), url: res.config.url, params: truncate(res.config.params), requestBody: safeBody(res.config.url, res.config.data), status: res.status, responseBody: safeBody(res.config.url, res.data), error: null });
      return res;
    }, (err) => {
      const n = err.config?._bk || {};
      if (!skip(err.config?.url)) reqs.push({ server: label, time: n.time, duration: n.t0 ? Date.now() - n.t0 : null, method: err.config?.method?.toUpperCase(), url: err.config?.url, params: truncate(err.config?.params), requestBody: safeBody(err.config?.url, err.config?.data), status: err.response?.status ?? 'ERR', responseBody: safeBody(err.config?.url, err.response?.data), error: err.message });
      return Promise.reject(err);
    });
  }

  if (patchFetch && window.fetch) {
    const orig = window.fetch.bind(window);
    window.fetch = async (input, init = {}) => {
      const url = typeof input === 'string' ? input : input?.url;
      const t0 = Date.now(); const time = localTime(true);
      const method = (init.method || (typeof input !== 'string' && input?.method) || 'GET').toUpperCase();
      try {
        const res = await orig(input, init);
        if (!skip(url)) reqs.push({ server: 'fetch', time, duration: Date.now() - t0, method, url, params: null, requestBody: safeBody(url, init.body), status: res.status, responseBody: null, error: null });
        return res;
      } catch (e) {
        if (!skip(url)) reqs.push({ server: 'fetch', time, duration: Date.now() - t0, method, url, params: null, requestBody: safeBody(url, init.body), status: 'ERR', responseBody: null, error: e.message });
        throw e;
      }
    };
  }

  if (xhr && window.XMLHttpRequest) {
    const P = XMLHttpRequest.prototype;
    const open = P.open, send = P.send;
    P.open = function (method, url, ...rest) { this._bk = { method: String(method).toUpperCase(), url }; return open.call(this, method, url, ...rest); };
    P.send = function (body) {
      const n = this._bk || {}; const t0 = Date.now(); const time = localTime(true);
      this.addEventListener('loadend', () => {
        if (skip(n.url)) return;
        reqs.push({ server: 'xhr', time, duration: Date.now() - t0, method: n.method, url: n.url, params: null, requestBody: safeBody(n.url, body), status: this.status || 'ERR', responseBody: this.responseType === '' || this.responseType === 'text' ? safeBody(n.url, this.responseText) : null, error: this.status ? null : 'network error' });
      });
      return send.call(this, body);
    };
  }
  return reqs.get;
}

// ── mutation (Vuex 등) ─────────────────────────────────────────────────────
function safePayload(payload) {
  if (payload === null || payload === undefined) return null;
  if (typeof payload !== 'object') return payload;
  const ctor = payload?.constructor?.name ?? '';
  if (ctor.startsWith('Cesium') || (typeof HTMLElement !== 'undefined' && payload instanceof HTMLElement)) return `[${ctor}]`;
  try {
    const str = JSON.stringify(payload, (_, v) => {
      if (typeof HTMLElement !== 'undefined' && v instanceof HTMLElement) return '[HTMLElement]';
      if (v?.constructor?.name?.startsWith('Cesium')) return `[${v.constructor.name}]`;
      if (typeof v === 'function') return '[Function]';
      return v;
    });
    return str.length > 300 ? str.slice(0, 300) + '…' : JSON.parse(str);
  } catch { return '[unserializable]'; }
}

/** store.subscribe((mutation) => …) 형태(Vuex). Pinia 는 `{ subscribe: (fn) => store.$subscribe((m) => fn({ type: m.type, payload: m.events })) }` 로 감싸서 */
export function installMutation(store, { max = 100 } = {}) {
  const muts = ring(max);
  store.subscribe((m) => muts.push({ time: localTime(), type: m.type, payload: safePayload(m.payload) }));
  return muts.get;
}

// ── router ─────────────────────────────────────────────────────────────────
/** vue-router(afterEach) 또는 true(history API 패치) */
export function installRouter(router, { max = 20 } = {}) {
  const routes = ring(max);
  if (router && typeof router.afterEach === 'function') {
    router.afterEach((to, from) => routes.push({ time: localTime(), from: from.fullPath || '(초기)', to: to.fullPath, name: String(to.name ?? '') }));
  } else {
    let last = location.pathname + location.search + location.hash;
    const rec = () => { const cur = location.pathname + location.search + location.hash; if (cur !== last) { routes.push({ time: localTime(), from: last, to: cur, name: '' }); last = cur; } };
    for (const m of ['pushState', 'replaceState']) { const o = history[m]; history[m] = function (...a) { const r = o.apply(this, a); rec(); return r; }; }
    window.addEventListener('popstate', rec); window.addEventListener('hashchange', rec);
  }
  return routes.get;
}

// ── events (이벤트 버스) ────────────────────────────────────────────────────
export function installEvents(emitter, { max = 80, skip = [] } = {}) {
  const evs = ring(max);
  const skipSet = new Set(skip);
  const orig = emitter.emit.bind(emitter);
  emitter.emit = (type, payload) => { if (!skipSet.has(type)) evs.push({ time: localTime(), type }); return orig(type, payload); };
  return evs.get;
}

// ── Redux / Zustand 등 "액션·상태 변화" 어댑터 ──────────────────────────────
/**
 * Redux 미들웨어 - 디스패치된 액션을 mutation 로그로 모은다.
 *   const mw = reduxMiddleware();
 *   const store = configureStore({ reducer, middleware: (g) => g().concat(mw) });
 *   createBugfix({ interceptors: { mutation: mw.source } });
 */
export function reduxMiddleware() {
  const listeners = new Set();
  const mw = () => (next) => (action) => {
    const type = typeof action === 'function' ? '(thunk)' : String(action?.type ?? '(unknown)');
    for (const fn of listeners) { try { fn({ type, payload: typeof action === 'object' ? action.payload : undefined }); } catch { /* 무시 */ } }
    return next(action);
  };
  mw.source = { subscribe: (fn) => { listeners.add(fn); return () => listeners.delete(fn); } };
  return mw;
}

/**
 * Zustand 스토어 - 상태 변화를 mutation 로그로 (바뀐 최상위 키만 기록).
 *   createBugfix({ interceptors: { mutation: zustandSource(useStore) } });
 */
export function zustandSource(useStore) {
  return {
    subscribe: (fn) => useStore.subscribe((state, prev) => {
      const changed = Object.keys(state).filter((k) => state[k] !== prev?.[k]);
      fn({ type: `set(${changed.join(',') || '?'})`, payload: Object.fromEntries(changed.slice(0, 5).map((k) => [k, state[k]])) });
    }),
  };
}
