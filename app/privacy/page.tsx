import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Privacy Policy | Codecera",
  description: "Privacy Policy for Codecera website development services in Chennai.",
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:h-16">
          <Link href="/" className="text-sm font-semibold text-primary hover:underline">
            ← Back to Codecera
          </Link>
          <Link
            href="/#contact"
            className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground md:text-sm"
          >
            Get Free Quote
          </Link>
        </div>
      </header>

      <article className="container mx-auto max-w-3xl px-4 py-10 md:py-16">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last updated: May 27, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-sm leading-relaxed text-foreground md:text-base">
          <p>
            Codecera (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website{" "}
            <strong>codecera.com</strong> and provides website development services in Chennai,
            Tamil Nadu, India. This Privacy Policy explains how we collect, use, and protect your
            information when you visit our website or submit a quote request.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-bold">1. Information We Collect</h2>
            <p className="mb-2">When you fill out our contact or quote form, we may collect:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Business type or business name</li>
              <li>Email address (if provided)</li>
              <li>Any message you send us via WhatsApp or email</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              We also automatically collect basic analytics data such as pages visited, device type,
              browser, and approximate location through Google Tag Manager / Google Analytics (when
              enabled).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">2. How We Use Your Information</h2>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>To respond to your quote request within 24 hours</li>
              <li>To contact you by phone, WhatsApp, or email about our services</li>
              <li>To provide website development proposals and project updates</li>
              <li>To improve our website and marketing (aggregated analytics only)</li>
              <li>To measure Google Ads campaign performance and conversions</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">3. We Do Not Sell Your Data</h2>
            <p className="text-muted-foreground">
              We do not sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">4. Third-Party Services</h2>
            <p className="mb-2 text-muted-foreground">We may use trusted third-party tools such as:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Google Tag Manager & Google Analytics (website analytics)</li>
              <li>Google Ads (advertising conversion tracking)</li>
              <li>FormSubmit / Web3Forms / email services (form delivery)</li>
              <li>WhatsApp (customer communication)</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              These services have their own privacy policies. We recommend reviewing them if you
              interact with those platforms directly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">5. Cookies</h2>
            <p className="text-muted-foreground">
              Our website may use cookies and similar technologies for analytics and advertising
              measurement. You can disable cookies in your browser settings, though some features
              may not work as intended.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">6. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain enquiry information for as long as needed to respond to your request, provide
              services, or comply with legal obligations. You may request deletion of your data at any
              time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">7. Your Rights</h2>
            <p className="text-muted-foreground">
              You may request access to, correction of, or deletion of your personal data by
              contacting us at the details below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">8. Contact Us</h2>
            <p className="text-muted-foreground">
              For privacy-related questions or data requests, contact:
            </p>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li>
                <strong>Codecera</strong>
              </li>
              <li>Email: {CONTACT.email}</li>
              <li>Phone: {CONTACT.phone}</li>
              <li>Location: {CONTACT.location}, India</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">9. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated date.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
