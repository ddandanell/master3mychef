import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

interface CateringPackageCardProps {
  image: string
  title: string
  price: string
  description: string
  includes?: string[]
  minGuests?: string
  href?: string
  cta?: string
  accent?: string
}

export default function CateringPackageCard({
  image,
  title,
  price,
  description,
  includes,
  minGuests,
  href,
  cta = 'View details',
  accent = '#6B8E5A',
}: CateringPackageCardProps) {
  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { to: href, className: 'group block' } : { className: 'block' }

  return (
    <Wrapper {...(wrapperProps as any)} className={`${wrapperProps.className} bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all duration-300 ${href ? 'hover:border-[#6B8E5A]' : ''}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {minGuests && (
          <span
            className="absolute top-3 left-3 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
            style={{ background: accent }}
          >
            {minGuests}
          </span>
        )}
      </div>
      <div className="p-5 md:p-6">
        <h3
          className="text-xl md:text-2xl mb-2 text-[#1A1A1A]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p className="text-[#6B8E5A] font-semibold text-lg mb-3">{price}</p>
        <p className="text-[#4A4745] text-sm mb-4 leading-relaxed">{description}</p>

        {includes && includes.length > 0 && (
          <div className="space-y-2 mb-5">
            {includes.slice(0, 4).map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: accent }} />
                <span>{item}</span>
              </div>
            ))}
            {includes.length > 4 && (
              <p className="text-xs text-[#4A4745]/60 pl-6">+{includes.length - 4} more</p>
            )}
          </div>
        )}

        {href && (
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors"
            style={{ color: accent }}
          >
            {cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </Wrapper>
  )
}
