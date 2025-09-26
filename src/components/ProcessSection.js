'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, Computer, GraduationCap, FileText } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const processRef = useRef();

  const steps = [
    { 
      icon: ClipboardCheck, 
      title: "Register", 
      desc: "Sign up online or visit any authorized center. Upload your documents and complete biometric verification.",
      number: "01"
    },
    { 
      icon: FileText, 
      title: "Study", 
      desc: "Access our comprehensive study materials and practice tests designed for Nigerian road conditions.",
      number: "02"
    },
    { 
      icon: Computer, 
      title: "Take Test", 
      desc: "Complete your computer-based examination in a controlled, fair environment with instant scoring.",
      number: "03"
    },
    { 
      icon: GraduationCap, 
      title: "Get Certified", 
      desc: "Receive your digital certificate immediately upon passing, with automatic authority notification.",
      number: "04"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 80%',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={processRef} id="process" className="process-section py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-600 text-sm font-medium">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Get Your License In Four Simple Steps <br />
            Through Our Digital Platform
          </h2>
        </div>

        {/* Horizontal Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="process-step group">
              <div className="bg-gray-50 rounded-3xl p-8 h-full transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100 hover:border-[#FF6B35]/20">
                {/* Step Number */}
                <div className="text-gray-400 text-sm font-medium mb-4">
                  STEP {step.number}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#FF6B35] transition-colors">
                  {step.title}
                </h3>
                
                {/* Visual Element - Placeholder for illustration */}
                <div className="w-full h-32 bg-white rounded-2xl mb-6 flex items-center justify-center border border-gray-200 group-hover:border-[#FF6B35]/30 transition-all">
                  <step.icon className="w-10 h-10 text-[#FF6B35] group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
                
                {/* Fun Tagline */}
                <div className="text-xs text-gray-500 font-medium">
                  {index === 0 && "Easy Setup!"}
                  {index === 1 && "Learn Smart!"}
                  {index === 2 && "Test Time!"}
                  {index === 3 && "Success!"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Connection Line */}
        {/* <div className="hidden lg:block relative -mt-96 mb-96 pointer-events-none">
          <div className="absolute top-20 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          {/* Connection dots *
          <div className="absolute top-[76px] left-1/4 w-2 h-2 bg-[#FF6B35] rounded-full transform -translate-x-1/2"></div>
          <div className="absolute top-[76px] left-2/4 w-2 h-2 bg-[#FF6B35] rounded-full transform -translate-x-1/2"></div>
          <div className="absolute top-[76px] left-3/4 w-2 h-2 bg-[#FF6B35] rounded-full transform -translate-x-1/2"></div>
          <div className="absolute top-[76px] right-1/4 w-2 h-2 bg-[#FF6B35] rounded-full transform translate-x-1/2"></div>
        </div> */}

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of Nigerians who have already experienced our seamless digital testing process.
            </p>
            <a 
              href="#apply" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-[#FF6B35] transition-all duration-300 group"
            >
              Begin Registration
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}