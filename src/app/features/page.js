'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';
import FeaturesSection from '../../components/FeaturesSection';
import { CheckCircle, Shield, Zap, TrendingUp } from 'lucide-react';

export default function FeaturesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 px-6 bg-gradient-to-b from-[#FF6B35]/5 to-white overflow-hidden pt-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Computerized Driver Testing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience modern, standardized, and unbiased driver testing that ensures fair evaluations for all applicants.
            </p>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                The Future of Driver Testing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Computerized Drivers Test (CDT) transforms driver testing with a streamlined, efficient method to evaluate candidates&apos; readiness to drive safely. CDT offers a modern, standardized, and unbiased system for administering tests, ensuring fair evaluations for all applicants.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Manual testing is outdated, often subject to inconsistencies and subjective judgments. CDT&apos;s computerized process enhances accuracy, efficiency, and transparency, ensuring every aspiring driver knows traffic laws, road safety protocols, and practical driving skills before obtaining their driver&apos;s license.
              </p>
            </div>
          </div>
        </section>

        <FeaturesSection />

        {/* Why CDT Section */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Computerized Testing?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Standardized & Fair</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every candidate receives the same questions under identical conditions, eliminating human bias and ensuring objective evaluation based solely on merit.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  No more waiting weeks for results. Receive immediate feedback and certification upon passing, streamlining your path to becoming a licensed driver.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Accuracy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Automated scoring eliminates human error and ensures consistent, precise evaluation of your driving knowledge and understanding.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Transparency</h3>
                <p className="text-gray-700 leading-relaxed">
                  Track your test progress in real-time with clear feedback on each section, helping you understand your strengths and areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-2xl p-12 border border-[#FF6B35]/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Take Your Driver Test?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join thousands of successful drivers who have passed their test through our modern computerized system.
              </p>
              <a 
                href="https://app.cdttest.com.ng/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Take Test Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
