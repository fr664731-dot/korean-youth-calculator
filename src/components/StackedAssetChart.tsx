'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface StackedAssetChartProps {
  data: {
    year: number
    myDeposit: number
    governmentContribution: number
    interest: number
  }[]
}

export default function StackedAssetChart({ data }: StackedAssetChartProps) {
  const formatYAxis = (value: number) => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(0)}천만`
    if (value >= 10000) return `${(value / 10000).toFixed(0)}만`
    return value.toString()
  }

  const formatTooltip = (value: number) => {
    return new Intl.NumberFormat('ko-KR').format(value) + '원'
  }

  return (
    <div className="space-y-4">
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="year" 
              tickFormatter={(value) => `${value}년차`}
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              tickFormatter={formatYAxis}
              stroke="#6b7280"
              fontSize={12}
            />
            <Tooltip 
              formatter={(value: number) => formatTooltip(value)}
              labelFormatter={(label) => `${label}년차`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="rect"
              formatter={(value) => {
                const labels: { [key: string]: string } = {
                  myDeposit: '내 원금',
                  governmentContribution: '정부 지원금',
                  interest: '이자 수익'
                }
                return labels[value] || value
              }}
            />
            <Bar 
              dataKey="myDeposit" 
              stackId="a" 
              fill="#3b82f6" 
              name="내 원금"
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="governmentContribution" 
              stackId="a" 
              fill="#10b981" 
              name="정부 지원금"
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="interest" 
              stackId="a" 
              fill="#f59e0b" 
              name="이자 수익"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm text-gray-500 bg-blue-50 py-2 px-4 rounded-lg">
        ℹ️ 이 결과는 2025년 1월 개정안 기준입니다
      </p>
    </div>
  )
}
