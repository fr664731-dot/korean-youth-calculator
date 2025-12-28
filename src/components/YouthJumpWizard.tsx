'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Wallet, Gift, ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react'
import AssetChart from './AssetChart'
import StackedAssetChart from './StackedAssetChart'
import AdBanner from './AdBanner'
import KakaoShareButton from './KakaoShareButton'

interface CalculationResult {
  totalDeposit: number
  governmentContribution: number
  interest: number
  totalAmount: number
  monthlyData: { month: number; amount: number }[]
  yearlyData: {
    year: number
    myDeposit: number
    governmentContribution: number
    interest: number
  }[]
}

const INCOME_LEVELS = [
  { value: '2400', label: '2,400만원 이하', maxMonthlyContribution: 33000, description: '월 최대 3.3만원 지원' },
  { value: '3600', label: '2,400만원 ~ 3,600만원', maxMonthlyContribution: 29000, description: '월 최대 2.9만원 지원' },
  { value: '4800', label: '3,600만원 ~ 4,800만원', maxMonthlyContribution: 25000, description: '월 최대 2.5만원 지원' },
  { value: '6000', label: '4,800만원 ~ 6,000만원', maxMonthlyContribution: 21000, description: '월 최대 2.1만원 지원' },
  { value: '7500', label: '6,000만원 ~ 7,500만원', maxMonthlyContribution: 0, description: '기여금 없음' },
]

const INTEREST_RATE = 0.045

export default function YouthJumpWizard() {
  const [step, setStep] = useState(1)
  const [monthlyDeposit, setMonthlyDeposit] = useState(700000)
  const [incomeLevel, setIncomeLevel] = useState('2400')
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [liveAmount, setLiveAmount] = useState(0)

  const calculateLiveAmount = (deposit: number, income: string) => {
    const selectedIncome = INCOME_LEVELS.find(i => i.value === income)
    const maxMonthlyContribution = selectedIncome?.maxMonthlyContribution || 0
    const months = 60
    const totalDeposit = deposit * months
    const governmentContribution = maxMonthlyContribution * months
    const totalWithoutInterest = totalDeposit + governmentContribution
    const interest = Math.round(totalWithoutInterest * Math.pow(1 + INTEREST_RATE / 12, months) - totalWithoutInterest)
    return totalDeposit + governmentContribution + interest
  }

  const handleDepositChange = (value: number) => {
    setMonthlyDeposit(value)
    setLiveAmount(calculateLiveAmount(value, incomeLevel))
  }

  const handleIncomeChange = (value: string) => {
    setIncomeLevel(value)
    setLiveAmount(calculateLiveAmount(monthlyDeposit, value))
  }

  const calculateResult = () => {
    const deposit = monthlyDeposit
    const selectedIncome = INCOME_LEVELS.find(i => i.value === incomeLevel)
    const maxMonthlyContribution = selectedIncome?.maxMonthlyContribution || 0
    const months = 60
    let totalDeposit = 0
    let governmentContribution = 0
    const monthlyData: { month: number; amount: number }[] = []
    const yearlyData: {
      year: number
      myDeposit: number
      governmentContribution: number
      interest: number
    }[] = []
    
    for (let month = 1; month <= months; month++) {
      totalDeposit += deposit
      governmentContribution += maxMonthlyContribution
      const currentTotal = totalDeposit + governmentContribution
      const compoundedAmount = currentTotal * Math.pow(1 + INTEREST_RATE / 12, month)
      
      if (month % 6 === 0 || month === months) {
        monthlyData.push({ month, amount: Math.round(compoundedAmount) })
      }
      
      if (month % 12 === 0) {
        const yearInterest = Math.round(compoundedAmount - currentTotal)
        yearlyData.push({
          year: month / 12,
          myDeposit: totalDeposit,
          governmentContribution: Math.round(governmentContribution),
          interest: yearInterest
        })
      }
    }
    
    const totalWithoutInterest = totalDeposit + governmentContribution
    const interest = Math.round(totalWithoutInterest * Math.pow(1 + INTEREST_RATE / 12, months) - totalWithoutInterest)

    setResult({
      totalDeposit,
      governmentContribution: Math.round(governmentContribution),
      interest,
      totalAmount: Math.round(totalDeposit + governmentContribution + interest),
      monthlyData,
      yearlyData,
    })
    setStep(3)
  }

  const formatCurrency = (value: number) => new Intl.NumberFormat('ko-KR').format(value)

  const nextStep = () => {
    if (step === 1) {
      setLiveAmount(calculateLiveAmount(monthlyDeposit, incomeLevel))
    }
    setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Progress Bar */}
      {step < 3 && (
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">진행 상황</span>
            <span className="text-sm font-bold text-primary-600">{step}/2</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 2) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: 월 납입액 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card"
          >
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                매달 얼마씩 저축하실 건가요?
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                최소 1,000원부터 최대 70만원까지 자유롭게 설정하세요
              </p>
            </div>

            <div className="mb-8">
              <div className="text-center mb-6">
                <motion.div
                  key={monthlyDeposit}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-4xl md:text-6xl font-bold text-primary-600 mb-2"
                >
                  {formatCurrency(monthlyDeposit)}원
                </motion.div>
                <p className="text-sm text-gray-500">월 납입액</p>
              </div>

              <input
                type="range"
                min="10000"
                max="700000"
                step="10000"
                value={monthlyDeposit}
                onChange={(e) => handleDepositChange(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${(monthlyDeposit / 700000) * 100}%, #e5e7eb ${(monthlyDeposit / 700000) * 100}%, #e5e7eb 100%)`
                }}
              />

              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>1만원</span>
                <span>70만원</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {[300000, 500000, 700000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleDepositChange(amount)}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    monthlyDeposit === amount
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {formatCurrency(amount)}원
                </button>
              ))}
            </div>

            <button onClick={nextStep} className="btn-primary w-full flex items-center justify-center gap-2">
              다음 단계
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Step 2: 소득 수준 */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="card">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    거의 다 왔어요!
                  </h2>
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  연 소득을 선택하면 정부 기여금을 정확히 알 수 있어요
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {INCOME_LEVELS.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => handleIncomeChange(level.value)}
                    className={`w-full p-4 rounded-2xl text-left transition-all ${
                      incomeLevel === level.value
                        ? 'bg-primary-600 text-white shadow-lg scale-[1.02]'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold mb-1">{level.label}</p>
                        <p className={`text-sm ${incomeLevel === level.value ? 'text-primary-100' : 'text-gray-600'}`}>
                          {level.description}
                        </p>
                      </div>
                      {incomeLevel === level.value && (
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={prevStep} className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  이전
                </button>
                <button onClick={calculateResult} className="btn-primary flex-1 flex items-center justify-center gap-2">
                  결과 보기
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Live Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">5년 후 예상 금액</p>
                  <motion.p
                    key={liveAmount}
                    initial={{ scale: 1.1, color: '#16a34a' }}
                    animate={{ scale: 1, color: '#16a34a' }}
                    className="text-2xl md:text-3xl font-bold"
                  >
                    {formatCurrency(liveAmount)}원
                  </motion.p>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                💡 소득 구간에 따라 정부 기여금이 달라져요
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Step 3: 결과 */}
        {step === 3 && result && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-100"
            >
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">계산 완료!</span>
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">5년 후 예상 만기 금액</h3>
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="text-4xl md:text-6xl font-bold text-primary-600 mb-2"
                >
                  {formatCurrency(result.totalAmount)}원
                </motion.p>
                <p className="text-sm text-gray-600">축하합니다! 🎉</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center p-3 md:p-4 bg-white rounded-2xl shadow-sm"
                >
                  <Wallet className="w-5 h-5 md:w-6 md:h-6 text-gray-600 mx-auto mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-xs text-gray-500">총 납입액</p>
                  <p className="font-bold text-xs md:text-base text-gray-900 mt-1">{formatCurrency(result.totalDeposit)}원</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center p-3 md:p-4 bg-white rounded-2xl shadow-sm"
                >
                  <Gift className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-xs text-gray-500">정부 기여금</p>
                  <p className="font-bold text-xs md:text-base text-green-600 mt-1">{formatCurrency(result.governmentContribution)}원</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center p-3 md:p-4 bg-white rounded-2xl shadow-sm"
                >
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mx-auto mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-xs text-gray-500">이자 수익</p>
                  <p className="font-bold text-xs md:text-base text-blue-600 mt-1">{formatCurrency(result.interest)}원</p>
                </motion.div>
              </div>

              <div className="flex justify-center mb-4">
                <KakaoShareButton totalAmount={result.totalAmount} calculatorType="youth-jump" />
              </div>

              <button
                onClick={() => setStep(1)}
                className="btn-secondary w-full"
              >
                다시 계산하기
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <AdBanner className="my-4" slot="result-banner" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="card"
            >
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">자산 증가 추이</h3>
              <AssetChart data={result.monthlyData} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="card"
            >
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">연도별 누적 자산 변화</h3>
              <StackedAssetChart data={result.yearlyData} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
          transition: all 0.2s;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.6);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
          transition: all 0.2s;
        }
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.6);
        }
      `}</style>
    </div>
  )
}
