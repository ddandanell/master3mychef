import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Baby, Heart, Flower2,
  Camera, Music, Sparkles, GlassWater, Check,
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

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20to%20book%20a%20baby%20shower.'
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Intimate Baby Shower Brunch',
    price: <AllInPrice price={750000} />,
    guestRange: '10–15 guests',
    description: 'Grazing brunch + mocktail bar + pastel decor + signage + photographer 1h. Perfect for close friends and family.',
    features: ['Grazing brunch (sweet + savoury)', 'Mocktail bar (3 signature drinks)', 'Pastel decor + signage', 'Photographer 1h', 'Service staff', 'Setup + cleanup'],
  },
  {
    title: 'Larger Baby Shower',
    price: <AllInPrice price={1100000} />,
    guestRange: '16–30 guests',
    description: 'Full brunch + mocktail bar + premium decor + signage + guest table setup + photographer 2h + custom cake.',
    features: ['Full brunch + mocktail bar', 'Premium decor + signage', 'Guest table setup', 'Photographer 2h', 'Custom cake', 'Games setup', 'Service staff'],
    highlighted: true,
  },
]

const GRAND_SHOWER = {
  title: 'Grand Shower Celebration',
  price: <AllInPrice price={350000} />,
  guestRange: '50+ guests',
  description: 'Lighter per-person pricing for larger shower receptions with grazing, pregnancy-safe buffet service, and coordinated styling.',
  features: ['Scalable brunch buffet', 'Mocktail welcome drinks', 'Styled gift table', 'Service staff + cleanup', 'Family-friendly setup', 'Vendor coordination'],
}

const THEMES = ['Boho', 'Pastel', 'Botanical', 'Classic / Gender-Reveal']

const THEME_CARDS = [
  { name: 'Boho', desc: 'Macramé, dried florals, earthy tones, rattan accents, dreamcatchers.', colour: 'from-[#D7CCC8]/40 to-[#BCAAA4]/20' },
  { name: 'Pastel', desc: 'Soft pinks, blues, lavenders, balloon arches, candy bar.', colour: 'from-[#F8BBD0]/30 to-[#E1BEE7]/20' },
  { name: 'Botanical', desc: 'Greenery walls, eucalyptus, white flowers, natural wood.', colour: 'from-[#C8E6C9]/40 to-[#A5D6A7]/20' },
  { name: 'Classic Gender-Reveal', desc: 'Pink vs blue reveal moment, countdown signage, surprise cake.', colour: 'from-[#BBDEFB]/30 to-[#F8BBD0]/30' },
]

const DECOR_DETAILS = [
  { icon: Flower2, title: 'Floral Arrangements', desc: 'Table centrepieces, entrance garlands, and accent blooms matched to your theme.' },
  { icon: Sparkles, title: 'Signage & Stationery', desc: 'Welcome board, menu cards, place cards, and custom messages.' },
  { icon: Baby, title: 'Table Styling', desc: 'Linens, runners, charger plates, napkin folds, and themed tableware.' },
  { icon: Heart, title: 'Photo Backdrop', desc: 'Themed backdrop with props for guest photos and memories.' },
]

const MOCKTAIL_BAR = [
  { name: 'Tropical Sunrise', desc: 'Mango, passionfruit, and coconut cream. Vibrant and refreshing.' },
  { name: 'Berry Bliss', desc: 'Mixed berries, lime, and sparkling water. Tart and beautiful.' },
  { name: 'Cucumber Mint Cooler', desc: 'Fresh cucumber, mint, and elderflower. Light and elegant.' },
]

const REAL_BABY_SHOWERS = [
  { title: 'Pastel Brunch Table', location: 'Seminyak Villa', image: '/generated/events/baby-shower-hero.webp' },
  { title: 'Garden Mocktail Brunch', location: 'Canggu Villa', image: '/generated/party-brunch.webp' },
  { title: 'Poolside Family Shower', location: 'Uluwatu Villa', image: '/generated/party-pool.webp' },
  { title: 'Styled Tablescape Moment', location: 'Ubud Villa', image: '/generated/aura-tablescape.webp' },
]

const ADDONS = [
  { icon: Camera, title: 'Photographer Extended', price: '+IDR 3.6M (3h)' },
  { icon: Music, title: 'Live Acoustic Guitarist', price: '+IDR 2.4M (1h)' },
  { icon: Flower2, title: 'Premium Florals + Arch', price: '+IDR 3M – 6M' },
  { icon: Heart, title: 'Maternity Photoshoot', price: '+IDR 3.5M' },
  { icon: Baby, title: 'Henna Artist', price: '+IDR 1.5M' },
  { icon: Sparkles, title: 'Custom 2-Tier Cake', price: '+IDR 2.5M – 4.5M' },
]

const FAQS = [
  { q: 'Is the mocktail bar truly alcohol-free?', a: 'Yes — mocktail bar is fully alcohol-free by default. We can add a separate alcohol bar for non-expecting guests at +IDR 350K/pp.' },
  { q: 'Can you do a gender-reveal moment?', a: 'Yes — we can coordinate a gender-reveal cake (pink/blue inside) or a balloon-pop reveal. Tell us at booking.' },
  { q: 'Is one hour of photography enough?', a: 'For intimate baby showers (10–15 guests) one hour captures the key moments. For larger showers, recommend 2–3 hours.' },
  { q: 'Can the mother-to-be be involved in menu choice?', a: 'Yes — we coordinate dietary preferences with the mother-to-be specifically (avoiding pregnancy-cautioned foods).' },
  { q: 'What\'s the typical group size?', a: '10–30. Most baby showers we cater are 15–22 guests.' },
  { q: 'How far in advance?', a: '10–14 days standard. 21 days for full custom decor / cake design.' },
  { q: 'Can it be evening instead of brunch?', a: 'Yes — evening baby shower with cocktail-style menu available; same price band.' },
  { q: 'Do you handle the surprise factor?', a: 'Yes — we coordinate discreetly with the host. Suggest the location of the brunch reveal.' },
]

const SAFETY_CHECKS = [
  'We avoid raw fish, unpasteurised cheeses, deli-style cold cuts, and anything that is safer replaced with fully cooked alternatives.',
  'Proteins are served freshly cooked, pasteurised ingredients are prioritised, and buffet exposure times are carefully managed.',
  'We can build mocktail menus and lighter brunch dishes that still feel celebratory without leaning on risky ingredients.',
  'If the mother-to-be has aversions, cravings, gestational dietary needs, or doctor-advised restrictions, we brief around those specifically.',
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
        title="Baby Shower Catering Bali — Grazing, Brunch & Villa Events | myCHEF"
        description="Beautiful Bali villa baby showers with brunch catering, grazing tables, pregnancy-safe menus, mocktail bars, styling, and cleanup handled by one team."
        canonical={`${SITE}/events/baby-showers`}
        ogImage={`${SITE}/generated/events/baby-shower-hero.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Baby Shower Catering Bali', 'Baby shower catering in Bali with brunch service, grazing tables, pregnancy-safe menus, mocktail bars, styling, and cleanup.', `${SITE}/events/baby-showers`, 'IDR'),
          offerSchema('Intimate Baby Shower Brunch', 750000, 'IDR', `${SITE}/events/baby-showers`),
          offerSchema('Larger Baby Shower', 1100000, 'IDR', `${SITE}/events/baby-showers`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Baby Showers', `${SITE}/events/baby-showers`, 'Events', `${SITE}/events`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Baby Showers' }]} />

      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/events/baby-shower-hero.webp" alt="Pastel baby shower brunch table in a Bali villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/68" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Baby Showers
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Baby Shower Catering in Bali — Brunch, Grazing & Garden Parties
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Beautiful, stress-free villa showers with brunch spreads, grazing tables, pregnancy-safe food, mocktail bars, styling, and full cleanup handled by one team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#244e66] transition-all">
              <Calendar className="w-4 h-4" /> Book Baby Shower
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
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
                Baby showers are usually at their best when they feel soft and well-paced, not over-programmed. That means the food should be easy to enjoy, the room should already feel beautiful when guests arrive, and the mother-to-be should never be worrying about whether the mocktails are ready or the grazing table is still full. myCHEF handles the brunch service, pregnancy-safe menu planning, styling coordination, and cleanup as one operation so the whole event feels gentle instead of busy.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                We can build a small brunch for close family and friends, a garden-style shower with more guests, or a larger reception with grazing tables, mocktails, and gift-table styling. The point is always the same: keep the atmosphere warm, photogenic, and easy for everyone attending — especially the guest of honour.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/events/baby-shower-hero.webp" alt="Styled baby shower table setup in Bali" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Baby Shower Formats" subtitle="Smaller brunches, styled mid-size showers, and larger family gatherings — each with the right food and staffing level." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            Shower formats are mostly about scale and service style. Intimate gatherings can feel more plated and personal. Mid-size showers benefit from a stronger grazing and mocktail setup. Larger celebrations need lighter per-person pricing, flexible food presentation, and an approach that can absorb family guests, gift moments, and photos without the room feeling crowded.
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
                Grazing tables work beautifully for baby showers because they are social, photogenic, and easy for guests to enjoy throughout the event. We design them with balance in mind: artisan cheeses that are pregnancy-safe, cured options when appropriate for non-pregnant guests, seasonal fruit, crackers, dips, fresh breads, pastries, and edible flowers that bring colour without turning the table into decoration only. The layout has to be full enough to feel celebratory but practical enough that guests can actually serve themselves without collapsing the display.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                For larger showers, the grazing table often becomes the visual anchor while hot items, desserts, and mocktails sit on supporting stations around it. That keeps the main table beautiful while still letting the room function properly for photos, games, and conversation.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/events/baby-shower-hero.webp" alt="Elegant grazing table for a Bali baby shower" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/party-brunch.webp" alt="Pregnancy-safe brunch dishes served for a baby shower" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Pregnancy-Safe Menu
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pregnancy-safe by default, but still built to feel celebratory
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Shower food should never leave the host second-guessing what is safe to eat. We build the menu from a pregnancy-safe starting point and then adapt for the rest of the guest list around that. That usually means freshly cooked proteins, pasteurised dairy, lighter brunch dishes, fresh fruit, warm pastries, safe dessert options, and an alcohol-free drinks programme that still feels like a treat rather than a compromise.
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
                A drinks bar that feels festive without centring alcohol
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Mocktails matter more than people expect at baby showers. They set the tone immediately and help the mother-to-be feel included in the celebratory part of the day. We design them with fresh fruit, herbs, sparkling elements, and clean presentation so they look just as good in hand as any cocktail bar would. For mixed guest groups, we can also keep a separate alcohol service away from the main mocktail station.
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
              <img src="/generated/party-brunch.webp" alt="Mocktail and brunch styling for a Bali baby shower" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/aura-tablescape.webp" alt="Styled baby shower tablescape and decor setup" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Styling & Setup
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Decor, flowers, balloons, and the small details that make the room feel complete
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Styling for a baby shower should feel cohesive rather than crowded. We usually focus the visual energy on the dining table, welcome sign, backdrop area, and one or two colour moments that photograph beautifully. That approach keeps the villa elegant, leaves room for guests to move, and gives the host a room that already feels "done" before anyone arrives. Themes can be soft and romantic, botanical, boho, or more playful for gender-reveal-style events.
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
                  <img src={shower.image} alt={shower.title} className="w-full h-full object-cover" loading="lazy" />
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
                Add the extras that matter most to the memory of the day
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                For most showers, add-ons are about memory and atmosphere rather than scale. A longer photographer booking, premium florals, or a maternity shoot can make sense because they preserve the day. Live music only works if the host wants a stronger social mood. We help choose extras that support the shower rather than pulling attention away from it.
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
              <img src="/generated/events/baby-shower-hero.webp" alt="Premium baby shower styling and flowers in a Bali villa" className="w-full h-full object-cover" loading="lazy" />
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

      <section className="py-20 md:py-28 bg-white baby-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Baby Shower FAQ" subtitle="Everything you need to know about baby shower brunches with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] baby-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Book Your Baby Shower"
            subtitle="Tell us your guest count, preferred style, and any pregnancy-safe menu notes. We will shape the shower around those details."
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
      <TaxFooter />
    </div>
  )
}
