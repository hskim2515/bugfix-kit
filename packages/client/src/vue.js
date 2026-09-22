// Vue 3 앱용 진입점 - vue 를 번들에 넣지 않는다.
//   import { createBugfix, ReportModal, Viewer } from '@bugfix-kit/client/vue'
//   const kit = createBugfix({ … });  app.provide('bugfixKit', kit)  또는 컴포넌트에 :kit="kit"
//   <ReportModal :kit="kit" @open-viewer="viewer.open()" />  <Viewer ref="viewer" :kit="kit" />
export { createBugfix } from './core/kit.js';
export { captureScreen } from './core/capture.js';
export { default as ReportModal } from './ui/ReportModal.vue';
export { default as Viewer } from './ui/Viewer.vue';
