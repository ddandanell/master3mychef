/**
 * PremiumPage — Full-featured page template for myCHEF
 * 
 * Use this for all info/utility pages that need 8-12 sections:
 * /about, /chefs, /faq, /pricing, /reviews, /why-mychef, /retreats, etc.
 * 
 * Each page gets:
 * - Hero with background image
 * - Trust indicators
 * - Content sections with purpose
 * - FAQ accordion
 * - CTA sections
 * - Internal linking
 * - Full SEO schema
 */
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight, Star, Clock, Shield, Users, Phone, Mail, Calendar } from 'lucide-react'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from './SeoHead'
import FAQAccordion from './catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

export interface PageSection {
  id: string
  type: 'hero' | 'content' | 'features' | 'gallery' | 'testimonials' | 'cta' | 'faq' | 'related'
  title?: string
  subtitle?: string
  body?: string
  image?: string
  imageAlt?: string
  features?: { icon: any; title: string; desc: string }[]
  testimonials?: { name: string; location: string; text: string; rating?: number }[]
  links?: { label: string; href: string; desc?: string }[]
  bg?: 'light' | 'dark' | 'accent'
}

export interface PremiumPageProps {
  slug: string
  title: string
  description: string
  h1: string
  subtitle?: string
  heroImage?: string
  heroImageAlt?: string
  ogImage?: string
  keywords: string[]
  highlights?: string[]
  sections: PageSection[]
  faqs?: { question: string; answer: string }[]
  relatedPages?: { label: string; href: string; desc: string }[]
  ctaText?: string
  ctaSubtext?: string
  noindex?: boolean
}

export default function PremiumPage({
  slug,
  title,
  description,
  h1,
  subtitle,
  heroImage,
  heroImageAlt,
  ogImage,
  keywords,
  highlights,
  sections,
  faqs,
  relatedPages,
  ctaText = 'Chat on WhatsApp',
  ctaSubtext = 'We reply within the hour',
  noindex,
}: PremiumPageProps) {
  const canonical = `${SITE}/${slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hi myCHEF, I'm interested in ${title}. Can you help me?`
  )}`

  const schemas: Record<string, unknown>[] = [
    localBusinessSchema,
    breadcrumbSchema(title, canonical),
    serviceSchema(title, description, canonical),
    aggregateRatingSchema(4.9, 500),
  ]
  if (faqs && faqs.length > 0) {
    schemas.push(faqPageSchema(faqs))
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={`${title} | myCHEF`}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        noindex={noindex}
        jsonLd={schemas}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={heroImageAlt || h1}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>
        )}
        <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24 pt-32">
          <div className="max-w-[900px]">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">
              myCHEF — {keywords[0] || 'Bali'}
            </p>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              {h1}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/80 max-w-[600px] mb-8">
                {subtitle}
              </p>
            )}
            {highlights && highlights.length > 0 && (
              <ul className="flex flex-wrap gap-3 mb-8">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C5A028]" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {ctaText}
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#0A0A0A] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: Star, text: '4.9 Rating (500+ Reviews)' },
            { icon: Users, text: '12,000+ Guests Served' },
            { icon: Shield, text: 'Background-Checked Team' },
            { icon: Clock, text: 'Same-Day Response' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
              <Icon className="w-4 h-4 text-[#C5A028]" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── DYNAMIC SECTIONS ── */}
      {sections.map((section, idx) => {
        const isDark = section.bg === 'dark'
        const isAccent = section.bg === 'accent'
        const bgClass = isDark
          ? 'bg-[#0A0A0A] text-white'
          : isAccent
          ? 'bg-[#C5A028]/10'
          : 'bg-[#FAFAF8]'

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 md:py-24 ${bgClass} ${idx % 2 === 1 && !isDark && !isAccent ? 'bg-white' : ''}`}
          >
            <div className="max-w-[1200px] mx-auto px-6">
              {/* Content + Image layout */}
              {section.type === 'content' && section.image && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={idx % 2 === 0 ? 'order-1' : 'order-2'}>
                    {section.subtitle && (
                      <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">
                        {section.subtitle}
                      </p>
                    )}
                    {section.title && (
                      <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                        {section.title}
                      </h2>
                    )}
                    {section.body && (
                      <div
                        className="text-[#4A4745] leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ __html: section.body }}
                      />
                    )}
                  </div>
                  <div className={idx % 2 === 0 ? 'order-2' : 'order-1'}>
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      className="w-full rounded-2xl shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Features grid */}
              {section.type === 'features' && section.features && (
                <div>
                  {section.subtitle && (
                    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">
                      {section.subtitle}
                    </p>
                  )}
                  {section.title && (
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
                      {section.title}
                    </h2>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.features.map((f) => (
                      <div
                        key={f.title}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-black/5"
                      >
                        <f.icon className="w-8 h-8 text-[#C5A028] mb-4" />
                        <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                        <p className="text-[#4A4745] text-sm leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              {section.type === 'testimonials' && section.testimonials && (
                <div>
                  {section.subtitle && (
                    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">
                      {section.subtitle}
                    </p>
                  )}
                  {section.title && (
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
                      {section.title}
                    </h2>
                  )}
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.testimonials.map((t) => (
                      <div
                        key={t.name}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-black/5"
                      >
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: t.rating || 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-[#C5A028] fill-[#C5A028]"
                            />
                          ))}
                        </div>
                        <p className="text-[#4A4745] mb-6 italic leading-relaxed">
                          "{t.text}"
                        </p>
                        <div>
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-sm text-[#4A4745]">{t.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA section */}
              {section.type === 'cta' && (
                <div className="text-center max-w-[700px] mx-auto">
                  {section.subtitle && (
                    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">
                      {section.subtitle}
                    </p>
                  )}
                  {section.title && (
                    <h2 className="font-playfair text-3xl md:text-5xl mb-6">
                      {section.title}
                    </h2>
                  )}
                  {section.body && (
                    <p className="text-lg text-[#4A4745] mb-8">{section.body}</p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {ctaText}
                    </a>
                    <Link
                      to="/quote"
                      className="inline-flex items-center justify-center gap-2 border border-current font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Related pages */}
              {section.type === 'related' && section.links && (
                <div>
                  {section.title && (
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
                      {section.title}
                    </h2>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="group bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors">
                          {link.label}
                        </h3>
                        {link.desc && (
                          <p className="text-sm text-[#4A4745]">{link.desc}</p>
                        )}
                        <ArrowRight className="w-4 h-4 mt-4 text-[#C5A028] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* ── FAQ ── */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">
              Questions
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
              Frequently Asked
            </h2>
            <FAQAccordion items={faqs.map(f => ({ q: f.question, a: f.answer }))} />
          </div>
        </section>
      )}

      {/* ── RELATED PAGES ── */}
      {relatedPages && relatedPages.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
              Explore More
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors">
                    {page.label}
                  </h3>
                  <p className="text-sm text-[#4A4745]">{page.desc}</p>
                  <ArrowRight className="w-4 h-4 mt-4 text-[#C5A028] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 mb-8">{ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {ctaText}
            </a>
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Online
            </Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/40">
            <a href={`tel:${WA}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> +62 822-3756-5997
            </a>
            <a href="mailto:indonesia@mychef.id" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> indonesia@mychef.id
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
