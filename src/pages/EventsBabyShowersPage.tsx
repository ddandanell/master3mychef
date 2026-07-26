import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Baby, Heart, Flower2,
  Camera, Music, Sparkles, GlassWater, Check,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { ArticleContentSection, Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a baby shower in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const BABY_SHOWER_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Baby Shower Catering Bali',
  serviceType: 'Baby shower catering and styled villa brunches',
  provider: {
    '@type': 'LocalBusiness',
    name: 'myCHEF.id',
    url: 'https://mychef.id/',
    telephone: '+62 896-7407-2020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan',
      addressLocality: 'Denpasar',
      addressRegion: 'Bali',
      postalCode: '80226',
      addressCountry: 'ID',
    },
  },
  areaServed: 'Bali, Indonesia',
  description: 'Baby shower catering in Bali villas: pregnancy-safe brunches, grazing tables, alcohol-free mocktail bars, themed decor, photography and full cleanup.',
  offers: [
    { '@type': 'Offer', name: 'Intimate Baby Shower Brunch', price: '750000', priceCurrency: 'IDR', description: 'Per person, 10–15 guests. Grazing brunch, mocktail bar, decor, photographer 1h. ++ 11% tax + 10% service.' },
    { '@type': 'Offer', name: 'Larger Baby Shower', price: '1100000', priceCurrency: 'IDR', description: 'Per person, 16–30 guests. Full brunch, premium decor, photographer 2h, custom cake. ++ 11% tax + 10% service.' },
    { '@type': 'Offer', name: 'Grand Shower Celebration', price: '350000', priceCurrency: 'IDR', description: 'Per person, 50+ guests. Scalable buffet, mocktail welcome drinks, gift table, staff. ++ 11% tax + 10% service.' },
  ],
}

const FORMATS = [
  {
    title: 'Intimate Baby Shower Brunch',
    price: <AllInPrice price={750000} />,
    guestRange: '10–15 guests',
    description: 'Grazing brunch (sweet + savoury), mocktail bar with 3 signature drinks, pastel decor + signage, photographer 1h, service staff, setup + cleanup.',
    features: ['Grazing brunch (sweet + savoury)', 'Mocktail bar with 3 signature drinks', 'Pastel decor + signage', 'Photographer 1h', 'Service staff', 'Setup + cleanup'],
  },
  {
    title: 'Larger Baby Shower',
    price: <AllInPrice price={1100000} />,
    guestRange: '16–30 guests',
    description: 'Full brunch + mocktail bar, premium decor + signage, guest table setup, photographer 2h, custom cake, games setup, service staff.',
    features: ['Full brunch + mocktail bar', 'Premium decor + signage', 'Guest table setup', 'Photographer 2h', 'Custom cake', 'Games setup', 'Service staff'],
    highlighted: true,
  },
]

const GRAND_SHOWER = {
  title: 'Grand Shower Celebration',
  price: <AllInPrice price={350000} />,
  guestRange: '50+ guests',
  description: 'Scalable brunch buffet, mocktail welcome drinks, styled gift table, service staff + cleanup, vendor coordination.',
  features: ['Scalable brunch buffet', 'Mocktail welcome drinks', 'Styled gift table', 'Service staff + cleanup', 'Vendor coordination'],
}

const THEMES = ['Boho', 'Pastel', 'Botanical', 'Classic Gender-Reveal']

const THEME_CARDS = [
  { name: 'Boho', desc: 'Macramé, dried florals, rattan accents, dreamcatchers.', colour: 'from-[#D7CCC8]/40 to-[#BCAAA4]/20' },
  { name: 'Pastel', desc: 'Balloon arches, candy bar, soft pinks, blues, lavenders.', colour: 'from-[#F8BBD0]/30 to-[#E1BEE7]/20' },
  { name: 'Botanical', desc: 'Greenery, eucalyptus, white flowers, natural wood.', colour: 'from-[#C8E6C9]/40 to-[#A5D6A7]/20' },
  { name: 'Classic Gender-Reveal', desc: 'Pink-vs-blue reveal, countdown signage, surprise cake or balloon-pop moment.', colour: 'from-[#BBDEFB]/30 to-[#F8BBD0]/30' },
]

const DECOR_DETAILS = [
  { icon: Flower2, title: 'Floral Arrangements', desc: 'Table centrepieces, entrance garlands, and accent blooms matched to your theme.' },
  { icon: Sparkles, title: 'Signage & Stationery', desc: 'Welcome board, menu cards, place cards, and custom messages.' },
  { icon: Baby, title: 'Table Styling', desc: 'Linens, runners, charger plates, napkin folds, and themed tableware.' },
  { icon: Heart, title: 'Photo Backdrop', desc: 'Themed backdrop with props for guest photos and memories.' },
]

const MOCKTAIL_BAR = [
  { name: 'Tropical Sunrise', desc: 'Mango, passionfruit, coconut cream. Vibrant and refreshing.' },
  { name: 'Berry Bliss', desc: 'Mixed berries, lime, sparkling water. Tart and beautiful.' },
  { name: 'Cucumber Mint Cooler', desc: 'Cucumber, mint, elderflower. Light and elegant.' },
]

const REAL_BABY_SHOWERS = [
  { title: 'Pastel Brunch Table', location: 'Seminyak Villa', image: '/generated/mychef-events-bali-hero-baby-showers.webp' },
  { title: 'Garden Mocktail Brunch', location: 'Canggu Villa', image: '/generated/mychef-events-bali-baby-showers-grazing.webp' },
  { title: 'Poolside Family Shower', location: 'Uluwatu Villa', image: '/generated/mychef-events-bali-baby-showers-pool.webp' },
  { title: 'Styled Tablescape Moment', location: 'Ubud Villa', image: '/generated/mychef-events-bali-baby-showers-tablescape.webp' },
]

const ADDONS = [
  { icon: Camera, title: 'Photographer (extended, 3h)', price: '+IDR 3.6M' },
  { icon: Music, title: 'Live Acoustic Guitarist (1h)', price: '+IDR 2.4M' },
  { icon: Flower2, title: 'Premium Florals + Arch', price: '+IDR 3M – 6M' },
  { icon: Heart, title: 'Maternity Photoshoot', price: '+IDR 3.5M' },
  { icon: Baby, title: 'Henna Artist', price: '+IDR 1.5M' },
  { icon: Sparkles, title: 'Custom 2-Tier Cake', price: '+IDR 2.5M – 4.5M' },
]

const FAQS = [
  { q: 'How much does a baby shower in Bali cost?', a: 'From IDR 350K++/person for large receptions (50+ guests) to IDR 750K++/person for intimate brunches (10–15) and IDR 1.1M++/person for the full styled shower (16–30). "++" adds 11% government tax + 10% service charge. Example: 20 guests, fully styled, runs IDR 22M++.' },
  { q: 'What\'s the minimum and typical group size?', a: 'Minimum 10 guests for the brunch format; most showers we cater are 15–22 guests; the Grand format scales to 50+.' },
  { q: 'Is the food really pregnancy-safe?', a: 'Yes — it\'s the default, not an option. Freshly cooked proteins, pasteurised dairy, no raw fish or unpasteurised cheese, managed buffet times, and a menu briefed around the mother-to-be\'s specific needs.' },
  { q: 'Can guests who drink alcohol be served too?', a: 'Yes. The mocktail bar is alcohol-free by default; a separate alcohol bar for other guests can be added at +IDR 350K per person, positioned away from the main station.' },
  { q: 'Do we need the villa\'s permission?', a: 'A daytime brunch is low-impact, but we still confirm house rules with your villa manager — guest numbers, decor attachments, and any banjar (community) notification the property requires. We handle that coordination for you.' },
  { q: 'Can you do a gender reveal or a surprise shower?', a: 'Both. Gender-reveal cakes (coloured centre) and balloon-pop reveals are planned at booking, and surprise showers are coordinated discreetly with one host — including where the reveal moment should happen.' },
  { q: 'What if it rains?', a: 'Daytime showers move easily: we plan a covered terrace or indoor fallback with the same styling and menu, so the grazing table and mocktail bar simply relocate.' },
  { q: 'How far ahead should we book, and how does payment work?', a: '10–14 days is standard; allow 21 days for full custom decor and cake design. A 50% deposit confirms your date. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
]

const SAFETY_CHECKS = [
  'Freshly cooked proteins and pasteurised dairy as standard — no raw fish, no unpasteurised cheeses, no deli-style cold cuts.',
  'Lighter brunch dishes, warm pastries, seasonal fruit and safe dessert options that still feel celebratory.',
  'Carefully managed buffet exposure times, so food sitting out in Bali heat stays safe.',
  'Personal briefing around aversions, cravings, gestational dietary needs or doctor-advised restrictions — tell us and the menu bends around her.',
]

export default function EventsBabyShowersPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.baby-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.baby-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Baby Shower Catering Bali | Styled Villa Brunches | myCHEF"
        description="Baby shower catering in Bali: pregnancy-safe brunches, high tea, grazing tables, mocktail bars & themed decor for villa celebrations. WhatsApp myCHEF."
        canonical={`${SITE}/events/baby-showers`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-baby-showers.webp`}
        jsonLd={[
          BABY_SHOWER_SERVICE_SCHEMA,
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Baby Showers', `${SITE}/events/baby-showers`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-hero-baby-showers.webp" alt="Elegant pastel baby shower brunch table in a Bali villa garden" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Baby Showers' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Baby Showers
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Baby Shower Catering in Bali — Brunch, Grazing & Garden Parties
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            A baby shower should feel soft, beautiful and completely un-stressed — especially for the mother-to-be. myCHEF runs villa baby showers across Bali as one gentle operation: a pregnancy-safe brunch or grazing spread, a mocktail bar that feels like a treat, styling that's already perfect when guests arrive, and a team that resets the villa before anyone notices the party ended.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-baby-showers-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Plan a Baby Shower
            </a>
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Book Baby Shower
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Send your date, guest count and any pregnancy-safe menu notes · Reply within the hour
          </p>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left mt-2">
            All prices "++" — 11% government tax + 10% service charge added
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white baby-content baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Stress-Free by Design
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                We handle the food, the look, and the practical details so the host can stay present
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                From a ten-person brunch for close friends to a 50+ guest garden reception, you get published per-person pricing, one point of contact, and a host who actually gets to enjoy the day.
              </p>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                All prices "++" — 11% government tax + 10% service charge added. Quotes state the full total including tax and service upfront.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#2C5F7C] underline hover:text-[#C5A028]">Plan a Baby Shower — WhatsApp +62 896-7407-2020</a>. Send your date, guest count and any pregnancy-safe menu notes — we reply within the hour.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-hero-baby-showers.webp" alt="Pastel baby shower brunch table styled in a Bali villa garden" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Baby Shower Formats & Prices" subtitle="Smaller brunches, styled mid-size showers, and larger family gatherings — each with the right food and staffing level." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            <strong>Group totals:</strong> 12 guests runs IDR 9M++. 20 guests at the Larger format runs IDR 22M++. 60 guests at the Grand format runs IDR 21M++. Most showers we cater are 15–22 guests — and an evening shower with a cocktail-style menu works at the same price band if brunch doesn't suit.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[...FORMATS, GRAND_SHOWER].map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={750000} minGuests={10} maxGuests={15} defaultGuests={12} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={1100000} minGuests={16} maxGuests={30} defaultGuests={20} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={350000} minGuests={50} maxGuests={100} defaultGuests={60} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Grazing Table Showcase
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The grazing table becomes the centrepiece when it is built to look generous and stay tidy
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Grazing tables work beautifully for baby showers because they are social, photogenic, and easy for guests to enjoy throughout the event. We design them with balance in mind: pregnancy-safe cheeses and freshly cooked options, seasonal fruit, crackers, dips, fresh breads, pastries, and edible flowers that bring colour without turning the table into decoration only. The layout has to be full enough to feel celebratory but practical enough that guests can actually serve themselves without collapsing the display.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                For larger showers, the grazing table often becomes the visual anchor while hot items, desserts, and mocktails sit on supporting stations around it. For dedicated grazing-centrepiece events, see our <Link to="/catering/grazing-tables" className="text-[#2C5F7C] underline hover:text-[#C5A028]">grazing tables</Link> service.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-baby-showers-grazing.webp" alt="Elegant grazing table for a Bali baby shower" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-baby-showers-grazing.webp" alt="Pregnancy-safe brunch dishes served for a baby shower" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Pregnancy-Safe Menu
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pregnancy-Safe by Default
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Shower food should never leave the guest of honour second-guessing what's on her plate. We build every shower menu from a pregnancy-safe starting point, then adapt for the rest of the guest list around it:
              </p>
              <div className="space-y-3">
                {SAFETY_CHECKS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Mocktails & Drinks Bar
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Mocktail Bar
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                The mocktail bar matters more than people expect — it's what makes the day feel festive without centring alcohol. Ours is fully alcohol-free by default, built with fresh fruit, herbs and sparkling elements, presented like a proper cocktail bar. Signatures include the <strong>Tropical Sunrise</strong> (mango, passionfruit, coconut cream), <strong>Berry Bliss</strong> (mixed berries, lime, sparkling water) and <strong>Cucumber Mint Cooler</strong> (cucumber, mint, elderflower). For mixed groups we can run a separate alcohol bar away from the mocktail station at +IDR 350K per person.
              </p>
              <div className="space-y-4">
                {MOCKTAIL_BAR.map((drink) => (
                  <div key={drink.name} className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center shrink-0">
                      <GlassWater className="w-4 h-4 text-[#2C5F7C]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{drink.name}</h3>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{drink.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-baby-showers-mocktails.webp" alt="Garden mocktail bar for a Bali baby shower" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-baby-showers-tablescape.webp" alt="Styled baby shower tablescape and decor setup in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Styling & Setup
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Styling, Decor & Photo Moments
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                We concentrate the visual energy where it photographs best — the dining table, the welcome sign, one backdrop moment — so the villa feels elegant rather than crowded. Themes: <strong>Boho</strong> (macramé, dried florals, rattan), <strong>Pastel</strong> (balloon arches, candy bar), <strong>Botanical</strong> (greenery, eucalyptus, white flowers) and <strong>Classic Gender-Reveal</strong> (pink-vs-blue reveal, countdown signage, surprise cake — we coordinate a reveal cake with a coloured centre or a balloon-pop moment). Add florals, signage and stationery, full table styling and a photo backdrop with props to any format.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {THEME_CARDS.map((theme) => (
                  <div key={theme.name} className="rounded-2xl border border-[#E8E6E3] bg-white overflow-hidden">
                    <div className={`h-16 bg-gradient-to-br ${theme.colour}`} />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{theme.name}</h3>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{theme.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {DECOR_DETAILS.map((detail) => (
                  <div key={detail.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-4 flex items-start gap-3">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><detail.icon className="w-4 h-4 text-[#2C5F7C]" /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1">{detail.title}</h4>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{detail.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {THEMES.map((theme) => (
                  <span key={theme} className="px-4 py-2 rounded-full border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A]">{theme}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Real Baby Showers" title="Celebration Gallery" subtitle="Pastel brunches, family showers, and villa setups that feel soft but fully organised." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These images show the range most hosts are looking for: one strong styled table, easy daytime food service, polished mocktail presentation, and enough softness in the room that the shower still feels calm. That combination is usually the sweet spot for Bali villas.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_BABY_SHOWERS.map((shower) => (
              <div key={shower.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={shower.image} alt={shower.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{shower.title}</h3>
                  <p className="text-[#4A4745] text-xs">{shower.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Add-Ons
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Add-Ons That Matter
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                For most showers, the extras are about preserving the day rather than scaling it. Extra <Link to="/in-villa-service" className="text-[#2C5F7C] underline hover:text-[#C5A028]">service staff</Link> are available from IDR 250K/hour. For bigger grazing-centrepiece events, see our dedicated <Link to="/catering/grazing-tables" className="text-[#2C5F7C] underline hover:text-[#C5A028]">grazing tables</Link> service.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => (
                  <div key={addon.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 flex items-start gap-4">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><addon.icon className="w-5 h-5 text-[#2C5F7C]" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1A1A1A]">{addon.title}</h3>
                      <p className="text-sm font-semibold text-[#2C5F7C]">{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-baby-showers-pool.webp" alt="Poolside family baby shower setup at a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="What New Mothers Say"
        subtitle="Beautiful in photos, easy to host, safe to enjoy."
        testimonials={[
          { name: 'Emily R.', location: 'Seminyak Baby Shower', quote: 'The room looked beautiful the second I walked in and the team had clearly thought through the food so I never had to second-guess what I could eat.', rating: 5 },
          { name: 'Sophie & Friends', location: 'Canggu Baby Shower', quote: 'Sofia coordinated the whole surprise quietly and the mocktail bar made the day feel genuinely celebratory rather than limiting.', rating: 5 },
          { name: 'Anna K.', location: 'Ubud Baby Shower', quote: 'The botanical styling, grazing table, and cleanup were all handled so professionally. It felt light and joyful, not stressful.', rating: 5 },
        ]}
      />

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white baby-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Baby Shower Bali — FAQ" subtitle="Everything you need to know about baby shower brunches with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#C5A028] mb-3">Also available</p>
          <h2 className="text-2xl font-semibold text-[#1A1916] mb-8">Explore More myCHEF Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/events/birthdays', label: 'Birthday Catering' },
              { to: '/events/villa-parties', label: 'Villa Party Catering' },
              { to: '/catering/grazing-tables', label: 'Grazing Tables' },
              { to: '/in-villa-service', label: 'Service Staff' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 px-4 rounded border border-[#C5A028]/30 text-[#1A1916] hover:bg-[#C5A028]/10 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-3xl mx-auto mt-8 leading-relaxed">
            See our <Link to="/catering/grazing-tables" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">grazing tables</Link>,{' '}
            <Link to="/events/birthdays" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">birthday catering</Link>,{' '}
            <Link to="/events/villa-parties" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">villa party catering</Link>,{' '}
            <Link to="/in-villa-service" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">service staff</Link>, and{' '}
            <Link to="/catering" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">all catering services</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Book Your Baby Shower"
            subtitle="Tell us your guest count, preferred style and any pregnancy-safe menu notes — including cravings, aversions and surprises — and we'll shape the shower around them."
            packageOptions={['Intimate Baby Shower Brunch', 'Larger Baby Shower', 'Grand Shower Celebration']}
            fields={[
              { name: 'format', label: 'Format', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests', type: 'number', placeholder: 'e.g. 18', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'theme', label: 'Theme', type: 'text', placeholder: 'e.g. Pastel, Boho, Gender-Reveal' },
              { name: 'food', label: 'Food Style', type: 'textarea', placeholder: 'Brunch, grazing, mocktail bar, pregnancy-safe notes...' },
              { name: 'notes', label: 'Guest of Honour Notes', type: 'textarea', placeholder: 'Any cravings, aversions, special surprises, or comfort needs?' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
          />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ RELATED EVENTS ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Other Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Weddings', href: '/events/weddings', desc: 'Villa wedding catering and planning.' },
              { label: 'Birthdays', href: '/events/birthdays', desc: 'Milestone birthday celebrations.' },
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Private celebrations and mixers.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, bartenders, and staff.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="events-baby-showers"
        serviceName="baby shower catering in Bali"
        intent="baby shower packages and pricing"
      />
    </div>
  )
}