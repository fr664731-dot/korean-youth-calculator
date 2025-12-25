# 🔍 검색 엔진 등록 가이드

## ✅ 완료된 작업

- ✅ `sitemap.ts` 생성 - 자동으로 `/sitemap.xml` 생성
- ✅ `robots.ts` 생성 - 자동으로 `/robots.txt` 생성
- ✅ 모든 주요 페이지 포함 (홈, 청년도약계좌, 월세지원, 개인정보처리방침, 이용약관)

---

## 📝 배포 후 확인사항

배포가 완료되면 다음 URL에서 파일을 확인하세요:

- **Sitemap**: https://korean-youth-calculator.vercel.app/sitemap.xml
- **Robots**: https://korean-youth-calculator.vercel.app/robots.txt

---

## 🌐 Google Search Console 등록

### 1단계: Google Search Console 접속

1. https://search.google.com/search-console 접속
2. Google 계정으로 로그인
3. **"속성 추가"** 클릭

### 2단계: 도메인 소유권 확인

**방법 1: URL 접두어 (권장)**
1. `https://korean-youth-calculator.vercel.app` 입력
2. **"계속"** 클릭
3. 소유권 확인 방법 선택:
   - **HTML 태그** (가장 쉬움)
   - HTML 파일 업로드
   - Google Analytics
   - Google Tag Manager

**HTML 태그 방법:**
1. 제공된 메타 태그 복사
2. `src/app/layout.tsx`의 `<head>` 섹션에 추가
3. 배포 후 **"확인"** 클릭

### 3단계: Sitemap 제출

1. 좌측 메뉴에서 **"Sitemaps"** 클릭
2. `sitemap.xml` 입력
3. **"제출"** 클릭
4. 상태가 "성공"으로 표시될 때까지 대기 (몇 시간 소요)

### 4단계: URL 검사 및 색인 요청

1. 상단 검색창에 메인 URL 입력
2. **"색인 생성 요청"** 클릭
3. 주요 페이지들도 반복:
   - `/calculator/youth-jump`
   - `/calculator/rent-support`

---

## 🇰🇷 네이버 웹마스터 도구 등록

### 1단계: 네이버 웹마스터 도구 접속

1. https://searchadvisor.naver.com 접속
2. 네이버 계정으로 로그인
3. **"웹마스터 도구"** 클릭

### 2단계: 사이트 등록

1. `https://korean-youth-calculator.vercel.app` 입력
2. **"사이트 추가"** 클릭

### 3단계: 소유권 확인

**방법 1: HTML 태그 (권장)**
1. 제공된 메타 태그 복사
2. `src/app/layout.tsx`의 `<head>` 섹션에 추가
3. 배포 후 **"소유확인"** 클릭

**방법 2: HTML 파일**
1. 제공된 HTML 파일 다운로드
2. `public` 폴더에 업로드
3. 배포 후 **"소유확인"** 클릭

### 4단계: Sitemap 제출

1. 좌측 메뉴에서 **"요청" → "사이트맵 제출"** 클릭
2. `https://korean-youth-calculator.vercel.app/sitemap.xml` 입력
3. **"확인"** 클릭

### 5단계: RSS 제출 (선택사항)

1. **"요청" → "RSS 제출"** 클릭
2. 사이트맵 URL 입력
3. **"확인"** 클릭

---

## 🔧 layout.tsx 수정 예시

Google과 네이버 소유권 확인을 위해 `src/app/layout.tsx`에 메타 태그를 추가하세요:

```tsx
export const metadata: Metadata = {
  title: '청년 맞춤형 정책 금융 계산기',
  description: '청년도약계좌, 청년희망적금 등 청년 정책 금융 상품의 예상 수익을 쉽게 계산해보세요.',
  keywords: '청년도약계좌, 청년희망적금, 정부지원금, 청년정책, 금융계산기',
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    other: {
      'naver-site-verification': 'YOUR_NAVER_VERIFICATION_CODE',
    },
  },
}
```

---

## 📊 색인 확인

### Google
- 검색창에 `site:korean-youth-calculator.vercel.app` 입력
- 색인된 페이지 목록 확인
- 보통 1-3일 소요

### 네이버
- 검색창에 `site:korean-youth-calculator.vercel.app` 입력
- 색인된 페이지 목록 확인
- 보통 3-7일 소요

---

## 💡 추가 SEO 최적화 팁

### 1. Open Graph 태그 추가

각 페이지의 `metadata`에 추가:

```tsx
export const metadata: Metadata = {
  title: '청년도약계좌 계산기',
  description: '...',
  openGraph: {
    title: '청년도약계좌 계산기',
    description: '...',
    url: 'https://korean-youth-calculator.vercel.app/calculator/youth-jump',
    siteName: '청년금융계산기',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '청년도약계좌 계산기',
    description: '...',
    images: ['/og-image.png'],
  },
}
```

### 2. 구조화된 데이터 (JSON-LD)

각 페이지에 추가:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: '청년도약계좌 계산기',
      description: '...',
      url: 'https://korean-youth-calculator.vercel.app',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
    }),
  }}
/>
```

### 3. 페이지 속도 최적화

- 이미지 최적화 (Next.js Image 컴포넌트 사용)
- 폰트 최적화 (이미 Pretendard 적용됨)
- 코드 스플리팅 (Next.js 자동 처리)

### 4. 모바일 친화성

- 반응형 디자인 (이미 적용됨)
- 터치 영역 최적화 (이미 적용됨)
- 빠른 로딩 속도

---

## 📈 성과 모니터링

### Google Search Console
- 검색 성과 (클릭, 노출, CTR, 순위)
- 커버리지 (색인 상태)
- 사용자 경험 (Core Web Vitals)

### 네이버 웹마스터 도구
- 검색 반영 현황
- 사이트 최적화
- 검색어 분석

---

## 🚀 빠른 색인을 위한 팁

1. **소셜 미디어 공유**: 트위터, 페이스북 등에 링크 공유
2. **외부 링크**: 다른 사이트에서 링크 받기
3. **정기적인 업데이트**: 콘텐츠를 주기적으로 업데이트
4. **내부 링크**: 페이지 간 링크 연결 강화

---

## 📞 문제 해결

### Sitemap이 안 보여요
- 배포가 완료되었는지 확인
- URL을 직접 입력해서 접근 시도
- 브라우저 캐시 삭제

### 색인이 안 돼요
- robots.txt에서 차단되지 않았는지 확인
- sitemap.xml이 올바른지 확인
- 시간을 더 기다려보기 (최대 1주일)

### 소유권 확인이 안 돼요
- 메타 태그가 `<head>` 안에 있는지 확인
- 배포가 완료되었는지 확인
- 페이지 소스 보기로 태그 확인
