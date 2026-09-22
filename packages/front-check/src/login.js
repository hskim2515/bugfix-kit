import fs from 'node:fs';
import { expandHome, readAccount } from './config.js';

/**
 * 로그인 전략
 *   none    : 안 함
 *   form    : { url, user, pass, submit, done, account | FC_USER/FC_PASS, timeoutMs }
 *             url 로 가서 user/pass 선택자에 채우고 submit 을 누른(없으면 Enter) 뒤 done 선택자를 기다린다
 *   storage : { storage: '~/.config/…/storage.json' | { key: value } }  localStorage 를 페이지 로드 전에 넣는다(토큰 방식 앱)
 * 자격 값은 어떤 로그·리포트에도 남기지 않는다.
 */
export async function login(page, cfg, baseUrl, log = console) {
  const l = cfg.login || {};
  if (!l.type || l.type === 'none') return { type: 'none' };

  if (l.type === 'storage') {
    let items = l.storage;
    if (typeof items === 'string') items = JSON.parse(fs.readFileSync(expandHome(items), 'utf8'));
    await page.addInitScript((kv) => { for (const [k, v] of Object.entries(kv)) localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); }, items || {});
    return { type: 'storage', keys: Object.keys(items || {}).length };
  }

  if (l.type === 'form') {
    const acct = readAccount(l);
    if (!acct) throw new Error(`로그인 계정이 없습니다: ${l.account || 'FC_USER/FC_PASS'} (첫 줄 아이디, 둘째 줄 비밀번호)`);
    const timeout = l.timeoutMs || cfg.browser.timeoutMs;
    await page.goto(new URL(l.url || '/login', baseUrl).href, { waitUntil: 'domcontentloaded', timeout });
    await page.waitForSelector(l.user, { timeout });
    await page.fill(l.user, acct.user);
    await page.fill(l.pass, acct.pass);
    if (l.submit) await page.click(l.submit); else await page.press(l.pass, 'Enter');
    if (l.done) await page.waitForSelector(l.done, { timeout });
    else await page.waitForLoadState('networkidle', { timeout });
    log.info(`[front-check] 로그인 완료 (${acct.user.replace(/.(?=.{2})/g, '*')})`);
    return { type: 'form', ok: true };
  }
  throw new Error(`모르는 로그인 방식: ${l.type}`);
}
