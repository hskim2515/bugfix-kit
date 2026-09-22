import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { startServer } from '../src/serve.js';

test('정적 서버: 형제 디렉터리(dist-old)로 빠져나가는 경로는 403', async () => {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), 'fc-serve-'));
  fs.mkdirSync(path.join(base, 'dist'));
  fs.mkdirSync(path.join(base, 'dist-old'));
  fs.writeFileSync(path.join(base, 'dist', 'index.html'), 'ok');
  fs.writeFileSync(path.join(base, 'dist-old', 'secret.txt'), 'secret');
  const s = await startServer({ dir: path.join(base, 'dist'), port: 40000 + Math.floor(Math.random() * 20000) });
  try {
    const addr = s.url;
    const opts = { headers: { connection: 'close' } };
    assert.equal((await fetch(`${addr}/index.html`, opts)).status, 200);
    const r = await fetch(`${addr}/..%2fdist-old%2fsecret.txt`, opts);
    assert.equal(r.status, 403);
  } finally {
    await s.close();
    fs.rmSync(base, { recursive: true, force: true });
  }
});

test('정적 서버: 잘못된 % 인코딩은 400, 이후 요청도 정상 응답', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fc-serve-'));
  fs.writeFileSync(path.join(dir, 'index.html'), '<p>ok</p>');
  const srv = await startServer({ dir, port: 41730 +Math.floor(Math.random() * 1000) });
  const opts = { headers: { connection: 'close' } }; // keep-alive 가 남으면 close() 가 늦어진다
  try {
    assert.equal((await fetch(`${srv.url}/%E0%A4%A`, opts)).status, 400);
    const ok = await fetch(`${srv.url}/index.html`, opts);
    assert.equal(ok.status, 200);
    assert.equal(await ok.text(), '<p>ok</p>');
  } finally {
    await srv.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
