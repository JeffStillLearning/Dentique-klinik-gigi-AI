import { site } from '@/data/site'

export function LocationSection() {
  return (
    <section id="lokasi" className="loc-section" aria-labelledby="lokasi-heading">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Lokasi &amp; Jam</div>
            <h2 className="display" id="lokasi-heading">
              Senopati, Jakarta Selatan.<br />Lima menit dari <em>SCBD</em>.
            </h2>
          </div>
          <div className="right">
            Parkir basement gratis untuk pasien (sampai 3 jam), valet pada akhir pekan. Akses GoCar/Grab tersedia langsung di lobby.
          </div>
        </div>

        <div className="loc-grid">
          {/* Map */}
          <div className="loc-map" aria-label="Peta lokasi Dentique Clinic, Senopati Jakarta Selatan">
            <div className="pin" aria-hidden="true" />
            <div className="pin-label">Dentique Clinic — Senopati</div>
            <div className="map-meta">
              <span>-6.2300° S · 106.8068° E</span>
              <a
                href={`https://maps.google.com/?q=${site.coords.lat},${site.coords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka di Google Maps"
                style={{ color: 'inherit' }}
              >
                ↗ Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="loc-info">
            <div className="loc-block">
              <div className="lab">Alamat</div>
              <div className="val">
                {site.address.street}
                <small>
                  {site.address.area}<br />
                  {site.address.city} {site.address.postal}
                </small>
              </div>
            </div>
            <div className="loc-block">
              <div className="lab">Kontak</div>
              <div className="val">
                <a href={`tel:${site.phoneHref}`} style={{ color: 'inherit' }}>
                  {site.phone}
                </a>
                <small>WhatsApp · {site.email}</small>
              </div>
            </div>
            <div className="loc-block">
              <div className="lab">Jam Praktik</div>
              <div className="hours">
                {site.hours.map((h) => (
                  <div className="row" key={h.day}>
                    <span className="day">{h.day}</span>
                    <span className={h.closed ? 'closed' : 'time'}>{h.time}</span>
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
