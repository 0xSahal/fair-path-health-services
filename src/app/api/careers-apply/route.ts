import { NextResponse } from 'next/server'

import { getFirstName, sendFormSubmissionEmails } from '@/lib/formEmails'
import { careersApplicationSchema } from '@/lib/schemas'

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

  const parsed = careersApplicationSchema.safeParse(payload)
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

  const { name, phone, email, position, yearsExperience, certifications, whyJoin } = parsed.data

  await sendFormSubmissionEmails({
    submitterFirstName: getFirstName(name),
    submitterEmail: email,
    subjectName: name,
    formType: 'Careers Application',
    formTitle: 'Careers Application — Fair Path Healthcare Website',
    fields: [
      { label: 'Name', value: name },
      { label: 'Phone', value: phone },
      { label: 'Email', value: email },
      { label: 'Position', value: position },
      { label: 'Years of Experience', value: yearsExperience },
      { label: 'Certifications', value: certifications },
      { label: 'Why Join', value: whyJoin },
    ],
  })

  return NextResponse.json(
    { success: true, message: 'Application received.' },
    { status: 200 },
  )
}
