import { Link, Navigate, useParams } from 'react-router-dom'
import { Check, ListOrdered, PackageCheck } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import FoodCostRoiCalculator from '@/components/restaurant-kitchen-solutions/FoodCostRoiCalculator'
import {
  RksEyebrow,
  RksFinalCta,
  RksRelatedServices,
  RksSectionHeader,
  RksSubNav,
  RksToc,
  RksTrustStrip,
  RksWaButton,
} from '@/components/restaurant-kitchen-solutions/RksUi'
import {
  getRksService,
  RKS_GUIDES,
  RKS_HUB_PATH,
} from '@/data/restaurant-kitchen-solutions'

const SITE = 'https://mychef.id'

export default function RestaurantKitchenServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getRksService(slug) : undefined

  if (!service) {
    return <Navigate to={RKS_HUB_PATH} replace />
  }

  const relatedGuides = RKS_GUIDES.filter((g) => service.relatedGuideSlugs.includes(g.slug))
  const tocItems = [
    ...service.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: 'methodology', title: 'Methodology' },
    ...(service.deliverables ? [{ id: 'deliverables', title: 'What you may receive' }] : []),
    ...(service.slug === 'kitchen-consulting-audit'
      ? [{ id: 'roi-calculator', title: 'Food-cost opportunity calculator' }]
      : []),
    { id: 'related-guides', title: 'Supporting guides' },
    { id: 'faq', title: 'FAQ' },
  ]

  const waMessage = `Hi myCHEF, I would like to discuss ${service.cardTitle} for our hospitality business.`

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
      <RksSubNav activePath={service.path} />

      {/* Hero */}
      <section className="relative min-h-[68vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={service.heroImage}
          alt={service.heroAlt}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/35" />
        <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6 md:px-10 pb-14 md:pb-20 pt-28">
          <RksEyebrow>{service.heroEyebrow} · Indonesia</RksEyebrow>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] max-w-[900px] mb-5">
            {service.h1}
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-[700px] leading-relaxed mb-3">
            {service.heroLead}
          </p>
          <p className="text-white/50 text-sm mb-8">
            Search focus: <span className="text-white/75">{service.primaryKeyword}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <RksWaButton
              label={service.primaryCta}
              message={waMessage}
              source={`rks-service-${service.slug}-hero`}
            />
            <a
              href="#content"
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 border border-white/30 text-white text-sm font-semibold tracking-[0.12em] uppercase rounded-full hover:bg-white/10 transition-all"
            >
              Jump to details
            </a>
          </div>
        </div>
      </section>

      <RksTrustStrip />

      <div id="content" className="scroll-mt-24">
        <div className="max-w-[1160px] mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
          {/* Sticky TOC */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <RksToc items={tocItems} />
              <div className="rounded-2xl border border-[#C5A028]/30 bg-[#C5A028]/08 p-5">
                <p className="text-sm font-semibold text-[#1A1A1A] mb-2">Ready to talk scope?</p>
                <p className="text-xs text-[#4A4745] mb-4 leading-relaxed">
                  Share venue type, city, and the main pressure point. Written next steps — no spam.
                </p>
                <RksWaButton
                  label="WhatsApp us"
                  message={waMessage}
                  source={`rks-service-${service.slug}-toc`}
                />
              </div>
            </div>
          </div>

          {/* Main column */}
          <div className="min-w-0 space-y-4">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-8">
              <RksToc items={tocItems} />
            </div>

            {service.sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className={`scroll-mt-28 rounded-2xl border border-[#E8E6E3] p-6 md:p-8 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C5A028]/15 text-[#C5A028] text-xs font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-playfair text-2xl md:text-3xl leading-snug">{section.title}</h2>
                </div>
                <p className="text-[#4A4745] leading-8 mb-5 pl-0 md:pl-11">{section.body}</p>
                {section.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-2.5 md:pl-11">
                    {section.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 rounded-xl bg-white/80 border border-[#E8E6E3] px-3 py-2.5 text-sm text-[#4A4745]"
                      >
                        <Check className="w-4 h-4 text-[#C5A028] mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {service.slug === 'kitchen-consulting-audit' && (
              <section id="roi-calculator" className="scroll-mt-28 py-4">
                <FoodCostRoiCalculator />
              </section>
            )}

            <section id="methodology" className="scroll-mt-28 py-8">
              <div className="flex items-center gap-3 mb-8">
                <ListOrdered className="w-6 h-6 text-[#C5A028]" />
                <h2 className="font-playfair text-3xl md:text-4xl">Methodology</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.process.map((p) => (
                  <div
                    key={p.step + p.title}
                    className="rounded-2xl border border-[#E8E6E3] bg-white p-5 hover:border-[#C5A028]/40 transition-colors"
                  >
                    <p className="text-[#C5A028] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                      Step {p.step}
                    </p>
                    <h3 className="font-semibold text-base mb-1.5">{p.title}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {service.deliverables && (
              <section
                id="deliverables"
                className="scroll-mt-28 rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <PackageCheck className="w-6 h-6 text-[#C5A028]" />
                  <h2 className="font-playfair text-3xl">What you may receive</h2>
                </div>
                <p className="text-[#4A4745] mb-6 leading-relaxed text-sm md:text-base">
                  Deliverables are confirmed in the written proposal. This list shows typical outputs
                  — not a fixed package for every engagement.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-sm text-[#4A4745] rounded-lg bg-[#FAFAF8] px-3 py-2.5"
                    >
                      <Check className="w-4 h-4 text-[#C5A028] mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {relatedGuides.length > 0 && (
              <section id="related-guides" className="scroll-mt-28 py-6">
                <RksSectionHeader
                  align="left"
                  eyebrow="Learn first"
                  title="Supporting guides for this service"
                  subtitle="Educational pages that answer the questions operators ask before they engage."
                />
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedGuides.map((g) => (
                    <Link
                      key={g.slug}
                      to={g.path}
                      className="group rounded-2xl border border-[#E8E6E3] bg-white overflow-hidden hover:border-[#C5A028]/45 transition-all"
                    >
                      <div className="h-32 overflow-hidden">
                        <OptimizedImage
                          src={g.heroImage}
                          alt={g.heroAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          width={1216}
                          height={832}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-sm leading-snug group-hover:text-[#C5A028] transition-colors">
                          {g.h1}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section id="faq" className="scroll-mt-28 py-6">
              <RksSectionHeader
                align="left"
                eyebrow="FAQ"
                title="Questions operators ask first"
                subtitle="Scope, timing, documents, confidentiality, and implementation options."
              />
              <FAQAccordion items={service.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
            </section>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-[1160px] mx-auto">
          <RksSectionHeader
            eyebrow="Related"
            title="Other paths in this hub"
            subtitle="Stay inside the B2B kitchen cluster — each page owns a distinct commercial intent."
          />
          <RksRelatedServices excludeSlug={service.slug} />
        </div>
      </section>

      <RksFinalCta
        title={service.finalCtaTitle}
        body={service.finalCtaBody}
        waLabel="Book an Initial Consultation"
        waMessage={waMessage}
        source={`rks-service-${service.slug}-final`}
      />

      <StickyMobileCTA
        label="Request Assessment"
        serviceName={service.cardTitle}
        intent="an assessment or project consultation"
        pageSource={`rks-${service.slug}`}
      />
    </div>
  )
}
