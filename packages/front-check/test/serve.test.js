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
