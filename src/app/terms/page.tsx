import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '이용약관 - 청년금융계산기',
  description: '청년금융계산기의 이용약관입니다.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-3 md:px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>

        <div className="card">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">이용약관</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제1조 (목적)</h2>
              <p>
                본 약관은 청년금융계산기(이하 "본 서비스")가 제공하는 모든 서비스의 이용조건 및 절차, 
                이용자와 본 서비스의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제2조 (정의)</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>"서비스"</strong>란 청년 정책 금융 상품의 예상 수익을 계산할 수 있는 
                  온라인 계산기 서비스를 의미합니다.
                </li>
                <li>
                  <strong>"이용자"</strong>란 본 서비스에 접속하여 본 약관에 따라 
                  본 서비스가 제공하는 서비스를 이용하는 자를 의미합니다.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제3조 (약관의 효력 및 변경)</h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</li>
                <li>
                  본 서비스는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며, 
                  약관이 변경되는 경우 지체 없이 공지합니다.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제4조 (서비스의 제공)</h2>
              <p className="mb-2">본 서비스는 다음과 같은 서비스를 제공합니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>청년도약계좌 예상 수익 계산 서비스</li>
                <li>청년 월세 특별지원 자격 확인 서비스</li>
                <li>기타 청년 정책 금융 관련 정보 제공</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제5조 (서비스의 중단)</h2>
              <p className="mb-2">
                본 서비스는 다음 각 호에 해당하는 경우 서비스 제공을 일시적으로 중단할 수 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>시스템 정기점검, 서버의 증설 및 교체, 네트워크의 불안정 등의 시스템 운영상 필요한 경우</li>
                <li>정전, 서비스 설비의 장애, 서비스 이용폭주 등으로 정상적인 서비스 제공이 불가능한 경우</li>
                <li>기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제6조 (이용자의 의무)</h2>
              <p className="mb-2">이용자는 다음 행위를 하여서는 안 됩니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>서비스 이용 신청 또는 변경 시 허위내용 등록</li>
                <li>타인의 정보 도용</li>
                <li>본 서비스의 정보를 무단으로 변경</li>
                <li>본 서비스가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>본 서비스 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제7조 (면책조항)</h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  본 서비스는 계산 결과의 정확성을 보장하지 않으며, 
                  계산 결과는 참고용으로만 사용되어야 합니다.
                </li>
                <li>
                  실제 금융 상품 가입 및 지원금 수령은 해당 금융기관 및 정부기관의 
                  심사 기준에 따라 달라질 수 있습니다.
                </li>
                <li>
                  본 서비스는 정부 정책 변경으로 인한 계산 결과의 차이에 대해 책임지지 않습니다.
                </li>
                <li>
                  본 서비스는 천재지변 또는 이에 준하는 불가항력으로 인하여 
                  서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제8조 (저작권)</h2>
              <p>
                본 서비스가 작성한 저작물에 대한 저작권 기타 지적재산권은 본 서비스에 귀속합니다. 
                이용자는 본 서비스를 이용함으로써 얻은 정보를 본 서비스의 사전 승낙 없이 
                복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 
                제3자에게 이용하게 하여서는 안 됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">제9조 (분쟁해결)</h2>
              <p>
                본 약관에 명시되지 않은 사항은 전기통신사업법 등 관계법령과 상관습에 따릅니다. 
                서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 
                대한민국 법원을 관할 법원으로 합니다.
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
