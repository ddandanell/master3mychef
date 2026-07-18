import { ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { BAR_RESOURCES } from '@/data/bar-services'

const SITE = 'https://mychef.id'

export default function BarServicesResourcesIndexPage() {
  const meta = getPageMeta('bar-services-resources')
  const canonical = meta.canonical ?? `${SITE}/bar-services/resources/`

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={canonical}
        ogImage={meta.ogImage}
        jsonLd={[breadcrumbSchema('Resources', canonical, 'Bar Services', `${SITE}/bar-services/`)]}
      />
      <Breadcrumb
        items={[
          { label: 'Bar Services', href: '/bar-services/' },
          { label: 'Resources', href: '/bar-services/resources/' },
        ]}
      />

      <section className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-amber-400 mb-4 block">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Bar Services Resources
          </h1>
          <p className="text-lg text-white/80">
            Practical guides, benchmarks and checklists for running a better bar in Bali.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BAR_RESOURCES.map((resource) => (
              <a
                key={resource.slug}
                href={resource.route}
                className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <OptimizedImage
                    src={resource.featuredImage}
                    alt={resource.featuredAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-amber-600 transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-gray-600 text-sm flex-grow mb-4">
                    {resource.summary}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-amber-600">
                    Read guide
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="bar-services-resources"
        serviceName="bar services in Bali"
        intent="a consultation"
      />
    </>
  )
}
