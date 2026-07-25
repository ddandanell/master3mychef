import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { ChefHat, Star, Users, Clock } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Villa Entertaining, Redefined',
    title: 'Why a Private Villa Dinner Party Beats Any Restaurant in Bali',
    body: `<p>Booking a restaurant for a dinner party in Bali sounds straightforward — until the reality sets in. You are competing for reservations weeks in advance, you are seated elbow-to-elbow with strangers, the menu is fixed, the noise makes conversation impossible, and the taxi logistics for twelve people become their own project. The evening belongs to the restaurant, not to you.</p>

    <p>A private dinner party at your Bali villa turns that formula on its head. Your space, your timeline, your menu. The chef arrives three hours before your guests — prepping, plating, and staging everything while you shower and relax. Guests arrive to candlelight, fresh flowers, and a cold glass of champagne. No commute, no queue, no shouting over ambient music.</p>

    <p>The private chef difference goes beyond convenience. When you brief a chef on your guests — who has a shellfish allergy, who is vegetarian, who celebrates a birthday tonight — that information shapes every dish. The meal is designed around your people, not a standardised menu optimised for throughput. A Michelin-trained chef cooking for twelve in a private villa brings a level of attention that no restaurant kitchen ever can.</p>

    <p>Bali's villa architecture is built for this format. A pool terrace with a long dining table, lanterns reflected in the water, the sound of cicadas replacing restaurant chatter — it is the setting every Bali dinner party should have. When guests remember the evening a year later, they will not remember the restaurant. They will remember the villa, the food, and the way the whole evening felt effortless.</p>

    <p>myCHEF handles every element: menu design, ingredient sourcing, full table service, and post-dinner cleanup. You plan nothing on the night. You just host.</p>`,
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'Planning Your Event',
    title: 'How to Plan a Bali Villa Dinner Party',
    body: `<p>A successful villa dinner party starts with three decisions: guest count, theme, and venue setup. Get those right and everything else follows naturally.</p>

    <p><strong>Guest count (4–30):</strong> Our private dinner party service scales from an intimate table of four to a larger villa celebration of thirty. Under ten guests, plated service delivers the most elegant experience — each course arrives simultaneously, the chef controls pacing, and the meal itself becomes the event. Between twelve and twenty, family-style sharing works beautifully — large platters at the table create a convivial atmosphere without the logistical complexity of full plated service. Above twenty, a hybrid format (plated starter, sharing mains, plated dessert) keeps the drama while serving the volume.</p>

    <p><strong>Theme ideas:</strong> Themes sharpen both the menu and the décor brief. Popular choices include a <em>Balinese Feast</em> — whole roasted fish, lawar, bebek betutu, sambal matah, rice — which plays perfectly to the setting and surprises guests who expected a Western menu. <em>Modern Indonesian</em> takes those same flavours and elevates them to fine-dining presentation: compressed watermelon with prawn and torch ginger, slow-braised short rib with rendang spice, jackfruit dessert with palm sugar ice cream. <em>Mediterranean</em> works well for mixed groups — burrata, cured meats, fresh pasta, grilled whole snapper with herbs. We can also design bespoke themes on request.</p>

    <p><strong>Venue setup:</strong> Pool terrace is the default and the setting guests photograph most. Long-table dining with candles, greenery runners, and soft lighting creates the defining visual of the evening. Indoor joglo dining suits wet-season events or groups that prefer air conditioning. If your villa has both, we often recommend cocktails and canapés by the pool followed by dinner in the joglo.</p>

    <p><strong>Timing:</strong> Invite guests for 7pm. Chef arrives at 4pm. Canapés and welcome drinks from 7pm. Dinner at 8pm. The chef is typically done and off-site by 11pm. This rhythm gives the kitchen enough prep time and the evening enough breathing room.</p>`,
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'Menu Planning',
    title: 'Designing the Menu for Your Dinner Party',
    body: `<p>The menu is the heart of the evening. We design every dinner party menu from scratch — no fixed packages, no pre-set options. The brief is simple: tell us who your guests are, what they love, what they cannot eat, and what kind of evening you want. We take it from there.</p>

    <p><strong>3-course vs 5-course:</strong> A three-course dinner (starter, main, dessert) runs two to two-and-a-half hours and suits most birthday dinners, farewell parties, and casual celebrations. Five courses (amuse-bouche, starter, palate cleanser, main, dessert) extends the evening to three-plus hours and suits milestone anniversaries, corporate entertaining, and groups who want the full fine-dining experience. We also offer a seven-course tasting menu for small groups of up to eight guests who want something exceptional.</p>

    <p><strong>Dietary accommodations:</strong> We handle all dietary requirements with advance notice: vegetarian, vegan, gluten-free, nut-free, dairy-free, halal, and individual allergies. When we know the seat positions, every dietary variation is tracked and plated separately — your guests with restrictions never feel like an afterthought. They receive a dish as carefully composed as everyone else's.</p>

    <p><strong>Mixing Western and Indonesian elements:</strong> Our most popular menus blend both traditions. A canapé of prawn on crispy tempeh with sambal aioli. A starter of yellowfin tuna with ponzu, cucumber, and sesame. A main of grilled wagyu with rendang jus and cassava gratin. A dessert of dark chocolate tart with coconut ice cream and pandan crumble. These menus feel both globally sophisticated and unmistakably Balinese.</p>

    <p><strong>Champagne arrival canapés:</strong> We strongly recommend a canapé course while guests arrive and the first drinks are poured. Four to six canapés (two bites each) set the tone and give the kitchen time to plate the starter properly. Favourites include tuna tartare on wonton, burrata crostini with heirloom tomato, and mini beef skewers with chimichurri.</p>

    <p><strong>Sample 5-course menu:</strong> Amuse-bouche: chilled cucumber gazpacho with prawn oil. Starter: compressed watermelon, white prawn, torch ginger, and lime. Palate cleanser: yuzu granita. Main: slow-braised wagyu short rib, rendang glaze, cassava gratin, charred broccolini. Dessert: dark chocolate fondant, palm sugar caramel, coconut sorbet.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What We Provide',
    title: 'Everything Included in Your Villa Dinner Party',
    features: [
      {
        icon: ChefHat,
        title: 'Michelin-Trained Chef',
        desc: 'A professional chef with fine-dining credentials handles everything from mise en place to the final plate — bringing restaurant-grade execution directly to your villa kitchen.',
      },
      {
        icon: Star,
        title: 'Custom Menu Design',
        desc: 'Every menu is designed specifically for your guests: their preferences, dietary requirements, the occasion, and the atmosphere you want to create. No templates, no shortcuts.',
      },
      {
        icon: Users,
        title: 'Groups 4–30',
        desc: 'From an intimate dinner for four to a larger villa party of thirty — we scale the service format (plated, sharing, or hybrid) to match your group size and occasion.',
      },
      {
        icon: Clock,
        title: 'Full Evening Service',
        desc: 'The chef arrives three hours before your guests and stays through full cleanup. You arrive at your own party relaxed. You leave without a dish to wash.',
      },
    ],
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Perfect Occasions',
    title: 'Which Occasions Work Best for a Villa Dinner Party',
    body: `<p>A private villa dinner is the format that fits every occasion that matters — because it removes the compromises that restaurants force on you.</p>

    <p><strong>Birthday dinners:</strong> The most popular occasion we cater. Whether it is a milestone 40th with twelve friends or a quiet celebration for six, a villa dinner removes the birthday paradox — the person who should be enjoying the evening most is usually the one organising logistics. We handle everything. The guest of honour simply arrives. Menu suggestion: a personalised tasting menu with a signature dessert — we can recreate a favourite dish or create something entirely new for the occasion.</p>

    <p><strong>Farewell parties:</strong> When someone is leaving Bali for good, a villa dinner gives the evening the weight it deserves. Intimate, unhurried, genuinely focused on the people in the room. Menu suggestion: a Balinese feast — the foods your guest will miss most, all on one table.</p>

    <p><strong>Company retreats and team dinners:</strong> A shared meal at a private villa does more for team cohesion than any activity. The relaxed setting, family-style serving, and absence of a restaurant environment breaks down the formality that corporate dining usually carries. Menu suggestion: sharing boards and a mixed Indonesian-Western menu that accommodates varied dietary requirements across a diverse team.</p>

    <p><strong>Anniversary dinners:</strong> Our most refined format. A five-course plated menu with wine pairings, candles, and a villa that belongs entirely to you for the evening. No other diners, no background noise, no interruptions. See our <a href="/events/anniversaries" class="text-[#7E6410] hover:underline font-medium">anniversary dinner guide</a> for full details and menu inspiration.</p>

    <p><strong>Milestone celebrations:</strong> Promotions, engagements, a completed project, a personal achievement — moments that deserve more than a restaurant dinner but less than a full event. A villa dinner sits perfectly in that space: elevated and personal, without the scale or formality of a large event.</p>

    <p><strong>Reunion dinners:</strong> Friends who have not been in the same room for years deserve a setting that lets them actually talk. A private villa removes the ambient noise, the time pressure, and the distractions of a restaurant. Menu suggestion: a long, relaxed sharing menu — something the group can graze on for three hours without a server pressing them to leave.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Questions',
    title: 'Frequently Asked',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Get Started',
    title: 'Plan Your Private Villa Dinner Party',
    body: 'Tell us your guest count, date, and villa — we will send a bespoke menu proposal and quote within 2 hours.',
    primaryAction: {
      label: 'Plan Your Dinner Party',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20plan%20a%20private%20dinner%20party%20at%20my%20Bali%20villa.',
      external: true,
    },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'How far ahead should I book a villa dinner party chef?',
    answer: '1–2 weeks in advance is ideal and gives us the most time to design your menu, source premium ingredients, and assign the right chef for your occasion. We can accommodate requests with as little as 48 hours notice depending on availability — contact us directly for urgent bookings.',
  },
  {
    question: "What's included in the dinner party package?",
    answer: 'Everything needed for the evening: the chef, all fresh ingredients, cooking equipment, full table service throughout dinner, and complete post-dinner cleanup. You do not need to provide anything beyond your villa kitchen and the dining space. Tableware and glassware can be discussed during the planning call.',
  },
  {
    question: 'Can I choose the menu?',
    answer: '100%. Every menu is designed around your brief — your preferences, your guests\' dietary requirements, your preferred cuisine style, and the atmosphere you want to create. We present a draft menu proposal and refine it through one or two rounds of feedback until it is exactly right.',
  },
  {
    question: 'How many guests can you cater for at a villa dinner?',
    answer: 'We cater villa dinner parties from 4 to 30 guests comfortably. For groups of 4–12 we typically recommend plated service. For 12–20 we often suggest family-style sharing. For 20–30 a hybrid format works best. We adjust the service format and staffing based on your final guest count.',
  },
  {
    question: 'Do you supply tableware and décor?',
    answer: 'We supply all service equipment: serving platters, utensils, and everything the kitchen needs. For tableware (plates, glassware, cutlery) and décor, we can coordinate with our trusted Bali suppliers on request — this is a common add-on for events where the villa tableware is not sufficient or where the host wants a specific aesthetic.',
  },
  {
    question: 'What does a private villa dinner party cost in Bali?',
    answer: 'Private villa dinner parties start from IDR 700,000 per person for a 3-course menu, and from IDR 750,000 per person for a 5-course menu. Final pricing depends on guest count, menu complexity, and any additional service staff required. We send a detailed quote with your bespoke menu proposal — typically within 2 hours of your enquiry.',
  },
]

const RELATED_PAGES = [
  { label: 'Private Chef Bali', href: '/', desc: 'Full private chef service for villa stays, events, and special occasions.' },
  { label: 'Catering Villa Bali', href: '/catering/villa-catering', desc: 'Complete villa catering for groups and events of all sizes.' },
  { label: 'Buffet vs Plated Service', href: '/catering', desc: 'Compare service formats to find the right fit for your dinner party.' },
  { label: 'Anniversary Dinner Bali', href: '/events/anniversaries', desc: 'Private chef anniversary dinner guide: menus, timing, and romantic setup.' },
  { label: 'Pricing Guide', href: '/pricing', desc: 'Full pricing for private chef dinners, catering, and event service.' },
  { label: 'Event Planning Bali', href: '/blog/event-planning-bali', desc: 'Complete logistics guide for planning Bali villa events.' },
]

export default function PrivateDinnerPartyBaliPage() {
  return (
    <PremiumPage
      slug="blog/private-dinner-party-bali"
      title="Private Dinner Party Bali | Villa Dinner Parties with a Private Chef"
      description="Host a private dinner party at your Bali villa with a professional chef. Menu planning, setup, service — all handled. Groups of 4–30. From IDR 700,000/person."
      seoTitle="Private Dinner Party Bali | Villa Dinner Parties | myCHEF"
      seoDescription="Host a private dinner party at your Bali villa with a professional chef. Menu planning, setup, service — all handled. Groups of 4–30. From IDR 700,000/person."
      canonicalUrl="https://mychef.id/blog/private-dinner-party-bali"
      h1="Private Dinner Party Bali"
      subtitle="How to Host a Memorable Villa Dinner Party with a Private Chef"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Private dinner party setup at a Bali villa — candlelit table with private chef service by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['dinner party bali', 'private dinner party bali', 'villa dinner party bali', 'bali villa dinner party chef', 'private chef dinner party']}
      highlights={['Planning', 'Menu', 'Occasions', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Private Dinner Party Bali', 'https://mychef.id/blog/private-dinner-party-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Dinner Party Bali: How to Host a Memorable Villa Dinner Party with a Private Chef',
          description: 'Host a private dinner party at your Bali villa with a professional chef. Menu planning, setup, service — all handled. Groups of 4–30.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-dinner-party-bali' },
          url: 'https://mychef.id/blog/private-dinner-party-bali',
          wordCount: 1500,
          keywords: 'dinner party bali, private dinner party bali, villa dinner party bali, bali villa dinner party chef',
        },
      ]}
      ctaText="Plan Your Dinner Party"
      ctaSubtext="Tell us your guest count, date, and villa — we'll send a bespoke menu proposal within 2 hours."
    />
  )
}
