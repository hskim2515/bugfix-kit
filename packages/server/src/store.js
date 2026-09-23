import fs from 'node:fs/promises';
import path from 'node:path';
import { nowIso } from './util.js';

/**
 * 파일 저장소 - 리포트 하나가 JSON 파일 하나 ({dataDir}/{project}/reports/{id}.json).
 * 네이티브 모듈 없이 어디서나 돌고, 스크린샷(base64 1MB 안팎)도 그냥 담는다.
 * 같은 프로세스 안에서 같은 리포트를 동시에 고치지 않도록 id 별 잠금(프로미스 체인)을 건다.
 *
 * 필드는 lhdt 의 bug_report 컬럼을 camelCase 로 그대로 옮겼다:
 *   bugReportId severity status problem reproSteps expectedResult screenshot contextJson frontendLogs backendLogs
 *   networkLogs mutationLog reporter insertDate
 *   fixStatus fixBranch fixPrUrl fixPrNumber fixSummary fixLog fixSessionId fixChat fixRequestedAt fixUpdatedAt
 */
export class FileStore {
  constructor(dataDir) {
    this.dataDir = dataDir;
    this.locks = new Map();
  }

  dir(project) { return path.join(this.dataDir, project, 'reports'); }
  file(project, id) { return path.join(this.dir(project), `${id}.json`); }

  async withLock(key, fn) {
    const prev = this.locks.get(key) || Promise.resolve();
    let release;
    const cur = new Promise((r) => { release = r; });
    this.locks.set(key, prev.then(() => cur));
    await prev;
    try { return await fn(); }
    finally { release(); if (this.locks.get(key) === cur) this.locks.delete(key); }
  }

  async writeAtomic(file, obj) {
    await fs.mkdir(path.dirname(file), { recursive: true });
    const tmp = `${file}.${process.pid}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(obj), 'utf8');
    await fs.rename(tmp, file);
  }

  async nextId(project) {
    const seq = path.join(this.dataDir, project, 'seq.json');
    return this.withLock(`seq:${project}`, async () => {
      let n = 0;
      try { n = JSON.parse(await fs.readFile(seq, 'utf8')).last || 0; } catch { /* 처음 */ }
      n += 1;
      await this.writeAtomic(seq, { last: n });
      return n;
    });
  }

  async save(project, report) {
    const id = await this.nextId(project);
    const r = { ...report, bugReportId: id, project, status: report.status || 'OPEN', insertDate: nowIso() };
    await this.writeAtomic(this.file(project, id), r);
    return r;
  }

  async get(project, id) {
    try { return JSON.parse(await fs.readFile(this.file(project, id), 'utf8')); }
    catch (e) { if (e.code === 'ENOENT') return null; throw e; }
  }

  /** 목록 - 무거운 필드는 뺀다 */
  async list(project) {
    let names = [];
    try { names = await fs.readdir(this.dir(project)); } catch { return []; }
    const out = [];
    for (const n of names) {
      if (!n.endsWith('.json')) continue;
      try {
        const r = JSON.parse(await fs.readFile(path.join(this.dir(project), n), 'utf8'));
        out.push(FileStore.light(r));
      } catch { /* 깨진 파일은 건너뜀 */ }
    }
    return out.sort((a, b) => b.bugReportId - a.bugReportId);
  }

  static light(r) {
    const { bugReportId, severity, status, problem, reporter, insertDate, fixStatus, fixPrUrl, fixSummary, fixUpdatedAt, tool, fixDeploy, fixMergeSha, fixMergedAt, fixPushed, fixBranch } = r;
    return { bugReportId, severity, status, problem, reporter, insertDate, fixStatus, fixPrUrl, fixSummary, fixUpdatedAt, fixDeploy, fixMergeSha, fixMergedAt, fixPushed, fixBranch, ...(tool ? { tool: true } : {}) };
  }
  /** 진행 상태 폴링용 - 스크린샷·로그·컨텍스트 제외 */
  static fixState(r) {
    if (!r) return null;
    const { screenshot, contextJson, frontendLogs, backendLogs, networkLogs, mutationLog, ...rest } = r;
    return rest;
  }

  /** 부분 갱신. patch 는 객체 또는 (현재값 → 새값) 함수 */
  async update(project, id, patch) {
    return this.withLock(`${project}:${id}`, async () => {
      const cur = await this.get(project, id);
      if (!cur) throw Object.assign(new Error(`리포트가 없습니다: ${project}#${id}`), { status: 404 });
      const next = typeof patch === 'function' ? patch(cur) : { ...cur, ...patch };
      await this.writeAtomic(this.file(project, id), next);
      return next;
    });
  }

  async delete(project, id) {
    try { await fs.unlink(this.file(project, id)); return true; }
    catch (e) { if (e.code === 'ENOENT') return false; throw e; }
  }

  /**
   * 서버가 재시작되면 돌던 작업은 사라진다. 끊긴 작업 목록을 돌려주고 상태를 정리한다:
   *   - PR 을 이미 올린 뒤(자동 병합 단계)면 PR_OPENED (뷰어 새로고침이 병합 여부를 맞춘다)
   *   - 아직이면 QUEUED 로 되돌린다 - 호출자(bin)가 다시 큐에 넣는다. worktree 는 매번 새로 만드니 처음부터 다시 돌려도 안전하다
   * 돌려주는 값: [{ project, id, kind: 'fix' | 'followup', message?, mode? }]
   */
  async resetInterrupted(log = console) {
    const redo = [];
    let projects = [];
    try { projects = await fs.readdir(this.dataDir); } catch { return redo; }
    for (const p of projects) {
      let names = [];
      try { names = await fs.readdir(this.dir(p)); } catch { continue; }
      for (const n of names) {
        if (!n.endsWith('.json')) continue;
        const id = Number(n.replace('.json', ''));
        const r = await this.get(p, id);
        if (!r || !['QUEUED', 'RUNNING'].includes(r.fixStatus)) continue;
        const hasPr = r.fixPrNumber != null;
        // 후속 대화 중이었나: 마지막 대화가 사용자 메시지면 그 요청을 다시 보낸다
        let chat = [];
        try { chat = r.fixChat ? JSON.parse(r.fixChat) : []; } catch { /* */ }
        const last = chat[chat.length - 1];
        const followup = last && last.role === 'user' ? last : null;
        await this.update(p, id, (c) => ({
          ...c,
          fixStatus: hasPr ? 'PR_OPENED' : 'QUEUED',
          fixLog: (c.fixLog || '') + `${new Date().toTimeString().slice(0, 8)}  ↻ 서버 재시작으로 끊김${hasPr ? ' - PR 은 열려 있습니다. 새로고침으로 상태를 맞추거나 직접 병합하세요' : ' - 다시 큐에 넣습니다'}\n`,
          fixUpdatedAt: nowIso(),
        }));
        if (!hasPr) redo.push(followup ? { project: p, id, kind: 'followup', message: followup.text, mode: /^추천 개선 실행:|수정|고쳐/.test(followup.text) ? 'change' : 'ask', prevStatus: null } : { project: p, id, kind: 'fix' });
        log.warn(`[bugfix] ${p}#${id} 재시작으로 끊김 → ${hasPr ? 'PR_OPENED' : '다시 큐에'}`);
      }
    }
    return redo;
  }
}
