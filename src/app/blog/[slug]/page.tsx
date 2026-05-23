import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog-data'
import { SectionTag } from '@/components/ui/SectionTag'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      images: [{ url: post.image.src, width: 1200, height: 630, alt: post.image.alt }],
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return <BlogPostInner params={params} />
}

async function BlogPostInner({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  const related = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((v): v is NonNullable<typeof v> => Boolean(v))
    .slice(0, 3)

  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title={post.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
          imageSrc={post.image.src}
          imageAlt={post.image.alt}
          titleAccent="service"
          serviceBanner
        />

        <article className="bg-fp-cream fp-section-padding">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-pill bg-fp-copper/12 px-3 py-1 font-body text-xs font-bold uppercase tracking-wide text-fp-copper">
                  {post.category}
                </span>
                <span className="font-body text-xs text-fp-text-muted">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>

              <div className="mt-10 space-y-6">
                {post.content.map((block, idx) => {
                  if (block.type === 'h2') {
                    return (
                      <h2
                        key={idx}
                        className="font-display text-2xl font-semibold text-fp-text-primary"
                      >
                        {block.text}
                      </h2>
                    )
                  }
                  if (block.type === 'ul') {
                    return (
                      <ul key={idx} className="list-disc space-y-2 pl-6 font-body text-fp-text-body">
                        {(block.items ?? []).map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p
                      key={idx}
                      className="font-body text-[16px] leading-relaxed text-fp-text-body"
                    >
                      {block.text}
                    </p>
                  )
                })}
              </div>

              <div className="mt-12 rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card">
                <SectionTag>About the author</SectionTag>
                <p className="mt-2 font-display text-xl font-semibold text-fp-text-primary">
                  {post.author.name}
                </p>
                <p className="mt-1 font-body text-sm text-fp-text-muted">{post.author.title}</p>
                <p className="mt-4 font-body text-[15px] leading-relaxed text-fp-text-body">
                  Our team shares guidance designed to help families make safe, confident decisions, with dignity and peace of mind at the center.
                </p>
              </div>
            </Reveal>

            {related.length ? (
              <section className="mt-14">
                <Reveal className="mx-auto max-w-3xl">
                  <h3 className="font-display text-2xl font-semibold text-fp-text-primary">
                    Related posts
                  </h3>
                </Reveal>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {related.map((p, i) => (
                    <Reveal
                      key={p.slug}
                      delay={i * 0.05}
                      className="overflow-hidden rounded-2xl border border-fp-border bg-fp-white shadow-card"
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={p.image.src}
                          alt={p.image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <p className="font-body text-xs font-bold uppercase tracking-wide text-fp-copper">
                          {p.category}
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold text-fp-text-primary">
                          {p.title}
                        </p>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="mt-4 inline-flex font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                        >
                          Read →
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

