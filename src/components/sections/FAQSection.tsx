import { faqData } from '@/data/faq'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { site } from '@/data/site'

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        <div className="faq-grid">
          <aside className="faq-aside">
            <div className="eyebrow">Pertanyaan Umum</div>
            <h2 className="display" id="faq-heading" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Yang sering<br />kami <em>jawab</em>.
            </h2>
            <div className="help">
              <h5>Tidak menemukan jawaban?</h5>
              <p>Tim kami merespons WhatsApp dalam 1 jam pada jam kerja, dan akan menghubungkan Anda ke dokter bila perlu.</p>
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
