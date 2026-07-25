import { ClipboardCheck, Building2, Wallet, UtensilsCrossed, PackageCheck } from 'lucide-react'

const STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Villa inspection & requirements',
    desc: 'We check your villa layout, kitchen access, power, serving space, and event timing so we know exactly what the setup needs.',
  },
  {
    icon: Building2,
    title: 'Villa management coordination',
    desc: 'We handle logistics directly with your villa manager — access, loading, parking, and house rules — so you do not have to.',
  },
  {
    icon: Wallet,
    title: 'Confirm menu & 50% deposit',
    desc: 'Once the menu, guest count, and event details are agreed, a 50% deposit locks your date. The remaining 50% is due the day before the event.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Prep & execution',
    desc: 'We source ingredients, prep, cook, deliver, set up, serve, and clean up — everything is managed end to end.',
  },
  {
    icon: PackageCheck,
    title: 'Equipment check',
    desc: 'We identify any missing equipment and arrange extras if needed. Additional items are quoted clearly before we proceed.',
  },
]

export default function BookingProcess() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Booking Flow
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            How Booking Works
          </h2>
          <p className="text-[#4A4745]">
            From first message to final cleanup, we handle the details so you can focus on your guests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-5 relative">
              <span className="absolute top-4 right-4 text-[#E8E6E3] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <step.icon className="w-7 h-7 text-[#C5A028] mb-4" />
              <h3 className="font-medium text-sm mb-2">{step.title}</h3>
              <p className="text-xs text-[#4A4745] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
