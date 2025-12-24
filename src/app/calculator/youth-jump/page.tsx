import type { Metadata } from 'next'
import YouthJumpCalculator from '@/components/YouthJumpCalculator'
import AdSlot from '@/components/AdSlot'
import { Info, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년도약계좌 계산기 - 5년 만기 예상 금액 계산',
  description: '청년도약계좌 월 납입액과 소득 수준을 입력하면 정부 기여금과 이자를 포함한 5년 후 만기 금액을 계산해드립니다.',
  keywords: '청년도약계좌, 청년도약계좌 계산기, 정부기여금, 청년정책, 목돈마련',
}

export default function YouthJumpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-4 border-b">
        <div className="max-w-4xl mx-auto px-4"><AdSlot position="top" /></div>
      </div>

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">청년도약계좌 계산기</h1>
          <p className="text-primary-100">월 납입액과 소득 수준을 입력하고 5년 후 예상 만기 금액을 확인하세요</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4"><YouthJumpCalculator /></div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary-600" />청년도약계좌란?
            </h2>
            <p className="text-gray-600 mb-6">
              청년도약계좌는 만 19세~34세 청년을 대상으로 하는 정부 지원 적금 상품입니다.
              5년간 매월 최대 70만원을 납입하면 정부 기여금과 비과세 혜택을 받을 수 있습니다.
            </p>
            
            <h3 className="font-bold text-gray-900 mb-3">가입 조건</h3>
            <ul className="space-y-2 mb-6">
              {['만 19세 ~ 34세 청년 (병역 이행 시 최대 6년 연장)', '개인소득 연 7,500만원 이하', '가구소득 중위 180% 이하', '금융소득종합과세 대상자 제외'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-gray-900 mb-3">소득별 정부 기여금 (2025년 1월 개정)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left font-medium text-gray-700">연 소득</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">월 최대 기여금</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">5년 총 기여금</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="px-4 py-2">2,400만원 이하</td><td className="px-4 py-2">33,000원</td><td className="px-4 py-2">198만원</td></tr>
                  <tr><td className="px-4 py-2">2,400~3,600만원</td><td className="px-4 py-2">29,000원</td><td className="px-4 py-2">174만원</td></tr>
                  <tr><td className="px-4 py-2">3,600~4,800만원</td><td className="px-4 py-2">25,000원</td><td className="px-4 py-2">150만원</td></tr>
                  <tr><td className="px-4 py-2">4,800~6,000만원</td><td className="px-4 py-2">21,000원</td><td className="px-4 py-2">126만원</td></tr>
                  <tr><td className="px-4 py-2">6,000~7,500만원</td><td className="px-4 py-2">0원</td><td className="px-4 py-2">-</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * 2025년 개정안: 월 납입액 전체에 대해 정부 기여금이 매칭됩니다 (월 최대 한도 적용)
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4"><AdSlot position="bottom" /></div>
      </section>
    </div>
  )
}
