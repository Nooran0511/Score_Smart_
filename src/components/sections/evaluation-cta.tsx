"use client";

import React from 'react';
import { Mic } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * High-impact blue banner section for "Get a Free IELTS Speaking Evaluation"
 * Features a microphone icon and a centered white pill CTA button.
 */
const EvaluationCTA = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      id="evaluation" 
      className="relative overflow-hidden bg-gradient-to-r from-[#4F46E5] to-[#3B82F6] py-16 md:py-24"
      ref={ref}
    >
      {/* Background Pattern Decorative Circles */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-white blur-[100px] -translate-x-1/2 -translate-y-1/2" 
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-white blur-[100px] translate-x-1/2 translate-y-1/2" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          {/* Microphone Icon Container */}
          <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
            <Mic className="h-8 w-8 text-white" strokeWidth={2} />
          </div>

          {/* Heading */}
          <h2 className={`mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.2] ${isVisible ? 'animate-slide-in-down' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
            Get a Free IELTS Speaking Evaluation
          </h2>

          {/* Description */}
          <p className={`mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.3s' : '0s' }}>
            Receive a 15-minute assessment to understand your current band level, identify your strengths, and discover key areas for improvement.
          </p>

          {/* CTA Button */}
          <div className={`flex justify-center ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
            <a
              href="#enroll"
              className="inline-flex h-[60px] items-center justify-center rounded-full bg-white px-10 py-4 text-[16px] font-bold text-[#4F46E5] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-slate-50 active:scale-95"
            >
              Book My Free Evaluation Now
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Pattern Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" 
      />
    </section>
  );
};

export default EvaluationCTA;