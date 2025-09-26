'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTABannerSection() {
  const ctaBannerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-banner-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.cta-banner-section',
          start: 'top 80%',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaBannerRef} className="cta-banner-section py-24 px-6 bg-gray-50" id="apply">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Get Your Digital License Today
        </h2>
        
        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the digital revolution in driver testing. Experience Nigeria&apos;s most advanced computerized platform wherever or whenever you want!
        </p>

        {/* CTA Button */}
        <a 
          href="#apply" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-xl text-lg hover:bg-[#FF8C42] transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Start Registration
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}