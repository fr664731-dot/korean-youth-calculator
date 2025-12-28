import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Calendar, TrendingUp, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년미래적금 완벽 가이드 | 2026년 신규 출시',
  description: '2026년 하반기 출시 예정인 청년미래적금! 3년 만기로 부담 없이 목돈 마련하세요.',
  keywords: '청년미래적금, 2026년신규정책, 3년적금, 청년금융',
}

export default function YouthFutureSavingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="font-semibold">2026년 하반기 출시 예정</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          청년미래적금 완벽 가이드
        </h1>
        <p className="text-lg text-gray-600">
          5년은 너무 길다는 의견을 반영한 3년 만기 신규 상품! 짧고 굵게 목돈 마련하세요.
        </p>
      </div>

      {/* 핵심 정보 */}
      <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">핵심 정보 한눈에</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">가입 기간</p>
            <p className="text-2xl font-bold text-purple-600">3년 (36개월)</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">월 납입 한도</p>
            <p className="text-2xl font-bold text-purple-600">최대 50만원</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">정부 기여금 (일반형)</p>
            <p className="text-2xl font-bold text-green-600">월 최대 3만원</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">정부 기여금 (우대형)</p>
            <p className="text-2xl font-bold text-green-600">월 최대 6만원</p>
          </div>
        </div>
      </div>

      {/* 상세 조건 */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">가입 조건</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">연령</h3>
            <p className="text-gray-700">만 19세 ~ 34세 (병역 이행 기간 최대 6년 인정)</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">소득 조건</h3>
            <p className="text-gray-700">개인 소득 6,000만원 이하</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">지원 방식</h3>
            <div className="bg-gray-50 p-4 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">일반형</p>
                  <p className="text-gray-700">개인 소득 6,000만원 이하 청년 대상</p>
                  <p className="text-green-600 font-semibold">납입액의 6% 지원 (월 최대 3만원)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">우대형</p>
                  <p className="text-gray-700">중소기업 신규 취업 청년 등 대상</p>
                  <p className="text-green-600 font-semibold">납입액의 12% 지원 (월 최대 6만원)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 청년도약계좌와 비교 */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">청년도약계좌와 비교</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-2">구분</th>
                <th className="text-center py-3 px-2 bg-purple-50">청년미래적금</th>
                <th className="text-center py-3 px-2 bg-primary-50">청년도약계좌</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 px-2 font-medium">가입 기간</td>
                <td className="py-3 px-2 text-center text-purple-600 font-semibold">3년</td>
                <td className="py-3 px-2 text-center">5년</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-medium">월 납입 한도</td>
                <td className="py-3 px-2 text-center">50만원</td>
                <td className="py-3 px-2 text-center text-primary-600 font-semibold">70만원</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-medium">정부 기여금</td>
                <td className="py-3 px-2 text-center">월 3~6만원</td>
                <td className="py-3 px-2 text-center text-primary-600 font-semibold">월 2.1~3.3만원</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-medium">예상 만기액</td>
                <td className="py-3 px-2 text-center">약 2,000만원</td>
                <td className="py-3 px-2 text-center text-primary-600 font-semibold">약 5,000만원</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-medium">중도해지 부담</td>
                <td className="py-3 px-2 text-center text-purple-600 font-semibold">낮음</td>
                <td className="py-3 px-2 text-center">높음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 장단점 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card bg-green-50 border-green-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            장점
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">3년 단기로 부담 없음</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">중도 해지 위험 낮음</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">연 12~16% 적금 효과</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">비과세 혜택</span>
            </li>
          </ul>
        </div>

        <div className="card bg-orange-50 border-orange-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            단점
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
              <span className="text-gray-700">아직 출시 전 (2026년 하반기)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
              <span className="text-gray-700">청년도약계좌보다 낮은 총 수익</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
              <span className="text-gray-700">세부 조건 미확정</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 추천 대상 */}
      <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">이런 분들께 추천해요</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">5년은 너무 길게 느껴지는 분</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">3년 안에 목돈이 필요한 분 (결혼, 전세 등)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">중도 해지 위험을 줄이고 싶은 분</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">중소기업 신규 취업 예정인 분 (우대형 혜택)</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/compare" className="btn-primary flex items-center justify-center gap-2">
          <TrendingUp className="w-5 h-5" />
          다른 정책과 비교하기
        </Link>
        <Link href="/calculator/youth-jump" className="btn-secondary flex items-center justify-center gap-2">
          청년도약계좌 계산하기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 알림 */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 mb-1">출시 알림 받기</p>
            <p className="text-sm text-gray-700">
              2026년 하반기 출시 예정입니다. 정확한 출시일과 세부 조건은 확정되는 대로 업데이트됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
