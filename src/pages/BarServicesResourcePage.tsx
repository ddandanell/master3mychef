import { useParams } from 'react-router-dom'
import { HelpCircle, MessageCircle, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, blogPostingSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { getBarResourceBySlug, BAR_RESOURCE_SLUGS, getBarServiceBySlug } from '@/data/bar-services'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

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
        <h1 className="text-2xl font-playfair mb-4 text-[#F5F2EB]">Resource not found</h1>
        <p className="text-[#F5F2EB]/60 mb-6">
          The resource you are looking for does not exist.
        </p>
        <a href="/bar-services/resources/" className="text-[#C5A028] hover:underline">
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

  const relatedServices = resource.relatedServices
    .map((s) => getBarServiceBySlug(s))
    .filter((service): service is NonNullable<ReturnType<typeof getBarServiceBySlug>> => Boolean(service))

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

      <section className="relative min-h-[65vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={resource.featuredImage}
          alt={resource.featuredAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 text-[#C5A028] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Resource
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[#F5F2EB] max-w-4xl leading-[1.1]">
            {resource.h1}
          </h1>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-lg md:text-xl text-[#F5F2EB]/70 mb-12 leading-relaxed">
            {resource.summary}
          </p>
          <div className="prose prose-lg max-w-none prose-invert">
            {resource.content.map((section, i) => (
              <div key={i} className="mb-12">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-5">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[#F5F2EB]/70 mb-5 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {galleryImages[0] && (
            <div className="mt-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
                <OptimizedImage
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
              </div>
            </div>
          )}
        </div>
      </article>

      {resource.expandedSections && (
        <div className="bg-[#0A0A0A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-0">
              <section className="py-16 md:py-24 border-b border-[#F5F2EB]/10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                      Context
                    </span>
                    <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-6">
                      {resource.expandedSections.context.title}
                    </h2>
                    <div className="space-y-4">
                      {resource.expandedSections.context.paragraphs.map((p, i) => (
                        <p key={i} className="text-[#F5F2EB]/70 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                  {galleryImages[1] && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
                      <OptimizedImage
                        src={galleryImages[1].src}
                        alt={galleryImages[1].alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
                    </div>
                  )}
                </div>
              </section>

              <section className="py-16 md:py-24 border-b border-[#F5F2EB]/10">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                  Deep dive
                </span>
                <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-6">
                  {resource.expandedSections.deepDive.title}
                </h2>
                <div className="space-y-4">
                  {resource.expandedSections.deepDive.paragraphs.map((p, i) => (
                    <p key={i} className="text-[#F5F2EB]/70 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </section>

              <section className="py-16 md:py-24 border-b border-[#F5F2EB]/10">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                      Watch-outs
                    </span>
                    <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-6">
                      {resource.expandedSections.mistakes.title}
                    </h2>
                    <ul className="space-y-4">
                      {resource.expandedSections.mistakes.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: '#C5A028' }}
                          />
                          <span className="text-[#F5F2EB]/70 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                      Action steps
                    </span>
                    <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-6">
                      {resource.expandedSections.actionableTips.title}
                    </h2>
                    <ul className="space-y-4">
                      {resource.expandedSections.actionableTips.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: '#C5A028' }}
                          />
                          <span className="text-[#F5F2EB]/70 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {galleryImages[2] && (
                <section className="py-16 md:py-24">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
                    <OptimizedImage
                      src={galleryImages[2].src}
                      alt={galleryImages[2].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="py-16 md:py-24 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Questions about this guide
            </h2>
          </div>
          <FAQAccordion items={RESOURCE_PAGE_FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} dark />
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

      {/* Related services */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              Related services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Services connected to this guide
            </h2>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="flex md:hidden gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
            {relatedServices.map((service) => (
              <a
                key={service.slug}
                href={service.route}
                className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] min-h-[260px] overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10 group-hover:ring-[#C5A028]/30 transition-colors" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="text-[#C5A028] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                    {service.eyebrow}
                  </span>
                  <h3 className="text-lg font-semibold text-[#F5F2EB] mb-2">{service.h1}</h3>
                  <p className="text-[#F5F2EB]/70 text-sm line-clamp-2 mb-4">{service.valueProp}</p>
                  <span className="inline-flex items-center text-[#C5A028] text-sm font-medium">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {relatedServices.map((service) => (
              <a
                key={service.slug}
                href={service.route}
                className="group relative flex flex-col min-h-[320px] overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10 group-hover:ring-[#C5A028]/30 transition-colors" />
                <div className="relative flex flex-col justify-end h-full p-7 mt-auto">
                  <span className="text-[#C5A028] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                    {service.eyebrow}
                  </span>
                  <h3 className="text-xl font-semibold text-[#F5F2EB] mb-3">{service.h1}</h3>
                  <p className="text-[#F5F2EB]/70 text-sm leading-relaxed line-clamp-2 mb-4">
                    {service.valueProp}
                  </p>
                  <span className="inline-flex items-center text-[#C5A028] text-sm font-medium">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section className="py-16 md:py-24 bg-[#C5A028]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#0A0A0A] mb-4">
            Ready to implement what you have read?
          </h2>
          <p className="text-[#0A0A0A]/80 mb-8 text-lg">
            Get a tailored proposal for your venue within four business hours.
          </p>
          <a
            href={buildWhatsAppUrl({ serviceName: resource.title, intent: 'more information' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-[#F5F2EB] font-semibold rounded-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </section>

      <StickyMobileCTA
        pageSource={`bar-services-resource-${resource.slug}`}
        serviceName={resource.title}
        intent="more information"
      />
    </>
  )
}
