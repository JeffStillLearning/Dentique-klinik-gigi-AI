const steps = [
  {
    n: 'i.',
    title: 'Hubungi Kami',
    desc: 'Booking via WhatsApp, telepon, atau form di halaman ini. Tim resepsionis akan merespons dalam 1 jam pada jam kerja.',
    dur: '~ 5 menit',
  },
  {
    n: 'ii.',
    title: 'Konsultasi Awal',
    desc: 'Pemeriksaan menyeluruh, rontgen panoramik, dan diskusi opsi perawatan dengan dokter — gratis untuk kunjungan pertama.',
    dur: '~ 30 menit',
  },
  {
    n: 'iii.',
    title: 'Rencana & Estimasi',
    desc: 'Anda menerima rencana tertulis: tahapan, durasi, biaya total, dan opsi cicilan tanpa bunga hingga 12 bulan.',
    dur: 'Sebelum tindakan',
  },
  {
    n: 'iv.',
    title: 'Perawatan & Tindak Lanjut',
    desc: 'Mulai perawatan sesuai jadwal yang Anda pilih. Setiap pasien dapat akses portal untuk riwayat & pengingat.',
    dur: 'Berkelanjutan',
  },
]

export function FlowSection() {
  return (
    <section className="bg-ink text-paper py-[clamp(60px,9vw,120px)] px-[var(--pad)]" aria-labelledby="flow-heading">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-end mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/60 flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1px] before:bg-gold">Cara Booking · 4 Langkah</div>
            <h2 className="font-display font-normal text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.018em] mt-[18px] text-balance text-paper [&>em]:italic [&>em]:text-gold" id="flow-heading">
              Tanpa antrian.<br />Tanpa <em>kejutan biaya</em>.
            </h2>
          </div>
          <div className="text-paper/65 text-[16px] max-w-[480px]">
            Kami percaya pengalaman ke dokter gigi semestinya tenang sejak menit pertama Anda menghubungi kami. Begini alurnya.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-paper/20">
          {steps.map((step) => (
            <div 
              className="p-[36px_28px_32px] border-r border-paper/15 relative last:border-r-0 
                         max-sm:border-r-0 max-sm:border-b 
                         sm:max-lg:[&:nth-child(2)]:border-r-0 sm:max-lg:[&:nth-child(1)]:border-b sm:max-lg:[&:nth-child(2)]:border-b" 
              key={step.n}
            >
              <div className="font-display italic text-[54px] leading-none text-gold mb-[36px]">{step.n}</div>
              <h4 className="font-display font-normal text-[24px] mb-[10px] tracking-[-0.01em]">{step.title}</h4>
              <p className="text-[14px] text-paper/65 leading-[1.55]">{step.desc}</p>
              <div className="mt-[20px] font-mono text-[10.5px] tracking-[0.16em] uppercase text-paper/50">{step.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
