import type { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: '01',
    name: 'Pemeriksaan & Pembersihan',
    nameItalic: 'Pembersihan',
    description: 'Skeling, polishing, dan pemeriksaan rutin dengan kamera intra-oral. Dianjurkan setiap 6 bulan.',
    priceLabel: 'Mulai dari',
    price: 'Rp 380.000',
  },
  {
    id: '02',
    name: 'Veneer & Bleaching',
    nameItalic: 'Bleaching',
    description: 'Pemutihan gigi profesional dan veneer porselen estetik dengan pratinjau digital sebelum tindakan.',
    priceLabel: 'Mulai dari',
    price: 'Rp 2.800.000',
    badge: 'Paling Populer',
  },
  {
    id: '03',
    name: 'Implan Gigi',
    nameItalic: 'Gigi',
    description: 'Implan dengan sistem Straumann & Osstem, dipandu navigasi 3D untuk presisi dan masa pemulihan singkat.',
    priceLabel: 'Mulai dari',
    price: 'Rp 14.500.000',
  },
  {
    id: '04',
    name: 'Behel & Aligner Bening',
    nameItalic: 'Aligner Bening',
    description: 'Behel konvensional, self-ligating, dan clear aligner. Konsultasi rencana 24 bulan disertakan.',
    priceLabel: 'Mulai dari',
    price: 'Rp 6.500.000',
  },
  {
    id: '05',
    name: 'Perawatan Saluran Akar',
    nameItalic: 'Saluran Akar',
    description: 'Endodontik mikroskopik dengan rotari NiTi — mengurangi kunjungan dan kenyamanan lebih baik.',
    priceLabel: 'Mulai dari',
    price: 'Rp 2.100.000',
  },
  {
    id: '06',
    name: 'Dentique Kids',
    nameItalic: 'Kids',
    description: 'Ruang khusus anak dengan dokter pedodontik, pendekatan tell-show-do, dan kursi karakter.',
    priceLabel: 'Mulai dari',
    price: 'Rp 250.000',
    badge: 'Anak',
  },
]
