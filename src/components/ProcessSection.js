'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, Computer, GraduationCap, FileText, ChevronDown, ChevronUp } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const processRef = useRef();
  const [expandedSteps, setExpandedSteps] = useState({});

  const toggleStep = (index) => {
    setExpandedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const steps = [
    { 
      icon: ClipboardCheck, 
      title: "Register", 
      shortDesc: "Sign up online and create your account on our digital platform.",
      fullDesc: "Visit our official website at app.cdttest.com.ng to create your account. Complete your personal information including full name, date of birth, contact details, and upload a clear passport photograph. Verify your email address and phone number to activate your account. No physical documents or biometric verification required - everything is done digitally for your convenience.",
      number: "01"
    },
    { 
      icon: FileText, 
      title: "Select Test Category", 
      shortDesc: "Choose your specific test category based on your vehicle type and intended use.",
      fullDesc: "Register for your test of choice from our comprehensive categories: Truck Use (for commercial heavy-duty vehicles and cargo transportation), Vehicle Use (for standard passenger cars and light commercial vehicles), Motorcycle Use (for two-wheeled vehicles and tricycles), and Personal Use (for private individual transportation needs). Each category has specific requirements and testing protocols tailored to the vehicle type and usage pattern.",
      number: "02"
    },
    { 
      icon: Computer, 
      title: "Take Digital Test", 
      shortDesc: "Complete your computer-based examination in a controlled environment.",
      fullDesc: "Schedule your test appointment at any of our authorized digital testing centers across Nigeria. Take your comprehensive computer-based examination which includes theory questions, traffic rules assessment, road signs recognition, and hazard perception tests. Our advanced anti-fraud system ensures test integrity with real-time monitoring. The digital platform provides instant scoring with detailed performance analytics for each section of your test.",
      number: "03"
    },
    { 
      icon: GraduationCap, 
      title: "Get Certified", 
      shortDesc: "Receive your digital certificate immediately upon successful completion.",
      fullDesc: "Upon passing your test, receive your official digital driving certificate instantly through our platform. Your certificate is automatically verified and registered with relevant Nigerian transportation authorities. Download your certificate in PDF format, access it anytime through your account dashboard, and receive SMS/email confirmation. The digital certificate carries the same legal validity as traditional licenses and is recognized nationwide by law enforcement and regulatory bodies.",
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
                <div className="mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {step.shortDesc}
                  </p>
                  
                  {/* Collapsible detailed description */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedSteps[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-600 text-xs leading-relaxed border-t border-gray-200 pt-3">
                      {step.fullDesc}
                    </p>
                  </div>
                  
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleStep(index)}
                    className="flex items-center gap-1 text-[#FF6B35] text-xs font-medium mt-2 hover:text-[#FF6B35]/80 transition-colors"
                  >
                    {expandedSteps[index] ? 'Show Less' : 'Read More'}
                    {expandedSteps[index] ? 
                      <ChevronUp className="w-3 h-3" /> : 
                      <ChevronDown className="w-3 h-3" />
                    }
                  </button>
                </div>
                
                {/* Fun Tagline */}
                <div className="text-xs text-gray-500 font-medium">
                  {index === 0 && "Easy Setup!"}
                  {index === 1 && "Choose Wisely!"}
                  {index === 2 && "Test Time!"}
                  {index === 3 && "Success!"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of Nigerians who have already experienced our seamless digital testing process.
            </p>
            <a 
              href="https://app.cdttest.com.ng" 
              target="_blank"
              rel="noopener noreferrer"
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