'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TrainingShowcase from '@/components/TrainingShowcase';
import TrainingManualSection from '@/components/TrainingManualSection';
import FooterSection from '@/components/FooterSection';
import { Users, BookOpen, Target, Award, RefreshCw, Shield } from 'lucide-react';

export default function TrainingManualPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <Navbar forceSticky={true} />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#FF6B35]/5 to-white overflow-hidden pt-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#006400]/5 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Driver Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master your driving skills with our comprehensive training platform, detailed manual, and professional instruction designed to create safe, confident drivers.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            We cater to a diverse audience, including new drivers, experienced motorists seeking to refine their skills, and businesses aiming to improve employee safety.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">New Drivers</h3>
              <p className="text-gray-700">
                Comprehensive training programs designed to build confidence and competence from the ground up.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experienced Motorists</h3>
              <p className="text-gray-700">
                Skill refinement programs to enhance driving techniques and update knowledge of modern road safety.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Fleet Drivers</h3>
              <p className="text-gray-700">
                Corporate training solutions to improve employee safety and reduce organizational risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Solutions Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Tailored Training Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Defensive Driving Classes</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn advanced techniques to anticipate and respond to potential hazards, reducing accident risk and promoting safer driving practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Behind-the-Wheel Training</h3>
              <p className="text-gray-700 leading-relaxed">
                Hands-on practical instruction with experienced instructors to develop real-world driving skills and confidence on the road.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Driver Assessments</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive evaluations to identify strengths and areas for improvement, fostering a culture of safety and responsibility on the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bi-Annual Training Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bi-Annual Training for Staff Drivers
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At CDT, we understand that the safety and efficiency of your organization&apos;s fleet rely heavily on the skills of your drivers. That&apos;s why we offer comprehensive bi-annual training programs designed to enhance the driving capabilities of your staff and promote a culture of safety within your organization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With CDT&apos;s bi-annual training for staff drivers, you can rest assured that your team is equipped with the knowledge and skills necessary to drive safely and efficiently. Invest in the safety of your drivers and the success of your organization today!
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/5 rounded-xl p-6 border border-[#FF6B35]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Up-to-Date Knowledge</h3>
                    <p className="text-gray-700 text-sm">
                      Stay current with the latest traffic laws, safety regulations, and best practices in the industry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/5 rounded-xl p-6 border border-[#FF6B35]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Customized Content</h3>
                    <p className="text-gray-700 text-sm">
                      Training programs tailored to your organization&apos;s specific needs and fleet requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/5 rounded-xl p-6 border border-[#FF6B35]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Interactive Learning Experience</h3>
                    <p className="text-gray-700 text-sm">
                      Engaging, hands-on training sessions that promote active participation and skill retention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/5 rounded-xl p-6 border border-[#FF6B35]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance and Certification</h3>
                    <p className="text-gray-700 text-sm">
                      Ensure your drivers meet all regulatory requirements with proper certification and documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Showcase Section */}
      <TrainingShowcase />

      {/* Training Manual Section */}
      <TrainingManualSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
