import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Pererenan',
    title: 'Private Chef Pererenan: Surf Retreats, Rice Field Villas & Quiet Villa Dining',
    body: `<p>Pererenan sits just west of Canggu along the black sand coastline, separated from the main Canggu hub by rice fields and quiet lanes. It has the character of what Canggu was before it became famous — a genuinely tranquil surf and retreat destination with excellent villa stock, without the crowds. Guests in Pererenan typically choose it intentionally: they want proximity to the best surf breaks (Pererenan has its own beach break) but without the noise and traffic of central Canggu.</p>
    <p>Private chef dining in Pererenan follows the same logic: quality and calm over performance. Guests here want a chef who delivers a genuinely good meal in a setting that feels private and real, not a production. myCHEF covers the full Pererenan area, including the rice field villas between Pererenan and Cemagi, the beachfront compounds along Jalan Pererenan, and the quieter lanes extending northward toward Seseh.</p>`,
  },
  {
    id: 'character',
    type: 'content',
    subtitle: 'Area Character',
    title: 'Pererenan Dining Culture: What Guests Request',
    body: `<p>Pererenan's guest profile shapes the kind of private chef experiences that are most requested in this area:</p>
    <p><strong>Surf and wellness retreat groups:</strong> Pererenan is a hub for surf retreats and yoga/wellness programs that use villa properties as their base. These groups often have specific dietary structures — typically plant-forward, frequently vegan or mostly plant-based, with attention to whole foods and nutrient density. A myCHEF chef supporting a surf retreat group produces communal-style meals (large spreads served sharing-style) that match the retreat's food philosophy. See our <a href="/blog/bali-wellness-retreat-catering" class="text-[#7E6410] hover:underline font-medium">wellness retreat catering guide</a>.</p>
    <p><strong>Rice field sunset dinners:</strong> The rice terraces between Pererenan and Cemagi create the same photographic and atmospheric quality that Ubud is famous for — but at the beach. A private dinner table set on a villa terrace overlooking working rice fields at sunset is among the most distinctive private dining settings in Bali. Guests in Pererenan villas regularly request this format for romantic dinners, small group celebrations, and photographer-documented occasions. See our <a href="/blog/romantic-dinner-bali-private-chef" class="text-[#7E6410] hover:underline font-medium">romantic dinner guide</a>.</p>
    <p><strong>Long-stay couple and small group cooking:</strong> Pererenan's slower pace and quieter setting attract couples and small groups (4-8 people) on 10-14 day stays. Multi-session chef bookings across a long stay are common — a chef who cooks dinner every other evening over two weeks, sourcing fresh from Canggu market each morning and varying the menu based on what's in season and what the guests enjoyed previously.</p>
    <p><strong>Boutique villa retreat catering:</strong> Several boutique eco-villa and retreat properties in the Pererenan-Cemagi corridor operate semi-commercially, hosting yoga and wellness programs. Some engage myCHEF on a per-program basis to provide all meal service during the retreat week. This is a regular commercial format for our Pererenan chefs.</p>`,
  },
  {
    id: 'coverage',
    type: 'content',
    subtitle: 'Coverage',
    title: 'Pererenan Areas We Cover',
    body: `<p>myCHEF covers the full Pererenan corridor and its neighbours:</p>
    <p><strong>Pererenan Beach:</strong> The beachfront strip along Jalan Pererenan, with villas facing directly onto the black sand surf beach. The most sought-after position for villa stays in this area.</p>
    <p><strong>Rice field corridor (Pererenan to Cemagi):</strong> The lane network running inland from the beach through active rice paddies. Some of Bali's most architecturally interesting villas sit here — glass-walled pavilions, open-sided structures, and compounds designed to integrate with the agrarian landscape around them.</p>
    <p><strong>Cemagi:</strong> The village immediately north of Pererenan, increasingly popular with villa developers and retreat operators. Some excellent large-format villa compounds here. Included in our standard coverage.</p>
    <p><strong>Seseh:</strong> The quiet coastal village further north, beyond Cemagi. More remote and deliberately less developed. A handful of exceptional luxury villas, extremely private. myCHEF serves this area with advance notice.</p>
    <p><strong>Connection to Canggu:</strong> Pererenan is a 5-10 minute drive from central Canggu (Batu Bolong, Berawa) and shares its market access, including Canggu's organic and specialty grocery suppliers. Our Canggu and Pererenan chefs share sourcing networks. See our <a href="/blog/private-chef-canggu-guide" class="text-[#7E6410] hover:underline font-medium">Canggu guide</a> for context on the broader area.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Pererenan Pricing',
    body: `<p>Pererenan pricing is consistent with the broader Canggu/west coast market:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Dinner for 2-6 guests (3-4 courses):</strong> From IDR 700,000 – 800,000 per person.</li>
      <li><strong>Plant-based or vegan tasting menu:</strong> From IDR 700,000 – 900,000 per person. Plant-based cooking requires sourcing specialty ingredients and more creative menu construction.</li>
      <li><strong>Wellness retreat group meal (6-15 guests, sharing style):</strong> From IDR 700,000 per person. Volume discount at 8+ guests.</li>
      <li><strong>Multi-day booking (4+ sessions):</strong> 10% discount applied to per-session rates.</li>
    </ul>
    <p style="margin-top:0.75rem;">Groceries at cost, no markup. For the full picture see our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Your Chef',
    title: 'Reserve a Private Chef in Pererenan',
    body: 'Tell us your villa address, dates, guest count, and whether you want a single dinner, a multi-day arrangement, or retreat meal service. We match you with the right chef.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: "Does myCHEF cover Pererenan and Cemagi villas?",
    answer: "Yes. myCHEF covers the full Pererenan corridor including Pererenan Beach, the rice field villas between Pererenan and Cemagi, and Cemagi itself. We also cover Seseh with advance notice. There is no travel surcharge within this zone.",
  },
  {
    question: "Can a private chef in Pererenan cater to a vegan or plant-based wellness retreat group?",
    answer: "Yes. Plant-based and vegan retreat catering is one of the most common requests in Pererenan. Our chefs are trained in plant-based cooking and can produce communal-style spreads suited to retreat group sizes (8-20 people) across multiple meals per day. Specify dietary structure, allergy information, and meal frequency when booking.",
  },
  {
    question: "How different is Pererenan from Canggu for private chef bookings?",
    answer: "Pererenan and Canggu share the same market access and chef pool. The main difference is the villa character and guest type: Pererenan villas tend to be more secluded (rice field or beachfront, quieter lane access) and guests tend to stay longer and want a calmer, more private experience. The booking process and pricing are identical.",
  },
  {
    question: "Can a private chef cook a rice field sunset dinner for 2 at a Pererenan villa?",
    answer: "Yes. This is one of the most requested formats in Pererenan — a 4-5 course dinner served on a villa terrace overlooking rice fields at sunset. The chef handles all sourcing, setup, cooking, and service. Full table setup including flowers and candles can be arranged on request.",
  },
  {
    question: "Can I book a chef for recurring weekly meals over a 2-week Pererenan villa stay?",
    answer: "Yes. Multi-session bookings across a longer stay are common in Pererenan. You confirm the sessions you want (e.g., 4 dinners over 2 weeks), the chef plans menus across the period, sources fresh each session, and adapts to your preferences as the stay progresses. Multi-session bookings receive a 10% discount.",
  },
]

export default function PrivateChefPererenanGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-pererenan-guide"
      title="Private Chef Pererenan: Surf Retreats, Rice Field Dinners & Villa Dining"
      description="Book a private chef in Pererenan for surf retreat catering, romantic rice field dinners, vegan wellness menus, and long-stay villa cooking. Covers Pererenan, Cemagi and Seseh."
      h1="Private Chef Pererenan — Surf Retreats, Rice Field Dinners & Villa Dining"
      subtitle="The complete guide to private chef services in Pererenan and the Cemagi corridor"
      heroImage="https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1?w=1400&q=80"
      heroImageAlt="Private chef setting a dinner table overlooking Pererenan rice fields at sunset"
      ogImage="https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1?w=1400&q=80"
      keywords={['private chef pererenan', 'pererenan private chef', 'pererenan villa chef', 'private chef bali pererenan', 'chef pererenan bali']}
      highlights={['Rice Field Sunset Dining', 'Wellness Retreat Catering', 'Vegan Menus', 'From IDR 700K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Canggu Guide', href: '/blog/private-chef-canggu-guide', desc: 'Private chef services in Canggu and the surrounding west coast area.' },
        { label: 'Wellness Retreat Catering', href: '/blog/bali-wellness-retreat-catering', desc: 'Private chef catering for yoga and wellness retreats in Bali.' },
        { label: 'Romantic Dinner Bali', href: '/blog/romantic-dinner-bali-private-chef', desc: 'Private chef romantic dinners for couples in Bali.' },
        { label: 'Floating Breakfast Bali', href: '/blog/floating-breakfast-bali', desc: 'Floating breakfast and villa breakfast experiences.' },
        { label: 'Pricing Guide', href: '/pricing', desc: 'Full breakdown of private chef costs across Bali.' },
        { label: 'Book a Chef', href: '/contact', desc: 'Check availability for your Pererenan villa.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Pererenan Guide', 'https://mychef.id/blog/private-chef-pererenan-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Pererenan: Surf Retreats, Rice Field Dinners & Villa Dining',
          description: 'Book a private chef in Pererenan for surf retreat catering, romantic rice field dinners, vegan wellness menus, and long-stay villa cooking.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-pererenan-guide' },
          url: 'https://mychef.id/blog/private-chef-pererenan-guide',
        },
      ]}
      ctaText="Reserve Your Pererenan Chef"
      ctaSubtext="From a rice field sunset dinner to a two-week retreat catering program, we match you with the right chef."
    />
  )
}
