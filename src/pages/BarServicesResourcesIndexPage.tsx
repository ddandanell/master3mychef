import { ArrowRight, BookOpen, Lightbulb, TrendingUp, Users } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { BAR_RESOURCES } from '@/data/bar-services'
import { BarServiceGallery } from '@/components/bar-services'

const SITE = 'https://mychef.id'

const VALUE_PROPS = [
  {
    icon: BookOpen,
    title: 'Practical guides',
    description: 'Each resource is written for operators, not theorists. You get ratios, benchmarks and checklists you can use today.',
  },
  {
    icon: TrendingUp,
    title: 'Bali market data',
    description: 'Salary bands, pour-cost targets and staffing ratios are grounded in the current Bali hospitality market.',
  },
  {
    icon: Lightbulb,
    title: 'Decision frameworks',
    description: 'Learn when to hire permanent vs temporary staff, how to price a cocktail, and when to outsource control systems.',
  },
  {
    icon: Users,
    title: 'Connected to our services',
    description: 'Every guide links to the MyChef service that can help you implement what you have read.',
  },
]

const RESOURCES_GALLERY = [
  { src: '/generated/mychef-service-bali-bartenders-gallery-2.webp', alt: 'Bali bartenders at a professional event' },
  { src: '/generated/mychef-mixology-bali-bar-setup.webp', alt: 'Bali cocktail bar setup and ingredients' },
  { src: '/generated/mychef-events-bali-villa-parties-bar.webp', alt: 'Villa party bar service in Bali' },
]

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
        <div className="container mx-auto px-4 max-w-3xl mb-16">
          <div className="prose prose-lg max-w-none text-center md:text-left">
            <p>
              Running a profitable bar in Bali means making dozens of interconnected decisions: how many bartenders to roster, what to pay them, how to price a cocktail, how to control shrinkage, and how to design a menu that guests remember. Our resource library is built to give venue owners, managers and event organisers clear, actionable answers to those questions.
            </p>
            <p>
              Each guide combines operational frameworks with Bali-specific context — local salary bands, licensing notes, seasonal demand patterns and supplier realities. Whether you are opening a new bar, refreshing a cocktail list, hiring event staff or trying to stop inventory losses, these resources are designed to move you from question to decision faster.
            </p>
            <p>
              The guides below are connected to the MyChef services that can help you implement what you read. If a topic raises a bigger question for your venue, WhatsApp us and a bar specialist will reply within four business hours.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {VALUE_PROPS.map((prop) => (
              <div key={prop.title} className="bg-stone-50 p-6 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <prop.icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{prop.title}</h3>
                <p className="text-sm text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>

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

      <BarServiceGallery images={RESOURCES_GALLERY} />

      <StickyMobileCTA
        pageSource="bar-services-resources"
        serviceName="bar services in Bali"
        intent="a consultation"
      />
    </>
  )
}
