# 🚀 빠른 배포 가이드

## ✅ 완료된 작업

- ✅ Git 저장소 초기화 완료
- ✅ 첫 커밋 생성 완료
- ✅ .gitignore 설정 완료
- ✅ vercel.json 설정 완료
- ✅ README.md 작성 완료

---

## 📝 다음 단계 (5분 소요)

### 1️⃣ GitHub에 저장소 생성 (2분)

1. https://github.com/new 접속
2. Repository name: `youth-finance-calculator` 입력
3. Description: `청년 맞춤형 정책 금융 계산기` 입력
4. Public 선택 (또는 Private)
5. **"Initialize this repository with a README" 체크 해제** ⚠️
6. `Create repository` 클릭

### 2️⃣ GitHub에 코드 업로드 (1분)

터미널에서 다음 명령어 실행:

```bash
cd "새로운 프로젝트/youth-finance-calculator"
git remote add origin https://github.com/YOUR_USERNAME/youth-finance-calculator.git
git branch -M main
git push -u origin main
```

> **중요**: `YOUR_USERNAME`을 본인의 GitHub 사용자명으로 변경하세요!

### 3️⃣ Vercel에 배포 (2분)

1. https://vercel.com 접속
2. `Sign Up` → GitHub 계정으로 로그인
3. `Add New...` → `Project` 클릭
4. `youth-finance-calculator` 저장소 선택
5. `Import` 클릭
6. 설정 확인 (기본값 사용) → `Deploy` 클릭
7. 배포 완료! 🎉

---

## 🌐 배포 후 URL

배포가 완료되면 다음과 같은 URL을 받게 됩니다:

```
https://youth-finance-calculator.vercel.app
```

또는

```
https://youth-finance-calculator-YOUR_USERNAME.vercel.app
```

---

## 🔄 업데이트 방법

코드를 수정한 후:

```bash
git add .
git commit -m "업데이트 내용"
git push
```

Vercel이 자동으로 새 버전을 배포합니다!

---

## 💡 팁

- **커스텀 도메인**: Vercel 대시보드에서 본인의 도메인 연결 가능
- **환경 변수**: 현재 프로젝트는 환경 변수 불필요
- **자동 배포**: GitHub에 push하면 자동으로 배포됨
- **프리뷰 배포**: Pull Request 생성 시 자동으로 프리뷰 URL 생성

---

## 📞 문제가 생겼나요?

자세한 가이드는 `DEPLOYMENT.md` 파일을 참고하세요!
