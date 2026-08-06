import { Info } from 'lucide-react'

interface PriceDisclaimerProps {
  className?: string
  showIcon?: boolean
}

/**
 * PriceDisclaimer
 *
 * Displays a consistent notice that published rates are ++ (tax and service
 * charge added) and that every quote is confirmed as a fixed, itemised total.
 * Wording must never call published rates "estimates" — transparent fixed
 * pricing is the site's core trust promise (see siteFacts / D-035).
 * Use this component anywhere prices are shown on the website.
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
      Published rates are ++ — 10% service charge and 11% government tax are
      added to the listed price. Your quote is always confirmed as a fixed,
      itemised all-in total before you commit.
    </p>
  )
}
