import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { parseResult, firstLine } from '../src/util.js';
import { trimLog, stripKeys, writeReportFiles } from '../src/reportFiles.js';
import { progressLine, claudeSummary, sessionIdOf, resultTextOf } from '../src/claude.js';
import { FileStore } from '../src/store.js';
import { describe as describeCmd } from '../src/exec.js';
import { parseSuggestions } from '../src/runner.js';

test('parseResult: 첫 줄이 제목, 나머지가 본문', () => {
  assert.deepEqual(parseResult('# 제목\n## 원인\n내용'), { title: '제목', body: '## 원인\n내용' });
  assert.deepEqual(parseResult('   '), {});
  assert.equal(parseResult('# ' + 'a'.repeat(100)).title.length, 81);
});

test('firstLine 은 첫 줄만, 길면 …', () => {
  assert.equal(firstLine('abc\ndef', 10), 'abc');
  assert.equal(firstLine('abcdef', 3), 'abc…');
});

test('trimLog: 오류 우선 + 최근 tail, 긴 문자열은 자름, _note 추가', () => {
  const logs = Array.from({ length: 10 }, (_, i) => ({ level: i === 2 ? 'error' : 'log', msg: 'x'.repeat(50) + i }));
  const out = JSON.parse(trimLog(JSON.stringify(logs), (n) => n.level === 'error', 5, 3, 20));
  assert.match(out[0]._note, /원본 10건 중 4건/);
  assert.equal(out.length, 5);                       // note + error + tail 3
  assert.equal(out[1].level, 'error');
  assert.ok(out[1].msg.endsWith('…') && out[1].msg.length === 21);
  assert.equal(trimLog('', () => true, 1, 1, 10), null);
  assert.equal(trimLog('not json', () => true, 1, 1, 10), 'not json');
});

test('stripKeys 는 최상위 키만 제거', () => {
  assert.equal(stripKeys('{"user":{"id":1},"camera":{"z":2}}', ['user']), '{"camera":{"z":2}}');
  assert.equal(stripKeys('[1]', ['user']), '[1]');
});

test('writeReportFiles: summary·screenshot·로그 파일 생성', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'bk-'));
  await writeReportFiles(dir, {
    bugReportId: 7, severity: 'HIGH', problem: '안 됨', screenshot: 'data:image/png;base64,' + Buffer.from('png').toString('base64'),
    contextJson: '{"user":"me","url":"/x"}', frontendLogs: '[{"level":"error","msg":"boom"}]',
  });
  const names = (await fs.readdir(dir)).sort();
  assert.deepEqual(names, ['context.json', 'frontend-logs.json', 'screenshot.png', 'summary.md']);
  assert.equal(await fs.readFile(path.join(dir, 'context.json'), 'utf8'), '{"url":"/x"}');
  assert.match(await fs.readFile(path.join(dir, 'summary.md'), 'utf8'), /# 버그 리포트 #7/);
  assert.equal((await fs.readFile(path.join(dir, 'screenshot.png'))).toString(), 'png');
});

test('progressLine: 도구 호출을 한 줄 요약, 경로는 작업 사본 기준 상대경로', () => {
  const wt = '/w/jobs/3';
  assert.equal(progressLine({ type: 'tool_use', name: 'Read', input: { file_path: '/w/jobs/3/src/a.js' } }, wt), '읽기 src/a.js');
  assert.equal(progressLine({ type: 'tool_use', name: 'Edit', input: { file_path: '/w/jobs/3/b.vue' } }, wt), '✏️ 수정 b.vue');
  assert.equal(progressLine({ type: 'tool_use', name: 'Bash', input: { command: 'npm run build' } }, wt), '$ npm run build');
  assert.equal(progressLine({ type: 'tool_use', name: 'Grep', input: { pattern: 'foo', path: '/w/jobs/3/src' } }, wt), '검색 foo  (src)');
  assert.equal(progressLine({ type: 'text', text: '  \n' }, wt), null);
  assert.equal(progressLine({ type: 'text', text: '원인을 찾았습니다\n자세히' }, wt), '💬 원인을 찾았습니다');
});

test('result 이벤트 파싱과 요약', () => {
  const out = JSON.stringify({ type: 'result', session_id: 's1', result: '고쳤습니다', num_turns: 12, duration_ms: 220000, total_cost_usd: 0.751 });
  assert.equal(sessionIdOf(out), 's1');
  assert.equal(resultTextOf(out), '고쳤습니다');
  assert.equal(claudeSummary(out), '턴 12 · 3분 40초 · $0.75');
  assert.equal(sessionIdOf('garbage'), null);
});

test('FileStore: 저장·조회·목록·갱신·재시작 정리', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'bk-store-'));
  const st = new FileStore(dir);
  const a = await st.save('p', { problem: 'a', screenshot: 'big' });
  const b = await st.save('p', { problem: 'b' });
  assert.equal(a.bugReportId, 1); assert.equal(b.bugReportId, 2);
  assert.deepEqual((await st.list('p')).map((r) => r.bugReportId), [2, 1]);
  assert.equal((await st.list('p'))[1].screenshot, undefined);
  await st.update('p', 1, { fixStatus: 'RUNNING', fixPrNumber: 5 });
  await st.update('p', 2, { fixStatus: 'QUEUED' });
  // 동시 갱신이 서로 덮어쓰지 않는다
  await Promise.all([st.update('p', 1, (c) => ({ ...c, x: 1 })), st.update('p', 1, (c) => ({ ...c, y: 2 }))]);
  const r1 = await st.get('p', 1);
  assert.equal(r1.x, 1); assert.equal(r1.y, 2);
  await st.resetInterrupted({ warn() {} });
  assert.equal((await st.get('p', 1)).fixStatus, 'PR_OPENED');
  assert.equal((await st.get('p', 2)).fixStatus, 'FAILED');
  assert.equal(FileStore.fixState(await st.get('p', 1)).screenshot, undefined);
  assert.equal(await st.delete('p', 2), true);
  assert.equal(await st.get('p', 2), null);
});

test('describe: sudo/env 래핑과 토큰 헤더를 감춘다', () => {
  assert.equal(describeCmd(['sudo', '-n', '-u', 'x', 'env', 'PATH=/a', 'git', '-c', 'http.extraheader=Authorization: Basic abc', 'push']), 'git -c http.extraheader=Authorization: *** push');
});

test('parseSuggestions: 추천 개선 절의 한 줄 항목만', () => {
  const body = '## 원인\n- 아님\n## 추천 개선\n- **첫째** 항목\n  - 들여쓴 건 무시\n2. 둘째\n## 검증\n- 아님';
  assert.deepEqual(parseSuggestions(body), ['첫째 항목', '둘째']);
  assert.deepEqual(parseSuggestions(''), []);
});
