import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Check,
  Heart,
  Star,
  Flower2,
  Camera,
  Music2,
  Wine,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  UtensilsCrossed,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
  serviceWithAggregateOfferSchema,
  howToSchema,
  offerSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ArticleContentSection, Breadcrumb } from '@/components/shared'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({
  serviceName: 'a private chef romantic dinner in my Bali villa',
  intent: 'pricing and availability for 7- or 9-course tasting',
})
const WA_7 = buildWhatsAppUrl({
  serviceName: 'the 7-course Signature Romantic tasting in my Bali villa',
  intent: 'pricing, cuisine path, and availability',
})
const WA_9 = buildWhatsAppUrl({
  serviceName: 'the 9-course Grand Tasting romantic dinner in my Bali villa',
  intent: 'pricing, cuisine path, and availability',
})

const HERO_IMG = '/generated/private-chef-romantic-dinner-bali-villa-hero.webp'
const TABLE_IMG = '/generated/private-chef-romantic-dinner-table-setting-closeup.webp'
const CHEF_IMG = '/generated/private-chef-romantic-dinner-chef-brigade-kitchen.webp'
const SERVICE_IMG = '/generated/private-chef-romantic-dinner-service-moment.webp'
const PLATED_IMG = '/generated/private-chef-romantic-dinner-plated-tasting-course.webp'
const DUSK_IMG = '/generated/private-chef-romantic-dinner-villa-dusk-environment.webp'

// Fallback assets if new images are not yet present at runtime (build still references preferred paths)
const FALLBACK = {
  hero: '/generated/mychef-misc-bali-section-romantic-dinner.webp',
  table: '/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp',
  chef: '/generated/mychef-experience-bali-luna-detail.webp',
  service: '/generated/mychef-events-bali-anniversary-romantic.webp',
  plated: '/generated/fine-dining-plating.webp',
  dusk: '/generated/mychef-proposal-dinner-bali-villa-candles.webp',
}

const TRUST_CHIPS = [
  { label: 'Same-day WhatsApp', desc: 'Confirmation within the hour' },
  { label: '50% deposit only', desc: 'Balance before event' },
  { label: 'Specialist head chef', desc: '+ kitchen team' },
  { label: 'Table setting + candles', desc: 'Full kitchen cleanup' },
  { label: '560+ events', desc: '500+ villa bookings' },
  { label: 'Dietary customization', desc: 'No extra charge' },
]

const PRODUCTION_INCLUDES = [
  'Elegant linens, quality glassware and china',
  'Multi-height candles (tea lights + taller candles) and soft ambient light — romantic, never festive party lights',
  'Premium floral arrangement (refined tropical with roses/orchids — not basic)',
  'Optional petal accents / pathway',
  'Team arrives 3+ hours early; table fully dressed before you sit',
  'Chef + assistant on-site; dedicated server(s) so you never manage service',
  'Full kitchen and service cleanup before we leave',
]

const TIMELINE = [
  {
    n: '01',
    title: 'Team arrives (~3 hours before service)',
    desc: 'Prep, shop-finals if needed, kitchen setup.',
  },
  {
    n: '02',
    title: 'Table dressed & lit',
    desc: 'Linens, glassware, candles, flowers, lighting.',
  },
  {
    n: '03',
    title: 'You arrive to a finished scene',
    desc: 'Champagne optional on seating.',
  },
  {
    n: '04',
    title: 'Courses paced to you',
    desc: 'Never rushed; staff discreet between courses.',
  },
  {
    n: '05',
    title: 'Evening closes',
    desc: 'Kitchen and dining area left spotless.',
  },
]

const WESTERN_7 = [
  { act: 'Amuse', name: 'Oyster or scallop', desc: 'Yuzu or passion gel, caviar accent' },
  { act: 'Cold', name: 'Tuna or snapper crudo / carpaccio', desc: 'Tropical citrus, herbs, olive oil' },
  { act: 'Hot', name: 'Handmade pasta or risotto', desc: 'Lobster, truffle, or seasonal' },
  { act: 'Intermezzo', name: 'Light fish or vegetable course', desc: 'Palate bridge before the main' },
  {
    act: 'Main',
    name: 'Fish path or meat path (choose one)',
    desc: 'Fish: premium local/imported fish (barramundi, snapper) with refined sauce · Meat: Wagyu or premium beef/duck with classic reductions',
  },
  { act: 'Pre-dessert', name: 'Sorbet or palate cleanser', desc: 'Clean finish before dessert' },
  { act: 'Dessert', name: 'Elevated classic + petit fours', desc: 'Tiramisu variation, chocolate with tropical notes, or similar' },
]

const INDONESIAN_7 = [
  { act: 'Amuse', name: 'Refined local bite', desc: 'Spiced seafood or vegetable with sambal essence, elevated presentation' },
  { act: 'Cold', name: 'Seafood or vegetable “crudo”', desc: 'Tropical fruits, herbs, subtle spice' },
  { act: 'Hot', name: 'Elevated soup, pasta-like, or rice preparation', desc: 'Local flavors with fine-dining technique' },
  { act: 'Intermediate', name: 'Light protein or vegetable course', desc: 'Regional ingredients, refined plating' },
  {
    act: 'Main',
    name: 'Fish path or meat path (choose one)',
    desc: 'Fish: premium local fish with refined sambal or coconut sauce · Meat: slow-cooked or grilled premium beef/duck with modern Balinese accents',
  },
  { act: 'Pre-dessert', name: 'Tropical palate cleanser', desc: 'Light fruit or palm-sugar note' },
  { act: 'Dessert', name: 'Tropical fruit, palm sugar, coconut, or chocolate', desc: 'Elevated with technique + petit fours' },
]

const WESTERN_9_NOTES =
  'Deeper luxury ingredients — possible caviar, truffle, lobster, high-grade Wagyu or equivalent, refined sauces, multiple textures. Progressive storytelling across nine courses.'

const INDONESIAN_9_NOTES =
  'Broader archipelago journey — coastal, volcanic, spice-route, and highland notes reinterpreted with fine-dining precision and plating. Refined and romantic, never heavy or overly rustic.'

const ADDONS = [
  {
    icon: Sparkles,
    label: 'Signature Table Styling',
    price: '+IDR 800,000–1,500,000',
    desc: 'Lighting + flowers + elevated linens. Included in 9-course Grand.',
  },
  {
    icon: Flower2,
    label: 'Fresh tropical flowers',
    price: 'from +IDR 350,000',
    desc: 'Standalone refined arrangement on the table.',
  },
  {
    icon: Heart,
    label: 'Petal pathway',
    price: '+IDR 250,000',
    desc: 'Petals along the path and across the table surface.',
  },
  {
    icon: Wine,
    label: 'Champagne on arrival',
    price: 'from +IDR 850,000+',
    desc: 'Chilled bottle opened when you sit. Prestige cuvées available.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Custom dessert / proposal element',
    price: '+IDR 150,000',
    desc: 'Handwritten or plated message; proposal-ready dessert moment.',
  },
  {
    icon: Camera,
    label: 'Villa photographer 1 hour',
    price: '+IDR 1,500,000',
    desc: 'Opening, first courses, or the proposal second.',
  },
  {
    icon: Music2,
    label: 'Acoustic musician',
    price: 'On request',
    desc: 'Guitarist or violinist for the first 60–90 minutes.',
  },
  {
    icon: Wine,
    label: 'Wine pairing',
    price: 'IDR 1.2M–2.8M+ pp',
    desc: 'Indonesian progression or premium French/Italian path.',
  },
]

const SOFT_PACKAGES = [
  {
    title: 'Romantic Evening Package',
    desc: '7- or 9-course + Signature Table Styling + Indonesian wine pairing.',
  },
  {
    title: 'Proposal Ready Package',
    desc: '9-course + premium styling + champagne + photographer coordination.',
    link: { href: '/proposal-dinner', label: 'Proposal dinner details' },
  },
  {
    title: 'Honeymoon Highlight',
    desc: 'Romantic dinner + next-day breakfast or multi-night private chef.',
    link: { href: '/honeymoon-chef', label: 'Honeymoon chef' },
  },
]

const OCCASIONS = [
  { label: 'Anniversary', href: '/events/anniversaries' },
  { label: 'Honeymoon', href: '/honeymoon-chef' },
  { label: 'Proposal', href: '/proposal-dinner' },
  { label: "Valentine's", href: null },
  { label: 'Birthday Dinner', href: '/events/birthdays' },
  { label: 'First Night in Bali', href: null },
  { label: 'Babymoon', href: null },
]

const INCLUDED = [
  'Head chef + kitchen team (chef + assistant standard)',
  'All premium ingredients (grocery included, same-day sourcing)',
  'Table linens, candles, glassware (elevated styling per package)',
  'Full service during the meal (dedicated server staffing scaled to group)',
  'Kitchen cleanup before we leave — you wake to a clean villa',
  'Dietary customization — no extra charge',
  'Wine pairing available as add-on',
  'Optional: flowers, champagne, photographer, musician, petal pathway',
]

const TRUST_POINTS = [
  'Fast WhatsApp reply (within the hour; quote often within 2 hours)',
  '50% deposit to confirm; balance day before',
  'Full cleanup guarantee',
  'Dietary accommodation at no extra charge',
  'Weather plan: covered or indoor fallback — designed in, not improvised',
  'If team delayed/unavailable: verified replacement or refund',
  'Popular dates (Fri–Sun, holidays, Jul–Aug, Dec–Jan, Valentine’s, CNY) often book 1–2 weeks ahead',
]

const TESTIMONIALS = [
  {
    name: 'James & Sarah',
    location: 'Seminyak clifftop villa',
    eventType: 'Anniversary Dinner',
    quote:
      'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the setting, the courses — pure magic.',
    rating: 5,
  },
  {
    name: 'Olivia',
    location: 'Seminyak villa',
    eventType: 'Private dinner for 2',
    quote:
      "Chef Bayu adjusted the menu for my partner's dietary needs without making it feel like a compromise. The snapper, the tiramisu, the way they left the kitchen spotless — unbelievably polished.",
    rating: 5,
  },
  {
    name: 'The Harrisons',
    location: 'Ubud jungle estate',
    eventType: 'Honeymoon Dinner',
    quote:
      'Our honeymoon dinner under the stars in a Balinese garden. It felt like we had stepped into another world. Every course was a revelation.',
    rating: 5,
  },
]

const FAQS = [
  {
    q: 'How much does a private romantic dinner cost in a Bali villa?',
    a: 'Our Signature Romantic 7-course starts from about <strong>IDR 3,800,000–4,200,000++ per person</strong> (fish path) or <strong>IDR 4,300,000–4,800,000++ pp</strong> (meat/Wagyu path). The 9-course Grand Tasting is from about <strong>IDR 5,200,000–5,800,000++ pp</strong> (fish) or <strong>IDR 5,900,000–6,500,000++ pp</strong> (meat; higher for top Wagyu/lobster). For two people the evening commonly becomes a 10–15M+ experience before wine. Written quotes show the fixed all-in total. <a href="/pricing">Pricing →</a>',
  },
  {
    q: 'What is included in a private chef romantic dinner Bali package?',
    a: 'Head chef + assistant, premium ingredients (same-day sourcing), multi-course tasting (7 or 9), service staff, table linens and candles, and full kitchen cleanup. Signature Table Styling (lighting + flowers + elevated setting) is included in the 9-course Grand and available as an upgrade on the 7-course. Wine and champagne are add-ons.',
  },
  {
    q: 'What is the difference between the 7-course and 9-course romantic tasting?',
    a: 'Both are true tasting-menu experiences with Indonesian or Western interpretation and fish or meat main paths. The 7-course is an accessible high-end romantic dinner. The 9-course is a longer Grand Tasting with more progression, cheese/second savory options, mignardises, and Signature Table Styling included.',
  },
  {
    q: 'Can we choose Indonesian or Western cuisine?',
    a: 'Yes. Indonesian is modern fine-dining — elevated archipelago flavours, never rustic. Western is French/Italian/Mediterranean precision. Both are available on 7- and 9-course packets, with fish or meat protein paths on the main courses.',
  },
  {
    q: 'Is 2 guests the minimum for a romantic private dinner?',
    a: 'Yes — designed for two. Intimate groups up to about 12 can run villa fine dining formats; romantic positioning stays couple-first. See <a href="/fine-dining">fine dining</a> and <a href="/fine-dining/tasting-menu">tasting menu</a>.',
  },
  {
    q: 'Why book a private chef romantic dinner instead of a restaurant in Bali?',
    a: 'No other tables, pace controlled by you, no taxi home, full dietary flexibility, complete privacy. The team stages a candlelit production inside your villa — chef, assistant, and dedicated service — not a restaurant seat outdoors.',
  },
  {
    q: 'Can you arrange a surprise candlelit dinner in our Bali villa?',
    a: 'Yes. Tell us when the villa is empty. We coordinate with villa reception or your manager, stage everything 3+ hours early, and stay invisible in the kitchen before your partner walks out.',
  },
  {
    q: 'Can I propose during the private chef dinner?',
    a: 'Yes — we time courses, champagne, and privacy around your plan; photographer ready on request. For full proposal production see <a href="/proposal-dinner">proposal dinner</a> and <a href="/experiences/romantic-proposal-dinner">romantic proposal dinner</a>.',
  },
  {
    q: 'Do you offer wine pairing or champagne with a romantic private chef dinner?',
    a: 'Alcohol is not in the base package. BYO is welcome — we serve. Or add Indonesian wine pairing (about IDR 1,200,000–1,500,000 pp), premium French/Italian path (IDR 2,000,000–2,800,000+ pp), or champagne on arrival. <a href="/in-villa-service/bartenders">Bartenders →</a>',
  },
  {
    q: 'How far in advance should I book a romantic dinner in Bali?',
    a: '3–7 days is ideal; peak (Fri–Sun, holidays, Jul–Aug, Dec–Jan, Valentine’s, CNY) often needs 1–2 weeks. 48-hour requests are sometimes possible — WhatsApp us.',
  },
  {
    q: 'What time does the romantic dinner team arrive?',
    a: 'Typically about 3 hours before service. They prep, fully dress the table, and stay discreet so the reveal feels seamless.',
  },
  {
    q: 'Can you accommodate allergies and pregnancy-safe menus?',
    a: 'Yes — gluten-free, shellfish allergy, vegan, pregnancy-friendly and more, no extra charge. Tell us when booking. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide →</a>',
  },
  {
    q: 'Do you clean up after the romantic dinner?',
    a: 'Yes. Full kitchen and service cleanup is included — you wake to a clean villa, not a sink of dishes.',
  },
  {
    q: 'Which Bali areas do you cover for romantic private dinners?',
    a: 'Island-wide villa service — Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur and more. <a href="/locations">Locations →</a> · <a href="/locations/seminyak">Seminyak</a> · <a href="/locations/canggu">Canggu</a> · <a href="/locations/ubud">Ubud</a> · <a href="/locations/uluwatu">Uluwatu</a>',
  },
  {
    q: 'What deposit and cancellation policy apply?',
    a: '50% deposit to confirm; balance the day before. Full refund 14+ days out, 50% at 7–13 days, none under 7 days. <a href="/cancellation">Policy →</a>',
  },
  {
    q: 'What does ++ mean on romantic dinner prices?',
    a: '++ = 10% service + 11% tax. Published rates are ++; your written quote is a fixed itemised all-in total before you commit.',
  },
  {
    q: 'Can honeymooners book multi-night romantic dining?',
    a: 'Yes — combine one signature romantic dinner with a <a href="/private-chef-bali">daily private chef</a> or see <a href="/honeymoon-chef">honeymoon chef</a> and floating breakfast options.',
  },
  {
    q: 'What if it rains on an outdoor terrace setup?',
    a: 'We plan covered dining or move indoors if the villa allows. Weather is designed into the setup plan, not improvised at service time.',
  },
  {
    q: 'What if the team is delayed or unavailable?',
    a: 'We send a verified replacement or refund. Your night is protected. <a href="/why-mychef">Why myCHEF →</a>',
  },
  {
    q: 'How do I book a private chef romantic dinner for two in Bali?',
    a: 'Message Sofia on WhatsApp with date, villa area, occasion, and preferred path (7/9, Indonesian/Western, fish/meat). Fixed quote within hours; 50% locks the evening.',
  },
]

const RELATED = [
  { label: 'Fine Dining', href: '/fine-dining' },
  { label: 'Tasting Menu', href: '/fine-dining/tasting-menu' },
  { label: 'Menus', href: '/fine-dining/menus' },
  { label: 'Our Chefs', href: '/fine-dining/our-chefs' },
  { label: 'Proposal Dinner', href: '/proposal-dinner' },
  { label: 'Honeymoon Chef', href: '/honeymoon-chef' },
  { label: 'Private Chef Bali', href: '/private-chef-bali' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Locations', href: '/locations' },
  { label: 'Why myCHEF', href: '/why-mychef' },
  { label: 'Cancellation', href: '/cancellation' },
]

function CourseList({ courses }: { courses: { act: string; name: string; desc: string }[] }) {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div
          key={`${course.act}-${course.name}`}
          className="romantic-reveal flex items-start gap-5 py-4 border-b border-[#1A1A1A]/10 last:border-0"
        >
          <div className="w-20 flex-shrink-0">
            <span
              className="text-[#C5A028] text-[10px] uppercase tracking-[0.25em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {course.act}
            </span>
          </div>
          <div>
            <h4
              className="font-semibold text-[#1A1A1A] mb-0.5"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem' }}
            >
              {course.name}
            </h4>
            <p className="text-[#4A4745] text-sm leading-relaxed italic">{course.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function WaButton({
  href,
  label,
  source,
  className = '',
  light = false,
}: {
  href: string
  label: string
  source: string
  className?: string
  light?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-source={source}
      className={
        light
          ? `inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white ${className}`
          : `inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${className}`
      }
    >
      <MessageCircle className="w-4 h-4" /> {label}
    </a>
  )
}

export default function RomanticDinnerPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.romantic-reveal',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.romantic-content', start: 'top 78%', once: true },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen pb-16 md:pb-0" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Private Chef Romantic Dinner Bali | 7 & 9 Course Villa"
        description="Private chef romantic dinner in your Bali villa. 7- & 9-course tasting, Indonesian or Western, candlelit styling. From IDR 3.8M++ pp. WhatsApp quote."
        canonical={`${SITE}/fine-dining/romantic-dinner`}
        ogImage={`${SITE}${HERO_IMG}`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Private Chef Romantic Dinner Bali — 7 & 9 Course Villa Tasting',
            description:
              'Immersive private fine-dining production in your Bali villa for two: 7-course Signature Romantic or 9-course Grand Tasting, Indonesian or Western interpretation, fish or meat path, candlelit table styling, chef brigade, dedicated service, full cleanup. myCHEF serves Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur and island-wide.',
            url: `${SITE}/fine-dining/romantic-dinner`,
            lowPrice: '3800000',
            highPrice: '6500000',
          }),
          offerSchema('7-Course Signature Romantic Tasting (Fish path)', 3800000, 'IDR', `${SITE}/fine-dining/romantic-dinner#seven-course`),
          offerSchema('9-Course Grand Tasting (Fish path)', 5200000, 'IDR', `${SITE}/fine-dining/romantic-dinner#nine-course`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema(
            'Romantic Dinner Bali',
            `${SITE}/fine-dining/romantic-dinner`,
            'Fine Dining',
            `${SITE}/fine-dining`,
          ),
          howToSchema({
            name: 'How to Plan a Private Chef Romantic Dinner in Bali',
            description:
              'Three steps to book a 7- or 9-course private romantic fine-dining production in your Bali villa with myCHEF.',
            steps: [
              {
                name: 'Message Sofia on WhatsApp',
                text: 'Share your date, villa area, and occasion. Reply within the hour.',
              },
              {
                name: 'We Propose the Evening',
                text: 'Menu path (7/9, Indonesian/Western, fish/meat), styling, add-ons, availability, and fixed pricing.',
              },
              {
                name: 'You Just Arrive',
                text: 'Setup, cooking, service, and cleanup. You enjoy the finished scene.',
              },
            ],
          }),
        ]}
      />

      {/* 1. HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Private chef romantic dinner table for two in a Bali villa at dusk with candlelight, flowers, and white linens"
            width={1344}
            height={768}
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = FALLBACK.hero
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.28) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Breadcrumb
            items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Romantic Dinner' }]}
            theme="dark"
            className="py-6"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p
            className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            For Two · Romantic Dinner Bali · Private Chef
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Romantic Private Dinner in Your Bali Villa
            <br />
            <span className="italic text-[0.72em] text-white/[90%]">with a Private Chef</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/[80%] mb-6 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Built for Two — A Private Fine-Dining Production
          </p>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto leading-relaxed">
            Romantic dinner Bali means no other table, no other guests — a candlelit setting staged inside your own
            villa, seven or nine fine-dining courses, and a team that becomes invisible the moment you sit down. Master
            chef, dedicated service, premium table styling, full cleanup. For larger at-home evenings see{' '}
            <Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline">
              private dining
            </Link>
            .
          </p>
          <p className="text-white/[60%] text-sm mb-10 tracking-wide">
            From IDR 3,800,000++ per person · 7- &amp; 9-course tastings · Indonesian or Western · Table styling
            available · Bali-wide —{' '}
            <a href="/pricing" className="text-[#C5A028] hover:underline">
              see full pricing
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <WaButton href={WA_LINK} label="Message Sofia on WhatsApp" source="romantic-dinner-hero" />
            <a
              href="#menus"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              See 7- &amp; 9-course menus <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5A028]" /> Chef + assistant + service
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5A028]" /> Candlelit table production
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full kitchen cleanup
            </span>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <div className="bg-white border-y border-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
            {TRUST_CHIPS.map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <p className="text-sm font-semibold text-[#1A1A1A]">{item.label}</p>
                <p className="text-xs text-[#4A4745] mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. WHY VILLA BEATS RESTAURANT */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1080px] mx-auto">
          <p
            className="text-center text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Why Villa Beats Every Restaurant
          </p>
          <h2
            className="text-center text-white text-3xl md:text-5xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The best romantic dinner in Bali
            <br />
            <span className="italic">is not in a restaurant.</span>
          </h2>
          <p className="text-center text-white/[55%] text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
            Private romantic dinner villa Bali means exclusive privacy, your pace, and a kitchen that comes to you —
            not a table among strangers.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-[24px] border border-white/10 p-8">
              <p className="text-white/[40%] text-xs uppercase tracking-[0.3em] mb-6 font-semibold">The restaurant</p>
              <ul className="space-y-4 text-white/[65%] text-sm leading-relaxed">
                {[
                  'Other couples at the next table — they can hear everything',
                  'Kitchen noise, rushed service, tight seatings',
                  'Menu chosen by a chef who has never met you',
                  'A taxi back — the mood breaks',
                  'Limited flexibility for allergies or preferences',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-white/[25%] text-lg leading-none">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#C5A028]/30 bg-[#C5A028]/5 p-8">
              <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] mb-6 font-semibold">Your villa</p>
              <ul className="space-y-4 text-white/[85%] text-sm leading-relaxed">
                {[
                  'Your table only — the entire dining space is yours',
                  'The pace is yours — courses arrive when you are ready',
                  'Menu built around both of you before we arrive',
                  'The evening ends where you are — no taxi, no interruption',
                  'Every dietary need accommodated, no extra charge',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 w-4 h-4 text-[#C5A028] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative rounded-[24px] overflow-hidden mb-10">
            <img
              src={DUSK_IMG}
              alt="Candlelit private romantic dinner setup on a Bali villa terrace at dusk with pool and garden"
              width={1344}
              height={768}
              loading="lazy"
              decoding="async"
              className="w-full h-[280px] md:h-[360px] object-cover"
              onError={(e) => {
                e.currentTarget.src = FALLBACK.dusk
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <p
            className="text-center text-white/[55%] text-sm italic max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem' }}
          >
            “The privacy, the pacing, the fact that the chef was cooking three meters from our table — my partner still
            talks about it.”
          </p>
        </div>
      </section>

      {/* 4. THE FULL PRODUCTION */}
      <section className="relative overflow-hidden min-h-[52vh] flex items-end">
        <img
          src={TABLE_IMG}
          alt="Close-up candlelit private chef dinner table setting with linens, multi-height candles, and premium florals in a Bali villa"
          width={1216}
          height={832}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = FALLBACK.table
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
        <div className="relative z-10 px-8 pb-16 md:pb-24 pt-32 max-w-[900px] mx-auto w-full">
          <p
            className="text-[#C5A028] text-xs uppercase tracking-[0.35em] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Setup
          </p>
          <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            We arrive 3 hours before you sit down.
            <br />
            <span className="italic text-white/[75%]">When you walk out, the table is already set.</span>
          </h2>
          <p className="text-white/[70%] text-base md:text-lg max-w-[640px]">
            White or ivory linens, candles at multiple heights lit, premium florals placed, soft ambient lighting
            arranged, wine breathing if ordered. Your chef is quietly working in the kitchen with an assistant. A
            dedicated server handles pacing. You do nothing except arrive to it.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What the production includes
              </h3>
              <ul className="space-y-3">
                {PRODUCTION_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A] leading-relaxed">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-[#4A4745] leading-relaxed border-l-2 border-[#C5A028] pl-4">
                <strong className="text-[#1A1A1A]">Planning a surprise?</strong> Tell us when the villa is empty. We
                coordinate with villa reception or your manager, stage everything, and stay invisible in the kitchen
                before your partner walks out.
              </p>
            </div>
            <div className="space-y-4">
              <img
                src={CHEF_IMG}
                alt="Private chef and kitchen assistant preparing a multi-course romantic tasting menu in a Bali villa kitchen"
                width={1216}
                height={832}
                loading="lazy"
                decoding="async"
                className="w-full h-[260px] object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK.chef
                }}
              />
              <img
                src={SERVICE_IMG}
                alt="Discreet server presenting a fine-dining course at a candlelit private romantic dinner in a Bali villa"
                width={1216}
                height={832}
                loading="lazy"
                decoding="async"
                className="w-full h-[260px] object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK.service
                }}
              />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Night-of timeline
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {TIMELINE.map((step) => (
              <div key={step.n} className="rounded-[20px] border border-[#E5E3E0] bg-white p-5">
                <p className="text-[#C5A028] text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {step.n}
                </p>
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{step.title}</p>
                <p className="text-xs text-[#4A4745] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745] max-w-3xl mx-auto leading-relaxed">
            <strong className="text-[#1A1A1A]">Signature Table Styling</strong> (lighting + flowers + elevated setting)
            is included in the 9-course Grand package and available as an upgrade on the 7-course (+IDR
            800,000–1,500,000).
          </p>
        </div>
      </section>

      {/* 5. PACKAGE COMPARISON */}
      <section id="menus" className="py-24 px-6 bg-white romantic-content scroll-mt-20">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Signature Packets
            </p>
            <h2 className="text-3xl md:text-5xl mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              7-Course &amp; 9-Course Romantic Tasting Menus
            </h2>
            <p className="text-[#4A4745] max-w-[640px] mx-auto text-base leading-relaxed">
              Two signature packets. Each available in Indonesian or Western interpretation, with fish or meat main
              paths. Both are true tasting-menu experiences — progressive structure, premium ingredients, refined
              technique, beautiful plating. Adjusted for any dietary need at no extra charge.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[24px] border border-[#E5D9B5]">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left p-4 font-medium text-white/[60%]">&nbsp;</th>
                  <th className="text-left p-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    7-Course Signature Romantic
                  </th>
                  <th className="text-left p-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    9-Course Grand Tasting
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#FAFAF8]">
                {[
                  [
                    'Courses',
                    '7 (Amuse → Cold → Hot starter/pasta → Intermezzo → Main → Pre-dessert → Dessert + petit fours)',
                    '9 (longer progression + cheese/second savory + mignardises)',
                  ],
                  ['Best for', 'Accessible high-end romantic dinner', 'Ultimate once-in-a-lifetime evening'],
                  ['Cuisine choice', 'Indonesian or Western', 'Indonesian or Western'],
                  ['Protein path', 'Fish or Meat', 'Fish or Meat'],
                  ['Signature Table Styling', 'Upgrade +IDR 800k–1.5M', 'Included'],
                  ['From price (fish)', 'IDR 3,800,000–4,200,000++ pp', 'IDR 5,200,000–5,800,000++ pp'],
                  ['From price (meat)', 'IDR 4,300,000–4,800,000++ pp', 'IDR 5,900,000–6,500,000++ pp'],
                ].map(([label, a, b]) => (
                  <tr key={label} className="border-t border-[#E5E3E0]">
                    <td className="p-4 font-semibold text-[#1A1A1A] whitespace-nowrap align-top">{label}</td>
                    <td className="p-4 text-[#4A4745] align-top">{a}</td>
                    <td className="p-4 text-[#4A4745] align-top">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <WaButton href={WA_7} label="Book 7-Course" source="romantic-dinner-compare-7" />
            <WaButton href={WA_9} label="Book 9-Course" source="romantic-dinner-compare-9" />
          </div>
          <p className="text-xs text-[#4A4745] mt-5 leading-relaxed max-w-3xl mx-auto text-center sm:text-left">
            Priced per person. ++ = 10% service + 11% tax. Minimum 2 guests. Written quote states exact package and
            all-in total. For two people the evening commonly becomes a 10–15M+ experience before wine. Higher if top
            Wagyu/lobster combinations on the Grand.
          </p>

          {/* Inline social proof near packages */}
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <blockquote key={t.name} className="rounded-[20px] border border-[#E8E2CF] bg-[#FAFAF8] p-6">
                <p className="text-sm italic text-[#1A1A1A] leading-relaxed mb-3">“{t.quote}”</p>
                <footer className="text-xs text-[#4A4745]">
                  <strong className="text-[#1A1A1A]">{t.name}</strong> · {t.location} · {t.eventType}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 7-COURSE DETAIL */}
      <section id="seven-course" className="py-24 px-6 bg-[#FAFAF8] scroll-mt-20">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Packet One
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              7-Course Tasting — Signature Romantic
            </h2>
            <p className="text-[#4A4745] max-w-[600px] mx-auto text-sm leading-relaxed">
              Structure (common to both cuisines): Amuse-bouche → Cold starter → Hot starter / soup or pasta →
              Intermezzo or light fish/meat → Main (fish or meat choice) → Pre-dessert → Dessert + petit fours.
            </p>
          </div>

          <div className="mb-10 rounded-[20px] overflow-hidden">
            <img
              src={PLATED_IMG}
              alt="Elevated plated tasting course for a private chef romantic dinner Bali multi-course menu"
              width={1216}
              height={832}
              loading="lazy"
              decoding="async"
              className="w-full h-[280px] md:h-[360px] object-cover"
              onError={(e) => {
                e.currentTarget.src = FALLBACK.plated
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="rounded-[24px] border border-[#E5E3E0] bg-white p-7">
              <h3 className="text-xl mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Western interpretation — sample
              </h3>
              <CourseList courses={WESTERN_7} />
            </div>
            <div className="rounded-[24px] border border-[#E5E3E0] bg-white p-7">
              <h3 className="text-xl mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Indonesian interpretation — sample
              </h3>
              <CourseList courses={INDONESIAN_7} />
            </div>
          </div>

          <div className="bg-[#1A1A1A] rounded-[24px] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/[50%] text-xs uppercase tracking-[0.3em] mb-2">7-course pricing per person</p>
              <p className="text-white text-2xl md:text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Fish IDR 3.8–4.2M++ · Meat IDR 4.3–4.8M++
              </p>
              <p className="text-white/[50%] text-xs mt-2">Private chef 7 course dinner Bali · dietary free of charge</p>
            </div>
            <WaButton href={WA_7} label="Book 7-Course" source="romantic-dinner-7-cta" />
          </div>
        </div>
      </section>

      {/* 7. 9-COURSE DETAIL */}
      <section id="nine-course" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Packet Two
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              9-Course Grand Tasting — Ultimate Romantic
            </h2>
            <p className="text-[#4A4745] max-w-[640px] mx-auto text-sm leading-relaxed">
              Amuse → Cold starter → Second cold or warm starter → Pasta/risotto or intermediate → Light protein → Main
              (fish or meat) → Cheese or second savory (optional light) → Pre-dessert → Dessert → Petit fours /
              mignardises. Longer pacing, more drama. Signature Table Styling included.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-[24px] border border-[#E5D9B5] bg-[#FAFAF8] p-8">
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Western Grand
              </h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">{WESTERN_9_NOTES}</p>
            </div>
            <div className="rounded-[24px] border border-[#E5D9B5] bg-[#FAFAF8] p-8">
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Indonesian Grand
              </h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">{INDONESIAN_9_NOTES}</p>
            </div>
          </div>

          <div className="bg-[#1A1A1A] rounded-[24px] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/[50%] text-xs uppercase tracking-[0.3em] mb-2">9-course pricing per person</p>
              <p className="text-white text-2xl md:text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Fish IDR 5.2–5.8M++ · Meat IDR 5.9–6.5M++
              </p>
              <p className="text-white/[50%] text-xs mt-2">
                Private chef 9 course tasting menu Bali · styling included · higher for top Wagyu/lobster
              </p>
            </div>
            <WaButton href={WA_9} label="Book 9-Course" source="romantic-dinner-9-cta" />
          </div>
        </div>
      </section>

      {/* 8. WINE & CHAMPAGNE */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Pairings
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wine Pairing &amp; Champagne
            </h2>
            <p className="text-[#4A4745] max-w-[560px] mx-auto text-base leading-relaxed">
              Alcohol is not included in base packages. BYO wine or champagne is welcome — we serve. Or add a pairing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Base wine pairing',
                price: 'IDR 1,200,000–1,500,000 pp',
                desc: 'Indonesian wines (Hatten, Sababay, Plaga / Two Islands). Excellent with tropical Indonesian flavours and lighter Western seafood courses. Local pride, strong value.',
              },
              {
                title: 'Premium upgrade',
                price: 'IDR 2,000,000–2,800,000+ pp',
                desc: 'French or Italian wines (or mixed high-end selection), bottle-dependent. For private chef with wine pairing Bali romantic evenings.',
              },
              {
                title: 'Champagne on arrival',
                price: 'from +IDR 850,000+',
                desc: 'Chilled bottle opened when you sit. Good NV above the baseline; prestige cuvées significantly more. Included in Celebration/Proposal packages on request.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-[20px] border border-[#E5E3E0] bg-white p-6">
                <Wine className="w-5 h-5 text-[#C5A028] mb-3" />
                <h3 className="font-semibold text-[#1A1A1A] mb-1">{card.title}</h3>
                <p className="text-[#C5A028] text-sm font-medium mb-2">{card.price}</p>
                <p className="text-[#4A4745] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745] mt-8">
            Need a full bar?{' '}
            <Link to="/in-villa-service/bartenders" className="text-[#C5A028] hover:underline">
              In-villa bartenders
            </Link>{' '}
            ·{' '}
            <Link to="/in-villa-service/sommelier" className="text-[#C5A028] hover:underline">
              Sommelier service
            </Link>
          </p>
        </div>
      </section>

      {/* 9. ADD-ONS & SOFT PACKAGES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-14 text-center">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Elevate
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Make It Unforgettable
            </h2>
            <p className="text-[#4A4745] max-w-[520px] mx-auto">
              Add any of these when you message us. We handle all of them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {ADDONS.map((touch) => (
              <div
                key={touch.label}
                className="romantic-reveal rounded-[20px] border border-[#E5E3E0] p-6 hover:border-[#C5A028]/40 transition-all"
              >
                <touch.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="font-semibold text-[#1A1A1A] mb-1 text-sm">{touch.label}</h3>
                <p className="text-[#C5A028] text-sm font-medium mb-2">{touch.price}</p>
                <p className="text-[#4A4745] text-sm leading-relaxed">{touch.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Soft packages
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {SOFT_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="rounded-[20px] border border-[#E5D9B5] bg-[#FAFAF8] p-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">{pkg.title}</h4>
                <p className="text-sm text-[#4A4745] leading-relaxed mb-3">{pkg.desc}</p>
                {pkg.link && (
                  <Link to={pkg.link.href} className="text-sm text-[#C5A028] hover:underline">
                    {pkg.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745]">
            Also explore{' '}
            <Link to="/proposal-dinner" className="text-[#C5A028] hover:underline">
              proposal dinner
            </Link>
            ,{' '}
            <Link to="/honeymoon-chef" className="text-[#C5A028] hover:underline">
              honeymoon chef
            </Link>
            ,{' '}
            <Link to="/catering/floating-breakfast" className="text-[#C5A028] hover:underline">
              floating breakfast
            </Link>
            , and{' '}
            <Link to="/fine-dining/chefs-table" className="text-[#C5A028] hover:underline">
              Chef&apos;s Table
            </Link>{' '}
            for another night.
          </p>
        </div>
      </section>

      {/* 10. OCCASIONS */}
      <section className="py-20 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto text-center">
          <p
            className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Occasions
          </p>
          <h2 className="text-3xl md:text-4xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Perfect for Anniversary, Honeymoon &amp; Proposal Dinners
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {OCCASIONS.map((occ) =>
              occ.href ? (
                <Link
                  key={occ.label}
                  to={occ.href}
                  className="px-5 py-2.5 rounded-full border border-[#1A1A1A]/15 text-sm text-[#1A1A1A] font-medium hover:border-[#C5A028] hover:text-[#8B6F1A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  {occ.label}
                </Link>
              ) : (
                <span
                  key={occ.label}
                  className="px-5 py-2.5 rounded-full border border-[#1A1A1A]/15 text-sm text-[#1A1A1A] font-medium"
                >
                  {occ.label}
                </span>
              ),
            )}
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="rounded-[20px] bg-white border border-[#E5E3E0] p-6">
              <h3 className="font-semibold mb-2">Proposals</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                We time courses, champagne, and privacy around your plan; photographer ready for the right second.{' '}
                <Link to="/proposal-dinner" className="text-[#C5A028] hover:underline">
                  Proposal dinner →
                </Link>
              </p>
            </div>
            <div className="rounded-[20px] bg-white border border-[#E5E3E0] p-6">
              <h3 className="font-semibold mb-2">Anniversaries &amp; honeymoons</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                First night in Bali, tenth year, babymoon — evenings couples call the meal of the trip. Sunset timing
                strong in{' '}
                <Link to="/locations/uluwatu" className="text-[#C5A028] hover:underline">
                  Uluwatu
                </Link>{' '}
                and Jimbaran.{' '}
                <Link to="/honeymoon-chef" className="text-[#C5A028] hover:underline">
                  Honeymoon chef →
                </Link>
              </p>
            </div>
            <div className="rounded-[20px] bg-white border border-[#E5E3E0] p-6">
              <h3 className="font-semibold mb-2">Birthday &amp; first night</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                Birthday dinners and first night in Bali — same private production, timed for sunset where the villa
                allows. Tell us the date and we build the evening around it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHAT'S INCLUDED + TRUST */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            What&apos;s Included
          </h2>
          <div className="rounded-[28px] border border-[#E5D9B5] p-8 md:p-10 mb-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#E5D9B5] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A6F15] mb-1">Starting from</p>
                <p className="text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  IDR 3,800,000 <span className="text-[#4A4745] text-lg">++ / person</span>
                </p>
                <p className="text-xs text-[#4A4745] mt-1">
                  Minimum 2 guests · Max ~12 for intimate villa fine dining · couple-first
                </p>
              </div>
              <WaButton href={WA_LINK} label="Get a Quote" source="romantic-dinner-included-cta" />
            </div>
          </div>

          <div className="rounded-[24px] bg-[#1A1A1A] p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#C5A028]" />
              <h3 className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Booking confidence
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {TRUST_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/[75%]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/[50%] leading-relaxed">
              Deposit / cancellation: full refund 14+ days out, 50% at 7–13 days, none under 7 days —{' '}
              <Link to="/cancellation" className="text-[#C5A028] hover:underline">
                policy
              </Link>
              . ++ transparency: published rates are ++; quote is fixed itemised all-in before commit.{' '}
              <Link to="/why-mychef" className="text-[#C5A028] hover:underline">
                Why myCHEF
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 12. HOW TO PLAN */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[960px] mx-auto">
          <div className="mb-14 text-center">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Three Steps
            </p>
            <h2 className="text-white text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              How to Plan Your Romantic Dinner
            </h2>
            <p className="text-white/[50%] text-sm mt-4 max-w-2xl mx-auto">
              Explore{' '}
              <Link to="/fine-dining" className="text-[#C5A028] hover:underline">
                full fine dining
              </Link>
              ,{' '}
              <Link to="/fine-dining/menus" className="text-[#C5A028] hover:underline">
                signature menus
              </Link>
              ,{' '}
              <Link to="/fine-dining/our-chefs" className="text-[#C5A028] hover:underline">
                our chefs
              </Link>
              ,{' '}
              <Link to="/proposal-dinner" className="text-[#C5A028] hover:underline">
                proposal dinner
              </Link>
              , or{' '}
              <Link to="/private-chef/uluwatu" className="text-[#C5A028] hover:underline">
                private chef Uluwatu
              </Link>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Message Sofia on WhatsApp',
                desc: 'Date, villa area, occasion. Reply within the hour.',
              },
              {
                n: '02',
                title: 'We Propose the Evening',
                desc: 'Menu path (7/9, Indonesian/Western, fish/meat), styling, add-ons, availability, fixed pricing.',
              },
              {
                n: '03',
                title: 'You Just Arrive',
                desc: 'Setup, cooking, service, cleanup. You enjoy.',
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <p className="text-[#C5A028] text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {step.n}
                </p>
                <h3 className="text-white text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.title}
                </h3>
                <p className="text-white/[60%] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <WaButton href={WA_LINK} label="Start Planning" source="romantic-dinner-howitworks-cta" />
          </div>
        </div>
      </section>

      {/* 13. TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-14 text-center">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Guests Say
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              560+ events · 500+ villa bookings
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="rounded-[24px] border border-[#E8E2CF] bg-white p-7 shadow-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A028] text-[#C5A028]" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed italic mb-6">“{t.quote}”</p>
                <div>
                  <p className="font-semibold text-sm text-[#1A1A1A]">{t.name}</p>
                  <p className="text-xs text-[#4A4745] mt-0.5">
                    {t.location} · {t.eventType}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[720px] mx-auto">
          <div className="mb-12 text-center">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Questions
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Romantic Dinner FAQ
            </h2>
            <p className="text-sm text-[#4A4745] mt-3">
              Private chef romantic dinner Bali · multi-course tasting · villa privacy
            </p>
          </div>
          <FAQAccordion items={FAQS} defaultOpenCount={3} showToc ctaEvery={5} />
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Candlelit private fine dining table for two ready for a romantic private chef dinner in Bali"
          width={1344}
          height={768}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = FALLBACK.hero
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60" />
        <div className="relative z-10 text-center max-w-[720px] mx-auto">
          <p
            className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready When You Are
          </p>
          <h2 className="text-white text-4xl md:text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Build Your Private Fine-Dining Production
          </h2>
          <p className="text-white/[70%] text-lg mb-4 leading-relaxed">
            Tell Sofia your date, villa area, and whether you want 7 or 9 courses.
            <br />
            We handle the rest — styling, brigade, service, cleanup.
          </p>
          <p className="text-white/[45%] text-sm mb-10">
            +62 896-7407-2020 · bali@mychef.id · From IDR 3,800,000++ pp
          </p>
          <WaButton href={WA_LINK} label="Message Sofia on WhatsApp" source="romantic-dinner-final-cta" />
          <p className="text-white/[40%] text-xs mt-6">Replies within 1 hour · No booking fee · Fixed written quote</p>
        </div>
      </section>

      {/* 16. RELATED LINKS */}
      <section className="py-12 px-6 bg-[#1A1A1A]">
        <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {RELATED.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-white/[50%] text-sm hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="romantic-dinner"
        serviceName="a private chef romantic dinner in my Bali villa"
        intent="pricing and availability for 7- or 9-course tasting"
        label="WhatsApp Sofia — Romantic Dinner"
      />
    </div>
  )
}
