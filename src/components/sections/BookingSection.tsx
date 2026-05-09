import { BookingForm } from '@/components/ui/BookingForm'

export function BookingSection() {
  return (
    <section id="booking" className="final" aria-labelledby="booking-heading">
      <div className="wrap">
        <div className="final-grid">
          {/* Left copy */}
          <div>
            <div className="eyebrow">Buat Janji</div>
            <h2 id="booking-heading">
              Mari mulai dengan<br />satu <em>kunjungan tenang</em>.
            </h2>
            <p className="lede">
              Isi formulir di samping atau hubungi kami via WhatsApp. Tim resepsionis akan menghubungi Anda untuk memastikan jadwal dan dokter yang tepat — biasanya dalam 1 jam pada jam kerja.
            </p>

            <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { n: 'i.', title: 'Konsultasi pertama gratis', sub: 'Termasuk pemeriksaan menyeluruh' },
                { n: 'ii.', title: 'Estimasi biaya tertulis', sub: 'Sebelum tindakan dilakukan' },
                { n: 'iii.', title: 'Cicilan 0% hingga 12 bulan', sub: 'BCA · Mandiri · BNI' },
              ].map((b) => (
                <div
                  key={b.n}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--line)', paddingTop: '18px' }}
                >
                  <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--clay)', fontSize: '24px' }}>
                    {b.n}
                  </span>
                  <div>
                    <div style={{ fontSize: '15px' }}>{b.title}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: '3px' }}>
                      {b.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
