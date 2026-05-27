import type { Metadata } from "next"
import { LandingPage } from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Web Design Services Chennai | Business Websites From ₹4,999 | Codecera",
  description:
    "Google Ads landing page for Chennai businesses. Professional web design & website development from ₹4,999. Mobile-friendly, SEO-ready. Free quote in 24 hours.",
  keywords:
    "web design services chennai, website development company in chennai, business website development chennai, website developers chennai",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://codecera.com/chennai-web-design",
  },
  openGraph: {
    title: "Web Design Services Chennai | From ₹4,999 | Codecera",
    description: "Chennai web design & website development. Business websites from ₹4,999 only. Get a free quote today.",
    url: "https://codecera.com/chennai-web-design",
    siteName: "Codecera",
    locale: "en_IN",
    type: "website",
  },
}

export default function ChennaiWebDesignPage() {
  return <LandingPage />
}
