import Image from 'next/image'
import { site } from '@/data/site'

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">

          {/* Left — copy */}
          <div>
            <div className="eyebrow">Klinik Gigi · Senopati, Jakarta Selatan</div>
            <h1 id="hero-heading">
              Senyum yang<br />Anda <em>percaya</em>,<br />seumur hidup.
            </h1>
            <p className="sub">
              Perawatan gigi estetik dan restoratif untuk dewasa dan anak — dijalankan oleh tim dokter bersertifikasi dengan teknologi diagnostik 3D, dalam ruang yang dirancang setenang sebuah ruang baca.
            </p>
            <div className="ctas">
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
            <div className="hero-figure" style={{ position: 'relative' }}>
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85&fm=webp&auto=format&fit=crop"
                alt="Ruang perawatan Dentique Clinic yang modern dan tenang di Senopati Jakarta Selatan"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="badge">
                Rating Google
                <strong>4.9 / 5.0</strong>
              </div>
              <div className="quote">
                &ldquo;Tenang, bersih, tidak terasa seperti klinik gigi pada umumnya.&rdquo;
                <small>— A. Putri · Pasien sejak 2019</small>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-meta">
          <div className="stat">
            <div className="num">12<em>+</em></div>
            <div className="lab">Tahun praktik</div>
          </div>
          <div className="stat">
            <div className="num">8.400<em>+</em></div>
            <div className="lab">Pasien terlayani</div>
          </div>
          <div className="stat">
            <div className="num">9</div>
            <div className="lab">Dokter spesialis</div>
          </div>
          <div className="stat">
            <div className="num">4.9<em>/5</em></div>
            <div className="lab">Rating Google · 612 ulasan</div>
          </div>
        </div>
      </div>
    </section>
  )
}
