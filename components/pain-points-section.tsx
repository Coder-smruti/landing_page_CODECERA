"use client"

import { motion } from "framer-motion"
import { XCircle, Globe, Zap, Users, Search } from "lucide-react"

const painPoints = [
  {
    icon: Globe,
    title: "No Website = No Trust",
    description: "Customers judge your business online before they contact you.",
  },
  {
    icon: Zap,
    title: "Slow Website = Lost Leads",
    description: "Visitors leave quickly when websites feel outdated.",
  },
  {
    icon: Users,
    title: "Competitors Look More Professional",
    description: "Modern websites build instant credibility.",
  },
  {
    icon: Search,
    title: "Invisible On Google",
    description: "If customers can't find you online, they choose someone else.",
  },
]

export function PainPointsSection() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-2">
            Your Business Might Be{" "}
            <span className="gradient-text">Losing Customers</span> Right Now
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Every day without a modern online presence is a missed opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <XCircle className="h-5 w-5 md:h-7 md:w-7 text-destructive" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 group-hover:text-destructive transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>

                {/* Icon in corner - hidden on small mobile */}
                <point.icon className="absolute bottom-3 right-3 md:bottom-4 md:right-4 h-10 w-10 md:h-16 md:w-16 text-muted/10 group-hover:text-destructive/10 transition-colors hidden sm:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
