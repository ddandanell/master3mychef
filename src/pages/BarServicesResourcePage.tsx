import { useParams } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, blogPostingSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { getBarResourceBySlug, BAR_RESOURCE_SLUGS } from '@/data/bar-services'
import { BarServiceCrossSells, BarServiceGallery } from '@/components/bar-services'

const SITE = 'https://mychef.id'

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
            </div>
          )}
        </div>
      </article>

      {resource.galleryImages && resource.galleryImages.length > 0 && (
        <BarServiceGallery images={resource.galleryImages} />
      )}

      <BarServiceCrossSells slugs={resource.relatedServices} />
      <StickyMobileCTA
        pageSource={`bar-services-resource-${resource.slug}`}
        serviceName={resource.title}
        intent="more information"
      />
    </>
  )
}
