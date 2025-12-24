'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface AssetChartProps {
  data: { month: number; amount: number }[]
}

export default function AssetChart({ data }: AssetChartProps) {
  const formatYAxis = (value: number) => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(0)}천만`
    if (value >= 10000) return `${(value / 10000).toFixed(0)}만`
    return value.toString()
  }

  const formatTooltip = (value: number) => new Intl.NumberFormat('ko-KR').format(value) + '원'

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tickFormatter={(v) => `${v}개월`} stroke="#6b7280" fontSize={12} />
          <YAxis tickFormatter={formatYAxis} stroke="#6b7280" fontSize={12} />
          <Tooltip 
            formatter={(value: number) => [formatTooltip(value), '예상 자산']}
            labelFormatter={(label) => `${label}개월 후`}
            contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Line type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={3} dot={{ fill: '#2563eb', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
