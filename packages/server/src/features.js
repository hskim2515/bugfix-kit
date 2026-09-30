import fs from 'node:fs/promises';
import path from 'node:path';
import { firstLine, notBlank, nowIso } from './util.js';

/**
 * 기능(feature) - 로드맵·작업의 관리 단위. 작업(리포트)은 featureId 로 기능에 묶이고, 기능은 코드 범위(scope)로 저장소와 이어진다.
 *   data/<project>/features.json = { seq, features: [ { id, name, description, status, scope: { nodeId, label, files[], nodes[] }, extraFiles[],
 *                                                         acceptance: [ { taskId, at, api[], steps[] } ], createdAt, updatedAt, order, milestone } ] }
 *   status: planned(계획) · active(진행) · review(검토) · done(완료) · hold(보류)
 *
 * 기능 ↔ 코드: scope 는 지식 그래프의 노드(화면·메뉴·기능·파일·API) 하나와 거기서 2단계까지 이어진 파일들(루프의 resolveScope 와 같은 규칙) + 사람이 적은 extraFiles.
 *   - 작업을 만들 때 기능의 범위가 .devloop/summary.md·knowledge.md 에 들어가 AI 가 그 코드부터 본다.
 *   - 수정본의 바뀐 파일(fixFiles)과 기능 범위가 겹치면 "이 변경이 영향 주는 기능" 으로 보여 준다(impact).
 *   - 작업의 인수 조건(재현 절차)이 통과하면 기능의 acceptance 에 쌓인다 → 기능 단위 회귀 검증의 재료.
 */
export const FEATURE_STATUS = { planned: '계획', active: '진행', review: '검토', done: '완료', hold: '보류' };

export class Features {
  constructor(cfg, store, knowledge, log = console) { this.cfg = cfg; this.store = store; this.knowledge = knowledge; this.log = log; this.locks = new Map(); }
  file(project) { return path.join(this.cfg.server.dataDir, project, 'features.json'); }
  async state(project) { try { return JSON.parse(await fs.readFile(this.file(project), 'utf8')); } catch { return { seq: 0, features: [] }; } }
  async save(project, patch) {
    const prev = this.locks.get(project) || Promise.resolve();
    const run = prev.then(async () => {
      const cur = await this.state(project);
      const next = typeof patch === 'function' ? patch(cur) : { ...cur, ...patch };
      await fs.mkdir(path.dirname(this.file(project)), { recursive: true });
      const tmp = `${this.file(project)}.tmp`;
      await fs.writeFile(tmp, JSON.stringify(next, null, 2), 'utf8');
      await fs.rename(tmp, this.file(project));
      return next;
    });
    this.locks.set(project, run.catch(() => {}));
    return run;
  }

  async list(project) {
    const st = await this.state(project);
    const reports = await this.store.list(project).catch(() => []);
    return st.features.map((f) => this.withCounts(f, reports)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || b.id - a.id);
  }
  withCounts(f, reports) {
    const tasks = reports.filter((r) => Number(r.featureId) === f.id);
    const counts = {};
    for (const t of tasks) { const k = t.fixStatus || 'NONE'; counts[k] = (counts[k] || 0) + 1; }
    return { ...f, tasks: tasks.length, counts, lastTaskAt: tasks.map((t) => t.fixUpdatedAt || t.insertDate).filter(Boolean).sort().pop() || null };
  }
  async get(project, id) { const st = await this.state(project); return st.features.find((f) => f.id === Number(id)) || null; }
  async tasksOf(project, id) { const reports = await this.store.list(project).catch(() => []); return reports.filter((r) => Number(r.featureId) === Number(id)); }

  async create(project, body) {
    const name = String(body.name || '').trim().slice(0, 120);
    if (!name) throw Object.assign(new Error('기능 이름을 적어 주세요'), { status: 400 });
    let scope = null;
    if (body.scope && (body.scope.nodeId || body.scope.label)) scope = await this.resolveScope(project, body.scope);
    const st = await this.save(project, (c) => {
      const id = (c.seq || 0) + 1;
      const f = { id, name, description: String(body.description || '').slice(0, 4000), status: FEATURE_STATUS[body.status] ? body.status : 'planned', scope, extraFiles: cleanFiles(body.extraFiles), milestone: String(body.milestone || '').slice(0, 80) || null, acceptance: [], order: c.features.length, createdAt: nowIso(), updatedAt: nowIso() };
      return { ...c, seq: id, features: [...c.features, f] };
    });
    return st.features[st.features.length - 1];
  }
  async update(project, id, body) {
    let scope;
    if (body.scope !== undefined) scope = body.scope && (body.scope.nodeId || body.scope.label) ? await this.resolveScope(project, body.scope) : null;
    const st = await this.save(project, (c) => ({
      ...c,
      features: c.features.map((f) => f.id !== Number(id) ? f : {
        ...f,
        ...(body.name !== undefined ? { name: String(body.name).trim().slice(0, 120) || f.name } : {}),
        ...(body.description !== undefined ? { description: String(body.description).slice(0, 4000) } : {}),
        ...(body.status !== undefined && FEATURE_STATUS[body.status] ? { status: body.status } : {}),
        ...(body.milestone !== undefined ? { milestone: String(body.milestone || '').slice(0, 80) || null } : {}),
        ...(body.extraFiles !== undefined ? { extraFiles: cleanFiles(body.extraFiles) } : {}),
        ...(body.order !== undefined ? { order: Number(body.order) || 0 } : {}),
        ...(scope !== undefined ? { scope } : {}),
        updatedAt: nowIso(),
      }),
    }));
    return st.features.find((f) => f.id === Number(id)) || null;
  }
  async remove(project, id) {
    await this.save(project, (c) => ({ ...c, features: c.features.filter((f) => f.id !== Number(id)) }));
    // 묶여 있던 작업은 풀어 둔다
    const tasks = await this.tasksOf(project, id);
    for (const t of tasks) await this.store.update(project, t.bugReportId, (c) => ({ ...c, featureId: null }));
    return { ok: true, unlinked: tasks.length };
  }

  /** 지식 그래프에서 범위 풀기 - 노드 하나 + 2단계까지 이어진 파일 (loops.resolveScope 와 같은 규칙) */
  async resolveScope(project, scope) {
    const g = await this.knowledge?.graph(project).catch(() => null);
    const label = scope.label || scope.nodeId;
    if (!g?.nodes?.length) return { nodeId: scope.nodeId || null, label, files: [], nodes: [], missing: true };
    let root = scope.nodeId ? g.nodes.find((n) => n.id === scope.nodeId) : null;
    if (!root && scope.label) { const q = String(scope.label).toLowerCase(); root = g.nodes.find((n) => String(n.label).toLowerCase() === q) || g.nodes.find((n) => String(n.label).toLowerCase().includes(q)); }
    if (!root) return { nodeId: scope.nodeId || null, label, files: [], nodes: [], missing: true };
    const adj = new Map();
    for (const e of g.edges || []) { const a = e.source ?? e.from, b = e.target ?? e.to; if (!adj.has(a)) adj.set(a, new Set()); if (!adj.has(b)) adj.set(b, new Set()); adj.get(a).add(b); adj.get(b).add(a); }
    const seen = new Set([root.id]); let frontier = [root.id];
    for (let d = 0; d < 2; d++) { const next = []; for (const id of frontier) for (const nb of adj.get(id) || []) if (!seen.has(nb)) { seen.add(nb); next.push(nb); } frontier = next; }
    const nodes = g.nodes.filter((n) => seen.has(n.id));
    return { nodeId: root.id, label: root.label, type: root.type, files: [...new Set(nodes.map((n) => n.path).filter(Boolean))].slice(0, 80), nodes: nodes.map((n) => n.label).slice(0, 40), missing: false };
  }
  /** 이름·설명으로 지식 그래프 노드 후보 추천 (콘솔 '범위 추천') */
  async suggest(project, text) {
    const g = await this.knowledge?.graph(project).catch(() => null);
    if (!g?.nodes?.length) return { candidates: [], missing: true };
    const words = String(text || '').toLowerCase().split(/[^0-9a-z가-힣_]+/).filter((w) => w.length >= 2);
    const score = (n) => { const l = `${n.label} ${n.desc || ''} ${n.route || ''} ${n.path || ''}`.toLowerCase(); let s = 0; for (const w of words) if (l.includes(w)) s += w.length; if (['menu', 'feature', 'screen', 'page'].includes(n.type)) s *= 1.5; return s; };
    const candidates = g.nodes.map((n) => ({ n, s: score(n) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 10).map((x) => ({ nodeId: x.n.id, label: x.n.label, type: x.n.type, path: x.n.path || null, route: x.n.route || null }));
    return { candidates, missing: false };
  }
  /** 바뀐 파일 목록이 어느 기능 범위와 겹치나 (영향 분석) */
  async impact(project, files = []) {
    const st = await this.state(project);
    const fl = files.map(String);
    const hit = [];
    for (const f of st.features) {
      const scopeFiles = [...(f.scope?.files || []), ...(f.extraFiles || [])];
      const m = fl.filter((x) => scopeFiles.some((s) => x === s || x.endsWith('/' + s) || s.endsWith('/' + x) || x.includes(s)));
      if (m.length) hit.push({ id: f.id, name: f.name, status: f.status, files: [...new Set(m)].slice(0, 20) });
    }
    return hit;
  }
  /** 작업의 인수 조건(통과한 재현 절차)을 기능에 쌓는다 */
  async recordAcceptance(project, featureId, taskId, spec) {
    if (!featureId || !spec) return;
    await this.save(project, (c) => ({ ...c, features: c.features.map((f) => f.id !== Number(featureId) ? f : { ...f, acceptance: [...(f.acceptance || []).filter((a) => a.taskId !== taskId), { taskId, at: nowIso(), api: spec.api || [], steps: spec.steps || [] }].slice(-30), updatedAt: nowIso() }) }));
  }
  /** 회귀 검증 그룹: 이 작업의 기능 + 바뀐 파일이 겹치는 기능들의 인수 조건(다른 작업 것만). [{featureId,name,taskId,api,steps}] */
  async regressionGroups(project, { excludeTaskId = null, featureId = null, files = [] } = {}) {
    const st = await this.state(project);
    const impacted = new Set((await this.impact(project, files)).map((x) => x.id));
    if (featureId) impacted.add(Number(featureId));
    const groups = [];
    for (const f of st.features) {
      if (!impacted.has(f.id)) continue;
      for (const a of f.acceptance || []) {
        if (excludeTaskId != null && a.taskId === excludeTaskId) continue;
        if (!(a.api || []).length && !(a.steps || []).length) continue;
        groups.push({ featureId: f.id, name: f.name, taskId: a.taskId, api: a.api || [], steps: a.steps || [] });
      }
    }
    return groups.slice(0, 8);
  }
  /** 콘솔 '회귀 검증': 이 기능의 인수 조건 전부를 미리보기 v{n} 에 돌려 결과를 기능에 기록 */
  async regress(project, id, n, runner) {   // project 는 설정 객체
    const f = await this.get(project.name, id);
    if (!f) throw Object.assign(new Error('없는 기능'), { status: 404 });
    const groups = (f.acceptance || []).filter((a) => (a.api || []).length || (a.steps || []).length);
    if (!groups.length) throw Object.assign(new Error('이 기능에 쌓인 인수 조건이 없습니다 - 작업의 인수 조건이 통과하면 쌓이고, 작업의 절차를 가져올 수도 있습니다'), { status: 409 });
    if (!runner.versions?.recipe(project)) throw Object.assign(new Error('미리보기 레시피가 없습니다'), { status: 409 });
    const v = await runner.ensurePreviewUp(project, n);
    if (!v) throw Object.assign(new Error(`미리보기 v${n} 이 뜨지 않았습니다`), { status: 409 });
    const ex = runner.ex(project);
    const cwd = path.join(runner.versions.previewDir(project.name, n), 'regress'); await fs.mkdir(cwd, { recursive: true });
    const results = []; const evidence = [];
    for (const a of groups) {
      const rr = await runner.replaySpec(project, v, { api: a.api, steps: a.steps }, { ex, cwd, tag: `#${a.taskId}` });
      results.push({ taskId: a.taskId, passed: !rr.failed }); evidence.push(...rr.evid);
    }
    const rec = { at: nowIso(), n, passed: results.every((x) => x.passed), results, evidence: evidence.slice(0, 60) };
    await this.save(project.name, (c) => ({ ...c, features: c.features.map((x) => x.id !== f.id ? x : { ...x, lastRegression: rec }) }));
    return rec;
  }
  /** 작업이 보관한 재현 절차(fixReproSpec)를 이 기능의 인수 조건으로 가져온다 */
  async acceptanceFromTask(project, id, taskId) {
    const r = await this.store.get(project, taskId);
    if (!r) throw Object.assign(new Error('없는 작업'), { status: 404 });
    let spec = null; try { spec = JSON.parse(r.fixReproSpec || 'null'); } catch { /* */ }
    if (!spec || (!(spec.api || []).length && !(spec.steps || []).length)) throw Object.assign(new Error('그 작업에는 보관된 재현 절차가 없습니다'), { status: 409 });
    await this.recordAcceptance(project, id, Number(taskId), spec);
    if (r.featureId == null) await this.store.update(project, Number(taskId), (c) => ({ ...c, featureId: Number(id) }));
    return { ok: true, api: (spec.api || []).length, steps: (spec.steps || []).length };
  }

  /** .devloop/summary.md 에 붙일 기능 설명 */
  describe(f) {
    if (!f) return '';
    const files = [...(f.scope?.files || []), ...(f.extraFiles || [])];
    return `## 이 작업이 속한 기능: ${f.name} (${FEATURE_STATUS[f.status] || f.status})\n${f.description ? `${f.description}\n` : ''}${f.scope?.label ? `- 지식 그래프 범위: ${f.scope.label}${f.scope.nodes?.length ? ` → ${f.scope.nodes.slice(0, 15).join(', ')}` : ''}\n` : ''}${files.length ? `- 관련 파일(먼저 보세요):\n${files.slice(0, 40).map((x) => `  - ${x}`).join('\n')}\n` : ''}${(f.acceptance || []).length ? `- 이 기능에 쌓인 인수 조건 ${f.acceptance.length}건(앞선 작업들) - 깨뜨리지 마세요\n` : ''}`;
  }
}

function cleanFiles(v) {
  const arr = Array.isArray(v) ? v : String(v || '').split(/[\n,]/);
  return [...new Set(arr.map((x) => String(x).trim()).filter(Boolean))].slice(0, 100);
}
export { firstLine, notBlank };
