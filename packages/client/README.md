# @bugfix-kit/client

브라우저 SDK. 콘솔·네트워크·상태 변화·경로·이벤트를 링 버퍼에 모아 두고, 신고 때 화면(WebGL 캔버스 + DOM)을 합성해
`bugfix-server` 로 보낸다. 저장된 리포트와 Claude 자동 수정 진행(실시간 로그·PR·후속 대화)을 보는 뷰어도 들어 있다.

두 가지 빌드:

| 빌드 | 쓰는 곳 | 크기(gzip) |
|---|---|---|
| `dist/bugfix-client.iife.js` / `bugfix-client.js` | 아무 앱(React·순수 HTML·다른 Vue 버전). Web Component `<bugfix-report-modal>`, `<bugfix-viewer>` + Vue 런타임 포함 | ~100 KB |
| `dist/bugfix-client.vue.js` + `dist/style.css` | Vue 3 앱. 일반 컴포넌트, vue 는 앱 것을 쓴다 | ~75 KB |

## Web Component 로 쓰기 (어떤 앱이든)

```html
<script src="…/bugfix-client.iife.js"></script>
<script>
  const kit = BugfixKit.createBugfix({
    endpoint: 'https://dev.example.com/bugfix',   // bugfix-server 의 /api 까지 (nginx 로 프록시)
    project: 'myapp',
    apiKey: 'xxxx',                                // 서버 설정의 projects.myapp.apiKey (공개 키, 남용 방지 수준)
    user: () => currentUser.id,
    context: () => ({ page: router.currentRoute.value.name, camera: viewer.camera.positionCartographic }),
    capture: { canvases: () => [viewer.canvas], beforeCapture: () => viewer.render() },
    interceptors: { console: true, network: { fetch: true, xhr: true }, router: true },
    hotkeys: { report: 'Shift+F9', viewer: 'Shift+F10' },
  }).mount();
</script>
```

## React 앱에서 쓰기

Web Component 빌드를 그대로 쓴다(React 버전·상태 라이브러리 무관). `main.tsx` 에서 한 번 만들고 `mount()`.

```tsx
import { createBugfix, reduxMiddleware } from 'bugfix-kit/client';   // ESM (Vue 런타임 포함, ~115KB gzip)

const mw = reduxMiddleware();                                       // Redux 면 (Zustand 는 zustandSource(useStore))
export const store = configureStore({ reducer, middleware: (g) => g().concat(mw) });

export const kit = createBugfix({
  endpoint: import.meta.env.VITE_BUGFIX_ENDPOINT, project: 'myapp', apiKey: import.meta.env.VITE_BUGFIX_KEY,
  user: () => auth.user?.id,
  context: () => ({ route: window.location.pathname, selection: store.getState().selection }),
  capture: { canvases: () => [document.querySelector('canvas')!] },            // WebGL 캔버스가 있으면 (preserveDrawingBuffer)
  interceptors: { console: true, network: { fetch: true, xhr: true }, router: true, mutation: mw.source },   // router: true = history API 패치(react-router 포함)
  projects: [{ key: 'myapp', label: '앱' }, { key: 'bugfix-kit', label: '버그 신고 도구' }],
}).mount();                                                          // <bugfix-report-modal>·<bugfix-viewer> 를 body 에 붙임
```
어디서든 `kit.openReport()` / `kit.openViewer()` (또는 Shift+F9 / Shift+F10). 타입은 `types/index.d.ts` 로 제공.

## Vue 3 앱에서 쓰기

```js
// main.js
import { createBugfix } from 'bugfix-kit/client/vue';
import 'bugfix-kit/client/style.css';
export const kit = createBugfix({
  endpoint: process.env.VUE_APP_BUGFIX_ENDPOINT, project: 'myapp', apiKey: process.env.VUE_APP_BUGFIX_KEY,
  interceptors: { console: true, network: { axios: [{ instance: rest, label: 'rest' }] }, mutation: store, router, events: { emitter, skip: ['loader:show'] } },
  context: () => ({ … }),
  notify: ({ title, message, type }) => emitter.emit('alert', { title, message, type }),
});
```
```vue
<!-- App.vue -->
<ReportModal :kit="kit" @open-viewer="$refs.viewer.open()" />
<Viewer ref="viewer" :kit="kit" />
<script> import { ReportModal, Viewer } from 'bugfix-kit/client/vue'; …
  mounted() { this.kit.register('report', () => this.$refs.modal.open()); this.kit.register('viewer', () => this.$refs.viewer.open()); } </script>
```

## 옵션

| 키 | 설명 |
|---|---|
| `endpoint` | bugfix-server 주소(`…/api`). 비우면 서버 저장·목록 없이 복사·다운로드만 |
| `project`, `apiKey`, `user` | 서버 설정의 프로젝트 이름·키, 보고자 표시명(문자열 또는 함수) |
| `projects` | 신고 대상 여러 개: `[{ key: 'myapp', label: '앱', apiKey }, { key: 'bugfix-kit', label: '버그 신고 도구' }]` - 모달에 '신고 대상' 선택, 뷰어에 프로젝트 전환이 생긴다. 도구 자체의 버그를 같은 파이프라인으로 보내는 용도 |
| `context()` | 앱 전용 컨텍스트. 공통 항목(브라우저·화면·메모리·연결·localStorage·최근 이벤트·상태 변화·경로)에 합쳐진다 |
| `capture.canvases()` | 먼저 그릴 WebGL 캔버스(preserveDrawingBuffer 필요). `beforeCapture`, `ignore`(선택자) |
| `backendLogs()` | 신고 시 백엔드 로그(네트워크 오류가 있을 때만 호출) |
| `interceptors` | `console`(true 또는 `{max, silent:[regex]}`), `network`(`{axios:[…], fetch, xhr, ignore}`), `mutation`(store.subscribe), `router`(vue-router 또는 true=history 패치), `events`(emitter 또는 `{emitter, skip}`) |
| `hotkeys` | `{ report, viewer }` - `'Shift+F9'` 형식. false 면 없음 |
| `notify` | 알림 훅. 없으면 뷰어 안에 표시 |
| `storageExclude` | localStorage 스냅샷에서 뺄 키 조각 |

## 개인정보

- 네트워크 로그: `/auth|login|token|password…` 경로와 `password|token|authorization…` 키가 있는 본문은 `[masked]`.
- localStorage: `token|password|secret|auth-tokens-` 포함 키 제외, 값 200자.
- 서버는 리포트 원문을 PR 에 넣지 않고, Claude 에게는 `user`·`routeHistory` 를 뺀 컨텍스트와 오류 위주로 추린 로그만 준다.

## 개발

```bash
npm run build                      # dist/ 세 번들
python3 -m http.server 8792        # test/index.html?auto=1 - 헤드리스 점검 (bugfix-server :8791 필요)
```
