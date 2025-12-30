import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Smartphone, Clock, CheckCircle2, AlertCircle, Phone, Globe, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년 금융 정책 신청 방법 완벽 가이드 | 2025년 최신',
  description: '청년도약계좌, 청년 월세 지원, 청년내일저축계좌 신청 방법을 단계별로 상세히 안내합니다.',
  keywords: '청년도약계좌 신청, 월세지원 신청방법, 청년내일저축계좌 신청, 청년정책 신청',
}

export default function HowToApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-2xl md:text-4xl font-bold">청년 금융 정책 신청 방법</h1>
          </div>
          <p className="text-primary-100 text-lg">
            2025년 최신 정보! 청년도약계좌부터 월세 지원까지 단계별로 쉽게 신청하세요.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* 청년도약계좌 신청 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-primary-600" />
            청년도약계좌 신청 방법
          </h2>

          <div className="mb-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="text-sm text-blue-900">
              💡 <strong>11개 취급 은행</strong>: 국민, 신한, 우리, 하나, 농협, 기업, 부산, 광주, 전북, 경남, iM뱅크
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">📱 온라인 신청 절차 (은행 앱 기준)</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">은행 선택 및 앱 접속</h4>
                <p className="text-sm text-gray-700">
                  11개 취급 은행 중 하나를 선택해 앱에 접속합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">신청 메뉴 진입</h4>
                <p className="text-sm text-gray-700">
                  '상품가입' 또는 '청년도약계좌' 메뉴에서 신청 진행
                </p>
                <p className="text-xs text-orange-600 mt-1">
                  ⚠️ 매월 지정된 신청 기간에만 가능
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">개인정보 동의</h4>
                <p className="text-sm text-gray-700">
                  본인 및 가구원의 소득 확인을 위한 정보 제공 동의
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">심사 대기</h4>
                <p className="text-sm text-gray-700">
                  서민금융진흥원에서 약 2주간 가입 요건(나이, 소득) 심사
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">계좌 개설</h4>
                <p className="text-sm text-gray-700">
                  승인 알림톡을 받으면 해당 은행 앱에서 최종 계좌 개설
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-gray-600" />
                <h4 className="font-semibold text-gray-900">필요 서류</h4>
              </div>
              <p className="text-sm text-gray-700">
                비대면 신청 시 서류 제출은 자동 (스크래핑 기술 활용)
              </p>
              <p className="text-xs text-gray-600 mt-2">
                * 소득 증빙이 안 될 경우 '소득금액증명원' 직접 업로드
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <h4 className="font-semibold text-gray-900">승인 기간</h4>
              </div>
              <p className="text-sm text-gray-700">
                신청 후 결과 통보까지 약 2~3주 소요
              </p>
              <p className="text-xs text-gray-600 mt-2">
                * 실제 개설은 신청 다음 달 초에 가능
              </p>
            </div>
          </div>

          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              신청 거절 시 대처 방법
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>주요 거절 사유:</strong> 소득 기준 초과, 가구원 정보 오류</p>
              <p><strong>대처 방법:</strong> 가구원 변동(독립 등)이 반영 안 된 경우 서민금융진흥원에 
                <strong className="text-red-600"> '가구원 최신화 신청'</strong>으로 재심사 요청
              </p>
            </div>
          </div>
        </section>

        {/* 청년 월세 지원 신청 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" />
            청년 월세 지원 신청 방법
          </h2>

          <h3 className="text-lg font-bold text-gray-900 mb-4">🌐 복지로 사이트 신청 절차</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">복지로 접속</h4>
                <p className="text-sm text-gray-700">
                  복지로(bokjiro.go.kr) 로그인
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">신청 메뉴 선택</h4>
                <p className="text-sm text-gray-700">
                  '서비스 신청' → '복지서비스 신청' → '청년 월세 한시 특별지원'
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">자가진단</h4>
                <p className="text-sm text-gray-700">
                  지원 대상 여부를 미리 체크
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">정보 입력 및 서류 업로드</h4>
                <p className="text-sm text-gray-700">
                  임대차 정보 및 본인/부모 소득 정보 입력
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl mb-4">
            <h4 className="font-semibold text-gray-900 mb-3">📄 필요 서류</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>임대차계약서</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>월세 이체 확인증 (최근 3개월)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>통장 사본</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>가족관계증명서 (상세)</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">⏱️ 심사 기간</h4>
              <p className="text-sm text-gray-700">약 1~2개월 소요</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">💰 지급 시기</h4>
              <p className="text-sm text-gray-700">승인 시 신청한 달부터 소급하여 매달 25일 지급</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-900">
              💡 <strong>신청 팁:</strong> 주소지가 부모님과 달라도 가구 소득을 보므로, 
              부모님의 소득 증빙 서류를 미리 파악해 두면 신청이 빨라집니다.
            </p>
          </div>
        </section>


        {/* 청년내일저축계좌 신청 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" />
            청년내일저축계좌 신청 방법
          </h2>

          <div className="mb-6 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
            <p className="text-sm text-yellow-900">
              📅 <strong>신청 시기:</strong> 매년 5월경 집중 모집 (2025년도 5월 예정)
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">✅ 신청 자격</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>연령:</strong> 만 19~34세 (수급자·차상위는 만 15~39세)</p>
              <p>• <strong>소득:</strong> 기준 중위소득 100% 이하</p>
              <p>• <strong>근로소득:</strong> 월 50만원 초과 ~ 250만원 이하</p>
              <p className="text-xs text-gray-600 mt-2">* 수급자·차상위는 소득 기준 완화</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">📝 신청 절차</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">신청 방법 선택</h4>
                <p className="text-sm text-gray-700">
                  복지로 온라인 신청 또는 읍면동 행정복지센터 방문 신청
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">서류 제출</h4>
                <div className="text-sm text-gray-700 space-y-1 mt-2">
                  <p>• 고용임금확인서 (또는 재직증명서)</p>
                  <p>• 소득신고서</p>
                  <p>• 임대차계약서 등</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">선정 심사</h4>
                <p className="text-sm text-gray-700">
                  소득조사 결과를 바탕으로 가구 소득 낮은 순으로 선정
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-900">
              💡 <strong>선정 팁:</strong> 매년 1회만 모집하므로 기회를 놓치지 마세요! 
              복지로 사이트를 주기적으로 확인하세요.
            </p>
          </div>
        </section>

        {/* 문의처 */}
        <section className="card bg-gradient-to-br from-gray-50 to-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📞 각 정책별 문의처
          </h2>

          <div className="space-y-4">
            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">청년도약계좌</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">전화: <strong>1397</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <a href="https://www.kinfa.or.kr" target="_blank" rel="noopener noreferrer" 
                     className="text-primary-600 hover:underline">
                    서민금융진흥원 홈페이지
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">카카오톡: <strong>'서민금융진흥원'</strong></span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">청년 월세 지원</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">전화: <strong>1600-0777</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline">
                    복지로 홈페이지
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">복지로 내 <strong>'상담센터'</strong></span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">청년내일저축계좌</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">전화: <strong>1522-3690</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">자산형성지원센터</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">보건복지 상담: <strong>129</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/calculator/youth-jump" className="card hover:shadow-xl transition-all group bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600">
                  자격 확인하기
                </h3>
                <p className="text-sm text-gray-600">
                  내가 신청 가능한지 미리 계산
                </p>
              </div>
              <ArrowRight className="w-8 h-8 text-primary-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link href="/guide/tips" className="card hover:shadow-xl transition-all group bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600">
                  활용 전략 보기
                </h3>
                <p className="text-sm text-gray-600">
                  똑똑하게 활용하는 방법
                </p>
              </div>
              <ArrowRight className="w-8 h-8 text-green-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
