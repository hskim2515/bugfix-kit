import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { FileStore } from './store.js';
import { Shots } from './shots.js';
import { HttpError, notBlank } from './util.js';
import { adminRouter } from './admin.js';

const STATUSES = new Set(['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED']);
const REPORT_FIELDS = ['severity', 'problem', 'reproSteps', 'expectedResult', 'screenshot', 'contextJson', 'frontendLogs', 'backendLogs', 'networkLogs', 'mutationLog'];

/**
 * HTTP API. 응답은 `{ content }` 하나로 감싼다(프론트 SDK 와 lhdt 뷰어가 res.data.content 로 읽는다).
 *
 *   POST   /api/p/:project/reports              리포트 저장 → { bugReportId }
 *   GET    /api/p/:project/reports              목록(가벼운 필드)
 *   GET    /api/p/:project/reports/:id          상세
 *   GET    /api/p/:project/reports/:id/fix      진행 상태만(스크린샷·로그 제외) - 진행 중 3초 폴링용
 *   PATCH  /api/p/:project/reports/:id/status   { status }
 *   DELETE /api/p/:project/reports/:id
 *   POST   /api/p/:project/reports/:id/request-fix
 *   POST   /api/p/:project/reports/:id/fix-chat { message, mode: 'ask'|'change' }
 *   POST   /api/p/:project/reports/:id/fix-sync
 *
 * 인증: 프로젝트에 apiKey 가 있으면 `X-Bugfix-Key` 헤더가 같아야 한다. 보고자는 `X-Bugfix-User` 헤더(앱이 로그인 사용자를 넣는다) 또는 body.reporter.
 */
/**
 * 라우터를 돌려준다(경로는 마운트 지점 기준). 독립 서버는 `app.use('/api', router)`, 앱 내장(bugfix-kit/embed)은 `app.use('/bugfix', router)`.
 * 콘솔(/ui/)은 자기 주소의 한 단계 위를 API 기준으로 쓰므로 어디에 마운트해도 맞는다.
 */
export function createApi(cfg, store, runner, log = console, insights = null, knowledge = null, versions = null) {
  const app = express.Router();
  // 버전 미리보기({마운트}/v/:project/:n/…)는 본문을 그대로 넘겨야 하므로 JSON 파서보다 앞에
  if (versions) app.use(versions.router());
  app.use(express.json({ limit: '60mb' }));

  // CORS - 프로젝트 cors 목록(없으면 전부 허용). 프리플라이트는 프로젝트를 모르므로 요청 origin 을 그대로 돌려준다
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Bugfix-Key, X-Bugfix-User, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    }
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });

  const wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res)).then((v) => { if (v !== undefined) res.json({ content: v }); }).catch(next);

  app.get('/health', (req, res) => res.json({ ok: true, projects: Object.keys(cfg.projects), queue: runner.pending, busy: !!runner.busy, lanes: runner.laneState() }));

  // ── 운영자 대시보드: <마운트>/ui/ (독립 서버 /api/ui/, 내장 /bugfix/ui/) ──
  const here = path.dirname(fileURLToPath(import.meta.url));
  const uiDir = path.join(here, '..', 'ui');
  const clientDist = path.join(here, '..', '..', 'client', 'dist');
  app.use('/ui/client', express.static(clientDist, { maxAge: '1h' }));
  app.get(['/ui', '/ui/'], (req, res) => res.sendFile(path.join(uiDir, 'index.html')));

  const admin = (req, res, next) => {
    if (!notBlank(cfg.server.adminKey)) return next(new HttpError(503, '운영자 키가 설정되지 않았습니다 (BUGFIX_ADMIN_KEY 또는 ~/.config/bugfix-kit/default.env 의 ADMIN_KEY)'));
    if (req.get('X-Bugfix-Admin') !== cfg.server.adminKey) return next(new HttpError(401, '운영자 키가 맞지 않습니다'));
    next();
  };
  /** 전 프로젝트 요약: 리포트 목록(가벼운 필드 + 수정 상태) · 진행 중 작업의 로그 꼬리 · 큐 길이 · 프로젝트 API 키(뷰어가 쓰게) */
  app.get('/admin/overview', admin, wrap(async () => {
    const projects = [];
    let running = null;
    for (const p of Object.values(cfg.projects)) {
      const list = await store.list(p.name);
      const counts = {};
      for (const r of list) counts[r.fixStatus || 'NONE'] = (counts[r.fixStatus || 'NONE'] || 0) + 1;
      for (const r of list) {
        if (['QUEUED', 'RUNNING'].includes(r.fixStatus)) {
          const full = await store.get(p.name, r.bugReportId);
          const tail = (full?.fixLog || '').split('\n').filter(Boolean).slice(-12).join('\n');
          if (!running || r.fixStatus === 'RUNNING') running = { project: p.name, bugReportId: r.bugReportId, fixStatus: r.fixStatus, problem: r.problem, logTail: tail, fixRequestedAt: full?.fixRequestedAt };
        }
      }
      projects.push({ name: p.name, apiKey: p.apiKey || '', githubRepo: p.githubRepo, baseBranch: p.baseBranch, autoMerge: p.autoMerge, delivery: p.delivery, cors: p.cors || [], host: p.host, counts, reports: list.map((r) => ({ ...r, fixPrNumber: undefined })) });
    }
    return { projects, running, queue: runner.pending, now: new Date().toISOString() };
  }));
  app.use('/admin', admin, adminRouter(cfg, store, runner, log));

  // ── 제안(Insights): AI 가 먼저 고칠 점을 찾는다 ──
  const proj = (req) => { const p = cfg.projects[req.params.project]; if (!p) throw new HttpError(404, `모르는 프로젝트: ${req.params.project}`); return p; };
  app.get('/admin/insights/:project', admin, wrap(async (req) => insights ? insights.state(proj(req).name) : { status: 'NONE', items: [] }));
  app.post('/admin/insights/:project', admin, wrap(async (req) => { if (!insights) throw new HttpError(503, '분석 기능이 꺼져 있습니다'); await insights.enqueue(proj(req), { focus: String(req.body?.focus || '').slice(0, 500) }); return insights.state(proj(req).name); }));
  // ── 지식 그래프(Knowledge): 메뉴·기능 → 파일·API 온톨로지 ──
  app.get('/admin/knowledge/:project', admin, wrap(async (req) => knowledge ? knowledge.summary(proj(req).name) : { status: 'NONE' }));
  app.get('/admin/knowledge/:project/graph', admin, wrap(async (req) => { const s = knowledge ? await knowledge.state(proj(req).name) : {}; return { nodes: s.nodes || [], edges: s.edges || [], head: s.head || null }; }));
  // ── 버전(AI 수정본) · 미리보기 ──
  app.get('/admin/versions/:project', admin, wrap(async (req) => ({ versions: versions ? await versions.list(proj(req).name) : [], recipe: versions ? versions.recipe(proj(req)) : null, lane: runner.laneState().preview || null })));
  app.get('/admin/versions/:project/:n/diff', admin, wrap(async (req) => { const d = versions ? await versions.diff(proj(req), req.params.n) : null; if (!d) throw new HttpError(404, '없는 버전'); return d; }));
  app.post('/admin/versions/:project/:n/preview', admin, wrap(async (req) => versions.start(proj(req), req.params.n)));
  app.delete('/admin/versions/:project/:n/preview', admin, wrap(async (req) => versions.stop(proj(req), req.params.n)));
  app.delete('/admin/versions/:project/:n', admin, wrap(async (req) => { await versions.remove(proj(req), req.params.n); return { ok: true }; }));
  app.post('/admin/versions/:project/recipe/draft', admin, wrap(async (req) => ({ recipe: await versions.draftRecipe(proj(req), { note: String(req.body?.note || '').slice(0, 1000) }) })));
  app.post('/admin/knowledge/:project', admin, wrap(async (req) => { if (!knowledge) throw new HttpError(503, '지식 그래프 기능이 꺼져 있습니다'); await knowledge.enqueue(proj(req), { mode: req.body?.mode === 'full' ? 'full' : 'update', reason: '콘솔' }); return knowledge.summary(proj(req).name); }));

  // 제안 삭제 - 목록에서 빼고 제목을 '무시' 목록에 남겨 다음 분석에서 같은 것을 다시 내지 않게
  app.delete('/admin/insights/:project/items/:id', admin, wrap(async (req) => {
    if (!insights) throw new HttpError(503, '분석 기능이 꺼져 있습니다');
    const p = proj(req);
    const id = Number(req.params.id);
    let removed = null;
    await insights.save(p.name, (cur) => {
      removed = (cur.items || []).find((x) => x.id === id) || null;
      const dismissed = [...(cur.dismissed || []), ...(removed ? [removed.title] : [])].slice(-60);
      return { items: (cur.items || []).filter((x) => x.id !== id), dismissed };
    });
    if (!removed) throw new HttpError(404, '없는 제안');
    return { ok: true };
  }));

  app.post('/admin/insights/:project/report', admin, wrap(async (req) => {
    if (!insights) throw new HttpError(503, '분석 기능이 꺼져 있습니다');
    const p = proj(req);
    const fix = !!req.body?.fix;
    if (fix && !notBlank(cfg.githubToken(p))) throw new HttpError(409, 'GitHub 토큰이 없습니다(BUGFIX_GITHUB_TOKEN 또는 github.tokenFile)');
    // 읽기~reportId 저장을 잠금 안에서 - 중복 클릭·동시 요청이 리포트를 두 번 만들지 않게
    // save() 가 p.name 키로 따로 잠그므로(재진입 불가) 여기서는 다른 키로 잠근다
    return insights.withLock(`report:${p.name}`, async () => {
      const st = await insights.state(p.name);
      const item = st.items?.find((x) => x.id === Number(req.body?.id));
      if (!item) throw new HttpError(404, '없는 제안');
      if (item.reportId) throw new HttpError(409, `이미 리포트 #${item.reportId} 로 만들었습니다`);
      const id = await insights.toReport(p, item, { fix, reporter: req.body?.reporter || 'insights' });
      // 만든 제안은 목록에서 '리포트 #n' 으로 표시되게
      await insights.save(p.name, (cur) => ({ items: (cur.items || []).map((x) => (x.id === item.id ? { ...x, reportId: id } : x)) }));
      return { bugReportId: id };
    });
  }));

  const pr = express.Router({ mergeParams: true });
  app.use('/p/:project', (req, res, next) => {
    const project = cfg.projects[req.params.project];
    if (!project) return next(new HttpError(404, `모르는 프로젝트: ${req.params.project}`));
    const origin = req.headers.origin;
    if (origin && project.cors?.length && !project.cors.includes(origin)) return next(new HttpError(403, `허용되지 않은 origin: ${origin}`));
    req.isAdmin = notBlank(cfg.server.adminKey) && req.get('X-Bugfix-Admin') === cfg.server.adminKey;
    if (!req.isAdmin && notBlank(project.apiKey) && req.get('X-Bugfix-Key') !== project.apiKey) return next(new HttpError(401, 'API 키가 맞지 않습니다(X-Bugfix-Key)'));
    req.project = project;
    next();
  }, pr);
  // 수정 요청·후속 요청은 프로젝트 설정(fixFrom)에 따라 관리 콘솔에서만 허용할 수 있다
  const fixGuard = (req, res, next) => (req.project.fixFrom === 'admin' && !req.isAdmin ? next(new HttpError(403, '이 프로젝트의 수정 요청은 관리 콘솔에서만 할 수 있습니다. 신고는 접수됐습니다.')) : next());

  /** 앱 SDK 가 화면을 맞추는 데 필요한 공개 정보 */
  pr.get('/info', wrap((req) => ({ name: req.project.name, fixFrom: req.project.fixFrom, canFix: req.project.fixFrom !== 'admin' || !!req.isAdmin, autoMerge: !!req.project.autoMerge, delivery: req.project.delivery })));

  pr.post('/reports', wrap(async (req) => {
    const b = req.body || {};
    if (!notBlank(b.problem) && !notBlank(b.reproSteps)) throw new HttpError(400, '문제 또는 재현 절차를 적어 주세요');
    const report = {};
    for (const k of REPORT_FIELDS) report[k] = b[k] == null ? null : (typeof b[k] === 'string' ? b[k] : JSON.stringify(b[k]));
    report.reporter = req.get('X-Bugfix-User') || b.reporter || 'anonymous';
    // 버그 신고 도구 자체의 문제 - 같은 프로젝트에 '도구' 표시로 저장되고 AI 수정 대상이 아니다(운영자가 도구 저장소에서 처리)
    report.tool = b.tool === true || b.tool === 'true';
    const saved = await store.save(req.project.name, report);
    log.info(`[bugfix ${req.project.name}] 리포트 #${saved.bugReportId} (${report.reporter})`);
    return { bugReportId: saved.bugReportId };
  }));

  pr.get('/reports', wrap((req) => store.list(req.project.name)));

  // front-check 스크린샷 (fixShots / 제안 분석의 shots 에 적힌 file). 보관 디렉터리 밖은 404
  const shots = new Shots(cfg.server.dataDir);
  pr.get('/shots/*', (req, res, next) => {
    const abs = shots.resolve(req.project.name, req.params[0]);
    if (!abs) return next(new HttpError(404, '없는 스크린샷'));
    res.set('Cache-Control', 'private, max-age=3600');
    res.sendFile(abs, (e) => { if (e) next(new HttpError(404, '없는 스크린샷')); });
  });

  const load = async (req) => {
    const id = Number(req.params.id);
    const r = Number.isInteger(id) ? await store.get(req.project.name, id) : null;
    if (!r) throw new HttpError(404, `리포트가 없습니다: ${req.params.id}`);
    return r;
  };

  // 도구 문제 리포트는 이 프로젝트의 코드와 무관하므로 수정 파이프라인에 넣지 않는다
  const loadFixable = async (req) => {
    const r = await load(req);
    if (r.tool) throw new HttpError(409, '버그 신고 도구 문제로 접수된 리포트는 AI 수정 대상이 아닙니다(도구 저장소에서 처리)');
    return r;
  };

  pr.get('/reports/:id', wrap(load));
  // 이 신고와 관련된 지식 그래프 부분 - AI 가 프롬프트로 받는 것과 같은 선택. 그래프가 없으면 빈 목록
  pr.get('/reports/:id/knowledge', wrap(async (req) => {
    const r = await load(req);
    const g = knowledge ? await knowledge.graph(req.project.name) : null;
    if (!g) return { nodes: [], edges: [], available: false };
    const { relevantGraph, hintsFromReport } = await import('./knowledge.js');
    return { ...relevantGraph(g, hintsFromReport(r)), available: true };
  }));
  pr.get('/reports/:id/fix', wrap(async (req) => FileStore.fixState(await load(req))));

  pr.patch('/reports/:id/status', wrap(async (req, res) => {
    const st = req.body?.status;
    if (!STATUSES.has(st)) throw new HttpError(400, `유효하지 않은 상태값: ${st}`);
    const r = await load(req);
    await store.update(req.project.name, r.bugReportId, { status: st });
    res.status(204).end();
  }));

  pr.delete('/reports/:id', wrap(async (req, res) => {
    const r = await load(req);
    await store.delete(req.project.name, r.bugReportId);
    res.status(204).end();
  }));

  pr.post('/reports/:id/request-fix', fixGuard, wrap(async (req) => {
    const p = req.project;
    if (!notBlank(cfg.githubToken(p))) throw new HttpError(409, 'GitHub 토큰이 없습니다(BUGFIX_GITHUB_TOKEN 또는 github.tokenFile)');
    const r = await loadFixable(req);
    if (['QUEUED', 'RUNNING'].includes(r.fixStatus)) throw new HttpError(409, '이미 수정이 진행 중입니다.');
    await store.update(p.name, r.bugReportId, (c) => ({
      ...c,
      fixStatus: 'QUEUED', fixBranch: null, fixPrUrl: null, fixPrNumber: null, fixSummary: null, fixLog: '', fixSessionId: null, fixChat: null, fixSuggestions: null,
      fixRequestedAt: new Date().toISOString(), fixUpdatedAt: new Date().toISOString(),
      status: c.status === 'OPEN' ? 'IN_PROGRESS' : c.status,
    }));
    await runner.enqueue(p, r.bugReportId);
    return FileStore.fixState(await store.get(p.name, r.bugReportId));
  }));

  pr.post('/reports/:id/fix-chat', fixGuard, wrap(async (req) => {
    const p = req.project;
    const { message, mode } = req.body || {};
    if (!notBlank(message)) throw new HttpError(400, '메시지가 비어 있습니다.');
    const r = await loadFixable(req);
    if (!r.fixStatus) throw new HttpError(409, "먼저 '수정 요청' 을 실행한 뒤에 이어서 대화할 수 있습니다.");
    if (['QUEUED', 'RUNNING'].includes(r.fixStatus)) throw new HttpError(409, '작업이 진행 중입니다. 끝난 뒤에 보내세요.');
    await runner.appendChat(p, r.bugReportId, 'user', message.trim());
    await runner.enqueueFollowUp(p, r.bugReportId, message.trim(), mode === 'change' ? 'change' : 'ask');
    return FileStore.fixState(await store.get(p.name, r.bugReportId));
  }));

  /** 열린 PR 을 정식 경로로 병합 (관리 콘솔·자동 병합 프로젝트용) */
  // 내보내기·병합: body.mode = branch|pr|merge (기본 merge). 보관만 한 수정본(READY)도 여기서 푸시·PR·병합
  pr.post('/reports/:id/merge', fixGuard, wrap(async (req) => {
    const r = await loadFixable(req);
    const mode = ['branch', 'pr', 'merge'].includes(req.body?.mode) ? req.body.mode : 'merge';
    await runner.enqueueMerge(req.project, r.bugReportId, mode);
    return FileStore.fixState(await store.get(req.project.name, r.bugReportId));
  }));

  pr.post('/reports/:id/fix-sync', wrap(async (req) => {
    const r = await load(req);
    return FileStore.fixState(await runner.syncWithGitHub(req.project, r.bugReportId));
  }));

  app.use((req, res) => res.status(404).json({ message: `없는 경로: ${req.method} ${req.path}` }));
  void fs;
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    const status = err.status || (err.type === 'entity.too.large' ? 413 : 500);
    if (status >= 500) log.error('[bugfix] API 오류', err);
    res.status(status).json({ message: err.message || '오류' });
  });
  return app;
}
