import type { BarServicesHubData } from './types'

export const BAR_SERVICES_HUB: BarServicesHubData = {
  hero: {
    eyebrow: 'Bar Services for Venues',
    h1: 'Bar Consultant Bali',
    description: 'The dedicated bar-operations partner for Bali venues: audit, costing, menu development, training, staffing and ongoing management — one accountable team for the life of your bar.',
    heroImage: '/generated/mychef-bar-services-bali-hero-hub.webp',
    heroAlt: 'Bali villa bar setup with professional bartender preparing drinks at golden hour'
  },
  groups: [
    {
      title: 'Consulting',
      services: ['bar-audit-improvement', 'bar-costing-inventory-control', 'cocktail-menu-development', 'signature-cocktail-creation', 'new-bar-setup']
    },
    {
      title: 'Staffing',
      services: ['temporary-bartender-staffing', 'permanent-bar-staff-recruitment', 'bar-equipment-supply-rental']
    },
    {
      title: 'Management',
      services: ['bar-staff-training', 'monthly-bar-management-support']
    },
    {
      title: 'Flagship',
      services: ['complete-bar-performance-programme']
    }
  ],
  whyUs: {
    title: 'Why venues choose MyChef Bar Services',
    items: [
      { title: 'Dedicated specialist', description: 'Bali has event bartender vendors and generalist consultants. We built the integrated stack — audit, training, staffing, costing and management — as a permanent local B2B service.' },
      { title: 'Trusted operations base', description: 'MyChef already serves 560+ villas and has delivered 500+ events. The same vetting, scheduling and quality systems now run our bar operations.' },
      { title: 'Local talent pipeline', description: 'We turn your existing Indonesian team into the bar staff you wish you could hire — and build a pipeline that survives turnover.' }
    ]
  },
  process: [
    { step: 1, title: 'Free bar health call', description: 'You describe the venue and the pain; we tell you honestly whether we can help.' },
    { step: 2, title: 'Audit & measurement', description: 'We observe service, pour tests, stock records and reviews. You get a written scorecard and fix plan.' },
    { step: 3, title: 'Prioritised fixes', description: 'Costing controls, menu engineering, training or staffing — sequenced by payback, not by what we would like to sell.' },
    { step: 4, title: 'Ongoing management', description: 'Monthly oversight keeps the gains locked in, with reporting you can forward to ownership.' }
  ],
  proof: {
    title: 'Built on the same standards as Bali\'s best private dining experiences',
    items: [
      'Experienced hospitality operators',
      'Local team training and recruitment expertise',
      'Focus on measurable ROI'
    ]
  }
}
