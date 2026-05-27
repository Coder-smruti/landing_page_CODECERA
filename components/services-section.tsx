"use client"

import { motion } from "framer-motion"
import { 
  Globe, 
  ShoppingCart, 
  Search, 
  FileText, 
  Palette, 
  RefreshCw, 
  MessageCircle, 
  Server, 
  MapPin, 
  BarChart3 
} from "lucide-react"

const services = [
  { icon: Globe, title: "Business Websites", description: "Professional websites that build trust" },
  { icon: ShoppingCart, title: "Ecommerce Websites", description: "Sell products online 24/7" },
  { icon: Search, title: "SEO Optimization", description: "Get found on Google" },
  { icon: FileText, title: "Landing Pages", description: "High-converting lead pages" },
  { icon: Palette, title: "Branding", description: "Complete visual identity" },
  { icon: RefreshCw, title: "Website Redesign", description: "Modernize your online presence" },
  { icon: MessageCircle, title: "WhatsApp Integration", description: "Connect with customers instantly" },
  { icon: Server, title: "Hosting Support", description: "Reliable, fast hosting" },
  { icon: MapPin, title: "Google Maps Integration", description: "Local visibility boost" },
  { icon: BarChart3, title: "Analytics Setup", description: "Track visitor behavior" },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-2">
            More Than Just <span className="gradient-text">A Website</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Complete digital solutions to help your business thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="group"
            >
              <div className="h-full p-3 md:p-5 rounded-xl md:rounded-2xl bg-card border hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 mx-auto mb-2 md:mb-3 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xs md:text-sm mb-0.5 md:mb-1 leading-tight">{service.title}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight hidden sm:block">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
