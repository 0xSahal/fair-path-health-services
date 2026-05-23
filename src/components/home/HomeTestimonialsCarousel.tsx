'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Link from 'next/link'

import { SectionTag } from '@/components/ui/SectionTag'
import { cn } from '@/lib/utils'

type T = {
  id: string
  quote: string
  name: string
  meta: string
  initial: string
  avatarBg: string
  avatarText: string
}

const items: T[] = [
  {
    id: '1',
    quote:
      "Fair Path truly changed our lives. The caregiver they matched with my mother is like a second family member. She's patient, professional, and genuinely caring. We finally have peace of mind.",
    name: 'Margaret T., Atlanta, GA',
    meta: 'Daughter of Client',
    initial: 'M',
    avatarBg: 'bg-fp-copper',
    avatarText: 'text-fp-white',
  },
  {
    id: '2',
    quote:
      'From the very first call, I knew this was different. They listened, asked the right questions, and within 3 days we had the perfect caregiver for my father. The whole family feels relieved.',
    name: 'James & Linda P., Douglasville, GA',
    meta: 'Son & Daughter-in-law of Client',
    initial: 'J',
    avatarBg: 'bg-[#6b3f1a]',
    avatarText: 'text-fp-cream',
  },
  {
    id: '4',
    quote:
      "After my wife's stroke we needed help fast. Fair Path put a plan together within a week, and the caregiver they sent has been a blessing to us both. I don't know how we would've managed without them.",
    name: 'Robert M., Marietta, GA',
    meta: 'Husband of Client',
    initial: 'R',
    avatarBg: 'bg-fp-copper',
    avatarText: 'text-fp-white',
  },
  {
    id: '5',
    quote:
      "I live out of state and used to worry constantly about Mom. Fair Path's coordinator keeps me in the loop with weekly updates and quick answers to every question. I finally sleep through the night.",
    name: 'Patricia O., Lawrenceville, GA',
    meta: 'Daughter of Client',
    initial: 'P',
    avatarBg: 'bg-[#6b3f1a]',
    avatarText: 'text-fp-cream',
  },
  {
    id: '6',
    quote:
      'Dad refused outside help for years. Fair Path matched him with a caregiver who shares his love of jazz, and now he actually looks forward to every visit. They take the time to make it personal.',
    name: 'Michael S., Decatur, GA',
    meta: 'Son of Client',
    initial: 'M',
    avatarBg: 'bg-[#a8b89a]',
    avatarText: 'text-fp-brown-dark',
  },
]

function TestimonialCard({ t }: { t: T }) {
  return (
    <article className="relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card md:p-10 lg:p-12">
      <Quote className="absolute right-6 top-6 h-9 w-9 text-fp-copper/20" aria-hidden />

      <div className="mb-6 flex justify-center gap-1 text-fp-copper">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
        ))}
      </div>

      <blockquote className="flex-1 text-center font-body text-base leading-relaxed text-fp-text-body md:text-lg">
        “{t.quote}”
      </blockquote>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div
          className={cn(
            'relative inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-fp-copper/40',
            t.avatarBg,
          )}
        >
          <span
            className={cn('font-display text-lg font-semibold', t.avatarText)}
          >
            {t.initial}
          </span>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-fp-text-primary">{t.name}</p>
          <p className="font-body text-sm text-fp-text-muted">{t.meta}</p>
        </div>
      </div>
    </article>
  )
}

export default function HomeTestimonialsCarousel() {
  const [activePage, setActivePage] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const apply = () => setIsDesktop(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const cardsPerView = isDesktop ? 2 : 1
  const pageCount = Math.max(1, Math.ceil(items.length / cardsPerView))

  // Clamp active page when viewport changes (e.g. desktop -> mobile)
  useEffect(() => {
    setActivePage((p) => (p >= pageCount ? 0 : p))
  }, [pageCount])

  const wrapPage = useCallback(
    (idx: number) => ((idx % pageCount) + pageCount) % pageCount,
    [pageCount],
  )

  const advance = useCallback(
    (direction: number) => {
      setActivePage((p) => wrapPage(p + direction))
    },
    [wrapPage],
  )

  const goTo = useCallback(
    (idx: number) => {
      setActivePage(wrapPage(idx))
    },
    [wrapPage],
  )

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setActivePage((p) => wrapPage(p + 1))
    }, 6000)
    return () => window.clearInterval(id)
  }, [paused, wrapPage])

  const visibleItems = Array.from({ length: cardsPerView }, (_, i) => {
    return items[(activePage * cardsPerView + i) % items.length]
  })

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="bg-fp-cream-dark fp-section-padding"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionTag className="text-center">What Families Are Saying</SectionTag>
          <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
            Real Stories from Real Families
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 max-w-[880px] lg:max-w-[1100px]">
          <div className="relative">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => advance(-1)}
              className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 rounded-full border border-fp-border bg-fp-white p-3 text-fp-brown-dark shadow-card transition-colors hover:border-fp-copper md:inline-flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => advance(1)}
              className="absolute right-0 top-1/2 z-10 hidden translate-x-2 -translate-y-1/2 rounded-full border border-fp-border bg-fp-white p-3 text-fp-brown-dark shadow-card transition-colors hover:border-fp-copper md:inline-flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${isDesktop ? 'd' : 'm'}-${activePage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
              >
                {visibleItems.map((t, i) => (
                  <TestimonialCard key={`${activePage}-${i}-${t.id}`} t={t} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Testimonial page ${i + 1}`}
                aria-current={activePage === i}
                onClick={() => goTo(i)}
                className="h-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper"
              >
                <span
                  className={
                    activePage === i
                      ? 'block h-2.5 w-8 rounded-full bg-fp-copper'
                      : 'block h-2.5 w-2.5 rounded-full bg-fp-border'
                  }
                />
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <Link
              href="/resources/faq"
              className="font-body text-sm font-semibold text-fp-copper underline-offset-4 transition-colors hover:text-fp-copper-dark hover:underline"
            >
              Read More Reviews →
            </Link>
            <div className="inline-flex items-center gap-2 rounded-pill border border-fp-border bg-fp-white px-4 py-2 shadow-sm">
              <span className="font-body text-sm font-semibold text-fp-text-primary">Google</span>
              <span className="text-fp-copper">5.0</span>
              <div className="flex text-fp-copper">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
