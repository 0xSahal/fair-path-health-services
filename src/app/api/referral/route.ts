import { NextResponse } from 'next/server'

import { getFirstName, sendFormSubmissionEmails } from '@/lib/formEmails'
import { referralSchema } from '@/lib/schemas'

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

  const parsed = referralSchema.safeParse(payload)
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

  const data = parsed.data

  await sendFormSubmissionEmails({
    submitterFirstName: getFirstName(data.referrerName),
    submitterEmail: data.referrerEmail,
    subjectName: data.referrerName,
    formType: 'Client Referral',
    formTitle: 'Refer a Client — Fair Path Healthcare Website',
    fields: [
      { label: 'Referrer Name', value: data.referrerName },
      { label: 'Referrer Phone', value: data.referrerPhone },
      { label: 'Referrer Email', value: data.referrerEmail },
      { label: 'Organization', value: data.organization },
      { label: 'Relationship', value: data.relationship },
      { label: 'Client Name', value: data.clientName },
      { label: 'Client Age', value: data.clientAge },
      { label: 'Client Address', value: data.clientAddress },
      { label: 'County', value: data.county },
      { label: 'Client Phone', value: data.clientPhone },
      { label: 'Medical Conditions', value: data.medicalConditions },
      { label: 'Services Needed', value: data.servicesNeeded },
      { label: 'Urgency', value: data.urgency },
      { label: 'Clinical Notes', value: data.clinicalNotes },
    ],
  })

  return NextResponse.json(
    { success: true, message: 'Referral received.' },
    { status: 200 },
  )
}
