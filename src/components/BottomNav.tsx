'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calculator, Wallet, BarChart3 } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: '홈' },
    { href: '/compare', icon: BarChart3, label: '비교' },
    { href: '/calculator/youth-jump', icon: Calculator, label: '도약계좌' },
    { href: '/calculator/rent-support', icon: Wallet, label: '월세지원' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive 
                  ? 'text-primary-600' 
                  : 'text-gray-500 active:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
