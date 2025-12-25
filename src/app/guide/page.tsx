import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년 정책 가이드 - 2025년 청년도약계좌, 월세지원 완벽 정리',
  description: '2025년 청년도약계좌 가입 대상 및 혜택, 청년 월세 특별지원 신청 방법을 상세하게 안내합니다.',
  keywords: '청년정책, 청년도약계좌 가입방법, 월세지원 신청방법, 2025년 청년정책, 청년혜택',
}

export default function GuidePage() {
  const guides = [
    {
      title: '2025년 청년도약계좌 가입 대상 및 혜택 완벽 정리',
      description: '청년도약계좌의 가입 조건, 정부 기여금, 세제 혜택까지 모든 것을 알려드립니다.',
      href: '/guide/youth-jump-account',
      date: '2025.01.01',
    },
    {
      title: '청년 월세 특별지원 신청 방법과 서류 준비',
      description: '월 최대 20만원 지원받는 방법, 필요 서류, 신청 절차를 단계별로 안내합니다.',
      href: '/guide/rent-support',
      date: '2025.01.01',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-3 md:px-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-2xl md:text-4xl font-bold">청년 정책 가이드</h1>
          </div>
          <p className="text-base md:text-lg text-primary-100">
            2025년 최신 청년 정책을 쉽고 자세하게 알려드립니다
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-3 md:px-4">
          <div className="space-y-6">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="block card hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-2">{guide.date}</p>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      {guide.description}
                    </p>
                    <span className="text-primary-600 text-sm font-medium flex items-center gap-1">
                      자세히 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
