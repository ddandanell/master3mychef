import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ChevronRight, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, faqPageSchema, serviceWithOfferSchema, howToSchema, menuSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { ArticleContentSection, Breadcrumb } from '@/components/shared'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { MenuFilterTabs, MenuOverview } from '@/components/menus'
import type { MenuFilterOption } from '@/components/menus'
import { CLASSIC_MENUS, formatIdr } from '@/data/menus'

gsap.registerPlugin(ScrollTrigger)

const SITE_URL = 'https://mychef.id'
const WHATSAPP_NUMBER = 6289674072020

const MENU_FILTER_OPTIONS: MenuFilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'mixed-meats', label: 'Mixed Meats' },
  { value: 'single-meat', label: 'Single-Meat' },
]

interface Testimonial {
  name: string
  stay: string
  quote: string
}

interface IncludedItem {
  title: string
  note: string
}

interface Stat {
  label: string
  value: string
}

interface FAQItem {
  q: string
  a: string
}

const PHILOSOPHY_STATS: Stat[] = [
  { value: '24', label: 'Signature Set Menus' },
  { value: '12,000+', label: 'Guests Fed' },
  { value: '100%', label: 'Market-Fresh' },
]

const INCLUDED_ITEMS: IncludedItem[] = [
  { title: 'Chef + kitchen team', note: 'A polished villa service team sized to your dinner.' },
  { title: 'All tableware & glassware', note: 'Plates, cutlery, linens, and glassware when needed.' },
  { title: 'Menu design & shopping', note: 'We source, plan, and brief the entire menu in advance.' },
  { title: 'Full setup & cleanup', note: 'Your villa kitchen is left immaculate after service.' },
  { title: 'Dietary customisations', note: 'Allergies, halal requests, pregnancy-safe, vegan, and more.' },
  { title: 'Service staff (on request)', note: 'Additional waiters, bartenders, or sommeliers can be added.' },
]

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Charlotte & Ben',
    stay: '3-bedroom villa, Uluwatu',
    quote: 'The quality was properly restaurant level, but calmer and more personal. Adriano built the menu around what looked best that morning and every course felt deliberate.',
  },
  {
    name: 'Marcus T.',
    stay: 'Clifftop villa, Bingin',
    quote: 'We have done luxury villa dining before. This was the first time it felt truly fine dining. The fish was immaculate, the pasta was fresh, and the kitchen looked untouched when they left.',
  },
  {
    name: 'Aisha K.',
    stay: 'Family villa, Seminyak',
    quote: 'They handled different dietary needs without making the meal feel compromised. It was refined, generous, and exactly the standard we wanted for a special Bali evening.',
  },
]

const FAQS: FAQItem[] = [
  {
    q: 'Which menu should I choose?',
    a: 'Choose Seafood for the morning catch and lighter evenings. Choose Single-Meat when one protein deserves the spotlight. Choose Mixed Meats for variety across the table, or Vegetarian for a garden-led menu. Choose Bespoke if you have a specific vision, dietary requirements, or a theme in mind.',
  },
  {
    q: 'Can you accommodate dietary restrictions?',
    a: 'Yes. We regularly adapt menus for vegetarian, vegan, halal, gluten-free, shellfish allergy, nut allergy, pregnancy-safe, and child-friendly requirements. Tell us before confirmation and we will design accordingly.',
  },
  {
    q: 'What is the minimum booking?',
    a: 'The minimum booking is 6 guests for our fine dining menus. The Romantic Dinner for 2 is available by special arrangement — contact us to discuss.',
  },
  {
    q: 'Is wine pairing included?',
    a: 'Wine pairing is optional at IDR 850,000 per guest across all menus. We can also recommend bottles if you prefer to supply your own wine.',
  },
  {
    q: 'How fresh are the ingredients?',
    a: 'Adriano and the team buy around the market that same morning whenever the menu calls for it. We do not build fine-dining dinners around frozen shortcuts. The menu follows what is beautiful and available that day.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Three to seven days is ideal, especially for premium seafood and wine pairing requests. Custom menus require 7 days for ingredient sourcing. During peak season we recommend booking earlier, but we can often accommodate short-notice villa dinners if the date is open.',
  },
]

const buildWhatsAppLink = (menuName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi myCHEF, I'd like to enquire about the ${menuName} menu.`)}`

export default function FineDiningMenusPage() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredMenus = useMemo(
    () => (activeFilter === 'all' ? CLASSIC_MENUS : CLASSIC_MENUS.filter((menu) => menu.family === activeFilter)),
    [activeFilter],
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>('.reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Classic Set Menus — Private Fine Dining Bali | myCHEF.id"
        description="Browse 24 classic set menus for private villa dining in Bali. Vegetarian, seafood, mixed meats & single-meat. From IDR 1.25M per guest."
        canonical="https://mychef.id/fine-dining/menus"
        ogImage="/generated/mychef-finedining-bali-luna-plating.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Our Menus', `${SITE_URL}/fine-dining/menus`, 'Fine Dining', `${SITE_URL}/fine-dining`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          serviceWithOfferSchema({
            name: 'Private Chef Menu Bali',
            description: 'Browse myCHEF private chef menus for Bali villas. 24 classic set menus across vegetarian, seafood, mixed-meat and single-meat families, with wine pairing add-ons and full villa service.',
            url: 'https://mychef.id/fine-dining/menus',
            price: '1250000',
            unitText: 'per person',
          }),
          howToSchema({
            name: 'How to Choose & Book a Fine Dining Menu in Bali',
            description: 'Browse myCHEF menus and book a private fine dining experience in your Bali villa.',
            steps: [
              { name: 'Browse the Menus', text: 'Compare 24 classic set menus across four families — vegetarian, seafood, mixed meats, and single-meat. Each includes full chef service and grocery sourcing.' },
              { name: 'Enquire on WhatsApp', text: 'Message us with your villa, guest count, and preferred menu. We confirm availability and pricing within the hour.' },
              { name: 'We Confirm & Book', text: 'We lock your menu, chef, and arrival time. A 50% deposit may be required for premium dates. Kitchen-Service or Full-Service — your choice.' },
            ],
          }),
          menuSchema(
            'Classic Set Menus',
            '24 classic set menus for private villa dining in Bali — vegetarian, seafood, mixed meats and single-meat. From IDR 1.25M per guest.',
            'https://mychef.id/fine-dining/menus',
            CLASSIC_MENUS.map((menu) => ({
              name: menu.name,
              description: `From ${formatIdr(menu.priceIdr)} per ${menu.guestNoun}`,
            })),
          ),
        ]}
      />

      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#1A1916]">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-finedining-bali-luna-plating.webp"
            alt="Luxury private chef plating in a Bali villa for myCHEF fine dining menus"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-24 text-center text-white">
          <Breadcrumb
            items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Our Menus' }]}
            theme="dark"
            className="justify-center mb-8"
          />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Michelin-Trained Chefs</p>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 text-center">
          <p
            className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C5A028]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Vegetarian · Seafood · Mixed Meats · Single-Meat · Bespoke
          </p>
          <h1
            className="mb-6 text-5xl text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.02 }}
          >
            Our Menus
          </h1>
          <p
            className="mx-auto mb-10 max-w-3xl text-2xl italic text-white/[80%] md:text-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            24 classic set menus across four families. Refined. Seasonal. Cooked in your villa.
          </p>
          <a
            href={buildWhatsAppLink('private dining')}
            target="_blank"
            rel="noopener noreferrer"
            data-source="menus-hero-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] transition-all hover:scale-[1.02] hover:bg-[#d0ab33] focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <MessageCircle className="h-4 w-4" />
            Check Menu Availability
          </a>
        </div>
      </section>

      <TrustStrip />

      <section className="bg-[#FAFAF8] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Our Philosophy
            </p>
            <h2 className="mb-6 text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Every menu begins at the market
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-[#4A4745]">
              Adriano starts with what is exceptional that morning: line-caught fish, bright herbs, ripe vegetables, and the ingredients that deserve to be cooked simply and precisely.
            </p>
            <p className="text-lg leading-relaxed text-[#4A4745]">
              The menus move with the season and the market — read our <Link to="/blog/seasonal-ingredients-bali-cooking-guide" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">seasonal ingredients Bali cooking guide</Link>. No frozen centrepieces, no tired luxury shortcuts, no fixed script when a better ingredient is available that day.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PHILOSOPHY_STATS.map((stat) => (
              <div key={stat.label} className="reveal rounded-[24px] border border-[#E7E2D9] bg-white px-8 py-10 text-center shadow-sm">
                <div className="mb-2 text-4xl text-[#1A1916]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#8A7C5A]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-10 text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Classic Set Menus
            </p>
            <h2 className="text-3xl text-white md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Choose between our 24 signature set menus
            </h2>
          </div>

          <div className="reveal mb-12">
            <MenuFilterTabs options={MENU_FILTER_OPTIONS} active={activeFilter} onChange={setActiveFilter} />
          </div>

          <MenuOverview menus={filteredMenus} grouped={activeFilter === 'all'} dataSource="finedining-menus" />

          <div className="reveal mt-10 rounded-[24px] border border-[#C5A028]/25 bg-white/[0.05] p-7 text-center md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C5A028]">Custom / Bespoke Menu</p>
            <h3 className="mt-3 text-2xl text-white md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your menu, designed from scratch…
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/[80%]">
              A specific cuisine, dietary requirements, a surprise for your guests, a theme that means something. Tell us the occasion and our chefs will design a bespoke menu around your evening.
            </p>
            <Link
              to="/quote"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1A1A1A] transition-colors hover:bg-[#d0ab33] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Design Your Menu
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="reveal mt-16">
            <h3 className="mb-8 text-center text-2xl text-white md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore More Menu Collections
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link
                to="/three-course"
                className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.08]"
              >
                <h4 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[#C5A028]">
                  Three-Course Dining
                </h4>
                <p className="mb-4 text-sm text-white/[70%]">
                  Lighter 3-course menus from IDR 850K
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] transition-all group-hover:gap-3">
                  Explore <ChevronRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/bbq-grill"
                className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.08]"
              >
                <h4 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[#C5A028]">
                  BBQ Grill Experience
                </h4>
                <p className="mb-4 text-sm text-white/[70%]">
                  Live grill station from IDR 950K
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] transition-all group-hover:gap-3">
                  Explore <ChevronRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/kids-menus"
                className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.08]"
              >
                <h4 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[#C5A028]">
                  Kids&apos; Menus
                </h4>
                <p className="mb-4 text-sm text-white/[70%]">
                  Fun, nut-free menus from IDR 250K/child
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] transition-all group-hover:gap-3">
                  Explore <ChevronRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/dining-styles"
                className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.08]"
              >
                <h4 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[#C5A028]">
                  Browse All Dining Styles
                </h4>
                <p className="mb-4 text-sm text-white/[70%]">
                  50 menus across 6 collections
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] transition-all group-hover:gap-3">
                  Explore <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="reveal mt-10 rounded-[24px] border border-[#C5A028]/25 bg-white/[0.05] p-7 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C5A028]">Explore other fine dining formats</p>
            <p className="mt-3 text-base text-white/[80%]">
              Beyond the 24 signature set menus, we also offer tasting menus, romantic dinners for two, and Adriano&apos;s exclusive Chef&apos;s Table.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/fine-dining/tasting-menu"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-white/[85%] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              >
                Tasting Menu <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/fine-dining/romantic-dinner"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-white/[85%] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              >
                Romantic Dinner <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/fine-dining/chefs-table"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-white/[85%] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              >
                Chef&apos;s Table <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-12 text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Learn More
            </p>
            <h2 className="text-3xl text-white md:text-5xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore fine dining in Bali
            </h2>
          </div>
          <div className="reveal grid gap-6 md:grid-cols-3">
            <Link
              to="/blog/fine-dining-trends-bali-2026-innovations"
              className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08] transition-colors"
            >
              <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-[#C5A028] transition-colors">
                Fine Dining Trends in Bali 2026
              </h3>
              <p className="text-sm text-white/[70%] mb-4">
                Discover what&apos;s shaping luxury villa dining this year, from ingredient sourcing to plating innovation.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">
                Read more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              to="/blog/private-chef-cost-bali"
              className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08] transition-colors"
            >
              <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-[#C5A028] transition-colors">
                Private Chef Pricing in Bali
              </h3>
              <p className="text-sm text-white/[70%] mb-4">
                Understand what goes into our menus—from market sourcing to kitchen team and plating precision.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">
                Read more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              to="/blog/chef-qualifications-credentials-bali-hiring"
              className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08] transition-colors"
            >
              <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-[#C5A028] transition-colors">
                Chef Training & Qualifications
              </h3>
              <p className="text-sm text-white/[70%] mb-4">
                Learn about the credentials and experience behind our team of Michelin-trained chefs.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">
                Read more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Included In Every Dinner
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              What is included
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {INCLUDED_ITEMS.map((item) => (
              <div key={item.title} className="reveal rounded-[24px] border border-[#E7E2D9] bg-white p-7 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A028]/10 text-[#C5A028]">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4745]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="reveal mx-auto grid max-w-5xl gap-10 rounded-[30px] border border-[#E7E2D9] bg-[#FAFAF8] p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Clear Pricing
            </p>
            <h2 className="mb-5 text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              How pricing works
            </h2>
            <p className="mb-4 text-base leading-relaxed text-[#4A4745]">
              Prices are per person and subject to a 10% service charge and 11% government tax. Choose between Kitchen-Service (we use your villa's kitchen and tableware) or Full-Service (we bring everything, including premium plates, glassware, and dedicated service staff).
            </p>
            <p className="text-base leading-relaxed text-[#4A4745]">
              Minimum booking is 6 guests. We quote clearly before confirmation, and there are no hidden fees for standard setup, shopping, or cleanup.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#1A1916] p-8 text-white">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#C5A028]">At a glance</p>
            <div className="space-y-4">
              {[
                '10% service charge + 11% tax added to listed menu price',
                '6 guests minimum for fine dining menus',
                'Kitchen-Service uses your villa tableware',
                'Full-Service includes premium plates, glassware & linen',
                'No hidden fees on standard menu execution',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C5A028]" />
                  <span className="text-sm leading-relaxed text-white/[75%]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Villa Guest Reviews
            </p>
            <h2 className="text-3xl text-white md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              What guests say about the food
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <article key={testimonial.name} className="reveal rounded-[26px] border border-white/10 bg-white/[0.04] p-8">
                <div className="mb-5 flex gap-1 text-[#C5A028]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${testimonial.name}-${starIndex}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-base leading-relaxed text-white/[78%]">“{testimonial.quote}”</p>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-white/[50%]">{testimonial.stay}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="reveal mb-10 text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Before you book
            </h2>
          </div>
          <div className="reveal">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-24">
        <div className="reveal mx-auto max-w-4xl rounded-[32px] border border-[#C5A028]/20 bg-[radial-gradient(circle_at_top,_rgba(197,160,40,0.18),_transparent_55%)] px-8 py-14 text-center md:px-14">
          <p
            className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Reserve Tonight
          </p>
          <h2 className="mb-5 text-3xl text-white md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Reserve your table tonight
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/[70%] md:text-lg">
            Tell us your villa, guest count, and preferred menu. We will reply on WhatsApp with availability, next steps, and the clearest option for your evening.
          </p>
          <a
            href={buildWhatsAppLink('fine dining')}
            target="_blank"
            rel="noopener noreferrer"
            data-source="menus-final-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1A1A1A] transition-colors hover:bg-[#d0ab33] focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <MessageCircle className="h-4 w-4" />
            Message myCHEF on WhatsApp
          </a>
        </div>
      </section>
      <ArticleContentSection />

      <StickyMobileCTA
        pageSource="fine-dining-menus"
        serviceName="fine dining menu in Bali"
        intent="menu and pricing"
      />
    </div>
  )
}