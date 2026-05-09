import type { Service } from '@/types/service'

export function ServiceCard({ service }: { service: Service }) {
  const parts = service.name.split(service.nameItalic)
  return (
    <article className="svc">
      <div className="hd">
        <div className="ix">{service.id}</div>
        {service.badge && <div className="pop">{service.badge}</div>}
      </div>
      <h3>
        {parts[0]}<em>{service.nameItalic}</em>{parts[1]}
      </h3>
      <p>{service.description}</p>
      <div className="pricing">
        <div>
          <div className="price-lab">{service.priceLabel}</div>
          <div className="price">{service.price}</div>
        </div>
        <div className="arrow">→</div>
      </div>
    </article>
  )
}
