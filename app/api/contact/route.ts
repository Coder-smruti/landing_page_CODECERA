import { NextResponse } from "next/server"
import { CONTACT } from "@/lib/contact"

type FormPayload = {
  name: string
  phone: string
  businessType: string
}

async function sendViaWeb3Forms(payload: FormPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) return false

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New Website Quote Request - Codecera",
      from_name: payload.name,
      phone: payload.phone,
      message: [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Business Type: ${payload.businessType}`,
      ].join("\n"),
    }),
  })

  const data = await response.json()
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Web3Forms delivery failed")
  }
  return true
}

function resolveSiteUrl(request: Request) {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  }

  const origin = request.headers.get("origin")
  if (origin) return origin.replace(/\/$/, "")

  const referer = request.headers.get("referer")
  if (referer) {
    try {
      return new URL(referer).origin
    } catch {
      // ignore invalid referer
    }
  }

  return "https://web.codecera.com"
}

async function sendViaFormSubmit(payload: FormPayload, siteUrl: string) {
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
    throw new Error(data?.message || "FormSubmit delivery failed")
  }

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

    if (await sendViaWeb3Forms(payload)) {
      return NextResponse.json({ success: true })
    }

    const siteUrl = resolveSiteUrl(request)
    await sendViaFormSubmit(payload, siteUrl)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    let message =
      error instanceof Error ? error.message : "Failed to send your request."

    if (message.toLowerCase().includes("activation")) {
      message =
        "Form email not activated yet. Add WEB3FORMS_ACCESS_KEY in Vercel (recommended) — see setup at web3forms.com with icodecera@gmail.com"
    }

    return NextResponse.json({ error: message }, { status: 502 })
  }
}
