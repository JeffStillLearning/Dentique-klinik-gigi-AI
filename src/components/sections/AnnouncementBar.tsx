export function AnnouncementBar() {
  return (
    <div role="banner" aria-label="Informasi promosi" className="bg-ink text-paper text-[12.5px] tracking-[0.06em] uppercase py-[9px] px-[var(--pad)] flex justify-center gap-[24px] font-mono">
      <span>
        <span className="w-[5px] h-[5px] rounded-full bg-clay inline-block self-center" aria-hidden="true" />&nbsp;
        Konsultasi pertama gratis — sampai 31 Mei
      </span>
      <span aria-hidden="true">·</span>
      <span className="opacity-55 max-[720px]:hidden">Menerima BPJS &amp; 12 mitra asuransi</span>
    </div>
  )
}
