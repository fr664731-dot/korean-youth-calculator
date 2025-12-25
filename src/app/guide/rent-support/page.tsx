import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, AlertCircle, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: '청년 월세 특별지원 신청 방법과 서류 준비 완벽 가이드 | 청년금융계산기',
  description: '2025년 청년 월세 특별지원 신청 방법, 필요 서류, 지원 대상을 상세하게 안내합니다. 월 최대 20만원, 12개월간 총 240만원 지원받으세요.',
  keywords: '청년월세지원, 월세지원 신청방법, 청년월세 서류, 주거지원, 청년정책 2025',
}

export default function RentSupportGuidePage() {
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
                청년 월세 특별지원 신청 방법과 서류 준비
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                주거비 부담이 큰 청년들을 위한 월세 지원 제도, 신청 방법부터 필요 서류까지 
                단계별로 상세하게 안내해드립니다.
              </p>
            </header>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">청년 월세 특별지원이란?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                청년 월세 특별지원은 주거비 부담으로 어려움을 겪는 청년들에게 월세를 지원하는 정부 정책입니다. 
                만 19세부터 34세까지의 무주택 청년 중 소득 요건을 충족하면 월 최대 20만원씩 12개월간 
                총 240만원을 지원받을 수 있습니다.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 md:p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-600" />
                  핵심 포인트
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>월 최대 20만원 지원 (실제 월세의 범위 내)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>12개월간 지속 지원 (총 240만원)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>월세 계좌로 직접 입금</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">지원 대상 및 조건</h2>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">1. 연령 조건</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                만 19세부터 34세까지의 청년이 대상입니다. 병역을 이행한 경우 최대 6년까지 연령을 연장할 수 있어, 
                실질적으로 만 40세까지도 신청이 가능합니다.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">2. 주거 조건</h3>
              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 my-4">
                <h4 className="font-bold text-gray-900 mb-3">무주택 요건</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>청년 본인과 부모 모두 무주택자여야 함</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>전월세 거주 중이어야 함 (보증금 5천만원 이하, 월세 60만원 이하)</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900 mb-3 mt-6">임대차 계약 조건</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>임대차 계약서상 청년 본인 명의</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>주민등록상 독립 거주 (부모와 별도 거주)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">3. 소득 조건</h3>
              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 my-4">
                <h4 className="font-bold text-gray-900 mb-3">청년 가구 소득 기준</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>중위소득 60% 이하</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>1인 가구 기준: 월 소득 약 140만원 이하</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>2인 가구 기준: 월 소득 약 233만원 이하</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">필요 서류 준비</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                신청 전에 다음 서류들을 미리 준비하면 신청 과정이 훨씬 수월합니다.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">1. 신분 확인 서류</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 주민등록증 또는 운전면허증</li>
                        <li>• 주민등록등본 (독립 거주 확인용)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">2. 임대차 계약 서류</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 임대차 계약서 사본</li>
                        <li>• 월세 이체 내역 (최근 3개월)</li>
                        <li>• 건물 등기부등본 (임대인 소유권 확인)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">3. 소득 증빙 서류</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 근로소득원천징수영수증 또는 소득금액증명원</li>
                        <li>• 건강보험료 납부확인서</li>
                        <li>• 급여 명세서 (최근 3개월)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">4. 무주택 증빙 서류</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 본인 및 부모 주택 소유 여부 확인서</li>
                        <li>• 가족관계증명서</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">신청 방법</h2>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">온라인 신청 (복지로)</h3>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">복지로 웹사이트 접속</h4>
                    <p className="text-sm text-gray-600">
                      복지로 웹사이트(www.bokjiro.go.kr) 또는 앱에 접속합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">로그인 및 서비스 검색</h4>
                    <p className="text-sm text-gray-600">
                      공동인증서 또는 간편인증으로 로그인 후 '청년 월세 특별지원'을 검색합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">신청서 작성</h4>
                    <p className="text-sm text-gray-600">
                      개인정보, 주거정보, 소득정보 등을 입력하고 필요 서류를 첨부합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">신청 완료 및 심사 대기</h4>
                    <p className="text-sm text-gray-600">
                      신청을 완료하면 담당 기관에서 심사를 진행합니다. (약 2-4주 소요)
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">오프라인 신청 (주민센터)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                거주지 관할 주민센터를 방문하여 신청할 수도 있습니다. 
                필요 서류를 지참하고 방문하면 담당자의 도움을 받아 신청할 수 있습니다.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 md:p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-2">💡 신청 팁</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 신청 기간을 확인하세요 (보통 연 2회 신청 기간 운영)</li>
                  <li>• 서류는 발급일로부터 3개월 이내 것을 사용하세요</li>
                  <li>• 임대차 계약서는 확정일자를 받아두는 것이 좋습니다</li>
                  <li>• 월세 이체는 계좌이체로 하여 증빙을 남기세요</li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">지원금 지급 방법</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                심사를 통과하면 매월 월세 납부일에 맞춰 지원금이 지급됩니다.
              </p>

              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 my-4">
                <h4 className="font-bold text-gray-900 mb-3">지급 방식</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>임대인(집주인) 계좌로 직접 입금</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>매월 정해진 날짜에 자동 지급</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>실제 월세 금액의 범위 내에서 최대 20만원 지원</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">주의사항</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 md:p-6 my-6">
                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>거주지 변경 시:</strong> 반드시 변경 신고를 해야 하며, 새로운 임대차 계약서를 제출해야 합니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>소득 변동 시:</strong> 소득이 기준을 초과하면 지원이 중단될 수 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>허위 신청:</strong> 허위 서류 제출 시 지원금 환수 및 법적 처벌을 받을 수 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>중복 지원:</strong> 다른 주거 지원 사업과 중복 수혜가 불가능할 수 있습니다.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">자주 묻는 질문</h2>
              
              <div className="space-y-4 my-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 부모님과 같은 주소지에 살고 있어도 신청할 수 있나요?</h4>
                  <p className="text-sm text-gray-700">
                    A. 아니요. 청년 월세 특별지원은 부모와 별도로 독립 거주하는 경우에만 신청할 수 있습니다. 
                    주민등록상 주소지가 달라야 합니다.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 월세가 15만원인데 20만원을 지원받을 수 있나요?</h4>
                  <p className="text-sm text-gray-700">
                    A. 아니요. 실제 월세 금액의 범위 내에서 지원되므로, 월세가 15만원이면 최대 15만원까지만 지원받을 수 있습니다.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 지원 기간 12개월이 끝나면 재신청할 수 있나요?</h4>
                  <p className="text-sm text-gray-700">
                    A. 정책에 따라 다를 수 있으나, 일반적으로 1회 지원이 원칙입니다. 
                    다만 정책 변경에 따라 재신청이 가능할 수 있으니 복지로 또는 주민센터에 문의하세요.
                  </p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">마치며</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                청년 월세 특별지원은 주거비 부담으로 어려움을 겪는 청년들에게 실질적인 도움을 주는 정책입니다. 
                12개월간 총 240만원의 지원금은 청년들의 경제적 부담을 크게 덜어줄 수 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                지원 대상에 해당한다면 필요 서류를 준비하여 지금 바로 신청해보세요. 
                복지로 웹사이트나 주민센터에서 친절하게 안내받을 수 있습니다.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/calculator/rent-support"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-2xl hover:bg-primary-700 transition-colors"
              >
                월세지원 자격 확인하기
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
