import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TimeSavingCalculator from '@/components/sections/TimeSavingCalculator';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import CtaSection from '@/components/sections/CtaSection';
import NotifySection from '@/components/sections/NotifySection';
import ContactSection from '@/components/sections/ContactSection';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Set title and description for SEO
    document.title = "AppointKaro - Book Appointments & Save Time | Coming Soon";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <TimeSavingCalculator />
        <ServicesSection />
        <AboutSection />
        <BenefitsSection />
        <CtaSection />
        <NotifySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
