import fs from 'node:fs';
import path from 'node:path';
import { expandHome, readAccount } from './config.js';

/**
 * 로그인 - 앱마다 인증이 다르니 "로그인된 브라우저 상태(storageState = 쿠키 + localStorage)" 를 공통 화폐로 쓴다.
 *
 *   type: 'none'                         로그인 없음
 *   type: 'state'   { file, done, form? } 저장해 둔 storageState 파일을 주입해 시작 (Playwright 표준).
 *                                         만료(done 선택자가 안 뜸)면 form 자격이 있을 때만 다시 로그인해 파일을 갱신
 *   type: 'form'    { url, user, pass, submit, done, account | FC_USER/FC_PASS, saveState? }
 *                                         아이디·비밀번호 폼. saveState 파일을 주면 성공 뒤 상태를 저장한다
 *   type: 'storage' { storage: 파일 | {k:v} } localStorage 만 주입 (토큰 방식 앱)
 *   type: 'custom'  { run: async (page, { baseUrl, config }) => void }  앱이 직접 (서비스 계정 토큰 발급 등)
 *
 * `front-check login` 은 form(또는 창을 띄워 사람이 SSO/MFA 로그인) 뒤 상태 파일을 만든다.
 * 자격 값은 어떤 로그·리포트에도 남기지 않는다.
 */
export async function login(page, cfg, baseUrl, log = console) {
  const l = cfg.login || {};
  const type = l.type || 'none';
  if (type === 'none') return { type };
  if (type === 'custom') {
    if (typeof l.run !== 'function') throw new Error('login.type=custom 은 run(page, ctx) 함수가 필요합니다');
    await l.run(page, { baseUrl, config: cfg });
    return { type, ok: true };
  }
  if (type === 'storage') {
    let items = l.storage;
    if (typeof items === 'string') items = JSON.parse(fs.readFileSync(expandHome(items), 'utf8'));
    await page.addInitScript((kv) => { for (const [k, v] of Object.entries(kv)) localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); }, items || {});
    return { type, keys: Object.keys(items || {}).length };
  }
  if (type === 'state') {
    // 상태는 컨텍스트를 만들 때 이미 주입됐다(stateFileFor). 여기서는 살아 있는지 확인하고, 죽었으면 갱신을 시도한다
    const file = stateFileFor(cfg);
    if (!file || !fs.existsSync(file)) {
      if (readAccount(l.form || l)) { await formLogin(page, { ...(l.form || {}), ...pickForm(l) }, baseUrl, cfg, log); await saveState(page, file, log); return { type, ok: true, refreshed: 'created' }; }
      throw new Error(`로그인 상태 파일이 없습니다: ${file || '(login.file 미설정)'} - 먼저 \`front-check login\` 을 실행하세요`);
    }
    if (l.done) {
      await page.goto(new URL(l.url || '/', baseUrl).href, { waitUntil: 'domcontentloaded', timeout: cfg.browser.timeoutMs });
      const alive = await page.waitForSelector(l.done, { timeout: l.checkTimeoutMs || 15000 }).then(() => true).catch(() => false);
      if (!alive) {
        if (!readAccount(l.form || l)) throw new Error(`저장된 로그인 세션이 만료됐습니다(${l.done} 안 뜸) - \`front-check login\` 을 다시 실행하세요`);
        log.warn('[front-check] 세션 만료 - 다시 로그인해 상태 파일을 갱신합니다');
        await formLogin(page, { ...(l.form || {}), ...pickForm(l) }, baseUrl, cfg, log);
        await saveState(page, file, log);
        return { type, ok: true, refreshed: 'expired' };
      }
    }
    return { type, ok: true };
  }
  if (type === 'form') {
    await formLogin(page, l, baseUrl, cfg, log);
    if (l.saveState) await saveState(page, expandHome(l.saveState), log);
    return { type, ok: true };
  }
  throw new Error(`모르는 로그인 방식: ${type}`);
}

/** type=state 일 때 newContext 에 넘길 storageState 경로 (없으면 null) */
export function stateFileFor(cfg) {
  const l = cfg.login || {};
  if (l.type !== 'state') return null;
  const f = l.file || (cfg.dir ? path.join(cfg.dir, '.front-check-state.json') : null);
  return f ? expandHome(f) : null;
}

function pickForm(l) {
  const o = {};
  for (const k of ['url', 'user', 'pass', 'submit', 'done', 'account', 'timeoutMs']) if (l[k] !== undefined) o[k] = l[k];
  return o;
}

async function formLogin(page, l, baseUrl, cfg, log) {
  const acct = readAccount(l);
  if (!acct) throw new Error(`로그인 계정이 없습니다: ${l.account || 'FC_USER/FC_PASS'} (첫 줄 아이디, 둘째 줄 비밀번호)`);
  if (!l.user || !l.pass) throw new Error('form 로그인에는 user/pass 선택자가 필요합니다');
  const timeout = l.timeoutMs || cfg.browser.timeoutMs;
  await page.goto(new URL(l.url || '/login', baseUrl).href, { waitUntil: 'domcontentloaded', timeout });
  await page.waitForSelector(l.user, { timeout });
  await page.fill(l.user, acct.user);
  await page.fill(l.pass, acct.pass);
  if (l.submit) await page.click(l.submit); else await page.press(l.pass, 'Enter');
  if (l.done) await page.waitForSelector(l.done, { timeout });
  else await page.waitForLoadState('networkidle', { timeout });
  log.info(`[front-check] 로그인 완료 (${acct.user.replace(/.(?=.{2})/g, '*')})`);
}

export async function saveState(page, file, log = console) {
  if (!file) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await page.context().storageState({ path: file });
  try { fs.chmodSync(file, 0o600); } catch { /* 윈도우 등 */ }
  log.info(`[front-check] 로그인 상태 저장: ${file}`);
}
