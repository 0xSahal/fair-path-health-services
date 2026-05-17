'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/Button'
import { doNotSellSchema, type DoNotSellValues } from '@/lib/schemas'

export default function DoNotSellForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DoNotSellValues>({
    resolver: zodResolver(doNotSellSchema),
    defaultValues: { name: '', email: '', request: 'Please opt me out.' },
  })

  const onSubmit = async (values: DoNotSellValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/do-not-sell', {
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
          Request received.
        </p>
        <p className="mt-2 font-body text-fp-text-muted">
          Thank you — we’ll follow up as needed.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="dns-name">
            Name
          </label>
          <Input id="dns-name" {...register('name')} className="field-input" />
          {errors.name ? <p className="field-error">{errors.name.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="dns-email">
            Email
          </label>
          <Input id="dns-email" type="email" {...register('email')} className="field-input" />
          {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="dns-req">
          Request
        </label>
        <Textarea
          id="dns-req"
          rows={5}
          {...register('request')}
          className="min-h-[140px] w-full rounded-lg border border-fp-border bg-fp-cream px-4 py-3 text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
        />
        {errors.request ? <p className="field-error">{errors.request.message}</p> : null}
      </div>

      {serverError ? <p className="field-error">{serverError}</p> : null}

      <Button variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Submitting…
          </>
        ) : (
          'Submit Opt-Out Request'
        )}
      </Button>
    </form>
  )
}

