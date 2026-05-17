import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export type BreadcrumbItem = { label: string; href: string }

export default function InnerPageHero({
  title,
  breadcrumb,
  imageSrc,
  imageAlt,
  className,
  /** Override image overlay gradient (non-service inner pages). Service banners use a fixed gradient. */
  overlayGradient,
  /** Service detail: fixed amber bar under title; omit for default accent. */
  titleAccent,
  /** Services listing + detail: hero banner layout below the site navbar. */
  serviceBanner = false,
  /** Service main + child pages: mobile hero image centered and full-bleed. */
  servicePagesHero = false,
}: {
  title: string
  breadcrumb: BreadcrumbItem[]
  imageSrc: string
  imageAlt: string
  className?: string
  overlayGradient?: string
  titleAccent?: 'service'
  serviceBanner?: boolean
  servicePagesHero?: boolean
}) {
  const useServiceMobileImage = serviceBanner && servicePagesHero
  return (
    <section
      aria-label={title}
      className={cn(
        'relative overflow-hidden',
        serviceBanner &&
          [
            useServiceMobileImage
              ? 'flex min-h-[min(46svh,440px)] flex-col'
              : 'flex min-h-[320px] flex-col',
            'min-[769px]:max-[1024px]:min-h-[460px]',
            'min-[1025px]:min-h-[max(580px,38svh)]',
          ].join(' '),
        useServiceMobileImage && 'max-[1024px]:bg-fp-brown-dark',
        className,
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={100}
          priority={true}
          unoptimized={true}
          sizes="100vw"
          className={cn(
            'object-cover',
            serviceBanner && 'object-center',
            useServiceMobileImage && 'service-banner-hero-image',
          )}
        />
      </div>

      <div
        className={cn(
          'absolute inset-0 z-[1]',
          useServiceMobileImage &&
            'max-[1024px]:!bg-[linear-gradient(to_right,rgba(15,10,5,0.72)_0%,rgba(15,10,5,0.42)_48%,rgba(15,10,5,0.28)_100%)]',
        )}
        style={{
          background: serviceBanner
            ? 'linear-gradient(to right, rgba(15,10,5,0.55) 0%, rgba(15,10,5,0.20) 55%, transparent 100%)'
            : (overlayGradient ??
              'linear-gradient(90deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.72) 28%, rgba(13,13,13,0.38) 62%, rgba(13,13,13,0.14) 100%)'),
        }}
        aria-hidden
      />

      {serviceBanner ? (
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-[2]',
            useServiceMobileImage
              ? 'bg-gradient-to-t from-fp-black/80 via-fp-black/35 to-fp-black/10 max-[1024px]:from-fp-black/75 max-[1024px]:via-fp-black/30 min-[1025px]:from-fp-black/85 min-[1025px]:via-fp-black/25 min-[1025px]:to-transparent'
              : 'bg-gradient-to-t from-fp-black/85 via-fp-black/25 to-transparent sm:via-fp-black/15',
          )}
          aria-hidden
        />
      ) : null}

      <div
        className={cn(
          serviceBanner
            ? 'fp-page-hero-inset relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-row items-center justify-start pb-10 pl-6 pr-4 min-[1025px]:pb-14 min-[1025px]:pl-[60px] sm:pr-6 lg:pr-8'
            : 'section-container fp-page-hero-inset relative z-10 pb-12 md:pb-16',
        )}
      >
        {serviceBanner ? (
          <div
            className="fp-reveal flex max-w-4xl flex-col items-start text-left"
            style={{ animationDelay: '0.06s' }}
          >
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-x-1 gap-y-1 font-body text-[11px] font-semibold tracking-[0.14em] text-white/65"
            >
              {breadcrumb.map((b, idx) => (
                <span key={`${idx}-${b.href}`} className="inline-flex items-center gap-2">
                  <Link
                    href={b.href}
                    className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    {b.label}
                  </Link>
                  {idx !== breadcrumb.length - 1 ? (
                    <ChevronRight className="h-3 w-3 text-white/40" aria-hidden />
                  ) : null}
                </span>
              ))}
            </nav>

            <h1 className="m-0 mt-3 max-w-none text-left font-display text-[32px] font-semibold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)] min-[1025px]:text-[52px] min-[1025px]:leading-[1.08]">
              {title}
            </h1>

            {titleAccent === 'service' ? (
              <div className="mt-2.5 h-[3px] w-[52px] shrink-0 bg-[#C9A96E]" aria-hidden />
            ) : (
              <div
                className="mt-2.5 h-[3px] w-[min(13rem,48vw)] max-w-[15rem] shrink-0 bg-gradient-to-r from-fp-copper-light via-fp-copper to-fp-copper/55 opacity-98"
                aria-hidden
              />
            )}
          </div>
        ) : (
          <>
            <nav
              aria-label="Breadcrumb"
              className="fp-reveal flex flex-wrap items-center gap-2 font-body text-sm text-white/75"
            >
              {breadcrumb.map((b, idx) => (
                <span key={`${idx}-${b.href}`} className="inline-flex items-center gap-2">
                  <Link href={b.href} className="transition-colors hover:text-white">
                    {b.label}
                  </Link>
                  {idx !== breadcrumb.length - 1 ? (
                    <ChevronRight className="h-4 w-4 text-white/40" aria-hidden />
                  ) : null}
                </span>
              ))}
            </nav>

            <h1
              className="fp-reveal mt-4 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-semibold leading-[1.08] text-white"
              style={{ animationDelay: '0.06s' }}
            >
              {title}
            </h1>

            {titleAccent === 'service' ? (
              <div className="fp-reveal mt-4 h-[3px] w-[60px] bg-[#C9A96E]" aria-hidden />
            ) : (
              <div
                className="fp-reveal mt-4 h-[2px] w-28 max-w-[11rem] rounded-full bg-gradient-to-r from-fp-copper-light via-fp-copper to-fp-copper/55 opacity-95"
                aria-hidden
              />
            )}
          </>
        )}
      </div>
    </section>
  )
}
