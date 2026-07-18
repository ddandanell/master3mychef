import { useParams } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { getBarServiceBySlug, BAR_SERVICE_SLUGS } from '@/data/bar-services'
import {
  BarServiceHero,
  BarServiceProblem,
  BarServiceDeliverables,
  BarServiceProcess,
  BarServiceIncluded,
  BarServiceProof,
  BarServiceExpandedContent,
  BarServiceGallery,
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

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={canonical}
        ogImage={meta.ogImage}
        jsonLd={[
          breadcrumbSchema(service.eyebrow, canonical, 'Bar Services', `${SITE}/bar-services/`),
          serviceSchema(service.h1, meta.description, canonical),
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
      <BarServiceProblem problem={service.problem} />
      <BarServiceDeliverables deliverables={service.deliverables} />
      <BarServiceProcess process={service.process} />
      <BarServiceIncluded included={service.included} />
      <BarServiceProof proof={service.proof} />
      {service.expandedSections && (
        <BarServiceExpandedContent sections={service.expandedSections} />
      )}
      {service.galleryImages?.length ? (
        <BarServiceGallery images={service.galleryImages} />
      ) : null}
      <BarServiceQuoteBlock service={service} />
      <BarServiceCrossSells slugs={service.relatedServices} />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif mb-8">Frequently asked questions</h2>
          <FAQAccordion items={service.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
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
