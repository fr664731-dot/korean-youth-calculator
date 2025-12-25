'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, CheckCircle, XCircle, ExternalLink, AlertCircle } from 'lucide-react'
import AdBanner from './AdBanner'

interface CheckResult {
  isEligible: boolean
  message: string
  details: string[]
}

export default function RentSupportChecker() {
  const [age, setAge] = useState<string>('25')
  const [hasHome, setHasHome] = useState<string>('no')
  const [monthlyIncome, setMonthlyIncome] = useState<string>('1200000')
  const [result, setResult] = useState<CheckResult | null>(null)

  const checkEligibility = () => {
    const ageNum = parseInt(age) || 0
    const incomeNum = parseInt(monthlyIncome) || 0
    const isHomeless = hasHome === 'no'

    // 2025년 기준 1인 가구 중위소득 60%: 약 140만원
    const incomeLimit = 1400000

    const isAgeEligible = ageNum >= 19 && ageNum <= 34
    const isIncomeEligible = incomeNum <= incomeLimit
    const isHomelessEligible = isHomeless

    const isEligible = isAgeEligible && isIncomeEligible && isHomelessEligible

    const details: string[] = []
    if (!isAgeEligible) details.push('❌ 연령 조건 미충족 (만 19~34세)')
    else details.push('✅ 연령 조건 충족')
    
    if (!isHomelessEligible) details.push('❌ 무주택 조건 미충족')
    else details.push('✅ 무주택 조건 충족')
    
    if (!isIncomeEligible) details.push(`❌ 소득 조건 미충족 (중위소득 60% 이하: ${(incomeLimit / 10000).toFixed(0)}만원 이하)`)
    else details.push('✅ 소득 조건 충족')

    setResult({
      isEligible,
      message: isEligible 
        ? '축하합니다! 청년 월세 특별지원 대상자입니다.' 
        : '죄송합니다. 현재 조건으로는 지원 대상이 아닙니다.',
      details
    })
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Home className="w-6 h-6 text-primary-600" />
          청년 월세 특별지원 자격 확인기
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">나이 (만 나이)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-field"
              placeholder="예: 25"
              min="18"
              max="40"
            />
            <p className="text-xs text-gray-500 mt-1">만 19세 ~ 34세 청년이 대상입니다</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">거주 형태</label>
            <select value={hasHome} onChange={(e) => setHasHome(e.target.value)} className="select-field">
              <option value="no">무주택 (전월세 거주)</option>
              <option value="yes">주택 소유</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">본인 및 부모님이 무주택자여야 합니다</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">월 소득 (원)</label>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="input-field"
              placeholder="예: 1200000"
              min="0"
              step="100000"
            />
            <p className="text-xs text-gray-500 mt-1">
              2025년 기준 1인 가구 중위소득 60%: 약 140만원 이하
            </p>
          </div>
        </div>

        <button onClick={checkEligibility} className="btn-primary w-full mt-6">
          자격 확인하기
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className={`card ${result.isEligible ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200'}`}
            >
              <div className="flex items-start gap-3 mb-4">
                {result.isEligible ? (
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-gray-500 flex-shrink-0" />
                )}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{result.message}</h3>
                  <div className="space-y-1">
                    {result.details.map((detail, index) => (
                      <p key={index} className="text-sm text-gray-700">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>

              {result.isEligible && (
                <div className="mt-6 p-4 bg-white rounded-2xl border border-green-200 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary-600" />
                    지원 내용
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">•</span>
                      <span><strong>지원 금액:</strong> 월 최대 20만원</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">•</span>
                      <span><strong>지원 기간:</strong> 총 12개월 (최대 240만원)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">•</span>
                      <span><strong>지원 방식:</strong> 월세 계좌로 직접 입금</span>
                    </li>
                  </ul>

                  <a
                    href="https://www.bokjiro.go.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 active:scale-[0.98] transition-all text-sm font-medium shadow-sm"
                  >
                    복지로에서 신청하기
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {!result.isEligible && (
                <div className="mt-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-600">
                    다른 청년 지원 정책도 확인해보세요. 청년도약계좌, 청년희망적금 등 다양한 지원 제도가 있습니다.
                  </p>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <AdBanner className="my-4" slot="rent-result-banner" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
