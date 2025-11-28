'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TrainingShowcase from '@/components/TrainingShowcase';
import TrainingManualSection from '@/components/TrainingManualSection';
import FooterSection from '@/components/FooterSection';

export default function TrainingManualPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <Navbar forceSticky={true} />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#FF6B35]/5 to-white overflow-hidden pt-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#006400]/5 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Training Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master your driving skills with our comprehensive training platform and detailed manual. Everything you need to pass your test and become a safe, confident driver.
          </p>
        </div>
      </section>

      {/* Training Showcase Section */}
      <TrainingShowcase />

      {/* Training Manual Section */}
      <TrainingManualSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
