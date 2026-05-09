'use client'

import { useState } from 'react'
import type { FAQItem } from '@/types/faq'

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <div key={i} className="border-b border-line group">
          <button
            id={`faq-q-${i}`}
            className="w-full text-left py-6 flex justify-between items-center gap-6 font-display text-[22px] tracking-[-0.005em] text-ink leading-[1.25] outline-none"
            aria-expanded={openIndex === i}
            aria-controls={`faq-a-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <span 
              className={`flex-shrink-0 font-mono text-[18px] w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-250 ${
                openIndex === i 
                  ? 'bg-clay text-paper border-clay rotate-45' 
                  : 'text-clay border-line'
              }`} 
              aria-hidden="true"
            >
              +
            </span>
          </button>
          <div
            id={`faq-a-${i}`}
            className={`${openIndex === i ? 'block' : 'hidden'} pb-[26px] text-ink-soft text-[15.5px] leading-[1.6] max-w-[680px]`}
            role="region"
            aria-labelledby={`faq-q-${i}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
