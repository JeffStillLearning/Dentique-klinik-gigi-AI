import Image from 'next/image'
import { facilities } from '@/data/facilities'

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="bg-paper py-[clamp(60px,9vw,120px)] px-[var(--pad)]" aria-labelledby="fasilitas-heading">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-end mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay">Fasilitas</div>
            <h2 className="font-display font-normal text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.018em] mt-[18px] text-balance [&>em]:italic [&>em]:text-clay" id="fasilitas-heading">
              Klinik yang <em>tidak terasa</em><br />seperti klinik.
            </h2>
          </div>
          <div className="text-ink-soft text-[16px] max-w-[480px]">
            Lima ruang perawatan, ruang sterilisasi terisolasi dengan tekanan negatif, dan ruang tunggu yang dirancang untuk mengurangi kecemasan dental — bukan menambahnya.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[280px_280px] gap-[16px]">
          {facilities.map((fac, idx) => (
            <div key={fac.id} className={`bg-[repeating-linear-gradient(-8deg,transparent_0_14px,rgba(27,58,58,0.05)_14px_15px),linear-gradient(180deg,var(--cream),var(--cream-2))] relative flex items-end p-[20px] border border-line-soft overflow-hidden min-h-[200px] lg:min-h-0 ${idx === 0 ? 'lg:row-[1/span_2] max-lg:col-span-2 max-lg:min-h-[300px]' : ''}`}>
              <Image
                src={fac.photo}
                alt={fac.label}
                fill
                className="object-cover"
                sizes={fac.span === 'double' ? '(max-width: 900px) 100vw, 50vw' : '(max-width: 900px) 50vw, 25vw'}
              />
              <div className="absolute top-[18px] right-[20px] font-display italic text-clay text-[22px] z-10">{fac.id}</div>
              <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink bg-paper py-[8px] px-[12px] border border-line relative z-10">{fac.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
