interface TaxFooterProps {
  className?: string
}

export default function TaxFooter({ className = '' }: TaxFooterProps) {
  return (
    <div className={`text-center text-xs text-[#4A4745]/80 ${className}`}>
      <p>Prices shown are estimates. Final quote includes 10% service charge and 11% VAT.</p>
      <p className="mt-1">Normal groceries are included. Premium upgrades (lobster, imported beef, oysters, extra live stations) quoted separately. 50% deposit to confirm.</p>
    </div>
  )
}
