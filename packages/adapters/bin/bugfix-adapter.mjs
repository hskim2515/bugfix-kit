#!/usr/bin/env node
// bugfix-kit 백엔드 로그 어댑터를 앱에 넣는다.
//   npx bugfix-adapter spring --package com.myapp.debug --out src/main/java/com/myapp/debug [--base /debug] [--resources src/main/resources] [--proxy /bugfix] [--server http://127.0.0.1:8790]
//   (Express 는 파일 복사 없이 import: bugfix-kit/adapters/express)
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const kind = args[0];
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const here = path.dirname(new URL(import.meta.url).pathname);

if (kind !== 'spring') {
  console.log(`사용법:
  npx bugfix-adapter spring --package <자바 패키지> --out <그 패키지 디렉터리> [--base /debug] [--resources src/main/resources] [--proxy /bugfix] [--server http://127.0.0.1:8790]

  spring: BugfixLogAppender.java + BugfixLogController.java(최근 로그) + BugfixProxyController.java(앱 REST 서버가 /bugfix/** 를
          bugfix-kit 인스턴스로 넘김 - nginx 를 안 건드려도 '<REST 경로>/bugfix' 로 닿는다) 를 --out 에 만들고,
          --resources 에 logback-spring.xml 이 없으면 만들어 준다(있으면 appender 두 줄을 직접 넣으라고 알려 준다).
          --proxy 를 'none' 으로 주면 프록시는 만들지 않는다.
  Express: 파일 복사 없이 \`import { bugfixLogs } from 'bugfix-kit/adapters/express'\` 로 쓴다.`);
  process.exit(kind ? 1 : 0);
}

const pkg = opt('--package');
const out = opt('--out');
const base = opt('--base', '/debug');
const resources = opt('--resources', null);
const proxy = opt('--proxy', '/bugfix');
const server = opt('--server', 'http://127.0.0.1:8790');
if (!pkg || !out) { console.error('--package 와 --out 은 필수'); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
for (const f of ['BugfixLogAppender.java', 'BugfixLogController.java', ...(proxy !== 'none' ? ['BugfixProxyController.java'] : [])]) {
  const src = fs.readFileSync(path.join(here, '..', 'spring', f), 'utf8').replaceAll('__PACKAGE__', pkg).replaceAll('__BASE__', base).replaceAll('__PROXY__', proxy);
  const dest = path.join(out, f);
  if (fs.existsSync(dest)) { console.log(`이미 있음(그대로 둠): ${dest}`); continue; }
  fs.writeFileSync(dest, src, 'utf8');
  console.log(`만듦: ${dest}`);
}
if (resources) {
  const lb = path.join(resources, 'logback-spring.xml');
  if (fs.existsSync(lb)) {
    console.log(`logback-spring.xml 이 이미 있습니다. 아래 두 줄을 넣어 주세요:\n  <appender name="BUGFIX" class="${pkg}.BugfixLogAppender"/>\n  <root> 안에 <appender-ref ref="BUGFIX"/>`);
  } else {
    fs.mkdirSync(resources, { recursive: true });
    fs.writeFileSync(lb, fs.readFileSync(path.join(here, '..', 'spring', 'logback-spring.xml'), 'utf8').replaceAll('__PACKAGE__', pkg), 'utf8');
    console.log(`만듦: ${lb}`);
  }
}
if (proxy !== 'none') console.log(`\napplication.properties 에:  bugfix.server=${server}   (bugfix-kit 인스턴스 주소)\n앱 SDK 설정에:              endpoint: '<REST 경로>${proxy}'   (예: '/rest${proxy}') - nginx 설정 불필요, 콘솔은 <REST 경로>${proxy}/ui/`);
console.log(`앱의 신고 설정에: backendLogs: () => fetch('<REST 주소>${base}/recent-logs?level=WARN&limit=200').then(r => r.json())`);
