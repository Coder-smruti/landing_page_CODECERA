import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { LeadForm } from "@/components/lead-form"

export const metadata: Metadata = {
  title: "Get Free Website Quote | Codecera Chennai",
  description:
    "Request a free website quote from Codecera. Chennai-based team replies within 24 hours. Business websites from ₹4,999.",
}

export default function ContactPage() {
  return (
    <PageShell>
      <LeadForm variant="standalone" className="py-8 md:py-12" />
    </PageShell>
  )
}
