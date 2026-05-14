import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Heart, Leaf, Flower2, Truck, ShieldCheck, Sparkles, Package, CreditCard, ChefHat,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
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

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20order%20a%20grazing%20table.'
const SITE = 'https://mychef.id'

const PACKAGES = [
  {
    title: 'Mini Grazing Box',
    guests: '2 pax',
    price: 'IDR 650,000',
    priceNum: 650000,
    includes: ['Cheese', 'Cold cuts', 'Crackers', 'Fruit', 'Dips', 'Nuts', 'Small sweets', 'Styled box presentation'],
    bestFor: 'Couples, villa arrival snack, honeymoon setup, private poolside snack, small wine night',
  },
  {
    title: 'Cheese & Cold Cuts Platter',
    guests: '10 pax',
    price: 'IDR 2,700,000',
    priceNum: 2700000,
    includes: ['4-6 cheeses', '3-4 cured meats', 'Sourdough', 'Crackers', 'Marinated vegetables', 'Dips', 'Honey', 'Fresh & dried fruit', 'Nuts', 'Edible flowers'],
    bestFor: 'Small villa parties, birthdays, wine nights, welcome drinks, group snacks',
  },
  {
    title: 'Wedding-Scale Grazing Table',
    guests: '20 to 50 guests',
    price: 'IDR 350,000/person',
    priceNum: 350000,
    includes: ['Large styled grazing table', 'Sourdough', 'Crackers', '4-6 cheeses', '3-4 cured meats', 'Marinated vegetables', 'Dips', 'Honey', 'Fresh & dried fruit', 'Nuts', 'Edible flowers', 'Vegan version available'],
    bestFor: 'Weddings, larger villa events, corporate events, poolside parties, pre-dinner food, cocktail hour',
  },
]

const INCLUDED = [
  'Sourdough', 'Crackers', 'Cheese selection', 'Cold cuts',
  'Marinated vegetables', 'Dips', 'Honey', 'Fresh fruit',
  'Dried fruit', 'Nuts', 'Edible flowers', 'Styled presentation',
]

const ADDONS = [
  { title: 'Keep-the-board bamboo upgrade', price: 'IDR 800,000', description: 'Beautiful bamboo serving board to keep' },
  { title: 'Floating pool tray styling', price: 'IDR 1,200,000', description: 'Grazing tray styled by the pool' },
  { title: 'Extra floral styling', price: 'Quote based on size', description: 'Additional edible flowers and decor' },
  { title: 'Premium cheese upgrade', price: 'Quote based on selection', description: 'Artisan and imported cheeses' },
  { title: 'Extra cold cuts', price: 'Quote based on quantity', description: 'Additional cured meats' },
]

const BEST_FOR = [
  { icon: Heart, title: 'Villa welcome snack', desc: 'Greet guests in style' },
  { icon: Flower2, title: 'Wedding cocktail hour', desc: 'Pre-reception grazing' },
  { icon: Sparkles, title: 'Poolside party', desc: 'Relaxed by the water' },
  { icon: Heart, title: 'Birthday gathering', desc: 'Celebration centerpiece' },
  { icon: Utensils, title: 'Wine night', desc: 'Cheese and charcuterie' },
  { icon: ShieldCheck, title: 'Corporate villa event', desc: 'Professional but relaxed' },
  { icon: Truck, title: 'Pre-dinner food', desc: 'Before the main meal' },
  { icon: Leaf, title: 'Photo-ready brunch', desc: 'Instagram-worthy setup' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose size', desc: 'Box, platter, or table.', icon: Package },
  { step: '02', title: 'Send details', desc: 'Date, area, guest count.', icon: Calendar },
  { step: '03', title: 'Standard or plant', desc: 'Confirm dietary style.', icon: Leaf },
  { step: '04', title: 'Add styling', desc: 'Boards, flowers, pool.', icon: Flower2 },
  { step: '05', title: 'Pay deposit', desc: '25% to confirm.', icon: CreditCard },
  { step: '06', title: 'We prepare', desc: 'Styled and ready.', icon: ChefHat },
  { step: '07', title: 'You enjoy', desc: 'Serve at your event.', icon: Sparkles },
]

const DELIVERY_RULES = [
  'Mini boxes can be delivered',
  'Platters can be delivered or styled on-site',
  'Large grazing tables require setup time',
  'Villa access must be available before event start',
  'Outdoor setup needs shade or timing control',
  'Travel fee may apply by area',
]

const AREAS = [
  'Canggu', 'Seminyak', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Sanur', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar',
]

const CROSS_SELL = [
  { title: 'BBQ Catering', price: 'From IDR 450,000/person', href: '/catering/bbq-catering', image: '/generated/pkg-bbq.webp' },
  { title: 'Buffet Catering', price: 'From IDR 550,000/person', href: '/catering/buffet', image: '/generated/aura-buffet.webp' },
  { title: 'Drop-Off Catering', price: 'From IDR 350,000/person', href: '/catering/drop-off-catering', image: '/generated/catering/dropoff-hero-v2.webp' },
  { title: 'Floating Breakfast', price: 'From IDR 950,000/couple', href: '/catering/floating-breakfast', image: '/generated/catering/floating-breakfast.webp' },
]

const GRAZING_GALLERY = [
  '/generated/pkg-grazing.webp',
  '/generated/hub-catering.webp',
  '/generated/aura-buffet.webp',
  '/generated/aura-tablescape.webp',
  '/generated/pkg-breakfast.webp',
  '/generated/sol-breakfast.webp',
]

const ALL_COMPONENTS = [
  'Sourdough & artisan breads',
  'Water crackers & seeded crisps',
  '4–6 cheeses (soft, hard, blue)',
  '3–4 cured meats (prosciutto, salami, chorizo)',
  'Marinated olives & vegetables',
  'Hummus, tapenade & dips',
  'Local honey & fruit chutney',
  'Fresh seasonal fruit',
  'Dried apricots & figs',
  'Roasted nuts & seeds',
  'Edible flowers & microgreens',
  'Styled wooden boards & linens',
]

const CUSTOMISATIONS = [
  { title: 'Cheese-Lover', desc: 'Extra artisan cheeses, honeycomb, quince paste, and crackers.' },
  { title: 'Italian', desc: 'Prosciutto di Parma, mortadella, pecorino, burrata, grissini, and olive oil.' },
  { title: 'Mediterranean', desc: 'Feta, halloumi, dolmades, baba ganoush, tzatziki, and pita.' },
  { title: 'Vegan', desc: 'Plant-based cheeses, vegetable dips, marinated tofu, and fruit-forward styling.' },
  { title: 'Plant-Based', desc: 'Fully plant-based with nuts, seeds, vegetable crudités, and herb oils.' },
]

const FAQS = [
  { q: 'What is included in a grazing table?', a: 'All grazing setups include sourdough, crackers, cheese selection, cured meats, marinated vegetables, dips, honey, fresh and dried fruit, nuts, and edible flowers. Styled presentation is included.' },
  { q: 'How many people does each package serve?', a: 'Mini Grazing Box serves 2 people. Cheese & Cold Cuts Platter serves 10 people. Wedding-Scale Grazing Table serves 20-50 guests at IDR 350,000 per person.' },
  { q: 'Can you deliver grazing boxes?', a: 'Yes. Mini boxes and platters can be delivered. Large grazing tables require on-site setup time.' },
  { q: 'Do large grazing tables require setup?', a: 'Yes. Wedding-scale grazing tables need setup time at your venue. We arrange access and timing before the event.' },
  { q: 'Can you make it vegan or plant-based?', a: 'Absolutely. We create plant-based grazing with vegan dips, vegetables, fruit, nuts, crackers, bread, olives, and fresh styling at the same price.' },
  { q: 'Can I keep the board?', a: 'Yes. Our bamboo board upgrade includes a beautiful serving board you can keep. Standard setups use our boards which we collect.' },
  { q: 'Can you style it by the pool?', a: 'Yes. Our floating pool tray styling add-on creates a stunning poolside grazing display.' },
  { q: 'How far in advance should I book?', a: 'We recommend 3-5 days for boxes and platters. 1-2 weeks for large grazing tables, especially during peak season.' },
  { q: 'Do you charge travel fees?', a: 'Travel fees may apply for areas outside Seminyak/Canggu. We confirm this before deposit.' },
  { q: 'Can I add more cheese or cold cuts?', a: 'Yes. Premium cheese upgrades and extra cold cuts are available. Pricing depends on selection and quantity.' },
  { q: 'Is this enough as a full meal?', a: 'For light events, yes. For full meals, we recommend combining grazing with BBQ, buffet, or plated catering.' },
  { q: 'Can I combine grazing with BBQ or buffet?', a: 'Absolutely. Grazing works perfectly as a welcome setup before BBQ or buffet catering.' },
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

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Grazing Tables Bali | Cheese & Charcuterie — myCHEF"
        description="Photo-ready grazing tables and charcuterie in Bali for villas and weddings. Mini boxes, medium platters, large event tables. From IDR 650K. Vegan options."
        canonical={`${SITE}/catering/grazing-tables`}
        ogImage={`${SITE}/generated/pkg-grazing.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Grazing Tables Bali', 'Photo-ready grazing boxes, cheese platters, and full grazing tables for villas, weddings, and parties.', `${SITE}/catering/grazing-tables`, 'IDR'),
          offerSchema('Mini Grazing Box', 650000, 'IDR', `${SITE}/catering/grazing-tables`),
          offerSchema('Cheese & Cold Cuts Platter', 2700000, 'IDR', `${SITE}/catering/grazing-tables`),
          offerSchema('Wedding-Scale Grazing Table', 350000, 'IDR', `${SITE}/catering/grazing-tables`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Grazing Tables', `${SITE}/catering/grazing-tables`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Grazing Tables' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/pkg-grazing.webp"
            alt="Beautiful grazing table with cheese, cured meats, fruit, and flowers"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Grazing Tables & Charcuterie
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Grazing Tables & Charcuterie<br />
            <span className="italic">in Bali for Villas, Weddings & Parties</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Photo-ready grazing boxes, cheese and cold cuts platters, and full grazing tables for villa parties, weddings, poolside events, welcome drinks, and private gatherings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Package className="w-4 h-4" /> Order grazing setup
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 650,000 · Vegan options · Bali-wide</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ WHY GRAZING WORKS ═══════ */}
      <section className="graze-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="CHAPTER 1 — THE VISION"
                title="Easy Food That Looks Good Immediately"
                subtitle="Grazing tables are built for events where people want beautiful food without a heavy meal structure. They work for arrivals, welcome drinks, poolside parties, weddings, birthdays, and relaxed villa entertaining."
              />
              <div className="grid grid-cols-2 gap-3">
                {['Welcome food', 'Poolside events', 'Villa parties', 'Wedding cocktails', 'Birthday snacks', 'Wine nights', 'Corporate events', 'Pre-dinner food'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6B8E5A]" />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/pkg-grazing.webp"
                alt="Villa poolside grazing table setup"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 2 — THE MENU"
            title="Choose Your Grazing Package"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold text-lg mb-1">{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-1">
                  <AllInPrice price={pkg.priceNum} showPlusPlus={false} suffix={pkg.title === 'Wedding-Scale Grazing Table' ? '/person' : ''} />
                </p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.guests}</p>
                <div className="space-y-2 mb-4">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#6B8E5A]" /> {item}
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

      {/* ═══════ PHOTOGRAPHY SECTION ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 3 — THE SETUP"
            title="Grazing Gallery"
            subtitle="Photo-ready spreads from villa events, weddings, and poolside parties across Bali."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GRAZING_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt={`Grazing table setup ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ANNOTATED CALLOUT ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 4 — THE COMPONENTS"
            title="Every Component on the Board"
            subtitle="Nothing is hidden. Here is exactly what goes into every grazing setup."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ALL_COMPONENTS.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CUSTOMISATION OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 5 — THE STYLE"
            title="Customisation Options"
            subtitle="Choose a direction or mix and match. Every grazing setup is tailored to your taste."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {CUSTOMISATIONS.map((c) => (
              <div key={c.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{c.title}</h4>
                <p className="text-xs text-[#4A4745]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 6 — THE SERVICE"
            title="What Every Grazing Setup Includes"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ VEGAN OPTION ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <Leaf className="w-12 h-12 text-[#6B8E5A] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Vegan and Plant-Based Grazing Available</h2>
          <p className="text-[#4A4745] mb-6">
            We can create a plant-based grazing setup at the same price. This includes vegan dips, vegetables, fruit, nuts, crackers, bread, marinated items, plant-based spreads, and fresh styling.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Vegan dips', 'Fresh vegetables', 'Seasonal fruit', 'Artisan nuts', 'Crackers & bread', 'Marinated olives', 'Plant-based spreads', 'Edible flowers'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STYLING ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Styling"
            title="Styling Add-Ons"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bg-white rounded-xl border border-[#E8E6E3] p-4 md:p-5 hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base">{addon.title}</h4>
                  <span className="text-[#6B8E5A] font-semibold text-sm whitespace-nowrap">{addon.price}</span>
                </div>
                {addon.description && <p className="text-xs text-[#4A4745]">{addon.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BEST FOR ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Best For These Events"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#6B8E5A]" />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#6B8E5A]" />
                </div>
                <span className="text-[#6B8E5A] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY RULES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Delivery"
            title="Delivery and Setup"
            subtitle="Small boxes and platters can be delivered. Larger grazing tables require setup time on-site."
          />
          <div className="space-y-3">
            {DELIVERY_RULES.map((rule) => (
              <div key={rule} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Truck className="w-5 h-5 text-[#6B8E5A] flex-shrink-0 mt-0.5" />
                <span className="text-[#4A4745] text-sm">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AREA COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Grazing Tables Across Bali"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#6B8E5A] hover:text-[#6B8E5A] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Order Now"
            title="Order Grazing Setup"
          />
          <BookingFormCatering
            title="Order Your Grazing Setup"
            subtitle="We will confirm availability, styling options, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Package, required: true },
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Time', type: 'text', icon: Utensils, placeholder: 'e.g. 5:00 PM' },
              { name: 'area', label: 'Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu...', required: true },
              { name: 'villa', label: 'Villa/Venue Address', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 10', required: true },
              { name: 'style', label: 'Standard or Plant-Based?', type: 'text', placeholder: 'Standard / Plant-based' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Bamboo board, pool styling, extra flowers...' },
              { name: 'setup', label: 'Delivery or On-Site Setup?', type: 'text', placeholder: 'Delivery / On-site setup' },
              { name: 'occasion', label: 'Occasion', type: 'text', placeholder: 'Wedding, birthday, corporate...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Mini Grazing Box (2 pax)', 'Cheese & Cold Cuts Platter (10 pax)', 'Wedding-Scale Grazing Table (20-50 pax)']}
            accent="#6B8E5A"
          />
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Emma R.', location: 'Uluwatu Villa', quote: 'The grazing table was the highlight of our wedding cocktail hour. Every guest commented on how beautiful (and tasty) it was.', rating: 5 },
          { name: 'Jessica & Mike', location: 'Canggu Villa', quote: 'We ordered the cheese platter for 10 and the mini box for our honeymoon suite. Both were stunning and the quality was top-notch.', rating: 5 },
          { name: 'The Park Family', location: 'Seminyak Villa', quote: 'Wedding-scale grazing for 35 guests. The vegan option was just as beautiful as the regular one. myCHEF nailed it.', rating: 5 },
        ]}
        title="What Grazing Guests Say"
        subtitle="Real reviews from grazing table events across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Grazing FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ CROSS-SELL ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Want More?"
            title="Want More Than Grazing?"
            subtitle="Grazing works well as a welcome setup, snack table, or pre-dinner food. For a full meal, combine it with BBQ, buffet, plated dinner, or drop-off catering."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CROSS_SELL.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
                  <p className="text-[#6B8E5A] text-xs font-semibold">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/pkg-grazing.webp"
            alt="Beautiful grazing table at a villa event"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Order a Grazing Setup for Your Villa or Event
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send your date, area, guest count, and preferred grazing package. We will confirm availability, styling options, and final price by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Package className="w-4 h-4" /> Order grazing setup
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
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
