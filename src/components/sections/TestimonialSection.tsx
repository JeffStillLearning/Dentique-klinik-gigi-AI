import { testimonials } from '@/data/testimonials'
import { insurancePartners } from '@/data/insurance'

export function TestimonialSection() {
  return (
    <section id="testimoni" className="bg-cream-2 py-[clamp(60px,9vw,120px)] px-[var(--pad)]" aria-labelledby="testimoni-heading">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-end mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay">
              Suara Pasien
            </div>
            <h2 className="font-display font-normal text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.018em] mt-[18px] text-balance" id="testimoni-heading">
              612 ulasan,<br />4.9 dari 5 di <em className="italic text-clay">Google</em>.
            </h2>
          </div>
          <div className="text-ink-soft text-base max-w-[480px]">
            Kutipan diambil dari ulasan publik di Google Maps. Nama dan foto pasien dimuat dengan persetujuan tertulis sesuai etika medis.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-line bg-cream">
          {testimonials.map((t) => (
            <article key={t.name} className="p-[36px_32px] border-r border-b border-line flex flex-col gap-[22px]">
              <div className="font-display text-clay text-[20px] tracking-[2px]">{'★'.repeat(t.stars)}</div>
              <blockquote className="m-0 font-display text-[22px] leading-[1.35] tracking-[-0.005em] text-pretty">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="mt-auto flex items-center gap-[14px] border-t border-line-soft pt-[18px]">
                <div className="w-[40px] h-[40px] rounded-full bg-cream-2 border border-line flex items-center justify-center font-display italic text-ink text-[18px]" aria-hidden="true">{t.initial}</div>
                <div className="text-[13px]">
                  <b className="block font-medium text-ink">{t.name}</b>
                  <span className="text-ink-soft font-mono text-[10.5px] tracking-[0.12em] uppercase">{t.detail}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Insurance */}
        <div className="mt-20">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay">
            Mitra Asuransi &amp; BPJS
          </div>
          <h2
            className="font-display font-normal leading-[1.04] tracking-[-0.018em] text-balance mt-3.5 text-[clamp(28px,3.4vw,40px)]"
          >
            Diterima oleh asuransi yang kemungkinan besar Anda gunakan.
          </h2>

          <div className="flex items-center flex-wrap gap-[16px] mt-10">
            {insurancePartners.map((ins) => (
              <div 
                key={ins.id} 
                className="flex-1 basis-[160px] h-[80px] border border-line bg-paper flex items-center justify-center font-display text-[22px] tracking-[-0.01em] text-ink relative after:content-[attr(data-tag)] after:absolute after:top-[8px] after:left-[10px] after:font-mono after:text-[9px] after:tracking-[0.14em] after:uppercase after:text-ink-soft" 
                data-tag={ins.id}
              >
                <span>
                  {ins.name}
                  {ins.nameItalic && <em className="italic text-clay">{ins.nameItalic}</em>}
                </span>
              </div>
            ))}
          </div>
          <p className="font-mono text-[12px] tracking-[0.1em] text-ink-soft mt-[18px]">
            + 4 mitra lain — tanyakan kepada resepsionis untuk daftar lengkap.
          </p>
        </div>
      </div>
    </section>
  )
}
