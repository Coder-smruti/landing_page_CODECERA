"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ } from "@/lib/landing-copy"

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-muted/40 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-10"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-4xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Common questions from Chennai business owners about website development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-xl border bg-card px-4 shadow-sm md:px-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold md:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
