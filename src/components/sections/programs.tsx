"use client";

import React from 'react';
import { Clock, Zap, Check, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SpecializedPrograms = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="courses" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#4f46e5]/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto max-w-[1280px]">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.2] text-[#0f172a] mb-4">
            Specialized IELTS Programs
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#64748b] max-w-2xl mx-auto leading-[1.6]">
            Choose the right path for your success. Whether you need a comprehensive preparation or a quick speaking boost, we have a structured plan for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1024px] mx-auto">
          {/* 4-Week Complete IELTS Program Card */}
          <div className={`relative flex flex-col h-full bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
            <div className="h-2 w-full bg-gradient-to-r from-[#4f46e5] to-[#3b82f6]"></div>
            
            <div className="absolute top-6 right-6 z-10">
              <span className="inline-flex items-center rounded-full bg-[#f59e0b] text-white px-3 py-1 text-[12px] font-bold shadow-sm uppercase tracking-wider">
                Most Popular
              </span>
            </div>

            <div className="flex flex-col p-8 pb-4">
              <div className="flex items-center gap-2 text-[#64748b] mb-3 text-[14px] font-medium">
                <Clock className="h-4 w-4" />
                <span>4 Weeks</span>
                <span className="text-[#e2e8f0] mx-0.5">•</span>
                <Zap className="h-4 w-4" />
                <span>5 Days/Week</span>
              </div>
              <h3 className="text-[24px] font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors leading-[1.3] mb-3">
                4-Week Complete IELTS Program
              </h3>
              <p className="text-[15px] text-[#64748b] leading-[1.5]">
                Comprehensive training covering all modules with personalized feedback.
              </p>
            </div>

            <div className="flex-grow p-8 pt-2">
              <ul className="space-y-4">
                {[
                  "Listening strategies & timed practice",
                  "Reading time management techniques",
                  "Writing Task 1 & 2 structure & feedback",
                  "Speaking fluency & confidence training",
                  "Weekly mock tests with scoring",
                  "Personalized 1-on-1 feedback"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-[#4f46e5]/10 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-[#4f46e5] stroke-[3]" />
                    </div>
                    <span className="text-[14px] text-[#334155] leading-[1.4]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-4 flex flex-col gap-3">
              <a 
                href="#enroll" 
                className="w-full text-center h-[52px] flex items-center justify-center text-[16px] font-semibold bg-[#4f46e5] text-white rounded-full transition-all duration-200 hover:bg-[#4338ca] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#4f46e5]/20"
              >
                Enroll in 4-Week Course
              </a>
              <a 
                href="https://wa.me/923158999139?text=I'm%20interested%20in%20the%204-Week%20IELTS%20Program" 
                className="w-full flex items-center justify-center gap-2 h-[52px] rounded-full border border-[#e2e8f0] text-[14px] font-semibold text-[#0f172a] hover:bg-[#f8fafc] hover:border-[#4f46e5]/30 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4 text-[#4f46e5]" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* 5-Day IELTS Speaking Crash Course Card */}
          <div className={`relative flex flex-col h-full bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.3s' : '0s' }}>
            <div className="h-2 w-full bg-[#3b82f6]"></div>

            <div className="flex flex-col p-8 pb-4">
              <div className="flex items-center gap-2 text-[#64748b] mb-3 text-[14px] font-medium">
                <Clock className="h-4 w-4" />
                <span>5 Days</span>
                <span className="text-[#e2e8f0] mx-0.5">•</span>
                <Zap className="h-4 w-4" />
                <span>Intensive</span>
              </div>
              <h3 className="text-[24px] font-bold text-[#0f172a] group-hover:text-[#3b82f6] transition-colors leading-[1.3] mb-3">
                5-Day IELTS Speaking Crash Course
              </h3>
              <p className="text-[15px] text-[#64748b] leading-[1.5]">
                Fast-track your speaking score with focused confidence building.
              </p>
            </div>

            <div className="flex-grow p-8 pt-2">
              <ul className="space-y-4">
                {[
                  "Fluency improvement techniques",
                  "Band 7+ vocabulary usage",
                  "Cue card mastery strategies",
                  "Confidence-building sessions",
                  "Real speaking mock practice",
                  "Immediate error correction"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-[#3b82f6] stroke-[3]" />
                    </div>
                    <span className="text-[14px] text-[#334155] leading-[1.4]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-4 flex flex-col gap-3">
              <a 
                href="#enroll" 
                className="w-full text-center h-[52px] flex items-center justify-center text-[16px] font-semibold bg-[#3b82f6] text-white rounded-full transition-all duration-200 hover:bg-[#2563eb] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#3b82f6]/20"
              >
                Join Speaking Course
              </a>
              <a 
                href="#evaluation" 
                className="w-full flex items-center justify-center gap-2 h-[52px] rounded-full border border-[#e2e8f0] text-[14px] font-semibold text-[#0f172a] hover:bg-[#f8fafc] hover:border-[#3b82f6]/30 transition-all duration-200"
              >
                Free Speaking Evaluation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedPrograms;