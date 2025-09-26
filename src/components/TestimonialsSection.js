'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsSection() {
  const testimonialsRef = useRef();
  const topRowRef = useRef();
  const bottomRowRef = useRef();

  const topRowTestimonials = [
    { 
      text: "The computerized test was seamless. No waiting, no stress - exactly what Nigeria needs.", 
      author: "Chinedu Okafor", 
      position: "Software Engineer, Lagos",
      rating: 5
    },
    { 
      text: "Finally, a fair way for everyone to take the driver's test. Transparency at its best.", 
      author: "Aisha Mohammed", 
      position: "Business Owner, Abuja",
      rating: 5
    },
    { 
      text: "Nigeria is ready for this level of modernization. Proud to be part of this change.", 
      author: "Kunle Adebayo", 
      position: "Teacher, Port Harcourt",
      rating: 5
    },
    { 
      text: "I completed my test in 30 minutes with instant results. Revolutionary system!", 
      author: "Fatima Yusuf", 
      position: "Student, Kano",
      rating: 5
    },
    { 
      text: "No more corruption, no more delays. This is the future of driver testing.", 
      author: "Emeka Nwankwo", 
      position: "Entrepreneur, Enugu",
      rating: 5
    },
    { 
      text: "The study materials were comprehensive and the test was fair. Highly recommend.", 
      author: "Grace Oduya", 
      position: "Nurse, Warri",
      rating: 5
    }
  ];

  const bottomRowTestimonials = [
    { 
      text: "Biometric verification made me feel secure. No one can cheat this system.", 
      author: "Ibrahim Sani", 
      position: "Civil Servant, Kaduna",
      rating: 5
    },
    { 
      text: "The digital certificate was ready immediately. Amazing efficiency!", 
      author: "Blessing Okoro", 
      position: "Marketing Executive, Owerri",
      rating: 5
    },
    { 
      text: "I took my test at 8 PM! 24/7 availability is a game-changer.", 
      author: "Ahmed Garba", 
      position: "Taxi Driver, Sokoto",
      rating: 5
    },
    { 
      text: "Clean interface, clear instructions. Even my grandmother could use this.", 
      author: "Chioma Eze", 
      position: "IT Specialist, Calabar",
      rating: 5
    },
    { 
      text: "From registration to certificate in one day. Unbelievable improvement!", 
      author: "Yusuf Musa", 
      position: "Mechanic, Jos",
      rating: 5
    },
    { 
      text: "Professional, efficient, and completely transparent. Nigeria is moving forward.", 
      author: "Adunni Taiwo", 
      position: "Doctor, Ibadan",
      rating: 5
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate testimonial cards on scroll
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 80%',
        }
      });

      // Top row - slide to right
      const topRow = topRowRef.current;
      if (topRow) {
        gsap.set(topRow, { x: 0 });
        gsap.to(topRow, {
          x: -topRow.scrollWidth / 2,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
      }

      // Bottom row - slide to left
      const bottomRow = bottomRowRef.current;
      if (bottomRow) {
        gsap.set(bottomRow, { x: -bottomRow.scrollWidth / 2 });
        gsap.to(bottomRow, {
          x: 0,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const renderTestimonialCard = (testimonial, index) => (
    <div key={index} className="testimonial-card flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mx-3">
      {/* Quote mark */}
      <div className="text-4xl text-[#FF6B35] mb-4 font-serif">"</div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Testimonial text */}
      <p className="text-gray-700 mb-6 leading-relaxed text-sm">
        {testimonial.text}
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{testimonial.author}</p>
          <p className="text-xs text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={testimonialsRef} id="testimonials" className="testimonials-section py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black rounded-full px-6 py-2 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white text-sm font-medium">Rated 4.9/5 by over 10,000 users</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Words of praise from others <br />
            about our platform.
          </h2>
        </div>

        {/* Top sliding row - moves right */}
        <div className="mb-8">
          <div 
            ref={topRowRef}
            className="flex"
            style={{ width: 'max-content' }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...topRowTestimonials, ...topRowTestimonials].map((testimonial, index) => 
              renderTestimonialCard(testimonial, `top-${index}`)
            )}
          </div>
        </div>

        {/* Bottom sliding row - moves left */}
        <div>
          <div 
            ref={bottomRowRef}
            className="flex"
            style={{ width: 'max-content' }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...bottomRowTestimonials, ...bottomRowTestimonials].map((testimonial, index) => 
              renderTestimonialCard(testimonial, `bottom-${index}`)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}