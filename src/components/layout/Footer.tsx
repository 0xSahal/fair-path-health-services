import Link from 'next/link'
import { Briefcase, Mail, MapPin, Phone } from 'lucide-react'

import BrandLogo from '@/components/shared/BrandLogo'
import { SITE_CONFIG } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'All Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const SERVICES_LINKS = [
  { label: 'Personal Care', href: '/services/personal-care' },
  { label: 'Transportation', href: '/services/transportation' },
  { label: 'Nursing Care', href: '/services/nursing-care' },
  { label: 'Companion & Homemaking', href: '/services/companion-homemaking' },
  { label: 'Care Coordination', href: '/services/care-coordination' },
  { label: 'Respite Care', href: '/services/respite-care' },
]

const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Do Not Sell My Info', href: '/do-not-sell' },
  { label: 'Sitemap', href: '/sitemap' },
  { label: 'Accessibility', href: '/accessibility' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label="Site footer">
      {/* Top section */}
      <div className="bg-fp-brown-dark text-fp-cream">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1 — Brand */}
            <div>
              <Link
                href="/"
                aria-label={SITE_CONFIG.name}
                className="inline-flex rounded-2xl bg-fp-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-fp-brown-dark"
              >
                <BrandLogo
                  boxClassName="h-[120px] w-[320px] max-w-full"
                  sizes="(max-width: 768px) 92vw, 320px"
                  className="mix-blend-screen object-left"
                />
              </Link>

              <p className="mt-5 font-accent text-[15px] italic tracking-[0.12em] text-fp-copper-light">
                {SITE_CONFIG.tagline}
              </p>
              <p className="mt-4 max-w-[420px] font-body text-[14px] leading-relaxed text-fp-cream/75">
                Fair Path Health Services provides premium in-home care across Georgia—
                combining compassion, clinical excellence, and meticulous coordination so
                families feel supported at every step.
              </p>

            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="mb-5 font-body text-[12px] font-bold uppercase tracking-[0.16em] text-fp-cream/60">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-body text-[14px] text-fp-cream/80 transition-colors hover:text-fp-copper-light"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Our Services */}
            <div>
              <h3 className="mb-5 font-body text-[12px] font-bold uppercase tracking-[0.16em] text-fp-cream/60">
                Our Services
              </h3>
              <ul className="flex flex-col gap-3">
                {SERVICES_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-body text-[14px] text-fp-cream/80 transition-colors hover:text-fp-copper-light"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact & Hours */}
            <div>
              <h3 className="mb-5 font-body text-[12px] font-bold uppercase tracking-[0.16em] text-fp-cream/60">
                Contact & Hours
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-fp-copper" aria-hidden />
                  <span className="font-body text-[14px] text-fp-cream/80">
                    {SITE_CONFIG.address}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-fp-copper" aria-hidden />
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="font-body text-[14px] text-fp-cream/80 transition-colors hover:text-fp-copper-light"
                    aria-label={`Call ${SITE_CONFIG.phone}`}
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-fp-copper" aria-hidden />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-body text-[14px] text-fp-cream/80 transition-colors hover:text-fp-copper-light"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 h-4 w-4 text-fp-copper" aria-hidden />
                  <span className="font-body text-[14px] text-fp-cream/80">
                    Mon–Fri 8AM–6PM, Sat 9AM–3PM, Sun Emergency Only
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <Button href="/contact/book-appointment" variant="primary" size="md">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-fp-nav-solid text-fp-cream/60">
        <div className="section-container flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-body text-[12px]">
            © {year} {SITE_CONFIG.name}. All Rights Reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-body text-[12px] text-fp-cream/55 transition-colors hover:text-fp-copper-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-2 font-body text-[12px] lg:justify-end">
            <MapPin className="h-4 w-4 text-fp-copper" aria-hidden />
            <span>Serving 10 Georgia Counties</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
