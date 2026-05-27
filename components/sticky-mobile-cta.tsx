"use client"

import { MessageCircle } from "lucide-react"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import { LANDING } from "@/lib/landing-copy"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick } from "@/lib/gtm"

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <ScrollToFormButton className="glow-blue h-11 flex-1 font-semibold text-sm">
          {LANDING.ctaShort}
        </ScrollToFormButton>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Codecera"
          onClick={() => trackWhatsAppClick("sticky_mobile")}
          className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-md"
        >
          <MessageCircle className="size-5" />
        </a>
      </div>
    </div>
  )
}
