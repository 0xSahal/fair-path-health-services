import { NextResponse } from 'next/server'

import { getFirstName, sendFormSubmissionEmails } from '@/lib/formEmails'
import { doNotSellSchema } from '@/lib/schemas'

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

  const parsed = doNotSellSchema.safeParse(payload)
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

  const { name, email, request: sellRequest } = parsed.data

  sendFormSubmissionEmails({
    submitterFirstName: getFirstName(name),
    submitterEmail: email,
    subjectName: name,
    formType: 'Do Not Sell Request',
    formTitle: 'Do Not Sell My Information — Fair Path Healthcare Website',
    fields: [
      { label: 'Name', value: name },
      { label: 'Email', value: email },
      { label: 'Request', value: sellRequest },
    ],
  })

  return NextResponse.json(
    { success: true, message: 'Request received.' },
    { status: 200 },
  )
}
