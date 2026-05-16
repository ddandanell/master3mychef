import { CheckCircle2 } from 'lucide-react'

interface TrustRowProps {
  items: string[]
  dark?: boolean
  columns?: number
}

export default function TrustRow({ items, dark = false, columns = 5 }: TrustRowProps) {
  const textColor = dark ? 'text-white/[80%]' : 'text-[#4A4745]'
  const iconColor = dark ? 'text-[#C5A028]' : 'text-[#6B8E5A]'

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${Math.min(columns, 5)} gap-3 md:gap-4`}>
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2.5">
          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${iconColor}`} />
          <span className={`${textColor} text-sm`}>{item}</span>
        </div>
      ))}
    </div>
  )
}
