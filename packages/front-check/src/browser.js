import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright-core';
import { expandHome } from './config.js';

const GL_ARGS = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox', '--disable-dev-shm-usage'];

/**
 * 브라우저를 띄운다. 순서: 설정의 executablePath → channel(설치된 Chrome) → playwright chromium.
 * 전부 실패하고 docker 가 있으면 playwright 공식 이미지 안에서 같은 명령을 다시 돈다(sudo 없는 서버용).
 */
export async function launchBrowser(cfg, { noDocker = false, headed = false, log = console } = {}) {
  const b = cfg.browser;
  const args = b.webgl ? GL_ARGS : ['--no-sandbox'];
  const attempts = [];
  if (b.executablePath) attempts.push({ executablePath: expandHome(b.executablePath) });
  if (b.channel) attempts.push({ channel: b.channel });
  attempts.push({});                                            // playwright chromium (설치돼 있으면)
  if (!b.channel && !b.executablePath && process.platform === 'darwin') attempts.push({ channel: 'chrome' });
  if (!b.channel && !b.executablePath && process.platform === 'linux') attempts.push({ channel: 'chrome' }, { channel: 'chromium' });

  let lastErr = null;
  for (const opt of attempts) {
    try {
      return await chromium.launch({ headless: !headed, args, ...opt });
    } catch (e) { lastErr = e; }
  }
  if (!noDocker && cfg.docker?.enabled && hasDocker()) {
    log.error(`[front-check] 로컬에서 브라우저를 못 띄워 docker(${cfg.docker.image})로 다시 실행합니다`);
    process.exit(rerunInDocker(cfg));
  }
  throw new Error(`브라우저를 띄울 수 없습니다: ${lastErr?.message?.split('\n')[0] || lastErr}\n` +
    '  - Google Chrome 이 있으면 FC_CHANNEL=chrome, 또는 `npx playwright install chromium`, 또는 docker 를 설치하세요.');
}

function hasDocker() {
  const r = spawnSync('docker', ['version', '--format', '{{.Server.Version}}'], { encoding: 'utf8' });
  return r.status === 0;
}

/**
 * 같은 CLI 명령을 playwright 이미지 안에서 실행. cwd 를 /work 로 마운트하고(front-check 는 보통 cwd 의 node_modules 에 있다),
 * 실행 파일이 cwd 밖이면 그 패키지 루트도 같은 경로로 마운트한다. 계정 파일 디렉터리는 읽기 전용으로.
 */
function rerunInDocker(cfg) {
  const cwd = process.cwd();
  // 호스트 경로를 컨테이너 안에서도 같은 경로로 쓴다 - 상대 경로(../.bugfix/after 등)와 심볼릭 링크가 그대로 동작하도록
  // 저장소 최상위(없으면 cwd)를 통째로 마운트한다
  const root = gitTopLevel(cwd) || cwd;
  const mounts = ['-v', `${root}:${root}`];
  const seen = new Set([root]);
  const mountRo = (p) => { if (!p || seen.has(p) || [...seen].some((s) => p.startsWith(s + path.sep))) return; seen.add(p); mounts.push('-v', `${p}:${p}:ro`); };
  const bin = fs.realpathSync(path.resolve(process.argv[1]));
  mountRo(findPkgRoot(bin));
  // 심볼릭 링크된 node_modules(작업 사본 캐시) 도 실제 경로로
  try { const real = fs.realpathSync(path.join(cwd, 'node_modules')); mountRo(real); } catch { /* 없음 */ }
  const acct = cfg.login?.account ? path.dirname(expandHome(cfg.login.account)) : null;
  if (acct && fs.existsSync(acct)) mountRo(acct);
  const env = ['-e', `FC_USER=${process.env.FC_USER || ''}`, '-e', `FC_PASS=${process.env.FC_PASS || ''}`, '-e', `HOME=${os.homedir()}`];
  const args = ['run', '--rm', '--network', 'host', '--ipc=host', '-w', cwd, ...mounts, ...env, cfg.docker.image,
    'node', bin, ...process.argv.slice(2), '--no-docker'];
  const r = spawnSync('docker', args, { stdio: 'inherit' });
  return r.status ?? 1;
}

function gitTopLevel(cwd) {
  const r = spawnSync('git', ['rev-parse', '--show-toplevel'], { cwd, encoding: 'utf8' });
  return r.status === 0 ? r.stdout.trim() : null;
}

function findPkgRoot(file) {
  let d = path.dirname(file);
  while (d !== path.dirname(d)) { if (fs.existsSync(path.join(d, 'package.json'))) return d; d = path.dirname(d); }
  return path.dirname(file);
}
