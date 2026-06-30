import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Private Dining in Bali -- In-Villa Dining Experiences for Every Occasion',
    body: `Private dining in Bali is not a compromise -- it is the upgrade. No restaurant in Bali can offer what a private villa dining experience delivers: a menu designed specifically for you, a chef cooking exclusively for your group, service staff focused entirely on your table, and a setting that is unambiguously yours. No neighbouring tables, no background noise, no waiting. Just exceptional food in the most beautiful surroundings on the island.

myCHEF provides complete private dining experiences across Bali's villa areas. From an intimate dinner for two beside the pool to a 60-guest formal reception in an open-air pavilion, we design every element of the dining experience -- menu, service, timing, and atmosphere -- around the occasion and the people at the table.

We operate across Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan.`,
  },
  {
    id: 'what-private-dining',
    type: 'content',
    title: 'What Private Dining Actually Means',
    body: `Private dining means different things to different people. At its simplest, it means a meal cooked and served at your villa by a professional chef. At its most elaborate, it means a fully orchestrated multi-course dining event with a team of chefs, a sommelier, a dedicated service crew, and a menu that has been developed specifically for the occasion.

myCHEF delivers both -- and everything in between.

**Casual In-Villa Dining** -- A private chef prepares your meals in your villa kitchen, using fresh market ingredients sourced that morning. Breakfast, lunch, and dinner cooked to your preferences. No booking, no waiting, no restaurant. Just your villa, your schedule, and food that reflects exactly what you want to eat.

**Occasion Dining** -- A more structured experience designed around a specific event: a birthday dinner, an anniversary, a proposal, a family reunion. The chef designs a menu for the occasion, service staff are coordinated, and the meal unfolds as an experience rather than just food delivery.

**Fine Dining at the Villa** -- For guests who want the full fine-dining experience without leaving the property. Multi-course menus, formal service, wine pairings, and presentation that matches the best restaurants in Bali -- but in your private space.

**Intimate Group Dining** -- Villa holidays bring groups of 8, 12, or 20 together. Private dining gives the whole group the same table, the same food, and the same moment simultaneously. No splitting across restaurant tables, no one eating cold food while they wait for others to be served.`,
  },
  {
    id: 'what-included',
    type: 'content',
    title: 'What a myCHEF Private Dining Experience Includes',
    body: `Every private dining booking through myCHEF includes:

**Menu Design** -- Your chef designs a menu based on your preferences, dietary requirements, occasion, and the best ingredients available. You review and approve before the event. For larger occasions, we may offer multiple menu options.

**Fresh Ingredient Sourcing** -- All ingredients are purchased fresh on the day of the meal. We use Bali's best wet markets, premium fish suppliers, and trusted organic sources for produce.

**Professional Preparation and Cooking** -- Your chef arrives at the villa with everything needed to prepare the meal. Setup is clean and professional; the kitchen is always left in the condition it was found.

**Service** -- For casual dining, the chef can serve directly. For occasions, we include trained service staff who manage courses, drinks, clearing, and table management throughout the evening.

**Full Cleanup** -- Everything is cleaned before departure. No dishes left, no mess, no trace.

**Canapés and Amuse-Bouche (on request)** -- For formal occasion dining, a pre-dinner canapé pass sets the atmosphere before guests are seated.

**Wine and Beverage Coordination** -- We can advise on wine pairing, manage service of client-supplied wines, or arrange a sommelier add-on for full table-side wine service.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'Private Dining Occasions in Bali',
    body: `**Romantic Dinners** -- The classic in-villa private dining experience. A table set for two, candles, a custom menu, and complete privacy. Whether for a proposal, an anniversary, or simply a night you want to remember.

**Family Dinners** -- Multi-generational villa holidays bring together guests with very different tastes and dietary needs. A private chef designs a single menu that works for children and adults, accommodates allergies and preferences, and brings the whole family to the same table.

**Birthday Celebrations** -- From an intimate dinner for four to a celebration for 40, private dining transforms a birthday into a curated event. The chef can design a menu around the guest of honour's favourite foods, create a bespoke dessert, and time the evening around speeches and toasts.

**Wedding Week Dining** -- Rehearsal dinners, welcome parties, and post-wedding brunches all benefit from the private dining format. Guests from multiple countries sharing the same table at the same villa -- coordinated by a single team.

**Corporate Entertaining** -- Business dinners in Bali are a serious category. Private villa dining gives corporate hosts complete control over the environment, the food, the timing, and the impression they make on clients and partners.

**Honeymoon Dinners** -- A honeymoon dinner should feel otherworldly. A private chef, a poolside setting, a menu designed for the couple, and service that is attentive without being intrusive -- that is what myCHEF delivers for honeymooners.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Private Dining Pricing in Bali',
    body: `Cost depends on the type of experience, guest count, menu complexity, and staffing:

**Casual Daily Chef Service** -- From IDR 750,000/day for 2--4 guests (all meals). The chef cooks breakfast, lunch, and dinner using client-supplied grocery budget. Ingredients billed at market cost.

**Single Occasion Dinner (2--8 guests)** -- From IDR 450,000/person for a 3-course dinner including chef, ingredients, and light service. Add a sommelier or dedicated service staff for larger or more formal occasions.

**Occasion Dinner with Full Service (8--20 guests)** -- From IDR 600,000/person including chef, 3--4 courses, 2 service staff, and full setup and cleanup.

**Fine Dining Tasting Menu (4--12 guests)** -- From IDR 1,100,000/person for a 5-course menu with formal service. Includes amuse-bouche, matched course sequencing, and professional presentation.

**Large Group Private Dining (20+ guests)** -- Quoted on enquiry based on guest count, format, and service requirements.

All pricing includes fresh ingredients, chef, and basic service. Add-ons include sommelier hire (from IDR 1,500,000), additional service staff (IDR 350,000/waiter), and specialty ingredients.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Plan Your Private Dining Experience in Bali',
    body: `Tell us your villa location, dates, guest count, occasion, and any preferences or dietary requirements. We will design a dining experience and send a proposal within 24 hours.`,
  },
]

const faqs = [
  {
    question: 'How is private dining at a villa different from a restaurant?',
    answer:
      'The fundamental difference is exclusivity. At a restaurant, you share the kitchen, the staff, and the space with dozens of other guests. Private dining gives you a chef, a team, and a setting that exists only for your group that evening. The menu is designed for you, service is paced to your rhythm, and there is no noise or distraction from other diners. For special occasions, the difference in experience is significant.',
  },
  {
    question: 'Can a private chef accommodate complex dietary requirements?',
    answer:
      'Yes, and this is one of the primary advantages of private dining over restaurant dining. When you book a private chef, dietary requirements are built into the menu design from the start -- not accommodated as an afterthought. We regularly manage vegan, gluten-free, nut-free, halal, kosher, and complex elimination diets across all guests at the same table. Share requirements at booking and your chef designs around them.',
  },
  {
    question: 'How far in advance should we book private dining in Bali?',
    answer:
      'For a single dinner, 24--48 hours is typically sufficient. For a multi-day chef stay or an occasion dinner for 20+ guests, 3--7 days is recommended. During peak season (June--September, December--January), we recommend booking as early as possible -- premium chef availability fills quickly. For villa weddings and large-group events, 2--4 weeks gives us the time to confirm the right team and menu.',
  },
  {
    question: 'Do we need to supply anything for the private dining experience?',
    answer:
      'Your villa kitchen, basic cookware, and dining equipment (plates, glasses, cutlery) are used. Most Bali villas are well-equipped. The chef brings their own knives and specialist tools. Ingredients are sourced fresh by the chef on the day. Alcohol is supplied by the client -- we advise on quantities and can arrange wine if needed.',
  },
  {
    question: 'Can we have private dining at the beach or a location outside the villa?',
    answer:
      'For outdoor dining within the villa grounds -- poolside, in the garden, on the roof terrace -- absolutely. For external locations (beach, rice field, jungle clearing), we work with venue-specific setups and coordinate accordingly. Off-property dining requires advance planning and may involve additional logistics. Contact us with your vision and we will confirm what is possible.',
  },
]

const relatedPages = [
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full in-villa private chef service' },
  { label: "Chef's Table Bali", href: '/blog/chefs-table-bali', desc: 'Interactive chef dinner experience' },
  { label: 'Romantic Dinner Bali', href: '/blog/romantic-dinner-bali-private-chef', desc: 'Intimate dinners for couples' },
  { label: 'Plated Dinner Catering', href: '/blog/plated-dinner-catering-bali', desc: 'Formal multi-course table service' },
  { label: 'Proposal Dinner Bali', href: '/blog/proposal-dinner-bali-private-chef', desc: 'Private chef for proposals' },
  { label: 'Sommelier Hire Bali', href: '/blog/sommelier-hire-bali', desc: 'Wine pairing and table service' },
]

export default function PrivateDiningBaliPage() {
  return (
    <PremiumPage
      slug="blog/private-dining-bali"
      title="Private Dining Bali -- In-Villa Dining Experiences for Every Occasion"
      seoTitle="Private Dining Bali -- In-Villa Chef Experiences for Couples, Groups & Events"
      description="Private dining experiences in Bali villas. From intimate dinners for two to formal group receptions -- a private chef, tailored menu, and complete in-villa service for your occasion."
      seoDescription="Private dining in Bali. In-villa chef experiences for couples, families, and events. Custom menus, professional service, full cleanup. From IDR 450K/person. All villa areas covered."
      h1="Private Dining Bali -- In-Villa Chef Experiences for Every Occasion"
      subtitle="A private chef, a menu designed for you, and a setting that is entirely yours -- the finest way to dine in Bali."
      heroImage="/images/blog/private-dining-bali.jpg"
      heroImageAlt="Elegantly set outdoor dining table at a Bali villa with candles and tropical flowers, ready for an intimate private dinner"
      ogImage="/images/blog/private-dining-bali.jpg"
      canonicalUrl="https://mychef.id/blog/private-dining-bali"
      keywords={[
        'private dining bali',
        'in villa dining bali',
        'villa dining experience bali',
        'private dinner bali',
        'luxury dining at villa bali',
        'fine dining at home bali',
        'bespoke dining bali',
        'chef dinner at villa bali',
        'private dining experience bali',
        'exclusive dining bali',
      ]}
      highlights={['Custom Menu Design', 'Professional Service', 'All Villa Areas', 'From IDR 450K/person']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book Private Dining"
      ctaSubtext="Tell us your occasion, guest count, and villa location -- we will design a dining experience within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Private Dining Bali', 'https://mychef.id/blog/private-dining-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Dining Bali -- In-Villa Dining Experiences for Every Occasion',
          description:
            'Private dining experiences in Bali villas. Custom menus, professional chef, and full service for couples, groups, and special occasions.',
          url: 'https://mychef.id/blog/private-dining-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/private-dining-bali.jpg',
        },
      ]}
    />
  )
}
