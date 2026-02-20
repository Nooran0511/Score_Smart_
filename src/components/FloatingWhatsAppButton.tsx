"use client";

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "923158999139";
  const professionalMessage = `Hello! I'm interested in learning more about Score Smart IELTS Academy's programs.`;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(professionalMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Message Preview */}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-xl p-4 max-w-xs animate-fade-in">
            <p className="text-sm text-[#0F172A] font-medium mb-3">
              Start a conversation with us!
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed mb-3">
              {professionalMessage}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA58] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA58] text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95"
          title="Chat with us on WhatsApp"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-7 w-7" />
          )}
        </button>

        {/* Pulsing Dot Indicator */}
        {!isOpen && (
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
              <div className="relative w-3 h-3 bg-[#25D366] rounded-full"></div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay when open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
