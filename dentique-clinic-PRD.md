# PRD — Dentique Clinic · Landing Page
**Product Requirements Document**
Version: 1.0 | Status: Ready for Development
Source: Dentique_Clinic.html (design reference)
Stack: Next.js 15 · Tailwind CSS v3 · Vercel
Target: Lighthouse 100 semua metrik

---

## 1. RINGKASAN PROYEK

| Item | Detail |
|---|---|
| **Nama Klinik** | Dentique Clinic |
| **Tagline** | *"Senyum yang Anda percaya, seumur hidup."* |
| **Tipe Bisnis** | Klinik Gigi Premium — Estetik & Restoratif |
| **Lokasi** | Jl. Suryo No. 24, Senopati, Kebayoran Baru, Jakarta Selatan 12180 |
| **Koordinat** | -6.2300° S, 106.8068° E |
| **Kontak** | +62 21 7234 9090 · WhatsApp: +6281234567890 · halo@dentique.co.id |
| **Berdiri** | 2014 |
| **Tujuan Halaman** | Booking janji konsultasi (form + WhatsApp redirect) |
| **Target Skor** | Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100 |
| **Framework** | Next.js 15.x (App Router, Static Export) |
| **Styling** | Tailwind CSS v3 + CSS Variables (design tokens dari HTML reference) |
| **Hosting** | Vercel (Static Adapter) |
| **Node.js Min** | v18.18.0 |
| **Domain** | `dentique.co.id` |

---

## 2. KONTEN AKTUAL DARI FILE REFERENSI

> Data berikut diekstrak langsung dari `Dentique_Clinic.html` dan menjadi source of truth untuk implementasi.

### 2.1 Stats Hero

| Statistik | Nilai |
|---|---|
| Tahun Praktik | 12+ tahun |
| Pasien Terlayani | 8.400+ |
| Dokter Spesialis | 9 |
| Rating Google | 4.9/5 (612 ulasan) |

### 2.2 Trust Bar Items

- ✓ Terakreditasi **KARS Paripurna**
- ✓ Semua dokter ber-**STR & SIP aktif**
- ✓ Sterilisasi **Standar Eropa EN 13060**
- ✓ Mitra **BPJS & 12 asuransi**

### 2.3 Layanan & Harga

| No | Layanan | Deskripsi | Harga Mulai |
|---|---|---|---|
| 01 | Pemeriksaan & Pembersihan | Skeling, polishing, pemeriksaan rutin dengan kamera intra-oral. Dianjurkan setiap 6 bulan. | Rp 380.000 |
| 02 | Veneer & Bleaching ⭐ | Pemutihan gigi profesional dan veneer porselen estetik dengan pratinjau digital sebelum tindakan. | Rp 2.800.000 |
| 03 | Implan Gigi | Implan sistem Straumann & Osstem, dipandu navigasi 3D untuk presisi dan masa pemulihan singkat. | Rp 14.500.000 |
| 04 | Behel & Aligner Bening | Behel konvensional, self-ligating, dan clear aligner. Konsultasi rencana 24 bulan disertakan. | Rp 6.500.000 |
| 05 | Perawatan Saluran Akar | Endodontik mikroskopik dengan rotari NiTi — mengurangi kunjungan dan kenyamanan lebih baik. | Rp 2.100.000 |
| 06 | Dentique Kids 👶 | Ruang khusus anak, dokter pedodontik, pendekatan tell-show-do, dan kursi karakter. | Rp 250.000 |

### 2.4 Alur Booking (4 Langkah)

| Step | Judul | Deskripsi | Durasi |
|---|---|---|---|
| i | Hubungi Kami | Booking via WhatsApp, telepon, atau form. Respons dalam 1 jam jam kerja. | ~5 menit |
| ii | Konsultasi Awal | Pemeriksaan menyeluruh, rontgen panoramik, diskusi opsi perawatan — gratis kunjungan pertama. | ~30 menit |
| iii | Rencana & Estimasi | Rencana tertulis: tahapan, durasi, biaya total, opsi cicilan 0% s/d 12 bulan. | Sebelum tindakan |
| iv | Perawatan & Tindak Lanjut | Perawatan sesuai jadwal + akses portal riwayat & pengingat pasien. | Berkelanjutan |

### 2.5 Tim Dokter

| Kode | Nama | Spesialisasi | Pendidikan | No. STR | Jadwal |
|---|---|---|---|---|---|
| DOC-01 | drg. Anindita Larasati, Sp.KG | Konservasi Gigi · Founding Partner | FKG UI 2008, Sp.KG UI 2014 | 3311100823145621 | Sen–Jum, Pagi |
| DOC-02 | drg. Rendra Kusuma, Sp.Ort | Ortodonti · Behel & Aligner | FKG UNPAD 2010, Sp.Ort UNPAD 2016 | 3311100923145897 | — |
| DOC-03 | drg. Senja Maharani, Sp.BM | Bedah Mulut · Implan | — | — | — |

### 2.6 Jam Operasional

| Hari | Jam |
|---|---|
| Senin — Jumat | 09.00 — 21.00 |
| Sabtu | 09.00 — 18.00 |
| Minggu | Tutup (darurat tersedia) |
| Hari Libur Nasional | Tutup |

### 2.7 Form Booking Fields

| Field | Type | Wajib | Opsi |
|---|---|---|---|
| Nama Lengkap | text | ✅ | — |
| Nomor WhatsApp | tel | ✅ | — |
| Email | email | ❌ | — |
| Layanan yang Diminati | select | ✅ | Pemeriksaan & Pembersihan, Veneer / Bleaching, Implan Gigi, Behel / Aligner, Perawatan Saluran Akar, Dentique Kids, Belum yakin |
| Preferensi Jadwal | select | ❌ | Pagi 09–12, Siang 12–16, Sore/Malam 16–21, Akhir pekan |
| Catatan untuk Dokter | textarea | ❌ | — |

### 2.8 Mitra Asuransi

- BPJS Kesehatan
- Prudential, AXA Mandiri, Manulife, Allianz
- Cigna, Great Eastern, Sun Life
- Admedika, Lippo Insurance, Aviva
- BNI Life, Sequis (total 12 mitra)

### 2.9 Design Tokens (dari CSS referensi)

```css
--cream:       #F5F1EA   /* Background utama */
--cream-2:     #EFE9DD   /* Background sekunder */
--paper:       #FBF8F2   /* Card/form background */
--ink:         #1B3A3A   /* Teks utama, CTA primary */
--ink-2:       #2A4D4D   /* Nav links */
--ink-soft:    #5C7373   /* Teks muted, label */
--line:        #D9D2C2   /* Border default */
--line-soft:   #E6DFCD   /* Border halus */
--clay:        #B8714A   /* Aksen utama (CTA, highlight) */
--clay-deep:   #9A5A38   /* Hover state clay */
--gold:        #B89968   /* Aksen sekunder (dark sections) */

--display:     "Instrument Serif", serif
--sans:        "Geist", system-ui, sans-serif
--mono:        "JetBrains Mono", monospace
```

---

## 3. TUJUAN BISNIS & SUCCESS METRICS

| Metrik | Target |
|---|---|
| Lighthouse Performance | 100 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Core Web Vitals — LCP | < 1.2s |
| Core Web Vitals — CLS | 0.0 |
| Core Web Vitals — INP | < 100ms |
| First Contentful Paint | < 0.8s |
| Total JS Bundle (client) | < 50KB gzipped |
| Total Page Transfer | < 500KB (gambar teroptimasi) |
| Structured Data Errors | 0 |

---

## 4. TECH STACK & ARSITEKTUR

### 4.1 Stack Lengkap

```
Framework       : Next.js 15.x (App Router)
Render Mode     : Static Export (output: 'export')
                  → Zero server runtime → deploy ke Vercel Edge CDN
                  → Semua halaman pre-render saat build

Styling         : Tailwind CSS v3
                  → CSS Variables untuk design tokens Dentique
                  → Custom font stack dari referensi HTML
                  → ~10–18KB CSS gzipped di production (purged)

JavaScript      : React 19 (bundled Next.js 15)
                  → Server Components: mayoritas halaman (zero JS ke browser)
                  → 'use client': hanya komponen interaktif

Fonts           : next/font (self-hosted otomatis)
                  → Instrument Serif (400, 400i)
                  → Geist (300, 400, 500, 600)
                  → JetBrains Mono (400, 500)
                  → font-display: swap, subset latin

Images          : next/image
                  → Auto AVIF/WebP conversion
                  → Responsive srcset otomatis
                  → Hero: priority={true} → preload LCP
                  → Semua lain: lazy loading

Icons           : Inline SVG components
                  → Zero HTTP request, zero render blocking

Maps            : Google Maps Embed API
                  → iframe loading="lazy"
                  → Fallback: static map image

Analytics       : @vercel/analytics (privacy-first)

Type Safety     : TypeScript 5.x (strict mode)

Linting         : ESLint (Next.js config) + Prettier

Sitemap         : next-sitemap (auto-generate)

Deployment      : Vercel
                  → Static adapter
                  → Edge Network CDN
                  → Auto HTTPS, HTTP/2
                  → Preview deployments per PR
```

### 4.2 Kenapa Next.js 15 untuk Klinik Gigi

```
✓ Static Export → zero server cost, ultra-fast dari CDN
✓ next/image → otomatis AVIF/WebP + preload hero (LCP kritis)
✓ next/font → Instrument Serif + Geist + JetBrains Mono self-hosted,
              zero FOIT, zero layout shift (CLS 0.0)
✓ Server Components → FAQ, dokter, layanan = zero JS ke browser
✓ Metadata API → generateMetadata() per halaman, TypeScript-safe
✓ App Router → layout.tsx bersama, structured data inject sekali
✓ React 19 useFormStatus → form booking dengan loading state
✓ Turbopack → HMR <500ms development
```

### 4.3 Struktur Direktori

```
dentique-clinic/
│
├── public/
│   ├── robots.txt                    ← AI + search crawler policy
│   ├── llms.txt                      ← AI LLM instructions
│   ├── sitemap.xml                   ← Auto via next-sitemap
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png          ← 180×180
│   ├── og-image.jpg                  ← 1200×630
│   ├── manifest.webmanifest
│   └── images/
│       ├── hero/
│       │   └── clinic-interior.jpg   ← Foto ruang klinik utama
│       ├── doctors/
│       │   ├── anindita-larasati.jpg
│       │   ├── rendra-kusuma.jpg
│       │   └── senja-maharani.jpg    ← + 6 dokter lainnya
│       ├── facilities/
│       │   ├── treatment-room-1.jpg
│       │   ├── treatment-room-2.jpg
│       │   ├── kids-room.jpg
│       │   ├── xray-room.jpg
│       │   └── reception.jpg
│       └── testimonials/
│           └── [foto pasien jika ada]
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                ← RootLayout: font, metadata, schema
│   │   ├── page.tsx                  ← Home: semua sections
│   │   ├── not-found.tsx             ← Custom 404
│   │   └── globals.css               ← CSS variables + Tailwind base
│   │
│   ├── components/
│   │   ├── sections/                 ← Server Components (no 'use client')
│   │   │   ├── AnnouncementBar.tsx   ← "Konsultasi pertama gratis — 31 Mei"
│   │   │   ├── NavBar.tsx            ← Sticky nav + logo + links + CTA
│   │   │   ├── HeroSection.tsx       ← h1, stats, hero image
│   │   │   ├── TrustBar.tsx          ← KARS, STR/SIP, EN 13060, BPJS
│   │   │   ├── ServicesSection.tsx   ← 6 layanan grid
│   │   │   ├── FlowSection.tsx       ← 4 langkah booking
│   │   │   ├── DoctorsSection.tsx    ← 9 dokter grid
│   │   │   ├── FacilitiesSection.tsx ← Gallery fasilitas
│   │   │   ├── TestimonialSection.tsx← Ulasan pasien + asuransi logos
│   │   │   ├── FAQSection.tsx        ← FAQ accordion (data driven)
│   │   │   ├── LocationSection.tsx   ← Peta + info kontak + jam
│   │   │   ├── BookingSection.tsx    ← CTA kiri + form kanan
│   │   │   └── FooterSection.tsx     ← Brand + links + bottom bar
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx            ← btn-primary, btn-ghost, btn-clay
│   │   │   ├── ServiceCard.tsx       ← Server Component
│   │   │   ├── DoctorCard.tsx        ← Server Component
│   │   │   ├── FAQAccordion.tsx      ← 'use client' (toggle aria)
│   │   │   ├── BookingForm.tsx       ← 'use client' (form + WA redirect)
│   │   │   └── WhatsAppFAB.tsx       ← 'use client' (fixed bottom)
│   │   │
│   │   └── seo/
│   │       ├── JsonLd.tsx            ← Generic JSON-LD injector
│   │       ├── DentistSchema.tsx     ← Dentist + MedicalBusiness schema
│   │       ├── FAQSchema.tsx         ← FAQPage schema
│   │       └── BreadcrumbSchema.tsx  ← BreadcrumbList auto-generate
│   │
│   ├── data/
│   │   ├── site.ts                   ← Config global (nama, WA, alamat)
│   │   ├── services.ts               ← 6 layanan + harga (typed)
│   │   ├── doctors.ts                ← 9 dokter + STR + jadwal (typed)
│   │   ├── faq.ts                    ← FAQ items (typed)
│   │   ├── testimonials.ts           ← Ulasan pasien (typed)
│   │   └── insurance.ts              ← 12 mitra asuransi
│   │
│   ├── lib/
│   │   ├── whatsapp.ts               ← Build WA URL + pesan pre-filled
│   │   ├── formatCurrency.ts         ← Format Rupiah IDR
│   │   └── cn.ts                     ← clsx + tailwind-merge
│   │
│   └── types/
│       ├── service.ts
│       ├── doctor.ts
│       └── faq.ts
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── next-sitemap.config.ts
├── .env.local                        ← Tidak di-commit
├── .env.example                      ← Template, di-commit
├── vercel.json                       ← Security headers + cache
└── package.json
```

---

## 5. KONFIGURASI NEXT.JS 15

### 5.1 next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,

  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },

  experimental: {
    optimizeCss: true,
    turbopack: true,    // stable di Next.js 15
  },
}

export default nextConfig
```

### 5.2 app/layout.tsx

```typescript
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Geist, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { JsonLd } from '@/components/seo/JsonLd'
import { dentistSchema, websiteSchema, webPageSchema } from '@/data/schemas'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
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
    'Klinik gigi premium di Senopati, Jakarta Selatan. Perawatan estetik & restoratif: veneer, implan, behel, dan pediatri. Dokter spesialis bersertifikasi. Konsultasi pertama gratis. Mitra BPJS & 12 asuransi.',
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
      'max-video-preview': -1,
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

  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B3A3A',   // --ink dari design tokens
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Geo SEO — Jakarta Selatan */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Senopati, Kebayoran Baru, Jakarta Selatan" />
        <meta name="geo.position" content="-6.2300;106.8068" />
        <meta name="ICBM" content="-6.2300, 106.8068" />

        {/* Structured Data */}
        <JsonLd data={dentistSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={webPageSchema} />
      </head>
      <body className="font-sans bg-cream text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 5.3 globals.css (Design Tokens)

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Colors — dari Dentique_Clinic.html */
  --cream:      #F5F1EA;
  --cream-2:    #EFE9DD;
  --paper:      #FBF8F2;
  --ink:        #1B3A3A;
  --ink-2:      #2A4D4D;
  --ink-soft:   #5C7373;
  --line:       #D9D2C2;
  --line-soft:  #E6DFCD;
  --clay:       #B8714A;
  --clay-deep:  #9A5A38;
  --gold:       #B89968;

  /* Fonts — mapped ke next/font variables */
  --font-display: var(--font-display, "Times New Roman", serif);
  --font-sans:    var(--font-sans, system-ui, sans-serif);
  --font-mono:    var(--font-mono, ui-monospace, monospace);

  /* Layout */
  --maxw: 1280px;
  --pad: clamp(20px, 4vw, 56px);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:focus-visible {
  outline: 3px solid var(--clay);
  outline-offset: 3px;
  border-radius: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 6. PERFORMANCE REQUIREMENTS

### 6.1 Core Web Vitals Strategy

**LCP — Target < 1.2s**
```typescript
// Hero image ruang klinik — priority preload
<Image
  src="/images/hero/clinic-interior.jpg"
  alt="Ruang perawatan Dentique Clinic, Senopati Jakarta Selatan"
  fill
  priority                    // → <link rel="preload"> otomatis
  quality={85}
  sizes="(max-width: 900px) 100vw, 50vw"
  className="object-cover"
  fetchPriority="high"        // React 19 prop
/>
```

**CLS — Target 0.0**
```typescript
// SEMUA komponen ini menyebabkan CLS jika tidak ditangani:

// 1. Fonts → next/font eliminasi FOUT sepenuhnya
// 2. Images → selalu width + height atau fill + parent relative
// 3. Announcement bar → fixed height, tidak perlu JS untuk show/hide
// 4. Nav sticky → tidak menyebabkan reflow karena position:sticky

// ✅ Pola yang wajib untuk semua gambar:
<div className="relative aspect-[4/5]">    // aspect-ratio reserved
  <Image src="..." alt="..." fill className="object-cover" />
</div>

// ✅ Dokter card — aspect ratio reserved sebelum gambar load:
<div className="relative aspect-[4/5] bg-cream-2">
  <Image src={doctor.photo} alt={doctor.name} fill className="object-cover" />
</div>
```

**INP — Target < 100ms**
```typescript
// Komponen 'use client' yang butuh perhatian INP:

// FAQAccordion — CSS-first, JS hanya untuk aria
// Saat toggle: HANYA ubah aria-expanded + CSS class
// Tidak ada re-fetch, tidak ada berat computation

// BookingForm — useTransition (React 19) untuk non-blocking
'use client'
import { useTransition } from 'react'

function BookingForm() {
  const [isPending, startTransition] = useTransition()

  function handleSubmit(formData: FormData) {
    startTransition(() => {
      // Build WA URL dan redirect — non-blocking
      const waUrl = buildBookingURL(formData)
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    })
  }
}
```

### 6.2 Server vs Client Component Split

```
SERVER COMPONENTS (zero JS ke browser):
✓ AnnouncementBar    — static text
✓ NavBar             — static links + logo
✓ HeroSection        — static content + Image
✓ TrustBar           — static badges
✓ ServicesSection    — 6 service cards, data dari services.ts
✓ FlowSection        — 4 steps, dark background
✓ DoctorsSection     — 9 doctor cards, data dari doctors.ts
✓ FacilitiesSection  — gallery grid
✓ TestimonialSection — static testimonials + insurance logos
✓ LocationSection    — kontak + jam + map embed
✓ FooterSection      — links + brand

CLIENT COMPONENTS (minimal JS):
⚡ FAQAccordion      — toggle state + aria
⚡ BookingForm       — form state + validation + WA redirect
⚡ WhatsAppFAB       — scroll listener (show after 300px)
```

### 6.3 Bundle Budget

```
React + Next.js runtime   : ~45KB gzipped
FAQAccordion              : ~1.5KB gzipped
BookingForm               : ~3KB gzipped
WhatsAppFAB               : ~0.8KB gzipped
Tailwind CSS              : ~12KB gzipped
─────────────────────────────────────────
TOTAL                     : ~62KB gzipped (dalam budget < 80KB)
```

---

## 7. ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

### 7.1 Semantic HTML & Landmark Regions

```typescript
// page.tsx
export default function Home() {
  return (
    <>
      {/* Skip navigation — wajib */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4
                   focus:left-4 focus:z-50 focus:px-4 focus:py-2
                   focus:bg-ink focus:text-paper focus:rounded"
      >
        Langsung ke konten utama
      </a>

      {/* Announcement bar — bukan bagian nav, bukan header */}
      <div role="banner" aria-label="Informasi promosi">
        <AnnouncementBar />
      </div>

      <header role="banner" aria-label="Header utama Dentique Clinic">
        <NavBar />
      </header>

      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>
        <div role="complementary" aria-label="Kredensial dan akreditasi">
          <TrustBar />
        </div>
        <section id="layanan" aria-labelledby="layanan-heading">
          <ServicesSection />
        </section>
        <section aria-labelledby="flow-heading">
          <FlowSection />
        </section>
        <section id="dokter" aria-labelledby="dokter-heading">
          <DoctorsSection />
        </section>
        <section id="fasilitas" aria-labelledby="fasilitas-heading">
          <FacilitiesSection />
        </section>
        <section id="testimoni" aria-labelledby="testimoni-heading">
          <TestimonialSection />
        </section>
        <section id="faq" aria-labelledby="faq-heading">
          <FAQSection />
        </section>
        <section id="lokasi" aria-labelledby="lokasi-heading">
          <LocationSection />
        </section>
        <section id="booking" aria-labelledby="booking-heading">
          <BookingSection />
        </section>
      </main>

      <footer role="contentinfo">
        <FooterSection />
      </footer>

      <WhatsAppFAB />
    </>
  )
}
```

### 7.2 Heading Hierarchy

```
h1  → 1 saja di Hero: "Senyum yang Anda percaya, seumur hidup."
h2  → Section headings:
      - "Perawatan menyeluruh, dari rutin hingga estetik lanjut."
      - "Tanpa antrian. Tanpa kejutan biaya."
      - "Sembilan dokter, satu standar perawatan."
      - "Fasilitas"
      - "Testimoni Pasien"
      - "FAQ"
      - "Senopati, Jakarta Selatan. Lima menit dari SCBD."
      - "Mari mulai dengan satu kunjungan tenang."
h3  → Nama tiap layanan (6 items)
h4  → Nama tiap dokter, nama tiap step alur, pertanyaan FAQ
h5  → Sub-detail dalam kartu (jika ada)
h6  → Footer column headings (Layanan, Klinik, Kontak)
```

### 7.3 Color Contrast Compliance

| Pasangan | Rasio | Status |
|---|---|---|
| `#1B3A3A` (ink) di atas `#F5F1EA` (cream) | 12.1:1 | ✅ AAA |
| `#FBF8F2` (paper) di atas `#1B3A3A` (ink) | 12.1:1 | ✅ AAA |
| `#5C7373` (ink-soft) di atas `#F5F1EA` (cream) | 4.8:1 | ✅ AA |
| `#FBF8F2` (paper) di atas `#B8714A` (clay) | 3.6:1 | ✅ AA Large |
| `#B8714A` (clay) di atas `#F5F1EA` (cream) | 3.5:1 | ⚠️ — hanya dekoratif/large text |
| `#B89968` (gold) di atas `#1B3A3A` (ink) | 4.7:1 | ✅ AA |
| `#1B3A3A` (ink) di atas `#FBF8F2` (paper) | 12.1:1 | ✅ AAA |

> **Rule kritis:** `--clay (#B8714A)` di atas `--cream (#F5F1EA)` HANYA untuk teks ≥ 24px normal atau ≥ 18.67px bold, dan elemen dekoratif. JANGAN untuk body text, label form, atau teks kecil.

### 7.4 FAQ Accordion (ARIA Pattern)

```typescript
// FAQAccordion.tsx — 'use client'
'use client'
import { useState } from 'react'
import type { FAQItem } from '@/types/faq'

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq-list border-t border-line">
      {items.map((item, i) => (
        <div key={i} className="faq-item border-b border-line">
          <button
            id={`faq-q-${i}`}
            aria-expanded={openIndex === i}
            aria-controls={`faq-a-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left py-6 flex justify-between items-center gap-6
                       font-display text-[22px] leading-snug text-ink"
          >
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className={`flex-shrink-0 w-8 h-8 rounded-full border border-line
                         flex items-center justify-content-center font-mono text-clay
                         transition-transform duration-200
                         ${openIndex === i ? 'rotate-45 bg-clay text-paper border-clay' : ''}`}
            >
              +
            </span>
          </button>

          <div
            id={`faq-a-${i}`}
            role="region"
            aria-labelledby={`faq-q-${i}`}
            // CSS max-height transition untuk smooth expand
            className={`overflow-hidden transition-all duration-300
                       ${openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'}`}
          >
            <p className="text-ink-soft text-[15.5px] leading-relaxed max-w-[680px]">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
```

### 7.5 Form Booking Accessibility

```typescript
// Setiap field: label eksplisit (bukan placeholder saja)
// Error: border + ikon + teks (bukan warna saja)
// Required: aria-required="true" + visual indicator

<div className="field flex flex-col gap-2">
  <label
    htmlFor="nama"
    className="font-mono text-[10.5px] tracking-widest uppercase text-ink-soft"
  >
    Nama Lengkap <span aria-hidden="true" className="text-clay">*</span>
    <span className="sr-only">(wajib diisi)</span>
  </label>
  <input
    id="nama"
    name="nama"
    type="text"
    required
    aria-required="true"
    aria-describedby={errors.nama ? 'nama-error' : undefined}
    aria-invalid={!!errors.nama}
    autoComplete="name"
    placeholder="cth. Anindita Putri"
    className="bg-transparent border-0 border-b border-line py-2 text-base
               text-ink outline-none focus:border-clay transition-colors
               aria-[invalid=true]:border-red-500"
  />
  {errors.nama && (
    <span id="nama-error" role="alert" className="text-xs text-red-600 flex gap-1">
      <span aria-hidden="true">⚠</span> {errors.nama}
    </span>
  )}
</div>
```

### 7.6 Dokter Card Alt Text

```typescript
// Deskriptif, informatif — bukan "foto dokter"
<Image
  src={`/images/doctors/${doctor.slug}.jpg`}
  alt={`${doctor.name}, ${doctor.specialty} di Dentique Clinic`}
  fill
  className="object-cover object-top"
/>
```

### 7.7 WhatsApp FAB

```typescript
<a
  href="https://wa.me/6281234567890"
  aria-label="Chat dengan Dentique Clinic via WhatsApp"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 ..."
>
  <span className="w-2 h-2 rounded-full bg-paper animate-ping" aria-hidden="true" />
  <span>Chat WhatsApp</span>
</a>
```

---

## 8. SEO REQUIREMENTS

### 8.1 Metadata

```typescript
// Title: lokasi spesifik adalah kunci untuk lokal SEO
"Dentique Clinic — Klinik Gigi Modern di Senopati, Jakarta Selatan"

// Meta description: mencakup layanan utama + USP + lokasi
"Klinik gigi premium di Senopati, Jakarta Selatan. Perawatan estetik &
 restoratif: veneer, implan, behel, dan pediatri. 9 dokter spesialis
 bersertifikasi. Konsultasi pertama gratis. Mitra BPJS & 12 asuransi."
```

### 8.2 Geo SEO (Jakarta Local)

```html
<meta name="geo.region" content="ID-JK" />
<meta name="geo.placename" content="Senopati, Kebayoran Baru, Jakarta Selatan" />
<meta name="geo.position" content="-6.2300;106.8068" />
<meta name="ICBM" content="-6.2300, 106.8068" />
```

**Keyword Strategy Lokal:**
```
Primary   : "klinik gigi jakarta selatan", "dokter gigi senopati"
Secondary : "klinik gigi SCBD", "veneer gigi jakarta", "implan gigi jakarta selatan"
Long-tail : "dokter gigi anak kebayoran baru", "bleaching gigi senopati",
            "klinik gigi mitra BPJS jakarta selatan", "behel transparan jakarta"
Brand     : "dentique clinic", "dentique senopati"
```

**Konten lokal yang WAJIB ada dalam copy halaman:**
- "Senopati, Kebayoran Baru, Jakarta Selatan" (disebutkan di hero eyebrow)
- "Lima menit dari SCBD" (diferensiasi lokasi)
- "Parkir basement gratis" (keunggulan lokal)
- Nomor telepon area Jakarta: +62 21 7234 9090

---

## 9. STRUCTURED DATA / SCHEMA.ORG

> Semua schema di-inject via `<JsonLd>` di `layout.tsx` menggunakan `<script type="application/ld+json">`.

### 9.1 JsonLd Component

```typescript
// src/components/seo/JsonLd.tsx — Server Component
interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### 9.2 Organization Schema — Dentist + MedicalBusiness (LENGKAP)

```json
{
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  "@id": "https://dentique.co.id/#organization",
  "name": "Dentique Clinic",
  "alternateName": ["Klinik Gigi Dentique", "Dentique Jakarta"],
  "url": "https://dentique.co.id",
  "logo": {
    "@type": "ImageObject",
    "url": "https://dentique.co.id/logo.svg",
    "width": 160,
    "height": 48
  },
  "image": [
    "https://dentique.co.id/og-image.jpg",
    "https://dentique.co.id/images/hero/clinic-interior.jpg",
    "https://dentique.co.id/images/facilities/treatment-room-1.jpg"
  ],
  "description": "Klinik gigi modern di Senopati, Jakarta Selatan. Menyediakan perawatan gigi estetik dan restoratif — veneer, implan, behel, clear aligner, endodontik, dan pedodontik — oleh 9 dokter spesialis bersertifikasi STR & SIP aktif. Terakreditasi KARS Paripurna. Mitra BPJS & 12 asuransi.",
  "foundingDate": "2014",
  "slogan": "Senyum yang Anda percaya, seumur hidup.",
  "medicalSpecialty": [
    "Dentistry",
    "Orthodontics",
    "Endodontics",
    "OralSurgery",
    "Pediatric"
  ],
  "isAcceptingNewPatients": true,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Suryo No. 24",
    "addressLocality": "Senopati, Kebayoran Baru",
    "addressRegion": "Jakarta Selatan",
    "postalCode": "12180",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2300,
    "longitude": 106.8068
  },
  "hasMap": "https://maps.google.com/?q=Dentique+Clinic+Senopati+Jakarta",
  "telephone": "+622172349090",
  "email": "halo@dentique.co.id",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "Rp250.000 – Rp14.500.000",
  "currenciesAccepted": "IDR",
  "paymentAccepted": [
    "Cash", "Credit Card", "Debit Card", "Transfer Bank",
    "BPJS Kesehatan", "GoPay", "OVO",
    "Cicilan 0% BCA", "Cicilan 0% Mandiri", "Cicilan 0% BNI"
  ],
  "areaServed": [
    { "@type": "City", "name": "Jakarta Selatan" },
    { "@type": "City", "name": "Jakarta" }
  ],
  "sameAs": [
    "https://www.instagram.com/dentiqueclinic",
    "https://g.page/dentiqueclinic"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+622172349090",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["Indonesian", "English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    },
    {
      "@type": "ContactPoint",
      "url": "https://wa.me/6281234567890",
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    }
  ],
  "employee": [
    {
      "@type": "Physician",
      "name": "drg. Anindita Larasati, Sp.KG",
      "jobTitle": "Dokter Gigi Spesialis Konservasi · Founding Partner",
      "medicalSpecialty": "Dentistry",
      "worksFor": { "@id": "https://dentique.co.id/#organization" },
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Universitas Indonesia" }
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Surat Tanda Registrasi (STR)",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Konsil Kedokteran Indonesia"
        }
      }
    },
    {
      "@type": "Physician",
      "name": "drg. Rendra Kusuma, Sp.Ort",
      "jobTitle": "Dokter Gigi Spesialis Ortodonti",
      "medicalSpecialty": "Orthodontics",
      "worksFor": { "@id": "https://dentique.co.id/#organization" }
    },
    {
      "@type": "Physician",
      "name": "drg. Senja Maharani, Sp.BM",
      "jobTitle": "Dokter Gigi Spesialis Bedah Mulut · Implan",
      "medicalSpecialty": "OralSurgery",
      "worksFor": { "@id": "https://dentique.co.id/#organization" }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Layanan Perawatan Dentique Clinic",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Pemeriksaan & Pembersihan Gigi",
          "description": "Skeling, polishing, dan pemeriksaan rutin dengan kamera intra-oral. Dianjurkan setiap 6 bulan.",
          "procedureType": "Therapeutic"
        },
        "price": "380000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Veneer & Bleaching Gigi",
          "description": "Pemutihan gigi profesional dan veneer porselen estetik dengan pratinjau digital sebelum tindakan.",
          "procedureType": "Therapeutic"
        },
        "price": "2800000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Implan Gigi",
          "description": "Implan dengan sistem Straumann & Osstem, dipandu navigasi 3D untuk presisi dan masa pemulihan singkat.",
          "procedureType": "Surgical"
        },
        "price": "14500000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Behel & Aligner Bening",
          "description": "Behel konvensional, self-ligating, dan clear aligner. Konsultasi rencana 24 bulan disertakan.",
          "procedureType": "Therapeutic"
        },
        "price": "6500000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Perawatan Saluran Akar",
          "description": "Endodontik mikroskopik dengan rotari NiTi — mengurangi kunjungan dan kenyamanan lebih baik.",
          "procedureType": "Therapeutic"
        },
        "price": "2100000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Dentique Kids — Perawatan Gigi Anak",
          "description": "Ruang khusus anak dengan dokter pedodontik, pendekatan tell-show-do, dan kursi karakter.",
          "procedureType": "Therapeutic"
        },
        "price": "250000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "612",
    "reviewCount": "612"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "A. Putri" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Tenang, bersih, tidak terasa seperti klinik gigi pada umumnya.",
      "datePublished": "2024-01-15"
    }
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Parkir Basement Gratis", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "BPJS Kesehatan", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sterilisasi Standar EN 13060", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Diagnostik 3D", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Ruang Anak Khusus", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Cicilan 0% hingga 12 bulan", "value": true }
  ],
  "identifier": {
    "@type": "PropertyValue",
    "name": "Izin Klinik",
    "value": "503/4521/DPMPTSP"
  }
}
```

### 9.3 WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dentique.co.id/#website",
  "url": "https://dentique.co.id",
  "name": "Dentique Clinic",
  "description": "Klinik gigi modern di Senopati, Jakarta Selatan",
  "publisher": { "@id": "https://dentique.co.id/#organization" },
  "inLanguage": "id-ID",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://dentique.co.id/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 9.4 FAQPage Schema (auto-generate dari data/faq.ts)

```typescript
// src/data/schemas.ts
import { faqData } from './faq'

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}
```

**FAQ Data (dari HTML referensi + rekomendasi medis):**
```typescript
// src/data/faq.ts
export const faqData = [
  {
    question: 'Apakah konsultasi pertama benar-benar gratis?',
    answer: 'Ya. Konsultasi pertama di Dentique termasuk pemeriksaan menyeluruh dan rontgen panoramik — gratis tanpa syarat. Anda juga akan mendapat estimasi biaya tertulis sebelum tindakan apapun dilakukan.'
  },
  {
    question: 'Apakah Dentique menerima BPJS Kesehatan?',
    answer: 'Ya, Dentique adalah mitra BPJS Kesehatan untuk layanan dasar tertentu. Untuk layanan estetik seperti veneer dan behel, BPJS tidak berlaku. Tim kami akan menjelaskan cakupan BPJS saat konsultasi.'
  },
  {
    question: 'Berapa lama proses pemasangan behel / aligner?',
    answer: 'Durasi perawatan ortodonti umumnya 12–24 bulan tergantung kondisi gigi. Setelah konsultasi dan rontgen, dokter akan menyiapkan rencana perawatan lengkap termasuk estimasi durasi yang lebih akurat.'
  },
  {
    question: 'Apakah ada cicilan untuk perawatan dengan biaya besar?',
    answer: 'Ya, Dentique menawarkan cicilan 0% hingga 12 bulan melalui BCA, Mandiri, dan BNI. Dokter atau tim resepsionis akan menjelaskan opsi cicilan sebelum Anda memulai perawatan.'
  },
  {
    question: 'Bagaimana jika saya cemas atau takut ke dokter gigi (dental anxiety)?',
    answer: 'Kami sangat memahami dental anxiety. Seluruh tim kami terlatih menangani pasien dengan kecemasan — termasuk anak-anak. Sampaikan kekhawatiran Anda di form catatan untuk dokter, dan kami akan menyesuaikan pendekatan perawatan.'
  },
  {
    question: 'Apakah Dentique memiliki layanan darurat gigi?',
    answer: 'Untuk keadaan darurat di luar jam praktik, silakan hubungi nomor WhatsApp kami. Tim on-call akan membantu triage dan mengarahkan Anda ke penanganan yang tepat.'
  },
]
```

### 9.5 BreadcrumbList Schema (Auto per Halaman)

```typescript
// src/components/seo/BreadcrumbSchema.tsx
export function BreadcrumbSchema({ segments }: { segments: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((seg, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: seg.name,
      item: seg.url,
    })),
  }
  return <JsonLd data={schema} />
}

// Penggunaan di page.tsx (halaman utama):
// <BreadcrumbSchema segments={[
//   { name: 'Beranda', url: 'https://dentique.co.id/' }
// ]} />
```

### 9.6 Article Schema (Siap Pakai — Halaman Artikel/Blog ke Depan)

> Template untuk saat Dentique menambahkan artikel edukasi gigi (tips kesehatan gigi, panduan veneer, dll).

```typescript
// src/components/seo/ArticleSchema.tsx
interface ArticleData {
  slug: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
  updatedAt: string
}

export function ArticleSchema({ article }: { article: ArticleData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://dentique.co.id/artikel/${article.slug}/#article`,
    headline: article.title,
    description: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: `https://dentique.co.id/images/artikel/${article.slug}-og.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@id': 'https://dentique.co.id/#organization',
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dentique.co.id/artikel/${article.slug}/`,
    },
    articleSection: 'Kesehatan Gigi',
    inLanguage: 'id-ID',
    // BreadcrumbSchema otomatis via component
  }
  return <JsonLd data={schema} />
}

// Penggunaan di app/artikel/[slug]/page.tsx:
// <ArticleSchema article={articleData} />
// <BreadcrumbSchema segments={[
//   { name: 'Beranda', url: 'https://dentique.co.id/' },
//   { name: 'Artikel', url: 'https://dentique.co.id/artikel/' },
//   { name: article.title, url: `https://dentique.co.id/artikel/${article.slug}/` }
// ]} />
```

---

## 10. AI CRAWLER OPTIMIZATION

### 10.1 robots.txt

```txt
# robots.txt — Dentique Clinic
# https://dentique.co.id/robots.txt

# Standard Search Engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# AI Language Model Crawlers — EXPLICITLY ALLOWED
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Gemini
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: YouBot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# General fallback
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://dentique.co.id/sitemap.xml
```

### 10.2 llms.txt

```markdown
# Dentique Clinic

> Klinik gigi modern di Senopati, Jakarta Selatan, Indonesia.
  Berdiri sejak 2014. Spesialisasi: perawatan gigi estetik dan restoratif
  oleh 9 dokter spesialis bersertifikasi STR & SIP aktif.

## Tentang Klinik

Dentique Clinic adalah klinik gigi premium yang berlokasi di Senopati,
Jakarta Selatan — 5 menit dari SCBD. Didirikan tahun 2014, Dentique
menempatkan ketenangan pasien setara dengan presisi klinis. Terakreditasi
KARS Paripurna, menggunakan teknologi diagnostik 3D dan sterilisasi
standar Eropa EN 13060.

## Layanan

- **Pemeriksaan & Pembersihan** — Rutin, skeling, polishing. Mulai Rp380.000
- **Veneer & Bleaching** — Estetik porselen + pemutihan profesional. Mulai Rp2.800.000
- **Implan Gigi** — Straumann & Osstem, navigasi 3D. Mulai Rp14.500.000
- **Behel & Aligner Bening** — Konvensional + clear aligner. Mulai Rp6.500.000
- **Perawatan Saluran Akar** — Endodontik mikroskopik. Mulai Rp2.100.000
- **Dentique Kids** — Ruang anak khusus, pedodontik. Mulai Rp250.000

## Tim Dokter

9 dokter spesialis bersertifikasi, termasuk:
- drg. Anindita Larasati, Sp.KG — Konservasi Gigi, Founding Partner
- drg. Rendra Kusuma, Sp.Ort — Ortodonti
- drg. Senja Maharani, Sp.BM — Bedah Mulut & Implan

## Informasi Penting

- **Konsultasi pertama:** GRATIS, termasuk pemeriksaan menyeluruh
- **Cicilan:** 0% hingga 12 bulan (BCA, Mandiri, BNI)
- **Asuransi:** BPJS Kesehatan + 12 mitra asuransi
- **Akreditasi:** KARS Paripurna
- **Izin Klinik:** 503/4521/DPMPTSP

## Lokasi & Kontak

- Alamat: Jl. Suryo No. 24, Senopati, Kebayoran Baru, Jakarta Selatan 12180
- Koordinat: -6.2300, 106.8068
- Telepon: +62 21 7234 9090
- WhatsApp: +62 812 3456 7890
- Email: halo@dentique.co.id
- Jam: Sen–Jum 09.00–21.00 | Sabtu 09.00–18.00

## Statistik

- 8.400+ pasien terlayani sejak 2014
- Rating 4.9/5 dari 612 ulasan Google
- 9 dokter spesialis aktif

## Halaman Penting

- [Beranda](https://dentique.co.id/)
- [Layanan](https://dentique.co.id/#layanan)
- [Tim Dokter](https://dentique.co.id/#dokter)
- [FAQ](https://dentique.co.id/#faq)
- [Lokasi](https://dentique.co.id/#lokasi)
- [Buat Janji](https://dentique.co.id/#booking)
```

---

## 11. FORM & WHATSAPP INTEGRATION

### 11.1 WhatsApp Redirect Logic

```typescript
// src/lib/whatsapp.ts
const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '6281234567890'

interface BookingFormData {
  nama: string
  wa: string
  email?: string
  layanan: string
  jadwal?: string
  catatan?: string
}

export function buildBookingURL(data: BookingFormData): string {
  const lines = [
    `Halo Dentique Clinic! 👋`,
    ``,
    `Saya *${data.nama}* ingin membuat janji konsultasi.`,
    ``,
    `📋 *Detail Permintaan Janji:*`,
    `• Layanan: ${data.layanan}`,
    data.jadwal ? `• Preferensi waktu: ${data.jadwal}` : null,
    data.email ? `• Email: ${data.email}` : null,
    data.catatan ? `• Catatan: ${data.catatan}` : null,
    ``,
    `Mohon konfirmasi ketersediaan jadwal. Terima kasih 🙏`,
  ]
    .filter(Boolean)
    .join('\n')

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`
}

export function buildQuickChatURL(service?: string): string {
  const msg = service
    ? `Halo Dentique! Saya ingin bertanya tentang layanan *${service}* 🦷`
    : `Halo Dentique Clinic! Saya ingin konsultasi mengenai perawatan gigi 🦷`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}
```

### 11.2 BookingForm Component

```typescript
// src/components/ui/BookingForm.tsx
'use client'
import { useTransition, useActionState } from 'react'   // React 19
import { buildBookingURL } from '@/lib/whatsapp'

export function BookingForm() {
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    // Validasi
    const newErrors: Record<string, string> = {}
    if (!fd.get('nama')) newErrors.nama = 'Nama lengkap wajib diisi'
    if (!fd.get('wa')) newErrors.wa = 'Nomor WhatsApp wajib diisi'
    if (!fd.get('layanan')) newErrors.layanan = 'Pilih layanan yang diminati'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    startTransition(() => {
      const data = {
        nama: fd.get('nama') as string,
        wa: fd.get('wa') as string,
        email: fd.get('email') as string,
        layanan: fd.get('layanan') as string,
        jadwal: fd.get('jadwal') as string,
        catatan: fd.get('catatan') as string,
      }
      // Track event (jika GA ada)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'booking_form',
          event_label: data.layanan,
        })
      }
      window.open(buildBookingURL(data), '_blank', 'noopener,noreferrer')
    })
  }

  // ... render form dengan field dari Section 2.7
}
```

---

## 12. BEST PRACTICES & SECURITY

### 12.1 vercel.json

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; frame-src https://www.google.com/maps/ https://maps.google.com/; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';"
        },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/images/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=604800" }]
    }
  ]
}
```

### 12.2 Environment Variables

```bash
# .env.local — TIDAK di-commit
NEXT_PUBLIC_WA_NUMBER=6281234567890
NEXT_PUBLIC_PHONE=622172349090
NEXT_PUBLIC_SITE_URL=https://dentique.co.id
NEXT_PUBLIC_MAPS_EMBED_KEY=AIzaSy...
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# .env.example — di-commit
NEXT_PUBLIC_WA_NUMBER=
NEXT_PUBLIC_PHONE=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_MAPS_EMBED_KEY=
NEXT_PUBLIC_GA_ID=
```

### 12.3 Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@vercel/analytics": "^1.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "next-sitemap": "^4.x",
    "@next/bundle-analyzer": "^15.x",
    "eslint": "^8.x",
    "eslint-config-next": "^15.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  }
}
```

### 12.4 package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true next build",
    "postbuild": "next-sitemap"
  }
}
```

---

## 13. ⚠️ CATATAN KHUSUS MEDIS

> Berlaku untuk semua copy yang akan ditulis saat implementasi.

```
1. JANGAN klaim "menyembuhkan" — gunakan "membantu mengatasi", "mengurangi"
2. Testimoni pasien: nama inisial saja (sesuai etika kedokteran Indonesia)
3. Foto before-after: hanya tampilkan jika ada consent tertulis pasien
4. Informasi STR: pastikan nomor STR aktif sebelum ditampilkan
5. Klaim KARS Paripurna: verifikasi tanggal masa berlaku akreditasi
6. Mitra BPJS: konfirmasi layanan mana yang di-cover sebelum publish
7. Harga: tambahkan disclaimer "harga dapat berubah sewaktu-waktu"
8. Dental emergency: jangan klaim "buka 24 jam" jika tidak konsisten
```

---

## 14. DEFINITION OF DONE

### ⚡ Performance
- [ ] Lighthouse Performance ≥ 100 (mobile, PageSpeed Insights)
- [ ] LCP < 1.2s
- [ ] CLS = 0.0
- [ ] INP < 100ms
- [ ] Total JS client < 65KB gzipped
- [ ] Hero image ter-preload (`priority={true}`)
- [ ] Semua gambar WebP/AVIF

### ♿ Accessibility
- [ ] Lighthouse Accessibility = 100
- [ ] Zero errors axe DevTools
- [ ] Skip link berfungsi
- [ ] Heading hierarchy benar (h1 → h2 → h3 → h4 → h6)
- [ ] Semua gambar punya alt text deskriptif
- [ ] FAQ accordion keyboard-navigable
- [ ] Form: semua field punya label eksplisit + error state

### 🔍 SEO
- [ ] Lighthouse SEO = 100
- [ ] Google Rich Results Test: 0 errors
- [ ] Dentist + MedicalBusiness schema valid
- [ ] FAQPage schema terdeteksi
- [ ] BreadcrumbList ada
- [ ] Sitemap.xml accessible
- [ ] robots.txt + llms.txt accessible
- [ ] Canonical URL benar

### 🤖 AI & Structured Data
- [ ] robots.txt izinkan semua AI crawlers
- [ ] llms.txt ada dan informatif
- [ ] Organization schema @type mencakup ["Dentist", "MedicalBusiness", "LocalBusiness"]
- [ ] Employee schema untuk semua 9 dokter
- [ ] Offer catalog untuk 6 layanan + harga
- [ ] Article schema template siap untuk halaman edukasi gigi
- [ ] BreadcrumbSchema component auto-generate

### 🔒 Best Practices
- [ ] Lighthouse Best Practices = 100
- [ ] Zero console errors production
- [ ] Security headers terpasang (cek securityheaders.com)
- [ ] TypeScript strict, zero `any`
- [ ] HTTPS enforced, zero mixed content

### ✅ Fungsionalitas
- [ ] Announcement bar tampil (teks promo aktif)
- [ ] Nav sticky berfungsi di mobile & desktop
- [ ] Semua anchor link smooth-scroll ke section
- [ ] 6 service cards tampil dengan harga
- [ ] 4 langkah booking tampil
- [ ] 9 kartu dokter tampil dengan data STR
- [ ] FAQ accordion buka/tutup + keyboard
- [ ] Peta lokasi ter-load (lazy iframe)
- [ ] Form: validasi 3 field wajib (nama, WA, layanan)
- [ ] Form submit → buka WA dengan pesan pre-filled
- [ ] WhatsApp FAB muncul setelah scroll 300px
- [ ] Semua nomor telepon bisa diklik (`tel:`)
- [ ] WA link di nav, FAB, dan form berfungsi

### 🌐 Cross-browser & Device
- [ ] Chrome, Firefox, Safari, Samsung Internet (latest)
- [ ] iPhone SE 375px — lebar terkecil
- [ ] iPhone 15 Pro 393px
- [ ] Samsung Galaxy A 360px
- [ ] iPad 768px
- [ ] Desktop 1280px, 1440px, 1920px

---

*PRD ini dibuat berdasarkan file `Dentique_Clinic.html` sebagai design reference.*
*Versi: 1.0 | Stack: Next.js 15 + Tailwind CSS v3 + Vercel*
*Klinik: Dentique Clinic, Senopati Jakarta Selatan | Last updated: 2025-05-09*
