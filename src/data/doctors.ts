import type { Doctor } from '@/types/doctor'

export const doctors: Doctor[] = [
  {
    id: 'DOC-01',
    name: 'drg. Anindita Larasati, Sp.KG',
    role: 'Konservasi Gigi · Founding Partner',
    credentials: [
      { key: 'Pendidikan', value: 'FKG Universitas Indonesia · 2008' },
      { key: 'Spesialis', value: 'Konservasi Gigi · UI · 2014' },
      { key: 'No. STR', value: '3311100823145621' },
    ],
    schedule: 'Sen — Jum · Pagi',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=85&fm=webp&auto=format&fit=crop',
  },
  {
    id: 'DOC-02',
    name: 'drg. Rendra Kusuma, Sp.Ort',
    role: 'Ortodonti · Behel & Aligner',
    credentials: [
      { key: 'Pendidikan', value: 'FKG Universitas Padjadjaran · 2010' },
      { key: 'Spesialis', value: 'Ortodonti · UNPAD · 2016' },
      { key: 'No. STR', value: '3311100923145897' },
    ],
    schedule: 'Sel — Sab · Sore',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=85&fm=webp&auto=format&fit=crop',
  },
  {
    id: 'DOC-03',
    name: 'drg. Sharifah Maulida, Sp.BM',
    role: 'Bedah Mulut · Implan',
    credentials: [
      { key: 'Pendidikan', value: 'FKG Universitas Airlangga · 2009' },
      { key: 'Spesialis', value: 'Bedah Mulut · UI · 2015' },
      { key: 'No. STR', value: '3311100723142031' },
    ],
    schedule: "Rabu & Jum'at",
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=85&fm=webp&auto=format&fit=crop',
  },
]
