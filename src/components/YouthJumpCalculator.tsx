'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Wallet, Gift } from 'lucide-react'
import AssetChart from './AssetChart'
import StackedAssetChart from './StackedAssetChart'

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
  { value: '2400', label: '2,400만원 이하', maxMonthlyContribution: 33000 },
  { value: '3600', label: '2,400만원 초과 ~ 3,600만원 이하', maxMonthlyContribution: 29000 },
  { value: '4800', label: '3,600만원 초과 ~ 4,800만원 이하', maxMonthlyContribution: 25000 },
  { value: '6000', label: '4,800만원 초과 ~ 6,000만원 이하', maxMonthlyContribution: 21000 },
  { value: '7500', label: '6,000만원 초과 ~ 7,500만원 이하', maxMonthlyContribution: 0 },
]

const INTEREST_RATE = 0.045

export default function YouthJumpCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>('700000')
  const [incomeLevel, setIncomeLevel] = useState<string>('2400')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculateResult = () => {
    const deposit = parseInt(monthlyDeposit) || 0
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
    
    // 2025년 개정안: 월 납입액 전체에 대해 정부 기여금 매칭 (월 최대 기여금 한도 적용)
    for (let month = 1; month <= months; month++) {
      totalDeposit += deposit
      governmentContribution += maxMonthlyContribution
      const currentTotal = totalDeposit + governmentContribution
      const compoundedAmount = currentTotal * Math.pow(1 + INTEREST_RATE / 12, month)
      
      if (month % 6 === 0 || month === months) {
        monthlyData.push({ month, amount: Math.round(compoundedAmount) })
      }
      
      // 연도별 데이터 계산 (12개월마다)
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
  }

  const formatCurrency = (value: number) => new Intl.NumberFormat('ko-KR').format(value)

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="card">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <Calculator className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
          청년도약계좌 계산기
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">월 납입액 (원)</label>
            <input type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)}
              className="input-field" placeholder="최대 70만원" min="0" max="700000" step="10000" />
            <p className="text-xs text-gray-500 mt-1">최소 1,000원 ~ 최대 700,000원</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">연 소득 수준</label>
            <select value={incomeLevel} onChange={(e) => setIncomeLevel(e.target.value)} className="select-field">
              {INCOME_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">소득에 따라 정부 기여금이 달라집니다</p>
          </div>
        </div>

        <button onClick={calculateResult} className="btn-primary w-full mt-6">계산하기</button>
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
              className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-100"
            >
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">5년 후 예상 만기 금액</h3>
              <p className="text-3xl md:text-5xl font-bold text-primary-600 mb-4 md:mb-6">{formatCurrency(result.totalAmount)}원</p>
              
              <div className="grid grid-cols-3 gap-2 md:gap-4">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="card"
            >
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">자산 증가 추이</h3>
              <AssetChart data={result.monthlyData} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="card"
            >
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">연도별 누적 자산 변화</h3>
              <StackedAssetChart data={result.yearlyData} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
