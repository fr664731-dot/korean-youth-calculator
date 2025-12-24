import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'
import YouthJumpCalculator from '@/components/YouthJumpCalculator'
import AdSlot from '@/components/AdSlot'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-3 md:px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">청년 맞춤형 정책 금융 계산기</h1>
          <p className="text-base md:text-xl text-primary-100 mb-6 md:mb-8">
            청년도약계좌, 청년희망적금 등 정부 지원 금융 상품의<br className="hidden md:block" />
            예상 수익을 쉽고 빠르게 계산해보세요
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">정확한 수익 계산</h3>
              <p className="text-gray-600 text-xs md:text-sm">정부 기여금과 이자를 포함한 정확한 만기 금액을 계산합니다</p>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">최신 정책 반영</h3>
              <p className="text-gray-600 text-xs md:text-sm">2024년 최신 정부 정책을 반영한 계산 로직을 제공합니다</p>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">맞춤형 분석</h3>
              <p className="text-gray-600 text-xs md:text-sm">소득 수준에 따른 맞춤형 정부 지원금을 확인하세요</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 md:px-4">
          <YouthJumpCalculator />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6 md:mb-8">다른 계산기</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Link href="/calculator/youth-jump" className="card hover:shadow-xl transition-shadow group">
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 group-hover:text-primary-600">청년도약계좌 계산기</h3>
              <p className="text-gray-600 text-sm mb-4">월 최대 70만원 납입, 5년 만기 시 최대 5,000만원 이상의 목돈 마련</p>
              <span className="text-primary-600 text-sm font-medium flex items-center gap-1">계산하기 <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/calculator/rent-support" className="card hover:shadow-xl transition-shadow group">
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 group-hover:text-primary-600">청년 월세 특별지원 확인기</h3>
              <p className="text-gray-600 text-sm mb-4">월 최대 20만원, 총 12개월 월세 지원 자격 확인</p>
              <span className="text-primary-600 text-sm font-medium flex items-center gap-1">확인하기 <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 md:px-4">
          <AdSlot position="bottom" />
        </div>
      </section>
    </div>
  )
}
