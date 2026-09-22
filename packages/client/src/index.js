import { defineCustomElement } from 'vue';
import ReportModal from './ui/ReportModal.vue';
import Viewer from './ui/Viewer.vue';
import { createBugfix } from './core/kit.js';

export { createBugfix };
export { captureScreen } from './core/capture.js';

/** Web Component 등록 - <bugfix-report-modal>, <bugfix-viewer>. 두 번 불러도 안전 */
export function register() {
  if (!customElements.get('bugfix-report-modal')) customElements.define('bugfix-report-modal', defineCustomElement(ReportModal));
  if (!customElements.get('bugfix-viewer')) customElements.define('bugfix-viewer', defineCustomElement(Viewer));
}
register();

/** 한 줄 설치: createBugfix(options).mount() */
export function install(options) {
  return createBugfix(options).mount();
}
