export type ResourceFaq = {
  category: string
  items: { q: string; a: string }[]
}

export const FAQ_CATEGORIES: ResourceFaq[] = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How quickly can care begin after I contact you?',
        a: 'In many cases, care can begin within 24-48 hours after an initial conversation and assessment. Urgent situations are prioritized whenever possible.',
      },
      {
        q: 'Do you offer a free assessment?',
        a: 'Yes. We provide a no-obligation consultation to understand needs, schedule preferences, and the best care approach.',
      },
      {
        q: 'Do I need a doctor’s referral?',
        a: 'Not always. Some services can begin with a care assessment. For skilled services, we coordinate with your provider as needed.',
      },
    ],
  },
  {
    category: 'Our Services',
    items: [
      {
        q: 'Can you provide both personal care and nursing support?',
        a: 'Yes. We offer a range of services, from daily personal assistance to skilled nursing support depending on clinical needs.',
      },
      {
        q: 'Do you offer transportation to appointments?',
        a: 'Yes. We provide safe, door-to-door transportation and escorts for appointments, errands, and community activities.',
      },
      {
        q: 'Do you offer memory care support at home?',
        a: 'Yes. Our team supports structured routines, safety, cognitive engagement, and family education for dementia and Alzheimer’s.',
      },
    ],
  },
  {
    category: 'Payment & Insurance',
    items: [
      {
        q: 'Does Medicaid cover all types of care you offer?',
        a: 'Coverage depends on eligibility and program guidelines. We’ll help you understand what may be covered under CCSP/SOURCE and other options.',
      },
      {
        q: 'Do you accept private pay?',
        a: 'Yes. We offer flexible private pay options based on hours and care needs.',
      },
    ],
  },
  {
    category: 'Caregiver Selection',
    items: [
      {
        q: 'Can I choose my own caregiver?',
        a: 'We aim to match caregivers based on needs and personality. If adjustments are needed, we will work with you to improve the fit.',
      },
      {
        q: 'How are caregivers screened and trained?',
        a: 'Caregivers are vetted, background-checked, and supported with training aligned to care standards and safety expectations.',
      },
      {
        q: 'What if I’m not satisfied with the match?',
        a: 'Let us know quickly. We will address concerns, adjust the plan, and rematch when appropriate.',
      },
    ],
  },
  {
    category: 'Scheduling',
    items: [
      {
        q: 'What if I need to change or cancel a scheduled visit?',
        a: 'Contact us as soon as possible. We’ll update the schedule and coordinate coverage based on availability.',
      },
      {
        q: 'Do you offer weekend or overnight support?',
        a: 'Availability varies by service and location. We’ll discuss needs during the assessment and recommend the best schedule.',
      },
      {
        q: 'Can care plans be adjusted over time?',
        a: 'Yes. Care plans evolve as needs change. We review and adjust to keep support aligned with goals.',
      },
    ],
  },
  {
    category: 'For Family Members',
    items: [
      {
        q: 'Do you offer 24/7 emergency support?',
        a: 'For urgent needs, families can reach us for guidance and escalation. Ask during your assessment for the best support pathway.',
      },
      {
        q: 'How is my care plan created and updated?',
        a: 'Plans begin with an assessment and are reviewed as needs change, with communication and updates shared with families.',
      },
      {
        q: 'Will I receive updates about visits?',
        a: 'Yes. We prioritize clear communication so you always know what’s happening and what to expect next.',
      },
    ],
  },
  {
    category: 'Careers',
    items: [
      {
        q: 'What positions do you hire for?',
        a: 'We often hire CNAs, HHAs, PCAs, and care support roles. Visit Careers to see open positions and apply.',
      },
      {
        q: 'Do you provide training?',
        a: 'Yes. We provide onboarding and support for ongoing development to protect safety and quality.',
      },
      {
        q: 'What areas do you serve for caregiver jobs?',
        a: 'We support families across multiple Georgia counties. Job locations depend on client needs and scheduling.',
      },
    ],
  },
]

export const HELPFUL_LINKS = {
  Government: [
    { label: 'U.S. Department of Health & Human Services (HHS)', href: 'https://www.hhs.gov/' },
    { label: 'National Institutes of Health (NIH)', href: 'https://www.nih.gov/' },
    { label: 'Centers for Disease Control and Prevention (CDC)', href: 'https://www.cdc.gov/' },
    { label: 'Georgia Department of Public Health (DPH)', href: 'https://dph.georgia.gov/' },
  ],
  'Care Programs': [
    { label: 'Home Care Association of America (HCAOA)', href: 'https://www.hcaoa.org/' },
    { label: 'Georgia Association for Home Health Agencies (GAHHA)', href: 'https://gahha.org/' },
  ],
  Local: [
    { label: 'Area Agency on Aging (Georgia)', href: 'https://aging.georgia.gov/' },
  ],
} as const
