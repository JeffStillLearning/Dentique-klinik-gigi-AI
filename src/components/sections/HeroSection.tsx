import Image from 'next/image'
import { site } from '@/data/site'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="pt-0 pb-[clamp(60px,9vw,100px)] px-[var(--pad)]">
      <div className="max-w-[var(--maxw)] mx-auto mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[clamp(32px,5vw,80px)] items-center">

          {/* Left — copy */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay mt-0">
              Klinik Gigi · Senopati, Jakarta Selatan
            </div>
            <h1 id="hero-heading" className="font-display font-normal text-[clamp(48px,7.4vw,104px)] leading-[0.98] tracking-[-0.025em] mt-4">
              Senyum yang<br />Anda <em className="italic text-clay">percaya</em>,<br />seumur hidup.
            </h1>
            <p className="mt-7 max-w-[520px] text-ink-soft text-lg leading-[1.55]">
              Perawatan gigi estetik dan restoratif untuk dewasa dan anak — dijalankan oleh tim dokter bersertifikasi dengan teknologi diagnostik 3D, dalam ruang yang dirancang setenang sebuah ruang baca.
            </p>
            <div className="flex gap-3.5 mt-9 flex-wrap">
              <a href="#booking" className="btn btn-primary">
                Buat Janji Sekarang <span className="arr">→</span>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>

          {/* Right — hero figure */}
          <div>
            <div className="relative aspect-[4/5] bg-cream-2 rounded overflow-hidden flex items-center justify-center bg-[repeating-linear-gradient(-8deg,transparent_0_18px,rgba(27,58,58,0.04)_18px_19px)]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85&fm=webp&auto=format&fit=crop"
                alt="Ruang perawatan Dentique Clinic yang modern dan tenang di Senopati Jakarta Selatan"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="absolute top-6 left-6 bg-paper px-[18px] py-[14px] border border-line font-mono text-[11px] tracking-[0.14em] uppercase text-ink z-10">
                Rating Google
                <strong className="block font-display not-italic text-[32px] tracking-[-0.02em] text-ink mt-1">4.9 / 5.0</strong>
              </div>
              <div className="absolute bottom-6 right-6 left-6 bg-ink/92 text-paper py-[18px] px-5 font-display italic text-lg leading-snug z-10">
                &ldquo;Tenang, bersih, tidak terasa seperti klinik gigi pada umumnya.&rdquo;
                <small className="block mt-2.5 not-italic font-mono text-[10.5px] tracking-[0.16em] uppercase opacity-70">— A. Putri · Pasien sejak 2019</small>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-line pt-8">
          <div className="stat">
            <div className="font-display text-[42px] leading-none tracking-[-0.02em]">12<em className="italic text-clay">+</em></div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-soft">Tahun praktik</div>
          </div>
          <div className="stat">
            <div className="font-display text-[42px] leading-none tracking-[-0.02em]">8.400<em className="italic text-clay">+</em></div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-soft">Pasien terlayani</div>
          </div>
          <div className="stat">
            <div className="font-display text-[42px] leading-none tracking-[-0.02em]">9</div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-soft">Dokter spesialis</div>
          </div>
          <div className="stat">
            <div className="font-display text-[42px] leading-none tracking-[-0.02em]">4.9<em className="italic text-clay">/5</em></div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-soft">Rating Google · 612 ulasan</div>
          </div>
        </div>
      </div>
    </section>
  )
}
