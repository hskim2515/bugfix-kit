import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { normalize, hintsFromReport, renderRelevant, renderTree } from '../src/knowledge.js';
import { Shots, mergeShots } from '../src/shots.js';

const g = normalize({
  nodes: [
    { id: 'menu:intro', type: 'menu', label: '첫 화면', route: '/' },
    { id: 'feature:district-search', type: 'feature', label: '지구 선택 검색', desc: '목록에서 지구 찾기' },
    { id: 'component:DistrictListPopup', type: 'component', label: 'DistrictListPopup', path: 'web/src/views/intro/DistrictListPopup.vue' },
    { id: 'api:districts', type: 'api', label: 'GET /api/districts' },
    { id: 'bogus', type: 'nope', label: '' },
  ],
  edges: [
    { from: 'menu:intro', to: 'feature:district-search', rel: 'contains' },
    { from: 'feature:district-search', to: 'component:DistrictListPopup', rel: 'uses' },
    { from: 'component:DistrictListPopup', to: 'api:districts', rel: 'calls' },
    { from: 'component:DistrictListPopup', to: 'missing', rel: 'calls' },
  ],
});

test('normalize: 빈 라벨·끊어진 엣지 제거, 타입 보정', () => {
  assert.equal(g.nodes.length, 4);
  assert.equal(g.edges.length, 3);
});

test('hintsFromReport: 화면 경로·메뉴·파일 이름을 단서로', () => {
  const h = hintsFromReport({ problem: '지구 선택 목록에서 검색이 안 됨', contextJson: JSON.stringify({ url: 'https://x/intro?a=1', menus: { leftMenu: { label: '첫 화면' } } }), frontendLogs: JSON.stringify([{ text: 'TypeError at DistrictListPopup.vue:70' }]) });
  assert.ok(h.includes('/intro'));
  assert.ok(h.includes('첫 화면'));
  assert.ok(h.includes('DistrictListPopup.vue'));
});

test('renderRelevant: 단서에 맞는 노드와 이웃을 마크다운으로', () => {
  const md = renderRelevant(g, ['DistrictListPopup.vue', '지구']);
  assert.match(md, /DistrictListPopup/);
  assert.match(md, /GET \/api\/districts/);
  assert.match(md, /지구 선택 검색/);
  assert.equal(renderRelevant(g, ['전혀무관한단어']), '');
});

test('renderTree: 메뉴부터 내려가는 트리', () => {
  const t = renderTree(g);
  assert.match(t, /\*\*첫 화면\*\*/);
  assert.match(t, /  - 지구 선택 검색/);
});

test('Shots: 보관·정리·경로 검사', async () => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'bk-shots-'));
  const out = await fs.mkdtemp(path.join(os.tmpdir(), 'bk-out-'));
  await fs.writeFile(path.join(out, 'main.png'), 'png');
  const shots = new Shots(dataDir);
  const a = await shots.save('p', 'fix', 7, out, ['main.png', 'nope.png'], { label: 'ok' });
  assert.equal(a.length, 1);
  assert.ok(shots.resolve('p', a[0].file));
  assert.equal(shots.resolve('p', '../../etc/passwd'), null);
  assert.equal(shots.resolve('p', 'fix/7/x/evil.js'), null);
  const b = await shots.save('p', 'fix', 7, out, ['main.png'], { keep: 1 });
  const runs = await fs.readdir(path.join(dataDir, 'p', 'shots', 'fix', '7'));
  assert.equal(runs.length, 1);
  const merged = JSON.parse(mergeShots(JSON.stringify(a), b, 1));
  assert.equal(merged.length, 1);
  assert.equal(merged[0].file, b[0].file);
});
