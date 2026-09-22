import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { expandHome, notBlank } from './util.js';

/**
 * 설정 파일(bugfix-kit.yml) 을 읽고 기본값·환경변수를 합친다.
 *
 * server:   port · dataDir(리포트 저장) · workDir(저장소 사본·작업) · claudeBin · pathExtra · javaHome · model · maxTurns · timeoutMinutes · runAsUser
 * github:   tokenFile (또는 환경변수 BUGFIX_GITHUB_TOKEN)
 * projects: 이름 → { apiKey, repo, githubRepo, baseBranch, autoMerge, cors, description, conventions, modules[], allowedTools[], env{} }
 *   module: { name, match(변경 파일 경로 접두어), dir(명령 실행 위치), verify[](셸 명령), nodeModulesCache(bool), prebuild[]{ when, cwd, run } }
 *
 * 비밀값(API 키·토큰)은 파일보다 환경변수를 우선한다: BUGFIX_GITHUB_TOKEN, BUGFIX_KEY_<PROJECT 대문자>.
 */
export function loadConfig(file) {
  const abs = path.resolve(expandHome(file));
  const raw = YAML.parse(fs.readFileSync(abs, 'utf8')) || {};
  const baseDir = path.dirname(abs);
  const resolveDir = (p, dflt) => path.resolve(baseDir, expandHome(p || dflt));

  const server = {
    port: 8790,
    host: '0.0.0.0',
    claudeBin: 'claude',
    pathExtra: '',
    javaHome: '',
    model: '',
    maxTurns: 40,
    timeoutMinutes: 45,
    verifyTimeoutMinutes: 20,
    runAsUser: '',
    ...(raw.server || {}),
  };
  server.dataDir = resolveDir(raw.server?.dataDir, './data');
  server.workDir = resolveDir(raw.server?.workDir, './work');

  const github = { tokenFile: '~/.config/bugfix-kit/github-token', ...(raw.github || {}) };

  const projects = {};
  for (const [name, p] of Object.entries(raw.projects || {})) {
    if (!/^[a-z0-9][a-z0-9_-]*$/i.test(name)) throw new Error(`프로젝트 이름은 영문·숫자·-_ 만: ${name}`);
    if (!notBlank(p.repo) || !notBlank(p.githubRepo)) throw new Error(`projects.${name}: repo, githubRepo 는 필수`);
    const envKey = process.env[`BUGFIX_KEY_${name.toUpperCase().replace(/-/g, '_')}`];
    projects[name] = {
      name,
      baseBranch: 'main',
      autoMerge: true,
      cors: [],
      description: '',
      conventions: '',
      modules: [],
      allowedTools: [],
      env: {},
      ...p,
      apiKey: notBlank(envKey) ? envKey : (p.apiKey || ''),
    };
    projects[name].modules = (projects[name].modules || []).map((m, i) => {
      if (!notBlank(m.match)) throw new Error(`projects.${name}.modules[${i}]: match 는 필수`);
      return { name: m.name || m.match.replace(/\/$/, ''), dir: m.dir || m.match.replace(/\/$/, ''), verify: [], nodeModulesCache: false, prebuild: [], ...m };
    });
  }
  if (Object.keys(projects).length === 0) throw new Error('projects 가 비어 있습니다');

  return {
    server,
    github,
    projects,
    file: abs,
    /** 토큰: 환경변수 → 파일(매번 읽어 재시작 없이 교체 가능). 없으면 null */
    githubToken() {
      if (notBlank(process.env.BUGFIX_GITHUB_TOKEN)) return process.env.BUGFIX_GITHUB_TOKEN.trim();
      try {
        const f = expandHome(github.tokenFile);
        const line = fs.readFileSync(f, 'utf8').trim().split(/\r?\n/)[0].trim();
        return line || null;
      } catch {
        return null;
      }
    },
  };
}
