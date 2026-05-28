"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react"
import { CONTACT } from "@/lib/contact"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/gtm"
import { FOOTER_QUICK_LINKS } from "@/lib/nav-links"

const quickLinks = FOOTER_QUICK_LINKS

const services = [
  "Business Websites",
  "Ecommerce",
  "SEO Optimization",
  "Landing Pages",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <Image
              src={CONTACT.logo}
              alt="Codecera"
              width={150}
              height={60}
              className="mb-3 md:mb-4 w-[120px] md:w-[150px] h-auto"
            />
            <p className="text-xs leading-relaxed text-background/70 md:text-sm">
              Website development company in Chennai. Business websites from ₹4,999 only —
              mobile-friendly, SEO-ready & built to bring enquiries.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-sm md:text-lg mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-sm md:text-lg mb-3 md:mb-4">Services</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-xs md:text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 md:col-span-1"
          >
            <h4 className="font-bold text-sm md:text-lg mb-3 md:mb-4">Contact Us</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a 
                  href={getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("footer")}
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                >
                  <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${CONTACT.phoneTel}`}
                  onClick={() => trackPhoneClick("footer")}
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                >
                  <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-xs md:text-sm">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 flex-shrink-0" />
                <span>{CONTACT.location}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-background/50 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Codecera. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-xs text-background/50 underline-offset-4 hover:text-background/80 hover:underline md:text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href="https://instagram.com/codecera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a 
              href="https://linkedin.com/company/codecera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a 
              href="https://twitter.com/codecera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Twitter className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
