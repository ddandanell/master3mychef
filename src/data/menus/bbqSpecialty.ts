import type { Menu } from './types';

/**
 * BBQ Specialty collection — live grill station experiences at the villa.
 * Source: research/menus-bbq-specialty.md (July 2026).
 * Prices are the approved premium list; add-ons are research price × 1.45,
 * rounded to the nearest IDR 5,000 (round half up).
 */
export const BBQ_SPECIALTY_MENUS: Menu[] = [
  {
    code: 'BBQ-SP1',
    name: 'Indonesian Balinese Grill Night',
    family: 'bbq-specialty',
    theme: 'Indonesian Balinese',
    tier: 'A',
    priceIdr: 1200000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'A fully immersive Balinese grill night: sate lilit, ayam betutu and ikan bakar over charcoal, with sambals made fresh at the station.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Sate Lilit',
            description:
              'Minced local snapper wound around lemongrass stalks, grilled over charcoal, served with sambal matah',
          },
          {
            name: 'Grilled Corn with Spicy Coconut',
            description: 'Sweet corn charred on the grill, rubbed with Balinese spiced coconut flakes',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Babi Guling-Style Pork Belly',
            description:
              'Local pork belly slow-roasted over charcoal with turmeric, garlic, and ginger; crackling skin finish',
          },
          {
            name: 'Ayam Betutu',
            description:
              'Free-range chicken rubbed with Balinese spice paste, wrapped in banana leaf, slow-grilled until tender',
          },
          {
            name: 'Beef Sate with Peanut Sauce',
            description:
              'Local beef cubes marinated in sweet soy, grilled on skewers, served with house-made peanut sauce',
          },
          {
            name: 'Ikan Bakar',
            description: 'Whole local snapper fillet marinated in turmeric and lime, grilled in banana leaf until flaky',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Nasi Kuning',
            description: 'Fragrant yellow rice steamed with coconut milk, turmeric, and lemongrass',
          },
          {
            name: 'Lawar',
            description: 'Traditional Balinese vegetable salad with shredded coconut, green beans, and spice dressing',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Sambal Matah Trio',
            description: 'Raw shallot and chilli relish in three heat levels: mild, medium, fiery',
          },
          {
            name: 'Sambal Terasi',
            description: 'Fermented shrimp chilli paste, smoky and deeply savoury',
          },
          {
            name: 'Kecap Manis',
            description: 'Sweet soy sauce, reduced with palm sugar and star anise',
          },
          {
            name: 'Rujak',
            description: 'Spicy tangy fruit dipping sauce with palm sugar and chilli',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Dadar Gulung',
            description: 'Fresh pandan crepes filled with sweet grated coconut and palm sugar, rolled tableside',
          },
        ],
      },
    ],
    dietaryTags: ['GF adaptable', 'Dairy-free', 'Contains pork', 'Contains seafood'],
    addOns: [
      {
        name: 'Balinese Rijsttafel upgrade',
        priceIdr: 220000,
        perGuest: true,
        note: 'Adds 8 traditional side dishes to the grill station',
      },
      {
        name: 'Babi guling whole roast',
        priceIdr: 435000,
        perGuest: true,
        note: 'Whole suckling pig carved at the villa',
      },
    ],
    image: '/generated/mychef-catering-bali-hero-babiguling.webp',
    imageAlt: 'Indonesian Balinese Grill Night — traditional Balinese babi guling and grill dishes',
    specialFeatures: [
      'Cultural immersion — grill chef wears traditional Balinese attire and explains each dish',
      'Banana leaf grilling — proteins wrapped and cooked in banana leaf for authentic aroma',
      'Live sambal station — three heat levels of sambal matah made fresh in front of guests',
      'Chef shares stories of Balinese cooking traditions throughout service',
      'Suggested timing 18:00–21:00 for sunset atmosphere',
    ],
  },
  {
    code: 'BBQ-SP2',
    name: 'Tomahawk & Ribs Feast',
    family: 'bbq-specialty',
    theme: 'American Smokehouse',
    tier: 'B',
    priceIdr: 2650000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'The ultimate carnivore spectacle: a 1.2kg Angus tomahawk carved tableside with flame, plus smoked brisket, ribs and burnt ends.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Smoked Beef Burnt Ends',
            description: 'Cubes of Angus beef brisket, double-smoked over charcoal, glazed with house BBQ sauce',
          },
          {
            name: 'Jalapeño Poppers with Bacon',
            description: 'Fresh jalapeños stuffed with cream cheese, wrapped in crispy bacon, grilled until bubbling',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: '1.2kg Angus Tomahawk Ribeye',
            description:
              'Massive bone-in ribeye, reverse-seared over charcoal, carved tableside with flame (shared, ~150g per guest)',
          },
          {
            name: '6-Hour BBQ Pork Ribs',
            description: 'Full rack of pork ribs, slow-smoked over charcoal, glazed with sticky BBQ sauce',
          },
          {
            name: 'Smoked Beef Brisket',
            description: 'Australian Angus brisket, rubbed with spice blend, smoked 6 hours over charcoal',
          },
          {
            name: 'Pulled Pork Sliders',
            description: 'Slow-smoked pulled pork on mini brioche buns with coleslaw and pickles',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Loaded Baked Potatoes',
            description: 'Russet potatoes baked on the grill, split and loaded with cheese, bacon, and sour cream',
          },
          {
            name: 'Grilled Corn with Chipotle Butter',
            description: 'Sweet corn charred over flames, brushed with smoky chipotle-lime butter',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Smoky BBQ Sauce',
            description: 'Tomato-based sauce with molasses, hickory smoke, and brown sugar',
          },
          {
            name: 'Carolina Mustard Sauce',
            description: 'Tangy yellow mustard sauce with vinegar and black pepper',
          },
          {
            name: 'Chimichurri',
            description: 'Fresh parsley, oregano, garlic, and olive oil Argentinian sauce',
          },
          {
            name: 'Alabama White Sauce',
            description: 'Mayo-based white BBQ sauce with horseradish and black pepper',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Smoked Chocolate Bread Pudding',
            description:
              'Rich chocolate bread pudding slow-smoked on the grill, served warm with vanilla bean ice cream',
          },
        ],
      },
    ],
    dietaryTags: ['GF adaptable', 'Contains pork', 'Contains beef', 'Contains dairy'],
    addOns: [
      {
        name: 'Extra tomahawk',
        priceIdr: 655000,
        perGuest: true,
        note: 'Each guest receives their own 600g tomahawk',
      },
      {
        name: 'Whiskey pairing',
        priceIdr: 510000,
        perGuest: true,
        note: 'Three premium whiskeys matched to each protein course',
      },
    ],
    image: '/generated/mychef-catering-style-bbq.webp',
    imageAlt: 'Tomahawk & Ribs Feast — American smokehouse BBQ grilled over charcoal',
    specialFeatures: [
      'Tableside tomahawk carving — chef presents the 1.2kg bone, then carves with precision',
      'Flaming presentation — tomahawk finished with a controlled flame at the table',
      'Smoke ring showcase — brisket sliced to reveal the prized pink smoke ring',
      'Instagram moment — bone held aloft by chef, flames in background',
      'Meat board service — all four proteins presented together on a wooden board',
      'Suggested timing 18:30–21:30 for dramatic lighting',
    ],
  },
  {
    code: 'BBQ-SP3',
    name: 'Sunset Pool Party BBQ',
    family: 'bbq-specialty',
    theme: 'International Grill',
    tier: 'A',
    priceIdr: 950000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      "A relaxed, colourful poolside BBQ where guests graze at their own pace — sliders, satay, fish tacos and a DIY s'mores bar.",
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Grilled Tiger Prawn Skewer',
            description: 'Single tiger prawn threaded on a skewer, grilled with garlic butter and lemon',
          },
          {
            name: 'Chicken Satay Cup',
            description: 'Bite-sized free-range chicken satay served in small cups with peanut dipping sauce',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Gourmet Beef Sliders',
            description: 'Mini Angus beef burgers on toasted brioche with cheddar and pickles',
          },
          {
            name: 'BBQ Chicken Drumsticks',
            description: 'Free-range chicken drumsticks coated in smoky BBQ sauce, grilled until sticky',
          },
          {
            name: 'Lamb Kofta',
            description: 'Spiced lamb shoulder mince formed into skewers, charred over charcoal, served with yoghurt',
          },
          {
            name: 'Grilled Fish Tacos',
            description: 'Local snapper grilled in soft tortillas with cabbage slaw and chipotle mayo',
          },
          {
            name: 'Vegetable Skewers',
            description: 'Seasonal vegetables marinated in herb oil and grilled over charcoal',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Grilled Pineapple Salsa',
            description: 'Charred pineapple diced with coriander, chilli, and lime',
          },
          {
            name: 'Loaded Nachos',
            description:
              'Tortilla chips topped with melted cheese, jalapeños, and pico de gallo, kept warm on the grill',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Chipotle Mayo',
            description: 'Smoky chilli mayonnaise with lime',
          },
          {
            name: 'Mango Salsa',
            description: 'Fresh diced mango with red onion and coriander',
          },
          {
            name: 'Garlic Yoghurt',
            description: 'Thick yoghurt with roasted garlic and mint',
          },
          {
            name: 'Sweet Chilli',
            description: 'House-made sweet chilli dipping sauce',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: "S'mores Bar",
            description:
              'Guests toast their own marshmallows over the grill, sandwiched with chocolate and biscuits; served with ice cream',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable', 'Vegetarian-friendly', 'Contains seafood', 'Contains dairy'],
    addOns: [
      {
        name: 'Frozen margarita station',
        priceIdr: 290000,
        perGuest: true,
        note: 'Freshly blended classic and mango margaritas',
      },
      {
        name: 'Extra prawn skewers',
        priceIdr: 115000,
        perGuest: true,
        note: 'Additional tiger prawn skewers, unlimited',
      },
    ],
    image: '/generated/mychef-events-bali-party-pool.webp',
    imageAlt: 'Sunset Pool Party BBQ — casual international grill station by the pool',
    specialFeatures: [
      'Grazing format — guests visit the grill station whenever they wish',
      "DIY s'mores — guests toast their own marshmallows over dying embers",
      'Poolside setup — grill station positioned near the pool with ambient lighting',
      'Continuous service — grill stays hot for 3 hours of casual grazing',
      'Festive atmosphere — colourful plating, casual presentation, party vibe',
      'Suggested timing 16:00–20:00 for golden-hour poolside dining',
    ],
  },
  {
    code: 'BBQ-SP4',
    name: 'Luxury Wagyu Fire Grill',
    family: 'bbq-specialty',
    theme: 'Fine Dining Grill',
    tier: 'C',
    priceIdr: 3950000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'The crown jewel of myCHEF.id BBQ: dry-aged Wagyu over binchotan charcoal, Oscietra caviar, black truffle and tableside theatre.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Oscietra Caviar on Blini',
            description: 'Premium Oscietra caviar served on warm blini with crème fraîche and chive',
          },
          {
            name: 'Grilled Scallops with Black Truffle',
            description: 'Hokkaido scallops seared over charcoal, topped with shaved fresh black truffle',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'MB 8-9 Wagyu Ribeye (Dry-Aged 45 Days)',
            description:
              'Premium Wagyu ribeye, dry-aged in-house for 45 days, grilled over binchotan charcoal, rested 10 minutes, sliced tableside (~150g per guest)',
          },
          {
            name: 'MB 7 Wagyu Striploin',
            description: 'Marbled Wagyu striploin, flash-seared over charcoal, served with truffle butter (~100g per guest)',
          },
          {
            name: 'Herb-Crusted Lamb Rack',
            description:
              'Frenched lamb rack coated in rosemary, thyme, and Dijon, roasted over charcoal, carved at station',
          },
          {
            name: 'Grilled Lobster Tail',
            description: 'Whole lobster tail split and grilled over charcoal with garlic butter and lemon',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Truffle Mashed Potato',
            description: 'Silky potato purée folded with black truffle oil and shaved parmesan',
          },
          {
            name: 'Charred Asparagus with Parmesan',
            description: 'Thick asparagus spears charred on the grill, finished with aged parmesan shavings',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Red Wine Jus',
            description: 'Demi-glace reduced with Cabernet Sauvignon and shallots',
          },
          {
            name: 'Truffle Butter',
            description: 'Cultured butter whipped with black truffle paste and sea salt',
          },
          {
            name: 'Chimichurri',
            description: 'Fresh herb sauce with parsley, oregano, garlic, and olive oil',
          },
          {
            name: 'Béarnaise',
            description: 'Classic French emulsion with tarragon, vinegar, and egg yolk',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Chocolate Sphere',
            description: 'Dark chocolate orb filled with mousse and berries, melted tableside with warm caramel sauce',
          },
        ],
      },
    ],
    dietaryTags: ['GF adaptable', 'Contains beef', 'Contains seafood', 'Contains dairy'],
    addOns: [
      {
        name: 'Caviar service upgrade',
        priceIdr: 655000,
        perGuest: true,
        note: 'Upgrade to Beluga caviar (10g per guest)',
      },
      {
        name: 'Premium wine pairing',
        priceIdr: 945000,
        perGuest: true,
        note: 'Four-course wine pairing with champagne, white Burgundy, Barolo, and Sauternes',
      },
      {
        name: 'Extra Wagyu course',
        priceIdr: 1160000,
        perGuest: true,
        note: 'Additional 80g of A5 Japanese Wagyu',
      },
    ],
    image: '/generated/luna-flame.webp',
    imageAlt: 'Luxury Wagyu Fire Grill — premium Wagyu and fine dining flame-grilled theatre',
    specialFeatures: [
      'Binchotan charcoal — premium Japanese white charcoal for highest heat and cleanest flavour',
      'Tableside Wagyu slicing — chef rests the ribeye, then slices in front of guests, describing the marbling',
      'Chocolate sphere theatre — warm caramel poured over the sphere, melting it to reveal dessert',
      'Caviar presentation — served on mother-of-pearl spoons with proper caviar service etiquette',
      'Fresh black truffle shaved at the station with aroma explanation',
      "Personalised service — chef explains each cut's origin, marble score, and ageing process",
      'Suggested timing 19:00–22:30 for evening elegance',
    ],
  },
];
