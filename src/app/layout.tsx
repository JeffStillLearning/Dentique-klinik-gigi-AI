import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Geist, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { JsonLd } from '@/components/seo/JsonLd'
import { dentistSchema, websiteSchema, faqSchema } from '@/data/schemas'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
  preload: false,
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
  preload: false,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dentique.co.id'),
  title: {
    default: 'Dentique Clinic — Klinik Gigi Modern di Senopati, Jakarta Selatan',
    template: '%s | Dentique Clinic',
  },
  description:
    'Klinik gigi premium di Senopati, Jakarta Selatan. Perawatan estetik & restoratif: veneer, implan, behel, dan pediatri. 9 dokter spesialis bersertifikasi. Konsultasi pertama gratis. Mitra BPJS & 12 asuransi.',
  keywords: [
    'klinik gigi jakarta selatan',
    'dokter gigi senopati',
    'klinik gigi SCBD',
    'veneer gigi jakarta',
    'implan gigi jakarta selatan',
    'behel gigi senopati',
    'klinik gigi anak jakarta',
    'bleaching gigi jakarta',
    'dokter gigi kebayoran baru',
    'dentique clinic',
  ],
  authors: [{ name: 'Dentique Clinic', url: 'https://dentique.co.id' }],
  creator: 'Dentique Clinic',
  publisher: 'Dentique Clinic',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://dentique.co.id',
    siteName: 'Dentique Clinic',
    title: 'Dentique Clinic — Klinik Gigi Modern Senopati Jakarta',
    description:
      'Perawatan gigi estetik & restoratif oleh 9 dokter spesialis bersertifikasi. Konsultasi pertama gratis. Mitra BPJS & 12 asuransi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentique Clinic — Klinik Gigi Modern di Senopati Jakarta Selatan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentique Clinic — Klinik Gigi Modern Jakarta',
    description: 'Konsultasi pertama gratis. 9 dokter spesialis. Mitra BPJS.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://dentique.co.id',
    languages: { 'id-ID': 'https://dentique.co.id' },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B3A3A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Senopati, Kebayoran Baru, Jakarta Selatan" />
        <meta name="geo.position" content="-6.2300;106.8068" />
        <meta name="ICBM" content="-6.2300, 106.8068" />
        <JsonLd data={dentistSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={faqSchema} />
      </head>
      <body className="bg-cream text-ink antialiased font-sans text-[16px] leading-[1.55]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
