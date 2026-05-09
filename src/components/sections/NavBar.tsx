import { site } from '@/data/site'

const navLinks = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#dokter', label: 'Dokter' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#lokasi', label: 'Lokasi' },
]

export function NavBar() {
  return (
    <nav className="top" aria-label="Navigasi utama">
      <div className="brand">
        <span className="mark">Dent<em>i</em>que</span>
        <span className="tag">est. 2014 · Jakarta</span>
      </div>

      <ul className="nav-links" role="list">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-cta">
        <a href={`tel:${site.phoneHref}`} className="nav-phone">{site.phone}</a>
        <a href="#booking" className="btn btn-primary btn-sm">
          Buat Janji <span className="arr">→</span>
        </a>
      </div>
    </nav>
  )
}
