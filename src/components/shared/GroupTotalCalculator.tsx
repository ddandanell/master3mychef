import { useState } from 'react'
import { Users } from 'lucide-react'
import { formatIDR } from './AllInPrice'

interface GroupTotalCalculatorProps {
  pricePerPerson: number
  minGuests?: number
  maxGuests?: number
  defaultGuests?: number
  showPlusPlus?: boolean
  label?: string
  accent?: string
  className?: string
}

export default function GroupTotalCalculator({
  pricePerPerson,
  minGuests = 5,
  maxGuests = 100,
  defaultGuests = 10,
  showPlusPlus = true,
  label = ' guests',
  accent = '#C5A028',
  className = '',
}: GroupTotalCalculatorProps) {
  const [guests, setGuests] = useState(defaultGuests)

  // Owner decree: never display a computed all-in (tax-inclusive) total.
  // This is the menu subtotal only — government tax and service charge are
  // stated separately below and are deliberately NOT added into this figure.
  const subtotalBeforeTax = pricePerPerson * guests

  return (
    <div className={`bg-white rounded-xl border border-[#E8E6E3] p-5 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-4 h-4" style={{ color: accent }} />
        <span className="text-sm font-medium text-[#1A1A1A]">Group total calculator</span>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#4A4745]">Guests</span>
          <span className="text-lg font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {guests}{label}
          </span>
        </div>
        <input
          type="range"
          aria-label="Number of guests"
          min={minGuests}
          max={maxGuests}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${accent} 0%, ${accent} ${((guests - minGuests) / (maxGuests - minGuests)) * 100}%, #E8E6E3 ${((guests - minGuests) / (maxGuests - minGuests)) * 100}%, #E8E6E3 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-[#4A4745]/80 mt-1">
          <span>{minGuests}</span>
          <span>{maxGuests}</span>
        </div>
      </div>

      <div className="border-t border-[#E8E6E3] pt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#1A1A1A]">Menu subtotal</span>
          <span className="text-xl font-semibold" style={{ color: accent, fontFamily: "'Playfair Display', serif" }}>
            {formatIDR(subtotalBeforeTax)}
          </span>
        </div>
        <p className="text-xs text-[#4A4745]/70 mt-1">
          {formatIDR(pricePerPerson)} × {guests}{label}
        </p>
        {showPlusPlus && (
          <p className="text-xs text-[#4A4745]/70 mt-2 leading-relaxed">
            <span className="font-medium text-[#1A1A1A]">Before tax and service.</span>{' '}
            11% government tax and 10% service charge are added to this subtotal on your final quote.
          </p>
        )}
      </div>
    </div>
  )
}
