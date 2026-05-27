"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { CLIENT_LOGOS } from "@/lib/landing-copy"

export function TrustStrip() {
  return (
    <section className="border-y bg-background py-8 md:py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:text-sm">
            Trusted by Chennai & Tamil Nadu businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {CLIENT_LOGOS.map((client) => (
              <a
                key={client.domain}
                href={`https://${client.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary md:px-4 md:text-sm"
              >
                {client.name}
                <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Live websites you can verify today — including brands powered by Codecera
          </p>
        </motion.div>
      </div>
    </section>
  )
}
