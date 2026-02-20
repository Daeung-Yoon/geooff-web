# `/deploy` 프로젝트 스킬 설계

## 개요

로컬 변경사항을 한 번의 명령으로 geooff.ai에 배포하는 Claude Code 프로젝트 스킬.

## 파일 위치

```
.claude/commands/deploy.md
```

## 실행 흐름

```
/deploy 실행
  ↓
1. git status로 변경사항 확인
  ↓ (변경사항 없으면 → "배포할 변경사항이 없습니다" 출력 후 종료)
2. git diff로 변경 내용 분석
  ↓
3. 변경사항 기반으로 커밋 메시지 자동 생성 (한글)
  ↓
4. git add + git commit
  ↓
5. npm run build로 빌드 검증
  ↓ (실패 시 → 오류 내용 보고 후 중단, 커밋은 유지)
6. git push origin main
  ↓
7. 완료 메시지 + Vercel 배포 URL 안내
```

## 각 단계 상세

### 1. 변경사항 확인
- `git status`로 untracked/modified/staged 파일 확인
- 변경사항이 없으면 "배포할 변경사항이 없습니다" 출력 후 즉시 종료

### 2. 변경 내용 분석
- `git diff` (unstaged) + `git diff --staged` (staged) 확인
- 어떤 파일이 어떻게 바뀌었는지 분석

### 3. 커밋 메시지 자동 생성
- AI가 변경 내용을 분석하여 한글 커밋 메시지 작성
- Conventional Commits 형식: `feat:`, `fix:`, `style:`, `chore:` 등
- 예: `feat: 프라이싱 섹션 추가`, `fix: 모바일 네비게이션 오류 수정`

### 4. 스테이징 및 커밋
- 변경된 파일을 개별적으로 `git add` (민감한 파일 제외)
- `.env`, credentials 등 민감한 파일은 제외하고 경고
- 생성된 메시지로 커밋

### 5. 빌드 검증
- `npm run build` 실행
- 성공 시 다음 단계 진행
- 실패 시 오류 내용을 사용자에게 보여주고 중단 (push 차단)
- 커밋은 이미 완료된 상태로 유지 (사용자가 수정 후 다시 시도 가능)

### 6. Push
- `git push origin main`으로 원격에 push
- Vercel이 자동으로 빌드/배포 시작

### 7. 완료 안내
- push 성공 메시지 출력
- https://www.geooff.ai/ 에 곧 반영된다는 안내
- Vercel 배포는 보통 1-2분 소요

## 안전장치

- 빌드 실패 시 절대 push하지 않음
- 민감한 파일 (.env, credentials 등) 자동 제외
- 변경사항이 없으면 빈 커밋 생성하지 않음

## 배포 인프라 (기존)

- GitHub: `Daeung-Yoon/geooff-web`
- Vercel: main 브랜치 push → 자동 빌드/배포
- 도메인: geooff.ai (hostingkr → Vercel DNS 연결)
