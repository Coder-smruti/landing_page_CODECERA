import { NextResponse } from "next/server"
import { CONTACT } from "@/lib/contact"

type FormPayload = {
  name: string
  phone: string
  businessType: string
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
    const needsActivation =
      !data?.success ||
      data.message?.toLowerCase().includes("activate") ||
      data.message?.toLowerCase().includes("confirm")

    if (needsActivation) {
      throw new Error(
        "Almost ready — check icodecera@gmail.com (inbox & spam) for a FormSubmit activation email and click the link. Then submit again."
      )
    }

    throw new Error(
      data?.message || "Could not send your request. Please try WhatsApp or call us directly."
    )
  }

  return data
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
    const siteUrl = resolveSiteUrl(request)

    await sendViaFormSubmit(payload, siteUrl)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    const message =
      error instanceof Error ? error.message : "Failed to send your request."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
