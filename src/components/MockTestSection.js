'use client';

import { useEffect, useRef } from 'react';
import { ClipboardCheck, TrendingUp, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function MockTestSection() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Target,
      title: 'Know Your Level',
      description: 'Understand exactly where you stand before taking the actual test'
    },
    {
      icon: TrendingUp,
      title: 'Identify Weak Areas',
      description: 'Discover topics that need more attention and study'
    },
    {
      icon: CheckCircle,
      title: 'Build Confidence',
      description: 'Practice in a real test environment without any pressure'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-gradient-to-br from-[#FF6B35]/5 via-white to-gray-50 overflow-hidden mt-24">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full">
              <ClipboardCheck className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wide">
                Free Mock Test
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Test Your Knowledge <br />
              <span className="text-[#FF6B35]">Before The Real Exam</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Take our comprehensive mock test to assess your readiness and identify areas that need improvement. It&apos;s completely free and mirrors the actual test format.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-4 pt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-3">
                    <benefit.icon className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="https://app.cdttest.com.ng/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/30 hover:scale-105"
              >
                <span>Start Free Mock Test</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <p className="text-sm text-gray-500 mt-3">
                ✓ No registration required  •  ✓ Instant results  •  ✓ 100% Free
              </p>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Mock Test Interface Preview */}
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ClipboardCheck className="w-6 h-6" />
                    <span className="font-semibold">Mock Driving Test</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Question 1/30
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">No Time Limit</p>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* Question Preview */}
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-4">
                    What does a red traffic light indicate?
                  </p>
                  <div className="space-y-2">
                    {['Stop completely', 'Slow down', 'Proceed with caution', 'Speed up'].map((option, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#FF6B35] transition-colors duration-200 cursor-pointer">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                        <span className="text-gray-700 text-sm">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-xs text-gray-600">Correct</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-red-600">0</div>
                    <div className="text-xs text-gray-600">Wrong</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-600">30</div>
                    <div className="text-xs text-gray-600">Remaining</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-4 border-4 border-green-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">FREE</div>
                <div className="text-xs text-gray-600">Always</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-16 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[#FF6B35]">30</div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-[#FF6B35]">No Limit</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-[#FF6B35]">70%</div>
              <div className="text-sm text-gray-600">Pass Mark</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-[#FF6B35]">Instant</div>
              <div className="text-sm text-gray-600">Results</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
