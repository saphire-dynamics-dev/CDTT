'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, Computer, GraduationCap, FileText, ChevronDown, ChevronUp, CheckCircle, Download, Eye, X, Mail, Lock } from 'lucide-react';
import MockTestSection from './MockTestSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const processRef = useRef();
  const [expandedSteps, setExpandedSteps] = useState({});
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [currentStep, setCurrentStep] = useState('email'); // 'email', 'payment', 'success'

  const toggleStep = (index) => {
    setExpandedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleDownloadManual = () => {
    setShowEmailModal(true);
    setCurrentStep('email');
    setUserEmail('');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (userEmail.trim()) {
      setCurrentStep('payment');
    }
  };

  const handlePaymentComplete = () => {
    setCurrentStep('success');
    // In a real application, you would call an API to generate credentials
    // For now, we'll just show a success message
  };

  const handleViewManual = () => {
    setShowLoginModal(true);
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail.trim() && loginPassword.trim()) {
      // In a real application, verify credentials with your backend
      alert(`Logging in with ${loginEmail}. Opening manual...`);
      setShowLoginModal(false);
      // Here you would typically open the manual PDF viewer
    }
  };

  const manualSteps = [
    {
      icon: Download,
      title: "Access Manual",
      shortDesc: "Click the Access button to start getting your manual.",
      fullDesc: "Click the 'Access Manual' button below to initiate the process. You'll be guided through entering your email address and making a secure payment to access the complete training manual.",
      number: "01"
    },
    {
      icon: Mail,
      title: "Enter Email",
      shortDesc: "Provide your email address to receive your credentials.",
      fullDesc: "Enter your valid email address where you'll receive your login credentials and manual access information. Make sure to use an email you check regularly as this is how you'll receive your login details.",
      number: "02"
    },
    {
      icon: FileText,
      title: "Make Payment",
      shortDesc: "Complete secure payment to unlock your manual access.",
      fullDesc: "Proceed with secure payment through our trusted payment gateway. Your payment information is encrypted and safe. After successful payment, your login credentials will be sent to your email immediately.",
      number: "03"
    },
    {
      icon: Eye,
      title: "View & Access",
      shortDesc: "Use your credentials to access and view your manual anytime.",
      fullDesc: "Once you receive your email and password, you can access the manual anytime by clicking the 'View Manual' button on this page. Log in with your credentials to view the complete comprehensive training manual.",
      number: "04"
    }
  ];

  const testSteps = [
    { 
      icon: ClipboardCheck, 
      title: "Complete Registration", 
      shortDesc: "Provide all required personal information to create your account.",
      fullDesc: "Visit our official website at app.cdttest.com.ng and begin your registration by providing all required personal information including full name, date of birth, contact details, address, and upload a clear passport photograph. Verify your email address and phone number to proceed. All information must be accurate as it will appear on your certificate.",
      number: "01"
    },
    { 
      icon: FileText, 
      title: "Select Test Details", 
      shortDesc: "Choose your test type, state, center, and preferred schedule time.",
      fullDesc: "Select your specific test category (Truck Use, Vehicle Use, Motorcycle Use, or Personal Use) based on your needs. Choose your preferred state and testing center location from our network of authorized centers across Nigeria. Pick a convenient date and time slot that fits your schedule. All selections can be reviewed before proceeding to payment.",
      number: "02"
    },
    { 
      icon: Computer, 
      title: "Make Payment & Get Code", 
      shortDesc: "Complete payment and receive your unique test unlock code.",
      fullDesc: "After completing registration, you'll be directed to a secure payment page. Complete your payment through our trusted payment gateway. Upon successful payment confirmation, a unique code needed to unlock your test will be sent immediately to both your registered phone number and email address. Keep this code safe as you'll need it to access your test.",
      number: "03"
    },
    { 
      icon: GraduationCap, 
      title: "Take Test & Get Certified", 
      shortDesc: "Complete your test and receive instant certification upon passing.",
      fullDesc: "Arrive at your selected testing center on your scheduled date and time with your unlock code. Take your comprehensive computer-based examination at the center. If you reach the pass mark, your certificate will be sent automatically to your registered email immediately after completing the test. You can also download your certificate directly from your account dashboard anytime.",
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
  <>
  <div className="w-full max-w-5xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden">
    {/* Aspect ratio wrapper (16:9 like YouTube) */}
    <div className="relative w-full aspect-video">
      <video
        controls
        playsInline
        className="w-full h-full object-contain"
      >
        <source
          src="https://res.cloudinary.com/dkgystsn3/video/upload/v1770209978/cdtt-2_cxgoe2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</>

        {/* Driver Test Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-600 text-sm font-medium">DRIVER TEST PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Get Your License In Four Simple Steps <br />
              Through Our Digital Platform
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testSteps.map((step, index) => (
              <div key={index} className="process-step group">
                <div className="bg-gray-50 rounded-3xl p-8 h-full transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100 hover:border-[#FF6B35]/20">
                  <div className="text-gray-400 text-sm font-medium mb-4">
                    STEP {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#FF6B35] transition-colors">
                    {step.title}
                  </h3>
                  
                  <div className="w-full h-32 bg-white rounded-2xl mb-6 flex items-center justify-center border border-gray-200 group-hover:border-[#FF6B35]/30 transition-all">
                    <step.icon className="w-10 h-10 text-[#FF6B35] group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {step.shortDesc}
                    </p>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedSteps[`test-${index}`] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-600 text-xs leading-relaxed border-t border-gray-200 pt-3">
                        {step.fullDesc}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setExpandedSteps(prev => ({
                        ...prev,
                        [`test-${index}`]: !prev[`test-${index}`]
                      }))}
                      className="flex items-center gap-1 text-[#FF6B35] text-xs font-medium mt-2 hover:text-[#FF6B35]/80 transition-colors"
                    >
                      {expandedSteps[`test-${index}`] ? 'Show Less' : 'Read More'}
                      {expandedSteps[`test-${index}`] ? 
                        <ChevronUp className="w-3 h-3" /> : 
                        <ChevronDown className="w-3 h-3" />
                      }
                    </button>
                  </div>
                  
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

          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of Nigerians who have already experienced our seamless digital testing process.
              </p>
              <a 
                href="https://app.cdttest.com.ng/sign-up" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 via-[#FF6B35] to-gray-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-semibold rounded-full transition-all duration-500 group animate-pulse hover:animate-none hover:shadow-lg hover:shadow-[#FF6B35]/30 hover:scale-105 relative overflow-hidden"
                style={{
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 50%',
                  animation: 'flowingGradient 3s ease-in-out infinite'
                }}
              >
                <span className="relative z-10">Begin Registration for your computerized drivers test</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Training Manual Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-600 text-sm font-medium">TRAINING MANUAL PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Access Your Comprehensive <br />
              Training Manual In Four Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {manualSteps.map((step, index) => (
              <div key={index} className="process-step group">
                <div className="bg-gray-50 rounded-3xl p-8 h-full transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100 hover:border-[#FF6B35]/20">
                  <div className="text-gray-400 text-sm font-medium mb-4">
                    STEP {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#FF6B35] transition-colors">
                    {step.title}
                  </h3>
                  
                  <div className="w-full h-32 bg-white rounded-2xl mb-6 flex items-center justify-center border border-gray-200 group-hover:border-[#FF6B35]/30 transition-all">
                    <step.icon className="w-10 h-10 text-[#FF6B35] group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {step.shortDesc}
                    </p>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedSteps[`manual-${index}`] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-600 text-xs leading-relaxed border-t border-gray-200 pt-3">
                        {step.fullDesc}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setExpandedSteps(prev => ({
                        ...prev,
                        [`manual-${index}`]: !prev[`manual-${index}`]
                      }))}
                      className="flex items-center gap-1 text-[#FF6B35] text-xs font-medium mt-2 hover:text-[#FF6B35]/80 transition-colors"
                    >
                      {expandedSteps[`manual-${index}`] ? 'Show Less' : 'Read More'}
                      {expandedSteps[`manual-${index}`] ? 
                        <ChevronUp className="w-3 h-3" /> : 
                        <ChevronDown className="w-3 h-3" />
                      }
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-500 font-medium">
                    {index === 0 && "Quick Start!"}
                    {index === 1 && "Easy Entry!"}
                    {index === 2 && "Secure Payment!"}
                    {index === 3 && "Instant Access!"}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Manual CTA Buttons */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Your Training Manual Today</h3>
              <p className="text-gray-600 mb-8">
                Comprehensive driving manual with 500+ pages of content and 1000+ practice questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownloadManual}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Access Manual (Coming Soon)
                </button>
                {/* <button
                  onClick={handleViewManual}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-[#FF6B35] text-[#FF6B35] font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                  View Manual
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock Test Section */}
      <MockTestSection />

      {/* Email Modal for Download */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] p-6 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold">Get Your Manual</h2>
              <button
                onClick={() => setShowEmailModal(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {currentStep === 'email' && (
                <form onSubmit={handleEmailSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">We&apos;ll send your login credentials to this email</p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold py-2 rounded-lg transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              )}

              {currentStep === 'payment' && (
                <div>
                  <div className="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-gray-700 mb-2"><strong>Email:</strong> {userEmail}</p>
                    <p className="text-sm text-gray-700"><strong>Amount:</strong> ₦5,000</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    Click below to complete secure payment. You&apos;ll receive your login credentials immediately after payment confirmation.
                  </p>
                  <button
                    onClick={handlePaymentComplete}
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:shadow-lg text-white font-semibold py-2 rounded-lg transition-all duration-300"
                  >
                    Proceed to Payment Gateway
                  </button>
                </div>
              )}

              {currentStep === 'success' && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 mb-4">
                    Your login credentials have been sent to <strong>{userEmail}</strong>
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4 text-left text-sm">
                    <p className="text-gray-700"><strong>Email:</strong> {userEmail}</p>
                    <p className="text-gray-700 mt-2"><strong>Password:</strong> Check your email for details</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    Use the &quot;View Manual&quot; button to log in and access your manual anytime.
                  </p>
                  <button
                    onClick={() => setShowEmailModal(false)}
                    className="w-full bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold py-2 rounded-lg transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Login Modal for View Manual */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] p-6 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold">View Manual</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleLogin} className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
                    required
                  />
                </div>
                <a href="#" className="text-xs text-[#FF6B35] hover:underline mt-1 block">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold py-2 rounded-lg transition-colors"
              >
                View Manual
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Don&apos;t have credentials? <a href="#" onClick={handleDownloadManual} className="text-[#FF6B35] hover:underline">Download the manual</a>
              </p>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes flowingGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
