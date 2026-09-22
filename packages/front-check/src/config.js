import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const expandHome = (p) => (p ? p.replace(/^~(?=$|\/)/, os.homedir()) : p);

const DEFAULTS = {
  baseUrl: '',
  // serve: { dir: 'dist', port: 4173, proxy: { '/api': 'https://…' }, spa: true }  - 빌드 결과를 임시로 서빙
  serve: null,
  // login: { type: 'none' | 'form' | 'storage', url, user, pass, submit, done, account, storage, timeoutMs }
  login: { type: 'none' },
  browser: {
    // 'chrome' 이면 설치된 Google Chrome, 비우면 playwright chromium(없으면 docker 폴백)
    channel: process.env.FC_CHANNEL || '',
    executablePath: process.env.FC_CHROME || '',
    headless: true,
    viewport: [1440, 900],
    webgl: 'swiftshader',         // Cesium·Three 가 헤드리스에서도 그려지게 소프트웨어 GL
    timeoutMs: 30000,
    locale: 'ko-KR',
  },
  docker: {
    image: 'mcr.microsoft.com/playwright:v1.47.2-jammy',
    enabled: true,
  },
  // 콘솔·요청에서 무시할 것 (정규식 또는 문자열)
  ignoreConsole: [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/, /favicon\.ico/],
  ignoreRequests: [/favicon\.ico/],
  // 실패로 볼 기준. null 이면 세지 않는다
  thresholds: { consoleErrors: 0, pageErrors: 0, failedRequests: null },
  scenarios: {},
  // (ctx) => steps[]  - 버그 리포트 context.json 을 절차로 바꾼다 (앱마다 다르니 설정에서)
  fromContext: null,
  // 절차가 없을 때 기본
  defaultSteps: [{ goto: '/' }, { waitFor: 2500 }, { screenshot: 'page' }],
};

/** front-check.config.mjs(ESM default export) 를 읽어 기본값과 합친다. 없으면 기본값만 */
export async function loadConfig(file) {
  const candidates = file ? [file] : ['front-check.config.mjs', 'front-check.config.js'];
  let cfg = {};
  let found = null;
  for (const c of candidates) {
    const abs = path.resolve(expandHome(c));
    if (fs.existsSync(abs)) { cfg = (await import(pathToFileURL(abs).href)).default || {}; found = abs; break; }
  }
  if (file && !found) throw new Error(`설정 파일이 없습니다: ${file}`);
  const merged = {
    ...DEFAULTS, ...cfg,
    login: { ...DEFAULTS.login, ...(cfg.login || {}) },
    browser: { ...DEFAULTS.browser, ...(cfg.browser || {}) },
    docker: { ...DEFAULTS.docker, ...(cfg.docker || {}) },
    thresholds: { ...DEFAULTS.thresholds, ...(cfg.thresholds || {}) },
    ignoreConsole: [...DEFAULTS.ignoreConsole, ...(cfg.ignoreConsole || [])],
    ignoreRequests: [...DEFAULTS.ignoreRequests, ...(cfg.ignoreRequests || [])],
    scenarios: cfg.scenarios || {},
    file: found,
    dir: found ? path.dirname(found) : process.cwd(),
  };
  if (merged.serve && !merged.serve.port) merged.serve.port = 4173;
  return merged;
}

/**
 * 로그인 자격. 우선순위: 환경변수 FC_USER/FC_PASS → 설정의 credentials → 계정 파일(account).
 *   credentials: { user, password }          설정 파일(프로젝트 안)에 직접 - 개발용 테스트 계정이면 저장소에 넣어도 무방
 *   account: './front-check.account'         프로젝트 안 파일(설정 파일 기준 상대 경로) 또는 ~/… 절대 경로
 * 파일 형식은 셋 중 아무거나:
 *   properties  user=아이디 / password=비밀번호   (키: user|id|username|아이디, password|pass|pw|비밀번호)
 *   JSON        { "user": "…", "password": "…" }
 *   두 줄        첫 줄 아이디, 둘째 줄 비밀번호
 * 값은 로그·리포트에 절대 남기지 않는다.
 */
export function readAccount(login, baseDir = process.cwd()) {
  if (process.env.FC_USER && process.env.FC_PASS) return { user: process.env.FC_USER, pass: process.env.FC_PASS };
  const c = login?.credentials;
  if (c && (c.user || c.id) && (c.password || c.pass)) return { user: String(c.user || c.id), pass: String(c.password || c.pass) };
  if (!login?.account) return null;
  const f = path.resolve(baseDir, expandHome(login.account));
  if (!fs.existsSync(f)) return null;
  return parseAccount(fs.readFileSync(f, 'utf8'));
}

export function parseAccount(text) {
  const t = String(text || '').trim();
  if (!t) return null;
  const U = ['user', 'id', 'username', 'userid', 'login', '아이디'], P = ['password', 'pass', 'pw', 'passwd', '비밀번호'];
  const pick = (o) => {
    const k = Object.keys(o);
    const u = k.find((x) => U.includes(x.toLowerCase())), p = k.find((x) => P.includes(x.toLowerCase()));
    return u && p && o[u] && o[p] ? { user: String(o[u]).trim(), pass: String(o[p]).trim() } : null;
  };
  if (t.startsWith('{')) { try { return pick(JSON.parse(t)); } catch { return null; } }
  const lines = t.split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith('#'));
  if (lines.some((l) => /^[^=:]+\s*[=:]\s*.+$/.test(l) && !/^https?:/.test(l))) {
    const o = {};
    for (const l of lines) { const m = l.match(/^([^=:]+?)\s*[=:]\s*(.+)$/); if (m) o[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, ''); }
    return pick(o);
  }
  const [user = '', pass = ''] = lines;
  return user && pass ? { user, pass } : null;
}
