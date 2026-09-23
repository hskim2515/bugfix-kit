import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 자동 마운트 진입점(bugfix-kit/client/auto) - 빌드 플러그인이 index.html 에 넣는다. 자체 완결 ESM 번들
export default defineConfig({
  plugins: [vue({ customElement: true })],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    lib: { entry: 'src/auto.js', formats: ['es'], fileName: () => 'bugfix-client.auto.js' },
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
