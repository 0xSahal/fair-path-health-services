import { Clock, HeartHandshake, Mail, MapPin, Phone } from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import HomeContactQuickForm from '@/components/home/HomeContactQuickForm'
import { SectionTag } from '@/components/ui/SectionTag'
import { SITE_CONFIG } from '@/lib/constants'

const CONTACT_ROWS = [
  {
    icon: Phone,
    label: 'Phone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phoneRaw}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: SITE_CONFIG.address,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: SITE_CONFIG.hours,
  },
] as const

export default function HomeContactQuick() {
  return (
    <section
      id="contact"
      aria-label="Contact Fair Path"
      className="bg-fp-cream fp-section-padding"
    >
      <div className="section-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-center">Reach Out</SectionTag>
          <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
            Let&apos;s Talk About Your Family&apos;s Needs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-fp-text-muted md:text-lg">
            Send a quick message, call us, or stop by the office. A coordinator follows up within
            two business hours, every weekday.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="relative overflow-hidden rounded-2xl bg-fp-brown-dark p-8 text-fp-cream shadow-card md:p-10 lg:col-span-2">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fp-copper/25 blur-3xl"
            />

            <div className="relative">
              <SectionTag className="text-fp-copper-light">Speak With Us</SectionTag>
              <h3 className="mt-2 font-display text-2xl font-semibold text-fp-cream md:text-[26px]">
                We&apos;re Here to Help
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-fp-cream/85">
                Prefer to talk to a real person? Pick up the phone, send an email, or stop by the
                office for a no-pressure conversation about your family&apos;s care.
              </p>

              <ul className="mt-8 space-y-5 font-body text-sm text-fp-cream/90">
                {CONTACT_ROWS.map((row) => {
                  const Icon = row.icon
                  return (
                    <li key={row.label} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fp-copper/15 text-fp-copper-light ring-1 ring-fp-copper/20">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-fp-cream/60">
                          {row.label}
                        </p>
                        {'href' in row && row.href ? (
                          <a
                            href={row.href}
                            className="mt-0.5 block text-[15px] leading-snug text-fp-cream transition-colors hover:text-fp-copper-light"
                          >
                            {row.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-[15px] leading-snug text-fp-cream">
                            {row.value}
                          </p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8 flex items-start gap-3 rounded-xl border border-fp-copper/25 bg-fp-copper/10 p-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fp-copper/25 text-fp-copper-light ring-1 ring-fp-copper/30">
                  <HeartHandshake className="h-4 w-4" aria-hidden />
                </span>
                <p className="font-body text-sm leading-relaxed text-fp-cream/95">
                  <span className="font-semibold text-fp-cream">Our promise.</span> A care
                  coordinator follows up within two business hours, every weekday, with answers
                  and next steps.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="relative rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card md:p-10 lg:col-span-3"
          >
            <SectionTag>Send a Message</SectionTag>
            <h3 className="mt-2 font-display text-2xl font-semibold text-fp-text-primary md:text-[26px]">
              Quick Contact Form
            </h3>
            <p className="mt-2 font-body text-sm text-fp-text-muted">
              Tell us a little about your needs and a coordinator will follow up quickly.
            </p>

            <HomeContactQuickForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
