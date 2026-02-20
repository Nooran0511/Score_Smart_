"use client";

import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    text: "“I was stuck at Band 6 for months. After just 4 weeks with Faseeha, I finally scored a 7.5! Her strategies for Writing Task 2 were a game changer.”",
    name: "Sarah A.",
    achievement: "Improved from Band 6 to 7.5",
    color: "primary"
  },
  {
    text: "“The speaking crash course completely transformed my confidence. I used to freeze, but now I can speak naturally on any topic. Highly recommended!”",
    name: "Ahmed K.",
    achievement: "Speaking confidence increased significantly",
    color: "secondary"
  },
  {
    text: "“The mock tests were exactly like the real exam. The feedback was detailed and helped me fix my specific mistakes. I got my target score in the first attempt.”",
    name: "Fatima R.",
    achievement: "Achieved Band 8.0 Overall",
    color: "primary"
  }
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#0F172A] tracking-tight mb-4 leading-tight">
            Student Success Stories
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our students have to say about their journey with us.
          </p>
        </div>

        {/* Testimonials Carousel Wrapper */}
        <div className="relative group">
          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:block">
            <button 
              className="absolute top-1/2 -left-12 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#E2E8F0] bg-white text-[#64748B] flex items-center justify-center hover:bg-[#F8FAFC] transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              className="absolute top-1/2 -right-12 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#E2E8F0] bg-white text-[#64748B] flex items-center justify-center hover:bg-[#F8FAFC] transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Grid/Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`card-premium p-8 h-full flex flex-col bg-white border border-[#E2E8F0] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote 
                    className={`w-10 h-10 transform -scale-x-100 ${
                      testimonial.color === 'primary' ? 'text-[#4F46E5]/10' : 'text-[#3B82F6]/10'
                    }`} 
                    fill="currentColor"
                  />
                </div>

                {/* Testimonial Text */}
                <p className="text-[#64748B] text-[16px] italic leading-[1.6] mb-8 flex-grow">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="mt-auto">
                  <h4 className="text-[18px] font-bold text-[#0F172A] mb-1">
                    {testimonial.name}
                  </h4>
                  <div className={`inline-block py-1 px-3 rounded-full text-[12px] font-semibold ${
                    testimonial.color === 'primary' 
                      ? 'bg-[#4F46E5]/10 text-[#4F46E5]' 
                      : 'bg-[#3B82F6]/10 text-[#3B82F6]'
                  }`}>
                    {testimonial.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            <span className="w-2 h-2 rounded-full bg-[#4F46E5]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E2E8F0]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E2E8F0]"></span>
          </div>
        </div>

        {/* Bottom Trust Badge (Optional but fits design language) */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#F8FAFC]/50 border border-[#E2E8F0] rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-[#E2E8F0] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-[#64748B]">
              Join <span className="text-[#4F46E5] font-bold">100+ students</span> who achieved their dream scores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;