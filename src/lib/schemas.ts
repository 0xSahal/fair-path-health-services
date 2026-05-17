import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Required'),
  lastName: z.string().min(2, 'Required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  county: z.string().min(1, 'Please select a county'),
  message: z.string().min(10, 'Please tell us about your needs'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const homeQuickContactSchema = z.object({
  firstName: z.string().min(2, 'Required'),
  lastName: z.string().min(2, 'Required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  serviceInterest: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please tell us about your needs'),
})

export type HomeQuickContactValues = z.infer<typeof homeQuickContactSchema>

export const careersApplicationSchema = z.object({
  name: z.string().min(2, 'Required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  position: z.string().min(1, 'Please select a position'),
  yearsExperience: z.string().min(1, 'Required'),
  certifications: z.array(z.string()).min(1, 'Select at least one'),
  whyJoin: z.string().min(10, 'Please tell us why you want to join'),
})

export type CareersApplicationValues = z.infer<typeof careersApplicationSchema>

export const contactPageSchema = z.object({
  firstName: z.string().min(2, 'Required'),
  lastName: z.string().min(2, 'Required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  iAm: z
    .string()
    .min(1, 'Please select an option'),
  servicesInterested: z.array(z.string()).min(1, 'Select at least one service'),
  county: z.string().min(1, 'Please select a county'),
  message: z.string().min(10, 'Tell us about your care needs'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
})

export type ContactPageValues = z.infer<typeof contactPageSchema>

export const bookingSchema = z.object({
  fullName: z.string().min(2, 'Required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  address: z.string().min(6, 'Address required'),
  preferredDate: z.string().min(1, 'Select a preferred date'),
  preferredTime: z.string().min(1, 'Select a preferred time'),
  careType: z.string().min(1, 'Select a care type'),
  hoursPerWeek: z.string().min(1, 'Estimate hours per week'),
  notes: z.string().optional(),
})

export type BookingValues = z.infer<typeof bookingSchema>

export const referralSchema = z.object({
  referrerName: z.string().min(2, 'Required'),
  referrerPhone: z.string().min(10, 'Valid phone required'),
  referrerEmail: z.string().email('Valid email required'),
  organization: z.string().optional(),
  relationship: z.string().min(1, 'Required'),
  clientName: z.string().min(2, 'Required'),
  clientAge: z.string().min(1, 'Required'),
  clientAddress: z.string().min(6, 'Required'),
  county: z.string().min(1, 'Required'),
  clientPhone: z.string().optional(),
  medicalConditions: z.array(z.string()).min(1, 'Select at least one'),
  servicesNeeded: z.array(z.string()).min(1, 'Select at least one'),
  urgency: z.string().min(1, 'Required'),
  clinicalNotes: z.string().optional(),
})

export type ReferralValues = z.infer<typeof referralSchema>

export const satisfactionSurveySchema = z.object({
  overall: z.number().min(1).max(5),
  professionalism: z.number().min(1).max(5),
  punctuality: z.number().min(1).max(5),
  quality: z.number().min(1).max(5),
  communication: z.number().min(1).max(5),
  scheduling: z.number().min(1).max(5),
  value: z.number().min(1).max(5),
  didWell: z.string().min(5, 'Please share a brief comment'),
  improve: z.string().min(5, 'Please share a brief comment'),
  recommend: z.enum(['Yes', 'No', 'Maybe']),
})

export type SatisfactionSurveyValues = z.infer<typeof satisfactionSurveySchema>

export const doNotSellSchema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.string().email('Valid email required'),
  request: z.string().min(5, 'Required'),
})

export type DoNotSellValues = z.infer<typeof doNotSellSchema>
