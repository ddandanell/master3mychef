import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ChevronRight, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'

gsap.registerPlugin(ScrollTrigger)

const SITE_URL = 'https://mychef.id'
const WHATSAPP_NUMBER = '6282237565997'

interface MenuCard {
  name: string
  subtitle: string
  price: string
  description: string
  image: string
  imageAlt: string
  courses?: string[]
  winePairing?: string
  highlights?: string[]
  dataSource: string
  detailHref?: string
  detailLabel?: string
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
    name: 'La Riviera',
    subtitle: '5-Course Mediterranean',
    price: 'From IDR 2,200,000++ per person',
    description: 'An elegant Riviera-style progression rooted in Italian coastal cooking. Expect handmade pasta, grilled fish, bright salads, and seasonal produce chosen for the table that day. Ideal for intimate dinners of 2 to 12 guests.',
    image: '/generated/luna-wine.webp',
    imageAlt: 'Private villa fine dining table with wine service for the La Riviera menu',
    courses: ['Amuse-bouche', 'Cold Opener', 'Handmade Pasta', 'Grilled Protein', 'Dessert'],
    winePairing: '+IDR 650,000 per person',
    dataSource: 'menus-riviera-cta',
  },
  {
    name: "L'Odyssée",
    subtitle: "7-Course Chef's Selection",
    price: 'From IDR 2,400,000++ per person',
    description: 'A longer market-led menu with seven refined moments and optional wine pairing. Adriano selects the ingredients in the morning, then builds the dinner around what is exceptional that day. This is the fullest expression of the kitchen.',
    image: '/generated/luna-ingredients.webp',
    imageAlt: 'Fresh luxury ingredients prepared for L Odyssee private chef menu in Bali',
    courses: ['2× Cold Opens', 'Pasta', 'Amuse', 'Protein', 'Pre-Dessert', 'Dessert'],
    winePairing: '+IDR 1,100,000 per person',
    dataSource: 'menus-odyssee-cta',
  },
  {
    name: "Chef's Table",
    subtitle: '7-Course Counter Experience',
    price: 'IDR 3,500,000++ per person',
    description: 'A counter-side experience for up to six guests, led by Adriano personally. Entirely market-led, intensely personal, and never repeated exactly the same way twice. Designed for guests who want the full conversation behind the cooking.',
    image: '/generated/luna-flame.webp',
    imageAlt: 'Adriano cooking over flame for the Chef s Table private dinner experience',
    highlights: ['Counter-side service', '6 guests maximum', 'Adriano only', 'No two evenings identical'],
    dataSource: 'menus-chefs-table-cta',
    detailHref: '/fine-dining/chefs-table',
    detailLabel: "Explore Chef's Table",
  },
  {
    name: 'Custom Menu',
    subtitle: 'Bespoke Design',
    price: 'From IDR 1,800,000++ per person',
    description: 'You tell us the occasion and we design around it. Indonesian, Mediterranean, fusion, dietary restrictions, celebratory pacing, family-style or plated service — all handled with the same luxury standard.',
    image: '/generated/luna-detail.webp',
    imageAlt: 'Luxury plated detail from a bespoke myCHEF private dining menu in Bali',
    highlights: ['Designed for your occasion', 'Indonesian to Mediterranean', 'Dietary restrictions handled', 'Villa-friendly execution'],
    dataSource: 'menus-custom-cta',
  },
]

const PHILOSOPHY_STATS: Stat[] = [
  { value: '4', label: 'Menu Styles' },
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
    a: 'Choose La Riviera if you want a classic five-course Mediterranean dinner. Choose L\'Odyssée for the most complete chef-led tasting. Choose Chef\'s Table if you want Adriano counter-side for a maximum of six guests. Choose Custom Menu when the occasion or dietary needs require a menu built around you.',
  },
  {
    q: 'Can you accommodate dietary restrictions?',
    a: 'Yes. We regularly adapt menus for vegetarian, vegan, halal, gluten-free, shellfish allergy, nut allergy, pregnancy-safe, and child-friendly requirements. Tell us before confirmation and we will design accordingly.',
  },
  {
    q: 'What is the minimum booking?',
    a: 'The minimum booking is 2 guests for the menus on this page. Larger groups are welcome and we scale the kitchen and service team to match your villa and dinner format.',
  },
  {
    q: 'Is wine pairing included?',
    a: 'Wine pairing is optional. La Riviera can be paired from +IDR 650,000 per person and L\'Odyssée from +IDR 1,100,000 per person. We can also recommend bottles if you prefer to supply your own wine.',
  },
  {
    q: 'How fresh are the ingredients?',
    a: 'Adriano and the team buy around the market that same morning whenever the menu calls for it. We do not build luxury dinners around frozen shortcuts. The menu follows what is beautiful and available that day.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Three to seven days is ideal, especially for premium seafood, wine pairing, or Chef\'s Table requests. During peak season we recommend booking earlier, but we can often accommodate short-notice villa dinners if the date is open.',
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
        title="Private Chef Menus Bali | Riviera & Odyssey — myCHEF"
        description="Browse the myCHEF private chef menus for Bali villas — Mediterranean tasting menus, seafood, plant-forward, and bespoke."
        canonical="https://mychef.id/fine-dining/menus"
        ogImage="/generated/luna-plating.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Our Menus', `${SITE_URL}/fine-dining/menus`, 'Fine Dining', `${SITE_URL}/fine-dining`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#1A1916]">
        <div className="absolute inset-0">
          <img
            src="/generated/luna-plating.webp"
            alt="Luxury private chef plating in a Bali villa for myCHEF fine dining menus"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />
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
            Riviera · Odyssey · Bespoke Villa Dining
          </p>
          <h1
            className="mb-6 text-5xl text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.02 }}
          >
            Our Menus
          </h1>
          <p
            className="mx-auto mb-10 max-w-3xl text-2xl italic text-white/80 md:text-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Mediterranean tasting menus. Refined. Seasonal. Cooked in your villa.
          </p>
          <a
            href={buildWhatsAppLink('private dining')}
            target="_blank"
            rel="noopener noreferrer"
            data-source="menus-hero-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] hover:bg-[#d0ab33]"
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
              Four Ways To Dine
            </p>
            <h2 className="text-3xl text-white md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Choose the evening that fits your villa
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
                  <p className="mb-5 text-sm uppercase tracking-[0.18em] text-white/55">{menu.price}</p>
                  <p className="mb-6 max-w-2xl text-base leading-relaxed text-white/75">{menu.description}</p>

                  {menu.courses && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {menu.courses.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}

                  {menu.highlights && (
                    <div className="mb-6 grid gap-3 sm:grid-cols-2">
                      {menu.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-sm text-white/75">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C5A028]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {menu.winePairing && (
                    <p className="mb-8 text-sm text-white/60">
                      Wine pairing available: <span className="text-[#C5A028]">{menu.winePairing}</span>
                    </p>
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href={buildWhatsAppLink(menu.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-source={menu.dataSource}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#d0ab33]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enquire on WhatsApp
                    </a>
                    {menu.detailHref && menu.detailLabel && (
                      <Link
                        to={menu.detailHref}
                        className="inline-flex items-center justify-center gap-2 text-sm uppercase tracking-[0.16em] text-white/75 transition-colors hover:text-white"
                      >
                        {menu.detailLabel}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
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
              When you see IDR 2,200,000++, the ++ means a 10% service charge and 11% government tax are added on top. That makes the all-in total approximately IDR 2,618,000 per person.
            </p>
            <p className="text-base leading-relaxed text-[#4A4745]">
              Minimum booking is 2 guests. We quote clearly before confirmation, and there are no hidden fees for standard setup, shopping, or cleanup.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#1A1916] p-8 text-white">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#C5A028]">At a glance</p>
            <div className="space-y-4">
              {[
                '10% service charge + 11% tax added to listed menu price',
                '2 guests minimum booking',
                'No hidden fees on standard menu execution',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C5A028]" />
                  <span className="text-sm leading-relaxed text-white/75">{item}</span>
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
                <p className="mb-6 text-base leading-relaxed text-white/78">“{testimonial.quote}”</p>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-white/50">{testimonial.stay}</p>
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
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Tell us your villa, guest count, and preferred menu. We will reply on WhatsApp with availability, next steps, and the clearest option for your evening.
          </p>
          <a
            href={buildWhatsAppLink('fine dining')}
            target="_blank"
            rel="noopener noreferrer"
            data-source="menus-final-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#d0ab33]"
          >
            <MessageCircle className="h-4 w-4" />
            Message myCHEF on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
