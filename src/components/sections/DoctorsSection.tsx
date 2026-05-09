import { doctors } from '@/data/doctors'
import { DoctorCard } from '@/components/ui/DoctorCard'
import { Button } from '@/components/ui/Button'

export function DoctorsSection() {
  return (
    <section id="dokter" className="py-[clamp(60px,9vw,120px)] px-[var(--pad)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-end mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-clay">Tim Dokter</div>
            <h2 className="font-display font-normal text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.018em] mt-[18px] text-balance [&>em]:italic [&>em]:text-clay" id="dokter-heading">
              Sembilan dokter, satu <em>standar perawatan</em>.
            </h2>
          </div>
          <div className="text-ink-soft text-[16px] max-w-[480px]">
            Setiap dokter di Dentique memegang STR &amp; SIP aktif, mengikuti pelatihan berkelanjutan, dan menjalani peer review internal setiap kuartal.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#" variant="ghost" arrow>
            Lihat seluruh tim (9 dokter)
          </Button>
        </div>
      </div>
    </section>
  )
}
