import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { BLOG_POSTS } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog | Fair Path Health Services',
  description:
    'Insights, tips, and resources for families exploring in-home care in Georgia.',
}

export default function BlogIndexPage() {
  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title="Blog"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
          ]}
          imageSrc="/images/blog.webp"
          imageAlt="Blog and resources for families exploring in-home care"
          titleAccent="service"
          serviceBanner
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Blog posts">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Resources</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Insights, Tips & Resources for Families
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Practical guidance designed to help you make confident care decisions.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.slice(0, 6).map((p, i) => (
                <Reveal
                  key={p.slug}
                  delay={i * 0.04}
                  className="overflow-hidden rounded-2xl border border-fp-border bg-fp-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-fp-copper/45 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-pill bg-fp-copper/12 px-3 py-1 font-body text-xs font-bold uppercase tracking-wide text-fp-copper">
                        {p.category}
                      </span>
                      <span className="font-body text-xs text-fp-text-muted">
                        {new Date(p.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-semibold text-fp-text-primary">
                      {p.title}
                    </h2>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-fp-text-muted">
                      {p.excerpt}
                    </p>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="mt-5 inline-flex font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                    >
                      Read More →
                    </Link>
                  </div>
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

