import { BookingForm } from '@/components/ui/BookingForm'

export function BookingSection() {
  return (
    <section id="booking" className="bg-cream py-[clamp(60px,9vw,120px)] px-[var(--pad)]" aria-labelledby="booking-heading">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-start">
          {/* Left copy */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay">
              Buat Janji
            </div>
            <h2 id="booking-heading" className="font-display font-normal text-[clamp(48px,6.5vw,92px)] leading-[0.98] tracking-[-0.025em] mt-[18px]">
              Mari mulai dengan<br />satu <em className="italic text-clay">kunjungan tenang</em>.
            </h2>
            <p className="mt-[18px] max-w-[560px] text-ink-soft text-[18px] leading-[1.6] text-pretty">
              Isi formulir di samping atau hubungi kami via WhatsApp. Tim resepsionis akan menghubungi Anda untuk memastikan jadwal dan dokter yang tepat — biasanya dalam 1 jam pada jam kerja.
            </p>

            <div className="mt-9 flex flex-col gap-3.5">
              {[
                { n: 'i.', title: 'Konsultasi pertama gratis', sub: 'Termasuk pemeriksaan menyeluruh' },
                { n: 'ii.', title: 'Estimasi biaya tertulis', sub: 'Sebelum tindakan dilakukan' },
                { n: 'iii.', title: 'Cicilan 0% hingga 12 bulan', sub: 'BCA · Mandiri · BNI' },
              ].map((b) => (
                <div
                  key={b.n}
                  className="flex items-center gap-3.5 border-t border-line pt-[18px]"
                >
                  <span className="font-display italic text-clay text-2xl">
                    {b.n}
                  </span>
                  <div>
                    <div className="text-[15px]">{b.title}</div>
                    <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-soft mt-[3px]">
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
