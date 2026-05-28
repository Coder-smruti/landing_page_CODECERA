export type LeadFormData = {
  name: string
  phone: string
  businessType: string
}

async function sendViaWeb3Forms(accessKey: string, formData: LeadFormData) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New Website Quote Request - Codecera",
      from_name: formData.name,
      phone: formData.phone,
      message: [
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        `Business Type: ${formData.businessType}`,
      ].join("\n"),
    }),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok || !data?.success) {
    throw new Error(
      data?.message || "Could not send your request. Please try WhatsApp instead."
    )
  }
}

export async function submitLeadForm(formData: LeadFormData) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  if (accessKey) {
    await sendViaWeb3Forms(accessKey, formData)
    return
  }

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    throw new Error(
      data.error ||
        "Form not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel and Redeploy."
    )
  }
}
