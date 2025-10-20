'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FooterSection() {
  const footerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.footer-section',
          start: 'top 90%',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} id="footer" className="footer-section bg-gray-800 py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="footer-content max-w-6xl mx-auto relative z-10">
        {/* Top section with main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your <br />
            <span className="text-[#FF6B35]">Driving Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Nigerians experiencing the future of driver testing. Fair, fast, and completely digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://app.cdttest.com.ng" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-[#FF6B35]/30 transition-all duration-300 hover:scale-105"
            >
              Book Your Test
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#process" 
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Footer links grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/cdtlogo2.png" 
                alt="CDTT Logo" 
                className="w-10 h-10 object-cover rounded-full border-2 border-white/20"
              />
              <span className="text-2xl font-bold text-white">CDTT</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Nigeria&apos;s premier computerized driver testing platform. Modern, fair, and designed for the digital age.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#FF6B35]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span className="text-gray-300">+234-800-TEST-NOW</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#FF6B35]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-300">Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#FF6B35]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-gray-300">info@cdtt.ng</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                About Platform
              </a></li>
              <li><a href="#features" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                Features
              </a></li>
              <li><a href="#process" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                How It Works
              </a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                Testimonials
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Test Types</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                Car License
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                Motorcycle
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                Commercial
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#FF6B35] transition-colors"></span>
                Study Materials
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Connect</h4>
            <div className="space-y-4 mb-6">
              <a href="https://facebook.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B35] transition-colors group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#FF6B35]/20 transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B35] transition-colors group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#FF6B35]/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B35] transition-colors group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#FF6B35]/20 transition-colors">
                  <Twitter className="w-4 h-4" />
                </div>
                <span>Twitter</span>
              </a>
              <a href="https://youtube.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B35] transition-colors group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#FF6B35]/20 transition-colors">
                  <Youtube className="w-4 h-4" />
                </div>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-gray-400">
              ©2025 <span className="text-[#FF6B35] font-semibold">CDTT.ng</span> - All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Built with ❤️ in Nigeria</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">Privacy Policy</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">Terms of Service</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}