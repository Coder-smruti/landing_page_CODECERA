export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-17589112703"

/** Optional: Google Ads → Goals → Conversions → Tag setup → copy label after AW-17589112703/ */
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackGoogleAdsConversion(
  eventName: string,
  params?: Record<string, string | number>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return

  if (eventName === "conversion" && GOOGLE_ADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      ...params,
    })
    return
  }

  window.gtag("event", eventName, params)
}
