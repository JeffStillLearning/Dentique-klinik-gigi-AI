import { services } from '@/data/services'
import { ServiceCard } from '@/components/ui/ServiceCard'

export function ServicesSection() {
  return (
    <section id="layanan" className="py-[clamp(60px,9vw,120px)] px-[var(--pad)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-end mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay">Layanan Utama</div>
            <h2 className="font-display font-normal text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.018em] mt-[18px] text-balance [&>em]:italic [&>em]:text-clay" id="layanan-heading">
              Perawatan menyeluruh,<br />dari rutin hingga <em>estetik lanjut</em>.
            </h2>
          </div>
          <div className="text-ink-soft text-[16px] max-w-[480px]">
            Setiap perawatan dimulai dengan pemeriksaan menyeluruh dan rencana yang dijelaskan dengan transparan — termasuk estimasi biaya — sebelum kami mulai.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line" role="list" aria-label="Daftar layanan">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
