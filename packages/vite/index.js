/**
 * bugfix-kit Vite 플러그인 - 플러그인 한 줄로 앱에 붙는다. 앱 코드는 안 건드린다.
 *
 *   // vite.config.js
 *   import bugfixKit from 'bugfix-kit/vite';
 *   export default defineConfig({ plugins: [react(), bugfixKit({ restBase: '/rest', server: 'http://192.168.10.182:8791' })] });
 *
 * 하는 일:
 *   - index.html 에 SDK 자동 마운트 스크립트를 넣는다 (Shift+F9 신고 · Shift+F10 목록. 콘솔·fetch/XHR·주소 변화·큰 캔버스 캡처)
 *   - 신고 서버 주소를 정한다: endpoint 옵션 → VITE_BUGFIX_ENDPOINT → `<restBase>/bugfix`(백엔드 어댑터의 프록시 라우트) → '/bugfix'
 *   - 개발 서버(vite dev)에서는 '/bugfix' 를 인스턴스(server 옵션 또는 VITE_BUGFIX_SERVER)로 프록시한다
 *   - 빌드 결과에 /bugfix/ 와 /bugfix/ui/ 안내 페이지를 넣어, 앱 주소 뒤에 /bugfix 만 붙여도 콘솔로 간다(정적 호스팅이라 서버 설정 없이)
 *
 * 옵션(전부 선택): project(기본 package.json name), apiKey(기본 VITE_BUGFIX_KEY), restBase(기본 VITE_API_URL 이 상대 경로면 그것),
 *                 endpoint, server, redirect(false 면 안내 페이지 안 만듦)
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadEnv } from 'vite';

export default function bugfixKit(opts = {}) {
  let resolved = null;
  return {
    name: 'bugfix-kit',
    config(cfg, { command, mode }) {
      const root = cfg.root || process.cwd();
      const env = loadEnv(mode, root, '');
      const rel = (u) => typeof u === 'string' && u.startsWith('/');
      const restBase = (opts.restBase ?? (rel(env.VITE_API_URL) ? env.VITE_API_URL : '')).replace(/\/+$/, '');
      const server = (opts.server || env.VITE_BUGFIX_SERVER || env.BUGFIX_SERVER || '').replace(/\/+$/, '');
      const isServe = command === 'serve';
      const endpoint = opts.endpoint || env.VITE_BUGFIX_ENDPOINT || (isServe && server ? '/bugfix' : (restBase ? `${restBase}/bugfix` : '/bugfix'));
      let project = opts.project || env.VITE_BUGFIX_PROJECT;
      if (!project) { try { project = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).name; } catch { project = 'app'; } }
      resolved = { endpoint, project, apiKey: opts.apiKey || env.VITE_BUGFIX_KEY || '', restBase, server, isServe };
      // 개발 서버: /bugfix → 인스턴스 (앱 백엔드를 안 거치므로 로컬에서도 바로 된다)
      if (isServe && server) return { server: { proxy: { '/bugfix': { target: server, changeOrigin: true, rewrite: (p) => p.replace(/^\/bugfix/, '/api') } } } };
      return {};
    },
    // 'pre': Vite 가 index.html 을 번들하기 전에 넣어야 이 인라인 모듈도 같이 번들된다(뒤에 넣으면 import 가 그대로 남아 브라우저가 못 푼다)
    transformIndexHtml: {
      order: 'pre',
      handler() {
        const { endpoint, project, apiKey, restBase } = resolved;
        return [{ tag: 'script', attrs: { type: 'module' }, injectTo: 'body', children: `import { autoMount } from 'bugfix-kit/client/auto'; autoMount(${JSON.stringify({ endpoint, project, apiKey, restBase })});` }];
      },
    },
    generateBundle() {
      if (opts.redirect === false || resolved.isServe) return;
      const ui = `${resolved.endpoint.replace(/\/+$/, '')}/ui/`;
      if (ui === '/bugfix/ui/') return;   // 서버가 /bugfix 를 직접 넘기는 구성 - 안내 페이지가 오히려 가린다
      const page = (to) => `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${to}"><title>bugfix-kit</title><a href="${to}">${to}</a>`;
      this.emitFile({ type: 'asset', fileName: 'bugfix/index.html', source: page(ui) });
      this.emitFile({ type: 'asset', fileName: 'bugfix/ui/index.html', source: page(ui) });
    },
  };
}
