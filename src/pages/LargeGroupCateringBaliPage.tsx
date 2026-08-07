import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Users, Shield, Clock, Truck } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The Scale Challenge',
    title: 'Why Large Group Catering in Bali Requires a Different Approach',
    body: `<p>Most private chefs in Bali work comfortably for groups of 8–20. Above that threshold, the equation changes: villa kitchens aren't designed for simultaneous production of 80 covers, timing margins collapse, and a single logistical failure affects every guest at once. This is why most Bali caterers quietly cap their capacity at 20–30 guests — or over-promise and underdeliver when groups grow.</p>

    <p>myCHEF approaches large group catering differently. We deploy multi-chef teams with designated roles, use off-site prep kitchens for high-volume preparation, and bring professional chafing equipment, burners, prep tables, and service ware to every event. The villa becomes the theatre; the production happens behind the scenes.</p>

    <p><strong>What "large group catering" means at each scale:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>30–50 guests:</strong> Still intimate enough for family-style sharing or live stations. Two chefs and three servers can manage effectively with careful choreography and pre-event prep.</li>
      <li><strong>50–80 guests:</strong> Buffet or station format becomes the natural choice. Service flow requires dedicated station staff. Setup time extends to 3–4 hours minimum.</li>
      <li><strong>80–120 guests:</strong> Full multi-chef team with a production coordinator. Off-site prep is standard at this scale. Venue logistics — power, space, access — become critical planning inputs.</li>
      <li><strong>120–200+ guests:</strong> Event-scale deployment: 5+ chefs, 12+ servers, a full event coordinator, and venue inspection 48–72 hours before the event. We have catered up to 350 guests for villa weddings and resort functions.</li>
    </ul>

    <p>The key to large group catering is not just cooking volume — it is orchestration. Every element of the event, from ingredient delivery at dawn to the last plate cleared after midnight, is sequenced. Our team briefs on arrival, assigns stations, confirms service windows, and executes with the precision that only comes from doing this at scale, repeatedly, across Bali's most demanding event venues. We serve large groups across Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, Jimbaran, and beyond — including beach clubs and resorts.</p>`,
  },
  {
    id: 'why-mychef',
    type: 'content' as const,
    subtitle: 'Why myCHEF',
    title: 'Large Group Catering Built on Real Experience',
    body: `<p>myCHEF has served more than 560 villas across Bali, and large group events are where our operational discipline matters most. We have catered villa weddings for 350 guests, corporate retreats for 120, and family reunions for 80 — all with the same standard of food quality and service timing. Our multi-chef teams are not assembled ad hoc; they are trained together, briefed together, and deployed with a production coordinator who manages the entire event flow.</p>

    <p>We serve all major Bali villa areas — Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, Jimbaran, and beyond — as well as beach clubs, resorts, and dedicated event venues. Wherever your group is gathering, we bring the equipment, the team, and the planning to execute without compromise.</p>`,
  },
  {
    id: 'formats',
    type: 'content' as const,
    subtitle: 'Service Formats',
    title: 'Which Catering Format Works Best at Scale',
    body: `<p>The right catering format for a large group isn't simply the one that looks best on a mood board — it's the one that can be executed reliably for 80 people under real venue conditions. Here's how each format performs at scale.</p>

    <p><strong>Live Stations (most popular for 40+ guests)</strong><br/>
    Live cooking stations — a wok station firing Indonesian stir-fry to order, a satay grill with skewers rotating over charcoal, a carving station with whole roasted meats, a pasta or noodle station — are the highest-impact format for large groups. Guests move between stations at their own pace, eliminating the timing pressure of simultaneous plated service. Station chefs become part of the entertainment: the sizzle of the wok and the smoke of the satay grill are atmosphere, not just food. Live stations are best suited to villa events of 40–150 guests where there is sufficient outdoor or garden space to spread the stations across the venue.</p>

    <p><strong>Buffet (best for 80+ guests)</strong><br/>
    A myCHEF buffet is not the hotel breakfast spread. It is a fully staffed, continuously replenished service: dedicated station attendants, hygienic sneeze-guard presentation where required, hot dishes held at temperature in professional chafing units, and a chef on hand to top up, refresh, and maintain presentation standards throughout service. For groups of 80 or more, a well-executed buffet is the most efficient format — it handles dietary diversity, flexible timing, and high volume simultaneously. We typically design buffets around 10–16 dishes: a base of Balinese and Indonesian staples, live-action accompaniments, and a dedicated dessert station.</p>

    <p><strong>Family-Style / Sharing (best for 30–60 guests)</strong><br/>
    Large sharing platters placed at each table combine the informality of a buffet with the intimacy of a seated dinner. Guests serve themselves from communal bowls — the Indonesian way of eating, which translates naturally to villa dining. Family-style is ideal for corporate retreats, multi-family villa stays, and milestone celebrations where the meal is meant to feel convivial rather than formal. It requires more floor space at each table and slightly more serving ware per cover, but the effect — dishes passed, stories shared — is unmatched for groups of 30–60.</p>

    <p><strong>Plated Service (for formal dinners up to 80 guests)</strong><br/>
    Plated service at scale is achievable but resource-intensive. The standard ratio is one server per 8 guests; for 80 people that means 10 servers moving simultaneously in a coordinated pass. Every plate must leave the kitchen within the same 8-minute window. When it works — and with the right team it does work — it is the most elegant format available. We recommend plated service for formal seated dinners up to 80 guests where the event brief explicitly calls for it, and where the venue layout allows a single large dining configuration.</p>`,
  },
  {
    id: 'staffing',
    type: 'features' as const,
    subtitle: 'Our Approach',
    title: 'How myCHEF Staffs Large Group Events',
    features: [
      {
        icon: Users,
        title: 'Multi-Chef Teams',
        desc: 'Every large group event is staffed with a head chef plus sous chefs and commis scaled to guest count. Roles are designated before arrival: production, plating, station, replenishment. No single point of failure.',
      },
      {
        icon: Shield,
        title: 'HACCP Certified',
        desc: 'All large-scale events follow HACCP food safety protocols: temperature logging, allergen separation, chilled transport, and hygiene checks at each production stage. Required at scale — applied at every scale.',
      },
      {
        icon: Clock,
        title: 'Precision Timing',
        desc: 'For plated service, all covers are served within an 8-minute window. For buffet and stations, replenishment cycles are set so dishes never sit empty or over-aged. Timing is rehearsed, not improvised.',
      },
      {
        icon: Truck,
        title: 'Equipment & Logistics',
        desc: 'We bring everything: professional chafing dishes, burners, serving ware, prep tables, cold storage, and linen. The villa kitchen is supplemented, not relied upon. Equipment is sized to the event, not adapted from a smaller rig.',
      },
    ],
  },
  {
    id: 'scale-guide',
    type: 'content' as const,
    subtitle: 'Staffing by Guest Count',
    title: 'Team Size and Pricing Guide by Group Scale',
    body: `<p>The table below provides our standard staffing model for large group events in Bali. These are starting points — specific menus, venue complexity, service format, and event duration all affect the final team composition.</p>

    <p><strong>30–50 guests:</strong> 2 chefs + 3 servers. This team handles family-style sharing or a simple live station with confidence. Setup time: 2–3 hours. From IDR 700,000/person for sharing buffet format.</p>

    <p><strong>50–80 guests:</strong> 3 chefs + 5 servers. Multiple concurrent stations or a full buffet with live-top service. A dedicated service captain manages flow between kitchen and dining area. Setup time: 3–4 hours. From IDR 700,000/person (buffet or stations).</p>

    <p><strong>80–120 guests:</strong> 4 chefs + 8 servers + 1 production coordinator. Off-site prep begins the morning of the event. The production coordinator manages timing between prep kitchen, transport, and venue setup. This scale requires a site visit or detailed venue brief in advance. Setup time: 4–5 hours. From IDR 700,000/person (buffet or stations).</p>

    <p><strong>120–200 guests:</strong> 5+ chefs + 12+ servers + event coordinator. Full event-scale deployment. The event coordinator manages all vendor touchpoints (equipment rentals, linen, staffing schedule, dietary tracking). A venue inspection is conducted 48–72 hours before the event. Setup time: 5–6 hours minimum. From IDR 700,000/person (buffet) to IDR 750,000/person (plated with full silver service).</p>

    <p>All pricing is indicative and subject to menu complexity, service duration, and venue logistics. We provide itemized quotes within 4 hours of receiving your brief. For events above 150 guests, contact us directly for a dedicated event consultation.</p>`,
  },
  {
    id: 'logistics',
    type: 'content' as const,
    subtitle: 'Venue Planning',
    title: 'What We Need to Know to Execute Flawlessly',
    body: `<p>Large group catering success is planned, not improvised on arrival. The venue considerations that don't matter for a 10-person dinner become critical at 100 guests. Here's what we assess before committing to a proposal.</p>

    <p><strong>Kitchen access and capacity:</strong> Most Bali villa kitchens are designed for household cooking, not event production. We assess available burner count, oven capacity, refrigeration, prep surface area, and whether the kitchen can support our team alongside the property's house staff. For groups above 80, we typically supplement with off-site prep or bring portable production units.</p>

    <p><strong>Power supply:</strong> Professional chafing equipment, induction burners, and lighting require stable power. We confirm amperage availability in advance and bring our own distribution boards and extensions where needed. A power outage during service is not a risk we accept on behalf of our clients.</p>

    <p><strong>Prep area and flow:</strong> We need a dedicated prep area separate from the service zone. For large events this means 20–40 square metres of covered workspace. If the property doesn't have this, we work with the venue to designate a temporary prep zone.</p>

    <p><strong>Parking and access for team vehicles:</strong> Our team for a 100-person event typically arrives in 3–4 vehicles carrying equipment, ingredients, and staff. We confirm parking and loading access in advance — particularly important for villas with narrow driveways or shared access roads.</p>

    <p><strong>Setup time:</strong> For events of 80–120 guests, we require 4–5 hours of uninterrupted setup time before service begins. For 120–200 guests, allow 5–6 hours. Rushing setup is the most common cause of service failures in large events — we protect this window as part of the contract.</p>

    <p>When you contact us for a large group quote, share: guest count, date and time, venue name and location, preferred format (buffet, stations, plated, or advice needed), and any known dietary requirements. We will ask follow-up questions and, for events above 80 guests, schedule a venue call or site visit before finalizing the proposal.</p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'Booking Large Group Catering in Three Steps',
    body: `<p><strong>Step 1 — Share your brief:</strong> Message us on WhatsApp with your guest count, venue, date, and preferred format. For groups above 80, we schedule a venue call or site visit before proposing. We send a detailed itemised quote within 4 hours.</p>

    <p><strong>Step 2 — Lock in the team:</strong> Once you confirm, we reserve the chef team, production coordinator, equipment, and off-site prep kitchen if needed. We also conduct a dietary intake to map every guest's requirements.</p>

    <p><strong>Step 3 — Execute flawlessly:</strong> The team arrives 3–6 hours before service (depending on group size), sets up production and service areas, and runs the event through to full clean-up. You host; we handle the logistics.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Large Group Catering FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Request a Proposal',
    title: 'Get a Large Group Quote',
    body: 'Share your guest count, venue, and event type — we\'ll send a detailed proposal within 4 hours.',
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%20need%20catering%20for%20a%20large%20group%20in%20Bali.',
    },
    secondaryAction: { label: 'Get a Quote', href: '/quote' },
  },
]

const FAQS = [
  { question: 'How much does catering in Bali cost?', answer: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
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
  { label: 'Corporate Catering', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Team dinners, offsites, and corporate event catering in Bali.' },
  { label: 'Buffet vs Plated', href: '/catering', desc: 'Which catering format works best for your event and group size.' },
  { label: 'Wedding Catering', href: '/events/weddings', desc: 'Private chef and catering for Bali villa weddings.' },
  { label: 'Pricing Guide', href: '/pricing', desc: 'Full pricing for all catering formats and group sizes.' },
  { label: 'Bachelor Party Bali', href: '/blog/bachelor-party-bali-private-chef', desc: 'Private chef catering for bachelor party groups at Bali villas.' },
  { label: 'Event Planning Bali', href: '/blog/event-planning-bali', desc: 'Complete logistics guide for planning events at Bali villas.' },
]

export default function LargeGroupCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/large-group-catering-bali"
      title="Large Group Catering Bali | Private Chef for 30–200 Guests"
      description="Catering for large groups in Bali from 30 to 200 guests. Buffet, stations, family-style, or plated. Multi-chef teams. Villa, beach club, or resort."
      seoTitle="Large Group Catering Bali | Private Chef for 30–200 Guests | myCHEF"
      seoDescription="Catering for large groups in Bali from 30 to 200 guests. Buffet, stations, family-style, or plated. Multi-chef teams. Villa, beach club, or resort. Get a quote."
      canonicalUrl="https://mychef.id/blog/large-group-catering-bali"
      h1="Large Group Catering Bali"
      subtitle="Private Chef & Catering for Groups of 30–200 at Bali Villas"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="Large group catering setup at a Bali villa — multi-chef team service by myCHEF"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['large group catering bali', 'catering 30 guests bali', 'private chef large group bali', 'villa catering 50 guests bali', 'bali event catering large group']}
      highlights={['Formats', 'Staffing', 'Logistics', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Large Group Catering Bali', 'https://mychef.id/blog/large-group-catering-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Large Group Catering Bali: Private Chef & Catering for Groups of 30–200',
          description: 'Catering for large groups in Bali from 30 to 200 guests. Buffet, stations, family-style, or plated. Multi-chef teams. Villa, beach club, or resort.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/large-group-catering-bali' },
          url: 'https://mychef.id/blog/large-group-catering-bali',
          wordCount: 1800,
          keywords: 'large group catering bali, catering 30 guests bali, private chef large group bali',
        },
      ]}
      ctaText="Get a Large Group Quote"
      ctaSubtext="Share your guest count, venue, and event type — we'll send a detailed proposal within 4 hours."
    />
  )
}
