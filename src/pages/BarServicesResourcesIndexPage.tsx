import { ArrowRight, BookOpen, Lightbulb, TrendingUp, Users, HelpCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { BAR_RESOURCES } from '@/data/bar-services'

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

const RESOURCES_FAQS = [
  {
    question: 'Are the bar resources free to download?',
    answer:
      'Yes. Every guide, checklist and benchmark on this page is free to read and share. We keep them practical and actionable so Bali bar operators can use them immediately.',
  },
  {
    question: 'Who writes the MyChef bar resources?',
    answer:
      'Our bar resources are written by the same team that delivers our bar consulting, menu development, costing and staffing services in Bali, so the advice reflects current market conditions and real venue experience.',
  },
  {
    question: 'Can I request a resource on a topic that is not covered?',
    answer:
      'Yes. If you have a question that would help other Bali bar operators, send it via WhatsApp. Popular requests often become new guides or checklists.',
  },
  {
    question: 'How do the resources connect to MyChef services?',
    answer:
      'Each guide links to the MyChef service that can help you implement the advice. For example, a costing guide links to Bar Costing & Inventory Control, and a hiring guide links to Permanent Bar Staff Recruitment.',
  },
  {
    question: 'Do the salary and cost benchmarks apply to all of Bali?',
    answer:
      'The benchmarks are based on South Bali and Ubud hospitality market data. Remote areas or specialised venues may differ, so we always recommend confirming with a short conversation before you budget.',
  },
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
        jsonLd={[
          breadcrumbSchema('Resources', canonical, 'Bar Services', `${SITE}/bar-services/`),
          faqPageSchema(RESOURCES_FAQS),
        ]}
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <OptimizedImage
                src={RESOURCES_GALLERY[0].src}
                alt={RESOURCES_GALLERY[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
                Why read our resources
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                Built for Bali operators
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid sm:grid-cols-2 gap-6">
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <OptimizedImage
                  src={RESOURCES_GALLERY[1].src}
                  alt={RESOURCES_GALLERY[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
                All guides
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                Browse the library
              </h2>
            </div>
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

          <div className="grid md:grid-cols-2 gap-12 items-center bg-stone-50 rounded-lg p-8 md:p-12">
            <div>
              <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
                Hands-on help
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                Read a guide, then implement it
              </h2>
              <p className="text-gray-700 mb-6">
                Every resource links to the MyChef service that can turn the advice into action. If you would rather have a specialist handle the implementation, WhatsApp us and we will scope the work.
              </p>
              <a
                href="/bar-services/contact/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded"
              >
                Talk to a Bar Specialist
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <OptimizedImage
                src={RESOURCES_GALLERY[2].src}
                alt={RESOURCES_GALLERY[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Questions about our bar resources
            </h2>
          </div>
          <FAQAccordion items={RESOURCES_FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} />
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

      <StickyMobileCTA
        pageSource="bar-services-resources"
        serviceName="bar services in Bali"
        intent="a consultation"
      />
    </>
  )
}
