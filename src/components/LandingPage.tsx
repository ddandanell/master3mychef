import { useMemo } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Check, ChevronLeft, ChevronRight, Clock3, MessageCircle, Utensils } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceSchema, serviceWithAggregateOfferSchema } from './SeoHead'
import { BLOG_POSTS, GUIDES, LANDING_PAGES } from '@/data/sitemap'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import { CHEF_FOR_HIRE_INDONESIA_CONTENT } from '@/data/content/chefForHireIndonesia'
import Breadcrumb from './shared/Breadcrumb'
import { type EnrichedPost, enrichPost, formatBlogDate, getRelatedPosts, injectContentEnhancements, sortPostsByDate } from '@/lib/blog'

const SITE = 'https://mychef.id'
const WA = '6289674072020'

/** Canonical overrides for legacy SEO landing pages that consolidate onto pillar pages. */
const CANONICAL_OVERRIDES: Record<string, string> = {
  'private-tasting-menu-bali': `${SITE}/fine-dining/tasting-menu`,
  'chef-table-experience-bali': `${SITE}/fine-dining/chefs-table`,
}
const AUTHOR = 'myCHEF Team'
const GUIDE_ENTRIES = sortPostsByDate(GUIDES.filter((guide) => guide.slug !== 'guide/private-chef-bali').map((guide) => enrichPost(guide, 'guide')))
const BLOG_ENTRIES = sortPostsByDate(BLOG_POSTS.map((post) => enrichPost(post, 'blog')))
const RELATED_ENTRIES = sortPostsByDate([...GUIDE_ENTRIES, ...BLOG_ENTRIES])

export default function LandingPage({ kind = 'landing' }: { kind?: 'landing' | 'guide' | 'blog' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  const isArticle = kind === 'guide' || kind === 'blog'

  const entry = useMemo(() => {
    if (kind === 'landing') return LANDING_PAGES.find((page) => page.slug === slug)
    if (kind === 'guide') return GUIDE_ENTRIES.find((page) => page.slug === slug)
    return BLOG_ENTRIES.find((page) => page.slug === slug)
  }, [kind, slug])

  if (!entry) return <Navigate to="/404" replace />

  const articleEntry: EnrichedPost | null = isArticle && 'readTimeMinutes' in entry ? (entry as EnrichedPost) : null
  const isChefForHireIndonesia = kind === 'landing' && entry.slug === 'chef-for-hire-indonesia'
  const canonical = CANONICAL_OVERRIDES[entry.slug] ?? `${SITE}/${entry.slug}`
  const heroImage = kind === 'landing' ? '/generated/hero-how-it-works.webp' : '/generated/luna-hero-v3.webp'
  const hubPath = kind === 'blog' ? '/journal' : kind === 'guide' ? '/help' : '/'
  const hubLabel = kind === 'blog' ? 'Journal' : kind === 'guide' ? 'Help' : 'Home'
  const hubCtaLabel = kind === 'blog' ? 'View All Journal Entries' : kind === 'guide' ? 'View All Help Guides' : 'View All Pages'
  const backLabel = kind === 'blog' ? 'Back to Blog' : kind === 'guide' ? 'Back to Help' : 'Back to Home'
  const shareText = `Reading ${entry.title} on myCHEF`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'm reading "${entry.title}" and have a question.`)}`
  const shareLinks = articleEntry
    ? {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(`${entry.title} — ${canonical}`)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonical)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(canonical)}`,
      }
    : null
  const orderedEntries = kind === 'guide' ? GUIDE_ENTRIES : kind === 'blog' ? BLOG_ENTRIES : []
  const currentIndex = articleEntry ? orderedEntries.findIndex((post) => post.slug === articleEntry.slug) : -1
  const previousEntry = currentIndex > 0 ? orderedEntries[currentIndex - 1] : null
  const nextEntry = currentIndex >= 0 && currentIndex < orderedEntries.length - 1 ? orderedEntries[currentIndex + 1] : null
  const relatedEntries = articleEntry ? getRelatedPosts(RELATED_ENTRIES, articleEntry, 3) : []
  const enhancedContent = isChefForHireIndonesia
    ? CHEF_FOR_HIRE_INDONESIA_CONTENT
    : articleEntry?.content
      ? injectContentEnhancements(articleEntry.content, articleEntry.headings)
      : (ARTICLE_CONTENT[`/${entry.slug}`] ?? entry.content)

  const articleSchema =
    articleEntry
      ? {
          '@context': 'https://schema.org',
          '@type': articleEntry.kind === 'blog' ? 'BlogPosting' : 'Article',
          headline: entry.title,
          description: entry.description,
          url: canonical,
          datePublished: articleEntry.date,
          dateModified: articleEntry.date,
          author: { '@type': 'Person', name: AUTHOR },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF',
            url: SITE,
            logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
          },
          image: `${SITE}${heroImage}`,
          wordCount: articleEntry.content ? articleEntry.content.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length : undefined,
          keywords: articleEntry.topics.join(', '),
          articleSection: articleEntry.topics[0],
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        }
      : null

  const landingServiceSchema = (() => {
    if (kind !== 'landing') return null
    if (entry.slug === 'bali-wedding-catering-packages') {
      return serviceWithAggregateOfferSchema({
        name: 'Bali Wedding Catering Packages',
        description: 'Transparent per-guest wedding catering packages for Bali villa weddings: intimate dinners from IDR 700K++/person, full receptions IDR 1.5M–3M++/person, all-inclusive of chefs, service staff, equipment and cleanup.',
        url: canonical,
        lowPrice: '700000',
        highPrice: '3000000',
      })
    }
    if (entry.slug === 'villa-bbq-catering-bali') {
      return serviceWithAggregateOfferSchema({
        name: 'Villa BBQ Catering Bali — In-Villa BBQ Party Packages',
        description: 'In-villa BBQ party packages in Bali: private chef, live grill, service staff and full cleanup at your villa poolside. Packages for 8–80 guests.',
        url: canonical,
        lowPrice: '700000',
        highPrice: '850000',
        unitText: 'per person ++ (11% government tax + 10% service charge); min. 10 guests (8–9 on request)',
      })
    }
    if (entry.slug === 'seafood-bbq-catering-bali') {
      return serviceWithOfferSchema({
        name: 'Seafood BBQ Bali',
        description: 'Market-fresh seafood BBQs for Bali villas: snapper, prawns, squid and lobster sourced at dawn from Jimbaran markets and grilled live at your villa.',
        url: canonical,
        price: '700000',
        unitText: 'from price per person ++ (11% government tax + 10% service charge); premium catch at market price; min. 8 guests',
      })
    }
    if (entry.slug === 'wedding-catering-indonesia') {
      const schema = serviceWithAggregateOfferSchema({
        name: 'Wedding Catering Indonesia',
        description: 'Premium wedding catering across Indonesia with confirmed teams in Bali and Jakarta: villa and private-estate weddings, custom menus, full service brigades and coordination, from IDR 700K–3M++/person.',
        url: canonical,
        lowPrice: '700000',
        highPrice: '3000000',
      })
      // @ts-expect-error provider object supports areaServed override
      schema.provider = {
        '@type': 'LocalBusiness',
        name: 'myCHEF',
        url: SITE,
        telephone: '+62 896-7407-2020',
      }
      // @ts-expect-error extend service schema with multi-region areaServed
      schema.areaServed = [
        { '@type': 'Place', name: 'Bali, Indonesia' },
        { '@type': 'Place', name: 'Jakarta, Indonesia' },
      ]
      return schema
    }
    return serviceSchema(entry.title, entry.description, canonical)
  })()
  const breadcrumbJsonLd = isArticle ? breadcrumbSchema(entry.title, canonical, hubLabel, `${SITE}${hubPath}`) : breadcrumbSchema(entry.title, canonical)
  const faqItems = isChefForHireIndonesia
    ? [
        { question: 'Can I hire a chef in Indonesia for only one dinner?', answer: 'Yes. myCHEF arranges one-off private dinners, villa BBQs, family meals, birthdays, proposals, and tasting menus. Send the date, exact location, guest count, and preferred service style.' },
        { question: 'Can I hire a chef for several days or an entire villa stay?', answer: 'Yes. A villa chef can cover selected meals or daily service. The schedule, number of meals, groceries, service hours, days off, and any supporting staff are agreed before confirmation.' },
        { question: 'Are groceries included when I hire a private chef?', answer: 'It depends on the service. Fine-dining and event packages may include ingredients. Time-based villa chef services normally bill groceries at cost with receipts and no markup. The written quote confirms the exact model.' },
        { question: 'Can a private chef handle allergies and special diets?', answer: 'Yes, when requirements are shared before menu approval. Tell myCHEF about allergies, cross-contact risks, religious requirements, children, pregnancy, and other dietary needs.' },
        { question: 'Can myCHEF find a full-time or live-in chef?', answer: 'Yes. Permanent roles use a placement process with a household brief, matched profiles, interviews, cooking trials, contract support, and ongoing follow-up.' },
        { question: 'Where in Indonesia can I hire a myCHEF chef?', answer: 'Regular service is available across Bali. Assignments in Lombok, on yachts, at remote estates, and in other Indonesian locations are assessed individually based on schedule and logistics.' },
      ]
    : entry.slug === 'villa-bbq-catering-bali'
      ? [
          { question: 'How much does a villa BBQ party in Bali cost?', answer: 'Party packages run IDR 700,000–850,000 per person ++, all-inclusive: chef, two service staff, grill, equipment, ingredients, setup, and cleanup. Add-ons (bartender, Wagyu upgrade, grazing table) are itemised in your quote.' },
          { question: 'What is the minimum group size for a villa BBQ party?', answer: 'Ten guests in most areas; groups of 8–9 are sometimes possible in Seminyak–Canggu on request.' },
          { question: 'Do we need our own grill at the villa?', answer: 'No. We bring professional charcoal and gas grills and manage the fuel ourselves — though we\'re happy to use your villa\'s built-in BBQ if you\'d prefer.' },
          { question: 'Do villas allow outside BBQ catering?', answer: 'Most villas welcome outside catering with advance notice. We coordinate access and house rules with your villa manager and flag any banjar function fee in your quote upfront.' },
          { question: 'What happens if it rains during the party?', answer: 'Wet-season BBQs relocate under covered terraces, verandas or pop-up tents. Gas grills work under cover where open flame is not allowed — the party goes ahead.' },
          { question: 'How far ahead should I book and what is the cancellation policy?', answer: 'One to two weeks ahead in peak season; three to seven days otherwise. A deposit locks your date (deposit level pending business confirmation). Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
          { question: 'Can you provide drinks and a bartender?', answer: 'Yes. Add a private bartender with a 3-hour open bar for IDR 4,000,000 flat, or wine, beer and soft-drink packages as itemised add-ons.' },
        ]
      : entry.slug === 'seafood-bbq-catering-bali'
      ? [
          { question: 'Is the seafood really bought the same day?', answer: 'Yes. Our chefs shop the Jimbaran and Kedonganan morning markets and keep everything chilled until it hits your grill. Freshness is the entire product.' },
          { question: 'Can we definitely have lobster?', answer: 'Lobster is subject to the day\'s market availability and price. Tell us you want it when booking and we\'ll confirm options and cost before you commit.' },
          { question: 'What does a seafood BBQ cost per person?', answer: 'From IDR 700,000 per person ++ for the signature package. Premium spreads with lobster run higher — every figure is confirmed in your itemised quote.' },
          { question: 'How do you handle shellfish allergies or halal guests?', answer: 'We plan separate grills and prep zones for shellfish-allergic guests, and pork-free, halal-friendly menus as standard. Non-seafood eaters get proper alternatives, not an afterthought.' },
          { question: 'What is the minimum group size?', answer: 'Eight guests in the Jimbaran/Bukit area; ten to twenty elsewhere depending on travel. Smaller groups can book via our private chef in Jimbaran service.' },
          { question: 'What happens if it rains?', answer: 'Covered terraces, verandas, or pop-up tents — the grill goes ahead. We monitor the forecast and set the plan B before the day.' },
          { question: 'How far ahead should I book?', answer: 'Three to seven days is ideal so we can plan the market run around your date. A deposit confirms (deposit level pending business confirmation); cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
        ]
      : entry.slug === 'bali-wedding-catering-packages'
      ? [
          { question: 'What is the minimum spend or guest count?', answer: 'Intimate packages start from 10 guests; buffet and live-station formats from 30. Below 20 guests a private chef dinner format is often better value.' },
          { question: 'Are these prices really all-in?', answer: 'Prices are quoted ++ (11% government tax + 10% service charge) with the all-in equivalent shown. Proposals state one final total with groceries at cost and no markups.' },
          { question: 'Do packages include staff, equipment and cleanup?', answer: 'Yes — chefs, waiters, setup crew, coordinator, mobile kitchen equipment, service ware and full cleanup are included. Rentals and bar stock are itemised separately.' },
          { question: 'Can we split the weekend into different packages?', answer: 'Yes — welcome dinner, reception and recovery brunch are quoted as separate lines in one proposal.' },
          { question: 'When do we pay?', answer: 'A deposit confirms the date (deposit level pending business confirmation); the balance is due before the event, with tiered written cancellation terms.' },
          { question: 'Do you cater dietary and halal weddings?', answer: 'Yes — halal-friendly, vegan, vegetarian, gluten-free and allergy protocols are standard, with separate prep lines where required.' },
          { question: 'Do packages change for peak season?', answer: 'Package prices do not change by season, but peak dates (July–September, December–January) book 3–10 months ahead.' },
          { question: 'What if it rains on an outdoor reception?', answer: 'Every outdoor package includes a wet-weather plan: marquee coordination and an agreed indoor relocation layout.' },
        ]
      : entry.slug === 'wedding-catering-indonesia'
        ? [
            { question: 'Which cities do you cover?', answer: 'Bali and Jakarta are confirmed service regions with local teams. Weddings elsewhere in Indonesia are reviewed case by case.' },
            { question: 'Is pricing different outside Bali?', answer: 'Jakarta follows the same structure — IDR 1.5M–3M++ per person for receptions, intimate dinners from IDR 700K++. Other regions add travel and logistics as transparent line items.' },
            { question: 'Can you cater large Indonesian weddings?', answer: 'Yes — from 10 to 250+ guests, with buffet and live-station formats and multi-event programmes quoted in one proposal.' },
            { question: 'Do you offer halal wedding catering?', answer: 'Yes — halal-friendly menus with separate preparation are standard; full halal certification requirements can be discussed at the consult.' },
            { question: 'How do tastings work if we are planning remotely?', answer: 'Tastings are scheduled around your travel in the weeks before the wedding; menu development happens remotely by WhatsApp and video call.' },
            { question: 'How far ahead should we book?', answer: 'Peak-season Bali dates: 3–10 months. Jakarta and off-peak: 1–3 months. Large multi-event weddings should start earlier.' },
            { question: 'What deposit is required?', answer: 'A deposit confirms the date (deposit level pending business confirmation), with the balance due before the event and written cancellation tiers.' },
          ]
        : [
            { question: 'How do I book a private chef in Bali with myCHEF?', answer: 'Contact us via WhatsApp at +62 896-7407-2020 with your date, villa location, and guest count. We reply within the hour and send a full proposal within 24 hours.' },
            { question: 'What areas in Bali does myCHEF serve?', answer: 'We serve all major Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Pererenan, and beyond, covering 560+ villas across the island.' },
          ]
  const jsonLdArr = [
    breadcrumbJsonLd,
    faqPageSchema(faqItems),
    ...(landingServiceSchema ? [landingServiceSchema] : []),
    ...(articleSchema ? [articleSchema] : []),
  ]
  const extraMeta = articleEntry
    ? [
        ...(articleEntry.date
          ? [
              { key: 'article-published', property: 'article:published_time', content: articleEntry.date },
              { key: 'article-modified', property: 'article:modified_time', content: articleEntry.date },
            ]
          : []),
        { key: 'article-author', property: 'article:author', content: AUTHOR },
        { key: 'article-section', property: 'article:section', content: articleEntry.topics[0] ?? 'Private Chef' },
        ...(articleEntry.topics.slice(1).map((tag) => ({ key: `article-tag-${tag}`, property: 'article:tag', content: tag }))),
      ]
    : []

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={`${entry.title} | myCHEF`}
        description={entry.description}
        canonical={canonical}
        ogImage={heroImage}
        ogType={isArticle ? 'article' : 'website'}
        jsonLd={jsonLdArr}
        extraMeta={extraMeta}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={entry.title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-left text-white md:px-12">
          <div className="max-w-[760px]">
            <Link to={hubPath} className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-white/75 transition-colors hover:text-[#C5A028]">
              <ArrowLeft size={14} /> {backLabel}
            </Link>
            <Breadcrumb
              items={[
                { label: hubLabel, href: hubPath },
                { label: entry.title },
              ]}
              theme="dark"
              className="px-0 pb-8 pt-0"
            />
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[3px] text-white/70">
              <span className="font-cormorant text-sm font-semibold text-[#C5A028]">
                {kind === 'guide' ? 'Help Guide' : kind === 'blog' ? 'Journal Entry' : 'myCHEF Experience'}
              </span>
              {articleEntry?.date && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#C5A028]" /> {formatBlogDate(articleEntry.date)}
                </span>
              )}
              {articleEntry && (
                <>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={12} className="text-[#C5A028]" /> {articleEntry.readTimeMinutes} min read
                  </span>
                  <span>{AUTHOR}</span>
                </>
              )}
            </div>
            <h1 className="mb-8 font-playfair text-4xl leading-[1.1] md:text-6xl">{entry.title}</h1>
            <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-white/85 md:text-xl">{entry.description}</p>

            {articleEntry && shareLinks && (
              <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="font-medium text-white">Share:</span>
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:bg-white/10">
                  WhatsApp
                </a>
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:bg-white/10">
                  Facebook
                </a>
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:bg-white/10">
                  X / Twitter
                </a>
              </div>
            )}

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-source={`landing-${entry.slug}-cta`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-black transition-all hover:bg-[#D4B43A]">
                <MessageCircle className="h-4 w-4" /> Message our Team
              </a>
              <Link to="/pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-white/10">
                View Pricing Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className={`gap-12 ${articleEntry && articleEntry.headings.length >= 3 ? 'lg:grid lg:grid-cols-[250px_minmax(0,1fr)]' : ''}`}>
          {articleEntry && articleEntry.headings.length >= 3 && (
            <aside className="mb-10 self-start rounded-[28px] border border-black/5 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:mb-0">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7E6410]">On this page</p>
              <h2 className="mt-3 font-playfair text-2xl">Table of contents</h2>
              <nav aria-label="Table of contents" className="mt-6 space-y-3">
                {articleEntry.headings.map((heading: EnrichedPost['headings'][number]) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm leading-relaxed text-[#4A4745]/80 transition-colors hover:text-[#7E6410] ${heading.level === 3 ? 'pl-4' : ''}`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          <div>
            {enhancedContent ? (
              <article
                className="prose prose-stone max-w-none text-[#4A4745] prose-headings:font-playfair prose-headings:text-[#1A1A1A] prose-h2:mb-6 prose-h2:mt-16 prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-2xl prose-p:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:leading-relaxed prose-strong:text-[#1A1A1A] prose-a:font-medium prose-a:text-[#7E6410] prose-a:no-underline hover:prose-a:underline prose-blockquote:rounded-r-2xl prose-blockquote:border-l-[#C5A028] prose-blockquote:bg-[#FAFAF8] prose-blockquote:p-6 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28"
                dangerouslySetInnerHTML={{ __html: enhancedContent }}
              />
            ) : (
              <div className="prose prose-stone max-w-none text-[#4A4745]">
                <p className="text-lg leading-relaxed">
                  Full article content for this page is being prepared. In the meantime, here is what you can do right now:
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3"><div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A028]/10"><Check className="h-4 w-4 text-[#7E6410]" strokeWidth={2.5} /></div> <span className="text-lg">Message us on WhatsApp for an immediate answer from our guest relations team.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A028]/10"><Check className="h-4 w-4 text-[#7E6410]" strokeWidth={2.5} /></div> <span className="text-lg">Request a personalized quote — we respond within 24 hours with a full proposal.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A028]/10"><Check className="h-4 w-4 text-[#7E6410]" strokeWidth={2.5} /></div> <span className="text-lg">Browse our sample menus to see exactly what our Michelin-trained chefs can cook.</span></li>
                </ul>
              </div>
            )}

            {articleEntry && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-black/5 pt-8">
                {articleEntry.topics.map((topic: string) => (
                  <span key={topic} className="rounded-full bg-[#F3EFE7] px-4 py-2 text-sm font-medium text-[#4A4745]">
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-16 flex flex-col gap-4 border-t border-black/5 pt-10 sm:flex-row">
              <Link to="/quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-10 py-5 text-sm font-semibold uppercase tracking-[2px] text-black transition-all hover:bg-[#D4B43A]">
                Get My Free Quote
              </Link>
              <Link to="/fine-dining/menus" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-10 py-5 text-sm font-semibold uppercase tracking-[2px] text-[#1A1A1A] transition-all hover:bg-black/5">
                <Utensils size={18} /> Browse Menus
              </Link>
            </div>

            {articleEntry && (previousEntry || nextEntry) && (
              <div className="mt-16 grid gap-4 border-t border-black/5 pt-12 md:grid-cols-2">
                {previousEntry ? (
                  <Link to={previousEntry.path} className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5">
                    <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#7E6410]">
                      <ChevronLeft size={14} /> Previous Post
                    </p>
                    <h2 className="font-playfair text-2xl transition-colors group-hover:text-[#7E6410]">{previousEntry.title}</h2>
                  </Link>
                ) : <div />}

                {nextEntry ? (
                  <Link to={nextEntry.path} className="group rounded-[28px] border border-black/5 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5 md:text-right">
                    <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#7E6410] md:ml-auto">
                      Next Post <ChevronRight size={14} />
                    </p>
                    <h2 className="font-playfair text-2xl transition-colors group-hover:text-[#7E6410]">{nextEntry.title}</h2>
                  </Link>
                ) : <div />}
              </div>
            )}

            {relatedEntries.length > 0 && (
              <div className="mt-20 border-t border-[#1A1A1A]/10 pt-16">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7E6410]">Related Posts</p>
                    <h2 className="mt-3 font-playfair text-3xl">Keep reading</h2>
                  </div>
                  <Link to={hubPath} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#7E6410] transition-colors hover:text-black">
                    {hubCtaLabel} <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {relatedEntries.map((post) => (
                    <Link
                      key={post.slug}
                      to={post.path}
                      className="group block rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5"
                    >
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#4A4745]/80">
                        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[2px] ${post.kind === 'guide' ? 'border-[#6B8E5A]/20 bg-[#6B8E5A]/10 text-[#6B8E5A]' : 'border-[#2C5F7C]/20 bg-[#2C5F7C]/10 text-[#2C5F7C]'}`}>
                          {post.label}
                        </span>
                        <span>{post.readTimeMinutes} min read</span>
                      </div>
                      <h3 className="mb-3 font-playfair text-2xl transition-colors group-hover:text-[#7E6410]">{post.title}</h3>
                      <p className="text-base leading-relaxed text-[#4A4745]/75">{post.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
