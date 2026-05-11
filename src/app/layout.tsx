import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blanks Built | Licensed General Contractor #1079334',
  description: 'Premium general contracting services. New construction, remodeling, commercial and residential projects. Licensed Contractor #1079334.',
  keywords: 'general contractor, construction, remodeling, new construction, commercial contractor, residential contractor, License 1079334',
  openGraph: {
    title: 'Blanks Built | Licensed General Contractor #1079334',
    description: 'Premium construction services — built on integrity, delivered with precision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="bg-concrete font-body antialiased">
        {children}
      </body>
    </html>
  )
}
