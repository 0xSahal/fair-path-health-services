'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

import SectionHeader from '@/components/shared/SectionHeader'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function TestimonialsSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  )
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplayRef.current],
  )
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (idx: number) => emblaApi?.scrollTo(idx),
    [emblaApi],
  )

  const handlePauseHover = () => autoplayRef.current?.stop()
  const handleResumeHover = () => autoplayRef.current?.play()

  return (
    <section
      id="testimonials"
      aria-label="Family testimonials"
      className="bg-blush/20 py-section"
    >
      <div className="section-container">
        <SectionHeader
          label="Real Families. Real Stories."
          title="What Families Are Saying"
          align="center"
        />

        <div
          className="mx-auto mt-12 max-w-[800px]"
          onMouseEnter={handlePauseHover}
          onMouseLeave={handleResumeHover}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] px-2"
                  role="group"
                  aria-roledescription="testimonial"
                  aria-label={`${t.name} from ${t.city}`}
                >
                  <article className="rounded-card bg-white p-10 shadow-card lg:p-14">
                    <div className="mb-6 flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-fp-copper text-fp-copper"
                          aria-hidden
                        />
                      ))}
                      <span className="sr-only">{t.rating} out of 5 stars</span>
                    </div>

                    <span
                      aria-hidden
                      className="mb-3 block font-accent text-[80px] leading-[0.7] text-roseGold"
                    >
                      &ldquo;
                    </span>

                    <blockquote className="mb-8 font-accent text-[22px] italic leading-[1.65] text-charcoal lg:text-[26px]">
                      {t.quote}
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div
                        aria-hidden
                        className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-mahogany font-display text-[20px] font-bold text-white"
                      >
                        {t.initial}
                      </div>
                      <div>
                        <p className="font-body text-[16px] font-semibold text-mahogany">
                          {t.name}
                        </p>
                        <p className="mt-0.5 font-body text-[13px] text-slate">
                          {t.city}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blush bg-white text-mahogany transition-all hover:border-mahogany hover:bg-mahogany hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={selected === i}
                  onClick={() => scrollTo(i)}
                  className="h-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2"
                >
                  <motion.span
                    layout
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      'block h-2 rounded-full transition-colors',
                      selected === i ? 'w-6 bg-mahogany' : 'w-2 bg-blush',
                    )}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blush bg-white text-mahogany transition-all hover:border-mahogany hover:bg-mahogany hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
