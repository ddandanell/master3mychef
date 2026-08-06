import { ArrowRight, BookOpen, Lightbulb, TrendingUp, Users, HelpCircle, MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { BAR_RESOURCES, getBarServiceBySlug } from '@/data/bar-services'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

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
  { src: '/generated/mychef-bar-services-bali-resources-gallery-1.webp', alt: 'Bali bar manager browsing resources on a tablet at a venue desk' },
  { src: '/generated/mychef-bar-services-bali-resources-gallery-2.webp', alt: 'Collection of bar management guides, costing sheets and menu templates spread on a Bali venue table' },
  { src: '/generated/mychef-bar-services-bali-resources-gallery-3.webp', alt: 'Indonesian bartender reading a training guide during a quiet moment at a Bali bar' },
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
  {
    question: 'How often are new bar resources added?',
    answer:
      'We add guides when operators repeatedly ask the same planning questions — salaries, pour cost, opening checklists and training outlines.',
  },
  {
    question: 'Can I download everything as one ZIP?',
    answer:
      'Resources are published as individual pages for easy sharing and search. Request a bundled pack via <a href="/bar-services/contact">contact</a> if you need an offline set for a group.',
  },
  {
    question: 'Are resources suitable for hotel F&B directors?',
    answer:
      'Yes — multi-outlet and hotel bar leaders use them for internal alignment before requesting audits or training.',
  },
  {
    question: 'Do you cover zero-proof and wellness bar trends?',
    answer:
      'Menu development services include zero-proof lists. Resource pages expand as demand grows; ask if you need a current brief.',
  },
  {
    question: 'Can students or hospitality schools use these pages?',
    answer:
      'Yes for education. Commercial reuse in paid courses requires permission — contact us.',
  },
  {
    question: 'How do resources differ from the bar services FAQ hub?',
    answer:
      'Resources are deeper guides. The <a href="/bar-services/faq">FAQ hub</a> answers short operational questions and links into services.',
  },
  {
    question: 'Is registration required to read resources?',
    answer:
      'No — pages are public. Implementation support is quoted separately.',
  },
  {
    question: 'Can you create a private resource for our hotel group?',
    answer:
      'Yes under a consulting scope — branded SOPs, cost models and training decks for internal use only.',
  },
  {
    question: 'Do resources replace a bar audit?',
    answer:
      'No. They help you prepare and prioritise. An audit validates numbers on-site and produces a prioritised action list.',
  },
  {
    question: 'What should I read first as a new bar owner?',
    answer:
      'Start with costing and staffing benchmarks, then new bar setup material, then contact us for a health call before major spend.',
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

      <section className="relative py-24 md:py-32 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#0F0E0C]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,40,0.08),transparent_40%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 text-[#C5A028] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 text-[#F5F2EB]">
            Bar Services Resources
          </h1>
          <p className="text-lg text-[#F5F2EB]/70 leading-relaxed">
            Practical guides, benchmarks and checklists for running a better bar in Bali.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-[#F5F2EB]/70 leading-relaxed">
                Running a profitable bar in Bali means making dozens of interconnected decisions: how many bartenders to roster, what to pay them, how to price a cocktail, how to control shrinkage, and how to design a menu that guests remember. Our resource library is built to give venue owners, managers and event organisers clear, actionable answers to those questions.
              </p>
              <p className="text-[#F5F2EB]/70 leading-relaxed">
                Each guide combines operational frameworks with Bali-specific context — local salary bands, licensing notes, seasonal demand patterns and supplier realities. Whether you are opening a new bar, refreshing a cocktail list, hiring event staff or trying to stop inventory losses, these resources are designed to move you from question to decision faster.
              </p>
              <p className="text-[#F5F2EB]/70 leading-relaxed">
                The guides below are connected to the MyChef services that can help you implement what you read. If a topic raises a bigger question for your venue, WhatsApp us and a bar specialist will reply within four business hours.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
              <OptimizedImage
                src={RESOURCES_GALLERY[0].src}
                alt={RESOURCES_GALLERY[0].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Why read our resources
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
                Built for Bali operators
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid sm:grid-cols-2 gap-6">
                {VALUE_PROPS.map((prop) => (
                  <div
                    key={prop.title}
                    className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center mb-4">
                      <prop.icon className="w-5 h-5 text-[#C5A028]" />
                    </div>
                    <h3 className="font-semibold text-[#F5F2EB] mb-2">{prop.title}</h3>
                    <p className="text-sm text-[#F5F2EB]/60 leading-relaxed">{prop.description}</p>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
                <OptimizedImage
                  src={RESOURCES_GALLERY[1].src}
                  alt={RESOURCES_GALLERY[1].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                All guides
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
                Browse the library
              </h2>
            </div>

            {/* Mobile horizontal scroll */}
            <div className="flex md:hidden gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
              {BAR_RESOURCES.map((resource) => {
                const primaryService = getBarServiceBySlug(resource.relatedServices[0])
                return (
                  <a
                    key={resource.slug}
                    href={resource.route}
                    className="group flex-shrink-0 w-[85vw] sm:w-[70vw] bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C5A028]/30"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <OptimizedImage
                        src={resource.featuredImage}
                        alt={resource.featuredAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#F5F2EB] mb-3 group-hover:text-[#C5A028] transition-colors">
                        {resource.h1}
                      </h3>
                      <p className="text-[#F5F2EB]/60 text-sm line-clamp-2 mb-4">{resource.summary}</p>
                      {primaryService && (
                        <span className="text-xs text-[#C5A028]">{primaryService.eyebrow}</span>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Desktop magazine grid */}
            <div className="hidden md:grid gap-8">
              {BAR_RESOURCES.map((resource, index) => {
                const primaryService = getBarServiceBySlug(resource.relatedServices[0])
                const siblingResources = BAR_RESOURCES.filter((r) => r.slug !== resource.slug).slice(0, 2)
                const isReversed = index % 2 === 1

                return (
                  <article
                    key={resource.slug}
                    className={`group grid lg:grid-cols-2 gap-0 bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-[#C5A028]/30 ${
                      isReversed ? 'lg:direction-rtl' : ''
                    }`}
                  >
                    <a
                      href={resource.route}
                      className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                      <OptimizedImage
                        src={resource.featuredImage}
                        alt={resource.featuredAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0A0A0A]/40" />
                      <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
                    </a>
                    <div className={`p-8 lg:p-10 flex flex-col ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      <a href={resource.route}>
                        <h3 className="text-2xl lg:text-3xl font-playfair text-[#F5F2EB] mb-4 group-hover:text-[#C5A028] transition-colors">
                          {resource.h1}
                        </h3>
                      </a>
                      <p className="text-[#F5F2EB]/60 leading-relaxed mb-6 flex-grow">
                        {resource.summary}
                      </p>

                      {primaryService && (
                        <div className="mb-5">
                          <span className="text-[10px] uppercase tracking-[0.15em] text-[#F5F2EB]/40 block mb-2">
                            Related service
                          </span>
                          <a
                            href={primaryService.route}
                            className="inline-flex items-center text-sm font-medium text-[#C5A028] hover:underline"
                          >
                            {primaryService.eyebrow}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      )}

                      <div className="mb-6">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#F5F2EB]/40 block mb-2">
                          Related guides
                        </span>
                        <div className="flex flex-col gap-1">
                          {siblingResources.map((r) => (
                            <a
                              key={r.slug}
                              href={r.route}
                              className="text-sm text-[#F5F2EB]/60 hover:text-[#C5A028] transition-colors"
                            >
                              {r.h1}
                            </a>
                          ))}
                        </div>
                      </div>

                      <a
                        href={resource.route}
                        className="inline-flex items-center text-sm font-medium text-[#C5A028] mt-auto"
                      >
                        Read guide
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#0A0A0A] border border-[#F5F2EB]/10 rounded-2xl p-8 md:p-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Hands-on help
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair text-[#F5F2EB] mb-4">
                Read a guide, then implement it
              </h2>
              <p className="text-[#F5F2EB]/70 mb-8 leading-relaxed">
                Every resource links to the MyChef service that can turn the advice into action. If you would rather have a specialist handle the implementation, WhatsApp us and we will scope the work.
              </p>
              <a
                href="/bar-services/contact/"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C5A028] hover:bg-[#C5A028]/90 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300"
              >
                Talk to a Bar Specialist
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
              <OptimizedImage
                src={RESOURCES_GALLERY[2].src}
                alt={RESOURCES_GALLERY[2].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Questions about our bar resources
            </h2>
          </div>
          <FAQAccordion items={RESOURCES_FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} dark showToc ctaEvery={5} />
          <div className="mt-10 text-center">
            <a
              href="/bar-services/faq/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 font-medium rounded-lg transition-all duration-300"
            >
              <HelpCircle className="w-4 h-4" />
              View all bar services FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section className="py-16 md:py-24 bg-[#C5A028]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#0A0A0A] mb-4">
            Want a specialist to handle the implementation?
          </h2>
          <p className="text-[#0A0A0A]/80 mb-8 text-lg">
            Tell us which guide you read and we will scope the work for your venue.
          </p>
          <a
            href={buildWhatsAppUrl({ serviceName: 'bar services in Bali', intent: 'a consultation' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-[#F5F2EB] font-semibold rounded-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp a Bar Specialist
          </a>
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
