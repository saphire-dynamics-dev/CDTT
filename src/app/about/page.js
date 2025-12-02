'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';
import AboutSection from '../../components/AboutSection';
import { BookOpen, Users, Award, Shield, Target, CheckCircle, ShoppingCart, FileText, Monitor } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 px-6 bg-gradient-to-b from-[#FF6B35]/5 to-white overflow-hidden pt-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About CDTT
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the transformation of driver education in Nigeria through technology and excellence.
            </p>
          </div>
        </section>

        {/* Mandatory Test Explanation Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-[#FF6B35]" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Mandatory Computer-Based Driving Test Explained
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  In response to growing concerns over road safety and driving standards, the Federal Government of Nigeria has introduced a new law requiring all drivers to take a Computer-Based Theoretical Driving Test. This measure aims to create a modern approach which ensures that all drivers are well-versed in modern traffic laws, safe driving practices, and defensive driving techniques before getting behind the wheel.
                </p>
                
                <p className="text-lg">
                  On this page, we&apos;ll guide you through everything you need to know to make this new process a breeze, starting from what computerized Driver&apos;s Training is all about to all the materials you need and Test-centers available to help ease your license acquisition today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  About Computerized Drivers Training and Test Ltd
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2020, Computerized Drivers Training and Test Ltd (CDT) is dedicated to enhancing road safety and reducing accident risks through innovative driver training programs. Based in Nigeria, we leverage advanced technology and interactive learning methods to equip drivers with essential skills for safe driving.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With our cutting-edge programs and technology-driven training, drivers gain the skills and knowledge to confidently handle modern road challenges. Whether you&apos;re new to driving or looking to enhance your abilities, our Trainings and manuals ensure you&apos;re fully prepared for the road ahead.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-video bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-xl overflow-hidden">
                  <img 
                    src="/Abujapretty.jpg" 
                    alt="CDT Training Center"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What CDT Offers Section */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What CDT Offers You
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive training solutions designed to make you a confident and safe driver
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Well Detailed Learning Modules</h3>
                <p className="text-gray-600">
                  Comprehensive course materials covering all aspects of road safety, traffic laws, and defensive driving techniques.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Questions</h3>
                <p className="text-gray-600">
                  Extensive question banks that mirror actual test scenarios to help you prepare effectively.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Training Sessions</h3>
                <p className="text-gray-600">
                  Expert-led training sessions tailored to different vehicle types and driving situations.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Theoretical and Practical Testing</h3>
                <p className="text-gray-600">
                  Complete testing solutions combining theory knowledge with practical driving assessments.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consistent and Objective Evaluation</h3>
                <p className="text-gray-600">
                  Fair, unbiased assessment system ensuring every candidate is evaluated on merit alone.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/5 rounded-xl p-8 border border-[#FF6B35]/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">And Much More</h3>
                <p className="text-gray-600">
                  Continuous updates, support services, and resources to ensure your driving success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-2xl p-12 border border-[#FF6B35]/20 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR MISSION</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Computerized Drivers Training and Test Ltd, our mission is to prevent accidents and save lives by empowering drivers with the knowledge and skills they need to make safer choices. Join us in our commitment to creating safer roads for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Where Do I Start?
              </h2>
              <p className="text-xl text-gray-600">
                Follow these simple steps to begin your journey to becoming a licensed driver
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-[#FF6B35]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Add CDT Manual to Cart
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Begin your journey to becoming a licensed driver by familiarizing yourself with the latest steps, requirements and regulations.
                </p>
                <Link 
                  href="/training-manual"
                  className="block w-full text-center py-3 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Get Manual
                </Link>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                    <FileText className="w-10 h-10 text-[#FF6B35]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Purchase Manual & Prepare
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  CDT manual features comprehensive questions to ensure thorough test preparation so you&apos;ll gain the confidence to secure your license.
                </p>
                <button 
                  className="block w-full text-center py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                    <Monitor className="w-10 h-10 text-[#FF6B35]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Proceed for CDT Test
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Go to the site to take your Online Driving Test and get certified immediately upon passing.
                </p>
                <a 
                  href="https://app.cdttest.com.ng/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Take Test
                </a>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
      </main>
      <FooterSection />
    </>
  );
}
