import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { BLOG_POSTS } from '@/lib/blog-data'
import { SERVICES } from '@/lib/services-data'
import { SectionTag } from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Sitemap | Fair Path Health Services',
  description: 'Browse all pages on the Fair Path Health Services website.',
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function SitemapHtmlPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Sitemap', href: '/sitemap' },
  ]

  const sections: { title: string; links: { label: string; href: string }[] }[] =
    [
      {
        title: 'Company',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Contact', href: '/contact' },
          { label: 'Book Appointment', href: '/contact/book-appointment' },
          { label: 'Refer a Client', href: '/contact/refer-client' },
          { label: 'Survey', href: '/contact/survey' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'FAQ', href: '/resources/faq' },
          { label: 'Helpful Links', href: '/resources/links' },
          { label: 'Payment & Insurance', href: '/payment' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Other',
        links: [
          { label: 'Services Directory', href: '/services' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: 'Testimonials', href: '/testimonials' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Do Not Sell', href: '/do-not-sell' },
          { label: 'Accessibility', href: '/accessibility' },
        ],
      },
    ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Sitemap"
          breadcrumb={breadcrumb}
          imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Website sitemap"
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Sitemap">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Navigation</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Sitemap
              </h1>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 0.03}
                  className="rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card"
                >
                  <h2 className="font-display text-xl font-semibold text-fp-text-primary">
                    {s.title}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {s.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card">
              <h2 className="font-display text-xl font-semibold text-fp-text-primary">
                Services
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-6 rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card">
              <h2 className="font-display text-xl font-semibold text-fp-text-primary">
                Blog posts
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {BLOG_POSTS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

