export type ServiceCategory =
  | 'Personal & Daily Care'
  | 'Medical & Skilled Care'
  | 'Specialized Programs'

export type ServicePersona = {
  title: string
  description: string
}

export type ServiceDetail = {
  slug: string
  title: string
  category: ServiceCategory
  /** Lucide icon component name (used in directory + related strip). */
  icon: string
  description: string
  heroImage: { src: string; alt: string }
  /** Used in Overview section (right-column bullets). */
  keyBenefits: string[]
  whatsIncluded: string[]
  whoBenefits: ServicePersona[]
  /** Optional extras per service. */
  badges?: { label: string; detail?: string }[]
  eligibilityChecklist?: string[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  relatedSlugs: string[]
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'personal-care',
    title: 'Personal Care Services',
    category: 'Personal & Daily Care',
    icon: 'HeartHandshake',
    description:
      'Assistance with activities of daily living (ADLs), including bathing, dressing, grooming, toileting, mobility assistance, and personal hygiene, performed with the utmost dignity and respect.',
    heroImage: {
      src: '/images/service-personal-care.webp',
      alt: 'Caregiver gently brushing an elderly woman’s hair at home with a warm smile',
    },
    keyBenefits: [
      'Preserves dignity and independence',
      'Reduces fall risk with safe transfers',
      'Supports consistent daily routines',
      'Provides compassionate, trusted help at home',
    ],
    whatsIncluded: [
      'Bathing & showering assistance',
      'Dressing & grooming',
      'Oral hygiene',
      'Mobility and transfer assistance',
      'Incontinence care',
      'Medication reminders',
      'Skin care & pressure sore prevention',
    ],
    whoBenefits: [
      {
        title: 'Seniors with mobility limitations',
        description:
          'Help with daily routines while maintaining comfort, privacy, and confidence at home.',
      },
      {
        title: 'Post-surgery recovery patients',
        description:
          'Safe support during healing, especially when strength, balance, or stamina are reduced.',
      },
      {
        title: 'Individuals with chronic illness',
        description:
          'Reliable assistance that reduces fatigue and supports stable routines and wellness.',
      },
    ],
    seo: {
      title: 'Personal Care Services | Fair Path Health Services',
      description:
        'Dignified personal care support in Georgia: bathing, grooming, dressing, toileting, transfers, and hygiene assistance delivered with warmth and respect.',
      keywords: [
        'personal care services',
        'ADL assistance',
        'in-home personal care Georgia',
        'senior care at home',
        'bathing assistance',
      ],
    },
    relatedSlugs: ['companion-homemaking', 'transportation', 'care-coordination'],
  },
  {
    slug: 'nursing-care',
    title: 'Skilled Nursing Care',
    category: 'Medical & Skilled Care',
    icon: 'Stethoscope',
    description:
      'Licensed nurses provide in-home medical care, from medication management to wound care, eliminating costly hospital stays while ensuring clinical excellence.',
    heroImage: {
      src: '/images/service-nursing-care.webp',
      alt: 'Nurse checking blood pressure for a senior in a comfortable home living room',
    },
    keyBenefits: [
      'Clinical oversight and safer recovery at home',
      'Supports chronic condition stability',
      'Reduces avoidable readmissions',
      'Clear communication with families and providers',
    ],
    whatsIncluded: [
      'Medication administration & management',
      'Wound care & dressing changes',
      'Vital signs monitoring',
      'Chronic disease management (diabetes, COPD, heart disease)',
      'Post-surgical care',
      'Health assessments & reporting',
      'IV therapy support',
    ],
    whoBenefits: [
      {
        title: 'Post-hospitalization patients',
        description:
          'Support after discharge to reduce complications and keep recovery on track.',
      },
      {
        title: 'Chronically ill individuals',
        description:
          'Monitoring and guidance that supports stability and early issue detection.',
      },
      {
        title: 'Seniors with complex medical needs',
        description:
          'Coordinated clinical support designed to protect comfort and outcomes at home.',
      },
    ],
    seo: {
      title: 'Skilled Nursing Care at Home | Fair Path Health Services',
      description:
        'In-home skilled nursing in Georgia: medication management, wound care, vitals monitoring, chronic disease support, post-surgical care, and clinical reporting.',
      keywords: [
        'skilled nursing care',
        'in-home nursing Georgia',
        'wound care at home',
        'medication management',
        'post surgical home care',
      ],
    },
    relatedSlugs: ['pharmacy-services', 'care-coordination', 'personal-care'],
  },
  {
    slug: 'companion-homemaking',
    title: 'Companion & Homemaking Services',
    category: 'Personal & Daily Care',
    icon: 'Home',
    description:
      "Beyond physical care, we provide the gift of genuine companionship and a well-maintained home, reducing isolation and keeping your loved one's environment safe and comfortable.",
    heroImage: {
      src: '/images/service-companian-homemaking.webp',
      alt: 'Caregiver and senior sharing conversation over tea at a bright kitchen table',
    },
    keyBenefits: [
      'Reduces isolation with meaningful companionship',
      'Keeps the home safe and organized',
      'Supports nutrition through meal preparation',
      'Adds structure and comfort to the day',
    ],
    whatsIncluded: [
      'Friendly companionship & conversation',
      'Light housekeeping',
      'Laundry & linen changes',
      'Meal planning & preparation',
      'Grocery shopping',
      'Errand assistance',
      'Activity engagement & hobbies',
    ],
    whoBenefits: [
      {
        title: 'Seniors living alone',
        description:
          'Warm companionship that supports emotional wellness and day-to-day comfort.',
      },
      {
        title: 'Families balancing busy schedules',
        description:
          'Dependable help that keeps routines consistent and the home running smoothly.',
      },
      {
        title: 'Clients needing light support',
        description:
          'Non-medical care that improves safety, nutrition, and overall quality of life.',
      },
    ],
    seo: {
      title: 'Companion & Homemaking Services | Fair Path Health Services',
      description:
        'Companion care and homemaking in Georgia: companionship, meal prep, light housekeeping, laundry, errands, and engagement activities for seniors at home.',
      keywords: [
        'companion care',
        'homemaking services',
        'senior companionship',
        'light housekeeping home care',
        'meal preparation for seniors',
      ],
    },
    relatedSlugs: ['personal-care', 'transportation', 'respite-care'],
  },
  {
    slug: 'transportation',
    title: 'Medical Transportation Services',
    category: 'Personal & Daily Care',
    icon: 'Car',
    description:
      'Safe, reliable, door-to-door transportation ensuring your loved one never misses an important appointment, with trained, patient-centered caregivers behind the wheel.',
    heroImage: {
      src: '/images/service-medical-transportation.webp',
      alt: 'Caregiver assisting a senior boarding a medical transportation van outside a home',
    },
    keyBenefits: [
      'Reduces missed appointments',
      'Provides safe escort support',
      'Less stress for family schedules',
      'Reliable, respectful assistance',
    ],
    whatsIncluded: [
      'Medical appointments',
      'Pharmacy pickups',
      'Grocery & errand trips',
      'Social & community activities',
      'Family visits',
      'Physical therapy appointments',
    ],
    whoBenefits: [
      {
        title: 'Clients who no longer drive',
        description:
          'Door-to-door support that protects independence without sacrificing safety.',
      },
      {
        title: 'Families needing backup',
        description:
          'Reliable transportation coverage when work schedules or distance makes it difficult.',
      },
      {
        title: 'Patients attending frequent therapies',
        description:
          'Consistent rides for PT/OT/appointments to keep recovery and wellness on track.',
      },
    ],
    seo: {
      title: 'Medical Transportation for Seniors | Fair Path Health Services',
      description:
        'Door-to-door medical transportation in Georgia: appointments, therapy, pharmacy pickups, errands, and community outings with patient-centered escorts.',
      keywords: [
        'medical transportation services',
        'senior transportation Georgia',
        'ride to doctor appointment',
        'caregiver escort',
      ],
    },
    relatedSlugs: ['personal-care', 'companion-homemaking', 'care-coordination'],
  },
  {
    slug: 'developmental-disabilities',
    title: 'Developmental Disabilities Services (DBHDD)',
    category: 'Specialized Programs',
    icon: 'Accessibility',
    description:
      "Fair Path is a certified provider of Georgia's DBHDD (Department of Behavioral Health and Developmental Disabilities) programs, offering specialized support for individuals with intellectual and developmental disabilities.",
    heroImage: {
      src: '/images/service-dbhdd.webp',
      alt: 'Support professional and young woman talking together on a sofa in a bright living room',
    },
    badges: [{ label: 'Certified DBHDD Provider', detail: 'Georgia DBHDD programs' }],
    keyBenefits: [
      'Person-centered support focused on independence',
      'Consistency, structure, and safety at home and in the community',
      'Support for families and caregivers',
      'Aligned with waiver program expectations (NOW/COMP)',
    ],
    whatsIncluded: [
      'NOW Waiver services',
      'COMP Waiver services',
      'Community living support',
      'Employment support',
      'Behavioral support services',
      'Life skills training',
      'Respite care for families',
      'Day support activities',
    ],
    whoBenefits: [
      {
        title: 'Individuals with I/DD',
        description:
          'Support that respects autonomy while building confidence and daily life skills.',
      },
      {
        title: 'Families navigating waiver services',
        description:
          'Guidance and consistent support to reduce overwhelm and improve continuity of care.',
      },
      {
        title: 'Adults building community independence',
        description:
          'Goal-driven support for routines, employment readiness, and safe engagement.',
      },
    ],
    seo: {
      title: 'DBHDD Developmental Disabilities Services | Fair Path Health Services',
      description:
        'Certified DBHDD provider in Georgia offering NOW/COMP waiver supports, community living, employment support, life skills training, behavioral supports, and respite.',
      keywords: [
        'DBHDD services',
        'NOW waiver',
        'COMP waiver',
        'developmental disabilities support Georgia',
        'community living support',
      ],
    },
    relatedSlugs: ['respite-care', 'care-coordination', 'consulting'],
  },
  {
    slug: 'care-coordination',
    title: 'Care Coordination Services',
    category: 'Medical & Skilled Care',
    icon: 'CalendarCheck',
    description:
      "Our care coordinators act as the single point of contact managing all aspects of your loved one's care, reducing stress for families and ensuring nothing falls through the cracks.",
    heroImage: {
      src: '/images/service-care-cordination.webp',
      alt: 'Care coordinator reviewing documents with an elderly couple at a dining table',
    },
    keyBenefits: [
      'One trusted point of contact',
      'Clear communication and family updates',
      'Better scheduling consistency',
      'Faster response when needs change',
    ],
    whatsIncluded: [
      'Initial care assessment',
      'Personalized care plan development',
      'Caregiver scheduling & matching',
      'Provider communication',
      'Family updates & reporting',
      'Care plan revisions',
      'Crisis response planning',
    ],
    whoBenefits: [
      {
        title: 'Families managing multiple providers',
        description:
          'Coordination reduces gaps and helps everyone stay aligned on the plan.',
      },
      {
        title: 'Clients with changing needs',
        description:
          'Care plans evolve smoothly as health, mobility, or routines shift over time.',
      },
      {
        title: 'Caregivers needing clear direction',
        description:
          'Better handoffs, clearer expectations, and consistent communication.',
      },
    ],
    seo: {
      title: 'Care Coordination Services | Fair Path Health Services',
      description:
        'Care coordination in Georgia: assessment, personalized care planning, caregiver matching, provider communication, family updates, and crisis planning.',
      keywords: [
        'care coordination',
        'care plan management',
        'home care coordinator',
        'family updates home care',
      ],
    },
    relatedSlugs: ['personal-care', 'nursing-care', 'pharmacy-services'],
  },
  {
    slug: 'pharmacy-services',
    title: 'Pharmacy Services',
    category: 'Medical & Skilled Care',
    icon: 'Pill',
    description:
      'Bridging the gap between healthcare providers and patients, our pharmacy services ensure medications are managed safely, correctly, and on schedule.',
    heroImage: {
      src: '/images/service-pharmacy.webp',
      alt: 'Pharmacist handing a bag of prescriptions to a smiling senior customer at the pharmacy counter',
    },
    keyBenefits: [
      'Improves adherence and routine',
      'Reduces medication errors',
      'Supports safer transitions of care',
      'Peace of mind for families',
    ],
    whatsIncluded: [
      'Medication review & reconciliation',
      'Prescription pickup & delivery',
      'Medication organizer setup',
      'Compliance monitoring',
      'Drug interaction screening',
      'Caregiver medication training',
    ],
    whoBenefits: [
      {
        title: 'Clients on multiple medications',
        description:
          'Better organization and monitoring to keep schedules clear and accurate.',
      },
      {
        title: 'Post-discharge patients',
        description:
          'Support during medication changes and transitions after hospitalization.',
      },
      {
        title: 'Families seeking added safety',
        description:
          'Confidence that medications are reviewed, organized, and followed correctly.',
      },
    ],
    seo: {
      title: 'In-Home Pharmacy Support | Fair Path Health Services',
      description:
        'Medication support in Georgia: review, reconciliation, organizer setup, pickup/delivery, interaction screening, and adherence monitoring.',
      keywords: [
        'pharmacy services',
        'medication reconciliation',
        'medication reminders',
        'pill organizer setup',
        'drug interaction screening',
      ],
    },
    relatedSlugs: ['nursing-care', 'care-coordination', 'personal-care'],
  },
  {
    slug: 'memory-care',
    title: 'Memory Care Support',
    category: 'Specialized Programs',
    icon: 'Brain',
    description:
      "Specialized in-home support for individuals living with Alzheimer's, dementia, or other memory conditions, preserving dignity while providing a safe, structured environment.",
    heroImage: {
      src: '/images/service-memory-care.webp',
      alt: 'Care professional reviewing a care plan with an elderly couple at a dining table',
    },
    keyBenefits: [
      'Structured routines reduce confusion',
      'Safety-focused support for wandering risks',
      'Gentle communication and behavioral support',
      'Education and respite for family caregivers',
    ],
    whatsIncluded: [
      'Structured daily routines',
      'Safe wandering prevention',
      'Cognitive engagement activities',
      'Sundowning support',
      'Family caregiver education',
      'Behavioral management support',
      'Coordination with memory care physicians',
    ],
    whoBenefits: [
      {
        title: 'Clients with Alzheimer’s or dementia',
        description:
          'Compassionate structure that preserves dignity and reduces daily stress.',
      },
      {
        title: 'Families needing reliable help',
        description:
          'Practical support plus education to make caregiving more sustainable.',
      },
      {
        title: 'Clients at risk for wandering',
        description:
          'Safety-forward routines designed to reduce risk and protect wellbeing.',
      },
    ],
    seo: {
      title: 'Memory Care Support at Home | Fair Path Health Services',
      description:
        'In-home memory care support in Georgia: routines, wandering prevention, cognitive engagement, sundowning support, caregiver education, and coordination.',
      keywords: [
        'memory care support',
        'dementia home care',
        'alzheimer home care Georgia',
        'sundowning support',
      ],
    },
    relatedSlugs: ['respite-care', 'personal-care', 'care-coordination'],
  },
  {
    slug: 'respite-care',
    title: 'Respite Care for Family Caregivers',
    category: 'Specialized Programs',
    icon: 'Coffee',
    description:
      'Every family caregiver deserves a break. Our respite care gives you time to recharge while knowing your loved one is in capable, compassionate hands.',
    heroImage: {
      src: '/images/service-respite-care.webp',
      alt: 'Respite caregiver and senior sharing a photo album together at a sunlit dining table at home',
    },
    keyBenefits: [
      'Reliable coverage you can trust',
      'Flexible scheduling (short-term or extended)',
      'Protects caregiver wellbeing and sustainability',
      'Maintains continuity of the care plan',
    ],
    whatsIncluded: [
      'Scheduled or emergency respite',
      'Short-term or extended care',
      'Full continuation of existing care plan',
      'Overnight respite options',
      'Family caregiver check-ins',
    ],
    whoBenefits: [
      {
        title: 'Family caregivers needing rest',
        description:
          'Time to recharge without worrying about safety or consistency of care.',
      },
      {
        title: 'Families managing long-term care',
        description:
          'Respite improves sustainability and helps prevent burnout.',
      },
      {
        title: 'Care situations with changing schedules',
        description:
          'Coverage during travel, busy seasons, or unexpected needs.',
      },
    ],
    seo: {
      title: 'Respite Care for Family Caregivers | Fair Path Health Services',
      description:
        'Respite care in Georgia: scheduled or emergency coverage, overnight options, continuity of care plan, and caregiver check-ins for peace of mind.',
      keywords: [
        'respite care',
        'caregiver respite Georgia',
        'overnight respite care',
        'family caregiver support',
      ],
    },
    relatedSlugs: ['memory-care', 'companion-homemaking', 'personal-care'],
  },
  {
    slug: 'aid-attendance',
    title: 'Aid & Attendance Veterans Benefit',
    category: 'Specialized Programs',
    icon: 'Medal',
    description:
      'Eligible veterans and surviving spouses may qualify for VA benefits covering in-home care costs. Fair Path helps families navigate this process at no cost.',
    heroImage: {
      src: '/images/service-aid-attendence.webp',
      alt: 'Professional guiding a veteran couple through benefit paperwork at a home dining table',
    },
    keyBenefits: [
      'Helps make quality care more affordable',
      'Guided paperwork and documentation support',
      'Coordination once approved',
      'Clear answers and no-pressure guidance',
    ],
    whatsIncluded: [
      'Eligibility assessment (free)',
      'Application guidance & documentation',
      'Service coordination once approved',
      'All personal care & skilled nursing services covered under benefit',
    ],
    eligibilityChecklist: [
      'Veteran served at least 90 days active duty (with at least one day during wartime) OR is a surviving spouse',
      'Needs help with daily activities such as bathing, dressing, or mobility',
      'Has significant health-related limitations requiring regular assistance',
      'Meets VA income and asset guidelines (varies by situation)',
    ],
    whoBenefits: [
      {
        title: 'Eligible veterans',
        description:
          'A pathway to help fund in-home care while staying safe and comfortable at home.',
      },
      {
        title: 'Surviving spouses',
        description:
          'Guidance navigating a complex process to reduce stress and uncertainty.',
      },
      {
        title: 'Families planning long-term support',
        description:
          'A clearer strategy for affordability and care continuity.',
      },
    ],
    seo: {
      title: 'Aid & Attendance Benefit Help | Fair Path Health Services',
      description:
        'Aid & Attendance guidance in Georgia: free eligibility assessment, application support, documentation help, and coordinated in-home services once approved.',
      keywords: [
        'aid and attendance',
        'veterans home care benefit',
        'VA aid and attendance help',
        'in-home care veterans benefit Georgia',
      ],
    },
    relatedSlugs: ['personal-care', 'nursing-care', 'consulting'],
  },
  {
    slug: 'consulting',
    title: 'Healthcare Consulting Services',
    category: 'Medical & Skilled Care',
    icon: 'MessagesSquare',
    description:
      "Leveraging our founders' expertise in healthcare management and pharmacy, we provide consulting services to individuals, families, and organizations navigating complex care decisions.",
    heroImage: {
      src: '/images/service-consulting.webp',
      alt: 'Healthcare consultant explaining care planning documents to family members at a home table',
    },
    keyBenefits: [
      'Clarity when decisions feel overwhelming',
      'Personalized guidance for care planning',
      'Support navigating benefits and insurance',
      'A trusted partner for next steps',
    ],
    whatsIncluded: [
      'Care needs assessments',
      'Care plan design for families managing independently',
      'Facility selection guidance',
      'Insurance & benefits navigation',
      'Caregiver training for family members',
    ],
    whoBenefits: [
      {
        title: 'Families unsure where to start',
        description:
          'Clear recommendations and a care path that matches your priorities and budget.',
      },
      {
        title: 'Clients transitioning between care settings',
        description:
          'Support making informed decisions about home care, rehab, or facility options.',
      },
      {
        title: 'Organizations seeking expert guidance',
        description:
          'Practical insight built from healthcare management and medication safety experience.',
      },
    ],
    seo: {
      title: 'Healthcare Consulting | Fair Path Health Services',
      description:
        'Healthcare consulting in Georgia: needs assessments, care planning, benefits navigation, caregiver training, and facility guidance for confident decisions.',
      keywords: [
        'healthcare consulting',
        'care planning consultation',
        'benefits navigation',
        'facility selection guidance',
      ],
    },
    relatedSlugs: ['care-coordination', 'aid-attendance', 'pharmacy-services'],
  },

  /* 12th page to complete the full directory set */
  {
    slug: 'post-acute-care',
    title: 'Post‑Acute & Transitional Care',
    category: 'Medical & Skilled Care',
    icon: 'Hospital',
    description:
      'Support after hospital or rehab discharge, focused on safer recovery at home with monitoring, routine, and coordination designed to reduce readmission risk.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1580281658628-8b3f7b2a35c8?w=1920&q=85&auto=format&fit=crop',
      alt: 'Recovery and transitional care support at home',
    },
    keyBenefits: [
      'Smoother transition home after discharge',
      'Supports medication and appointment routines',
      'Early identification of concerns',
      'Family peace of mind during recovery',
    ],
    whatsIncluded: [
      'Discharge plan review support',
      'Medication reminders and routine support',
      'Appointment coordination and transportation planning',
      'Monitoring for changes in condition (non-diagnostic)',
      'Home safety support and fall-risk reduction',
      'Communication support with the care team',
    ],
    whoBenefits: [
      {
        title: 'Clients returning home after hospitalization',
        description:
          'Extra support during the critical first weeks to protect comfort and stability.',
      },
      {
        title: 'Patients recovering from surgery',
        description:
          'Routine, monitoring, and support for safe mobility and daily activities.',
      },
      {
        title: 'Families seeking added reassurance',
        description:
          'A trusted caregiver presence to help prevent avoidable setbacks.',
      },
    ],
    seo: {
      title: 'Post‑Acute Home Care | Fair Path Health Services',
      description:
        'Post-acute and transitional home care in Georgia: safer recovery after discharge with routine support, coordination, and monitoring to reduce readmission risk.',
      keywords: [
        'post acute care',
        'transitional home care',
        'after hospital home care',
        'recovery support at home',
      ],
    },
    relatedSlugs: ['nursing-care', 'pharmacy-services', 'care-coordination'],
  },
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug) ?? null
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Personal & Daily Care',
  'Medical & Skilled Care',
  'Specialized Programs',
]

