import { useParams } from 'react-router-dom'
import { HelpCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, blogPostingSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { getBarResourceBySlug, BAR_RESOURCE_SLUGS } from '@/data/bar-services'
import { BarServiceCrossSells } from '@/components/bar-services'

const SITE = 'https://mychef.id'

const RESOURCE_PAGE_FAQS = [
  {
    question: 'Is this guide written for my type of venue?',
    answer:
      'Our bar resources are written for hotels, restaurants, beach clubs, villas, wedding organisers and private estates in Bali. If your venue serves drinks to guests, the frameworks usually apply.',
  },
  {
    question: 'Can I implement the advice without hiring MyChef?',
    answer:
      'Yes. The guides are designed to be actionable on their own. We also link to a MyChef service if you would prefer a specialist to handle implementation or review your work.',
  },
  {
    question: 'How current are the salary and cost benchmarks?',
    answer:
      'We refresh benchmarks against the Bali hospitality market at least twice a year. If you are budgeting for a specific role or project, confirm the latest figures with a quick WhatsApp message.',
  },
  {
    question: 'Do you offer consultations before a larger project?',
    answer:
      'Yes. You can book a free 30-minute bar health call or send a written enquiry. We will ask a few questions, give an honest read on your situation, and tell you plainly whether a paid engagement is worth it.',
  },
  {
    question: 'How do I share this guide with my team?',
    answer:
      'You are welcome to share the link with your team or print the page for internal use. For larger groups or white-label training, contact us about a private Bar Staff Training session.',
  },
]

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export default function BarServicesResourcePage() {
  const { slug } = useParams<{ slug: string }>()
  const resource = slug ? getBarResourceBySlug(slug) : undefined

  if (!resource || !BAR_RESOURCE_SLUGS.includes(slug ?? '')) {
    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-2xl font-serif mb-4">Resource not found</h1>
        <p className="text-gray-600 mb-6">
          The resource you are looking for does not exist.
        </p>
        <a href="/bar-services/resources/" className="text-amber-600 hover:underline">
          Browse all resources
        </a>
      </div>
    )
  }

  const meta = getPageMeta(resource.metaKey)
  const canonical = `${SITE}${resource.route}`
  const galleryImages = resource.galleryImages ?? []

  const contentWordCount = resource.content.reduce(
    (count, section) => count + section.paragraphs.reduce((c, p) => c + countWords(p), 0),
    0
  )
  const expandedWordCount = resource.expandedSections
    ? countWords(
        [
          resource.expandedSections.context.title,
          ...resource.expandedSections.context.paragraphs,
          resource.expandedSections.deepDive.title,
          ...resource.expandedSections.deepDive.paragraphs,
          resource.expandedSections.mistakes.title,
          ...resource.expandedSections.mistakes.items,
          resource.expandedSections.actionableTips.title,
          ...resource.expandedSections.actionableTips.items,
        ].join(' ')
      )
    : 0
  const wordCount = contentWordCount + expandedWordCount

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={canonical}
        ogImage={meta.ogImage}
        ogType="article"
        articleSection="Bar Services"
        jsonLd={[
          breadcrumbSchema(resource.title, canonical, 'Resources', `${SITE}/bar-services/resources/`),
          blogPostingSchema({
            headline: resource.h1,
            description: meta.description,
            url: canonical,
            datePublished: '2026-01-01',
            author: 'myCHEF Bar Services',
            image: meta.ogImage,
            wordCount,
          }),
          faqPageSchema(RESOURCE_PAGE_FAQS),
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Bar Services', href: '/bar-services/' },
          { label: 'Resources', href: '/bar-services/resources/' },
          { label: resource.title, href: resource.route },
        ]}
      />
      <section className="relative py-24 md:py-32">
        <OptimizedImage
          src={resource.featuredImage}
          alt={resource.featuredAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <span className="text-sm uppercase tracking-widest text-amber-400 mb-4 block">
            Resource
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white max-w-3xl">
            {resource.h1}
          </h1>
        </div>
      </section>
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {resource.summary}
          </p>
          <div className="prose prose-lg max-w-none">
            {resource.content.map((section, i) => (
              <div key={i} className="mb-10">
                {section.heading && (
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-gray-700 mb-4 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {galleryImages[0] && (
            <div className="mt-12">
              <OptimizedImage
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          )}

          {resource.expandedSections && (
            <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">
                  {resource.expandedSections.context.title}
                </h2>
                {resource.expandedSections.context.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {galleryImages[1] && (
                <div>
                  <OptimizedImage
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}

              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">
                  {resource.expandedSections.deepDive.title}
                </h2>
                {resource.expandedSections.deepDive.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">
                  {resource.expandedSections.mistakes.title}
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {resource.expandedSections.mistakes.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#C5A028' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">
                  {resource.expandedSections.actionableTips.title}
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {resource.expandedSections.actionableTips.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#C5A028' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {galleryImages[2] && (
                <div>
                  <OptimizedImage
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </article>

      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Questions about this guide
            </h2>
          </div>
          <FAQAccordion items={RESOURCE_PAGE_FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} />
          <div className="mt-10 text-center">
            <a
              href="/bar-services/faq/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-50 font-medium rounded"
            >
              <HelpCircle className="w-4 h-4" />
              View all bar services FAQs
            </a>
          </div>
        </div>
      </section>

      <BarServiceCrossSells slugs={resource.relatedServices} />
      <StickyMobileCTA
        pageSource={`bar-services-resource-${resource.slug}`}
        serviceName={resource.title}
        intent="more information"
      />
    </>
  )
}
