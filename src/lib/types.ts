/** Primary navigation entry; optional `children` for dropdowns / mega-menus. */
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

/** In-home service line item (marketing + future detail routes). */
export interface Service {
  id: string
  name: string
  slug: string
  /** Lucide icon component name, e.g. `"HeartHandshake"` */
  icon: string
  shortDescription: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  city: string
  initial: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initial: string
}

/** Careers / hiring (future `/careers` page). */
export interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'PRN' | 'Contract'
  slug: string
  postedAt: string
  excerpt: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface StatItem {
  label: string
  value: number
  suffix: string
  prefix?: string
}

export interface InsuranceProgram {
  icon: string
  name: string
  desc: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  county: string
  message: string
}
