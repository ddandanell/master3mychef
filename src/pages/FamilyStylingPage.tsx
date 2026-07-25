import { Link } from 'react-router-dom'
import { Check, MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, localBusinessSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { ArticleContentSection } from '@/components/shared'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/family-styling`

const WA_HERO = buildWhatsAppUrl({
  serviceName: 'a private chef experience in Bali',
  intent: 'help choosing the right menu family and a quote',
})
const WA_FINAL = buildWhatsAppUrl({
  serviceName: 'planning a private dining experience in Bali',
  intent: 'menu recommendations and a quote',
})

interface FamilyStyle {
  id: string
  eyebrow: string
  title: string
  blurb: string
  bullets: string[]
  bestFor: string
  image: { src: string; alt: string; width: number; height: number }
  link: { to: string; label: string }
  price: string
}

const STYLES: FamilyStyle[] = [
  {
    id: 'classic',
    eyebrow: 'Menu Family 01',
    title: 'Classic Set Menus',
    blurb:
      'Our most formal service. The table is fully dressed before you sit down, and each course arrives in sequence — a restaurant-standard evening without leaving your villa.',
    bullets: [
      'Full table setting with premium plates, glassware & cutlery',
      'Linen napkins & floral centrepieces',
      'Course-by-course service, properly paced',
      'Wine pairing available',
      'A 2.5–3 hour dining journey',
    ],
    bestFor: 'anniversaries, milestone dinners, evenings where the meal is the event',
    image: {
      src: '/generated/mychef-catering-bali-plated-5course-premium-table.webp',
      alt: 'Premium candlelit table set with fine plates, crystal glassware and an orchid centrepiece for a Classic set menu dinner in Bali',
      width: 1440,
      height: 810,
    },
    link: { to: '/fine-dining/menus', label: 'Browse Classic Set Menus' },
    price: 'from IDR 1.25M per guest',
  },
  {
    id: 'three-course',
    eyebrow: 'Menu Family 02',
    title: 'Three-Course',
    blurb:
      'The relaxed middle ground. A proper starter, main and dessert with a lighter setup and a quicker rhythm — ideal when the evening should feel easy rather than formal.',
    bullets: [
      'Simplified table setting',
      'Relaxed, faster service — 1.5–2 hours',
      'Family-style sharing where possible',
      'Perfect for casual lunches and weeknight-style villa dinners',
    ],
    bestFor: 'family holiday dinners, low-key celebrations, groups of 6+',
    image: {
      src: '/generated/mychef-catering-bali-plated-3course-table.webp',
      alt: 'Simply styled round table with linen cloth, wine glasses and white plates set beside a Bali villa pool for a three-course lunch',
      width: 1440,
      height: 810,
    },
    link: { to: '/three-course', label: 'Browse Three-Course menus' },
    price: 'from IDR 850K per guest',
  },
  {
    id: 'bbq-grill',
    eyebrow: 'Menu Family 03',
    title: 'BBQ Grill',
    blurb:
      'Dinner with a live show. We build a full grill station at your villa and the chef cooks over open flame while your guests gather round — smoke, aroma and theatre included.',
    bullets: [
      'Live grill station set up at the villa',
      'Chef in action at the grill — guests can watch the cooking',
      'Casual, social, outdoor atmosphere',
      'Smoke, flame & theatre as part of the evening',
    ],
    bestFor: 'pool parties, birthdays, surf-trip feasts, casual groups who want energy',
    image: {
      src: '/generated/mychef-catering-bali-bbq-grill-satay.webp',
      alt: 'Chef grilling satay skewers over glowing charcoal at a live BBQ station in a Bali villa garden at dusk',
      width: 1440,
      height: 800,
    },
    link: { to: '/bbq-grill', label: 'Browse BBQ Grill menus' },
    price: 'from IDR 950K per guest',
  },
  {
    id: 'kids',
    eyebrow: 'Menu Family 04',
    title: "Kids' Menus",
    blurb:
      'Built for the youngest guests at the table. Bright plates, playful presentation and hands-on moments that keep children happy while the adults enjoy their own menu.',
    bullets: [
      'Colourful, playful presentation',
      'Fun shapes & interactive elements',
      'Build-your-own stations',
      'Kid-friendly tableware, nut-free recipes',
    ],
    bestFor: "family stays, kids' birthdays, any dinner where children eat alongside adults",
    image: {
      src: '/generated/mychef-events-bali-birthday-pool.webp',
      alt: "Festive poolside table with a birthday cake, candles and colourful styling for a children's celebration at a Bali villa",
      width: 1440,
      height: 800,
    },
    link: { to: '/kids-menus', label: "Browse Kids' menus" },
    price: 'from IDR 250K per child',
  },
]

const ALWAYS_INCLUDED = [
  'Market-fresh shopping on the day',
  'A professional chef cooking in your villa kitchen',
  'Service staff at 1 waiter per 10 guests',
  'Full setup before — and complete cleanup after',
  'Dietary adaptations arranged in advance',
]

const OCCASION_MATCHES = [
  { occasion: 'Anniversary / proposal / milestone', family: 'Classic Set Menus' },
  { occasion: 'Family dinner, casual lunch', family: 'Three-Course' },
  { occasion: 'Pool party, birthday, group feast', family: 'BBQ Grill' },
  { occasion: 'Children at the table', family: "Kids' Menus (adds to any family)" },
]

export default function FamilyStylingPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="How We Style Each Dining Experience | myCHEF Bali"
        description="How each myCHEF menu family is styled and served — from fine dining to BBQ grill to kids parties."
        canonical={CANONICAL}
        ogImage="/generated/mychef-catering-bali-plated-menus.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Family Styling Guide', CANONICAL, 'Dining Styles', `${SITE}/dining-styles`),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'How We Style Each Dining Experience',
            description: "How each myCHEF menu family is styled and served — from formal classic set menus to relaxed three-course, live BBQ grill stations and playful kids' menus.",
            url: CANONICAL,
            isPartOf: { '@type': 'WebSite', name: 'myCHEF', url: SITE },
            about: {
              '@type': 'Service',
              name: 'myCHEF villa dining styling',
              provider: { '@type': 'Organization', name: 'myCHEF', url: SITE },
              areaServed: 'Bali, Indonesia',
            },
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '82vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-plated-menus.webp"
            alt="Silver cloche lifted over a plated course on a candlelit table with crystal glassware, styled by myCHEF in a Bali villa"
            width={1440}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-20 md:pb-28 max-w-[1280px] mx-auto">
          <Breadcrumb items={[{ label: 'Family Styling' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-xs md:text-sm uppercase tracking-[4px] mb-6">
            myCHEF &middot; Family Styling Guide
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-white mb-6 max-w-3xl">
            How We Style Each Experience
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] max-w-2xl mb-10 leading-relaxed">
            Every myCHEF menu family has its own look, feel and service style. The food changes from menu to menu — but the way an evening is <em>dressed, paced and served</em> is decided by which family you choose. Here&rsquo;s what each one feels like at your villa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_HERO}
              target="_blank"
              rel="noopener noreferrer"
              data-source="family-styling-hero"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get Your Quote
            </a>
            <Link
              to="/dining-styles"
              data-source="family-styling-hero-families"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Browse All Dining Styles
            </Link>
          </div>
        </div>
      </section>

      {/* The Four Menu Families — section intro */}
      <section className="pt-16 md:pt-24 px-6" style={{ background: '#050505' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">
            Look, pacing &amp; table experience
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-5">The Four Menu Families</h2>
          <p className="text-white/[70%] leading-relaxed">
            Each family below is styled and served differently at your villa — pick the look and
            feel that suits your occasion, then browse its menus.
          </p>
        </div>
      </section>

      {/* Editorial family sections — alternating image/text rows */}
      {STYLES.map((style, i) => (
        <section
          key={style.id}
          className="py-16 md:py-24 px-6"
          style={{ background: i % 2 === 1 ? '#0A0A0A' : '#050505' }}
        >
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={style.image.src}
                  alt={style.image.alt}
                  width={style.image.width}
                  height={style.image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
              </div>
            </div>
            <div className={i % 2 === 1 ? 'md:order-1' : ''}>
              <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">
                {style.eyebrow}
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl text-white mb-5">{style.title}</h3>
              <p className="text-white/[70%] leading-relaxed mb-8">{style.blurb}</p>
              <ul className="space-y-3 mb-8">
                {style.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-white/[85%]">{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/60 text-sm italic mb-10">Best for: {style.bestFor}.</p>
              <Link
                to={style.link.to}
                data-source={`family-styling-${style.id}`}
                className="inline-flex items-center gap-2 text-[#C5A028] font-semibold text-sm uppercase tracking-[2px] hover:text-[#D4B43A] transition-colors"
              >
                {style.link.label} <span aria-hidden="true">&rarr;</span>
              </Link>
              <p className="mt-3 text-sm text-white/50">{style.price}</p>
            </div>
          </div>
        </section>
      ))}

      {/* What styling always includes */}
      <section className="py-16 md:py-24 px-6 border-t border-white/10" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[900px] mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4 text-center">
            Every family, every time
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-10 text-center">
            What Styling Always Includes
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-10 max-w-2xl mx-auto">
            {ALWAYS_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-white/[85%]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/60 text-sm leading-relaxed text-center max-w-2xl mx-auto">
            All prices are quoted ++ (11% government tax + 10% service charge) and confirmed
            upfront, so the evening you plan is the evening you pay for.
          </p>
        </div>
      </section>

      {/* Match a family to your occasion */}
      <section className="py-16 md:py-24 px-6 border-t border-white/10" style={{ background: '#050505' }}>
        <div className="max-w-[760px] mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4 text-center">
            Quick match
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-10 text-center">
            Match a Family to Your Occasion
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 mb-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[2px] text-[#C5A028]">
                    Occasion
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[2px] text-[#C5A028]">
                    Family
                  </th>
                </tr>
              </thead>
              <tbody>
                {OCCASION_MATCHES.map((row) => (
                  <tr key={row.occasion} className="border-b border-white/10 last:border-0">
                    <td className="px-6 py-4 text-white/[85%]">{row.occasion}</td>
                    <td className="px-6 py-4 text-white/[85%]">{row.family}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/[70%] leading-relaxed text-center">
            Not sure which fits?{' '}
            <Link to="/dining-styles" className="text-[#C5A028] hover:text-[#D4B43A] transition-colors">
              Browse all dining styles
            </Link>{' '}
            to compare formats side by side, or{' '}
            <Link to="/recommended-services" className="text-[#C5A028] hover:text-[#D4B43A] transition-colors">
              let us recommend the right family
            </Link>{' '}
            from your occasion and guest count.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 border-t border-white/10" style={{ background: '#111111' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">
            Ready to plan your experience?
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-5">
            Tell us the occasion — we will style the rest
          </h2>
          <p className="text-white/[60%] mb-10 leading-relaxed">
            Share your date, villa and guest count on WhatsApp and we will recommend the right menu
            family, styled to suit your group. Confirmation within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_FINAL}
              target="_blank"
              rel="noopener noreferrer"
              data-source="family-styling-final-cta"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <Link
              to="/dining-styles"
              data-source="family-styling-final-families"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Browse all dining styles
            </Link>
            <Link
              to="/recommended-services"
              data-source="family-styling-final-recommended"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Not sure? Let us recommend
            </Link>
          </div>
        </div>
      </section>
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
