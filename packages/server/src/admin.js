import express from 'express';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import YAML from 'yaml';
import { readEnvFile } from './config.js';
import { GitHub } from './github.js';
import { expandHome, HttpError, notBlank } from './util.js';

/**
 * 운영자 관리 API (X-Bugfix-Admin 키). 대시보드가 쓴다.
 *   GET  /settings                    서버 설정 · 프로젝트 전체(비밀값은 마스킹) · 환경 상태
 *   PUT  /server                      server 블록 일부 갱신 → yml 저장 → 재로드
 *   PUT  /projects/:name              프로젝트 블록 추가/수정 → yml 저장 → 재로드
 *   DELETE /projects/:name
 *   PUT  /secrets/global              { GITHUB_TOKEN, ADMIN_KEY, ...KEY } → github-token 파일 / default.env
 *   PUT  /secrets/:project            { BUGFIX_API_KEY, GITHUB_TOKEN, FC_USER, FC_PASS, ...KEY } → projects/<name>.env (null 이면 삭제)
 *   POST /check/github                토큰으로 GitHub /user + 프로젝트별 저장소 접근
 *   POST /check/repo/:name            git ls-remote (토큰 헤더)
 *   POST /check/claude                claude 실행 파일·버전·로그인 흔적
 *   POST /check/docker                docker · playwright 이미지
 *   GET  /logs                        서버 로그 꼬리(journalctl)
 * 비밀값은 어떤 응답에도 원문을 넣지 않는다(설정 여부 + 끝 4자).
 */
export function adminRouter(cfg, store, runner, log = console) {
  const r = express.Router();
  const CONFIG_DIR = expandHome('~/.config/bugfix-kit');
  const GLOBAL_ENV = path.join(CONFIG_DIR, 'default.env');
  const TOKEN_FILE = expandHome(cfg.github.tokenFile || '~/.config/bugfix-kit/github-token');
  const projEnv = (name) => path.join(CONFIG_DIR, 'projects', `${name}.env`);
  // 짧은 값(비밀번호 등)은 끝 글자도 보이지 않는다
  const mask = (v) => (notBlank(v) ? (String(v).length > 12 ? `설정됨 (…${String(v).slice(-4)})` : '설정됨') : '');
  const wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res)).then((v) => { if (v !== undefined) res.json({ content: v }); }).catch(next);

  // ── yml 읽기/쓰기 (주석은 유지되지 않는다 - 저장 전 .bak 을 남긴다) ──
  const readYml = () => YAML.parse(fs.readFileSync(cfg.file, 'utf8')) || {};
  const writeYml = (doc) => {
    try { fs.copyFileSync(cfg.file, `${cfg.file}.bak`); } catch { /* 첫 저장 */ }
    fs.writeFileSync(cfg.file, YAML.stringify(doc, { lineWidth: 0 }), { encoding: 'utf8', mode: 0o600 });
    cfg.reload();
  };
  const writeEnv = (file, patch) => {
    const cur = readEnvFile(file);
    for (const [k, v] of Object.entries(patch)) {
      if (!/^[A-Z][A-Z0-9_]*$/.test(k)) throw new HttpError(400, `키 이름은 대문자·숫자·_ 만: ${k}`);
      if (v == null || v === '') delete cur[k]; else cur[k] = String(v);
    }
    fs.mkdirSync(path.dirname(file), { recursive: true, mode: 0o700 });
    fs.writeFileSync(file, Object.entries(cur).map(([k, v]) => `${k}=${v}`).join('\n') + '\n', { encoding: 'utf8', mode: 0o600 });
    try { fs.chmodSync(file, 0o600); } catch { /* 윈도우 */ }
    cfg.reload();
  };

  const PROJECT_FIELDS = ['repo', 'githubRepo', 'baseBranch', 'autoMerge', 'cors', 'description', 'conventions', 'modules', 'frontCheck', 'allowedTools', 'env', 'envFile', 'githubTokenFile'];
  const SERVER_FIELDS = ['port', 'claudeBin', 'pathExtra', 'javaHome', 'model', 'maxTurns', 'timeoutMinutes', 'verifyTimeoutMinutes', 'runAsUser', 'workDir', 'dataDir'];

  r.get('/settings', wrap(async () => {
    const doc = readYml();
    const globalEnv = readEnvFile(GLOBAL_ENV);
    const projects = [];
    for (const [name, p] of Object.entries(doc.projects || {})) {
      const env = readEnvFile(projEnv(name));
      projects.push({
        name, ...Object.fromEntries(PROJECT_FIELDS.map((k) => [k, p[k]])),
        apiKeySet: mask(cfg.projects[name]?.apiKey),
        secrets: { BUGFIX_API_KEY: mask(env.BUGFIX_API_KEY), GITHUB_TOKEN: mask(env.GITHUB_TOKEN), FC_USER: env.FC_USER || '', FC_PASS: mask(env.FC_PASS),
          extra: Object.keys(env).filter((k) => !['BUGFIX_API_KEY', 'GITHUB_TOKEN', 'FC_USER', 'FC_PASS'].includes(k)) },
        reports: (await store.list(name)).length,
      });
    }
    return {
      file: cfg.file,
      server: Object.fromEntries(SERVER_FIELDS.map((k) => [k, doc.server?.[k] ?? cfg.server[k]])),
      global: { GITHUB_TOKEN: mask(readToken()), ADMIN_KEY: mask(cfg.server.adminKey), FC_USER: globalEnv.FC_USER || '', FC_PASS: mask(globalEnv.FC_PASS),
        extra: Object.keys(globalEnv).filter((k) => !['ADMIN_KEY', 'GITHUB_TOKEN', 'FC_USER', 'FC_PASS'].includes(k)), tokenFile: TOKEN_FILE, envFile: GLOBAL_ENV },
      projects,
      status: envStatus(),
      queue: runner.pending,
    };
  }));

  r.put('/server', wrap(async (req) => {
    const doc = readYml();
    doc.server = doc.server || {};
    for (const k of SERVER_FIELDS) if (req.body[k] !== undefined) { const v = req.body[k]; doc.server[k] = ['port', 'maxTurns', 'timeoutMinutes', 'verifyTimeoutMinutes'].includes(k) ? Number(v) : v; }
    writeYml(doc);
    return { ok: true, restartNeeded: req.body.port !== undefined };
  }));

  r.put('/projects/:name', wrap(async (req) => {
    const name = req.params.name;
    if (!/^[a-z0-9][a-z0-9_-]*$/i.test(name)) throw new HttpError(400, '프로젝트 이름은 영문·숫자·-_ 만');
    const b = req.body || {};
    if (!notBlank(b.repo) || !notBlank(b.githubRepo)) throw new HttpError(400, 'repo, githubRepo 는 필수');
    const doc = readYml();
    doc.projects = doc.projects || {};
    const cur = doc.projects[name] || {};
    const next = { ...cur };
    for (const k of PROJECT_FIELDS) if (b[k] !== undefined) next[k] = b[k];
    // 빈 값 정리
    for (const k of Object.keys(next)) if (next[k] === '' || next[k] === null || (Array.isArray(next[k]) && next[k].length === 0 && k !== 'modules')) delete next[k];
    if (b.apiKey !== undefined) { if (notBlank(b.apiKey)) next.apiKey = b.apiKey; else delete next.apiKey; }
    doc.projects[name] = next;
    writeYml(doc);
    return { ok: true, project: name };
  }));

  r.delete('/projects/:name', wrap(async (req) => {
    const doc = readYml();
    if (!doc.projects?.[req.params.name]) throw new HttpError(404, '없는 프로젝트');
    if (Object.keys(doc.projects).length === 1) throw new HttpError(400, '마지막 프로젝트는 지울 수 없습니다');
    delete doc.projects[req.params.name];
    writeYml(doc);
    return { ok: true };
  }));

  r.put('/secrets/:scope', wrap(async (req) => {
    const scope = req.params.scope;
    const b = { ...(req.body || {}) };
    if (scope === 'global') {
      if (b.GITHUB_TOKEN !== undefined) {
        if (notBlank(b.GITHUB_TOKEN)) { fs.mkdirSync(path.dirname(TOKEN_FILE), { recursive: true, mode: 0o700 }); fs.writeFileSync(TOKEN_FILE, b.GITHUB_TOKEN.trim() + '\n', { encoding: 'utf8', mode: 0o600 }); try { fs.chmodSync(TOKEN_FILE, 0o600); } catch { /* */ } }
        else { try { fs.unlinkSync(TOKEN_FILE); } catch { /* 없음 */ } }
        delete b.GITHUB_TOKEN;
      }
      if (b.ADMIN_KEY !== undefined && !notBlank(b.ADMIN_KEY)) throw new HttpError(400, '운영자 키는 비울 수 없습니다');
      writeEnv(GLOBAL_ENV, b);
      return { ok: true, adminKeyChanged: b.ADMIN_KEY !== undefined };
    }
    if (!cfg.projects[scope]) throw new HttpError(404, `없는 프로젝트: ${scope}`);
    writeEnv(projEnv(scope), b);
    return { ok: true };
  }));

  // ── 점검 ──
  r.post('/check/github', wrap(async () => {
    const out = { token: null, projects: [] };
    const token = readToken();
    if (!token) return { ...out, token: { ok: false, message: '공용 토큰 없음' } };
    try {
      const res = await fetch('https://api.github.com/user', { headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'bugfix-kit', Accept: 'application/vnd.github+json' } });
      const j = await res.json().catch(() => ({}));
      out.token = res.ok ? { ok: true, login: j.login, scopes: res.headers.get('x-oauth-scopes') || '' } : { ok: false, message: `HTTP ${res.status} ${j.message || ''}` };
    } catch (e) { out.token = { ok: false, message: e.message }; }
    for (const p of Object.values(cfg.projects)) {
      try {
        const gh = new GitHub(p.githubRepo, () => cfg.githubToken(p), log);
        const res = await gh.call('GET', '');
        out.projects.push({ name: p.name, ok: true, repo: res.full_name, permissions: res.permissions, defaultBranch: res.default_branch });
      } catch (e) { out.projects.push({ name: p.name, ok: false, message: e.message }); }
    }
    return out;
  }));

  r.post('/check/repo/:name', wrap(async (req) => {
    const p = cfg.projects[req.params.name];
    if (!p) throw new HttpError(404, '없는 프로젝트');
    const gh = new GitHub(p.githubRepo, () => cfg.githubToken(p), log);
    const res = spawnSync('git', ['-c', `http.extraheader=${gh.gitAuthHeader()}`, 'ls-remote', '--heads', p.repo, p.baseBranch], { encoding: 'utf8', env: { ...process.env, GIT_TERMINAL_PROMPT: '0' }, timeout: 30000 });
    const ok = res.status === 0 && res.stdout.trim().length > 0;
    return { ok, message: ok ? `${p.baseBranch} @ ${res.stdout.trim().slice(0, 12)}` : (res.stderr || res.stdout || '').replace(/Authorization: Basic \S+/g, '***').trim().split('\n').slice(-2).join(' ') || `브랜치 ${p.baseBranch} 없음` };
  }));

  r.post('/check/claude', wrap(async () => {
    const bin = cfg.server.claudeBin || 'claude';
    const v = spawnSync(bin, ['--version'], { encoding: 'utf8', timeout: 20000, env: { ...process.env, PATH: `${cfg.server.pathExtra ? cfg.server.pathExtra + ':' : ''}${process.env.PATH}` } });
    const home = os.homedir();
    const cred = ['.claude/.credentials.json', '.claude.json'].map((f) => path.join(home, f)).find((f) => fs.existsSync(f));
    let loggedIn = false;
    try { if (cred) { const j = JSON.parse(fs.readFileSync(cred, 'utf8')); loggedIn = !!(j.claudeAiOauth || j.oauthAccount || j.primaryApiKey); } } catch { /* 형식 다름 */ }
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN || process.env.ANTHROPIC_API_KEY) loggedIn = true;
    return { installed: v.status === 0, version: (v.stdout || '').trim().split('\n')[0], loggedIn, hint: loggedIn ? '' : `서버 실행 계정에서 \`${bin} login\` 을 한 번 실행하세요 (터미널 필요)` };
  }));

  r.post('/check/docker', wrap(async () => {
    const d = spawnSync('docker', ['version', '--format', '{{.Server.Version}}'], { encoding: 'utf8', timeout: 20000 });
    const img = 'mcr.microsoft.com/playwright:v1.47.2-jammy';
    const i = d.status === 0 ? spawnSync('docker', ['image', 'inspect', img, '--format', '{{.Size}}'], { encoding: 'utf8', timeout: 20000 }) : null;
    return { available: d.status === 0, version: (d.stdout || '').trim(), image: img, imagePresent: !!(i && i.status === 0), hint: d.status !== 0 ? 'docker 가 없으면 front-check 는 설치된 Chrome/Chromium 을 씁니다' : (i.status !== 0 ? `docker pull ${img}` : '') };
  }));

  r.post('/check/front/:name', wrap(async (req) => {
    const p = cfg.projects[req.params.name];
    if (!p) throw new HttpError(404, '없는 프로젝트');
    const url = (p.cors || [])[0];
    if (!url) throw new HttpError(400, '프로젝트 cors 에 앱 주소가 있어야 합니다');
    const bin = path.join(path.dirname(new URL(import.meta.url).pathname), '..', '..', 'front-check', 'bin', 'front-check.mjs');
    const res = spawnSync('node', [bin, 'check', '--url', url, '--no-serve', '--out', path.join(os.tmpdir(), `fc-admin-${p.name}`), '--json', '--steps', JSON.stringify([{ goto: '/' }, { waitFor: 2500 }, { eval: 'document.title' }])],
      { encoding: 'utf8', timeout: 180000, cwd: os.tmpdir(), env: { ...process.env, ...(readEnvFile(projEnv(p.name))) } });
    const i = (res.stdout || '').indexOf('{');
    const j = i >= 0 ? JSON.parse(res.stdout.slice(i)) : null;
    return j ? { ok: j.ok, collected: j.collected, fatal: j.fatal, title: (j.steps || []).find((s) => s.value !== undefined)?.value } : { ok: false, message: (res.stderr || res.stdout || '').split('\n').filter(Boolean).slice(-3).join(' ') };
  }));

  r.get('/logs', wrap(async (req) => {
    const n = Math.min(500, Number(req.query.n) || 200);
    const j = spawnSync('journalctl', ['--user', '-u', 'bugfix-server', '-n', String(n), '--no-pager', '-o', 'short-iso'], { encoding: 'utf8', timeout: 20000 });
    if (j.status === 0 && j.stdout.trim() && !/^-- No entries --/.test(j.stdout.trim())) return { source: 'journalctl', text: j.stdout };
    const s = spawnSync('systemctl', ['--user', 'status', 'bugfix-server', '-n', String(n), '--no-pager'], { encoding: 'utf8', timeout: 20000 });
    return { source: 'systemctl', text: s.stdout || s.stderr || '(로그를 읽을 수 없습니다 - journald 사용자 로그가 꺼져 있을 수 있습니다)' };
  }));

  function readToken() { try { return fs.readFileSync(TOKEN_FILE, 'utf8').trim().split(/\r?\n/)[0].trim() || null; } catch { return process.env.BUGFIX_GITHUB_TOKEN || null; } }
  function envStatus() {
    const du = (d) => { try { const r = spawnSync('du', ['-sh', d], { encoding: 'utf8', timeout: 20000 }); return (r.stdout || '').split('\t')[0].trim(); } catch { return ''; } };
    return {
      node: process.version, platform: `${os.type()} ${os.release()}`, hostname: os.hostname(), user: os.userInfo().username,
      uptimeSec: Math.round(process.uptime()), workDir: cfg.server.workDir, workDirSize: du(cfg.server.workDir), dataDir: cfg.server.dataDir, dataDirSize: du(cfg.server.dataDir),
      git: (spawnSync('git', ['--version'], { encoding: 'utf8' }).stdout || '').trim(),
    };
  }
  return r;
}
