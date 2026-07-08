import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Shield, Users, Star, Clock } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Why Corporate Teams Choose a Private Chef',
    title: 'The Case for Private Chef Catering at Bali Corporate Events',
    body: `<p>When companies bring their teams to Bali — for offsites, product launches, leadership retreats, or client entertainment — the catering decision shapes the entire experience. Hotel banquet rooms are convenient, but they come with a trade-off: generic menus, shared venues, and the unmistakable sense that your event is one of several happening that day.</p>

    <p>A private chef changes the dynamic entirely. Your team eats at your venue, on your schedule, with a menu built around your dietary requirements and your event tone. For a fintech startup wanting to impress a remote team, that means an immersive Balinese feast on Day 1 and a celebration gala by Day 3. For a luxury brand entertaining press, it means a 7-course experience where every plate is a brand statement.</p>

    <p>The practical advantages matter too: dietary flexibility is built in from the planning stage rather than bolted on as an afterthought. Timing coordinates with your agenda rather than a hotel kitchen's service schedule. And the privacy of a villa means confidential conversations can happen freely, without adjacent tables or rotating service staff.</p>

    <p>The three case studies below document how myCHEF has delivered for corporate clients across different event types, scales, and briefs. Results, menus, and real client outcomes — not hypotheticals.</p>`,
  },
  {
    id: 'case1',
    type: 'content' as const,
    subtitle: 'Case Study 1 — Tech Retreat',
    title: 'European Fintech Startup: 45-Person Annual Retreat, Canggu',
    body: `<p><strong>The brief:</strong> A European fintech company brought 45 team members to a Canggu villa complex for a 3-day annual retreat. The team needed full catering across all three days — welcome dinner, working lunches, and a closing gala — while staying entirely on-property between sessions.</p>

    <p><strong>The challenge:</strong> Dietary diversity was significant: 8 vegans, 4 gluten-free, 3 halal requirements, and 2 nut allergies — across a team of 45. The company had run a retreat the previous year with hotel catering and received consistent feedback that "the food felt like conference food." They wanted the team to feel the Bali experience, not just a buffet line.</p>

    <p><strong>What myCHEF delivered:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>Day 1 — Welcome Balinese Feast:</strong> A full traditional Indonesian spread — babi guling (with halal-separate pork-free station), lawar, sate lilit, nasi kuning, and jackfruit rendang for plant-based guests. All dietary tracks served from labeled stations, no one singled out with a "special plate."</li>
      <li><strong>Day 2 — Interactive Lunch Stations:</strong> Four themed stations (Indonesian street food, fresh salad bar, grilled protein, vegan grain bowls), each clearly labeled by dietary category. Team members could graze between sessions without waiting for service.</li>
      <li><strong>Day 3 — Gala Dinner (5 Courses):</strong> Plated tasting menu with simultaneous dietary variations. Amuse-bouche through dessert, served by a dedicated team of 2 service staff alongside 2 chefs.</li>
    </ul>

    <p><strong>Staffing deployed:</strong> 2 chefs + 2 service staff across 3 days, 7 meal services.</p>

    <p><strong>The result:</strong> Post-retreat survey showed food as the most-mentioned positive highlight — mentioned by 38 of 45 respondents unprompted. Zero dietary incidents across all seven services. The client confirmed repeat booking for the following year's retreat before leaving Bali.</p>

    <blockquote style="border-left:3px solid #C5A028;padding-left:1.25rem;margin:1.25rem 0;font-style:italic;color:#4A4745;">
      "The food was the most-mentioned highlight in our post-retreat survey. People kept saying it felt like Bali, not like a conference." — Head of People Operations
    </blockquote>

    <p><strong>Total investment:</strong> IDR 185,000,000 for 3 days, 45 guests, 7 services. Approximately IDR 590,000 per person per day — significantly below comparable hotel retreat packages with full privacy and customisation.</p>`,
  },
  {
    id: 'case2',
    type: 'content' as const,
    subtitle: 'Case Study 2 — Brand Launch',
    title: 'International Luxury Brand: Product Launch Dinner, Seminyak',
    body: `<p><strong>The brief:</strong> An international luxury goods brand was launching a new product line in Southeast Asia and chose Bali as the location for the regional press and VIP dinner. 22 VIP guests and 8 press representatives — including journalists from regional lifestyle publications and two with significant social followings.</p>

    <p><strong>The challenge:</strong> The menu had to feel as premium as the product. Press attendees would photograph everything, and the brand needed the food to become part of the story — not a footnote. Any mismatch between the product's luxury positioning and the dining experience would be noticed. Zero margin for error.</p>

    <p><strong>What myCHEF delivered:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>7-Course Tasting Menu:</strong> Built around Indonesian luxury ingredients — A5 wagyu from local Seminyak suppliers, live lobster thermidor with kaffir lime butter, black truffle risotto with local mushroom medley, and a dessert course featuring single-origin Javan chocolate and mango sorbet.</li>
      <li><strong>Custom Amuse-Bouche Presentation:</strong> The opening bite was presented inside a concept vessel that echoed the product's signature packaging design — coordinated with the brand's creative director in the week prior.</li>
      <li><strong>Tablescaping Coordination:</strong> myCHEF coordinated with the villa's decorator on florals, linen, and table layout to ensure the dining environment was consistent with the brand aesthetic. Plates were sourced to match the brand's primary colourway.</li>
      <li><strong>Service Protocol:</strong> Uniformed service staff trained on simultaneous plating service for 30 covers, silent plate clearing, and press-appropriate pacing (longer intervals to allow photography between courses).</li>
    </ul>

    <p><strong>The result:</strong> 14 press features published in the following 3 weeks mentioned the dinner specifically — not just the product. Three journalists subsequently contacted myCHEF directly requesting private chef recommendations for personal dinners and future editorial shoots. The brand's regional head described it as "the cleanest brand-to-plate execution we've done in the region."</p>

    <blockquote style="border-left:3px solid #C5A028;padding-left:1.25rem;margin:1.25rem 0;font-style:italic;color:#4A4745;">
      "We needed the food to feel like it was part of the brand. It did. Fourteen press features mentioned the dinner." — Regional Marketing Director
    </blockquote>

    <p><strong>Total investment:</strong> IDR 45,000,000 for 30 covers, 7-course tasting menu with matched service staff and full setup coordination.</p>`,
  },
  {
    id: 'case3',
    type: 'content' as const,
    subtitle: 'Case Study 3 — Executive Offsite',
    title: 'Regional FMCG Group: Leadership Strategy Dinner, Ubud',
    body: `<p><strong>The brief:</strong> The CEO and 11 senior leaders of a regional FMCG group were convening in Ubud for a 2-day strategy offsite. They needed a private dinner on the first evening — not a social dinner, but a working dinner where strategic conversation could continue naturally through the meal.</p>

    <p><strong>The challenge:</strong> Executive teams doing real strategy work have a specific requirement that sounds simple but is rarely executed well: the meal should not interrupt the conversation. No ceremonial interjections from staff, no disruptive plating theatrics, no service that commands attention. The food needed to be genuinely exceptional — these are leaders who eat well regularly — but the service had to be nearly invisible.</p>

    <p><strong>What myCHEF delivered:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>4-Course Seated Dinner:</strong> A menu structured for a working dinner — no messy sharing plates, no bones or difficult-to-eat presentations, composed courses that allowed eating and conversation simultaneously. Indonesian-inspired fine dining: smoked duck amuse-bouche, prawn bisque, slow-braised short rib with cassava purée, and a passionfruit tart.</li>
      <li><strong>Briefed Timing Protocol:</strong> The chef was given a 30-minute inter-course window and instructed to hold courses until given a subtle signal from the host, rather than arriving on a fixed schedule.</li>
      <li><strong>Silent Service:</strong> Two service staff trained specifically to pour, clear, and refill without verbal interaction unless addressed. No course announcements, no ingredient descriptions unless requested. The table was never left understocked.</li>
      <li><strong>Dietary Integration:</strong> One guest was vegan, one was gluten-intolerant. Both dietary tracks were handled within the same 4-course structure — no separate plate presentation that would signal their requirements to the table.</li>
    </ul>

    <p><strong>The result:</strong> The executive team extended the offsite by one full day and added a second myCHEF dinner to the schedule — the highest possible signal that the first delivered. The client's EA contacted myCHEF directly to book the group's next Bali visit before departing.</p>

    <blockquote style="border-left:3px solid #C5A028;padding-left:1.25rem;margin:1.25rem 0;font-style:italic;color:#4A4745;">
      "We extended by a day and asked for a second dinner. That should tell you everything about the first one." — Chief Strategy Officer
    </blockquote>

    <p><strong>Total investment:</strong> IDR 28,000,000 for 12 covers, 4-course plated dinner with two service staff and full dietary coordination.</p>`,
  },
  {
    id: 'why-mychef',
    type: 'features' as const,
    subtitle: 'For Corporate Clients',
    title: 'Why B2B Clients Choose myCHEF',
    features: [
      {
        icon: Shield,
        title: 'Dietary Safety',
        desc: 'HACCP-certified food handling with zero allergy incidents across 180+ corporate events. Every dietary requirement is logged, briefed to the chef, and verified before service — not managed on the day.',
      },
      {
        icon: Users,
        title: 'Groups 8–200',
        desc: 'Staffing and service style scale precisely to your headcount. Intimate executive dinners of 8–12, team retreats of 30–60, and conference catering for 120–200 are all within our core capability.',
      },
      {
        icon: Star,
        title: 'Brand-Aligned Execution',
        desc: 'We match your event tone, not ours. Whether that means invisible service for a working dinner or theatrical presentation for a press launch, we brief to your brief — not a standard format.',
      },
      {
        icon: Clock,
        title: 'Precise Timing',
        desc: 'Courses coordinate with your agenda. We hold, advance, and pace to your schedule — not the kitchen\'s. If your afternoon session runs long, the dinner waits without quality loss.',
      },
    ],
  },
  {
    id: 'faq',
    type: 'faq' as const,
    title: 'Corporate Catering Questions',
    subtitle: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Get a Corporate Quote',
    title: 'Planning a Corporate Event in Bali?',
    body: 'Tell us your group size, dates, and event type — we\'ll send a tailored proposal within 4 hours.',
    primaryAction: {
      label: 'Get a Corporate Quote',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20discuss%20corporate%20catering%20for%20our%20Bali%20event.',
      external: true,
    },
    secondaryAction: { label: 'View Corporate Services', href: '/catering/corporate-catering' },
  },
]

const FAQS = [
  {
    question: "What's the minimum group size for corporate catering?",
    answer: '8 guests minimum for a dedicated private chef service. Below 8, we recommend our fine dining format, which works from 2 guests upward. For corporate events, 8 is the practical minimum for the staffing and setup to be efficient.',
  },
  {
    question: 'Can you handle multiple dietary requirements across a large team?',
    answer: 'Yes. We collect every dietary requirement during the planning stage and build menus so all dietary tracks — vegan, gluten-free, halal, nut-free, and others — are integrated into the main service with dedicated prep stations. No one receives a singled-out "special plate."',
  },
  {
    question: 'Do you provide service staff as well as chefs?',
    answer: 'Yes. myCHEF provides chefs, uniformed service staff, and event coordinators as a complete package. For corporate events, we match staffing ratios to the formality and scale of your event — from 1 staff per 6 guests for informal retreats to 1 per 4 for plated executive dinners.',
  },
  {
    question: 'Can you align the menu and presentation with our brand?',
    answer: "Yes. We've worked with luxury brands on presentation-aligned tasting menus, including custom amuse-bouche vessels, colourway-matched tableware sourcing, and coordination with your event decorator. We brief from your creative guidelines, not a standard format.",
  },
  {
    question: 'How far in advance should we book for a corporate retreat?',
    answer: '2–4 weeks for a single corporate dinner or event. 6+ weeks for large multi-day retreats, events during peak season (July–August, December), or events with complex logistics such as remote villa locations or high-volume guest counts.',
  },
]

const RELATED_PAGES = [
  { label: 'Corporate Events Catering', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Full guide to corporate event catering in Bali.' },
  { label: 'Staffing for Hotels', href: '/staffing/for-hotels-restaurants', desc: 'Chef and service staff placement for hospitality businesses.' },
  { label: 'Villa Catering', href: '/catering/villa-catering', desc: 'Catering services for Bali villa events of all sizes.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing guide for all myCHEF services and group sizes.' },
  { label: 'Event Planning Bali', href: '/blog/event-planning-bali', desc: 'Complete logistics guide for Bali villa events.' },
]

export default function CorporateCateringCaseStudiesPage() {
  return (
    <PremiumPage
      slug="blog/corporate-catering-bali-case-studies"
      title="Corporate Catering Bali: 3 Real Case Studies"
      description="See how myCHEF has delivered corporate catering for tech retreats, product launches, and leadership dinners in Bali. Results, menus, and real outcomes."
      seoTitle="Corporate Catering Bali Case Studies | Private Chef for Corporate Events | myCHEF"
      seoDescription="See how myCHEF has delivered corporate catering for tech retreats, product launches, and leadership dinners in Bali. Results, menus, and real outcomes."
      canonicalUrl="https://mychef.id/blog/corporate-catering-bali-case-studies"
      h1="Corporate Catering Bali: 3 Real Case Studies"
      subtitle="How Leading Companies Use myCHEF for Team Events in Bali"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Corporate team dinner at a Bali villa — private chef catering service by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['corporate catering bali', 'corporate event chef bali', 'team dinner bali', 'company retreat catering bali', 'business catering bali']}
      highlights={['Tech Retreat', 'Brand Launch', 'Leadership Offsite', 'Why myCHEF']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Corporate Catering Bali Case Studies', 'https://mychef.id/blog/corporate-catering-bali-case-studies', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Corporate Catering Bali: 3 Real Case Studies',
          description: 'See how myCHEF has delivered corporate catering for tech retreats, product launches, and leadership dinners in Bali. Results, menus, and real outcomes.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://mychef.id/blog/corporate-catering-bali-case-studies',
          },
          url: 'https://mychef.id/blog/corporate-catering-bali-case-studies',
          wordCount: 1800,
          keywords: 'corporate catering bali, corporate event chef bali, team dinner bali, company retreat catering bali',
        },
      ]}
      ctaText="Get a Corporate Quote"
      ctaSubtext="Tell us your group size, dates, and event type — we'll send a tailored proposal within 4 hours."
    />
  )
}
