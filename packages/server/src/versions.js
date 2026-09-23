import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import express from 'express';
import { runClaudeStream, resultTextOf, claudeSummary } from './claude.js';
import { firstLine, hhmmss, notBlank, nowIso, sleep } from './util.js';

/**
 * 버전 = AI 수정 하나가 끝나 커밋된 소스 상태. 키트 저장소({workDir}/{project}/repo)에 `bugfix/v{n}` 태그로 남는다 -
 * 원격(GitHub/GitLab)에 올리지 않아도 키트가 소스를 갖고 있고, 버전마다 미리보기(프론트+백엔드+DB 사본)를 띄워 접속할 수 있다.
 *
 *   data/{project}/versions.json  { seq, versions: [{ n, reportId, sha, base, branch, summary, files, createdAt, preview }] }
 *   data/{project}/previews/{n}/front   빌드된 프론트(정적)
 *
 * 미리보기 레시피(프로젝트 설정 preview) - 자리표시자 {base} {project} {n} {db} {port} {host} {previewUrl} {backUrl}:
 *   base:  /rest/bugfix                   키트가 공개되는 경로(앱 주소 뒤). 미리보기 주소 = {base}/v/{project}/{n}/
 *   host:  192.168.10.182                 워커가 백엔드 컨테이너에 닿는 주소(앱 안 워커가 컨테이너면 127.0.0.1 은 안 됨)
 *   front: { dir, build, dist, env: { VITE_API_URL: '{backUrl}' } }     build 는 sh 명령. BUGFIX_PREVIEW_BASE 는 키트가 넣는다
 *   back:  { dir, build, artifact: 'build/libs/*.jar', image, port, cmd: 'java -jar /app.jar', env: {}, volumes: [] }
 *   db:    { container, name, user, mode }  mode: template(기본 - 키트가 {name}_bugfix_tmpl 템플릿 DB 를 하루 한 번 pg_dump 로 갱신해 두고
 *                                          CREATE DATABASE … TEMPLATE 로 초 단위 복제) · clone(매번 라이브 DB 를 pg_dump|psql, 느림) ·
 *                                          shared(사본 없이 라이브 DB 그대로 - 빠르지만 미리보기의 쓰기가 개발 DB 에 남음). {db} = 사본 이름
 *          templateMaxAgeHours: 24        템플릿 갱신 주기
 *   proxies: { '/file-proxy/': 'http://…/' }   프론트가 같은 오리진으로 부르는 다른 경로 → 그대로 넘김
 *   ttlHours: 12                          마지막 접속 뒤 이 시간이 지나면 자동 중지 (중지 시 컨테이너·DB 사본·빌드 산출물 제거, 다시 띄우면 재빌드)
 *   maxUp: 2                              프로젝트당 동시에 떠 있는 미리보기 수 - 넘으면 가장 오래 안 쓴 것부터 내림
 */
export class Versions {
  constructor(cfg, store, runner, log = console) {
    this.cfg = cfg;
    this.store = store;
    this.runner = runner;
    this.log = log;
    this.locks = new Map();
    this.timer = null;
  }

  file(project) { return path.join(this.cfg.server.dataDir, project, 'versions.json'); }
  previewDir(project, n) { return path.join(this.cfg.server.dataDir, project, 'previews', String(n)); }

  async withLock(project, fn) {
    const prev = this.locks.get(project) || Promise.resolve();
    let release;
    const cur = new Promise((r) => { release = r; });
    const chain = prev.then(() => cur);
    this.locks.set(project, chain);
    await prev;
    try { return await fn(); }
    finally { release(); if (this.locks.get(project) === chain) this.locks.delete(project); }
  }
  async state(project) {
    try { return JSON.parse(await fs.readFile(this.file(project), 'utf8')); }
    catch { return { seq: 0, versions: [] }; }
  }
  async save(project, patch) {
    return this.withLock(project, async () => {
      const cur = await this.state(project);
      const next = typeof patch === 'function' ? patch(cur) : { ...cur, ...patch };
      await fs.mkdir(path.dirname(this.file(project)), { recursive: true });
      const tmp = `${this.file(project)}.tmp`;
      await fs.writeFile(tmp, JSON.stringify(next, null, 2), 'utf8');
      await fs.rename(tmp, this.file(project));
      return next;
    });
  }
  async list(project) { return (await this.state(project)).versions.slice().reverse(); }
  async get(project, n) { return (await this.state(project)).versions.find((v) => v.n === Number(n)) || null; }
  async update(project, n, patch) {
    return this.save(project, (c) => ({ ...c, versions: c.versions.map((v) => (v.n === Number(n) ? { ...v, ...(typeof patch === 'function' ? patch(v) : patch) } : v)) }));
  }
  async plog(project, n, line) {
    const stamped = `${hhmmss()}  ${line}`;
    await this.update(project, n, (v) => ({ preview: { ...(v.preview || {}), log: ((v.preview?.log || '') + stamped + '\n').slice(-40_000) } }));
  }

  /** 수정 커밋 뒤 호출 - 키트 저장소에 태그를 남기고 버전 번호를 준다 */
  async record(project, { reportId, branch, sha, base, summary, files }) {
    const st = await this.save(project.name, (c) => {
      const n = (c.seq || 0) + 1;
      return { ...c, seq: n, versions: [...c.versions, { n, reportId, sha, base, branch, summary, files: (files || []).slice(0, 200), createdAt: nowIso(), preview: { status: 'NONE' } }] };
    });
    const n = st.seq;
    const ex = this.runner.ex(project);
    const { repo } = this.runner.paths(project, 0);
    await this.runner.mutex(this.runner.repoKey(project), () => ex.exec(repo, 1, ['git', 'tag', '-f', `bugfix/v${n}`, sha])).catch((e) => this.log.warn(`[versions ${project.name}] 태그 실패: ${e.message}`));
    return n;
  }

  /** base 와 이 버전 사이의 변경 - 통계 + 패치(크기 제한) */
  async diff(project, n) {
    const v = await this.get(project.name, n);
    if (!v) return null;
    const ex = this.runner.ex(project);
    const { repo } = this.runner.paths(project, 0);
    const stat = await ex.execOut(repo, 1, ['git', 'diff', '--stat=120', `${v.base}..${v.sha}`]);
    const patch = await ex.execOut(repo, 1, ['git', 'diff', `${v.base}..${v.sha}`]);
    return { n, stat, patch: patch.length > 400_000 ? patch.slice(0, 400_000) + '\n… (잘림)' : patch };
  }

  // ── 레시피 ──────────────────────────────────────────────────────────────
  recipe(project) {
    const r = project.preview;
    if (!r || typeof r !== 'object' || (!r.front && !r.back)) return null;
    const db = r.db ? { mode: 'template', templateMaxAgeHours: 24, ...r.db, template: r.db.template || `${r.db.name}_bugfix_tmpl` } : null;
    return { ttlHours: 12, maxUp: 2, host: '127.0.0.1', proxies: {}, ...r, db, base: String(r.base || '/bugfix').replace(/\/+$/, '') };
  }
  fill(s, vars) { return String(s ?? '').replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? String(vars[k]) : m)); }
  vars(project, n, extra = {}) {
    const r = this.recipe(project) || { base: '/bugfix', host: '127.0.0.1' };
    const previewUrl = `${r.base}/v/${project.name}/${n}`;
    return { base: r.base, project: project.name, n, host: r.host, previewUrl, backUrl: `${previewUrl}/back`, ...extra };
  }

  /**
   * 레시피 초안을 Claude 가 저장소를 읽고 만든다(읽기 전용). 컴포즈·Dockerfile·env·properties 를 보고 JSON 을 낸다.
   * 결과는 프로젝트 설정 preview 로 저장되며 콘솔에서 고칠 수 있다.
   */
  async draftRecipe(project, hints = {}) {
    const ex = this.runner.ex(project);
    const gh = this.runner.gh(project);
    const auth = gh.gitAuthHeader();
    const { repo, jobs } = this.runner.paths(project, 0);
    const wt = path.join(jobs, 'recipe');
    const L = (s) => this.log.info(`[preview ${project.name}] ${s}`);
    await this.runner.prepareRepo(project, ex, auth, L);
    if (!await this.runner.fetch(project, ex, auth, [project.baseBranch])) throw new Error(`origin/${project.baseBranch} 를 받지 못했습니다`);
    await this.runner.freshWorktree(ex, repo, jobs, wt, `origin/${project.baseBranch}`);
    try {
      const prompt = `이 저장소의 앱을 "버전별 미리보기"로 띄우기 위한 bugfix-kit preview 레시피(JSON)를 만드세요. 코드를 바꾸지 말고 파일만 읽으세요.
읽을 것: docker-compose*.yml, Dockerfile, .env*, application*.properties/yml, package.json, vite/webpack 설정, CI 파일(.github/workflows, .gitlab-ci.yml), README.
${project.description ? `프로젝트: ${project.description}\n` : ''}${hints.note ? `운영자 메모: ${hints.note}\n` : ''}
레시피 형식(모든 키 선택, 없으면 빼세요):
{
  "base": "<키트 공개 경로. 앱 프론트가 REST 를 '/rest' 로 부르면 '/rest/bugfix', lhdt 처럼 nginx 가 /bugfix 를 넘기면 '/bugfix'>",
  "host": "<워커가 컨테이너에 닿는 호스트 주소. 앱이 도커로 배포되면 배포 서버 IP(예: 컴포즈·properties 의 IP), 아니면 127.0.0.1>",
  "front": { "dir": "<프론트 디렉터리>", "build": "<빌드 셸 명령. yarn.lock 이면 'npx -y yarn@1.22.22 install --frozen-lockfile && npx -y yarn@1.22.22 build:dev' 처럼>", "dist": "<빌드 결과 디렉터리>",
             "env": { "<REST 주소를 정하는 환경변수 이름>": "{backUrl}", "<정적 파일 서버 등 다른 절대 주소 변수는 그대로 두거나 상대경로 유지>": "…" } },
  "back":  { "dir": "<백엔드 디렉터리>", "build": "<실행 파일 만드는 셸 명령. gradle 이면 'chmod +x gradlew && ./gradlew bootJar -x test --no-daemon -q'>",
             "artifact": "<결과 파일 글롭, 예: build/libs/*.jar (plain 제외는 키트가 함)>", "image": "<실행 이미지, Dockerfile 의 FROM 과 같은 JDK>", "port": <컨테이너 안 포트>,
             "cmd": "java -jar /app.jar", "env": { "SPRING_PROFILES_ACTIVE": "<배포 프로파일>", "SPRING_DATASOURCE_URL": "jdbc:postgresql://<DB 호스트:포트>/{db}" }, "volumes": ["<호스트경로:컨테이너경로[:ro]> - 컴포즈의 데이터 볼륨 중 미리보기에도 필요한 것>"] },
  "db":    { "container": "<postgres 도커 컨테이너 이름(컴포즈 프로젝트명-서비스-1 형식 추정)>", "name": "<DB 이름>", "user": "<DB 사용자>" },
  "proxies": { "<프론트가 같은 오리진으로 부르는 다른 접두 경로, 예: /file-proxy/>": "<원래 nginx 가 넘기던 대상 URL>" },
  "ttlHours": 12
}
자리표시자: {base} {project} {n} {db} {port} {host} {previewUrl}(={base}/v/{project}/{n}) {backUrl}(={previewUrl}/back).
프론트는 키트가 BUGFIX_PREVIEW_BASE={previewUrl}/ 환경변수를 넣고 빌드하므로(vite 플러그인이 base 로 씀) 정적 자산 경로는 신경 쓰지 마세요.
DB 는 키트가 {db} 이름으로 복제본을 만들어 백엔드 env 에 넣습니다. 확신이 없는 값은 빼고, 마지막 답변은 JSON 하나만(설명 없이) 출력하세요.`;
      const out = await runClaudeStream(ex, wt, 20, [this.cfg.server.claudeBin || 'claude', '-p', prompt, '--max-turns', '30', '--permission-mode', 'acceptEdits', '--allowedTools', 'Read,Glob,Grep,Bash(cat:*),Bash(ls:*),Bash(find:*),Bash(head:*),Bash(grep:*)', ...(notBlank(this.cfg.server.model) ? ['--model', this.cfg.server.model] : [])], (line) => L(`  ${line}`));
      L(`Claude 종료 (${claudeSummary(out)})`);
      const text = resultTextOf(out);
      const m = text.match(/\{[\s\S]*\}/);
      if (!m) throw new Error(`레시피 JSON 을 찾지 못했습니다: ${firstLine(text, 200)}`);
      const recipe = JSON.parse(m[0]);
      return recipe;
    } finally {
      await this.runner.removeWorktree(ex, repo, wt);
    }
  }

  // ── 미리보기 ────────────────────────────────────────────────────────────
  async start(project, n) {
    const v = await this.get(project.name, n);
    if (!v) throw Object.assign(new Error('없는 버전'), { status: 404 });
    if (!this.recipe(project)) throw Object.assign(new Error('미리보기 레시피가 없습니다 - 콘솔 버전 탭에서 초안을 만들거나 프로젝트 설정 preview 를 적으세요'), { status: 409 });
    if (['BUILDING', 'STARTING'].includes(v.preview?.status)) throw Object.assign(new Error('이미 준비 중입니다'), { status: 409 });
    // 동시 개수 제한 - 가장 오래 안 쓴 것부터 내린다
    const r = this.recipe(project);
    const up = (await this.state(project.name)).versions.filter((x) => x.n !== Number(n) && x.preview?.status === 'UP')
      .sort((a, b) => Date.parse(a.preview.lastAccess || a.preview.upAt || 0) - Date.parse(b.preview.lastAccess || b.preview.upAt || 0));
    for (const x of up.slice(0, Math.max(0, up.length - (r.maxUp - 1)))) { await this.plog(project.name, x.n, `■ 동시 ${r.maxUp}개 제한 - v${n} 을 띄우려고 내림`); await this.stop(project, x.n).catch(() => {}); }
    await this.update(project.name, n, { preview: { status: 'QUEUED', log: '', startedAt: nowIso() } });
    const ahead = this.runner.submit(project, `preview-${n}`, () => this.run(project, n), async (e) => {
      await this.plog(project.name, n, `✗ 실패: ${firstLine(e.message, 300)}`);
      await this.update(project.name, n, (x) => ({ preview: { ...x.preview, status: 'FAILED', error: firstLine(e.message, 300) } }));
    }, 'preview');
    await this.plog(project.name, n, `▶ 미리보기 대기열 등록${ahead > 0 ? ` (앞에 ${ahead}건)` : ''}`);
    return this.get(project.name, n);
  }

  async run(project, n) {
    const v = await this.get(project.name, n);
    const r = this.recipe(project);
    const name = project.name;
    const L = (s) => this.plog(name, n, s);
    const ex = this.runner.ex(project);
    const gh = this.runner.gh(project);
    const auth = gh.gitAuthHeader();
    const { repo, jobs } = this.runner.paths(project, 0);
    const wt = path.join(jobs, `preview-${n}`);
    const out = this.previewDir(name, n);
    const container = `bugfix-${name}-v${n}`;
    const db = r.db ? (r.db.mode === 'shared' ? r.db.name : `${r.db.name}_v${n}`) : null;
    const port = r.back ? await this.freePort(ex, 21000 + (n % 800)) : null;
    const vars = this.vars(project, n, { db: db || '', port: port || '' });
    const upd = (p) => this.update(name, n, (x) => ({ preview: { ...x.preview, ...p } }));

    await upd({ status: 'BUILDING', container, db, port, url: `${vars.previewUrl}/`, error: null });
    await L(`▶ 버전 v${n} (${v.sha.slice(0, 8)}) 미리보기 준비`);
    // 이미 떠 있던 것 정리
    await this.teardown(project, n, { quiet: true });
    await this.runner.prepareRepo(project, ex, auth, L);
    await this.runner.freshWorktree(ex, repo, jobs, wt, v.sha);
    try {
      if (r.front) {
        const fe = path.join(wt, r.front.dir || '.');
        await this.runner.prepareNodeModules(project, ex, wt, L, true);
        const env = { BUGFIX_PREVIEW_BASE: `${vars.previewUrl}/` };
        for (const [k, val] of Object.entries(r.front.env || {})) env[k] = this.fill(val, vars);
        await L(`프론트 빌드: ${r.front.build}  (base ${env.BUGFIX_PREVIEW_BASE})`);
        const exportEnv = Object.entries(env).map(([k, val]) => `export ${k}=${JSON.stringify(val)};`).join(' ');
        await ex.sh(fe, this.cfg.server.verifyTimeoutMinutes || 20, `${exportEnv} ${r.front.build}`);
        const dist = path.join(fe, r.front.dist || 'dist');
        if (!fss.existsSync(path.join(dist, 'index.html'))) throw new Error(`프론트 빌드 결과에 index.html 이 없습니다: ${dist}`);
        await fs.rm(path.join(out, 'front'), { recursive: true, force: true });
        await fs.mkdir(out, { recursive: true });
        await fs.cp(dist, path.join(out, 'front'), { recursive: true, dereference: true });
        await L('✓ 프론트 준비');
      }
      if (r.back) {
        const be = path.join(wt, r.back.dir || '.');
        await L(`백엔드 빌드: ${r.back.build}`);
        await ex.sh(be, this.cfg.server.verifyTimeoutMinutes || 20, r.back.build);
        const art = await this.findArtifact(ex, be, r.back.artifact || 'build/libs/*.jar');
        if (!art) throw new Error(`실행 파일을 찾지 못했습니다: ${r.back.artifact}`);
        await fs.mkdir(out, { recursive: true });
        const artName = path.extname(art) || '.jar';
        const artCopy = path.join(out, `app${artName}`);
        await fs.copyFile(art, artCopy);
        await L(`✓ 실행 파일: ${path.basename(art)}`);
        if (db && r.db.mode !== 'shared') {
          await upd({ status: 'STARTING' });
          if (r.db.mode === 'clone') {
            await L(`DB 복제(라이브에서 직접): ${r.db.name} → ${db} (${r.db.container})`);
            await this.pgsh(ex, wt, r.db, this.copySql(r.db, r.db.name, db));
          } else {
            await this.ensureTemplate(project, ex, wt, L);
            await L(`DB 복제(템플릿): ${r.db.template} → ${db}`);
            await this.pgsh(ex, wt, r.db, `dropdb -U ${r.db.user} --if-exists --force ${db} 2>/dev/null; createdb -U ${r.db.user} -T ${r.db.template} ${db}`);
          }
          await L('✓ DB 복제 완료');
        } else if (db) await L(`DB: 라이브 DB ${db} 공유(사본 없음 - 미리보기에서 쓴 데이터가 개발 DB 에 남습니다)`);
        await upd({ status: 'STARTING' });
        const envArgs = Object.entries(r.back.env || {}).flatMap(([k, val]) => ['-e', `${k}=${this.fill(val, vars)}`]);
        const volArgs = (r.back.volumes || []).flatMap((m) => ['-v', this.fill(m, vars)]);
        const cmd = (r.back.cmd || `java -jar /app${artName}`).split(/\s+/);
        await ex.exec(wt, 5, ['docker', 'run', '-d', '--name', container, '--label', 'bugfix-kit=preview', '--restart', 'no', '-p', `${port}:${r.back.port || 8080}`, '-v', `${artCopy}:/app${artName}:ro`, ...volArgs, ...envArgs, r.back.image || 'eclipse-temurin:21-jdk', ...cmd]);
        await L(`컨테이너 시작: ${container} (${vars.host}:${port} → ${r.back.port})`);
        const ok = await this.waitUp(vars.host, port, 6 * 60_000);
        if (!ok) {
          const logs = await ex.execOut(wt, 1, ['docker', 'logs', '--tail', '40', container]);
          throw new Error(`백엔드가 6분 안에 응답하지 않습니다:\n${logs.slice(-1500)}`);
        }
        await L('✓ 백엔드 응답 확인');
      }
      await upd({ status: 'UP', upAt: nowIso(), lastAccess: nowIso() });
      await L(`✓ 미리보기 준비 완료: ${vars.previewUrl}/`);
    } finally {
      await this.runner.removeWorktree(ex, repo, wt);
    }
  }

  /** 라이브 DB → 새 DB 복사: custom 포맷으로 덤프한 뒤 병렬(-j 4) 복원 - 파이프 psql 보다 3~4배 빠르다. 실패 줄이 있어도 계속(대개 확장·권한) */
  copySql(db, from, to) {
    const u = db.user, f = `/tmp/bugfix-${to}.dump`;
    return `dropdb -U ${u} --if-exists --force ${to} 2>/dev/null; createdb -U ${u} -T template0 ${to} && pg_dump -U ${u} -Fc -f ${f} ${from} && (pg_restore -U ${u} -j 4 --no-owner --no-privileges -d ${to} ${f} 2>&1 | grep -c "error" | sed "s/^/restore warnings: /" >&2; true); rm -f ${f}`;
  }
  pgsh(ex, cwd, db, script) { return ex.sh(cwd, 90, `docker exec ${sq(db.container)} sh -c ${sq(script)}`); }
  /** 템플릿 DB 가 없거나 오래됐으면 라이브 DB 에서 다시 만든다(pg_dump|psql, 한 번만 느림). 프로젝트별 뮤텍스 */
  async ensureTemplate(project, ex, cwd, L = () => {}) {
    const r = this.recipe(project);
    if (!r?.db || r.db.mode === 'shared') return;
    return this.runner.mutex(`dbtmpl:${project.name}`, async () => {
      const st = await this.state(project.name);
      const t = st.dbTemplate || {};
      const exists = (await ex.execOut(cwd, 1, ['docker', 'exec', r.db.container, 'psql', '-U', r.db.user, '-Atc', `select 1 from pg_database where datname='${r.db.template}'`])).trim() === '1';
      const fresh = exists && t.name === r.db.template && Date.parse(t.refreshedAt || 0) > Date.now() - (r.db.templateMaxAgeHours || 24) * 3600_000;
      if (fresh) return;
      await L(`템플릿 DB ${exists ? '갱신' : '생성'}: ${r.db.name} → ${r.db.template} (하루 한 번, 몇 분)`);
      const t0 = Date.now();
      // 템플릿에 붙은 세션이 있으면 --force 로 끊는다(키트만 쓰는 DB)
      await this.pgsh(ex, cwd, r.db, this.copySql(r.db, r.db.name, r.db.template));
      await this.save(project.name, { dbTemplate: { name: r.db.template, refreshedAt: nowIso(), seconds: Math.round((Date.now() - t0) / 1000) } });
      await L(`✓ 템플릿 DB 준비 (${Math.round((Date.now() - t0) / 1000)}초)`);
    });
  }

  async findArtifact(ex, dir, glob) {
    const out = await ex.execOut(dir, 1, ['sh', '-c', `ls -1 ${glob} 2>/dev/null | grep -v -- '-plain\\.' | head -1`]);
    const f = out.trim().split('\n')[0];
    return f ? (path.isAbsolute(f) ? f : path.join(dir, f)) : null;
  }
  async freePort(ex, from) {
    const used = new Set((await ex.execOut('/', 1, ['docker', 'ps', '--format', '{{.Ports}}'])).match(/:(\d+)->/g)?.map((m) => Number(m.slice(1, -2))) || []);
    for (let p = from; p < from + 500; p++) if (!used.has(p)) return p;
    throw new Error('빈 포트를 찾지 못했습니다');
  }
  waitUp(host, port, timeoutMs) {
    const until = Date.now() + timeoutMs;
    return new Promise((resolve) => {
      const tryOnce = () => {
        const req = http.get({ host, port, path: '/', timeout: 5000 }, (res) => { res.resume(); resolve(true); });
        req.on('error', () => (Date.now() < until ? setTimeout(tryOnce, 3000) : resolve(false)));
        req.on('timeout', () => { req.destroy(); Date.now() < until ? setTimeout(tryOnce, 3000) : resolve(false); });
      };
      tryOnce();
    });
  }

  async teardown(project, n, { quiet = false } = {}) {
    const v = await this.get(project.name, n);
    const r = this.recipe(project);
    const ex = this.runner.ex(project);
    const container = v?.preview?.container || `bugfix-${project.name}-v${n}`;
    await ex.execOut('/', 1, ['docker', 'rm', '-f', container]);
    if (r?.db && r.db.mode !== 'shared' && v?.preview?.db && v.preview.db !== r.db.name) await ex.execOut('/', 5, ['docker', 'exec', r.db.container, 'dropdb', '-U', r.db.user, '--if-exists', '--force', v.preview.db]);
    if (!quiet) await this.plog(project.name, n, '■ 미리보기 중지(컨테이너·DB 사본 제거)');
  }
  async stop(project, n) {
    await this.teardown(project, n);
    await fs.rm(this.previewDir(project.name, n), { recursive: true, force: true });   // 빌드 산출물(dist·jar)도 - 다시 띄우면 재빌드
    await this.update(project.name, n, (x) => ({ preview: { ...x.preview, status: 'DOWN', stoppedAt: nowIso() } }));
    return this.get(project.name, n);
  }
  async remove(project, n) {
    await this.teardown(project, n, { quiet: true });
    await fs.rm(this.previewDir(project.name, n), { recursive: true, force: true });
    const ex = this.runner.ex(project);
    const { repo } = this.runner.paths(project, 0);
    await ex.execOut(repo, 1, ['git', 'tag', '-d', `bugfix/v${n}`]);
    await this.save(project.name, (c) => ({ ...c, versions: c.versions.filter((v) => v.n !== Number(n)) }));
  }

  /** 오래 안 쓴 미리보기 정리 + 재시작으로 끊긴 상태 정리 */
  startSweeper() {
    const tick = async () => {
      for (const p of Object.values(this.cfg.projects)) {
        const r = this.recipe(p);
        const st = await this.state(p.name);
        for (const v of st.versions) {
          const pv = v.preview || {};
          if (['QUEUED', 'BUILDING', 'STARTING'].includes(pv.status) && Date.parse(pv.startedAt || 0) < Date.now() - 2 * 3600_000) {
            await this.update(p.name, v.n, (x) => ({ preview: { ...x.preview, status: 'FAILED', error: '준비 중 끊김(워커 재시작)' } }));
          }
          if (pv.status === 'UP' && r && Date.parse(pv.lastAccess || pv.upAt || 0) < Date.now() - (r.ttlHours || 12) * 3600_000) {
            this.log.info(`[preview ${p.name}] v${v.n} ${r.ttlHours || 12}시간 미사용 - 중지`);
            await this.stop(p, v.n).catch(() => {});
          }
        }
      }
    };
    // 템플릿 DB 는 새벽(03~05시)에 미리 갱신해 두어 낮에 띄울 때 기다리지 않게
    const refresh = async () => {
      const h = new Date().getHours();
      if (h < 3 || h > 5) return;
      for (const p of Object.values(this.cfg.projects)) {
        const r = this.recipe(p);
        if (!r?.db || r.db.mode === 'shared') continue;
        const lane = this.runner.lane('preview');
        if (lane.busy || lane.pending) continue;
        await this.ensureTemplate(p, this.runner.ex(p), this.cfg.server.workDir, (m) => this.log.info(`[preview ${p.name}] ${m}`)).catch((e) => this.log.warn(`[preview ${p.name}] 템플릿 갱신 실패: ${e.message}`));
      }
    };
    this.timer = setInterval(() => { tick().catch((e) => this.log.warn('[preview] 정리 실패:', e.message)); refresh().catch(() => {}); }, 10 * 60_000);
  }
  stopSweeper() { if (this.timer) clearInterval(this.timer); }

  /** 재시작 뒤: 준비 중이던 것은 FAILED 로, UP 인 것은 컨테이너가 살아 있는지 확인 */
  async resetInterrupted() {
    for (const p of Object.values(this.cfg.projects)) {
      const st = await this.state(p.name);
      const ex = this.runner.ex(p);
      for (const v of st.versions) {
        const pv = v.preview || {};
        if (['QUEUED', 'BUILDING', 'STARTING'].includes(pv.status)) await this.update(p.name, v.n, (x) => ({ preview: { ...x.preview, status: 'FAILED', error: '준비 중 워커가 재시작됨 - 다시 시작하세요' } }));
        else if (pv.status === 'UP' && pv.container) {
          const alive = (await ex.execOut('/', 1, ['docker', 'ps', '-q', '-f', `name=^${pv.container}$`])).trim();
          if (!alive) await this.update(p.name, v.n, (x) => ({ preview: { ...x.preview, status: 'DOWN' } }));
        }
      }
    }
  }

  // ── 라우터: {마운트}/v/:project/:n/… ────────────────────────────────────
  router() {
    const r = express.Router();
    r.use('/v/:project/:n', async (req, res, next) => {
      const project = this.cfg.projects[req.params.project];
      if (!project) return res.status(404).send('모르는 프로젝트');
      const n = Number(req.params.n);
      const v = await this.get(project.name, n);
      if (!v) return res.status(404).send(`없는 버전 v${n}`);
      const pv = v.preview || {};
      const recipe = this.recipe(project) || { host: '127.0.0.1', proxies: {} };
      // 마지막 접속 시각(정리용) - 너무 자주 쓰지 않게 1분 단위
      if (pv.status === 'UP' && Date.parse(pv.lastAccess || 0) < Date.now() - 60_000) this.update(project.name, n, (x) => ({ preview: { ...x.preview, lastAccess: nowIso() } })).catch(() => {});
      const sub = req.url;   // '/…' (마운트 이후)
      // 백엔드
      if (sub === '/back' || sub.startsWith('/back/') || sub.startsWith('/back?')) {
        if (pv.status !== 'UP' || !pv.port) return res.status(503).json({ message: `미리보기 백엔드가 떠 있지 않습니다(${pv.status || 'NONE'})` });
        return proxyTo(req, res, recipe.host, pv.port, sub.replace(/^\/back/, '') || '/');
      }
      // 프론트가 같은 오리진으로 부르는 다른 경로(파일 서버 등)
      for (const [prefix, target] of Object.entries(recipe.proxies || {})) {
        if (sub.startsWith(prefix)) {
          const t = new URL(target);
          return proxyTo(req, res, t.hostname, Number(t.port) || (t.protocol === 'https:' ? 443 : 80), (t.pathname.replace(/\/+$/, '') + '/' + sub.slice(prefix.length)).replace(/\/{2,}/g, '/'), t.protocol === 'https:');
        }
      }
      // 프론트 정적 파일 + SPA 폴백
      const front = path.join(this.previewDir(project.name, n), 'front');
      if (!fss.existsSync(path.join(front, 'index.html'))) return res.status(503).send(`미리보기 프론트가 준비되지 않았습니다(${pv.status || 'NONE'})`);
      const rel = decodeURIComponent(sub.split('?')[0]);
      const previewUrl = `${recipe.base || '/bugfix'}/v/${project.name}/${n}`;
      // 일부 플러그인(vite-plugin-cesium 등)은 base 를 출력 경로에도 붙여 dist/<base>/… 에 놓는다 - 그 자리도 본다
      for (const file of [path.join(front, rel), path.join(front, previewUrl, rel)]) {
        if (rel !== '/' && file.startsWith(front) && fss.existsSync(file) && fss.statSync(file).isFile()) return res.sendFile(file);
      }
      return res.sendFile(path.join(front, 'index.html'));
    });
    return r;
  }
}

const sq = (s) => `'${String(s).replace(/'/g, `'\\''`)}'`;

/** 요청을 그대로 스트리밍해 넘긴다 (헤더·본문·상태 유지). 웹소켓은 안 다룬다 */
function proxyTo(req, res, host, port, pathname, tls = false) {
  const mod = tls ? import('node:https') : Promise.resolve(http);
  mod.then((h) => {
    const headers = { ...req.headers, host: `${host}:${port}` };
    const up = h.request({ host, port, path: pathname, method: req.method, headers, timeout: 120_000 }, (r2) => {
      res.status(r2.statusCode);
      for (const [k, val] of Object.entries(r2.headers)) if (!['transfer-encoding', 'connection'].includes(k)) res.setHeader(k, val);
      r2.pipe(res);
    });
    up.on('error', (e) => { if (!res.headersSent) res.status(502).json({ message: `미리보기 백엔드 연결 실패: ${e.message}` }); else res.end(); });
    up.on('timeout', () => up.destroy(new Error('timeout')));
    req.pipe(up);
  });
}
