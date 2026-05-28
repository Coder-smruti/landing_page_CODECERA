import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PortfolioSection } from "@/components/portfolio-section"
import { FinalCTASection } from "@/components/final-cta-section"

export const metadata: Metadata = {
  title: "Website Portfolio | Chennai Web Design Projects | Codecera",
  description:
    "See live websites built by Codecera for Chennai and India businesses — clinics, ecommerce, travel, fitness and more.",
}

export default function PortfolioPage() {
  return (
    <PageShell>
      <PortfolioSection />
      <FinalCTASection />
    </PageShell>
  )
}
