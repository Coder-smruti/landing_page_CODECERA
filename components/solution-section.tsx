"use client"

import { motion } from "framer-motion"
import { CheckCircle, Smartphone, Gauge, TrendingUp, Sparkles } from "lucide-react"

const features = [
  { icon: Sparkles, text: "Premium Modern Design" },
  { icon: Smartphone, text: "Mobile-First Responsive" },
  { icon: Gauge, text: "Lightning Fast Speed" },
  { icon: TrendingUp, text: "SEO Optimized" },
]

export function SolutionSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-2">
            We Build Websites That Make Businesses{" "}
            <span className="gradient-text">Look Premium</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Modern. Fast. SEO-optimized. Designed to generate enquiries and sales.
          </p>
        </motion.div>

        {/* Before/After Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-10 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-3 md:-top-4 left-3 md:left-4 bg-destructive text-destructive-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold z-10">
                BEFORE
              </div>
              <div className="aspect-[4/3] rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 border-2 md:border-4 border-gray-300 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px]" />
                <div className="relative text-center p-4 md:p-8">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-400 rounded-full mx-auto mb-3 md:mb-4" />
                  <div className="h-3 md:h-4 w-24 md:w-32 bg-gray-400 rounded mx-auto mb-2" />
                  <div className="h-2 md:h-3 w-32 md:w-48 bg-gray-300 rounded mx-auto mb-2" />
                  <div className="h-2 md:h-3 w-28 md:w-40 bg-gray-300 rounded mx-auto" />
                  <p className="text-gray-500 mt-3 md:mt-4 font-medium text-xs md:text-base">Outdated. Slow. Unprofessional.</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute -top-3 md:-top-4 left-3 md:left-4 bg-accent text-accent-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold z-10">
                AFTER
              </div>
              <div className="aspect-[4/3] rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 md:border-4 border-primary/30 shadow-xl md:shadow-2xl overflow-hidden relative glow-blue">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="relative h-full flex flex-col">
                  {/* Mock Browser Header */}
                  <div className="bg-card/80 backdrop-blur px-3 md:px-4 py-2 md:py-3 border-b flex items-center gap-1.5 md:gap-2">
                    <div className="flex gap-1 md:gap-1.5">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400" />
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-2 md:mx-4">
                      <div className="bg-muted rounded-md md:rounded-lg px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs text-muted-foreground truncate">
                        www.yourbusiness.com
                      </div>
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="flex-1 p-4 md:p-6 flex flex-col items-center justify-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-accent mb-3 md:mb-4 animate-pulse" />
                    <div className="h-3 md:h-4 w-28 md:w-40 bg-gradient-to-r from-primary/30 to-accent/30 rounded mb-1.5 md:mb-2" />
                    <div className="h-2 md:h-3 w-40 md:w-56 bg-muted rounded mb-3 md:mb-4" />
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="h-6 md:h-8 w-16 md:w-24 bg-primary rounded-md md:rounded-lg" />
                      <div className="h-6 md:h-8 w-16 md:w-24 bg-accent/20 border border-accent rounded-md md:rounded-lg" />
                    </div>
                    <p className="text-primary mt-3 md:mt-4 font-bold text-xs md:text-sm">Modern. Fast. Converting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-4 px-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 md:gap-3 bg-card px-3 md:px-6 py-2 md:py-3 rounded-full border shadow-sm"
            >
              <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
              <span className="font-medium text-xs md:text-base whitespace-nowrap">{feature.text}</span>
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
