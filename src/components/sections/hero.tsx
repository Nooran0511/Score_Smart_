import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, GraduationCap, Star, MessageCircle, Users, Trophy } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background with Overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
          alt="IELTS Preparation Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#4f46e5]/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#3b82f6]/5 blur-[100px]"></div>

      <div className="container px-4 md:px-6 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">

          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/5 px-3 py-1 text-sm font-medium text-[#4F46E5]">
              <span className="flex h-2 w-2 rounded-full bg-[#4F46E5] mr-2 animate-pulse"></span>
              Accepting New Students — Limited Seats
            </div>
          </div>

          {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mb-6 leading-[1.1] animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              From Zero to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#3B82F6]">
                Band 7+
              </span>{' '}
              – Step-by-Step IELTS Strategy for Beginners
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-lg text-[#64748B] md:text-xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Follow our proven system and improve every section with expert guidance. Free diagnostic call included.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#enroll"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all h-[56px] sm:h-[60px] bg-[#4F46E5] hover:bg-[#4338ca] text-white px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full shadow-lg shadow-[#4F46E5]/30 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Book Free Diagnostic Call
              <ArrowRight className="h-5 w-5 flex-shrink-0" />
            </a>
            <a
              href="https://wa.me/923158999139?text=IELTS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all h-[56px] sm:h-[60px] bg-white text-[#0F172A] px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full border-2 border-[#25D366]/40 hover:bg-[#25D366]/5 hover:border-[#25D366]/60 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366] flex-shrink-0" />
              Message &apos;IELTS&apos; on WhatsApp
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F46E5]/5 border border-[#4F46E5]/15">
              <Users className="h-4 w-4 text-[#4F46E5] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0F172A]">2,000+ Students Trained</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/5 border border-[#F59E0B]/20">
              <Star className="h-4 w-4 text-[#F59E0B] fill-[#F59E0B] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0F172A]">90% Achieved Band 7+</span>
            </div>
          </div>

          {/* Mini trust badges row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-[#64748B]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#4F46E5]" />
              <span>Verified Results</span>
            </div>
            <span className="hidden sm:inline text-[#E2E8F0]">|</span>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-[#4F46E5]" />
              <span>Certified IELTS Trainer</span>
            </div>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-16 w-full max-w-4xl">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white border border-[#E2E8F0]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-[#4F46E5]/10 flex items-center justify-center mb-4 text-[#4F46E5]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-1">2,000+</h3>
              <p className="text-[#64748B] font-medium">Students Trained</p>
            </div>

            <div className="flex flex-col items-center p-8 rounded-2xl bg-white border border-[#E2E8F0]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-[#4F46E5]/10 flex items-center justify-center mb-4 text-[#4F46E5]">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-1">90%</h3>
              <p className="text-[#64748B] font-medium">Achieved Band 7+</p>
            </div>

            <div className="flex flex-col items-center p-8 rounded-2xl bg-white border border-[#E2E8F0]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-[#4F46E5]/10 flex items-center justify-center mb-4 text-[#4F46E5]">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-1">+1 Band</h3>
              <p className="text-[#64748B] font-medium">Average Improvement</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
