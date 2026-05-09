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
    <footer role="contentinfo">
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="mark">Dent<em>i</em>que</div>
          <p>Klinik gigi modern yang menempatkan ketenangan pasien setara dengan presisi klinis. Berdiri di Senopati, Jakarta sejak {site.founded}.</p>
        </div>
        {footerCols.map((col) => (
          <div key={col.heading} className="foot-col">
            <h6>{col.heading}</h6>
            <nav aria-label={col.heading}>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="foot-bot">
        <span>© 2014—2026 Dentique Clinic. Izin Klinik No. {site.licenseNo}.</span>
        <span>Privasi · Syarat Layanan</span>
      </div>
    </footer>
  )
}
