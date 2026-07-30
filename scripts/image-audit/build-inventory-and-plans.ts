import * as fs from "fs/promises";
import * as path from "path";

interface RawImage {
  pageUrl: string;
  section: string;
  component: string;
  imageUrl: string;
  imagePath: string;
  alt: string;
  width: number | null;
  height: number | null;
  displayWidth: number | null;
  displayHeight: number | null;
  aspectRatio: string | null;
  filename: string;
  isBackground: boolean;
  parentHeadings: string[];
  surroundingText: string;
}

interface ImageInventoryRecord {
  id: string;
  pageUrl: string;
  pagePath: string;
  section: string;
  component: string;
  currentImageUrl: string;
  currentImagePath: string;
  filename: string;
  altText: string;
  width: number | null;
  height: number | null;
  displayWidth: number | null;
  displayHeight: number | null;
  aspectRatio: string | null;
  mobileBehavior: string;
  isBackground: boolean;
  parentHeadings: string[];
  surroundingText: string;
  communicates: string;
  decision: "retain" | "replace" | "remove" | "consolidate" | "move";
  decisionRationale: string;
  isDuplicate: boolean;
  duplicatePages: string[];
  recommendedFilename?: string;
  notes?: string;
}

interface PagePlan {
  pageUrl: string;
  pagePath: string;
  pageTitle: string;
  pagePurpose: string;
  primarySearchIntent: string;
  targetCustomer: string;
  emotionalObjective: string;
  mainConversionGoal: string;
  heroImage: {
    concept: string;
    necessaryPeople: string[];
    necessarySetting: string;
    timeOfDay: string;
    serviceDetailsVisible: string[];
    detailsMustNotAppear: string[];
    recommendedAspectRatio: string;
    recommendedGenerationDimensions: string;
    recommendedCropBehaviour: string;
  };
  supportingImages: Array<{
    section: string;
    concept: string;
    necessaryPeople: string[];
    necessarySetting: string;
    timeOfDay: string;
    serviceDetailsVisible: string[];
    detailsMustNotAppear: string[];
    relationshipToCopy: string;
    recommendedAspectRatio: string;
    recommendedGenerationDimensions: string;
    recommendedCropBehaviour: string;
  }>;
  globalExclusions: string[];
  notes: string;
}

const OUTPUT_DIR = path.resolve("scripts/image-audit");

function pagePathFromUrl(url: string): string {
  return url.replace("https://mychef.id", "");
}

function pageTitle(path: string): string {
  const map: Record<string, string> = {
    "/experiences": "Private Experiences Bali | Culinary & Celebration Experiences",
    "/experiences/private-cocktail-party": "Bartender Hire Bali | Private Cocktail Party in Your Villa",
    "/experiences/sushi-masterclass": "Sushi Making Class Bali | Private In-Villa Masterclass",
    "/experiences/private-cooking-class": "Private Cooking Class Bali | Chef at Your Villa",
    "/experiences/kids-birthday-chef-party": "Kids Birthday Party Bali | Private Chef Party",
    "/experiences/champagne-oyster-experience": "Oyster Bar Bali | Champagne & Oyster Experience",
    "/experiences/romantic-proposal-dinner": "Proposal Package Bali | Romantic Proposal Dinner",
    "/complete-villa-experience": "Complete Villa Experience Bali | End-to-End Hospitality",
    "/villa-event-packages": "Bali Villa Event Packages | All-Inclusive",
    "/vip-transport-bali": "VIP Transport Bali | Luxury Cars & Yachts",
  };
  return map[path] || path;
}

function humanizeSection(pagePath: string, sectionClass: string, headings: string[]): string {
  // Try to derive section from class names or headings
  if (sectionClass.includes("overflow-hidden") && (sectionClass.includes("relative") || sectionClass.includes("min-h-[90vh]"))) {
    return "hero";
  }
  if (sectionClass.includes("bg-[#0A0A0A]") || sectionClass.includes("bg-[#0a0a0a]")) {
    return "cta / dark section";
  }
  if (sectionClass.includes("bg-white") || sectionClass.includes("bg-[#FAFAF8]")) {
    if (headings.length > 0) {
      const first = headings[0].toLowerCase();
      if (first.includes("curated") || first.includes("collection")) return "experience collection";
      if (first.includes("difference")) return "why private experiences";
      if (first.includes("works")) return "how it works";
      if (first.includes("who")) return "who it is for";
      if (first.includes("where")) return "locations";
      if (first.includes("private") || first.includes("host") || first.includes("learn") || first.includes("romantic") || first.includes("kids") || first.includes("oyster")) return "intro";
      if (first.includes("what happens") || first.includes("expect")) return "experience";
      if (first.includes("serve") || first.includes("menu") || first.includes("curriculum")) return "menu/curriculum";
      if (first.includes("included")) return "features";
      if (first.includes("planning")) return "planning";
      if (first.includes("pricing") || first.includes("investment")) return "pricing";
      if (first.includes("upgrade")) return "upgrades";
      if (first.includes("setting")) return "settings";
      if (first.includes("safety") || first.includes("allerg")) return "safety";
      if (first.includes("add-on")) return "add-ons";
      if (first.includes("moment")) return "proposal moment";
      if (first.includes("arrival") || first.includes("chapter 1")) return "arrival";
      if (first.includes("daily") || first.includes("chapter 2")) return "daily living";
      if (first.includes("celebration") || first.includes("chapter 3")) return "celebrations";
      if (first.includes("team") || first.includes("chapter 4")) return "in-villa team";
      if (first.includes("beyond") || first.includes("chapter 5")) return "concierge";
      if (first.includes("departure") || first.includes("chapter 6")) return "departure";
      if (first.includes("privacy") || first.includes("chapter 7")) return "privacy";
      if (first.includes("fleet") || first.includes("car")) return "car fleet";
      if (first.includes("minibus") || first.includes("bus")) return "group transport";
      if (first.includes("yacht") || first.includes("water")) return "yachts";
      if (first.includes("logistics") || first.includes("timeline")) return "integrated logistics";
    }
    return "content section";
  }
  return sectionClass || "unknown";
}

async function main() {
  const rawPath = path.join(OUTPUT_DIR, "crawl-images-raw.json");
  const rawData: RawImage[] = JSON.parse(await fs.readFile(rawPath, "utf-8"));

  // Deduplicate
  const occurrences = new Map<string, string[]>();
  for (const img of rawData) {
    const list = occurrences.get(img.imageUrl) || [];
    if (!list.includes(img.pageUrl)) list.push(img.pageUrl);
    occurrences.set(img.imageUrl, list);
  }

  const inventory: ImageInventoryRecord[] = [];
  let idCounter = 1;

  for (const img of rawData) {
    const pagePath = pagePathFromUrl(img.pageUrl);
    const dupPages = occurrences.get(img.imageUrl) || [];
    const isDup = dupPages.length > 1;
    const section = humanizeSection(pagePath, img.section, img.parentHeadings);

    let decision: ImageInventoryRecord["decision"] = "replace";
    let rationale = "AI-generated or stock-looking image should be replaced with a realistic, brand-consistent photograph.";
    let communicates = "Visual support for the surrounding service description.";
    const notes = "";
    let recommendedFilename = "";

    // Specific image-level decisions
    const fn = img.filename.toLowerCase();

    if (fn.includes("avatar-ai")) {
      decision = "remove";
      rationale = "Generic AI avatar image appears across many pages and adds no factual value; remove to avoid misrepresentation.";
      communicates = "A decorative but unverifiable portrait-like image.";
    } else if (fn.includes("private-experiences-bali-hub")) {
      decision = "replace";
      communicates = "Hero for experiences hub: collection of villa experiences, luxury setting.";
      recommendedFilename = "mychef-experiences-hub-hero-landscape.webp";
    } else if (fn.includes("bartender-hire-bali-cocktail-party")) {
      decision = isDup && pagePath === "/experiences" ? "consolidate" : "replace";
      communicates = "Mobile cocktail bar and bartender at a villa party.";
      recommendedFilename = "mychef-cocktail-party-bartender-landscape.webp";
      rationale = isDup && pagePath === "/experiences" ? "Same image used on hub card and dedicated page; generate a dedicated hero for the cocktail page and a matching card crop for the hub." : rationale;
    } else if (fn.includes("sushi-making-class-bali-masterclass")) {
      decision = isDup && pagePath === "/experiences" ? "consolidate" : "replace";
      communicates = "Chef teaching sushi in a private villa kitchen.";
      recommendedFilename = "mychef-sushi-masterclass-chef-landscape.webp";
      rationale = isDup && pagePath === "/experiences" ? "Same image used on hub card and dedicated page; generate a dedicated hero for the sushi page and a matching card crop for the hub." : rationale;
    } else if (fn.includes("private-cooking-class-bali-villa")) {
      decision = isDup && pagePath === "/experiences" ? "consolidate" : "replace";
      communicates = "Private chef teaching Balinese cooking in a villa kitchen.";
      recommendedFilename = "mychef-cooking-class-chef-landscape.webp";
      rationale = isDup && pagePath === "/experiences" ? "Same image used on hub card and dedicated page; generate a dedicated hero for the cooking class page and a matching card crop for the hub." : rationale;
    } else if (fn.includes("kids-birthday-party-bali-chef")) {
      decision = isDup && pagePath === "/experiences" ? "consolidate" : "replace";
      communicates = "Children participating in a villa chef party.";
      recommendedFilename = "mychef-kids-party-children-landscape.webp";
      rationale = isDup && pagePath === "/experiences" ? "Same image used on hub card and dedicated page; generate a dedicated hero for the kids party page and a matching card crop for the hub." : rationale;
    } else if (fn.includes("oyster-bar-bali-champagne")) {
      decision = isDup && pagePath === "/experiences" ? "consolidate" : "replace";
      communicates = "Oyster and champagne service at an elegant villa.";
      recommendedFilename = "mychef-oyster-champagne-station-landscape.webp";
      rationale = isDup && pagePath === "/experiences" ? "Same image used on hub card and dedicated page; generate a dedicated hero for the oyster page and a matching card crop for the hub." : rationale;
    } else if (fn.includes("proposal-package-bali-dinner")) {
      decision = isDup && pagePath === "/experiences" ? "consolidate" : "replace";
      communicates = "Candlelit romantic proposal dinner table.";
      recommendedFilename = "mychef-proposal-dinner-table-landscape.webp";
      rationale = isDup && pagePath === "/experiences" ? "Same image used on hub card and dedicated page; generate a dedicated hero for the proposal page and a matching card crop for the hub." : rationale;
    } else if (fn.includes("luna-ingredients")) {
      decision = "replace";
      communicates = "Fresh ingredients prepared for a private class.";
      recommendedFilename = pagePath.includes("sushi") ? "mychef-sushi-ingredients-portrait.webp" : "mychef-cooking-ingredients-portrait.webp";
    } else if (fn.includes("luna-table")) {
      decision = "replace";
      communicates = "Guests enjoying a meal at a villa table.";
      recommendedFilename = pagePath.includes("sushi") ? "mychef-sushi-dining-table-landscape.webp" : "mychef-cooking-dining-table-landscape.webp";
    } else if (fn.includes("luna-hero")) {
      decision = "replace";
      communicates = "Chef teaching a sushi class at a villa.";
      recommendedFilename = "mychef-sushi-masterclass-action-landscape.webp";
    } else if (fn.includes("luna-gallery")) {
      decision = "replace";
      communicates = "Balinese ingredients and spice pastes.";
      recommendedFilename = "mychef-cooking-class-ingredients-landscape.webp";
    } else if (fn.includes("mychef-events-bali-villa-parties-bar")) {
      decision = "replace";
      communicates = "Stylish private bar setup at a Bali villa party.";
      recommendedFilename = "mychef-cocktail-party-bar-landscape.webp";
    } else if (fn.includes("mychef-service-bali-hero-bartenders")) {
      decision = "replace";
      communicates = "Professional bartenders preparing for an event.";
      recommendedFilename = "mychef-cocktail-party-bartenders-portrait.webp";
    } else if (fn.includes("mychef-mixology-bali-bar-setup")) {
      decision = "replace";
      communicates = "Mobile bar setup for a private party.";
      recommendedFilename = "mychef-cocktail-party-mobile-bar-landscape.webp";
    } else if (fn.includes("mychef-families-bali-kids-menus")) {
      decision = "replace";
      communicates = "Children enjoying hands-on chef party food.";
      recommendedFilename = "mychef-kids-party-cooking-landscape.webp";
    } else if (fn.includes("mychef-events-bali-birthdays-table")) {
      decision = "replace";
      communicates = "Family-friendly birthday table with fresh food.";
      recommendedFilename = "mychef-kids-party-table-landscape.webp";
    } else if (fn.includes("mychef-events-bali-party-medi")) {
      decision = "replace";
      communicates = "Mediterranean seafood and oyster station.";
      recommendedFilename = "mychef-oyster-seafood-station-landscape.webp";
    } else if (fn.includes("mychef-experience-bali-aura-toast")) {
      decision = "replace";
      communicates = "Champagne being poured at an elegant villa event.";
      recommendedFilename = "mychef-oyster-champagne-pour-portrait.webp";
    } else if (fn.includes("section-romantic-dinner")) {
      decision = "replace";
      communicates = "Elegant plated dish from a romantic dinner.";
      recommendedFilename = "mychef-proposal-dinner-plate-portrait.webp";
    } else if (fn.includes("mychef-catering-bali-catering-hero")) {
      decision = "replace";
      communicates = "Private chef preparing food in a Bali villa kitchen.";
      recommendedFilename = "mychef-complete-villa-chef-hero-landscape.webp";
    } else if (fn.includes("hub-villa")) {
      decision = "replace";
      communicates = "Open-plan living and pool area of a luxury Bali villa.";
      recommendedFilename = "mychef-villa-interior-pool-landscape.webp";
    } else if (fn.includes("mychef-vip-transport-bali-hero")) {
      decision = "replace";
      communicates = "Uniformed chauffeur beside a luxury VIP vehicle.";
      recommendedFilename = "mychef-vip-transport-chauffeur-landscape.webp";
    } else if (fn.includes("bali-hub-hero")) {
      decision = "replace";
      communicates = "Infinity pool overlooking the Bali coast at sunset.";
      recommendedFilename = "mychef-villa-pool-sunset-landscape.webp";
    } else if (fn.includes("mychef-experience-bali-aura-tablescape")) {
      decision = "replace";
      communicates = "Immaculately reset dining tablescape after an event.";
      recommendedFilename = "mychef-villa-tablescape-landscape.webp";
    } else if (fn.includes("mychef-events-bali-weddings-reception")) {
      decision = "replace";
      communicates = "Elegant villa wedding reception table.";
      recommendedFilename = "mychef-complete-villa-wedding-reception-landscape.webp";
    } else if (fn.includes("mychef-service-bali-hero-waiters")) {
      decision = "replace";
      communicates = "Uniformed waiters providing polished in-villa service.";
      recommendedFilename = "mychef-villa-staff-service-landscape.webp";
    } else if (fn.includes("mychef-villa-event-packages-hero")) {
      decision = "replace";
      communicates = "Long banquet table with floral runners at dusk.";
      recommendedFilename = "mychef-villa-packages-banquet-hero-landscape.webp";
    } else if (fn.includes("mychef-experience-bali-home-hero-ivory-villa")) {
      decision = "replace";
      communicates = "Candlelit private chef dinner table inside a Bali villa.";
      recommendedFilename = "mychef-villa-packages-dinner-table-landscape.webp";
    } else if (fn.includes("mychef-experience-bali-aura-bartender")) {
      decision = "replace";
      communicates = "Mixologist preparing craft cocktails at a villa bar.";
      recommendedFilename = "mychef-villa-packages-bartender-landscape.webp";
    } else if (fn.includes("mychef-experience-bali-aura-hero-v2")) {
      decision = "replace";
      communicates = "Service team setting a long dinner table at a villa.";
      recommendedFilename = "mychef-villa-packages-staff-table-landscape.webp";
    } else if (fn.includes("mychef-city-jimbaran")) {
      decision = "replace";
      communicates = "Guests arriving for a sunset dinner overlooking Jimbaran Bay.";
      recommendedFilename = "mychef-vip-transport-jimbaran-sunset-landscape.webp";
    } else if (fn.includes("mychef-vip-minibus-bali")) {
      decision = "replace";
      communicates = "Uniformed driver beside a white air-conditioned minibus.";
      recommendedFilename = "mychef-vip-transport-minibus-landscape.webp";
    } else if (fn.includes("mychef-bali-yacht-charter")) {
      decision = "replace";
      communicates = "Champagne and canapés on a charter yacht deck.";
      recommendedFilename = "mychef-vip-transport-yacht-deck-landscape.webp";
    }

    inventory.push({
      id: `img-${idCounter.toString().padStart(3, "0")}`,
      pageUrl: img.pageUrl,
      pagePath,
      section,
      component: img.component || "PremiumPage content block",
      currentImageUrl: img.imageUrl,
      currentImagePath: img.imagePath,
      filename: img.filename,
      altText: img.alt,
      width: img.width,
      height: img.height,
      displayWidth: img.displayWidth,
      displayHeight: img.displayHeight,
      aspectRatio: img.aspectRatio,
      mobileBehavior: img.isBackground ? "background cover" : img.width && img.width >= 1024 ? "full-width" : "responsive inline",
      isBackground: img.isBackground,
      parentHeadings: img.parentHeadings,
      surroundingText: img.surroundingText,
      communicates,
      decision,
      decisionRationale: rationale,
      isDuplicate: isDup,
      duplicatePages: dupPages,
      recommendedFilename: recommendedFilename || undefined,
      notes: notes || undefined,
    });

    idCounter++;
  }

  // Page plans
  const pagePlans: PagePlan[] = [
    {
      pageUrl: "https://mychef.id/experiences",
      pagePath: "/experiences",
      pageTitle: pageTitle("/experiences"),
      pagePurpose: "Hub page that introduces the six curated private experiences and drives visitors to the specific experience page that matches their occasion.",
      primarySearchIntent: "Informational + transactional: users researching private villa experiences in Bali and looking for options.",
      targetCustomer: "Villa holidaymakers, celebration planners, corporate retreat organisers, and families seeking unique in-villa activities.",
      emotionalObjective: "Inspire curiosity and confidence that myCHEF can turn an ordinary villa evening into a memorable, fully-managed experience.",
      mainConversionGoal: "Click through to a specific experience page or start a WhatsApp enquiry.",
      heroImage: {
        concept: "A wide hero showing an elegant villa terrace at golden hour with a beautifully set table, subtle service activity, and tropical greenery suggesting multiple experiences.",
        necessaryPeople: ["1–2 staff in soft focus", "no identifiable guests"],
        necessarySetting: "Luxury Bali villa terrace/pool deck with jungle or rice-terrace backdrop.",
        timeOfDay: "Golden hour / sunset.",
        serviceDetailsVisible: ["elegant table setup", "tropical villa architecture", "soft ambient lighting", "subtle service presence"],
        detailsMustNotAppear: ["text overlays", "specific branded glassware/logos", "crowds", "non-Bali settings"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, centre-weighted, safe margin on left for headline overlay.",
      },
      supportingImages: [
        {
          section: "experience collection cards",
          concept: "Six card images, each showing the specific activity in a villa setting: cocktail bar, sushi lesson, cooking class, kids cooking, oyster station, romantic table.",
          necessaryPeople: ["appropriate people for each activity", "staff and guests where natural"],
          necessarySetting: "Villa kitchen, poolside bar, garden pavilion, dining terrace.",
          timeOfDay: "Mixed: afternoon for classes, sunset for parties, evening for proposal/oysters.",
          serviceDetailsVisible: ["activity-specific props", "fresh ingredients", "service equipment"],
          detailsMustNotAppear: ["generic stock poses", "unrelated food", "text"],
          relationshipToCopy: "Each card image must visually match the title and description of the experience it links to.",
          recommendedAspectRatio: "16:10",
          recommendedGenerationDimensions: "1280x800",
          recommendedCropBehaviour: "object-cover, safe at centre for card cropping.",
        },
      ],
      globalExclusions: ["No invented awards, uniforms with logos, or vehicle branding."],
      notes: "The hub hero should feel inclusive and aspirational without focusing on a single experience. Keep the six card images visually consistent (colour temperature, lighting, villa style).",
    },
    {
      pageUrl: "https://mychef.id/experiences/private-cocktail-party",
      pagePath: "/experiences/private-cocktail-party",
      pageTitle: pageTitle("/experiences/private-cocktail-party"),
      pagePurpose: "Sell bartender hire and private cocktail party experiences at Bali villas.",
      primarySearchIntent: "Transactional: users looking to hire a bartender or host a cocktail party in Bali.",
      targetCustomer: "Villa hosts celebrating birthdays, anniversaries, corporate retreats, or villa welcomes.",
      emotionalObjective: "Convey effortless sophistication, social energy, and professional service that lets the host be a guest.",
      mainConversionGoal: "WhatsApp enquiry with date, villa, and guest count.",
      heroImage: {
        concept: "A bartender pouring a crafted cocktail at a stylish mobile bar by a villa pool at sunset, with elegant glassware and tropical garnishes.",
        necessaryPeople: ["1 bartender in clean, neutral attire"],
        necessarySetting: "Bali villa poolside terrace with sunset light and tropical planting.",
        timeOfDay: "Sunset / golden hour.",
        serviceDetailsVisible: ["mobile bar setup", "cocktail shaker/glassware", "fresh garnishes", "pool/villa backdrop"],
        detailsMustNotAppear: ["crowded party scenes", "text on image", "non-Bali architecture", "logo-branded uniforms"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, bartender right of centre, leave left clear for headline overlay.",
      },
      supportingImages: [
        {
          section: "menu / cocktails & canapés",
          concept: "Close-up of cocktails and canapés arranged on a bar or passing tray.",
          necessaryPeople: [],
          necessarySetting: "Villa bar counter or poolside table.",
          timeOfDay: "Late afternoon / sunset.",
          serviceDetailsVisible: ["colourful cocktails", "passed canapés", "premium presentation"],
          detailsMustNotAppear: ["generic bar backgrounds", "text", "unrelated food"],
          relationshipToCopy: "Illustrates the 'Cocktails & Canapés' section and supports the menu description.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover, centred composition.",
        },
        {
          section: "planning",
          concept: "Bartender team setting up a mobile bar before guests arrive.",
          necessaryPeople: ["2 bartenders preparing equipment"],
          necessarySetting: "Villa terrace/pavilion.",
          timeOfDay: "Late afternoon.",
          serviceDetailsVisible: ["bar tools", "glassware", "ice", "set-up in progress"],
          detailsMustNotAppear: ["guests", "text", "cluttered domestic kitchen"],
          relationshipToCopy: "Supports the planning and end-to-end management narrative.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "pricing",
          concept: "Elegant mobile bar detail shot.",
          necessaryPeople: [],
          necessarySetting: "Villa bar station.",
          timeOfDay: "Evening.",
          serviceDetailsVisible: ["clean bar surface", "premium bottles", "candles/ambient light"],
          detailsMustNotAppear: ["price tags", "text", "generic stock bar"],
          relationshipToCopy: "Reinforces the investment/premium positioning without showing prices.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No visible alcohol brand labels.", "No unverified claims about awards."],
      notes: "Use warm, golden lighting consistent with sunset parties. Keep bartender attire neutral and professional.",
    },
    {
      pageUrl: "https://mychef.id/experiences/sushi-masterclass",
      pagePath: "/experiences/sushi-masterclass",
      pageTitle: pageTitle("/experiences/sushi-masterclass"),
      pagePurpose: "Sell private in-villa sushi making classes.",
      primarySearchIntent: "Transactional: users searching for sushi classes or cooking experiences in Bali villas.",
      targetCustomer: "Couples, families, and small groups of friends seeking a hands-on culinary activity.",
      emotionalObjective: "Convey craftsmanship, intimacy, and the pleasure of learning a refined skill in a private setting.",
      mainConversionGoal: "WhatsApp enquiry with group size, villa, and preferred date.",
      heroImage: {
        concept: "A chef's hands shaping nigiri at a clean villa kitchen counter, with fresh fish and sushi rice visible, soft natural light.",
        necessaryPeople: ["1 chef (hands/forearms in frame, face optional soft focus)"],
        necessarySetting: "Modern Bali villa kitchen island with natural materials.",
        timeOfDay: "Morning or early afternoon soft daylight.",
        serviceDetailsVisible: ["fresh fish", "sushi rice", "bamboo mat", "sharp knife", "clean kitchen"],
        detailsMustNotAppear: ["text", "overcrowded scene", "non-sushi ingredients", "restaurant kitchen"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, hands/counter lower centre, leave upper-left clear for text.",
      },
      supportingImages: [
        {
          section: "what to expect",
          concept: "Chef demonstrating slicing technique to a small group at a villa counter.",
          necessaryPeople: ["1 chef", "2–3 guests watching/participating"],
          necessarySetting: "Villa kitchen or dining area.",
          timeOfDay: "Afternoon daylight.",
          serviceDetailsVisible: ["knife work", "fresh ingredients", "guest engagement"],
          detailsMustNotAppear: ["text", "restaurant setting", "large group"],
          relationshipToCopy: "Illustrates the hands-on instruction described.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "curriculum",
          concept: "Overhead or 45-degree shot of fresh sushi ingredients neatly arranged.",
          necessaryPeople: [],
          necessarySetting: "Clean kitchen counter.",
          timeOfDay: "Daylight.",
          serviceDetailsVisible: ["sashimi-grade fish", "sushi rice", "nori", "wasabi", "ginger"],
          detailsMustNotAppear: ["text", "packaged/processed ingredients"],
          relationshipToCopy: "Supports the 'What You Will Learn' and fresh-ingredients narrative.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover, centred.",
        },
        {
          section: "who is it for",
          concept: "Guests enjoying sushi they made at a villa dining table.",
          necessaryPeople: ["2–4 guests"],
          necessarySetting: "Villa dining table with tropical view blurred in background.",
          timeOfDay: "Late afternoon.",
          serviceDetailsVisible: ["plated sushi", "wine/sake glasses", "relaxed dining"],
          detailsMustNotAppear: ["text", "faces in sharp focus", "restaurant background"],
          relationshipToCopy: "Shows the social, celebratory outcome of the class.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No visible fish species claims beyond what can be sourced.", "No text on plates."],
      notes: "Lighting should be bright and clean to emphasise freshness. Avoid overly styled 'advertisement' looks.",
    },
    {
      pageUrl: "https://mychef.id/experiences/private-cooking-class",
      pagePath: "/experiences/private-cooking-class",
      pageTitle: pageTitle("/experiences/private-cooking-class"),
      pagePurpose: "Sell private Balinese and Indonesian cooking classes at villas.",
      primarySearchIntent: "Transactional: users wanting a private cooking class in Bali.",
      targetCustomer: "Couples, families, friend groups, and food-curious travellers wanting hands-on cultural learning.",
      emotionalObjective: "Convey authenticity, discovery, and the satisfaction of cooking and eating a meal you learned to make.",
      mainConversionGoal: "WhatsApp enquiry with villa, group size, and preferred class.",
      heroImage: {
        concept: "A chef teaching guests to prepare Balinese spice paste by hand in a villa kitchen, with vibrant local ingredients spread across the counter.",
        necessaryPeople: ["1 chef", "2 guests participating"],
        necessarySetting: "Open-plan Bali villa kitchen with tropical light.",
        timeOfDay: "Morning or early afternoon.",
        serviceDetailsVisible: ["stone mortar/pestle", "fresh spices", "vegetables", "chopping board", "villa kitchen"],
        detailsMustNotAppear: ["text", "restaurant kitchen", "generic cooking class setting", "fixed menu signs"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, action in lower-right, leave left for headline overlay.",
      },
      supportingImages: [
        {
          section: "class menu",
          concept: "Colourful Balinese ingredients and spice pastes prepared for a class.",
          necessaryPeople: [],
          necessarySetting: "Villa kitchen counter.",
          timeOfDay: "Morning daylight.",
          serviceDetailsVisible: ["shallots", "turmeric", "ginger", "lemongrass", "chillies", "spice paste"],
          detailsMustNotAppear: ["text", "packaged goods"],
          relationshipToCopy: "Supports the Balinese/Indonesian class menu descriptions.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "market trip add-on",
          concept: "Chef selecting fresh produce at a local Balinese morning market.",
          necessaryPeople: ["1 chef"],
          necessarySetting: "Outdoor traditional Balinese market.",
          timeOfDay: "Early morning.",
          serviceDetailsVisible: ["fresh tropical produce", "market stalls", "basket"],
          detailsMustNotAppear: ["text", "tourist crowds", "modern supermarket"],
          relationshipToCopy: "Illustrates the optional sunrise market add-on.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "occasions",
          concept: "Group sitting down to eat the meal they cooked at a villa table.",
          necessaryPeople: ["4–6 guests"],
          necessarySetting: "Villa dining area with garden view.",
          timeOfDay: "Lunchtime or early evening.",
          serviceDetailsVisible: ["shared dishes", "villa table", "relaxed atmosphere"],
          detailsMustNotAppear: ["text", "faces sharp", "restaurant setting"],
          relationshipToCopy: "Reinforces the social and celebratory use cases.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No invented village or market names.", "No text on ingredient labels."],
      notes: "Lean into warm, natural daylight and authentic Balinese produce. Keep villa interiors contemporary but clearly Bali.",
    },
    {
      pageUrl: "https://mychef.id/experiences/kids-birthday-chef-party",
      pagePath: "/experiences/kids-birthday-chef-party",
      pageTitle: pageTitle("/experiences/kids-birthday-chef-party"),
      pagePurpose: "Sell private chef-hosted kids birthday parties at Bali villas.",
      primarySearchIntent: "Transactional: parents planning a kids birthday party in Bali.",
      targetCustomer: "Parents of children aged 3–12 staying in Bali villas who want a hosted activity and meal.",
      emotionalObjective: "Convey fun, safety, and stress-free hosting — children engaged, parents relaxed.",
      mainConversionGoal: "WhatsApp enquiry with villa, date, number of children, and preferred menu.",
      heroImage: {
        concept: "Children around a villa poolside table decorating pizzas or cupcakes with a chef, balloons and tropical décor in soft background.",
        necessaryPeople: ["3–5 children aged 5–10", "1 chef helper"],
        necessarySetting: "Bali villa poolside pavilion or terrace.",
        timeOfDay: "Late morning or afternoon.",
        serviceDetailsVisible: ["kids cooking activity", "chef hats/aprons", "colourful ingredients", "safe shaded setting"],
        detailsMustNotAppear: ["text", "sharp knives near children", "unsafe hot equipment", "unrelated adult party"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, children lower centre, leave top-left clear for headline.",
      },
      supportingImages: [
        {
          section: "menus",
          concept: "Close-up of children's hands topping personal pizzas or decorating cupcakes.",
          necessaryPeople: ["2–3 children's hands"],
          necessarySetting: "Villa table with craft-paper or simple tablecloth.",
          timeOfDay: "Daylight.",
          serviceDetailsVisible: ["mini pizzas/cupcakes", "kid-friendly toppings", "colourful plates"],
          detailsMustNotAppear: ["text", "choking hazards for small kids", "unhealthy junk food"],
          relationshipToCopy: "Supports the six interactive menu descriptions.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "safety",
          concept: "Family-friendly birthday table with fresh food and safe portions.",
          necessaryPeople: ["1–2 adults and children in soft background"],
          necessarySetting: "Villa garden table.",
          timeOfDay: "Daylight.",
          serviceDetailsVisible: ["clearly labelled dishes", "fresh fruit", "mild sauces on side"],
          detailsMustNotAppear: ["text", "nuts", "alcohol"],
          relationshipToCopy: "Supports the allergen safety messaging.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No unaccompanied very young children.", "No identifiable children's faces in sharp focus."],
      notes: "Keep tones bright and joyful. Show diversity in children. Avoid overly staged party scenes.",
    },
    {
      pageUrl: "https://mychef.id/experiences/champagne-oyster-experience",
      pagePath: "/experiences/champagne-oyster-experience",
      pageTitle: pageTitle("/experiences/champagne-oyster-experience"),
      pagePurpose: "Sell a private champagne and oyster experience at Bali villas.",
      primarySearchIntent: "Transactional: users seeking luxury oyster bar or champagne service in Bali.",
      targetCustomer: "Couples and small groups celebrating anniversaries, birthdays, pre-dinner receptions, or indulgent afternoons.",
      emotionalObjective: "Convey refined indulgence, exclusivity, and effortless luxury.",
      mainConversionGoal: "WhatsApp enquiry with date, villa, and guest count.",
      heroImage: {
        concept: "A waiter pouring champagne beside an ice bed of fresh oysters at a villa poolside bar at sunset.",
        necessaryPeople: ["1 server in neutral attire"],
        necessarySetting: "Bali villa terrace/pool deck with sunset glow.",
        timeOfDay: "Sunset / golden hour.",
        serviceDetailsVisible: ["oysters on crushed ice", "champagne bottle/flute", "elegant glassware", "tropical villa backdrop"],
        detailsMustNotAppear: ["text", "specific champagne brand labels", "crowded party", "non-Bali setting"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, station right of centre, leave left for headline overlay.",
      },
      supportingImages: [
        {
          section: "how it works",
          concept: "Mediterranean seafood and oyster station setup before guests arrive.",
          necessaryPeople: [],
          necessarySetting: "Villa terrace table.",
          timeOfDay: "Late afternoon.",
          serviceDetailsVisible: ["oyster station", "ice", "linens", "seafood platter"],
          detailsMustNotAppear: ["text", "specific brand labels"],
          relationshipToCopy: "Shows the setup and service detail described.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "champagne",
          concept: "Champagne being poured into a flute at an elegant Bali villa event.",
          necessaryPeople: ["server's hand and bottle"],
          necessarySetting: "Villa dining or bar area.",
          timeOfDay: "Evening ambient light.",
          serviceDetailsVisible: ["champagne pour", "elegant flute", "candlelight/ambient light"],
          detailsMustNotAppear: ["text", "brand labels"],
          relationshipToCopy: "Supports the champagne pairing section.",
          recommendedAspectRatio: "3:4",
          recommendedGenerationDimensions: "900x1200",
          recommendedCropBehaviour: "object-cover, vertical safe composition.",
        },
      ],
      globalExclusions: ["No claims about specific oyster varieties unless confirmed available.", "No visible alcohol brand labels."],
      notes: "Use warm sunset tones and elegant styling. Keep the mood intimate, not party-like.",
    },
    {
      pageUrl: "https://mychef.id/experiences/romantic-proposal-dinner",
      pagePath: "/experiences/romantic-proposal-dinner",
      pageTitle: pageTitle("/experiences/romantic-proposal-dinner"),
      pagePurpose: "Sell bespoke romantic proposal dinners with private chef service at Bali villas.",
      primarySearchIntent: "Transactional: users planning a proposal or romantic dinner in Bali.",
      targetCustomer: "Individuals planning to propose or couples celebrating honeymoons/anniversaries who want a private, styled dinner.",
      emotionalObjective: "Convey intimacy, perfection, and discreet orchestration of a once-in-a-lifetime moment.",
      mainConversionGoal: "Confidential WhatsApp enquiry with date, villa, and vision.",
      heroImage: {
        concept: "A candlelit table for two on a villa terrace at dusk, with flowers, champagne, and a subtle tropical view — no people, only the promise of the moment.",
        necessaryPeople: [],
        necessarySetting: "Bali villa clifftop or garden terrace at dusk.",
        timeOfDay: "Blue hour / dusk.",
        serviceDetailsVisible: ["candles", "flowers", "linen", "champagne", "elegant tableware"],
        detailsMustNotAppear: ["people", "text", "ring box visible unless requested", "overly bright lighting"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, table centre-right, left margin for headline overlay.",
      },
      supportingImages: [
        {
          section: "menu",
          concept: "Elegant plated dish from a romantic dinner.",
          necessaryPeople: [],
          necessarySetting: "Villa dining table.",
          timeOfDay: "Evening candlelight.",
          serviceDetailsVisible: ["fine-dining plating", "premium ingredients", "elegant crockery"],
          detailsMustNotAppear: ["text", "menu cards with fake text", "restaurant setting"],
          relationshipToCopy: "Supports the bespoke menu description without claiming a fixed menu.",
          recommendedAspectRatio: "3:4",
          recommendedGenerationDimensions: "900x1200",
          recommendedCropBehaviour: "object-cover, vertical safe centre.",
        },
        {
          section: "proposal moment",
          concept: "Romantic candlelit dinner setting prepared for a proposal.",
          necessaryPeople: [],
          necessarySetting: "Villa terrace with candles and flowers.",
          timeOfDay: "Dusk/early evening.",
          serviceDetailsVisible: ["rose petals", "candles", "private setting"],
          detailsMustNotAppear: ["people", "text", "visible photographer"],
          relationshipToCopy: "Reinforces the discreet, perfectly timed proposal coordination.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No visible photographer.", "No invented floral/décor packages.", "No text on dessert plates unless requested by client."],
      notes: "Hero should feel cinematic but private. Avoid showing a ring box unless it is a client request; focus on the setting.",
    },
    {
      pageUrl: "https://mychef.id/complete-villa-experience",
      pagePath: "/complete-villa-experience",
      pageTitle: pageTitle("/complete-villa-experience"),
      pagePurpose: "Sell end-to-end villa hospitality management including transport, chef, events, staffing, concierge, and cleanup.",
      primarySearchIntent: "Transactional: high-intent users looking for full-service villa management in Bali.",
      targetCustomer: "Multi-generational families, wedding parties, corporate groups, wellness retreats, and HNW travellers.",
      emotionalObjective: "Convey total ease, invisible luxury, and confidence that every detail is handled by one team.",
      mainConversionGoal: "WhatsApp enquiry for a tailored quotation.",
      heroImage: {
        concept: "A private chef working in a warm, modern Bali villa kitchen with fresh ingredients, suggesting continuous daily service.",
        necessaryPeople: ["1 chef in clean attire"],
        necessarySetting: "Contemporary Bali villa kitchen with open view to living/pool area.",
        timeOfDay: "Morning or late afternoon warm light.",
        serviceDetailsVisible: ["chef at work", "fresh produce", "clean kitchen", "villa interior"],
        detailsMustNotAppear: ["text", "clutter", "staff in unprofessional attire", "non-Bali architecture"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, chef right of centre, left clear for headline overlay.",
      },
      supportingImages: [
        {
          section: "the promise",
          concept: "Open-plan living and pool area of a luxury Bali villa prepared for guests.",
          necessaryPeople: [],
          necessarySetting: "Luxury Bali villa interior/exterior.",
          timeOfDay: "Daylight.",
          serviceDetailsVisible: ["pool", "living space", "tropical garden", "immaculate condition"],
          detailsMustNotAppear: ["text", "personal belongings"],
          relationshipToCopy: "Supports the promise of a perfectly prepared villa.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "arrival",
          concept: "Uniformed chauffeur opening the door of a black luxury vehicle at a villa entrance.",
          necessaryPeople: ["1 chauffeur"],
          necessarySetting: "Bali villa driveway/entrance.",
          timeOfDay: "Daylight.",
          serviceDetailsVisible: ["luxury vehicle", "uniformed driver", "villa entrance"],
          detailsMustNotAppear: ["text", "specific car brand badge prominent", "airport signage"],
          relationshipToCopy: "Illustrates the VIP transport chapter.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "celebrations",
          concept: "Elegant villa wedding or event reception table.",
          necessaryPeople: [],
          necessarySetting: "Villa lawn or terrace at dusk.",
          timeOfDay: "Dusk.",
          serviceDetailsVisible: ["long banquet table", "floral runners", "candles"],
          detailsMustNotAppear: ["text", "crowds", "identifiable guests"],
          relationshipToCopy: "Supports the event planning chapter.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "in-villa team",
          concept: "Uniformed waiters providing polished in-villa service.",
          necessaryPeople: ["2–3 uniformed waiters"],
          necessarySetting: "Villa dining area.",
          timeOfDay: "Evening.",
          serviceDetailsVisible: ["professional attire", "service in progress", "elegant table"],
          detailsMustNotAppear: ["text", "logo-branded uniforms"],
          relationshipToCopy: "Illustrates the in-villa staffing chapter.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "departure",
          concept: "Immaculately reset dining tablescape after an event.",
          necessaryPeople: [],
          necessarySetting: "Villa dining terrace.",
          timeOfDay: "Morning after.",
          serviceDetailsVisible: ["clean table", "fresh flowers", "tidy space"],
          detailsMustNotAppear: ["text", "clutter", "dirty dishes"],
          relationshipToCopy: "Supports the cleanup/handback promise.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No invented awards or certifications.", "No vehicle branding beyond what is real."],
      notes: "Maintain a calm, premium palette across all chapter images. Each chapter image should feel like part of one continuous stay.",
    },
    {
      pageUrl: "https://mychef.id/villa-event-packages",
      pagePath: "/villa-event-packages",
      pageTitle: pageTitle("/villa-event-packages"),
      pagePurpose: "Sell all-inclusive villa event packages covering arrival, chef, events, bar, staffing, and cleanup.",
      primarySearchIntent: "Transactional: users looking for bundled villa event packages in Bali.",
      targetCustomer: "Celebration planners, wedding parties, corporate retreat organisers, and luxury villa guests.",
      emotionalObjective: "Convey grandeur, seamless coordination, and a complete turnkey villa celebration.",
      mainConversionGoal: "WhatsApp enquiry for a tailored package quotation.",
      heroImage: {
        concept: "A long banquet table with floral runners and candles set on a Bali villa lawn at dusk, ready for guests.",
        necessaryPeople: [],
        necessarySetting: "Bali villa lawn or terrace with tropical greenery and dusk sky.",
        timeOfDay: "Dusk / blue hour.",
        serviceDetailsVisible: ["long banquet table", "floral runner", "candles/lanterns", "villa garden"],
        detailsMustNotAppear: ["text", "guests seated", "non-Bali plants", "event signage"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, table centre, left margin for headline overlay.",
      },
      supportingImages: [
        {
          section: "arrival",
          concept: "Infinity pool at a Bali villa at sunset, prepared for arriving guests.",
          necessaryPeople: [],
          necessarySetting: "Villa pool with ocean/jungle view.",
          timeOfDay: "Sunset.",
          serviceDetailsVisible: ["infinity pool", "sunset sky", "villa prepared"],
          detailsMustNotAppear: ["text", "people"],
          relationshipToCopy: "Supports the seamless arrival chapter.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "your chef",
          concept: "Candlelit private chef dinner table inside a Bali villa.",
          necessaryPeople: [],
          necessarySetting: "Villa indoor or covered dining area.",
          timeOfDay: "Evening.",
          serviceDetailsVisible: ["set table", "candles", "elegant tableware"],
          detailsMustNotAppear: ["text", "people"],
          relationshipToCopy: "Illustrates daily private chef service.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "the bar",
          concept: "Mixologist preparing craft cocktails at a Bali villa bar.",
          necessaryPeople: ["1 bartender"],
          necessarySetting: "Villa bar setup.",
          timeOfDay: "Evening.",
          serviceDetailsVisible: ["cocktail shaker", "premium bottles", "glassware"],
          detailsMustNotAppear: ["text", "brand labels"],
          relationshipToCopy: "Supports the bar & bottle service chapter.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "your staff",
          concept: "Service team setting a long dinner table at a Bali villa.",
          necessaryPeople: ["2–3 uniformed staff"],
          necessarySetting: "Villa event space.",
          timeOfDay: "Late afternoon.",
          serviceDetailsVisible: ["table setting", "uniforms", "professional service"],
          detailsMustNotAppear: ["text", "logo-branded uniforms"],
          relationshipToCopy: "Supports the professional staffing chapter.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "farewell",
          concept: "Immaculately reset event tablescape after service.",
          necessaryPeople: [],
          necessarySetting: "Villa dining terrace.",
          timeOfDay: "Morning or early evening post-event.",
          serviceDetailsVisible: ["clean table", "fresh flowers", "tidy space"],
          detailsMustNotAppear: ["text", "clutter"],
          relationshipToCopy: "Supports the post-event cleanup and handback chapter.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No invented package inclusions.", "No text overlays."],
      notes: "This page overlaps visually with Complete Villa Experience; use distinct event-focused compositions and a slightly more celebratory mood.",
    },
    {
      pageUrl: "https://mychef.id/vip-transport-bali",
      pagePath: "/vip-transport-bali",
      pageTitle: pageTitle("/vip-transport-bali"),
      pagePurpose: "Sell luxury car, minibus, bus, and yacht transport services in Bali, integrated with catering.",
      primarySearchIntent: "Transactional: users booking luxury transport, airport transfers, or yacht charters in Bali.",
      targetCustomer: "Villa guests, wedding parties, corporate groups, and event planners needing coordinated transport.",
      emotionalObjective: "Convey reliability, luxury, and seamless integration with the rest of the myCHEF experience.",
      mainConversionGoal: "WhatsApp enquiry for transfer or charter quotation.",
      heroImage: {
        concept: "A uniformed chauffeur opening the door of a black luxury vehicle at a Bali villa entrance, warm afternoon light.",
        necessaryPeople: ["1 uniformed chauffeur"],
        necessarySetting: "Bali villa driveway with tropical planting.",
        timeOfDay: "Late afternoon / golden hour.",
        serviceDetailsVisible: ["luxury vehicle", "uniformed chauffeur", "villa entrance", "professional service"],
        detailsMustNotAppear: ["text", "prominent car brand logos", "airport signage", "non-Bali setting"],
        recommendedAspectRatio: "16:9",
        recommendedGenerationDimensions: "1920x1080",
        recommendedCropBehaviour: "object-cover, vehicle and chauffeur right of centre, left clear for headline overlay.",
      },
      supportingImages: [
        {
          section: "car fleet",
          concept: "Guests arriving for a sunset dinner overlooking Jimbaran Bay.",
          necessaryPeople: ["2 guests in soft focus"],
          necessarySetting: "Jimbaran Bay viewpoint or coastal road at sunset.",
          timeOfDay: "Sunset.",
          serviceDetailsVisible: ["luxury vehicle", "coastal view", "evening light"],
          detailsMustNotAppear: ["text", "specific venue names", "license plates readable"],
          relationshipToCopy: "Supports the luxury car hire and scenic transfer narrative.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "group transport",
          concept: "Uniformed driver beside a white air-conditioned minibus at a villa.",
          necessaryPeople: ["1 driver"],
          necessarySetting: "Bali villa entrance.",
          timeOfDay: "Daylight.",
          serviceDetailsVisible: ["clean minibus", "uniformed driver", "open door"],
          detailsMustNotAppear: ["text", "logo branding", "crowds"],
          relationshipToCopy: "Supports the Bali minibus hire section.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
        {
          section: "yachts",
          concept: "Champagne and canapés on the deck of a charter yacht with Nusa Penida cliffs in background.",
          necessaryPeople: [],
          necessarySetting: "Yacht deck off the Bali coast.",
          timeOfDay: "Late afternoon.",
          serviceDetailsVisible: ["yacht deck", "champagne", "canapés", "coastal cliffs"],
          detailsMustNotAppear: ["text", "brand labels", "crowded party"],
          relationshipToCopy: "Supports the Bali yacht charter and landing boat section.",
          recommendedAspectRatio: "4:3",
          recommendedGenerationDimensions: "1200x900",
          recommendedCropBehaviour: "object-cover.",
        },
      ],
      globalExclusions: ["No specific vehicle brand claims.", "No invented fleet size.", "No visible license plates."],
      notes: "Keep vehicles immaculate and drivers in neutral professional attire. Show Balinese landscapes in background where possible.",
    },
  ];

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUTPUT_DIR, "output-03-image-inventory.json"),
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      pagesCrawled: 10,
      totalImages: inventory.length,
      duplicateImages: inventory.filter(i => i.isDuplicate).length,
      decisionsSummary: {
        retain: inventory.filter(i => i.decision === "retain").length,
        replace: inventory.filter(i => i.decision === "replace").length,
        remove: inventory.filter(i => i.decision === "remove").length,
        consolidate: inventory.filter(i => i.decision === "consolidate").length,
        move: inventory.filter(i => i.decision === "move").length,
      },
      images: inventory,
    }, null, 2)
  );

  await fs.writeFile(
    path.join(OUTPUT_DIR, "output-04-page-plans.json"),
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      pages: pagePlans,
    }, null, 2)
  );

  console.log(`Wrote ${inventory.length} image inventory records`);
  console.log(`Wrote ${pagePlans.length} page plans`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
