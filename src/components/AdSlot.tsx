interface AdSlotProps {
  position: 'top' | 'bottom' | 'sidebar'
  className?: string
}

export default function AdSlot({ position, className = '' }: AdSlotProps) {
  const heightClass = position === 'sidebar' ? 'h-[250px]' : 'h-[90px] md:h-[100px]'
  
  return (
    <div className={`w-full ${heightClass} bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center ${className}`}>
      <div className="text-center text-gray-400">
        <p className="text-sm font-medium">광고 영역</p>
        <p className="text-xs">AD SLOT - {position.toUpperCase()}</p>
      </div>
    </div>
  )
}
