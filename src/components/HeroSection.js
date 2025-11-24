'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Shield, CheckCircle, GraduationCap, ArrowRight, Play } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animations
      gsap.from('.hero-badge', { y: -30, opacity: 0, duration: 0.8, delay: 1.2 });
      gsap.from('.headline', { y: 60, opacity: 0, duration: 1.2, delay: 1.4, ease: 'power3.out' });
      gsap.from('.subheadline', { y: 40, opacity: 0, duration: 1, delay: 1.6 });
      gsap.from('.hero-stats', { y: 30, opacity: 0, duration: 0.8, delay: 1.8 });
      gsap.from('.cta-group', { y: 40, opacity: 0, duration: 1, delay: 2 });
      
      // Floating elements
      gsap.from('.floating-icon', { 
        y: 100, 
        opacity: 0, 
        stagger: 0.15, 
        duration: 1.5, 
        delay: 2.2,
        ease: 'elastic.out(1, 0.8)'
      });
      
      // Continuous floating animation
      gsap.to('.floating-icon', {
        y: '+=20',
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: 0.2
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-5">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        // }}
        style={{
          backgroundImage: `url('/abg1.jpg')`
        }}
      ></div>
      
      {/* Dark semitransparent blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      {/* Orange gradient overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 via-[#FF8C42]/10 to-[#FF4500]/20"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#006400]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <Car className="floating-icon absolute top-32 left-16 w-10 h-10 text-white/30" />
        <Shield className="floating-icon absolute top-40 right-24 w-8 h-8 text-[#006400]/40" />
        <CheckCircle className="floating-icon absolute bottom-48 left-32 w-9 h-9 text-white/25" />
        <GraduationCap className="floating-icon absolute bottom-32 right-16 w-11 h-11 text-[#006400]/35" />
      </div> */}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 pt-6 md:pt-16 lg:pt-19">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
          <div className="w-2 h-2 bg-[#006400] rounded-full animate-pulse"></div>
          <span className="text-white/90 text-sm font-medium">Official Government Platform</span>
        </div>

        {/* Main headline */}
        <h1 className="headline text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
          The Computerized Drivers Training and Testing Platform 
        </h1>
        
        <p className="subheadline text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience Nigeria&apos;s most advanced computerized driver testing platform. Fair, transparent, and designed for the modern Nigerian driver.
        </p>

        {/* Stats */}
        {/* <div className="hero-stats flex flex-wrap justify-center gap-8 mb-12 text-white/80">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">10,000+</div>
            <div className="text-sm">Tests Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm">Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">36</div>
            <div className="text-sm">States Supported</div>
          </div>
        </div> */}
        
        {/* CTA buttons */}
        <div className="cta-group flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#apply" 
            className="group flex items-center gap-3 px-8 py-4 bg-white text-[#FF6B35] font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 hover:bg-gray-50"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          {/* <a 
            href="#about" 
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-white/20"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </a> */}
        </div>
      </div>
    </section>
  );
}