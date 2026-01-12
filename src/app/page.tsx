
import HeroSection from '@/components/sections/Hero';
import HowItWorksSection from '@/components/sections/HowltWorks';
import TeamSection from '@/components/sections/Team';
import GuaranteeSection from '@/components/sections/Guarantee';
import TargetAudienceSection from '@/components/sections/TargetAudience';
import PricingSection from '@/components/sections/Pricing';
import TestimonialsSection from '@/components/sections/Testimonials';
 import AppDownloadSection from '@/components/sections/AppDownload';
import FAQSection from '@/components/sections/FAQ';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';


export default function Home() {
  return (
    <>
    <Header />
      <HeroSection />
      <HowItWorksSection />
      <GuaranteeSection />
      <TargetAudienceSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <FAQSection />
      <Footer />
    </>
  );
}

// Esta página es SSG por defecto en Next.js 14 con App Router