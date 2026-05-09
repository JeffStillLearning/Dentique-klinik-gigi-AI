'use client'

import { useState, useEffect } from 'react'
import { buildQuickChatURL } from '@/lib/whatsapp'

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={buildQuickChatURL()}
      aria-label="Chat dengan Dentique Clinic via WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-[24px] right-[24px] z-50 bg-clay text-paper p-[14px_20px] max-[520px]:p-[14px] rounded-full font-mono text-[12px] tracking-[0.12em] uppercase shadow-[0_10px_30px_rgba(27,58,58,0.18)] flex items-center gap-[10px] transition-all duration-300 hover:bg-clay-deep hover:-translate-y-[2px] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-[16px]'
      }`}
    >
      <span className="w-2 h-2 rounded-full bg-paper shadow-[0_0_0_0_rgba(255,255,255,0.6)] animate-ping" aria-hidden="true" />
      <span className="max-[520px]:hidden">Chat WhatsApp</span>
    </a>
  )
}
