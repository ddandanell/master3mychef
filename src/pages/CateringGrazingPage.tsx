import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Heart, Leaf, Flower2, Truck, ShieldCheck, Sparkles, Package,
  Clock, Table2, Wine, Baby, ArrowRight,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  cateringBreadcrumbSchema,
  cateringServiceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20order%20a%20grazing%20table%20in%20Bali.'
const SITE = 'https://mychef.id'
const PAGE_URL = `${SITE}/catering/grazing-tables`

const GOLD = '#C5A028'

/* ═══════════════════════════════════════════════════════════════
   PACKAGES — Grazing Table Sizes
   ═══════════════════════════════════════════════════════════════ */
const PACKAGES = [
  {
    title: 'Small Grazing Board',
    guests: '2–4 pax',
    price: 'IDR 650,000',
    priceNum: 650000,
    includes: ['Cheese selection', 'Cold cuts', 'Crackers', 'Fresh fruit', 'Dips', 'Nuts', 'Small sweets', 'Styled board presentation'],
    bestFor: 'Couples, villa arrival snack, honeymoon setup, private poolside snack, small wine night',
  },
  {
    title: 'Medium Villa Table',
    guests: '8–12 pax',
    price: 'IDR 2,700,000',
    priceNum: 2700000,
    includes: ['4–6 cheeses', '3–4 cured meats', 'Sourdough & bread', 'Crackers', 'Marinated vegetables', 'Dips', 'Honey', 'Fresh & dried fruit', 'Nuts', 'Edible flowers'],
    bestFor: 'Small villa parties, birthdays, wine nights, welcome drinks, group snacks',
  },
  {
    title: 'Full Event Grazing Table',
    guests: '15–30 guests',
    price: 'IDR 350,000/person',
    priceNum: 350000,
    includes: ['Large styled grazing table', 'Sourdough', 'Crackers', '4–6 cheeses', '3–4 cured meats', 'Marinated vegetables', 'Dips', 'Honey', 'Fresh & dried fruit', 'Nuts', 'Edible flowers', 'Vegan version available'],
    bestFor: 'Villa events, poolside parties, pre-dinner food, cocktail hour, corporate reception',
  },
  {
    title: 'Wedding Grazing Table',
    guests: '30–80 guests',
    price: 'IDR 325,000/person',
    priceNum: 325000,
    includes: ['Premium styled grazing table', 'Artisan breads', 'Crackers', '6–8 cheeses', '4–5 cured meats', 'Marinated vegetables', 'Dips & spreads', 'Honey & chutney', 'Fresh & dried fruit', 'Nuts & seeds', 'Edible flowers', 'Labels & signage', 'Vegan version available'],
    bestFor: 'Weddings, bridal showers, large villa celebrations, boutique events',
  },
  {
    title: 'Corporate Reception Table',
    guests: '50–150 guests',
    price: 'IDR 300,000/person',
    priceNum: 300000,
    includes: ['Executive grazing display', 'Artisan breads', 'Premium crackers', '6–8 cheeses', '4–5 cured meats', 'Marinated vegetables', 'Gourmet dips', 'Honey & preserves', 'Seasonal fruit', 'Nuts & seeds', 'Edible flowers', 'Branded labels', 'Dedicated setup staff'],
    bestFor: 'Corporate launches, brand events, retreat welcome, networking receptions',
  },
]

/* ═══════════════════════════════════════════════════════════════
   WHAT GOES ON THE TABLE
   ═══════════════════════════════════════════════════════════════ */
const TABLE_COMPONENTS = [
  { category: 'Cheese', items: ['Brie & camembert', 'Aged cheddar', 'Blue cheese', 'Manchego', 'Goat cheese', 'Cream cheese'] },
  { category: 'Cured Meats', items: ['Prosciutto di Parma', 'Salami', 'Chorizo', 'Mortadella', 'Coppa', 'Serrano ham'] },
  { category: 'Fruit', items: ['Fresh grapes', 'Figs', 'Berries', 'Pomegranate', 'Mango', 'Dragon fruit'] },
  { category: 'Bread & Crackers', items: ['Sourdough', 'Baguette', 'Water crackers', 'Seeded crisps', 'Grissini', 'Rye bread'] },
  { category: 'Dips & Spreads', items: ['Hummus', 'Tapenade', 'Baba ganoush', 'Tzatziki', 'Fruit chutney', 'Local honey'] },
  { category: 'Extras', items: ['Marinated olives', 'Roasted nuts', 'Dried apricots', 'Dark chocolate', 'Vegetable crudités', 'Microgreens'] },
]

/* ═══════════════════════════════════════════════════════════════
   STYLING DIRECTION
   ═══════════════════════════════════════════════════════════════ */
const STYLING_ITEMS = [
  { icon: Table2, title: 'Wood Boards', desc: 'Rustic teak and acacia boards layered for depth and texture.' },
  { icon: Flower2, title: 'Linen & Florals', desc: 'Natural linen runners with edible flowers and tropical greenery.' },
  { icon: Sparkles, title: 'Height & Layers', desc: 'Risers, cake stands, and stacked crates create visual dimension.' },
  { icon: Wine, title: 'Candles & Ambience', desc: 'Tea lights and taper candles for evening events and romance.' },
  { icon: ShieldCheck, title: 'Clean Spacing', desc: 'Breathing room between clusters for an uncluttered premium look.' },
  { icon: Heart, title: 'Labels & Signage', desc: 'Hand-lettered labels for cheeses, dietary callouts, and event branding.' },
]

/* ═══════════════════════════════════════════════════════════════
   BEST EVENTS FOR GRAZING
   ═══════════════════════════════════════════════════════════════ */
const BEST_EVENTS = [
  { icon: Wine, title: 'Cocktail Parties', desc: 'Self-serve grazing during mingling and drinks.' },
  { icon: Truck, title: 'Villa Arrivals', desc: 'Welcome guests with an immediate beautiful spread.' },
  { icon: Heart, title: 'Weddings', desc: 'Cocktail hour or pre-reception grazing for guests.' },
  { icon: Sparkles, title: 'Birthdays', desc: 'Celebration centerpiece that doubles as décor.' },
  { icon: ShieldCheck, title: 'Brand Launches', desc: 'Photo-ready display that elevates your event.' },
  { icon: Leaf, title: 'Retreats', desc: 'Relaxed, nourishing food for wellness gatherings.' },
  { icon: Flower2, title: 'Pool Parties', desc: 'Poolside grazing with tropical styling.' },
  { icon: Package, title: 'Bridal Events', desc: 'Elegant spreads for showers and hen parties.' },
  { icon: Utensils, title: 'Pre-Dinner Receptions', desc: 'Beautiful appetizer before a seated meal.' },
]

/* ═══════════════════════════════════════════════════════════════
   DIETARY OPTIONS
   ═══════════════════════════════════════════════════════════════ */
const DIETARY_OPTIONS = [
  { icon: Leaf, title: 'Vegetarian Grazing', desc: 'Cheese-forward with extra vegetables, dips, fruit, and nuts. No cured meats.' },
  { icon: Heart, title: 'Vegan Grazing', desc: 'Plant-based cheeses, vegetable dips, marinated tofu, fruit, nuts, and herb oils.' },
  { icon: ShieldCheck, title: 'Pork-Free', desc: 'Beef bresaola, turkey, chicken, and seafood charcuterie replace all pork products.' },
  { icon: Table2, title: 'Gluten-Free Crackers', desc: 'Rice crackers, seed crisps, and vegetable-based alternatives to wheat.' },
  { icon: Sparkles, title: 'Nut-Free Sections', desc: 'Dedicated nut-free zones with clear labeling for allergy safety.' },
  { icon: Baby, title: "Children's Platters", desc: 'Mild cheeses, simple fruits, breadsticks, and chocolate — no strong flavors.' },
]

/* ═══════════════════════════════════════════════════════════════
   SETUP AND BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */
const SETUP_STEPS = [
  { icon: Clock, title: 'Arrival Time', desc: 'We arrive 60–90 minutes before your event to set up the grazing table.' },
  { icon: Table2, title: 'Table Requirements', desc: 'A sturdy table or surface is needed. We bring boards, linens, and all serving ware.' },
  { icon: ShieldCheck, title: 'Shaded Placement', desc: 'Outdoor setups require shade or cover to protect cheese and fruit from direct sun.' },
  { icon: Sparkles, title: 'Freshness & Replenishment', desc: 'We refresh the table during the event and monitor food safety throughout.' },
  { icon: Truck, title: 'Cleanup', desc: 'Full breakdown and cleanup included. We leave your space exactly as we found it.' },
  { icon: Users, title: 'Staff Options', desc: 'Optional dedicated grazing attendant to serve, replenish, and answer guest questions.' },
]

/* ═══════════════════════════════════════════════════════════════
   FAQ — exactly 7 questions per blueprint
   ═══════════════════════════════════════════════════════════════ */
const FAQS = [
  { q: 'How long can a grazing table stay out?', a: 'Grazing tables are designed for 2–4 hours of service. We use ice packs beneath boards for cheese and replenish perishable items throughout your event. For events longer than 4 hours, we recommend a mid-event refresh.' },
  { q: 'Do you provide the table?', a: 'We provide all boards, linens, serving ware, and styling props. You provide a sturdy table or surface at your venue. For villa events without a suitable table, we can arrange rental at cost.' },
  { q: 'Can the grazing table be vegetarian?', a: 'Yes. Our vegetarian grazing table replaces cured meats with extra cheeses, marinated vegetables, dips, fruit, nuts, and premium crackers. It is just as visually stunning and satisfying.' },
  { q: 'Can you do cheese only?', a: 'Absolutely. We offer a cheese-only grazing table with 6–10 artisan cheeses, honeycomb, quince paste, crackers, bread, nuts, and dried fruit — perfect for wine-focused events.' },
  { q: 'What areas in Bali do you cover?', a: 'We serve all major Bali areas including Canggu, Seminyak, Berawa, Pererenan, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Tanah Lot, Kerobokan, Kuta, Legian, and Denpasar. Travel fees may apply outside Canggu/Seminyak.' },
  { q: 'Is there a minimum guest count?', a: 'Our small grazing board serves 2–4 guests with no minimum. Medium tables start at 8 guests. Full event grazing tables have a 15-guest minimum. Wedding and corporate tables start at 30 guests.' },
  { q: 'Can you add drinks to the grazing table?', a: 'Yes. We can arrange wine pairings, champagne, craft cocktails, fresh juices, and sparkling water as add-ons. Let us know your preference and we will include it in your quote.' },
]

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  { name: 'Emma R.', location: 'Uluwatu Villa', quote: 'The grazing table was the highlight of our wedding cocktail hour. Every guest commented on how beautiful (and tasty) it was.', rating: 5 },
  { name: 'Jessica & Mike', location: 'Canggu Villa', quote: 'We ordered the cheese platter for 10 and the mini box for our honeymoon suite. Both were stunning and the quality was top-notch.', rating: 5 },
  { name: 'The Park Family', location: 'Seminyak Villa', quote: 'Wedding-scale grazing for 35 guests. The vegan option was just as beautiful as the regular one. myCHEF nailed it.', rating: 5 },
]

/* ═══════════════════════════════════════════════════════════════
   INTERNAL LINKS
   ═══════════════════════════════════════════════════════════════ */
const INTERNAL_LINKS = [
  { label: 'Fine Dining', href: '/fine-dining' },
  { label: 'Villa Catering', href: '/catering/villa-catering' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export default function CateringGrazingPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.graze-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.graze-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const schemaFaq = FAQS.map(f => ({ question: f.q, answer: f.a }))

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Grazing Tables Bali | Cheese, Charcuterie & Party Platters"
        description="Grazing tables in Bali for villa parties, weddings, cocktails, birthdays, and events with cheese, charcuterie, fruit, bread, dips, and styling."
        canonical={PAGE_URL}
        ogImage={`${SITE}/generated/pkg-grazing.webp`}
        jsonLd={[
          localBusinessSchema,
          cateringServiceSchema('Grazing Tables Bali', 'Styled grazing tables in Bali for villa parties, weddings, poolside events, and welcome receptions with cheese, charcuterie, fruit, and breads. myCHEF.id designs, delivers, and sets each table across Bali.', PAGE_URL),
          offerSchema('Small Grazing Board', 650000, 'IDR', PAGE_URL),
          offerSchema('Medium Villa Table', 2700000, 'IDR', PAGE_URL),
          offerSchema('Full Event Grazing Table', 350000, 'IDR', PAGE_URL),
          offerSchema('Wedding Grazing Table', 325000, 'IDR', PAGE_URL),
          offerSchema('Corporate Reception Table', 300000, 'IDR', PAGE_URL),
          faqPageSchema(schemaFaq),
          aggregateRatingSchema(4.9, 127),
          cateringBreadcrumbSchema('Grazing Tables Bali', PAGE_URL),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Grazing Tables Bali' }]} />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/pkg-grazing.webp"
            alt="Grazing table Bali with cheese, charcuterie, fresh fruit, and edible flowers styled for a villa event"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Grazing Tables Bali' }]} theme="dark" className="justify-center mb-8" />
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: GOLD }}
          >
            Grazing Tables &amp; Charcuterie Bali
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Grazing Tables Bali for Events, Villas, and Parties
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-2xl mx-auto">
            Styled grazing tables with cheese, charcuterie, fruit, dips, bread, sweets, and event-ready presentation for relaxed, refined hosting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-all"
              style={{ background: GOLD }}
            >
              <Package className="w-4 h-4" /> Design My Grazing Table
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-grazing-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
          <p className="text-white/[60%] text-sm">From IDR 650,000 · Vegan options · Bali-wide</p>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — Grazing Tables in Bali
          ═══════════════════════════════════════════════════════════════ */}
      <section className="graze-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Grazing Tables Bali"
                title="Instant Visual Impact That Reduces Formal Service Pressure"
                subtitle="Grazing tables are built for events where people want beautiful food without a heavy meal structure. They create an immediate focal point, encourage mingling, and eliminate the need for passed service or plated courses."
              />
              <div className="grid grid-cols-2 gap-3">
                {['Villa welcome food', 'Poolside events', 'Wedding cocktail hour', 'Birthday celebrations', 'Wine nights', 'Corporate receptions', 'Pre-dinner grazing', 'Photo-ready brunch'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: GOLD }} />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/generated/pkg-grazing.webp"
                alt="Grazing table setup at a Bali villa with cheese, charcuterie, and tropical fruit"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — Best Events for Grazing
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Best Events for Grazing"
            title="The Perfect Occasions for a Grazing Table in Bali"
            subtitle="From intimate villa gatherings to large-scale celebrations, grazing tables adapt to any event style."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BEST_EVENTS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — What Goes on the Table
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="What Goes on the Table"
            title="Every Component on Your Grazing Table"
            subtitle="Nothing is hidden. Here is exactly what goes into every grazing setup — from cheese and charcuterie to tropical additions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TABLE_COMPONENTS.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-[#E8E6E3] bg-white text-center">
            <p className="text-[#4A4745] text-sm">
              <strong>Tropical additions:</strong> We incorporate local Bali produce such as dragon fruit, mango, passion fruit, snake fruit, and fresh coconut to give your grazing table a distinctive island character.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — Styling Direction
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Styling Direction"
            title="How We Style Your Grazing Table"
            subtitle="Every detail is considered — from board selection to candle placement — for a premium presentation that photographs beautifully."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STYLING_ITEMS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — Grazing Table Sizes
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Grazing Table Sizes"
            title="Choose the Right Size for Your Event"
            subtitle="From intimate boards to full-scale event displays — every size is styled with the same attention to detail."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="font-semibold text-lg mb-1" style={{ color: GOLD }}>{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-1">
                  <AllInPrice price={pkg.priceNum} showPlusPlus={false} suffix={pkg.price.includes('/person') ? '/person' : ''} />
                </p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.guests}</p>
                <div className="space-y-2 mb-4">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4" style={{ color: GOLD }} /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#4A4745]/70 pt-3 border-t border-[#E8E6E3]">
                  <strong>Best for:</strong> {pkg.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — Dietary Options
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Dietary Options"
            title="Grazing Tables for Every Diet"
            subtitle="No one misses out. We create inclusive grazing experiences that cater to all dietary requirements without compromising on visual impact."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIETARY_OPTIONS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — Grazing vs Canapés
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Grazing vs Canapés"
            title="Which Service Style Suits Your Event?"
            subtitle="Understanding the difference helps you choose the right food format — or combine both for the perfect experience."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                <Table2 className="w-5 h-5" style={{ color: GOLD }} />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Grazing Tables</h3>
              <ul className="space-y-2">
                {['Static display — guests serve themselves', 'Highly visual — doubles as event décor', 'Encourages mingling and conversation', 'Ideal for 2–4 hour events', 'No staff required to pass food', 'More relaxed, informal atmosphere'].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mb-4">
                <Utensils className="w-5 h-5 text-[#6B8E5A]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Canapés</h3>
              <ul className="space-y-2">
                {['Passed by staff — controlled portions', 'Formal and elegant presentation', 'Precise timing and temperature control', 'Ideal for seated dinners or formal receptions', 'Requires service staff', 'More structured, upscale atmosphere'].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#6B8E5A]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-[#E8E6E3] bg-white text-center">
            <p className="text-[#4A4745] text-sm">
              <strong>Many events need both.</strong> Grazing tables work beautifully as a welcome display while canapés are passed during cocktails. We can design a combined package that gives you the best of both worlds.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — Setup and Breakdown
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Setup and Breakdown"
            title="How We Deliver and Set Up Your Grazing Table"
            subtitle="From arrival to cleanup — we handle every detail so you can focus on your guests."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SETUP_STEPS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9 — FAQ (7 questions)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Grazing Table Questions"
            subtitle="Everything you need to know about booking a grazing table in Bali."
          />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10 — CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Request a Quote"
            title="Design My Grazing Table"
            subtitle="Tell us your guest count, location, preferred style, dietary restrictions, and event timing. We will reply with a tailored quote within the hour."
          />
          <BookingFormCatering
            title="Request Grazing Table Quote"
            subtitle="We will confirm availability, styling options, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Package, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Event Time', type: 'text', icon: Clock, placeholder: 'e.g. 5:00 PM' },
              { name: 'area', label: 'Location / Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa or Venue Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 20', required: true },
              { name: 'style', label: 'Style Preference', type: 'text', placeholder: 'Classic / Mediterranean / Vegan / Cheese-only' },
              { name: 'dietary', label: 'Dietary Restrictions', type: 'textarea', placeholder: 'Vegetarian, vegan, gluten-free, nut-free, pork-free...' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Bamboo board, pool styling, extra flowers, drinks...' },
              { name: 'occasion', label: 'Occasion', type: 'text', placeholder: 'Wedding, birthday, corporate, pool party...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={[
              'Small Grazing Board (2–4 pax)',
              'Medium Villa Table (8–12 pax)',
              'Full Event Grazing Table (15–30 pax)',
              'Wedding Grazing Table (30–80 pax)',
              'Corporate Reception Table (50–150 pax)',
            ]}
            accent={GOLD}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════════════════════ */}
      <TestimonialBlock
        testimonials={TESTIMONIALS}
        title="What Grazing Guests Say"
        subtitle="Real reviews from grazing table events across Bali."
      />

      <PressStrip />

      {/* ═══════════════════════════════════════════════════════════════
          INTERNAL LINKS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-[#E8E6E3]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4A4745]/50 mb-6 text-center">Related Services</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {INTERNAL_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors"
              >
                {link.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/generated/pkg-grazing.webp"
            alt="Beautiful grazing table at a Bali villa event with cheese, charcuterie, and tropical styling"
            className="w-full h-full object-cover"
            loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Order a Grazing Table for Your Bali Event
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, area, guest count, and preferred grazing style. We will confirm availability, styling options, and final price by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-all"
              style={{ background: GOLD }}
            >
              <Package className="w-4 h-4" /> Design My Grazing Table
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-grazing-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
