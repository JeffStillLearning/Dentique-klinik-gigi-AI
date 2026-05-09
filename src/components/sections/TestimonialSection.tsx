import { testimonials } from '@/data/testimonials'
import { insurancePartners } from '@/data/insurance'

export function TestimonialSection() {
  return (
    <section id="testimoni" className="testi-section" aria-labelledby="testimoni-heading">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Suara Pasien</div>
            <h2 className="display" id="testimoni-heading">
              612 ulasan,<br />4.9 dari 5 di <em>Google</em>.
            </h2>
          </div>
          <div className="right">
            Kutipan diambil dari ulasan publik di Google Maps. Nama dan foto pasien dimuat dengan persetujuan tertulis sesuai etika medis.
          </div>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testi">
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="who">
                <div className="av" aria-hidden="true">{t.initial}</div>
                <div className="meta">
                  <b>{t.name}</b>
                  <span>{t.detail}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Insurance */}
        <div style={{ marginTop: '80px' }}>
          <div className="eyebrow">Mitra Asuransi &amp; BPJS</div>
          <h2
            className="display"
            style={{ marginTop: '14px', fontSize: 'clamp(28px, 3.4vw, 40px)' }}
          >
            Diterima oleh asuransi yang kemungkinan besar Anda gunakan.
          </h2>

          <div className="insur">
            {insurancePartners.map((ins) => (
              <div key={ins.id} className="ilogo" data-tag={ins.id}>
                <span>
                  {ins.name}
                  {ins.nameItalic && <em>{ins.nameItalic}</em>}
                </span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--ink-soft)', marginTop: '18px' }}>
            + 4 mitra lain — tanyakan kepada resepsionis untuk daftar lengkap.
          </p>
        </div>
      </div>
    </section>
  )
}
