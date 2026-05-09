export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-[--pad] text-center">
      <div className="font-display italic text-[120px] leading-none text-clay opacity-20" aria-hidden="true">
        404
      </div>
      <h1 className="font-display font-normal text-[42px] tracking-[-0.02em] mt-[24px]">
        Halaman tidak ditemukan
      </h1>
      <p className="text-ink-soft text-[18px] mt-[16px] max-w-[480px] leading-[1.6]">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia. Silakan kembali ke beranda.
      </p>
      <a
        href="/"
        className="mt-[36px] inline-flex items-center gap-[10px] px-[22px] py-[14px] text-[14px] tracking-[0.02em] rounded-full bg-ink text-paper hover:bg-clay-deep transition-all duration-200 group"
      >
        Kembali ke Beranda
        <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
      </a>
    </div>
  )
}
