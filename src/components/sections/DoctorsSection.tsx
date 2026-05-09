import { doctors } from '@/data/doctors'
import { DoctorCard } from '@/components/ui/DoctorCard'

export function DoctorsSection() {
  return (
    <section id="dokter">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Tim Dokter</div>
            <h2 className="display" id="dokter-heading">
              Sembilan dokter, satu <em>standar perawatan</em>.
            </h2>
          </div>
          <div className="right">
            Setiap dokter di Dentique memegang STR &amp; SIP aktif, mengikuti pelatihan berkelanjutan, dan menjalani peer review internal setiap kuartal.
          </div>
        </div>

        <div className="doctors">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <a href="#" className="btn btn-ghost">
            Lihat seluruh tim (9 dokter) <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
