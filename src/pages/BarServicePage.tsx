import { useParams } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, faqPageSchema, barServiceSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { getBarServiceBySlug, BAR_SERVICE_SLUGS } from '@/data/bar-services'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import { downgradeArticleH1 } from '@/lib/utils'
import {
  BarServiceHero,
  BarServiceProblem,
  BarServiceDeliverables,
  BarServiceProcess,
  BarServiceIncluded,
  BarServiceProof,
  BarServiceExpandedContent,
  BarServiceQuoteBlock,
  BarServiceCrossSells,
  BarServiceResources,
  BarServiceEnquiryForm,
  BarServiceLeadMagnet,
  BarServiceSubNav,
} from '@/components/bar-services'

const SITE = 'https://mychef.id'

export default function BarServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getBarServiceBySlug(slug) : undefined

  if (!service || !BAR_SERVICE_SLUGS.includes(slug ?? '')) {
    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-2xl font-serif mb-4">Service not found</h1>
        <p className="text-gray-600 mb-6">
          The bar service you are looking for does not exist.
        </p>
        <a href="/bar-services/" className="text-amber-600 hover:underline">
          Browse all bar services
        </a>
      </div>
    )
  }

  const meta = getPageMeta(service.metaKey)
  const canonical = `${SITE}${service.route}`
  const articleHtml = ARTICLE_CONTENT[service.route]

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={canonical}
        ogImage={meta.ogImage}
        jsonLd={[
          breadcrumbSchema(service.eyebrow, canonical, 'Bar Services', `${SITE}/bar-services/`),
          barServiceSchema(
            service.h1,
            meta.description,
            canonical,
            service.eyebrow,
            service.fromPrice.value,
            service.fromPrice.label,
          ),
          faqPageSchema(service.faqs),
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Bar Services', href: '/bar-services/' },
          { label: service.eyebrow, href: service.route },
        ]}
      />
      <BarServiceHero service={service} />
      <BarServiceSubNav />
      <BarServiceProblem
        problem={service.problem}
        image={service.problemImage ? { src: service.problemImage, alt: service.problemAlt || '' } : undefined}
        imagePosition="right"
      />
      <BarServiceDeliverables
        deliverables={service.deliverables}
        image={service.deliverablesImage ? { src: service.deliverablesImage, alt: service.deliverablesAlt || '' } : undefined}
        imagePosition="left"
      />
      <BarServiceProcess
        process={service.process}
        image={service.processImage ? { src: service.processImage, alt: service.processAlt || '' } : undefined}
        imagePosition="right"
      />
      <BarServiceIncluded included={service.included} />
      <BarServiceProof
        proof={service.proof}
        image={service.proofImage ? { src: service.proofImage, alt: service.proofAlt || '' } : undefined}
        imagePosition="left"
      />
      {service.expandedSections && (
        <BarServiceExpandedContent sections={service.expandedSections} images={service.expandedImages} />
      )}
      <BarServiceQuoteBlock service={service} />
      <BarServiceCrossSells slugs={service.relatedServices} />
      {articleHtml && (
        <section className="py-20 md:py-28 bg-[#FAFAF8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div
              className="prose prose-stone max-w-none text-[#4A4745] prose-headings:font-playfair prose-headings:text-[#1A1A1A] prose-h2:mb-6 prose-h2:mt-16 prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-2xl prose-p:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:leading-relaxed prose-strong:text-[#1A1A1A] prose-a:font-medium prose-a:text-[#7E6410] prose-a:no-underline hover:prose-a:underline prose-blockquote:rounded-r-2xl prose-blockquote:border-l-[#C5A028] prose-blockquote:bg-[#FAFAF8] prose-blockquote:p-6 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28"
              dangerouslySetInnerHTML={{ __html: downgradeArticleH1(articleHtml) }}
            />
          </div>
        </section>
      )}
      <section className="py-20 md:py-28 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB] mb-4">
              Questions about {service.eyebrow}
            </h2>
            <p className="text-[#F5F2EB]/60 leading-relaxed">
              Straight answers to help you decide if this service fits your venue.
            </p>
          </div>
          <FAQAccordion items={service.faqs.map((f) => ({ q: f.question, a: f.answer }))} dark />
        </div>
      </section>
      <BarServiceResources slugs={service.relatedResources} />
      <BarServiceEnquiryForm preselectedService={service.slug} />
      <BarServiceLeadMagnet />
      <StickyMobileCTA
        pageSource={`bar-services-${service.slug}`}
        serviceName={service.h1}
        intent="pricing and availability"
      />
    </>
  )
}
