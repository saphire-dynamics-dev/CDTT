'use client';

import { useEffect, useRef } from 'react';
import { BookMarked, Download, FileText, CheckCircle, Users, Lightbulb } from 'lucide-react';

export default function TrainingManualSection() {
  const sectionRef = useRef();
  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  const manualSections = [
    {
      icon: BookMarked,
      title: 'Complete Course Material',
      description: 'Comprehensive coverage of all topics required for the driving test, meticulously compiled by expert instructors with years of experience.'
    },
    {
      icon: FileText,
      title: 'Organized by Topics',
      description: 'Clearly structured chapters covering traffic laws, road signs, vehicle maintenance, defensive driving, and emergency procedures.'
    },
    {
      icon: CheckCircle,
      title: 'Practice Questions',
      description: 'Hundreds of practice questions with detailed explanations to help you understand concepts and prepare effectively.'
    },
    {
      icon: Users,
      title: 'Real-World Examples',
      description: 'Practical scenarios and case studies based on actual driving situations encountered on Nigerian roads.'
    },
    {
      icon: Lightbulb,
      title: 'Tips & Tricks',
      description: 'Expert insights and memory techniques to help you retain information and apply it effectively during your test.'
    },
    {
      icon: Download,
      title: 'Download & Print',
      description: 'Access the manual in PDF format for offline learning. Print specific chapters or the entire manual as needed.'
    }
  ];

  return (
    <section ref={sectionRef} className="training-manual-section relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden" id="training-manual">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#006400]/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <BookMarked className="w-6 h-6 text-[#FF6B35]" />
            <span className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wider">Our Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Training Manual
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete guide to becoming a skilled and responsible driver. Professionally designed and regularly updated with the latest traffic regulations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Features */}
          <div className="space-y-6">
            {manualSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="flex gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FF6B35]/10 group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Visual Showcase */}
          <div className="relative">
            {/* Manual Book Illustration */}
            <div className="bg-[#FF6B35]/10 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B35]/5 rounded-full blur-2xl -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#006400]/5 rounded-full blur-2xl translate-y-20 -translate-x-20"></div>

              {/* Book Mock-up */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-gray-100">
                    {/* Book Cover */}
                    <div className="bg-gradient-to-br from-[#FF6B35] to-[#E55A24] p-8 text-white relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-2 right-2 w-20 h-20 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-32 h-32 border border-white rounded-full"></div>
                      </div>
                      <div className="relative z-10 text-center">
                        <BookMarked className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Driver Training</h3>
                        <p className="text-sm opacity-90">Complete Manual</p>
                      </div>
                    </div>

                    {/* Book Content Preview */}
                    <div className="p-6 bg-white">
                      <div className="space-y-3 mb-4">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      </div>
                      <div className="border-t pt-4 mt-4">
                        <div className="text-xs text-gray-500 font-semibold mb-2">Chapters:</div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                            Traffic Laws & Regulations
                          </li>
                          <li className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                            Road Signs & Markings
                          </li>
                          <li className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                            Defensive Driving
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6 w-full">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF6B35] mb-2">500+</div>
                    <p className="text-sm text-gray-600">Pages of Content</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF6B35] mb-2">1000+</div>
                    <p className="text-sm text-gray-600">Practice Questions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF6B35] mb-2">100%</div>
                    <p className="text-sm text-gray-600">Comprehensive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#FF6B35]/10  rounded-2xl p-8 md:p-12 text-center border border-[#FF6B35]/20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get Your Training Manual Today
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Access the complete training manual with offline download capability. Start your preparation journey with our expertly curated content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Access Manual (Coming Soon)
            </button>
            {/* <button className="bg-white hover:bg-gray-50 text-[#FF6B35] font-semibold py-3 px-8 rounded-xl transition-all duration-300 border-2 border-[#FF6B35] hover:shadow-lg">
              Preview Chapters
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
