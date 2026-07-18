import type { BarServicesHubData } from './types'

export const BAR_SERVICES_HUB: BarServicesHubData = {
  hero: {
    eyebrow: 'Bar Services for Venues',
    h1: 'Bar Consultant Bali',
    description: 'The team behind Bali\'s private dining standard — now building world-class bar programmes for the island\'s venues.',
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
      { title: 'The first dedicated specialist', description: 'Bali has event bartender vendors and generalist consultants. We built the integrated stack — audit, training, staffing, costing and management — as a permanent local B2B service.' },
      { title: 'A trust base you can verify', description: 'MyChef\'s existing villa and event operations run on the same vetting, scheduling and quality systems that now power our bar services.' },
      { title: 'We grow local talent, not fly-ins', description: 'We turn your existing Indonesian team into the bar staff you wish you could hire — and build a pipeline that survives turnover.' },
      { title: 'Radical price transparency', description: 'Every service publishes a "from" anchor. You\'ll never wonder what a proposal is hiding.' }
    ]
  },
  process: [
    { step: 1, title: 'Diagnose', description: 'We observe service, run pour tests, review stock records and guest feedback. You get a written scorecard and fix plan.' },
    { step: 2, title: 'Design', description: 'Costing controls, menu engineering, training or staffing — sequenced by payback, not by what we would like to sell.' },
    { step: 3, title: 'Deliver', description: 'We implement the fixes inside your venue: SOPs, training, spec libraries and systems your team can use from day one.' },
    { step: 4, title: 'Optimise', description: 'Monthly oversight keeps the gains locked in, with reporting you can forward to ownership.' }
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
