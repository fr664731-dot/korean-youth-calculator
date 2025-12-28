'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Wallet, Gift, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, AlertCircle, Users, Home, DollarSign } from 'lucide-react'

interface CalculationResult {
  totalDeposit: number
  governmentContribution: number
  interest: number
  totalAmount: number
  taxSaved: number
  isEligible: boolean
  regularSavingsAmount: number
  monthlyData: { month: number; amount: number }[]
  yearlyData: {
    year: number
    myDeposit: number
    governmentContribution: number
    interest: number
  }[]
}

const INCOME_LEVELS = [
  { value: '2400', label: '2,400만원 이하', maxMonthlyContribution: 33000 },
  { value: '3600', label: '2,400만원 ~ 3,600만원', maxMonthlyContribution: 29000 },
  { value: '4800', label: '3,600만원 ~ 4,800만원', maxMonthlyContribution: 25000 },
  { value: '6000', label: '4,800만원 ~ 6,000만원', maxMonthlyContribution: 21000 },
  { value: '7500', label: '6,000만원 ~ 7,500만원', maxMonthlyContribution: 0 },
]

// 2025년 기준 중위소득 250% (가구원 수별)
const MEDIAN_INCOME_250 = {
  1: 2765000,
  2: 4630000,
  3: 5960000,
  4: 7380000,
  5: 8700000,
  6: 10000000,
}

const INTEREST_RATE = 0.045
const REGULAR_SAVINGS_RATE = 0.05
const TAX_RATE = 0.154 // 이자소득세 15.4%

export default function AdvancedYouthJumpWizard() {
  const [step, setStep] = useState(1)
  const [age, setAge] = useState(25)
  const [hasMilitary, setHasMilitary] = useState(false)
  const [militaryYears, setMilitaryYears] = useState(2)
  const [annualIncome, setAnnualIncome] = useState(3600)
  const [householdMembers, setHouseholdMembers] = useState(1)
  const [householdIncome, setHouseholdIncome] = useState(4000000)
  const [monthlyDeposit, setMonthlyDeposit] = useState(700000)
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [isEligible, setIsEligible] = useState(true)
  const [eligibilityMessage, setEligibilityMessage] = useState('')

  // 실시간 가입 가능 여부 체크
  useEffect(() => {
    checkEligibility()
  }, [age, hasMilitary, militaryYears, annualIncome, householdMembers, householdIncome])

  const checkEligibility = () => {
    let eligible = true
    let message = ''

    // 나이 체크
    const effectiveAge = hasMilitary ? age - militaryYears : age
    if (effectiveAge > 34) {
      eligible = false
      message = '만 34세를 초과하여 가입할 수 없습니다.'
    } else if (age < 19) {
      eligible = false
      message = '만 19세 미만은 가입할 수 없습니다.'
    }

    // 개인소득 체크
    if (annualIncome > 7500) {
      eligible = false
      message = '개인 연소득이 7,500만원을 초과하여 가입할 수 없습니다.'
    }

    // 가구소득 체크
    const medianLimit = MEDIAN_INCOME_250[householdMembers as keyof typeof MEDIAN_INCOME_250] || 10000000
    if (householdIncome > medianLimit) {
      eligible = false
      message = `${householdMembers}인 가구 중위소득 250% (${(medianLimit / 10000).toFixed(0)}만원)를 초과하여 가입할 수 없습니다.`
    }

    if (eligible) {
      message = '✅ 청년도약계좌 가입 가능합니다!'
    }

    setIsEligible(eligible)
    setEligibilityMessage(message)
  }

  const calculateResult = () => {
    if (!isEligible) return

    const deposit = monthlyDeposit
    const incomeLevel = annualIncome <= 2400 ? '2400' : 
                       annualIncome <= 3600 ? '3600' :
                       annualIncome <= 4800 ? '4800' :
                       annualIncome <= 6000 ? '6000' : '7500'
    
    const selectedIncome = INCOME_LEVELS.find(i => i.value === incomeLevel)
    const maxMonthlyContribution = selectedIncome?.maxMonthlyContribution || 0
    const months = 60
    
    let totalDeposit = 0
    let governmentContribution = 0
    const monthlyData: { month: number; amount: number }[] = []
    const yearlyData: any[] = []

    
    // 청년도약계좌 계산
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
    const totalAmount = Math.round(totalDeposit + governmentContribution + interest)

    // 일반 적금 계산 (5% 금리, 세금 15.4%)
    let regularSavingsTotal = 0
    for (let month = 1; month <= months; month++) {
      regularSavingsTotal += deposit * Math.pow(1 + REGULAR_SAVINGS_RATE / 12, months - month + 1)
    }
    const regularInterest = regularSavingsTotal - (deposit * months)
    const regularTax = regularInterest * TAX_RATE
    const regularSavingsAmount = Math.round(regularSavingsTotal - regularTax)

    // 비과세 혜택으로 아낀 세금
    const youthJumpInterest = interest
    const taxSaved = Math.round(youthJumpInterest * TAX_RATE)

    setResult({
      totalDeposit,
      governmentContribution: Math.round(governmentContribution),
      interest,
      totalAmount,
      taxSaved,
      isEligible: true,
      regularSavingsAmount,
      monthlyData,
      yearlyData,
    })
    setStep(5)
  }

  const formatCurrency = (value: number) => new Intl.NumberFormat('ko-KR').format(value)
  const getChickenCount = (amount: number) => Math.floor(amount / 20000) // 치킨 1마리 = 2만원
  const getCoffeeCount = (amount: number) => Math.floor(amount / 5000) // 커피 1잔 = 5천원

  const nextStep = () => {
    if (step === 4 && !isEligible) {
      alert(eligibilityMessage)
      return
    }
    setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Progress Bar */}
      {step < 5 && (
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">진행 상황</span>
            <span className="text-sm font-bold text-primary-600">{step}/4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: 나이 및 병역 */}
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
                나이를 알려주세요
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                만 19세~34세 청년이 가입할 수 있어요
              </p>
            </div>

            <div className="mb-8">
              <div className="text-center mb-6">
                <motion.div
                  key={age}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-5xl md:text-7xl font-bold text-primary-600 mb-2"
                >
                  만 {age}세
                </motion.div>
              </div>

              <input
                type="range"
                min="15"
                max="40"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((age - 15) / 25) * 100}%, #e5e7eb ${((age - 15) / 25) * 100}%, #e5e7eb 100%)`
                }}
              />

              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>15세</span>
                <span>40세</span>
              </div>
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-2xl">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasMilitary}
                  onChange={(e) => setHasMilitary(e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded"
                />
                <span className="font-medium text-gray-900">병역 이행 경험이 있어요</span>
              </label>
              
              {hasMilitary && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    복무 기간 (최대 6년 인정)
                  </label>
                  <select
                    value={militaryYears}
                    onChange={(e) => setMilitaryYears(parseInt(e.target.value))}
                    className="select-field"
                  >
                    {[1, 2, 3, 4, 5, 6].map(year => (
                      <option key={year} value={year}>{year}년</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-600 mt-2">
                    💡 병역 기간만큼 나이 제한이 연장돼요 (최대 만 40세)
                  </p>
                </motion.div>
              )}
            </div>

            <button onClick={nextStep} className="btn-primary w-full flex items-center justify-center gap-2">
              다음 단계
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Step 2: 개인 연소득 */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card"
          >
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                개인 연소득을 알려주세요
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                총급여 7,500만원 이하면 가입 가능해요
              </p>
            </div>

            <div className="mb-8">
              <div className="text-center mb-6">
                <motion.div
                  key={annualIncome}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-4xl md:text-6xl font-bold text-primary-600 mb-2"
                >
                  {formatCurrency(annualIncome * 10000)}원
                </motion.div>
                <p className="text-sm text-gray-500">연 소득</p>
              </div>

              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${(annualIncome / 10000) * 100}%, #e5e7eb ${(annualIncome / 10000) * 100}%, #e5e7eb 100%)`
                }}
              />

              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0원</span>
                <span>1억원</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {[2400, 3600, 4800, 6000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setAnnualIncome(amount)}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    annualIncome === amount
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {formatCurrency(amount * 10000)}원
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button onClick={prevStep} className="btn-secondary flex-1 flex items-center justify-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                이전
              </button>
              <button onClick={nextStep} className="btn-primary flex-1 flex items-center justify-center gap-2">
                다음 단계
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}


        {/* Step 3: 가구원 수 및 가구 소득 */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="card">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  가구 정보를 알려주세요
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  가구 중위소득 250% 이하면 가입 가능해요
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  가구원 수
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setHouseholdMembers(num)}
                      className={`py-4 rounded-xl font-bold text-lg transition-all ${
                        householdMembers === num
                          ? 'bg-primary-600 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {num}인
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  가구 월 소득
                </label>
                <div className="text-center mb-4">
                  <motion.div
                    key={householdIncome}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-3xl md:text-5xl font-bold text-primary-600 mb-2"
                  >
                    {formatCurrency(householdIncome)}원
                  </motion.div>
                  <p className="text-sm text-gray-500">월 소득</p>
                </div>

                <input
                  type="range"
                  min="1000000"
                  max="15000000"
                  step="100000"
                  value={householdIncome}
                  onChange={(e) => setHouseholdIncome(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((householdIncome - 1000000) / 14000000) * 100}%, #e5e7eb ${((householdIncome - 1000000) / 14000000) * 100}%, #e5e7eb 100%)`
                  }}
                />

                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>100만원</span>
                  <span>1,500만원</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={prevStep} className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  이전
                </button>
                <button onClick={nextStep} className="btn-primary flex-1 flex items-center justify-center gap-2">
                  다음 단계
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 실시간 가입 가능 여부 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`card ${isEligible ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
            >
              <div className="flex items-start gap-3">
                {isEligible ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={`font-semibold mb-1 ${isEligible ? 'text-green-900' : 'text-red-900'}`}>
                    {isEligible ? '가입 가능' : '가입 불가'}
                  </p>
                  <p className={`text-sm ${isEligible ? 'text-green-700' : 'text-red-700'}`}>
                    {eligibilityMessage}
                  </p>
                  {isEligible && (
                    <p className="text-xs text-green-600 mt-2">
                      💡 {householdMembers}인 가구 중위소득 250%: {formatCurrency(MEDIAN_INCOME_250[householdMembers as keyof typeof MEDIAN_INCOME_250])}원
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Step 4: 월 납입 희망액 */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  마지막 단계예요!
                </h2>
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                매달 얼마씩 저축하실 건가요?
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
                onChange={(e) => setMonthlyDeposit(parseInt(e.target.value))}
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
                  onClick={() => setMonthlyDeposit(amount)}
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

            <div className="flex gap-3">
              <button onClick={prevStep} className="btn-secondary flex-1 flex items-center justify-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                이전
              </button>
              <button 
                onClick={calculateResult} 
                disabled={!isEligible}
                className={`flex-1 flex items-center justify-center gap-2 ${
                  isEligible 
                    ? 'btn-primary' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed py-3 px-6 rounded-2xl font-semibold'
                }`}
              >
                결과 보기
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}


        {/* Step 5: 결과 */}
        {step === 5 && result && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* 메인 결과 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-100"
            >
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">계산 완료!</span>
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">5년 후 예상 만기 금액</h3>
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="text-4xl md:text-6xl font-bold text-primary-600 mb-2"
                >
                  {formatCurrency(result.totalAmount)}원
                </motion.p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                <div className="text-center p-3 md:p-4 bg-white rounded-2xl shadow-sm">
                  <Wallet className="w-5 h-5 md:w-6 md:h-6 text-gray-600 mx-auto mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-xs text-gray-500">총 납입액</p>
                  <p className="font-bold text-xs md:text-base text-gray-900 mt-1">{formatCurrency(result.totalDeposit)}원</p>
                </div>
                <div className="text-center p-3 md:p-4 bg-white rounded-2xl shadow-sm">
                  <Gift className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-xs text-gray-500">정부 기여금</p>
                  <p className="font-bold text-xs md:text-base text-green-600 mt-1">{formatCurrency(result.governmentContribution)}원</p>
                </div>
                <div className="text-center p-3 md:p-4 bg-white rounded-2xl shadow-sm">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mx-auto mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-xs text-gray-500">이자 수익</p>
                  <p className="font-bold text-xs md:text-base text-blue-600 mt-1">{formatCurrency(result.interest)}원</p>
                </div>
              </div>

              <button onClick={() => setStep(1)} className="btn-secondary w-full">
                다시 계산하기
              </button>
            </motion.div>

            {/* 일반 적금 vs 청년도약계좌 비교 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                💰 일반 적금과 비교하면?
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">청년도약계좌</span>
                    <span className="text-lg font-bold text-primary-600">{formatCurrency(result.totalAmount)}원</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                    >
                      100%
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">일반 적금 (5% 금리)</span>
                    <span className="text-lg font-bold text-gray-600">{formatCurrency(result.regularSavingsAmount)}원</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(result.regularSavingsAmount / result.totalAmount) * 100}%` }}
                      transition={{ delay: 0.7, duration: 1 }}
                      className="bg-gradient-to-r from-gray-400 to-gray-500 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                    >
                      {Math.round((result.regularSavingsAmount / result.totalAmount) * 100)}%
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
                <p className="text-center text-lg font-bold text-green-700 mb-2">
                  🎉 {formatCurrency(result.totalAmount - result.regularSavingsAmount)}원 더 받아요!
                </p>
                <p className="text-center text-sm text-green-600">
                  일반 적금보다 {Math.round(((result.totalAmount - result.regularSavingsAmount) / result.regularSavingsAmount) * 100)}% 더 많은 금액이에요
                </p>
              </div>
            </motion.div>

            {/* 비과세 혜택 재미있게 표현 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                🎁 비과세 혜택으로 아낀 세금
              </h3>
              
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-orange-600 mb-2">
                  {formatCurrency(result.taxSaved)}원
                </p>
                <p className="text-sm text-gray-600">이자소득세 15.4% 면제</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl text-center">
                  <div className="text-4xl mb-2">🍗</div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{getChickenCount(result.taxSaved)}마리</p>
                  <p className="text-xs text-gray-600">치킨으로 환산</p>
                </div>
                <div className="p-4 bg-white rounded-2xl text-center">
                  <div className="text-4xl mb-2">☕</div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{getCoffeeCount(result.taxSaved)}잔</p>
                  <p className="text-xs text-gray-600">커피로 환산</p>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">
                💡 일반 적금이었다면 이만큼 세금으로 냈을 거예요!
              </p>
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
