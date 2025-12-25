import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-white font-bold mb-3">청년금융계산기</h3>
            <p className="text-sm">
              청년 정책 금융 상품의 예상 수익을 쉽게 계산할 수 있는 서비스입니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-3">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculator/youth-jump" className="hover:text-white transition-colors">
                  청년도약계좌 계산기
                </Link>
              </li>
              <li>
                <Link href="/calculator/rent-support" className="hover:text-white transition-colors">
                  월세 특별지원 확인기
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-3">정책 및 약관</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm mb-2">
            © 2024 청년금융계산기. 본 계산기는 참고용이며, 실제 금액은 금융기관에서 확인하세요.
          </p>
          <p className="text-xs text-gray-500">
            정부 정책 변경에 따라 계산 결과가 달라질 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
