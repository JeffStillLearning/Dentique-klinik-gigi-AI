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
    <form className="book" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="nama">
          Nama Lengkap <span aria-hidden="true" style={{ color: 'var(--clay)' }}>*</span>
          <span className="sr-only">(wajib diisi)</span>
        </label>
        <input
          id="nama" name="nama" type="text"
          placeholder="cth. Anindita Putri"
          aria-required="true"
          aria-describedby={errors.nama ? 'nama-error' : undefined}
          aria-invalid={!!errors.nama}
          autoComplete="name"
        />
        {errors.nama && (
          <span id="nama-error" role="alert" style={{ fontSize: '12px', color: '#dc2626' }}>
            ⚠ {errors.nama}
          </span>
        )}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="wa">
            Nomor WhatsApp <span aria-hidden="true" style={{ color: 'var(--clay)' }}>*</span>
            <span className="sr-only">(wajib diisi)</span>
          </label>
          <input
            id="wa" name="wa" type="tel"
            placeholder="+62 812 ..."
            aria-required="true"
            aria-describedby={errors.wa ? 'wa-error' : undefined}
            aria-invalid={!!errors.wa}
            autoComplete="tel"
          />
          {errors.wa && (
            <span id="wa-error" role="alert" style={{ fontSize: '12px', color: '#dc2626' }}>
              ⚠ {errors.wa}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">
            Email <span style={{ textTransform: 'none', opacity: 0.5 }}>(opsional)</span>
          </label>
          <input id="email" name="email" type="email" placeholder="anda@email.com" autoComplete="email" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="layanan">
          Layanan yang Diminati <span aria-hidden="true" style={{ color: 'var(--clay)' }}>*</span>
          <span className="sr-only">(wajib diisi)</span>
        </label>
        <select
          id="layanan" name="layanan"
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
          <span id="layanan-error" role="alert" style={{ fontSize: '12px', color: '#dc2626' }}>
            ⚠ {errors.layanan}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="jadwal">Preferensi Jadwal</label>
        <select id="jadwal" name="jadwal" defaultValue="">
          <option value="">Pilih waktu…</option>
          <option>Pagi (09.00 — 12.00)</option>
          <option>Siang (12.00 — 16.00)</option>
          <option>Sore / Malam (16.00 — 21.00)</option>
          <option>Akhir pekan</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="catatan">
          Catatan untuk Dokter <span style={{ textTransform: 'none', opacity: 0.5 }}>(opsional)</span>
        </label>
        <textarea id="catatan" name="catatan" placeholder="cth. Saya phobia dental, mohon dijelaskan setiap tahap." />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`btn submit${sent ? ' btn-clay' : ' btn-primary'}`}
        style={{ opacity: isPending ? 0.7 : 1 }}
      >
        {sent
          ? 'Terkirim — kami akan menghubungi Anda'
          : <><span>Kirim Permintaan Janji</span> <span className="arr">→</span></>
        }
      </button>

      <p className="legal">
        Dengan mengirim form ini, Anda setuju kami menghubungi Anda via WhatsApp atau telepon. Data Anda hanya digunakan untuk keperluan janji medis.
      </p>
    </form>
  )
}
