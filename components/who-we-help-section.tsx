"use client"

import { motion } from "framer-motion"
import { 
  UtensilsCrossed, 
  Stethoscope, 
  Dumbbell, 
  Scissors, 
  Building2, 
  GraduationCap, 
  Rocket, 
  Store 
} from "lucide-react"

const businesses = [
  { icon: UtensilsCrossed, name: "Restaurants", color: "from-orange-400 to-red-500" },
  { icon: Stethoscope, name: "Clinics", color: "from-blue-400 to-cyan-500" },
  { icon: Dumbbell, name: "Gyms", color: "from-purple-400 to-pink-500" },
  { icon: Scissors, name: "Salons", color: "from-pink-400 to-rose-500" },
  { icon: Building2, name: "Real Estate", color: "from-emerald-400 to-green-500" },
  { icon: GraduationCap, name: "Educational Institutes", color: "from-indigo-400 to-blue-500" },
  { icon: Rocket, name: "Startups", color: "from-violet-400 to-purple-500" },
  { icon: Store, name: "Local Businesses", color: "from-amber-400 to-orange-500" },
]

export function WhoWeHelpSection() {
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
            Built For <span className="gradient-text">Growing Businesses</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            We&apos;ve helped businesses across Chennai establish a powerful online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={business.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300 text-center overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${business.color} mx-auto mb-2 md:mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <business.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xs md:text-base leading-tight">{business.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
