import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTASection } from "@/components/final-cta-section"

export const metadata: Metadata = {
  title: "Website Pricing Chennai | From ₹4,999 | Codecera",
  description:
    "Transparent website pricing for Chennai businesses. Business websites from ₹4,999, ecommerce from ₹14,999. No hidden charges.",
}

export default function PricingPage() {
  return (
    <PageShell>
      <PricingSection />
      <FinalCTASection />
    </PageShell>
  )
}
