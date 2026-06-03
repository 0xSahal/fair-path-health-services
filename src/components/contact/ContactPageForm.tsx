'use client'

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/Button'
import { COUNTIES_SERVED } from '@/lib/constants'
import { SERVICES } from '@/lib/services-data'
import { contactPageSchema, type ContactPageValues } from '@/lib/schemas'

const IAM = [
  { value: 'family', label: 'A family member looking for care' },
  { value: 'client', label: 'A patient/client' },
  { value: 'professional', label: 'A healthcare professional' },
  { value: 'caregiver', label: 'A potential caregiver' },
] as const

export default function ContactPageForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const services = useMemo(
    () => SERVICES.map((s) => ({ slug: s.slug, title: s.title })),
    [],
  )

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactPageValues>({
    resolver: zodResolver(contactPageSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      iAm: '',
      servicesInterested: [],
      county: '',
      message: '',
      consent: undefined as unknown as true,
    },
  })

  const iAmValue = watch('iAm')
  const countyValue = watch('county')
  const selected = watch('servicesInterested') ?? []
  const consent = watch('consent')

  const toggleService = (slug: string) => {
    const next = selected.includes(slug)
      ? selected.filter((s) => s !== slug)
      : [...selected, slug]
    setValue('servicesInterested', next, { shouldValidate: true })
  }

  const onInvalid = () => {
    setServerError('Please complete all required fields before submitting.')
  }

  const onSubmit = async (values: ContactPageValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
          iAm: values.iAm,
          servicesInterested: values.servicesInterested,
          county: values.county,
          message: values.message,
          consent: values.consent,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean
        error?: string
      }
      if (!res.ok) {
        setServerError(
          data.error ?? 'Something went wrong. Please call us directly.',
        )
        return
      }
      reset()
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please call us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-fp-border bg-fp-cream p-8">
        <p className="font-display text-2xl font-semibold text-fp-text-primary">
          Message sent.
        </p>
        <p className="mt-2 font-body text-fp-text-muted">
          Thank you. Our team will respond as quickly as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="ct-first">
            First Name*
          </label>
          <Input id="ct-first" {...register('firstName')} className="field-input" />
          {errors.firstName ? <p className="field-error">{errors.firstName.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="ct-last">
            Last Name*
          </label>
          <Input id="ct-last" {...register('lastName')} className="field-input" />
          {errors.lastName ? <p className="field-error">{errors.lastName.message}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="ct-phone">
            Phone*
          </label>
          <Input id="ct-phone" {...register('phone')} className="field-input" />
          {errors.phone ? <p className="field-error">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="ct-email">
            Email*
          </label>
          <Input id="ct-email" type="email" {...register('email')} className="field-input" />
          {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">I Am*</label>
          <Select
            value={iAmValue || undefined}
            onValueChange={(v) => setValue('iAm', v, { shouldValidate: true })}
          >
            <SelectTrigger className="field-input h-[48px]">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              {IAM.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.iAm ? <p className="field-error">{errors.iAm.message}</p> : null}
        </div>
        <div>
          <label className="field-label">County I&apos;m In*</label>
          <Select
            value={countyValue || undefined}
            onValueChange={(v) => setValue('county', v, { shouldValidate: true })}
          >
            <SelectTrigger className="field-input h-[48px]">
              <SelectValue placeholder="Select a county" />
            </SelectTrigger>
            <SelectContent>
              {COUNTIES_SERVED.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.county ? <p className="field-error">{errors.county.message}</p> : null}
        </div>
      </div>

      <div>
        <p className="field-label">Service I&apos;m Interested In*</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {services.map((s) => {
            const active = selected.includes(s.slug)
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => toggleService(s.slug)}
                className={[
                  'rounded-xl border px-4 py-3 text-left font-body text-sm font-semibold transition-colors',
                  active
                    ? 'border-fp-copper bg-fp-copper/10 text-fp-brown-dark'
                    : 'border-fp-border bg-fp-cream text-fp-text-body hover:border-fp-copper/45 hover:bg-fp-cream-dark',
                ].join(' ')}
                aria-pressed={active}
              >
                {s.title}
              </button>
            )
          })}
        </div>
        {errors.servicesInterested ? (
          <p className="field-error">{errors.servicesInterested.message as string}</p>
        ) : null}
      </div>

      <div>
        <label className="field-label" htmlFor="ct-msg">
          Message*
        </label>
        <Textarea
          id="ct-msg"
          rows={6}
          placeholder="Tell us about your care needs..."
          {...register('message')}
          className="min-h-[160px] w-full rounded-lg border border-fp-border bg-fp-cream px-4 py-3 text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
        />
        {errors.message ? <p className="field-error">{errors.message.message}</p> : null}
      </div>

      <div>
        <label className="flex items-start gap-3 font-body text-sm text-fp-text-body">
          <input
            type="checkbox"
            checked={consent === true}
            onChange={(e) =>
              setValue('consent', (e.target.checked ? true : undefined) as true, {
                shouldValidate: true,
              })
            }
            className="mt-1 h-4 w-4 rounded border border-fp-border accent-[var(--fp-copper)]"
            aria-label="Consent to be contacted"
          />
          <span>I agree to be contacted by Fair Path Health Services</span>
        </label>
        {errors.consent ? <p className="field-error">{errors.consent.message}</p> : null}
      </div>

      {serverError ? <p className="field-error">{serverError}</p> : null}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}

