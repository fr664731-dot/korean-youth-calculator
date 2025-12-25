import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '2025년 청년도약계좌 가입 대상 및 혜택 완벽 정리 | 청년금융계산기',
  description: '2025년 청년도약계좌의 가입 조건, 정부 기여금, 세제 혜택, 신청 방법을 상세하게 안내합니다. 월 최대 70만원 납입으로 5년 후 5천만원 이상 목돈 마련하세요.',
  keywords: '청년도약계좌, 2025년 청년도약계좌, 청년도약계좌 가입조건, 청년도약계좌 혜택, 정부기여금, 청년정책',
}

export default function YouthJumpAccountGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-3 md:px-4 py-4">
          <Link href="/guide" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">가이드 목록으로</span>
          </Link>
        </div>
      </div>

      <article className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-3 md:px-4">
          <div className="card">
            <header className="mb-8">
              <p className="text-sm text-gray-500 mb-3">2025.01.01 업데이트</p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                2025년 청년도약계좌 가입 대상 및 혜택 완벽 정리
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                청년도약계좌는 청년들의 자산 형성을 돕기 위해 정부가 지원하는 대표적인 금융 상품입니다. 
                2025년 최신 정보를 바탕으로 가입 조건부터 혜택까지 모든 것을 알려드립니다.
              </p>
            </header>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">청년도약계좌란?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                청년도약계좌는 만 19세부터 34세까지의 청년을 대상으로 하는 정부 지원 적금 상품입니다. 
                매월 일정 금액을 납입하면 정부가 추가로 기여금을 지원하고, 이자 소득에 대한 비과세 혜택까지 제공하여 
                청년들이 목돈을 마련할 수 있도록 돕습니다.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 md:p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-600" />
                  핵심 포인트
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>월 최대 70만원까지 자유롭게 납입 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>5년 만기 시 최대 5,000만원 이상 목돈 마련</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>정부 기여금 + 이자 소득 비과세 혜택</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">2025년 가입 대상 및 조건</h2>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">1. 연령 조건</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                만 19세부터 34세까지의 청년이 가입할 수 있습니다. 병역을 이행한 경우 최대 6년까지 연령을 연장할 수 있어, 
                실질적으로 만 40세까지도 가입이 가능합니다.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">2. 소득 조건</h3>
              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 my-4">
                <h4 className="font-bold text-gray-900 mb-3">개인소득 기준</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>연 소득 7,500만원 이하</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>직전 과세기간 총급여액 또는 종합소득금액 기준</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900 mb-3 mt-6">가구소득 기준</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>가구 중위소득 180% 이하</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>1인 가구 기준 약 396만원 이하</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">3. 기타 조건</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>금융소득종합과세 대상자 제외 (이자·배당소득 2천만원 초과)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>직전 3개년도 중 1회 이상 금융소득종합과세 대상자였던 경우 제외</span>
                </li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">정부 기여금 지원 내역</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                2025년 1월 개정안에 따라 정부 기여금 지원 방식이 변경되었습니다. 
                이제 월 납입액 전체에 대해 정부 기여금이 매칭되며, 소득 구간별로 월 최대 한도가 적용됩니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">연 소득</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">월 최대 기여금</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">5년 총 기여금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2,400만원 이하</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-primary-600">33,000원</td>
                      <td className="border border-gray-300 px-4 py-3">198만원</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">2,400~3,600만원</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-primary-600">29,000원</td>
                      <td className="border border-gray-300 px-4 py-3">174만원</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">3,600~4,800만원</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-primary-600">25,000원</td>
                      <td className="border border-gray-300 px-4 py-3">150만원</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">4,800~6,000만원</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-primary-600">21,000원</td>
                      <td className="border border-gray-300 px-4 py-3">126만원</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6,000~7,500만원</td>
                      <td className="border border-gray-300 px-4 py-3">0원</td>
                      <td className="border border-gray-300 px-4 py-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">세제 혜택</h2>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 md:p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">비과세 혜택</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  청년도약계좌의 이자 소득에 대해서는 세금이 부과되지 않습니다. 
                  일반 적금의 경우 이자 소득세 15.4%가 부과되지만, 청년도약계좌는 이를 면제받아 
                  실질 수익률이 더욱 높아집니다.
                </p>
                <p className="text-sm text-gray-600">
                  예시: 5년간 이자 소득이 200만원인 경우, 일반 적금은 약 31만원의 세금이 부과되지만 
                  청년도약계좌는 전액 비과세됩니다.
                </p>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">신청 방법</h2>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">1. 가입 가능 금융기관</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                전국 은행, 증권사, 저축은행 등 대부분의 금융기관에서 가입할 수 있습니다. 
                각 금융기관마다 우대금리 조건이 다르므로 비교 후 선택하는 것이 좋습니다.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">2. 필요 서류</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>신분증 (주민등록증, 운전면허증 등)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>소득 확인 서류 (근로소득원천징수영수증, 소득금액증명원 등)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>가구원 소득 확인 서류 (건강보험료 납부확인서 등)</span>
                </li>
              </ul>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">3. 신청 절차</h3>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">금융기관 방문 또는 앱 접속</h4>
                    <p className="text-sm text-gray-600">원하는 금융기관의 영업점을 방문하거나 모바일 앱을 통해 신청할 수 있습니다.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">가입 조건 확인</h4>
                    <p className="text-sm text-gray-600">연령, 소득 등 가입 조건을 확인하고 필요 서류를 제출합니다.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">계좌 개설 및 납입</h4>
                    <p className="text-sm text-gray-600">계좌 개설 후 매월 원하는 금액을 납입합니다. (최소 1천원 ~ 최대 70만원)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">주의사항</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 md:p-6 my-6">
                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>중도 해지 시:</strong> 정부 기여금과 이자 소득 비과세 혜택이 모두 소멸됩니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>소득 변동 시:</strong> 매년 소득을 재확인하여 정부 기여금 지원 금액이 조정될 수 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>1인 1계좌:</strong> 청년도약계좌는 1인당 1개의 계좌만 개설할 수 있습니다.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">마치며</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                청년도약계좌는 청년들이 목돈을 마련할 수 있는 최고의 금융 상품 중 하나입니다. 
                정부 기여금과 비과세 혜택을 통해 일반 적금보다 훨씬 높은 수익률을 기대할 수 있으며, 
                5년간 꾸준히 납입하면 내 집 마련이나 결혼 자금 등 목돈을 마련하는 데 큰 도움이 됩니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                가입 조건을 충족한다면 지금 바로 신청하여 미래를 위한 첫걸음을 내딛어보세요!
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/calculator/youth-jump"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-2xl hover:bg-primary-700 transition-colors"
              >
                청년도약계좌 계산기로 예상 금액 확인하기
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
