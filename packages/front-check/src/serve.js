import fs from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import path from 'node:path';

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary', '.map': 'application/json', '.txt': 'text/plain' };

/**
 * 빌드 결과(dist)를 정적으로 서빙하고, 지정한 접두어는 다른 서버로 프록시한다(예: '/api' → 개발서버 REST).
 * SPA 는 확장자 없는 경로를 index.html 로 돌려준다. 자체 서명 인증서도 통과(검증 안 함).
 */
export function startServer({ dir, port = 4173, proxy = {}, spa = true, host = '127.0.0.1' }) {
  const root = path.resolve(dir);
  if (!fs.existsSync(path.join(root, 'index.html'))) throw new Error(`서빙할 dist 가 없습니다: ${root} (먼저 빌드하세요)`);
  const prefixes = Object.entries(proxy).sort((a, b) => b[0].length - a[0].length);

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${host}:${port}`);
    const hit = prefixes.find(([p]) => url.pathname === p || url.pathname.startsWith(p.endsWith('/') ? p : p + '/'));
    if (hit) return forward(req, res, hit[0], hit[1]);
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { res.writeHead(400); return res.end('bad request'); }
    let file = path.join(root, pathname);
    if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) {
      if (spa && !path.extname(url.pathname)) file = path.join(root, 'index.html');
      else { res.writeHead(404); return res.end('not found'); }
    }
    const stream = fs.createReadStream(file);
    stream.on('open', () => {
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      stream.pipe(res);
    });
    stream.on('error', () => {
      if (res.headersSent) return res.destroy();
      res.writeHead(500); res.end('read error');
    });
  });

  function forward(req, res, prefix, target) {
    const t = new URL(target);
    const rest = req.url.slice(prefix.length);
    const upstreamPath = (t.pathname.replace(/\/$/, '') + (rest.startsWith('/') ? rest : '/' + rest)) || '/';
    const mod = t.protocol === 'https:' ? https : http;
    const headers = { ...req.headers, host: t.host };
    delete headers['accept-encoding'];
    const up = mod.request({ protocol: t.protocol, hostname: t.hostname, port: t.port || (t.protocol === 'https:' ? 443 : 80), path: upstreamPath, method: req.method, headers, rejectUnauthorized: false }, (ur) => {
      res.writeHead(ur.statusCode, ur.headers);
      ur.pipe(res);
    });
    up.on('error', (e) => { res.writeHead(502); res.end(`proxy error: ${e.message}`); });
    req.pipe(up);
  }

  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(port, host, () => resolve({ url: `http://${host}:${port}`, close: () => new Promise((r) => server.close(r)) }));
  });
}
