# `/deploy` 프로젝트 커맨드 구현 계획

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `/deploy` 커맨드로 로컬 변경사항을 geooff.ai에 한 번에 배포하는 프로젝트 스킬 생성

**Architecture:** `.claude/commands/deploy.md` 프롬프트 파일 하나로 전체 배포 흐름 제어. Claude Code가 프롬프트를 읽고 git + build + push 단계를 순차 실행.

**Tech Stack:** Claude Code project commands, git, npm

---

### Task 1: 디렉토리 생성 및 스킬 파일 작성

**Files:**
- Create: `.claude/commands/deploy.md`

**Step 1: 디렉토리 생성**

```bash
mkdir -p .claude/commands
```

**Step 2: deploy.md 스킬 파일 작성**

```markdown
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
```

**Step 3: 커밋**

```bash
git add .claude/commands/deploy.md
git commit -m "feat: /deploy 프로젝트 커맨드 추가"
```

---

### Task 2: 실행 검증

**Step 1: 스킬이 등록되었는지 확인**

Claude Code에서 `/deploy`를 입력하여 커맨드가 인식되는지 확인합니다.

**Step 2: 테스트 실행**

간단한 변경(예: 주석 추가)을 만든 후 `/deploy`를 실행하여 전체 흐름이 동작하는지 확인합니다.

- git status → diff 분석 → 커밋 메시지 생성 → 빌드 → push 흐름이 정상 동작하는지 확인
