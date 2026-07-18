import { ArrowRight, HelpCircle, MessageCircle, BookOpen } from 'lucide-react'
import SeoHead, { breadcrumbSchema, serviceSchema, faqPageSchema, professionalServiceSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { BarServiceImageSection, BarServiceSubNav } from '@/components/bar-services'
import { getPageMeta } from '@/data/page-meta'
import { BAR_SERVICES_HUB, getBarServiceBySlug } from '@/data/bar-services'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'bar consulting in Bali', intent: 'a bar services consultation' })

const UTILITY_CARDS = [
  {
    eyebrow: 'Questions',
    title: 'Bar Services FAQ',
    description: 'Answers about pricing, staffing laws, licences, events and more.',
    href: '/bar-services/faq/',
    icon: HelpCircle,
  },
  {
    eyebrow: 'Talk to us',
    title: 'Contact',
    description: 'WhatsApp, email or enquiry form — get a reply within one business day.',
    href: '/bar-services/contact/',
    icon: MessageCircle,
  },
  {
    eyebrow: 'Free guides',
    title: 'Resources',
    description: 'Benchmarks, checklists and how-to guides for Bali bar operators.',
    href: '/bar-services/resources/',
    icon: BookOpen,
  },
]

const HUB_FAQS = [
  {
    question: 'What bar services does MyChef offer in Bali?',
    answer:
      'We offer bar audits, costing and inventory control, cocktail menu development, signature cocktail creation, bar staff training, temporary bartender staffing, permanent bar staff recruitment, new bar setup, monthly bar management support, bar equipment supply and rental, and the complete bar performance programme.',
  },
  {
    question: 'Do you only work with hotels and restaurants?',
    answer:
      'No. We work with boutique hotels, luxury villas, beach clubs, restaurants, cafés, wedding organisers, villa-management companies, yacht charters and private estates across Bali.',
  },
  {
    question: 'How quickly can you respond to a bar staffing emergency?',
    answer:
      'For temporary bartender staffing we can usually confirm availability within a few hours and deploy vetted staff for events with reasonable lead time. Urgent venue cover requests are prioritised and handled through WhatsApp.',
  },
  {
    question: 'Are your bartenders employed by MyChef or by the venue?',
    answer:
      'Temporary staff are employed by MyChef, so payroll, BPJS and compliance sit with us. Permanent recruitment places a candidate as a direct venue hire once the trial period is complete.',
  },
  {
    question: 'How do I get a proposal for my venue?',
    answer:
      'Message us on WhatsApp with your venue type, location, the service you need and your preferred timeline. A bar specialist will reply within four business hours with tailored next steps or a written proposal.',
  },
]

export default function BarServicesHubPage() {
  const meta = getPageMeta('bar-services-hub')
  const { hero, groups, expandedCopy, galleryImages, whyUs, process, proof } = BAR_SERVICES_HUB
  const hubImages = galleryImages ?? []

  const groupedServices = groups.map((group) => ({
    ...group,
    items: group.services
      .map((slug) => getBarServiceBySlug(slug))
      .filter((service): service is NonNullable<ReturnType<typeof getBarServiceBySlug>> => Boolean(service)),
  }))

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        ogImage={meta.ogImage}
        jsonLd={[
          breadcrumbSchema('Bar Services', meta.canonical ?? `${SITE}/bar-services/`),
          professionalServiceSchema(
            meta.canonical ?? `${SITE}/bar-services/`,
            meta.ogImage ?? `${SITE}/generated/mychef-bar-services-bali-og-hub.jpg`,
            groupedServices.flatMap((g) => g.items.map((s) => ({ name: s.eyebrow, url: `${SITE}${s.route}` }))),
          ),
          serviceSchema(hero.h1, meta.description, meta.canonical ?? `${SITE}/bar-services/`),
          faqPageSchema(HUB_FAQS),
        ]}
      />
      <Breadcrumb items={[{ label: 'Bar Services', href: '/bar-services/' }]} />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <OptimizedImage
          src={hero.heroImage}
          alt={hero.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 py-24">
          <span className="text-sm uppercase tracking-widest text-amber-400 mb-4 block">
            {hero.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 max-w-3xl">
            {hero.h1}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="#all-services"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 font-medium rounded"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
      <BarServiceSubNav />

      {/* Expanded copy */}
      {expandedCopy && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 space-y-16 md:space-y-24">
            <div>
              <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">Bar consultant Bali</span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                {expandedCopy.intro.title}
              </h2>
              <div className="max-w-3xl space-y-4 text-[#4A4745]">
                {expandedCopy.intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">{expandedCopy.whyNow.title}</h2>
                <div className="space-y-4 text-[#4A4745]">
                  {expandedCopy.whyNow.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">{expandedCopy.whyMyChef.title}</h2>
                <div className="space-y-4 text-[#4A4745]">
                  {expandedCopy.whyMyChef.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-6 md:p-10 rounded-lg">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">{expandedCopy.howWeWork.title}</h2>
              <div className="max-w-3xl space-y-4 text-[#4A4745]">
                {expandedCopy.howWeWork.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">{expandedCopy.cta.title}</h2>
              <div className="space-y-4 text-[#4A4745] mb-8">
                {expandedCopy.cta.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      )}

      {/* All Bar Services discovery grid */}
      <section id="all-services" className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
              All services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Every bar service your venue might need
            </h2>
          </div>

          <div className="space-y-16">
            {groupedServices.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-serif text-gray-900 mb-6">{group.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((service) => (
                    <a
                      key={service.slug}
                      href={service.route}
                      className="group block bg-white p-6 rounded-lg hover:shadow-md transition"
                    >
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-amber-600">
                        {service.eyebrow}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">{service.valueProp}</p>
                      <span className="inline-flex items-center text-sm font-medium text-amber-600">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">Help & guidance</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {UTILITY_CARDS.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    className="group block bg-white p-6 rounded-lg hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <card.icon className="w-5 h-5 text-amber-600" />
                      <span className="text-xs uppercase tracking-wider text-amber-600">{card.eyebrow}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-amber-600">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-amber-600">
                      Open
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
              Why us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">{whyUs.title}</h2>
          </div>
          <BarServiceImageSection image={hubImages[0]} imagePosition="right" bgColor="white">
            <div className="space-y-6">
              {whyUs.items.map((item) => (
                <div key={item.title} className="bg-stone-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </BarServiceImageSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
              How we work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Our process</h2>
          </div>
          <BarServiceImageSection image={hubImages[1]} imagePosition="left" bgColor="stone">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {process.map((step) => (
                <div key={step.step} className="relative">
                  <span className="text-5xl font-serif text-amber-200 absolute -top-6 -left-2">
                    {step.step}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </BarServiceImageSection>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">{proof.title}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {proof.items.map((item, i) => (
              <div key={i} className="border-l-4 border-amber-500 pl-6">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <OptimizedImage
              src={hubImages[2].src}
              alt={hubImages[2].alt}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Resources teaser */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Free guides for Bali bar operators
          </h2>
          <p className="text-gray-600 mb-8">
            Benchmarks, checklists and how-to guides to help you run a tighter bar.
          </p>
          <a
            href="/bar-services/resources/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded"
          >
            Browse Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Common questions about bar services in Bali
            </h2>
          </div>
          <FAQAccordion items={HUB_FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} />
          <div className="mt-10 text-center">
            <a
              href="/bar-services/faq/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-50 font-medium rounded"
            >
              <HelpCircle className="w-4 h-4" />
              View all FAQs
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-amber-500">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
            Ready to improve your bar?
          </h2>
          <p className="text-black/80 mb-8">
            Tell us about your venue and we will match you to the right service.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white font-medium rounded"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="bar-services-hub"
        serviceName="bar consulting in Bali"
        intent="a bar services consultation"
      />
    </>
  )
}
