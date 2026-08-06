import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Calendar,
  Star,
  ShieldCheck,
  Award,
  FlaskConical,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import CocktailPackageGrid from '@/components/cocktail/CocktailPackageGrid'
import CocktailMenuBoard from '@/components/cocktail/CocktailMenuBoard'
import {
  COCKTAIL_IMAGE_PATHS,
  COCKTAIL_PRICE_FLOOR_DISPLAY,
  cocktailPackageWaUrl,
  cocktailServiceAggregateOfferSchema,
} from '@/data/cocktailServicePackages'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({
  serviceName: 'private mixology and custom cocktails in Bali',
  intent: 'a custom quotation for a mixology experience',
})
const PACKAGE_WA = cocktailPackageWaUrl('recommend')
const CANONICAL = 'https://mychef.id/in-villa-service/mixology'

const SIGNATURE_COCKTAILS = [
  { name: 'Balinese Arak Sour', notes: 'Local arak, fresh lime, palm sugar, silky foam' },
  { name: 'Lemongrass & Kaffir Gimlet', notes: 'Gin, house lemongrass cordial, kaffir leaf' },
  { name: 'Spiced Tamarind Margarita', notes: 'Tequila, tamarind, chili-salt rim, Bali sea salt' },
  { name: 'Butterfly-Pea Spritz', notes: 'Colour-changing, floral, refreshing, low-alcohol option' },
  { name: 'Young Coconut Colada', notes: 'Fresh young coconut, rum or zero-proof, pineapple' },
  { name: 'Sandalwood Old Fashioned', notes: 'Aged rum or bourbon, palm sugar, aromatic spice' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Briefing', desc: 'Tastes, occasion, guest profile and any zero-proof needs.', icon: Calendar },
  { step: '02', title: 'Menu design', desc: 'Signature cocktails and story arcs for your night.', icon: FlaskConical },
  { step: '03', title: 'Sourcing plan', desc: 'Spirits path, fresh produce and specialty ingredients.', icon: ShieldCheck },
  { step: '04', title: 'Experience', desc: 'Interactive tasting, technique and theatre at the villa.', icon: Award },
  { step: '05', title: 'Handover', desc: 'Recipe notes when included so guests can recreate favourites.', icon: Star },
]

const FAQS = [
  {
    q: 'What is private mixology in Bali?',
    a: 'A designed cocktail experience — custom menus, technique, storytelling and often guest interaction — at your villa. It is different from high-volume bar service alone. For full free-flow packages see <a href="/in-villa-service/bartenders">luxury cocktail &amp; bartender service packages</a>.',
  },
  {
    q: 'How much does a mixology masterclass cost?',
    a: 'Interactive masterclasses and educational sessions are <strong>custom quotation</strong> until separately approved. Share guest count, duration and goals on WhatsApp for a written proposal.',
  },
  {
    q: 'How is this different from the cocktail packages?',
    a: 'Mixology focuses on craft, custom design and experience. The commercial free-flow and BYO packages on our <a href="/in-villa-service/bartenders">cocktail &amp; bartender service</a> page are complete event bar products priced per guest from ' +
      COCKTAIL_PRICE_FLOOR_DISPLAY +
      '.',
  },
  {
    q: 'Do you use Balinese ingredients?',
    a: 'Yes — tropical fruit, herbs, spices, and carefully sourced local spirits where appropriate (including licensed arak producers when the menu calls for it).',
  },
  {
    q: 'Can you design zero-proof menus?',
    a: 'Yes. Layered mocktails for non-drinkers, drivers, families and wellness groups — same presentation standard as alcoholic serves.',
  },
  {
    q: 'Can guests make their own cocktails?',
    a: 'Interactive sessions can include hands-on builds for small groups. Scope and guest count are agreed in the proposal.',
  },
  {
    q: 'Is alcohol included in mixology experiences?',
    a: 'Usually not for craft sessions — spirits may be BYO, shopping-list or sourced at cost. Full free-flow packages that include spirits are listed under cocktail service packages.',
  },
  {
    q: 'Can mixology run before a private cocktail party?',
    a: 'Yes — craft hour into a full party is popular. See <a href="/experiences/private-cocktail-party">private cocktail party at your villa</a>.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Major villa regions island-wide. Remote travel may be quoted separately. <a href="/locations">Locations</a>.',
  },
  {
    q: 'How do I book?',
    a: 'WhatsApp date, villa area, guest count and whether you want craft-only, interactive, or full free-flow cocktail service.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private Mixology Experiences and Custom Cocktails in Bali',
  serviceType: 'Private mixology and custom cocktail design',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF',
    url: 'https://mychef.id',
    telephone: '+62 896-7407-2020',
    email: 'bali@mychef.id',
  },
  areaServed: ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Bali'],
  description:
    'Private mixology experiences in Bali: custom cocktail menus, Bali-inspired signatures, zero-proof programs and interactive sessions at your villa. Full cocktail service packages available separately.',
  url: CANONICAL,
}

export default function ServiceMixologyPage() {
  const ref = useRef<HTMLDivElement>(null)
  const pageMeta = getPageMeta('in-villa-service-mixology')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mixology-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.mixology-reveal', start: 'top 85%' },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pageMeta.title}
        description={pageMeta.description}
        canonical={pageMeta.canonical}
        ogImage={pageMeta.ogImage}
        jsonLd={[
          serviceJsonLd,
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Mixology', CANONICAL, 'In-Villa Service', 'https://mychef.id/in-villa-service'),
          cocktailServiceAggregateOfferSchema({
            name: 'Luxury Cocktail & Bartender Service packages (linked from mixology)',
            description: `Complete cocktail service packages from ${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest for villa events in Bali.`,
            url: 'https://mychef.id/in-villa-service/bartenders',
          }),
        ]}
      />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-service-bali-hero-mixology.webp"
            alt="Private mixology in Bali — signature cocktail at a villa bar"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
          <Breadcrumb
            items={[
              { label: 'In-Villa Service', href: '/in-villa-service' },
              { label: 'Mixology' },
            ]}
            theme="dark"
            className="px-0 pt-0 pb-8"
          />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">
            Craft &amp; Experience
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[900px]">
            Private Mixology Experiences and Custom Cocktails in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[640px] mb-8">
            Signature drinks, Bali ingredients, interactive sessions and zero-proof craft — designed around
            your guests. When you need full free-flow service for the party, step into our{' '}
            <a href="/in-villa-service/bartenders" className="text-[#C5A028] underline underline-offset-4">
              luxury cocktail &amp; bartender service packages
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="service-mixology-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Request Mixology Quote
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              View Cocktail Packages
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6 mixology-reveal">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="What mixology means here"
            title="Craft first — then full service when you need it"
            subtitle="This page is for custom cocktail design, interactive experiences and Bali-inspired menus. We do not sell hourly bartender-only hire."
          />
          <div className="prose prose-stone max-w-none mt-10 text-[#4A4745] space-y-4">
            <p>
              Private mixology is the difference between “someone pouring drinks” and a menu with a point of
              view — technique, garnish discipline, local produce and a story guests remember. It is ideal
              for intimate groups, product launches, proposal evenings and hosts who want theatre at the bar.
            </p>
            <p>
              Interactive sessions (where guests build drinks with guidance) are available on{' '}
              <strong>custom quotation</strong>. Tell us group size, duration and skill level — we scope a
              safe, enjoyable format rather than publishing fixed session prices that do not match every
              villa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Signatures"
            title="Bali-inspired signature direction"
            subtitle="Examples of the flavour territory we design in — final menus are tailored to your package and guests."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {SIGNATURE_COCKTAILS.map((c) => (
              <div key={c.name} className="rounded-2xl border border-[#E8E6E3] p-6 bg-[#FAFAF8]">
                <h3 className="font-semibold text-lg mb-2">{c.name}</h3>
                <p className="text-sm text-[#4A4745]">{c.notes}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <CocktailMenuBoard
              title="Starting cocktail board"
              subtitle="Choose four for operational speed — or brief us for fully custom signatures."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Process" title="How a mixology brief works" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <p className="font-cormorant text-[#C5A028] text-sm mb-2">{step.step}</p>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white" id="packages">
        <div className="max-w-[1280px] mx-auto">
          <CocktailPackageGrid
            title="Need full cocktail service for your event?"
            subtitle="When the night needs free-flow or complete BYO bar operations, use the same three packages as our commercial cocktail page — priced per guest, team and setup included."
            compact
          />
          <div className="mt-6 text-center">
            <Link
              to="/in-villa-service/bartenders"
              className="text-[#C5A028] hover:underline font-medium"
            >
              Full luxury cocktail &amp; bartender service details →
            </Link>
          </div>
          <TaxFooter className="mt-8" />
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <OptimizedImage
            src={COCKTAIL_IMAGE_PATHS.crossSell}
            alt={COCKTAIL_IMAGE_PATHS.crossSellAlt}
            width={1280}
            height={720}
            className="rounded-2xl w-full object-cover"
          />
          <div>
            <h2 className="font-playfair text-3xl mb-4">From craft hour to full party</h2>
            <p className="text-[#4A4745] leading-relaxed mb-4">
              Pair mixology with canapés, waiters and entertainment for a complete night. Occasion planning
              lives on our{' '}
              <Link
                to="/experiences/private-cocktail-party"
                className="text-[#C5A028] hover:underline font-medium"
              >
                private cocktail party Bali
              </Link>{' '}
              page — bar packages stay consistent sitewide.
            </p>
            <a
              href={PACKAGE_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-6 py-3 rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Quote full cocktail service
            </a>
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          {
            name: 'Sophie',
            location: 'Singapore',
            quote:
              'The signature cocktails felt completely custom — lemongrass gimlet is still the one we talk about.',
            rating: 5,
          },
          {
            name: 'Retreat Host',
            location: 'Ubud',
            quote:
              'Zero-proof menu was as considered as the alcoholic list. Guests felt included, not parked with juice.',
            rating: 5,
          },
        ]}
        title="Guest notes"
        subtitle="Custom cocktail design at Bali villas."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Private mixology FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={3} showToc ctaEvery={5} />
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[#1A1A1A] text-white" id="book">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">
            Book private mixology in Bali
          </h2>
          <p className="text-white/70 mb-8">
            Share date, villa, guest count and whether you want craft design, interactive session or full
            free-flow packages.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-source="service-mixology-final-cta"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp mixology team
          </a>
        </div>
      </section>

      <StickyMobileCTA
        label="Quote mixology"
        serviceName="private mixology in Bali"
        intent="a custom quotation"
        pageSource="service-mixology"
        serviceType="mixology"
      />
    </div>
  )
}
