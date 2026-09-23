# bugfix-kit/adapters — 백엔드 최근 로그

신고에 **서버 쪽 로그**를 붙이려면 앱이 "최근 로그 N줄"을 주는 끝점 하나가 필요합니다. 이 디렉터리가 그 조각입니다.

| 백엔드 | 넣는 법 |
|---|---|
| Spring Boot (Logback) | `npx bugfix-adapter spring --package com.myapp.debug --out src/main/java/com/myapp/debug --resources src/main/resources` → `GET /debug/recent-logs` |
| Node / Express | `import { bugfixLogs } from 'bugfix-kit/adapters/express'` · `const logs = bugfixLogs()` · `app.get('/debug/recent-logs', logs.handler)` |
| 그 밖 | `[{ time, level, logger, message }, …]` 를 최근 것부터 돌려주는 끝점을 만들면 됩니다 |

앱의 신고 설정에서 그 끝점을 부릅니다:

```js
createBugfix({ …, backendLogs: () => fetch('/rest/debug/recent-logs?level=WARN&limit=200').then((r) => r.json()) })
```

메모리 링 버퍼(기본 500줄)라 재시작하면 비고, 인스턴스가 여럿이면 요청을 받은 인스턴스의 로그만 옵니다. 개발서버용입니다.
