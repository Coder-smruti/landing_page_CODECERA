"use client"

import { motion } from "framer-motion"
import { MapPin, IndianRupee, Clock, Globe, Search, Headphones } from "lucide-react"
import { WHY_CHOOSE } from "@/lib/landing-copy"

const icons = [MapPin, IndianRupee, Clock, Globe, Search, Headphones]

export function WhyChooseSection() {
  return (
    <section id="why-codecera" className="scroll-mt-24 bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-12"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-4xl">
            Why Chennai Businesses <span className="gradient-text">Choose Codecera</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            A Chennai-based web development team focused on results — enquiries, calls, and WhatsApp messages for your business.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = icons[index] ?? Globe
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border bg-card p-5 shadow-sm md:p-6"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-sm md:text-base">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
