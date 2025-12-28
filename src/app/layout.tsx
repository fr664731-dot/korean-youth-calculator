import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '청년 맞춤형 정책 금융 계산기',
  description: '청년도약계좌, 청년희망적금 등 청년 정책 금융 상품의 예상 수익을 쉽게 계산해보세요.',
  keywords: '청년도약계좌, 청년희망적금, 정부지원금, 청년정책, 금융계산기',
  verification: {
    google: 'BBDle2H1N6g_3XGHGG0ObJEWzpgZYs43-lLDtpGZvkg',
    other: {
      'naver-site-verification': 'bd48981bb9c57ae483eb3be91d8a7f23e9f1cbf4',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8467669092859638"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js"
          integrity="sha384-l+xbElFSnPZ2rOaPrU//2FF5B4LB8FiX5q4fXYTlfcG4PGpMkE1vcL7kNXI6Cci0"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <div className="min-h-screen flex flex-col pb-16 md:pb-0">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
