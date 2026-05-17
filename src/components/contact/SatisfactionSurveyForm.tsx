'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Star } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/textarea'
import { satisfactionSurveySchema, type SatisfactionSurveyValues } from '@/lib/schemas'
import { cn } from '@/lib/utils'

function Stars({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="rounded-2xl border border-fp-border bg-fp-cream p-5">
      <p className="font-body text-sm font-semibold text-fp-text-primary">{label}</p>
      <div className="mt-3 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => {
          const v = i + 1
          const active = v <= value
          return (
            <button
              key={v}
              type="button"
              onClick={() => onChange(v)}
              className="rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper"
              aria-label={`${label} rating ${v}`}
            >
              <Star
                className={cn(
                  'h-6 w-6',
                  active ? 'fill-fp-copper text-fp-copper' : 'text-fp-border',
                )}
                aria-hidden
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function SatisfactionSurveyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    handleSubmit,
    setValue,
    watch,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SatisfactionSurveyValues>({
    resolver: zodResolver(satisfactionSurveySchema),
    defaultValues: {
      overall: 5,
      professionalism: 5,
      punctuality: 5,
      quality: 5,
      communication: 5,
      scheduling: 5,
      value: 5,
      didWell: '',
      improve: '',
      recommend: 'Yes',
    },
  })

  const v = watch()

  const onSubmit = async (values: SatisfactionSurveyValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('failed')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-fp-border bg-fp-cream p-8">
        <p className="font-display text-2xl font-semibold text-fp-text-primary">
          Thank you for your feedback.
        </p>
        <p className="mt-2 font-body text-fp-text-muted">
          Your input helps us improve care for every family.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Stars label="Overall Satisfaction" value={v.overall} onChange={(n) => setValue('overall', n)} />
        <Stars label="Caregiver Professionalism" value={v.professionalism} onChange={(n) => setValue('professionalism', n)} />
        <Stars label="Caregiver Punctuality" value={v.punctuality} onChange={(n) => setValue('punctuality', n)} />
        <Stars label="Quality of Care" value={v.quality} onChange={(n) => setValue('quality', n)} />
        <Stars label="Communication from Office" value={v.communication} onChange={(n) => setValue('communication', n)} />
        <Stars label="Ease of Scheduling" value={v.scheduling} onChange={(n) => setValue('scheduling', n)} />
        <Stars label="Value for Money" value={v.value} onChange={(n) => setValue('value', n)} />
      </div>

      <div>
        <label className="field-label" htmlFor="sv-good">
          What did we do well?
        </label>
        <Textarea
          id="sv-good"
          rows={4}
          {...register('didWell')}
          className="min-h-[120px] w-full rounded-lg border border-fp-border bg-fp-cream px-4 py-3 text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
        />
        {errors.didWell ? <p className="field-error">{errors.didWell.message}</p> : null}
      </div>

      <div>
        <label className="field-label" htmlFor="sv-improve">
          What could we improve?
        </label>
        <Textarea
          id="sv-improve"
          rows={4}
          {...register('improve')}
          className="min-h-[120px] w-full rounded-lg border border-fp-border bg-fp-cream px-4 py-3 text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
        />
        {errors.improve ? <p className="field-error">{errors.improve.message}</p> : null}
      </div>

      <div className="rounded-2xl border border-fp-border bg-fp-cream p-5">
        <p className="field-label">Would you recommend Fair Path?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(['Yes', 'No', 'Maybe'] as const).map((opt) => {
            const active = v.recommend === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setValue('recommend', opt)}
                className={[
                  'rounded-pill border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors',
                  active
                    ? 'border-fp-copper bg-fp-copper/10 text-fp-brown-dark'
                    : 'border-fp-border bg-transparent text-fp-text-muted hover:border-fp-copper/45 hover:bg-fp-cream-dark',
                ].join(' ')}
              >
                {opt}
              </button>
            )
          })}
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
          'Submit My Feedback'
        )}
      </Button>
    </form>
  )
}

