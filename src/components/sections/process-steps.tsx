"use client";

import React from 'react';
import { MessageSquare, Clock, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProcessSteps = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      id: 1,
      title: "Submit Application",
      description: "Fill out the form below",
      icon: <MessageSquare className="w-6 h-6 text-[#4F46E5]" />,
    },
    {
      id: 2,
      title: "Class Scheduled",
      description: "Your personalized class timetable will be shared on WhatsApp",
      icon: <Clock className="w-6 h-6 text-[#4F46E5]" />,
    },
    {
      id: 3,
      title: "Start Learning",
      description: "Begin your journey to Band 7+",
      icon: <GraduationCap className="w-6 h-6 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-[#0F172A] mb-4 leading-[1.2]">
            Secure Your Spot Today
          </h2>
          <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] text-[#64748B] leading-relaxed">
            Take the first step towards achieving your dream IELTS band score with expert-led, structured preparation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-[#E2E8F0] -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col items-center ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}>
                {/* Icon Container */}
                <div className="relative mb-8">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[10px] font-bold text-[#64748B] shadow-sm z-20">
                    {step.id}
                  </div>
                  
                  {/* Icon Card */}
                  <div className="w-[120px] h-[120px] rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
                    <div className="w-16 h-16 rounded-2xl bg-[#4F46E5]/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#4F46E5]/10">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Mobile Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-[#E2E8F0]"></div>
                  )}
                </div>

                {/* Text Content */}
                <div className="text-center px-4">
                  <h3 className="text-[20px] font-bold text-[#0F172A] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed max-w-[240px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;