import { AnnouncementBar } from '@/components/sections/AnnouncementBar'
import { NavBar } from '@/components/sections/NavBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { FlowSection } from '@/components/sections/FlowSection'
import { DoctorsSection } from '@/components/sections/DoctorsSection'
import { FacilitiesSection } from '@/components/sections/FacilitiesSection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { LocationSection } from '@/components/sections/LocationSection'
import { BookingSection } from '@/components/sections/BookingSection'
import { FooterSection } from '@/components/sections/FooterSection'
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:rounded"
      >
        Langsung ke konten utama
      </a>

      <AnnouncementBar />

      <header role="banner" aria-label="Header utama Dentique Clinic">
        <NavBar />
      </header>

      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        <div role="complementary" aria-label="Kredensial dan akreditasi">
          <TrustBar />
        </div>

        <ServicesSection />
        <FlowSection />
        <DoctorsSection />
        <FacilitiesSection />
        <TestimonialSection />
        <FAQSection />
        <LocationSection />
        <BookingSection />
      </main>

      <FooterSection />
      <WhatsAppFAB />
    </>
  )
}
