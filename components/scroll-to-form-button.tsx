"use client"

import type { ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { scrollToContactForm } from "@/lib/scroll-to-form"

type ScrollToFormButtonProps = ComponentProps<typeof Button> & {
  onNavigate?: () => void
}

export function ScrollToFormButton({
  onNavigate,
  onClick,
  children,
  ...props
}: ScrollToFormButtonProps) {
  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event)
        onNavigate?.()
        scrollToContactForm()
      }}
    >
      {children}
    </Button>
  )
}
