"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EnrollmentForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    currentLevel: "",
    targetBand: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would format the data and redirect to WhatsApp
    const text = `Enrollment Details:
Name: ${formData.fullName}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Current Level: ${formData.currentLevel}
Target Band: ${formData.targetBand}
Course: ${formData.course}
Message: ${formData.message}`;
    
    window.location.href = `https://wa.me/923158999139?text=${encodeURIComponent(text)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="enroll" className="py-20 md:py-28 bg-[#F8FAFC]/50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
        {/* Header Text */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
            Enrollment Form
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Complete the form below — once submitted, your <span className="font-semibold text-[#0F172A]">class schedule and detailed timetable</span> will be shared directly on your WhatsApp.
          </p>
        </div>

        {/* Form Card */}
        <div className={`max-w-[800px] mx-auto bg-white rounded-[16px] border border-[#E2E8F0] shadow-md p-6 sm:p-10 lg:p-12 transition-all duration-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-semibold text-[#0F172A]">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all"
                  onChange={handleChange}
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-[#0F172A]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all"
                  onChange={handleChange}
                />
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-semibold text-[#0F172A]">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all"
                  onChange={handleChange}
                />
              </div>

              {/* Current Level */}
              <div className="space-y-2">
                <label htmlFor="currentLevel" className="text-sm font-semibold text-[#0F172A]">
                  Current Level (Approx)
                </label>
                <select
                  id="currentLevel"
                  name="currentLevel"
                  className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] appearance-none transition-all cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner (Band 4.0-5.0)</option>
                  <option value="Intermediate">Intermediate (Band 5.5-6.0)</option>
                  <option value="Advanced">Advanced (Band 6.5+)</option>
                </select>
              </div>

              {/* Target Band Score */}
              <div className="space-y-2">
                <label htmlFor="targetBand" className="text-sm font-semibold text-[#0F172A]">
                  Target Band Score
                </label>
                <select
                  id="targetBand"
                  name="targetBand"
                  className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] appearance-none transition-all cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="">Select target</option>
                  <option value="7.0">Band 7.0</option>
                  <option value="7.5">Band 7.5</option>
                  <option value="8.0">Band 8.0</option>
                  <option value="8.5+">Band 8.5+</option>
                </select>
              </div>

              {/* Interested Course */}
              <div className="space-y-2">
                <label htmlFor="course" className="text-sm font-semibold text-[#0F172A]">
                  Interested Course *
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] appearance-none transition-all cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="">Select course</option>
                  <option value="4-Week Complete Program">4-Week Complete Program</option>
                  <option value="14-days Crash program">14-days Crash program</option>
                  <option value="5-Day Speaking Crash Course">5-Day Speaking Crash Course</option>
                  <option value="Evaluation and Personalized Plan">Evaluation and Personalized Plan</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-[#0F172A]">
                Message / Specific Questions
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your previous attempts, specific struggles, or preferred class timings..."
                className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-8 bg-[#4F46E5] text-white font-bold rounded-xl shadow-lg shadow-[#4F46E5]/20 hover:bg-[#4338CA] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
            >
              Submit & Get Your Class Schedule
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Next Steps Box */}
            <div className="mt-10 p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex gap-4 transition-all duration-300">
              <div className="mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#0F172A]">What Happens Next?</h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Upon submission, you'll be redirected to WhatsApp with your enrollment details pre-filled. Our team will review your application and share a <span className="font-semibold text-[#0F172A]">personalized class schedule along with a detailed weekly timetable</span> directly on your WhatsApp within 24 hours.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}