export type LeadFormData = {
  name: string
  phone: string
  businessType: string
}

export async function submitLeadForm(formData: LeadFormData) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error(
      "Form is not configured yet. Please use WhatsApp on this page — we reply within 24 hours."
    )
  }

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
