import { Link } from 'react-router-dom'
import { MessageCircle, ChefHat, PartyPopper, Users, Briefcase, Wine, Star, Shield, Clock, Check } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import { getPageMeta } from '@/data/page-meta'
import { ContactRiskReversal } from '@/components/shared'

const WA = '491635080236'

const BOOKING_CARDS = [
  {
    label: 'Fine Dining',
    desc: 'Tasting menus, romantic dinners & chef\'s tables. Multi-course experiences plated in your villa.',
    href: '/fine-dining',
    icon: ChefHat,
    accent: '#C5A028',
    waText: 'Hi myCHEF, I would like to book a fine dining evening.',
    features: ['Mediterranean & Wagyu menus', 'Wine pairing available', '6–10 staff included', 'From IDR 2.2M++ pp'],
  },
  {
    label: 'Catering',
    desc: 'BBQ, buffet, drop-off & grazing tables. Flexible options for any group size and occasion.',
    href: '/catering',
    icon: PartyPopper,
    accent: '#6B8E5A',
    waText: 'Hi myCHEF, I would like a catering quote.',
    features: ['BBQ, buffet, plated', 'Drop-off or full service', 'Custom menus', 'From IDR 250K pp'],
  },
  {
    label: 'Events',
    desc: 'Weddings, birthdays, corporate & retreats. Full-service event planning and execution.',
    href: '/events',
    icon: Users,
    accent: '#2C5F7C',
    waText: 'Hi myCHEF, I would like to book an event consultation.',
    features: ['Weddings up to 200 guests', 'Corporate retreats', 'Full coordination', 'Custom proposals'],
  },
  {
    label: 'In-Villa Service',
    desc: 'Waiters, butlers, bartenders & mixologists. Professional staff for your villa event.',
    href: '/in-villa-service',
    icon: Wine,
    accent: '#8B5A2B',
    waText: 'Hi myCHEF, I would like to hire service staff.',
    features: ['Uniformed staff', 'English-speaking', 'Per-shift pricing', 'From IDR 250K/hour'],
  },
  {
    label: 'Staffing',
    desc: 'Long-term chefs, villa & household staff. Placement and management for your residence.',
    href: '/staffing',
    icon: Briefcase,
    accent: '#C5A028',
    waText: 'Hi myCHEF, I would like to request candidate profiles.',
    features: ['Full-time chef placement', 'Villa staff', 'Background-checked', 'From IDR 15M placement'],
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose Your Service', desc: 'Select fine dining, catering, events, service staff, or long-term staffing.' },
  { step: '02', title: 'Message Us', desc: 'WhatsApp your dates, location, and guest count. We reply within the hour.' },
  { step: '03', title: 'Receive Proposal', desc: 'We send a detailed proposal with menu, pricing, and availability within 24 hours.' },
  { step: '04', title: 'Confirm & Enjoy', desc: 'Pay a 25% deposit to lock your date. We handle everything else.' },
]

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('book').title}
        description={getPageMeta('book').description}
        canonical={getPageMeta('book').canonical}
        ogImage={getPageMeta('book').ogImage}
        noindex
        jsonLd={[localBusinessSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema('Book', getPageMeta('book').canonical), faqPageSchema([
          { question: 'How do I book a private chef in Bali?', answer: 'Simply send us a WhatsApp message with your date, villa location, and number of guests. We reply within the hour and send a full proposal within 24 hours.' },
          { question: 'How far in advance do I need to book?', answer: 'We recommend 24–48 hours in advance for private chef dinners, and 3–7 days for larger events and catering. Contact us for last-minute availability.' },
          { question: 'Do you serve villas outside Seminyak and Canggu?', answer: 'Yes — we cover all of Bali including Ubud, Uluwatu, Sanur, Nusa Dua, Pererenan, and beyond. Just let us know your location when booking.' },
          { question: 'What is included in the price?', answer: 'All-inclusive pricing covers fresh ingredients, professional chef and service staff, equipment, full table setup, and cleanup after your event. No hidden fees.' },
        ])]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-ui-bali-book-hero.webp"
            alt="Book your experience"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24 pt-32">
          <div className="max-w-[900px]">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
            <h1 className="font-playfair text-4xl md:text-6xl text-white leading-[1.1] mb-6">Book Your Experience</h1>
            <p className="text-lg md:text-xl text-white/[80%] max-w-[600px] mb-8">
              Choose the service that fits your occasion. We confirm same-day via WhatsApp and build every experience around your preferences.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Same-Day Confirmation', '25% Deposit', 'Full Refund 14+ Days', 'Dietary Flexibility'].map((h) => (
                <span key={h} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                  <Check className="w-3.5 h-3.5 text-[#C5A028]" /> {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <ContactRiskReversal />

      {/* Trust bar */}
      <section className="bg-[#0A0A0A] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: Star, text: '4.9 Rating (500+ Reviews)' },
            { icon: Shield, text: 'Background-Checked Team' },
            { icon: Clock, text: 'Same-Day Response' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/[60%] text-sm">
              <Icon className="w-4 h-4 text-[#C5A028]" /> {text}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">What You Need</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Choose Your Service</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOKING_CARDS.map((card) => {
              const Icon = card.icon
              const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(card.waText)}`
              return (
                <div
                  key={card.label}
                  className="flex flex-col rounded-2xl border border-black/5 bg-[#FAFAF8] p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${card.accent}15` }}>
                      <Icon className="w-5 h-5" style={{ color: card.accent }} />
                    </div>
                    <h3 className="font-playfair text-lg">{card.label}</h3>
                  </div>
                  <p className="text-sm text-[#4A4745] flex-1 mb-4">{card.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#4A4745]">
                        <Check className="w-3.5 h-3.5 text-[#C5A028] flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-source={`book-page-${card.href.replace(/\//g, '')}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-xs uppercase tracking-[2px] px-5 py-3 rounded-full hover:bg-[#D4B43A] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Book via WhatsApp
                    </a>
                    <Link
                      to={card.href}
                      className="inline-flex items-center justify-center text-[#1A1A1A] font-semibold text-xs uppercase tracking-[2px] px-5 py-3 rounded-full border border-black/10 hover:border-[#C5A028] transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">Simple Process</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">How to Book</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-4xl font-playfair text-[#C5A028]/30 mb-4">{s.step}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl mb-4">Not Sure What You Need?</h2>
          <p className="text-white/[60%] mb-8">Message us on WhatsApp with your dates and occasion. We will recommend the perfect service and send a proposal within 24 hours.</p>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like to book an experience but I am not sure what I need. Can you help?')}`}
            target="_blank"
            rel="noopener noreferrer"
            data-source="book-page-help-cta"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Get Personalized Advice
          </a>
        </div>
      </section>
    </main>
  )
}
