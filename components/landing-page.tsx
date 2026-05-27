import { HeroSection } from "@/components/hero-section"
import { TrustStrip } from "@/components/trust-strip"
import { PortfolioSection } from "@/components/portfolio-section"
import { PricingSection } from "@/components/pricing-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { Navbar } from "@/components/navbar"

export function LandingPage() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <PortfolioSection />
      <PricingSection />
      <WhyChooseSection />
      <FaqSection />
      <FinalCTASection />
      <Footer />
      <StickyMobileCta />
      <FloatingWhatsApp />
    </main>
  )
}
