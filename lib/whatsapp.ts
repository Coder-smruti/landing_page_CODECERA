import { CONTACT } from "@/lib/contact"

export const WHATSAPP_MESSAGE =
  "Hi Codecera! I need a website quote for my Chennai business."

export function getWhatsAppUrl() {
  return `https://wa.me/${CONTACT.phoneWhatsApp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}
