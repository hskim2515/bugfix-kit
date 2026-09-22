import fs from 'node:fs/promises';
import path from 'node:path';
import { runClaudeStream, claudeSummary, sessionIdOf } from './claude.js';
import { firstLine, hhmmss, nowIso } from './util.js';

const READ_TOOLS = ['Read', 'Glob', 'Grep', 'Bash(git log:*)', 'Bash(git diff:*)', 'Bash(git show:*)', 'Bash(cat:*)', 'Bash(head:*)', 'Bash(tail:*)', 'Bash(grep:*)', 'Bash(rg:*)', 'Bash(ls:*)', 'Bash(wc:*)', 'Bash(find:*)', 'Write(.bugfix/knowledge.json)'];
const TYPES = ['menu', 'screen', 'feature', 'component', 'store', 'util', 'api', 'service', 'table', 'module'];
const RELS = ['contains', 'uses', 'calls', 'reads', 'writes', 'navigates'];

/**
 * 프로젝트 지식 그래프(온톨로지) - 메뉴/화면 → 기능 → 구현 파일(컴포넌트·스토어·유틸) → API → 백엔드 서비스·테이블.
 * Claude 가 저장소를 읽어 만들고(읽기 전용), 병합될 때마다 바뀐 파일 기준으로 갱신한다.
 * 결과는 {dataDir}/{project}/knowledge.json = { status, log, nodes[], edges[], head, builtAt, updatedAt }.
 * 쓰임: 수정·질문 프롬프트에 그 신고와 관련된 부분 그래프(.bugfix/knowledge.md), 제안 분석에는 전체 요약.
 */
export class Knowledge {
  constructor(cfg, store, runner, log = console) {
    this.cfg = cfg; this.store = store; this.runner = runner; this.log = log;
    this.timer = null;
    this.locks = new Map();
    this.cache = new Map();   // project → { mtime, data }
  }

  file(project) { return path.join(this.cfg.server.dataDir, project, 'knowledge.json'); }

  async state(project) {
    try { return JSON.parse(await fs.readFile(this.file(project), 'utf8')); }
    catch { return { status: 'NONE', log: '', nodes: [], edges: [], head: null, builtAt: null, updatedAt: null }; }
  }
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
  async save(project, patch) {
    return this.withLock(project, async () => {
      const cur = await this.state(project);
      const next = { ...cur, ...(typeof patch === 'function' ? patch(cur) : patch), updatedAt: nowIso() };
      const file = this.file(project);
      await fs.mkdir(path.dirname(file), { recursive: true });
      const tmp = `${file}.${process.pid}.tmp`;
      await fs.writeFile(tmp, JSON.stringify(next), 'utf8');
      await fs.rename(tmp, file);
      return next;
    });
  }
  async logLine(project, line) {
    const stamped = `${hhmmss()}  ${line}\n`;
    await this.save(project, (cur) => ({ log: (cur.log || '').slice(-20000) + stamped }));
    this.log.info(`[knowledge ${project}] ${line}`);
  }
  /** 화면용 요약 - 노드·엣지는 빼고 */
  async summary(project) {
    const s = await this.state(project);
    const byType = {};
    for (const n of s.nodes || []) byType[n.type] = (byType[n.type] || 0) + 1;
    return { status: s.status, log: s.log || '', head: s.head, builtAt: s.builtAt, updatedAt: s.updatedAt, nodes: (s.nodes || []).length, edges: (s.edges || []).length, byType, lastScheduledDate: s.lastScheduledDate, pendingUpdate: s.pendingUpdate || null };
  }

  async resetInterrupted() {
    for (const p of Object.values(this.cfg.projects)) {
      const cur = await this.state(p.name);
      if (!['QUEUED', 'RUNNING'].includes(cur.status)) continue;
      await this.logLine(p.name, '✗ 서버 재시작으로 중단 - 다음 확인 때 다시 시도');
      await this.save(p.name, { status: cur.nodes?.length ? 'DONE' : 'FAILED', pendingUpdate: cur.pendingUpdate || 'restart' });
    }
  }

  /**
   * 큐에 넣는다(수정 작업과 같은 큐). mode: 'full' 전체 구축 | 'update' 마지막 구축 이후 바뀐 파일만 반영(그래프가 없으면 full)
   */
  async enqueue(project, { mode = 'update', reason = '' } = {}) {
    const cur = await this.state(project.name);
    if (['QUEUED', 'RUNNING'].includes(cur.status)) throw Object.assign(new Error('이미 구축·갱신이 진행 중입니다'), { status: 409 });
    const full = mode === 'full' || !cur.nodes?.length || !cur.head;
    await this.save(project.name, { status: 'QUEUED', log: '', pendingUpdate: null });
    const ahead = this.runner.submit(project, 'knowledge', () => this.run(project, full), async (e) => {
      await this.logLine(project.name, `✗ 실패: ${firstLine(e.message, 300)}`);
      await this.save(project.name, (c) => ({ status: c.nodes?.length ? 'DONE' : 'FAILED' }));
    });
    await this.logLine(project.name, `▶ 대기열 등록 (${full ? '전체 구축' : '갱신'}${reason ? ` · ${reason}` : ''}${ahead > 0 ? ` · 앞에 ${ahead}건` : ''})`);
  }

  /** 병합 뒤 호출 - 바로 갱신을 큐에 넣는다(이미 대기 중이면 표시만) */
  async afterMerge(project, reason) {
    try { await this.enqueue(project, { mode: 'update', reason }); }
    catch (e) { if (e.status === 409) await this.save(project.name, { pendingUpdate: reason || 'merge' }); else this.log.warn(`[knowledge ${project.name}] 갱신 예약 실패: ${e.message}`); }
  }

  async run(project, full) {
    const name = project.name;
    const L = (s) => this.logLine(name, s);
    await this.save(name, { status: 'RUNNING' });
    const prev = await this.state(name);
    await L(`▶ ${full ? '전체 구축' : '갱신'} 시작`);
    const ex = this.runner.ex(project);
    const gh = this.runner.gh(project);
    const auth = gh.gitAuthHeader();
    const { repo, jobs } = this.runner.paths(project, 0);
    const wt = path.join(jobs, 'knowledge');
    await this.runner.prepareRepo(project, ex, auth, L);
    await ex.exec(repo, 10, ['git', '-c', `http.extraheader=${auth}`, 'fetch', '--prune', 'origin', project.baseBranch]);
    await this.runner.freshWorktree(ex, repo, jobs, wt, `origin/${project.baseBranch}`);
    const head = (await ex.exec(wt, 1, ['git', 'rev-parse', 'HEAD'])).trim();
    await L(`작업 사본: ${project.baseBranch} @ ${head.slice(0, 8)}`);

    try {
      const dir = path.join(wt, '.bugfix');
      await fs.mkdir(dir, { recursive: true });
      let changed = '';
      if (!full) {
        // 이전 그래프 + 그 뒤 바뀐 파일 - 그 부분만 다시 본다. 이전 head 가 사라졌으면(강제 푸시 등) 전체로
        const rc = await ex.execRc(wt, 1, ['git', 'cat-file', '-e', `${prev.head}^{commit}`]);
        if (rc !== 0) { full = true; await L('이전 기준 커밋을 찾지 못해 전체 구축으로 전환'); }
        else {
          changed = (await ex.exec(wt, 1, ['git', 'diff', '--name-only', prev.head, 'HEAD'])).trim();
          if (!changed) { await this.save(name, { status: 'DONE', head, pendingUpdate: null }); await L('✓ 바뀐 파일 없음 - 그래프 그대로'); return; }
          await fs.writeFile(path.join(dir, 'knowledge-prev.json'), JSON.stringify({ nodes: prev.nodes, edges: prev.edges }), 'utf8');
          await fs.writeFile(path.join(dir, 'changed-files.txt'), changed + '\n', 'utf8');
          await L(`바뀐 파일 ${changed.split(/\r?\n/).length}개 (${prev.head.slice(0, 8)}..${head.slice(0, 8)})`);
        }
      }
      const resultFile = path.join(dir, 'knowledge.json');
      const turns = full ? Math.max(60, this.cfg.server.maxTurns) : Math.max(30, this.cfg.server.maxTurns);
      await L(`Claude ${full ? '구축' : '갱신'} 중… (읽기 전용, 최대 ${turns}턴)`);
      const args = (prompt, t) => [this.cfg.server.claudeBin || 'claude', '-p', prompt, '--max-turns', String(t), '--permission-mode', 'acceptEdits', '--allowedTools', READ_TOOLS.join(','), ...(this.cfg.server.model ? ['--model', this.cfg.server.model] : [])];
      const pending = [];
      const onLine = (line) => { pending.push(this.logLine(name, `  ${line}`).catch(() => {})); };
      let out;
      try { out = await runClaudeStream(ex, wt, Math.max(10, this.cfg.server.timeoutMinutes), args(this.prompt(project, full, changed), turns), onLine); }
      finally { await Promise.all(pending); }
      await L(`Claude 종료 (${claudeSummary(out)})`);
      const sid = sessionIdOf(out);
      if (sid && !(await exists(resultFile))) {
        await L('결과 파일이 없어 같은 세션에서 정리만 이어서 요청…');
        const p2 = [];
        try {
          const out2 = await runClaudeStream(ex, wt, 10, [this.cfg.server.claudeBin || 'claude', '-p', '--resume', sid, '탐색은 여기서 멈추세요. 더 읽지 말고 지금까지 파악한 것만으로 `.bugfix/knowledge.json` 을 정해진 형식으로 지금 바로 쓰세요.', '--max-turns', '6', '--permission-mode', 'acceptEdits', '--allowedTools', READ_TOOLS.join(','), ...(this.cfg.server.model ? ['--model', this.cfg.server.model] : [])], (line) => { p2.push(this.logLine(name, `  ${line}`).catch(() => {})); });
          await Promise.all(p2);
          await L(`정리 종료 (${claudeSummary(out2)})`);
        } catch (e) { await Promise.all(p2); await L(`정리 요청 실패: ${firstLine(e.message, 120)}`); }
      }

      const graph = normalize(JSON.parse(await fs.readFile(resultFile, 'utf8')));
      if (!graph.nodes.length) throw new Error('결과에 노드가 없습니다');
      await this.save(name, { status: 'DONE', nodes: graph.nodes, edges: graph.edges, head, builtAt: full ? nowIso() : (prev.builtAt || nowIso()), pendingUpdate: null });
      this.cache.delete(name);
      await L(`✓ 노드 ${graph.nodes.length} · 관계 ${graph.edges.length}`);
    } finally {
      await this.runner.removeWorktree(ex, repo, wt);
    }
  }

  prompt(project, full, changed) {
    const mods = project.modules.map((m) => `  - \`${m.dir}\` (${m.name})`).join('\n') || '  - (모듈 규칙 없음 - 저장소 구조를 보고 판단)';
    const schema = `\`.bugfix/knowledge.json\` 형식:
{
  "nodes": [ { "id": "menu:지구선택", "type": "menu|screen|feature|component|store|util|api|service|table|module", "label": "사람이 읽는 이름", "path": "저장소 상대 경로(파일이면)", "route": "/경로(화면이면)", "desc": "한 줄 설명" } ],
  "edges": [ { "from": "menu:지구선택", "to": "feature:지구목록검색", "rel": "contains|uses|calls|reads|writes|navigates" } ]
}
규칙: id 는 "type:짧은이름" 으로 고유하게. 메뉴/화면(menu·screen)은 사용자가 보는 이름으로, 기능(feature)은 메뉴 안의 동작 단위로.
파일 단위 노드(component·store·util·service)는 path 를 꼭 적고, api 노드는 label 에 "METHOD /경로". 엣지는 menu contains feature, feature uses component/store, component calls api, api uses service, service reads/writes table 처럼.
노드는 최대 400개, 엣지는 최대 900개. 사소한 공용 유틸·스타일·테스트는 빼고, 메뉴·기능이 빠짐없이 들어가는 것이 우선입니다.`;
    if (full) {
      return `${project.description || `\`${project.githubRepo}\``} 저장소입니다. 이 프로젝트의 **지식 그래프(온톨로지)** 를 만들어 주세요. 코드는 고치지 마세요.
목적: 나중에 버그 신고가 들어오면 "어느 메뉴/기능 → 어떤 파일·API·백엔드" 인지 바로 찾고, 질문에 답할 때 참고합니다.

모듈:
${mods}

진행: 라우터·메뉴 정의(라우트 파일, 사이드메뉴/헤더 컴포넌트, 메뉴 상수)에서 메뉴·화면 트리를 먼저 뽑고, 화면마다 쓰는 컴포넌트·스토어·API 호출을 Grep 으로 잇고,
API 는 백엔드 컨트롤러 → 서비스 → 테이블(엔티티/매퍼)까지 잇습니다. 파일을 통째로 읽지 말고 Grep·head 로 필요한 줄만 보세요.
턴이 제한돼 있으니 탐색은 40턴 안쪽에서 끊고 남은 것이 있어도 **반드시** 결과 파일부터 쓰세요.
${schema}`;
    }
    return `${project.description || `\`${project.githubRepo}\``} 저장소입니다. 이 프로젝트의 지식 그래프를 **최근 변경에 맞춰 갱신** 해 주세요. 코드는 고치지 마세요.
  - \`.bugfix/knowledge-prev.json\`: 지금까지의 그래프(nodes·edges)
  - \`.bugfix/changed-files.txt\`: 그 뒤 바뀐 파일 목록 (${changed.split(/\r?\n/).length}개)
바뀐 파일과 관련된 노드·엣지만 다시 확인해 고치고(새 메뉴·기능·API 추가, 없어진 것 제거, 설명 갱신), 나머지는 그대로 두어 **전체 그래프를** \`.bugfix/knowledge.json\` 에 다시 쓰세요. 기존 id 는 바꾸지 마세요.
바뀐 파일이 그래프와 무관한 것(문서·설정·테스트)뿐이면 이전 그래프를 그대로 써도 됩니다. 탐색은 15턴 안쪽에서 끊고 반드시 결과 파일을 쓰세요.
${schema}`;
  }

  // ── 프롬프트용 렌더링 ──────────────────────────────────────────────────
  async graph(project) {
    const s = await this.state(project);
    return s.nodes?.length ? { nodes: s.nodes, edges: s.edges || [] } : null;
  }

  /** 수정·질문 작업 사본에 .bugfix/knowledge.md 를 쓴다 - 신고 내용과 관련된 부분 그래프. 그래프가 없으면 아무것도 안 쓴다 */
  async writeFor(project, dir, r) {
    const g = await this.graph(project.name);
    if (!g) return false;
    const hints = hintsFromReport(r);
    const md = renderRelevant(g, hints, { max: 14 });
    if (!md) return false;
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, 'knowledge.md'), `# 프로젝트 지식 그래프 - 이 신고와 관련된 부분\n\n(전체 그래프: 메뉴 ${g.nodes.filter((n) => n.type === 'menu').length} · 기능 ${g.nodes.filter((n) => n.type === 'feature').length} · 노드 ${g.nodes.length})\n\n${md}\n`, 'utf8');
    return true;
  }

  /** 제안 분석용 - 메뉴/기능 트리 전체를 간단히 */
  async writeOverview(project, dir) {
    const g = await this.graph(project.name);
    if (!g) return false;
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, 'knowledge.md'), `# 프로젝트 지식 그래프(메뉴 → 기능 → 파일)\n\n${renderTree(g, { maxLines: 400 })}\n`, 'utf8');
    return true;
  }

  // ── 예약: 매일 HH:MM 갱신 + 그래프가 없는 프로젝트는 자동 구축 ──
  startSchedules() {
    if (this.timer) return;
    this.timer = setInterval(() => { this.tick().catch((e) => this.log.warn(`[knowledge] 예약 확인 실패: ${e.message}`)); }, 60_000);
    this.tick().catch(() => {});
  }
  stopSchedules() { clearInterval(this.timer); this.timer = null; }
  async tick(now = new Date()) {
    if (this.ticking) return;
    this.ticking = true;
    try {
      const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      const mins = now.getHours() * 60 + now.getMinutes();
      for (const p of Object.values(this.cfg.projects)) {
        if (p.knowledge?.enabled === false) continue;
        const st = await this.state(p.name);
        if (['QUEUED', 'RUNNING'].includes(st.status)) continue;
        // 처음 연결된 프로젝트: 그래프가 없으면 한 번 자동 구축 (실패했으면 사람이 누를 때까지 두지 않고 하루 한 번 재시도)
        if (!st.nodes?.length && (st.status === 'NONE' || (st.status === 'FAILED' && st.lastScheduledDate !== today))) {
          await this.save(p.name, { lastScheduledDate: today });
          try { await this.enqueue(p, { mode: 'full', reason: '프로젝트 연결 - 첫 구축' }); } catch (e) { this.log.warn(`[knowledge ${p.name}] 자동 구축 실패: ${e.message}`); }
          continue;
        }
        if (st.pendingUpdate) { try { await this.enqueue(p, { mode: 'update', reason: `밀린 갱신(${st.pendingUpdate})` }); } catch { /* */ } continue; }
        const at = p.knowledge?.schedule || this.cfg.server.knowledgeSchedule;
        if (!at || !/^\d{1,2}:\d{2}$/.test(at)) continue;
        const [h, m] = at.split(':').map(Number);
        if (mins < h * 60 + m || st.lastScheduledDate === today) continue;
        await this.save(p.name, { lastScheduledDate: today });
        try { await this.enqueue(p, { mode: 'update', reason: '예약' }); } catch (e) { this.log.warn(`[knowledge ${p.name}] 예약 갱신 실패: ${e.message}`); }
      }
    } finally { this.ticking = false; }
  }
}

async function exists(f) { return fs.access(f).then(() => true, () => false); }

/** Claude 가 쓴 결과를 형식에 맞게 다듬는다 - 모르는 타입·끊어진 엣지·중복 id 제거 */
export function normalize(raw) {
  const src = Array.isArray(raw) ? { nodes: raw, edges: [] } : (raw || {});
  const nodes = [];
  const seen = new Set();
  for (const n of [].concat(src.nodes || [])) {
    if (!n || typeof n !== 'object') continue;
    const id = String(n.id || '').trim();
    const label = String(n.label || '').trim();
    if (!id || !label || seen.has(id)) continue;
    const type = TYPES.includes(String(n.type)) ? String(n.type) : (id.includes(':') && TYPES.includes(id.split(':')[0]) ? id.split(':')[0] : 'feature');
    seen.add(id);
    nodes.push({ id, type, label: label.slice(0, 120), ...(n.path ? { path: String(n.path).slice(0, 300) } : {}), ...(n.route ? { route: String(n.route).slice(0, 200) } : {}), ...(n.desc ? { desc: String(n.desc).slice(0, 240) } : {}) });
    if (nodes.length >= 600) break;
  }
  const edges = [];
  const eseen = new Set();
  for (const e of [].concat(src.edges || [])) {
    if (!e || !seen.has(String(e.from)) || !seen.has(String(e.to))) continue;
    const rel = RELS.includes(String(e.rel)) ? String(e.rel) : 'uses';
    const k = `${e.from}>${e.to}>${rel}`;
    if (eseen.has(k)) continue;
    eseen.add(k);
    edges.push({ from: String(e.from), to: String(e.to), rel });
    if (edges.length >= 1500) break;
  }
  return { nodes, edges };
}

/** 리포트에서 검색 단서 - 화면 경로, 메뉴 이름, 문제 문장의 단어, 로그에 보이는 파일·URL */
export function hintsFromReport(r) {
  const hints = new Set();
  const add = (s) => { for (const w of tokens(s)) hints.add(w); };
  let ctx = null;
  try { ctx = r.contextJson ? JSON.parse(r.contextJson) : null; } catch { /* */ }
  if (ctx) {
    try { const u = new URL(ctx.url, 'http://x'); add(u.pathname); if (u.pathname !== '/') hints.add(u.pathname); } catch { /* */ }
    const m = ctx.menus || {};
    for (const k of Object.keys(m)) { const v = m[k]; const label = typeof v === 'string' ? v : v?.label; if (label) { hints.add(String(label)); add(label); } }
    if (ctx.route) { hints.add(String(ctx.route)); add(ctx.route); }
  }
  add(r.problem); add(r.reproSteps); add(r.expectedResult);
  for (const raw of [r.frontendLogs, r.networkLogs]) {
    const s = typeof raw === 'string' ? raw : (raw ? JSON.stringify(raw) : '');
    for (const m of s.matchAll(/([A-Za-z0-9_-]+\.(?:vue|jsx?|tsx?|java))/g)) hints.add(m[1]);
    for (const m of s.matchAll(/\/api\/[a-z0-9/_-]+/gi)) hints.add(m[0]);
  }
  return [...hints].filter((h) => h.length >= 2).slice(0, 60);
}

function tokens(s) {
  if (!s) return [];
  return String(s).toLowerCase().split(/[^\p{L}\p{N}_/.-]+/u).map((w) => w.replace(/^[./-]+|[./-]+$/g, '')).filter((w) => w.length >= 2 && !STOP.has(w));
}
const STOP = new Set(['the', 'and', 'that', 'this', 'with', 'from', 'null', 'undefined', 'error', 'true', 'false', 'http', 'https', 'www', '있음', '없음', '문제', '오류', '화면', '클릭', '버튼', '하면', '됩니다', '않음', '안됨', '에서', '으로', '합니다', '입니다', '경우', '이후', '다시', '계속', '때문', '같음', '있습니다', '없습니다']);

/** 단서와 맞는 노드를 고르고 1홉 이웃까지 넓혀 마크다운으로 */
export function renderRelevant(g, hints, { max = 14 } = {}) {
  if (!g?.nodes?.length || !hints?.length) return '';
  const hs = hints.map((h) => String(h).toLowerCase());
  const score = (n) => {
    const hay = `${n.label} ${n.route || ''} ${n.path || ''} ${n.desc || ''} ${n.id}`.toLowerCase();
    let s = 0;
    for (const h of hs) {
      if (!hay.includes(h)) continue;
      s += h.includes('/') || h.includes('.') ? 3 : 1;      // 경로·파일명 일치는 강한 단서
      if (n.label.toLowerCase() === h) s += 3;
    }
    if (s && (n.type === 'menu' || n.type === 'screen' || n.type === 'feature')) s += 1;
    return s;
  };
  const scored = g.nodes.map((n) => ({ n, s: score(n) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, max);
  if (!scored.length) return '';
  const byId = new Map(g.nodes.map((n) => [n.id, n]));
  const picked = new Map(scored.map((x) => [x.n.id, x.n]));
  const adj = new Map();
  for (const e of g.edges) { (adj.get(e.from) || adj.set(e.from, []).get(e.from)).push(e); (adj.get(e.to) || adj.set(e.to, []).get(e.to)).push(e); }
  for (const id of [...picked.keys()]) for (const e of adj.get(id) || []) { const o = e.from === id ? e.to : e.from; if (byId.has(o) && picked.size < max * 4) picked.set(o, byId.get(o)); }
  const lines = [];
  const show = (n) => `${n.label}${n.route ? ` (${n.route})` : ''}${n.path ? ` \`${n.path}\`` : ''}${n.desc ? ` - ${n.desc}` : ''}`;
  const groups = [['menu', '메뉴·화면'], ['screen', null], ['feature', '기능'], ['component', '구현 파일'], ['store', null], ['util', null], ['api', 'API'], ['service', '백엔드'], ['table', null], ['module', null]];
  let cur = null;
  for (const [t, title] of groups) {
    const ns = [...picked.values()].filter((n) => n.type === t);
    if (!ns.length) continue;
    if (title) { cur = title; lines.push(`\n## ${title}`); } else if (!cur) { cur = t; lines.push(`\n## ${t}`); }
    for (const n of ns) {
      lines.push(`- [${n.type}] ${show(n)}`);
      const rel = (adj.get(n.id) || []).filter((e) => e.from === n.id && picked.has(e.to)).slice(0, 8).map((e) => `${e.rel} → ${byId.get(e.to).label}`);
      if (rel.length) lines.push(`    ${rel.join(' · ')}`);
    }
  }
  return lines.join('\n').trim();
}

/** 메뉴 → 기능 → 파일 트리 (제안 분석·콘솔용) */
export function renderTree(g, { maxLines = 400 } = {}) {
  const byId = new Map(g.nodes.map((n) => [n.id, n]));
  const kids = new Map();
  for (const e of g.edges) if (e.rel === 'contains' || e.rel === 'uses' || e.rel === 'calls') (kids.get(e.from) || kids.set(e.from, []).get(e.from)).push(e.to);
  const hasParent = new Set(g.edges.filter((e) => e.rel === 'contains').map((e) => e.to));
  const roots = g.nodes.filter((n) => (n.type === 'menu' || n.type === 'screen') && !hasParent.has(n.id));
  const lines = [];
  const seen = new Set();
  const walk = (id, depth) => {
    if (lines.length >= maxLines || depth > 3) return;
    const n = byId.get(id); if (!n) return;
    const dup = seen.has(id); seen.add(id);
    lines.push(`${'  '.repeat(depth)}- ${n.type === 'menu' || n.type === 'screen' ? '**' + n.label + '**' : n.label}${n.route ? ` (${n.route})` : ''}${n.path ? ` \`${n.path}\`` : ''}${dup ? ' ↑' : ''}`);
    if (dup) return;
    for (const k of kids.get(id) || []) walk(k, depth + 1);
  };
  for (const r of roots) walk(r.id, 0);
  const rest = g.nodes.filter((n) => !seen.has(n.id) && (n.type === 'feature' || n.type === 'api'));
  if (rest.length && lines.length < maxLines) { lines.push('\n메뉴에 매이지 않은 기능·API:'); for (const n of rest.slice(0, 40)) lines.push(`- ${n.label}${n.path ? ` \`${n.path}\`` : ''}`); }
  return lines.join('\n');
}
