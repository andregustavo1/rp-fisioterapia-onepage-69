
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import TreatmentProcess from '@/components/TreatmentProcess';
import TreatmentGallery from '@/components/TreatmentGallery';
import ContactSection from '@/components/ContactSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.pageYOffset;
      
      if (totalScroll) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title
  useEffect(() => {
    document.title = 'RP Fisioterapia | Tratamento Especializado para sua Recuperação';
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <TreatmentGallery />
        <ServicesSection />
        <SpecialtiesSection />
        <TreatmentProcess />
        <ContactSection />
        <CtaSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
