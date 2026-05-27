"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    business: "Priya's Kitchen Restaurant",
    text: "Our online orders increased by 200% after Codecera redesigned our website. Customers love the easy ordering experience!",
    rating: 5,
  },
  {
    name: "Dr. Rajesh Kumar",
    business: "Chennai Family Clinic",
    text: "Professional website that builds trust with patients. Appointment bookings have doubled since launch.",
    rating: 5,
  },
  {
    name: "Anitha Rajan",
    business: "Glamour Beauty Salon",
    text: "The website perfectly captures our brand. We get compliments from new customers every day!",
    rating: 5,
  },
  {
    name: "Karthik Vel",
    business: "FitZone Gym",
    text: "Memberships increased significantly. The website showcases our facilities beautifully.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      return () => el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-2">
            Businesses Are Moving Online{" "}
            <span className="gradient-text">Fast</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            See what our clients have to say about their digital transformation.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => scroll('left')}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card border shadow-lg items-center justify-center transition-opacity ${
              canScrollLeft ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card border shadow-lg items-center justify-center transition-opacity ${
              canScrollRight ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] snap-center"
              >
                <div className="h-full p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Quote Icon */}
                  <Quote className="absolute top-3 right-3 md:top-4 md:right-4 h-8 w-8 md:h-10 md:w-10 text-primary/10" />
                  
                  {/* Rating */}
                  <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base line-clamp-4 md:line-clamp-none">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm md:text-base">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.business}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-2 md:hidden">
            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
