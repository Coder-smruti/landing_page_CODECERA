"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PORTFOLIO_PROJECTS, getDomain, type PortfolioProject } from "@/lib/portfolio"

function PortfolioCard({
  project,
  index,
}: {
  project: PortfolioProject
  index: number
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_2px_16px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)]"
    >
      {/* Browser mockup + preview — fixed height for every card */}
      <div className="flex-shrink-0 bg-[#eceff3] px-3 pt-3">
        <div className="mb-2.5 flex items-center gap-2">
          <div className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff5f57] md:size-3" />
            <span className="size-2.5 rounded-full bg-[#febc2e] md:size-3" />
            <span className="size-2.5 rounded-full bg-[#28c840] md:size-3" />
          </div>
          <p className="min-w-0 flex-1 truncate rounded-md border border-black/5 bg-white px-3 py-1.5 text-center text-[10px] text-muted-foreground md:text-[11px]">
            {getDomain(project.url)}
          </p>
        </div>

        <div className="relative h-[200px] overflow-hidden rounded-t-lg border border-black/5 bg-white sm:h-[220px] md:h-[240px] lg:h-[260px]">
          <Image
            src={project.image}
            alt={`${project.title} homepage`}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 576px"
            priority={index < 2}
          />
        </div>
      </div>

      {/* Content — equal structure, button pinned bottom-right */}
      <div className="relative flex min-h-[7.5rem] flex-1 flex-col p-5 md:min-h-[8rem] md:p-6">
        <span
          className={`inline-flex w-fit items-center rounded-full bg-gradient-to-r px-2.5 py-0.5 text-[10px] font-semibold text-white md:text-xs ${project.color}`}
        >
          {project.category}
        </span>

        <h3 className="mt-2.5 line-clamp-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-lg">
          {project.title}
        </h3>

        <p className="mt-1 truncate text-xs text-muted-foreground md:text-sm">
          {getDomain(project.url)}
        </p>

        <span className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground md:bottom-6 md:right-6">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </motion.a>
  )
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="overflow-x-hidden py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-14"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-4xl">
            Websites We&apos;ve Built for <span className="gradient-text">Real Clients</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Live business websites you can verify today — including brands powered by Codecera across Chennai & Tamil Nadu.
          </p>
        </motion.div>

        <ul className="mx-auto grid max-w-6xl list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <li key={project.url} className="flex min-w-0">
              <PortfolioCard project={project} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
