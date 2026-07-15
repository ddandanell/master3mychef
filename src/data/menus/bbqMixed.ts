import type { Menu } from './types';

export const BBQ_MIXED_MENUS: Menu[] = [
  {
    code: 'BBQ-M1',
    name: 'Australian BBQ',
    family: 'bbq-mixed',
    theme: 'Australian',
    tier: 'A',
    priceIdr: 1300000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'A laid-back Australian backyard barbie — Angus burgers, rosemary lamb chops and smoky chicken over charcoal, with grilled pineapple and coconut ice cream.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Grilled Prawn Skewers',
            description:
              'Tiger prawns threaded on bamboo, brushed with garlic-lemon butter, seared over charcoal. 80g prawns per guest. Served as a passing starter.',
          },
          {
            name: 'Jalapeño Poppers',
            description:
              'Fresh jalapeños halved and stuffed with cream cheese and cheddar, wrapped in streaky bacon, grilled until bubbling and charred. Vegetarian version available without bacon.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Angus Beef Burger',
            description:
              'Hand-pressed patty from Australian grain-fed Angus chuck (130g), grilled over high heat for a smoky crust, served on a toasted brioche bun with cheddar, lettuce, tomato, and pickled onion.',
          },
          {
            name: 'Frenched Lamb Chops',
            description:
              'Australian lamb rack chops (80g), rubbed with rosemary, garlic, and sea salt, seared fast over hot coals, served pink.',
          },
          {
            name: 'BBQ Chicken Thigh',
            description:
              'Free-range chicken thigh (130g), marinated overnight in smoky BBQ sauce and spices, slow-grilled until caramelised and juicy.',
          },
          {
            name: 'Premium Pork Sausages',
            description:
              'Thick-cut gourmet pork sausages (100g), grilled over medium heat, scored for extra char, basted with smoky glaze.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Charred Corn Cobs',
            description:
              'Fresh sweet corn grilled in husks, peeled back, brushed with garlic butter and smoked paprika.',
          },
          {
            name: 'Charred Potato Salad',
            description:
              'Baby potatoes halved and grilled until crisp, tossed through with wholegrain mustard, shallots, and fresh herbs. Served warm.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Smoky BBQ Sauce',
            description:
              'House-made with molasses, apple cider vinegar, smoked paprika, and a touch of chipotle. Slow-simmered for depth.',
          },
          {
            name: 'Chimichurri',
            description:
              'Fresh parsley, oregano, garlic, red wine vinegar, and olive oil. Bright and herby. Argentinian-style.',
          },
          {
            name: 'Wholegrain Mustard',
            description: 'Sharp, seeded mustard cut with a splash of stout.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Grilled Pineapple with Coconut Ice Cream',
            description:
              'Fresh pineapple wedges caramelised on the grill, dusted with cinnamon sugar, served with a scoop of house-made coconut ice cream.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Upgrade to Wagyu burger patty (MB 5-7)',
        priceIdr: 125000,
        perGuest: true,
      },
      {
        name: 'Extra lamb chops (2 pieces)',
        priceIdr: 85000,
        perGuest: true,
      },
      {
        name: 'Fresh seafood platter (grilled squid, prawns, snapper)',
        priceIdr: 220000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-surfturf.webp',
    imageAlt: 'Australian BBQ menu with mixed grilled meats and seafood cooked over charcoal',
  },
  {
    code: 'BBQ-M2',
    name: 'American Smokehouse',
    family: 'bbq-mixed',
    theme: 'American Smokehouse',
    tier: 'B',
    priceIdr: 1800000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'Low-and-slow American barbecue — 12-hour smoked brisket, pulled pork and sticky ribs straight from the smoker, with all the classic sides and sauces.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Smoked BBQ Chicken Wings',
            description:
              'Free-range wings (200g per guest), dry-rubbed with paprika, brown sugar, and cayenne, slow-smoked for 2 hours, then flash-grilled and glazed with house BBQ sauce. Sticky, smoky, and tender.',
          },
          {
            name: 'Beef Brisket Sliders',
            description:
              'Mini brioche buns filled with shredded 12-hour smoked brisket (60g), topped with pickled slaw and a drizzle of Alabama white sauce. Two pieces per guest.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: '12-Hour Smoked Beef Brisket',
            description:
              'Australian Angus brisket (180g), rubbed with black pepper, salt, and brown sugar, smoked over hickory and apple wood for 12 hours until fork-tender. Sliced against the grain. Smoke ring visible.',
          },
          {
            name: 'Pulled Pork',
            description:
              'Local pork shoulder (180g), rubbed with mustard and spice, smoked for 10 hours, hand-pulled and tossed in Carolina vinegar sauce. Served with slider buns on the side.',
          },
          {
            name: 'Smoked Pork Ribs',
            description:
              'Baby back ribs (200g), rubbed with sweet-smoky spice blend, wrapped and smoked for 6 hours, then unwrapped and glazed with Kansas City BBQ sauce on the grill.',
          },
          {
            name: 'Grilled Free-Range Chicken',
            description:
              'Half chicken (150g boneless), marinated in buttermilk and spices, smoked for 1 hour, then finished over direct heat for crispy skin.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Smoked Mac & Cheese',
            description:
              'Creamy three-cheese macaroni baked in a cast-iron skillet on the grill with a smoked cheddar crust. Finished with hickory smoke for 15 minutes.',
          },
          {
            name: 'Classic Coleslaw',
            description:
              'Shredded white and red cabbage with carrot, dressed in tangy buttermilk and apple cider vinegar. Crisp and refreshing against the rich meats.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Kansas City BBQ Sauce',
            description:
              'Thick, sweet, and smoky. Tomato base with molasses, brown sugar, and hickory smoke.',
          },
          {
            name: 'Carolina Vinegar Sauce',
            description:
              'Thin, sharp, and tangy. Apple cider vinegar, chilli flakes, black pepper, and a touch of sugar. Perfect for pulled pork.',
          },
          {
            name: 'Alabama White Sauce',
            description:
              'Mayonnaise base with horseradish, black pepper, lemon juice, and vinegar. Creamy and peppery. Ideal for chicken and brisket.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Mini Pecan Pie',
            description:
              'Individual pecan tarts with buttery shortcrust pastry, caramelised pecan filling, and a hint of bourbon. Baked ahead, served at room temperature with whipped cream.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Beef burnt ends (crispy brisket trimmings)',
        priceIdr: 140000,
        perGuest: true,
      },
      {
        name: 'Cornbread muffins with honey butter',
        priceIdr: 50000,
        perGuest: true,
      },
      {
        name: 'Smoked brisket baked beans',
        priceIdr: 60000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-style-bbq.webp',
    imageAlt: 'American Smokehouse BBQ menu with slow-smoked meats grilling at a villa station',
  },
  {
    code: 'BBQ-M3',
    name: 'Premium Steak Night',
    family: 'bbq-mixed',
    theme: 'Steakhouse',
    tier: 'C',
    priceIdr: 3200000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'A special-occasion steakhouse over live charcoal — Wagyu striploin, ribeye and dry-aged tomahawk carved tableside, with truffle mash and béarnaise.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Grilled Scallops',
            description:
              'Hokkaido-style scallops (3 pieces per guest), seared on the grill over high heat for 90 seconds per side, finished with lemon butter and micro herbs.',
          },
          {
            name: 'Wagyu Beef Skewers',
            description:
              'Cubes of MB 5-7 Wagyu sirloin (60g), threaded with shallots and cherry tomatoes, charred quickly over searing coals, drizzled with chimichurri.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'MB 5-7 Wagyu Striploin',
            description:
              '150g portion of Australian Wagyu striploin, marble score 5-7, seasoned with Murray River salt and cracked black pepper, seared over lumpwood charcoal at 400°C, rested 8 minutes. Sliced and fanned on the plate.',
          },
          {
            name: 'MB 7-9 Wagyu Ribeye',
            description:
              '150g portion of premium Wagyu ribeye, marble score 7-9, rich intramuscular fat renders over the coals creating a caramelised crust. Served with a quenelle of truffle butter melting on top.',
          },
          {
            name: 'Dry-Aged Tomahawk Ribeye',
            description:
              '200g portion per guest (carved from a 1.2kg shared bone-in tomahawk), Australian grain-fed Angus, dry-aged 28 days for concentrated beef flavour. Carved tableside by the chef for theatre. Served on a heated platter.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Truffle Mashed Potato',
            description:
              'Silky potato mash folded through with shaved black truffle and truffle oil, finished with cultured butter. Warmed in a cast-iron pot alongside the grill.',
          },
          {
            name: 'Charred Asparagus with Lemon',
            description:
              'Thick asparagus spears blistered on the grill, dressed with lemon zest, sea salt, and extra virgin olive oil.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Red Wine Jus',
            description:
              'Reduced beef bone stock with Cabernet Sauvignon, shallots, and thyme. Silky and intensely savoury.',
          },
          {
            name: 'Béarnaise',
            description:
              'Classic French emulsion of egg yolk, butter, white wine vinegar, shallots, and tarragon. Made fresh on-site.',
          },
          {
            name: 'Chimichurri',
            description:
              'Fresh parsley, garlic, oregano, red wine vinegar, and olive oil. Cut through the richness of Wagyu.',
          },
          {
            name: 'Truffle Butter',
            description:
              'Cultured butter whipped with black truffle paste and sea salt. Melts luxuriously over hot steak.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Warm Chocolate Fondant',
            description:
              'Individual dark chocolate fondant with a molten centre, baked to order, served with vanilla bean ice cream and a dusting of cocoa powder.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Upgrade to MB 9+ Wagyu for all cuts',
        priceIdr: 655000,
        perGuest: true,
      },
      {
        name: 'Whole live lobster (grilled with garlic butter)',
        priceIdr: 550000,
        perGuest: true,
      },
      {
        name: 'Wine pairing (3 premium reds)',
        priceIdr: 945000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-finedining-bali-sol-bbq.webp',
    imageAlt: 'Premium Steak Night menu with Wagyu cuts grilling over live charcoal',
  },
  {
    code: 'BBQ-M4',
    name: 'Brazilian Churrasco',
    family: 'bbq-mixed',
    theme: 'Brazilian Churrasco',
    tier: 'B',
    priceIdr: 2400000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'Brazilian rodízio fire dining — picanha, alcatra and linguiça carved from skewers onto your plate, with feijão, farofa and warm pão de queijo.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Pão de Queijo',
            description:
              'Warm Brazilian cheese bread balls made with tapioca flour and queijo minas. Crispy outside, chewy inside. Three pieces per guest. Baked fresh and kept warm near the grill.',
          },
          {
            name: 'Grilled Beef Heart Skewers (Corazón)',
            description:
              'Tender beef heart (80g), marinated in red wine vinegar, garlic, and cumin, skewered and grilled over charcoal until caramelised outside and pink inside. A traditional churrasco favourite.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Picanha (Rump Cap)',
            description:
              'The queen of Brazilian BBQ. 150g per guest of the signature rump cap, fat cap left on, sliced into thick steaks, seasoned only with coarse sea salt, grilled fat-side-down first to render the cap crispy. Carved tableside from skewers.',
          },
          {
            name: 'Alcatra (Top Sirloin)',
            description:
              '120g per guest of prime sirloin, seasoned with rock salt, slow-grilled on skewers over medium charcoal, sliced thin and served rare to medium-rare.',
          },
          {
            name: 'Fraldinha (Flank Steak)',
            description:
              '120g per guest of marinated flank steak, garlic and red wine vinegar marinade, grilled quickly over high heat, sliced against the grain. Intense beef flavour.',
          },
          {
            name: 'Linguiça Sausage',
            description:
              '100g per guest of Brazilian-style pork sausage, smoky and spiced with paprika and garlic, grilled whole and sliced into thick rounds.',
          },
          {
            name: 'Grilled Chicken Hearts (Coração de Frango)',
            description:
              '80g per guest, marinated in lime, garlic, and olive oil, threaded on skewers and grilled until golden. A churrasco classic — crispy, juicy, and deeply savoury.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Feijão Tropeiro',
            description:
              'Traditional Brazilian bean salad with black beans, crispy bacon lardons, cassava flour, collard greens, and garlic. Served warm from a cast-iron pot.',
          },
          {
            name: 'Grilled Polenta',
            description:
              'Thick-cut polenta cakes brushed with olive oil, grilled until golden and marked with char lines. Crispy exterior, creamy centre.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Salsa Verde (Molho a Campanha)',
            description:
              'Brazilian vinaigrette with diced tomato, onion, green pepper, parsley, vinegar, and olive oil. Fresh, sharp, and essential with churrasco.',
          },
          {
            name: 'Farofa',
            description:
              'Toasted cassava flour mixed with crispy bacon bits and butter. Sprinkled over meat for crunch and texture.',
          },
          {
            name: 'Chimichurri',
            description:
              'Garlic-forward Argentinian-style herb sauce with parsley, oregano, and red wine vinegar.',
          },
          {
            name: 'Malagueta Hot Sauce',
            description:
              'Brazilian chilli sauce with malagueta peppers, vinegar, and garlic. Fiery and addictive.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Brigadeiro',
            description:
              "Three handmade chocolate truffles per guest. Condensed milk and cocoa cooked down, rolled into balls, and coated in chocolate vermicelli. Brazil's national sweet.",
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Whole picanha (1.2kg, carved at table for sharing)',
        priceIdr: 405000,
        perGuest: true,
      },
      {
        name: 'Grilled pineapple with cinnamon sugar (traditional churrasco palate cleanser)',
        priceIdr: 50000,
        perGuest: true,
      },
      {
        name: 'Caipirinha cocktail pairing (3 per guest)',
        priceIdr: 260000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-satay.webp',
    imageAlt: 'Brazilian Churrasco menu with skewered meats carved fresh from the charcoal grill',
  },
];
