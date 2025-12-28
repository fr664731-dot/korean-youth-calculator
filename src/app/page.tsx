import { ArrowRight, Shield, TrendingUp, Users, HelpCircle, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import AdvancedYouthJumpWizard from '@/components/AdvancedYouthJumpWizard'
import AdSlot from '@/components/AdSlot'
import FAQSection from '@/components/FAQSection'

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
              <p className="text-gray-600 text-xs md:text-sm">2025년 최신 정부 정책을 반영한 계산 로직을 제공합니다</p>
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
          <AdvancedYouthJumpWizard />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">청년 정책 한눈에 비교하기</h2>
            <p className="text-gray-600 text-sm md:text-base">2025년 현재부터 2026년 신규 정책까지 모두 비교해보세요</p>
          </div>
          <Link href="/compare" className="card hover:shadow-xl transition-all group bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-3">
                  <span>NEW</span>
                  <span>2026년 신규 정책 포함</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 group-hover:text-purple-600">
                  청년 정책 금융 상품 비교
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  청년도약계좌, 청년미래적금, 청년내일저축계좌, 월세지원까지 모든 정책을 한눈에!
                </p>
              </div>
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-purple-600 group-hover:translate-x-2 transition-transform flex-shrink-0" />
            </div>
          </Link>
          
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6 md:mb-8">계산기</h2>
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

      <FAQSection />

      <section className="py-6 md:py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 md:px-4">
          <AdSlot position="bottom" />
        </div>
      </section>
    </div>
  )
}
