/**
 * 앱 내장(embed) - Node 백엔드(Express·Nest·Koa 어댑터·순수 http)에 bugfix-kit 전체(신고 API·콘솔·AI 수정 파이프라인)를 미들웨어 하나로 붙인다.
 *
 *   import { bugfixKit } from 'bugfix-kit/embed';
 *   app.use('/bugfix', bugfixKit({ project: 'myapp' }));     // 옵션은 전부 선택
 *
 * 앱이 배포되면 같이 뜨고, 같이 갱신되고, 같이 죽는다. 별도 서버·포트·nginx·인스턴스가 없다.
 * 알아서 정하는 것: 프로젝트 이름(package.json name) · 저장소 주소·기본 브랜치(git remote) · 검증 명령(package.json 의 build 스크립트)
 * · 데이터 위치(`.bugfix-data/`, gitignore 권장) · 운영자 키(BUGFIX_ADMIN_KEY 또는 ~/.config/bugfix-kit/default.env, 없으면 만들어 저장하고 로그에 한 번 출력).
 * 첫 실행 때 `.bugfix-data/bugfix-kit.yml` 을 만들고 그 뒤로는 콘솔(<마운트>/ui/)에서 고친다.
 *
 * 그 기계에 있어야 하는 것: git, Claude Code CLI(로그인), 프로젝트 빌드 도구. 저장소 토큰은 BUGFIX_GITHUB_TOKEN / GITLAB_TOKEN 환경변수 또는 ~/.config/bugfix-kit/.
 * 앱을 여러 복제본으로 띄우면 하나에서만 켠다(예: `enabled: process.env.BUGFIX_WORKER === '1'`).
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import YAML from 'yaml';
import express from 'express';
import { createBugfixKit, defaultLog, bufferedLog } from './core.js';
import { detectHost } from './gitlab.js';

export function bugfixKit(options = {}) {
  const o = options;
  const log = bufferedLog(o.log || defaultLog);
  const router = express.Router();
  if (o.enabled === false) { router.use((req, res) => res.status(503).json({ message: 'bugfix-kit 이 이 인스턴스에서는 꺼져 있습니다' })); return router; }

  let kit = null, error = null;
  const ready = (async () => {
    try {
      const configFile = prepareConfig(o, log);
      kit = await createBugfixKit({ configFile, log });
      await kit.start();
      const p = Object.keys(kit.cfg.projects)[0];
      log.info(`[bugfix] 내장 모드 준비됨 - 프로젝트 ${p}, 데이터 ${kit.cfg.server.dataDir}. 콘솔은 <앱주소><마운트 경로>/ui/`);
    } catch (e) { error = e; log.error('[bugfix] 내장 모드 시작 실패:', e); }
  })();

  router.use((req, res, next) => {
    if (kit) return kit.router(req, res, next);
    if (error) return res.status(503).json({ message: `bugfix-kit 시작 실패: ${error.message}` });
    ready.then(() => (kit ? kit.router(req, res, next) : res.status(503).json({ message: `bugfix-kit 시작 실패: ${error?.message || ''}` })));
  });
  router.bugfix = { ready, get kit() { return kit; } };
  return router;
}

/** 옵션 + git + package.json 으로 첫 설정 파일을 만든다(있으면 그대로 둔다 - 콘솔에서 고친 내용 유지) */
function prepareConfig(o, log) {
  const cwd = path.resolve(o.cwd || process.cwd());
  const dataDir = path.resolve(cwd, o.dataDir || '.bugfix-data');
  const file = path.join(dataDir, 'bugfix-kit.yml');
  fs.mkdirSync(dataDir, { recursive: true });
  ensureAdminKey(dataDir, log);
  if (fs.existsSync(file)) return file;

  const pkg = readJson(path.join(cwd, 'package.json')) || {};
  const name = (o.project || pkg.name || path.basename(cwd)).replace(/^@[^/]+\//, '').replace(/[^a-z0-9_-]/gi, '-').toLowerCase();
  const repo = toHttps(o.repo || git(cwd, ['remote', 'get-url', 'origin']) || '');
  if (!repo) throw new Error('저장소 주소를 알 수 없습니다 - git remote origin 이 없으면 옵션 repo 를 주세요');
  const baseBranch = o.baseBranch || (git(cwd, ['symbolic-ref', '--short', 'refs/remotes/origin/HEAD']) || '').replace(/^origin\//, '') || git(cwd, ['rev-parse', '--abbrev-ref', 'HEAD']) || 'main';
  const host = detectHost(repo, o.host);
  // 앱이 저장소의 하위 디렉터리(모노레포)면 그 경로가 모듈
  const top = git(cwd, ['rev-parse', '--show-toplevel']) || cwd;
  const sub = path.relative(top, cwd).replace(/\\/g, '/');
  const verify = o.verify || (pkg.scripts?.build ? ['npm run build'] : []);
  const modules = o.modules || [{ name: sub || 'app', match: sub ? `${sub}/` : '', dir: sub || '.', verify, nodeModulesCache: fs.existsSync(path.join(cwd, 'package-lock.json')) || fs.existsSync(path.join(cwd, 'yarn.lock')) }];
  const doc = {
    server: { port: 0, dataDir: path.join(dataDir, 'data'), workDir: path.join(dataDir, 'work'), maxTurns: o.maxTurns || 40, timeoutMinutes: o.timeoutMinutes || 45, ...(o.server || {}) },
    projects: {
      [name]: {
        repo, baseBranch, delivery: ['local', 'branch', 'pr', 'merge'].includes(o.delivery) ? o.delivery : (o.autoMerge === false ? 'pr' : 'merge'), fixFrom: o.fixFrom || 'app',
        ...(host.host === 'github' ? { githubRepo: o.githubRepo || repo.replace(/^https?:\/\/github\.com\//, '').replace(/\.git$/, '') } : {}),
        cors: o.cors || [], description: o.description || pkg.description || '', conventions: o.conventions || '',
        modules, ...(o.frontCheck ? { frontCheck: o.frontCheck } : {}), protectedPaths: o.protectedPaths || [], ...(o.apiKey ? { apiKey: o.apiKey } : {}),
      },
    },
  };
  fs.writeFileSync(file, `# bugfix-kit 내장 설정 - 첫 실행 때 만들어졌다. 콘솔(<마운트>/ui/ → 프로젝트 탭)에서 고치면 여기에 저장된다\n` + YAML.stringify(doc, { lineWidth: 0 }), { mode: 0o600 });
  log.info(`[bugfix] 설정을 만들었습니다: ${file} (프로젝트 ${name}, ${repo} @ ${baseBranch})`);
  return file;
}

/** 운영자 키: 환경변수 → ~/.config/bugfix-kit/default.env → 데이터 디렉터리의 admin-key(없으면 생성) */
function ensureAdminKey(dataDir, log) {
  if (process.env.BUGFIX_ADMIN_KEY) return;
  const home = path.join(process.env.HOME || process.env.USERPROFILE || '', '.config', 'bugfix-kit', 'default.env');
  try { if (/^ADMIN_KEY=\S+/m.test(fs.readFileSync(home, 'utf8'))) return; } catch { /* 없음 */ }
  const f = path.join(dataDir, 'admin-key');
  let key = '';
  try { key = fs.readFileSync(f, 'utf8').trim(); } catch { /* 없음 */ }
  if (!key) { key = crypto.randomBytes(16).toString('hex'); fs.writeFileSync(f, key + '\n', { mode: 0o600 }); log.info(`[bugfix] 운영자 키를 만들었습니다: ${f}  (콘솔 로그인에 씁니다: ${key})`); }
  process.env.BUGFIX_ADMIN_KEY = key;
}

function git(cwd, args) { try { return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; } }
function readJson(f) { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return null; } }
/** git@host:group/repo.git → https://host/group/repo.git (토큰은 http 헤더로 넘기므로 https 여야 한다) */
function toHttps(url) { const m = String(url).match(/^git@([^:]+):(.+)$/); return m ? `https://${m[1]}/${m[2]}` : String(url); }
