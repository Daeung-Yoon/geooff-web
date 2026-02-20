---
name: deploy
description: 로컬 변경사항을 geooff.ai에 배포합니다 (커밋 → 빌드 검증 → push → Vercel 자동 배포)
---

geooff-web 프로젝트의 로컬 변경사항을 geooff.ai에 배포하는 커맨드입니다.
아래 단계를 순서대로 실행하세요.

## 1단계: 변경사항 확인

`git status`를 실행하여 변경사항을 확인합니다.

- untracked, modified, staged 파일이 하나도 없으면:
  → "배포할 변경사항이 없습니다." 출력 후 **즉시 종료**
- 변경사항이 있으면 다음 단계로 진행

## 2단계: 변경 내용 분석

`git diff`와 `git diff --staged`를 실행하여 변경 내용을 파악합니다.

## 3단계: 스테이징 및 커밋

1. 변경된 파일을 `git add`로 스테이징합니다
   - **주의:** `.env`, `credentials`, `secrets` 등 민감한 파일은 절대 추가하지 마세요. 발견 시 경고 출력
2. 변경 내용을 분석하여 **한글** 커밋 메시지를 자동 생성합니다
   - Conventional Commits 형식 사용: `feat:`, `fix:`, `style:`, `chore:`, `refactor:`, `docs:` 등
   - 예시: `feat: 프라이싱 섹션 추가`, `fix: 모바일 네비게이션 오류 수정`
3. `git commit`으로 커밋합니다

## 4단계: 빌드 검증

`npm run build`를 실행합니다.

- **성공 시:** 다음 단계로 진행
- **실패 시:**
  → 오류 내용을 사용자에게 보여주고 **즉시 중단**
  → "빌드 실패로 push를 중단합니다. 오류를 수정한 후 다시 /deploy를 실행하세요." 출력
  → 커밋은 유지 (사용자가 수정 후 재시도 가능)
  → **절대 push하지 않음**

## 5단계: Push

`git push origin main`을 실행합니다.

## 6단계: 완료 안내

다음 메시지를 출력합니다:

```
배포 완료!
- 커밋이 main 브랜치에 push되었습니다
- Vercel이 자동으로 빌드/배포를 시작합니다
- 1-2분 후 https://www.geooff.ai/ 에서 확인할 수 있습니다
```
