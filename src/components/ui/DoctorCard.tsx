import Image from 'next/image'
import type { Doctor } from '@/types/doctor'

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="doc">
      <div className="ph" style={{ position: 'relative' }}>
        <Image
          src={doctor.photo}
          alt={`${doctor.name}, ${doctor.role} di Dentique Clinic`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <div className="ph-tag">Foto profesional</div>
        <div className="ph-id">{doctor.id}</div>
      </div>
      <div className="doc-body">
        <h4>{doctor.name}</h4>
        <div className="role">{doctor.role}</div>
        <div className="creds">
          <ul>
            {doctor.credentials.map((cred) => (
              <li key={cred.key}>
                <span className="k">{cred.key}</span>
                <span>{cred.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="doc-foot">
        <span>{doctor.schedule}</span>
        <a href="#booking">Buat janji →</a>
      </div>
    </div>
  )
}
