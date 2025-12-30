import { Metadata } from 'next'
import Link from 'next/link'
import { Lightbulb, TrendingUp, Users, AlertTriangle, CheckCircle2, XCircle, ArrowRight, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년 금융 정책 활용 전략 | 소득별 최적 납입 전략',
  description: '청년도약계좌 소득 구간별 최적 납입 전략, 중복 가입 가능 여부, 생애 주기별 추천 전략을 알아보세요.',
  keywords: '청년도약계좌 전략, 소득별 납입, 중복가입, 청년금융 활용법',
}

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-2xl md:text-4xl font-bold">청년 금융 정책 활용 전략</h1>
          </div>
          <p className="text-primary-100 text-lg">
            소득 구간별 최적 납입 전략부터 생애 주기별 추천까지, 똑똑하게 활용하는 방법을 알려드립니다.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* 소득 구간별 최적 납입 전략 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary-600" />
            소득 구간별 최적 납입 전략
          </h2>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="text-sm text-blue-900">
              💡 <strong>2025년부터 정부기여금이 월 최대 3.3만 원으로 확대</strong>되었습니다!
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-green-50 rounded-2xl border-2 border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                💰 저소득 구간 (연 2,400만원 이하)
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-green-700">월 42만원 납입</strong>이 가성비 최고!
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>본인 42만원 + 정부 3.3만원 = 월 45.3만원 적립</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>매칭 비율이 가장 높아 효율 극대화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>여유가 있다면 비과세 혜택을 위해 70만원까지 채우기</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                💼 중간 소득 구간 (연 2,400만 ~ 4,800만원)
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-blue-700">월 70만원 풀 납입</strong> 추천!
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>월 70만원 납입 시 정부 기여금 최대 수령</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>5년 후 약 4,500만원 이상 목돈 마련 가능</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-2xl border-2 border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                🎯 고소득 구간 (연 4,800만 ~ 7,500만원)
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-purple-700">비과세 혜택</strong>이 핵심!
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>정부 기여금은 적지만 이자소득 15.4% 비과세</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>시중 은행 적금보다 훨씬 강력한 절세 효과</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 중도 해지를 피하는 방법 */}
        <section className="card bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            중도 해지를 피하는 방법
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">1️⃣ 부분 인출 서비스</h3>
              <p className="text-gray-700 text-sm">
                2024년 하반기부터 도입! 급전이 필요할 때 해지하지 않고도 일정 금액을 찾아 쓸 수 있습니다.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">2️⃣ 특별 중도 해지</h3>
              <p className="text-gray-700 text-sm mb-2">
                다음 사유로 해지하면 정부 기여금과 비과세 혜택을 모두 챙길 수 있어요:
              </p>
              <ul className="space-y-1 ml-4 text-sm text-gray-700">
                <li>• 혼인</li>
                <li>• 출산</li>
                <li>• 생애 최초 주택 구입</li>
                <li>• 퇴직</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">3️⃣ 3년 유지 시 혜택</h3>
              <p className="text-gray-700 text-sm">
                5년을 못 채우더라도 <strong className="text-orange-600">3년만 유지</strong>하면:
              </p>
              <ul className="space-y-1 ml-4 text-sm text-gray-700 mt-2">
                <li>• 기본 금리 수준(3.8~4.5%) 보장</li>
                <li>• 비과세 혜택 유지</li>
                <li>• 정부 기여금의 약 60% 수령</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 중복 가입 가능 여부 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary-600" />
            청년 정책 중복 가입 가능 여부
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">조합</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">가능 여부</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">상세 내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    청년도약계좌<br />+ 청년내일저축계좌
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      가능
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    자산 형성을 두텁게 지원하기 위해 동시 가입 허용
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    청년도약계좌<br />+ 월세 지원
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      가능
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    주거 지원과 자산 형성 지원은 별개이므로 중복 신청 가능
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    청년도약계좌<br />+ 청년내일채움공제
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      가능
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    고용지원 목적 상품과 금융상품 간 중복 가입 허용
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    지자체 지원사업<br />(서울 희망두배 등)
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                      <AlertTriangle className="w-4 h-4" />
                      제한적
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    일부 지자체 상품은 중복 제한 가능, 공고 확인 필수
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


        {/* 생애 주기별 추천 전략 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 생애 주기별 추천 전략
          </h2>

          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                👶 20대 초반 (대학생/사회초년생)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">청년주택드림청약통장</h4>
                  <p className="text-sm text-gray-700">
                    연 4.5% 고금리 + 추후 청약 당첨 시 연 2%대 저금리 대출 연계
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">청년내일저축계좌</h4>
                  <p className="text-sm text-gray-700">
                    아르바이트나 근로 소득이 있다면 반드시 신청! 본인 저축액의 1~3배 매칭
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💼 20대 후반 (직장인)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">청년도약계좌 일시납입</h4>
                  <p className="text-sm text-gray-700">
                    기존 청년희망적금 만기자라면 일시납입으로 이자 수익 극대화 (일반 적금 대비 약 2배 수익)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">소득세 감면</h4>
                  <p className="text-sm text-gray-700">
                    중소기업 취업 청년이라면 5년간 90% 소득세 감면 신청 필수!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💑 30대 초반 (결혼/독립 준비)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">청년 버팀목 전세자금 대출</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    연 1.8%~2.7% 저금리 대출로 주거비 절감
                  </p>
                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-xs text-green-700 font-semibold">
                      💡 레버리지 전략: 저금리 대출로 주거비를 아끼고, 남은 여유 자금은 청년도약계좌에 투자!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 실수하기 쉬운 함정 */}
        <section className="card bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            실수하기 쉬운 함정
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 mb-2">⚠️ 소득 기준의 시차</h3>
              <p className="text-sm text-gray-700 mb-2">
                신청 시점의 소득이 아니라 <strong className="text-red-600">전년도 과세소득</strong>이 기준입니다.
              </p>
              <div className="p-3 bg-red-50 rounded-lg text-sm text-gray-700">
                <p>• 2025년 신청 → 2024년 소득 확인</p>
                <p>• 전년도 소득 미확정 시 → 2023년 소득 기준</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-900 mb-2">⚠️ 가구 중위소득 계산</h3>
              <p className="text-sm text-gray-700 mb-2">
                본인 혼자 살아도 부모님과 주민등록상 합쳐져 있다면 <strong className="text-orange-600">'가구원 전체 소득'</strong>이 기준!
              </p>
              <div className="p-3 bg-orange-50 rounded-lg text-sm">
                <p className="text-orange-700 font-semibold">
                  💡 독립 세대주라면 반드시 주소지를 분리해야 유리합니다.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-2">⚠️ 서류 유효기간</h3>
              <p className="text-sm text-gray-700">
                온라인 신청 시 대부분 자동 제출되지만, 직접 준비하는 서류(가족관계증명서 등)는 
                <strong className="text-yellow-600"> 반드시 최근 1개월 이내 발급분</strong>이어야 합니다.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/calculator/youth-jump" className="card hover:shadow-xl transition-all group bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600">
                  청년도약계좌 계산하기
                </h3>
                <p className="text-sm text-gray-600">
                  내 소득에 맞는 최적 납입액 확인
                </p>
              </div>
              <Calculator className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform" />
            </div>
          </Link>

          <Link href="/compare" className="card hover:shadow-xl transition-all group bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600">
                  정책 비교하기
                </h3>
                <p className="text-sm text-gray-600">
                  모든 청년 정책 한눈에 비교
                </p>
              </div>
              <ArrowRight className="w-8 h-8 text-purple-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
