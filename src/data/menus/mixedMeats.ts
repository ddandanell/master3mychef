/**
 * Mixed Meats collection — 6 classic set menus (family-style sharing platters).
 * Source: client catalogue research "menus-mixed-meats.md" (July 2026).
 * Prices are the approved premium price list — do NOT "correct" them
 * against the older research/PDF prices. Add-ons are uplifted research
 * prices (x1.45, rounded to the nearest IDR 5,000, half up).
 */

import type { Menu } from './types';

export const MIXED_MEATS_MENUS: Menu[] = [
  {
    code: 'M-A1',
    name: 'Mediterranean Mixed Meats',
    family: 'mixed-meats',
    theme: 'Mediterranean',
    tier: 'A',
    priceIdr: 1350000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'A sun-drenched sharing feast — chargrilled chicken, lamb kofta and garlic prawns with bright herbs, citrus and warm flatbread.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Mezze Sharing Platter',
            description:
              'Hummus, tzatziki, marinated olives, stuffed vine leaves. Warm flatbread on the side.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Grilled Halloumi with Roasted Peppers',
            description:
              "Squeaky Cypriot halloumi charred on the grill. Served with blistered red peppers, extra-virgin olive oil, and za'atar.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Lemon-oregano chicken thigh',
            description:
              'Bone-in, skin-on, chargrilled. All finished with fresh lemon and extra-virgin olive oil.',
          },
          {
            name: 'Spiced lamb kofta skewers',
            description: 'Minced lamb, cumin, coriander, charcoal-seared.',
          },
          {
            name: 'Garlic prawns',
            description: 'Jumbo prawns, olive oil, garlic, parsley.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Greek Village Salad',
            description:
              'Tomato, cucumber, red onion, Kalamata olives, feta, oregano, olive oil.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Lemon Roasted Potatoes',
            description:
              'Crispy-edged, slow-roasted in lemon juice, garlic, and oregano.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Baklava with Honey and Pistachio',
            description:
              'Crisp filo pastry, crushed pistachios, fragrant honey syrup. Served warm.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Whole grilled sea bream',
        priceIdr: 270000,
        perGuest: true,
        note: 'Mediterranean-style with herbs and lemon.',
      },
      {
        name: 'Mediterranean cheese board',
        priceIdr: 140000,
        perGuest: true,
        note: 'Feta, manchego, dried fruits, nuts, honeycomb.',
      },
    ],
    image: '/generated/pkg-grazing.webp',
    imageAlt:
      'Mediterranean Mixed Meats menu — a mezze-style sharing spread with grilled meats, herbs and citrus.',
  },
  {
    code: 'M-A2',
    name: 'BBQ Evenings Mixed Meats',
    family: 'mixed-meats',
    theme: 'BBQ Evenings',
    tier: 'A',
    priceIdr: 1250000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      "The ultimate Bali sunset BBQ — sticky pork ribs, charred wings and smoky beans by the pool, with a s'mores skillet to finish.",
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'BBQ Pulled Pork Crostini',
            description:
              'Slow-braised local pork shoulder, shredded, tossed in smoky BBQ sauce. Piled on toasted baguette rounds with pickled slaw.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Mexican Street Corn',
            description:
              'Chargrilled corn cobs rolled in chipotle-lime butter, cotija cheese, and cilantro.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Sticky BBQ pork ribs',
            description:
              'Local pork belly ribs, 4-hour slow cook, sticky glaze. Served with house BBQ sauce, sambal matah, and chimichurri.',
          },
          {
            name: 'Charred chicken wings',
            description: 'Free-range, smoky dry rub, chargrilled.',
          },
          {
            name: 'Beef chipolatas',
            description: 'House-made beef sausages, smoked paprika.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Creamy Coleslaw',
            description:
              'Crisp cabbage and carrot in tangy buttermilk dressing. Refreshing against the smoke.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Smoky Baked Beans',
            description: 'Slow-simmered with bacon, molasses, and BBQ spices.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: "S'mores Skillet",
            description:
              'Molten dark chocolate and toasted marshmallows in a cast-iron skillet. Graham crackers for dipping.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'BBQ brisket burnt ends',
        priceIdr: 210000,
        perGuest: true,
        note: '8-hour smoked beef brisket, caramelised edges.',
      },
      {
        name: 'Grilled cornbread with honey butter',
        priceIdr: 80000,
        perGuest: true,
      },
    ],
    image: '/generated/pkg-bbq.webp',
    imageAlt:
      'BBQ Evenings Mixed Meats menu — a Bali sunset barbecue with smoky grilled meats and sticky sauces.',
  },
  {
    code: 'M-B1',
    name: 'Western Classics Mixed Meats',
    family: 'mixed-meats',
    theme: 'Western Classics',
    tier: 'B',
    priceIdr: 2050000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'A refined mixed grill — Angus sirloin, herb-crusted lamb cutlets and truffle mash. London steakhouse meets Bali sunset.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Mini Beef Wellington Bites',
            description:
              'Puff pastry rounds filled with Angus beef tenderloin, mushroom duxelles, and prosciutto. Golden and buttery.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Caesar Salad for Sharing',
            description:
              'Baby cos lettuce, crispy pancetta, shaved parmesan, croutons, classic Caesar dressing. Anchovy optional.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Grilled Angus sirloin',
            description: 'Australian Angus, 200g per guest, medium-rare, herb butter.',
          },
          {
            name: 'Herb-crusted lamb cutlets',
            description: 'Frenched rack, Dijon-mint crust, pink centre.',
          },
          {
            name: 'Roasted chicken supreme',
            description: 'Free-range, skin-on, thyme and garlic.',
          },
          {
            name: 'Garlic butter prawns',
            description: 'Jumbo prawns, pan-seared, garlic-parsley butter.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Truffle Mashed Potatoes',
            description: 'Silky Yukon Gold mash with black truffle oil and parmesan.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Buttered Green Beans with Toasted Almonds',
            description: 'Blanched French beans, brown butter, crisp almond flakes.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Sticky Toffee Pudding',
            description:
              'Warm date sponge with butterscotch sauce and vanilla bean ice cream.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable'],
    addOns: [
      {
        name: 'Whole grilled lobster tail',
        priceIdr: 470000,
        perGuest: true,
        note: 'Split, grilled, with garlic-lemon butter.',
      },
      {
        name: 'Wine pairing selection',
        priceIdr: 655000,
        perGuest: true,
        note: '4 premium wines matched to each course.',
      },
    ],
    image: '/generated/mychef-catering-bali-plated-3course-table.webp',
    imageAlt:
      'Western Classics Mixed Meats menu — an elegant steakhouse-style table with premium grilled cuts.',
  },
  {
    code: 'M-B2',
    name: 'Indonesian Mixed Meats',
    family: 'mixed-meats',
    theme: 'Indonesian',
    tier: 'B',
    priceIdr: 1950000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      "A love letter to Indonesia's greatest meat dishes — babi guling-style pork belly, beef rendang and sate lilit with sambal matah.",
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Mixed Sate Lilit Platter',
            description:
              'Three types of Balinese minced-meat satay on lemongrass skewers: fish (tuna, coconut, lime leaf), chicken (free-range, shallots, ginger), and pork (local pork, galangal, kaffir lime). Served with sambal matah and peanut dipping sauce.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Gado-Gado with Peanut Dressing',
            description:
              'Steamed vegetables, tofu, tempeh, and egg. Thick, fragrant peanut sauce poured tableside.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Slow-roasted pork belly',
            description:
              'Babi guling style, crackling skin, turmeric, lemongrass, galangal — the hero. Served with sambal matah, sambal terasi, and kecap manis.',
          },
          {
            name: 'Beef rendang',
            description:
              'Padang-style, 6-hour slow cook, coconut, spices, falling-apart tender.',
          },
          {
            name: 'Chicken satay',
            description: 'Free-range thigh, peanut sauce, cucumber relish.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Nasi Goreng Kampung',
            description:
              'Village-style fried rice with shrimp paste, shallots, and spring onion. Wok-charred and fragrant.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Urab',
            description:
              'Balinese mixed vegetables with toasted coconut, kaffir lime, and galangal. Fresh and herbal.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Dadar Gulung',
            description:
              'Coconut-stuffed pandan crepes. Soft, fragrant, sweetened with palm sugar and vanilla.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Whole babi guling',
        priceIdr: 945000,
        perGuest: false,
        note: 'Flat rate for 6 guests — full roasted suckling pig presentation. 48-hour notice required.',
      },
      {
        name: 'Jamu welcome drink',
        priceIdr: 50000,
        perGuest: true,
        note: 'Traditional Balinese herbal tonic.',
      },
    ],
    image: '/generated/mychef-catering-bali-hero-babiguling.webp',
    imageAlt:
      'Indonesian Mixed Meats menu — a Balinese babi guling-style spread with rendang, satay and sambals.',
  },
  {
    code: 'M-C1',
    name: 'Italian Mixed Meats',
    family: 'mixed-meats',
    theme: 'Italian',
    tier: 'C',
    priceIdr: 3000000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'La grande grigliata — Wagyu bistecca, porchetta and herb-crusted lamb rack, fire-kissed with truffle and rosemary.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Arancini Trio',
            description:
              'Three golden fried risotto balls: beef ragu (slow-braised beef, mozzarella centre), wild mushroom (porcini, truffle oil), and black truffle (parmesan, white truffle oil, fontina). Served with saffron aioli and tomato fondue.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Burrata with Prosciutto di Parma',
            description:
              'Creamy Puglian burrata, 24-month Parma ham, roasted cherry tomatoes, aged balsamic, and basil oil.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Wagyu bistecca',
            description:
              'MB 5-7, 250g per guest, Florentine-style, charred rare, rosemary salt — the star. Served with porcini jus and salsa verde.',
          },
          {
            name: 'Porchetta-stuffed pork loin',
            description: 'Local pork, fennel, garlic, crackling skin, slow-roasted.',
          },
          {
            name: 'Herb-crusted lamb rack',
            description: 'Australian lamb, Dijon-mint crumb, pink.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Risotto alla Milanese',
            description:
              'Creamy Arborio risotto with saffron threads, parmesan, and bone marrow butter.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Grilled Seasonal Vegetables with Basil Oil',
            description:
              'Zucchini, eggplant, capsicum, and asparagus. Charred, dressed with fresh basil oil.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Tiramisu Classico',
            description: 'Espresso-soaked savoiardi, mascarpone cream, cocoa dust. Made fresh daily.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable'],
    addOns: [
      {
        name: 'Fresh white truffle shaving',
        priceIdr: 800000,
        perGuest: true,
        note: 'Seasonal Alba white truffle shaved over risotto at the table.',
      },
      {
        name: 'Italian cheese and charcuterie board',
        priceIdr: 405000,
        perGuest: true,
        note: 'Parmigiano, gorgonzola, pecorino, mortadella, finocchiona.',
      },
    ],
    image: '/generated/pkg-italian.webp',
    imageAlt:
      'Italian Mixed Meats menu — la grigliata mista with Wagyu bistecca, porchetta and lamb rack.',
  },
  {
    code: 'M-C2',
    name: 'Surf & Turf Mixed Meats',
    family: 'mixed-meats',
    theme: 'Surf & Turf',
    tier: 'C',
    priceIdr: 3100000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'The pinnacle of surf and turf — Wagyu, whole grilled lobster and lamb cutlets, with truffle fries and a molten chocolate fondant.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Tuna Tartare on Wonton Crisp',
            description:
              'Sashimi-grade tuna, sesame, soy, avocado mousse, micro shiso. Served on shattering wonton crisps.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Saffron Seafood Chowder',
            description:
              'Rich, creamy chowder with prawns, mussels, white fish, and saffron threads. Garlic crostini alongside.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Wagyu MB 5-7 sirloin',
            description:
              '250g per guest, dry-aged 21 days, charcoal-grilled, pink. Served with bearnaise, lemon butter, and red wine jus.',
          },
          {
            name: 'Whole grilled lobster',
            description: '600g per guest, split, garlic-lemon butter, charred flesh.',
          },
          {
            name: 'King prawns with garlic butter',
            description: 'Jumbo tiger prawns, shell-on, flambeed with cognac.',
          },
          {
            name: 'Grilled lamb cutlets',
            description: 'Frenched, rosemary-garlic crust.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Truffle Parmesan Fries',
            description: 'Double-cooked hand-cut fries. Black truffle oil and shaved parmesan.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Charred Asparagus with Lemon Hollandaise',
            description:
              'Thick green spears, blistered on the grill. Silky hollandaise spooned over.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Chocolate Fondant with Salted Caramel',
            description:
              'Molten-centre dark chocolate cake. Warm salted caramel oozes from the middle. Vanilla ice cream.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Caviar service',
        priceIdr: 1740000,
        perGuest: true,
        note: '30g Oscietra caviar, blinis, creme fraiche, chives.',
      },
      {
        name: 'Whole roasted wagyu tomahawk',
        priceIdr: 1235000,
        perGuest: true,
        note: 'Shared — 1.2kg MB 7+ tomahawk, carved tableside. Replaces sirloin portion.',
      },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-surfturf.webp',
    imageAlt:
      'Surf & Turf Mixed Meats menu — Wagyu beef and grilled lobster on a premium surf-and-turf board.',
  },
];
