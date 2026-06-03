'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckCircle2,
  Clock,
  Loader2,
  Lock,
  Mail,
  MailX,
  MapPin,
  Phone,
  Shield,
} from 'lucide-react'

import SectionHeader from '@/components/shared/SectionHeader'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { COUNTIES, SITE_CONFIG } from '@/lib/constants'
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas'

const TRUST_BADGES = [
  { icon: Lock, label: 'SSL Secured' },
  { icon: Shield, label: 'HIPAA Aware' },
  { icon: MailX, label: 'No Spam, Ever' },
] as const

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      county: '',
      message: '',
    },
  })

  const countyValue = watch('county')

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean
        error?: string
      }
      if (!res.ok) {
        setServerError(
          data.error ??
            'Something went wrong sending your message. Please try again or call us directly.',
        )
        return
      }
      reset()
      setSubmitted(true)
    } catch {
      setServerError(
        'Something went wrong sending your message. Please try again or call us directly.',
      )
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact Fair Path Health Services"
      className="bg-blush/[0.12] py-section"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.35fr]">
          {/* Trust column */}
          <div>
            <SectionHeader
              label="Get In Touch"
              title="Ready to Take the Next Step for Your Family?"
              align="left"
            />

            <p className="mt-6 mb-8 font-body text-[16px] leading-[1.75] text-slate">
              Our care coordinators are standing by to answer every question
              and help you find the right support at absolutely no obligation
              to your family.
            </p>

            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone className="text-roseGold" size={24} aria-hidden />
              <span className="font-display text-[36px] font-bold leading-none text-mahogany transition-colors hover:text-sienna">
                {SITE_CONFIG.phone}
              </span>
            </a>

            <ul className="mt-6 flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-[14px] text-slate">
                <MapPin className="text-roseGold" size={16} aria-hidden />
                <span>Serving all of Metro Atlanta, Georgia</span>
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-slate">
                <Clock className="text-roseGold" size={16} aria-hidden />
                <span>{SITE_CONFIG.hours}</span>
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-slate">
                <Mail className="text-roseGold" size={16} aria-hidden />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="transition-colors hover:text-mahogany focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

          </div>

          {/* Form column */}
          <div className="rounded-[24px] border-l-[4px] border-roseGold bg-white p-8 shadow-card lg:p-10">
            {submitted ? (
              <div
                className="flex flex-col items-center py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="text-sage" size={48} aria-hidden />
                <h3 className="mt-4 font-display text-[24px] font-bold text-mahogany">
                  Message Received!
                </h3>
                <p className="mt-3 max-w-[420px] font-body text-[15px] leading-relaxed text-slate">
                  Our care coordinator will contact you within 2 business
                  hours. For urgent needs, please call{' '}
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="font-semibold text-mahogany underline-offset-2 hover:underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 font-display text-[26px] font-bold text-mahogany">
                  Send Us a Message
                </h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.04em] text-slate"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        autoComplete="given-name"
                        aria-invalid={Boolean(errors.firstName)}
                        {...register('firstName')}
                      />
                      {errors.firstName ? (
                        <p className="mt-1 text-[12px] text-sienna">
                          {errors.firstName.message}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.04em] text-slate"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        autoComplete="family-name"
                        aria-invalid={Boolean(errors.lastName)}
                        {...register('lastName')}
                      />
                      {errors.lastName ? (
                        <p className="mt-1 text-[12px] text-sienna">
                          {errors.lastName.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.04em] text-slate"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        {...register('phone')}
                      />
                      {errors.phone ? (
                        <p className="mt-1 text-[12px] text-sienna">
                          {errors.phone.message}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.04em] text-slate"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        {...register('email')}
                      />
                      {errors.email ? (
                        <p className="mt-1 text-[12px] text-sienna">
                          {errors.email.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="county"
                      className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.04em] text-slate"
                    >
                      County
                    </label>
                    <Select
                      value={countyValue}
                      onValueChange={(v) =>
                        setValue('county', v, { shouldValidate: true })
                      }
                    >
                      <SelectTrigger
                        id="county"
                        aria-invalid={Boolean(errors.county)}
                      >
                        <SelectValue placeholder="Select your county" />
                      </SelectTrigger>
                      <SelectContent>
                        {COUNTIES.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.county ? (
                      <p className="mt-1 text-[12px] text-sienna">
                        {errors.county.message}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.04em] text-slate"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your loved one's care needs..."
                      aria-invalid={Boolean(errors.message)}
                      {...register('message')}
                    />
                    {errors.message ? (
                      <p className="mt-1 text-[12px] text-sienna">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>

                  {serverError ? (
                    <p
                      role="alert"
                      className="text-[13px] font-medium text-sienna"
                    >
                      {serverError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary h-[52px] w-full text-[14px] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          className="animate-spin"
                          size={16}
                          aria-hidden
                        />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </>
            )}

            <ul className="mt-4 flex flex-wrap justify-center gap-6">
              {TRUST_BADGES.map((b) => {
                const Icon = b.icon
                return (
                  <li
                    key={b.label}
                    className="flex items-center gap-1.5 text-[11px] text-slate"
                  >
                    <Icon className="text-sage" size={13} aria-hidden />
                    <span>{b.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
