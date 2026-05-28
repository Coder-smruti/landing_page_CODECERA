"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Phone, ChevronRight } from "lucide-react"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import { CONTACT } from "@/lib/contact"
import { LANDING } from "@/lib/landing-copy"
import { NAV_LINKS } from "@/lib/nav-links"

const navLinks = NAV_LINKS

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass border-b shadow-sm" : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between md:h-16">
            <Link href="/" className="relative z-50 flex items-center">
              <Image
                src={CONTACT.logo}
                alt="Codecera - Website Development Chennai"
                width={100}
                height={32}
                className="h-6 w-auto md:h-8"
                priority
              />
            </Link>

            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="size-4" />
                <span className="hidden lg:inline">{CONTACT.phone}</span>
              </a>
              <ScrollToFormButton size="sm" className="glow-blue text-xs font-semibold lg:text-sm">
                {LANDING.ctaShort}
              </ScrollToFormButton>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 md:hidden"
              aria-label="Toggle menu"
            >
              <div className="relative h-6 w-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute top-1 left-0 h-0.5 w-6 rounded-full bg-foreground"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-3 left-0 h-0.5 w-6 rounded-full bg-foreground"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute top-5 left-0 h-0.5 w-6 rounded-full bg-foreground"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative flex h-full flex-col items-center justify-center px-6 pt-16"
            >
              <div className="flex w-full max-w-xs flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium hover:bg-muted/50"
                  >
                    {link.name}
                    <ChevronRight className="size-5 text-muted-foreground" />
                  </Link>
                ))}
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground"
                >
                  <Phone className="size-5" />
                  {CONTACT.phone}
                </a>
                <ScrollToFormButton
                  size="lg"
                  className="glow-blue mt-2 h-14 w-full font-semibold"
                  onNavigate={() => setIsOpen(false)}
                >
                  {LANDING.cta}
                </ScrollToFormButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
