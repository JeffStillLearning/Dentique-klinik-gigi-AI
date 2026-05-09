const items = [
  { label: 'Terakreditasi', bold: 'KARS Paripurna' },
  { label: 'Semua dokter ber-', bold: 'STR & SIP aktif' },
  { label: 'Sterilisasi', bold: 'Standar Eropa EN 13060' },
  { label: 'Mitra', bold: 'BPJS & 12 asuransi' },
]

export function TrustBar() {
  return (
    <div role="complementary" aria-label="Kredensial dan akreditasi" className="trust">
      <div className="trust-row">
        {items.map((item) => (
          <div key={item.bold} className="trust-item">
            <span className="ic">✓</span>
            {item.label} <b>{item.bold}</b>
          </div>
        ))}
      </div>
    </div>
  )
}
