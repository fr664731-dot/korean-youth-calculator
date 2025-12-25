import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '개인정보처리방침 - 청년금융계산기',
  description: '청년금융계산기의 개인정보처리방침입니다.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-3 md:px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>

        <div className="card">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">개인정보처리방침</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. 개인정보의 처리 목적</h2>
              <p className="mb-2">
                청년금융계산기(이하 "본 서비스")는 다음의 목적을 위하여 개인정보를 처리합니다. 
                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. 개인정보의 수집 항목</h2>
              <p className="mb-2">
                본 서비스는 계산기 기능만을 제공하며, 별도의 회원가입이나 개인정보 수집을 하지 않습니다.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>사용자가 입력한 계산 데이터는 서버에 저장되지 않습니다</li>
                <li>모든 계산은 브라우저 내에서 처리됩니다</li>
                <li>쿠키는 사이트 기능 개선을 위한 통계 목적으로만 사용됩니다</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. 개인정보의 처리 및 보유 기간</h2>
              <p>
                본 서비스는 개인정보를 수집하거나 보유하지 않습니다. 
                사용자가 입력한 모든 데이터는 브라우저를 닫으면 자동으로 삭제됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. 개인정보의 제3자 제공</h2>
              <p>
                본 서비스는 사용자의 개인정보를 수집하지 않으므로, 제3자에게 제공하는 일이 없습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. 쿠키(Cookie)의 사용</h2>
              <p className="mb-2">
                본 서비스는 사용자 경험 개선을 위해 쿠키를 사용할 수 있습니다.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>쿠키의 사용 목적: 사이트 방문 통계 분석</li>
                <li>쿠키의 설치/운영 및 거부: 브라우저 설정에서 쿠키 허용 여부를 선택할 수 있습니다</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. 개인정보 보호책임자</h2>
              <p className="mb-2">
                본 서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
                개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
                아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="text-sm">
                  개인정보 보호 관련 문의사항이 있으시면 GitHub 저장소의 Issues를 통해 문의해 주시기 바랍니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. 개인정보 처리방침 변경</h2>
              <p>
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
                변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>

            <section className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>시행일자:</strong> 2024년 1월 1일
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
