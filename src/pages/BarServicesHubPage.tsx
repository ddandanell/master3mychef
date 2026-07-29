import { ArrowRight, HelpCircle, MessageCircle, BookOpen, Building2, Home, Waves, UtensilsCrossed, PartyPopper, ChevronDown, Star, ShieldCheck, TrendingUp } from 'lucide-react'
import SeoHead, { breadcrumbSchema, serviceWithOfferSchema, faqPageSchema, professionalServiceSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import { Button } from '@/components/ui/button'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { BarServiceSubNav } from '@/components/bar-services'
import { getPageMeta } from '@/data/page-meta'
import { BAR_SERVICES_HUB, BAR_RESOURCES, getBarServiceBySlug } from '@/data/bar-services'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import { downgradeArticleH1 } from '@/lib/utils'
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

const SEGMENTS = [
  {
    id: 'hotels',
    title: 'Hotels & Resorts',
    description: 'Beverage manager cover, bar audits and menu refreshes for boutique and luxury properties.',
    icon: Building2,
  },
  {
    id: 'villas',
    title: 'Villas & Estates',
    description: 'In-villa bar setups, bartender staffing and butler training for private villa experiences.',
    icon: Home,
  },
  {
    id: 'beach-clubs',
    title: 'Beach Clubs',
    description: 'High-volume costing controls, speed training and event bartender crews for day clubs.',
    icon: Waves,
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Cafés',
    description: 'Profitable cocktail menus, pour-cost systems and staff training for restaurant bars.',
    icon: UtensilsCrossed,
  },
  {
    id: 'events',
    title: 'Events & Weddings',
    description: 'Vetted event bartenders, signature cocktails and mobile bar rental for one-off occasions.',
    icon: PartyPopper,
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
  const { hero, groups, expandedCopy, whyUs, process, proof } = BAR_SERVICES_HUB
  const articleHtml = ARTICLE_CONTENT['/bar-services/']

  const groupedServices = groups.map((group) => ({
    ...group,
    items: group.services
      .map((slug) => getBarServiceBySlug(slug))
      .filter((service): service is NonNullable<ReturnType<typeof getBarServiceBySlug>> => Boolean(service)),
  }))

  const featuredResources = BAR_RESOURCES.slice(0, 4)

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
          serviceWithOfferSchema({
            name: hero.h1,
            description: meta.description,
            url: meta.canonical ?? `${SITE}/bar-services/`,
            price: '2750000',
            unitText: 'per person',
          }),
          faqPageSchema(HUB_FAQS),
        ]}
      />
      <Breadcrumb items={[{ label: 'Bar Services', href: '/bar-services/' }]} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src={hero.heroImage}
          alt={hero.heroAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 text-[#C5A028] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            {hero.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-[#F5F2EB] mb-6 max-w-4xl leading-[1.1]">
            {hero.h1}
          </h1>
          <p className="text-lg md:text-xl text-[#F5F2EB]/80 max-w-2xl mb-10 leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] hover:bg-[#C5A028]/90 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,40,0.3)]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="#all-services"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 font-medium rounded-lg transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
        <a
          href="#who-we-serve"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#F5F2EB]/50 hover:text-[#C5A028] transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </section>
      <BarServiceSubNav />

      {/* Expanded copy */}
      {expandedCopy && (
        <section className="py-20 md:py-32 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
            <div className="max-w-4xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Bar consultant Bali
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB] mb-8 leading-tight">
                {expandedCopy.intro.title}
              </h2>
              <div className="space-y-5 text-[#F5F2EB]/70 text-base md:text-lg leading-relaxed">
                {expandedCopy.intro.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-6">
                  {expandedCopy.whyNow.title}
                </h2>
                <div className="space-y-4 text-[#F5F2EB]/70 leading-relaxed">
                  {expandedCopy.whyNow.paragraphs.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
              <div className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-6">
                  {expandedCopy.whyMyChef.title}
                </h2>
                <div className="space-y-4 text-[#F5F2EB]/70 leading-relaxed">
                  {expandedCopy.whyMyChef.paragraphs.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#0F0E0C] border border-[#C5A028]/15 p-8 md:p-12 lg:p-16 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-6">
                {expandedCopy.howWeWork.title}
              </h2>
              <div className="max-w-3xl space-y-4 text-[#F5F2EB]/70 leading-relaxed">
                {expandedCopy.howWeWork.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-playfair text-[#F5F2EB] mb-6">
                {expandedCopy.cta.title}
              </h2>
              <div className="space-y-4 text-[#F5F2EB]/70 mb-10 leading-relaxed">
                {expandedCopy.cta.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] hover:bg-[#C5A028]/90 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,40,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Article body from mychef-seo content */}
      {articleHtml && (
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div
              className="prose prose-invert prose-stone max-w-none text-[#F5F2EB]/80 prose-headings:font-playfair prose-headings:text-[#F5F2EB] prose-h2:mb-6 prose-h2:mt-16 prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-2xl prose-p:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:leading-relaxed prose-strong:text-[#F5F2EB] prose-a:font-medium prose-a:text-[#C5A028] prose-a:no-underline hover:prose-a:underline prose-blockquote:rounded-r-2xl prose-blockquote:border-l-[#C5A028] prose-blockquote:bg-[#1A1A1A]/60 prose-blockquote:p-6 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28"
              dangerouslySetInnerHTML={{ __html: downgradeArticleH1(articleHtml) }}
            />
          </div>
        </section>
      )}

      {/* Who we serve */}
      <section id="who-we-serve" className="py-20 md:py-32 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              Who we serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Bar services built for Bali venue operators
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SEGMENTS.map((segment) => (
              <div
                key={segment.id}
                id={segment.id}
                className="group bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] scroll-mt-32"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#C5A028]/20">
                  <segment.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F2EB] mb-3">{segment.title}</h3>
                <p className="text-[#F5F2EB]/60 text-sm leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Bar Services discovery grid */}
      <section id="all-services" className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              All services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Every bar service your venue might need
            </h2>
          </div>

          <div className="space-y-16 md:space-y-20">
            {groupedServices.map((group) => (
              <div key={group.title} id={group.title.toLowerCase()}>
                <h3 className="text-xl md:text-2xl font-playfair text-[#F5F2EB] mb-6 md:mb-8 border-b border-[#F5F2EB]/10 pb-3">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                  {group.items.map((service) => (
                    <article
                      key={service.slug}
                      className="group flex flex-col bg-[#141312] border border-[#F5F2EB]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    >
                      <div className="relative overflow-hidden">
                        <OptimizedImage
                          src={service.heroImage}
                          alt={service.heroAlt}
                          className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent" />
                      </div>
                      <div className="flex flex-col flex-1 p-5 md:p-6">
                        <span className="text-[#C5A028] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                          {service.eyebrow}
                        </span>
                        <h4 className="text-lg md:text-xl font-semibold text-[#F5F2EB] mb-2 leading-tight">
                          {service.h1}
                        </h4>
                        <p className="text-[#F5F2EB]/60 text-sm leading-relaxed mb-5 flex-1">
                          {service.valueProp}
                        </p>
                        <Button asChild variant="primary" className="w-full rounded-lg">
                          <a href={service.route}>
                            View service
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-xl md:text-2xl font-playfair text-[#F5F2EB] mb-6 md:mb-8 border-b border-[#F5F2EB]/10 pb-3">
                Help & guidance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                {UTILITY_CARDS.map((card) => (
                  <article
                    key={card.title}
                    className="group flex flex-col bg-[#141312] border border-[#F5F2EB]/10 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center">
                        <card.icon className="w-5 h-5 text-[#C5A028]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-semibold">
                        {card.eyebrow}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-[#F5F2EB] mb-2">
                      {card.title}
                    </h4>
                    <p className="text-[#F5F2EB]/60 text-sm leading-relaxed mb-5 flex-1">
                      {card.description}
                    </p>
                    <Button asChild variant="secondary" className="w-full rounded-lg">
                      <a href={card.href}>
                        Open
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-32 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              Why us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">{whyUs.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyUs.items.map((item) => (
              <div
                key={item.title}
                className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30"
              >
                <h3 className="text-xl font-semibold text-[#F5F2EB] mb-3">{item.title}</h3>
                <p className="text-[#F5F2EB]/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              How we work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">Our process</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-[#C5A028]/20" />
            <div className="space-y-10">
              {process.map((step) => (
                <div key={step.step} className="relative flex gap-6 md:gap-10">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0F0E0C] border border-[#C5A028]/40 flex items-center justify-center">
                    <span className="text-sm md:text-lg font-playfair text-[#C5A028]">{step.step}</span>
                  </div>
                  <div className="pt-1 md:pt-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#F5F2EB] mb-2">{step.title}</h3>
                    <p className="text-[#F5F2EB]/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-32 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-16 text-center text-[#F5F2EB]">
            {proof.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {proof.items.map((item, i) => {
              const icons = [Star, ShieldCheck, TrendingUp]
              const Icon = icons[i] ?? Star
              return (
                <div
                  key={i}
                  className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 rounded-2xl backdrop-blur-sm text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-[#C5A028]" />
                  </div>
                  <p className="text-lg md:text-xl text-[#F5F2EB] font-medium leading-snug">{item}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources teaser */}
      <section className="py-20 md:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Resources
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB] mb-4">
                Free guides for Bali bar operators
              </h2>
              <p className="text-[#F5F2EB]/60 leading-relaxed">
                Benchmarks, checklists and how-to guides to help you run a tighter bar.
              </p>
            </div>
            <a
              href="/bar-services/resources/"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 font-medium rounded-lg transition-all duration-300"
            >
              Browse Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="flex md:hidden gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
            {featuredResources.map((resource) => (
              <a
                key={resource.slug}
                href={resource.route}
                className="group flex-shrink-0 w-[80vw] sm:w-[60vw] min-h-[280px] relative overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${resource.featuredImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10 group-hover:ring-[#C5A028]/30 transition-colors" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold text-[#F5F2EB] mb-2 group-hover:text-[#C5A028] transition-colors">
                    {resource.h1}
                  </h3>
                  <p className="text-[#F5F2EB]/70 text-sm line-clamp-2">{resource.summary}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource) => (
              <a
                key={resource.slug}
                href={resource.route}
                className="group relative flex flex-col min-h-[320px] overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${resource.featuredImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10 group-hover:ring-[#C5A028]/30 transition-colors" />
                <div className="relative flex flex-col justify-end h-full p-6 mt-auto">
                  <h3 className="text-lg font-semibold text-[#F5F2EB] mb-2 group-hover:text-[#C5A028] transition-colors">
                    {resource.h1}
                  </h3>
                  <p className="text-[#F5F2EB]/70 text-sm line-clamp-2">{resource.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Common questions about bar services in Bali
            </h2>
          </div>
          <FAQAccordion items={HUB_FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} dark />
          <div className="mt-10 text-center">
            <a
              href="/bar-services/faq/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 font-medium rounded-lg transition-all duration-300"
            >
              <HelpCircle className="w-4 h-4" />
              View all FAQs
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[#C5A028]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#0A0A0A] mb-6">
            Ready to improve your bar?
          </h2>
          <p className="text-[#0A0A0A]/80 mb-10 text-lg">
            Tell us about your venue and we will match you to the right service.
          </p>
          <a
            href={WA_LINK}
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
        pageSource="bar-services-hub"
        serviceName="bar consulting in Bali"
        intent="a bar services consultation"
      />
    </>
  )
}
