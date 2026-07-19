import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Dietary-Specific Private Chef Bali -- Vegan, Gluten-Free, Halal, Keto, and Allergen-Free',
    body: `Dietary requirements are not an afterthought at myCHEF -- they are a specialisation. Whether your group includes a vegan, someone with coeliac disease, a guest who keeps halal, or a client following a strict ketogenic protocol, our chefs are trained to work within precise dietary parameters without reducing the quality or ambition of what ends up on the table.

Bali is, in many ways, the best place in the world to cook to dietary specifications. The island's produce is exceptional for plant-based cooking, its markets offer extraordinary fresh ingredients, and its culinary culture is already diverse enough that most dietary traditions have natural expression here.

We provide dietary-specific private chef services across all Bali villa areas: Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur, and Pererenan.`,
  },
  {
    id: 'vegan',
    type: 'content',
    title: 'Vegan Private Chef Bali',
    body: `A fully plant-based private dining experience is one of myCHEF's strongest offerings. This is not food with the meat removed -- it is menus conceived from the ground up as plant-based, using Bali's extraordinary produce as the primary ingredient rather than the accompaniment.

**What our vegan menus look like:** Tropical fruit crudos and compound salads. Tempeh prepared using proper fermentation and technique rather than as a meat substitute. Jackfruit dishes that exploit the ingredient's natural texture rather than imitating something else. Coconut-based curries that are genuinely complex. Charred and smoked vegetables that carry depth. Plant-based desserts using Bali's rice flours, coconut, and tropical fruits.

**Who it is for:** Guests who are fully plant-based, mixed groups where one or more guests are vegan (we adapt each course seamlessly), retreat and wellness groups where plant-based food is a core offering, and guests who are simply curious about the best Bali's produce can produce.

**Specialist vegan chef option:** For groups where the entire dinner is plant-based, we can match you with chefs who specialize in plant-forward fine dining -- chefs with backgrounds at leading vegan and vegetarian restaurants who approach plant-based food as their primary medium, not an adaptation.`,
  },
  {
    id: 'gluten-free',
    type: 'content',
    title: 'Gluten-Free Private Chef Bali',
    body: `Coeliac disease and gluten sensitivity require more than substituting bread. They require a kitchen discipline that prevents cross-contamination, clear awareness of which sauces, marinades, and condiments contain gluten, and a chef who knows that soy sauce, most commercial stocks, and many spice blends are not safe for a coeliac guest.

Our gluten-free service goes further than most:

**Dedicated preparation:** For guests with coeliac disease (not just gluten sensitivity), we use separate preparation surfaces, dedicated utensils, and ensure that the kitchen environment is managed to prevent cross-contamination. We discuss the severity of the requirement during the consultation so we calibrate appropriately.

**Naturally gluten-free menus:** The best gluten-free private dining does not rely on gluten-free substitutes -- it builds menus around ingredients that are naturally free of gluten: rice, fresh fish and meat, vegetables, fruits, legumes, and the rice-based elements of Indonesian cooking. Our chefs design menus where guests are not eating a modified version of someone else's dish -- they are eating a meal designed specifically for them.

**What our gluten-free menus look like:** Rice and potato-based dishes. Sashimi and fresh seafood preparations. Indonesian and Balinese dishes (many of which are naturally gluten-free when sauces are controlled). Protein-forward mains. Desserts built on rice flour, tapioca, and natural fruit bases.`,
  },
  {
    id: 'halal',
    type: 'content',
    title: 'Halal Private Chef Bali',
    body: `Indonesia is the world's largest Muslim-majority country, and myCHEF's Balinese and Indonesian chefs understand halal requirements deeply -- it is not a modification they add but a practice many follow naturally.

**Our halal approach:** We source halal-certified meat and poultry from Bali's established halal suppliers. We do not mix pork-handling equipment with other preparations. Alcohol-based marinades and sauces are excluded unless specifically requested for non-halal guests at the same event. Our chefs can confirm halal sourcing and preparation on request.

**Mixed groups:** For groups where some guests require halal preparation and others do not, we manage both simultaneously -- proper halal preparation for halal guests and the full menu for others.

**Balinese and Indonesian halal menus:** Balinese cuisine traditionally features pork and non-halal preparations (babi guling, for instance). We prepare fully halal Indonesian menus using beef, chicken, seafood, and vegetables -- drawing on the broader Indonesian culinary tradition (Padang food, Javanese cooking, Sundanese cuisine) to produce excellent halal meals in Bali.`,
  },
  {
    id: 'keto-paleo',
    type: 'content',
    title: 'Keto, Paleo, and Low-Carb Private Chef Bali',
    body: `The ketogenic and paleo dietary approaches are more complex than simply removing carbohydrates -- they require a chef who understands macronutrient ratios, knows which sauces and condiments are compliant, and can produce satisfying, varied meals within strict parameters over multiple days.

**For daily or weekly keto service:** Guests following strict ketogenic protocols often struggle with consistency when eating out. Our daily chef service provides consistent, macro-tracked meals across a Bali stay. Breakfast, lunch, and dinner with full nutritional transparency on request.

**What our keto menus look like:** Egg-based breakfasts. Fatty fish preparations (tuna, salmon, mackerel). Charred meats with high-fat accompaniments. Avocado in multiple forms. Coconut-based curries and sauces (naturally high-fat, low-carb). Salads built on leafy greens and proteins. Bali's produce is extraordinarily well-suited to ketogenic cooking.

**Paleo adaptation:** Similar principles with more emphasis on natural whole foods and the exclusion of dairy. Fruit-based desserts and natural sweeteners (coconut sugar, honey in moderation). Our chefs working in Ubud particularly specialise in paleo and natural food approaches given the area's wellness culture.`,
  },
  {
    id: 'allergen-free',
    type: 'content',
    title: 'Allergen-Free and Complex Dietary Requirement Menus',
    body: `The most demanding dietary briefs we receive are those that combine multiple requirements: a guest who is vegan and also has a tree nut allergy, or a group where one person is coeliac and another is following halal. These are our specialty.

**Multi-requirement groups:** We are experienced at designing menus where one table includes guests with four different dietary profiles. The skill is building a menu where each guest receives a genuinely excellent version of each course -- not a restricted plate surrounded by abundant food for others.

**Specific allergies:** Beyond the major eight allergens, we work with guests who have specific sensitivities to nightshades, onion families, shellfish, stone fruits, and other less common triggers. The pre-booking consultation is where we get this information; the menu is designed accordingly.

**Medical dietary requirements:** Guests managing diabetes, cardiovascular conditions, post-surgical dietary restrictions, or renal diets can work with us to design menus that fit medical parameters. For medical dietary requirements, we recommend sharing the specific parameters from a dietitian or physician so we can cook to those specifications precisely.`,
  },
]

const faqs = [
  {
    question: 'Can you cook for a group with multiple different dietary requirements?',
    answer:
      'Yes, this is our standard operating mode. Mixed groups -- where some guests eat everything, some are vegan, one is coeliac, and another keeps halal -- are very common. We design each course so that every guest receives an excellent version appropriate to their diet. Nobody eats a lesser meal.',
  },
  {
    question: 'How do you handle coeliac disease specifically?',
    answer:
      'For coeliac disease, we treat it as a medical requirement rather than a preference. Separate preparation surfaces, dedicated utensils, careful review of all sauces and condiments for hidden gluten sources (soy sauce, commercial stocks, spice blends), and explicit awareness of cross-contamination risk. We discuss the severity with you during the consultation.',
  },
  {
    question: 'Is vegan food in Bali actually good, or is it a compromise?',
    answer:
      "Bali is one of the best places in the world to eat plant-based food. The produce is extraordinary: tropical fruits, highland vegetables, fresh herbs, tempeh, tofu, coconut in every form. Our vegan menus are not compromises -- they are menus designed around what Bali's ingredients do best. Many guests who are not vegan prefer the plant-based options.",
  },
  {
    question: 'Can you source halal-certified meat in Bali?',
    answer:
      "Yes. Bali has established halal-certified suppliers for beef, chicken, and lamb. Indonesia is a Muslim-majority country and halal sourcing infrastructure exists across the island. We source from certified suppliers and can provide documentation on request.",
  },
  {
    question: 'Do you offer daily service for guests following keto or specific dietary protocols for an extended stay?',
    answer:
      "Yes. Daily chef service with a consistent dietary specification is one of our most popular offerings for health-conscious guests. We provide breakfast and dinner (or all three meals) across your stay, with a rotating menu that stays within your dietary parameters. Full nutritional information is available on request.",
  },
  {
    question: 'What areas do you cover for dietary-specific chef service?',
    answer:
      'All major Bali villa areas: Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur, Pererenan, and surrounding areas. Ubud has a particularly strong plant-based and wellness cooking tradition and is our most-requested location for vegan and health-specific menus.',
  },
]

const relatedPages = [
  { label: 'Vegan Private Chef Bali', href: '/blog/dietary-specific-chef-bali', desc: 'Specialist plant-based chef service in Bali' },
  { label: 'Bali Wellness Retreat Catering', href: '/catering/retreat-catering', desc: 'Healthy catering for retreats and studios' },
  { label: 'Daily Chef Service Bali', href: '/hire-private-chef-bali-monthly', desc: 'Daily household chef service' },
  { label: 'Food Allergies Guide', href: '/blog/dietary-specific-chef-bali', desc: 'Managing dietary requirements in Bali' },
  { label: 'Private Chef Ubud', href: '/private-chef/ubud', desc: 'Private chef service in Ubud' },
  { label: 'Private Chef Bali Expats', href: '/hire-private-chef-bali-monthly', desc: 'Long-term private chef for Bali residents' },
]

export default function DietarySpecificChefBaliPage() {
  return (
    <PremiumPage
      slug="blog/dietary-specific-chef-bali"
      title="Dietary Specific Private Chef Bali -- Vegan, Gluten-Free, Halal, Keto | myCHEF"
      seoTitle="Dietary Specific Private Chef Bali -- Vegan, Gluten-Free, Halal, Keto"
      description="Dietary-specific private chef in Bali. Vegan, gluten-free, halal, keto, allergen-free menus in your villa. Specialist chefs, multi-requirement groups."
      seoDescription="Dietary specific chef Bali. Vegan, gluten-free, halal, keto, paleo and allergen-free private chef menus. Multi-requirement groups, coeliac-safe prep. All areas."
      h1="Dietary-Specific Private Chef Bali -- Vegan, Gluten-Free, Halal, Keto, and Allergen-Free"
      subtitle="Every dietary requirement met at the same quality as the rest of the table."
      heroImage="/images/blog/dietary-specific-chef-bali.jpg"
      heroImageAlt="Private chef preparing a beautifully plated vegan and plant-based fine dining course in a Bali villa"
      ogImage="/images/blog/dietary-specific-chef-bali.jpg"
      canonicalUrl="https://mychef.id/blog/dietary-specific-chef-bali"
      keywords={[
        'dietary specific chef bali',
        'vegan chef bali',
        'gluten-free chef bali',
        'halal chef bali',
        'keto chef bali',
        'allergen-free chef bali',
        'plant-based chef bali',
        'organic chef bali',
        'dietary restriction chef bali',
        'private chef dietary requirements bali',
      ]}
      highlights={['Vegan Specialist Chefs', 'Coeliac-Safe Preparation', 'Halal Sourcing', 'Multi-Requirement Groups']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Dietary-Specific Chef"
      ctaSubtext="Tell us your dietary requirements, group composition, villa area, and dates. We will match you with the right chef and design a menu that works for every guest at the table."
      extraJsonLd={[
        breadcrumbSchema('Dietary Specific Chef Bali', 'https://mychef.id/blog/dietary-specific-chef-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Dietary Specific Private Chef Bali -- Vegan, Gluten-Free, Halal, Keto, and Allergen-Free',
          description: 'Dietary-specific private chef in Bali. Vegan, gluten-free, halal, keto, and allergen-free menus in Bali villas.',
          url: 'https://mychef.id/blog/dietary-specific-chef-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/dietary-specific-chef-bali.jpg',
        },
      ]}
    />
  )
}
