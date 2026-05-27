"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Search, MapPin, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const searchQueries = [
  "Restaurant near me",
  "Best clinic in Chennai",
  "Salon nearby",
  "Gym near me",
  "Real estate Chennai",
]

const fakeResults = [
  { name: "Chennai Premier Restaurant", rating: "4.8", reviews: "234" },
  { name: "Elite Fitness Studio", rating: "4.9", reviews: "189" },
  { name: "Modern Hair Salon", rating: "4.7", reviews: "156" },
]

export function VisibilitySection() {
  const [currentQuery, setCurrentQuery] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [showMissing, setShowMissing] = useState(false)

  useEffect(() => {
    const query = searchQueries[currentQuery]
    let charIndex = 0
    setTypedText("")
    setShowResults(false)
    setShowMissing(false)

    const typeInterval = setInterval(() => {
      if (charIndex < query.length) {
        setTypedText(query.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => setShowResults(true), 500)
        setTimeout(() => setShowMissing(true), 1500)
        setTimeout(() => {
          setCurrentQuery((prev) => (prev + 1) % searchQueries.length)
        }, 4000)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [currentQuery])

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
            Is Your Business Easy To Find{" "}
            <span className="gradient-text">Online?</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            When customers search for services like yours, do they find you — or your competitors?
          </p>
        </motion.div>

        {/* Search Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Search Bar */}
          <div className="bg-card rounded-xl md:rounded-2xl shadow-xl border p-1.5 md:p-2 mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground flex-shrink-0" />
              <span className="text-sm md:text-lg flex-1 truncate">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
              <div className="bg-primary text-primary-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium flex-shrink-0">
                Search
              </div>
            </div>
          </div>

          {/* Search Results */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: showResults ? 1 : 0, height: showResults ? "auto" : 0 }}
            className="bg-card rounded-xl md:rounded-2xl shadow-lg border overflow-hidden"
          >
            <div className="p-3 md:p-4 space-y-3 md:space-y-4">
              {fakeResults.map((result, index) => (
                <motion.div
                  key={result.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showResults ? 1 : 0, x: showResults ? 0 : -20 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm md:text-base truncate">{result.name}</h4>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-yellow-500">★ {result.rating}</span>
                      <span>({result.reviews} reviews)</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Your Business Missing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: showMissing ? 1 : 0, scale: showMissing ? 1 : 0.9 }}
                transition={{ duration: 0.5 }}
                className="p-3 md:p-4 rounded-lg md:rounded-xl bg-destructive/10 border border-destructive/20"
              >
                <div className="flex items-center gap-2 md:gap-3 text-destructive">
                  <AlertCircle className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span className="font-bold text-sm md:text-lg">Your Business — Not Found</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showMissing ? 1 : 0, y: showMissing ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-6 md:mt-8 px-4"
          >
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Let&apos;s <span className="gradient-text">Fix That.</span>
            </h3>
            <Button size="lg" className="glow-blue w-full sm:w-auto h-12 md:h-auto text-sm md:text-base">
              Get Your Business Online Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
