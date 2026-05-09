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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-line-soft py-[18px] px-[var(--pad)] flex items-center justify-between" aria-label="Navigasi utama">
      <div className="flex items-baseline gap-[10px]">
        <span className="font-display text-[28px] tracking-[-0.02em] leading-none">Dent<em className="italic text-clay">i</em>que</span>
        <span className="hidden sm:block font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-soft border-l border-line pl-[10px]">est. 2014 · Jakarta</span>
      </div>

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

      {/* Placeholder for symmetry if right content is hidden */}
      <div className="w-[1px] h-1 lg:hidden" />
    </nav>
  )
}
