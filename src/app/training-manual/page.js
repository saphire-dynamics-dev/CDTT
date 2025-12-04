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

      {/* Manual Topics Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Covered in the Training Manual
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all essential topics to prepare you for safe, confident driving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traffic Laws and Regulations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/10 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Traffic Laws and Regulations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Understanding national and local traffic laws is essential. This section covers speed limits, road signs, pedestrian rights, and important regulations like seatbelt laws, driving under the influence (DUI) consequences, and traffic signal operations.
              </p>
            </div>

            {/* Road Signs and Markings */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/10 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl">🚦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Road Signs and Markings</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A detailed explanation of all road signs, including warning signs, regulatory signs, and informational signs. Candidates must recognize and understand their meanings, especially in tricky driving environments.
              </p>
            </div>

            {/* Driving Etiquette */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/10 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Driving Etiquette</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Drivers must understand how to navigate safely and courteously. This section explains yielding, lane-changing, merging, and the importance of maintaining safe distances.
              </p>
            </div>

            {/* Defensive Driving Techniques */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/10 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Defensive Driving Techniques</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Defensive driving techniques are crucial to passing the test and staying safe on the road. These include maintaining awareness of your surroundings, anticipating potential hazards, and adjusting speed accordingly.
              </p>
            </div>

            {/* Vehicle Safety Checks */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/10 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Vehicle Safety Checks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Before starting a journey, drivers should be aware of the essential safety checks that ensure their vehicle is roadworthy. This section will cover topics like checking tire pressure, fluid levels, and mirrors.
              </p>
            </div>

            {/* Road Scenarios */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/10 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl">🛣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Road Scenarios</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real-life driving scenarios are simulated in the test to evaluate a candidate&apos;s response to various conditions. This part of the manual includes examples of merging onto highways, navigating intersections, and handling roundabouts.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-2xl p-8 md:p-12 text-center border border-[#FF6B35]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Master All Topics with Our Comprehensive Manual
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Get detailed explanations, practice questions, and visual aids for every topic. Prepare thoroughly and pass your test with confidence.
            </p>
            <button 
              disabled
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-200 text-gray-500 font-semibold rounded-full cursor-not-allowed"
            >
              <BookOpen className="w-5 h-5" />
              Get Your Manual Today
            </button>
            <div className="mt-3">
              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Pricing Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Training Manual
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the package that best fits your preparation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Manual Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Standard Driving Manual
                </h3>
                <p className="text-gray-600 text-sm">
                  With full instructions to help you pass your test
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#FF6B35]">₦5,000</span>
                  <span className="text-gray-500">Only</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Meticulously crafted to prepare you for every aspect of the computerized driver&apos;s computer-based test <span className="font-semibold text-gray-900">(practice questions not included)</span>.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#FF6B35] text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Complete traffic laws and regulations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#FF6B35] text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Detailed road signs and markings guide</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#FF6B35] text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Defensive driving techniques</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#FF6B35] text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Vehicle safety checks</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#FF6B35] text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Real-life road scenarios</p>
                </div>
              </div>

              <button 
                disabled
                className="w-full py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
              >
                Get Standard Manual
              </button>
              
              {/* Coming Soon Badge */}
              <div className="mt-3 text-center">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Premium Manual Card */}
            <div className="bg-gradient-to-br from-[#FF6B35]/5 to-[#FF8C42]/5 rounded-2xl p-8 border-2 border-[#FF6B35] hover:shadow-2xl transition-all duration-300 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#FF6B35] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Driving Manual with Questions
                </h3>
                <p className="text-gray-600 text-sm">
                  Driving Manual + Questions
                </p>
                <p className="text-gray-600 text-sm">
                  With full instructions to help you pass your test
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#FF6B35]">₦7,000</span>
                  <span className="text-gray-500">Only</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Meticulously crafted to prepare you for every aspect of the computerized driver&apos;s computer-based test <span className="font-semibold text-[#FF6B35]">(with practice questions included)</span>.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">Everything in Standard Manual</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">1000+ practice questions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">Detailed answer explanations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">Mock test simulations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">Topic-wise practice tests</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">Performance tracking</p>
                </div>
              </div>

              <button 
                disabled
                className="w-full py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
              >
                Get Premium Manual
              </button>
              
              {/* Coming Soon Badge */}
              <div className="mt-3 text-center">
                <span className="inline-block bg-[#FF6B35] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Both manuals are available in digital format with instant access after purchase. Lifetime updates included at no extra cost.
            </p>
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
