export interface Testimonial {
  stars: number
  quote: string
  name: string
  detail: string
  initial: string
}

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote: 'Saya phobia dental sejak kecil. Di sini dokter benar-benar mendengarkan dan menjelaskan setiap langkah. Untuk pertama kalinya saya tidak panik di kursi gigi.',
    name: 'Ny. R., 38',
    detail: 'Pasien Veneer · 2024',
    initial: 'N',
  },
  {
    stars: 5,
    quote: 'Estimasi biaya diberikan tertulis sebelum tindakan. Tidak ada biaya tambahan kejutan. Sederhana, tapi jarang ada.',
    name: 'Tn. A., 45',
    detail: 'Pasien Implan · 2023',
    initial: 'A',
  },
  {
    stars: 5,
    quote: 'Anak saya yang biasanya menangis tiap ke dokter gigi sekarang minta sendiri untuk pemeriksaan rutin. Ruang anaknya membantu sekali.',
    name: 'Ny. D., 34',
    detail: 'Orang tua pasien · 2025',
    initial: 'D',
  },
]
