"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick } from "@/lib/gtm"

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Codecera on WhatsApp"
      onClick={() => trackWhatsAppClick("floating_desktop")}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-shadow hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] md:flex"
    >
      <MessageCircle className="size-6" />
      <span className="absolute -right-0.5 -top-0.5 flex size-3">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex size-3 rounded-full bg-white/40" />
      </span>
    </motion.a>
  )
}
