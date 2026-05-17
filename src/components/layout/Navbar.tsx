'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Accessibility,
  Brain,
  CalendarCheck,
  Car,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Coffee,
  HeartHandshake,
  Home,
  Medal,
  Menu,
  MessagesSquare,
  Newspaper,
  Pill,
  Stethoscope,
  X,
  Link as LinkIcon,
  type LucideIcon,
} from 'lucide-react'

import BrandLogo from '@/components/shared/BrandLogo'
import { BRAND_LOGO, NAV_ITEMS, SERVICES_MEGA_MENU, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/Button'

const IconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Home,
  Car,
  Stethoscope,
  CalendarCheck,
  Pill,
  Accessibility,
  Brain,
  Coffee,
  Medal,
  MessagesSquare,
}

const RESOURCE_DROPDOWN_ICONS: Record<string, LucideIcon> = {
  'Blog & News': Newspaper,
  FAQ: CircleHelp,
  'Helpful Links': LinkIcon,
}

const dropdownPanelMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
} as const

const dropdownPanelClass = cn(
  'relative rounded-xl border border-fp-copper/20 bg-fp-brown-dark p-6',
  'shadow-[0_20px_60px_rgba(0,0,0,0.4)]',
)

const dropdownItemRowClass = cn(
  'group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200',
  'hover:bg-fp-copper/10',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark',
)

const dropdownIconWrapClass =
  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-fp-copper/15 text-fp-copper-light'

/** Space between nav trigger and dropdown panel (both desktop dropdowns). */
const desktopDropdownShellClass =
  'absolute left-1/2 top-full z-50 flex -translate-x-1/2 flex-col items-center pt-5'

const desktopDropdownBridgeClass = 'pointer-events-auto absolute inset-x-0 top-0 h-5'

function DropdownGapCaret() {
  return (
    <div className="pointer-events-none mb-2 flex shrink-0 justify-center" aria-hidden>
      <div className="h-0 w-0 border-x-[7px] border-b-[7px] border-x-transparent border-b-fp-copper/80" />
    </div>
  )
}

function ServicesMegaMenuPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className={cn('relative', dropdownPanelClass)}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {SERVICES_MEGA_MENU.columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-4 border-b border-fp-copper/15 pb-4 font-body text-xs font-semibold uppercase tracking-widest text-fp-copper-light">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-1">
              {col.items.map((l) => {
                const Icon = IconMap[l.icon] ?? HeartHandshake
                return (
                  <li key={l.href}>
                    <Link href={l.href} className={dropdownItemRowClass} onClick={onNavigate}>
                      <span className={dropdownIconWrapClass}>
                        <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      </span>
                      <span className="text-left text-sm font-medium text-fp-cream group-hover:text-fp-cream">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-fp-copper/15 pt-4">
        <div className="flex justify-center">
          <Link
            href={SERVICES_MEGA_MENU.viewAllHref}
            className={cn(
              'font-body text-xs font-semibold uppercase tracking-wider text-fp-copper-light transition-colors',
              'hover:text-fp-cream',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark',
            )}
            onClick={onNavigate}
          >
            View all services →
          </Link>
        </div>
      </div>
    </div>
  )
}

/**
 * Site-wide header: fixed to the top while scrolling, with a spacer so content
 * flows as navbar → hero → sections. Always dark brown — no hero overlay.
 */
export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<'services' | 'resources' | null>(null)

  const openTimer = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    setOpenDropdown(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!openDropdown) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openDropdown])

  const dropdownItems = useMemo(() => {
    const byLabel = new Map(NAV_ITEMS.map((i) => [i.label, i] as const))
    return { resources: byLabel.get('Resources') } as const
  }, [])

  const startOpen = (key: NonNullable<typeof openDropdown>) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    if (openTimer.current) window.clearTimeout(openTimer.current)
    openTimer.current = window.setTimeout(() => setOpenDropdown(key), 120)
  }

  const startClose = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current)
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 160)
  }

  const linkBase = cn(
    'font-body text-[13px] font-semibold text-fp-cream/90 transition-colors xl:text-[14px]',
    'hover:text-fp-cream',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark',
  )

  const desktopLink = (active: boolean) =>
    cn(linkBase, active && 'border-b-2 border-fp-copper pb-0.5 text-fp-cream')

  const isActiveHref = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      {/* Fixed bar stays on top while scrolling; spacer below reserves layout space (navbar → hero → sections). */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-fp-brown-dark',
          'pt-[env(safe-area-inset-top,0px)]',
          'shadow-[0_4px_24px_rgba(13,13,13,0.18)]',
        )}
        aria-label="Site header"
      >
        <div className="section-container flex min-h-[var(--fp-nav-height)] items-center justify-between gap-3 py-3 sm:gap-4 sm:py-2.5 lg:py-3">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark"
            aria-label={SITE_CONFIG.name}
          >
            <Image
              src={BRAND_LOGO.src}
              alt={BRAND_LOGO.alt}
              width={72}
              height={72}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
              style={{ filter: 'brightness(1.15) contrast(1.05) saturate(1.08)' }}
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
            {NAV_ITEMS.map((item) => {
              const key =
                item.label === 'Services' ? 'services' : item.label === 'Resources' ? 'resources' : null

              if (!key) {
                return (
                  <Link key={item.href} href={item.href} className={desktopLink(isActiveHref(item.href))}>
                    {item.label}
                  </Link>
                )
              }

              if (key === 'services') {
                return (
                  <motion.div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => startOpen('services')}
                    onMouseLeave={startClose}
                  >
                    <button
                      type="button"
                      className={cn(
                        desktopLink(openDropdown === 'services' || isActiveHref(item.href)),
                        'inline-flex items-center gap-1.5',
                      )}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === 'services'}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 opacity-80 transition-transform duration-200',
                          openDropdown === 'services' && 'rotate-180',
                        )}
                        aria-hidden
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === 'services' ? (
                        <motion.div
                          className={desktopDropdownShellClass}
                          onMouseEnter={() => startOpen('services')}
                          onMouseLeave={startClose}
                        >
                          <div className={desktopDropdownBridgeClass} aria-hidden />
                          <DropdownGapCaret />
                          <motion.div
                            {...dropdownPanelMotion}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="pointer-events-auto w-[min(92vw,900px)]"
                          >
                            <ServicesMegaMenuPanel onNavigate={() => setOpenDropdown(null)} />
                          </motion.div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => startOpen('resources')}
                  onMouseLeave={startClose}
                >
                  <button
                    type="button"
                    className={cn(
                      desktopLink(openDropdown === 'resources' || isActiveHref(item.href)),
                      'inline-flex items-center gap-1.5',
                    )}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === 'resources'}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 opacity-80 transition-transform duration-200',
                        openDropdown === 'resources' && 'rotate-180',
                      )}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === 'resources' ? (
                      <motion.div
                        className={desktopDropdownShellClass}
                        onMouseEnter={() => startOpen('resources')}
                        onMouseLeave={startClose}
                      >
                        <div className={desktopDropdownBridgeClass} aria-hidden />
                        <DropdownGapCaret />
                        <motion.div
                          {...dropdownPanelMotion}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="pointer-events-auto w-[min(92vw,280px)]"
                        >
                          <div className={cn('relative', dropdownPanelClass)}>
                            <ul className="flex flex-col gap-1">
                              {(dropdownItems.resources?.children ?? []).map((child) => {
                                const Icon = RESOURCE_DROPDOWN_ICONS[child.label] ?? Newspaper
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      className={dropdownItemRowClass}
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <span className={dropdownIconWrapClass}>
                                        <Icon className="h-4 w-4 shrink-0" aria-hidden />
                                      </span>
                                      <span className="text-sm font-medium text-fp-cream">{child.label}</span>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </motion.div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </nav>

          <div className="hidden items-center xl:flex">
            <Button
              href="/contact/book-appointment"
              variant="primary"
              size="sm"
              className="normal-case tracking-normal"
            >
              Book Free Consultation
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-lg text-fp-cream transition-colors xl:hidden',
              'hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark',
            )}
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </header>

      <div
        className="pointer-events-none w-full shrink-0"
        style={{ height: 'calc(env(safe-area-inset-top, 0px) + var(--fp-nav-height))' }}
        aria-hidden
      />

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="drawer"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] overflow-hidden overscroll-none xl:hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-fp-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                'absolute inset-y-0 right-0 flex h-[100svh] max-h-[100dvh]',
                'w-[min(21rem,_100vw)] flex-col overflow-x-hidden overscroll-none sm:w-[min(22rem,_100vw)]',
                'border-l border-white/10 bg-fp-brown-dark text-fp-cream',
                'shadow-[-12px_0_40px_rgba(13,13,13,0.18)]',
              )}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              onClick={(e) => e.stopPropagation()}
            >
              <header
                className={cn(
                  'flex shrink-0 items-center justify-between gap-4',
                  'border-b border-white/10 px-4 py-3.5',
                  'pt-[max(0.875rem,env(safe-area-inset-top))]',
                )}
              >
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark"
                  aria-label={SITE_CONFIG.name}
                >
                  <span
                    className="-ml-0.5 inline-flex items-center py-1"
                    style={{
                      filter:
                        'brightness(1.18) contrast(1.06) saturate(1.06) drop-shadow(0 1px 3px rgb(0 0 0 / 0.35))',
                    }}
                  >
                    <BrandLogo
                      boxClassName="h-[44px] w-[150px]"
                      sizes="150px"
                      className="object-contain object-left"
                    />
                  </span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 min-w-[44px] items-center justify-center rounded-md text-fp-cream/90 transition-colors hover:bg-white/10 hover:text-fp-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark"
                >
                  <X className="h-5 w-5" aria-hidden strokeWidth={2} />
                </button>
              </header>

              <nav
                aria-label="Mobile primary"
                className="min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch]"
              >
                <Accordion type="single" collapsible className="w-full">
                  {NAV_ITEMS.map((item) =>
                    item.children?.length ? (
                      <AccordionItem
                        key={item.label}
                        value={item.label}
                        className="border-0 border-b border-white/10 bg-transparent"
                      >
                        <AccordionTrigger
                          className={cn(
                            'min-h-[3rem] py-3 pl-4 pr-3 font-body text-[15px] font-medium text-fp-cream',
                            'hover:bg-white/[0.04] hover:no-underline',
                            '[&[data-state=open]]:bg-white/[0.03]',
                            '[&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0 [&>svg]:text-fp-cream/40',
                          )}
                        >
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="border-t border-white/[0.06] bg-fp-black/10 px-0 pb-0 pt-0 text-fp-cream/90">
                          {item.label === 'Services' ? (
                            <div className="py-1">
                              {SERVICES_MEGA_MENU.columns.map((col) => (
                                <div key={col.heading} className="border-b border-white/[0.06] last:border-b-0">
                                  <p className="px-4 pb-1 pt-3 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-fp-cream/45">
                                    {col.heading}
                                  </p>
                                  <ul>
                                    {col.items.map((l) => {
                                      const Icon = IconMap[l.icon] ?? HeartHandshake
                                      return (
                                        <li key={l.href}>
                                          <Link
                                            href={l.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={cn(
                                              'flex min-h-[44px] items-center gap-3 px-4 py-2.5 font-body text-[15px] leading-snug text-fp-cream/90',
                                              'transition-colors hover:bg-white/[0.06] hover:text-fp-cream',
                                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fp-copper',
                                            )}
                                          >
                                            <Icon
                                              className="h-4 w-4 shrink-0 text-fp-copper/80"
                                              aria-hidden
                                              strokeWidth={1.75}
                                            />
                                            {l.label}
                                          </Link>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              ))}
                              <div className="border-t border-white/[0.06] px-4 py-3">
                                <Link
                                  href={SERVICES_MEGA_MENU.viewAllHref}
                                  onClick={() => setMobileOpen(false)}
                                  className="inline-flex items-center gap-1 font-body text-[14px] font-semibold text-fp-copper-light hover:text-fp-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark"
                                >
                                  View all services
                                  <ChevronRight className="h-4 w-4" aria-hidden strokeWidth={2} />
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <ul className="py-1">
                              {item.children.map((child) => (
                                <li
                                  key={child.href}
                                  className="border-b border-white/[0.05] last:border-b-0"
                                >
                                  <Link
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                      'flex min-h-[44px] items-center px-4 py-2.5 font-body text-[15px] text-fp-cream/90',
                                      'transition-colors hover:bg-white/[0.06] hover:text-fp-cream',
                                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fp-copper',
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={item.href} className="border-b border-white/10 last:border-b-0">
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'flex min-h-[3rem] items-center justify-between px-4 font-body text-[15px] font-medium text-fp-cream',
                            'transition-colors hover:bg-white/[0.04]',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fp-copper',
                            isActiveHref(item.href) && 'bg-white/[0.04] text-fp-cream',
                          )}
                        >
                          {item.label}
                          <ChevronRight
                            className="h-4 w-4 shrink-0 text-fp-cream/35"
                            aria-hidden
                            strokeWidth={2}
                          />
                        </Link>
                      </div>
                    ),
                  )}
                </Accordion>
              </nav>

              <footer className="shrink-0 border-t border-white/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <Button
                  href="/contact/book-appointment"
                  variant="primary"
                  size="lg"
                  className="min-h-[48px] w-full normal-case tracking-normal"
                >
                  Book Free Consultation
                </Button>
              </footer>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
