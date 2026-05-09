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
      className={`hidden sm:flex fixed bottom-[24px] right-[24px] z-50 bg-clay text-paper w-[56px] h-[56px] rounded-full shadow-[0_10px_30px_rgba(27,58,58,0.18)] items-center justify-center transition-all duration-300 hover:bg-clay-deep  ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-[16px]'
      }`}
    >
      <div className="relative">
        {/* <span className="absolute -top-[2px] -right-[2px] w-[10px] h-[10px] rounded-full bg-paper shadow-[0_0_0_2px_#6A8D8D] animate-ping" aria-hidden="true" />
        <span className="absolute -top-[2px] -right-[2px] w-[10px] h-[10px] rounded-full bg-paper shadow-[0_0_0_2px_#6A8D8D]" aria-hidden="true" /> */}
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
    </a>
  )
}
