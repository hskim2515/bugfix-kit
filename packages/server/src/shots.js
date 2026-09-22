import fs from 'node:fs/promises';
import path from 'node:path';
import { nowIso, stamp } from './util.js';

/**
 * front-check 가 남긴 스크린샷을 서버 데이터에 보관한다 - 작업 사본은 지워지므로 여기로 옮겨야 화면에서 볼 수 있다.
 *   {dataDir}/{project}/shots/{kind}/{id}/{stamp}/{name}.png   kind: 'fix'(리포트 번호) | 'insights'
 * 돌려주는 목록 항목은 { file: 'kind/id/stamp/name.png', name, at, label } - 화면은 /api/p/{project}/shots/{file} 로 읽는다.
 * 같은 kind/id 는 최근 keep 회만 남긴다(디스크 상한).
 */
export class Shots {
  constructor(dataDir) { this.dataDir = dataDir; }

  dir(project) { return path.join(this.dataDir, project, 'shots'); }

  async save(project, kind, id, outDir, names, { label = '', keep = 3 } = {}) {
    // 같은 초에 두 번 저장돼도 회차 디렉터리가 겹치지 않게
    let run = stamp();
    for (let n = 2; await fs.access(path.join(this.dir(project), kind, String(id), run)).then(() => true, () => false); n++) run = `${stamp()}-${n}`;
    const rel = path.posix.join(kind, String(id), run);
    const dest = path.join(this.dir(project), kind, String(id), run);
    await fs.mkdir(dest, { recursive: true });
    const saved = [];
    for (const name of [].concat(names || [])) {
      const base = path.basename(String(name));
      if (!/\.(png|jpe?g|webp)$/i.test(base)) continue;
      try {
        await fs.copyFile(path.join(outDir, base), path.join(dest, base));
        saved.push({ file: path.posix.join(rel, base), name: base, at: nowIso(), label });
      } catch { /* 없는 파일은 건너뜀 */ }
    }
    if (!saved.length) { await fs.rm(dest, { recursive: true, force: true }).catch(() => {}); return []; }
    await this.prune(project, kind, id, keep);
    return saved;
  }

  async prune(project, kind, id, keep) {
    const d = path.join(this.dir(project), kind, String(id));
    let runs = [];
    try { runs = (await fs.readdir(d)).sort(); } catch { return; }
    for (const old of runs.slice(0, Math.max(0, runs.length - keep))) await fs.rm(path.join(d, old), { recursive: true, force: true }).catch(() => {});
  }

  /** 화면에 줄 절대 경로 - 보관 디렉터리 밖은 null */
  resolve(project, file) {
    const root = this.dir(project);
    const abs = path.resolve(root, String(file || ''));
    const rel = path.relative(root, abs);
    if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) return null;
    if (!/\.(png|jpe?g|webp)$/i.test(abs)) return null;
    return abs;
  }
}

/** 리포트의 fixShots(JSON 문자열)에 새 스크린샷을 덧붙인다 - 최근 회차만 남긴다(keepRuns) */
export function mergeShots(prevJson, added, keepRuns = 3) {
  let prev = [];
  try { prev = prevJson ? JSON.parse(prevJson) : []; } catch { prev = []; }
  const all = [...prev, ...added];
  const runs = [...new Set(all.map((s) => path.posix.dirname(s.file)))].sort();
  const keepSet = new Set(runs.slice(-keepRuns));
  return JSON.stringify(all.filter((s) => keepSet.has(path.posix.dirname(s.file))));
}
