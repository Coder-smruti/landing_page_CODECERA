export const CONTACT_FORM_ID = "contact"

export function scrollToContactForm() {
  const formSection = document.getElementById(CONTACT_FORM_ID)
  if (!formSection) return

  formSection.scrollIntoView({ behavior: "smooth", block: "start" })

  window.setTimeout(() => {
    const firstInput = formSection.querySelector<HTMLInputElement>("input")
    firstInput?.focus({ preventScroll: true })
  }, 700)
}
