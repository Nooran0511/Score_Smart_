"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutCoach = () => {
  const { ref, isVisible } = useScrollAnimation();
  const assets = {
    coachPortrait: "/faseeha.png"
  };

  const benefits = [
    "Personalized Feedback",
    "Proven Strategies",
    "Confidence Building",
    "Real Exam Practice"
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC]/30 overflow-hidden" ref={ref}>
      <div className="container px-4 md:px-6 mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Portrait Column */}
          <div className={`relative order-1 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 group">
              <Image
                src={assets.coachPortrait}
                alt="Faseeha - IELTS & Fluency Coach"
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Floating Name Label */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold font-sans text-white drop-shadow-lg">Faseeha</h3>
                <p className="text-white text-sm font-medium drop-shadow-lg">IELTS & Fluency Coach</p>
              </div>
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute -z-10 top-10 -left-10 w-24 h-24 bg-[#F59E0B]/10 rounded-full blur-[40px]"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-[#4F46E5]/10 rounded-full blur-[40px]"></div>
          </div>

          {/* Biography Column */}
          <div className={`space-y-6 order-2 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div>
              <div className="inline-block rounded-lg bg-[#4F46E5]/10 px-3 py-1 text-sm text-[#4F46E5] font-semibold tracking-wide uppercase">
                Expert Mentorship
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl leading-[1.2]">
                Meet Faseeha – Your IELTS & Fluency Coach
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-[#64748B] leading-relaxed">
                Faseeha has trained multiple IELTS students with structured preparation plans, practical mock tests, and confidence-focused speaking techniques.
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                The goal is not just memorization, but real improvement and natural fluency. Her teaching methodology focuses on identifying individual weaknesses and turning them into strengths through personalized feedback and consistent practice.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-transform group-hover:scale-125"></div>
                  <span className="font-semibold text-[#0F172A] text-base leading-none">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoach;