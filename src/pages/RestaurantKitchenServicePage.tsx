import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import FoodCostRoiCalculator from '@/components/restaurant-kitchen-solutions/FoodCostRoiCalculator'
import {
  getRksService,
  RKS_GUIDES,
  RKS_HUB_PATH,
  RKS_SERVICES,
  rksWaLink,
} from '@/data/restaurant-kitchen-solutions'

const SITE = 'https://mychef.id'

export default function RestaurantKitchenServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getRksService(slug) : undefined

  if (!service) {
    return <Navigate to={RKS_HUB_PATH} replace />
  }

  const WA = rksWaLink(
    `Hi myCHEF, I would like to discuss ${service.cardTitle} for our hospitality business.`,
  )
  const relatedGuides = RKS_GUIDES.filter((g) => service.relatedGuideSlugs.includes(g.slug))
  const otherServices = RKS_SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={service.title}
        description={service.description}
        canonical={`${SITE}${service.path}`}
        ogImage={`${SITE}${service.heroImage}`}
        jsonLd={[
          breadcrumbSchema(
            service.cardTitle,
            `${SITE}${service.path}`,
            'Restaurant and Kitchen Solutions',
            `${SITE}${RKS_HUB_PATH}`,
          ),
          serviceSchema(service.h1, service.description, `${SITE}${service.path}`),
          faqPageSchema(service.faqs.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Restaurant and Kitchen Solutions', href: RKS_HUB_PATH },
          { label: service.cardTitle, href: service.path },
        ]}
      />

      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={service.heroImage}
          alt={service.heroAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="eager"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6 md:px-10 pb-14 md:pb-20 pt-28">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">
            {service.heroEyebrow}
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] max-w-[900px] mb-5">
            {service.h1}
          </h1>
          <p className="text-white/85 text-lg max-w-[700px] leading-relaxed mb-8">
            {service.heroLead}
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            data-source={`rks-service-${service.slug}-hero`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> {service.primaryCta}
          </a>
        </div>
      </section>

      {service.sections.map((section, idx) => (
        <section
          key={section.id}
          className={`py-16 md:py-24 px-6 ${idx % 2 === 1 ? 'bg-white' : ''}`}
        >
          <div className="max-w-[860px] mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-5">{section.title}</h2>
            <p className="text-[#4A4745] leading-8 mb-5">{section.body}</p>
            {section.bullets && (
              <ul className="space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {service.slug === 'kitchen-consulting-audit' && (
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-[860px] mx-auto">
            <FoodCostRoiCalculator />
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Methodology</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.process.map((p) => (
              <div key={p.step + p.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6">
                <p className="text-[#C5A028] text-xs font-semibold tracking-[0.25em] mb-2">
                  Step {p.step}
                </p>
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.deliverables && (
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-[860px] mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-4">What you may receive</h2>
            <p className="text-[#4A4745] mb-8 leading-relaxed">
              Deliverables are confirmed in the written proposal for your engagement. The list below
              shows typical outputs — not a fixed package for every project.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#C5A028] mt-0.5 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-playfair text-3xl text-center mb-10">Related services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to={RKS_HUB_PATH}
              className="rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028]/50 transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">Restaurant and Kitchen Solutions hub</h3>
              <p className="text-sm text-[#4A4745] mb-3">
                Overview of the full B2B kitchen solutions offering.
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-[#C5A028] font-medium">
                Open hub <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={s.path}
                className="rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028]/50 transition-all"
              >
                <h3 className="font-semibold text-lg mb-2">{s.cardTitle}</h3>
                <p className="text-sm text-[#4A4745] mb-3 line-clamp-3">{s.cardSummary}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#C5A028] font-medium">
                  {s.cardTitle} details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-[1160px] mx-auto">
            <h2 className="font-playfair text-3xl text-center mb-10">Supporting guides</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  to={g.path}
                  className="rounded-2xl border border-[#E8E6E3] p-6 hover:border-[#C5A028]/40 transition-all"
                >
                  <h3 className="font-semibold mb-2">{g.h1}</h3>
                  <p className="text-sm text-[#4A4745] line-clamp-3">{g.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-10">FAQ</h2>
          <FAQAccordion items={service.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
        </div>
      </section>

      <section className="py-20 px-6 bg-[#C5A028]">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            {service.finalCtaTitle}
          </h2>
          <p className="text-[#1A1A1A]/80 mb-8">{service.finalCtaBody}</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            data-source={`rks-service-${service.slug}-final`}
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#1A1A1A] text-white text-sm font-semibold tracking-[0.2em] uppercase rounded-full"
          >
            <MessageCircle className="w-4 h-4" /> Book an Initial Consultation
          </a>
        </div>
      </section>

      <StickyMobileCTA
        label="Request Assessment"
        serviceName={service.cardTitle}
        intent="an assessment or project consultation"
        pageSource={`rks-${service.slug}`}
      />
    </div>
  )
}
