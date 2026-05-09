import Image from 'next/image'
import { facilities } from '@/data/facilities'

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="facility-section" aria-labelledby="fasilitas-heading">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Fasilitas</div>
            <h2 className="display" id="fasilitas-heading">
              Klinik yang <em>tidak terasa</em><br />seperti klinik.
            </h2>
          </div>
          <div className="right">
            Lima ruang perawatan, ruang sterilisasi terisolasi dengan tekanan negatif, dan ruang tunggu yang dirancang untuk mengurangi kecemasan dental — bukan menambahnya.
          </div>
        </div>

        <div className="fac-grid">
          {facilities.map((fac) => (
            <div key={fac.id} className="fac" style={{ position: 'relative' }}>
              <Image
                src={fac.photo}
                alt={fac.label}
                fill
                className="object-cover"
                sizes={fac.span === 'double' ? '(max-width: 900px) 100vw, 50vw' : '(max-width: 900px) 50vw, 25vw'}
              />
              <div className="num">{fac.id}</div>
              <div className="cap">{fac.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
