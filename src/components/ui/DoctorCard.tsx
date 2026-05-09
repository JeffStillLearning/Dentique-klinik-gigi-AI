import Image from 'next/image'
import type { Doctor } from '@/types/doctor'

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-paper border border-line-soft">
      <div className="aspect-[4/5] bg-[repeating-linear-gradient(-10deg,transparent_0_14px,rgba(27,58,58,0.05)_14px_15px),linear-gradient(180deg,var(--cream-2),var(--cream))] flex items-end justify-between p-[18px] relative overflow-hidden">
        <Image
          src={doctor.photo}
          alt={`${doctor.name}, ${doctor.role} di Dentique Clinic`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-soft bg-paper p-[6px_10px] border border-line relative z-10">Foto profesional</div>
        <div className="font-mono text-[10px] text-ink-soft tracking-[0.1em] relative z-10">{doctor.id}</div>
      </div>
      <div className="p-[24px_24px_26px]">
        <h4 className="font-display font-normal text-[26px] tracking-[-0.01em] mb-[4px]">{doctor.name}</h4>
        <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-clay mb-[14px]">{doctor.role}</div>
        <div className="text-[14px] text-ink-soft leading-[1.5]">
          <ul className="list-none p-0 m-[14px_0_0]">
            {doctor.credentials.map((cred) => (
              <li key={cred.key} className="flex gap-[10px] py-[6px] border-t border-line-soft">
                <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink w-[80px] flex-shrink-0 pt-[2px]">{cred.key}</span>
                <span>{cred.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line-soft p-[14px_24px] flex justify-between items-center font-mono text-[11px] tracking-[0.12em] uppercase text-ink-soft">
        <span>{doctor.schedule}</span>
        <a href="#booking" className="text-ink border-b border-ink pb-[1px] hover:text-clay hover:border-clay transition-colors">Buat janji →</a>
      </div>
    </div>
  )
}
