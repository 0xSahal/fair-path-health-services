'use client'

import { useState } from 'react'
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
import { careersApplicationSchema, type CareersApplicationValues } from '@/lib/schemas'
import { cn } from '@/lib/utils'

const careersFieldClass =
  'rounded-lg border border-[#E8DDD0] bg-fp-cream p-3 text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 transition-all duration-200 focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/20'

const POSITIONS = [
  { value: 'cna', label: 'Certified Nursing Assistant (CNA)' },
  { value: 'pca', label: 'Personal Care Aide (PCA)' },
  { value: 'hha', label: 'Home Health Aide (HHA)' },
  { value: 'other', label: 'Other' },
] as const

const CERTS = [
  { value: 'CNA', label: 'CNA' },
  { value: 'HHA', label: 'HHA' },
  { value: 'PCA', label: 'PCA' },
  { value: 'RN', label: 'RN' },
  { value: 'LPN', label: 'LPN' },
] as const

export default function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CareersApplicationValues>({
    resolver: zodResolver(careersApplicationSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      position: '',
      yearsExperience: '',
      certifications: [],
      whyJoin: '',
    },
  })

  const positionValue = watch('position')
  const selectedCerts = watch('certifications')

  const toggleCert = (cert: string) => {
    const current = selectedCerts ?? []
    const next = current.includes(cert)
      ? current.filter((c) => c !== cert)
      : [...current, cert]
    setValue('certifications', next, { shouldValidate: true })
  }

  const onSubmit = async (values: CareersApplicationValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/careers-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('failed')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or contact us by phone.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-fp-border bg-fp-cream p-8">
        <p className="font-display text-2xl font-semibold text-fp-text-primary">
          Application received.
        </p>
        <p className="mt-2 font-body text-fp-text-muted">
          Thank you for applying. Our team will reach out soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div>
        <label className="field-label" htmlFor="c-name">
          Name
        </label>
        <Input id="c-name" {...register('name')} className={cn('h-12', careersFieldClass)} />
        {errors.name ? <p className="field-error">{errors.name.message}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="c-phone">
            Phone
          </label>
          <Input id="c-phone" {...register('phone')} className={cn('h-12', careersFieldClass)} />
          {errors.phone ? <p className="field-error">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="c-email">
            Email
          </label>
          <Input id="c-email" type="email" {...register('email')} className={cn('h-12', careersFieldClass)} />
          {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Position Applying For</label>
          <Select
            value={positionValue || undefined}
            onValueChange={(v) => setValue('position', v, { shouldValidate: true })}
          >
            <SelectTrigger
              className={cn(
                'flex h-12 w-full items-center justify-between',
                careersFieldClass,
              )}
            >
              <SelectValue placeholder="Select a position" />
            </SelectTrigger>
            <SelectContent>
              {POSITIONS.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.position ? <p className="field-error">{errors.position.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="c-years">
            Years Experience
          </label>
          <Input id="c-years" {...register('yearsExperience')} className={cn('h-12', careersFieldClass)} />
          {errors.yearsExperience ? (
            <p className="field-error">{errors.yearsExperience.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <p className="field-label">Certifications</p>
        <div className="flex flex-wrap gap-2">
          {CERTS.map((c) => {
            const active = (selectedCerts ?? []).includes(c.value)
            return (
              <button
                key={c.value}
                type="button"
                onClick={() => toggleCert(c.value)}
                className={[
                  'rounded-pill border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors',
                  active
                    ? 'border-fp-copper bg-fp-copper/10 text-fp-brown-dark'
                    : 'border-fp-border bg-transparent text-fp-text-muted hover:border-fp-copper/45 hover:bg-fp-cream-dark',
                ].join(' ')}
                aria-pressed={active}
              >
                {c.label}
              </button>
            )
          })}
        </div>
        {errors.certifications ? (
          <p className="field-error">{errors.certifications.message as string}</p>
        ) : null}
      </div>

      <div>
        <label className="field-label" htmlFor="c-why">
          Why do you want to join?
        </label>
        <Textarea
          id="c-why"
          rows={5}
          {...register('whyJoin')}
          className={cn('min-h-[140px] w-full', careersFieldClass)}
        />
        {errors.whyJoin ? <p className="field-error">{errors.whyJoin.message}</p> : null}
      </div>

      {serverError ? <p className="field-error">{serverError}</p> : null}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Submitting…
          </>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  )
}

