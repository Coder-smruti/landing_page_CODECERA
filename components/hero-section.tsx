"use client"

import { motion } from "framer-motion"
import { MessageCircle, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import { LeadForm } from "@/components/lead-form"
import { LANDING } from "@/lib/landing-copy"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick } from "@/lib/gtm"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.15]" />

      <div className="container relative z-10 mx-auto px-4 py-5 md:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Mobile: headline + form above the fold */}
          <div className="lg:hidden">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <MapPin className="size-3 shrink-0" />
              Chennai · From {LANDING.startingPrice}
            </div>
            <h1 className="mb-2 text-2xl font-bold leading-tight">{LANDING.headline}</h1>
            <p className="mb-4 text-sm font-semibold">{LANDING.priceLine}</p>
            <LeadForm variant="hero" className="mb-6" />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Desktop content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
                <MapPin className="size-3.5 shrink-0" />
                Chennai, Tamil Nadu
              </div>

              <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight xl:text-[2.75rem] xl:leading-[1.15]">
                {LANDING.headline}
              </h1>

              <p className="mb-4 text-lg font-semibold">{LANDING.priceLine}</p>

              <p className="mb-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {LANDING.subheading}
              </p>

              <ul className="mb-8 flex flex-wrap gap-x-5 gap-y-2">
                {LANDING.trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-1.5 text-sm">
                    <CheckCircle className="size-4 shrink-0 text-emerald-600" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <ScrollToFormButton size="lg" className="glow-blue h-12 px-8 font-semibold">
                  {LANDING.cta}
                </ScrollToFormButton>
                <Button size="lg" variant="outline" className="h-12 border-2" asChild>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("hero_desktop")}
                  >
                    <MessageCircle className="mr-2 size-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Desktop form */}
            <div className="hidden lg:block lg:max-w-md lg:justify-self-end xl:max-w-lg">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">
                  Get Your <span className="gradient-text">Free Website Quote</span>
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  We&apos;ll contact you within 24 hours. No spam.
                </p>
              </div>
              <LeadForm variant="hero" />
            </div>
          </div>

          {/* Mobile: details below form */}
          <div className="lg:hidden">
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{LANDING.subheading}</p>
            <ul className="mb-4 grid grid-cols-2 gap-2">
              {LANDING.trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5 text-xs">
                  <CheckCircle className="size-3.5 shrink-0 text-emerald-600" />
                  {point}
                </li>
              ))}
            </ul>
            <Button size="lg" variant="outline" className="h-11 w-full border-2" asChild>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero_mobile")}
              >
                <MessageCircle className="mr-2 size-4" />
                WhatsApp Us Instead
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
