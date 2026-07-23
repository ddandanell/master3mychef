import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Check, Wine, Camera, Music,
  CandlestickChart, Flower2, Signpost,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceWithAggregateOfferSchema, howToSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'an anniversary celebration in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

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

const REAL_ANNIVERSARIES = [
  { names: 'Anna & Michael', years: '10 Years', location: 'Seminyak Villa', image: '/generated/mychef-events-bali-hero-anniversaries.webp' },
  { names: 'Sarah & Tom', years: '25 Years', location: 'Uluwatu Villa', image: '/generated/mychef-events-bali-anniversaries-chef.webp' },
  { names: 'Jenny & David', years: '5 Years', location: 'Canggu Villa', image: '/generated/mychef-events-bali-anniversaries-tablescape.webp' },
  { names: 'Maria & Carlos', years: 'Vow Renewal', location: 'Ubud Villa', image: '/generated/mychef-events-bali-anniversaries-toast.webp' },
]

const SETUP_DETAILS = [
  { icon: CandlestickChart, title: 'Candle Landscape', desc: '50+ candles in varied heights — votives, pillars, lanterns — creating a warm, flickering perimeter around your table.' },
  { icon: Flower2, title: 'Petal Pathway', desc: 'Fresh rose or frangipani petals leading from villa entrance to the dining area. Colour-matched to your preference.' },
  { icon: Signpost, title: 'Personalised Signage', desc: 'Custom welcome board with your names, anniversary year, and a short message. Kept as a keepsake after dinner.' },
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

const SURPRISE_STEPS = [
  'We brief one contact person only, so timings, entrance routes, and the reveal moment stay discreet.',
  'We can stage the table while your partner is out for a treatment, beach walk, surf session, or transfer.',
  'Chef arrival, candles, flowers, champagne chill, and photography are timed backwards from the reveal moment.',
  'If there is a speech, vow reading, or ring presentation, the service pace is slowed so the moment does not feel rushed.',
  'After the surprise lands, the evening flows straight into canapés or the first course without an awkward reset.',
]

export default function EventsAnniversariesPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.anniversary-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.anniversary-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Anniversary Dinner Bali Villa | Private Chef — myCHEF"
        description="Anniversary dinners in Bali with a private chef, plated multi-course menu, wine pairing & romantic villa styling. WhatsApp to plan your celebration."
        canonical={`${SITE}/events/anniversaries`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-anniversaries.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Anniversary Dinner Bali',
            description: 'myCHEF.id creates private anniversary dinners in Bali with chef-led menus, romantic villa styling, and polished service. We handle planning, cooking, setup, and cleanup so the celebration feels effortless.',
            url: `${SITE}/events/anniversaries`,
            lowPrice: '1200000',
            highPrice: '2500000',
            unitText: 'per person',
          }),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Plan an Anniversary Dinner in Bali',
            description: 'Plan a romantic anniversary dinner in your Bali villa in 4 easy steps.',
            totalTime: 'PT20M',
            steps: [
              { name: 'Choose your dining style', text: 'Select from intimate fine dining, chef\'s table, or private BBQ based on your preference.' },
              { name: 'Share your love story', text: 'Send your anniversary date, villa, guest count, and any special requests via WhatsApp.' },
              { name: 'Approve the romantic menu', text: 'We design a custom menu with wine pairings, flowers, and candlelight setup within 1 hour.' },
              { name: 'Savor the moment', text: 'The chef arrives with everything needed for an unforgettable evening. Just relax and celebrate.' },
            ],
          }),
          breadcrumbSchema('Anniversary Dinner Bali', `${SITE}/events/anniversaries`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-hero-anniversaries.webp" alt="Romantic candlelit anniversary dinner for two by a Bali villa pool" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Anniversaries' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Anniversary Dinners
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Anniversary Celebrations in Bali — Private Chef Dinners
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            Private villa anniversaries with chef-led menus, table service, wine pairing add-ons, and discreet surprise coordination — from a romantic dinner for two to a renewal of vows with family and friends.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Book Anniversary Dinner
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-anniversaries-cta" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            From IDR 1.2M++/guest · Romantic styling and discreet coordination available
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white anniversary-content anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Built Around You
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A private anniversary should feel personal, not like a hotel package dropped into your villa
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Anniversary celebrations work best when they are built around the couple instead of a preset restaurant format. Some guests want a quiet chef dinner by the pool with candles and a bottle of champagne. Others want a more layered night: canapés, a styled table, a 4-course plated dinner, a photographer for the toast, and a surprise dessert reveal. We plan for both. myCHEF combines private chef service, villa styling, floor staff, and discreet coordination so the evening feels deliberate from the first reveal to the final course.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                We can also scale the format if your anniversary includes family or becomes a renewal-of-vows occasion. That means handling service for 2 guests with the same care we would give 20 or 30 guests, while still keeping the intimacy intact. The result is a night that feels deeply personal but professionally run behind the scenes.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-hero-anniversaries.webp" alt="Intimate anniversary dinner table set for two by a Bali villa pool at sunset" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Three Anniversary Formats" subtitle="Private, intimate, or ceremonial — each format is built around pacing, staffing, and how visible you want the celebration to feel." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These packages are structured around the two things anniversary clients care about most: privacy and control. The private dinner format keeps the evening tight and romantic. The small-group option adds family and friends without turning the night into a big event. The renewal format introduces ceremony timing, officiant coordination, and a more formal reception service so the celebration still feels smooth when more people are involved.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={2} maxGuests={4} defaultGuests={2} label=" guests" accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={1200000} minGuests={4} maxGuests={16} defaultGuests={8} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={2500000} minGuests={10} maxGuests={30} defaultGuests={16} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Private Dinner Experience
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What an in-villa anniversary dinner actually looks like on the night
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                For most couples, the experience starts before the first plate. The chef arrives to prep quietly in the villa kitchen, the floor team lays candles and glassware, and your table is styled so the reveal lands the moment you step into the space. We often begin with a welcome drink and a small canapé course, then move into a 5- or 6-course dinner paced around conversation rather than restaurant turnover. That slower rhythm is the real advantage of dining in your villa.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Service is attentive but unobtrusive. The chef stays close to the kitchen, courses are fired to order, and the waiter manages wine, plate clearing, and reset without making the evening feel formal. If there is a photographer or toast moment, we pace around it. If there is a surprise, we build the reveal into the service plan so the timing feels natural rather than staged.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-anniversaries-chef.webp" alt="Private Indonesian chef plating an elegant anniversary course in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-anniversaries-plated.webp" alt="Fine plated anniversary dish on a candlelit table in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Menu & Wine
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Gourmet menus that feel fine-dining, but stay fully personal to the villa setting
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Anniversary menus usually sit between restaurant refinement and private-home comfort. We can build Western tasting menus, lighter Mediterranean or Indonesian fusion courses, or a more indulgent sequence around seafood and premium beef. Wine pairing is offered as an add-on, and we will happily brief the evening around champagne, a favourite label, or a no-alcohol pairing if that suits the couple better. When clients want a more restaurant-led feeling, we often pair this page with our <a href="/catering/plated-catering" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">plated catering service</a> as a reference point.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {HOTEL_COMPARISON.map((item) => (
                  <div key={item.name} className={`rounded-2xl border p-4 ${item.name === 'myCHEF' ? 'bg-[#2C5F7C]/5 border-[#2C5F7C]/20' : 'bg-white border-[#E8E6E3]'}`}>
                    <h3 className={`text-sm font-semibold mb-1 ${item.name === 'myCHEF' ? 'text-[#2C5F7C]' : 'text-[#1A1A1A]'}`}>{item.name}</h3>
                    <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.price}</p>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Surprise Planning
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                We choreograph surprise setups quietly so the moment still feels natural
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Surprise anniversaries only work when the operational side stays invisible. That means tight communication, limited points of contact, and a clear understanding of where your partner will be, when the villa can be reset, and how long the reveal should breathe before the first course starts. We are used to coordinating these moments discreetly and building the rest of the service around them, so the evening never feels like a production exercise.
              </p>
              <div className="space-y-3">
                {SURPRISE_STEPS.map((step) => (
                  <div key={step} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2C5F7C] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-anniversaries-toast.webp" alt="Couple toasting with champagne at an intimate Bali villa anniversary dinner" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Villa Decoration & Enhancements
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The styling details that turn dinner into a true anniversary occasion
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Decoration is usually most effective when it feels concentrated and intentional. Rather than filling the whole villa, we style the arrival path, the dining area, and the one or two visual moments that matter most in photos. Candles, petals, personalised signage, and a well-dressed table often do more for the atmosphere than excessive decor. Once those foundations are set, we can layer champagne, cake, music, or extended photography depending on how celebratory you want the evening to feel.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {SETUP_DETAILS.map((detail) => (
                  <div key={detail.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center mx-auto mb-4">
                      <detail.icon className="w-5 h-5 text-[#2C5F7C]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{detail.title}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{detail.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => (
                  <div key={`${addon.title}-${addon.price}`} className="rounded-2xl border border-[#E8E6E3] bg-white p-4 flex items-start gap-3">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><addon.icon className="w-4 h-4 text-[#2C5F7C]" /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A]">{addon.title}</h4>
                      <p className="text-sm font-semibold text-[#2C5F7C]">{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/mychef-events-bali-anniversaries-tablescape.webp" alt="Romantic anniversary tablescape with candles and flowers in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Real Anniversaries" title="Celebration Gallery" subtitle="Real couple dinners, styled tables, and vow-renewal moments across Bali villas." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            The images below show the different tones anniversary clients usually choose: deeply private dinners, chef-led table service, more visual styling, and bigger celebration moments when friends or family join. All four formats are handled by the same core team — chef, floor staff, and coordinator — so the level of execution stays consistent even as the mood changes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_ANNIVERSARIES.map((anniversary) => (
              <div key={anniversary.names} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={anniversary.image} alt={`${anniversary.names} anniversary in ${anniversary.location}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{anniversary.names}</h3>
                  <p className="text-[#4A4745] text-xs">{anniversary.years} · {anniversary.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="What Couples Say"
        subtitle="Private enough to feel personal, structured enough to feel easy."
        testimonials={[
          { name: 'Anna & Michael', location: 'Seminyak Anniversary', quote: 'The surprise setup was timed perfectly. We walked in, had our moment, and dinner just flowed naturally from there.', rating: 5 },
          { name: 'Sarah & Tom', location: 'Uluwatu Vow Renewal', quote: 'We renewed our vows with family and the team managed ceremony, reception, and the dinner service without it ever feeling over-produced.', rating: 5 },
          { name: 'Jenny & David', location: 'Canggu Intimate Dinner', quote: 'It felt far more personal than going to a hotel restaurant. The chef, the pacing, and the table styling were exactly right.', rating: 5 },
        ]}
      />

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white anniversary-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Anniversary FAQ" subtitle="Everything you need to know about anniversary dinners with myCHEF." />
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
              { to: '/events/weddings', label: 'Villa Weddings' },
              { to: '/fine-dining', label: 'Fine Dining' },
              { to: '/catering', label: 'Villa Catering' },
              { to: '/book', label: 'Book myCHEF' }
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
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] anniversary-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Tell Us About Your Anniversary"
            subtitle="Share the date, the feeling you want, and whether there is a surprise element. We will build the evening around that brief."
            packageOptions={['Couple Intimate Dinner', 'Small-Group Anniversary', 'Renewal of Vows + Dinner']}
            fields={[
              { name: 'package', label: 'Package', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests', type: 'number', placeholder: 'e.g. 2', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'occasion', label: 'What Are You Celebrating?', type: 'text', placeholder: 'e.g. 10th anniversary, surprise dinner' },
              { name: 'wine', label: 'Wine / Drinks Preference', type: 'text', placeholder: 'Champagne, wine pairing, no alcohol...' },
              { name: 'surprise', label: 'Surprise Element?', type: 'textarea', placeholder: 'Tell us about any reveal, speech, or discreet setup needs...' },
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
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained private dinners.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
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
      <StickyMobileCTA
        pageSource="events-anniversaries"
        serviceName="anniversary dinner in Bali"
        intent="anniversary packages and pricing"
      />
    </div>
  )
}