import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, TrendingUp, Home, Sparkles, ArrowRight, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년 정책 금융 상품 비교 | 2025-2026 완벽 가이드',
  description: '청년도약계좌, 청년내일저축계좌, 청년미래적금(2026) 등 모든 청년 금융 정책을 한눈에 비교하세요.',
  keywords: '청년정책비교, 청년도약계좌, 청년내일저축계좌, 청년미래적금, 월세지원',
}

const policies2025 = [
  {
    name: '청년도약계좌',
    year: '2025',
    status: '신청 가능',
    icon: TrendingUp,
    color: 'primary',
    age: '만 19~34세',
    income: '총급여 7,500만원 이하',
    period: '5년 (60개월)',
    maxDeposit: '월 70만원',
    government: '월 최대 3.3만원',
    benefit: '비과세 + 정부기여금',
    total: '약 5,000만원',
    pros: ['높은 수익률 (연 8~9%)', '비과세 혜택', '목돈 마련 최적'],
    cons: ['5년 장기 가입', '중도해지 시 불이익'],
    link: '/calculator/youth-jump',
  },
  {
    name: '청년내일저축계좌',
    year: '2025',
    status: '5월 모집 예정',
    icon: Sparkles,
    color: 'green',
    age: '만 19~34세',
    income: '월 50만~230만원',
    period: '3년 (36개월)',
    maxDeposit: '월 10만원',
    government: '월 10~30만원',
    benefit: '정부 매칭 지원',
    total: '약 1,440만원',
    pros: ['정부 1~3배 매칭', '저소득층 최적', '3년 단기'],
    cons: ['소득 요건 까다로움', '근로 유지 필수'],
    link: '/guide/youth-tomorrow-account',
  },
  {
    name: '청년 월세 지원',
    year: '2025',
    status: '2월 25일 마감',
    icon: Home,
    color: 'blue',
    age: '만 19~34세',
    income: '중위소득 60% 이하',
    period: '최대 24개월',
    maxDeposit: '-',
    government: '월 최대 20만원',
    benefit: '현금 직접 지원',
    total: '최대 480만원',
    pros: ['즉각적 주거비 절감', '현금 지원', '2년 지원'],
    cons: ['생애 1회 한정', '부모 소득 심사'],
    link: '/calculator/rent-support',
  },
]

const policies2026 = [
  {
    name: '청년미래적금',
    year: '2026',
    status: '하반기 출시 예정',
    icon: Calculator,
    color: 'purple',
    age: '만 19~34세',
    income: '총급여 6,000만원 이하',
    period: '3년 (36개월)',
    maxDeposit: '월 50만원',
    government: '월 최대 3~6만원',
    benefit: '비과세 + 정부기여금',
    total: '약 2,000만원',
    pros: ['3년 단기', '중도해지 부담 적음', '연 12~16% 효과'],
    cons: ['아직 출시 전', '도약계좌보다 낮은 수익'],
    link: '/guide/youth-future-savings',
    isNew: true,
  },
  {
    name: '청년도약계좌',
    year: '2026',
    status: '개선 운영',
    icon: TrendingUp,
    color: 'primary',
    age: '만 19~34세',
    income: '총급여 7,500만원 이하',
    period: '5년 (60개월)',
    maxDeposit: '월 70만원',
    government: '월 최대 3.3만원',
    benefit: '부분인출 가능',
    total: '약 5,000만원',
    pros: ['부분인출 도입', '신용점수 가점', '3년 유지 혜택'],
    cons: ['5년 장기 가입'],
    link: '/calculator/youth-jump',
    isUpdated: true,
  },
  {
    name: '청년 월세 지원',
    year: '2026',
    status: '상시화 예정',
    icon: Home,
    color: 'blue',
    age: '만 19~34세',
    income: '중위소득 60% 이하',
    period: '최대 24개월',
    maxDeposit: '-',
    government: '월 최대 20만원',
    benefit: '상시 신청 가능',
    total: '최대 480만원',
    pros: ['상시 신청', '거주 요건 완화', '현금 지원'],
    cons: ['생애 1회 한정'],
    link: '/calculator/rent-support',
    isUpdated: true,
  },
]

const colorClasses = {
  primary: 'bg-primary-50 text-primary-700 border-primary-200',
  green: 'bg-green-50 text-green-700 border-green-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
}

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          청년 정책 금융 상품 비교
        </h1>
        <p className="text-lg text-gray-600">
          2025년 현재부터 2026년 신규 정책까지, 모든 청년 금융 지원을 한눈에 비교하세요.
        </p>
      </div>

      {/* 2025년 정책 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">2025년 현재 이용 가능</h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
            신청 가능
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {policies2025.map((policy) => {
            const Icon = policy.icon
            return (
              <div key={policy.name} className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${colorClasses[policy.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    policy.status.includes('가능') ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {policy.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.name}</h3>
                <p className="text-2xl font-bold text-primary-600 mb-4">{policy.total}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">연령</span>
                    <span className="font-medium text-gray-900">{policy.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">소득</span>
                    <span className="font-medium text-gray-900">{policy.income}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">기간</span>
                    <span className="font-medium text-gray-900">{policy.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">정부지원</span>
                    <span className="font-medium text-green-600">{policy.government}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="space-y-2">
                    {policy.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </div>
                    ))}
                    {policy.cons.map((con, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={policy.link} className="btn-primary w-full flex items-center justify-center gap-2">
                  자세히 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* 2026년 정책 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">2026년 신규 및 변경 예정</h2>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
            미리보기
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {policies2026.map((policy) => {
            const Icon = policy.icon
            return (
              <div key={`${policy.name}-2026`} className="card hover:shadow-xl transition-shadow relative overflow-hidden">
                {policy.isNew && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-1 text-xs font-bold">
                    NEW
                  </div>
                )}
                {policy.isUpdated && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-1 text-xs font-bold">
                    개선
                  </div>
                )}

                <div className="flex items-start justify-between mb-4 mt-2">
                  <div className={`p-3 rounded-2xl ${colorClasses[policy.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                    {policy.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.name}</h3>
                <p className="text-2xl font-bold text-primary-600 mb-4">{policy.total}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">연령</span>
                    <span className="font-medium text-gray-900">{policy.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">소득</span>
                    <span className="font-medium text-gray-900">{policy.income}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">기간</span>
                    <span className="font-medium text-gray-900">{policy.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">정부지원</span>
                    <span className="font-medium text-green-600">{policy.government}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="space-y-2">
                    {policy.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </div>
                    ))}
                    {policy.cons.map((con, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={policy.link} className="btn-secondary w-full flex items-center justify-center gap-2">
                  자세히 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* 상황별 추천 */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">상황별 추천 정책</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-gradient-to-br from-primary-50 to-blue-50">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 목돈 마련이 목표라면</h3>
            <p className="text-gray-700 mb-4">
              5년 유지가 가능하다면 <strong>청년도약계좌</strong>가 최고! 
              짧고 굵게 모으고 싶다면 2026년 하반기 <strong>청년미래적금</strong>을 기다려보세요.
            </p>
            <Link href="/calculator/youth-jump" className="text-primary-600 font-semibold hover:underline">
              청년도약계좌 계산하기 →
            </Link>
          </div>

          <div className="card bg-gradient-to-br from-green-50 to-emerald-50">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 저소득 근로 청년이라면</h3>
            <p className="text-gray-700 mb-4">
              <strong>청년내일저축계좌</strong>가 압도적! 정부가 1~3배 매칭 지원해줘서 
              수익률이 가장 높습니다. 2025년 5월 모집 예정이니 꼭 신청하세요.
            </p>
            <Link href="/guide/youth-tomorrow-account" className="text-green-600 font-semibold hover:underline">
              자격 조건 확인하기 →
            </Link>
          </div>

          <div className="card bg-gradient-to-br from-blue-50 to-cyan-50">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🏠 월세 부담이 크다면</h3>
            <p className="text-gray-700 mb-4">
              <strong>청년 월세 지원</strong>으로 즉각적인 주거비 절감! 
              2025년 2월 마감이지만, 2026년부터 상시화되니 놓쳐도 다시 신청 가능합니다.
            </p>
            <Link href="/calculator/rent-support" className="text-blue-600 font-semibold hover:underline">
              자격 확인하기 →
            </Link>
          </div>

          <div className="card bg-gradient-to-br from-purple-50 to-pink-50">
            <h3 className="text-lg font-bold text-gray-900 mb-3">⏰ 5년은 너무 길다면</h3>
            <p className="text-gray-700 mb-4">
              2026년 하반기 출시 예정인 <strong>청년미래적금</strong>을 주목! 
              3년 만기로 중도해지 부담이 적고, 연 12~16% 효과를 낼 수 있습니다.
            </p>
            <Link href="/guide/youth-future-savings" className="text-purple-600 font-semibold hover:underline">
              미리 알아보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
