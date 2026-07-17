import { Plus } from 'lucide-react'

interface CateringAddOnCardProps {
  title: string
  price: string
  description?: string
  image?: string
}

export default function CateringAddOnCard({ title, price, description, image }: CateringAddOnCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#E8E6E3] p-4 md:p-5 hover:border-[#6B8E5A]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4">
      {image && (
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 hidden sm:block">
          <img src={image} alt={`${title} add-on for Bali villa catering by myCHEF`} width={64} height={64} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base">{title}</h4>
          <span className="text-[#6B8E5A] font-semibold text-sm whitespace-nowrap">{price}</span>
        </div>
        {description && <p className="text-xs text-[#4A4745]">{description}</p>}
      </div>
      <div className="w-8 h-8 rounded-full border border-[#E8E6E3] flex items-center justify-center flex-shrink-0 text-[#6B8E5A]">
        <Plus className="w-4 h-4" />
      </div>
    </div>
  )
}
