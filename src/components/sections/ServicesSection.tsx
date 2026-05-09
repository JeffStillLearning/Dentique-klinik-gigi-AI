import { services } from '@/data/services'
import { ServiceCard } from '@/components/ui/ServiceCard'

export function ServicesSection() {
  return (
    <section id="layanan">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Layanan Utama</div>
            <h2 className="display" id="layanan-heading">
              Perawatan menyeluruh,<br />dari rutin hingga <em>estetik lanjut</em>.
            </h2>
          </div>
          <div className="right">
            Setiap perawatan dimulai dengan pemeriksaan menyeluruh dan rencana yang dijelaskan dengan transparan — termasuk estimasi biaya — sebelum kami mulai.
          </div>
        </div>

        <div className="services" role="list" aria-label="Daftar layanan">
          {services.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
