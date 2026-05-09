import type { Service } from '@/types/service'

export function ServiceCard({ service }: { service: Service }) {
  const parts = service.name.split(service.nameItalic)
  return (
    <article role="listitem" className="border-r border-b border-line p-[36px_32px_32px] relative bg-cream transition-colors duration-250 hover:bg-paper group">
      <div className="flex justify-between items-start mb-16">
        <div className="font-mono text-[11px] tracking-[0.16em] text-ink-soft">{service.id}</div>
        {service.badge && <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-clay border border-clay px-[8px] py-[4px] rounded-full">{service.badge}</div>}
      </div>
      <h3 className="font-display font-normal text-[30px] leading-[1.1] tracking-[-0.015em] mb-[10px] [&>em]:italic [&>em]:text-clay">
        {parts[0]}<em>{service.nameItalic}</em>{parts[1]}
      </h3>
      <p className="text-[14.5px] text-ink-soft mb-[28px] leading-[1.55]">{service.description}</p>
      <div className="flex justify-between items-end border-t border-line-soft pt-[18px]">
        <div>
          <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-soft">{service.priceLabel}</div>
          <div className="font-display text-[24px] tracking-[-0.01em]">{service.price}</div>
        </div>
        <div className="w-[36px] h-[36px] rounded-full border border-ink flex items-center justify-center transition-all duration-200 group-hover:bg-ink group-hover:text-paper">→</div>
      </div>
    </article>
  )
}
