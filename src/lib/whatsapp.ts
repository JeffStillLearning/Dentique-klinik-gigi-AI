const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '6281234567890'

export interface BookingFormData {
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
