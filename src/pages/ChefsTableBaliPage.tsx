import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: "Chef's Table Experience in Bali -- Private Interactive Dining at Your Villa",
    body: `A chef's table dinner is the most immersive dining experience myCHEF offers. Guests sit at the kitchen pass or a dedicated table adjacent to the cooking station, watching the chef work, asking questions, tasting components as they develop, and understanding the story behind each dish as it is prepared. The result is a meal that is as intellectually engaging as it is delicious.

In top restaurants, the chef's table is the most sought-after reservation -- a small number of seats behind the kitchen pass where a handful of guests get to see the real kitchen rather than the polished front of house. At a Bali villa, the entire dining experience becomes the chef's table. There is no front of house or back of house. There is just your villa, your group, a chef who is entirely focused on you, and food that is designed, explained, and served with complete transparency.

myCHEF provides chef's table experiences for groups of 4--16 guests across Bali's villa areas. Each experience is different because each chef is different -- and because no two groups are the same.`,
  },
  {
    id: 'what-happens',
    type: 'content',
    title: "What Happens at a Chef's Table Dinner",
    body: `The format varies by chef and group size, but a typical myCHEF chef's table experience unfolds like this:

**Welcome and Introduction (30 minutes before service)**
The chef meets the group, introduces themselves, and walks through the menu. This is where guests learn about the culinary philosophy behind the meal, the origin of key ingredients, and the techniques that will be showcased. Questions are encouraged. For wine-pairing evenings, the sommelier introduces the bottles.

**Live Cooking Station**
The chef cooks at a visible station -- typically the villa kitchen island or an outdoor cooking setup. Guests are seated close enough to watch, smell, and interact. The chef narrates as they work: why the pan is heated to this temperature, how this particular acid changes the balance of the dish, what makes Balinese spice blends different from Thai or Indian ones.

**Course-by-Course Service**
Each course is presented and plated in front of the guests. The chef explains the dish before guests eat: the inspiration, the technique, the key ingredient, and the pairing rationale. Service is relaxed and conversational -- a long-table dinner where the cook and the guests inhabit the same space throughout.

**Kitchen Involvement (optional)**
Some groups prefer a participatory element: guests learn a specific technique, plate a course alongside the chef, or prepare one element under guidance. This works especially well for food-interested guests and small groups.

**Dessert and Close**
The final course often includes a demonstration element -- tempering chocolate, caramelising sugar, plating a composed dessert -- before the meal concludes.`,
  },
  {
    id: 'menu-philosophy',
    type: 'content',
    title: "The Menu: What Makes a Chef's Table Experience Different",
    body: `A chef's table menu is built differently from a standard dinner menu. Because guests are watching the process, the menu is chosen partly for what it reveals about cooking craft, not just for what tastes good at the table.

**Technique-Forward Dishes** -- A standard dinner menu might feature a beautifully slow-roasted lamb. A chef's table menu might showcase the exact same lamb but with a dry-brine technique demonstrated, a jus made from scratch over the course of the evening, and a reduction that guests can smell building over 40 minutes.

**Ingredient Storytelling** -- The menu is anchored to ingredients with a story: hand-dived scallops from Lombok, heirloom tomatoes from an organic farm in Bedugul, young coconut sourced from the villa's own garden. Knowing where food comes from changes how it tastes.

**Small Portions, Maximum Range** -- A chef's table menu typically runs 6--8 courses with smaller portion sizes. This allows the chef to show range -- different proteins, different cooking methods, different flavour profiles -- without overwhelming guests.

**Adaptability** -- Because the chef is present and cooking live, adjustments are genuinely possible. A guest who cannot eat shellfish does not get a substituted plate from a separate preparation -- the chef pivots the course entirely for the table.`,
  },
  {
    id: 'formats',
    type: 'content',
    title: "Chef's Table Formats We Offer",
    body: `**Classic Chef's Table (4--10 guests)**
The intimate version: a 6--8 course menu, one chef cooking live, guests seated around the kitchen station. Duration: 3--4 hours. From IDR 1,500,000/person.

**Chef's Table with Sommelier Pairing (4--10 guests)**
The full experience: a 6--8 course menu paired with 5--6 wines. The sommelier presents each wine at the same time the chef presents each course, creating a dual narrative of food and wine. From IDR 2,200,000/person.

**Chef's Table with Cooking Participation (4--8 guests)**
For groups who want more than observation. Guests participate in 1--2 course preparations under chef guidance. Typically includes a short technique lesson (knife skills, emulsification, pastry) before the meal begins. From IDR 1,800,000/person.

**Chef's Table for Couples (2 guests)**
The most intimate version. A chef cooks a bespoke 5--6 course menu for two, explaining and presenting each course personally. Perfect for proposals, honeymoons, and milestone anniversaries. From IDR 1,200,000 total (not per person).

All formats include ingredients, menu design, service, and cleanup. Minimum 72-hour booking window for ingredient sourcing.`,
  },
  {
    id: 'chefs',
    type: 'content',
    title: "The Chefs Who Lead Chef's Table Experiences",
    body: `Not every chef is suited to a chef's table format. The role requires not only cooking skill but confidence with narration, genuine enthusiasm for food knowledge, and the ability to cook at a high level while simultaneously engaging with guests.

myCHEF's chef's table specialists have backgrounds in fine dining kitchens in Bali, Singapore, and Australia. They have trained under head chefs with Michelin experience, worked in open-kitchen restaurant formats, and built the communication skills to make complex cooking techniques accessible and interesting to non-cooks.

For bookings that specify a cuisine style -- French, Japanese, Balinese, modern Asian, or fusion -- we match the group with a chef whose specialty aligns. For guests who prefer flexibility, we recommend our best all-round chef's table specialists.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: "Book a Chef's Table Experience in Bali",
    body: `Tell us your villa location, dates, group size, and any cuisine preferences or dietary requirements. We will match you with the right chef and send a menu concept within 24 hours.`,
  },
]

const faqs = [
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
  { question: 'More questions?', answer: 'See the central <a href="/faq">FAQ</a>.' },
  { question: 'What deposit do you require?', answer: 'A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  { question: 'What does "++" mean on prices?', answer: '"++" means 11% government tax and 10% service charge are added to the listed price. Written quotes show the all-in total before you pay.' },
  { question: 'Which areas of Bali do you cover?', answer: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href="/locations">locations</a>.' },
  { question: 'How far in advance should I book?', answer: 'A few days for most dinners; one to two weeks for larger events; longer for peak season and weddings. Last-minute is often possible — ask on WhatsApp.' },
  { question: 'Can you accommodate allergies and special diets?', answer: 'Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance, at no extra charge. Guide: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies</a>.' },
  { question: 'Do you clean up after service?', answer: 'Yes on serviced chef, catering and fine-dining formats — kitchen and service areas restored before we leave.' },
  { question: 'How do I get a quote?', answer: 'WhatsApp date, guest count, villa area and what you want. Or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/faq">FAQ</a>.' },
  { question: 'What if a chef or staff member cannot make it?', answer: 'We send a verified replacement of equivalent role or refund that service. Details: <a href="/why-mychef">why myCHEF</a>.' },
]

const relatedPages = [
  { label: 'Private Dining Bali', href: '/private-dining-indonesia', desc: 'Full in-villa private dining guide' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa private chef service' },
  { label: 'Plated Dinner Catering', href: '/catering/plated-catering', desc: 'Formal multi-course dinner service' },
  { label: 'Sommelier Hire Bali', href: '/in-villa-service/sommelier', desc: 'Wine pairing for fine dining events' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Intimate couples dining experiences' },
  { label: 'Cooking Class Bali', href: '/fine-dining', desc: 'Hands-on cooking with a private chef' },
]

export default function ChefsTableBaliPage() {
  return (
    <PremiumPage
      slug="blog/chefs-table-bali"
      title="Chef's Table Bali -- Private Interactive Dining Experience at Your Villa"
      seoTitle="Chef's Table Bali -- Exclusive In-Villa Interactive Dining Experiences"
      description="Book a chef's table experience in Bali. A private chef cooks live at your villa, presenting each course with technique narration and ingredient storytelling. 4--10 guests, from IDR 1.5M/person."
      seoDescription="Chef's table in Bali for 4--10 guests. Private chef cooks live at your villa with narration, ingredient stories and optional wine pairing. From IDR 1.5M/person."
      h1="Chef's Table Bali -- Private Interactive Dining at Your Villa"
      subtitle="Watch your private chef cook every course, understand the techniques behind each dish, and eat the finest meal of your Bali trip."
      heroImage="/images/blog/chefs-table-bali.jpg"
      heroImageAlt="Professional Balinese chef presenting a beautifully plated course to guests seated at an intimate villa chef's table dining experience"
      ogImage="/images/blog/chefs-table-bali.jpg"
      canonicalUrl="https://mychef.id/blog/chefs-table-bali"
      keywords={[
        "chef's table bali",
        "chefs table bali",
        'chef table experience bali',
        'interactive chef dinner bali',
        'private chef table bali',
        'kitchen table dining bali',
        'chef station dinner bali',
        'watch chef cook bali',
        'tasting menu chef bali',
        'exclusive dining experience bali',
      ]}
      highlights={["6--8 Course Menus", 'Live Cooking Station', 'Optional Wine Pairing', 'From IDR 1.5M/person']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Chef's Table"
      ctaSubtext="Tell us your group size and dates -- we will match you with the right chef and send a menu concept."
      extraJsonLd={[
        breadcrumbSchema("Chef's Table Bali", 'https://mychef.id/blog/chefs-table-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: "Chef's Table Bali -- Private Interactive Dining Experience at Your Villa",
          description:
            "Book a private chef's table experience in Bali. Live cooking, course narration, and optional wine pairing for 4--10 guests at your villa.",
          url: 'https://mychef.id/blog/chefs-table-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/chefs-table-bali.jpg',
        },
      ]}
    />
  )
}
