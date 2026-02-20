"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Menu, X, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Enroll', href: '#enroll' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/smartscore.ielts.pk?igsh=cnRqdmU0enY0bmQ%3D&utm_source=qr',
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@score._.smart?_r=1&_t=ZS-93rq7bG3QNE',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.232 10.724 6.33 6.33 0 0 0 10.674-4.487V8.84a8.113 8.113 0 0 0 4.893 1.635V7.037a4.713 4.713 0 0 1-1.102-.351Z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1C2QjbAZCJ/?mibextid=wwXIfr',
      icon: <Facebook className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {/* Top announcement bar with email */}
      <div className="bg-[#4f46e5] text-white text-xs sm:text-sm py-2 px-4 text-center">
        <a
          href="mailto:smartscorepk@gmail.com"
          className="inline-flex items-center gap-1.5 hover:underline font-medium transition-opacity hover:opacity-90"
        >
          <Mail className="h-3.5 w-3.5 flex-shrink-0" />
          smartscorepk@gmail.com
        </a>
      </div>

      <header
        className={`fixed top-8 sm:top-[33px] left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-[#e2e8f0]/50 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="mx-auto px-4 md:px-6 flex items-center justify-between h-20 max-w-[1280px]">
          {/* Logo Section */}
          <a
            href="#"
            className="flex items-center gap-2 group outline-none bg-transparent border-none p-0"
          >
            <div className="h-14 w-14 rounded-2xl overflow-hidden shadow-md border border-slate-200/10 flex-shrink-0 transition-transform duration-300">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06070ccc-db63-40d4-a115-2aa9464f01ba-score-smart-vercel-app/assets/icons/icon-2.png"
                alt="Score Smart Logo"
                width={56}
                height={56}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-xl font-bold text-[#0f172a] leading-tight font-sans tracking-tight">
                Score Smart
              </span>
              <span className="text-[10px] text-[#64748b] font-medium tracking-wider uppercase">
                IELTS Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#64748b] hover:text-[#4f46e5] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Section */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 mr-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64748b] hover:text-[#4f46e5] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="#enroll"
              className="ml-2 inline-flex items-center rounded-full bg-[#4f46e5] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-[#4f46e5]/20"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#0f172a] hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#e2e8f0] shadow-lg">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-[#64748b] hover:text-[#4f46e5] py-2.5 px-2 border-b border-slate-100 last:border-0 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 pb-2">
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64748b] hover:text-[#4f46e5] transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <a
                  href="#enroll"
                  className="inline-flex items-center rounded-full bg-[#4f46e5] px-6 py-2 text-sm font-semibold text-white shadow-md shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to offset fixed header + top bar */}
      <div className="h-[calc(80px+33px)]"></div>
    </>
  );
};

export default Header;
