import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

interface FloatingWhatsAppProps {
  rawPhone: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ rawPhone }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getGeneralWhatsAppUrl(rawPhone);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-lg bg-[#151515] border border-[#C9A44C]/40 text-white shadow-xl animate-fade-in text-xs">
          <span>Need jewellery advice? Chat with us!</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Verma Jewellers on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[#25D366]/40 focus:outline-none"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none duration-1000" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
