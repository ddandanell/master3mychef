import { Info } from 'lucide-react'

interface PriceDisclaimerProps {
  className?: string
  showIcon?: boolean
}

/**
 * PriceDisclaimer
 *
 * Displays a consistent notice that service charge and VAT are not included
 * in displayed prices but will be added to the final quote. Use this component
 * anywhere prices are shown on the website.
 */
export default function PriceDisclaimer({
  className = '',
  showIcon = true,
}: PriceDisclaimerProps) {
  return (
    <p
      className={`text-xs text-[#4A4745]/80 leading-relaxed ${className}`}
      aria-label="Pricing disclaimer"
    >
      {showIcon && (
        <Info className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5 text-[#8B6F1A]" />
      )}
      Prices shown are estimates and do not include service charge or VAT.
      Service charge (10%) and government tax (11%) will be added to your
      final quote.
    </p>
  )
}
