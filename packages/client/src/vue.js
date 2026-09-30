// Vue 3 앱용 진입점 - vue 를 번들에 넣지 않는다.
//   import { createDevloop, ReportModal, Viewer } from '@devloop/client/vue'
//   const kit = createDevloop({ … });  app.provide('devloopKit', kit)  또는 컴포넌트에 :kit="kit"
//   <ReportModal :kit="kit" @open-viewer="viewer.open()" />  <Viewer ref="viewer" :kit="kit" />
export { createDevloop } from './core/kit.js';
export { captureScreen } from './core/capture.js';
export { reduxMiddleware, zustandSource } from './core/interceptors.js';
export { default as ReportModal } from './ui/ReportModal.vue';
export { default as Viewer } from './ui/Viewer.vue';
