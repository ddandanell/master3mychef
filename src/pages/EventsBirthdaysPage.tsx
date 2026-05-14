import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Users, Cake, PartyPopper, Gift,
  Music, Camera, Check, Sparkles,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20to%20book%20a%20birthday%20party.'
const SITE = 'https://mychef.id'

const FORMATS = [
  {
    title: 'Intimate Birthday Dinner',
    price: 'IDR 1,500,000/person',
    guestRange: '4–12 guests',
    description: '5-course plated dinner, birthday cake, styling, and photographer for 1 hour. Perfect for milestone birthdays.',
    features: ['5-course menu', 'Birthday cake', 'Table styling', 'Photographer 1h', 'Dedicated waiter'],
  },
  {
    title: 'Birthday Villa Party',
    price: 'IDR 850,000/person',
    guestRange: '15–40 guests',
    description: 'BBQ buffet, bartender, open bar, DJ, decor, cake, and photographer. The full villa party experience.',
    features: ['BBQ buffet (B2)', 'Bartender + open bar 3h', 'DJ 4h', 'Decor + cake', 'Photographer 2h', 'Day-of coordinator'],
    highlighted: true,
  },
  {
    title: 'Kids Birthday Party',
    price: 'IDR 350K child / IDR 250K adult',
    guestRange: '10–30 kids',
    description: 'Kids menu, adult food, entertainment, themed decor, balloons, goodie bags, and photographer.',
    features: ['Kids menu + adult food', 'Entertainment', 'Themed decor', 'Balloons', 'Goodie bags', 'Photographer 2h'],
  },
]

const THEMES = ['Tropical', 'Glam', 'Surfer', 'Kids Unicorn', 'Milestone 30/40/50', 'Custom']

const ADDONS = [
  { icon: Cake, title: 'Custom 3-Tier Cake', price: '+IDR 2M – 4M' },
  { icon: Camera, title: 'Photographer Extended', price: '+IDR 4.8M (4h)' },
  { icon: Music, title: 'Live Band 3h', price: '+IDR 8M – 15M' },
  { icon: Sparkles, title: 'Fire Dancer 30min', price: '+IDR 4.5M' },
  { icon: Gift, title: 'Themed Premium Decor', price: '+IDR 3.5M – 7.5M' },
  { icon: PartyPopper, title: 'Kids Entertainment', price: '+IDR 2M – 5M' },
]

const FAQS = [
  { q: 'How far in advance to book?', a: 'Intimate dinner: 7 days. Villa party: 10–14 days. Kids party: 14 days (custom decor/entertainment booking).' },
  { q: 'Can you do a milestone theme?', a: 'Yes — signature themes for milestones included. Custom themes from +IDR 3,500,000.' },
  { q: 'Are you good with kids parties?', a: 'Yes — we have a dedicated kids party coordinator who handles entertainment booking, dietary needs, and decor.' },
  { q: 'Do you provide the cake?', a: 'Standard cake (chocolate or vanilla, single tier, with name in icing) is included. Custom 3-tier or signature cake is +IDR 2M–4M.' },
  { q: 'Can guests bring their own alcohol?', a: 'Yes — BYO welcome. We charge a corkage waiver fee of IDR 250,000 per villa party. Or we manage open bar through our bartender package.' },
  { q: 'What\'s the cancellation policy?', a: '7+ days before event: 75% refund. 48h+: 50% credit. Under 48h: no refund.' },
  { q: 'Can you do a surprise birthday?', a: 'Yes — we\'ll coordinate with one party member discreetly. Tell us the surprise level at booking.' },
  { q: 'Do you handle adult + kids parties simultaneously?', a: 'Yes — combined family events with separate kids menu + adult food + separate kids entertainment area.' },
]

export default function EventsBirthdaysPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.birthday-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.birthday-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Birthday Parties Bali — Dinners, Villa Parties, Kids | myCHEF"
        description="Birthday parties at your Bali villa. Intimate dinners (4–12) from IDR 1.5M/pp, villa parties (15–40) from IDR 850K/pp, kids parties from IDR 350K/child. Cake + decor + photography."
        canonical={`${SITE}/events/birthdays`}
        jsonLd={[localBusinessSchema, breadcrumbSchema('Birthdays', `${SITE}/events/birthdays`, 'Events', `${SITE}/events`)]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/aura-corporate.webp" alt="Birthday celebration at Bali villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Birthday Parties</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Birthday Parties at<br /><span className="italic">Your Bali Villa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Three formats — intimate dinner, villa party, kids party. Cake, decor, photography handled. From a 4-guest milestone dinner to a 40-guest pool party.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all">
              <Calendar className="w-4 h-4" /> Book a Birthday
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* FORMATS */}
      <section className="py-20 md:py-28 bg-white birthday-content">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Formats" title="Three Birthday Formats" subtitle="Choose the format that matches your guest count and vibe." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((f) => <EventFormatCard key={f.title} {...f} accent="#C5A028" />)}
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeader eyebrow="Themes" title="Themed Setups" subtitle="Choose a signature theme or request a custom design." />
          <div className="flex flex-wrap justify-center gap-3">
            {THEMES.map((t) => (
              <span key={t} className="px-5 py-3 bg-white border border-[#E8E6E3] rounded-full text-sm font-medium text-[#1A1A1A] hover:border-[#C5A028] transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[#4A4745] text-sm mt-6">Custom themes from +IDR 3,500,000. Milestone themes (30/40/50) included at no extra charge.</p>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Extras" title="Birthday Add-Ons" subtitle="Personalise your celebration with these upgrades." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map((a) => (
              <div key={a.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
                <div className="bg-[#C5A028]/10 rounded-xl p-2.5 shrink-0"><a.icon className="w-5 h-5 text-[#C5A028]" /></div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{a.title}</h3>
                  <p className="text-[#C5A028] font-semibold text-sm">{a.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock title="What Birthday Hosts Say" testimonials={[
        { name: 'Lisa M.', location: 'Canggu Villa Party', quote: 'We booked the villa party package for my 40th. The DJ, BBQ, and decor were perfect. Best birthday ever.', rating: 5 },
        { name: 'The Johnson Family', location: 'Seminyak Kids Party', quote: 'The kids party coordinator handled everything — entertainment, decor, food. The children had a blast.', rating: 5 },
        { name: 'Marcus & Friends', location: 'Uluwatu Dinner', quote: 'Intimate 8-person dinner for my 50th. The 5-course meal was restaurant-quality. Highly recommend.', rating: 5 },
      ]} />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Birthday FAQ" subtitle="Common questions about booking birthday parties with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Book a Birthday Party"
            subtitle="Tell us about your birthday celebration and we will send a proposal within 24 hours."
            packageOptions={['Intimate Dinner', 'Villa Party', 'Kids Party']}
            fields={[
              { name: 'format', label: 'Format', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests', type: 'number', placeholder: 'e.g. 20', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'theme', label: 'Theme', type: 'text', placeholder: 'e.g. Tropical, Milestone 40th' },
              { name: 'dietary', label: 'Dietary Needs', type: 'textarea' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent="#C5A028"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Celebrate?</h2>
          <p className="text-white/70 text-lg mb-8">Send your date, guest count, and preferred format. We will confirm availability and pricing.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all"><Calendar className="w-4 h-4" /> Book a Birthday</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp Sofia</a>
          </div>
        </div>
      </section>

      <TaxFooter />
    </div>
  )
}
