import type { Metadata } from 'next'
import RentSupportChecker from '@/components/RentSupportChecker'
import AdSlot from '@/components/AdSlot'
import { Info, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년 월세 특별지원 자격 확인기 - 월 최대 20만원 지원',
  description: '청년 월세 특별지원 자격을 확인하고 월 최대 20만원, 총 12개월 지원을 받을 수 있는지 알아보세요.',
  keywords: '청년월세지원, 월세지원, 청년정책, 주거지원, 월세보조',
}

export default function RentSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-4 border-b">
        <div className="max-w-4xl mx-auto px-4"><AdSlot position="top" /></div>
      </div>

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">청년 월세 특별지원 자격 확인기</h1>
          <p className="text-primary-100">나이, 거주 형태, 소득을 입력하고 월세 지원 대상인지 확인하세요</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4"><RentSupportChecker /></div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary-600" />청년 월세 특별지원이란?
            </h2>
            <p className="text-gray-600 mb-6">
              청년 월세 특별지원은 주거비 부담이 큰 청년들에게 월세를 지원하는 정부 정책입니다.
              만 19세~34세 무주택 청년 중 소득 요건을 충족하면 월 최대 20만원씩 12개월간 지원받을 수 있습니다.
            </p>
            
            <h3 className="font-bold text-gray-900 mb-3">지원 대상</h3>
            <ul className="space-y-2 mb-6">
              {[
                '만 19세 ~ 34세 청년 (병역 이행 시 최대 6년 연장)',
                '부모와 청년 모두 무주택자',
                '청년 가구 소득이 중위소득 60% 이하 (1인 가구 약 140만원)',
                '보증금 5천만원 이하, 월세 60만원 이하 거주',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-gray-900 mb-3">신청 방법</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">1.</span>
                  <span>복지로 웹사이트 또는 앱 접속</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">2.</span>
                  <span>청년 월세 특별지원 검색 및 신청</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">3.</span>
                  <span>필요 서류 제출 (임대차계약서, 소득증빙 등)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">4.</span>
                  <span>심사 후 승인 시 월세 계좌로 직접 입금</span>
                </li>
              </ol>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>💡 참고:</strong> 본 확인기는 간단한 자격 확인용이며, 실제 지원 여부는 
                가구원 수, 부모 소득, 재산 등 추가 요건을 종합적으로 심사합니다. 
                정확한 확인은 복지로 또는 주민센터에 문의하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4"><AdSlot position="bottom" /></div>
      </section>
    </div>
  )
}
