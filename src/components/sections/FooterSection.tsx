import { site } from '@/data/site'

const footerCols = [
  {
    heading: 'Layanan',
    links: [
      { href: '#layanan', label: 'Pemeriksaan Rutin' },
      { href: '#layanan', label: 'Veneer & Bleaching' },
      { href: '#layanan', label: 'Implan' },
      { href: '#layanan', label: 'Ortodonti' },
      { href: '#layanan', label: 'Dentique Kids' },
    ],
  },
  {
    heading: 'Klinik',
    links: [
      { href: '#dokter', label: 'Tim Dokter' },
      { href: '#fasilitas', label: 'Fasilitas' },
      { href: '#testimoni', label: 'Testimoni' },
      { href: '#faq', label: 'FAQ' },
      { href: '#lokasi', label: 'Lokasi & Jam' },
    ],
  },
  {
    heading: 'Kontak',
    links: [
      { href: `tel:${site.phoneHref}`, label: site.phone },
      { href: `https://wa.me/${site.whatsapp}`, label: 'WhatsApp', external: true },
      { href: `mailto:${site.email}`, label: site.email },
      { href: '#', label: 'Instagram' },
    ],
  },
]

export function FooterSection() {
  return (
    <footer role="contentinfo" className="bg-ink text-paper p-[80px_var(--pad)_40px]">
      <div className="max-w-[var(--maxw)] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[40px] border-b border-paper/15 pb-[48px]">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-display text-[42px] tracking-[-0.02em]">Dent<em className="italic text-gold">i</em>que</div>
          <p className="mt-3.5 text-paper/65 max-w-[340px] text-[14.5px]">Klinik gigi modern yang menempatkan ketenangan pasien setara dengan presisi klinis. Berdiri di Senopati, Jakarta sejak {site.founded}.</p>
        </div>
        {footerCols.map((col) => (
          <div key={col.heading}>
            <h6 className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/50 mb-[18px]">{col.heading}</h6>
            <nav aria-label={col.heading}>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block py-[6px] text-paper/85 text-[14.5px] hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="max-w-[var(--maxw)] mx-auto pt-[24px] flex justify-between gap-[20px] flex-wrap font-mono text-[11px] tracking-[0.14em] uppercase text-paper/50">
        <span>© 2014—2026 Dentique Clinic. Izin Klinik No. {site.licenseNo}.</span>
        <span>Privasi · Syarat Layanan</span>
      </div>
    </footer>
  )
}
