import { NextResponse } from 'next/server'

import { getFirstName, sendFormSubmissionEmails } from '@/lib/formEmails'
import { bookingSchema } from '@/lib/schemas'

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid JSON body.' },
      { status: 400 },
    )
  }

  const parsed = bookingSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation failed.',
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  const {
    fullName,
    phone,
    email,
    address,
    preferredDate,
    preferredTime,
    careType,
    hoursPerWeek,
    notes,
  } = parsed.data

  await sendFormSubmissionEmails({
    submitterFirstName: getFirstName(fullName),
    submitterEmail: email,
    subjectName: fullName,
    formType: 'Booking Request',
    formTitle: 'Book Appointment — Fair Path Healthcare Website',
    fields: [
      { label: 'Full Name', value: fullName },
      { label: 'Phone', value: phone },
      { label: 'Email', value: email },
      { label: 'Address', value: address },
      { label: 'Preferred Date', value: preferredDate },
      { label: 'Preferred Time', value: preferredTime },
      { label: 'Care Type', value: careType },
      { label: 'Hours Per Week', value: hoursPerWeek },
      { label: 'Notes', value: notes },
    ],
  })

  return NextResponse.json(
    { success: true, message: 'Booking request received.' },
    { status: 200 },
  )
}
