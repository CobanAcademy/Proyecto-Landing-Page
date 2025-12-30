import React from 'react';
import HeroSection from '@/components/sections/Hero';
import HowItWorksSection from '@/components/sections/HowltWorks';
import TeamSection from '@/components/sections/Team';


export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      {/* <GuaranteeSection />
      <TargetAudienceSection /> */}
      <TeamSection />
      {/* <PricingSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <FAQSection /> */}
    </>
  );
}

// Esta página es SSG por defecto en Next.js 14 con App Router