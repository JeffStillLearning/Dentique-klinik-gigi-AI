'use client'

import { useState, useTransition } from 'react'
import { buildBookingURL, type BookingFormData } from '@/lib/whatsapp'

interface FieldErrors {
  nama?: string
  wa?: string
  layanan?: string
}

export function BookingForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sent, setSent] = useState(false)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    const newErrors: FieldErrors = {}
    if (!fd.get('nama')) newErrors.nama = 'Nama lengkap wajib diisi'
    if (!fd.get('wa')) newErrors.wa = 'Nomor WhatsApp wajib diisi'
    if (!fd.get('layanan')) newErrors.layanan = 'Pilih layanan yang diminati'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})

    const data: BookingFormData = {
      nama: fd.get('nama') as string,
      wa: fd.get('wa') as string,
      email: (fd.get('email') as string) || undefined,
      layanan: fd.get('layanan') as string,
      jadwal: (fd.get('jadwal') as string) || undefined,
      catatan: (fd.get('catatan') as string) || undefined,
    }

    startTransition(() => {
      window.open(buildBookingURL(data), '_blank', 'noopener,noreferrer')
      setSent(true)
      setTimeout(() => {
        setSent(false)
        ;(e.target as HTMLFormElement).reset()
      }, 3500)
    })
  }

  return (
    <form className="bg-paper border border-line p-[clamp(24px,3vw,36px)] flex flex-col gap-[18px]" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-[7px]">
        <label htmlFor="nama" className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-soft">
          Nama Lengkap <span aria-hidden="true" style={{ color: 'var(--clay)' }}>*</span>
          <span className="sr-only">(wajib diisi)</span>
        </label>
        <input
          id="nama" name="nama" type="text"
          placeholder="cth. Anindita Putri"
          className="font-inherit text-ink bg-transparent border-none border-b border-line p-[8px_0_10px] outline-none text-[16px] rounded-none w-full focus:border-clay transition-colors"
          aria-required="true"
          aria-describedby={errors.nama ? 'nama-error' : undefined}
          aria-invalid={!!errors.nama}
          autoComplete="name"
        />
        {errors.nama && (
          <span id="nama-error" role="alert" className="text-[12px] text-[#dc2626]">
            ⚠ {errors.nama}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="wa" className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-soft">
            Nomor WhatsApp <span aria-hidden="true" style={{ color: 'var(--clay)' }}>*</span>
            <span className="sr-only">(wajib diisi)</span>
          </label>
          <input
            id="wa" name="wa" type="tel"
            placeholder="+62 812 ..."
            className="font-inherit text-ink bg-transparent border-none border-b border-line p-[8px_0_10px] outline-none text-[16px] rounded-none w-full focus:border-clay transition-colors"
            aria-required="true"
            aria-describedby={errors.wa ? 'wa-error' : undefined}
            aria-invalid={!!errors.wa}
            autoComplete="tel"
          />
          {errors.wa && (
            <span id="wa-error" role="alert" className="text-[12px] text-[#dc2626]">
              ⚠ {errors.wa}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="email" className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-soft">
            Email <span style={{ textTransform: 'none', opacity: 0.5 }}>(opsional)</span>
          </label>
          <input 
            id="email" name="email" type="email" 
            placeholder="anda@email.com" 
            autoComplete="email" 
            className="font-inherit text-ink bg-transparent border-none border-b border-line p-[8px_0_10px] outline-none text-[16px] rounded-none w-full focus:border-clay transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="layanan" className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-soft">
          Layanan yang Diminati <span aria-hidden="true" style={{ color: 'var(--clay)' }}>*</span>
          <span className="sr-only">(wajib diisi)</span>
        </label>
        <select
          id="layanan" name="layanan"
          className="font-inherit text-ink bg-transparent border-none border-b border-line p-[8px_0_10px] outline-none text-[16px] rounded-none w-full focus:border-clay transition-colors appearance-none cursor-pointer"
          aria-required="true"
          aria-describedby={errors.layanan ? 'layanan-error' : undefined}
          aria-invalid={!!errors.layanan}
          defaultValue=""
        >
          <option value="" disabled>Pilih layanan…</option>
          <option>Pemeriksaan &amp; Pembersihan</option>
          <option>Veneer / Bleaching</option>
          <option>Implan Gigi</option>
          <option>Behel / Aligner</option>
          <option>Perawatan Saluran Akar</option>
          <option>Dentique Kids</option>
          <option>Belum yakin — diskusikan dulu</option>
        </select>
        {errors.layanan && (
          <span id="layanan-error" role="alert" className="text-[12px] text-[#dc2626]">
            ⚠ {errors.layanan}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="jadwal" className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-soft">Preferensi Jadwal</label>
        <select 
          id="jadwal" name="jadwal" 
          defaultValue=""
          className="font-inherit text-ink bg-transparent border-none border-b border-line p-[8px_0_10px] outline-none text-[16px] rounded-none w-full focus:border-clay transition-colors appearance-none cursor-pointer"
        >
          <option value="">Pilih waktu…</option>
          <option>Pagi (09.00 — 12.00)</option>
          <option>Siang (12.00 — 16.00)</option>
          <option>Sore / Malam (16.00 — 21.00)</option>
          <option>Akhir pekan</option>
        </select>
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="catatan" className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-soft">
          Catatan untuk Dokter <span style={{ textTransform: 'none', opacity: 0.5 }}>(opsional)</span>
        </label>
        <textarea 
          id="catatan" name="catatan" 
          placeholder="cth. Saya phobia dental, mohon dijelaskan setiap tahap." 
          className="font-inherit text-ink bg-transparent border-none border-b border-line p-[8px_0_10px] outline-none text-[16px] rounded-none w-full focus:border-clay transition-colors resize-vertical min-h-[60px]"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`w-full sm:w-auto btn ${sent ? 'btn-clay' : 'btn-primary'} mt-1.5 justify-center sm:justify-center`}
        style={{ opacity: isPending ? 0.7 : 1 }}
      >
        {sent
          ? 'Pesan Terkirim ✓'
          : <><span>Kirim Reservasi</span> <span className="arr">→</span></>
        }
      </button>

      <p className="text-[12px] text-ink-soft leading-[1.5]">
        Dengan mengirim form ini, Anda setuju kami menghubungi Anda via WhatsApp atau telepon. Data Anda hanya digunakan untuk keperluan janji medis.
      </p>
    </form>
  )
}
