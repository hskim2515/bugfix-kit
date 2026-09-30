import { defineCustomElement } from 'vue';
import ReportModal from './ui/ReportModal.vue';
import Viewer from './ui/Viewer.vue';
import { createDevloop } from './core/kit.js';

export { createDevloop };
export { captureScreen } from './core/capture.js';
export { reduxMiddleware, zustandSource } from './core/interceptors.js';
export * as fmt from './core/fmt.js';
export * as i18n from './core/i18n.js';

/** Web Component 등록 - <devloop-report-modal>, <devloop-viewer>. 두 번 불러도 안전 */
export function register() {
  if (!customElements.get('devloop-report-modal')) customElements.define('devloop-report-modal', defineCustomElement(ReportModal));
  if (!customElements.get('devloop-viewer')) customElements.define('devloop-viewer', defineCustomElement(Viewer));
}
register();

/** 한 줄 설치: createDevloop(options).mount() */
export function install(options) {
  return createDevloop(options).mount();
}
