import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Check, Building2, UtensilsCrossed, ChefHat } from 'lucide-react'
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
  RKS_GUIDES,
  RKS_HUB,
  RKS_HUB_PATH,
  RKS_SERVICES,
  rksWaLink,
} from '@/data/restaurant-kitchen-solutions'

const SITE = 'https://mychef.id'
const WA = rksWaLink(
  'Hi myCHEF, I would like a consultation about restaurant and kitchen solutions in Indonesia.',
)

const PILLAR_ICONS = [Building2, UtensilsCrossed, ChefHat]

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
      <Breadcrumb
        items={[{ label: 'Restaurant and Kitchen Solutions', href: RKS_HUB_PATH }]}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={RKS_HUB.heroImage}
          alt={RKS_HUB.heroAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="eager"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">
            B2B · Indonesia
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white leading-[1.08] max-w-[900px] mb-6">
            {RKS_HUB.h1}
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-[720px] leading-relaxed mb-8">
            {RKS_HUB.heroLead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              data-source="rks-hub-hero-wa"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Request a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-3 text-center">
            Problems we solve
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-center mb-4">
            Where restaurants lose money, time and consistency
          </h2>
          <p className="text-center text-[#4A4745] max-w-[640px] mx-auto mb-12">
            Identify the pressure point, then open the service path that addresses it. Private chef
            booking is a different product — this hub is for professional kitchen operators.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RKS_HUB.problems.map((p) => {
              const service = RKS_SERVICES.find((s) => s.slug === p.serviceSlug)
              return (
                <Link
                  key={p.title}
                  to={service?.path ?? RKS_HUB_PATH}
                  className="group rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028]/50 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-4">{p.body}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#C5A028]">
                    {service?.cardTitle ?? 'Learn more'} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section id="services" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-3 text-center">
            Service pillars
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-center mb-12">
            Three primary paths into the work
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {RKS_SERVICES.map((service, i) => {
              const Icon = PILLAR_ICONS[i] ?? Building2
              return (
                <article
                  key={service.slug}
                  className="rounded-2xl border border-[#E8E6E3] overflow-hidden bg-[#FAFAF8] flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={service.cardImage}
                      alt={service.cardAlt}
                      className="w-full h-full object-cover"
                      width={1216}
                      height={832}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A028]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#C5A028]" />
                    </div>
                    <h3 className="font-playfair text-2xl mb-3">{service.cardTitle}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed mb-6 flex-1">
                      {service.cardSummary}
                    </p>
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#C5A028] transition-colors"
                    >
                      {service.cardTitle} details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-3 text-center">
            How engagements work
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-center mb-4">
            End-to-end process
          </h2>
          <p className="text-center text-[#4A4745] max-w-[560px] mx-auto mb-12">
            Not every project includes every stage. Scope is agreed before work begins.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RKS_HUB.process.map((step) => (
              <div key={step.step} className="rounded-2xl bg-white border border-[#E8E6E3] p-6">
                <p className="text-[#C5A028] text-xs font-semibold tracking-[0.25em] mb-3">
                  {step.step}
                </p>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional capabilities */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
            Additional capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RKS_HUB.capabilities.map((c) => {
              const service = RKS_SERVICES.find((s) => s.slug === c.serviceSlug)
              return (
                <div key={c.title} className="rounded-2xl border border-[#E8E6E3] p-6">
                  <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-4">{c.body}</p>
                  {service && (
                    <Link
                      to={service.path}
                      className="text-sm font-medium text-[#C5A028] hover:underline"
                    >
                      Related: {service.cardTitle}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who for */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">Who these services are for</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {RKS_HUB.audiences.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E6E3] bg-white px-4 py-2 text-sm text-[#4A4745]"
              >
                <Check className="w-3.5 h-3.5 text-[#C5A028]" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 px-6 bg-[#0F1111] text-white">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-center mb-12">
            Why myCHEF.id for kitchen solutions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RKS_HUB.whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-semibold text-lg mb-2 text-[#C5A028]">{w.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-sm mt-10 max-w-[640px] mx-auto">
            We do not publish unverified project counts, awards, software brand lists, or client
            savings figures. Evidence-backed case studies are added only when documented and
            permitted.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-3 text-center">
            Related guides
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
            Learn before you engage
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RKS_GUIDES.map((g) => (
              <Link
                key={g.slug}
                to={g.path}
                className="group rounded-2xl border border-[#E8E6E3] bg-white overflow-hidden hover:border-[#C5A028]/40 transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <OptimizedImage
                    src={g.heroImage}
                    alt={g.heroAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    width={1216}
                    height={832}
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors">
                    {g.h1}
                  </h3>
                  <p className="text-sm text-[#4A4745] line-clamp-2">{g.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-10">
            Frequently asked questions
          </h2>
          <FAQAccordion items={RKS_HUB.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-6 bg-[#C5A028]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            Start with a clear assessment of your restaurant or kitchen
          </h2>
          <p className="text-[#1A1A1A]/80 mb-8">
            Discuss your project with myCHEF.id — consulting, design, menu systems, or training.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            data-source="rks-hub-final-wa"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#1A1A1A] text-white text-sm font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-black transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Discuss Your Project With MYCHEF.ID
          </a>
        </div>
      </section>

      <StickyMobileCTA
        label="Request Consultation"
        serviceName="restaurant and kitchen solutions in Indonesia"
        intent="a consultation about consulting, design, or training"
        pageSource="rks-hub"
      />
    </div>
  )
}
