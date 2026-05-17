'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { FAQ_CATEGORIES } from '@/lib/resources-data'
import { cn } from '@/lib/utils'

type Item = { q: string; a: string; category: string }

export default function FaqClient() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState<string | null>(null)

  const normalized = query.trim().toLowerCase()

  const flat: Item[] = useMemo(() => {
    return FAQ_CATEGORIES.flatMap((c) =>
      c.items.map((i) => ({ ...i, category: c.category })),
    )
  }, [])

  const filtered = useMemo(() => {
    if (!normalized) return FAQ_CATEGORIES
    return FAQ_CATEGORIES.map((c) => ({
      category: c.category,
      items: c.items.filter(
        (i) =>
          i.q.toLowerCase().includes(normalized) ||
          i.a.toLowerCase().includes(normalized),
      ),
    })).filter((c) => c.items.length)
  }, [normalized])

  const count = normalized ? filtered.reduce((acc, c) => acc + c.items.length, 0) : flat.length

  return (
    <div className="bg-fp-cream fp-section-padding">
      <div className="section-container">
        <Reveal className="mx-auto max-w-[800px] text-center">
          <SectionTag className="text-center">Resources</SectionTag>
          <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 font-body text-lg text-fp-text-muted">
            Clear answers for families exploring in-home care.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-10 max-w-[800px]">
          <label className="relative block">
            <span className="sr-only">Search FAQs</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-fp-text-muted/60" aria-hidden />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-lg border border-solid border-[#E8DDD0] bg-fp-white py-3 px-4 pl-12 font-body text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
            />
          </label>
          <p className="mt-3 font-body text-sm text-fp-text-muted">
            Showing {count} question{count === 1 ? '' : 's'}.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-[800px] space-y-10">
          {filtered.map((cat) => (
            <Reveal key={cat.category}>
              <div className="rounded-[12px] border border-solid border-[#E8DDD0] bg-[#FAF6F1] p-[28px]">
                <h2 className="border-l-[3px] border-solid border-l-[#C9A96E] pl-3 font-display text-[18px] font-bold text-fp-text-primary">
                  {cat.category}
                </h2>

                <div className="mt-6 divide-y divide-fp-border/80">
                  {cat.items.map((item) => {
                    const id = `${cat.category}:${item.q}`
                    const isOpen = open === id
                    return (
                      <div key={id} className="py-4">
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : id)}
                          className={cn(
                            'flex w-full items-center justify-between gap-4 text-left',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2',
                          )}
                          aria-expanded={isOpen}
                        >
                          <span className="font-body text-[16px] font-semibold text-fp-text-primary">
                            {item.q}
                          </span>
                          <ChevronDown
                            className={cn(
                              'h-5 w-5 shrink-0 text-fp-copper transition-transform',
                              isOpen && 'rotate-180',
                            )}
                            aria-hidden
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pt-3 font-body text-[15px] leading-relaxed text-fp-text-muted">
                                {item.a}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

