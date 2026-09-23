/**
 * bugfix-kit webpack 플러그인(Vue CLI·CRA·순수 webpack 5) - Vite 플러그인(bugfix-kit/vite)과 같은 일을 한다.
 *
 *   // vue.config.js
 *   const bugfixKit = require('bugfix-kit/webpack');
 *   module.exports = { configureWebpack: { plugins: [bugfixKit({ project: 'lhdt', restBase: process.env.VUE_APP_REST_SERVER, hooks: './src/utils/bugfixHooks.js' })] } };
 *
 * 하는 일:
 *   - 앱 엔트리 뒤에 SDK 자동 마운트 모듈을 붙인다 (Shift+F9 신고 · Shift+F10 목록. 콘솔·fetch/XHR·주소 변화·큰 캔버스 캡처)
 *   - 신고 서버 주소를 정한다: endpoint 옵션 → VUE_APP_BUGFIX_ENDPOINT/REACT_APP_BUGFIX_ENDPOINT → `<restBase>/bugfix` → '/bugfix'
 *   - 빌드 결과에 /bugfix/ 와 /bugfix/ui/ 안내 페이지를 넣어 앱 주소 뒤에 /bugfix 만 붙여도 콘솔로 간다
 *   - hooks 옵션(앱 파일 경로)을 주면 그 모듈을 먼저 실행한다 - window.__bugfix 로 앱 상태·보고자·WebGL 다시 그리기 등을 더한다
 *
 * 옵션(전부 선택): project(기본 package.json name), apiKey(기본 VUE_APP_BUGFIX_KEY/REACT_APP_BUGFIX_KEY), restBase, endpoint, hooks,
 *                 enabled(false 면 아무것도 안 함 - 운영 빌드처럼 키가 없을 때), redirect(false 면 안내 페이지 안 만듦), entry(기본 'app'·'main' 중 있는 것)
 */
const fs = require('node:fs');
const path = require('node:path');

class BugfixKitWebpackPlugin {
  constructor(opts = {}) { this.opts = opts; }

  apply(compiler) {
    const o = this.opts;
    const env = process.env;
    const key = o.apiKey || env.VUE_APP_BUGFIX_KEY || env.REACT_APP_BUGFIX_KEY || env.BUGFIX_KEY || '';
    const enabled = o.enabled !== undefined ? !!o.enabled : true;
    if (!enabled) return;
    const rel = (u) => typeof u === 'string' && u.startsWith('/');
    const restBase = String(o.restBase || (rel(env.VUE_APP_API_URL) ? env.VUE_APP_API_URL : '') || '').replace(/\/+$/, '');
    const endpoint = o.endpoint || env.VUE_APP_BUGFIX_ENDPOINT || env.REACT_APP_BUGFIX_ENDPOINT || (restBase ? `${restBase}/bugfix` : '/bugfix');
    let project = o.project || env.VUE_APP_BUGFIX_PROJECT || env.REACT_APP_BUGFIX_PROJECT;
    if (!project) { try { project = JSON.parse(fs.readFileSync(path.join(compiler.context, 'package.json'), 'utf8')).name; } catch { project = 'app'; } }
    const auto = { endpoint, project, apiKey: key, restBase };
    const { webpack } = compiler;

    // 자동 마운트 값은 DefinePlugin 으로, 모듈은 EntryPlugin 으로 앱 엔트리 뒤에
    new webpack.DefinePlugin({ __BUGFIX_AUTO__: JSON.stringify(auto) }).apply(compiler);
    compiler.hooks.entryOption.tap('bugfix-kit', (context, entry) => {
      const names = typeof entry === 'object' && entry ? Object.keys(entry) : [];
      const name = o.entry || names.find((n) => n === 'app') || names.find((n) => n === 'main') || names[0] || 'main';
      if (o.hooks) new webpack.EntryPlugin(context, path.resolve(context, o.hooks), { name }).apply(compiler);
      new webpack.EntryPlugin(context, require.resolve('./bootstrap.js'), { name }).apply(compiler);
    });

    // 안내 페이지: 정적 호스팅에서도 앱주소/bugfix/ → 콘솔
    if (o.redirect !== false) {
      const ui = `${endpoint.replace(/\/+$/, '')}/ui/`;
      if (ui !== '/bugfix/ui/') {
        compiler.hooks.thisCompilation.tap('bugfix-kit', (compilation) => {
          compilation.hooks.processAssets.tap({ name: 'bugfix-kit', stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL }, () => {
            const page = `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${ui}"><title>bugfix-kit</title><a href="${ui}">${ui}</a>`;
            for (const f of ['bugfix/index.html', 'bugfix/ui/index.html']) if (!compilation.getAsset(f)) compilation.emitAsset(f, new webpack.sources.RawSource(page));
          });
        });
      }
    }
  }
}

module.exports = (opts) => new BugfixKitWebpackPlugin(opts);
module.exports.BugfixKitWebpackPlugin = BugfixKitWebpackPlugin;
