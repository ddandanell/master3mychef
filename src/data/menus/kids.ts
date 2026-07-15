import type { Menu } from './types';

/**
 * Kids' Party collection (K1–K6) — premium villa catering for children aged 3–12.
 * Prices are the approved premium price list; add-ons are research prices ×1.45
 * rounded to the nearest IDR 5,000.
 */
export const KIDS_MENUS: Menu[] = [
  {
    code: 'K1',
    name: 'Mini Pizza Party',
    family: 'kids',
    theme: 'Italian / Build-Your-Own',
    priceIdr: 275000,
    minGuests: 6,
    guestNoun: 'child',
    description:
      "A hands-on pizza party where every child becomes a mini chef — rolling, topping and watching their own wood-fired creation bake.",
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Rainbow Veggie Sticks with Hidden-Veg Hummus',
            description:
              "Crunchy carrot, cucumber, and capsicum batons served in individual cups with a secretly vegetable-packed hummus dip. Bright, crunchy, and nutritious — gets their veggies in before the main event.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Build-Your-Own Personal Pizza',
            description:
              "Each child receives a pre-rolled 15cm pizza base, a ramekin of our mild tomato sauce, and a toppings bar featuring shredded free-range chicken, mozzarella stars, sweetcorn, cherry tomato halves, and diced capsicum. Our chef bakes each pizza to order in a wood-fired oven. Every pizza is unique — just like its creator. Portion: 120g dough + 60g cheese + 50g chicken + vegetables.",
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Fresh Fruit Skewers with Chocolate Dipping Sauce',
            description:
              "Seasonal Bali fruits (melon, banana, and papaya) threaded onto blunt bamboo skewers, served with a warm Belgian chocolate dipping pot. Interactive, colourful, and naturally sweet.",
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'Nut-free', 'GF adaptable', 'Dairy-free adaptable'],
    addOns: [
      { name: 'Extra mozzarella topping', priceIdr: 10000, perGuest: true },
      { name: 'Fresh juice box — orange or apple', priceIdr: 5000, perGuest: true },
      { name: "Mini chef's hat and apron set", priceIdr: 35000, perGuest: true },
      { name: 'Birthday cake slice — vanilla sponge with buttercream', priceIdr: 50000, perGuest: true },
    ],
    image: '/generated/pkg-italian.webp',
    imageAlt: "Mini Pizza Party kids' menu — an Italian build-your-own pizza experience for children in Bali",
    interactive: true,
    allergenInfo: [
      'Contains: gluten (wheat), dairy (mozzarella), sesame (hummus)',
      'Allergens: wheat, milk, sesame',
      'Notes: Chocolate dip contains soy lecithin',
    ],
  },
  {
    code: 'K2',
    name: 'Chicken & Chips',
    family: 'kids',
    theme: 'American Classic',
    priceIdr: 295000,
    minGuests: 6,
    guestNoun: 'child',
    description:
      "Crispy buttermilk chicken tenders, hand-cut sweet potato fries and a Bali banana split — the ultimate crowd-pleaser.",
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Mini Chicken & Sweet Corn Soup',
            description:
              "A gentle, clear broth filled with tender shredded free-range chicken, sweet corn kernels, and fine vermicelli noodles. Mildly seasoned with a touch of white pepper and spring onion. Served in small handled cups — easy for little hands to hold.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Crispy Buttermilk Chicken Tenders with Sweet Potato Fries',
            description:
              "Free-range chicken tenderloins marinated in buttermilk, coated in a light seasoned crumb, and baked until golden (not fried). Served with hand-cut sweet potato fries and a side of tomato ketchup. Tender, juicy, and finger-food friendly. Portion: 2 tenders (120g chicken) + 200g sweet potato fries.",
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Bali Banana Split',
            description:
              "One whole local banana, split and nestled between two scoops of premium local vanilla ice cream, drizzled with chocolate sauce, topped with rainbow sprinkles, and finished with a bright red cherry. The classic — done right.",
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'Nut-free', 'GF adaptable', 'Dairy-free adaptable'],
    addOns: [
      { name: 'Extra chicken tender', priceIdr: 15000, perGuest: true },
      { name: 'Cheese sauce for fries', priceIdr: 5000, perGuest: true },
      { name: 'Fresh tropical fruit smoothie', priceIdr: 15000, perGuest: true },
      { name: 'Birthday cake slice — chocolate fudge', priceIdr: 50000, perGuest: true },
    ],
    image: '/generated/mychef-events-bali-party-birthday.webp',
    imageAlt: "Chicken & Chips kids' menu — an American classic children's party spread in a Bali villa",
    allergenInfo: [
      'Contains: gluten (breadcrumbs), dairy (buttermilk, ice cream)',
      'Allergens: wheat, milk',
      'Notes: All chicken is cooked to well-done (internal temp ≥75°C)',
    ],
  },
  {
    code: 'K3',
    name: 'Pasta Lovers',
    family: 'kids',
    theme: 'Italian / Choice-Based',
    priceIdr: 260000,
    minGuests: 6,
    guestNoun: 'child',
    description:
      "The most customisable menu in the collection — children choose their pasta shape, sauce and toppings, then finish with a star-shaped brownie.",
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Rainbow Veggie Cups with Hidden-Veg Hummus',
            description:
              "Individual cups filled with crunchy carrot, cucumber, and red capsicum batons, served with our secretly vegetable-packed hummus. The rainbow colours make veggies irresistible — even to sceptics.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Choose-Your-Own Pasta Bowl',
            description:
              "Each child selects: Pasta: Penne or spaghetti (organic durum wheat); Sauce: Mild tomato, creamy Alfredo, or pesto (nut-free basil pesto); Protein: Grilled chicken strips or extra vegetables; Topping: Grated Parmesan finish. Served in a warm bowl with a fun spiral presentation. Our chef prepares each order fresh — no mass-produced plates here. Portion: 100g dry pasta + 80g sauce + 50g chicken + vegetables + Parmesan.",
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Mini Chocolate Brownie with Vanilla Ice Cream',
            description:
              "A warm, fudgy mini brownie (baked in a fun star shape) served with a single scoop of premium local vanilla ice cream and a dusting of cocoa powder. Rich enough to feel special, small enough to finish.",
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'Nut-free', 'GF adaptable', 'Dairy-free adaptable'],
    addOns: [
      { name: 'Extra chicken portion', priceIdr: 15000, perGuest: true },
      { name: 'Garlic bread stick', priceIdr: 5000, perGuest: true },
      { name: 'Fresh juice — watermelon or orange', priceIdr: 5000, perGuest: true },
      { name: 'Birthday cake slice — rainbow layer cake', priceIdr: 50000, perGuest: true },
    ],
    image: '/generated/pkg-italian.webp',
    imageAlt: "Pasta Lovers kids' menu — a choose-your-own Italian pasta bowl experience for children",
    interactive: true,
    allergenInfo: [
      'Contains: gluten (wheat pasta), dairy (Parmesan, Alfredo sauce, ice cream), egg (brownie)',
      'Allergens: wheat, milk, egg',
      'Notes: Pesto is made with sunflower seeds instead of pine nuts to maintain nut-free status',
    ],
  },
  {
    code: 'K4',
    name: 'Burger Bar',
    family: 'kids',
    theme: 'American / Build-Your-Own',
    priceIdr: 285000,
    minGuests: 6,
    guestNoun: 'child',
    description:
      "A build-your-own slider station with mini burgers, a toppings bar and sweet potato fries, plus a self-serve ice cream sundae bar.",
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Mini Corn on the Cob with Butter',
            description:
              "A single baby sweet corn per child, steamed until tender and served with a pat of salted butter. Simple, sweet, and fun to eat with hands. A gentle warm-up before the main event.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Build-Your-Own Slider Burgers',
            description:
              "Two mini brioche buns (8cm each) with a choice of: Beef slider: 80g premium local beef patty, seasoned simply with salt and pepper; Chicken slider: 80g free-range chicken patty, lightly herbed. Toppings bar: Cheese slice, lettuce leaf, tomato round, pickle chip, ketchup, and mild mayo. Children build their own — one of each, doubles, or plain. All patties are cooked to well-done (no pink). Served with hand-cut sweet potato fries on the side. Portion: 2 mini burgers (160g protein total) + 150g sweet potato fries.",
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Ice Cream Sundae Bar',
            description:
              "One scoop of premium local vanilla ice cream per child, with a self-serve toppings station: rainbow sprinkles, chocolate chips, mini marshmallows, strawberry sauce, and whipped cream. Every sundae is a masterpiece.",
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'Nut-free', 'GF adaptable', 'Dairy-free adaptable'],
    addOns: [
      { name: 'Extra slider', priceIdr: 25000, perGuest: true },
      { name: 'Bacon strip topping', priceIdr: 10000, perGuest: true, note: 'not halal' },
      { name: 'Cheese upgrade to cheddar', priceIdr: 5000, perGuest: true },
      { name: 'Birthday cake slice — cookies & cream', priceIdr: 50000, perGuest: true },
    ],
    image: '/generated/pkg-bbq.webp',
    imageAlt: "Burger Bar kids' menu — a build-your-own mini burger and slider station for children",
    interactive: true,
    allergenInfo: [
      'Contains: gluten (buns), dairy (cheese, ice cream, whipped cream), egg (mayo, brioche)',
      'Allergens: wheat, milk, egg',
      'Notes: All patties cooked to well-done. Bacon add-on is pork — clearly marked as non-halal.',
    ],
  },
  {
    code: 'K5',
    name: 'Seafood Adventure',
    family: 'kids',
    theme: 'Coastal / Pescatarian',
    priceIdr: 350000,
    minGuests: 6,
    guestNoun: 'child',
    description:
      "Mild, crispy snapper fingers and playful seaside flavours — a gentle introduction to seafood that children actually want to eat.",
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Fish-Shaped Cheese Crackers with Veggie Sticks',
            description:
              "Fun, baked cheddar crackers in fish shapes, served with carrot and cucumber batons and a mild cream cheese dip. Familiar flavours in playful shapes — an easy, no-pressure start.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Crispy Snapper Fingers with Potato Wedges & Tartare Sauce',
            description:
              "Fresh local snapper fillet, cut into child-friendly fingers, lightly coated in seasoned flour and golden breadcrumbs, then baked until crispy. Served with chunky baked potato wedges, a pot of mild homemade tartare sauce, and ketchup. The fish is flaky, mild, and absolutely not 'fishy.' Portion: 120g snapper + 200g potato wedges + 40g tartare sauce.",
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Tropical Fruit Platter with Coconut Yoghurt',
            description:
              "A beautiful arrangement of fresh local mango, papaya, and dragon fruit, served with a side of creamy coconut yoghurt and a sprinkle of toasted coconut flakes. Naturally sweet, vibrantly colourful, and refreshingly light.",
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'Nut-free', 'GF adaptable', 'Dairy-free', 'Pescatarian'],
    addOns: [
      { name: 'Extra snapper finger', priceIdr: 20000, perGuest: true },
      { name: 'Prawn skewer addition (2 prawns)', priceIdr: 35000, perGuest: true },
      { name: 'Fresh coconut water served in shell', priceIdr: 15000, perGuest: true },
      { name: 'Birthday cake slice — lemon drizzle', priceIdr: 50000, perGuest: true },
    ],
    image: '/generated/pkg-seafood.webp',
    imageAlt: "Seafood Adventure kids' menu — a mild coastal pescatarian menu with crispy snapper fingers",
    allergenInfo: [
      'Contains: gluten (cracker, crumb coating), dairy (cream cheese dip — can be omitted), fish, egg (tartare sauce, coating)',
      'Allergens: wheat, milk, fish, egg',
      'Notes: All fish cooked to well-done (internal temp ≥63°C). Local snapper is sustainably sourced from Jimbaran fish market.',
    ],
  },
  {
    code: 'K6',
    name: 'Indonesian Kids',
    family: 'kids',
    theme: 'Local Balinese',
    priceIdr: 250000,
    minGuests: 6,
    guestNoun: 'child',
    description:
      "A gentle taste of Bali — mild nasi goreng, mini chicken satay and golden pisang goreng with honey, all without the heat.",
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Mini Chicken Soto',
            description:
              "A fragrant, clear chicken broth with fine vermicelli noodles, tender shredded free-range chicken, a quarter of a soft-boiled organic egg, and a sprinkle of fried shallots and fresh celery. Served with a tiny lime wedge for a hint of brightness. Mild, warming, and authentically Indonesian — without the heat.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Mild Nasi Goreng with Chicken Satay & Cucumber',
            description:
              "A child-friendly version of Indonesia's favourite fried rice — no chilli, no spice, just gentle sweet soy flavour with mixed vegetables (carrot, peas, corn) and a hint of scrambled egg. Served with two mini chicken satay skewers (grilled, not fried) glazed with a mild sweet soy reduction, fresh cucumber slices, and a touch of sambal on the side for adventurous eaters (easily omitted). Crispy prawn crackers add crunch. Portion: 150g rice + 60g chicken satay + vegetables + crackers.",
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Pisang Goreng with Honey & Sesame',
            description:
              "Two pieces of local banana, dipped in a light coconut batter and quickly fried until golden and crispy. Drizzled with local Bali honey and sprinkled with toasted sesame seeds. Warm, sweet, and utterly moreish — the perfect end to an Indonesian feast.",
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'Nut-free', 'GF adaptable', 'Dairy-free'],
    addOns: [
      { name: 'Extra satay skewer', priceIdr: 10000, perGuest: true },
      { name: 'Sambal on the side', priceIdr: 5000, perGuest: true, note: 'contains chilli' },
      { name: 'Fresh mango lassi', priceIdr: 10000, perGuest: true },
      { name: 'Birthday cake slice — pandan coconut', priceIdr: 50000, perGuest: true },
    ],
    image: '/generated/balinese-spread.webp',
    imageAlt: "Indonesian Kids menu — a mild Balinese children's menu with nasi goreng and chicken satay",
    allergenInfo: [
      'Contains: gluten (prawn crackers — can be omitted), soy (kecap manis, sweet soy glaze), sesame (garnish), egg (nasi goreng, boiled egg in soto)',
      'Allergens: wheat (crackers), soy, sesame, egg',
      'Notes: No chilli in any component unless sambal is requested as an add-on. All chicken cooked to well-done.',
    ],
  },
];
