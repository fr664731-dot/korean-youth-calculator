'use client'

import Link from 'next/link'
import { Calculator } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Calculator className="w-7 h-7 md:w-8 md:h-8 text-primary-600 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg md:text-xl text-gray-900">청년금융계산기</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">홈</Link>
            <Link href="/compare" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">정책비교</Link>
            <Link href="/calculator/youth-jump" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">청년도약계좌</Link>
            <Link href="/calculator/rent-support" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">월세지원</Link>
            <Link href="/guide" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">정책가이드</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
