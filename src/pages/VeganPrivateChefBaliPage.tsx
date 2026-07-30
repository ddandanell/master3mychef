import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Vegan Private Chef in Bali -- Plant-Based Chef Service for Villa Stays and Events',
    body: `Bali is one of the best places in the world to eat plant-based food. The island's produce -- fresh tropical fruits, organic vegetables from the Bedugul highlands, tempeh, coconut, jackfruit, and an extraordinary range of fresh herbs and spices -- is a plant-based kitchen's natural element. A vegan private chef in Bali is not a compromise: it is an opportunity to eat exceptionally.

myCHEF provides specialist vegan and plant-based private chef service across Bali. Whether you are a fully vegan household on a villa holiday, a mixed group where some guests eat vegan, or hosting a yoga retreat or wellness event that requires plant-based catering, we have chefs with the specific skills and creativity to deliver memorable vegan food.

We cover all major villa areas: Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan.`,
  },
  {
    id: 'what-vegan-chef',
    type: 'content',
    title: 'What a Vegan Private Chef Does Differently',
    body: `A vegan private chef is not simply a regular chef who removes animal products. The craft is different: building flavour depth without meat, dairy, or eggs requires genuine knowledge of umami from plants, fat from avocado and coconut, protein from legumes and fermented soy, and sweetness from whole fruits and natural sugars.

Our vegan-specialist chefs are trained and experienced in plant-based cuisine specifically. They know:

**Flavour Architecture Without Meat** -- How to build the savoury depth and satisfaction that non-vegan diners often miss when they eat plant-based food. Fermented ingredients, slow-cooked broths from vegetables and kombu, proper seasoning at every stage, and finishing acids that lift the whole dish.

**Protein Completeness** -- How to construct meals that provide complete amino acids and satisfying macros from plant sources. Beyond salads and steamed vegetables: hearty grain bowls, legume-based mains, fermented tempeh preparations, and protein-forward dishes that are genuinely filling.

**Textures That Satisfy** -- Bali has access to extraordinary ingredients that provide the variety of textures most essential to satisfying plant-based cooking: young jackfruit that pulls like meat when slow-cooked, king oyster mushrooms that have the bite of scallops, firm tofu that can be pressed and seared to a proper crust.

**Dairy-Free Richness** -- Coconut cream, cashew-based sauces, tahini emulsifications, and nut milk bases that deliver creaminess and body without any animal product.`,
  },
  {
    id: 'cuisine-styles',
    type: 'content',
    title: 'Vegan Cuisine Styles We Offer in Bali',
    body: `**Whole Food Plant-Based** -- The nutritional approach: maximum diversity of whole plant foods, minimal processing, no refined oils or added sugars. Grain bowls, legume-based stews, steamed and roasted vegetables with tahini-based dressings, fresh fruit, and sprouted grains. Ideal for wellness retreats and health-focused guests.

**Modern Indonesian Vegan** -- Balinese and Indonesian cuisine adapted for vegan guests. Tempeh cooked every way the Balinese cook it (fried, fermented, crumbled into sauces), jackfruit rendang, tofu satay with peanut sauce, vegetable gado-gado, sambal goreng with seasonal vegetables, and nasi campur with fully plant-based accompaniments.

**Plant-Based Fine Dining** -- For guests who want the full private chef tasting menu experience without animal products. Multi-course menus with modern plating, creative technique, and the kind of ingredient work that competes with the best vegan restaurants in the world. Suitable for celebrations, occasions, and guests who have sophisticated food knowledge.

**Raw and Living Foods** -- For guests who eat raw or predominantly raw. Fresh fruit and vegetable preparations, cold-pressed juices, smoothie bowls, dehydrated crackers, fermented vegetables, raw desserts, and sprouted-grain dishes. Requires additional planning but is a specialty we can deliver.

**Allergen-Specific Plant-Based** -- Vegan plus additional restrictions: gluten-free, nut-free, soy-free. We design menus that work within multiple constraint systems simultaneously. Common for wellness retreats and guests with complex dietary profiles.`,
  },
  {
    id: 'mixed-groups',
    type: 'content',
    title: 'Vegan Guests in Mixed-Diet Groups',
    body: `One of the most common requests we handle is a group where some guests eat vegan, some eat everything, and others are somewhere in between. This is a real kitchen management challenge -- and one our chefs handle every day.

The approach: design a core menu that is predominantly plant-based and works for everyone, then add protein additions (grilled fish, chicken, or beef) for non-vegan guests who want them. This is more efficient and produces better food than cooking two separate menus side by side.

In practice, this means:
- The main body of the meal (salads, grains, vegetable dishes, dips, sauces) is 100% vegan
- One or two protein courses have a plant-based option and an animal-protein option cooked separately
- Vegan guests never receive "the vegan plate" while everyone else eats differently -- they eat the same exceptional food, just without the added animal proteins

This approach works well for groups of 6--30 where dietary requirements are genuinely varied. We coordinate the menu design at the time of booking.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'When to Book a Vegan Private Chef in Bali',
    body: `**Villa Holiday Chef** -- Daily meals for a vegan household or group on a villa holiday. Breakfast, lunch, and dinner cooked fresh every day. No restaurants, no guesswork, no hidden animal products. Complete full day (breakfast, lunch and dinner) at IDR 2,700,000++/day; half-day and full-day options from IDR 1,000,000++/day — one chef and one dedicated assistant included, groceries at cost with receipts. Weekly rate 10% off, monthly rate 20% off. Prices are subject to a 10% service charge and 11% tax.

**Yoga and Wellness Retreat Catering** -- Bali is a major yoga retreat destination. We provide plant-based catering for multi-day and week-long retreats -- typically 2--3 meals per day for 8--30 participants, with a focus on nutrition and ingredient quality. Menus are designed in consultation with retreat facilitators.

**Single Occasion Vegan Dinner** -- A vegan dinner party or celebration for a group at a villa. Multi-course plant-based menu, professional service, and presentation that matches the finest vegan restaurants. From IDR 700,000/person.

**Plant-Based Cooking Class** -- A half-day session with a vegan specialist chef covering Balinese plant-based techniques, fermentation, coconut-based cooking, and Indonesian spice blends. Practical, engaging, and delicious. From IDR 800,000/person.

**Detox and Reset Programme Catering** -- Structured plant-based menus designed around nutritional reset objectives. Often paired with juice cleanses or fasting protocols. Designed in consultation with the guest and any nutritional requirements.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book a Vegan Private Chef in Bali',
    body: `Tell us your villa location, dates, guest count, vegan style preference (whole food, Indonesian, fine dining, raw), and any additional dietary requirements. We will confirm a specialist chef and send a menu proposal within 24 hours.`,
  },
]

const faqs = [
  {
    question: 'Is it easy to eat vegan in Bali?',
    answer:
      "Bali is genuinely one of the best places in the world to eat vegan. The island's natural produce -- tropical fruits, organic highland vegetables, tempeh, coconut, jackfruit, and extraordinary fresh herbs and spices -- is a plant-based kitchen's native ingredient list. With a specialist vegan private chef, you are not adapting a meat-based cuisine: you are cooking in an environment where plant-based food is naturally outstanding.",
  },
  {
    question: 'Can a vegan private chef cater for mixed groups with different dietary requirements?',
    answer:
      'Yes, and this is one of our most common booking types. The approach: design a predominantly plant-based menu that works for the whole group, then provide separate protein options for non-vegan guests. Vegan guests eat the same high-quality core menu as everyone else. We manage the coordination at the design stage so the chef is not running two separate services on the night.',
  },
  {
    question: 'What is the difference between a vegan chef and a regular chef cooking vegan food?',
    answer:
      'A specialist vegan chef understands how to build flavour without animal products -- specifically how to create depth, umami, and satisfaction from plants alone. A regular chef who removes animal products often produces flat, unsatisfying food because the techniques are different. Our vegan specialists know fermentation, whole-food nutrition, plant protein construction, and the specific ingredients that give vegan cooking its full potential.',
  },
  {
    question: 'Can you cater a vegan yoga retreat in Bali?',
    answer:
      "Yes. We regularly cater yoga and wellness retreats across Bali. For retreats, we design full-day menus (breakfast, lunch, dinner) in consultation with the retreat facilitator, accounting for the nutritional requirements of an active programme. Menus are plant-based, whole-food, and nutrient-dense. We can accommodate multiple additional requirements (gluten-free, raw, low-sugar) simultaneously.",
  },
  {
    question: 'Do you charge more for vegan chef service in Bali?',
    answer:
      "Not typically. The base rate for a vegan private chef is the same as for a standard private chef. Some specialty ingredients -- organic produce from specific suppliers, certain fermented foods, specialty plant-based proteins -- may add a small cost to the ingredient budget, which is billed at market cost. We are transparent about this at the proposal stage.",
  },
]

const relatedPages = [
  { label: 'Private Chef Bali', href: '/', desc: 'Full in-villa private chef service' },
  { label: 'Daily Chef Service', href: '/private-chef-bali', desc: 'All-day chef hire for villa stays' },
  { label: 'Cooking Class Bali', href: '/fine-dining', desc: 'Hands-on cooking with a private chef' },
  { label: 'Wellness Retreat Catering', href: '/catering/retreat-catering', desc: 'Plant-based retreat catering' },
  { label: 'Dietary Requirements Guide', href: '/blog/food-allergies-dietary-requirements-bali-private-chef', desc: 'Handling dietary requirements in Bali' },
  { label: 'Brunch Catering Bali', href: '/catering', desc: 'Private chef brunch for villa stays' },
]

export default function VeganPrivateChefBaliPage() {
  return (
    <PremiumPage
      slug="blog/vegan-private-chef-bali"
      title="Vegan Private Chef in Bali -- Plant-Based Chef Service for Villa Stays & Events"
      seoTitle="Vegan Private Chef Bali -- Plant-Based Villa Service | myCHEF"
      description="Specialist vegan and plant-based private chef service in Bali. Daily villa meals, yoga retreat catering, occasion dinners, and mixed-group accommodation."
      seoDescription="Vegan private chef in Bali for villa stays, retreats and events. Whole food, Indonesian, fine dining or raw menus. Contact us for a tailored quote."
      h1="Vegan Private Chef in Bali -- Plant-Based Chef Service for Villa Stays and Events"
      subtitle="Bali is one of the finest places in the world to eat plant-based food. A specialist vegan chef makes the most of it."
      heroImage="/images/blog/vegan-private-chef-bali.jpg"
      heroImageAlt="Beautifully plated plant-based dishes prepared by a Balinese private chef featuring fresh tropical vegetables, tempeh and tropical fruits"
      ogImage="/images/blog/vegan-private-chef-bali.jpg"
      canonicalUrl="https://mychef.id/blog/vegan-private-chef-bali"
      keywords={[
        'vegan private chef bali',
        'plant based chef bali',
        'vegan chef bali',
        'vegan catering bali',
        'plant based catering bali',
        'vegan villa chef bali',
        'vegan retreat catering bali',
        'plant based private chef bali',
        'dietary specific chef bali',
        'vegan cooking bali',
      ]}
      highlights={['Specialist Vegan Chefs', 'Mixed Group Capable', 'Retreat Catering', 'Tailored Quotes']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Vegan Chef"
      ctaSubtext="Tell us your villa location, dates, and plant-based style preference -- we will confirm a specialist and send a proposal."
      extraJsonLd={[
        breadcrumbSchema('Vegan Private Chef Bali', 'https://mychef.id/blog/vegan-private-chef-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Vegan Private Chef in Bali -- Plant-Based Chef Service for Villa Stays and Events',
          description:
            'Specialist vegan private chef service in Bali for villa stays, yoga retreats, and occasions. Plant-based menus for all dietary styles.',
          url: 'https://mychef.id/blog/vegan-private-chef-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/vegan-private-chef-bali.jpg',
        },
      ]}
    />
  )
}
