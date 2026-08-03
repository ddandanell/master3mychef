import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import {
  getRksGuide,
  getRksService,
  RKS_GUIDES,
  RKS_HUB_PATH,
  rksWaLink,
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
  const WA = rksWaLink(
    `Hi myCHEF, I read your guide “${guide.h1}” and would like to discuss next steps for our kitchen.`,
  )

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
          faqPageSchema(guide.faqs.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Restaurant and Kitchen Solutions', href: RKS_HUB_PATH },
          ...(parent
            ? [{ label: parent.cardTitle, href: parent.path }]
            : []),
          { label: guide.h1, href: guide.path },
        ]}
      />

      <section className="relative min-h-[45vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={guide.heroImage}
          alt={guide.heroAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          loading="eager"
          width={1216}
          height={832}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative z-10 w-full max-w-[860px] mx-auto px-6 pb-12 pt-28">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Guide
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">{guide.h1}</h1>
          <p className="text-white/85 leading-relaxed">{guide.intro}</p>
        </div>
      </section>

      <article className="py-14 md:py-20 px-6">
        <div className="max-w-[760px] mx-auto space-y-12">
          {guide.sections.map((s) => (
            <section key={s.id}>
              <h2 className="font-playfair text-2xl md:text-3xl mb-4">{s.title}</h2>
              <p className="text-[#4A4745] leading-8 mb-4">{s.body}</p>
              {s.bullets && (
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#4A4745]">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {parent && (
            <div className="rounded-2xl border border-[#C5A028]/30 bg-white p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C5A028] font-semibold mb-2">
                Related commercial service
              </p>
              <h2 className="font-playfair text-2xl mb-2">{parent.cardTitle}</h2>
              <p className="text-sm text-[#4A4745] mb-4">{parent.cardSummary}</p>
              <Link
                to={parent.path}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#C5A028]"
              >
                Open {parent.cardTitle} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          <section>
            <h2 className="font-playfair text-2xl md:text-3xl mb-6">FAQ</h2>
            <FAQAccordion items={guide.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-6">Related guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  to={g.path}
                  className="rounded-xl border border-[#E8E6E3] bg-white p-4 text-sm font-medium hover:border-[#C5A028]/40"
                >
                  {g.h1}
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link to={RKS_HUB_PATH} className="text-sm font-medium text-[#C5A028] hover:underline">
                ← All restaurant and kitchen solutions
              </Link>
            </p>
          </section>
        </div>
      </article>

      <section className="py-16 px-6 bg-[#0F1111] text-white text-center">
        <h2 className="font-playfair text-3xl mb-4">Ready for a structured review?</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-6 text-sm">
          Guides educate. Engagements diagnose your specific kitchen and agree next steps in writing.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          data-source={`rks-guide-${guide.slug}-wa`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-[0.2em] uppercase rounded-full"
        >
          <MessageCircle className="w-4 h-4" /> Discuss With MYCHEF.ID
        </a>
      </section>

      <StickyMobileCTA
        label="Discuss Project"
        serviceName="restaurant kitchen solutions"
        intent={`follow-up after reading ${guide.h1}`}
        pageSource={`rks-guide-${guide.slug}`}
      />
    </div>
  )
}
