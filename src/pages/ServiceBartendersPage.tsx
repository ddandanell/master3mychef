import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Check,
  Calendar,
  ShieldCheck,
  Award,
  Star,
  Wine,
  Users,
  GlassWater,
  Sparkles,
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
  COCKTAIL_MIN_GUESTS,
  COCKTAIL_PACKAGES,
  COCKTAIL_PRICE_FLOOR_DISPLAY,
  cocktailPackageWaMessage,
  cocktailPackageWaUrl,
  cocktailServiceAggregateOfferSchema,
} from '@/data/cocktailServicePackages'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = cocktailPackageWaUrl('recommend')
const CANONICAL = 'https://mychef.id/in-villa-service/bartenders'

const FAQS = [
  {
    q: 'How much does luxury cocktail & bartender service cost in Bali?',
    a: `Complete packages from <strong>${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest</strong> (BYO Cocktail Service, 6 hours, minimum ${COCKTAIL_MIN_GUESTS} guests). Cocktail Free Flow is IDR 1,300,000++ per guest (4 hours, spirits included). Premium Cocktail Free Flow is IDR 1,700,000++ per guest (6 hours, premium spirits). Prices are ++ (10% service + 11% tax).`,
  },
  {
    q: 'Is this bartender-only hire or a full cocktail service?',
    a: 'A complete mobile cocktail service — never bartender-only or tools-only. Packages include the bartender team, four chosen cocktails, bar tools, glassware, ice, juices, mixers, garnishes, setup, service and cleanup. See also <a href="/in-villa-service/mixology">private mixology &amp; custom cocktail design in Bali</a>.',
  },
  {
    q: 'Is alcohol included?',
    a: 'BYO: you supply spirits; we provide a shopping list and all non-alcohol components. Free Flow and Premium include standard or premium spirits for the approved four-cocktail menu.',
  },
  {
    q: 'What does free flow mean?',
    a: 'Unlimited preparation from the agreed four-cocktail menu during the booked window, subject to stock planning, responsible service, guest safety and venue rules. We do not serve minors or intoxicated guests.',
  },
  {
    q: 'How many guests is the minimum?',
    a: `Minimum ${COCKTAIL_MIN_GUESTS} guests on all three packages. Larger groups scale the bartender team — confirmed on your quote.`,
  },
  {
    q: 'Can you do zero-proof and dietary needs?',
    a: 'Yes — zero-proof options are part of the menu board. Flag allergies and non-drinkers early so prep is separate where needed.',
  },
  {
    q: 'What villa setup do you need?',
    a: 'A workable bar or service surface, power for ice/blenders when required, and load-in access. We plan the station during briefing.',
  },
  {
    q: 'Do you cover Seminyak, Canggu, Ubud and Uluwatu?',
    a: 'Yes — major villa regions island-wide. Remote locations may include a travel fee quoted upfront. <a href="/locations">Locations</a>.',
  },
  {
    q: 'Can we add food or turn this into a full party?',
    a: 'Yes — canapés, BBQ and full production are quoted separately. For an occasion-led plan see <a href="/experiences/private-cocktail-party">private cocktail party at your villa</a> or <a href="/events/villa-parties">villa party catering</a>.',
  },
  {
    q: 'How do deposits and cancellation work?',
    a: 'Typically 50% deposit to confirm; balance before the event. <a href="/cancellation">Cancellation policy</a>.',
  },
  {
    q: 'How do I get a quote?',
    a: 'WhatsApp date, villa area, guest count, preferred package (BYO / free flow / premium) and event type. We reply with a fixed written proposal.',
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Enquiry', desc: 'Share date, villa area, guest count and event type on WhatsApp.', icon: Calendar },
  { step: '02', title: 'Choose four cocktails', desc: 'Pick from our menu board; we refine for package and guest profile.', icon: Wine },
  { step: '03', title: 'Quote & deposit', desc: 'Written package price ++, inclusions and alcohol rule — 50% to confirm.', icon: ShieldCheck },
  { step: '04', title: 'Villa planning', desc: 'Bar position, load-in, ice plan and timing locked with your host or manager.', icon: Award },
  { step: '05', title: 'Setup, service, cleanup', desc: 'Team arrives early, runs the bar, breaks down and restores the space.', icon: Star },
]

const OCCASIONS = [
  { title: 'Villa parties', href: '/events/villa-parties', desc: 'Pool, garden and social nights with a proper bar centre.' },
  { title: 'Weddings', href: '/events/weddings', desc: 'Welcome drinks, reception free flow and premium long service.' },
  { title: 'Birthdays', href: '/events/birthdays', desc: 'Signature serves and free-flow packages for celebrations.' },
  { title: 'Corporate receptions', href: '/events/corporate', desc: 'Controlled free flow with professional pacing.' },
  { title: 'Sunset & pool parties', href: '/experiences/private-cocktail-party', desc: 'Occasion planning with optional food and entertainment.' },
  { title: 'Private dinners', href: '/fine-dining', desc: 'Aperitivo hour before chef-led dining.' },
]

const TRUST = [
  { icon: GlassWater, label: 'Complete bar setup' },
  { icon: Wine, label: 'Four cocktail choices' },
  { icon: Users, label: `Minimum ${COCKTAIL_MIN_GUESTS} guests` },
  { icon: Sparkles, label: 'Setup & cleanup included' },
]

export default function ServiceBartendersPage() {
  const ref = useRef<HTMLDivElement>(null)
  const pageMeta = getPageMeta('in-villa-service-bartenders')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bartender-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.bartender-reveal', start: 'top 85%' },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const serviceJsonLd = cocktailServiceAggregateOfferSchema({
    name: 'Luxury Cocktail & Bartender Service Bali',
    description: `Complete villa cocktail service in Bali from ${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest. BYO, free-flow and premium packages with bartender team, glassware, ice, mixers, setup and cleanup. Minimum ${COCKTAIL_MIN_GUESTS} guests.`,
    url: CANONICAL,
  })

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pageMeta.title}
        description={pageMeta.description}
        canonical={pageMeta.canonical}
        ogImage={pageMeta.ogImage || `https://mychef.id${COCKTAIL_IMAGE_PATHS.hero}`}
        jsonLd={[
          serviceJsonLd,
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Bartenders', CANONICAL, 'In-Villa Service', 'https://mychef.id/in-villa-service'),
        ]}
      />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={COCKTAIL_IMAGE_PATHS.hero}
            alt={COCKTAIL_IMAGE_PATHS.heroAlt}
            className="w-full h-full object-cover"
            width={1280}
            height={720}
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
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
          <Breadcrumb
            items={[
              { label: 'In-Villa Service', href: '/in-villa-service' },
              { label: 'Bartenders' },
            ]}
            theme="dark"
            className="px-0 pt-0 pb-8"
          />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">
            Luxury Cocktail Service
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[900px]">
            Luxury Cocktail &amp; Bartender Service in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[640px] mb-4">
            Turn your villa, wedding or private event into a professionally managed cocktail experience.
            Choose four cocktails, select BYO or fully supplied free flow, and our team handles setup,
            ingredients, glassware, ice, service and cleanup.
          </p>
          <p className="text-white/[70%] text-base max-w-[640px] mb-8">
            Packages from <strong className="text-[#C5A028]">{COCKTAIL_PRICE_FLOOR_DISPLAY}</strong> per
            guest · Minimum {COCKTAIL_MIN_GUESTS} guests · Not bartender-only hire
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="service-bartenders-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Check Availability on WhatsApp
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Compare Packages
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-10 px-6 bg-white border-b border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-3 p-3">
              <t.icon className="w-5 h-5 text-[#C5A028] shrink-0" />
              <span className="text-sm font-medium text-[#1A1A1A]">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bartender-reveal">
        <div className="max-w-[1280px] mx-auto">
          <CocktailPackageGrid
            title="Three complete cocktail packages"
            subtitle="The commercial product is a full mobile cocktail service. Every package includes the team, four cocktails, equipment and cleanup — priced per guest, not as hourly staff rental."
          />
          <div className="mt-8">
            <TaxFooter />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Inclusions"
            title="What every package includes"
            subtitle="Bartenders are part of the package — together with the operating bar."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {COCKTAIL_PACKAGES[1].inclusions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E3]"
              >
                <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#4A4745] mt-8 max-w-3xl mx-auto text-center">
            Exact inclusions vary by package (especially whether spirits are included). Your quote lists
            inclusions and exclusions line by line.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <OptimizedImage
              src={COCKTAIL_IMAGE_PATHS.menu}
              alt={COCKTAIL_IMAGE_PATHS.menuAlt}
              width={1280}
              height={720}
              className="rounded-2xl w-full object-cover"
            />
            <div>
              <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-3">
                Menu
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl mb-4">Craft drinks, controlled choice</h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Four cocktails keep service fast and consistent at villa volume. For custom signature
                development and interactive craft, explore{' '}
                <Link
                  to="/in-villa-service/mixology"
                  className="text-[#C5A028] hover:underline font-medium"
                >
                  private mixology &amp; custom cocktail design in Bali
                </Link>
                .
              </p>
            </div>
          </div>
          <CocktailMenuBoard />
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How it works"
            subtitle="Enquiry to last pour — one clear path."
          />
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
          <div className="mt-12 max-w-4xl mx-auto">
            <OptimizedImage
              src={COCKTAIL_IMAGE_PATHS.process}
              alt={COCKTAIL_IMAGE_PATHS.processAlt}
              width={1248}
              height={832}
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Where this service shines"
            subtitle="Same packages — different event energy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {OCCASIONS.map((o) => (
              <Link
                key={o.href + o.title}
                to={o.href}
                className="block rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028] transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 text-[#1A1A1A]">{o.title}</h3>
                <p className="text-sm text-[#4A4745]">{o.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745] mt-8">
            Hosting a full social night with canapés and entertainment? See{' '}
            <Link
              to="/experiences/private-cocktail-party"
              className="text-[#C5A028] hover:underline font-medium"
            >
              private cocktail party at your villa
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <OptimizedImage
            src={COCKTAIL_IMAGE_PATHS.team}
            alt={COCKTAIL_IMAGE_PATHS.teamAlt}
            width={1248}
            height={832}
            className="rounded-2xl w-full object-cover"
          />
          <div>
            <SectionHeader
              eyebrow="Team"
              title="Professional cocktail service, villa-ready"
              subtitle="English-capable teams, responsible service standards, and cleanup that leaves the villa ready for tomorrow."
            />
            <ul className="mt-6 space-y-3 text-[#4A4745] text-sm">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-[#C5A028] mt-0.5" /> Guest-count planning so queues never form
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-[#C5A028] mt-0.5" /> Hygiene and ice management built into the plan
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-[#C5A028] mt-0.5" /> Coordinated with chefs, waiters and planners when needed
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          {
            name: 'Tom & Lisa',
            location: 'Melbourne',
            quote:
              'The cocktail service for our wedding reception was seamless — guests still talk about the signature drinks months later.',
            rating: 5,
          },
          {
            name: 'Corporate Team',
            location: 'Nusa Dua',
            quote:
              'Free-flow package for 80 guests. Professional pacing, beautiful bar, zero drama. Exactly what we needed.',
            rating: 5,
          },
          {
            name: 'The Patel Family',
            location: 'Mumbai',
            quote:
              'BYO package with excellent mocktails for the kids and proper cocktails for the adults. Clean setup and cleanup.',
            rating: 5,
          },
        ]}
        title="What clients say"
        subtitle="Villa cocktail service across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Cocktail & bartender service FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={3} showToc ctaEvery={5} />
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[#1A1A1A] text-white" id="book">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">
            Book luxury cocktail &amp; bartender service in Bali
          </h2>
          <p className="text-white/70 mb-8">
            Send date, villa area, guest count, package preference and event type — we reply with a fixed
            quote. Packages from {COCKTAIL_PRICE_FLOOR_DISPLAY} per guest.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-source="service-bartenders-final-cta"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp for a quote
          </a>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/in-villa-service/mixology" className="text-[#C5A028] hover:underline">
              Private mixology &amp; custom cocktails
            </Link>
            <Link to="/experiences/private-cocktail-party" className="text-[#C5A028] hover:underline">
              Private cocktail party Bali
            </Link>
            <Link to="/in-villa-service" className="text-[#C5A028] hover:underline">
              All in-villa service
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileCTA
        label="Quote cocktail service"
        message={cocktailPackageWaMessage('recommend')}
        pageSource="service-bartenders"
        serviceType="cocktail-service"
      />
    </div>
  )
}
