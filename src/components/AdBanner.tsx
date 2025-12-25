'use client'

interface AdBannerProps {
  className?: string
  slot?: string // 애드센스 슬롯 ID (나중에 사용)
}

export default function AdBanner({ className = '', slot }: AdBannerProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* 애드센스 코드를 여기에 넣으면 됩니다 */}
      <div className="w-full min-h-[100px] md:min-h-[90px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
        <div className="text-center text-gray-400 px-4">
          <p className="text-sm font-medium mb-1">광고 추천 영역</p>
          <p className="text-xs">Advertisement</p>
        </div>
      </div>
      
      {/* 애드센스 코드 예시 (주석 처리)
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      */}
    </div>
  )
}
