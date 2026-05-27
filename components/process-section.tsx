"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We understand your business, goals, and target audience",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful, conversion-focused designs",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Code,
    title: "Development",
    description: "Building fast, responsive, SEO-optimized websites",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Going live with full testing and optimization",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Ongoing support to help your business grow",
    color: "from-primary to-accent",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-2">
            Simple Process. <span className="gradient-text">Fast Delivery.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            From concept to launch in weeks, not months.
          </p>
        </motion.div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center text-[10px] font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="p-4 rounded-xl bg-card border shadow-sm">
                    <h3 className="text-base font-bold mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline - Alternating */}
        <div className="hidden md:block max-w-4xl mx-auto relative">
          {/* Connection Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-lg transition-all duration-300 inline-block">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
