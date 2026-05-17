import type { MetadataRoute } from 'next'

import { BLOG_POSTS } from '@/lib/blog-data'
import { SERVICES } from '@/lib/services-data'

const siteUrl = 'https://www.fairpathhealth.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/careers',
    '/payment',
    '/resources/faq',
    '/resources/links',
    '/blog',
    '/service-areas',
    '/contact',
    '/contact/book-appointment',
    '/contact/refer-client',
    '/contact/survey',
    '/testimonials',
    '/privacy-policy',
    '/do-not-sell',
    '/accessibility',
    '/sitemap',
  ]

  const now = new Date()
  return [
    ...staticRoutes.map((path) => ({
      url: new URL(path, siteUrl).toString(),
      lastModified: now,
    })),
    ...SERVICES.map((s) => ({
      url: new URL(`/services/${s.slug}`, siteUrl).toString(),
      lastModified: now,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: new URL(`/blog/${p.slug}`, siteUrl).toString(),
      lastModified: new Date(p.date),
    })),
  ]
}

