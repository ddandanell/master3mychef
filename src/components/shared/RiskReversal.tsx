import { ShieldCheck, RefreshCw, Clock, Wallet, MessageCircle, UserCheck, Umbrella, FileCheck } from 'lucide-react'

export interface RiskReversalItem {
  icon: typeof ShieldCheck
  label: string
  desc: string
}

export interface RiskReversalProps {
  items: RiskReversalItem[]
  dark?: boolean
  className?: string
}

const defaultItems: RiskReversalItem[] = [
  { icon: ShieldCheck, label: 'Same-day confirmation', desc: 'Or your money back' },
  { icon: RefreshCw, label: 'Chef replacement guarantee', desc: 'Within 2 hours or 100% refund' },
]

export default function RiskReversal({ items = defaultItems, dark = false, className = '' }: RiskReversalProps) {
  const bgClass = dark ? 'bg-[#0A0A0A]' : 'bg-white'
  const borderClass = dark ? 'border-[#C5A028]/20' : 'border-[#E8E6E3]'
  const textClass = dark ? 'text-white' : 'text-[#1A1A1A]'
  const mutedClass = dark ? 'text-white/[60%]' : 'text-[#4A4745]'
  const iconBg = dark ? 'bg-[#C5A028]/10' : 'bg-[#6B8E5A]/10'
  const iconColor = dark ? 'text-[#C5A028]' : 'text-[#6B8E5A]'

  return (
    <div className={`${bgClass} border-y ${borderClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {items.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <div className={`${iconBg} rounded-xl p-2.5 shrink-0`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div>
                <p className={`text-sm font-semibold ${textClass}`}>{label}</p>
                <p className={`text-xs ${mutedClass} mt-0.5`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Pre-configured page-specific presets ── */

export function FineDiningRiskReversal({ dark = true, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <RiskReversal
      dark={dark}
      className={className}
      items={[
        { icon: RefreshCw, label: 'Satisfaction guarantee', desc: 'Not satisfied? We refund 50% — no questions asked' },
        { icon: Clock, label: '50% deposit secures your date', desc: 'Balance due the day before your event' },
      ]}
    />
  )
}

export function CateringRiskReversal({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <RiskReversal
      dark={dark}
      className={className}
      items={[
        { icon: ShieldCheck, label: 'Chef, staff & equipment guaranteed', desc: 'Or we refund your deposit' },
        { icon: Umbrella, label: 'Weather contingency plan', desc: 'Included for all outdoor events' },
      ]}
    />
  )
}

export function EventsRiskReversal({ dark = true, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <RiskReversal
      dark={dark}
      className={className}
      items={[
        { icon: UserCheck, label: 'Dedicated event producer', desc: 'One point of contact from planning to cleanup' },
        { icon: FileCheck, label: 'Full liability insurance', desc: 'For events up to 200 guests' },
      ]}
    />
  )
}

export function StaffingRiskReversal({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <RiskReversal
      dark={dark}
      className={className}
      items={[
        { icon: Clock, label: '48-hour placement guarantee', desc: 'Or we waive the first month fee' },
        { icon: RefreshCw, label: '90-day replacement guarantee', desc: 'If the match is not right, we find another' },
      ]}
    />
  )
}

export function ContactRiskReversal({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <RiskReversal
      dark={dark}
      className={className}
      items={[
        { icon: Wallet, label: 'No hidden fees', desc: 'Tax and service stated upfront — nothing added after you book' },
        { icon: MessageCircle, label: 'WhatsApp response within 1 hour', desc: 'During business hours' },
      ]}
    />
  )
}
