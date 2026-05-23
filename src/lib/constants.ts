import type {
  Service,
  Testimonial,
  TeamMember,
  FAQ,
  StatItem,
  InsuranceProgram,
  NavItem,
} from '@/lib/types'

export const SITE_CONFIG = {
  name: 'Fair Path Health Services',
  tagline: 'Compassion • Care • Integrity • Wellness',
  phone: '(404) 543-8730',
  phoneRaw: '4045438730',
  email: 'info@fairpathhealth.com',
  address: 'Serving families across Metro Atlanta & surrounding Georgia counties',
  hours: 'Mon–Fri 8AM–6PM, Sat 9AM–3PM, Sun Emergency Only',
} as const

/** Official brand mark (PNG in /public). Used in nav, footer, and favicon. */
export const BRAND_LOGO = {
  src: '/brand/Logo.png',
  alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
} as const

/**
 * Primary site navigation (App Router).
 * Top-level items drive the header; `children` supports dropdowns/accordions.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Personal Care', href: '/services/personal-care' },
      { label: 'Companion & Homemaking', href: '/services/companion-homemaking' },
      { label: 'Transportation', href: '/services/transportation' },
      { label: 'Nursing Care', href: '/services/nursing-care' },
      { label: 'Care Coordination', href: '/services/care-coordination' },
      { label: 'Memory Care Support', href: '/services/memory-care' },
      { label: 'Respite Care', href: '/services/respite-care' },
      { label: 'Consulting Services', href: '/services/consulting' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog & News', href: '/blog' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Helpful Links', href: '/resources/links' },
    ],
  },
  { label: 'Payment & Insurance', href: '/payment' },
  { label: 'Contact Us', href: '/contact' },
]

export const SERVICES_MEGA_MENU = {
  viewAllHref: '/services',
  columns: [
    {
      heading: 'Personal & Daily Care',
      items: [
        { label: 'Personal Care', href: '/services/personal-care', icon: 'HeartHandshake' },
        {
          label: 'Companion & Homemaking',
          href: '/services/companion-homemaking',
          icon: 'Home',
        },
        { label: 'Transportation', href: '/services/transportation', icon: 'Car' },
      ],
    },
    {
      heading: 'Medical & Skilled Care',
      items: [
        { label: 'Nursing Care', href: '/services/nursing-care', icon: 'Stethoscope' },
        {
          label: 'Care Coordination',
          href: '/services/care-coordination',
          icon: 'CalendarCheck',
        },
      ],
    },
    {
      heading: 'Specialized Programs',
      items: [
        { label: 'Memory Care Support', href: '/services/memory-care', icon: 'Brain' },
        { label: 'Respite Care', href: '/services/respite-care', icon: 'Coffee' },
        { label: 'Consulting Services', href: '/services/consulting', icon: 'MessagesSquare' },
      ],
    },
  ],
} as const

export const SERVICE_ITEMS: Service[] = [
  {
    id: '1',
    name: 'Personal Care',
    slug: 'personal-care',
    icon: 'HeartHandshake',
    shortDescription:
      'Respectful assistance with bathing, grooming, dressing, toileting, and mobility so clients feel dignified and safe at home.',
  },
  {
    id: '2',
    name: 'Companion & Homemaking',
    slug: 'companion-homemaking',
    icon: 'Home',
    shortDescription:
      'Companionship, meal prep, and light housekeeping that keep the home safe, warm, and comfortable.',
  },
  {
    id: '3',
    name: 'Transportation & Escorts',
    slug: 'transportation',
    icon: 'Car',
    shortDescription:
      'Safe, reliable rides to appointments, errands, and community outings — with attentive assistance along the way.',
  },
  {
    id: '4',
    name: 'Nursing Care',
    slug: 'nursing-care',
    icon: 'Stethoscope',
    shortDescription:
      'Skilled nursing support including monitoring, wound care support, and care coordination with your provider team.',
  },
  {
    id: '5',
    name: 'Care Coordination',
    slug: 'care-coordination',
    icon: 'CalendarCheck',
    shortDescription:
      'Scheduling, documentation, and communication between family, caregivers, and providers to ensure seamless care.',
  },
  {
    id: '8',
    name: 'Memory Care Support',
    slug: 'memory-care',
    icon: 'Brain',
    shortDescription:
      'Patient, specialized support for Alzheimer’s and dementia — routines, safety, and calm communication at every step.',
  },
  {
    id: '9',
    name: 'Respite Care',
    slug: 'respite-care',
    icon: 'Coffee',
    shortDescription:
      'Short-term relief for family caregivers — dependable coverage so you can rest, travel, or handle life’s demands.',
  },
  {
    id: '11',
    name: 'Consulting Services',
    slug: 'consulting',
    icon: 'MessagesSquare',
    shortDescription:
      'Guidance for care planning, resources, and navigating payment options — tailored to your situation and timeline.',
  },
  {
    id: '12',
    name: 'View All Services',
    slug: 'services',
    icon: 'ArrowRight',
    shortDescription:
      'Explore the full suite of premium in-home care and support programs offered by Fair Path Health Services.',
  },
]

export const COUNTIES_SERVED = [
  'Carroll',
  'Cobb',
  'Coweta',
  'DeKalb',
  'Douglas',
  'Fayette',
  'Forsyth',
  'Fulton',
  'Gwinnett',
  'Paulding',
] as const

/** @deprecated Use `COUNTIES_SERVED` */
export const COUNTIES: string[] = [...COUNTIES_SERVED]

export const STATS: StatItem[] = [
  { label: 'Families Served', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Satisfaction Rate', value: 98, suffix: '%' },
  { label: 'Counties', value: 7, suffix: '+' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'From the first phone call, Fair Path treated us like family. Dad’s caregiver is punctual, kind, and incredibly skilled — we finally sleep through the night knowing he is in good hands.',
    name: 'Eleanor V.',
    city: 'Decatur, GA',
    initial: 'E',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Getting started felt overwhelming until Fair Path walked us through every step. Mom keeps her dignity at home, and the office team communicates with us every single week.',
    name: 'Marcus L.',
    city: 'Peachtree City, GA',
    initial: 'M',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'After my surgery, I needed help with medications and appointments. The nurses and aides were professional, warm, and respectful of my home. I recommend Fair Path without hesitation.',
    name: 'Diane K.',
    city: 'Roswell, GA',
    initial: 'D',
    rating: 5,
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Angela Washington',
    role: 'Founder & Director of Care',
    bio: '15+ years in human services leadership. Passionate advocate for dignified, personalized elder care across Georgia communities.',
    initial: 'A',
  },
  {
    id: '2',
    name: 'Dr. Michael Washington',
    role: 'Co-Founder & Clinical Advisor',
    bio: 'Licensed pharmacist with deep expertise in geriatric medication management and chronic condition care coordination.',
    initial: 'D',
  },
  {
    id: '3',
    name: 'Sandra Mitchell',
    role: 'Head of Care Coordination',
    bio: "Certified Care Manager ensuring every plan is executed with precision, empathy, and close attention to each client's evolving needs.",
    initial: 'S',
  },
]

export const FAQ_ITEMS: FAQ[] = [
  {
    id: '1',
    question: 'What is private home care and who is it for?',
    answer:
      "Private home care provides professional support services in a person's own home — for seniors, individuals recovering from illness, or those with disabilities. It enables people to maintain independence and dignity without relocating to a facility.",
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer:
      'We accept private pay only. Our team can walk you through flexible scheduling and pricing during a free consultation.',
  },
  {
    id: '3',
    question: 'How quickly can care begin after I contact you?',
    answer:
      'In most cases we can begin care within 24–48 hours of initial contact. We prioritize urgent situations and work quickly to complete assessments and match the right caregiver to your family.',
  },
  {
    id: '4',
    question: 'How are your caregivers vetted and trained?',
    answer:
      'Every caregiver undergoes a thorough background check, reference verification, and skills assessment before joining our team. They receive ongoing training in personal care, safety protocols, and compassionate communication.',
  },
  {
    id: '5',
    question: 'Can we adjust the care plan over time?',
    answer:
      "Absolutely. Care plans are living documents that evolve with your loved one's needs. We conduct regular reassessments and maintain open communication between families, caregivers, and our coordination team.",
  },
  {
    id: '6',
    question: 'Which Georgia counties do you currently serve?',
    answer:
      "We proudly serve Carroll, Cobb, Coweta, DeKalb, Douglas, Fayette, Forsyth, Fulton, Gwinnett, and Paulding counties. Contact us if your county isn't listed — we're expanding and may still be able to help.",
  },
]

export const INSURANCE_PROGRAMS: InsuranceProgram[] = [
  { icon: 'CreditCard', name: 'Private Pay', desc: 'Flexible private payment plans tailored to your family' },
]

export const HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=85',
    alt: 'Caregiver holding the hand of an elderly client at home',
  },
  {
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=85',
    alt: 'Smiling nurse with a senior patient in a warm home setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1920&q=85',
    alt: 'Happy caregiver and elderly client enjoying time outdoors',
  },
]
