import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Wine, Camera, Music,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, serviceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20to%20plan%20an%20anniversary%20dinner.'
const SITE = 'https://mychef.id'

const FORMATS = [
  {
    title: 'Couple Intimate Dinner',
    price: <AllInPrice price={1500000} />,
    guestRange: '2 guests',
    description: 'Custom menu or Fine Dining menu in-villa. Candle setup, petals, welcome sparkling, photographer 1h.',
    features: ['Custom or Fine Dining menu', 'Candle + ambient lighting', 'Petal pathway', 'Welcome sparkling', 'Photographer 1h', 'Personalised toast'],
  },
  {
    title: 'Small-Group Anniversary',
    price: <AllInPrice price={1200000} />,
    guestRange: '4–16 guests',
    description: 'Plated 4-course dinner with family and friends. Personalised toast moment, photographer 2h.',
    features: ['4-course plated dinner', 'Personalised toast', 'Photographer 2h', 'Service team', 'Table styling', 'Soft music'],
    highlighted: true,
  },
  {
    title: 'Renewal of Vows + Dinner',
    price: <AllInPrice price={2500000} />,
    guestRange: '10–30 guests',
    description: 'Officiant + ceremony + plated reception. Full event coordination for your vow renewal.',
    features: ['Officiant + ceremony', 'Plated reception', 'Ceremony setup', 'Photographer 4h', 'Day-of coordinator', 'Floral arch'],
  },
]

const HOTEL_COMPARISON = [
  { name: 'Apéritif', price: 'IDR 2,500,000+', note: 'Per person, hotel-locked' },
  { name: 'Samabe', price: 'IDR 5,500,000+', note: 'Per person, resort package' },
  { name: 'Bulgari', price: 'IDR 4,800,000+', note: 'Per person, hotel restaurant' },
  { name: 'myCHEF', price: 'IDR 1,500,000/person', note: 'In your villa, personalised' },
]

const ADDONS = [
  { icon: Camera, title: 'Anniversary Cake', price: '+IDR 1.5M – 3M' },
  { icon: Wine, title: 'Champagne Veuve', price: '+IDR 2.5M' },
  { icon: Wine, title: 'Champagne Krug', price: '+IDR 5.5M' },
  { icon: Music, title: 'Acoustic Musician', price: '+IDR 2.4M (1h)' },
  { icon: Music, title: 'Saxophonist', price: '+IDR 3M (1h)' },
  { icon: Camera, title: 'Photographer Extended', price: '+IDR 2.4M (2h)' },
]

const FAQS = [
  { q: 'Can I use one of the Fine Dining menus?', a: 'Yes — the Mediterranean Sea (IDR 2.2M++) or Wagyu (IDR 2.4M++) menu is available for anniversary dinners. Or we design custom.' },
  { q: 'What makes an anniversary different from a regular dinner?', a: 'Personalised signage, candle landscape, petal styling, surprise moment coordination, photographer, custom cake — all bundled.' },
  { q: 'How far in advance to book?', a: '7+ days minimum. 14+ days recommended. Renewal of vows: 21+ days (officiant + permit coordination).' },
  { q: 'Can you arrange a surprise for my partner?', a: 'Yes — full surprise coordination is our specialty. We will work with you discreetly. WhatsApp Sofia to plan.' },
  { q: 'Can it be on the beach instead of at the villa?', a: 'Yes — partner beach venue available; surcharge IDR 1,500,000 plus per-beach permit (varies).' },
  { q: 'What if I want to propose at the anniversary dinner?', a: 'Tell Sofia. Full proposal production (signage, ring presentation, fireworks, photographer team) +IDR 25,000,000.' },
  { q: 'Cancellation policy?', a: 'Same as Fine Dining — 7 days = full refund; 48h = 50% credit; under 48h = no refund.' },
  { q: 'Can we add a renewal of vows?', a: 'Yes — renewal of vows package combines officiant + ceremony + dinner for 10–30 guests at IDR 2.5M/pp.' },
]

export default function EventsAnniversariesPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.anniversary-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.anniversary-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Anniversary Dinners Bali — Romantic Villa Setups | myCHEF"
        description="Anniversary dinners at your Bali villa. Intimate couple to small-group celebrations. From IDR 1.5M/pp. Personalised menu, candle setup, signage, photographer optional."
        canonical={`${SITE}/events/anniversaries`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Anniversary Dinner Catering Bali', 'Romantic anniversary dinner catering at Bali villas. Couple dinners, small-group celebrations, and vow renewals.', `${SITE}/events/anniversaries`, 'IDR'),
          offerSchema('Couple Intimate Dinner', 1500000, 'IDR', `${SITE}/events/anniversaries`),
          offerSchema('Small-Group Anniversary', 1200000, 'IDR', `${SITE}/events/anniversaries`),
          offerSchema('Renewal of Vows + Dinner', 2500000, 'IDR', `${SITE}/events/anniversaries`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Anniversaries', `${SITE}/events/anniversaries`, 'Events', `${SITE}/events`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Anniversaries' }]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/aura-corporate.webp" alt="Romantic anniversary dinner at Bali villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Anniversary Dinners</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Anniversary Dinners<br /><span className="italic">Bali Villas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Mark the day at your villa, not at someone else's hotel. Personalised menu, candle setup, photographer optional. Independent of any hotel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all">
              <Calendar className="w-4 h-4" /> Book Anniversary Dinner
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* FORMATS */}
      <section className="py-20 md:py-28 bg-white anniversary-content">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Formats" title="Three Anniversary Options" subtitle="From an intimate dinner for two to a vow renewal with family and friends." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((f) => <EventFormatCard key={f.title} {...f} accent="#C5A028" />)}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={2} maxGuests={2} defaultGuests={2} label=" couple" accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={1200000} minGuests={4} maxGuests={16} defaultGuests={8} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={2500000} minGuests={10} maxGuests={30} defaultGuests={15} accent="#C5A028" />
          </div>
        </div>
      </section>

      {/* VS HOTELS */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="Comparison" title="In Your Villa vs Hotel-Locked" subtitle="Buyers researching anniversary dinners almost always check hotels first. Here is how we compare." dark />
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 text-xs uppercase tracking-wider text-white/50 font-semibold">
              <span>Venue</span><span>Price</span><span>Note</span>
            </div>
            {HOTEL_COMPARISON.map((h) => (
              <div key={h.name} className={`grid grid-cols-3 gap-4 px-6 py-4 border-t border-white/10 items-center ${h.name === 'myCHEF' ? 'bg-[#C5A028]/10' : ''}`}>
                <span className={`font-medium ${h.name === 'myCHEF' ? 'text-[#C5A028]' : 'text-white'}`}>{h.name}</span>
                <span className={`${h.name === 'myCHEF' ? 'text-[#C5A028] font-semibold' : 'text-white/80'}`}>{h.price}</span>
                <span className="text-white/60 text-sm">{h.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Extras" title="Anniversary Add-Ons" subtitle="Make the evening unforgettable with these upgrades." />
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

      <TestimonialBlock title="What Couples Say" testimonials={[
        { name: 'Anna & Michael', location: 'Seminyak Anniversary', quote: 'The candle setup, the petals, the personalised menu — every detail was perfect. Felt like a scene from a movie.', rating: 5 },
        { name: 'Sarah & Tom', location: 'Uluwatu Vow Renewal', quote: 'We renewed our vows with 20 family members. The ceremony, the dinner, the coordination — flawless.', rating: 5 },
        { name: 'Jenny & David', location: 'Canggu Intimate Dinner', quote: 'Just the two of us, a 5-course dinner, and a photographer. Best anniversary we have ever had.', rating: 5 },
      ]} />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Anniversary FAQ" subtitle="Everything you need to know about anniversary dinners with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Tell Us About Your Anniversary"
            subtitle="We are so excited to help you celebrate. Share your vision and we will make it happen."
            packageOptions={['Couple Intimate Dinner', 'Small-Group Anniversary', 'Renewal of Vows + Dinner']}
            fields={[
              { name: 'package', label: 'Package', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests', type: 'number', placeholder: 'e.g. 2', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'occasion', label: 'What Are You Celebrating?', type: 'text', placeholder: 'e.g. 10th Anniversary' },
              { name: 'surprise', label: 'Surprise Element?', type: 'textarea', placeholder: 'Tell us about any surprises you are planning...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent="#C5A028"
          />
        </div>
      </section>

      <PressStrip />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Celebrate Your Love?</h2>
          <p className="text-white/70 text-lg mb-8">Send your date, villa, and what you are celebrating. We will create something unforgettable.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all"><Calendar className="w-4 h-4" /> Book Anniversary Dinner</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp Sofia</a>
          </div>
        </div>
      </section>

      <TaxFooter />
    </div>
  )
}
