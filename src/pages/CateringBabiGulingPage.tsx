import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Flame, Heart, Truck, ShieldCheck, Sparkles, Package, CreditCard, ChefHat,
  ArrowRight,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  cateringServiceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/628113803488?text=Hi%20myCHEF,%20I%20would%20like%20to%20book%20Babi%20Guling%20catering%20in%20Bali.'
const SITE = 'https://mychef.id'

const PACKAGES = [
  {
    title: 'Small Babi Guling',
    guests: '10 to 15 guests',
    price: 'IDR 3,700,000 total',
    priceNum: 3700000,
    includes: ['Whole roasted pig', 'Lawar', 'Nasi kuning', 'Sate lilit', 'Sambals', 'Dessert', 'Fresh fruit'],
    bestFor: 'Small villa parties, family gatherings, birthday dinners, local food experience',
  },
  {
    title: 'Medium Babi Guling',
    guests: '25 to 30 guests',
    price: 'IDR 5,000,000 total',
    priceNum: 5000000,
    includes: ['Whole roasted pig', 'Lawar', 'Nasi kuning', 'Sate lilit', 'Sambals', 'Dessert', 'Fresh fruit', 'Extended sides', 'Kuah Balung soup'],
    bestFor: 'Medium villa events, birthdays, group holiday dinners, casual wedding recovery',
  },
  {
    title: 'Large Babi Guling',
    guests: '40 to 50 guests',
    price: 'IDR 7,000,000 total',
    priceNum: 7000000,
    includes: ['Premium suckling pig', 'Lawar', 'Nasi kuning', 'Sate lilit', 'Sambals', 'Dessert', 'Fresh fruit', 'Extended sides', 'Kuah Balung soup', 'Bonfire setup option'],
    bestFor: 'Large villa parties, weddings, corporate events, big birthdays, group celebrations',
  },
]

const BEST_FOR = [
  { icon: Heart, title: 'Villa parties', desc: 'Celebrate with tradition' },
  { icon: Utensils, title: 'Birthdays', desc: 'Local culinary experience' },
  { icon: Users, title: 'Wedding recovery lunches', desc: 'Casual post-wedding feast' },
  { icon: Heart, title: 'Family gatherings', desc: 'Multi-generational dining' },
  { icon: Flame, title: 'Indonesian-themed dinners', desc: 'Authentic Balinese night' },
  { icon: ShieldCheck, title: 'Corporate cultural events', desc: 'Team cultural dinner' },
  { icon: Sparkles, title: 'Large poolside parties', desc: 'Festive villa celebration' },
  { icon: Truck, title: 'Group holiday dinners', desc: 'Shared cultural meal' },
]

const INCLUDED = [
  'Whole roasted pig', 'Balinese side dishes', 'Lawar', 'Nasi kuning',
  'Sate lilit', 'Sambals', 'Dessert', 'Fresh fruit', 'Serving setup',
  'Delivery or event coordination',
]

const MENU_ITEMS = [
  { name: 'Whole roasted suckling pig', desc: 'Crispy skin, tender meat, Balinese spice stuffing' },
  { name: 'Lawar', desc: 'Traditional Balinese salad with coconut and spices' },
  { name: 'Nasi kuning', desc: 'Fragrant turmeric rice' },
  { name: 'Sate lilit', desc: 'Minced meat satay on lemongrass skewers' },
  { name: 'Sambal matah', desc: 'Raw shallot and lemongrass chilli relish' },
  { name: 'Urap', desc: 'Steamed vegetables with spiced grated coconut' },
  { name: 'Kuah Balung', desc: 'Rich pork bone soup (medium & large)' },
  { name: 'Tropical dessert', desc: 'Balinese sweets and fresh seasonal fruit' },
]

const ADDONS = [
  { title: 'Extra sides', price: 'Quote based on guests', description: 'Additional rice, vegetables, sambals' },
  { title: 'Additional sate', price: 'Quote based on quantity', description: 'Extra sate skewers' },
  { title: 'Service staff', price: 'Quote based on group', description: 'Staff to serve and carve' },
  { title: 'Bonfire setup', price: 'Selected locations', description: 'Evening villa garden fire' },
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', description: 'Cocktail station' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', description: 'Depends on area and event size' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose package', desc: 'Small, medium, or large.', icon: Package },
  { step: '02', title: 'Send details', desc: 'Date, area, guest count.', icon: Calendar },
  { step: '03', title: 'Confirm menu', desc: 'Pork-based menu accepted.', icon: Utensils },
  { step: '04', title: 'Confirm setup', desc: 'Delivery or service setup.', icon: Truck },
  { step: '05', title: 'Pay deposit', desc: '50% to confirm booking.', icon: CreditCard },
  { step: '06', title: 'We prepare', desc: 'Whole-pig prep and timing.', icon: ChefHat },
  { step: '07', title: 'Food served', desc: 'Delivered or served at event.', icon: Sparkles },
]

const AREAS = [
  'Canggu', 'Seminyak', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Sanur', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar',
]

const BABI_GULING_GALLERY = [
  '/generated/mychef-catering-bali-hero-babiguling.webp',
  '/generated/mychef-catering-bali-pkg-roast.webp',
  '/generated/mychef-catering-bali-hub-catering.webp',
  '/generated/mychef-catering-bali-hero-buffet-catering.webp',
  '/generated/mychef-catering-bali-pkg-roast.webp',
  '/generated/mychef-events-bali-event-wedding.webp',
]

const FAQS = [
  { q: "How long does it take to cook?", a: "6–7h small, up to 10h large. We start off-site, finish at your villa." },
  { q: "Where do the pigs come from?", a: "Local Balinese farms. Free-range, traditional diet." },
  { q: "Is it suitable for Muslim guests?", a: "**No — contains pork.** For halal events, see Indonesian BBQ or Buffet." },
  { q: "What's the difference between sizes?", a: "Small (10–15): single suckling. Medium (25–30): larger pig + soup. Large (40–50): full ceremony + bonfire option." },
  { q: "How traditional is the preparation?", a: "Authentic bumbu Bali. Slow-roast on spit. No shortcuts." },
  { q: "Can we add a Balinese welcome ceremony?", a: "Yes — mejejahitan + dancers + gamelan (+IDR 5M–6.5M)." },
  { q: "How is the pig served?", a: "Carved table-side. Then platters to table. Family-style." },
  { q: "How far in advance to book?", a: "Minimum 2 days. Recommended 5+ days for ceremonial events." }
]

export default function CateringBabiGulingPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bg-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bg-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Babi Guling Catering Bali | Traditional Whole Pig Feast — myCHEF"
        description="Babi guling catering in Bali for villa feasts, weddings & birthdays. Authentic whole pig roast with Balinese sides, carving & full delivery service."
        canonical={`${SITE}/catering/babi-guling`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-babiguling.webp`}
        jsonLd={[
          cateringServiceSchema('Babi Guling Catering Bali', 'Traditional babi guling catering for Bali villas, birthdays, weddings, and cultural celebrations with full Balinese sides. myCHEF.id roasts, carves, and serves the feast on site across Bali.', `${SITE}/catering/babi-guling`),
          offerSchema('Small Babi Guling', 3700000, 'IDR', `${SITE}/catering/babi-guling`),
          offerSchema('Medium Babi Guling', 5000000, 'IDR', `${SITE}/catering/babi-guling`),
          offerSchema('Large Babi Guling', 7000000, 'IDR', `${SITE}/catering/babi-guling`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          cateringBreadcrumbSchema('Babi Guling Catering Bali', `${SITE}/catering/babi-guling`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Babi Guling Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-babiguling.webp"
            alt="Traditional Balinese Babi Guling whole-pig catering setup with crispy skin, rice, sambal, and lawar for a villa party in Bali"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Traditional Balinese
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Babi Guling Catering Bali for a Proper Balinese Feast
          </h1>
          <p className="text-lg md:text-xl text-white/[80%] mb-8 max-w-2xl mx-auto">
            Traditional Balinese suckling pig catering for villa parties, birthdays, weddings, and events where guests want something local, social, and memorable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Flame className="w-4 h-4" /> Book Babi Guling Catering
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-babi-guling-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp availability
            </a>
          </div>
          <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3 max-w-md mx-auto flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <p className="text-xs text-amber-800">
              <strong>Contains pork.</strong> Not suitable for halal groups. Non-pork alternatives available for mixed groups.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ SECTION 1 — BABI GULING CATERING IN BALI ═══════ */}
      <section className="bg-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Authentic Balinese Cuisine"
                title="Babi Guling Catering in Bali"
                subtitle="Real Balinese whole-pig roasting — not tourist fake. Authentic spice, slow charcoal roasting, and crispy skin served with rice, sambal, lawar, and traditional sides."
              />
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Babi Guling has been central to Balinese ceremonies and celebrations for centuries. The ritual of roasting a whole pig over an open fire brings communities together — it is served at weddings, temple festivals, and family gatherings as a symbol of abundance and hospitality. For visitors, it offers an authentic taste of Balinese culture, prepared with the same respect and technique passed down through generations.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Our Babi Guling catering brings this tradition to your villa or event venue. The pig is stuffed with basa gede — a complex Balinese spice paste — then slow-roasted over charcoal for six to eight hours until the skin is glassy and crisp. It is carved at your event and served with lawar, nasi kuning, sate lilit, sambal matah, urap, and fresh tropical fruit.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {['Villa parties', 'Birthdays', 'Wedding recovery lunches', 'Family gatherings', 'Indonesian-themed dinners', 'Corporate cultural events', 'Group holiday dinners', 'Local food nights'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A028]" />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-catering-bali-pkg-roast.webp"
                alt="Chef carving traditional Babi Guling with Balinese sides at a villa event"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2 — BEST EVENTS FOR BABI GULING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Best Events for Babi Guling"
            subtitle="Babi guling works best when the group wants something social, shareable, and unmistakably local."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — WHAT IS INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Inclusions"
            title="What Is Included"
            subtitle="Every Babi Guling package arrives as a complete feast — not just a plate of pork."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Truck className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Delivery or Setup</h4>
              <p className="text-xs text-[#4A4745] mt-1">We bring the food to your villa with full serving setup.</p>
            </div>
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Users className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Optional Staff</h4>
              <p className="text-xs text-[#4A4745] mt-1">Add servers and carvers to manage the buffet table.</p>
            </div>
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Utensils className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Plates & Cutlery</h4>
              <p className="text-xs text-[#4A4745] mt-1">Disposable or reusable tableware included on request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — TRADITIONAL BALINESE MENU ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Menu"
            title="Traditional Balinese Menu"
            subtitle="A complete spread built around the whole pig with classic Balinese accompaniments."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {MENU_ITEMS.map((item) => (
              <div key={item.name} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-[#1A1A1A]">{item.name}</p>
                  <p className="text-xs text-[#4A4745]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — IMPORTANT DIETARY NOTE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Important Dietary Note: This Is Pork</h2>
          <p className="text-[#4A4745] mb-4">
            Babi Guling is a pork-based Balinese whole-pig dish. It is not suitable for halal groups or strictly pork-free events. We are upfront about this because it matters for mixed groups, Muslim guests, and dietary compliance.
          </p>
          <p className="text-[#4A4745] mb-6">
            For groups with non-pork eaters, we can add chicken satay, vegetable urap, seafood dishes, and vegetarian sides alongside the main Babi Guling spread. For fully halal events, we recommend our Indonesian BBQ, International Buffet, or Plated Menu with certified halal options.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/catering/bbq-catering" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Indonesian BBQ
            </Link>
            <Link to="/catering/buffet" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Buffet Catering
            </Link>
            <Link to="/catering/drop-off-catering" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Drop-Off Catering
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6 — LIVE CARVING OR BUFFET STYLE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Serving Styles"
            title="Live Carving or Buffet Style"
            subtitle="Choose how the Babi Guling is presented at your event."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 text-center">
              <ChefHat className="w-8 h-8 text-[#C5A028] mx-auto mb-3" />
              <h3 className="font-medium text-[#1A1A1A] mb-2">Whole Pig Display</h3>
              <p className="text-sm text-[#4A4745]">The roasted pig arrives whole and is presented at your event before carving. A dramatic centerpiece for villa parties and cultural dinners.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 text-center">
              <Utensils className="w-8 h-8 text-[#C5A028] mx-auto mb-3" />
              <h3 className="font-medium text-[#1A1A1A] mb-2">Carved Service</h3>
              <p className="text-sm text-[#4A4745]">Our staff carve the pig at a serving station and plate portions for guests. Ideal for sit-down dinners and more formal events.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 text-center">
              <Users className="w-8 h-8 text-[#C5A028] mx-auto mb-3" />
              <h3 className="font-medium text-[#1A1A1A] mb-2">Buffet or Family Style</h3>
              <p className="text-sm text-[#4A4745]">Guests serve themselves from a buffet table with all sides, sambals, and accompaniments. Perfect for casual villa gatherings and poolside parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7 — LOCAL EXPERIENCE, PROFESSIONAL HANDLING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden order-2 md:order-1">
              <img
                src="/generated/mychef-catering-bali-hub-catering.webp"
                alt="Professional Babi Guling catering team serving at a Bali villa event"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader
                align="left"
                eyebrow="Service"
                title="Local Experience, Professional Handling"
                subtitle="Authentic Balinese flavor with the reliability of a professional event catering team."
              />
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                We work with experienced Balinese cooks who have prepared Babi Guling for ceremonies and celebrations their entire lives. The roasting is done traditionally — over charcoal, by hand, with the same spice blends used in temple feasts.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                At the same time, our event team handles logistics, timing, villa access, setup, and cleanup with the professionalism you expect from a full-service caterer. You get the authenticity of a local warung with the reliability of a managed event.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['On-time delivery', 'Villa coordination', 'Full cleanup', 'English-speaking staff', 'Flexible timing', 'Event insurance'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8 — PAIRING WITH OTHER CATERING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Combinations"
            title="Pairing With Other Catering"
            subtitle="Babi Guling can be the centerpiece of a larger catering experience. Mix and match to suit your group."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'BBQ Add-On', desc: 'Grilled seafood, chicken satay, and beef skewers alongside the pig.' },
              { title: 'Buffet Spread', desc: 'Expand into a full Indonesian buffet with extra rice, noodles, and vegetable dishes.' },
              { title: 'Seafood Station', desc: 'Fresh grilled fish, prawns, and squid for coastal villa events.' },
              { title: 'Vegetarian Dishes', desc: 'Gado-gado, urap, and tempeh dishes for non-meat eaters in the group.' },
              { title: 'Dessert Table', desc: 'Balinese klepon, dadar gulung, and tropical fruit platters.' },
              { title: 'Cocktails & Bar', desc: 'Arak-based cocktails, Bintang beer station, and tropical mixed drinks.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <h4 className="font-medium text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              View all catering options <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Babi Guling Catering Packages"
            subtitle="Fixed-price packages for small, medium, and large groups. No hidden fees."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#C5A028] font-semibold text-lg mb-1">{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-1"><AllInPrice price={pkg.priceNum} showPlusPlus={false} suffix=" total" /></p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.guests}</p>
                <div className="space-y-2 mb-4">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028]" /> {item}
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

      {/* ═══════ ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Add More to the Experience"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4 md:p-5 hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base">{addon.title}</h4>
                  <span className="text-[#C5A028] font-semibold text-sm whitespace-nowrap">{addon.price}</span>
                </div>
                {addon.description && <p className="text-xs text-[#4A4745]">{addon.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How Setup Works"
            subtitle="Babi Guling requires coordination because the whole-pig preparation and timing must be handled properly."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <span className="text-[#C5A028] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AREA COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Babi Guling Catering Across Bali"
            subtitle="Travel fee depends on area, delivery timing, setup needs, and event size."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Gallery"
            title="Babi Guling Catering Setups"
            subtitle="Traditional whole-pig setups and carved feasts across Bali villas."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BABI_GULING_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <OptimizedImage src={src} alt={`Babi Guling catering setup ${i + 1} at a Bali villa event`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Rachel & Sam', location: 'Ubud Villa', quote: 'The Babi Guling was the highlight of our group dinner. The crispy skin was incredible and the lawar was authentic. A true Balinese experience.', rating: 5 },
          { name: 'The Wong Family', location: 'Canggu Villa', quote: 'We ordered the medium package for 28 guests. The portions were generous and the whole pig was perfectly cooked. Highly recommend.', rating: 5 },
          { name: 'Chris M.', location: 'Seminyak Villa', quote: 'Best Babi Guling outside of Ubud. The sambals were spicy and flavorful. Our guests are still talking about it weeks later.', rating: 5 },
        ]}
        title="What Babi Guling Guests Say"
        subtitle="Real reviews from traditional Balinese whole-pig events across Bali."
      />

      {/* ═══════ SECTION 9 — FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Babi Guling Catering FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 10 — CTA ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Reserve Now"
            title="Book Babi Guling Catering"
            subtitle="Tell us your guest count, villa area, serving style, pork or non-pork needs, and event time. We will confirm availability and pricing within the hour."
          />
          <BookingFormCatering
            title="Book Babi Guling Catering"
            subtitle="We will confirm availability, setup details, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Package Size', type: 'select', icon: Package, required: true },
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Time', type: 'text', icon: Flame, placeholder: 'e.g. 6:00 PM' },
              { name: 'area', label: 'Villa Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa / Venue Address', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 15', required: true },
              { name: 'style', label: 'Serving Style', type: 'text', placeholder: 'Buffet / Carved / Family-style' },
              { name: 'porkConfirm', label: 'Pork accepted or need non-pork alternatives?', type: 'text', placeholder: 'Pork OK / Need alternatives', required: true },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Extra sides, staff, bonfire...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Small (10-15 guests)', 'Medium (25-30 guests)', 'Large (40-50 guests)']}
            accent="#C5A028"
          />
        </div>
      </section>

      <CateringDiscoverySection page="babiGuling" />

      {/* ═══════ FINAL CTA BANNER ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-pkg-roast.webp"
            alt="Complete Babi Guling catering table with guests at a Bali villa"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Babi Guling Catering for Your Event
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your guest count, villa area, serving style, pork or non-pork needs, and event time. We will confirm availability and final price by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Flame className="w-4 h-4" /> Book Babi Guling Catering
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-babi-guling-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
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
