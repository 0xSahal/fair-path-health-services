export type TestimonialItem = {
  id: string
  name: string
  city: string
  role: string
  serviceSlug:
    | 'personal-care'
    | 'nursing-care'
    | 'companion-homemaking'
    | 'transportation'
    | 'care-coordination'
    | 'memory-care'
    | 'respite-care'
    | 'consulting'
    | 'post-acute-care'
  rating: 5 | 4
  quote: string
}

export const TESTIMONIALS_PAGE: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Margaret T.',
    city: 'Atlanta, GA',
    role: 'Daughter of Client',
    serviceSlug: 'personal-care',
    rating: 5,
    quote:
      "Fair Path truly changed our lives. The caregiver they matched with my mother is like a second family member, patient, professional, and genuinely caring. We finally have peace of mind.",
  },
  {
    id: 't2',
    name: 'James & Linda P.',
    city: 'Douglasville, GA',
    role: 'Family of Client',
    serviceSlug: 'care-coordination',
    rating: 5,
    quote:
      'From the very first call, I knew this was different. They listened, asked the right questions, and within 3 days we had the perfect caregiver. The whole family feels relieved.',
  },
  {
    id: 't4',
    name: 'Eleanor V.',
    city: 'Decatur, GA',
    role: 'Daughter of Client',
    serviceSlug: 'nursing-care',
    rating: 5,
    quote:
      'After discharge, we needed skilled support at home. The nurse was thorough and calm, and we felt safe and supported from day one.',
  },
  {
    id: 't5',
    name: 'Marcus L.',
    city: 'Peachtree City, GA',
    role: 'Family of Client',
    serviceSlug: 'companion-homemaking',
    rating: 5,
    quote:
      'The companionship and homemaking support has been a blessing. The home is tidy, meals are handled, and my mom looks forward to visits.',
  },
  {
    id: 't7',
    name: 'Robert K.',
    city: 'Sandy Springs, GA',
    role: 'Client',
    serviceSlug: 'transportation',
    rating: 5,
    quote:
      "Reliable rides made a huge difference. I never miss appointments, and the caregiver is always respectful and on time.",
  },
  {
    id: 't8',
    name: 'Cheryl N.',
    city: 'Lawrenceville, GA',
    role: 'Spouse of Client',
    serviceSlug: 'memory-care',
    rating: 5,
    quote:
      'Their memory care support brought structure and calm back into our home. I feel supported, not alone.',
  },
  {
    id: 't9',
    name: 'Tamika J.',
    city: 'Roswell, GA',
    role: 'Family Caregiver',
    serviceSlug: 'respite-care',
    rating: 5,
    quote:
      "Respite care gave me the break I desperately needed. I could rest knowing my father was safe and cared for.",
  },
  {
    id: 't11',
    name: 'Samantha R.',
    city: 'Newnan, GA',
    role: 'Daughter of Client',
    serviceSlug: 'post-acute-care',
    rating: 5,
    quote:
      'The transition home after rehab was smoother than we expected. Their support kept routines consistent and reduced stress for everyone.',
  },
  {
    id: 't12',
    name: 'Calvin M.',
    city: 'Kennesaw, GA',
    role: 'Family of Client',
    serviceSlug: 'consulting',
    rating: 5,
    quote:
      'We were overwhelmed by options. Their consulting helped us choose the right plan and feel confident moving forward.',
  },
]

