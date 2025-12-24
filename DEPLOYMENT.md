# Vercel 배포 가이드

## 1단계: GitHub 저장소 생성 및 코드 업로드

### 1.1 Git 저장소 초기화

프로젝트 폴더에서 다음 명령어를 실행하세요:

```bash
cd "새로운 프로젝트/youth-finance-calculator"
git init
git add .
git commit -m "Initial commit: 청년 맞춤형 정책 금융 계산기"
```

### 1.2 GitHub에 새 저장소 생성

1. [GitHub](https://github.com)에 로그인
2. 우측 상단 `+` 버튼 클릭 → `New repository` 선택
3. Repository 정보 입력:
   - Repository name: `youth-finance-calculator`
   - Description: `청년 맞춤형 정책 금융 계산기`
   - Public 또는 Private 선택
   - **Initialize this repository with a README 체크 해제** (이미 로컬에 있음)
4. `Create repository` 클릭

### 1.3 로컬 저장소를 GitHub에 연결

GitHub에서 제공하는 명령어를 실행하세요:

```bash
git remote add origin https://github.com/YOUR_USERNAME/youth-finance-calculator.git
git branch -M main
git push -u origin main
```

> **참고**: `YOUR_USERNAME`을 본인의 GitHub 사용자명으로 변경하세요.

---

## 2단계: Vercel 배포

### 2.1 Vercel 계정 생성

1. [Vercel](https://vercel.com)에 접속
2. `Sign Up` 클릭
3. GitHub 계정으로 로그인 (권장)

### 2.2 프로젝트 Import

1. Vercel 대시보드에서 `Add New...` → `Project` 클릭
2. GitHub 저장소 목록에서 `youth-finance-calculator` 선택
3. `Import` 클릭

### 2.3 프로젝트 설정

**Framework Preset**: Next.js (자동 감지됨)

**Build and Output Settings** (기본값 사용):
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Environment Variables**: 없음 (현재 프로젝트는 환경 변수 불필요)

### 2.4 배포 시작

1. `Deploy` 버튼 클릭
2. 빌드 진행 상황 확인 (약 1-2분 소요)
3. 배포 완료 후 제공되는 URL 확인

---

## 3단계: 배포 완료

### 배포 URL 예시
```
https://youth-finance-calculator.vercel.app
```

또는 커스텀 도메인:
```
https://your-custom-domain.com
```

### 자동 배포 설정

Vercel은 GitHub와 자동으로 연동됩니다:
- `main` 브랜치에 push하면 자동으로 프로덕션 배포
- Pull Request 생성 시 자동으로 프리뷰 배포
- 각 커밋마다 고유한 프리뷰 URL 생성

---

## 4단계: 커스텀 도메인 설정 (선택사항)

### 4.1 도메인 추가

1. Vercel 프로젝트 대시보드 → `Settings` → `Domains`
2. 본인의 도메인 입력 (예: `youth-calculator.com`)
3. `Add` 클릭

### 4.2 DNS 설정

Vercel이 제공하는 DNS 레코드를 도메인 제공업체에 추가:

**A 레코드**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME 레코드** (www 서브도메인):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.3 SSL 인증서

Vercel이 자동으로 Let's Encrypt SSL 인증서를 발급합니다 (무료).

---

## 업데이트 배포

코드를 수정한 후 배포하려면:

```bash
git add .
git commit -m "업데이트 내용 설명"
git push origin main
```

Vercel이 자동으로 새 버전을 배포합니다.

---

## 문제 해결

### 빌드 실패 시

1. Vercel 대시보드에서 빌드 로그 확인
2. 로컬에서 `npm run build` 실행하여 오류 확인
3. `package.json`의 의존성 버전 확인

### 배포 후 페이지가 안 보일 때

1. Vercel 대시보드에서 배포 상태 확인
2. 브라우저 캐시 삭제 후 재시도
3. 개발자 도구(F12)에서 콘솔 오류 확인

---

## 유용한 명령어

```bash
# 로컬 개발 서버
npm run dev

# 프로덕션 빌드 테스트
npm run build
npm start

# 의존성 업데이트
npm update

# Vercel CLI 설치 (선택사항)
npm i -g vercel

# Vercel CLI로 배포
vercel
```

---

## 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [Vercel 문서](https://vercel.com/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Framer Motion 문서](https://www.framer.com/motion/)
