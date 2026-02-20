import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Mail, Music2, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E293B] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Academy Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06070ccc-db63-40d4-a115-2aa9464f01ba-score-smart-vercel-app/assets/icons/icon-2.png"
                  alt="Score Smart Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">Score Smart</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">IELTS Academy</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your pathway to global success. We provide structured, results-oriented IELTS preparation to help you achieve your dream band score.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/smartscore.ielts.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#4F46E5] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/share/1C2QjbAZCJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#4F46E5] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@score._.smart"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#4F46E5] hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#4F46E5]">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#courses" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">IELTS Courses</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">About Coach</a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">Success Stories</a>
              </li>
              <li>
                <a href="#enroll" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">Enroll Now</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#4F46E5]">Our Programs</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#courses" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">4-Week Complete Program</a>
              </li>
              <li>
                <a href="#courses" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">5-Day Speaking Crash Course</a>
              </li>
              <li>
                <a href="#evaluation" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">Free Speaking Evaluation</a>
              </li>
              <li>
                <a href="#enroll" className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200">Personalized Coaching</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#4F46E5]">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[#4F46E5]">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Whatsapp</span>
                  <a href="https://wa.me/923158999139" className="text-slate-400 hover:text-white transition-colors text-[15px]">+92 315 8999139</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[#4F46E5]">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Email</span>
                  <a href="mailto:smartscorepk@gmail.com" className="text-slate-400 hover:text-white transition-colors text-[15px]">smartscorepk@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[#4F46E5]">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Location</span>
                  <span className="text-slate-400 text-[15px]">Online Classes (Global)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 grayscale opacity-80">
          <p className="text-slate-500 text-sm">
            © {currentYear} Score Smart IELTS Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <span>Powered by</span>
            <span className="font-semibold text-slate-400">SixSenses</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;