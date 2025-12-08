'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MonitorCheck, Users, Zap, BookOpen } from 'lucide-react';

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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="about-title text-4xl md:text-5xl font-bold text-[#FF6B35] text-center mb-8">
          Transforming Driver Education in Nigeria
        </h2>
        <p className="about-paragraph text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Computerized Drivers Test is a modern approach approved by the Federal Government of Nigeria to the aquisition of drivers licence. This employs the use of Computer Based Testing to acces the knowledge and understanding of drivers regarding road use and safe driving practices. Candidates are to take thier tests at designated centers after studying the Computer Drivers Test Manual
        </p>

        {/* Testing Section */}
        <div className="mb-24">
          <h3 className="about-paragraph text-3xl font-bold text-gray-800 mb-12 text-center">
            Computerized Driver Testing
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h4 className="about-paragraph text-2xl font-bold text-[#FF6B35] mb-4">
                Fair, Transparent, and Merit-Based Assessment
              </h4>
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
              <div className="aspect-video bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-xl overflow-hidden relative">
                <img 
                  src="/Abujapretty.jpg" 
                  alt="Computer-based testing station"
                  className="w-full h-full object-cover"
                />
                {/* Logo Overlay */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img 
                    src="/cdtlogo2.png" 
                    alt="CDTT Logo"
                    className="w-full h-full object-contain scale-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            <div className="about-paragraph bg-[#FF6B35]/5 rounded-xl p-6 border border-[#FF6B35]/20">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">What People Are Saying</h4>
              <blockquote className="text-gray-700 mb-4 italic text-sm">
                &quot;I took my test last month and couldn&apos;t believe how smooth the process was. No stress, no confusion, just fair assessment.&quot;
              </blockquote>
              <cite className="text-sm text-[#FF6B35] font-medium">- Amina K., Kaduna</cite>
            </div>

            <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Instant Results</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Receive your test results immediately upon completion. Digital certificates are generated instantly, eliminating weeks of waiting time.
              </p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Before:</strong> 2-4 weeks • <strong>Now:</strong> Instant
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div className="mb-20">
          <h3 className="about-paragraph text-3xl font-bold text-gray-800 mb-12 text-center">
            Comprehensive Driver Training Programs
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-video bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-xl overflow-hidden flex items-center justify-center relative">
                <img 
                  src="/training2.webp" 
                  alt="Comprehensive driver training program"
                  className="w-full h-full object-cover"
                />
                {/* Logo Overlay */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img 
                    src="/cdtlogo2.png" 
                    alt="CDTT Logo"
                    className="w-full h-full object-contain scale-200"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="about-paragraph text-2xl font-bold text-[#FF6B35] mb-4">
                Learn Before You Test
              </h4>
              <p className="about-paragraph text-lg leading-relaxed text-gray-700">
                Our comprehensive training platform prepares you thoroughly for the driving test. From road safety fundamentals to advanced driving techniques, we cover everything you need to become a confident and responsible driver.
              </p>
              <p className="about-paragraph text-lg leading-relaxed text-gray-700">
                Interactive lessons, video tutorials, and practice tests help you master the material at your own pace, ensuring you&apos;re fully prepared when you take the official assessment.
              </p>
              <div className="about-paragraph bg-[#FF6B35]/10 p-6 rounded-xl border-l-4 border-[#FF6B35]">
                <p className="text-gray-800 font-semibold">
                  &quot;Knowledge is the foundation of safe driving. We empower drivers with comprehensive training.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Interactive Lessons</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engaging course materials covering traffic rules, vehicle maintenance, road safety, and defensive driving techniques designed for Nigerian roads.
              </p>
            </div>

            <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Practice Tests</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlimited practice exams that mirror the actual test format, helping you identify weak areas and build confidence before the real assessment.
              </p>
            </div>

            <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Expert Support</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access to experienced instructors and support staff ready to answer your questions and guide you through your learning journey.
              </p>
            </div>

            <div className="about-paragraph bg-[#FF6B35]/5 rounded-xl p-6 border border-[#FF6B35]/20">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Training Success Stories</h4>
              <blockquote className="text-gray-700 mb-4 italic text-sm">
                &quot;The training program was so comprehensive! I felt 100% ready for my test and passed on my first attempt.&quot;
              </blockquote>
              <cite className="text-sm text-[#FF6B35] font-medium">- Chidi O., Lagos</cite>
            </div>

            <div className="about-paragraph bg-white rounded-xl shadow-sm p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Self-Paced Learning</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Study whenever and wherever you want. Access all training materials on your phone, tablet, or computer with offline support.
              </p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">
                  Learn at your pace • No strict timelines • Lifetime access
                </p>
              </div>
            </div>

            <div className="about-paragraph bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/5 rounded-xl p-6 border border-[#FF6B35]/20 md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Certification & Progression</h4>
              <p className="text-gray-600 text-sm mb-4">
                Track your progress with detailed analytics and earn certificates upon completing training modules.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-gray-700">✓ Progress tracking</div>
                <div className="text-xs text-gray-700">✓ Module certificates</div>
                <div className="text-xs text-gray-700">✓ Performance insights</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="about-paragraph text-2xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="about-paragraph bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#FF6B35] font-bold text-2xl">•</span>
                <p className="text-lg font-semibold text-gray-800">Integrity</p>
              </div>
              <p className="text-sm text-gray-600">Honest and transparent testing and training</p>
            </div>
            <div className="about-paragraph bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#006400] font-bold text-2xl">•</span>
                <p className="text-lg font-semibold text-gray-800">Fairness</p>
              </div>
              <p className="text-sm text-gray-600">Equal opportunity for all aspiring drivers</p>
            </div>
            <div className="about-paragraph bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#FF6B35] font-bold text-2xl">•</span>
                <p className="text-lg font-semibold text-gray-800">Excellence</p>
              </div>
              <p className="text-sm text-gray-600">Quality in everything we deliver</p>
            </div>
            <div className="about-paragraph bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#006400] font-bold text-2xl">•</span>
                <p className="text-lg font-semibold text-gray-800">Safety</p>
              </div>
              <p className="text-sm text-gray-600">Preparing safer drivers for Nigerian roads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}