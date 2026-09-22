# @bugfix-kit/server

앱 안에서 신고한 버그 리포트를 저장하고, 개발서버의 Claude Code 로 고쳐 검증 → PR → 병합까지 자동으로 돌리는 서비스.
프로젝트 여러 개를 설정 파일 하나로 담당한다(앱 백엔드에 넣을 코드 없음).

## 동작

```
앱(프론트 SDK) ──POST /api/p/{project}/reports──▶ bugfix-server ──큐(한 번에 하나)──▶
  {workDir}/{project}/repo (clone/fetch) → jobs/{id} worktree(base 브랜치)
  → .bugfix/ (summary.md · screenshot.png · context.json · *-logs.json)
  → claude -p … --output-format stream-json  (진행 로그를 그때그때 fixLog 에)
  → 변경 없으면 FAILED / 있으면 바뀐 모듈의 verify 명령
  → 브랜치 claude/bugfix-{id}-{시각} 푸시 → PR → PR_OPENED
  → (autoMerge) base 합치기·충돌은 Claude 가 해결·재검증 → 병합 → 실제 반영 확인 → MERGED
```

상태: `QUEUED → RUNNING → PR_OPENED → MERGED | FAILED`. 후속 대화(`fix-chat`)는 같은 Claude 세션을 `--resume` 으로 이어
질문(`ask`, 코드 변경 없음) 또는 추가 수정(`change`, 검증·PR·병합까지)을 한다.

## 설치 (개발서버, sudo 불필요)

```bash
git clone https://github.com/hskim2515/bugfix-kit.git ~/bugfix-kit
cd ~/bugfix-kit && npm install
cp packages/server/bugfix-kit.example.yml packages/server/bugfix-kit.yml   # 프로젝트 설정
mkdir -p ~/.config/bugfix-kit && (umask 077; echo ghp_xxx > ~/.config/bugfix-kit/github-token)
claude login                                                           # 실행 계정으로 한 번
cp packages/server/deploy/bugfix-server.service ~/.config/systemd/user/
systemctl --user daemon-reload && systemctl --user enable --now bugfix-server && loginctl enable-linger $USER
curl -s localhost:8790/api/health
```

필요한 것: Node ≥ 18, git, Claude Code CLI(로그인), GitHub PAT(classic, `repo`), 프로젝트 빌드 도구(예: JDK).

## API

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | `/api/p/{project}/reports` | 저장. body: severity, problem, reproSteps, expectedResult, screenshot(dataURL), contextJson, frontendLogs, backendLogs, networkLogs, mutationLog |
| GET | `/api/p/{project}/reports` | 목록(가벼운 필드) |
| GET | `/api/p/{project}/reports/{id}` | 상세 |
| GET | `/api/p/{project}/reports/{id}/fix` | 진행 상태만(스크린샷·로그 제외) - 진행 중 3초 폴링용 |
| PATCH | `/api/p/{project}/reports/{id}/status` | `{ status: OPEN|IN_PROGRESS|RESOLVED|CLOSED }` |
| DELETE | `/api/p/{project}/reports/{id}` | 삭제 |
| POST | `/api/p/{project}/reports/{id}/request-fix` | 자동 수정 큐에 넣기 |
| POST | `/api/p/{project}/reports/{id}/fix-chat` | `{ message, mode: 'ask'|'change' }` |
| POST | `/api/p/{project}/reports/{id}/fix-sync` | GitHub PR 상태와 맞추기(병합 재시도 포함) |
| GET | `/api/admin/overview` | 전 프로젝트 요약(운영자 키 `X-Bugfix-Admin`) - 대시보드가 쓴다 |
| GET | `/api/ui/` | 운영자 대시보드(정적) |

응답은 `{ content: … }`, 오류는 `{ message }` + 상태 코드. 헤더: `X-Bugfix-Key`(프로젝트 apiKey), `X-Bugfix-User`(보고자 표시명).

## 설정 요점 (`bugfix-kit.yml`)

- `projects.<name>.modules[]`: 바뀐 파일 경로 접두어(`match`)로 모듈을 고르고, 그 모듈의 `verify` 명령을 `dir` 에서 차례로 돈다.
  `nodeModulesCache: true` 면 `{workDir}/{project}/cache/{module}/node_modules` 를 한 번 받아 심볼릭 링크로 넣는다(package-lock 바뀌면 갱신).
  `prebuild` 는 검증 전에 도는 명령(예: SCSS → CSS), `when` 경로가 바뀌었을 때만.
- `allowedTools`: Claude 에게 추가로 허용할 도구(기본: Read/Edit/Write/Glob/Grep + npm/npx/node/git 읽기 명령).
- `conventions`: 프롬프트에 그대로 들어가는 프로젝트 규약.
- 비밀값은 환경변수 우선: `BUGFIX_GITHUB_TOKEN`, `BUGFIX_KEY_<PROJECT>`.

## 비밀값 두는 곳 (권장 배치)

| 종류 | 어디에 | 비고 |
|---|---|---|
| Claude Code 로그인 | 서버 실행 계정의 `claude login` (`~/.claude`) | 서버 하나에 한 번. 모든 프로젝트가 공유 |
| GitHub 토큰 | `~/.config/bugfix-kit/github-token` (공용) · 프로젝트별로 다르면 `~/.config/bugfix-kit/projects/<이름>.env` 의 `GITHUB_TOKEN` | 전용 봇 계정의 classic PAT(repo) 권장 |
| 프로젝트 API 키 | `bugfix-kit.yml` 의 `apiKey` 또는 `<이름>.env` 의 `BUGFIX_API_KEY` | 프론트에도 들어가는 공개 키(남용 방지 수준) |
| front-check 테스트 계정 | `<이름>.env` 의 `FC_USER`/`FC_PASS` (운영자의 것 - 서버에만) | 저장소에는 두지 않는다. 모든 프로젝트가 같은 계정이면 `default.env` 에 한 번 |
| 프로젝트 규약·검증 명령 | `bugfix-kit.yml` 프로젝트 블록 + 저장소의 `CLAUDE.md`·`.claude/skills`·`front-check.config.mjs` | 비밀 아님, 저장소에 |

```
~/.config/bugfix-kit/
  github-token            GitHub PAT 한 줄 (공용)
  default.env             모든 프로젝트 공통 KEY=VALUE (예: 같은 테스트 계정, GITHUB_TOKEN)
  projects/<이름>.env     프로젝트별 KEY=VALUE - default.env 보다 우선 (BUGFIX_API_KEY · GITHUB_TOKEN · FC_USER · FC_PASS)
```
전부 chmod 600. 파일만 바꾸면 재시작 없이 다음 작업부터 반영된다. 저장소(프로젝트)에는 비밀값을 두지 않는다 - 선택자·절차·검증 명령만.

## 개인정보·토큰

- 보고자·문제 원문은 PR/커밋에 넣지 않는다(리포트 번호만). `.bugfix/` 는 `.git/info/exclude` 로 커밋에서 빠진다.
- `context.json` 의 `user`·`routeHistory` 는 빼고, 로그는 오류 우선 + 최근순으로 추려 Claude 에게 준다.
- GitHub 토큰은 git 의 `http.extraheader` 로만 넘겨 `.git/config` 에 남지 않는다.

## 알아 둘 것

- 큐는 프로세스 전체에 하나 - Claude 를 동시에 여러 개 돌리지 않는다. 대기 순번은 진행 로그에 남는다.
- 서버를 재시작하면 돌던 작업은 끊긴다. PR 을 이미 올린 작업은 `PR_OPENED` 로 두고(뷰어 새로고침이 GitHub 와 맞춤), 아니면 `FAILED`.
- 이미 병합·닫힌 PR 에 후속 요청이 오면 base 에서 새 브랜치·새 PR 로 시작한다. 병합 뒤엔 `git merge-base --is-ancestor` 로 실제 반영을 확인한다.
