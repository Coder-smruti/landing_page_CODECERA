import {
  GOOGLE_ADS_CONVERSION_LABEL,
  trackGoogleAdsConversion,
} from "@/lib/google-ads"

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

type GtmEvent = {
  event: string
  event_category?: string
  event_label?: string
  value?: number
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function pushGtmEvent(data: GtmEvent) {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(data)
}

export function trackFormSubmission(businessType?: string) {
  pushGtmEvent({
    event: "generate_lead",
    event_category: "Lead Form",
    event_label: businessType || "Website Quote",
    value: 1,
  })

  if (GOOGLE_ADS_CONVERSION_LABEL) {
    trackGoogleAdsConversion("conversion", {
      event_category: "Lead Form",
      event_label: businessType || "Website Quote",
    })
  } else {
    trackGoogleAdsConversion("generate_lead", {
      event_category: "Lead Form",
      event_label: businessType || "Website Quote",
    })
  }
}

export function trackWhatsAppClick(source: string) {
  pushGtmEvent({
    event: "whatsapp_click",
    event_category: "WhatsApp",
    event_label: source,
    value: 1,
  })

  trackGoogleAdsConversion("whatsapp_click", {
    event_category: "WhatsApp",
    event_label: source,
  })
}

export function trackPhoneClick(source: string) {
  pushGtmEvent({
    event: "phone_click",
    event_category: "Phone",
    event_label: source,
    value: 1,
  })

  trackGoogleAdsConversion("phone_click", {
    event_category: "Phone",
    event_label: source,
  })
}
