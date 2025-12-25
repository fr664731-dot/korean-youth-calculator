'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: '청년도약계좌란 무엇인가요?',
    answer: '청년도약계좌는 만 19세부터 34세까지의 청년을 대상으로 하는 정부 지원 적금 상품입니다. 매월 최대 70만원까지 납입할 수 있으며, 5년간 유지 시 정부 기여금과 비과세 혜택을 받을 수 있습니다. 2025년 1월 개정안에 따르면, 소득 수준에 따라 월 최대 33,000원(연 소득 2,400만원 이하)부터 21,000원(연 소득 6,000만원 이하)까지 정부 기여금을 받을 수 있습니다. 5년 만기 시 최대 5,000만원 이상의 목돈을 마련할 수 있어 청년들의 자산 형성에 큰 도움이 됩니다.'
  },
  {
    question: '청년도약계좌 가입 조건은 어떻게 되나요?',
    answer: '청년도약계좌 가입을 위해서는 몇 가지 조건을 충족해야 합니다. 첫째, 만 19세 이상 34세 이하의 청년이어야 합니다(병역 이행 기간은 최대 6년까지 연장 가능). 둘째, 개인소득이 연 7,500만원 이하여야 합니다. 셋째, 가구소득이 중위소득 180% 이하여야 합니다. 넷째, 금융소득종합과세 대상자는 제외됩니다. 또한 직전 3개년도 중 1회 이상 금융소득종합과세 대상자였던 경우에도 가입이 제한됩니다. 가입 시 소득 증빙 서류와 가구원 확인 서류가 필요하며, 은행 방문 또는 온라인으로 신청할 수 있습니다.'
  },
  {
    question: '정부 기여금은 어떻게 계산되나요?',
    answer: '2025년 1월 개정안에 따라 정부 기여금은 소득 구간별로 월 최대 한도가 정해져 있습니다. 연 소득 2,400만원 이하인 경우 월 최대 33,000원, 2,400만원 초과~3,600만원 이하는 29,000원, 3,600만원 초과~4,800만원 이하는 25,000원, 4,800만원 초과~6,000만원 이하는 21,000원을 받을 수 있습니다. 6,000만원 초과~7,500만원 이하 구간은 정부 기여금이 지급되지 않습니다. 예를 들어, 연 소득이 2,000만원이고 매월 70만원을 납입하는 경우, 매월 33,000원의 정부 기여금을 받아 5년간 총 198만원의 추가 지원을 받게 됩니다.'
  },
  {
    question: '청년 월세 특별지원은 누가 받을 수 있나요?',
    answer: '청년 월세 특별지원은 주거비 부담이 큰 청년들을 위한 정부 지원 정책입니다. 만 19세부터 34세까지의 무주택 청년이 대상이며, 본인과 부모 모두 무주택자여야 합니다. 소득 요건으로는 청년 가구 소득이 중위소득 60% 이하여야 하는데, 2025년 기준 1인 가구의 경우 월 소득 약 140만원 이하가 해당됩니다. 또한 보증금 5천만원 이하, 월세 60만원 이하의 주택에 거주해야 하며, 임대차계약서상 임차인으로 등록되어 있어야 합니다. 지원 금액은 월 최대 20만원이며, 최대 12개월간 총 240만원을 지원받을 수 있습니다. 복지로 웹사이트나 주민센터를 통해 신청할 수 있습니다.'
  },
  {
    question: '중도 해지하면 어떻게 되나요?',
    answer: '청년도약계좌를 5년 만기 전에 중도 해지하는 경우, 받았던 혜택의 일부를 반환해야 할 수 있습니다. 가입 후 3년 미만에 해지하면 정부 기여금 전액과 이자소득에 대한 비과세 혜택을 반환해야 합니다. 3년 이상 5년 미만에 해지하는 경우에는 정부 기여금의 일부만 반환하면 되며, 비과세 혜택은 유지됩니다. 다만, 질병, 사망, 해외이주, 천재지변 등 불가피한 사유로 해지하는 경우에는 예외가 인정될 수 있습니다. 따라서 가입 전에 5년간 유지할 수 있는지 신중하게 고려해야 하며, 월 납입액도 본인의 경제 상황에 맞게 설정하는 것이 중요합니다.'
  },
  {
    question: '이 계산기의 결과는 정확한가요?',
    answer: '본 계산기는 2025년 1월 기준 정부 정책을 반영하여 제작되었으며, 최대한 정확한 계산을 제공하기 위해 노력하고 있습니다. 그러나 실제 금융 상품 가입 시 금리, 정부 기여금, 세제 혜택 등은 가입 시점의 정책과 개인의 상황에 따라 달라질 수 있습니다. 또한 정부 정책 변경, 금융기관별 상품 조건 차이, 개인의 소득 변동 등으로 인해 실제 수령액이 계산 결과와 다를 수 있습니다. 따라서 본 계산기의 결과는 참고용으로만 사용하시고, 실제 가입 전에는 반드시 해당 금융기관이나 정부기관에 문의하여 정확한 정보를 확인하시기 바랍니다. 복지로(www.bokjiro.go.kr)나 금융감독원(www.fss.or.kr)에서 공식 정보를 확인할 수 있습니다.'
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-primary-600" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">자주 묻는 질문</h2>
          <p className="text-gray-600 text-sm md:text-base">
            청년 정책 금융에 대해 궁금한 점을 확인해보세요
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 md:p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-sm md:text-base text-gray-700 text-center">
            <strong className="text-primary-600">💡 더 궁금한 점이 있으신가요?</strong>
            <br className="md:hidden" />
            <span className="text-gray-600"> 복지로(</span>
            <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
              www.bokjiro.go.kr
            </a>
            <span className="text-gray-600">)에서 더 자세한 정보를 확인하실 수 있습니다.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
