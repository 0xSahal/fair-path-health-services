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
import { Button } from '@/components/ui/Button'
import { bookingSchema, type BookingValues } from '@/lib/schemas'

const TIMES = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
] as const

const CARE_TYPES = [
  { value: 'personal-care', label: 'Personal Care' },
  { value: 'nursing-care', label: 'Skilled Nursing' },
  { value: 'companion-homemaking', label: 'Companion & Homemaking' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'memory-care', label: 'Memory Care Support' },
  { value: 'care-coordination', label: 'Care Coordination' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const

const HOURS = [
  '1–5',
  '6–10',
  '11–20',
  '21–30',
  '31–40',
  '40+',
] as const

export default function BookAppointmentForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      address: '',
      preferredDate: '',
      preferredTime: '',
      careType: '',
      hoursPerWeek: '',
      notes: '',
    },
  })

  const preferredTime = watch('preferredTime')
  const careType = watch('careType')
  const hoursPerWeek = watch('hoursPerWeek')

  const onSubmit = async (values: BookingValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/booking', {
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
          Request received.
        </p>
        <p className="mt-2 font-body text-fp-text-muted">
          We&apos;ll call to confirm your appointment within 4 business hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div>
        <label className="field-label" htmlFor="bk-name">
          Full name
        </label>
        <Input id="bk-name" {...register('fullName')} className="field-input" />
        {errors.fullName ? <p className="field-error">{errors.fullName.message}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="bk-phone">
            Phone
          </label>
          <Input id="bk-phone" {...register('phone')} className="field-input" />
          {errors.phone ? <p className="field-error">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="bk-email">
            Email
          </label>
          <Input id="bk-email" type="email" {...register('email')} className="field-input" />
          {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="bk-address">
          Address (for the home visit)
        </label>
        <Input id="bk-address" {...register('address')} className="field-input" />
        {errors.address ? <p className="field-error">{errors.address.message}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="bk-date">
            Preferred Date
          </label>
          <Input id="bk-date" type="date" {...register('preferredDate')} className="field-input" />
          {errors.preferredDate ? <p className="field-error">{errors.preferredDate.message}</p> : null}
        </div>
        <div>
          <label className="field-label">Preferred Time</label>
          <Select
            value={preferredTime || undefined}
            onValueChange={(v) => setValue('preferredTime', v, { shouldValidate: true })}
          >
            <SelectTrigger className="field-input h-[48px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {TIMES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.preferredTime ? <p className="field-error">{errors.preferredTime.message}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Type of Care Needed</label>
          <Select
            value={careType || undefined}
            onValueChange={(v) => setValue('careType', v, { shouldValidate: true })}
          >
            <SelectTrigger className="field-input h-[48px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {CARE_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.careType ? <p className="field-error">{errors.careType.message}</p> : null}
        </div>
        <div>
          <label className="field-label">Number of Hours/Week (estimate)</label>
          <Select
            value={hoursPerWeek || undefined}
            onValueChange={(v) => setValue('hoursPerWeek', v, { shouldValidate: true })}
          >
            <SelectTrigger className="field-input h-[48px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {HOURS.map((h) => (
                <SelectItem key={h} value={h}>
                  {h}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.hoursPerWeek ? <p className="field-error">{errors.hoursPerWeek.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="bk-notes">
          Additional Notes
        </label>
        <Textarea
          id="bk-notes"
          rows={5}
          {...register('notes')}
          className="min-h-[140px] w-full rounded-lg border border-fp-border bg-fp-cream px-4 py-3 text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
        />
      </div>

      {serverError ? <p className="field-error">{serverError}</p> : null}

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Submitting…
          </>
        ) : (
          'Request My Free Assessment'
        )}
      </Button>
    </form>
  )
}

