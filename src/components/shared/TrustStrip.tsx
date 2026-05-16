import { MessageCircle, Wallet, Users, Sparkles } from 'lucide-react'

interface TrustStripProps {
  dark?: boolean
}

const items = [
  { icon: MessageCircle, label: 'Same-day WhatsApp', desc: 'Confirmation within the hour' },
  { icon: Wallet, label: '50% deposit only', desc: 'Balance due before event' },
  { icon: Users, label: '1 waiter per 10 guests', desc: 'Industry-standard service' },
  { icon: Sparkles, label: 'Full cleanup', desc: 'We pack up and leave' },
]

export default function TrustStrip({ dark = false }: TrustStripProps) {
  const bgClass = dark ? 'bg-[#0A0A0A]' : 'bg-white'
  const borderClass = dark ? 'border-[#C5A028]/20' : 'border-[#E8E6E3]'
  const textClass = dark ? 'text-white' : 'text-[#1A1A1A]'
  const mutedClass = dark ? 'text-white/[60%]' : 'text-[#4A4745]'
  const iconBg = dark ? 'bg-[#C5A028]/10' : 'bg-[#6B8E5A]/10'
  const iconColor = dark ? 'text-[#C5A028]' : 'text-[#6B8E5A]'

  return (
    <div className={`${bgClass} border-y ${borderClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
