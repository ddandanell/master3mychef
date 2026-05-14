import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Heart, Check,
  Camera, Music, Flower2, Bus, Cake, Video,
  Clock, Newspaper,
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

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20a%20wedding%20consultation.'
const SITE = 'https://mychef.id'

const WEDDING_TIERS = [
  {
    title: 'Intimate Villa Wedding',
    price: <AllInPrice price={600000} />,
    guestRange: '30+ guests',
    description: 'Perfect for elopements and small villa ceremonies. 4-course plated dinner, day-of coordination, basic floral arch.',
    features: ['4-course plated dinner', 'Day-of coordination', '1 waiter per 10 guests', 'Basic floral arch', 'Ceremony setup', 'Sound system', 'Full cleanup'],
  },
  {
    title: 'Standard Villa Wedding',
    price: <AllInPrice price={950000} />,
    guestRange: '50+ guests',
    description: 'Full wedding reception with 5-course plated or live-station buffet. Welcome canapés, open bar, photography.',
    features: ['5-course plated or buffet', 'Welcome canapés + sparkling', 'Bartender + 4h open bar', 'Ceremony + reception setup', 'Sound + lighting', 'Photography 6h', 'Dedicated coordinator'],
    highlighted: true,
  },
  {
    title: 'Luxury Villa Wedding',
    price: <AllInPrice price={1500000} />,
    guestRange: '50+ guests',
    description: 'Premium everything. Dedicated planner from booking, signature cocktail reception, full-day photo + video.',
    features: ['Premium plated + cocktail reception', 'Bartender + 6h open bar', 'Premium florals + arch', 'Full sound + lighting', 'Photo + video full-day', 'Dedicated planner', 'Pre-event tasting'],
  },
]

const ADDONS = [
  { icon: Cake, title: 'Wedding Cake', price: '+IDR 3.5M – 8.5M', desc: 'Custom 3-tier cake' },
  { icon: Video, title: 'Cinematography', price: '+IDR 15M – 35M', desc: 'Full-day film' },
  { icon: Camera, title: 'Drone Footage', price: '+IDR 5M – 10M', desc: 'Aerial coverage' },
  { icon: Music, title: 'Live Band 4h', price: '+IDR 12M – 25M', desc: 'Jazz, acoustic, or DJ' },
  { icon: Flower2, title: 'Premium Florals', price: '+IDR 8M – 25M', desc: 'Arch + aisle + table' },
  { icon: Bus, title: 'Guest Transport', price: '+IDR 3M – 8M', desc: 'Per 50-guest coach' },
]

const REAL_WEDDINGS = [
  { names: 'Emma & James', date: 'March 2026', villa: 'Villa Aria, Uluwatu', image: '/generated/aura-wedding.webp' },
  { names: 'Anya & Mark', date: 'January 2026', villa: 'Villa Soma, Canggu', image: '/generated/aura-setup.webp' },
  { names: 'Sarah & David', date: 'December 2025', villa: 'Villa Kali, Seminyak', image: '/generated/aura-tablescape.webp' },
  { names: 'Priya & Raj', date: 'November 2025', villa: 'Villa Tirta, Uluwatu', image: '/generated/aura-toast.webp' },
]

const LEAD_TIMES = [
  { phase: '3–10 months', label: 'Peak season booking', note: 'Jul–Sep, Dec–Jan. Luxury tier requires 3+ months.' },
  { phase: '1–3 months', label: 'Standard booking', note: 'Off-peak dates. Standard + Intimate tiers.' },
  { phase: '2–4 weeks', note: 'Pre-event tasting', label: 'Tasting window' },
  { phase: '1 month', label: 'Minimum off-peak', note: 'Intimate tier only. Subject to availability.' },
]

const PRESS_FEATURES = [
  { name: 'Honeycombers Weddings', desc: 'Featured in Bali wedding guide as top villa catering pick.' },
  { name: 'Hello Bali Weddings', desc: 'Listed as recommended full-service villa wedding vendor.' },
  { name: 'Bridestory', desc: 'Vendor profile with 50+ real wedding reviews and portfolio.' },
]

const FAQS = [
  { q: 'How far in advance should I book?', a: '3–10 months for peak season (Jul–Sep, Dec–Jan). 1 month minimum for off-peak. Luxury tier requires 3+ months.' },
  { q: 'Do you do the wedding planning?', a: 'Standard + Luxury include planning from booking. Intimate includes day-of coordination. For larger weddings (80+) we always include a dedicated planner.' },
  { q: 'Can I use my own florist or photographer?', a: 'Yes — we coordinate any vendor you bring. We have preferred partners with negotiated rates if you prefer.' },
  { q: 'How does tasting work?', a: 'Free pre-event tasting for all tiers, scheduled 2–4 weeks before wedding. We taste 3 dishes per course; you finalise the menu after.' },
  { q: 'What if it rains?', a: 'Every wedding has a wet-weather backup plan in the booking. We coordinate marquee rental + indoor relocation if needed.' },
  { q: 'Do you handle non-Christian ceremonies?', a: 'Yes — Hindu, Muslim, Jewish, Balinese traditional, secular celebrant — all coordinated through our vetted officiant network.' },
  { q: 'Can my guests stay nearby?', a: 'We work with luxury villa partners and can arrange room blocks. Not included in package pricing.' },
  { q: 'What\'s your cancellation policy?', a: 'Up to 90 days before: 50% refund of deposit. 60–90 days: 25%. Under 60 days: no refund but credit toward rescheduled event within 12 months.' },
]

export default function EventsWeddingsPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wedding-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.wedding-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Bali Villa Wedding Catering + Coordination | myCHEF"
        description="Bali villa wedding catering and end-to-end coordination. Three tiers from IDR 600K/pp to IDR 1.5M/pp. Sofia handles everything from menu to day-of execution."
        canonical={`${SITE}/events/weddings`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Wedding Catering Bali', 'Private chef wedding catering and coordination for villa weddings in Bali. Three tiers from intimate to luxury.', `${SITE}/events/weddings`, 'IDR'),
          offerSchema('Intimate Villa Wedding', 600000, 'IDR', `${SITE}/events/weddings`),
          offerSchema('Standard Villa Wedding', 950000, 'IDR', `${SITE}/events/weddings`),
          offerSchema('Luxury Villa Wedding', 1500000, 'IDR', `${SITE}/events/weddings`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Weddings', `${SITE}/events/weddings`, 'Events', `${SITE}/events`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Weddings' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/aura-wedding.webp"
            alt="Bali villa wedding ceremony with couple at altar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Villa Weddings
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Weddings in Bali<br />
            <span className="italic">Catering + Coordination</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Three wedding tiers. Single vendor for food, staff, design, and day-of coordination. From 30-guest elopements to 200-guest receptions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all"
            >
              <Calendar className="w-4 h-4" /> Request Wedding Consult
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* ═══════ THREE TIERS ═══════ */}
      <section className="py-20 md:py-28 bg-white wedding-content">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 2 — Packages"
            title="Three Wedding Tiers"
            subtitle="Choose the tier that matches your vision, guest count, and budget."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {WEDDING_TIERS.map((t) => (
              <EventFormatCard key={t.title} {...t} accent="#C5A028" />
            ))}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={600000} minGuests={30} maxGuests={200} defaultGuests={60} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={950000} minGuests={50} maxGuests={200} defaultGuests={60} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={50} maxGuests={200} defaultGuests={60} accent="#C5A028" />
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 3 — Inclusions"
            title="What's Included"
            subtitle="Every wedding tier includes these essentials."
            dark
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Day-of coordination (every tier)',
              'Catering tier-matched',
              '1 waiter per 10 guests + service manager',
              'Ceremony setup (chairs, aisle, arch)',
              'Welcome canapés + sparkling (Std/Lux)',
              'Bartender + open bar (Std/Lux)',
              'Sound system + lighting (Std/Lux)',
              'Photography 6h (Std) / full-day (Lux)',
              'Pre-event tasting (free)',
              'Full setup + cleanup',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/80">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ REAL WEDDINGS GALLERY ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 4 — Real Weddings"
            title="Wedding Stories"
            subtitle="Real couples, real villas, real celebrations across Bali."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_WEDDINGS.map((w) => (
              <div key={w.names} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={w.image} alt={`${w.names} wedding at ${w.villa}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{w.names}</h3>
                  <p className="text-[#4A4745] text-xs">{w.date} · {w.villa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LEAD TIME GUIDANCE ═══════ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 5 — Planning"
            title="Booking Timeline"
            subtitle="When to book, when to taste, and what to expect."
          />
          <div className="bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden">
            {LEAD_TIMES.map((lt, i) => (
              <div key={i} className="flex items-start gap-4 px-6 py-5 border-t border-[#E8E6E3] first:border-t-0">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#C5A028]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-[#1A1A1A] text-sm">{lt.label}</h4>
                    <span className="text-[#C5A028] font-semibold text-sm">{lt.phase}</span>
                  </div>
                  <p className="text-[#4A4745] text-xs">{lt.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DAY-OF COORDINATOR ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader
            eyebrow="Chapter 6 — Your Coordinator"
            title="Meet Sofia"
            subtitle="Your single point of contact from first message to final guest departure."
          />
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-8 md:p-12">
            <div className="w-24 h-24 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-[#C5A028]" />
            </div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Sofia — Wedding Coordinator</h3>
            <p className="text-[#4A4745] max-w-xl mx-auto mb-6">
              Sofia has coordinated 100+ villa weddings across Bali. She speaks English, Bahasa, and basic Mandarin. 
              She handles timeline, vendors, setup, and day-of flow so you can focus on getting married.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#b08d23] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Message Sofia
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ PRESS FEATURES ═══════ */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 7 — Press"
            title="As Featured In"
            subtitle="Recognised by Bali's leading wedding publications."
            dark
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {PRESS_FEATURES.map((p) => (
              <div key={p.name} className="bg-white/5 rounded-2xl border border-white/10 p-6 text-center">
                <Newspaper className="w-8 h-8 text-[#C5A028] mx-auto mb-4" />
                <h3 className="text-white text-sm font-semibold mb-2">{p.name}</h3>
                <p className="text-white/60 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Extras"
            title="Wedding Add-Ons"
            subtitle="Personalise your wedding with these premium upgrades."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
                <div className="bg-[#C5A028]/10 rounded-xl p-2.5 shrink-0">
                  <a.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{a.title}</h3>
                  <p className="text-[#C5A028] font-semibold text-sm">{a.price}</p>
                  <p className="text-[#4A4745] text-xs mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="What Couples Say"
        subtitle="Real reviews from real weddings across Bali."
        testimonials={[
          { name: 'Emma & James', location: 'Uluwatu Villa Wedding', quote: 'Sofia handled everything. The food was incredible, the timeline was perfect, and we actually enjoyed our own wedding.', rating: 5 },
          { name: 'Anya & Mark', location: 'Canggu Villa Wedding', quote: 'The 5-course plated dinner was better than any restaurant. Our guests are still talking about it.', rating: 5 },
          { name: 'Sarah & David', location: 'Seminyak Wedding', quote: 'From the first WhatsApp to the last dance, myCHEF was professional, warm, and absolutely on point.', rating: 5 },
        ]}
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Questions"
            title="Wedding FAQ"
            subtitle="Everything you need to know about booking a villa wedding with myCHEF."
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ CONSULT FORM ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Request a Wedding Consult"
            subtitle="Tell us about your wedding and we will send a detailed proposal within 48 hours."
            packageOptions={['Intimate Villa Wedding', 'Standard Villa Wedding', 'Luxury Villa Wedding']}
            fields={[
              { name: 'package', label: 'Wedding Package', type: 'select', required: true },
              { name: 'date', label: 'Wedding Date', type: 'date', required: true },
              { name: 'guests', label: 'Number of Guests', type: 'number', placeholder: 'e.g. 60', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', placeholder: 'e.g. Villa Aria, Seminyak', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', placeholder: 'e.g. Seminyak, Uluwatu...', required: true },
              { name: 'ceremony', label: 'Ceremony / Reception Split', type: 'text', placeholder: 'e.g. Ceremony 4pm, Reception 6pm' },
              { name: 'budget', label: 'Budget Range (IDR)', type: 'text', placeholder: 'e.g. 50M - 100M' },
              { name: 'dietary', label: 'Dietary Requirements', type: 'textarea', placeholder: 'Halal, vegan, allergies...' },
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

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's Plan Your Wedding
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Send your date, guest count, and villa name. Sofia will reply with availability and a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all"
            >
              <Calendar className="w-4 h-4" /> Request Wedding Consult
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter />
    </div>
  )
}
