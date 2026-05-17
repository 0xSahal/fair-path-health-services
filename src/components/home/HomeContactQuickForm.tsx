'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2, Send, ShieldCheck } from 'lucide-react'

import { homeQuickContactSchema, type HomeQuickContactValues } from '@/lib/schemas'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const SERVICE_OPTIONS = [
  { value: 'personal-care', label: 'Personal Care' },
  { value: 'nursing-care', label: 'Nursing Care' },
  { value: 'companion-homemaking', label: 'Companion & Homemaking' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'dbhdd', label: 'Disability Support Services' },
  { value: 'care-coordination', label: 'Care Coordination' },
  { value: 'other', label: 'Other / Not Sure' },
] as const

export default function HomeContactQuickForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<HomeQuickContactValues>({
    resolver: zodResolver(homeQuickContactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      serviceInterest: '',
      message: '',
    },
  })

  const serviceValue = watch('serviceInterest')

  const onSubmit = async (values: HomeQuickContactValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/home-contact', {
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
      <div className="mt-8 flex items-start gap-3 rounded-xl border border-fp-success/30 bg-fp-success/10 p-4">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fp-success" aria-hidden />
        <div>
          <p className="font-display text-base font-semibold text-fp-success">Message sent</p>
          <p className="mt-1 font-body text-sm text-fp-text-body">
            Thanks for reaching out. A care coordinator will be in touch within two
            business hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="hq-first">
            First Name
          </label>
          <Input
            id="hq-first"
            autoComplete="given-name"
            placeholder="Jane"
            {...register('firstName')}
            className="field-input"
          />
          {errors.firstName ? <p className="field-error">{errors.firstName.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="hq-last">
            Last Name
          </label>
          <Input
            id="hq-last"
            autoComplete="family-name"
            placeholder="Doe"
            {...register('lastName')}
            className="field-input"
          />
          {errors.lastName ? <p className="field-error">{errors.lastName.message}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="hq-phone">
            Phone
          </label>
          <Input
            id="hq-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            {...register('phone')}
            className="field-input"
          />
          {errors.phone ? <p className="field-error">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="hq-email">
            Email
          </label>
          <Input
            id="hq-email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            {...register('email')}
            className="field-input"
          />
          {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="field-label">Service Interested In</label>
        <Select
          value={serviceValue || undefined}
          onValueChange={(v) => setValue('serviceInterest', v, { shouldValidate: true })}
        >
          <SelectTrigger className="field-input h-[48px]">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.serviceInterest ? (
          <p className="field-error">{errors.serviceInterest.message}</p>
        ) : null}
      </div>

      <div>
        <label className="field-label" htmlFor="hq-msg">
          Message
        </label>
        <Textarea
          id="hq-msg"
          rows={5}
          placeholder="Briefly tell us about the care your loved one needs..."
          {...register('message')}
          className="min-h-[140px] w-full rounded-lg border border-fp-border bg-fp-cream px-4 py-3 text-[15px] text-fp-text-primary transition-all duration-200 placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
        />
        {errors.message ? <p className="field-error">{errors.message.message}</p> : null}
      </div>

      {serverError ? (
        <p className="rounded-lg border border-fp-copper-dark/30 bg-fp-copper-dark/5 px-3 py-2 font-body text-sm text-fp-copper-dark">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-md border border-transparent bg-fp-copper px-8 py-3.5 font-body text-sm font-semibold text-fp-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-fp-copper-light hover:shadow-[0_12px_32px_rgba(176,125,74,0.28)] active:translate-y-0 active:bg-fp-copper-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              Send Message
            </>
          )}
        </button>

        <p className="flex items-center gap-2 font-body text-xs text-fp-text-muted">
          <ShieldCheck className="h-4 w-4 text-fp-copper" aria-hidden />
          Your information stays private.
        </p>
      </div>

      <p className="font-body text-xs text-fp-text-muted">
        We respond within two business hours during weekdays.
      </p>
    </form>
  )
}
