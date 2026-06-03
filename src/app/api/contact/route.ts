import { NextResponse } from 'next/server'

import dbConnect from '@/lib/dbConnect'
import ContactPageInquiry from '@/models/ContactPageInquiry'
import { contactFormSchema, contactPageSchema } from '@/lib/schemas'

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

    const pageParsed = contactPageSchema.safeParse(payload)
    if (pageParsed.success) {
      const { firstName, lastName, phone, email, iAm, servicesInterested, county, message } =
        pageParsed.data

      await dbConnect()

      const submission = await ContactPageInquiry.create({
        firstName,
        lastName,
        phone,
        email,
        iAm,
        servicesInterested,
        county,
        message,
      })

      return NextResponse.json(
        {
          success: true,
          message: 'Your message has been received.',
          id: submission._id,
        },
        { status: 201 },
      )
    }

    const simpleParsed = contactFormSchema.safeParse(payload)
    if (simpleParsed.success) {
      const { firstName, lastName, phone, email, county, message } = simpleParsed.data

      await dbConnect()

      const submission = await ContactPageInquiry.create({
        firstName,
        lastName,
        phone,
        email,
        county,
        message,
      })

      return NextResponse.json(
        {
          success: true,
          message: 'Your message has been received.',
          id: submission._id,
        },
        { status: 201 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Please check the form and try again.',
        issues: pageParsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
