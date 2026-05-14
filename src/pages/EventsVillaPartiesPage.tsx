import { useEffect, useRef } from 'react'
import {
  MessageCircle, Phone, Calendar, Users, MapPin,
  Wine, Sun, Music, Palette, Sparkles, Heart,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { EventFormatCard } from '@/components/events'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import BookingFormCatering from '@/components/catering/BookingFormCatering'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20to%20plan%20a%20villa%20party%20in%20Bali.'
const SITE = 'https://mychef.id'

const PARTY_FORMATS = [
  {
    title: 'Cocktail Reception',
    price: 'IDR 650,000/person',
    guestRange: '20 — 80 guests',
    description: 'Elegant standing reception with canapés, grazing stations, and flowing drinks. Perfect for arrivals, celebrations, and networking.',
    features: ['6-8 canapé varieties', 'Grazing station', '2.5h open bar', 'Bartender', 'Service staff', 'Cocktail napkins & glassware', 'Cleanup'],
    highlighted: false,
  },
  {
    title: 'Sundowner Party',
    price: 'IDR 850,000/person',
    guestRange: '15 — 50 guests',
    description: 'Sunset-to-evening celebration with BBQ, cocktails, and music. The classic Bali villa party experience.',
    features: ['BBQ or buffet menu', '3h open bar', 'Bartender + cocktail menu', 'Bluetooth speaker', 'Sunset timing', 'Service staff', 'Cleanup'],
    highlighted: true,
  },
  {
    title: 'Casual Mixer',
    price: 'IDR 950,000/person',
    guestRange: '10 — 30 guests',
    description: 'Relaxed dinner party with family-style sharing plates, wine, and conversation. Intimate but festive.',
    features: ['Family-style sharing menu', 'Wine selection', 'Table styling', 'Background music', 'Personalised menu', 'Service staff', 'Cleanup'],
    highlighted: false,
  },
]

const THEMES = [
  { title: 'Tropicana', desc: 'Palm prints, pineapples, bright colours, pool floats, reggae beats.', icon: Sun },
  { title: 'Gatsby', desc: 'Black and gold, art deco, champagne towers, jazz playlist.', icon: Sparkles },
  { title: 'Surfer', desc: 'Beach casual, board shorts, sunset colours, acoustic playlist.', icon: Palette },
  { title: 'Disco', desc: 'Mirror balls, neon, 70s hits, dance floor energy.', icon: Music },
  { title: 'Custom', desc: 'Your idea, our execution. Any theme, any colour, any vibe.', icon: Heart },
]

const BAR_PACKAGE = [
  { title: 'Standard Bar', price: 'Included', desc: 'Beer, wine, spirits, mixers, soft drinks' },
  { title: 'Cocktail Bar', price: '+ IDR 1,500,000', desc: 'Signature cocktails, fresh ingredients, bartender flair' },
  { title: 'Premium Bar', price: '+ IDR 3,000,000', desc: 'Top-shelf spirits, champagne, custom cocktail menu' },
]

const MUSIC_OPTIONS = [
  { title: 'DJ', price: 'From IDR 4,000,000', desc: 'Playlist curation or live mixing, 4-hour set' },
  { title: 'Live Band', price: 'From IDR 8,000,000', desc: 'Acoustic duo to 5-piece band, 3-hour set' },
  { title: 'Playlist + Speaker', price: 'Included', desc: 'Bluetooth speaker provided, you control the music' },
]

const DECOR_GALLERY = [
  { title: 'Festoon Lighting', desc: 'String lights across terraces and gardens.', image: '/generated/aura-setup.webp' },
  { title: 'Pool Floats & Decor', desc: 'Themed inflatables, flower arrangements, lanterns.', image: '/generated/party-pool.webp' },
  { title: 'Lounge Areas', desc: 'Low tables, cushions, rugs for relaxed seating.', image: '/generated/party-rooftop.webp' },
  { title: 'Bar Styling', desc: 'Custom bar setup with branded menus and garnishes.', image: '/generated/aura-bartender.webp' },
]

const HENS_BUCKS = [
  { title: 'Hens Party', desc: 'Spa morning, pool party, sunset cocktails, private dinner. All-female coordination available.', icon: Heart },
  { title: 'Bucks Party', desc: 'BBQ feast, whiskey tasting, poker night, beach day. Custom adrenaline activities available.', icon: Sun },
]

const PARTY_TESTIMONIALS = [
  {
    name: 'The London Crew',
    location: 'Canggu Villa Party',
    quote: '30 of us flew in for a milestone birthday. The sundowner party with BBQ, cocktails, and a DJ was the highlight of our Bali trip.',
    rating: 5,
  },
  {
    name: 'Sarah\'s Hens',
    location: 'Seminyak Villa',
    quote: 'Sofia organised the perfect hens party — spa morning, pool floats, sunset cocktails, and a glam dinner. Every detail was Instagram-worthy.',
    rating: 5,
  },
  {
    name: 'The Smith Group',
    location: 'Uluwatu Villa',
    quote: 'Corporate cocktail reception for 50 clients. Professional, stylish, and the canapés were incredible. Our clients were impressed.',
    rating: 5,
  },
]

const FAQS = [
  { q: 'What is the minimum guest count for a villa party?', a: 'Cocktail Reception: 20 guests. Sundowner Party: 15 guests. Casual Mixer: 10 guests. We can accommodate smaller groups with adjusted pricing.' },
  { q: 'Can we have a pool party?', a: 'Absolutely. Many of our villa parties are poolside. We provide pool floats, waterproof decor, and can arrange floating brunch add-ons.' },
  { q: 'Do you provide the DJ and sound system?', a: 'We can arrange DJs, live bands, or provide Bluetooth speakers. Sound system rental is available for larger parties.' },
  { q: 'Can we bring our own alcohol?', a: 'Yes. Our packages include a standard bar, but you are welcome to supplement with your own bottles. Corkage may apply depending on the package.' },
  { q: 'What time do villa parties typically start?', a: 'Sundowner parties start at 5:30 PM for sunset. Cocktail receptions can start any time from 4 PM. Casual mixers typically begin at 7 PM.' },
  { q: 'Do you handle noise restrictions?', a: 'We work with villa management to understand noise curfews. For parties with live music or DJs, we recommend villas with good sound insulation or remote locations.' },
  { q: 'Can we do a themed party?', a: 'Yes. Our five standard themes are starting points. We love custom themes — send us your idea and we will make it happen.' },
  { q: 'Is cleanup included?', a: 'Yes. All party packages include full cleanup. We leave the villa as we found it. Additional post-party deep cleaning can be arranged if needed.' },
]

export default function EventsVillaPartiesPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.party-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.party-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Villa Parties Bali',
    description: 'Villa parties in Bali. Cocktail receptions, sundowner parties, and casual mixers with bartender, music, and themed decor.',
    price: '650000',
    priceCurrency: 'IDR',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: `${SITE}/events/villa-parties`,
    seller: { '@id': 'https://mychef.id/#business' },
  }

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Villa Parties Bali | Cocktails, BBQ & Celebrations — myCHEF"
        description="Villa parties in Bali. Cocktail receptions, sundowner BBQ parties, and casual mixers. Bartender, music, themed decor, and coordination. From IDR 650K/pp."
        canonical={`${SITE}/events/villa-parties`}
        ogImage={`${SITE}/generated/party-ultimate.webp`}
        jsonLd={[localBusinessSchema, offerSchema, breadcrumbSchema('Villa Parties', `${SITE}/events/villa-parties`)]}
      />

      {/* ═══════ HERO — VIBRANT, ENERGETIC, SUNSET ORANGE ACCENTS ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/party-ultimate.webp"
            alt="Vibrant villa party in Bali at sunset"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#E8913A] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Villa Parties
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Parties<br />
            <span className="italic">Bali</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Cocktail receptions, sundowner BBQs, and themed mixers at your Bali villa. Bartender, music, decor, and Sofia's coordination — everything you need for an unforgettable night.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8913A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#d47f2e] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan Your Party
            </a>
            <a
              href="#formats"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Wine className="w-4 h-4" /> View Formats
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 650K/pp++ · Bartender included · Themed decor</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip dark />

      {/* ═══════ THREE FORMATS ═══════ */}
      <section id="formats" className="party-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 2 — Formats"
            title="Three Party Formats"
            subtitle="From elegant cocktail receptions to full sundowner blowouts. Choose your vibe."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PARTY_FORMATS.map((fmt) => (
              <EventFormatCard key={fmt.title} {...fmt} accent="#E8913A" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ THEME OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 3 — Themes"
            title="Theme Options"
            subtitle="Five vibes to match your group. Or design something completely custom."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {THEMES.map((theme) => (
              <div key={theme.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#E8913A]/10 flex items-center justify-center mx-auto mb-4">
                  <theme.icon className="w-5 h-5 text-[#E8913A]" />
                </div>
                <h4 className="font-medium text-[#1A1A1A] mb-2">{theme.title}</h4>
                <p className="text-sm text-[#4A4745]">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BARTENDER + BAR PACKAGE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 4 — Bar"
            title="Bartender + Bar Package"
            subtitle="Every party needs a great bar. Three levels to match your budget and ambition."
          />
          <div className="space-y-3">
            {BAR_PACKAGE.map((bar) => (
              <div key={bar.title} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <div className="w-10 h-10 rounded-full bg-[#E8913A]/10 flex items-center justify-center flex-shrink-0">
                  <Wine className="w-4 h-4 text-[#E8913A]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-medium text-[#1A1A1A]">{bar.title}</h4>
                    <span className="text-[#E8913A] font-semibold text-sm whitespace-nowrap">{bar.price}</span>
                  </div>
                  <p className="text-sm text-[#4A4745]">{bar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MUSIC OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 5 — Music"
            title="Music Options"
            subtitle="Set the soundtrack for your night. From curated playlists to live bands."
          />
          <div className="space-y-3">
            {MUSIC_OPTIONS.map((music) => (
              <div key={music.title} className="flex items-start gap-4 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <div className="w-10 h-10 rounded-full bg-[#E8913A]/10 flex items-center justify-center flex-shrink-0">
                  <Music className="w-4 h-4 text-[#E8913A]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-medium text-[#1A1A1A]">{music.title}</h4>
                    <span className="text-[#E8913A] font-semibold text-sm whitespace-nowrap">{music.price}</span>
                  </div>
                  <p className="text-sm text-[#4A4745]">{music.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DECOR GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 6 — Decor"
            title="Decor Gallery"
            subtitle="The details that transform a villa into a party venue."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DECOR_GALLERY.map((decor) => (
              <div key={decor.title} className="bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={decor.image} alt={decor.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-medium text-[#1A1A1A] mb-1">{decor.title}</h4>
                  <p className="text-sm text-[#4A4745]">{decor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HENS/BUCKS CALLOUT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 7 — Special"
            title="Hens & Bucks Parties"
            subtitle="The ultimate pre-wedding celebrations. Custom-designed for your crew."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {HENS_BUCKS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#E8913A]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-[#E8913A]" />
                </div>
                <h4 className="font-medium text-[#1A1A1A] mb-2">{item.title}</h4>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={PARTY_TESTIMONIALS}
        title="Party People Say"
        subtitle="Real celebrations, real villas, real good times."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 8 — Questions"
            title="Villa Party FAQ"
          />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ═══════ FORM ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 9 — Book"
            title="Plan Your Villa Party"
            subtitle="Tell us your date, group size, and vibe. Sofia will design the perfect party."
          />
          <BookingFormCatering
            title="Villa Party Inquiry"
            subtitle="We will reply with format recommendations, pricing, and availability within the hour."
            fields={[
              { name: 'format', label: 'Party Format', type: 'select', icon: Wine, required: true },
              { name: 'date', label: 'Party Date', type: 'date', icon: Calendar, required: true },
              { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 30', required: true },
              { name: 'villa', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Canggu, Seminyak...', required: true },
              { name: 'theme', label: 'Theme or Vibe', type: 'text', placeholder: 'Tropicana, Gatsby, Custom...' },
              { name: 'music', label: 'Music Preference', type: 'text', placeholder: 'DJ, Live band, Playlist...' },
              { name: 'bar', label: 'Bar Level', type: 'text', placeholder: 'Standard, Cocktail, Premium...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'notes', label: 'Tell us more', type: 'textarea', placeholder: 'Occasion, special requests, dietary needs...' },
            ]}
            packageOptions={['Cocktail Reception', 'Sundowner Party', 'Casual Mixer']}
            whatsappName="Sofia"
            accent="#E8913A"
          />
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/party-rooftop.webp"
            alt="Villa party at sunset in Bali"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Throw the Party Bali Will Talk About
          </h2>
          <p className="text-white/80 text-lg mb-8">
            One message to Sofia. She will handle the bar, the music, the decor, and every detail. You just show up and celebrate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8913A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#d47f2e] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
            <a
              href="tel:+6282237565997"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> Call +62 822 3756 5997
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
