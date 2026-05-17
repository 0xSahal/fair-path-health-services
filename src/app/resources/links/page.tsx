import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { HELPFUL_LINKS } from '@/lib/resources-data'

export const metadata: Metadata = {
  title: 'Helpful Links | Fair Path Health Services',
  description:
    'Helpful healthcare resources for families: government, care programs, veterans benefits, and local aging support links.',
}

export default function ResourcesLinksPage() {
  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title="Helpful Resources"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Helpful Links', href: '/resources/links' },
          ]}
          imageSrc="/images/helpful-resources.webp"
          imageAlt="Helpful healthcare resources and links for Georgia families"
          titleAccent="service"
          serviceBanner
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Helpful links">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Resources</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Helpful Healthcare Resources
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Curated links for families exploring care programs, public health guidance, and benefits.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {Object.entries(HELPFUL_LINKS).map(([group, links], i) => (
                <Reveal
                  key={group}
                  delay={i * 0.04}
                  className="rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card"
                >
                  <h2 className="font-display text-2xl font-semibold text-fp-text-primary">
                    {group}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-body text-[15px] font-semibold text-fp-copper transition-colors hover:text-fp-copper-dark"
                        >
                          {l.label}
                          <ExternalLink className="h-4 w-4" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

