'use client'

import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

interface KakaoShareButtonProps {
  totalAmount: number
  calculatorType: 'youth-jump' | 'rent-support'
}

declare global {
  interface Window {
    Kakao: any
  }
}

export default function KakaoShareButton({ totalAmount, calculatorType }: KakaoShareButtonProps) {
  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('YOUR_JAVASCRIPT_KEY') // 나중에 실제 키로 교체
    }
  }, [])

  const handleKakaoShare = () => {
    if (!window.Kakao) {
      alert('카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.')
      return
    }

    const formattedAmount = new Intl.NumberFormat('ko-KR').format(totalAmount)
    
    const messages = {
      'youth-jump': {
        title: '청년도약계좌 계산 결과',
        description: `5년 후 ${formattedAmount}원 받을 수 있어요! 🎉\n너도 청년도약계좌 이만큼 받을 수 있대! 여기서 확인해봐`,
        imageUrl: 'https://korean-youth-calculator.vercel.app/og-image.png',
        link: 'https://korean-youth-calculator.vercel.app/calculator/youth-jump',
      },
      'rent-support': {
        title: '청년 월세 지원 확인 결과',
        description: '월 최대 20만원, 12개월 지원 가능! 💰\n너도 월세 지원 받을 수 있는지 확인해봐',
        imageUrl: 'https://korean-youth-calculator.vercel.app/og-image.png',
        link: 'https://korean-youth-calculator.vercel.app/calculator/rent-support',
      },
    }

    const message = messages[calculatorType]

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: message.title,
        description: message.description,
        imageUrl: message.imageUrl,
        link: {
          mobileWebUrl: message.link,
          webUrl: message.link,
        },
      },
      buttons: [
        {
          title: '계산해보기',
          link: {
            mobileWebUrl: message.link,
            webUrl: message.link,
          },
        },
      ],
    })
  }

  return (
    <button
      onClick={handleKakaoShare}
      className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-2xl hover:bg-yellow-500 active:scale-[0.98] transition-all shadow-sm"
    >
      <MessageCircle className="w-5 h-5" />
      카카오톡으로 공유하기
    </button>
  )
}
