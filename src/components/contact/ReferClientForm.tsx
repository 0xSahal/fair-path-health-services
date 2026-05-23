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
import { referralSchema, type ReferralValues } from '@/lib/schemas'

const CONDITIONS = [
  'Diabetes',
  'Heart disease',
  'COPD',
  'Dementia/Alzheimer’s',
  'Mobility limitations',
  'Post-surgery recovery',
  'Other',
] as const

const URGENCY = [
  { value: 'immediate', label: 'Immediate' },
  { value: 'week', label: 'Within a week' },
  { value: 'flexible', label: 'Flexible' },
] as const

export default function ReferClientForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const serviceOptions = useMemo(
    () => SERVICES.map((s) => ({ slug: s.slug, title: s.title })),
    [],
  )

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReferralValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referrerName: '',
      referrerPhone: '',
      referrerEmail: '',
      organization: '',
      relationship: '',
      clientName: '',
      clientAge: '',
      clientAddress: '',
      county: '',
      clientPhone: '',
      medicalConditions: [],
      servicesNeeded: [],
      urgency: '',
      clinicalNotes: '',
    },
  })

  const county = watch('county')
  const urgency = watch('urgency')
  const medicalConditions = watch('medicalConditions') ?? []
  const servicesNeeded = watch('servicesNeeded') ?? []

  const toggle = (field: 'medicalConditions' | 'servicesNeeded', value: string) => {
    const current = (watch(field) as string[]) ?? []
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    setValue(field, next, { shouldValidate: true })
  }

  const onSubmit = async (values: ReferralValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('failed')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please call us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-fp-border bg-fp-cream p-8">
        <p className="font-display text-2xl font-semibold text-fp-text-primary">
          Referral received.
        </p>
        <p className="mt-2 font-body text-fp-text-muted">
          Thank you — our team will follow up soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="rounded-2xl border border-fp-border bg-fp-cream p-6">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
          Referrer info
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="rf-name">
              Name
            </label>
            <Input id="rf-name" {...register('referrerName')} className="field-input" />
            {errors.referrerName ? <p className="field-error">{errors.referrerName.message}</p> : null}
          </div>
          <div>
            <label className="field-label" htmlFor="rf-org">
              Organization (optional)
            </label>
            <Input id="rf-org" {...register('organization')} className="field-input" />
          </div>
          <div>
            <label className="field-label" htmlFor="rf-phone">
              Phone
            </label>
            <Input id="rf-phone" {...register('referrerPhone')} className="field-input" />
            {errors.referrerPhone ? <p className="field-error">{errors.referrerPhone.message}</p> : null}
          </div>
          <div>
            <label className="field-label" htmlFor="rf-email">
              Email
            </label>
            <Input id="rf-email" type="email" {...register('referrerEmail')} className="field-input" />
            {errors.referrerEmail ? <p className="field-error">{errors.referrerEmail.message}</p> : null}
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="rf-rel">
              Relationship to client
            </label>
            <Input id="rf-rel" {...register('relationship')} className="field-input" />
            {errors.relationship ? <p className="field-error">{errors.relationship.message}</p> : null}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-fp-border bg-fp-cream p-6">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
          Client info
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="cl-name">
              Client name
            </label>
            <Input id="cl-name" {...register('clientName')} className="field-input" />
            {errors.clientName ? <p className="field-error">{errors.clientName.message}</p> : null}
          </div>
          <div>
            <label className="field-label" htmlFor="cl-age">
              Age
            </label>
            <Input id="cl-age" {...register('clientAge')} className="field-input" />
            {errors.clientAge ? <p className="field-error">{errors.clientAge.message}</p> : null}
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="cl-address">
              Address
            </label>
            <Input id="cl-address" {...register('clientAddress')} className="field-input" />
            {errors.clientAddress ? <p className="field-error">{errors.clientAddress.message}</p> : null}
          </div>
          <div>
            <label className="field-label">County</label>
            <Select
              value={county || undefined}
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
          <div>
            <label className="field-label" htmlFor="cl-phone">
              Client phone (optional)
            </label>
            <Input id="cl-phone" {...register('clientPhone')} className="field-input" />
          </div>
        </div>

        <div className="mt-6">
          <p className="field-label">Medical conditions</p>
          <div className="flex flex-wrap gap-2">
            {CONDITIONS.map((c) => {
              const active = medicalConditions.includes(c)
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggle('medicalConditions', c)}
                  className={[
                    'rounded-pill border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors',
                    active
                      ? 'border-fp-copper bg-fp-copper/10 text-fp-brown-dark'
                      : 'border-fp-border bg-transparent text-fp-text-muted hover:border-fp-copper/45 hover:bg-fp-cream-dark',
                  ].join(' ')}
                  aria-pressed={active}
                >
                  {c}
                </button>
              )
            })}
          </div>
          {errors.medicalConditions ? (
            <p className="field-error">{errors.medicalConditions.message as string}</p>
          ) : null}
        </div>

        <div className="mt-6">
          <p className="field-label">Services needed</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {serviceOptions.map((s) => {
              const active = servicesNeeded.includes(s.slug)
              return (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggle('servicesNeeded', s.slug)}
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
          {errors.servicesNeeded ? (
            <p className="field-error">{errors.servicesNeeded.message as string}</p>
          ) : null}
        </div>

        <div className="mt-6">
          <p className="field-label">Urgency level</p>
          <Select
            value={urgency || undefined}
            onValueChange={(v) => setValue('urgency', v, { shouldValidate: true })}
          >
            <SelectTrigger className="field-input h-[48px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {URGENCY.map((u) => (
                <SelectItem key={u.value} value={u.value}>
                  {u.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.urgency ? <p className="field-error">{errors.urgency.message}</p> : null}
        </div>

        <div className="mt-6">
          <label className="field-label" htmlFor="cl-notes">
            Additional clinical notes (optional)
          </label>
          <Textarea
            id="cl-notes"
            rows={5}
            {...register('clinicalNotes')}
            className="min-h-[140px] w-full rounded-lg border border-fp-border bg-fp-cream px-4 py-3 text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
          />
        </div>
      </div>

      {serverError ? <p className="field-error">{serverError}</p> : null}

      <Button variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Submitting…
          </>
        ) : (
          'Submit Referral'
        )}
      </Button>
    </form>
  )
}

