import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ChevronRight, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, faqPageSchema, serviceWithOfferSchema, howToSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const SITE_URL = 'https://mychef.id'
const WHATSAPP_NUMBER = 628113803488

interface MenuCard {
  name: string
  subtitle: string
  price: string
  description: string
  image: string
  imageAlt: string
  courses?: string[]
  winePairing?: string
  dataSource: string
}

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

const MENU_CARDS: MenuCard[] = [
  {
    name: 'Italian Experience',
    subtitle: 'Classic Italian Fine Dining',
    price: 'Kitchen-Service IDR 1,750,000++ · Full-Service IDR 2,200,000++',
    description: 'Handmade pasta, fresh seafood, slow-cooked meats. Our pasta specialist hand-rolls every sheet in your kitchen the afternoon of your dinner.',
    image: '/generated/mychef-experience-bali-luna-gallery-1.webp',
    imageAlt: 'Italian Experience — handmade tagliatelle and fine dining in a Bali villa',
    courses: ['Pecorino crisp', 'Burrata', 'Handmade tagliatelle', 'Osso buco', 'Tiramisu'],
    winePairing: '+IDR 850,000 per person',
    dataSource: 'menus-italian-cta',
  },
  {
    name: 'French Experience',
    subtitle: 'Refined French Technique',
    price: 'Kitchen-Service IDR 1,900,000++ · Full-Service IDR 2,400,000++',
    description: 'Classic French cooking adapted to Bali\'s finest ingredients. Rich sauces, precise technique, and the patience that defines the French kitchen.',
    image: '/generated/mychef-experience-bali-luna-wine.webp',
    imageAlt: 'French Experience — refined French dining in a Bali villa',
    courses: ['Gougères', 'Coquilles Saint-Jacques', 'Barramundi en papillote', 'Duck confit', 'Crème brûlée'],
    winePairing: '+IDR 850,000 per person',
    dataSource: 'menus-french-cta',
  },
  {
    name: 'Mediterranean Sea Experience',
    subtitle: 'Coastal Mediterranean Flavours',
    price: 'Kitchen-Service IDR 1,750,000++ · Full-Service IDR 2,200,000++',
    description: 'Italian seafood in five movements. Fresh catches, olive oil, citrus, and herbs. Pasta rolled in your villa. The original myCHEF fine dining experience.',
    image: '/generated/mychef-experience-bali-luna-gallery-1.webp',
    imageAlt: 'Mediterranean Sea Experience — fresh seafood in a Bali villa',
    courses: ['Passione di Dentice', 'Burrata', 'Lobster tagliatelle', 'Barramundi', 'Tiramisu'],
    winePairing: '+IDR 850,000 per person',
    dataSource: 'menus-mediterranean-cta',
  },
  {
    name: 'Wagyu Experience',
    subtitle: 'Premium Wagyu Tokusen',
    price: 'Kitchen-Service IDR 1,950,000++ · Full-Service IDR 2,400,000++',
    description: 'Wagyu Tokusen in three forms — raw, enveloped, and grilled. From delicate tartare to flame-grilled ribeye at your table.',
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    imageAlt: 'Wagyu Experience — premium beef dining in a Bali villa',
    courses: ['Beef tartare', 'Oxtail ravioli', 'Grilled ribeye', 'Tenerina cake'],
    winePairing: '+IDR 850,000 per person',
    dataSource: 'menus-wagyu-cta',
  },
  {
    name: 'Custom Menu',
    subtitle: 'Your Vision, Our Execution',
    price: 'Kitchen-Service From IDR 1,600,000++ · Full-Service From IDR 2,000,000++',
    description: 'Tell us what you want. A specific cuisine, dietary requirements, a surprise for your guests, a theme that means something. Our chef designs a bespoke menu just for your evening.',
    image: '/generated/mychef-experience-bali-luna-gallery-3.webp',
    imageAlt: 'Custom Menu — bespoke dining experience in a Bali villa',
    courses: ['Consultation', 'Menu Design', 'Ingredient Sourcing', 'Execution'],
    winePairing: 'Custom paired to your menu',
    dataSource: 'menus-custom-cta',
  },
]

const PHILOSOPHY_STATS: Stat[] = [
  { value: '5', label: 'Signature Menus' },
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
    a: 'Choose Italian or Mediterranean for pasta and seafood lovers. Choose French for refined technique and rich sauces. Choose Wagyu for beef-focused evenings. Choose Custom if you have a specific vision, dietary requirements, or a theme in mind.',
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
        title="Private Chef Menu Bali | Mediterranean & Wagyu — myCHEF"
        description="Browse myCHEF private chef menus for Bali villas. Compare Mediterranean & Wagyu tasting paths, signature dishes & wine pairing add-ons before you book."
        canonical="https://mychef.id/fine-dining/menus"
        ogImage="/generated/mychef-finedining-bali-luna-plating.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Our Menus', `${SITE_URL}/fine-dining/menus`, 'Fine Dining', `${SITE_URL}/fine-dining`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          serviceWithOfferSchema({
            name: 'Private Chef Menu Bali',
            description: 'Browse myCHEF private chef menus for Bali villas. Mediterranean and Wagyu tasting paths, signature dishes, and wine pairing add-ons with full villa service.',
            url: 'https://mychef.id/fine-dining/menus',
            price: '350000',
            unitText: 'per person',
          }),
          howToSchema({
            name: 'How to Choose & Book a Fine Dining Menu in Bali',
            description: 'Browse myCHEF menus and book a private fine dining experience in your Bali villa.',
            steps: [
              { name: 'Browse the Menus', text: 'Compare Italian, French, Mediterranean Sea, Wagyu, and Custom menus. Each includes full chef service and grocery sourcing.' },
              { name: 'Enquire on WhatsApp', text: 'Message us with your villa, guest count, and preferred menu. We confirm availability and pricing within the hour.' },
              { name: 'We Confirm & Book', text: 'We lock your menu, chef, and arrival time. A 50% deposit may be required for premium dates. Kitchen-Service or Full-Service — your choice.' },
            ],
          }),
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

        <div className="absolute inset-x-0 top-0 z-20">
          <Breadcrumb
            items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Our Menus' }]}
            theme="dark"
            className="mx-auto max-w-7xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 text-center">
          <p
            className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C5A028]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Italian · French · Mediterranean · Wagyu · Custom
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
            Italian, French, Mediterranean & Wagyu tasting menus. Refined. Seasonal. Cooked in your villa.
          </p>
          <a
            href={buildWhatsAppLink('private dining')}
            target="_blank"
            rel="noopener noreferrer"
            data-source="menus-hero-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] hover:bg-[#d0ab33] focus:outline-none focus:ring-2 focus:ring-white rounded"
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
              The menus move with the season and the market. No frozen centrepieces, no tired luxury shortcuts, no fixed script when a better ingredient is available that day.
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
          <div className="reveal mb-14 text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Two Signature Menus
            </p>
            <h2 className="text-3xl text-white md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Choose between our five signature menus
            </h2>
          </div>

          <div className="space-y-8">
            {MENU_CARDS.map((menu, index) => (
              <article
                key={menu.name}
                className={`reveal overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={menu.image}
                    alt={menu.imageAlt}
                    width={960}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-[320px] w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8 md:p-10 lg:p-12">
                  <p
                    className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C5A028]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    {menu.subtitle}
                  </p>
                  <h3 className="mb-3 text-3xl text-white md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {menu.name}
                  </h3>
                  <p className="mb-5 text-sm uppercase tracking-[0.18em] text-white/[55%]">{menu.price}</p>
                  <p className="mb-6 max-w-2xl text-base leading-relaxed text-white/[75%]">{menu.description}</p>

                  {menu.courses && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {menu.courses.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/[75%]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}

                  {menu.winePairing && (
                    <p className="mb-8 text-sm text-white/[60%]">
                      Wine pairing available: <span className="text-[#C5A028]">{menu.winePairing}</span>
                    </p>
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href={buildWhatsAppLink(menu.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-source={menu.dataSource}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#d0ab33] focus:outline-none focus:ring-2 focus:ring-white rounded"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="reveal mt-10 rounded-[24px] border border-[#C5A028]/25 bg-white/[0.05] p-7 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C5A028]">Looking for the most exclusive format?</p>
            <p className="mt-3 text-base text-white/[80%]">
              Chef&apos;s Table is a separate Adriano-led counter experience, distinct from the five signature menus above.
            </p>
            <Link
              to="/fine-dining/chefs-table"
              className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-white/[85%] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
            >
              Explore Chef&apos;s Table
              <ChevronRight className="h-4 w-4" />
            </Link>
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
              to="/blog/private-chef-bali-cost-breakdown-detailed-2026"
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
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#d0ab33] focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <MessageCircle className="h-4 w-4" />
            Message myCHEF on WhatsApp
          </a>
        </div>
      </section>
      <StickyMobileCTA
        pageSource="fine-dining-menus"
        serviceName="fine dining menu in Bali"
        intent="menu and pricing"
      />
    </div>
  )
}