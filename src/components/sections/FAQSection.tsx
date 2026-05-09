import { faqData } from '@/data/faq'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { site } from '@/data/site'

export function FAQSection() {
  return (
    <section id="faq" className="py-[clamp(60px,9vw,120px)] px-[var(--pad)]" aria-labelledby="faq-heading">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-[clamp(28px,5vw,80px)] items-start">
          <aside className="lg:sticky lg:top-[100px]">
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay">
              Pertanyaan Umum
            </div>
            <h2 className="font-display font-normal leading-[1.04] tracking-[-0.018em] mt-[18px] text-balance text-[clamp(34px,4vw,52px)]" id="faq-heading">
              Yang sering<br />kami <em className="italic text-clay">jawab</em>.
            </h2>
            <div className="mt-7 bg-paper border border-line-soft p-6">
              <h5 className="font-display font-normal text-[22px] mb-2 tracking-[-0.01em]">Tidak menemukan jawaban?</h5>
              <p className="text-sm text-ink-soft mb-[18px] leading-normal">Tim kami merespons WhatsApp dalam 1 jam pada jam kerja, dan akan menghubungkan Anda ke dokter bila perlu.</p>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="btn btn-clay btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya via WhatsApp <span className="arr">→</span>
              </a>
            </div>
          </aside>

          <FAQAccordion items={faqData} />
        </div>
      </div>
    </section>
  )
}
