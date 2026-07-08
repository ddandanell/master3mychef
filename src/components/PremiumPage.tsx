import OptimizedImage from '@/components/OptimizedImage'
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
import type { ReactNode, ElementType } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight, Star, Clock, Shield, Users, Phone, Mail, Calendar } from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from './SeoHead'
import FAQAccordion from './catering/FAQAccordion'
import { Button } from '@/components/ui/button'
import Breadcrumb from '@/components/shared/Breadcrumb'
import PriceDisclaimer from './PriceDisclaimer'

const SITE = 'https://mychef.id'
const WA = '6289674072020'

export interface PageAction {
  label: string
  href: string
  external?: boolean
}

export interface PageProfile {
  name: string
  role: string
  specialty: string
  bio: string
  achievements: string[]
  badge?: string
  image?: string
  imageAlt?: string
  slug?: string
}

export interface PageSection {
  id: string
  type: 'hero' | 'content' | 'features' | 'profiles' | 'gallery' | 'testimonials' | 'cta' | 'faq' | 'related' | 'custom'
  title?: string
  subtitle?: string
  body?: string
  image?: string
  imageAlt?: string
  features?: { icon: ElementType; title: string; desc: string }[]
  profiles?: PageProfile[]
  testimonials?: { name: string; location: string; text: string; rating?: number }[]
  links?: { label: string; href: string; desc?: string }[]
  render?: ReactNode
  primaryAction?: PageAction
  secondaryAction?: PageAction
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
  seoTitle?: string
  seoDescription?: string
  canonicalUrl?: string
  extraJsonLd?: Record<string, unknown>[]
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
  seoTitle,
  seoDescription,
  canonicalUrl,
  extraJsonLd,
}: PremiumPageProps) {
  const canonical = canonicalUrl || `${SITE}/${slug}`
  const metaTitle = seoTitle || `${title} | myCHEF`
  const metaDescription = seoDescription || description
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hi myCHEF, I'm interested in ${title}. Can you help me?`
  )}`

  const schemas: Record<string, unknown>[] = [
    breadcrumbSchema(title, canonical),
    serviceSchema(title, metaDescription, canonical),
    aggregateRatingSchema(4.9, 560),
  ]
  if (faqs && faqs.length > 0) {
    schemas.push(faqPageSchema(faqs))
  }
  if (extraJsonLd && extraJsonLd.length > 0) {
    schemas.push(...extraJsonLd)
  }

  const renderAction = (
    action: PageAction,
    variant: 'primary' | 'secondary'
  ) => {
    const isExternal = action.external || /^(https?:|mailto:|tel:)/.test(action.href)
    const buttonVariant = variant === 'primary' ? 'whatsapp' : 'secondary'
    const content = (
      <>
        {variant === 'primary' && <MessageCircle className="w-4 h-4" />}
        {action.label}
        {variant === 'secondary' && <ArrowRight className="w-4 h-4" />}
      </>
    )

    if (isExternal) {
      return (
        <Button
          key={`${variant}-${action.href}`}
          asChild
          variant={buttonVariant}
          size="brand"
          className="w-full sm:w-auto"
        >
          <a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            data-source={`premium-${slug}-${variant}-action`}
          >
            {content}
          </a>
        </Button>
      )
    }

    return (
      <Button
        key={`${variant}-${action.href}`}
        asChild
        variant={buttonVariant}
        size="brand"
        className="w-full sm:w-auto"
      >
        <Link to={action.href}>{content}</Link>
      </Button>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        ogImage={ogImage}
        noindex={noindex}
        jsonLd={schemas}
      />

      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        {heroImage && (
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={heroImageAlt || h1}
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-black/20 md:hidden" />
          </div>
        )}
        <div className="relative z-10 w-full px-6 md:px-12 py-16 md:py-24 pt-32">
          <div className="max-w-[900px]">
            <Breadcrumb items={[{ label: title }]} theme="dark" className="px-0 pt-0 pb-8" />
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">
              myCHEF — {keywords[0] || 'Bali'}
            </p>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              {h1}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/[80%] max-w-[600px] mb-8">
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
              <Button asChild variant="whatsapp" size="brand" className="w-full sm:w-auto">
                <a href={waLink} target="_blank" rel="noopener noreferrer" data-source={`premium-${slug}-section-cta`}>
                  <MessageCircle className="w-4 h-4" />
                  {ctaText}
                </a>
              </Button>
              <Button asChild variant="secondary" size="brand" className="w-full sm:w-auto">
                <Link to="/quote">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-6">
              <PriceDisclaimer />
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
            <div key={text} className="flex items-center gap-2 text-white/[60%] text-sm">
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
                    <OptimizedImage
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      className="w-full rounded-2xl shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Content text-only layout (no image) */}
              {section.type === 'content' && !section.image && (
                <div className="max-w-[740px] mx-auto">
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

              {/* Chef profiles */}
              {section.type === 'profiles' && section.profiles && (
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
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {section.profiles.map((profile) => (
                      <article
                        key={profile.name}
                        className="overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-sm"
                      >
                        <div className="aspect-[4/5] bg-gradient-to-br from-[#1A1A1A] via-[#3A3429] to-[#C5A028]/70">
                          {profile.image ? (
                            <OptimizedImage
                              src={profile.image}
                              alt={profile.imageAlt || profile.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center font-playfair text-6xl text-white/[80%]">
                              {profile.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="p-6 md:p-7">
                          <span className="inline-flex items-center rounded-full bg-[#C5A028]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#8B6F1A]">
                            {profile.role}
                          </span>
                          <h3 className="font-playfair text-2xl mt-4">{profile.name}</h3>
                          <p className="mt-2 text-sm font-semibold uppercase tracking-[2px] text-[#8B6F1A]">
                            {profile.specialty}
                          </p>
                          {profile.badge && (
                            <p className="mt-3 text-sm text-[#4A4745]">{profile.badge}</p>
                          )}
                          <p className="mt-4 text-sm leading-relaxed text-[#4A4745]">
                            {profile.bio}
                          </p>
                          <ul className="mt-6 space-y-2">
                            {profile.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-start gap-2 text-sm text-[#4A4745]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A028]" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          {profile.slug && (
                            <Link
                              to={`/chefs/${profile.slug}`}
                              data-source={`premium-${slug}-profile-${profile.slug}`}
                              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[2px] text-[#8B6F1A] hover:text-[#C5A028] transition-colors"
                            >
                              View {profile.name}&rsquo;s profile
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </article>
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
                    {renderAction(
                      section.primaryAction || {
                        label: ctaText,
                        href: waLink,
                        external: true,
                      },
                      'primary'
                    )}
                    {renderAction(
                      section.secondaryAction || {
                        label: 'Get a Quote',
                        href: '/quote',
                      },
                      'secondary'
                    )}
                  </div>
                </div>
              )}

              {/* Custom section */}
              {section.type === 'custom' && section.render && (
                <div className="mx-auto max-w-[980px]">
                  {section.subtitle && (
                    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">
                      {section.subtitle}
                    </p>
                  )}
                  {section.title && (
                    <h2 className="font-playfair text-3xl md:text-4xl text-center mb-4">
                      {section.title}
                    </h2>
                  )}
                  {section.body && (
                    <p className={`mx-auto max-w-3xl text-center leading-relaxed ${isDark ? 'text-white/[75%]' : 'text-[#4A4745]'}`}>
                      {section.body}
                    </p>
                  )}
                  <div className={section.title || section.body ? 'mt-10' : ''}>{section.render}</div>
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
                        className="group bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
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
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
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
          <p className="text-white/[60%] mb-8">{ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="whatsapp" size="brand" className="w-full sm:w-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-source={`premium-${slug}-final-cta`}>
                <MessageCircle className="w-4 h-4" />
                {ctaText}
              </a>
            </Button>
            <Button asChild variant="secondary" size="brand" className="w-full sm:w-auto">
              <Link to="/book">
                <Calendar className="w-4 h-4" />
                Book Online
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex justify-center">
            <PriceDisclaimer className="text-white/[60%]" />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/[40%]">
            <a href={`tel:${WA}`} className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Phone className="w-4 h-4" /> +62 896-7407-2020
            </a>
            <a href="mailto:indonesia@mychef.id" className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Mail className="w-4 h-4" /> indonesia@mychef.id
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
