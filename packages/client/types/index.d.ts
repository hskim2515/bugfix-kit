// bugfix-kit/client 타입 (Web Component 빌드 · Vue 빌드 공통)
export interface BugfixProject { key: string; label?: string; apiKey?: string }
export interface BugfixNotice { title: string; message: string; type?: 'success' | 'error' | 'info' }
export interface BugfixInterceptors {
  console?: boolean | { max?: number; silent?: RegExp[] };
  network?: { axios?: Array<unknown | { instance: unknown; label?: string }>; fetch?: boolean; xhr?: boolean; ignore?: Array<string | RegExp>; max?: number };
  /** Vuex store, 또는 { subscribe(fn) } 형태(reduxMiddleware().source, zustandSource(useStore)) */
  mutation?: { subscribe: (fn: (m: { type: string; payload?: unknown }) => void) => unknown };
  /** vue-router(afterEach) 또는 true = history API 패치 (react-router 등) */
  router?: true | { afterEach: (fn: (to: any, from: any) => void) => void };
  events?: { emit: Function } | { emitter: { emit: Function }; skip?: string[] };
}
export interface BugfixOptions {
  endpoint?: string;
  project?: string;
  projects?: Array<string | BugfixProject>;
  apiKey?: string;
  /** 관리 콘솔 전용 - 운영자 키 (앱에는 넣지 않는다) */
  adminKey?: string;
  user?: string | (() => string);
  context?: () => Record<string, unknown>;
  capture?: { canvases?: () => HTMLCanvasElement[]; beforeCapture?: () => void; ignore?: string[]; ignoreElement?: (el: Element) => boolean };
  backendLogs?: () => Promise<unknown[]>;
  interceptors?: BugfixInterceptors;
  hotkeys?: false | { report?: string; viewer?: string };
  notify?: (n: BugfixNotice) => void;
  storageExclude?: string[];
}
export interface BugfixApi {
  enabled: boolean;
  info(): Promise<{ name: string; fixFrom: 'app' | 'admin'; canFix: boolean; autoMerge: boolean }>;
  save(payload: Record<string, unknown>): Promise<{ bugReportId: number }>;
  list(): Promise<unknown[]>;
  get(id: number): Promise<unknown>;
  fixState(id: number): Promise<unknown>;
  setStatus(id: number, status: string): Promise<null>;
  remove(id: number): Promise<null>;
  requestFix(id: number): Promise<unknown>;
  fixChat(id: number, message: string, mode: 'ask' | 'change'): Promise<unknown>;
  fixSync(id: number): Promise<unknown>;
}
export interface BugfixKit {
  options: BugfixOptions;
  projects: BugfixProject[];
  project: string;
  api: BugfixApi;
  setProject(key: string): void;
  mount(): BugfixKit;
  openReport(): void;
  openViewer(): void;
  register(kind: 'report' | 'viewer', fn: () => void): void;
  captureScreen(extra?: Record<string, unknown>): Promise<string>;
  captureContext(): Record<string, unknown>;
  getLogs(): unknown[]; getNetwork(): unknown[]; getMutations(): unknown[]; getRoutes(): unknown[]; getEvents(): unknown[];
}
export function createBugfix(options?: BugfixOptions): BugfixKit;
export function install(options?: BugfixOptions): BugfixKit;
export function register(): void;
export function captureScreen(opt?: Record<string, unknown>): Promise<string>;
export function reduxMiddleware(): ((api: any) => (next: any) => (action: any) => any) & { source: { subscribe: (fn: Function) => () => void } };
export function zustandSource(useStore: any): { subscribe: (fn: Function) => unknown };

/** 설정 없이 붙는 진입점(bugfix-kit/client/auto) - 빌드 플러그인이 부른다. window.__bugfix 로 선택 항목을 더한다 */
export function autoMount(options?: { endpoint?: string; project?: string; apiKey?: string; restBase?: string }): BugfixKit | null;
