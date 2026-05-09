'use client'

import { useState, useEffect } from 'react'
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
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-line-soft py-[18px] px-[var(--pad)] flex items-center justify-between" aria-label="Navigasi utama">
        <div className="flex items-baseline gap-[10px] relative z-50">
          <span className="font-display text-[28px] tracking-[-0.02em] leading-none text-ink">Dent<em className="italic text-clay">i</em>que</span>
          <span className="hidden sm:block font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-soft border-l border-line pl-[10px]">est. 2014 · Jakarta</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-[30px] text-[14px] text-ink-2" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={`transition-colors duration-200 ${
                  activeSection === link.href ? 'text-clay font-medium' : 'hover:text-clay'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 relative z-50">
          {/* <a href={`tel:${site.phoneHref}`} className="hidden sm:block font-mono text-[13px] text-ink-soft">{site.phone}</a> */}
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-ink outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-paper transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="pt-28 px-8 h-full">
          <ul className="flex flex-col gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`text-[20px] font-semibold tracking-[-0.03em] leading-tight transition-colors duration-200 ${
                    activeSection === link.href ? 'text-clay' : 'text-ink'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* <div className="mt-16 flex flex-col items-start gap-6">
            <span className="font-mono text-sm text-ink-soft">{site.phone}</span>
            <a 
              href="#booking" 
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Buat Janji Sekarang <span className="arr">→</span>
            </a>
          </div> */}
        </div>
      </div>
    </>
  )
}
