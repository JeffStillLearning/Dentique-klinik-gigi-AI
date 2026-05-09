export interface Facility {
  id: string
  label: string
  photo: string
  span?: 'double'
}

export const facilities: Facility[] = [
  {
    id: '01',
    label: 'Ruang Tunggu Utama',
    photo: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=85&fm=webp&auto=format&fit=crop',
    span: 'double',
  },
  {
    id: '02',
    label: 'Ruang Perawatan A',
    photo: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=85&fm=webp&auto=format&fit=crop',
  },
  {
    id: '03',
    label: 'Sterilisasi',
    photo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=85&fm=webp&auto=format&fit=crop',
  },
  {
    id: '04',
    label: 'Ruang Anak',
    photo: 'https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=600&q=85&fm=webp&auto=format&fit=crop',
  },
  {
    id: '05',
    label: 'Lab Digital 3D',
    photo: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=85&fm=webp&auto=format&fit=crop',
  },
]
