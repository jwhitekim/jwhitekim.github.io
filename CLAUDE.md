## 하네스: 포트폴리오 사이트 운영

**목표:** 콘텐츠 작성(MDX/데이터), UI/디자인 반복 작업, 커밋/푸시를 일관된 규칙으로 처리한다.

**트리거:**
- 콘텐츠 작성/수정(포스트, 프로젝트, 경력, 논문, 사이트 문구) → `portfolio-content` 스킬
- UI/디자인 변경(색, 레이아웃, 반응형, 다크모드) → `ui-iteration` 스킬
- 콘텐츠 검수가 필요하면 `portfolio-content` 스킬 안에서 `content-qa` 에이전트를 호출한다
- 커밋/푸시 요청 → `commit-and-push` 스킬
- 단순 질문이나 사소한 한 줄 수정은 스킬 없이 직접 응답 가능

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-09-10 | 초기 구성 (콘텐츠/디자인/커밋 스킬 + content-qa 에이전트) | 전체 | 하네스 구축 요청 — 1인 포트폴리오 사이트 규모에 맞춰 가볍게(팀 아닌 스킬 위주) 설계 |

# 작업 관리 규칙 (todo-guard)

## TODO.md 운영

- 사용자의 모든 지시는 즉시 TODO.md 「진행 중」에 `- [ ]` 로 등록한다. 등록 없이 착수 금지
- 항목을 마치면 `- [x]` 로 바꾸고 「완료」로 옮긴다. 실제로 끝나지 않은 것을 완료 처리하지 않는다
- 사용자 판단이 필요해 진행 불가한 항목만 `- [?] 항목명 (사유)` 로 둔다

## 문서 규칙

슬라이드·보고서(`.pptx` `.pdf` `.doc` `.txt` `.hwp` `.md`)를 만들 때는
`~/.claude/skills/todo-guard/rules/doc-rules.md` 를 **쓰기 전에 읽고** 적용한다.

턴을 끝낼 때 바뀐 줄을 자동 검사한다. 위반이 있으면 종료가 막힌다.

| 사용자가 말하면 | 실행 |
|---|---|
| 전체 검수해줘 | `python ~/.claude/skills/todo-guard/scripts/doc-guard.py --all` |
| 바뀐 것만 검수해줘 | `python ~/.claude/skills/todo-guard/scripts/doc-guard.py --changed` |
| 문서 규칙 꺼줘 / 켜줘 | `bash ~/.claude/skills/todo-guard/scripts/doc-toggle.sh off｜on` |
