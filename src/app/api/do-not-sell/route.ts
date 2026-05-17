import { NextResponse } from 'next/server'

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

  console.log('[do-not-sell] request:', { ...parsed.data, receivedAt: new Date().toISOString() })

  return NextResponse.json(
    { success: true, message: 'Request received.' },
    { status: 200 },
  )
}

