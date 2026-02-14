import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Varun Mathur',
    template: '%s | Varun Mathur',
  },
  description: 'Personal portfolio and blog.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Varun Mathur',
    description: 'Personal portfolio and blog.',
    url: baseUrl,
    siteName: 'Varun Mathur',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased" style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <main className="flex-auto min-w-0 flex flex-col relative z-10">
          <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
