"use client";

import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Target, 
  Map, 
  LineChart, 
  ArrowRight 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const featureCards = [
  {
    title: "Structured Weekly Roadmap",
    description: "A clear day-by-day plan so you never feel lost in your preparation journey.",
    icon: Clock,
  },
  {
    title: "Confidence First Approach",
    description: "We tackle exam anxiety and hesitation before diving into complex techniques.",
    icon: ShieldCheck,
  },
  {
    title: "Real IELTS Mock Environment",
    description: "Practice under strict exam conditions to build stamina and time management.",
    icon: Target,
  },
  {
    title: "Practical Strategies",
    description: "Learn adaptable techniques that work for any question type, not just memorized answers.",
    icon: Map,
  },
  {
    title: "Continuous Tracking",
    description: "Regular feedback loops to monitor your band score improvement week by week.",
    icon: LineChart,
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f172a] mb-6">
            Why Choose Score Smart?
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            We don't just teach English; we train you to master the IELTS exam format with proven strategies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}
            >
              <div className="h-12 w-12 rounded-xl bg-[#4f46e5]/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#4f46e5]/10">
                <feature.icon className="h-6 w-6 text-[#4f46e5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#4f46e5] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#3b82f6] p-8 flex flex-col justify-between shadow-lg shadow-[#4f46e5]/20 hover:shadow-2xl transition-all duration-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.7s' : '0s' }}>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ArrowRight className="h-24 w-24 -rotate-45" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start?
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed mb-8">
                Join hundreds of successful students who achieved their dream band score.
              </p>
            </div>

            <div className="relative z-10">
              <a 
                href="#enroll" 
                className="inline-flex items-center justify-center gap-2 bg-white text-[#4f46e5] font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;