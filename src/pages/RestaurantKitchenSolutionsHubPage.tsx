import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  UtensilsCrossed,
  ChefHat,
  TrendingUp,
  Layers,
  Timer,
  LayoutTemplate,
  AlertTriangle,
  Package,
  Sparkles,
  Wrench,
  ShoppingBag,
  Shirt,
  Leaf,
  UserPlus,
  Rocket,
  CheckCircle2,
} from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
  professionalServiceSchema,
  serviceSchema,
} from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import {
  RksEyebrow,
  RksFinalCta,
  RksIconBadge,
  RksSectionHeader,
  RksSubNav,
  RksTrustStrip,
  RksWaButton,
} from '@/components/restaurant-kitchen-solutions/RksUi'
import {
  RKS_GUIDES,
  RKS_HUB,
  RKS_HUB_PATH,
  RKS_SERVICES,
} from '@/data/restaurant-kitchen-solutions'

const SITE = 'https://mychef.id'
const WA_MSG =
  'Hi myCHEF, I would like a consultation about restaurant and kitchen solutions in Indonesia.'

const SERVICE_ICONS = [Building2, LayoutTemplate, ChefHat]

const PROBLEM_ICONS = [
  TrendingUp,
  Layers,
  Timer,
  LayoutTemplate,
  AlertTriangle,
  Package,
  ShoppingBag,
  Rocket,
]

const CAPABILITY_ICONS = [Wrench, UtensilsCrossed, Shirt, Leaf, UserPlus, Sparkles]

export default function RestaurantKitchenSolutionsHubPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={RKS_HUB.title}
        description={RKS_HUB.description}
        canonical={`${SITE}${RKS_HUB_PATH}`}
        ogImage={`${SITE}${RKS_HUB.heroImage}`}
        jsonLd={[
          breadcrumbSchema('Restaurant and Kitchen Solutions', `${SITE}${RKS_HUB_PATH}`),
          professionalServiceSchema(
            `${SITE}${RKS_HUB_PATH}`,
            `${SITE}${RKS_HUB.heroImage}`,
            RKS_SERVICES.map((s) => ({ name: s.cardTitle, url: `${SITE}${s.path}` })),
          ),
          serviceSchema(
            'Restaurant and Commercial Kitchen Solutions',
            RKS_HUB.description,
            `${SITE}${RKS_HUB_PATH}`,
          ),
          faqPageSchema(RKS_HUB.faqs.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      <Breadcrumb items={[{ label: 'Restaurant and Kitchen Solutions', href: RKS_HUB_PATH }]} />
      <RksSubNav activePath={RKS_HUB_PATH} />

      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={RKS_HUB.heroImage}
          alt={RKS_HUB.heroAlt}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/72 to-[#0A0A0A]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
        <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-28">
          <RksEyebrow>B2B · Indonesia · Kitchen operations</RksEyebrow>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] text-white leading-[1.08] max-w-[920px] mb-6">
            {RKS_HUB.h1}
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-[700px] leading-relaxed mb-4">
            {RKS_HUB.heroLead}
          </p>
          <p className="text-white/55 text-sm max-w-[640px] mb-9 leading-relaxed">
            Not a private chef booking page. This hub is for restaurants, hotels, cafés, bars, and
            professional kitchens that need consulting, design, menu systems, or training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <RksWaButton
              label="Request a Consultation"
              message={WA_MSG}
              source="rks-hub-hero-wa"
              variant="primary"
            />
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 border border-white/30 text-white text-sm font-semibold tracking-[0.12em] uppercase rounded-full hover:bg-white/10 transition-all"
            >
              Explore services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <RksTrustStrip />

      {/* Jump links for SEO scanability */}
      <section className="px-6 py-6 bg-white border-b border-black/5">
        <div className="max-w-[1160px] mx-auto flex flex-wrap gap-2 justify-center">
          {[
            { href: '#problems', label: 'Problems we solve' },
            { href: '#services', label: 'Three services' },
            { href: '#process', label: 'How it works' },
            { href: '#capabilities', label: 'Capabilities' },
            { href: '#who', label: 'Who it is for' },
            { href: '#guides', label: 'Guides' },
            { href: '#faq', label: 'FAQ' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-[#E8E6E3] px-3.5 py-1.5 text-xs font-medium text-[#4A4745] hover:border-[#C5A028] hover:text-[#1A1A1A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* Problems */}
      <section id="problems" className="py-20 md:py-28 px-6 scroll-mt-24">
        <div className="max-w-[1160px] mx-auto">
          <RksSectionHeader
            eyebrow="Direct answers"
            title="Where restaurants lose money, time and consistency"
            subtitle="Pick the pressure point. Each card routes you to the service that addresses it — without private-chef booking noise."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {RKS_HUB.problems.map((p, i) => {
              const service = RKS_SERVICES.find((s) => s.slug === p.serviceSlug)
              const Icon = PROBLEM_ICONS[i] ?? AlertTriangle
              return (
                <Link
                  key={p.title}
                  to={service?.path ?? RKS_HUB_PATH}
                  className="group relative rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028]/55 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <RksIconBadge icon={Icon} />
                  <h3 className="font-semibold text-[15px] md:text-base mb-2 leading-snug group-hover:text-[#C5A028] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-5">{p.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C5A028]">
                    {service?.cardTitle ?? 'View service'} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section id="services" className="py-20 md:py-28 px-6 bg-white scroll-mt-24">
        <div className="max-w-[1160px] mx-auto">
          <RksSectionHeader
            eyebrow="Service pillars"
            title="Three commercial paths — not nine thin pages"
            subtitle="Start with diagnosis, redesign the kitchen, or rebuild the menu and team standards. Related work (equipment, recruitment, supplies) lives inside these pages."
          />
          <div className="grid lg:grid-cols-3 gap-7">
            {RKS_SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i] ?? Building2
              return (
                <article
                  key={service.slug}
                  className="group rounded-3xl border border-[#E8E6E3] overflow-hidden bg-[#FAFAF8] flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <OptimizedImage
                      src={service.cardImage}
                      alt={service.cardAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width={1216}
                      height={832}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      <Icon className="w-3.5 h-3.5 text-[#C5A028]" /> {service.heroEyebrow}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-playfair text-2xl mb-3 leading-snug">{service.cardTitle}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed mb-4 flex-1">
                      {service.cardSummary}
                    </p>
                    <p className="text-xs text-[#8A8680] mb-5">
                      Primary intent: <span className="text-[#4A4745] font-medium">{service.primaryKeyword}</span>
                    </p>
                    <Link
                      to={service.path}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full bg-[#0A0A0A] text-white text-sm font-semibold px-5 hover:bg-[#C5A028] hover:text-[#0A0A0A] transition-colors"
                    >
                      Open full service page <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28 px-6 scroll-mt-24">
        <div className="max-w-[1160px] mx-auto">
          <RksSectionHeader
            eyebrow="Engagement model"
            title="Clear process — only the stages you need"
            subtitle="Not every project includes every stage. Scope is written before work begins."
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#C5A028]/40 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RKS_HUB.process.map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-2xl bg-white border border-[#E8E6E3] p-6 hover:border-[#C5A028]/40 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C5A028] text-[#0A0A0A] text-xs font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 md:py-28 px-6 bg-white scroll-mt-24">
        <div className="max-w-[1160px] mx-auto">
          <RksSectionHeader
            eyebrow="Also covered"
            title="Additional capabilities inside the three services"
            subtitle="Equipment, supplies, uniforms, ingredients, recruitment, and opening support are nested under the right commercial page — not orphaned micro-pages."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RKS_HUB.capabilities.map((c, i) => {
              const service = RKS_SERVICES.find((s) => s.slug === c.serviceSlug)
              const Icon = CAPABILITY_ICONS[i] ?? Wrench
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-[#E8E6E3] p-6 bg-[#FAFAF8] hover:bg-white hover:border-[#C5A028]/35 transition-colors"
                >
                  <RksIconBadge icon={Icon} />
                  <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-4">{c.body}</p>
                  {service && (
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#C5A028] hover:underline"
                    >
                      Covered under {service.cardTitle} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who for */}
      <section id="who" className="py-20 md:py-28 px-6 scroll-mt-24">
        <div className="max-w-[960px] mx-auto">
          <RksSectionHeader
            eyebrow="Audience"
            title="Built for professional operators"
            subtitle="Independent restaurants through multi-outlet groups, hotels, cafés, bars, pastry kitchens, estates, and production kitchens."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {RKS_HUB.audiences.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 rounded-xl border border-[#E8E6E3] bg-white px-4 py-3.5 text-sm font-medium text-[#1A1A1A]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C5A028] shrink-0" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 px-6 bg-[#0F1111] text-white">
        <div className="max-w-[1160px] mx-auto">
          <RksSectionHeader
            light
            eyebrow="Why myCHEF.id"
            title="Practical hospitality thinking — without invented claims"
            subtitle="We connect consulting, design, menu, and training so fixes do not create new bottlenecks."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RKS_HUB.whyUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#C5A028]/40 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 text-[#C5A028]">{w.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/45 text-sm mt-12 max-w-[640px] mx-auto leading-relaxed">
            No unverified project counts, awards, software brand lists, or client savings figures on
            this hub. Evidence-backed case studies are added only when documented and permitted.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="py-20 md:py-28 px-6 scroll-mt-24">
        <div className="max-w-[1160px] mx-auto">
          <RksSectionHeader
            eyebrow="Learn first"
            title="Guides that answer operator questions"
            subtitle="Each guide targets a distinct informational intent and links up to the commercial service that can implement the fix."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RKS_GUIDES.map((g) => {
              const parent = RKS_SERVICES.find((s) => s.slug === g.parentServiceSlug)
              return (
                <Link
                  key={g.slug}
                  to={g.path}
                  className="group rounded-2xl border border-[#E8E6E3] bg-white overflow-hidden hover:border-[#C5A028]/45 hover:shadow-lg transition-all"
                >
                  <div className="h-44 overflow-hidden relative">
                    <OptimizedImage
                      src={g.heroImage}
                      alt={g.heroAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      width={1216}
                      height={832}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    {parent && (
                      <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1A1A1A]">
                        → {parent.cardTitle}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 leading-snug group-hover:text-[#C5A028] transition-colors">
                      {g.h1}
                    </h3>
                    <p className="text-sm text-[#4A4745] line-clamp-2 mb-3">{g.intro}</p>
                    <p className="text-[11px] text-[#8A8680]">
                      Keyword focus: {g.primaryKeyword}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
          <p className="mt-8 text-center text-sm text-[#4A4745] max-w-2xl mx-auto">
            Also read our <Link to="/blog/hotel-restaurant-chef-staffing" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">hotel &amp; restaurant chef staffing guide</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 px-6 bg-white scroll-mt-24">
        <div className="max-w-[800px] mx-auto">
          <RksSectionHeader
            eyebrow="FAQ"
            title="Straight answers before you enquire"
            subtitle="Scope, documents, geography, fees, and what happens after the first assessment."
          />
          <FAQAccordion items={RKS_HUB.faqs.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      <RksFinalCta
        title="Start with a clear assessment of your restaurant or kitchen"
        body="Tell us your concept, location, and pressure point. We reply with whether consulting, design, menu work, or training is the right first step."
        waLabel="Discuss Your Project With MYCHEF.ID"
        waMessage={WA_MSG}
        source="rks-hub-final-wa"
      />

      <StickyMobileCTA
        label="Request Consultation"
        serviceName="restaurant and kitchen solutions in Indonesia"
        intent="a consultation about consulting, design, or training"
        pageSource="rks-hub"
      />
    </div>
  )
}
