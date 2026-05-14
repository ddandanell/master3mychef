import { Link } from 'react-router-dom'
import { MessageCircle, ChefHat, PartyPopper, Users, Briefcase, Wine } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from './SeoHead'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

const BOOKING_CARDS = [
  {
    label: 'Fine Dining',
    desc: 'Tasting menus, romantic dinners & chef’s tables',
    href: '/fine-dining',
    icon: ChefHat,
    accent: '#C5A028',
    waText: 'Hi myCHEF, I would like to book a fine dining evening.',
  },
  {
    label: 'Catering',
    desc: 'BBQ, buffet, drop-off & grazing tables',
    href: '/catering',
    icon: PartyPopper,
    accent: '#6B8E5A',
    waText: 'Hi myCHEF, I would like a catering quote.',
  },
  {
    label: 'Events',
    desc: 'Weddings, birthdays, corporate & retreats',
    href: '/events',
    icon: Users,
    accent: '#2C5F7C',
    waText: 'Hi myCHEF, I would like to book an event consultation.',
  },
  {
    label: 'In-Villa Service',
    desc: 'Waiters, butlers, bartenders & mixologists',
    href: '/in-villa-service',
    icon: Wine,
    accent: '#8B5A2B',
    waText: 'Hi myCHEF, I would like to hire service staff.',
  },
  {
    label: 'Staffing',
    desc: 'Long-term chefs, villa & household staff',
    href: '/staffing',
    icon: Briefcase,
    accent: '#C5A028',
    waText: 'Hi myCHEF, I would like to request candidate profiles.',
  },
]

export default function BookPage() {
  const canonical = `${SITE}/book`

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Book | Private Chef, Catering & Events Bali — myCHEF"
        description="Book a private chef, catering, event or staffing in Bali. Same-day WhatsApp confirmation."
        canonical={canonical}
        jsonLd={[localBusinessSchema, breadcrumbSchema('Book', canonical)]}
      />

      <section className="px-6 pt-32 pb-16 max-w-[900px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">Book Your Experience</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-12">
          Choose the service that fits your occasion. We confirm same-day via WhatsApp and build every menu around your preferences.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOOKING_CARDS.map((card) => {
            const Icon = card.icon
            const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(card.waText)}`
            return (
              <div
                key={card.label}
                className="flex flex-col rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${card.accent}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.accent }} />
                  </div>
                  <h3 className="font-playfair text-lg">{card.label}</h3>
                </div>
                <p className="text-sm text-[#4A4745] flex-1 mb-6">{card.desc}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-[2px] px-5 py-3 rounded-full hover:bg-[#1ea855] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Book via WhatsApp
                  </a>
                  <Link
                    to={card.href}
                    className="inline-flex items-center justify-center text-[#1A1A1A] font-semibold text-xs uppercase tracking-[2px] px-5 py-3 rounded-full border border-[#E8E6E3] hover:border-[#C5A028] transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
