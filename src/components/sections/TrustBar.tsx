const items = [
  { label: 'Terakreditasi', bold: 'KARS Paripurna' },
  { label: 'Semua dokter ber-', bold: 'STR & SIP aktif' },
  { label: 'Sterilisasi', bold: 'Standar Eropa EN 13060' },
  { label: 'Mitra', bold: 'BPJS & 12 asuransi' },
]

export function TrustBar() {
  return (
    <div role="complementary" aria-label="Kredensial dan akreditasi" className="bg-paper border-y border-line-soft py-[28px] px-[var(--pad)] overflow-x-auto no-scrollbar">
      <div className="max-w-[var(--maxw)] mx-auto flex items-center justify-between gap-[32px] whitespace-nowrap min-w-max">
        {items.map((item) => (
          <div key={item.bold} className="flex items-center gap-[14px] font-mono text-[13px] tracking-[0.14em] uppercase text-ink-soft">
            <span className="w-[28px] h-[28px] border border-line flex items-center justify-center font-display italic text-clay text-[18px] bg-cream flex-shrink-0">✓</span>
            <span>{item.label} <b className="text-ink font-medium">{item.bold}</b></span>
          </div>
        ))}
      </div>
    </div>
  )
}
