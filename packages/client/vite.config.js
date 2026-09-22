import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 자체 완결 빌드: Vue 런타임 + html2canvas 를 포함한 Web Component 번들.
// 어떤 프레임워크의 앱에서도 <script> 하나로 <bugfix-report-modal>, <bugfix-viewer> 를 쓸 수 있다.
export default defineConfig({
  plugins: [vue({ customElement: true })],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'BugfixKit',
      formats: ['es', 'iife'],
      fileName: (f) => (f === 'es' ? 'bugfix-client.js' : 'bugfix-client.iife.js'),
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
