import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleTagManager } from '@/components/google-tag-manager'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Website Development Company in Chennai | From ₹4,999 | Codecera',
  description: 'Chennai website development company. Business websites from ₹4,999 only. Mobile-friendly, SEO-ready sites for clinics, restaurants & local businesses. Free quote in 24 hours.',
  keywords: 'website development company in chennai, web design company chennai, business website development chennai, website developers chennai, web design services chennai, website cost chennai',
  authors: [{ name: 'Codecera' }],
  creator: 'Codecera',
  publisher: 'Codecera',
  openGraph: {
    title: 'Website Development Company in Chennai | From ₹4,999 | Codecera',
    description: 'Business websites from ₹4,999 only. Mobile-friendly, SEO-ready websites for Chennai businesses. Free quote within 24 hours.',
    url: 'https://codecera.com',
    siteName: 'Codecera',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codecera | Website Development Company in Chennai',
    description: 'Get a premium modern website designed to grow your business online.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export const viewport = {
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <GoogleTagManager />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
