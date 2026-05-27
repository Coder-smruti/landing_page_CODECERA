"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import { PRICING, LANDING } from "@/lib/landing-copy"

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-muted/40 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-12"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-4xl">
            Transparent <span className="gradient-text">Website Pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Clear starting prices for Chennai businesses. No hidden fees — you know the budget before we start.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
          {PRICING.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm ${
                plan.highlighted
                  ? "border-primary shadow-lg ring-2 ring-primary/20"
                  : "border-border/60"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {plan.priceNote}
              </p>
              <h3 className="mt-1 text-lg font-bold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-primary md:text-4xl">{plan.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ScrollToFormButton
                className={`mt-6 w-full ${plan.highlighted ? "glow-blue" : ""}`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {LANDING.cta}
                <ArrowRight className="ml-2 size-4" />
              </ScrollToFormButton>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground md:text-sm">
          * Starting prices for standard packages. Final quote depends on pages, features & content.
          GST applicable as per law. Request a free quote for exact pricing.
        </p>
      </div>
    </section>
  )
}
