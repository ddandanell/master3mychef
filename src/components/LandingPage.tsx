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

  const isGroupVillaDinner = kind === 'landing' && entry.slug === 'group-villa-dinner-packages-bali'
  const landingServiceSchema = (() => {
    if (kind !== 'landing') return null
    if (entry.slug === 'group-villa-dinner-packages-bali') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Group Villa Dinner Packages Bali',
        provider: {
          '@type': 'Organization',
          name: 'myCHEF.id',
          url: SITE,
          telephone: '+62 896-7407-2020',
          email: 'bali@mychef.id',
        },
        areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
        description: 'All-inclusive villa dinner packages for groups of 10 to 150 in Bali: menu, chefs, service staff, equipment and cleanup at one fixed per-person price.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'IDR',
          price: '700000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '700000',
            priceCurrency: 'IDR',
            unitText: 'per person, before 11% government tax + 10% service charge',
          },
          description: 'Group villa dinner packages from IDR 700,000++/person for groups of 10-150',
        },
        url: canonical,
      }
    }
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
    if (entry.slug === 'proposal-dinner') {
      const schema = serviceWithAggregateOfferSchema({
        name: 'Proposal Dinner Bali',
        description: 'A chef-led proposal dinner for two in your Bali villa: bespoke menu, discreet service, table styling and confidential surprise planning, from IDR 2.8M++ per couple.',
        url: canonical,
        lowPrice: '2800000',
        highPrice: '7000000',
        unitText: 'per couple ++ (11% government tax + 10% service charge); add-ons itemised',
      })
      // @ts-expect-error provider object supports telephone override
      schema.provider = {
        '@type': 'LocalBusiness',
        name: 'myCHEF',
        url: SITE,
        telephone: '+62 896-7407-2020',
        areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
      }
      return schema
    }
    if (entry.slug === 'honeymoon-chef') {
      return serviceWithAggregateOfferSchema({
        name: 'Honeymoon Private Chef Bali',
        description: 'Multi-night private chef dining for honeymooners in Bali villas: arrival dinners, floating breakfasts, signature romantic evenings and full-stay chef service for two.',
        url: canonical,
        lowPrice: '700000',
        highPrice: '4500000',
        unitText: 'per person/per couple/per week depending on experience; ++ (11% tax + 10% service)',
      })
    }
    if (entry.slug === 'private-chef-for-events') {
      const schema = serviceWithAggregateOfferSchema({
        name: 'Private Chef for Events Bali',
        description: 'One-off event chef hire in Bali and Jakarta: a professional chef (with optional service staff) who designs the menu, sources ingredients, cooks at your venue and cleans up — for villa parties, birthdays, seated dinners and cocktail receptions.',
        url: canonical,
        lowPrice: '600000',
        highPrice: '1500000',
        unitText: 'per day chef hire; event menus from IDR 700K–1.2M per person; service staff from IDR 250K/hour. Prices ++ (11% tax + 10% service)',
      })
      // @ts-expect-error provider object supports telephone override
      schema.provider = {
        '@type': 'Organization',
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
    if (entry.slug === 'luxury-birthday-party-bali') {
      const schema = serviceSchema(
        'Luxury Birthday Party Bali',
        'Luxury milestone birthday parties in Bali villas — 30th, 40th, 50th and 60th celebrations with private chef, premium menus, decor, bar, staff and coordination bundled for one occasion.',
        canonical,
      )
      // @ts-expect-error extend service schema with serviceType and detailed provider
      schema.serviceType = 'Luxury milestone birthday party production'
      // @ts-expect-error provider override for detailed LocalBusiness
      schema.provider = {
        '@type': 'LocalBusiness',
        name: 'myCHEF.id',
        url: `${SITE}/`,
        telephone: '+62 896-7407-2020',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan',
          addressLocality: 'Denpasar',
          addressRegion: 'Bali',
          postalCode: '80226',
          addressCountry: 'ID',
        },
      }
      // @ts-expect-error areaServed override
      schema.areaServed = 'Bali, Indonesia'
      // @ts-expect-error offers override for multiple named offers
      schema.offers = [
        { '@type': 'Offer', name: 'Signature Milestone Dinner', price: '1500000', priceCurrency: 'IDR', description: 'From IDR 1.5M++/person, 4–12 guests. 5-course plated dinner, cake, styling, photographer.' },
        { '@type': 'Offer', name: 'Fine-Dining Tasting Menu', price: '2200000', priceCurrency: 'IDR', description: 'Mediterranean IDR 2.2M++ / Wagyu IDR 2.4M++ per person. Wine pairing +IDR 850K.' },
        { '@type': 'Offer', name: 'Milestone Villa Production', price: '850000', priceCurrency: 'IDR', description: 'From IDR 850K++/person, 15–40+ guests, plus production add-ons quoted as one bundle.' },
      ]
      return schema
    }
    if (entry.slug === 'corporate-retreat-catering-bali') {
      const schema = serviceWithOfferSchema({
        name: 'Corporate Retreat Catering Bali',
        description: 'Multi-day corporate retreat catering in Bali: full-board meal programs for offsites and company retreats with dietary management at scale and NPWP-registered invoicing.',
        url: canonical,
        price: '500000',
        unitText: 'per person per day, before 11% government tax + 10% service charge',
      })
      // @ts-expect-error provider override with email
      schema.provider = {
        '@type': 'Organization',
        name: 'myCHEF.id',
        url: SITE,
        telephone: '+62 896-7407-2020',
        email: 'bali@mychef.id',
      }
      // @ts-expect-error areaServed override for Bali and Jakarta
      schema.areaServed = [
        { '@type': 'Place', name: 'Bali' },
        { '@type': 'Place', name: 'Jakarta' },
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
    : entry.slug === 'proposal-dinner'
      ? [
          { question: 'How much does a proposal dinner in Bali cost?', answer: 'From IDR 2.8M++ per couple for a private chef dinner, or from IDR 3.5M++ per couple for full service with styling and waitstaff. Add-ons are itemised.' },
          { question: 'Can you keep it a complete surprise?', answer: 'Yes — coordination happens only with the planning partner, setup is staged while the couple is out, and the service team works to an agreed cue.' },
          { question: 'Can you arrange a photographer?', answer: 'Yes — discreet proposal photographers from IDR 2.4M for two hours, briefed on positioning and the signal to shoot. Quoted separately.' },
          { question: 'Where can the dinner happen?', answer: 'At your villa — terrace, poolside or garden — across Uluwatu, Ubud, Seminyak, Canggu, Jimbaran, Nusa Dua and the rest of Bali.' },
          { question: 'What if my partner has dietary requirements?', answer: 'The entire menu is designed privately around allergies, vegetarian, halal or any other requirement, without raising the subject at the table.' },
          { question: 'How far in advance should I book?', answer: 'As early as possible for peak season, but short-notice proposals are often possible — message us and we will confirm what can be arranged.' },
          { question: 'What if it rains?', answer: 'A covered fallback position is planned in advance for outdoor setups.' },
          { question: 'What deposit is required?', answer: 'A deposit confirms the date and the team (deposit level pending business confirmation), with the balance due before the evening.' },
        ]
      : entry.slug === 'honeymoon-chef'
        ? [
            { question: 'How much does a honeymoon private chef in Bali cost?', answer: 'Dinners from IDR 700K++ per person; full-service romantic evenings from IDR 3.5M++ per couple; daily chef service from IDR 600K/hour plus groceries at cost; weekly arrangements from IDR 4.5M++ for two. ++ adds 11% government tax and 10% service charge.' },
            { question: 'Can we book the chef for our whole stay?', answer: 'Yes — a single dinner, selected days, or full daily hosting, quoted as one package around your itinerary.' },
            { question: 'What\'s included in the price?', answer: 'Menu design, shopping, cooking, serving and cleanup. Full-service evenings add table setting, candles and waitstaff. Groceries are billed at cost on daily formats.' },
            { question: 'Can you handle dietary preferences?', answer: 'Yes — vegan, gluten-free, halal-friendly and allergy requirements are planned into every meal.' },
            { question: 'Is the floating breakfast included?', answer: 'It\'s an add-on from IDR 950K++ per couple, served at your pool at your chosen time.' },
            { question: 'How far ahead should we book?', answer: 'As soon as flights and villa are confirmed — peak-season chef days book out early.' },
            { question: 'Can family book this as a wedding gift?', answer: 'Yes — honeymoon dining plans can be arranged and paid for by family or friends, coordinated as a surprise.' },
            { question: 'What deposit is required?', answer: 'A deposit confirms the dates (deposit level pending business confirmation), with the balance due before service and written cancellation terms.' },
          ]
        : entry.slug === 'private-chef-for-events'
          ? [
              { question: 'How many guests can you handle?', answer: 'From small private dinners to large villa parties. Share your numbers and venue and we build the right team around it — one chef for an intimate dinner, a full culinary crew for a large celebration.' },
              { question: 'What is the difference between hiring an event chef and booking catering?', answer: 'Chef hire puts a professional chef (and optional staff) inside your event with a menu built for you. Catering lines are structured service formats for scale, and the events team adds full production — same company, different scope.' },
              { question: 'Do you handle drinks and styling too?', answer: 'Yes — bar service and table styling can be added alongside the food. Bartenders and sommeliers are available from IDR 250K per hour.' },
              { question: 'How far ahead should I book?', answer: 'Single dinners: two to three weeks is usually comfortable. Peak-season dates and large events should be booked earlier. Availability is usually confirmed within 2 hours on WhatsApp.' },
              { question: 'Which areas do you cover?', answer: 'All of Bali — Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Sanur, Nusa Dua and beyond — plus Jakarta. Any travel fee is confirmed upfront.' },
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
        : entry.slug === 'luxury-birthday-party-bali'
          ? [
              { question: 'What does a luxury milestone birthday in Bali cost?', answer: 'Signature dinners from IDR 1.5M++/person (4–12 guests); fine-dining tasting menus IDR 950K–2.4M++/person; full villa productions from IDR 850K++/person plus production add-ons, quoted as one fixed bundle. \'++\' adds 11% government tax + 10% service charge.' },
              { question: 'What\'s the minimum group size?', answer: 'Four guests for the signature dinner, six maximum for the chef\'s table, fifteen for a full villa production.' },
              { question: 'Can you plan it as a complete surprise?', answer: 'Yes — one point of contact, covert setup windows, a timed reveal and staff briefed on discretion, backed by a discretion guarantee for high-profile guests.' },
              { question: 'Can you handle dietary requirements across a big group?', answer: 'Yes — vegan, gluten-free, halal-friendly and allergy-aware menus are built into the plan, with kids\' menus alongside adult courses.' },
              { question: 'Do luxury villas allow parties like this?', answer: 'Most premium villas allow private events with approval. myCHEF confirms event permission, noise expectations and any banjar notification with the villa manager before locking the format.' },
              { question: 'Who provides the decor, flowers, DJ and photography?', answer: 'myCHEF coordinates trusted suppliers on one timeline — one brief, one team managing everything on the day.' },
              { question: 'What if it rains?', answer: 'Every outdoor production has a covered fallback planned in advance — same menu, same styling, moved inside or under cover.' },
              { question: 'How do deposits, payment and cancellation work?', answer: 'A deposit confirms the date and locks the chef and production team. Cancellation: 7+ days 75% refund; 48 hours or more 50% credit; under 48 hours no refund. Book 3–4 weeks ahead for peak-season milestones.' },
            ]
          : entry.slug === 'corporate-retreat-catering-bali'
            ? [
                { question: 'What does corporate retreat catering in Bali cost per day?', answer: 'Catering-only full board starts from IDR 500,000++ per person per day (from-price pending business confirmation); full retreat support with a coordinator starts from IDR 2,500,000++ per person per day, plus 11% government tax + 10% service charge.' },
                { question: 'Can myCHEF invoice companies with proper tax documentation?', answer: 'Yes. myCHEF is NPWP-registered and issues full tax invoices (faktur pajak on request) with itemised per-head breakdowns.' },
                { question: 'How are dietary requirements handled across large groups for several days?', answer: 'A pre-retreat dietary intake form, kitchen briefing against the attendee list, labelled dishes and separate prep for allergy-critical guests. Halal, vegan, gluten-free and medical diets are integrated into the main service.' },
                { question: 'Can myCHEF cater a retreat across multiple villas?', answer: 'Yes. Groups split across villa compounds and neighbouring properties are regularly served, with logistics coordinated directly with villa and venue management.' },
                { question: 'What is the alcohol policy for corporate retreats?', answer: 'The company sets the policy; service ranges from fully dry programmes to beer-and-wine dinners or a cocktail reception, with bartenders as an add-on.' },
                { question: 'Can a retreat include one special elevated dinner?', answer: 'Yes. A plated fine-dining evening mid-retreat is the most common upgrade, quoted as a per-person add-on.' },
                { question: 'How far in advance should a corporate retreat be booked?', answer: 'Two to four weeks for most retreats; one to three months for peak season or groups above 50.' },
                { question: 'What deposit is required?', answer: 'Deposit schedule pending business confirmation for multi-day corporate retreat programmes.' },
              ]
            : isGroupVillaDinner
              ? [
                  { question: 'How much does a group villa dinner in Bali cost?', answer: 'Packages start from IDR 700,000++ per person for groups of 10-60 (larger events custom quoted), plus 11% government tax + 10% service charge, including menu, chefs, service staff, setup and cleanup.' },
                  { question: 'What group sizes can myCHEF handle for villa dinners?', answer: 'From 10 to 150 guests. Above 60 guests, temporary prep stations and a full brigade are set up; above 30, a second chef is added.' },
                  { question: 'Can kids be catered within a group dinner?', answer: "Yes — dedicated kids' menus from IDR 250,000 per child, served early and separately if preferred." },
                  { question: 'How are dietary needs handled across a large group?', answer: 'Requirements are collected in advance; vegetarian, vegan, halal-sensitive, gluten-free and allergy-managed guests are covered in the main menu with every dish labelled.' },
                  { question: 'Is a villa kitchen big enough for 20+ guests?', answer: 'Almost always. Kitchen capacity, power and serving space are assessed before the date and missing equipment is brought in.' },
                  { question: 'Do villas charge extra for large gatherings?', answer: 'Some villas charge function fees and some neighbourhoods require a banjar permit for events beyond sleeping capacity. myCHEF flags this early and coordinates with the villa manager.' },
                  { question: 'What deposit is required?', answer: 'A 50% deposit confirms the date and team; the balance is due before the event.' },
                  { question: 'How far ahead should a group dinner be booked?', answer: 'A few days to a week is usually enough; earlier in peak season. Travel fees may apply for remote areas and are quoted upfront.' },
                ]
              : [
                  { question: 'How do I book a private chef in Bali with myCHEF?', answer: 'Contact us via WhatsApp at +62 896-7407-2020 with your date, villa location, and guest count. We reply within the hour and send a full proposal within 24 hours.' },
                  { question: 'What areas in Bali does myCHEF serve?', answer: 'We serve all major Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Pererenan, and beyond, covering 560+ villas across the island.' },
                ]
  const jsonLdArr = entry.jsonLd
    ? entry.jsonLd
    : [
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
            <h1 className="mb-8 font-playfair text-4xl leading-[1.1] md:text-6xl">{entry.h1 ?? entry.title}</h1>
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
