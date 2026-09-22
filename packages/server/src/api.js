import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { FileStore } from './store.js';
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
export function createApi(cfg, store, runner, log = console, insights = null) {
  const app = express();
  app.disable('x-powered-by');
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

  app.get('/api/health', (req, res) => res.json({ ok: true, projects: Object.keys(cfg.projects), queue: runner.pending, busy: !!runner.busy }));

  // ── 운영자 대시보드: /api/ui/ (nginx 가 /bugfix/ → /api/ 이면 https://…/bugfix/ui/) ──
  const here = path.dirname(fileURLToPath(import.meta.url));
  const uiDir = path.join(here, '..', 'ui');
  const clientDist = path.join(here, '..', '..', 'client', 'dist');
  app.use('/api/ui/client', express.static(clientDist, { maxAge: '1h' }));
  app.get(['/api/ui', '/api/ui/'], (req, res) => res.sendFile(path.join(uiDir, 'index.html')));

  const admin = (req, res, next) => {
    if (!notBlank(cfg.server.adminKey)) return next(new HttpError(503, '운영자 키가 설정되지 않았습니다 (BUGFIX_ADMIN_KEY 또는 ~/.config/bugfix-kit/default.env 의 ADMIN_KEY)'));
    if (req.get('X-Bugfix-Admin') !== cfg.server.adminKey) return next(new HttpError(401, '운영자 키가 맞지 않습니다'));
    next();
  };
  /** 전 프로젝트 요약: 리포트 목록(가벼운 필드 + 수정 상태) · 진행 중 작업의 로그 꼬리 · 큐 길이 · 프로젝트 API 키(뷰어가 쓰게) */
  app.get('/api/admin/overview', admin, wrap(async () => {
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
      projects.push({ name: p.name, apiKey: p.apiKey || '', githubRepo: p.githubRepo, baseBranch: p.baseBranch, autoMerge: p.autoMerge, counts, reports: list.map((r) => ({ ...r, fixPrNumber: undefined })) });
    }
    return { projects, running, queue: runner.pending, now: new Date().toISOString() };
  }));
  app.use('/api/admin', admin, adminRouter(cfg, store, runner, log));

  // ── 제안(Insights): AI 가 먼저 고칠 점을 찾는다 ──
  const proj = (req) => { const p = cfg.projects[req.params.project]; if (!p) throw new HttpError(404, `모르는 프로젝트: ${req.params.project}`); return p; };
  app.get('/api/admin/insights/:project', admin, wrap(async (req) => insights ? insights.state(proj(req).name) : { status: 'NONE', items: [] }));
  app.post('/api/admin/insights/:project', admin, wrap(async (req) => { if (!insights) throw new HttpError(503, '분석 기능이 꺼져 있습니다'); await insights.enqueue(proj(req), { focus: String(req.body?.focus || '').slice(0, 500) }); return insights.state(proj(req).name); }));
  app.post('/api/admin/insights/:project/report', admin, wrap(async (req) => {
    if (!insights) throw new HttpError(503, '분석 기능이 꺼져 있습니다');
    const p = proj(req);
    const st = await insights.state(p.name);
    const item = st.items?.find((x) => x.id === Number(req.body?.id));
    if (!item) throw new HttpError(404, '없는 제안');
    const id = await insights.toReport(p, item, { fix: !!req.body?.fix, reporter: req.body?.reporter || 'insights' });
    // 만든 제안은 목록에서 '리포트 #n' 으로 표시되게
    await insights.save(p.name, { items: st.items.map((x) => (x.id === item.id ? { ...x, reportId: id } : x)) });
    return { bugReportId: id };
  }));

  const pr = express.Router({ mergeParams: true });
  app.use('/api/p/:project', (req, res, next) => {
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
  pr.get('/info', wrap((req) => ({ name: req.project.name, fixFrom: req.project.fixFrom, canFix: req.project.fixFrom !== 'admin' || !!req.isAdmin, autoMerge: !!req.project.autoMerge })));

  pr.post('/reports', wrap(async (req) => {
    const b = req.body || {};
    if (!notBlank(b.problem) && !notBlank(b.reproSteps)) throw new HttpError(400, '문제 또는 재현 절차를 적어 주세요');
    const report = {};
    for (const k of REPORT_FIELDS) report[k] = b[k] == null ? null : (typeof b[k] === 'string' ? b[k] : JSON.stringify(b[k]));
    report.reporter = req.get('X-Bugfix-User') || b.reporter || 'anonymous';
    const saved = await store.save(req.project.name, report);
    log.info(`[bugfix ${req.project.name}] 리포트 #${saved.bugReportId} (${report.reporter})`);
    return { bugReportId: saved.bugReportId };
  }));

  pr.get('/reports', wrap((req) => store.list(req.project.name)));

  const load = async (req) => {
    const id = Number(req.params.id);
    const r = Number.isInteger(id) ? await store.get(req.project.name, id) : null;
    if (!r) throw new HttpError(404, `리포트가 없습니다: ${req.params.id}`);
    return r;
  };

  pr.get('/reports/:id', wrap(load));
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
    const r = await load(req);
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
    const r = await load(req);
    if (!r.fixStatus) throw new HttpError(409, "먼저 '수정 요청' 을 실행한 뒤에 이어서 대화할 수 있습니다.");
    if (['QUEUED', 'RUNNING'].includes(r.fixStatus)) throw new HttpError(409, '작업이 진행 중입니다. 끝난 뒤에 보내세요.');
    await runner.appendChat(p, r.bugReportId, 'user', message.trim());
    await runner.enqueueFollowUp(p, r.bugReportId, message.trim(), mode === 'change' ? 'change' : 'ask');
    return FileStore.fixState(await store.get(p.name, r.bugReportId));
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
