import fs from 'fs';
import path from 'path';

const INVENTORY_PATH = 'scripts/image-audit/output-03-image-inventory.json';
const PAGE_PLANS_PATH = 'scripts/image-audit/output-04-page-plans.json';
const PROFILE_PATH = 'scripts/image-audit/company-profile.json';
const OUT_DIR = 'scripts/image-audit';

interface InventoryImage {
  id: string;
  pageUrl: string;
  pagePath: string;
  section: string;
  currentImageUrl: string;
  currentImagePath: string;
  filename: string;
  altText: string;
  width: number | null;
  height: number | null;
  decision: 'replace' | 'consolidate' | 'remove' | 'retain' | 'move';
  recommendedFilename?: string;
  surroundingText?: string;
  communicates?: string;
}

interface PagePlan {
  pagePath: string;
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
}

const inventory: { images: InventoryImage[] } = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));
const pagePlans: { pages: PagePlan[] } = JSON.parse(fs.readFileSync(PAGE_PLANS_PATH, 'utf8'));
const profile = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf8'));

// Group replace/consolidate inventory rows by proposed filename
const groups: Record<string, InventoryImage[]> = {};
for (const img of inventory.images) {
  if (img.decision !== 'replace' && img.decision !== 'consolidate') continue;
  const fn = img.recommendedFilename || img.filename;
  if (!groups[fn]) groups[fn] = [];
  groups[fn].push(img);
}

function getPagePlan(pagePath: string): PagePlan | undefined {
  return pagePlans.pages.find(p => p.pagePath === pagePath);
}

function findPlanSection(plan: PagePlan, section: string) {
  if (plan.heroImage && (section === 'hero' || !section)) return { type: 'hero', data: plan.heroImage };
  const sup = plan.supportingImages?.find(s =>
    section.toLowerCase().includes(s.section.toLowerCase()) ||
    s.section.toLowerCase().includes(section.toLowerCase())
  );
  if (sup) return { type: 'supporting', data: sup };
  return { type: 'hero', data: plan.heroImage };
}

// Pricing per image by quality and dimensions (from output-02)
function costFor(quality: 'medium' | 'high', dimensions: string): number {
  // gpt-image-2 legacy preset per-image estimates
  const [w, h] = dimensions.split('x').map(Number);
  const landscape = w > h;
  if (quality === 'high') return landscape ? 0.165 : 0.211;
  // medium
  if (w === 1024 && h === 1024) return 0.053;
  if (w === 1024 && h === 1536) return 0.041;
  if (w === 1536 && h === 1024) return 0.041;
  if (w === 1200 && h === 900) return 0.041; // 4:3 landscape treated as medium landscape
  if (w === 900 && h === 1200) return 0.041; // 3:4 portrait
  return 0.041;
}

function aspectRatioFor(dimensions: string): string {
  const [w, h] = dimensions.split('x').map(Number);
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const g = gcd(w, h);
  return `${w / g}:${h / g}`;
}

function priorityFor(section: string): 'hero' | 'supporting' | 'card' {
  const s = section.toLowerCase();
  if (s.includes('hero')) return 'hero';
  if (s.includes('card') || s.includes('collection')) return 'card';
  return 'supporting';
}

function qualityFor(priority: 'hero' | 'supporting' | 'card'): 'medium' | 'high' {
  return priority === 'hero' ? 'high' : 'medium';
}

function dimensionsFor(aspect: string, priority: 'hero' | 'supporting' | 'card'): string {
  // All dimensions must be multiples of 16 for gpt-image-2
  if (priority === 'hero') return '1920x1088'; // valid 16:9, close to 1920x1080
  if (aspect === '16:10') return '1280x800';
  if (aspect === '4:3') return '1200x896';
  if (aspect === '3:4') return '896x1200';
  if (aspect === '1:1') return '1024x1024';
  return '1200x896';
}

// Per-filename production overrides. These take precedence over inferred values.
interface Override {
  priority: 'hero' | 'supporting' | 'card';
  dimensions: string;
  aspectRatio: string;
}

const OVERRIDES: Record<string, Override> = {
  // Heroes
  'mychef-experiences-hub-hero-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-cocktail-party-bartender-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-sushi-masterclass-chef-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-cooking-class-chef-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-kids-party-children-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-oyster-champagne-station-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-proposal-dinner-table-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-complete-villa-chef-hero-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-villa-packages-banquet-hero-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  'mychef-vip-transport-chauffeur-landscape.webp': { priority: 'hero', dimensions: '1920x1088', aspectRatio: '16:9' },
  // Supporting / cards
  'mychef-cocktail-party-bar-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-cocktail-party-bartenders-portrait.webp': { priority: 'supporting', dimensions: '896x1200', aspectRatio: '3:4' },
  'mychef-cocktail-party-mobile-bar-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-sushi-masterclass-action-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-sushi-ingredients-portrait.webp': { priority: 'supporting', dimensions: '896x1200', aspectRatio: '3:4' },
  'mychef-sushi-dining-table-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-cooking-class-ingredients-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-cooking-ingredients-portrait.webp': { priority: 'supporting', dimensions: '896x1200', aspectRatio: '3:4' },
  'mychef-cooking-dining-table-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-kids-party-cooking-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-kids-party-table-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-oyster-seafood-station-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-oyster-champagne-pour-portrait.webp': { priority: 'supporting', dimensions: '896x1200', aspectRatio: '3:4' },
  'mychef-proposal-dinner-plate-portrait.webp': { priority: 'supporting', dimensions: '896x1200', aspectRatio: '3:4' },
  'mychef-villa-interior-pool-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-complete-villa-wedding-reception-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-villa-staff-service-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-villa-pool-sunset-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-villa-tablescape-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-villa-packages-dinner-table-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-villa-packages-bartender-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-villa-packages-staff-table-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-vip-transport-jimbaran-sunset-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-vip-transport-minibus-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' },
  'mychef-vip-transport-yacht-deck-landscape.webp': { priority: 'supporting', dimensions: '1200x896', aspectRatio: '4:3' }
};

function proposedFilename(spec: ImageSpec): string {
  return `mychef-${spec.service}-${spec.scene}-bali-${spec.orientation}.webp`;
}

// Detailed prompt building blocks
const BRAND = {
  wardrobe: [
    "Professional Indonesian service staff wear clean, neutral attire: white or off-white short- or long-sleeved shirts, black or dark trousers, simple black aprons. No visible logos, slogans, or branded uniforms beyond what myCHEF already uses.",
    "Chefs wear plain white or black chef jackets, no embroidered names or invented logos.",
    "Bartenders wear clean white or charcoal shirts with rolled sleeves; no branded bar tools or uniforms.",
    "Chauffeurs wear a plain white shirt, black trousers, and a neutral black tie or no tie; no cap with insignia.",
    "Guests dress in relaxed upscale resort wear: linen shirts, cotton dresses, light neutrals and soft earth tones."
  ],
  grooming: "Hair neatly tied back for staff; clean hands visible where appropriate. Guests look naturally groomed, no exaggerated styling.",
  posture: "Staff posture is attentive but relaxed: slightly bent forward when serving, hands at sides or gently clasped when waiting. Avoid stiff military poses or overly animated gestures.",
  lightingFamilies: ["Golden-hour sunset with warm amber highlights", "Soft natural morning daylight through tropical foliage", "Warm interior/candlelight after dusk", "Blue-hour dusk with subtle ambient glow"],
  colorTemperature: "Warm but not orange: 3200–4500K feel, with natural skin tones preserved. Avoid cool sterile whites or oversaturated teal/orange grading.",
  villaStyle: "Contemporary Balinese tropical architecture: pitched alang-alang or flat roofs, warm timber, local stone, polished concrete, floor-to-ceiling glass, infinity pools, lush native planting. Avoid Mediterranean, Moroccan, or generic modern builds.",
  tableStyling: "Natural linens in ivory, sand, or soft terracotta; rattan chargers or simple ceramic plates; tropical foliage centrepieces; tapered beeswax or soy candles; minimal, unbranded glassware.",
  plating: "Fine-dining plating with negative space: handmade pasta twirled neatly, protein sliced to show doneness, micro-herbs and edible flowers used sparingly; Balinese dishes reinterpreted with clean, modern presentation.",
  barSetup: "Mobile bar or villa counter with brushed metal or dark wood surface; premium spirit bottles with labels turned away; crystal or simple highball glassware; fresh garnishes in small dishes; no branded bar mats.",
  glassware: "Thin-stemmed wine glasses, coupe or tulip champagne flutes, simple highballs; no logo-etched glassware.",
  photographyDistance: ["Wide establishing shot showing villa architecture and setting", "Medium environmental shot showing people and activity", "Close detail shot of hands, food, or equipment"],
  focalLengthLook: "Natural perspective: 35mm–50mm full-frame equivalent for environmental shots; 85mm–100mm equivalent for close details and shallow depth of field. Avoid extreme wide distortion or flat telephoto compression.",
  guestDemographics: ["Adult couples 25–55", "Families with children 3–12", "Small friend groups 25–45", "Corporate groups 30–60"],
  editing: "Subtle editorial colour grade: lifted shadows, gentle contrast, warm highlights, natural saturation. No HDR halos, no heavy vignettes, no skin smoothing, no visible AI plastic texture."
};

// Per-image specs keyed by unique proposed filename
interface ImageSpec {
  service: string;
  scene: string;
  orientation: 'landscape' | 'portrait' | 'square';
  subject: string;
  action: string;
  environment: string;
  people: string;
  wardrobe: string;
  foodOrEquipment: string;
  lighting: string;
  camera: string;
  composition: string;
  color: string;
  negativeSpace: string;
  exclusions: string[];
  focalPoint: string;
  emptySpace: string;
  peopleCount: string;
  staffRoles: string;
  guestProfile: string;
  setting: string;
  timeOfDay: string;
  cameraPerspective: string;
  lensAppearance: string;
  foodOrEquipmentDetails: string;
  brandConsistencyNotes: string;
  targetKeyword: string;
  purpose: string;
}

const PAGE_KEYWORDS: Record<string, string> = {
  '/experiences': 'private experiences Bali',
  '/experiences/private-cocktail-party': 'bartender hire Bali',
  '/experiences/sushi-masterclass': 'sushi making class Bali',
  '/experiences/private-cooking-class': 'private cooking class Bali',
  '/experiences/kids-birthday-chef-party': 'kids birthday party Bali',
  '/experiences/champagne-oyster-experience': 'oyster bar Bali',
  '/experiences/romantic-proposal-dinner': 'proposal package Bali',
  '/complete-villa-experience': 'complete villa experience Bali',
  '/villa-event-packages': 'Bali villa event packages',
  '/vip-transport-bali': 'VIP transport Bali'
};

const IMAGE_SPECS: Record<string, ImageSpec> = {
  'mychef-experiences-hub-hero-landscape.webp': {
    service: 'experiences',
    scene: 'hub-hero',
    orientation: 'landscape',
    subject: 'A wide villa terrace at golden hour',
    action: 'Subtle service preparation: a waiter adjusts a wine glass on an elegantly set table while another carries a tray of canapés in soft background',
    environment: 'Luxury Bali villa pool terrace with infinity edge, tropical planting, and distant rice terraces or jungle ridge',
    people: 'Two Indonesian service staff, faces softly blurred or in profile',
    wardrobe: 'White service shirts, black trousers, plain black aprons',
    foodOrEquipment: 'Elegant table setting with neutral linen, wine glasses, small canapé tray',
    lighting: 'Golden-hour sunset with warm amber light on terrace and long soft shadows',
    camera: 'Wide environmental shot, 35mm equivalent, f/2.8 look',
    composition: 'Table centre-right, pool and jungle backdrop left, staff placed naturally around table',
    color: 'Warm ivory, amber, deep green, soft terracotta',
    negativeSpace: 'Upper-left quadrant kept relatively clear for headline overlay',
    exclusions: ['No text', 'No logos', 'No identifiable guests', 'No crowds', 'No non-Bali architecture'],
    focalPoint: 'The set table and the waiter’s hand adjusting glassware',
    emptySpace: 'Top-left ~25% of frame for headline text',
    peopleCount: '2 staff',
    staffRoles: 'Waiters',
    guestProfile: 'No identifiable guests',
    setting: 'Bali villa pool terrace',
    timeOfDay: 'Golden hour / sunset',
    cameraPerspective: 'Eye-level wide shot from terrace corner',
    lensAppearance: '35mm full-frame equivalent, moderate depth of field',
    foodOrEquipmentDetails: 'Neutral linen, crystal wine glasses, small tray of colourful canapés',
    brandConsistencyNotes: 'Sets the umbrella visual tone: warm sunset, invisible service, Bali villa setting',
    targetKeyword: 'private experiences Bali',
    purpose: 'Hero for experiences hub: introduce the collection of curated villa experiences'
  },
  'mychef-cocktail-party-bartender-landscape.webp': {
    service: 'cocktail-party',
    scene: 'bartender-pour',
    orientation: 'landscape',
    subject: 'Indonesian bartender pouring a crafted cocktail',
    action: 'Pouring a garnished cocktail from a shaker into a coupe glass at a stylish mobile bar',
    environment: 'Bali villa poolside terrace at sunset with tropical planting and pool reflections',
    people: '1 bartender, face in soft profile or partly obscured by activity',
    wardrobe: 'White or charcoal short-sleeved shirt, dark trousers, no logos',
    foodOrEquipment: 'Cocktail shaker, coupe glass, fresh citrus and herb garnishes in small dishes, premium bottles turned label-away',
    lighting: 'Sunset backlight with warm rim light and soft fill on the bartender',
    camera: 'Medium-wide shot, 40mm equivalent, shallow depth of field on the pour',
    composition: 'Bartender and bar right of centre; left side opens to pool and sky',
    color: 'Warm amber, teal pool, green herbs, copper shaker highlights',
    negativeSpace: 'Left third of frame relatively open for headline overlay',
    exclusions: ['No text', 'No logo-branded uniforms', 'No alcohol brand labels visible', 'No crowds', 'No non-Bali architecture'],
    focalPoint: 'The stream of cocktail and the bartender’s hands',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '1 bartender',
    staffRoles: 'Bartender',
    guestProfile: 'No guests visible',
    setting: 'Villa poolside mobile bar',
    timeOfDay: 'Sunset / golden hour',
    cameraPerspective: 'Slight low angle, eye-level with bar counter',
    lensAppearance: '40mm equivalent, f/2.8 look with soft background bokeh',
    foodOrEquipmentDetails: 'Cocktail shaker, coupe glass, citrus wheels, mint sprigs, premium bottles with labels turned away',
    brandConsistencyNotes: 'Used on hub card and cocktail party hero; maintain warm sunset palette',
    targetKeyword: 'bartender hire Bali',
    purpose: 'Sell private cocktail party and bartender hire at Bali villas'
  },
  'mychef-sushi-masterclass-chef-landscape.webp': {
    service: 'sushi-masterclass',
    scene: 'chef-hands',
    orientation: 'landscape',
    subject: 'Chef shaping nigiri at a clean villa kitchen counter',
    action: 'Hands pressing sushi rice and placing a slice of fresh fish onto a bamboo board',
    environment: 'Modern Bali villa kitchen island with warm timber, polished concrete, and tropical daylight',
    people: '1 chef, hands and forearms in focus, face optional and soft',
    wardrobe: 'Plain white chef jacket, no logos',
    foodOrEquipment: 'Sashimi-grade fish slices, bowl of seasoned sushi rice, bamboo mat, sharp knife, small dish of wasabi and ginger',
    lighting: 'Soft natural morning or afternoon daylight from large windows',
    camera: 'Close environmental shot, 50mm equivalent, shallow depth on hands',
    composition: 'Counter runs diagonally from lower-left to upper-right; chef’s hands lower centre',
    color: 'Clean whites, pale wood, coral-pink fish, green wasabi',
    negativeSpace: 'Upper-left clear for headline overlay',
    exclusions: ['No text', 'No restaurant kitchen elements', 'No packaged goods', 'No oversized groups'],
    focalPoint: 'Chef’s hands forming nigiri',
    emptySpace: 'Upper-left ~20% of frame',
    peopleCount: '1 chef',
    staffRoles: 'Sushi chef',
    guestProfile: 'No guests visible',
    setting: 'Villa kitchen island',
    timeOfDay: 'Morning or early afternoon soft daylight',
    cameraPerspective: 'Slightly above eye-level, 45-degree angle over counter',
    lensAppearance: '50mm equivalent, f/2.8, soft background blur',
    foodOrEquipmentDetails: 'Fresh fish, sushi rice, bamboo mat, Japanese knife, wasabi, ginger, nori sheets',
    brandConsistencyNotes: 'Used on hub card and sushi masterclass hero; clean, bright, craftsmanship-focused',
    targetKeyword: 'sushi making class Bali',
    purpose: 'Sell private in-villa sushi masterclass'
  },
  'mychef-cooking-class-chef-landscape.webp': {
    service: 'cooking-class',
    scene: 'chef-teaching',
    orientation: 'landscape',
    subject: 'Chef teaching guests to prepare Balinese spice paste',
    action: 'Chef guides two guests grinding spice paste in a stone mortar while fresh ingredients are spread across the counter',
    environment: 'Open-plan Bali villa kitchen with tropical garden visible through glass doors',
    people: '1 chef and 2 adult guests, faces partly visible or in soft focus',
    wardrobe: 'Chef in white jacket; guests in relaxed resort wear',
    foodOrEquipment: 'Stone mortar and pestle, shallots, garlic, turmeric, ginger, lemongrass, chillies, chopping board, knife',
    lighting: 'Bright natural morning light with soft shadows',
    camera: 'Environmental medium shot, 35mm equivalent',
    composition: 'Action in lower-right two-thirds; left margin open for headline',
    color: 'Earthy spice colours, warm timber, green foliage outside',
    negativeSpace: 'Left side of frame kept relatively clear',
    exclusions: ['No text', 'No restaurant kitchen', 'No fixed menu signs', 'No packaged ingredients'],
    focalPoint: 'Chef’s hands and mortar with spice paste',
    emptySpace: 'Left ~25% of frame',
    peopleCount: '1 chef, 2 guests',
    staffRoles: 'Private chef / instructor',
    guestProfile: 'Adult couple or friends, relaxed resort wear',
    setting: 'Villa kitchen with garden view',
    timeOfDay: 'Morning or early afternoon',
    cameraPerspective: 'Eye-level across the kitchen island',
    lensAppearance: '35mm equivalent, f/4 for environmental clarity',
    foodOrEquipmentDetails: 'Balinese spice-paste ingredients: shallots, garlic, turmeric, ginger, lemongrass, bird’s-eye chillies, stone mortar',
    brandConsistencyNotes: 'Used on hub card and cooking class hero; authentic Balinese activity',
    targetKeyword: 'private cooking class Bali',
    purpose: 'Sell private Balinese and Indonesian cooking classes at villas'
  },
  'mychef-kids-party-children-landscape.webp': {
    service: 'kids-party',
    scene: 'children-cooking',
    orientation: 'landscape',
    subject: 'Children decorating personal pizzas at a shaded villa table',
    action: 'Three to five children aged 5–10 topping mini pizzas while a chef helper supervises',
    environment: 'Bali villa poolside pavilion with tropical planting and shaded seating',
    people: '3–5 children, 1 adult chef helper; children’s faces turned away or partly visible',
    wardrobe: 'Children in casual bright summer clothes with simple aprons; helper in white shirt and black apron',
    foodOrEquipment: 'Mini pizza bases, colourful toppings in bowls, child-safe utensils, paper table cover',
    lighting: 'Bright natural daylight under shade, even and cheerful',
    camera: 'Medium environmental shot, 40mm equivalent',
    composition: 'Children grouped around table lower centre; foliage and pool softly blurred behind',
    color: 'Bright but natural: tomato red, basil green, sunny yellow, sky blue pool',
    negativeSpace: 'Top-left kept open for headline overlay',
    exclusions: ['No text', 'No sharp knives near children', 'No hot equipment', 'No alcohol', 'No identifiable faces in sharp focus'],
    focalPoint: 'Children’s hands decorating pizzas',
    emptySpace: 'Top-left ~20% of frame',
    peopleCount: '3–5 children, 1 adult helper',
    staffRoles: 'Chef helper / kids activity host',
    guestProfile: 'Children aged 5–10 with one adult staff member',
    setting: 'Villa poolside pavilion',
    timeOfDay: 'Late morning or afternoon',
    cameraPerspective: 'Slight high angle, eye-level with seated children',
    lensAppearance: '40mm equivalent, f/4, soft background',
    foodOrEquipmentDetails: 'Mini pizzas, bowls of toppings, child-safe utensils, colourful plates',
    brandConsistencyNotes: 'Used on hub card and kids party hero; joyful, safe, diverse children',
    targetKeyword: 'kids birthday party Bali',
    purpose: 'Sell private chef-hosted kids birthday parties at Bali villas'
  },
  'mychef-oyster-champagne-station-landscape.webp': {
    service: 'oyster-champagne',
    scene: 'station-pour',
    orientation: 'landscape',
    subject: 'Server pouring champagne beside an ice bed of oysters',
    action: 'Server’s hand pouring champagne into a flute next to a platter of oysters on crushed ice',
    environment: 'Bali villa poolside terrace at sunset with warm ambient light',
    people: '1 server, face in profile or obscured',
    wardrobe: 'White service shirt, black trousers',
    foodOrEquipment: 'Oysters on crushed ice, champagne bottle with label turned away, flute, linen napkin, lemon wedges',
    lighting: 'Golden-hour sunset with warm highlights on glass and ice',
    camera: 'Medium shot, 50mm equivalent, shallow depth',
    composition: 'Oyster station right of centre; left opens to pool and sunset sky',
    color: 'Cool silver-blue ice, warm amber sunset, green herbs',
    negativeSpace: 'Left third open for headline overlay',
    exclusions: ['No text', 'No specific champagne brand labels', 'No crowds', 'No non-Bali setting'],
    focalPoint: 'Champagne pour and oyster platter',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '1 server',
    staffRoles: 'Server',
    guestProfile: 'No guests visible',
    setting: 'Villa poolside terrace',
    timeOfDay: 'Sunset / golden hour',
    cameraPerspective: 'Eye-level, slight side angle',
    lensAppearance: '50mm equivalent, f/2.8, creamy bokeh',
    foodOrEquipmentDetails: 'Fresh oysters on crushed ice, champagne bottle, flute, lemon, mignonette sauce',
    brandConsistencyNotes: 'Used on hub card and oyster experience hero; elegant indulgence',
    targetKeyword: 'oyster bar Bali',
    purpose: 'Sell private champagne and oyster experience at Bali villas'
  },
  'mychef-proposal-dinner-table-landscape.webp': {
    service: 'proposal-dinner',
    scene: 'table-setting',
    orientation: 'landscape',
    subject: 'Candlelit table for two on a villa terrace at dusk',
    action: 'No people; the table is perfectly set and waiting, suggesting an imminent private dinner',
    environment: 'Bali villa clifftop or garden terrace with tropical foliage and distant twilight sky',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'White linen, candles, simple floral arrangement, champagne in cooler, elegant tableware',
    lighting: 'Blue-hour dusk with candlelight and subtle warm interior spill',
    camera: 'Wide environmental shot, 35mm equivalent',
    composition: 'Table centre-right; left opens to darkening tropical view',
    color: 'Deep blue dusk, warm candlelight, ivory linen, dark greens',
    negativeSpace: 'Left third open for headline overlay',
    exclusions: ['No people', 'No text', 'No ring box', 'No visible photographer', 'No overly bright lighting'],
    focalPoint: 'The candlelit table setting',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa clifftop or garden terrace',
    timeOfDay: 'Blue hour / dusk',
    cameraPerspective: 'Eye-level from terrace edge',
    lensAppearance: '35mm equivalent, f/4, deep enough focus for table and background',
    foodOrEquipmentDetails: 'Candles, white linen, champagne cooler, simple tropical flowers, polished tableware',
    brandConsistencyNotes: 'Used on hub card and proposal dinner hero; intimate, private, no staged proposal moment',
    targetKeyword: 'proposal package Bali',
    purpose: 'Sell bespoke romantic proposal dinners with private chef service'
  },
  'mychef-cocktail-party-bar-landscape.webp': {
    service: 'cocktail-party',
    scene: 'cocktails-canapes',
    orientation: 'landscape',
    subject: 'Colourful cocktails and canapés arranged on a villa bar counter',
    action: 'Still-life arrangement; no people, ready for service',
    environment: 'Villa poolside bar counter at late afternoon',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Three varied cocktails in coupe/highball glasses, small slate or wood board with canapés, citrus garnishes',
    lighting: 'Late-afternoon warm sunlight with soft shadows',
    camera: 'Close detail shot, 50mm equivalent, shallow depth',
    composition: 'Drinks and canapés centred, bar surface leading line, pool blurred behind',
    color: 'Coral, amber, mint green, warm wood tones',
    negativeSpace: 'Top margin kept open',
    exclusions: ['No text', 'No logos', 'No generic bar backgrounds', 'No unrelated food'],
    focalPoint: 'Centre cocktail and canapé board',
    emptySpace: 'Top ~15% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa poolside bar counter',
    timeOfDay: 'Late afternoon',
    cameraPerspective: '45-degree overhead angle',
    lensAppearance: '50mm equivalent, f/2.8, soft background',
    foodOrEquipmentDetails: 'Craft cocktails, canapés on slate, citrus garnishes, cocktail picks',
    brandConsistencyNotes: 'Supports cocktails & canapés section; premium presentation',
    targetKeyword: 'bartender hire Bali',
    purpose: 'Illustrate the cocktail party menu offering'
  },
  'mychef-cocktail-party-bartenders-portrait.webp': {
    service: 'cocktail-party',
    scene: 'bartenders-setup',
    orientation: 'portrait',
    subject: 'Two bartenders preparing a mobile bar before guests arrive',
    action: 'One bartender arranges glassware while the other fills ice bucket',
    environment: 'Villa terrace pavilion with tropical greenery in background',
    people: '2 bartenders, faces partly turned away',
    wardrobe: 'White or charcoal shirts, dark trousers, plain aprons',
    foodOrEquipment: 'Bar tools, shakers, glassware, ice bucket, premium bottles turned away',
    lighting: 'Late afternoon warm natural light',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Bartenders arranged vertically, bar counter as leading line',
    color: 'Warm neutrals, silver barware, green foliage',
    negativeSpace: 'Top of frame kept open',
    exclusions: ['No text', 'No logos', 'No guests', 'No cluttered domestic kitchen'],
    focalPoint: 'The bartenders’ hands and bar setup',
    emptySpace: 'Upper ~20% of frame',
    peopleCount: '2 bartenders',
    staffRoles: 'Bartenders',
    guestProfile: 'No guests visible',
    setting: 'Villa terrace pavilion',
    timeOfDay: 'Late afternoon',
    cameraPerspective: 'Eye-level across the bar',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'Cocktail shakers, mixing glasses, jiggers, ice, premium bottles, glassware',
    brandConsistencyNotes: 'Supports planning section; teamwork and preparation narrative',
    targetKeyword: 'bartender hire Bali',
    purpose: 'Show bartender team setting up for service'
  },
  'mychef-cocktail-party-mobile-bar-landscape.webp': {
    service: 'cocktail-party',
    scene: 'mobile-bar-detail',
    orientation: 'landscape',
    subject: 'Elegant mobile bar detail shot',
    action: 'No people; bar ready for service',
    environment: 'Villa bar station at evening ambient light',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Clean dark wood or brushed metal bar surface, premium bottles with labels turned away, candles, simple glassware',
    lighting: 'Evening ambient light with candles',
    camera: 'Medium close-up, 50mm equivalent, shallow depth',
    composition: 'Bar surface across lower third; bottles softly blurred behind',
    color: 'Warm amber, dark wood, silver highlights',
    negativeSpace: 'Upper portion open',
    exclusions: ['No text', 'No price tags', 'No brand labels', 'No generic stock bar'],
    focalPoint: 'Candles and glassware on clean bar surface',
    emptySpace: 'Upper ~25% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa bar station',
    timeOfDay: 'Evening',
    cameraPerspective: 'Slight low angle along bar',
    lensAppearance: '50mm equivalent, f/2.8',
    foodOrEquipmentDetails: 'Premium bottles turned away, coupe glasses, tea-light candles, linen coaster',
    brandConsistencyNotes: 'Supports pricing section; reinforces premium without showing costs',
    targetKeyword: 'bartender hire Bali',
    purpose: 'Reinforce premium bar service positioning'
  },
  'mychef-sushi-masterclass-action-landscape.webp': {
    service: 'sushi-masterclass',
    scene: 'instruction',
    orientation: 'landscape',
    subject: 'Chef demonstrating slicing technique to a small group',
    action: 'Chef holds a knife and gestures toward a fish fillet while two guests watch from across the counter',
    environment: 'Villa kitchen or dining area with natural light',
    people: '1 chef, 2 guests, faces partly visible',
    wardrobe: 'Chef in white jacket; guests in casual resort wear',
    foodOrEquipment: 'Sharp knife, fresh fish fillet, cutting board, small bowls of ingredients',
    lighting: 'Afternoon daylight from windows',
    camera: 'Medium environmental, 40mm equivalent',
    composition: 'Chef left, guests right, counter between them',
    color: 'Clean whites, pale wood, fresh fish pinks',
    negativeSpace: 'Top margin open',
    exclusions: ['No text', 'No restaurant setting', 'No large group'],
    focalPoint: 'Chef’s hands and knife near fish fillet',
    emptySpace: 'Top ~20% of frame',
    peopleCount: '1 chef, 2 guests',
    staffRoles: 'Sushi chef / instructor',
    guestProfile: 'Adult couple or friends',
    setting: 'Villa kitchen or dining area',
    timeOfDay: 'Afternoon daylight',
    cameraPerspective: 'Eye-level across counter',
    lensAppearance: '40mm equivalent, f/4',
    foodOrEquipmentDetails: 'Japanese knife, sashimi-grade fish, bamboo board, wasabi, soy dish',
    brandConsistencyNotes: 'Supports what to expect section; hands-on learning',
    targetKeyword: 'sushi making class Bali',
    purpose: 'Illustrate hands-on sushi instruction'
  },
  'mychef-sushi-ingredients-portrait.webp': {
    service: 'sushi-masterclass',
    scene: 'ingredients',
    orientation: 'portrait',
    subject: 'Fresh sushi ingredients neatly arranged',
    action: 'Still-life overhead arrangement',
    environment: 'Clean kitchen counter',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Sashimi-grade fish slices, sushi rice, nori sheets, wasabi, pickled ginger, soy dish, bamboo mat',
    lighting: 'Bright daylight, even and clean',
    camera: 'Overhead, 50mm equivalent',
    composition: 'Ingredients arranged in loose grid, centred',
    color: 'White, pale pink, deep green, black nori',
    negativeSpace: 'Minimal; frame filled with ingredients',
    exclusions: ['No text', 'No packaged or processed ingredients'],
    focalPoint: 'Centre fish slices and rice bowl',
    emptySpace: 'Edges only',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa kitchen counter',
    timeOfDay: 'Daylight',
    cameraPerspective: 'Overhead flat-lay',
    lensAppearance: '50mm equivalent, f/5.6 for even focus',
    foodOrEquipmentDetails: 'Fresh fish, seasoned rice, nori, wasabi, ginger, soy, bamboo mat',
    brandConsistencyNotes: 'Supports curriculum/fresh ingredients narrative',
    targetKeyword: 'sushi making class Bali',
    purpose: 'Show fresh sushi ingredients'
  },
  'mychef-sushi-dining-table-landscape.webp': {
    service: 'sushi-masterclass',
    scene: 'guests-dining',
    orientation: 'landscape',
    subject: 'Guests enjoying sushi they made at a villa dining table',
    action: 'Two to four guests seated, reaching for sushi plates, wine glasses on table',
    environment: 'Villa dining table with tropical view blurred in background',
    people: '2–4 guests, faces soft or turned away',
    wardrobe: 'Relaxed resort wear',
    foodOrEquipment: 'Plated sushi, wine or sake glasses, simple table setting',
    lighting: 'Late afternoon warm natural light',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Table across lower half, guests interacting, blurred tropical view behind',
    color: 'Warm wood, ivory plates, green foliage blur',
    negativeSpace: 'Upper portion open',
    exclusions: ['No text', 'No faces in sharp focus', 'No restaurant background'],
    focalPoint: 'Sushi plates and guests’ hands',
    emptySpace: 'Upper ~20% of frame',
    peopleCount: '2–4 guests',
    staffRoles: 'None visible',
    guestProfile: 'Adult friends or couple',
    setting: 'Villa dining table with garden view',
    timeOfDay: 'Late afternoon',
    cameraPerspective: 'Eye-level across table',
    lensAppearance: '50mm equivalent, f/2.8',
    foodOrEquipmentDetails: 'Assorted sushi plates, wine glasses, simple ceramic',
    brandConsistencyNotes: 'Supports who is it for section; social outcome',
    targetKeyword: 'sushi making class Bali',
    purpose: 'Show guests enjoying sushi after class'
  },
  'mychef-cooking-class-ingredients-landscape.webp': {
    service: 'cooking-class',
    scene: 'balinese-ingredients',
    orientation: 'landscape',
    subject: 'Colourful Balinese ingredients and spice pastes',
    action: 'Still-life of prepared ingredients for a class',
    environment: 'Villa kitchen counter in morning light',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Shallots, garlic, turmeric, ginger, lemongrass, chillies, stone mortar with base gede, coconut oil',
    lighting: 'Bright morning daylight',
    camera: 'Close detail, 50mm equivalent',
    composition: 'Ingredients spread across counter from left to right',
    color: 'Vibrant yellow turmeric, red chillies, green lemongrass, earthy mortar',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No packaged goods'],
    focalPoint: 'Stone mortar with fresh spice paste',
    emptySpace: 'Top ~15% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa kitchen counter',
    timeOfDay: 'Morning daylight',
    cameraPerspective: '45-degree angle',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'Shallots, garlic, turmeric, ginger, lemongrass, bird’s-eye chillies, base gede in mortar',
    brandConsistencyNotes: 'Supports class menu section; authentic Balinese produce',
    targetKeyword: 'private cooking class Bali',
    purpose: 'Illustrate Balinese cooking class ingredients'
  },
  'mychef-cooking-ingredients-portrait.webp': {
    service: 'cooking-class',
    scene: 'market-produce',
    orientation: 'portrait',
    subject: 'Chef selecting fresh produce at a traditional Balinese morning market',
    action: 'Chef’s hands choosing tropical produce from a market stall',
    environment: 'Outdoor traditional Balinese market with wooden stalls and woven baskets',
    people: '1 chef, face partly visible',
    wardrobe: 'Plain white or black chef jacket, no logos',
    foodOrEquipment: 'Basket with tropical fruit and vegetables, market produce displays',
    lighting: 'Early morning soft sunlight with dappled shade',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Chef lower centre, market stalls framing top and sides',
    color: 'Warm earth tones, vibrant produce colours',
    negativeSpace: 'Top margin open',
    exclusions: ['No text', 'No tourist crowds', 'No modern supermarket', 'No invented village names'],
    focalPoint: 'Chef’s hands and basket of produce',
    emptySpace: 'Top ~20% of frame',
    peopleCount: '1 chef',
    staffRoles: 'Private chef',
    guestProfile: 'None visible',
    setting: 'Traditional Balinese morning market',
    timeOfDay: 'Early morning',
    cameraPerspective: 'Eye-level, slight side angle',
    lensAppearance: '50mm equivalent, f/2.8',
    foodOrEquipmentDetails: 'Woven basket, tropical fruit, vegetables, herbs, wooden market stall',
    brandConsistencyNotes: 'Supports market trip add-on; authentic sourcing story',
    targetKeyword: 'private cooking class Bali',
    purpose: 'Illustrate optional sunrise market add-on'
  },
  'mychef-cooking-dining-table-landscape.webp': {
    service: 'cooking-class',
    scene: 'group-dining',
    orientation: 'landscape',
    subject: 'Group sitting down to eat the meal they cooked',
    action: 'Four to six guests seated around a villa table sharing dishes',
    environment: 'Villa dining area with garden view',
    people: '4–6 guests, faces soft or turned away',
    wardrobe: 'Relaxed resort wear',
    foodOrEquipment: 'Shared Balinese dishes, rice bowls, serving spoons, water glasses',
    lighting: 'Lunchtime or early evening natural light',
    camera: 'Medium-wide, 35mm equivalent',
    composition: 'Table diagonal, guests on both sides, garden blurred behind',
    color: 'Warm wood, terracotta bowls, green garden',
    negativeSpace: 'Upper portion open',
    exclusions: ['No text', 'No faces sharp', 'No restaurant setting'],
    focalPoint: 'Shared dishes at centre of table',
    emptySpace: 'Upper ~20% of frame',
    peopleCount: '4–6 guests',
    staffRoles: 'None visible',
    guestProfile: 'Mixed adult friends or family',
    setting: 'Villa dining area',
    timeOfDay: 'Lunchtime or early evening',
    cameraPerspective: 'Eye-level across table corner',
    lensAppearance: '35mm equivalent, f/4',
    foodOrEquipmentDetails: 'Shared Balinese dishes, steamed rice, sambals, serving utensils',
    brandConsistencyNotes: 'Supports occasions section; social outcome',
    targetKeyword: 'private cooking class Bali',
    purpose: 'Show group enjoying meal they prepared'
  },
  'mychef-kids-party-cooking-landscape.webp': {
    service: 'kids-party',
    scene: 'kids-hands-cooking',
    orientation: 'landscape',
    subject: "Children's hands topping personal pizzas or decorating cupcakes",
    action: 'Close-up of small hands placing toppings on mini pizzas',
    environment: 'Villa table with simple paper or cloth cover',
    people: '2–3 children, hands and forearms only',
    wardrobe: 'Casual bright clothes, simple aprons',
    foodOrEquipment: 'Mini pizzas, colourful toppings in bowls, colourful plates',
    lighting: 'Bright natural daylight',
    camera: 'Close-up, 60mm equivalent',
    composition: 'Hands and food fill frame, centred',
    color: 'Cheerful primary food colours on neutral table',
    negativeSpace: 'Minimal; top slightly open',
    exclusions: ['No text', 'No choking hazards', 'No unhealthy junk food', 'No faces'],
    focalPoint: "Children's hands and mini pizzas",
    emptySpace: 'Top ~10% of frame',
    peopleCount: '2–3 children (hands only)',
    staffRoles: 'None visible',
    guestProfile: 'Children aged 5–10',
    setting: 'Villa table',
    timeOfDay: 'Daylight',
    cameraPerspective: 'Slight overhead angle',
    lensAppearance: '60mm equivalent, f/4',
    foodOrEquipmentDetails: 'Mini pizza bases, bowls of cheese, vegetables, pepperoni, colourful plates',
    brandConsistencyNotes: 'Supports menus section; safe, fun, hands-on',
    targetKeyword: 'kids birthday party Bali',
    purpose: 'Show children doing hands-on cooking activity'
  },
  'mychef-kids-party-table-landscape.webp': {
    service: 'kids-party',
    scene: 'family-table',
    orientation: 'landscape',
    subject: 'Family-friendly birthday table with fresh food',
    action: 'Table set with clearly arranged dishes; one or two adults and children softly in background',
    environment: 'Villa garden table under shade',
    people: '1–2 adults and children in soft background',
    wardrobe: 'Casual resort wear',
    foodOrEquipment: 'Fresh fruit, mild sauces on side, labelled-style dishes (no actual text), kid portions',
    lighting: 'Bright daylight under shade',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Table in foreground, family softly blurred behind',
    color: 'Fresh fruit colours, neutral linens',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No nuts visible', 'No alcohol', 'No sharp objects'],
    focalPoint: 'Fresh, safe kid-friendly food on table',
    emptySpace: 'Top ~20% of frame',
    peopleCount: '1–2 adults and children in background',
    staffRoles: 'None visible',
    guestProfile: 'Parents with young children',
    setting: 'Villa garden table',
    timeOfDay: 'Daylight',
    cameraPerspective: 'Eye-level across table',
    lensAppearance: '50mm equivalent, f/2.8',
    foodOrEquipmentDetails: 'Fresh fruit platter, mild dips, small portions, juice cups',
    brandConsistencyNotes: 'Supports safety/allergen messaging',
    targetKeyword: 'kids birthday party Bali',
    purpose: 'Reinforce safe, fresh food for children'
  },
  'mychef-oyster-seafood-station-landscape.webp': {
    service: 'oyster-champagne',
    scene: 'seafood-station',
    orientation: 'landscape',
    subject: 'Mediterranean seafood and oyster station setup',
    action: 'No people; station prepared before guests arrive',
    environment: 'Villa terrace table at late afternoon',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Oysters on ice, seafood platter, linen, silverware, lemon wedges',
    lighting: 'Late afternoon warm sunlight',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Station centred, terrace and planting blurred behind',
    color: 'Cool silver, warm wood, green accents',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No specific brand labels'],
    focalPoint: 'Oyster platter on ice',
    emptySpace: 'Top ~20% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa terrace table',
    timeOfDay: 'Late afternoon',
    cameraPerspective: '45-degree angle',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'Oysters on crushed ice, prawns, mussels, lemon, mignonette, linen',
    brandConsistencyNotes: 'Supports how it works section; elegant setup',
    targetKeyword: 'oyster bar Bali',
    purpose: 'Show oyster and seafood station setup'
  },
  'mychef-oyster-champagne-pour-portrait.webp': {
    service: 'oyster-champagne',
    scene: 'champagne-pour',
    orientation: 'portrait',
    subject: "Server's hand pouring champagne into a flute",
    action: 'Champagne being poured at an elegant villa event',
    environment: 'Villa dining or bar area with evening ambient light',
    people: "Server's hand and bottle only",
    wardrobe: 'White shirt sleeve visible',
    foodOrEquipment: 'Champagne bottle with label turned away, elegant flute, candlelight',
    lighting: 'Evening ambient light with candle glow',
    camera: 'Close-up, 85mm equivalent, shallow depth',
    composition: 'Bottle and flute diagonal, centred vertically',
    color: 'Warm amber, gold bubbles, dark background',
    negativeSpace: 'Space around bottle for vertical crop safety',
    exclusions: ['No text', 'No brand labels'],
    focalPoint: 'Champagne stream and flute',
    emptySpace: 'Surrounding margins for vertical crop',
    peopleCount: "1 hand (server's)",
    staffRoles: 'Server',
    guestProfile: 'None visible',
    setting: 'Villa dining/bar area',
    timeOfDay: 'Evening ambient light',
    cameraPerspective: 'Close side angle',
    lensAppearance: '85mm equivalent, f/2.0',
    foodOrEquipmentDetails: 'Champagne bottle, flute, candle, linen',
    brandConsistencyNotes: 'Supports champagne pairing section; intimate elegance',
    targetKeyword: 'oyster bar Bali',
    purpose: 'Illustrate champagne service'
  },
  'mychef-proposal-dinner-plate-portrait.webp': {
    service: 'proposal-dinner',
    scene: 'plated-dish',
    orientation: 'portrait',
    subject: 'Elegant plated dish from a romantic dinner',
    action: 'No people; single fine-dining plate on a table',
    environment: 'Villa dining table in evening candlelight',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Fine-dining plate with seafood or poultry, micro-herbs, sauce dots, elegant crockery',
    lighting: 'Evening candlelight with warm highlights',
    camera: 'Close-up, 85mm equivalent, shallow depth',
    composition: 'Plate off-centre, candle and glass softly blurred',
    color: 'Warm ivory plate, rich food colours, soft amber background',
    negativeSpace: 'Top and side margins for vertical crop',
    exclusions: ['No text', 'No menu cards with fake text', 'No restaurant setting'],
    focalPoint: 'The plated dish',
    emptySpace: 'Upper and side margins',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa dining table',
    timeOfDay: 'Evening candlelight',
    cameraPerspective: 'Slight overhead angle',
    lensAppearance: '85mm equivalent, f/2.0',
    foodOrEquipmentDetails: 'White plate, protein with sauce, micro-herbs, candle, wine glass',
    brandConsistencyNotes: 'Supports menu section; bespoke fine dining',
    targetKeyword: 'proposal package Bali',
    purpose: 'Show example romantic dinner plating'
  },
  'mychef-complete-villa-chef-hero-landscape.webp': {
    service: 'complete-villa',
    scene: 'chef-kitchen',
    orientation: 'landscape',
    subject: 'Private chef working in a warm modern Bali villa kitchen',
    action: 'Chef plating or preparing ingredients at a clean kitchen counter',
    environment: 'Contemporary Bali villa kitchen with open view to living and pool area',
    people: '1 chef, face partly visible',
    wardrobe: 'Plain white chef jacket',
    foodOrEquipment: 'Fresh produce, cutting board, knife, plating in progress',
    lighting: 'Morning or late afternoon warm light',
    camera: 'Medium-wide, 35mm equivalent',
    composition: 'Chef right of centre, kitchen leading to pool/living on left',
    color: 'Warm neutrals, green foliage through windows, stainless steel accents',
    negativeSpace: 'Left third open for headline',
    exclusions: ['No text', 'No clutter', 'No unprofessional attire', 'No non-Bali architecture'],
    focalPoint: 'Chef at work in the kitchen',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '1 chef',
    staffRoles: 'Private chef',
    guestProfile: 'No guests visible',
    setting: 'Villa kitchen with open living/pool view',
    timeOfDay: 'Morning or late afternoon warm light',
    cameraPerspective: 'Eye-level from kitchen entrance',
    lensAppearance: '35mm equivalent, f/4',
    foodOrEquipmentDetails: 'Fresh vegetables, herbs, knife, cutting board, plate',
    brandConsistencyNotes: 'Hero for complete villa experience; continuous daily service feel',
    targetKeyword: 'complete villa experience Bali',
    purpose: 'Sell end-to-end villa hospitality management'
  },
  'mychef-villa-interior-pool-landscape.webp': {
    service: 'villa-interior',
    scene: 'pool-living',
    orientation: 'landscape',
    subject: 'Open-plan living and pool area of a luxury Bali villa',
    action: 'No people; villa prepared for guests',
    environment: 'Luxury Bali villa interior/exterior with pool, living space, tropical garden',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Sofa, coffee table, pool edge, tropical planting',
    lighting: 'Daylight with soft shadows',
    camera: 'Wide establishing shot, 24mm equivalent',
    composition: 'Living space foreground, pool middle ground, garden background',
    color: 'Warm timber, turquoise pool, lush greens',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No personal belongings'],
    focalPoint: 'Pool and living space transition',
    emptySpace: 'Upper portion',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Luxury Bali villa',
    timeOfDay: 'Daylight',
    cameraPerspective: 'Wide angle from living area toward pool',
    lensAppearance: '24mm equivalent, f/8 look',
    foodOrEquipmentDetails: 'Minimal furniture, fresh flowers, pool towels neatly folded',
    brandConsistencyNotes: 'Used on complete villa and packages pages; promise of prepared villa',
    targetKeyword: 'complete villa experience Bali',
    purpose: 'Support promise of perfectly prepared villa'
  },
  'mychef-vip-transport-chauffeur-landscape.webp': {
    service: 'vip-transport',
    scene: 'chauffeur-vehicle',
    orientation: 'landscape',
    subject: 'Uniformed chauffeur opening door of black luxury vehicle',
    action: 'Chauffeur holding rear door open at a villa entrance',
    environment: 'Bali villa driveway with tropical planting',
    people: '1 chauffeur, face in profile',
    wardrobe: 'Plain white shirt, black trousers, neutral tie optional',
    foodOrEquipment: 'Black luxury SUV or sedan, immaculate condition',
    lighting: 'Late afternoon golden hour',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Vehicle and chauffeur right of centre; driveway and villa entrance left',
    color: 'Warm golden light, black vehicle, green foliage',
    negativeSpace: 'Left third open for headline',
    exclusions: ['No text', 'No prominent car brand badges', 'No airport signage', 'No non-Bali setting'],
    focalPoint: 'Chauffeur and open vehicle door',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '1 chauffeur',
    staffRoles: 'Chauffeur',
    guestProfile: 'No guests visible',
    setting: 'Bali villa driveway',
    timeOfDay: 'Late afternoon / golden hour',
    cameraPerspective: 'Eye-level from driveway',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'Black luxury SUV/sedan, open rear door, villa entrance',
    brandConsistencyNotes: 'Used on complete villa and VIP transport pages; professional arrival',
    targetKeyword: 'VIP transport Bali',
    purpose: 'Illustrate VIP transport arrival service'
  },
  'mychef-complete-villa-wedding-reception-landscape.webp': {
    service: 'complete-villa',
    scene: 'wedding-reception',
    orientation: 'landscape',
    subject: 'Elegant villa wedding or event reception table',
    action: 'No people; long banquet table set for celebration',
    environment: 'Villa lawn or terrace at dusk with tropical greenery',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Long banquet table, floral runner, candles, lanterns',
    lighting: 'Dusk ambient with candlelight',
    camera: 'Wide shot, 35mm equivalent',
    composition: 'Table receding into background, garden framing sides',
    color: 'Warm candlelight, green foliage, dusk blue',
    negativeSpace: 'Sky/top open',
    exclusions: ['No text', 'No crowds', 'No identifiable guests'],
    focalPoint: 'Long banquet table centre',
    emptySpace: 'Upper portion',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa lawn or terrace',
    timeOfDay: 'Dusk',
    cameraPerspective: 'Eye-level along table',
    lensAppearance: '35mm equivalent, f/4',
    foodOrEquipmentDetails: 'Floral runner, taper candles, lanterns, linen',
    brandConsistencyNotes: 'Supports celebrations chapter on complete villa page',
    targetKeyword: 'complete villa experience Bali',
    purpose: 'Show villa event reception setup'
  },
  'mychef-villa-staff-service-landscape.webp': {
    service: 'villa-staff',
    scene: 'waiters-service',
    orientation: 'landscape',
    subject: 'Uniformed waiters providing polished in-villa service',
    action: 'Two to three waiters setting or serving an elegant table',
    environment: 'Villa dining area in evening',
    people: '2–3 waiters, faces partly visible',
    wardrobe: 'White shirts, black trousers, plain black aprons',
    foodOrEquipment: 'Table setting, wine glasses, service tray',
    lighting: 'Evening warm interior light',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Waiters arranged around table, depth through dining room',
    color: 'Warm amber, white shirts, dark wood',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No logo-branded uniforms'],
    focalPoint: 'Waiters’ attentive service gesture',
    emptySpace: 'Upper ~20% of frame',
    peopleCount: '2–3 waiters',
    staffRoles: 'Waiters',
    guestProfile: 'No guests visible',
    setting: 'Villa dining area',
    timeOfDay: 'Evening',
    cameraPerspective: 'Eye-level across dining room',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'Service tray, wine glasses, polished tableware',
    brandConsistencyNotes: 'Supports in-villa staffing chapter',
    targetKeyword: 'complete villa experience Bali',
    purpose: 'Illustrate professional in-villa service team'
  },
  'mychef-villa-pool-sunset-landscape.webp': {
    service: 'villa-pool',
    scene: 'infinity-pool',
    orientation: 'landscape',
    subject: 'Infinity pool at a Bali villa at sunset',
    action: 'No people; villa prepared for arriving guests',
    environment: 'Villa pool with ocean or jungle view',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Infinity pool, loungers, tropical planting',
    lighting: 'Sunset with warm sky reflections',
    camera: 'Wide establishing shot, 24mm equivalent',
    composition: 'Pool leading to horizon, sky filling upper half',
    color: 'Warm sunset, turquoise water, deep greens',
    negativeSpace: 'Sky upper portion',
    exclusions: ['No text', 'No people'],
    focalPoint: 'Infinity pool edge and view',
    emptySpace: 'Upper half of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa pool with ocean/jungle view',
    timeOfDay: 'Sunset',
    cameraPerspective: 'Low angle near pool edge',
    lensAppearance: '24mm equivalent, f/8',
    foodOrEquipmentDetails: 'Clean pool, neatly arranged loungers, tropical planting',
    brandConsistencyNotes: 'Used on complete villa and packages pages; arrival chapter',
    targetKeyword: 'Bali villa event packages',
    purpose: 'Support seamless arrival chapter'
  },
  'mychef-villa-tablescape-landscape.webp': {
    service: 'villa-tablescape',
    scene: 'reset-table',
    orientation: 'landscape',
    subject: 'Immaculately reset dining tablescape after an event',
    action: 'No people; clean table with fresh flowers',
    environment: 'Villa dining terrace in morning or early evening',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Clean table, fresh flowers, tidy chairs',
    lighting: 'Soft morning or early evening light',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Table centred, terrace receding',
    color: 'Soft neutrals, fresh green, warm wood',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No clutter', 'No dirty dishes'],
    focalPoint: 'Fresh flowers on clean table',
    emptySpace: 'Upper ~25% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa dining terrace',
    timeOfDay: 'Morning after or early evening post-event',
    cameraPerspective: 'Eye-level along table',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'Fresh linen, flowers, polished glassware, tidy chairs',
    brandConsistencyNotes: 'Used on complete villa and packages pages; cleanup/handback',
    targetKeyword: 'Bali villa event packages',
    purpose: 'Support post-event cleanup promise'
  },
  'mychef-villa-packages-banquet-hero-landscape.webp': {
    service: 'villa-packages',
    scene: 'banquet-lawn',
    orientation: 'landscape',
    subject: 'Long banquet table with floral runners on villa lawn at dusk',
    action: 'No people; table ready for guests',
    environment: 'Bali villa lawn with tropical greenery and dusk sky',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Long banquet table, floral runner, candles, lanterns',
    lighting: 'Dusk / blue hour with candlelight',
    camera: 'Wide shot, 35mm equivalent',
    composition: 'Table centre, lawn and villa framing, left margin open',
    color: 'Warm candlelight, green lawn, dusk blue',
    negativeSpace: 'Left third open for headline',
    exclusions: ['No text', 'No guests seated', 'No non-Bali plants', 'No event signage'],
    focalPoint: 'Long banquet table with floral runner',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Bali villa lawn',
    timeOfDay: 'Dusk / blue hour',
    cameraPerspective: 'Eye-level along table',
    lensAppearance: '35mm equivalent, f/4',
    foodOrEquipmentDetails: 'Floral runner, taper candles, lanterns, charger plates',
    brandConsistencyNotes: 'Hero for villa event packages; grander than complete villa hero',
    targetKeyword: 'Bali villa event packages',
    purpose: 'Sell all-inclusive villa event packages'
  },
  'mychef-villa-packages-dinner-table-landscape.webp': {
    service: 'villa-packages',
    scene: 'chef-dinner-table',
    orientation: 'landscape',
    subject: 'Candlelit private chef dinner table inside a Bali villa',
    action: 'No people; table set for dinner service',
    environment: 'Villa indoor or covered dining area',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Set table, candles, elegant tableware',
    lighting: 'Evening candlelight',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Table diagonal, candles leading eye',
    color: 'Warm amber, ivory linen, dark wood',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No people'],
    focalPoint: 'Candlelit table setting',
    emptySpace: 'Upper ~20% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Villa indoor/covered dining',
    timeOfDay: 'Evening',
    cameraPerspective: 'Eye-level across table',
    lensAppearance: '50mm equivalent, f/2.8',
    foodOrEquipmentDetails: 'Candles, linen, wine glasses, polished crockery',
    brandConsistencyNotes: 'Supports daily private chef service chapter',
    targetKeyword: 'Bali villa event packages',
    purpose: 'Illustrate daily private chef dinner service'
  },
  'mychef-villa-packages-bartender-landscape.webp': {
    service: 'villa-packages',
    scene: 'packages-bartender',
    orientation: 'landscape',
    subject: 'Mixologist preparing craft cocktails at a Bali villa bar',
    action: 'Bartender shaking a cocktail at villa bar setup',
    environment: 'Villa bar setup in evening',
    people: '1 bartender, face partly visible',
    wardrobe: 'White or charcoal shirt, dark trousers',
    foodOrEquipment: 'Cocktail shaker, premium bottles turned away, glassware',
    lighting: 'Evening ambient light',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Bartender right of centre, bar counter leading left',
    color: 'Warm amber, silver shaker, dark wood',
    negativeSpace: 'Left third open',
    exclusions: ['No text', 'No brand labels'],
    focalPoint: 'Bartender shaking cocktail',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '1 bartender',
    staffRoles: 'Mixologist',
    guestProfile: 'No guests visible',
    setting: 'Villa bar setup',
    timeOfDay: 'Evening',
    cameraPerspective: 'Eye-level across bar',
    lensAppearance: '50mm equivalent, f/2.8',
    foodOrEquipmentDetails: 'Cocktail shaker, jigger, premium bottles, glassware',
    brandConsistencyNotes: 'Supports bar & bottle service chapter',
    targetKeyword: 'Bali villa event packages',
    purpose: 'Show mixologist service for events'
  },
  'mychef-villa-packages-staff-table-landscape.webp': {
    service: 'villa-packages',
    scene: 'staff-setting-table',
    orientation: 'landscape',
    subject: 'Service team setting a long dinner table',
    action: 'Two to three staff arranging table settings on a long table',
    environment: 'Villa event space in late afternoon',
    people: '2–3 staff, faces partly visible',
    wardrobe: 'White shirts, black trousers, plain aprons',
    foodOrEquipment: 'Tableware, glassware, linens, floral runner',
    lighting: 'Late afternoon natural light',
    camera: 'Medium-wide, 35mm equivalent',
    composition: 'Staff along table, left margin open',
    color: 'Warm daylight, white shirts, green foliage',
    negativeSpace: 'Left third open',
    exclusions: ['No text', 'No logo-branded uniforms'],
    focalPoint: 'Staff setting the table',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '2–3 staff',
    staffRoles: 'Waiters / butlers',
    guestProfile: 'No guests visible',
    setting: 'Villa event space',
    timeOfDay: 'Late afternoon',
    cameraPerspective: 'Eye-level along table',
    lensAppearance: '35mm equivalent, f/4',
    foodOrEquipmentDetails: 'Plates, wine glasses, napkins, floral runner',
    brandConsistencyNotes: 'Supports professional staffing chapter',
    targetKeyword: 'Bali villa event packages',
    purpose: 'Show professional staffing setup'
  },
  'mychef-vip-transport-jimbaran-sunset-landscape.webp': {
    service: 'vip-transport',
    scene: 'jimbaran-sunset',
    orientation: 'landscape',
    subject: 'Guests arriving for sunset dinner overlooking Jimbaran Bay',
    action: 'Luxury vehicle parked at coastal viewpoint, two guests in soft focus near car',
    environment: 'Jimbaran Bay viewpoint or coastal road at sunset',
    people: '2 guests in soft focus',
    wardrobe: 'Smart-casual resort evening wear',
    foodOrEquipment: 'Luxury vehicle, coastal view',
    lighting: 'Sunset warm light',
    camera: 'Wide environmental, 35mm equivalent',
    composition: 'Vehicle and guests lower right, bay and sunset left',
    color: 'Warm sunset, dark vehicle, blue ocean',
    negativeSpace: 'Left third open',
    exclusions: ['No text', 'No specific venue names', 'No readable license plates'],
    focalPoint: 'Luxury vehicle with coastal sunset backdrop',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '2 guests in soft focus',
    staffRoles: 'None visible',
    guestProfile: 'Adult couple',
    setting: 'Jimbaran Bay coastal viewpoint',
    timeOfDay: 'Sunset',
    cameraPerspective: 'Eye-level from coastal road',
    lensAppearance: '35mm equivalent, f/4',
    foodOrEquipmentDetails: 'Luxury sedan or SUV, coastline, sunset sky',
    brandConsistencyNotes: 'Supports luxury car fleet section',
    targetKeyword: 'VIP transport Bali',
    purpose: 'Illustrate scenic luxury transfer'
  },
  'mychef-vip-transport-minibus-landscape.webp': {
    service: 'vip-transport',
    scene: 'minibus-driver',
    orientation: 'landscape',
    subject: 'Uniformed driver beside white air-conditioned minibus',
    action: 'Driver standing near open sliding door at villa entrance',
    environment: 'Bali villa entrance with tropical planting',
    people: '1 driver, face in profile',
    wardrobe: 'Plain white shirt, black trousers',
    foodOrEquipment: 'White minibus with open sliding door, clean interior visible',
    lighting: 'Daylight, even and natural',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Driver and minibus right of centre, villa entrance left',
    color: 'White vehicle, green foliage, warm light',
    negativeSpace: 'Left third open',
    exclusions: ['No text', 'No logo branding', 'No crowds'],
    focalPoint: 'Driver and open minibus door',
    emptySpace: 'Left ~30% of frame',
    peopleCount: '1 driver',
    staffRoles: 'Driver',
    guestProfile: 'No guests visible',
    setting: 'Bali villa entrance',
    timeOfDay: 'Daylight',
    cameraPerspective: 'Eye-level from driveway',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'White air-conditioned minibus, open sliding door, clean seats',
    brandConsistencyNotes: 'Supports group transport section',
    targetKeyword: 'VIP transport Bali',
    purpose: 'Show Bali minibus hire service'
  },
  'mychef-vip-transport-yacht-deck-landscape.webp': {
    service: 'vip-transport',
    scene: 'yacht-deck',
    orientation: 'landscape',
    subject: 'Champagne and canapés on charter yacht deck',
    action: 'No people; deck table set with champagne and canapés',
    environment: 'Yacht deck off Bali coast with Nusa Penida cliffs in background',
    people: 'No people',
    wardrobe: 'No people',
    foodOrEquipment: 'Champagne bottle, flutes, canapés, yacht railing',
    lighting: 'Late afternoon warm sunlight',
    camera: 'Medium shot, 50mm equivalent',
    composition: 'Table foreground, cliffs and sea background',
    color: 'Warm deck tones, blue sea, green cliffs',
    negativeSpace: 'Top open',
    exclusions: ['No text', 'No brand labels', 'No crowded party'],
    focalPoint: 'Champagne and canapés on deck table',
    emptySpace: 'Upper ~20% of frame',
    peopleCount: '0',
    staffRoles: 'None visible',
    guestProfile: 'None visible',
    setting: 'Yacht deck off Nusa Penida coast',
    timeOfDay: 'Late afternoon',
    cameraPerspective: 'Eye-level from deck',
    lensAppearance: '50mm equivalent, f/4',
    foodOrEquipmentDetails: 'Champagne bottle with label turned away, flutes, canapé board, yacht railing',
    brandConsistencyNotes: 'Supports yacht charter section',
    targetKeyword: 'VIP transport Bali',
    purpose: 'Show Bali yacht charter experience'
  }
};

function buildDetailedPrompt(spec: ImageSpec): string {
  return [
    `SUBJECT: ${spec.subject}.`,
    `ACTION: ${spec.action}.`,
    `ENVIRONMENT: ${spec.environment}.`,
    `PEOPLE: ${spec.people}.`,
    `WARDROBE: ${spec.wardrobe}.`,
    `FOOD & EQUIPMENT: ${spec.foodOrEquipment}.`,
    `LIGHTING: ${spec.lighting}.`,
    `CAMERA: ${spec.camera}.`,
    `COMPOSITION: ${spec.composition}.`,
    `COLOR PALETTE: ${spec.color}.`,
    `NEGATIVE SPACE: ${spec.negativeSpace}.`,
    `EXCLUSIONS: ${spec.exclusions.join('; ')}.`,
    `OVERALL MOOD: A believable, editorial-style photograph for a premium Bali hospitality brand — warm, precise, discreet, and naturally luxurious.`.trim()
  ].join(' ');
}

function buildNegativeConstraints(spec: ImageSpec, plan: PagePlan | undefined, planSection: any): string[] {
  const raw = [
    'No text, headings, logos, watermarks, or prices inside the photograph',
    'No invented awards, certifications, or partnerships',
    'No specific vehicle brand badges or alcohol labels visible',
    'No non-Bali architecture or generic stock backgrounds',
    'No visible AI artefacts, extra fingers, malformed glassware, or distorted architecture',
    ...spec.exclusions,
    ...(plan?.globalExclusions || []),
    ...(planSection?.data?.detailsMustNotAppear || [])
  ];

  const normalize = (s: string): string => {
    let t = s.trim();
    if (!t) return '';
    t = t.replace(/\.$/, '');
    t = t.charAt(0).toUpperCase() + t.slice(1);
    const lower = t.toLowerCase();
    if (!lower.startsWith('no ') && !lower.startsWith('avoid ') && !lower.startsWith('do not')) {
      t = `No ${t.charAt(0).toLowerCase() + t.slice(1)}`;
    }
    return t;
  };

  let normalized = raw.map(normalize).filter(Boolean);
  // Remove items that are already covered by a broader constraint
  normalized = normalized.filter((item, idx, arr) => {
    const lower = item.toLowerCase();
    return !arr.some((other, otherIdx) => otherIdx !== idx && other.toLowerCase().includes(lower));
  });
  return normalized;
}

function buildAltText(spec: ImageSpec, filename: string): string {
  // Keep under ~125 chars, descriptive, no keyword stuffing, no "image of"
  const candidates: Record<string, string> = {
    'mychef-experiences-hub-hero-landscape.webp': 'Villa terrace at sunset with elegant table setting and staff service in Bali',
    'mychef-cocktail-party-bartender-landscape.webp': 'Bartender pouring a cocktail at a Bali villa poolside bar at sunset',
    'mychef-sushi-masterclass-chef-landscape.webp': 'Chef shaping nigiri at a clean Bali villa kitchen counter',
    'mychef-cooking-class-chef-landscape.webp': 'Chef teaching Balinese spice paste preparation in a villa kitchen',
    'mychef-kids-party-children-landscape.webp': 'Children decorating pizzas at a shaded Bali villa poolside party',
    'mychef-oyster-champagne-station-landscape.webp': 'Server pouring champagne beside oysters on ice at a Bali villa terrace',
    'mychef-proposal-dinner-table-landscape.webp': 'Candlelit table for two on a Bali villa terrace at dusk',
    'mychef-cocktail-party-bar-landscape.webp': 'Craft cocktails and canapés on a Bali villa poolside bar counter',
    'mychef-cocktail-party-bartenders-portrait.webp': 'Two bartenders setting up a mobile bar at a Bali villa terrace',
    'mychef-cocktail-party-mobile-bar-landscape.webp': 'Elegant mobile bar setup at a Bali villa in evening ambient light',
    'mychef-sushi-masterclass-action-landscape.webp': 'Chef demonstrating sushi slicing to guests at a Bali villa counter',
    'mychef-sushi-ingredients-portrait.webp': 'Fresh sushi ingredients arranged on a clean Bali villa kitchen counter',
    'mychef-sushi-dining-table-landscape.webp': 'Guests enjoying sushi at a Bali villa dining table with garden view',
    'mychef-cooking-class-ingredients-landscape.webp': 'Balinese spice paste ingredients on a villa kitchen counter',
    'mychef-cooking-ingredients-portrait.webp': 'Chef selecting fresh produce at a traditional Balinese morning market',
    'mychef-cooking-dining-table-landscape.webp': 'Group sharing Balinese dishes at a villa dining table',
    'mychef-kids-party-cooking-landscape.webp': "Children's hands topping mini pizzas at a Bali villa birthday table",
    'mychef-kids-party-table-landscape.webp': 'Family-friendly birthday table with fresh food at a Bali villa garden',
    'mychef-oyster-seafood-station-landscape.webp': 'Seafood and oyster station prepared on a Bali villa terrace',
    'mychef-oyster-champagne-pour-portrait.webp': 'Champagne being poured into a flute at an elegant Bali villa event',
    'mychef-proposal-dinner-plate-portrait.webp': 'Elegant plated dish on a candlelit Bali villa dining table',
    'mychef-complete-villa-chef-hero-landscape.webp': 'Private chef working in a modern Bali villa kitchen with pool view',
    'mychef-villa-interior-pool-landscape.webp': 'Open-plan living and pool area of a luxury Bali villa',
    'mychef-vip-transport-chauffeur-landscape.webp': 'Uniformed chauffeur opening the door of a black luxury vehicle in Bali',
    'mychef-complete-villa-wedding-reception-landscape.webp': 'Long banquet table set for a wedding reception on a Bali villa lawn',
    'mychef-villa-staff-service-landscape.webp': 'Uniformed waiters providing polished service at a Bali villa dinner',
    'mychef-villa-pool-sunset-landscape.webp': 'Infinity pool at a Bali villa overlooking the coast at sunset',
    'mychef-villa-tablescape-landscape.webp': 'Immaculately reset dining table on a Bali villa terrace after an event',
    'mychef-villa-packages-banquet-hero-landscape.webp': 'Long banquet table with floral runners on a Bali villa lawn at dusk',
    'mychef-villa-packages-dinner-table-landscape.webp': 'Candlelit private chef dinner table inside a Bali villa',
    'mychef-villa-packages-bartender-landscape.webp': 'Mixologist preparing craft cocktails at a Bali villa bar',
    'mychef-villa-packages-staff-table-landscape.webp': 'Service team setting a long dinner table at a Bali villa event',
    'mychef-vip-transport-jimbaran-sunset-landscape.webp': 'Luxury vehicle at a Jimbaran Bay sunset viewpoint in Bali',
    'mychef-vip-transport-minibus-landscape.webp': 'Uniformed driver beside a white air-conditioned minibus at a Bali villa',
    'mychef-vip-transport-yacht-deck-landscape.webp': 'Champagne and canapés on a charter yacht deck off the Bali coast'
  };
  return candidates[filename] || spec.subject;
}

const promptLibrary: any[] = [];
const seoMetadata: any[] = [];
let totalCost = 0;

for (const [filename, items] of Object.entries(groups)) {
  const spec = IMAGE_SPECS[filename];
  if (!spec) {
    console.warn('Missing spec for', filename);
    continue;
  }

  const override = OVERRIDES[filename];
  const primary = items[0];
  const plan = getPagePlan(primary.pagePath);
  const planSection = plan ? findPlanSection(plan, primary.section) : undefined;
  const priority = override?.priority || priorityFor(primary.section);
  const dims = override?.dimensions || planSection?.data?.recommendedGenerationDimensions || dimensionsFor(planSection?.data?.recommendedAspectRatio || '16:9', priority);
  const aspect = override?.aspectRatio || planSection?.data?.recommendedAspectRatio || aspectRatioFor(dims);
  const quality = qualityFor(priority);
  const cost = costFor(quality, dims);
  totalCost += cost;

  const finalFilename = proposedFilename(spec);

  const sections = items.map(i => i.section);
  const pagePaths = Array.from(new Set(items.map(i => i.pagePath)));
  const pageNames = pagePaths.map(p => {
    const pp = getPagePlan(p);
    return pp ? (pp as any).pageTitle || p : p;
  });

  const detailedPrompt = buildDetailedPrompt(spec);
  const negativeConstraints = buildNegativeConstraints(spec, plan, planSection);
  const cropping = planSection?.data?.recommendedCropBehaviour || 'object-cover, centre-weighted';

  const record = {
    image_id: items.map(i => i.id).join('+'),
    page_name: pageNames.length === 1 ? pageNames[0] : pageNames,
    page_url: pagePaths.length === 1 ? `https://mychef.id${pagePaths[0]}` : pagePaths.map(p => `https://mychef.id${p}`),
    section: sections.length === 1 ? sections[0] : sections,
    purpose: spec.purpose,
    priority,
    current_image: items.map(i => i.currentImageUrl),
    proposed_filename: finalFilename,
    proposed_output_directory: 'public/generated/',
    target_keyword: spec.targetKeyword,
    model: 'gpt-image-2',
    quality,
    size: dims,
    aspect_ratio: aspect,
    desktop_aspect_ratio: aspect,
    mobile_aspect_ratio: aspect === '16:9' ? '16:9' : aspect,
    detailed_generation_prompt: detailedPrompt,
    negative_constraints: negativeConstraints,
    cropping_instructions: cropping,
    expected_focal_point: spec.focalPoint,
    empty_space_requirement: spec.emptySpace,
    people_count: spec.peopleCount,
    staff_roles: spec.staffRoles,
    guest_profile: spec.guestProfile,
    setting: spec.setting,
    time_of_day: spec.timeOfDay,
    lighting: spec.lighting,
    camera_perspective: spec.cameraPerspective,
    lens_appearance: spec.lensAppearance,
    food_or_equipment_details: spec.foodOrEquipmentDetails,
    brand_consistency_notes: spec.brandConsistencyNotes,
    estimated_cost_usd: cost,
    status: 'planned'
  };

  promptLibrary.push(record);

  // SEO metadata: one record per unique image, but note all target pages/sections
  seoMetadata.push({
    image_id: record.image_id,
    filename: finalFilename,
    alt_text: buildAltText(spec, filename),
    title: null,
    caption: null,
    target_page: pagePaths.length === 1 ? pagePaths[0] : pagePaths,
    target_section: sections.length === 1 ? sections[0] : sections,
    target_keyword: spec.targetKeyword
  });
}

// Brand consistency sheet markdown
const brandSheet = `# myCHEF.id Visual Brand Consistency Sheet

Generated for the image overhaul prompt library. Use this sheet to evaluate every generated image before it is approved for the site.

## 1. Wardrobe

${BRAND.wardrobe.map(w => `- ${w}`).join('\n')}

## 2. Grooming

${BRAND.grooming}

## 3. Posture

${BRAND.posture}

## 4. Lighting Families

${BRAND.lightingFamilies.map(l => `- ${l}`).join('\n')}

## 5. Color Temperature

${BRAND.colorTemperature}

## 6. Villa Architectural Style

${BRAND.villaStyle}

## 7. Table Styling

${BRAND.tableStyling}

## 8. Plating Approach

${BRAND.plating}

## 9. Bar Setup Style

${BRAND.barSetup}

## 10. Glassware Style

${BRAND.glassware}

## 11. Photography Distance

${BRAND.photographyDistance.map(d => `- ${d}`).join('\n')}

## 12. Preferred Focal-Length Look

${BRAND.focalLengthLook}

## 13. Guest Demographic Variation

${BRAND.guestDemographics.map(g => `- ${g}`).join('\n')}

## 14. Editing Treatment

${BRAND.editing}

## 15. Hard Exclusions (apply to every image)

- No text, headings, logos, watermarks, prices, awards, or partnership claims inside generated photographs.
- No invented uniforms, vehicles, or brand names.
- No specific Michelin-starred restaurant names or unverified awards.
- No non-Bali architecture or settings.
- No visible AI artefacts (extra fingers, distorted glassware, melting candles, warped architecture).

## 16. Cross-Image Variation Checklist

To prevent repetitive output across the 35 planned images, ensure each generation varies in:

- **Villa type:** pool villa, jungle pavilion, clifftop terrace, garden bale, open-plan kitchen villa.
- **Time of day:** early morning, morning, late afternoon, golden hour, sunset, blue hour, evening candlelight.
- **Guest group:** none visible, couple, family with children, small friends group, corporate group.
- **Camera distance:** wide establishing, medium environmental, close detail.
- **Activity:** cooking instruction, bartending, serving, dining, transport arrival, event setup.
- **Cuisine / equipment:** Balinese spice pastes, sushi, Italian plating, cocktails, oysters, BBQ, breakfast pastries.
- **Location within Bali:** Seminyak/Canggu villa, Ubud jungle, Uluwatu cliff, Jimbaran Bay, Nusa Penida coast.
`;

fs.writeFileSync(path.join(OUT_DIR, 'output-05-prompt-library.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  model: 'gpt-image-2',
  totalRecords: promptLibrary.length,
  totalEstimatedCostUsd: Number(totalCost.toFixed(4)),
  currency: 'USD',
  images: promptLibrary
}, null, 2));

fs.writeFileSync(path.join(OUT_DIR, 'output-06-seo-metadata.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  totalRecords: seoMetadata.length,
  images: seoMetadata
}, null, 2));

fs.writeFileSync(path.join(OUT_DIR, 'output-brand-consistency-sheet.md'), brandSheet);

console.log(`Wrote ${promptLibrary.length} prompt records`);
console.log(`Total estimated cost: $${totalCost.toFixed(4)} USD`);
console.log(`Brand consistency sheet written`);
