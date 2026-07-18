import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

interface EmailPayload {
  form: 'bar-services' | 'contact'
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  metadata?: Record<string, string | string[] | undefined>
}

const ALLOWED_ORIGINS = [
  'https://mychef.id',
  'https://www.mychef.id',
]

function getCorsHeaders(origin: string) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || ''
  const corsHeaders = getCorsHeaders(origin)

  if (req.method === 'OPTIONS') {
    return res.status(204).set(corsHeaders).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).set(corsHeaders).json({ error: 'Method not allowed' })
  }

  const payload = req.body as EmailPayload | undefined
  if (!payload || !payload.name || !payload.email || !payload.message) {
    return res.status(400).set(corsHeaders).json({ error: 'Missing required fields' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpTo = process.env.SMTP_TO

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpTo) {
    return res.status(500).set(corsHeaders).json({ error: 'Email service is not configured' })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: true,
    },
  })

  const formLabel = payload.form === 'bar-services' ? 'B2B Bar Services enquiry' : 'Contact form enquiry'
  const metadataLines = payload.metadata
    ? Object.entries(payload.metadata)
        .filter(([, value]) => value !== undefined && value !== '')
        .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
        .join('\n')
    : ''

  const textBody = [
    `New ${formLabel}`,
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone/WhatsApp: ${payload.phone}` : '',
    '',
    metadataLines ? `${metadataLines}\n` : '',
    'Message:',
    payload.message,
  ]
    .filter(Boolean)
    .join('\n')

  const htmlBody = `
    <h2>New ${formLabel}</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${payload.phone ? `<p><strong>Phone/WhatsApp:</strong> ${escapeHtml(payload.phone)}</p>` : ''}
    ${metadataLines ? `<pre style="font-family: sans-serif; white-space: pre-wrap;">${escapeHtml(metadataLines)}</pre>` : ''}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>
  `

  try {
    await transporter.sendMail({
      from: `"MyChef Website" <${smtpUser}>`,
      to: smtpTo,
      replyTo: payload.email,
      subject: payload.subject || `New ${formLabel} from ${payload.name}`,
      text: textBody,
      html: htmlBody,
    })

    return res.status(200).set(corsHeaders).json({ success: true })
  } catch (error) {
    console.error('Failed to send email:', error)
    return res.status(500).set(corsHeaders).json({ error: 'Failed to send email' })
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
