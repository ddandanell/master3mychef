import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Calendar, Users } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Event Planning',
    title: 'Event Planning in Bali: Complete Guide for Weddings & Celebrations',
    body: `<p>Bali's infinity-pool villas and year-round weather make it a prime destination for hosted events. The key is understanding logistics: vendor coordination, cultural considerations, and weather contingencies.</p>
    <p>This guide walks you through event types, venue selection, <a href="/catering" class="text-[#C5A028] hover:underline font-medium">catering</a>, staffing, budgeting, and timelines for weddings, corporate retreats, and private celebrations.</p>`,
  },
  {
    id: 'event-types',
    type: 'features' as const,
    subtitle: 'Event Types',
    title: 'Types of Events in Bali',
    features: [
      { icon: Calendar, title: 'Weddings', desc: 'Small (10–40), Medium (50–100), Large (100–200+). Timeline: 3–12 months planning. Budget: IDR 45M–3B+.' },
      { icon: Users, title: 'Corporate Retreats', desc: 'Team-building (3–5 days), Executive Conferences (1–3 days), Wellness (5–7 days). Budget: IDR 2.25M–7.5M per person per day.' },
      { icon: Calendar, title: 'Private Celebrations', desc: 'Birthdays, anniversaries, family reunions (15–50 guests). Budget: IDR 7.5M–225M depending on scale.' },
    ],
  },
  {
    id: 'venue-selection',
    type: 'content' as const,
    subtitle: 'Venues',
    title: 'Venue Selection: Villa, Beach, Garden Setup',
    body: `<p><strong>Private Villa (Most Popular):</strong> Intimate, all-in-one accommodation + event space, kitchen access, privacy, flexible timing. Limited capacity (20–40 people comfortably). Weather risk (indoor backup required). Best for weddings under 50 guests, intimate celebrations, multi-day events.</p>
    <p><strong>Beach Venue (Sunset Views):</strong> Photographic backdrop, flexible setup. Popular in <a href="/locations/seminyak" class="text-[#C5A028] hover:underline font-medium">Seminyak</a> and <a href="/locations/uluwatu" class="text-[#C5A028] hover:underline font-medium">Uluwatu</a>. Tide and weather contingencies, sand logistics, noise restrictions. Best for afternoon/evening celebrations, 20–100 guests.</p>
    <p><strong>Villa Garden + Pavilion (Optimal Balance):</strong> Garden ceremony/cocktails, pavilion for weather protection, villa kitchens for prep. Weather flexibility, intimate feel with event infrastructure. Best for 40–100 guests.</p>`,
  },
  {
    id: 'catering-staffing',
    type: 'content' as const,
    subtitle: 'Logistics',
    title: 'Catering & Staffing for Events',
    body: `<p><strong>Catering Team Structure:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li><strong>20–50 guests:</strong> 1–2 chefs, 2–3 service staff, 1 setup person</li>
      <li><strong>50–100 guests:</strong> 2–3 chefs, 4–6 service staff, 1–2 coordinators</li>
      <li><strong>100+ guests:</strong> 4–6 chefs, 8–12 service staff, 2–3 coordinators, bar manager</li>
    </ul>
    <p><strong>Menu by Event Type:</strong> <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">Wedding fine dining</a> (3–5 courses, IDR 1.5M–3M/person), Corporate Retreat (casual breakfast/lunch, themed dinner, IDR 600K–1.2M/day), Birthday/Anniversary (personalized, IDR 1.2M–2.25M/person).</p>`,
  },
  {
    id: 'timeline',
    type: 'content' as const,
    subtitle: 'Planning Timeline',
    title: 'Timeline: 3 Months Ahead vs. Last-Minute Events',
    body: `<p><strong>Ideal Timeline (3 Months Ahead):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li><strong>Month 1 (90 days before):</strong> Secure venue and key vendors (caterer, coordinator). Define guest list and dietary needs. Menu ideation with chef.</li>
      <li><strong>Month 2 (60 days before):</strong> Finalize menu and confirm pricing. Arrange catering contract. Send guest invitations. Book bar, photography, music.</li>
      <li><strong>Month 3 (30 days before):</strong> Confirm final head count. Finalize seating and logistics. Brief all staff on dietary, cultural, logistical details. Plan weather contingencies.</li>
    </ul>
    <p><strong>Contingency Timeline (6–8 weeks):</strong> Limits customization but doable. Vendor availability may be tighter. Menu must be simpler.</p>
    <p><strong>Last-Minute Events (1–2 weeks):</strong> Premium surcharges (20–50%). Limited chef availability. Menu must be straightforward. Only suitable for small events (under 30 people).</p>`,
  },
  {
    id: 'budget-planning',
    type: 'content' as const,
    subtitle: 'Budget',
    title: 'Budget Planning & Cost Breakdown',
    body: `<p><strong>50-Person Event Budget Tiers:</strong></p>
    <p><strong>Budget:</strong> <a href="/catering" class="text-[#C5A028] hover:underline font-medium">Catering</a> IDR 750K/person, Staff IDR 300K/person, Venue IDR 7.5M–30M, Coordinator IDR 4.5M, Decor IDR 4.5M, Music IDR 3M, Photography IDR 4.5M = IDR 53M–68M total for 50 guests.</p>
    <p><strong>Mid-Range:</strong> Catering IDR 1.5M/person, Staff IDR 600K/person, Venue IDR 30M–75M, Coordinator IDR 9M, Decor IDR 15M, Music IDR 7.5M, Photography IDR 12M = IDR 103M–133M total.</p>
    <p><strong>Luxury:</strong> Catering IDR 3M/person, Staff IDR 1.2M/person, Venue IDR 75M+, Coordinator IDR 18M, Decor IDR 45M+, Music IDR 22.5M+, Photography IDR 30M+ = IDR 208M+ total.</p>
    <p><strong>Money-Saving Tips:</strong> Daytime events cost less than evening. Buffet or BBQ < plated service. Single menu option < multiple choices. Local ingredients < imported. Weekday < weekend. Group catering < à la carte.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Plan',
    title: 'Plan Your Bali Event With Expert Coordination',
    body: 'Get in touch with our team to discuss your dates, villa, guest count, and culinary vision — or <a href="/quote" class="text-[#C5A028] hover:underline font-medium">request a free quote</a> now.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'Browse Catering', href: '/catering' },
  },
]

const FAQS = [
  {
    question: 'How much advance notice should I give for an event?',
    answer: '3 months is ideal. 6–8 weeks is acceptable. 1–2 weeks is possible for small events, but premium surcharges apply.',
  },
  {
    question: 'Can I have a wedding in Bali without renting a separate venue?',
    answer: 'Yes. Many couples choose private villa weddings (10–50 guests) for intimacy. Larger weddings (100+) typically use dedicated event venues or resorts.',
  },
  {
    question: 'Do you handle corporate retreats?',
    answer: 'Yes. We specialize in team-building retreats with daily catering (breakfast, lunch, dinner), staff coordination, and tailored activities.',
  },
  {
    question: 'What happens if it rains during an outdoor event?',
    answer: 'Plan for weather contingencies. Use pavilions or tents for dining. Have indoor backup spaces ready. Discuss backup plans with your coordinator.',
  },
  {
    question: 'Can I customize the catering menu for an event?',
    answer: 'Absolutely. Every menu is tailored to your guest count, dietary needs, cuisine preferences, and budget.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet event-experienced chefs.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore menu options for your event.' },
  { label: 'Fine Dining', href: '/blog/fine-dining-guide', desc: 'Premium tasting menus for special dinners.' },
  { label: 'Catering Services', href: '/catering', desc: 'Full catering and event options.' },
  { label: 'Contact', href: '/contact', desc: 'Discuss your event details with our team.' },
]

export default function EventPlanningBaliPage() {
  return (
    <PremiumPage
      slug="blog/event-planning-bali"
      title="Event Planning in Bali: Complete Guide for Weddings & Private Celebrations"
      description="Complete Bali event planning guide. Catering, staffing, venue setup, and timeline for weddings, corporate events, and celebrations."
      seoTitle="Event Planning in Bali | Weddings, Corporate, & Celebrations"
      seoDescription="Complete Bali event planning guide. Catering, staffing, venue setup, and timeline for weddings, corporate events, and celebrations."
      canonicalUrl="https://mychef.id/blog/event-planning-bali"
      h1="Event Planning in Bali"
      subtitle="Complete Guide for Weddings & Private Celebrations"
      heroImage="/generated/mychef-events-bali-baby-shower-hero.webp"
      heroImageAlt="Bali villa setup for wedding reception with catering"
      ogImage="https://mychef.id/generated/mychef-events-bali-baby-shower-hero.webp"
      keywords={['event planning bali', 'bali wedding catering', 'corporate retreat bali']}
      highlights={['Event Types', 'Venue Selection', 'Catering & Staffing', 'Budget Planning']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Event Planning Bali', 'https://mychef.id/blog/event-planning-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Event Planning in Bali: Complete Guide for Weddings and Private Celebrations',
          description: 'Complete Bali event planning guide. Catering, staffing, venue setup, and timeline for weddings, corporate events, and celebrations.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2025-04-15',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-events-bali-baby-shower-hero.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/event-planning-bali' },
          url: 'https://mychef.id/blog/event-planning-bali',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Plan a Private Event in Bali',
          description: 'Step-by-step guide to planning a wedding, corporate retreat, or private celebration in Bali — covering venue selection, catering, staffing, budgeting, and timelines.',
          totalTime: 'PT60M',
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'IDR',
            value: '53000000',
          },
          step: [
            {
              '@type': 'HowToStep',
              name: 'Define Event Type and Guest Count',
              text: 'Determine the event category (wedding, corporate retreat, or private celebration), expected number of guests, and overall budget tier (budget, mid-range, or luxury) to guide every subsequent decision.',
              position: 1,
            },
            {
              '@type': 'HowToStep',
              name: 'Select and Secure a Venue',
              text: 'Choose between a private villa (ideal for under 50 guests), a beach venue (20–100 guests), or a villa garden and pavilion combination (40–100 guests). Book the venue first as availability drives all other bookings.',
              position: 2,
            },
            {
              '@type': 'HowToStep',
              name: 'Hire Key Vendors 90 Days Out',
              text: 'Secure your caterer, event coordinator, bar, photography, and music at least 3 months before the event. At this stage, begin menu ideation with the chef and collect dietary requirements from guests.',
              position: 3,
            },
            {
              '@type': 'HowToStep',
              name: 'Finalize Catering and Staffing Plan',
              text: 'Confirm the catering team size for your guest count (1–2 chefs and 2–3 staff for 20–50 guests; scale up proportionally). Finalize the menu — 3–5 courses for weddings, casual daily catering for retreats — and sign the catering contract 60 days out.',
              position: 4,
            },
            {
              '@type': 'HowToStep',
              name: 'Confirm Logistics and Weather Contingencies',
              text: 'Thirty days before the event, confirm final headcount, brief all staff on dietary and cultural details, arrange a weather backup plan (indoor space or pavilion), and finalize seating and service flow.',
              position: 5,
            },
            {
              '@type': 'HowToStep',
              name: 'Execute and Enjoy the Event',
              text: 'On the day, welcome vendors and staff, run a brief pre-event walkthrough, confirm meal timing, and allow the coordinator and catering team to manage logistics so you can focus on your guests.',
              position: 6,
            },
          ],
        },
      ]}
      ctaText="Plan Your Event"
      ctaSubtext="Connect with our team to discuss your dates, venue, and catering needs."
    />
  )
}
