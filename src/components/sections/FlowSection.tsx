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
    <section className="flow-section" aria-labelledby="flow-heading">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Cara Booking · 4 Langkah</div>
            <h2 className="display" id="flow-heading">
              Tanpa antrian.<br />Tanpa <em>kejutan biaya</em>.
            </h2>
          </div>
          <div className="right">
            Kami percaya pengalaman ke dokter gigi semestinya tenang sejak menit pertama Anda menghubungi kami. Begini alurnya.
          </div>
        </div>

        <div className="flow">
          {steps.map((step) => (
            <div className="step" key={step.n}>
              <div className="n">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              <div className="dur">{step.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
