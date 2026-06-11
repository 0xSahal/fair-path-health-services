import nodemailer from 'nodemailer'

import { SITE_CONFIG } from '@/lib/constants'

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
})

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function getFirstName(name: string): string {
  const trimmed = name.trim()
  return trimmed.split(/\s+/)[0] || trimmed
}

function formatFieldValue(
  value: string | string[] | number | undefined | null,
): string | null {
  if (value === undefined || value === null || value === '') return null
  if (Array.isArray(value)) return value.length > 0 ? value.join(', ') : null
  return String(value)
}

export function buildFormFields(
  entries: { label: string; value: string | string[] | number | undefined | null }[],
): { label: string; value: string }[] {
  return entries
    .map((entry) => {
      const value = formatFieldValue(entry.value)
      return value !== null ? { label: entry.label, value } : null
    })
    .filter((entry): entry is { label: string; value: string } => entry !== null)
}

function buildThankYouHtml(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting Fair Path Healthcare</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#FFFFFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(44,26,14,0.08);">
          <tr>
            <td style="background-color:#2C1A0E;padding:28px 32px;text-align:center;">
              <p style="margin:0;font-size:22px;font-weight:bold;color:#FFFFFF;letter-spacing:0.5px;">Fair Path Healthcare</p>
              <p style="margin:8px 0 0;font-size:13px;color:#C9874F;letter-spacing:1px;text-transform:uppercase;">Compassionate Home Care</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 32px;background-color:#FAF7F2;">
              <p style="margin:0 0 16px;font-size:16px;color:#2C1A0E;">Dear ${escapeHtml(firstName)},</p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#3D2B1F;">
                Thank you for reaching out to <strong style="color:#C9874F;">Fair Path Healthcare</strong>. We truly appreciate you taking the time to contact us.
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#3D2B1F;">
                Your message has been received, and a member of our care team will get back to you shortly. We understand that reaching out for home care support is an important step, and we are here to help your family with compassion and care.
              </p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3D2B1F;">
                If your inquiry is urgent, please feel free to call us directly at <strong style="color:#C9874F;">${escapeHtml(SITE_CONFIG.phone)}</strong>.
              </p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#3D2B1F;">
                Warm regards,<br />
                <strong style="color:#2C1A0E;">The Fair Path Healthcare Team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#2C1A0E;padding:16px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#C9874F;">Fair Path Healthcare &mdash; Caring for families across Georgia</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildAdminNotificationHtml(options: {
  formTitle: string
  fields: { label: string; value: string }[]
  submittedAt: Date
}): string {
  const timestamp = options.submittedAt.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const tableRows = options.fields
    .map(
      (row) => `
          <tr>
            <td style="padding:12px 16px;font-size:13px;font-weight:bold;color:#2C1A0E;background-color:#FAF7F2;border-bottom:1px solid #E8DDD0;width:160px;vertical-align:top;">${escapeHtml(row.label)}</td>
            <td style="padding:12px 16px;font-size:14px;color:#3D2B1F;border-bottom:1px solid #E8DDD0;vertical-align:top;">${escapeHtml(row.value)}</td>
          </tr>`,
    )
    .join('')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(options.formTitle)}</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#FFFFFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(44,26,14,0.08);">
          <tr>
            <td style="background-color:#2C1A0E;padding:24px 32px;">
              <p style="margin:0;font-size:20px;font-weight:bold;color:#FFFFFF;">New Form Submission</p>
              <p style="margin:6px 0 0;font-size:13px;color:#C9874F;">${escapeHtml(options.formTitle)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 20px;font-size:13px;color:#666;">
                <strong style="color:#2C1A0E;">Submitted:</strong> ${escapeHtml(timestamp)}
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E8DDD0;border-radius:6px;overflow:hidden;">
                ${tableRows}
              </table>
              <p style="margin:24px 0 0;font-size:14px;color:#3D2B1F;font-style:italic;">
                Please follow up with this inquiry as soon as possible.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function sendThankYouEmail(firstName: string, email: string): Promise<void> {
  try {
    await transporter.sendMail({
      from: `Fair Path Healthcare <${process.env.BREVO_FROM_EMAIL}>`,
      to: email,
      subject: 'Thank You for Contacting Fair Path Healthcare',
      html: buildThankYouHtml(firstName),
    })
  } catch (error) {
    console.error('Thank you email failed:', error)
  }
}

export async function sendAdminNotificationEmail(options: {
  subjectName: string
  formType: string
  formTitle: string
  fields: { label: string; value: string }[]
  submittedAt: Date
}): Promise<void> {
  try {
    await transporter.sendMail({
      from: `Fair Path Healthcare Website <${process.env.BREVO_FROM_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New ${options.formType} – ${options.subjectName} | Fair Path Healthcare`,
      html: buildAdminNotificationHtml({
        formTitle: options.formTitle,
        fields: options.fields,
        submittedAt: options.submittedAt,
      }),
    })
  } catch (error) {
    console.error('Admin notification email failed:', error)
  }
}

export function sendFormSubmissionEmails(options: {
  submitterFirstName?: string
  submitterEmail?: string
  subjectName: string
  formType: string
  formTitle: string
  fields: { label: string; value: string | string[] | number | undefined | null }[]
  submittedAt?: Date
}): void {
  const submittedAt = options.submittedAt ?? new Date()
  const fields = buildFormFields(options.fields)

  if (options.submitterFirstName && options.submitterEmail) {
    void sendThankYouEmail(options.submitterFirstName, options.submitterEmail)
  }

  void sendAdminNotificationEmail({
    subjectName: options.subjectName,
    formType: options.formType,
    formTitle: options.formTitle,
    fields,
    submittedAt,
  })
}
