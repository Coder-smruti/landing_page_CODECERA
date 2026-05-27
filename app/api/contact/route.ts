import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { CONTACT } from "@/lib/contact"

type FormPayload = {
  name: string
  phone: string
  businessType: string
}

async function sendViaWeb3Forms(payload: FormPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) return null

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New Website Quote Request - Codecera",
      from_name: payload.name,
      phone: payload.phone,
      message: `Business Type: ${payload.businessType}\nPhone: ${payload.phone}\nName: ${payload.name}`,
    }),
  })

  const data = await response.json()
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Web3Forms delivery failed")
  }
  return data
}

async function sendViaFormSubmit(payload: FormPayload) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  const response = await fetch(
    `https://formsubmit.co/ajax/${CONTACT.formRecipientEmail}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/`,
      },
      body: JSON.stringify({
        name: payload.name,
        phone: payload.phone,
        businessType: payload.businessType,
        _subject: "New Website Quote Request - Codecera",
        _template: "table",
        _captcha: "false",
      }),
    }
  )

  const data = await response.json().catch(() => null)
  if (!data || (data.success !== "true" && data.success !== true)) {
    throw new Error(
      data?.message ||
        "Email delivery failed. Check icodecera@gmail.com and activate FormSubmit if this is the first submission."
    )
  }
  return data
}

async function sendViaSmtp(payload: FormPayload) {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  if (!smtpUser || !smtpPass) return null

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: smtpUser, pass: smtpPass },
  })

  await transporter.sendMail({
    from: `"Codecera Website" <${smtpUser}>`,
    to: CONTACT.formRecipientEmail,
    replyTo: CONTACT.email,
    subject: "New Website Quote Request - Codecera",
    text: [
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Business Type: ${payload.businessType}`,
    ].join("\n"),
    html: `
      <h2>New Website Quote Request</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Business Type:</strong> ${payload.businessType}</p>
    `,
  })
  return true
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = body.name?.trim()
    const phone = body.phone?.trim()
    const businessType = body.businessType?.trim()

    if (!name || !phone || !businessType) {
      return NextResponse.json(
        { error: "Name, phone, and business type are required." },
        { status: 400 }
      )
    }

    const payload: FormPayload = { name, phone, businessType }

    if (await sendViaSmtp(payload)) return NextResponse.json({ success: true })
    if (await sendViaWeb3Forms(payload)) return NextResponse.json({ success: true })

    await sendViaFormSubmit(payload)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    const message =
      error instanceof Error ? error.message : "Failed to send your request."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
