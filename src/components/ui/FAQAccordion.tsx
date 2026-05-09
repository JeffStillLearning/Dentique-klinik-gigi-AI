'use client'

import { useState } from 'react'
import type { FAQItem } from '@/types/faq'

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button
            id={`faq-q-${i}`}
            className="faq-q"
            aria-expanded={openIndex === i}
            aria-controls={`faq-a-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <span className="plus" aria-hidden="true">+</span>
          </button>
          <div
            id={`faq-a-${i}`}
            className="faq-a"
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
