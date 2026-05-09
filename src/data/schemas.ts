import { faqData } from './faq'

export const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
  '@id': 'https://dentique.co.id/#organization',
  name: 'Dentique Clinic',
  alternateName: ['Klinik Gigi Dentique', 'Dentique Jakarta'],
  url: 'https://dentique.co.id',
  description:
    'Klinik gigi modern di Senopati, Jakarta Selatan. Menyediakan perawatan gigi estetik dan restoratif — veneer, implan, behel, clear aligner, endodontik, dan pedodontik — oleh 9 dokter spesialis bersertifikasi STR & SIP aktif. Terakreditasi KARS Paripurna. Mitra BPJS & 12 asuransi.',
  foundingDate: '2014',
  slogan: 'Senyum yang Anda percaya, seumur hidup.',
  isAcceptingNewPatients: true,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Suryo No. 24',
    addressLocality: 'Senopati, Kebayoran Baru',
    addressRegion: 'Jakarta Selatan',
    postalCode: '12180',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.23,
    longitude: 106.8068,
  },
  telephone: '+622172349090',
  email: 'halo@dentique.co.id',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: 'Rp250.000 – Rp14.500.000',
  currenciesAccepted: 'IDR',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '612',
    reviewCount: '612',
  },
  identifier: {
    '@type': 'PropertyValue',
    name: 'Izin Klinik',
    value: '503/4521/DPMPTSP',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://dentique.co.id/#website',
  url: 'https://dentique.co.id',
  name: 'Dentique Clinic',
  description: 'Klinik gigi modern di Senopati, Jakarta Selatan',
  publisher: { '@id': 'https://dentique.co.id/#organization' },
  inLanguage: 'id-ID',
}

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
