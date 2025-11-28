'use client';

import { useEffect, useRef } from 'react';
import { BookOpen, Target, Lightbulb, Award, TrendingUp, Users, Clock } from 'lucide-react';

export default function TrainingShowcase() {
  const showcaseRef = useRef();
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

  const masonryItems = [
    {
      size: 'large',
      title: 'Comprehensive Learning Paths',
      description: 'Structured training modules designed by expert driving instructors. Progress from beginner to advanced levels with clear milestones and achievements.',
      icon: BookOpen,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      titleColor: 'text-orange-900',
      textColor: 'text-gray-700'
    },
    {
      size: 'small',
      title: 'Real-World Scenarios',
      description: 'Learn through practical, situational examples.',
      icon: Target,
      bgColor: 'bg-gray-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-100',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      textColor: 'text-gray-700'
    },
    {
      size: 'small',
      title: 'Expert Instructors',
      description: 'Guidance from certified driving professionals.',
      icon: Award,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      titleColor: 'text-orange-900',
      textColor: 'text-gray-700'
    },
    {
      size: 'medium',
      title: 'Interactive Video Lessons',
      description: 'Engaging video content covering all aspects of safe driving. Watch at your own pace with transcripts and downloadable notes.',
      icon: Lightbulb,
      bgColor: 'bg-gray-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      textColor: 'text-gray-700'
    },
    // {
    //   size: 'medium',
    //   title: 'Track Your Progress',
    //   description: 'Real-time analytics showing your strengths and areas for improvement. Personalized recommendations for focused learning.',
    //   icon: TrendingUp,
    //   bgColor: 'bg-orange-50',
    //   borderColor: 'border-orange-200',
    //   iconBg: 'bg-orange-100',
    //   iconColor: 'text-orange-600',
    //   titleColor: 'text-orange-900',
    //   textColor: 'text-gray-700'
    // },
    // {
    //   size: 'small',
    //   title: 'Community Learning',
    //   description: 'Connect with fellow learners and share experiences.',
    //   icon: Users,
    //   bgColor: 'bg-green-50',
    //   borderColor: 'border-green-200',
    //   iconBg: 'bg-green-100',
    //   iconColor: 'text-green-600',
    //   titleColor: 'text-green-900',
    //   textColor: 'text-gray-700'
    // },
    // {
    //   size: 'small',
    //   title: 'Learn Anytime',
    //   description: 'Access training 24/7 from any device.',
    //   icon: Clock,
    //   bgColor: 'bg-orange-50',
    //   borderColor: 'border-orange-200',
    //   iconBg: 'bg-orange-100',
    //   iconColor: 'text-orange-600',
    //   titleColor: 'text-orange-900',
    //   textColor: 'text-gray-700'
    // },
  ];

  return (
    <section ref={showcaseRef} className="training-showcase relative py-24 px-6 bg-white overflow-hidden" id="training-showcase">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006400]/3 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B35]/3 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master Your Skills with Our Training Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to make learning intuitive, engaging, and effective. Build confidence and competence at every step of your journey.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {masonryItems.map((item, index) => {
            const Icon = item.icon;
            const sizeClasses = {
              small: 'lg:col-span-1 min-h-64',
              medium: 'lg:col-span-2 min-h-64',
              large: 'lg:col-span-2 lg:row-span-2 min-h-96'
            };

            return (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`${item.bgColor} border ${item.borderColor} rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group ${sizeClasses[item.size]} ${item.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {/* Content */}
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${item.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className={`text-lg md:text-xl font-semibold ${item.titleColor} mb-3 leading-tight`}>
                    {item.title}
                  </h3>
                  
                  {item.size === 'large' ? (
                    <p className={`${item.textColor} opacity-90 leading-relaxed text-base`}>
                      {item.description}
                    </p>
                  ) : (
                    <p className={`${item.textColor} opacity-90 leading-relaxed text-sm md:text-base`}>
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-sm font-medium ${item.titleColor}`}>Learn more</span>
                  <svg className={`w-4 h-4 ml-2 ${item.iconColor} group-hover:translate-x-2 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Ready to start your training journey?
          </p>
          <button className="bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
            Begin Your Training Today
          </button>
        </div>
      </div>
    </section>
  );
}
