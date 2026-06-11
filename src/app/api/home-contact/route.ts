import { NextResponse } from 'next/server'

import dbConnect from '@/lib/dbConnect'
import { sendFormSubmissionEmails } from '@/lib/formEmails'
import HomePageInquiry from '@/models/HomePageInquiry'
import { homeQuickContactSchema } from '@/lib/schemas'

export async function POST(request: Request) {
  try {
    let payload: unknown
    try {
      payload = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON body.' },
        { status: 400 },
      )
    }

    const parsed = homeQuickContactSchema.safeParse(payload)
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please check the form and try again.',
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const { firstName, lastName, phone, email, serviceInterest, message } = parsed.data

    await dbConnect()

    const submission = await HomePageInquiry.create(parsed.data)

    await sendFormSubmissionEmails({
      submitterFirstName: firstName,
      submitterEmail: email,
      subjectName: `${firstName} ${lastName}`,
      formType: 'Home Page Contact Form Submission',
      formTitle: 'Home Page Contact — Fair Path Healthcare Website',
      fields: [
        { label: 'Name', value: `${firstName} ${lastName}` },
        { label: 'Phone', value: phone },
        { label: 'Email', value: email },
        { label: 'Service Interest', value: serviceInterest },
        { label: 'Message', value: message },
      ],
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received.',
        id: submission._id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Home contact form submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
