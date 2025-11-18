'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar({ forceSticky = false }) {
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(forceSticky);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Process', href: '/process' },
    { name: 'Testimonials', href: '/testimonials' },
    // { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    if (forceSticky) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceSticky]);

  return (
    <nav 
      ref={navRef} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Layout - 3 column grid */}
        <div className="hidden md:grid grid-cols-3 items-center h-16">
          {/* Left Column - Logo */}
          <div className="flex justify-start">
            <a href="#hero" className="flex items-center space-x-2">
              <img 
                src="/cdtlogo2.png" 
                alt="CDTT Logo" 
                className="w-12 h-12 object-cover rounded-full border-2 border-white/20"
              />
              <span className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-[#FF6B35]' : 'text-white'
              }`}>
                CDTT
              </span>
            </a>
          </div>

          {/* Center Column - Navigation Items */}
          <div className="flex items-center justify-center space-x-8">
            {navItems.filter(item => item.name !== 'Contact').map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#FF6B35]' 
                    : 'text-white hover:text-[#FF8C42]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Column - CTA Button */}
          <div className="flex items-center justify-end space-x-4">
            {/* Contact link */}
            {/* <Link
              href="/contact"
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#FF6B35]' 
                  : 'text-white hover:text-[#FF8C42]'
              }`}
            >
              Contact
            </Link> */}
            
            {/* Get Started Button */}
            <Link
              href="/apply"
              className={`relative px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 overflow-hidden group ${
                isScrolled
                  ? 'bg-[#FF6B35] text-white hover:bg-[#FF8C42]'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#FF6B35]'
              }`}
              style={{
                animation: isScrolled ? 'none' : 'borderGlow 2s ease-in-out infinite alternate'
              }}
            >
              <span className="relative z-10">Get Started</span>
              
              {/* Animated border overlay for scrolled state */}
              {isScrolled && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FF6B35] bg-size-200 animate-pulse opacity-90"
                     style={{
                       backgroundSize: '200% 100%',
                       animation: 'flowingBorder 3s linear infinite'
                     }}>
                </div>
              )}
              
              {/* Glowing border for non-scrolled state */}
              {!isScrolled && (
                <div className="absolute inset-0 rounded-full border-2 border-white/50 group-hover:border-white/80 transition-all duration-300"
                     style={{
                       boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                       animation: 'borderPulse 2s ease-in-out infinite alternate'
                     }}>
                </div>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Two column grid */}
        <div className="md:hidden grid grid-cols-2 items-center h-16">
          {/* Left Column - Logo */}
          <div className="flex justify-start">
            <a href="#hero" className="flex items-center space-x-2">
              <img 
                src="/cdtlogo2.png" 
                alt="CDTT Logo" 
                className="w-10 h-10 object-cover rounded-full border-2 border-white/20"
              />
              <span className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-[#FF6B35]' : 'text-white'
              }`}>
                CDTT
              </span>
            </a>
          </div>

          {/* Right Column - Mobile menu button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-[#FF6B35] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative block w-full text-center py-3 mt-4 bg-[#FF6B35] text-white rounded-full font-semibold hover:bg-[#FF8C42] transition-colors duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-all duration-500"
                   style={{
                     backgroundSize: '200% 100%',
                     animation: 'flowingBorder 2s linear infinite'
                   }}>
              </div>
            </Link>
          </div>
        )}
      </div>
      
      {/* Add custom keyframes for the border animations */}
      <style jsx>{`
        @keyframes flowingBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes borderPulse {
          0% { 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.5);
          }
          100% { 
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
            border-color: rgba(255, 255, 255, 0.8);
          }
        }
        
        @keyframes borderGlow {
          0% { 
            box-shadow: 0 0 15px rgba(255, 107, 53, 0.3);
          }
          100% { 
            box-shadow: 0 0 25px rgba(255, 107, 53, 0.6);
          }
        }
      `}</style>
    </nav>
  );
}