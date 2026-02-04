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
    <>  <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto rounded-xl object-cover"
    >
      <source
        src="https://res.cloudinary.com/dkgystsn3/video/upload/v1770209978/cdtt-2_cxgoe2.mp4"
        type="video/mp4"
      />
    </video></>
      <TestimonialsSection />
      <CTABannerSection />
      <FooterSection />
    </div>
  );
}
