import { site } from '@/data/site'

export function LocationSection() {
  return (
    <section id="lokasi" className="bg-ink text-paper py-[clamp(60px,9vw,120px)] px-[var(--pad)]" aria-labelledby="lokasi-heading">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-end mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/60 flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-gold">
              Lokasi &amp; Jam
            </div>
            <h2 className="font-display font-normal text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.018em] mt-[18px] text-balance" id="lokasi-heading">
              Senopati, Jakarta Selatan.<br />Lima menit dari <em className="italic text-gold">SCBD</em>.
            </h2>
          </div>
          <div className="text-paper/65 text-base max-w-[480px]">
            Parkir basement gratis untuk pasien (sampai 3 jam), valet pada akhir pekan. Akses GoCar/Grab tersedia langsung di lobby.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[clamp(20px,3vw,40px)]">
          {/* Map */}
          <div className="aspect-[16/12] bg-[#0F2828] border border-paper/20 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2300!2d106.8068!3d-6.2300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f146440c950d%3A0x6d97c50a0f9b6b72!2sJl.%20Suryo%20No.24%2C%20Rw.%20Barat%2C%20Kec.%20Kebayoran%20Baru%2C%20Jakarta%20Selatan%2012180!5e0!3m2!1sid!2sid!4v1715100000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Dentique Clinic"
              className="grayscale brightness-[0.8] contrast-[1.2] invert-[0.9] hue-rotate-[180deg]"
            />
            <div className="absolute bottom-[18px] left-[18px] right-[18px] flex justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-paper/50 pointer-events-none">
              <span>-6.2300° S · 106.8068° E</span>
              <a
                href={`https://maps.google.com/?q=${site.coords.lat},${site.coords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka di Google Maps"
                className="text-inherit pointer-events-auto"
              >
                ↗ Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-[24px]">
            <div className="border-t border-paper/20 pt-[20px]">
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-gold mb-[10px]">Alamat</div>
              <div className="font-display text-[22px] leading-[1.3] tracking-[-0.005em]">
                {site.address.street}
                <small className="block text-[14px] font-sans text-paper/65 mt-[6px]">
                  {site.address.area}<br />
                  {site.address.city} {site.address.postal}
                </small>
              </div>
            </div>
            <div className="border-t border-paper/20 pt-[20px]">
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-gold mb-[10px]">Kontak</div>
              <div className="font-display text-[22px] leading-[1.3] tracking-[-0.005em]">
                <a href={`tel:${site.phoneHref}`} className="text-inherit">
                  {site.phone}
                </a>
                <small className="block text-[14px] font-sans text-paper/65 mt-[6px]">WhatsApp · {site.email}</small>
              </div>
            </div>
            <div className="border-t border-paper/20 pt-[20px]">
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-gold mb-[10px]">Jam Praktik</div>
              <div className="font-mono text-[13px]">
                {site.hours.map((h) => (
                  <div className="flex justify-between py-[7px] border-b border-paper/10 last:border-b-0" key={h.day}>
                    <span className="text-paper/70 tracking-[0.08em] uppercase text-[11px]">{h.day}</span>
                    <span className={h.closed ? 'text-clay' : 'text-paper'}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
