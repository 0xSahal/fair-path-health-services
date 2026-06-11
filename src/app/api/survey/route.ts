import { NextResponse } from 'next/server'

import { sendFormSubmissionEmails } from '@/lib/formEmails'
import { satisfactionSurveySchema } from '@/lib/schemas'

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

  const parsed = satisfactionSurveySchema.safeParse(payload)
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

  sendFormSubmissionEmails({
    subjectName: 'Anonymous Survey',
    formType: 'Satisfaction Survey',
    formTitle: 'Client Satisfaction Survey — Fair Path Healthcare Website',
    fields: [
      { label: 'Overall Satisfaction', value: `${data.overall}/5` },
      { label: 'Professionalism', value: `${data.professionalism}/5` },
      { label: 'Punctuality', value: `${data.punctuality}/5` },
      { label: 'Quality of Care', value: `${data.quality}/5` },
      { label: 'Communication', value: `${data.communication}/5` },
      { label: 'Scheduling', value: `${data.scheduling}/5` },
      { label: 'Value', value: `${data.value}/5` },
      { label: 'What We Did Well', value: data.didWell },
      { label: 'How We Can Improve', value: data.improve },
      { label: 'Would Recommend', value: data.recommend },
    ],
  })

  return NextResponse.json(
    { success: true, message: 'Feedback received.' },
    { status: 200 },
  )
}
