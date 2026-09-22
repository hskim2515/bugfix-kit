import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Vue 앱용 빌드: vue 를 번들에 넣지 않고(peer) 일반 Vue 컴포넌트 + core 를 export 한다.
// 앱이 이미 Vue 3 이면 이 빌드가 가볍다. import { createBugfix, ReportModal, Viewer } from '@bugfix-kit/client/vue'
export default defineConfig({
  plugins: [vue()],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    lib: { entry: 'src/vue.js', formats: ['es'], fileName: () => 'bugfix-client.vue.js' },
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: false,
    rollupOptions: { external: ['vue'], output: { inlineDynamicImports: true } },
  },
});
