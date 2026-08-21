import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { insertLead } from '../lib/leads.js'

interface EmailPayload {
  form: 'bar-services' | 'contact'
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  metadata?: Record<string, string | string[] | undefined>
  lead_ref?: string
  page_path?: string
  channel?: string
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

  function setCorsHeaders() {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value)
    })
  }

  setCorsHeaders()

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const payload = req.body as EmailPayload | undefined
  if (!payload || !payload.name || !payload.email || !payload.message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpTo = process.env.SMTP_TO

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpTo) {
    console.error(
      'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (Google App Password), and SMTP_TO. See docs/superpowers/google-smtp-setup.md.'
    )
    return res.status(500).json({ error: 'Email service is not configured' })
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
    try {
      await insertLead({
        source: payload.form,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        subject: payload.subject,
        message: payload.message,
        metadata: payload.metadata,
        leadRef: payload.lead_ref,
        pagePath: payload.page_path,
        channel: payload.channel,
      })
    } catch (error) {
      console.error('Failed to save lead:', error)
    }

    await transporter.sendMail({
      from: `"MyChef Website" <${smtpUser}>`,
      to: smtpTo,
      replyTo: payload.email,
      subject: payload.subject || `New ${formLabel} from ${payload.name}`,
      text: textBody,
      html: htmlBody,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Failed to send email:', error)
    return res.status(500).json({ error: 'Failed to send email' })
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
