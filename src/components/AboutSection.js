'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MonitorCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const aboutRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        }
      });

      gsap.from('.about-paragraph', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="about-section relative py-24 px-6 overflow-hidden" id="about">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#006400]/8 rounded-full blur-2xl translate-x-24 translate-y-24"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FF8C42]/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="about-title text-4xl md:text-5xl font-bold text-[#FF6B35] text-center mb-8">
          Why Computerized Testing Matters
        </h2>
        <p className="about-paragraph text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Transforming Nigeria&apos;s driving education with cutting-edge technology, transparency, and fairness for every citizen.
        </p>

        {/* First Row - Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="about-paragraph text-2xl font-bold text-gray-800 mb-4">
              The Digital Revolution in Driver Education
            </h3>
            <p className="about-paragraph text-lg leading-relaxed text-gray-700">
              Nigeria&apos;s transportation landscape is evolving rapidly. Our computerized driver testing system represents a paradigm shift towards transparency, efficiency, and fairness in how we assess and certify drivers across the nation.
            </p>
            <p className="about-paragraph text-lg leading-relaxed text-gray-700">
              By eliminating human bias and standardizing the testing process, we&apos;re creating a merit-based system where every Nigerian has an equal opportunity to demonstrate their driving competency.
            </p>
            <div className="about-paragraph bg-[#FF6B35]/10 p-6 rounded-xl border-l-4 border-[#FF6B35]">
              <p className="text-gray-800 font-semibold">
                &quot;This system doesn&apos;t just test drivers—it builds confidence in our transportation infrastructure.&quot;
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-video bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-xl overflow-hidden">
              <img 
                src="/cdtgraphics.png" 
                alt="Computer-based testing station"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Row - Subtle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Zero Corruption */}
          <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
              <MonitorCheck className="w-5 h-5 text-[#FF6B35]" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Zero Corruption Policy</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our automated system eliminates opportunities for bribery and favoritism, ensuring every test is conducted fairly and impartially.
            </p>
            <blockquote className="border-l-3 border-[#FF6B35] pl-4 text-sm italic text-gray-700">
              &quot;Finally, a system where merit determines success, not money.&quot;
            </blockquote>
          </div>

          {/* Card 2 - Quote Card */}
          <div className="about-paragraph bg-[#FF6B35]/5 rounded-xl p-6 border border-[#FF6B35]/20">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">What People Are Saying</h4>
            <blockquote className="text-gray-700 mb-4 italic">
              &quot;I took my test last month and couldn&apos;t believe how smooth the process was. No stress, no confusion, just fair assessment.&quot;
            </blockquote>
            <cite className="text-sm text-[#FF6B35] font-medium">- Amina K., Lagos</cite>
          </div>

          {/* Card 3 - Stats */}
          <div className="about-paragraph bg-[#006400]/5 rounded-xl p-6 border border-[#006400]/20">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Success Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pass Rate</span>
                <span className="font-bold text-[#006400]">98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average Test Time</span>
                <span className="font-bold text-[#006400]">45 mins</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Customer Satisfaction</span>
                <span className="font-bold text-[#006400]">99.2%</span>
              </div>
            </div>
          </div>

          {/* Card 4 - Faster Processing */}
          <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Instant Results</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Receive your test results immediately upon completion. Digital certificates are generated instantly, eliminating weeks of waiting time.
            </p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600">
                <strong>Before:</strong> 2-4 weeks waiting • <strong>Now:</strong> Instant certification
              </p>
            </div>
          </div>

          {/* Card 5 - Nationwide Coverage */}
          <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Nationwide Coverage</h4>
            <p className="text-gray-600 text-sm mb-4">
              Consistent testing standards across all 36 states and FCT ensure equal opportunities for all Nigerians.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-[#FF6B35]">36</div>
                <div className="text-xs text-gray-500">States</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#FF6B35]">200+</div>
                <div className="text-xs text-gray-500">Centers</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#FF6B35]">24/7</div>
                <div className="text-xs text-gray-500">Available</div>
              </div>
            </div>
          </div>

          {/* Card 6 - Technology Features */}
          <div className="about-paragraph bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/5 rounded-xl p-6 border border-[#FF6B35]/20 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Advanced Technology</h4>
            <p className="text-gray-600 text-sm mb-4">
              AI-powered assessment tools and real-time monitoring ensure accurate evaluation of driving skills and knowledge.
            </p>
            <div className="space-y-2">
              <div className="text-xs text-gray-700">✓ Biometric verification</div>
              <div className="text-xs text-gray-700">✓ Real-time scoring</div>
              <div className="text-xs text-gray-700">✓ Digital certification</div>
              <div className="text-xs text-gray-700">✓ Anti-fraud protection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}