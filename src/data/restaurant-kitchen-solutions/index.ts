/**
 * Restaurant & Commercial Kitchen Solutions (B2B) — content hub data.
 * Distinct from private chef / catering booking pages.
 */

export const RKS_HUB_PATH = '/restaurant-kitchen-solutions'
export const RKS_WA = '6289674072020'

export function rksWaLink(message: string): string {
  return `https://wa.me/${RKS_WA}?text=${encodeURIComponent(message)}`
}

export interface RksFaq {
  question: string
  answer: string
}

export interface RksSection {
  id: string
  title: string
  body: string
  bullets?: string[]
}

export interface RksServicePage {
  slug: string
  path: string
  metaKey: string
  title: string
  description: string
  h1: string
  primaryKeyword: string
  heroEyebrow: string
  heroLead: string
  primaryCta: string
  heroImage: string
  heroAlt: string
  cardImage: string
  cardAlt: string
  cardTitle: string
  cardSummary: string
  sections: RksSection[]
  process: { step: string; title: string; body: string }[]
  deliverables?: string[]
  faqs: RksFaq[]
  relatedGuideSlugs: string[]
  finalCtaTitle: string
  finalCtaBody: string
}

export interface RksGuidePage {
  slug: string
  path: string
  metaKey: string
  title: string
  description: string
  h1: string
  primaryKeyword: string
  parentServiceSlug: string
  heroImage: string
  heroAlt: string
  intro: string
  sections: RksSection[]
  faqs: RksFaq[]
}

export const RKS_HUB = {
  path: RKS_HUB_PATH,
  metaKey: 'rks-hub' as const,
  title: 'Restaurant and Kitchen Solutions Indonesia | MYCHEF.ID',
  description:
    'Professional restaurant consulting, kitchen audits, commercial kitchen design, menu development, training, equipment planning and operational support across Indonesia.',
  h1: 'Complete Restaurant and Commercial Kitchen Solutions',
  primaryKeyword: 'restaurant kitchen solutions Indonesia',
  heroImage: '/generated/mychef-restaurant-kitchen-solutions-hub-hero.webp',
  heroAlt:
    'Professional commercial kitchen brigade working service stations in an Indonesian restaurant',
  heroLead:
    'myCHEF.id supports restaurants, hotels, cafés, bars, villas, and hospitality groups that need clearer operations — from diagnosis and cost control through kitchen planning, menu systems, and team training. This is a dedicated B2B solutions practice, separate from private chef and villa catering bookings.',
  problems: [
    {
      title: 'Food cost rising without a clear cause',
      body: 'Theoretical and actual food cost diverge, portions drift, and waste is not tracked.',
      serviceSlug: 'kitchen-consulting-audit',
    },
    {
      title: 'Inconsistent recipes and plating',
      body: 'Quality depends on who is on shift. Guests notice. Reviews follow.',
      serviceSlug: 'menu-development-training',
    },
    {
      title: 'Slow or chaotic service',
      body: 'Bottlenecks at prep, pass, or dish mean tickets pile up when the room is full.',
      serviceSlug: 'commercial-kitchen-design-build',
    },
    {
      title: 'Poor kitchen layout or equipment bottlenecks',
      body: 'Stations fight each other. Staff cross paths. Equipment capacity does not match the menu.',
      serviceSlug: 'commercial-kitchen-design-build',
    },
    {
      title: 'Missing SOPs and training gaps',
      body: 'Opening, closing, receiving, and hygiene live in people’s heads — until those people leave.',
      serviceSlug: 'kitchen-consulting-audit',
    },
    {
      title: 'Menu complexity that the kitchen cannot support',
      body: 'Too many SKUs, weak contribution, or concepts that outpace equipment and skills.',
      serviceSlug: 'menu-development-training',
    },
    {
      title: 'Supplier quality or pricing friction',
      body: 'Delivery reliability, product consistency, and purchase controls need a structured review.',
      serviceSlug: 'kitchen-consulting-audit',
    },
    {
      title: 'New opening or renovation support',
      body: 'You need layout, equipment planning, menu build, and team readiness on one timeline.',
      serviceSlug: 'commercial-kitchen-design-build',
    },
  ],
  process: [
    { step: '01', title: 'Discovery', body: 'Initial consultation on concept, pressure points, and goals.' },
    { step: '02', title: 'Assessment', body: 'Review of operations, documents, and on-site reality where agreed.' },
    { step: '03', title: 'Findings', body: 'Prioritised issues ranked by urgency and commercial impact.' },
    { step: '04', title: 'Solution design', body: 'A practical roadmap scoped to what you want implemented.' },
    { step: '05', title: 'Implementation', body: 'Optional support for process, design, menu, or training workstreams.' },
    { step: '06', title: 'Training & handover', body: 'Standards, recipe systems, and team capability where included.' },
    { step: '07', title: 'Follow-up', body: 'Optional check-ins after launch or after process changes settle.' },
  ],
  capabilities: [
    {
      title: 'Equipment planning and supply coordination',
      body: 'Capacity, workflow fit, and supplier coordination — without locking you into unstated brands.',
      serviceSlug: 'commercial-kitchen-design-build',
    },
    {
      title: 'Operational supplies and tableware',
      body: 'Plateware and serviceware selection aligned to menu presentation and wash capacity.',
      serviceSlug: 'menu-development-training',
    },
    {
      title: 'Uniform solutions',
      body: 'Practical kitchen and FOH uniform guidance as part of standards and brand presentation.',
      serviceSlug: 'menu-development-training',
    },
    {
      title: 'Specialty ingredient sourcing',
      body: 'Sourcing pathways discussed against menu design, cost targets, and supply reliability.',
      serviceSlug: 'menu-development-training',
    },
    {
      title: 'Recruitment assistance',
      body: 'Role definitions, skill profiles, and hiring support when the team structure needs change.',
      serviceSlug: 'kitchen-consulting-audit',
    },
    {
      title: 'Project and opening support',
      body: 'Coordinated opening or restructure support across kitchen, menu, and team readiness.',
      serviceSlug: 'commercial-kitchen-design-build',
    },
  ],
  audiences: [
    'Independent restaurants',
    'Restaurant groups',
    'Hotels and resorts',
    'Cafés',
    'Bars',
    'Bakeries and pastry kitchens',
    'Villas and hospitality estates',
    'Catering kitchens',
    'Central and production kitchens',
    'New hospitality developments',
    'Existing businesses restructuring or renovating',
  ],
  whyUs: [
    {
      title: 'Practical hospitality and culinary experience',
      body: 'Recommendations are grounded in how kitchens actually run during peak service — not theory alone.',
    },
    {
      title: 'End-to-end thinking',
      body: 'Consulting, design, menu, staffing, and training are connected so fixes do not create new bottlenecks.',
    },
    {
      title: 'Tailored to your concept',
      body: 'Every engagement is shaped by your menu, volume, site constraints, and operating model.',
    },
    {
      title: 'Commercial performance focus',
      body: 'We prioritise functionality, consistency, quality, and cost control you can manage day to day.',
    },
    {
      title: 'Clear priorities',
      body: 'Findings are ordered by impact so you know what to fix first — and what can wait.',
    },
    {
      title: 'Implementation when agreed',
      body: 'Diagnosis can stand alone, or continue into design, menu systems, training, and follow-up support.',
    },
  ],
  faqs: [
    {
      question: 'What is included in a restaurant kitchen audit?',
      answer:
        'A structured operational review can cover cost control, workflow, recipes, inventory, waste, equipment use, staff practices, documentation, and supplier performance. Scope is agreed in writing before work begins. This is not a statutory financial, tax, or forensic audit.',
    },
    {
      question: 'Can you help an existing restaurant reduce food cost?',
      answer:
        'Yes. We analyse the gap between theoretical and actual food cost, portion control, yield, waste, purchasing, and menu contribution — then prioritise practical controls your team can maintain.',
    },
    {
      question: 'Do you work with restaurants that have not opened yet?',
      answer:
        'Yes. Pre-opening support can include kitchen planning, equipment lists, menu development, recipe systems, and training readiness before the first guest arrives.',
    },
    {
      question: 'Can you redesign an existing kitchen?',
      answer:
        'Yes. Existing kitchens can be improved through workflow mapping, equipment repositioning, and phased renovation — often after an operational assessment so spend follows real bottlenecks.',
    },
    {
      question: 'Do you supply kitchen equipment?',
      answer:
        'We plan equipment against menu and volume, and can coordinate supply where agreed. Brand lists are project-specific and confirmed with you — we do not hard-sell unstated brands on the website.',
    },
    {
      question: 'Can you develop and cost a complete menu?',
      answer:
        'Yes. Menu direction, recipe standardisation, costing, plateware, tasting trials, section allocation, and kitchen training can be delivered as one programme or as modules.',
    },
    {
      question: 'Can you train an existing kitchen team?',
      answer:
        'Yes. Training can cover section standards, recipes, COGS awareness, service handover, and opening or closing routines — tailored to the people already on your roster.',
    },
    {
      question: 'Do you work outside Bali?',
      answer:
        'Yes. Engagements are scoped for Indonesia. On-site work depends on location, schedule, and project needs; remote document review can support parts of the process where appropriate.',
    },
    {
      question: 'How is the consulting fee calculated?',
      answer:
        'Fees are based on scope, site conditions, depth of analysis, deliverables, and whether implementation, design, or training is included. You receive a written proposal before commitment.',
    },
    {
      question: 'What happens after the initial assessment?',
      answer:
        'You receive prioritised findings and recommended next steps. Implementation, redesign, menu work, or training are optional follow-on scopes — you decide how far to go.',
    },
    {
      question: 'How is restaurant kitchen consulting different from private chef booking?',
      answer:
        'This practice is B2B operations support for restaurants, hotels and commercial kitchens. Villa private chef and catering bookings are a separate consumer service on myCHEF.id.',
    },
    {
      question: 'Do you work with cafés and bars as well as full restaurants?',
      answer:
        'Yes — cafés, bars, bakeries, hotel outlets, central kitchens and multi-outlet groups are all in scope when the operational issues match our services.',
    },
    {
      question: 'What languages can engagements run in?',
      answer:
        'English is standard for international owners and managers. Bahasa Indonesia support is available for on-site team training depending on the facilitator assigned.',
    },
    {
      question: 'How quickly can a project start?',
      answer:
        'Simple remote reviews can often begin within days of signed scope. Multi-day on-site audits and design projects are scheduled against venue access and team availability.',
    },
    {
      question: 'Will you replace our head chef or current managers?',
      answer:
        'No. We diagnose, design systems and train. Hiring decisions stay with ownership — recruitment assistance is optional when you ask for it.',
    },
    {
      question: 'Can you support multi-outlet restaurant groups?',
      answer:
        'Yes. Group work can standardise recipes, costing, audits and training across outlets while respecting each site’s constraints.',
    },
    {
      question: 'Do you offer ongoing kitchen management retainers?',
      answer:
        'Follow-up and periodic reviews can be scoped after the first engagement. There is no mandatory long retainer — start with a clear written proposal.',
    },
    {
      question: 'How do you handle confidential commercial data?',
      answer:
        'Sales, cost and supplier data are used only for the engagement and shared with stakeholders you designate. NDAs can be signed when required.',
    },
  ] as RksFaq[],
}

export const RKS_SERVICES: RksServicePage[] = [
  {
    slug: 'kitchen-consulting-audit',
    path: `${RKS_HUB_PATH}/kitchen-consulting-audit`,
    metaKey: 'rks-kitchen-consulting-audit',
    title: 'Restaurant Consulting and Kitchen Audit Services | MYCHEF.ID',
    description:
      'Restaurant kitchen audit and operational consulting in Indonesia: cost control, workflow, staff assessment, supplier review, and improvement roadmaps. Request an assessment.',
    h1: 'Restaurant Consulting and Kitchen Audit Services',
    primaryKeyword: 'restaurant kitchen audit Indonesia',
    heroEyebrow: 'Consulting & Audit',
    heroLead:
      'myCHEF.id reviews how a hospitality business performs across money, people, processes, equipment, workflow, suppliers, and standards — then turns findings into a clear priority list you can act on.',
    primaryCta: 'Request a Kitchen and Operational Assessment',
    heroImage: '/generated/mychef-restaurant-kitchen-audit-hero.webp',
    heroAlt: 'Hospitality consultant reviewing kitchen operations with a restaurant manager',
    cardImage: '/generated/mychef-rks-card-audit.webp',
    cardAlt: 'Kitchen cost-control documents and inventory tools in a commercial kitchen',
    cardTitle: 'Consulting and Kitchen Audit',
    cardSummary:
      'Structured review of finance controls, operations, staff practices, workflow, suppliers, documentation, and kitchen capability — with a prioritised roadmap.',
    sections: [
      {
        id: 'why-audit',
        title: 'Why a complete operational audit matters',
        body: 'A professional kitchen audit is not only a hygiene walkthrough. It should explain where money, time, and consistency are lost — and what to fix first. We look across financial performance signals, food cost, labour efficiency, inventory, waste, recipes, workflow, equipment, staff practices, leadership, documentation, and supplier performance.',
      },
      {
        id: 'financial',
        title: 'Operational financial and cost-control review',
        body: 'This is an operational cost-control analysis for restaurant management — not a statutory financial audit, tax audit, forensic accounting engagement, or independent assurance opinion. Depending on scope and the documents you share, we may review theoretical versus actual food cost, COGS patterns, prime cost pressure, menu contribution, portion control, yield, waste, inventory levels, stock movement, purchasing controls, and labour efficiency.',
        bullets: [
          'Theoretical vs actual food cost',
          'COGS and portion control',
          'Yield and waste patterns',
          'Inventory and purchasing controls',
          'Labour efficiency signals',
        ],
      },
      {
        id: 'operations',
        title: 'Operational review',
        body: 'We observe how product moves through the kitchen and into service: receiving, storage, preparation, cooking, plating, service handover, dishwashing, waste flow, opening and closing, cleaning systems, temperature control, maintenance response, and peak-service performance.',
      },
      {
        id: 'staff',
        title: 'Staff and organisation review',
        body: 'People problems often look like food-cost or speed problems. We assess skill levels, section responsibilities, training gaps, communication, leadership, scheduling, overtime patterns, key-person dependency, onboarding, performance standards, and team structure — without turning the visit into a blame exercise.',
      },
      {
        id: 'suppliers',
        title: 'Supplier and partner review',
        body: 'Where relevant, we review pricing consistency, product quality, delivery accuracy and reliability, agreement clarity, alternative options, equipment maintenance response, and external partner performance. We describe observed patterns; we do not accuse suppliers of misconduct without evidence.',
      },
      {
        id: 'cost-control',
        title: 'Restaurant cost-control systems',
        body: 'Sustainable cost control needs tools the team will actually use: standard recipe cards, exact ingredient quantities, current ingredient costs, yield calculations, portion controls, waste logs, inventory controls, variance analysis, menu engineering, staff-meal controls, and purchasing or receiving checks.',
      },
      {
        id: 'roi',
        title: 'How to think about ROI (illustrative only)',
        body: 'Educational formulas help you estimate opportunity — they are not guarantees. Monthly food-cost opportunity ≈ monthly food sales × (current food-cost % − achievable food-cost %). Estimated payback ≈ project investment ÷ estimated monthly savings. First-year net benefit ≈ estimated annual savings − project investment. All projections depend on information you supply, implementation quality, market conditions, pricing, staff behaviour, and management follow-through.',
      },
    ],
    process: [
      { step: '1', title: 'Management discussion', body: 'Clarify goals, pain points, and constraints.' },
      { step: '2', title: 'Document request', body: 'Menus, recipes, sales summaries, inventory records where available.' },
      { step: '3', title: 'On-site observation', body: 'See real service flow, not only the theory of the menu.' },
      { step: '4', title: 'Kitchen & service review', body: 'Stations, handover, dish, waste, and peak pressure points.' },
      { step: '5', title: 'Staff conversations', body: 'Where appropriate, understand how the team actually works.' },
      { step: '6', title: 'Analysis', body: 'Connect operational and cost-control findings.' },
      { step: '7', title: 'Gap identification', body: 'What is missing, weak, or inconsistent.' },
      { step: '8', title: 'Prioritisation', body: 'Rank by urgency and commercial impact.' },
      { step: '9', title: 'Findings presentation', body: 'Clear summary leadership can act on.' },
      { step: '10', title: 'Optional implementation plan', body: 'Scoped next steps if you want execution support.' },
    ],
    deliverables: [
      'Executive findings summary',
      'Risk and priority matrix',
      'Operational observations',
      'Cost-control findings',
      'Staff and training observations',
      'Workflow recommendations',
      'Equipment observations',
      'Supplier observations',
      'Immediate actions',
      '30-day actions',
      'Medium-term recommendations',
      'Suggested implementation scope',
    ],
    faqs: [
      {
        question: 'How long does a kitchen audit take?',
        answer:
          'Timing depends on venue size, number of outlets, document readiness, and whether peak-service observation is included. A focused single-outlet review can often be scoped in days; multi-outlet groups take longer. Your proposal states the timeline.',
      },
      {
        question: 'What documents should we prepare?',
        answer:
          'Helpful materials include the current menu, recipes if available, recent sales summaries, purchase records, inventory counts, staffing roster, and any existing SOPs. We work with what you have — incomplete data is itself a finding.',
      },
      {
        question: 'Will you share findings with our full team?',
        answer:
          'Findings are presented to the stakeholders you designate. Staff interviews stay professional and constructive. Confidential commercial details are handled as agreed in the engagement terms.',
      },
      {
        question: 'Do you implement the recommendations?',
        answer:
          'Implementation is optional. Many clients start with assessment only; others continue into process redesign, menu systems, kitchen planning, or training under a separate scope.',
      },
      {
        question: 'Is this the same as a hygiene inspection?',
        answer:
          'No. Food-safety practices may be observed as part of operations, but the primary goal is commercial and operational performance: cost, consistency, workflow, and team capability.',
      },
      {
        question: 'What KPI improvements should we expect after an audit?',
        answer:
          'Typical focus areas are food-cost gap reduction, waste visibility, ticket times and consistency. Exact targets depend on baseline data and how fully recommendations are implemented.',
      },
      {
        question: 'Can you observe peak dinner service?',
        answer:
          'Yes when included in scope. Peak observation often reveals bottlenecks that paperwork alone misses.',
      },
      {
        question: 'Do you benchmark us against other Bali restaurants?',
        answer:
          'We use industry ranges and your own theoretical vs actual numbers. We do not publish other clients’ confidential figures.',
      },
      {
        question: 'What deliverables do we receive?',
        answer:
          'A written findings pack with prioritised issues, recommended actions and optional implementation roadmap — format confirmed in the proposal.',
      },
      {
        question: 'Can hotel F&B outlets use this service?',
        answer:
          'Yes. Hotel kitchens, banquet production and multi-outlet F&B teams are common audit clients.',
      },
      {
        question: 'Is remote document review possible without a site visit?',
        answer:
          'Partial remote review is possible for menus, recipes and cost sheets. On-site work is recommended when workflow or equipment is the issue.',
      },
      {
        question: 'How do we prepare the team so the audit is not disruptive?',
        answer:
          'We schedule interviews and observation windows with management. Floor teams keep serving; we stay out of the way during rush unless observation is the point.',
      }

    ],
    relatedGuideSlugs: [
      'commercial-kitchen-audit-checklist',
      'how-to-reduce-restaurant-food-cost',
      'restaurant-cogs-calculation',
    ],
    finalCtaTitle: 'Understand where money, time and consistency are being lost',
    finalCtaBody:
      'Start with a clear assessment of your restaurant or kitchen. We will tell you what we can review, what we need from you, and what a useful next step looks like.',
  },
  {
    slug: 'commercial-kitchen-design-build',
    path: `${RKS_HUB_PATH}/commercial-kitchen-design-build`,
    metaKey: 'rks-commercial-kitchen-design-build',
    title: 'Commercial Kitchen Design, Workflow and Build Solutions | MYCHEF.ID',
    description:
      'Commercial kitchen design and workflow planning in Indonesia: layout, equipment planning, renovation support, utility coordination and build collaboration for restaurants, hotels and production kitchens.',
    h1: 'Commercial Kitchen Design, Workflow and Build Solutions',
    primaryKeyword: 'commercial kitchen design Indonesia',
    heroEyebrow: 'Design & Build',
    heroLead:
      'Plan kitchens that work under real service pressure — layout, workflow, equipment capacity, and technical coordination for restaurants, hotels, bars, pastry, villa hospitality, and production kitchens.',
    primaryCta: 'Request a Project Consultation',
    heroImage: '/generated/mychef-commercial-kitchen-design-hero.webp',
    heroAlt: 'Modern commercial kitchen layout with stainless equipment lines and clear workflow zones',
    cardImage: '/generated/mychef-rks-card-design.webp',
    cardAlt: 'Commercial kitchen zones showing prep, cook, pass and dishwashing flow',
    cardTitle: 'Commercial Kitchen Design and Build',
    cardSummary:
      'Layout planning, workflow optimisation, equipment positioning, utility coordination, renovation support, and build collaboration for professional kitchens.',
    sections: [
      {
        id: 'scope',
        title: 'What kitchen design support covers',
        body: 'Projects may include kitchen layout planning, workflow optimisation, design and build coordination, technical drawings, plumbing electrical exhaust gas and fresh-air planning coordination, equipment planning, renovations, and layouts for restaurant, bar, buffet, pastry, hotel, villa, and production kitchens. Scope is always written per project.',
      },
      {
        id: 'drawings',
        title: 'Planning and visualisation',
        body: 'We use professional planning and visualisation tools appropriate to each project. This may include precise technical drawings, equipment layouts, utility coordination, and 3D visualisation where required. Where engineering approval is legally required, drawings may need coordination or validation by licensed specialists and project consultants — we do not claim to replace those roles unless explicitly contracted and qualified.',
      },
      {
        id: 'workflow',
        title: 'Workflow optimisation',
        body: 'Ideal product flow is simple: receiving → storage → preparation → cooking → plating or pass → service → dishwashing → waste. We design for linear flow, functional zoning, less unnecessary movement, separation of clean and dirty routes, correct station setup, peak-volume planning, equipment capacity, storage proximity, pass positioning, mise-en-place organisation, staff communication, safety, and maintainability.',
      },
      {
        id: 'audit-first',
        title: 'Kitchen assessment before redesign',
        body: 'Existing restaurants should usually begin with an operational and technical assessment before buying equipment or demolishing walls. Spend follows bottlenecks — not trends. See our kitchen consulting and audit service for that starting point.',
      },
      {
        id: 'equipment',
        title: 'Equipment planning and supply coordination',
        body: 'Equipment lists can cover cooking, refrigeration, freezers, preparation, dishwashing, exhaust, stainless fabrication, storage, utensils, tableware, custom fabrication, and packaging where relevant. Brands are project-specific and confirmed with you — we do not publish fixed brand catalogues as universal recommendations.',
      },
      {
        id: 'fees',
        title: 'Design and project fees',
        body: 'Design and project fees are based on scope, site conditions, technical requirements, and the level of implementation support required. Commercial terms are confirmed in your written proposal for the specific project.',
      },
      {
        id: 'why-layout',
        title: 'Why good layout matters',
        body: 'Strong layout reduces unnecessary movement, improves labour use, supports faster service, removes bottlenecks, improves consistency, supports food-safety separation, eases cleaning, and improves equipment utilisation. It also lowers the risk of expensive construction changes mid-build. We do not promise a fixed percentage cost reduction.',
      },
    ],
    process: [
      { step: '1', title: 'Concept and menu review', body: 'Understand what the kitchen must produce.' },
      { step: '2', title: 'Capacity definition', body: 'Peak volume, service style, and staffing model.' },
      { step: '3', title: 'Site measurement', body: 'Capture real constraints and services.' },
      { step: '4', title: 'Workflow mapping', body: 'Map product and staff movement under load.' },
      { step: '5', title: 'Preliminary layout', body: 'Zoning and station relationships.' },
      { step: '6', title: 'Equipment planning', body: 'Capacity, utilities, and clearances.' },
      { step: '7', title: 'Technical coordination', body: 'Work with architects, MEP, and contractors as needed.' },
      { step: '8', title: 'Visualisation', body: '3D or detailed layouts where included in scope.' },
      { step: '9', title: 'Client approval', body: 'Lock decisions before build spend accelerates.' },
      { step: '10', title: 'Build coordination', body: 'Installation and supplier coordination as agreed.' },
      { step: '11', title: 'Testing and handover', body: 'Commissioning support and operator readiness.' },
      { step: '12', title: 'Optional post-opening review', body: 'Tune layout and processes after real service begins.' },
    ],
    faqs: [
      {
        question: 'Can you redesign an operating restaurant?',
        answer:
          'Yes. Phased renovations and workflow improvements can often be planned around trading hours. Feasibility depends on site conditions and business continuity needs.',
      },
      {
        question: 'Do you create 3D kitchen layouts?',
        answer:
          '3D visualisation can be included where useful and agreed in scope. Not every project needs it — some need precise 2D equipment plans more than renderings.',
      },
      {
        question: 'Can you coordinate equipment supply?',
        answer:
          'Yes, when included in the engagement. We can plan capacity and coordinate suppliers; final brands and models are confirmed with you.',
      },
      {
        question: 'Do you help with exhaust, gas, electrical, and plumbing planning?',
        answer:
          'We coordinate kitchen utility needs and layouts. Licensed engineering and local code compliance sit with the appropriate project specialists where required by law or the main contractor.',
      },
      {
        question: 'Can you work with our architect or contractor?',
        answer:
          'Yes. Many projects work best as a collaboration: we bring kitchen operational logic; your architect and contractor own building fabric and statutory responsibilities as contracted.',
      },
      {
        question: 'How is the design fee calculated?',
        answer:
          'By scope, complexity, number of outlets, drawing depth, site visits, and implementation support. You receive a written proposal before work starts.',
      },
      {
        question: 'Do you only design new kitchens or also renovations?',
        answer:
          'Both. New builds, relocations and phased renovations of existing kitchens are in scope.',
      },
      {
        question: 'Will you force specific equipment brands?',
        answer:
          'No. Equipment is specified for capacity, workflow and budget. Brands are proposed and confirmed with you.',
      },
      {
        question: 'How do you size equipment for our menu?',
        answer:
          'From menu, covers, peak turns and prep model — not from a generic package list.',
      },
      {
        question: 'Do you supervise installation?',
        answer:
          'Supervision and commissioning support can be included when agreed. Basic planning engagements may stop at drawings and schedules.',
      },
      {
        question: 'Can villa estate or central production kitchens use this service?',
        answer:
          'Yes — commercial standards apply to estate production kitchens and commissaries as well as restaurants.',
      },
      {
        question: 'What is the typical design sequence?',
        answer:
          'Brief → workflow concept → equipment list → layout iterations → coordination with builders → optional install support.',
      }

    ],
    relatedGuideSlugs: [
      'how-to-design-commercial-kitchen-layout',
      'commercial-kitchen-workflow-optimization',
      'commercial-kitchen-audit-checklist',
    ],
    finalCtaTitle: 'Plan a kitchen that works during real service',
    finalCtaBody:
      'Share your concept, site status, and timeline. We will outline a practical design or renovation path without overselling software names or unstated guarantees.',
  },
  {
    slug: 'menu-development-training',
    path: `${RKS_HUB_PATH}/menu-development-training`,
    metaKey: 'rks-menu-development-training',
    title: 'Restaurant Menu Development and Staff Training | MYCHEF.ID',
    description:
      'Restaurant menu development and staff training in Indonesia: recipe standardisation, menu costing, COGS training, kitchen section training, tasting trials and opening support.',
    h1: 'Restaurant Menu Development and Staff Training',
    primaryKeyword: 'restaurant menu development Indonesia',
    heroEyebrow: 'Menu & Training',
    heroLead:
      'A menu must work creatively, financially, and operationally. myCHEF.id helps hospitality teams build costed, standard recipes and train the people who will run them every service.',
    primaryCta: 'Discuss Your Menu or Training Requirements',
    heroImage: '/generated/mychef-menu-development-training-hero.webp',
    heroAlt: 'Chef training a kitchen team on plating standards at the pass',
    cardImage: '/generated/mychef-rks-card-menu.webp',
    cardAlt: 'Chef refining plated restaurant dishes during a tasting trial',
    cardTitle: 'Menu Development and Training',
    cardSummary:
      'Menu strategy, costing, recipe standardisation, tasting, plateware, section training, cooking trials, and post-launch accompaniment.',
    sections: [
      {
        id: 'process-overview',
        title: 'Complete menu-development process',
        body: 'A typical programme moves through: menu direction; plateware selection; presentation and tasting; food photography coordination where needed; standard recipe development; ingredient selection; kitchen section allocation; individual chef training by section; and cooking trials before launch. Modules can be delivered together or separately.',
      },
      {
        id: 'strategy',
        title: 'Menu strategy',
        body: 'We align concept, target guest, price positioning, cuisine direction, kitchen capability, ingredient availability, preparation complexity, speed of service, menu size, dietary requirements, signature dishes, and overall menu balance — so the card matches what the kitchen can produce consistently.',
      },
      {
        id: 'recipes',
        title: 'Recipe standardisation and costing',
        body: 'Standard recipes can include ingredient quantities, method, yield, portion size, plate presentation, ingredient price, cost per portion, selling-price considerations, allergen notes, storage guidance where appropriate, and version control so the recipe does not drift after launch.',
      },
      {
        id: 'cogs',
        title: 'COGS and cost-control training',
        body: 'Teams learn why portions matter, how to read contribution, how waste and staff meals affect results, and how purchasing decisions show up in the plate. Training is practical — built for cooks and supervisors, not only for the finance folder.',
      },
      {
        id: 'training',
        title: 'Kitchen and service training',
        body: 'Section organisation, station readiness, pass discipline, service handover, and FOH alignment can be included so food quality survives real volume. Recruitment assistance can support gaps when the roster cannot deliver the menu as written.',
      },
      {
        id: 'post-launch',
        title: 'Post-launch accompaniment',
        body: 'After opening or menu refresh, optional follow-up helps lock standards, adjust recipes that underperform, and retrain where turnover creates drift. Scope is defined per engagement.',
      },
    ],
    process: [
      { step: '1', title: 'Menu direction', body: 'Concept, guest, price, and kitchen reality.' },
      { step: '2', title: 'Plateware & presentation', body: 'Serviceware that matches the dish and wash capacity.' },
      { step: '3', title: 'Tasting trials', body: 'Approve flavour, yield, and plating under timed conditions.' },
      { step: '4', title: 'Photography coordination', body: 'Optional content capture once dishes are locked.' },
      { step: '5', title: 'Recipe cards & costing', body: 'Standard methods with cost visibility.' },
      { step: '6', title: 'Section allocation', body: 'Who owns each dish under pressure.' },
      { step: '7', title: 'Team training', body: 'Section-by-section skill transfer.' },
      { step: '8', title: 'Cooking trial', body: 'Full-run rehearsal before public launch.' },
      { step: '9', title: 'Optional follow-up', body: 'Tune after real guest feedback and sales data.' },
    ],
    faqs: [
      {
        question: 'Can you rebuild only part of our menu?',
        answer:
          'Yes. Many venues refresh a section, lunch card, or signature set without rewriting everything. Scope is modular.',
      },
      {
        question: 'Do you train existing staff or only new openings?',
        answer:
          'Both. Existing teams often need standardisation and COGS discipline; new openings need build-from-zero readiness.',
      },
      {
        question: 'Do you handle food photography?',
        answer:
          'We can coordinate photography once dishes are approved. Photography production itself may involve third-party creatives depending on the project.',
      },
      {
        question: 'How do you avoid menu ideas the kitchen cannot run?',
        answer:
          'Capability, equipment, prep time, and skill depth are checked before items are locked. A beautiful dish that collapses at 80 covers is not a finished dish.',
      },
      {
        question: 'Can recruitment be part of the project?',
        answer:
          'Yes, where agreed. We can define role profiles and support hiring so the menu has the hands it needs.',
      },
      {
        question: 'Do you cost every dish before launch?',
        answer:
          'Yes when costing is in scope — target food-cost %, yield and plate contribution are part of a complete menu system.',
      },
      {
        question: 'Can you rebuild an existing menu without a full rebrand?',
        answer:
          'Yes. Many projects rationalise SKUs, fix recipes and retrain on the current concept rather than inventing a new brand.',
      },
      {
        question: 'How long does kitchen training usually take?',
        answer:
          'From focused section refreshers to multi-day launch training — duration follows menu complexity and team size.',
      },
      {
        question: 'Do you create photo-ready plating guides?',
        answer:
          'Plating standards and section cards can be included so every shift plates the same dish the same way.',
      },
      {
        question: 'Can training cover allergens and dietary tickets?',
        answer:
          'Yes — allergen handling, ticket communication and separate prep rules can be built into SOPs and drills.',
      },
      {
        question: 'Will you train only BOH or also FOH on the new menu?',
        answer:
          'FOH menu knowledge can be included so service sells and explains dishes accurately.',
      },
      {
        question: 'Do you support seasonal menu updates later?',
        answer:
          'Yes as follow-on scopes — seasonal swaps with costing and short retraining keep the system alive.',
      }

    ],
    relatedGuideSlugs: [
      'restaurant-menu-development-process',
      'restaurant-cogs-calculation',
      'how-to-reduce-restaurant-food-cost',
    ],
    finalCtaTitle: 'Build a menu your kitchen can run profitably',
    finalCtaBody:
      'Tell us whether you need a full menu programme, costing only, or team training. We will propose a scope that matches your stage — opening, refresh, or turnaround.',
  },
]

export const RKS_GUIDES: RksGuidePage[] = [
  {
    slug: 'commercial-kitchen-audit-checklist',
    path: '/guides/commercial-kitchen-audit-checklist',
    metaKey: 'rks-guide-audit-checklist',
    title: 'Commercial Kitchen Audit Checklist | MYCHEF.ID',
    description:
      'A practical commercial kitchen audit checklist for Indonesian restaurants: cost control, workflow, hygiene practices, staffing, inventory and peak-service observation points.',
    h1: 'Commercial Kitchen Audit Checklist',
    primaryKeyword: 'commercial kitchen audit checklist',
    parentServiceSlug: 'kitchen-consulting-audit',
    heroImage: '/generated/mychef-rks-guide-audit-checklist.webp',
    heroAlt: 'Kitchen manager reviewing service stations during an operational check',
    intro:
      'Use this checklist to prepare for a professional operational review — or to run a structured internal walkthrough. It is educational, not a certification scheme, and does not replace licensed inspections where those are required.',
    sections: [
      {
        id: 'prep',
        title: 'Before you walk the kitchen',
        body: 'Gather the current menu, any recipes, a rough sales mix if available, purchase summaries, the latest inventory count, staffing roster, and known complaint themes. Incomplete data is useful information: it shows which controls are missing.',
        bullets: ['Menu and specials list', 'Recipes or plating photos', 'Purchase and inventory snapshots', 'Roster and section map', 'Recent guest or owner complaints'],
      },
      {
        id: 'money',
        title: 'Cost-control checkpoints',
        body: 'Check whether theoretical food cost can be calculated, whether actual food cost is tracked, whether portions are controlled at the pass, whether waste is logged, and whether staff meals are recorded. Note variance between “what the recipe says” and “what cooks plate”.',
      },
      {
        id: 'flow',
        title: 'Workflow checkpoints',
        body: 'Follow one ticket from ticket print to guest handoff. Note crossings, waits, double handling, and dish backlog. Watch receiving and storage on a delivery day if you can.',
      },
      {
        id: 'people',
        title: 'People and standards checkpoints',
        body: 'Ask who owns each station at peak, what happens when a key person is off, and whether opening/closing checklists exist as documents — not only as habits.',
      },
      {
        id: 'output',
        title: 'What to do with findings',
        body: 'Rank issues by cash impact, guest impact, and ease of fix. Immediate actions should be few and enforceable. For a facilitated assessment with prioritised recommendations, see our restaurant consulting and kitchen audit service.',
      },
    ],
    faqs: [
      {
        question: 'Is this checklist enough for a full professional audit?',
        answer:
          'It is a strong preparation tool. A full engagement adds document analysis, structured observation, prioritisation, and a written findings pack tailored to your venue.',
      },
      {
        question: 'How often should we self-audit?',
        answer:
          'Many operators review cost and inventory weekly, and run a fuller operational walkthrough monthly or after major menu or staffing changes.',
      },
      {
        question: 'What should managers check weekly vs monthly?',
        answer:
          'Weekly: inventory accuracy, high-waste items, overtime drivers. Monthly: full walkthrough, recipe compliance sampling, supplier scorecards.',
      },
      {
        question: 'Can independent cafés use the same checklist as hotels?',
        answer:
          'Yes — scale the depth. Smaller venues still need cost, hygiene habits, receiving and opening/closing discipline.',
      },
      {
        question: 'Should we share checklist results with owners?',
        answer:
          'Yes. A short red/amber/green summary helps owners prioritise investment without drowning in kitchen detail.',
      },
      {
        question: 'How does this checklist relate to a paid myCHEF audit?',
        answer:
          'Self-checks prepare your team. A paid engagement adds independent observation, prioritisation and a written action pack.',
      },
      {
        question: 'What tools do we need to run the checklist?',
        answer:
          'Basic inventory sheets, a thermometer, access to purchase invoices and 30–60 minutes of calm observation time.',
      },
      {
        question: 'Can multi-outlet groups standardise one checklist?',
        answer:
          'Yes — keep a core shared list and add outlet-specific lines for equipment or concept differences.',
      },
      {
        question: 'How do we avoid “checklist theatre” where staff tick boxes blindly?',
        answer:
          'Rotate reviewers, verify with spot counts and link findings to real numbers like food cost and ticket times.',
      },
      {
        question: 'Is food safety certification covered here?',
        answer:
          'The checklist flags hygiene habits; formal certification and legal inspections remain the responsibility of the operator and authorities.',
      }

    ],
  },
  {
    slug: 'how-to-reduce-restaurant-food-cost',
    path: '/guides/how-to-reduce-restaurant-food-cost',
    metaKey: 'rks-guide-food-cost',
    title: 'How to Reduce Restaurant Food Cost | MYCHEF.ID',
    description:
      'Practical ways to reduce restaurant food cost in Indonesia: recipes, portions, waste, purchasing, inventory and menu engineering — without inventing unproven savings claims.',
    h1: 'How to Reduce Restaurant Food Cost',
    primaryKeyword: 'how to reduce restaurant food cost',
    parentServiceSlug: 'kitchen-consulting-audit',
    heroImage: '/generated/mychef-rks-guide-food-cost.webp',
    heroAlt: 'Commercial kitchen inventory storage used for food-cost control',
    intro:
      'Food cost improves when the kitchen, purchasing, and menu work as one system. This guide outlines high-leverage controls. Results vary by starting position — treat any percentage targets as internal goals, not promises.',
    sections: [
      {
        id: 'measure',
        title: 'Measure before you cut',
        body: 'Separate theoretical food cost (recipes × sales mix) from actual food cost (purchases adjusted for inventory). Without both numbers, you cannot tell whether the problem is recipe design, theft/waste, or purchasing price.',
      },
      {
        id: 'recipes',
        title: 'Lock recipes and portions',
        body: 'Standard recipes with weights — not “a handful” — and plating photos reduce silent portion inflation. Train the pass to reject plates that do not match the standard.',
      },
      {
        id: 'waste',
        title: 'Attack waste with logs, not blame',
        body: 'Track prep waste, spoilage, and returns for two weeks. Patterns usually point to over-prepping, poor FIFO, or menu items that do not sell.',
      },
      {
        id: 'buy',
        title: 'Purchasing and receiving',
        body: 'Compare invoices to quotes, check weights on delivery, and limit who can approve substitutions. Supplier review belongs in a full operational assessment when variance stays high.',
      },
      {
        id: 'menu',
        title: 'Menu engineering',
        body: 'Promote high-contribution dishes, redesign low-margin bestsellers, and remove complexity the kitchen cannot control. Menu work pairs with our menu development and training service when recipes need a full rebuild.',
      },
    ],
    faqs: [
      {
        question: 'What food-cost percentage is “good”?',
        answer:
          'It depends on concept, price point, and cuisine. Compare yourself to your own history and to similar concepts — not to a single universal number from the internet.',
      },
      {
        question: 'Can training alone fix food cost?',
        answer:
          'Training helps when the system exists. If recipes, inventory, and purchasing controls are missing, training fades within weeks.',
      },
      {
        question: 'What food-cost percentage is healthy in Indonesia?',
        answer:
          'It depends on concept and pricing power. Track theoretical vs actual first; chasing a vanity percentage without menu engineering often fails.',
      },
      {
        question: 'How fast can waste controls show results?',
        answer:
          'Visible waste and portion controls often move numbers within weeks if counts are real and chefs own the process.',
      },
      {
        question: 'Should we cut portion sizes to fix cost?',
        answer:
          'Only with intentional menu engineering. Silent shrink hurts reviews. Better levers: yield, purchasing, prep discipline and mix.',
      },
      {
        question: 'How do supplier negotiations fit in?',
        answer:
          'After you know true usage. Negotiate volume and quality with data — not guesswork.',
      },
      {
        question: 'Can delivery apps destroy food cost even if kitchen is tight?',
        answer:
          'Packaging, remakes and channel mix affect contribution. Cost control must include channel reality, not only dine-in recipes.',
      },
      {
        question: 'Do I need software to control COGS?',
        answer:
          'Spreadsheets can start. Software helps multi-outlet groups, but process discipline matters more than the tool.',
      },
      {
        question: 'How often should we recount inventory?',
        answer:
          'Key proteins and high-value items more frequently; full counts on a fixed weekly or biweekly cadence many operators can sustain.',
      },
      {
        question: 'Where does menu mix fit into cost reduction?',
        answer:
          'Promoting high-contribution dishes and retiring chronic losers often beats squeezing every recipe by a few percent.',
      }

    ],
  },
  {
    slug: 'commercial-kitchen-workflow-optimization',
    path: '/guides/commercial-kitchen-workflow-optimization',
    metaKey: 'rks-guide-workflow',
    title: 'Commercial Kitchen Workflow Optimization | MYCHEF.ID',
    description:
      'How to optimise commercial kitchen workflow: linear flow, station zoning, pass design, dish flow and peak-service bottlenecks for restaurants and hotels in Indonesia.',
    h1: 'Commercial Kitchen Workflow Optimization',
    primaryKeyword: 'commercial kitchen workflow optimization',
    parentServiceSlug: 'commercial-kitchen-design-build',
    heroImage: '/generated/mychef-rks-guide-workflow.webp',
    heroAlt: 'Busy restaurant kitchen pass during peak service',
    intro:
      'Workflow is the invisible layout of your kitchen. When flow is wrong, more staff still feel slow. When flow is right, the same brigade can hold higher volume with fewer collisions.',
    sections: [
      {
        id: 'map',
        title: 'Map the real path of a dish',
        body: 'Trace receiving → storage → prep → cook → pass → service → dish → waste. Note every reverse movement and every shared surface that creates queues.',
      },
      {
        id: 'zones',
        title: 'Zone by function, not by habit',
        body: 'Separate clean and dirty routes, keep high-use storage close to the stations that need it, and place the pass where FOH can collect without entering hot lines.',
      },
      {
        id: 'peak',
        title: 'Design for peak, not average',
        body: 'Average covers hide the Friday crush. Equipment capacity, landing space, and dish machine throughput should be tested against peak tickets per hour.',
      },
      {
        id: 'small-fixes',
        title: 'Small fixes before rebuilds',
        body: 'Often the first wins are mise layout, ticket rail position, shared tool placement, and dish landing. Major steel moves come after the operational case is clear — see kitchen design and build when structural change is justified.',
      },
    ],
    faqs: [
      {
        question: 'Can workflow improve without construction?',
        answer:
          'Frequently yes. Station rebalancing, prep timing, and pass discipline can unlock capacity before any wall moves.',
      },
      {
        question: 'When is a redesign required?',
        answer:
          'When collisions are structural: wrong equipment placement, impossible clean/dirty separation, or capacity ceilings that block the business plan.',
      },
      {
        question: 'What is the first symptom of bad kitchen workflow?',
        answer:
          'Cross-traffic at peak, tickets stacking at one station, or pass congestion while other sections idle.',
      },
      {
        question: 'Can workflow improve without buying new equipment?',
        answer:
          'Often yes — station ownership, prep timing, ticket rails and simple layout moves beat premature capex.',
      },
      {
        question: 'How do you measure ticket time fairly?',
        answer:
          'Sample peak vs off-peak, by course type, and separate fire delays from expo delays.',
      },
      {
        question: 'Should FOH changes be part of kitchen workflow projects?',
        answer:
          'Yes when order batching, course firing or table turns create BOH spikes.',
      },
      {
        question: 'How long does a workflow sprint usually take?',
        answer:
          'Focused single-outlet mapping can be days; culture change and retraining take longer after the design is clear.',
      },
      {
        question: 'Do open kitchens need different workflow rules?',
        answer:
          'Yes — noise, visibility and guest sightlines constrain where prep and dirty dish paths can go.',
      },
      {
        question: 'Can villa production kitchens use the same ideas?',
        answer:
          'Yes — batch prep, station clarity and pass discipline apply to estate catering kitchens too.',
      },
      {
        question: 'What documents come out of a workflow project?',
        answer:
          'Station maps, prep calendars, ticket rules and sometimes equipment relocation lists — agreed in scope.',
      }

    ],
  },
  {
    slug: 'restaurant-menu-development-process',
    path: '/guides/restaurant-menu-development-process',
    metaKey: 'rks-guide-menu-process',
    title: 'Restaurant Menu Development Process | MYCHEF.ID',
    description:
      'A clear restaurant menu development process: concept alignment, tastings, recipe cards, costing, section training and cooking trials for Indonesian hospitality kitchens.',
    h1: 'Restaurant Menu Development Process',
    primaryKeyword: 'restaurant menu development process',
    parentServiceSlug: 'menu-development-training',
    heroImage: '/generated/mychef-rks-guide-menu-process.webp',
    heroAlt: 'Chef plating tasting samples during menu development',
    intro:
      'Strong menus are engineered as much as they are created. This process keeps creativity attached to cost, capability, and consistency.',
    sections: [
      {
        id: 'direction',
        title: '1. Set direction before writing dishes',
        body: 'Define guest, price band, cuisine story, dietary needs, and kitchen constraints. A dish that needs skills or equipment you do not have is a training project or a capital project — not a menu line yet.',
      },
      {
        id: 'taste',
        title: '2. Taste under time pressure',
        body: 'Approve flavour and plating with the clock running. Beautiful slow plating dies at 70 covers.',
      },
      {
        id: 'standardise',
        title: '3. Standardise and cost',
        body: 'Convert approved dishes into weighted recipes with yield, portion, allergens, and cost per plate. Without this step, “menu development” is only R&D theatre.',
      },
      {
        id: 'train',
        title: '4. Train by section and trial',
        body: 'Assign owners, train section by section, then run a full cooking trial. Post-launch accompaniment catches drift after real guests arrive. For hands-on delivery, use our menu development and training service.',
      },
    ],
    faqs: [
      {
        question: 'How long does a full menu programme take?',
        answer:
          'It depends on menu size, team availability, and how many rounds of tasting you need. Your proposal should state phases and decision points.',
      },
      {
        question: 'Should photography happen before training?',
        answer:
          'Photograph after recipes are locked. Training from temporary plating creates permanent inconsistency.',
      },
      {
        question: 'What is the right number of dishes for a new menu?',
        answer:
          'Enough to express the concept and cover dietary needs — not so many that prep and quality collapse. Rational menus usually outperform oversized ones.',
      },
      {
        question: 'When should costing happen in the process?',
        answer:
          'Early and again after trials. Designing pretty dishes first then discovering they cannot hit target cost wastes time.',
      },
      {
        question: 'How many tasting rounds are normal?',
        answer:
          'Two to three focused tastings beat endless revisions without criteria.',
      },
      {
        question: 'Should suppliers influence the menu?',
        answer:
          'Reliable supply should constrain ambition. Signature dishes need backup plans when product is seasonal.',
      },
      {
        question: 'How do we train a team on a brand-new menu?',
        answer:
          'Recipe cards, section leads, dry runs and a soft-open window — not a single pre-shift speech.',
      },
      {
        question: 'Can we launch in phases?',
        answer:
          'Yes — core menu first, then specials and seasonal layers once execution is stable.',
      },
      {
        question: 'What role does plateware play?',
        answer:
          'Plateware affects portion perception, wash capacity and cost. Choose it with the dish, not after.',
      },
      {
        question: 'How do we keep the menu alive after launch?',
        answer:
          'Quarterly engineering reviews: sales mix, contribution, ticket times and guest feedback.',
      }

    ],
  },
  {
    slug: 'restaurant-cogs-calculation',
    path: '/guides/restaurant-cogs-calculation',
    metaKey: 'rks-guide-cogs',
    title: 'Restaurant COGS Calculation Guide | MYCHEF.ID',
    description:
      'How restaurant COGS calculation works: recipe cost, theoretical food cost, actual food cost, inventory and variance — explained for operators in Indonesia.',
    h1: 'Restaurant COGS Calculation Guide',
    primaryKeyword: 'restaurant COGS calculation',
    parentServiceSlug: 'menu-development-training',
    heroImage: '/generated/mychef-rks-guide-cogs.webp',
    heroAlt: 'Weighing ingredients for recipe costing in a commercial kitchen',
    intro:
      'COGS is only useful when the definition is shared by kitchen, purchasing, and finance. This guide keeps the language operational.',
    sections: [
      {
        id: 'recipe-cost',
        title: 'Recipe cost (plate cost)',
        body: 'Sum ingredient costs at current purchase prices for the exact recipe yield, then divide by portions produced. Update when supplier prices move.',
      },
      {
        id: 'theoretical',
        title: 'Theoretical food cost',
        body: 'Multiply each item’s plate cost by quantity sold in the period, sum, and divide by food sales. This is what cost “should” be if recipes were followed perfectly.',
      },
      {
        id: 'actual',
        title: 'Actual food cost',
        body: 'Opening inventory + purchases − closing inventory, divided by food sales (definitions must match your chart of accounts). The gap versus theoretical is your operational leakage signal.',
      },
      {
        id: 'act',
        title: 'What to do with variance',
        body: 'Large variance points to portion drift, waste, receiving errors, unrecorded staff meals, theft, or bad recipes. Investigate process before cutting quality. For a facilitated review, see kitchen consulting and audit.',
      },
    ],
    faqs: [
      {
        question: 'Should beverage be included in food COGS?',
        answer:
          'Track food and beverage separately whenever possible. Combined numbers hide the real problem.',
      },
      {
        question: 'How often should inventory be counted?',
        answer:
          'Weekly counts for high-value and high-turn items are common; full counts at least monthly. Frequency should match theft/waste risk and team capacity.',
      },
      {
        question: 'What is theoretical vs actual food cost?',
        answer:
          'Theoretical is recipe × sales mix; actual is purchases adjusted for inventory. The gap is where waste, theft, yield loss and errors hide.',
      },
      {
        question: 'How do I calculate food cost percentage?',
        answer:
          'Cost of goods used ÷ food sales for the same period. Be consistent about what counts as food sales and comps.',
      },
      {
        question: 'Should beverage cost be separate?',
        answer:
          'Yes. Blended “cost of sales” hides bar or kitchen problems. Track food and beverage separately.',
      },
      {
        question: 'How do comps and staff meals affect COGS?',
        answer:
          'They must be classified consistently. Untracked comps inflate apparent food cost and confuse decisions.',
      },
      {
        question: 'How often should COGS be closed?',
        answer:
          'Monthly is minimum; weekly flash counts on key items help high-volume sites.',
      },
      {
        question: 'Do I need exact recipes for theoretical cost?',
        answer:
          'Yes for accuracy. Without standard recipes, theoretical cost is fiction.',
      },
      {
        question: 'What is a reasonable variance between theoretical and actual?',
        answer:
          'Concept-dependent. Treat widening gaps as an operational alarm even if the absolute percentage looks “industry average”.',
      },
      {
        question: 'Can myCHEF build COGS systems for our team?',
        answer:
          'Yes under menu development and consulting scopes — recipe costing, count cadence and manager routines.',
      }

    ],
  },
  {
    slug: 'how-to-design-commercial-kitchen-layout',
    path: '/guides/how-to-design-commercial-kitchen-layout',
    metaKey: 'rks-guide-kitchen-layout',
    title: 'How to Design a Commercial Kitchen Layout | MYCHEF.ID',
    description:
      'How to design a commercial kitchen layout: zoning, flow, equipment capacity, utilities coordination and renovation sequencing for restaurants and hotels in Indonesia.',
    h1: 'How to Design a Commercial Kitchen Layout',
    primaryKeyword: 'how to design commercial kitchen layout',
    parentServiceSlug: 'commercial-kitchen-design-build',
    heroImage: '/generated/mychef-rks-guide-kitchen-layout.webp',
    heroAlt: 'Clean commercial kitchen showing distinct operational zones',
    intro:
      'Layout decisions are expensive to reverse. This guide outlines a safe sequence from menu reality to steel placement — without naming software tools that may not apply to every team.',
    sections: [
      {
        id: 'start',
        title: 'Start from menu and volume',
        body: 'List every production method the menu requires and the peak tickets you must survive. Equipment follows those answers — not the other way around.',
      },
      {
        id: 'zones',
        title: 'Draw zones before equipment brands',
        body: 'Block receiving, dry/cold storage, prep, cook lines, pass, dish, and waste. Protect clean/dirty separation and fire egress. Only then place equipment footprints and clearances.',
      },
      {
        id: 'utilities',
        title: 'Coordinate utilities early',
        body: 'Exhaust, gas, electrical load, drainage, and fresh air constrain almost every layout. Involve the appropriate licensed specialists when statutory design is required.',
      },
      {
        id: 'phase',
        title: 'Phase renovations honestly',
        body: 'Operating venues need a construction sequence that protects revenue. Temporary production plans matter as much as the final drawing set. For project delivery, use our commercial kitchen design and build service.',
      },
    ],
    faqs: [
      {
        question: 'Can one layout template fit every restaurant?',
        answer:
          'No. Concept, volume, and site services change everything. Templates are starting points, not finished designs.',
      },
      {
        question: 'Do we need 3D renders?',
        answer:
          'Renders help stakeholders understand space. Operators often need accurate equipment plans and utility coordination more than marketing visuals.',
      },
      {
        question: 'What comes first: menu or layout?',
        answer:
          'Menu and volume first. Layout that ignores the menu creates expensive bottlenecks.',
      },
      {
        question: 'How much space do we need per cover?',
        answer:
          'There is no universal number — depends on prep model, storage, dishwashing and service style. We size from process, not slogans.',
      },
      {
        question: 'Should dirty and clean paths ever cross?',
        answer:
          'Avoid it. Crossed clean/dirty flows create hygiene and speed problems.',
      },
      {
        question: 'Where should the dish pit sit relative to the pass?',
        answer:
          'Close enough for speed, separated enough that noise and splash do not destroy expo quality.',
      },
      {
        question: 'Can a small kitchen still support a large menu?',
        answer:
          'Only with ruthless menu engineering, batch prep and storage discipline — or the menu must shrink.',
      },
      {
        question: 'What utilities are most often underspecified?',
        answer:
          'Power phases, ventilation, drainage and hot water. Fix on paper before concrete is poured.',
      },
      {
        question: 'How do we plan for future growth?',
        answer:
          'Leave modular space and utility capacity for one more station rather than filling every square metre on day one.',
      },
      {
        question: 'Do you provide CAD drawings?',
        answer:
          'Drawing format is agreed in the proposal — from conceptual bubble diagrams to detailed equipment layouts.',
      }

    ],
  },
]

export function getRksService(slug: string): RksServicePage | undefined {
  return RKS_SERVICES.find((s) => s.slug === slug)
}

export function getRksGuide(slug: string): RksGuidePage | undefined {
  return RKS_GUIDES.find((g) => g.slug === slug)
}

export const RKS_SERVICE_SLUGS = RKS_SERVICES.map((s) => s.slug)
export const RKS_GUIDE_SLUGS = RKS_GUIDES.map((g) => g.slug)
