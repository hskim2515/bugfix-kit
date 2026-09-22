import fs from 'node:fs';
import path from 'node:path';
import { loadConfig } from './config.js';
import { launchBrowser } from './browser.js';
import { startServer } from './serve.js';
import { login, stateFileFor, saveState } from './login.js';
import { runSteps } from './steps.js';
import { attachCollectors } from './collect.js';
import { writeReport } from './report.js';
import { compareDirs } from './compare.js';

export { loadConfig, launchBrowser, startServer, login, runSteps, attachCollectors, writeReport, compareDirs };

/**
 * 한 번의 점검: (dist 서빙) → 브라우저 → 로그인 → 절차 → 수집 → result.json + 스크린샷.
 * @param {object} opt  { config, url, scenario, steps, context, out, noServe, noDocker, headed, compare, log }
 * @returns {Promise<{ok:boolean, text:string, result:object}>}
 */
export async function check(opt = {}) {
  const log = opt.log || console;
  const cfg = await loadConfig(opt.config);
  const outDir = path.resolve(opt.out || 'front-check-out');
  fs.mkdirSync(outDir, { recursive: true });
  const t0 = Date.now();

  // 절차 결정: --steps > --scenario > --context(fromContext) > defaultSteps
  let steps = null;
  let scenarioName = null;
  if (opt.steps) steps = typeof opt.steps === 'string' ? JSON.parse(opt.steps) : opt.steps;
  else if (opt.scenario) {
    steps = [];
    for (const name of [].concat(opt.scenario)) {
      const sc = cfg.scenarios[name];
      if (!sc) throw new Error(`시나리오가 없습니다: ${name} (있는 것: ${Object.keys(cfg.scenarios).join(', ') || '없음'})`);
      steps.push(...(Array.isArray(sc) ? sc : sc.steps));
    }
    scenarioName = [].concat(opt.scenario).join('+');
  } else if (opt.context) {
    const ctx = JSON.parse(fs.readFileSync(opt.context, 'utf8'));
    if (typeof cfg.fromContext !== 'function') throw new Error('설정에 fromContext(ctx) 가 없어 --context 를 절차로 바꿀 수 없습니다');
    steps = cfg.fromContext(ctx) || cfg.defaultSteps;
    scenarioName = 'context';
  } else steps = cfg.defaultSteps;

  let server = null;
  let baseUrl = opt.url || cfg.baseUrl;
  const willServe = !opt.url && cfg.serve && !opt.noServe;
  if (!baseUrl && !willServe) throw new Error('대상 주소가 없습니다: --url, 설정 baseUrl, 또는 serve 중 하나');
  if (willServe && !fs.existsSync(path.resolve(cfg.dir, cfg.serve.dir, 'index.html'))) throw new Error(`서빙할 dist 가 없습니다: ${path.resolve(cfg.dir, cfg.serve.dir)} (먼저 빌드하세요)`);

  let browser = null;
  const data = { baseUrl, scenario: scenarioName, steps: [], failures: [], screenshots: [], collected: {}, console: [], pageErrors: [], failedRequests: [], login: null, fatal: null };
  try {
    // 브라우저를 먼저 - 못 띄우면 docker 로 다시 실행되는데, 그 전에 서버(포트)를 잡아 두면 컨테이너 안의 재실행이 EADDRINUSE 로 죽는다
    browser = await launchBrowser(cfg, { noDocker: opt.noDocker, headed: opt.headed, log });
    if (willServe) {
      server = await startServer({ ...cfg.serve, dir: path.resolve(cfg.dir, cfg.serve.dir) });
      baseUrl = server.url;
      data.baseUrl = baseUrl;
      log.info(`[front-check] ${cfg.serve.dir} 서빙 ${baseUrl}`);
    }
    const stateFile = stateFileFor(cfg);
    const context = await browser.newContext({
      viewport: { width: cfg.browser.viewport[0], height: cfg.browser.viewport[1] }, locale: cfg.browser.locale, ignoreHTTPSErrors: true,
      // 저장된 로그인 상태(쿠키+localStorage)가 있으면 로그인된 채로 시작
      ...(stateFile && fs.existsSync(stateFile) ? { storageState: stateFile } : {}),
    });
    const page = await context.newPage();
    page.setDefaultTimeout(cfg.browser.timeoutMs);
    const col = attachCollectors(page, cfg);
    try {
      data.login = await login(page, cfg, baseUrl, log);
      const r = await runSteps(page, steps, { baseUrl, outDir, timeoutMs: cfg.browser.timeoutMs, log });
      data.steps = r.results; data.failures = r.failures; data.screenshots = r.screenshots;
      if (!r.screenshots.length) { await page.screenshot({ path: path.join(outDir, 'final.png') }); data.screenshots.push('final.png'); }
    } catch (e) {
      data.fatal = String(e.message || e).split('\n')[0];
      try { await page.screenshot({ path: path.join(outDir, 'fatal.png') }); data.screenshots.push('fatal.png'); } catch { /* 무시 */ }
    }
    // 렌더 뒤늦은 오류까지 담는다
    await page.waitForTimeout(300);
    data.console = col.consoleMsgs; data.pageErrors = col.pageErrors; data.failedRequests = col.failedRequests; data.collected = col.summary();
    await context.close();
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) await server.close();
  }
  data.durationMs = Date.now() - t0;
  if (opt.compare) data.compare = compareDirs(path.resolve(opt.compare), outDir, outDir);
  const rep = writeReport(outDir, data, cfg.thresholds);
  return { ...rep, result: data, outDir };
}

/**
 * `front-check login`: 로그인 상태 파일을 만든다.
 *  - form 자격(계정 파일/FC_USER·FC_PASS)이 있으면 헤드리스로 폼 로그인 → 저장
 *  - 없으면 창을 띄워 사람이 로그인(SSO·MFA 포함) → done 선택자가 뜨면(또는 --wait 초 뒤) 저장
 */
export async function recordLogin(opt = {}) {
  const log = opt.log || console;
  const cfg = await loadConfig(opt.config);
  const l = cfg.login || {};
  const file = path.resolve(opt.out || stateFileFor({ ...cfg, login: { ...l, type: 'state' } }) || path.join(cfg.dir, '.front-check-state.json'));
  const baseUrl = opt.url || cfg.baseUrl || (cfg.serve ? `http://127.0.0.1:${cfg.serve.port}` : '');
  if (!baseUrl) throw new Error('대상 주소가 없습니다: --url 또는 설정 baseUrl');
  const form = { ...(l.form || {}), ...Object.fromEntries(['url', 'user', 'pass', 'submit', 'done', 'account', 'credentials', 'timeoutMs'].filter((k) => l[k] !== undefined).map((k) => [k, l[k]])) };
  const { readAccount } = await import('./config.js');
  const canForm = !!(form.user && form.pass && readAccount(form, cfg.dir));
  const browser = await launchBrowser(cfg, { noDocker: opt.noDocker, headed: !canForm || opt.headed, log });
  try {
    const context = await browser.newContext({ viewport: { width: cfg.browser.viewport[0], height: cfg.browser.viewport[1] }, locale: cfg.browser.locale, ignoreHTTPSErrors: true });
    const page = await context.newPage();
    if (canForm) {
      await login(page, { ...cfg, login: { ...form, type: 'form' } }, baseUrl, log);
    } else {
      log.info(`[front-check] 브라우저 창에서 로그인하세요 → ${new URL(form.url || '/', baseUrl).href}`);
      await page.goto(new URL(form.url || '/', baseUrl).href, { waitUntil: 'domcontentloaded' });
      if (form.done) await page.waitForSelector(form.done, { timeout: (opt.wait || 300) * 1000 });
      else await page.waitForTimeout((opt.wait || 120) * 1000);
    }
    await saveState(page, file, log);
    await context.close();
  } finally { await browser.close().catch(() => {}); }
  return file;
}
