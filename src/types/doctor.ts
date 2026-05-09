export interface DoctorCredential {
  key: string
  value: string
}

export interface Doctor {
  id: string
  name: string
  role: string
  credentials: DoctorCredential[]
  schedule: string
  photo: string
}
