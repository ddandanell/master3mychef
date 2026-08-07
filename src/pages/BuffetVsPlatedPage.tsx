import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Utensils, Users, Star, Flame, CheckCircle, Clock } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Catering Format Guide',
    title: 'Buffet vs Plated Service: Choosing the Right Style for Your Bali Event',
    body: `<p>The single most common catering decision point for villa events in Bali is also the one guests most frequently get wrong: buffet or plated service? The answer changes dramatically based on group size, occasion, budget, and how formal you want the evening to feel.</p>
    <p>This guide covers what each format actually delivers, where each works best, what they cost, and a simple three-question framework for making the right call. Whether you're planning a <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">villa wedding</a>, a <a href="/events/corporate-events" class="text-[#7E6410] hover:underline font-medium">corporate dinner</a>, or a <a href="/events/birthdays" class="text-[#7E6410] hover:underline font-medium">birthday celebration</a>, the format shapes every other decision that follows.</p>`,
  },
  {
    id: 'plated',
    type: 'content' as const,
    subtitle: 'Plated Service',
    title: 'What Is Plated Service?',
    body: `<p>Plated service means each course is individually prepared, portioned, garnished, and carried to the guest at the table. It is the format you associate with Michelin-starred restaurants, wedding head tables, and fine dining events. The chef plates in the kitchen; service staff deliver simultaneously to all guests.</p>

    <p><strong>How it works at a Bali villa:</strong> The chef typically prepares a set menu of 3–7 courses agreed in advance. Guests receive the same menu (dietary variations are handled separately). Courses arrive with deliberate timing — 15–20 minutes between courses to allow conversation. Service staff clear plates and reset cutlery between courses.</p>

    <p><strong>What plated service gives you:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Complete control over portion sizes and presentation — every plate leaves the kitchen looking identical</li>
      <li>Focused, chef-driven narrative: the meal tells a story from amuse-bouche to dessert</li>
      <li>Maximum elegance — suited to proposals, anniversaries, honeymoons, and weddings where photography matters</li>
      <li>Guests stay seated, conversation stays uninterrupted</li>
    </ul>

    <p><strong>Constraints to understand:</strong> Plated service requires more prep time, more service staff per table, and a shorter window to serve all courses at the right temperature. It works perfectly for groups of 2–12. Above 15–20 guests, logistics become challenging and the cost premium compounds quickly.</p>`,
  },
  {
    id: 'buffet',
    type: 'content' as const,
    subtitle: 'Buffet Service',
    title: 'What Is Buffet Service?',
    body: `<p>Buffet service means all dishes are laid out simultaneously on a table or station. Guests serve themselves, return for seconds, and eat in whatever order they choose. The chef prepares and arranges everything before service, then remains available to replenish and assist.</p>

    <p><strong>How it works at a Bali villa:</strong> The chef sets up 45–60 minutes before guests arrive. Dishes are displayed in labeled serving vessels (chafing dishes for hot items, platters and boards for cold). A Balinese spread might feature 8–15 separate dishes. Guests circulate, graze, and assemble their own plates. The atmosphere is social and relaxed.</p>

    <p><strong>What buffet service gives you:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Variety — guests with different dietary requirements each find options that suit them</li>
      <li>Social energy — movement around the table creates conversation and mingling</li>
      <li>Flexible timing — guests eat when they're hungry rather than when courses arrive</li>
      <li>Scale efficiency — the same setup serves 8 or 80 guests without proportional cost increases</li>
    </ul>

    <p><strong>Constraints to understand:</strong> Buffet service requires more physical space (the serving table takes up room). Hot dishes lose quality faster once on display. It is harder to create a precise "narrative" experience — the meal is an event backdrop rather than the centrepiece of the evening.</p>`,
  },
  {
    id: 'comparison',
    type: 'content' as const,
    subtitle: 'Side by Side',
    title: 'Plated vs Buffet: Direct Comparison',
    body: `<p>Here is how the two formats compare across the factors that most influence the decision:</p>

    <p><strong>Cost:</strong> Buffet is the baseline. Plated service adds 20–35% due to the extra time required for individual plating, higher service-staff ratio (1 server per 4–6 guests vs 1 per 10–15 for buffet), and the precision required for simultaneous service. For a 10-person dinner, a plated menu at IDR 2,000,000/person would typically be IDR 1,500,000–1,600,000/person in buffet format.</p>

    <p><strong>Formality:</strong> Plated is inherently formal — seated, sequenced, attentive. Buffet can range from relaxed garden parties to semi-formal corporate suppers depending on how it is styled. Linen tablecloths, candelabras, and labeled artisan serving ware can elevate a buffet significantly.</p>

    <p><strong>Speed of Service:</strong> Buffet is faster to begin eating and more forgiving of latecomers. Plated service requires all guests to be present and seated before each course goes out — a 30-minute delay for one guest can affect the whole table experience.</p>

    <p><strong>Dietary Accommodations:</strong> Buffet handles dietary complexity better at scale — each dish is labeled, guests self-select. For plated service with multiple dietary variations (vegan, gluten-free, nut-free), the chef must track every seat and prepare multiple plate variations simultaneously.</p>

    <p><strong>Photography:</strong> Plated wins clearly. Each plate is a composition — styled, consistent, photographable in sequence. Buffet spreads photograph well as a whole, but individual plates are self-assembled and inconsistent.</p>

    <p><strong>Minimum Guest Count:</strong> Plated service works from 2 guests upward and is most impactful at 2–12. Buffet is most efficient at 8 guests minimum — below that, the setup effort outweighs the benefit.</p>`,
  },
  {
    id: 'by-occasion',
    type: 'features' as const,
    subtitle: 'By Occasion',
    title: 'Which Format Works Best for Your Event Type',
    features: [
      {
        icon: Star,
        title: 'Weddings & Proposals',
        desc: 'Plated for the main table (couple, bridal party, close family) — up to 12. Buffet for the guest reception if total attendance exceeds 20. A hybrid approach — plated entrée, buffet dessert and grazing station — is increasingly popular for Bali villa weddings of 20–50 guests.'
      },
      {
        icon: Users,
        title: 'Corporate Team Dinners',
        desc: 'Buffet almost always. Corporate groups are diverse (dietary, cultural background, alcohol preferences), timing is unpredictable, and the relaxed format encourages the cross-team conversation the event is designed to create. Plated corporate dinners work for client entertainment of 6–8 people.'
      },
      {
        icon: Flame,
        title: 'Birthday Celebrations',
        desc: 'Depends on the atmosphere the guest of honour wants. Milestone birthdays (40th, 50th) often call for a plated dinner with a curated menu. Casual group celebrations (10+ friends) suit a BBQ buffet or grazing spread where the food is part of the social backdrop, not the main focus.'
      },
      {
        icon: Utensils,
        title: 'Romantic Dinners & Anniversaries',
        desc: 'Plated, always. For 2–6 guests, plated service is the format. The chef choreographs each course, pacing the evening. A 5-course tasting menu with wine pairings is the signature myCHEF romantic dinner format. See our <a href="/fine-dining/romantic-dinner" class="text-[#7E6410] hover:underline font-medium">romantic dinner page</a> for full details.'
      },
      {
        icon: CheckCircle,
        title: 'Family Villa Stays',
        desc: 'Hybrid: buffet-style lunch (children eat when hungry, parents eat at leisure) and plated or semi-plated dinner for adults after children have been served their own course. The chef manages both streams simultaneously, timing the adult meal after the kids are settled.'
      },
      {
        icon: Clock,
        title: 'Yoga & Wellness Retreats',
        desc: 'Buffet for group meals — guests have varied appetites and timing after sessions. Emphasis on labeling (gluten-free, vegan, raw) and visual presentation. Sharing-board format works particularly well for plant-forward wellness retreats. See our <a href="/catering/retreat-catering" class="text-[#7E6410] hover:underline font-medium">retreat catering page</a> for dedicated options.'
      },
    ],
  },
  {
    id: 'hybrid',
    type: 'content' as const,
    subtitle: 'Hybrid Options',
    title: 'Family-Style, Stations, and Hybrid Formats',
    body: `<p>Between fully plated and fully buffet, a range of hybrid formats exist that are worth understanding — particularly for Bali villa events where the setting allows flexibility.</p>

    <p><strong>Family-Style (Sharing):</strong> Large platters of each dish are placed at the table and guests serve themselves from shared bowls. Combines the visual abundance of a buffet with the seated intimacy of plated service. Works well for Indonesian rijsttafel (12–15 dishes in sharing bowls around a central rice bowl) and is the format used for most traditional Balinese ceremonial meals. Best for 6–20 guests.</p>

    <p><strong>Food Stations:</strong> Separate themed preparation stations (carving station, satay station, dessert station, raw bar) spread around the venue. Guests circulate between stations, chat with chefs, and self-select. More theatrical than standard buffet, requires more floor space and more chefs. Best suited for villa events of 30+ guests where flow and social movement are part of the design.</p>

    <p><strong>Plated Entrée + Buffet Main:</strong> The chef plates and serves a composed appetiser or amuse-bouche to create an elegant opening, then transitions to a buffet for the main courses (which allows volume and variety). Finishes with a plated dessert for visual impact. This hybrid captures the wow moments of plated service at a lower total cost and works well for 15–40 guests.</p>

    <p><strong>Cocktail + Grazing:</strong> No formal sit-down — standing cocktail format with grazing boards (cheese, charcuterie, seasonal fruit, artisan breads, dips) and circulating canapés. Lowest cost per head, maximally social, but not a substitute for a dinner. Used best for pre-dinner drinks reception or late-evening birthday parties where guests have already eaten.</p>`,
  },
  {
    id: 'decision-framework',
    type: 'content' as const,
    subtitle: 'Decision Framework',
    title: 'How to Decide: A Three-Question Framework',
    body: `<p>If you are still uncertain after reading the sections above, run through these three questions in order. The answers usually converge on one clear format.</p>

    <p><strong>Question 1: How many guests?</strong><br/>
    Under 8 → plated or family-style almost always.<br/>
    8–20 → both viable; move to Question 2.<br/>
    20+ → buffet, stations, or hybrid unless budget is very high.</p>

    <p><strong>Question 2: What is the primary goal of the evening?</strong><br/>
    The meal IS the experience (romantic dinner, tasting menu, proposal) → plated.<br/>
    The meal SUPPORTS the experience (celebration, networking, retreat) → buffet or hybrid.<br/>
    Unsure → lean buffet; it is more forgiving.</p>

    <p><strong>Question 3: What are the dietary requirements?</strong><br/>
    All guests eat everything → plated is straightforward.<br/>
    3+ distinct dietary tracks (vegan + gluten-free + nut-free + etc.) → buffet is safer and cheaper.<br/>
    1–2 dietary exceptions in a group → plated can accommodate with advance notice, small premium.</p>

    <p>For most Bali villa events, the answer arrives quickly. Two couples on honeymoon → plated, no question. Family of 12 with mixed dietary needs → buffet with family-style sharing elements. Twenty colleagues at a company offsite → buffet with a live satay station. The framework surfaces the trade-offs; our team helps you execute whichever you choose.</p>

    <p>See our full <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing page</a> and <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">cost breakdown guide</a> for format-specific pricing at different group sizes.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Get Expert Advice',
    title: 'Not Sure Which Format Fits Your Event? Ask Us.',
    body: "Tell us your group size, occasion, and budget — we will recommend the right format and send a sample menu within a few hours.",
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%20want%20advice%20on%20buffet%20vs%20plated%20service%20for%20my%20event' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  { question: 'How much does catering in Bali cost?', answer: 'Villa formats are quoted per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { question: 'What formats do you offer?', answer: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { question: 'Is catering the same as private chef hire?', answer: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Do prices include staff and cleanup?', answer: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { question: 'Can you cook in an Airbnb villa?', answer: 'Yes with a workable kitchen — share the listing when booking.' },
  { question: 'Minimum guest counts?', answer: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { question: 'Can menus be customised?', answer: 'Yes — proteins, spice, diets locked before shopping.' },
  { question: 'Travel fees?', answer: 'Remote areas may add a fee quoted upfront.' },
  { question: 'Can we add a mobile cocktail bar?', answer: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
  { question: 'Kids and allergies?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { question: 'How do I book catering?', answer: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
  { question: 'Rain plan?', answer: 'Covered setups and indoor pivots planned ahead.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const RELATED_PAGES = [
  { label: 'Catering Services', href: '/catering', desc: 'Browse all myCHEF catering formats and packages.' },
  { label: 'Buffet Catering', href: '/catering/buffet', desc: 'Full details on myCHEF buffet catering for Bali villas.' },
  { label: 'Plated Catering', href: '/catering/plated-catering', desc: 'Plated service details, pricing, and menu options.' },
  { label: 'Villa Catering', href: '/catering/villa-catering', desc: 'Catering services specific to Bali villa events.' },
  { label: 'Bali Catering Menus', href: '/blog/bali-catering-menu', desc: 'Seasonal ingredients and cuisine styles for villa catering.' },
  { label: 'Pricing Guide', href: '/pricing', desc: 'Full pricing for all catering formats and group sizes.' },
  { label: 'Event Planning Bali', href: '/blog/event-planning-bali', desc: 'Complete logistics guide for Bali villa events.' },
]

export default function BuffetVsPlatedPage() {
  return (
    <PremiumPage
      slug="blog/buffet-vs-plated-service-bali"
      title="Buffet vs Plated Service: Choosing the Right Style for Your Bali Event"
      description="Complete guide to buffet vs plated catering in Bali. Compare costs, formality, group size, dietary flexibility, and occasion suitability to choose the right."
      seoTitle="Buffet vs Plated Service Bali | Which Format Is Right? | myCHEF"
      seoDescription="Buffet or plated service for your Bali villa event? Compare costs, group size thresholds, formality and dietary flexibility. Expert guide from myCHEF chefs."
      canonicalUrl="https://mychef.id/blog/buffet-vs-plated-service-bali"
      h1="Buffet vs Plated Service"
      subtitle="Choosing the Right Catering Style for Your Bali Villa Event"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="Elegant plated dinner and buffet spread at a Bali villa — comparing catering service styles"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['buffet vs plated service', 'buffet or plated wedding dinner', 'plated vs buffet catering bali', 'bali wedding buffet vs sit down', 'catering format bali villa']}
      highlights={['Plated Service', 'Buffet Service', 'By Occasion', 'Decision Framework']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Buffet vs Plated Service Bali', 'https://mychef.id/blog/buffet-vs-plated-service-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Buffet vs Plated Service: Choosing the Right Style for Your Bali Event',
          description: 'Complete guide to buffet vs plated catering in Bali. Compare costs, formality, group size, dietary flexibility, and occasion suitability.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-27',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/buffet-vs-plated-service-bali' },
          url: 'https://mychef.id/blog/buffet-vs-plated-service-bali',
          wordCount: 1600,
          keywords: 'buffet vs plated service, buffet or plated wedding dinner, plated vs buffet catering bali',
        },
      ]}
      ctaText="Get Catering Advice"
      ctaSubtext="Tell us your group and occasion — we recommend the right format and send a sample menu within hours."
    />
  )
}
