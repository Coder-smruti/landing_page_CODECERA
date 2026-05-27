"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Clock, Shield, TrendingUp, Eye, Zap } from "lucide-react"

const stats = [
  { icon: Clock, label: "Online Presence", value: "24/7", suffix: "" },
  { icon: Shield, label: "Customer Trust", value: "95", suffix: "%" },
  { icon: TrendingUp, label: "More Leads", value: "3", suffix: "x" },
  { icon: Eye, label: "Better Visibility", value: "10", suffix: "x" },
  { icon: Zap, label: "Faster Growth", value: "2", suffix: "x" },
]

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const numValue = parseInt(value)

  useEffect(() => {
    if (isInView && !isNaN(numValue)) {
      let start = 0
      const end = numValue
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, numValue])

  if (isNaN(numValue)) {
    return <span ref={ref}>{value}</span>
  }

  return <span ref={ref}>{count}{suffix}</span>
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-accent mx-auto mb-2 md:mb-4 flex items-center justify-center">
          <stat.icon className="h-5 w-5 md:h-7 md:w-7 text-white" />
        </div>
        <div className="text-xl md:text-3xl lg:text-4xl font-bold gradient-text mb-0.5 md:mb-1">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </div>
        <p className="text-[10px] md:text-sm text-muted-foreground leading-tight">{stat.label}</p>
      </div>
    </motion.div>
  )
}

export function BusinessImpactSection() {
  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements - Reduced on mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)] md:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-2">
            Your Website Works{" "}
            <span className="gradient-text">Even While You Sleep</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            A professional website generates leads, builds trust, and grows your business around the clock.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile: First 4 in 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {stats.slice(0, 4).map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
          
          {/* Mobile: 5th stat centered */}
          <div className="flex justify-center mt-3 md:hidden">
            <div className="w-1/2">
              <StatCard stat={stats[4]} index={4} />
            </div>
          </div>

          {/* Desktop: All 5 in a row */}
          <div className="hidden md:grid md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label + '-desktop'} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
