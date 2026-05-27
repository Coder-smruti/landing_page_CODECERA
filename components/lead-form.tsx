"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Loader2, AlertCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CONTACT_FORM_ID } from "@/lib/scroll-to-form"
import { LANDING } from "@/lib/landing-copy"
import { trackFormSubmission } from "@/lib/gtm"
import { cn } from "@/lib/utils"

type LeadFormProps = {
  variant?: "hero" | "standalone"
  className?: string
}

export function LeadForm({ variant = "standalone", className }: LeadFormProps) {
  const isHero = variant === "hero"
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        const message = data.error || "Failed to submit form"
        throw new Error(message)
      }

      setIsSubmitted(true)
      trackFormSubmission(formData.businessType)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const thankYou = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-xl border bg-card p-8 text-center shadow-xl md:rounded-2xl"
    >
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-500/15">
        <CheckCircle className="size-7 text-emerald-600" />
      </div>
      <h3 className="mb-2 text-lg font-bold">Quote Request Received!</h3>
      <p className="text-sm text-muted-foreground">
        We&apos;ll call or WhatsApp you within 24 hours with your free website quote.
      </p>
    </motion.div>
  )

  const formCard = (
    <div className="rounded-xl border-2 border-primary/20 bg-card p-5 shadow-xl md:rounded-2xl md:p-6">
      {!isHero && (
        <div className="mb-5 text-center">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">
            Get Your <span className="gradient-text">Free Website Quote</span>
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            We&apos;ll contact you within 24 hours. No spam.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Your Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="h-11 text-sm md:h-12"
        />
        <Input
          placeholder="Phone Number *"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="h-11 text-sm md:h-12"
        />
        <Input
          placeholder="Business Type (e.g. Clinic, Restaurant) *"
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          required
          className="h-11 text-sm md:h-12"
        />
        {error && (
          <div className="flex items-start gap-2 text-sm text-destructive">
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        <Button
          type="submit"
          size="lg"
          className="glow-blue h-12 w-full text-sm font-semibold md:text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 size-4" />
              {LANDING.cta}
            </>
          )}
        </Button>
        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <Lock className="size-3 shrink-0" />
          Your details are safe. Chennai team — reply within 24 hrs.
        </p>
        <p className="text-center text-[10px] text-muted-foreground">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  )

  if (isSubmitted) {
    return (
      <div id={CONTACT_FORM_ID} className={cn("scroll-mt-24", className)}>
        {thankYou}
      </div>
    )
  }

  if (isHero) {
    return (
      <motion.div
        id={CONTACT_FORM_ID}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("w-full scroll-mt-24", className)}
      >
        <div className="mb-3 lg:hidden">
          <h2 className="text-lg font-bold">
            Get Your <span className="gradient-text">Free Website Quote</span>
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            We&apos;ll contact you within 24 hours. No spam.
          </p>
        </div>
        {formCard}
      </motion.div>
    )
  }

  return (
    <section className="scroll-mt-24 py-12 md:py-16" id={CONTACT_FORM_ID}>
      <div className={cn("container mx-auto max-w-md px-4", className)}>{formCard}</div>
    </section>
  )
}
