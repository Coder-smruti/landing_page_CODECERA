import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"

type PageShellProps = {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <div className="pt-14 md:pt-16">{children}</div>
      <Footer />
      <StickyMobileCta />
      <FloatingWhatsApp />
    </main>
  )
}
