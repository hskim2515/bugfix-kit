# bugfix-kit

앱 안 버그 리포트 → Claude Code 자동 수정 → 검증 → PR → 병합 → 헤드리스 화면 확인.
LHDT 에서 만든 기능을 여러 프로젝트에 붙일 수 있게 라이브러리로 뽑은 것.

| 패키지 | 역할 | 상태 |
|---|---|---|
| [`packages/server`](packages/server) | 리포트 저장 + 자동 수정 파이프라인 서비스 (프로젝트 여러 개를 설정 파일로) | ✅ |
| `packages/client` | 브라우저 SDK - 로그·네트워크·DOM 변화·화면 수집, 신고 모달, 진행/대화 뷰어 (Web Component) | 예정 |
| `packages/front-check` | 헤드리스 화면 검증 CLI (Playwright, 도커 폴백) + Claude 스킬 | 예정 |
| `packages/skills` | `.claude/skills` 묶음 - 프로젝트에 복사해 쓰는 Claude Code 절차 | 예정 |

앱 쪽에 남는 것: 프론트 두 줄(SDK 초기화 + 뷰어 태그). 앱 백엔드 코드는 없다.

```
앱 ──리포트──▶ bugfix-server ──▶ 저장소 worktree ──▶ claude -p ──▶ 검증 ──▶ PR ──▶ 병합 ──▶ CI/CD
                    ▲ 진행 로그·후속 대화(--resume)                          (front-check 로 화면 확인)
```

시작은 [packages/server/README.md](packages/server/README.md).
