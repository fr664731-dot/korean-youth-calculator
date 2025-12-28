import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Calendar, Gift, CheckCircle2, AlertCircle, ArrowRight, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년내일저축계좌 완벽 가이드 | 정부 1~3배 매칭',
  description: '저소득 근로 청년을 위한 최고의 지원! 정부가 1~3배 매칭 지원하는 청년내일저축계좌를 알아보세요.',
  keywords: '청년내일저축계좌, 정부매칭지원, 저소득청년, 자산형성지원',
}

export default function YouthTomorrowAccountPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
          <Calendar className="w-4 h-4" />
          <span className="font-semibold">2025년 5월 모집 예정</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          청년내일저축계좌 완벽 가이드
        </h1>
        <p className="text-lg text-gray-600">
          일하는 저소득 청년을 위한 최고의 지원! 정부가 1~3배 매칭 지원합니다.
        </p>
      </div>

      {/* 핵심 정보 */}
      <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">핵심 정보 한눈에</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">가입 기간</p>
            <p className="text-2xl font-bold text-green-600">3년 (36개월)</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">월 납입액</p>
            <p className="text-2xl font-bold text-green-600">10만원 이상</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">정부 지원금 (일반)</p>
            <p className="text-2xl font-bold text-green-600">월 10만원</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">정부 지원금 (저소득)</p>
            <p className="text-2xl font-bold text-green-600">월 30만원</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-xl">
          <p className="text-sm text-gray-600 mb-1">3년 후 예상 만기액</p>
          <p className="text-3xl font-bold text-primary-600">최대 1,440만원</p>
          <p className="text-sm text-gray-500 mt-1">본인 360만원 + 정부 1,080만원</p>
        </div>
      </div>

      {/* 가입 조건 */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">가입 조건</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              연령
            </h3>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-700 mb-2">• 일반: 만 19세 ~ 34세</p>
              <p className="text-gray-700">• 수급자·차상위자: 만 15세 ~ 39세</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Gift className="w-5 h-5 text-green-600" />
              소득 조건
            </h3>
            <div className="bg-gray-50 p-4 rounded-xl space-y-3">
              <div>
                <p className="font-semibold text-gray-900 mb-1">근로 소득</p>
                <p className="text-gray-700">• 일반: 월 50만원 초과 ~ 230만원 이하</p>
                <p className="text-gray-700">• 수급자·차상위자: 월 10만원 이상</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">가구 소득</p>
                <p className="text-gray-700">• 중위소득 100% 이하</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">정부 지원금</h3>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">중위소득 50% ~ 100% 이하</p>
                  <p className="text-gray-700">본인 월 10만원 저축 시</p>
                  <p className="text-green-600 font-bold text-lg">정부 월 10만원 매칭 (1:1)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">중위소득 50% 이하 (수급자·차상위)</p>
                  <p className="text-gray-700">본인 월 10만원 저축 시</p>
                  <p className="text-emerald-600 font-bold text-lg">정부 월 30만원 매칭 (1:3)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 예상 수익 */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">3년 후 예상 수익</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <p className="text-sm text-gray-600 mb-2">중위소득 50% ~ 100% (일반형)</p>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-bold text-green-600">720만원</span>
              <span className="text-gray-600">만기 수령</span>
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <p>• 본인 저축: 360만원 (월 10만원 × 36개월)</p>
              <p>• 정부 지원: 360만원 (월 10만원 × 36개월)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-xl border-2 border-emerald-300">
            <p className="text-sm text-gray-600 mb-2">중위소득 50% 이하 (수급자·차상위)</p>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-4xl font-bold text-emerald-600">1,440만원</span>
              <span className="text-gray-600">만기 수령</span>
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <p>• 본인 저축: 360만원 (월 10만원 × 36개월)</p>
              <p>• 정부 지원: 1,080만원 (월 30만원 × 36개월)</p>
            </div>
            <div className="mt-3 p-3 bg-white rounded-lg">
              <p className="text-sm font-semibold text-emerald-600">
                💰 본인 저축의 4배를 받을 수 있어요!
              </p>
            </div>
          </div>
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
              <span className="text-gray-700">정부 1~3배 매칭으로 압도적 수익률</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">3년 단기로 부담 없음</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">저소득 청년 최적 상품</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">자산 형성 교육 제공</span>
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
              <span className="text-gray-700">소득 요건이 까다로움</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
              <span className="text-gray-700">근로 활동을 계속 유지해야 함</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
              <span className="text-gray-700">연 1회 모집으로 기회 제한적</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
              <span className="text-gray-700">교육 이수 의무</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 신청 방법 */}
      <div className="card bg-blue-50 border-blue-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">신청 방법</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">모집 공고 확인</p>
              <p className="text-gray-700">2025년 5월경 복지로 사이트에서 공고 확인</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">온라인 신청</p>
              <p className="text-gray-700">복지로(www.bokjiro.go.kr) 또는 읍면동 행정복지센터 방문</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">자격 심사</p>
              <p className="text-gray-700">소득·재산 조사 후 선정 (약 1개월 소요)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">계좌 개설 및 저축 시작</p>
              <p className="text-gray-700">선정 통보 후 지정 은행에서 계좌 개설</p>
            </div>
          </div>
        </div>
      </div>

      {/* 추천 대상 */}
      <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">이런 분들께 추천해요</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">월 소득 50만~230만원의 저소득 근로 청년</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">수급자 또는 차상위 계층 청년</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">3년간 꾸준히 근로할 수 있는 분</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">자산 형성 교육에 관심 있는 분</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/compare" className="btn-primary flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          다른 정책과 비교하기
        </Link>
        <Link href="/calculator/youth-jump" className="btn-secondary flex items-center justify-center gap-2">
          청년도약계좌 계산하기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 알림 */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 mb-1">2025년 5월 모집 예정</p>
            <p className="text-sm text-gray-700">
              매년 1회만 모집하므로 기회를 놓치지 마세요! 복지로 사이트를 주기적으로 확인하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
