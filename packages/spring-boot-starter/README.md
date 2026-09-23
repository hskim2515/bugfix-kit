# bugfix-kit Spring Boot 스타터

Spring 앱은 JS 를 못 돌리므로 "앱 내장" 대신, **의존성 한 줄**로 다음을 붙입니다.

- 최근 로그 링 버퍼 + `GET /debug/recent-logs` (신고에 백엔드 로그가 붙는다)
- `/bugfix/**` 프록시 → bugfix-kit 인스턴스 (앱 프론트는 `<REST 경로>/bugfix` 로 닿는다. nginx 불필요)
- 그 호스트에 Node 가 있으면 **bugfix-kit 워커를 앱과 같이 띄운다** (설치·설정·재시작까지 스타터가 관리). 없으면 `bugfix.server` 로 외부 인스턴스를 가리킨다
- Spring Security 가 있으면 `/bugfix/**` 허용

```groovy
repositories { maven { url 'https://jitpack.io' } }
dependencies { implementation 'com.github.hskim2515:bugfix-kit:v0.1.64' }
```

```properties
# 전부 선택. 배포된 자리에 git 이 없으면 저장소 주소만 적어 준다(또는 gradle-git-properties 로 git.properties 생성)
bugfix.repo=https://github.com/org/app.git
bugfix.base-branch=develop
# 워커 대신 외부 인스턴스를 쓸 때
# bugfix.server=http://127.0.0.1:8790
```

프론트는 Vite/webpack 플러그인 한 줄(`restBase` 가 앱 REST 경로). 워커가 뜨는 호스트에는 git·Claude Code CLI 로그인·빌드 도구가 있어야 하고, 저장소 토큰은 `BUGFIX_GITHUB_TOKEN` / `GITLAB_TOKEN` 환경변수 또는 `~/.config/bugfix-kit/`. 운영자 키는 `bugfix.admin-key` / `BUGFIX_ADMIN_KEY` / 없으면 `~/.bugfix-data/<앱>/admin-key` 에 만들어 로그에 한 번 출력. 콘솔은 `<REST 경로>/bugfix/ui/`.

앱을 여러 인스턴스로 띄우면 워커는 하나에서만: `bugfix.worker.enabled=${BUGFIX_WORKER:false}` 같은 식으로.
