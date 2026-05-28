import { NextResponse } from "next/server"

type FormPayload = {
  name: string
  phone: string
  businessType: string
}

function getWeb3FormsKey() {
  return (
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  )
}

async function sendViaWeb3Forms(payload: FormPayload) {
  const accessKey = getWeb3FormsKey()
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

    if (!(await sendViaWeb3Forms(payload))) {
      return NextResponse.json(
        {
          error:
            "Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel → Environment Variables, then Redeploy. Get free key at web3forms.com with icodecera@gmail.com",
        },
        { status: 503 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    const message =
      error instanceof Error ? error.message : "Failed to send your request."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
