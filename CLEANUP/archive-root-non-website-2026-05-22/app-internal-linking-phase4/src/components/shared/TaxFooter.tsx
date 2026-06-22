interface TaxFooterProps {
  className?: string
}

export default function TaxFooter({ className = '' }: TaxFooterProps) {
  return (
    <div className={`text-center text-xs text-[#4A4745]/60 ${className}`}>
      <p>Prices shown are estimates. Final quote includes 10% service charge and 11% VAT.</p>
      <p className="mt-1">Groceries billed at cost — no markup. 50% deposit to confirm.</p>
    </div>
  )
}
