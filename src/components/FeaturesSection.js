'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MonitorCheck, BookOpen, ShieldCheck, Users, Car, Truck, Zap, Clock, Bike } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturesSection() {
  const featuresRef = useRef();
  const [activeFeature, setActiveFeature] = useState(0);

  const digitalFeatures = [
    { 
      icon: MonitorCheck, 
      title: "100% Digital Testing", 
      desc: "No paper, no manual scoring. Everything is automated and recorded digitally for complete transparency and accuracy." 
    },
    { 
      icon: Zap, 
      title: "Instant Results", 
      desc: "Get your test results immediately. No waiting weeks for manual processing - your certificate is ready in minutes." 
    },
    { 
      icon: ShieldCheck, 
      title: "Anti-Fraud System", 
      desc: "Advanced biometric verification and AI monitoring prevent cheating and ensure test integrity at all times." 
    },
    { 
      icon: Clock, 
      title: "24/7 Availability", 
      desc: "Take your test anytime, anywhere. Our digital platform operates around the clock across all centers." 
    }
  ];

  const testTypes = [
    {
      id: 'car',
      title: 'Standard Car License',
      desc: 'Comprehensive testing for regular passenger vehicles including theory, hazard perception, and practical assessment.',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: Car
    },
    {
      id: 'truck',
      title: 'Commercial Truck License',
      desc: 'Specialized testing for heavy-duty vehicles including cargo handling, route planning, and advanced safety protocols.',
      image: '/truck1.jpg',
      icon: Truck
    },
    {
      id: 'motorcycle',
      title: 'Motorcycle License',
      desc: 'Dedicated assessment for two-wheeled vehicles covering balance, maneuvering, and traffic navigation skills.',
      image: '/cycle1.jpg',
      icon: Users
    },
    {
      id: 'tricycle',
      title: 'Tricycle License',
      desc: 'Specialized testing for three-wheeled vehicles including stability control, passenger safety, and urban navigation skills.',
      image: '/tricycle1.jpg',
      icon: Bike
    },
    {
      id: 'commercial',
      title: 'Commercial Vehicle License',
      desc: 'Professional driver certification for buses, delivery vehicles, and specialized commercial transportation.',
      image: '/jeep1.jpg',
      icon: BookOpen
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set('.digital-feature-item', { opacity: 0, y: 30 });
      
      // Create the animation
      gsap.to('.digital-feature-item', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.digital-features-grid',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % testTypes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testTypes.length]);

  return (
    <section ref={featuresRef} id="features" className="features-section py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#006400]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B35] text-center mb-8">
          Advanced Digital Features
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Experience the future of driver testing with our state-of-the-art digital platform
        </p>

        {/* Digital Features Grid */}
        <div className="digital-features-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {digitalFeatures.map((feature, index) => (
            <div key={index} className="digital-feature-item group bg-gray-50 p-6 rounded-xl text-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <feature.icon className="w-10 h-10 mx-auto mb-4 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Test Types Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Multiple Test Categories Available
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From standard car licenses to specialized commercial vehicle certifications - we cover all your driving needs
          </p>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Animated Image Container */}
            <div className="relative order-2 lg:order-1">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto relative">
                {testTypes.map((test, index) => (
                  <div
                    key={test.id}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === activeFeature 
                        ? 'opacity-100 scale-100 rotate-0' 
                        : 'opacity-0 scale-95 rotate-12'
                    }`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white shadow-2xl">
                      <img 
                        src={test.image} 
                        alt={test.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating icon */}
                    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 lg:-bottom-4 lg:-right-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg">
                      <test.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center mt-6 lg:mt-8 space-x-3">
                {testTypes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeFeature 
                        ? 'bg-[#FF6B35] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="w-full order-1 lg:order-2">
              <div className="space-y-6 lg:space-y-8 max-w-md mx-auto lg:max-w-none lg:mx-0">
                {testTypes.map((test, index) => (
                  <div
                    key={test.id}
                    className={`transition-all duration-500 ${
                      index === activeFeature 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-30 translate-x-4'
                    }`}
                  >
                    <div className="flex items-start space-x-4 text-center lg:text-left">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        index === activeFeature 
                          ? 'bg-[#FF6B35] text-white scale-110' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        <test.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{test.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{test.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}