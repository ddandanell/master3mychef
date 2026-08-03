import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, BookOpen, Check } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import {
  RksEyebrow,
  RksFinalCta,
  RksSectionHeader,
  RksSubNav,
  RksToc,
  RksTrustStrip,
  RksWaButton,
} from '@/components/restaurant-kitchen-solutions/RksUi'
import {
  getRksGuide,
  getRksService,
  RKS_GUIDES,
  RKS_HUB_PATH,
} from '@/data/restaurant-kitchen-solutions'

const SITE = 'https://mychef.id'

export default function RestaurantKitchenGuidePage() {
  const { slug } = useParams<{ slug: string }>()
  const guide = slug ? getRksGuide(slug) : undefined

  if (!guide) {
    return <Navigate to={RKS_HUB_PATH} replace />
  }

  const parent = getRksService(guide.parentServiceSlug)
  const related = RKS_GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3)
  const tocItems = [
    ...guide.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: 'commercial-service', title: 'Related commercial service' },
    { id: 'faq', title: 'FAQ' },
    { id: 'related-guides', title: 'Related guides' },
  ]
  const waMessage = `Hi myCHEF, I read your guide “${guide.h1}” and would like to discuss next steps for our kitchen.`

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={guide.title}
        description={guide.description}
        canonical={`${SITE}${guide.path}`}
        ogImage={`${SITE}${guide.heroImage}`}
        jsonLd={[
          breadcrumbSchema(
            guide.h1,
            `${SITE}${guide.path}`,
            'Restaurant and Kitchen Solutions',
            `${SITE}${RKS_HUB_PATH}`,
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.h1,
            description: guide.description,
            image: `${SITE}${guide.heroImage}`,
            mainEntityOfPage: `${SITE}${guide.path}`,
            author: {
              '@type': 'Organization',
              name: 'myCHEF.id',
              url: SITE,
            },
            publisher: {
              '@type': 'Organization',
              name: 'myCHEF.id',
              url: SITE,
            },
          },
          faqPageSchema(guide.faqs.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Restaurant and Kitchen Solutions', href: RKS_HUB_PATH },
          ...(parent ? [{ label: parent.cardTitle, href: parent.path }] : []),
          { label: guide.h1, href: guide.path },
        ]}
      />
      <RksSubNav activePath={parent?.path} />

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={guide.heroImage}
          alt={guide.heroAlt}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
          width={1216}
          height={832}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/92 via-[#0A0A0A]/65 to-[#0A0A0A]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 pb-12 pt-28">
          <RksEyebrow>
            <BookOpen className="w-3.5 h-3.5 mr-1.5 inline" />
            Operator guide
          </RksEyebrow>
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4 leading-[1.1]">
            {guide.h1}
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-[720px] mb-3">{guide.intro}</p>
          <p className="text-white/50 text-sm">
            Intent: <span className="text-white/70">{guide.primaryKeyword}</span>
            {parent && (
              <>
                {' '}
                · Implements via{' '}
                <Link to={parent.path} className="text-[#C5A028] hover:underline">
                  {parent.cardTitle}
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      <RksTrustStrip />

      <article className="py-12 md:py-20 px-6">
        <div className="max-w-[1160px] mx-auto grid lg:grid-cols-[260px_1fr] gap-10">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <RksToc items={tocItems} />
            </div>
          </div>

          <div className="max-w-[760px] space-y-10 min-w-0">
            <div className="lg:hidden">
              <RksToc items={tocItems} />
            </div>

            {/* Key takeaway box — SEO scannable */}
            <div className="rounded-2xl border border-[#C5A028]/35 bg-[#C5A028]/08 p-5 md:p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#C5A028] mb-2">
                What you will get from this page
              </p>
              <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                A practical, step-by-step view of <strong>{guide.primaryKeyword}</strong> for
                Indonesian hospitality operators — written to help you act, not to sell private chef
                bookings.
              </p>
            </div>

            {guide.sections.map((s, idx) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C5A028]/15 text-[#C5A028] text-xs font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-playfair text-2xl md:text-3xl leading-snug">{s.title}</h2>
                </div>
                <p className="text-[#4A4745] leading-8 mb-4 md:pl-11">{s.body}</p>
                {s.bullets && (
                  <ul className="space-y-2 md:pl-11">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[#4A4745]">
                        <Check className="w-4 h-4 text-[#C5A028] mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {parent && (
              <section
                id="commercial-service"
                className="scroll-mt-28 rounded-2xl border border-[#C5A028]/35 bg-white p-6 md:p-8 shadow-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C5A028] font-semibold mb-2">
                  Related commercial service
                </p>
                <h2 className="font-playfair text-2xl md:text-3xl mb-2">{parent.cardTitle}</h2>
                <p className="text-sm md:text-base text-[#4A4745] mb-5 leading-relaxed">
                  {parent.cardSummary}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={parent.path}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full bg-[#0A0A0A] text-white text-sm font-semibold px-5 hover:bg-[#C5A028] hover:text-[#0A0A0A] transition-colors"
                  >
                    Open {parent.cardTitle} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <RksWaButton
                    label="Discuss this service"
                    message={`Hi myCHEF, I want to discuss ${parent.cardTitle} after reading ${guide.h1}.`}
                    source={`rks-guide-${guide.slug}-service-wa`}
                  />
                </div>
              </section>
            )}

            <section id="faq" className="scroll-mt-28">
              <RksSectionHeader
                align="left"
                eyebrow="FAQ"
                title="Quick answers"
                subtitle="Short clarifications so you can decide the next step faster."
              />
              <FAQAccordion items={guide.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
            </section>

            <section id="related-guides" className="scroll-mt-28">
              <h2 className="font-playfair text-2xl mb-5">Related guides</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((g) => (
                  <Link
                    key={g.slug}
                    to={g.path}
                    className="rounded-xl border border-[#E8E6E3] bg-white p-4 text-sm font-medium hover:border-[#C5A028]/45 transition-colors leading-snug"
                  >
                    {g.h1}
                  </Link>
                ))}
              </div>
              <p className="mt-6">
                <Link
                  to={RKS_HUB_PATH}
                  className="text-sm font-semibold text-[#C5A028] hover:underline inline-flex items-center gap-1"
                >
                  ← All restaurant and kitchen solutions
                </Link>
              </p>
            </section>
          </div>
        </div>
      </article>

      <RksFinalCta
        title="Ready for a structured review?"
        body="Guides educate. Engagements diagnose your kitchen and agree next steps in writing — consulting, design, menu systems, or training."
        waLabel="Discuss With MYCHEF.ID"
        waMessage={waMessage}
        source={`rks-guide-${guide.slug}-final`}
      />

      <StickyMobileCTA
        label="Discuss Project"
        serviceName="restaurant kitchen solutions"
        intent={`follow-up after reading ${guide.h1}`}
        pageSource={`rks-guide-${guide.slug}`}
      />
    </div>
  )
}
