export interface InsurancePartner {
  id: string
  name: string
  nameItalic?: string
}

export const insurancePartners: InsurancePartner[] = [
  { id: '01', name: 'BPJS ', nameItalic: 'Kesehatan' },
  { id: '02', name: 'Allianz' },
  { id: '03', name: 'AXA Mandiri' },
  { id: '04', name: 'Prudential' },
  { id: '05', name: 'Cigna' },
  { id: '06', name: 'Manulife' },
  { id: '07', name: 'FWD ', nameItalic: 'Insurance' },
  { id: '08', name: 'Mandiri Inhealth' },
]
