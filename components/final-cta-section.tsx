"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import { CONTACT } from "@/lib/contact"
import { LANDING } from "@/lib/landing-copy"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/gtm"

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-14 text-background md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-4xl">
            Ready for a Website That Brings Enquiries?
          </h2>
          <p className="mb-2 text-base text-background/80 md:text-lg">
            Business websites from {LANDING.startingPrice} only. Free quote within 24 hours.
          </p>
          <p className="mb-8 text-sm text-background/60">
            Chennai-based team · Mobile & SEO included · 2–4 week delivery
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ScrollToFormButton
              size="lg"
              className="h-12 w-full bg-primary px-8 font-semibold hover:bg-primary/90 sm:w-auto"
            >
              {LANDING.cta}
            </ScrollToFormButton>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full border-background/30 bg-transparent text-background hover:bg-background/10 sm:w-auto"
              asChild
            >
              <a href={`tel:${CONTACT.phoneTel}`} onClick={() => trackPhoneClick("final_cta")}>
                <Phone className="mr-2 size-4" />
                {CONTACT.phone}
              </a>
            </Button>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("final_cta")}
            className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 underline-offset-4 hover:text-background hover:underline"
          >
            <MessageCircle className="size-4" />
            Or message us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
