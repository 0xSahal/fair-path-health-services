export type BlogPost = {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  image: { src: string; alt: string }
  author: { name: string; title: string }
  content: { type: 'p' | 'h2' | 'ul'; text?: string; items?: string[] }[]
  relatedSlugs: string[]
  seo: { title: string; description: string; keywords: string[] }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '10-signs-loved-one-may-need-in-home-care',
    title: '10 Signs Your Loved One May Need In-Home Care',
    category: 'Care Planning',
    date: '2026-05-01',
    excerpt:
      'If something feels “off,” trust your instincts. Here are ten common signs families notice before choosing in-home support.',
    image: {
      src: '/images/service.webp',
      alt: 'In-home care and support for families in Georgia',
    },
    author: { name: 'Fair Path Care Team', title: 'Care Coordination' },
    content: [
      {
        type: 'p',
        text: 'The goal of in-home care is simple: keep your loved one safe, comfortable, and supported without taking away dignity or independence.',
      },
      { type: 'h2', text: 'Common signs families notice' },
      {
        type: 'ul',
        items: [
          'Frequent falls or fear of falling',
          'Skipping meals or weight loss',
          'Medication confusion or missed doses',
          'Poor hygiene or neglected grooming',
          'Trouble with mobility or transfers',
          'Isolation, mood changes, or anxiety',
          'Missed appointments or inability to drive',
          'Home safety issues (clutter, spoiled food, hazards)',
          'Memory lapses affecting daily life',
          'Caregiver burnout in the family',
        ],
      },
      {
        type: 'p',
        text: 'If you’re seeing more than one of these signs, a free assessment can help you understand the safest next step.',
      },
    ],
    relatedSlugs: [
      'how-to-talk-to-aging-parents-about-accepting-help',
      'difference-between-hha-and-pca',
    ],
    seo: {
      title: '10 Signs Your Loved One May Need In‑Home Care | Fair Path Health Services',
      description:
        'Learn the most common signs seniors may need in-home care: falls risk, medication issues, isolation, missed meals, and more — plus what to do next.',
      keywords: ['in-home care signs', 'senior care', 'care planning', 'home care Georgia'],
    },
  },
  {
    slug: 'how-to-talk-to-aging-parents-about-accepting-help',
    title: 'How to Talk to Aging Parents About Accepting Help at Home',
    category: 'Family Support',
    date: '2026-04-22',
    excerpt:
      'A respectful conversation can make all the difference. Here are practical scripts and strategies that protect dignity.',
    image: {
      src: '/images/service-companian-homemaking.webp',
      alt: 'Family-minded companion support and conversation at home',
    },
    author: { name: 'Fair Path Care Team', title: 'Family Support' },
    content: [
      {
        type: 'p',
        text: 'Most parents resist help for one reason: they don’t want to lose control. The best conversations preserve choice and focus on safety.',
      },
      { type: 'h2', text: 'Start with values, not tasks' },
      {
        type: 'p',
        text: 'Ask what matters most: staying at home, privacy, routines, and independence. Then connect support to those priorities.',
      },
      { type: 'h2', text: 'Offer a trial, not a lifetime commitment' },
      {
        type: 'p',
        text: 'A two-week plan is less intimidating than “we’re hiring help.” Build confidence, then adjust.',
      },
    ],
    relatedSlugs: [
      '10-signs-loved-one-may-need-in-home-care',
      'memory-care-at-home-strategies-that-work',
    ],
    seo: {
      title: 'How to Talk to Aging Parents About Help | Fair Path Health Services',
      description:
        'Practical strategies for discussing in-home care with aging parents while preserving dignity, autonomy, and family trust.',
      keywords: ['talk to parents about home care', 'family caregiver', 'senior support'],
    },
  },
  {
    slug: 'understanding-georgia-medicaid-ccsp',
    title: 'Understanding Georgia Medicaid CCSP: What You Need to Know',
    category: 'Payment & Insurance',
    date: '2026-04-10',
    excerpt:
      'CCSP can help families access support at home. Here’s a plain-language overview and how Fair Path helps you navigate the process.',
    image: {
      src: '/images/payment.webp',
      alt: 'Planning payment and Medicaid coverage for care at home',
    },
    author: { name: 'Fair Path Care Team', title: 'Care Coordination' },
    content: [
      { type: 'p', text: 'CCSP is designed to help eligible Georgians receive care services while remaining at home.' },
      { type: 'h2', text: 'What CCSP generally supports' },
      { type: 'ul', items: ['Personal care support', 'Help with daily routines', 'Care coordination and planning'] },
      { type: 'p', text: 'Eligibility depends on care needs and financial guidelines. A free consultation helps clarify the best next step.' },
    ],
    relatedSlugs: ['difference-between-hha-and-pca'],
    seo: {
      title: 'Georgia Medicaid CCSP Overview | Fair Path Health Services',
      description:
        'A clear overview of Georgia Medicaid CCSP and how it can support in-home care — plus how families can get guidance and next steps.',
      keywords: ['Georgia Medicaid CCSP', 'CCSP program', 'Medicaid home care'],
    },
  },
  {
    slug: 'difference-between-hha-and-pca',
    title: 'The Difference Between a Home Health Aide and a Personal Care Aide',
    category: 'Our Services',
    date: '2026-03-28',
    excerpt:
      'Not all caregiver roles are the same. Learn what each role typically supports and how to choose the right fit.',
    image: {
      src: '/images/service-personal-care.webp',
      alt: 'Personal care and daily living support from a home caregiver',
    },
    author: { name: 'Fair Path Care Team', title: 'Training & Quality' },
    content: [
      { type: 'p', text: 'Families often use HHA and PCA interchangeably, but the responsibilities can differ depending on care needs and supervision.' },
      { type: 'h2', text: 'How to decide' },
      { type: 'ul', items: ['Start with care needs', 'Consider safety and mobility', 'Plan for changing needs over time'] },
    ],
    relatedSlugs: ['10-signs-loved-one-may-need-in-home-care'],
    seo: {
      title: 'HHA vs PCA | Fair Path Health Services',
      description:
        'Understand the difference between a home health aide and a personal care aide — and how to choose the right in-home support for your family.',
      keywords: ['HHA vs PCA', 'home health aide', 'personal care aide'],
    },
  },
  {
    slug: 'memory-care-at-home-strategies-that-work',
    title: 'Memory Care at Home: Strategies That Actually Work',
    category: 'Specialized Care',
    date: '2026-03-14',
    excerpt:
      'Routines, gentle communication, and environmental safety can reduce stress for clients and families. Here’s where to start.',
    image: {
      src: '/images/service-memory-care.webp',
      alt: 'Supportive in-home memory care and a calm environment',
    },
    author: { name: 'Fair Path Care Team', title: 'Specialized Programs' },
    content: [
      { type: 'p', text: 'Memory care at home works best when it’s predictable: consistent routines, calm cues, and safety-focused environments.' },
      { type: 'h2', text: 'Three foundations' },
      { type: 'ul', items: ['Structure and routine', 'Safety and supervision', 'Family support and respite'] },
    ],
    relatedSlugs: ['how-to-talk-to-aging-parents-about-accepting-help'],
    seo: {
      title: 'Memory Care at Home Strategies | Fair Path Health Services',
      description:
        'Practical strategies for memory care at home: routines, safety, communication, and caregiver support for dementia and Alzheimer’s.',
      keywords: ['memory care at home', 'dementia care', 'alzheimers home care'],
    },
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null
}

