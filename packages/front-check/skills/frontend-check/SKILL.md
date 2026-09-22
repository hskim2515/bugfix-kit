---
name: frontend-check
description: 프론트 화면을 헤드리스 브라우저로 실제로 열어 확인한다 - UI 버그를 고친 뒤 스크린샷·콘솔 오류·요소 치수로 검증하고, 고치기 전/후를 비교할 때 쓴다. lint·build 통과만으로는 화면이 맞는지 알 수 없을 때.
---

# 프론트 화면 확인 (front-check)

UI(레이아웃·표시·동작) 를 고쳤으면 빌드 통과에서 끝내지 말고 **실제 화면을 열어 본다**. 이 저장소에는 `front-check` 가 설정돼 있다
(`front-check.config.mjs` - 대상 주소·로그인·시나리오·`fromContext`).

## 언제

- 버그 리포트가 화면(위치·크기·겹침·안 보임·클릭 안 됨)에 관한 것일 때 - 고치기 **전**에 한 번 찍어 현재 상태를 확인하고, 고친 **뒤** 다시 찍어 비교한다.
- 새 콘솔 오류·실패 요청이 생기지 않았는지 확인할 때.
- 리포트의 `.bugfix/context.json` 이 있으면 신고 당시 화면으로 바로 갈 수 있다.

## 명령

```bash
# 프론트 디렉터리에서 (빌드 결과 dist 를 서빙하므로 먼저 npm run build)
npx front-check check --context .bugfix/context.json --out .bugfix/before     # 고치기 전
npx front-check check --context .bugfix/context.json --out .bugfix/after --compare .bugfix/before   # 고친 뒤 + 픽셀 비교
npx front-check check --scenario main                                         # 설정의 시나리오
npx front-check check --steps '[{"goto":"/"},{"click":{"text":"레이어"}},{"waitFor":".dataset-panel"},{"measure":".dataset-panel"},{"screenshot":"layer"}]'
```

결과는 `<out>/result.json` + PNG. 요약이 stdout 에 나온다. 종료 코드 0 통과 / 1 기준 초과·절차 실패 / 2 실행 오류.

## 읽는 법

1. **스크린샷을 Read 로 열어 본다** (이미지). 고치려던 부분이 실제로 바뀌었는지 눈으로 확인한다. 전/후 비교면 `*.diff.png` 도 본다 - 바뀐 곳만 밝게 표시된다.
2. `result.json` 의 `collected` - `consoleErrors`·`pageErrors`·`failedRequests` 가 고치기 전보다 늘었으면 회귀다.
3. `measure` 단계의 `box`(x·y·width·height) 와 `css`(display·overflowY·height·scrollHeight/clientHeight) 로 "창이 내용에 맞게 줄었는지" 같은 것을 숫자로 확인한다.
4. `failures` 는 `expect` 가 실패한 것 - 요소가 없거나 안 보이거나 텍스트가 다르다.

## 절차 단계 (steps)

`goto` `click`(선택자 | `{text}` | `{role,name}`) `fill`+`value` `press` `keys`(예 `Shift+F9`) `hover` `waitFor`(선택자 | ms) `expect`(선택자 | `{selector, visible, text, count}`) `measure` `eval` `screenshot`(이름 | `{name, fullPage, selector}`) `scroll`

## 하지 말 것

- 계정·토큰을 절차나 설정에 직접 쓰지 않는다. 로그인은 설정의 `login.account` 파일 / `FC_USER`·`FC_PASS` 로만.
- 결과 디렉터리(`.bugfix/before`, `.bugfix/after`)는 커밋하지 않는다(`.bugfix/` 는 이미 제외).
- 헤드리스에서 WebGL 은 소프트웨어 렌더라 느리다 - `waitFor` 를 넉넉히(2~4초) 준다. 지형·타일이 다 안 그려졌다고 버그로 보지 않는다.
- 스크린샷이 전부 검거나 비어 있으면 로그인 실패나 서빙 주소 문제다 - `result.json` 의 `login`·`fatal`·`failedRequests` 를 먼저 본다.
