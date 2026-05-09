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
      className={`wa-fab${visible ? '' : ' hidden'}`}
    >
      <span className="ic" aria-hidden="true" />
      <span className="label">Chat WhatsApp</span>
    </a>
  )
}
