import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Check,
  ArrowRight,
  Calendar,
  Users,
  MapPin,
  Utensils,
  CreditCard,
  ChefHat,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
  howToSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import { CATERING_STYLES, CATERING_FAQS } from '@/data/cateringPillarContent'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustRow from '@/components/catering/TrustRow'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { CateringRiskReversal } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'

const WA_LINK = buildWhatsAppUrl({ serviceName: 'catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'
const bookingHref = (packageName: string) => `?package=${encodeURIComponent(packageName)}#book`

/** Short card blurbs — long SEO copy lives in the structured guide section below. */
const STYLE_BLURBS: Record<string, string> = {
  'BBQ Catering': 'Live grill at your villa. Social, flexible, ideal for 10–60 guests.',
  'Buffet Catering': 'Structured variety for 30–250 guests — weddings, corporate, celebrations.',
  'Plated Set Menus': 'Seated multi-course service with restaurant pacing and presentation.',
  'Drop-Off Catering': 'Hot food delivered. No staff in the villa. Perfect for private groups.',
  'Villa Catering': 'Full chef + service team at your villa for lunch, dinner, or events.',
  'Corporate Catering': 'Team dinners, offsites, and retreats with itemised invoices.',
  'Babi Guling': 'Traditional Balinese whole-pig feast for villa parties and birthdays.',
  'Grazing Tables': 'Visual cheese, charcuterie, and canapé spreads for welcome drinks.',
  'Retreat Catering': 'Multi-day nourishing menus for wellness and yoga groups.',
  'Floating Breakfast': 'Photo-ready pool breakfast and brunch for couples and small groups.',
}

const BBQ_PACKAGES = [
  {
    title: 'Indonesian BBQ',
    price: 'IDR 700,000/person',
    description: 'Sate, ikan bakar, jagung bakar, sambal matah, nasi kuning, gado-gado.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
  {
    title: 'International BBQ',
    price: 'IDR 700,000/person',
    description: 'Beef tenderloin, lamb chops, prawns, salmon, chicken, gourmet salads, garlic bread.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
  {
    title: 'Surf & Turf BBQ',
    price: 'IDR 850,000/person',
    description: 'Wagyu, lobster, king prawns, salmon, Mahi-mahi, premium sides, dessert station.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Plated service', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
]

const BUFFET_PACKAGES = [
  {
    image: '/generated/aura-buffet.webp',
    title: 'Indonesian Buffet',
    price: 'IDR 700,000/person',
    description: '8 hot dishes, 4 cold, dessert, fruit, sambals, rice, noodles, breads.',
    includes: ['Chef', '3 service staff', 'Chafing dishes', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/pkg-italian.webp',
    title: 'International Buffet',
    price: 'IDR 750,000/person',
    description: 'Mediterranean, Asian fusion, roast and pasta stations, salads, dessert table.',
    includes: ['Chef', '4 service staff', 'Live stations', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/aura-corporate.webp',
    title: 'Live-Station Buffet',
    price: 'IDR 950,000/person',
    description: '3 live stations, roast station, full dessert bar — high visual impact.',
    includes: ['Head chef', '5 service staff', 'Live stations', 'Event linens', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
]

const SPECIALTY_LINKS = [
  { title: 'Plated dinners', price: 'From IDR 800K/pp', href: '/catering/plated-catering', blurb: '3–5 courses, full table service' },
  { title: 'Drop-off catering', price: 'From IDR 700K/pp', href: '/catering/drop-off-catering', blurb: 'Delivered hot — no staff on site' },
  { title: 'Babi guling', price: 'From IDR 3.7M', href: '/catering/babi-guling', blurb: 'Whole-pig Balinese feast' },
  { title: 'Grazing tables', price: 'From IDR 650K', href: '/catering/grazing-tables', blurb: 'Cheese, charcuterie, canapés' },
  { title: 'Floating breakfast', price: 'From IDR 950K/couple', href: '/catering/floating-breakfast', blurb: 'Pool breakfast for 2–10' },
  { title: 'Corporate & retreats', price: 'Custom quote', href: '/catering/corporate-catering', blurb: 'Offsites, teams, multi-day' },
]

/** Cross-links: food catering + mobile bar + daily chef (same guest journey). */
const FNB_STACK_LINKS = [
  {
    title: 'Mobile cocktail bar',
    price: 'From IDR 500K++/guest',
    href: '/in-villa-service/bartenders',
    blurb: 'Bar catering for villa parties — free-flow or BYO packages we bring to you',
  },
  {
    title: 'Private cocktail party',
    price: 'Occasion plan',
    href: '/experiences/private-cocktail-party',
    blurb: 'Full party night: mobile bar timeline, canapés and entertainment add-ons',
  },
  {
    title: 'Private chef (daily)',
    price: 'From IDR 2.7M++/day',
    href: '/private-chef-bali',
    blurb: 'Stay chef: full day of staff, three flexible meals, when you need more than one catering night',
  },
  {
    title: 'Villa parties',
    price: 'Event production',
    href: '/events/villa-parties',
    blurb: 'Pool and garden parties with food + bar stacked in one plan',
  },
  {
    title: 'Cooking class Bali',
    price: 'Contact for quote',
    href: '/experiences/cooking-class',
    blurb: 'Hands-on Balinese & Indonesian villa lessons when guests want to cook with the chef',
  },
]

const PRICING_TABLE = [
  { name: 'Indonesian BBQ', price: 'IDR 700,000/person', min: '10 guests', bestFor: 'Villa BBQ' },
  { name: 'International BBQ', price: 'IDR 700,000/person', min: '10 guests', bestFor: 'Villa BBQ' },
  { name: 'Surf & Turf BBQ', price: 'IDR 850,000/person', min: '10 guests', bestFor: 'Special occasions' },
  { name: 'Indonesian Buffet', price: 'IDR 700,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'International Buffet', price: 'IDR 750,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'Live-Station Buffet', price: 'IDR 950,000/person', min: '30 guests', bestFor: 'Larger events' },
  { name: '3-Course Plated', price: 'IDR 800,000/person', min: '10 guests', bestFor: 'Seated dinners' },
  { name: '4-Course Plated', price: 'IDR 1,000,000/person', min: '10 guests', bestFor: 'Milestone dinners' },
  { name: '5-Course Dinner', price: 'IDR 1,300,000/person', min: '10 guests', bestFor: 'Fine dining' },
  { name: 'Family Drop-Off', price: 'IDR 700,000/person', min: '4 guests', bestFor: 'Private meals' },
  { name: 'Babi Guling Small', price: 'IDR 3,700,000 total', min: '10 guests', bestFor: 'Traditional feasts' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose a format', desc: 'BBQ, buffet, plated, drop-off, or specialty.', icon: Utensils },
  { step: '02', title: 'Send details', desc: 'Date, area, guest count, dietary needs.', icon: Calendar },
  { step: '03', title: 'Get a quote', desc: 'Itemised price with travel fees disclosed.', icon: CreditCard },
  { step: '04', title: 'Pay deposit', desc: '50% locks the date. Balance the day before.', icon: ShieldCheck },
  { step: '05', title: 'We execute', desc: 'Chef, staff, equipment, service, cleanup.', icon: ChefHat },
  { step: '06', title: 'You host', desc: 'Guests eat. You enjoy the night.', icon: Sparkles },
]

const AREAS = [
  'Seminyak', 'Canggu', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Jimbaran', 'Sanur', 'Kerobokan', 'Ungasan', 'Bukit',
]

/** Top FAQs shown on page + mirrored in FAQ schema (match visible content). */
/** Full catering FAQ set for TOC, schema and long-tail coverage (no new pages). */
const PRIMARY_FAQS = CATERING_FAQS

export default function CateringMainPage() {
  const ref = useRef<HTMLDivElement>(null)
  const meta = getPageMeta('catering')

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        ogImage={meta.ogImage}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Villa Catering Bali',
            description:
              'Chef-led catering for Bali villas and events — BBQ, buffet, plated dinners, drop-off, and specialty formats. Menus, staffing, setup, and cleanup included.',
            url: `${SITE}/catering`,
            lowPrice: '350000',
            highPrice: '3700000',
            unitText: 'per person',
          }),
          faqPageSchema(PRIMARY_FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book Catering in Bali',
            description: 'Book professional villa catering in Bali in six clear steps.',
            totalTime: 'PT15M',
            steps: HOW_IT_WORKS.map((s) => ({ name: s.title, text: s.desc })),
          }),
          breadcrumbSchema('Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[72vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-catering-hero.webp"
            alt="Indonesian chef plating gourmet BBQ at a luxury Bali villa catering event by myCHEF"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.62) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 pb-14">
          <Breadcrumb items={[{ label: 'Catering' }]} theme="dark" className="justify-center mb-6" decorative />
          <p
            className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Villa & Event Catering · Bali
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Catering Bali for Groups, Parties &amp; Hosted Dinners
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-3 leading-relaxed">
            <strong className="text-white">Food catering</strong> in Bali for villas: wedding catering, party
            catering, BBQ, buffet, plated dinners and drop-off — chef, staff, menu and cleanup included. Order a
            fixed quote on WhatsApp.
          </p>
          <p className="text-[#C5A028] text-sm md:text-base font-semibold tracking-wide mb-8">
            From IDR 700,000++ per person · Transparent catering packages · Quote in 1 hour
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="catering-hero"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> Get a Quote on WhatsApp
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border border-white/40 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              View Packages <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-white/70 text-sm mb-8">
            Looking for a daily villa chef instead?{' '}
            <Link
              to="/private-chef-bali"
              className="text-white underline underline-offset-4 hover:text-[#C5A028] transition-colors"
            >
              Private chef service →
            </Link>
          </p>
          <TrustRow
            items={['500+ villa events', 'All-inclusive quotes', 'Chef + staff included', 'Bali-wide']}
            dark
          />
        </div>
      </section>

      <TrustStrip />
      <CateringRiskReversal />

      {/* ═══════ CATERING STYLES ═══════ */}
      <section id="packages" className="scroll-mt-24 py-14 md:py-20 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Formats"
            title="Catering Styles for Bali Villas & Events"
            subtitle="Pick the format that fits your guest count and occasion. Every package includes chef, ingredients, service and cleanup."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {CATERING_STYLES.map((style) => (
              <CateringPackageCard
                key={style.title}
                image={style.image}
                title={style.title}
                price={style.price}
                description={STYLE_BLURBS[style.title] || style.description.slice(0, 100)}
                href={style.href}
                accent={style.accent}
                cta="Explore"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED: BBQ ═══════ */}
      <section className="py-14 md:py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Most booked"
            title="BBQ Catering Packages"
            subtitle="The villa crowd-pleaser — live grill, social energy, easy logistics."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {BBQ_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} href={bookingHref(pkg.title)} cta="Select package" />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/catering/bbq-catering"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              Full BBQ details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED: BUFFET ═══════ */}
      <section className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Larger groups"
            title="Buffet Catering Packages"
            subtitle="Weddings, villa parties and corporate dinners from 30 guests."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {BUFFET_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} href={bookingHref(pkg.title)} cta="Select package" />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/catering/buffet"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              Full buffet details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SPECIALTY STRIP ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="More formats"
            title="Specialty Catering"
            subtitle="Same team. Different formats for different nights."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPECIALTY_LINKS.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group bg-white rounded-2xl border border-[#E8E6E3] p-5 md:p-6 hover:border-[#6B8E5A] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#6B8E5A] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                </div>
                <p className="text-[#6B8E5A] text-sm font-semibold mb-1">{item.price}</p>
                <p className="text-sm text-[#4A4745]">{item.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ F&B STACK ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-white" id="food-and-drinks">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Food & drinks"
            title="Pair Bali catering with a mobile bar or private chef"
            subtitle="One company for F&B: event catering, party drinks catering, and multi-day villa chef hire — deep-linked so guests never guess which product fits."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FNB_STACK_LINKS.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-5 md:p-6 hover:border-[#6B8E5A] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#6B8E5A] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                </div>
                <p className="text-[#6B8E5A] text-sm font-semibold mb-1">{item.price}</p>
                <p className="text-sm text-[#4A4745]">{item.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MID CTA ═══════ */}
      <section className="py-12 md:py-14 px-6 bg-white">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get a Clear Catering Quote in 1 Hour
          </h2>
          <p className="text-[#4A4745] text-sm md:text-base mb-6">
            Send your date, guest count and villa area. We reply on WhatsApp with the right format and an itemised price.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="catering-mid-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp for a Quote
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E6E3] text-[#1A1A1A] text-sm font-medium tracking-widest uppercase rounded-full hover:bg-[#FAFAF8] transition-all"
            >
              See price table
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ WHO IT'S FOR ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Who Villa Catering Is For"
            subtitle="If you are hosting at a villa in Canggu, Seminyak, Uluwatu or Ubud — this is built for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Family holidays', desc: 'Kids eat early. Adults later. No restaurant logistics or split tables.' },
              { title: 'Birthdays & parties', desc: 'Private space, your music, no closing time — celebration at the villa.' },
              { title: 'Wedding parties', desc: 'Welcome dinners, rehearsals, post-wedding brunch — one caterer for every meal.' },
              { title: 'Corporate retreats', desc: 'Team dinners without transport. Dietary needs handled. Invoiced cleanly.' },
              { title: 'Bachelor / bachelorette', desc: 'Poolside BBQ without venue restrictions. Your playlist, your timeline.' },
              { title: 'Villa owners & hosts', desc: 'Repeat bookings, consistent quality, one point of contact for every guest group.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-5 md:p-6">
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ VILLA VS RESTAURANT ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Why villa catering"
            title="Skip the Restaurant. Eat at Your Villa."
            subtitle="A restaurant dinner for 10 in Seminyak often runs IDR 8–12M with drinks and transport. Indonesian BBQ for 10 at your villa: from IDR 7M — with a chef."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#E8E6E3] p-6">
              <h3 className="text-lg mb-4 text-[#4A4745]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Restaurant dinner
              </h3>
              <ul className="space-y-3">
                {[
                  'Transport for 8+ people in Bali traffic',
                  'Split tables, noise, other guests',
                  'Fixed menu, fixed time, fixed pace',
                  'Tax and service stacked on top',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <span className="text-red-400 font-bold mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#6B8E5A]/25 bg-[#6B8E5A]/5 p-6">
              <h3 className="text-lg mb-4 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                myCHEF villa catering
              </h3>
              <ul className="space-y-3">
                {[
                  'Walk to your garden — zero transport',
                  'One table, your music, your guests only',
                  'Custom menu, your pace, no rush',
                  'All-inclusive quote before you pay',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1A1A1A]">
                    <Check className="w-4 h-4 text-[#6B8E5A] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section id="book" className="scroll-mt-24 py-14 md:py-20 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Transparent pricing"
            title="Catering Prices in Bali"
            subtitle="Final price confirmed before deposit. Chef, staff, ingredients, equipment, setup and cleanup included."
          />
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['No hidden fees', 'All-inclusive quotes', '21% tax disclosed', 'Travel fee upfront', 'Price before deposit'].map(
              (d) => (
                <span
                  key={d}
                  className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]"
                >
                  {d}
                </span>
              ),
            )}
          </div>
          <div className="hidden md:block overflow-x-auto bg-white rounded-2xl border border-[#E8E6E3] p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Package</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Price</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Min.</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Best for</th>
                  <th className="pb-3">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row) => (
                  <tr key={row.name} className="border-b border-[#E8E6E3] hover:bg-[#FAFAF8] transition-colors">
                    <td className="py-3.5 font-medium">{row.name}</td>
                    <td className="py-3.5 text-[#6B8E5A] font-semibold">{row.price}</td>
                    <td className="py-3.5 text-[#4A4745]">{row.min}</td>
                    <td className="py-3.5 text-[#4A4745]">{row.bestFor}</td>
                    <td className="py-3.5">
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-source="catering-table-check"
                        className="text-sm font-semibold text-[#6B8E5A] hover:underline"
                      >
                        Check date
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3">
            {PRICING_TABLE.map((row) => (
              <div key={row.name} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-sm">{row.name}</h4>
                  <span className="text-[#6B8E5A] font-semibold text-sm">{row.price}</span>
                </div>
                <p className="text-xs text-[#4A4745] mb-2">
                  Min. {row.min} · {row.bestFor}
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="catering-card-check"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6B8E5A]"
                >
                  Check date <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How Booking Works"
            subtitle="From first message to finished dinner — six steps."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-[#6B8E5A]" />
                </div>
                <span className="text-[#6B8E5A] text-xs font-bold tracking-wider">{step.step}</span>
                <h3 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h3>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AREAS ═══════ */}
      <section className="py-12 md:py-14 px-6 bg-[#FAFAF8]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionHeader
            eyebrow="Coverage"
            title="Catering Across Bali"
            subtitle={
              <>
                We serve villas and event spaces island-wide — including{' '}
                <Link to="/locations/seminyak" className="underline hover:text-[#C5A028]">
                  Seminyak
                </Link>
                ,{' '}
                <Link to="/locations/canggu" className="underline hover:text-[#C5A028]">
                  Canggu
                </Link>
                ,{' '}
                <Link to="/locations/ubud" className="underline hover:text-[#C5A028]">
                  Ubud
                </Link>
                , and{' '}
                <Link to="/locations/uluwatu" className="underline hover:text-[#C5A028]">
                  Uluwatu
                </Link>
                . Travel fees outside Canggu and Seminyak are disclosed upfront.
              </>
            }
          />
          <div className="grid sm:grid-cols-3 gap-4 mb-6 text-left">
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
              <p className="font-medium text-sm mb-1">Canggu &amp; Seminyak</p>
              <p className="text-xs text-[#4A4745]">No travel fee. Same-day often available.</p>
            </div>
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
              <p className="font-medium text-sm mb-1">Uluwatu &amp; Ubud</p>
              <p className="text-xs text-[#4A4745]">IDR 250K–500K travel. Book 3+ days ahead.</p>
            </div>
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
              <p className="font-medium text-sm mb-1">Nusa Dua, Sanur, Jimbaran</p>
              <p className="text-xs text-[#4A4745]">IDR 400K–700K travel. Book 5+ days ahead.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SEO GUIDE (tight, structured, catering-only) ═══════ */}
      <section className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-[760px] mx-auto prose-catering">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Catering in Bali — What Hosts Need to Know
          </h2>
          <div className="space-y-4 text-sm md:text-base text-[#4A4745] leading-relaxed">
            <p>
              <strong className="text-[#1A1A1A]">Catering in Bali</strong> means a professional team brings the kitchen to
              your villa or venue: menu design, fresh ingredients, cooking, service, and full cleanup. For luxury villa
              holidays, weddings, birthdays, corporate retreats and hosted dinners, it is usually simpler — and more
              private — than booking a restaurant for a large group.
            </p>
            <p>
              myCHEF is a chef-led catering company based in Bali. We employ and train our own chefs and service staff
              (no last-minute freelancers). Quotes are itemised in writing. Every allergy is logged. Travel fees are
              disclosed before you pay a deposit. That operational clarity is what turns a “nice dinner idea” into a
              night that actually runs on time.
            </p>

            <h3 className="text-xl text-[#1A1A1A] pt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Choosing the right catering format
            </h3>
            <p>
              <Link to="/catering/bbq-catering" className="text-[#6B8E5A] font-semibold hover:underline">
                BBQ catering Bali
              </Link>{' '}
              suits social villa nights of roughly 10–60 guests — live grill, flexible pacing, high energy.{' '}
              <Link to="/catering/buffet" className="text-[#6B8E5A] font-semibold hover:underline">
                Buffet catering Bali
              </Link>{' '}
              is the reliable choice for 30–250 guests when you need variety and structured flow (weddings, corporate
              dinners, large birthdays).{' '}
              <Link to="/catering/plated-catering" className="text-[#6B8E5A] font-semibold hover:underline">
                Plated set menus
              </Link>{' '}
              create a seated, restaurant-style experience for milestone dinners.{' '}
              <Link to="/catering/drop-off-catering" className="text-[#6B8E5A] font-semibold hover:underline">
                Drop-off catering
              </Link>{' '}
              delivers hot food with no staff remaining in the villa — ideal for private family meals.
            </p>
            <p>
              Specialty formats cover the rest:{' '}
              <Link to="/catering/babi-guling" className="text-[#6B8E5A] font-semibold hover:underline">
                babi guling
              </Link>{' '}
              for traditional Balinese feasts,{' '}
              <Link to="/catering/grazing-tables" className="text-[#6B8E5A] font-semibold hover:underline">
                grazing tables
              </Link>{' '}
              for welcome drinks,{' '}
              <Link to="/catering/floating-breakfast" className="text-[#6B8E5A] font-semibold hover:underline">
                floating breakfast
              </Link>{' '}
              for pool mornings, and dedicated{' '}
              <Link to="/catering/corporate-catering" className="text-[#6B8E5A] font-semibold hover:underline">
                corporate event catering Bali
              </Link>{' '}
              and{' '}
              <Link to="/catering/retreat-catering" className="text-[#6B8E5A] font-semibold hover:underline">
                retreat
              </Link>{' '}
              programmes. Full{' '}
              <Link to="/catering/villa-catering" className="text-[#6B8E5A] font-semibold hover:underline">
                Bali villa catering
              </Link>{' '}
              is the umbrella for chef-led service inside your property. Planning a celebration? See{' '}
              <Link to="/events/weddings" className="text-[#6B8E5A] font-semibold hover:underline">
                wedding catering Bali
              </Link>
              .
            </p>

            <h3 className="text-xl text-[#1A1A1A] pt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What is included in a myCHEF catering quote
            </h3>
            <p>
              Unless stated otherwise, packages include the chef, service staff, ingredients for the menu, equipment
              (grill, chafing, cutlery, glassware as needed), setup, service, and full cleanup. Add-ons such as
              bartenders, Wagyu upgrades, gluten-free adaptation, or plated service are priced clearly. Out-of-area
              travel is quoted before you commit — never as a surprise on the day.
            </p>

            <h3 className="text-xl text-[#1A1A1A] pt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              How far ahead to book
            </h3>
            <p>
              For peak season (July–August, Christmas–New Year) and wedding weekends, book as early as your villa dates
              are fixed. Mid-week villa BBQs in Canggu or Seminyak can often be confirmed with a few days’ notice. Large
              buffets, multi-station events, and Ubud or Uluwatu venues need more lead time for staffing and logistics.
              Message us with date and guest count — we will tell you honestly if the date is free.
            </p>

            <h3 className="text-xl text-[#1A1A1A] pt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bali catering menu, packages, areas and bar catering
            </h3>
            <p>
              Looking for a clear <strong>Bali catering menu</strong>, <strong>catering packages</strong> and price
              list? Use the packages on this page as the baseline, then request a written proposal for your guest count.
              We regularly deliver <strong>catering in Bali</strong> across Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua
              and the Kuta corridor — see{' '}
              <Link to="/locations" className="text-[#6B8E5A] font-semibold hover:underline">
                locations
              </Link>
              . Halal-friendly and pork-free menus are available on request; traditional{' '}
              <Link to="/catering/babi-guling" className="text-[#6B8E5A] font-semibold hover:underline">
                babi guling
              </Link>{' '}
              is pork and not for Muslim-sensitive groups. Indonesian <strong>prasmanan</strong> (buffet) lives on our{' '}
              <Link to="/catering/buffet" className="text-[#6B8E5A] font-semibold hover:underline">
                buffet catering
              </Link>{' '}
              page; multi-day “harian” meals are usually{' '}
              <Link to="/private-chef-bali" className="text-[#6B8E5A] font-semibold hover:underline">
                private chef day rates
              </Link>
              .
            </p>
            <p>
              High-intent hosts also search <strong>wedding catering</strong>, <strong>party catering</strong>,{' '}
              <strong>event catering</strong>, <strong>BBQ catering</strong>, <strong>buffet catering</strong> and how
              to <strong>order catering</strong> online. With myCHEF you WhatsApp date, guests and villa area — we send a
              fixed quote (no anonymous cart). Stack{' '}
              <Link to="/in-villa-service/bartenders" className="text-[#6B8E5A] font-semibold hover:underline">
                mobile cocktail bar packages from IDR 500,000++ per guest
              </Link>{' '}
              for drinks catering, or plan the night on a{' '}
              <Link to="/experiences/private-cocktail-party" className="text-[#6B8E5A] font-semibold hover:underline">
                private cocktail party
              </Link>
              . Weddings:{' '}
              <Link to="/events/weddings" className="text-[#6B8E5A] font-semibold hover:underline">
                wedding catering Bali
              </Link>{' '}
              ·{' '}
              <Link to="/bali-wedding-catering-packages" className="text-[#6B8E5A] font-semibold hover:underline">
                packages
              </Link>
              . Villa parties:{' '}
              <Link to="/events/villa-parties" className="text-[#6B8E5A] font-semibold hover:underline">
                villa party catering
              </Link>
              . Birthdays:{' '}
              <Link to="/events/birthdays" className="text-[#6B8E5A] font-semibold hover:underline">
                birthday catering
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="Catering Across Bali" subtitle="From villa BBQs to plated dinners." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8">
            {[
              {
                src: '/generated/mychef-catering-1.webp',
                alt: 'Indonesian chefs plating gourmet dishes at a Bali villa buffet by myCHEF',
              },
              {
                src: '/generated/mychef-catering-2.webp',
                alt: 'Luxury catering buffet on a Bali villa terrace with Indonesian staff serving',
              },
              {
                src: '/generated/mychef-catering-3.webp',
                alt: 'Indonesian catering team preparing live-grill BBQ at a Bali villa event',
              },
              {
                src: '/generated/mychef-catering-4.webp',
                alt: 'Elegant plated dinner service by a Balinese waiter at a Bali villa',
              },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          {
            name: 'Sarah & James',
            location: 'Seminyak Villa',
            quote:
              'The BBQ was incredible — the Wagyu was perfectly cooked and the team handled everything. We did not lift a finger.',
            rating: 5,
          },
          {
            name: 'The Chen Family',
            location: 'Canggu Villa',
            quote:
              'We booked the Indonesian buffet for 40 guests. The sate lilit and nasi kuning were authentic and delicious. Highly recommend.',
            rating: 5,
          },
          {
            name: 'Emma R.',
            location: 'Uluwatu Villa',
            quote:
              'The grazing table was the highlight of our wedding cocktail hour. Every guest commented on how beautiful (and tasty) it was.',
            rating: 5,
          },
        ]}
        title="What Our Guests Say"
        subtitle="Real reviews from villa catering events across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Catering FAQ"
            subtitle="Pricing, villa kitchens, allergies, BBQ, deposits and what is included — before you book catering in Bali."
          />
          <FAQAccordion items={PRIMARY_FAQS} defaultOpenCount={3} showToc ctaEvery={5} />
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="py-14 md:py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Book"
            title="Get Your Catering Quote"
            subtitle="Tell us your date, guests and villa area. We reply on WhatsApp with availability and exact pricing."
          />
          <BookingFormCatering
            title="Get Your Catering Quote"
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 12', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'notes', label: 'Dietary Notes / Special Requests', type: 'textarea', rows: 3 },
            ]}
            packageOptions={[
              ...CATERING_STYLES.map((s) => s.title),
              ...BBQ_PACKAGES.map((p) => p.title),
              ...BUFFET_PACKAGES.map((p) => p.title),
              '3-Course Plated',
              'Drop-Off Catering',
              'Babi Guling',
              'Grazing Table',
              'Floating Breakfast',
            ]}
            submitLabelBuilder={(formData) => {
              const guestLabel = formData.guests?.trim() ? `${formData.guests.trim()} Guests` : 'Your Guests'
              return `Get Catering Quote for ${guestLabel}`
            }}
            messageIntro="Hi myCHEF, I'd like a catering quote for my stay in Bali."
          />
          <p className="text-center text-xs text-[#4A4745]/80 mt-6">
            No spam. No calls unless you ask. Just a clear quote you can book or ignore.
          </p>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/generated/mychef-catering-bali-hub-catering.webp"
            alt="Completed luxury villa catering table with chef-prepared dishes ready to serve in Bali by myCHEF"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.70) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p
            className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Ready when you are
          </p>
          <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Catering for Your Bali Villa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { step: '1', text: 'Send details' },
              { step: '2', text: 'Get a quote' },
              { step: '3', text: 'Pay 50% deposit' },
              { step: '4', text: 'Show up and eat' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-[#C5A028] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.step}
                </span>
                <p className="text-white/80 text-sm mt-1">{item.text}</p>
              </div>
            ))}
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-source="catering-final-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
          </a>
          <p className="text-sm text-white/60 mt-5">No booking fee · Free consultation · Exact quote within 2 hours</p>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="catering-main"
        serviceType="catering"
        label="Get a Catering Quote via WhatsApp"
        serviceName="catering in Bali"
        intent="menu options and pricing"
      />
    </div>
  )
}
