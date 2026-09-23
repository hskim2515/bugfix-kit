# bugfix-kit/adapters — 백엔드 최근 로그

신고에 **서버 쪽 로그**를 붙이려면 앱이 "최근 로그 N줄"을 주는 끝점 하나가 필요합니다. 이 디렉터리가 그 조각입니다.

| 백엔드 | 넣는 법 |
|---|---|
| Spring Boot (Logback) | `npx bugfix-adapter spring --package com.myapp.debug --out src/main/java/com/myapp/debug --resources src/main/resources` → `GET /debug/recent-logs` |
| Node / Express | `import { bugfixLogs } from 'bugfix-kit/adapters/express'` · `const logs = bugfixLogs()` · `app.get('/debug/recent-logs', logs.handler)` |
| 그 밖 | `[{ time, level, logger, message }, …]` 를 최근 것부터 돌려주는 끝점을 만들면 됩니다 |

## nginx 없이 `/bugfix` 로 닿게 — 프록시 라우트

앱 서버에 라우트를 하나 더 심으면 앱 프론트가 이미 쓰는 REST 경로로 신고 서버에 닿습니다. 앱의 nginx 는 건드리지 않습니다.

| 백엔드 | 넣는 법 | 앱 SDK 설정 |
|---|---|---|
| Spring Boot | 위 `bugfix-adapter spring` 이 `BugfixProxyController`(`/bugfix/**`)도 만든다. `application.properties` 에 `bugfix.server=http://127.0.0.1:8790` | `endpoint: '/rest/bugfix'` (REST 경로 + /bugfix) |
| Express | `app.use('/bugfix', bugfixProxy('http://127.0.0.1:8790'))` | `endpoint: '/api/bugfix'` 등 |

콘솔은 같은 경로 뒤에 `/ui/` 를 붙여 엽니다(예: `https://앱/rest/bugfix/ui/`). 앱 서버에 인증 필터가 있으면 이 경로를 허용 목록에 넣습니다(인증은 bugfix-kit 이 따로 합니다).

앱의 신고 설정에서 그 끝점을 부릅니다:

```js
createBugfix({ …, backendLogs: () => fetch('/rest/debug/recent-logs?level=WARN&limit=200').then((r) => r.json()) })
```

메모리 링 버퍼(기본 500줄)라 재시작하면 비고, 인스턴스가 여럿이면 요청을 받은 인스턴스의 로그만 옵니다. 개발서버용입니다.
