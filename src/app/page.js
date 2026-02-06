'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TrainingShowcase from '../components/TrainingShowcase';
import TrainingManualSection from '../components/TrainingManualSection';
import FeaturesSection from '../components/FeaturesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABannerSection from '../components/CTABannerSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#222222] font-[Inter,system-ui,sans-serif]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <TrainingShowcase /> */}
      <TrainingManualSection />
      {/* <FeaturesSection /> */}
      <ProcessSection />
      <TestimonialsSection />
      <CTABannerSection />
      <FooterSection />
    </div>
  );
}
