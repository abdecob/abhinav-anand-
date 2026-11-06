import React from "react";
import { Phone, MapPin, MessageCircle, Star, Instagram, Facebook, Youtube, ShieldCheck, Settings } from "lucide-react";
import { BusinessConfig } from "../data/jewelleryData";
import { getGeneralWhatsAppUrl, getCallUrl } from "../utils/whatsapp";

interface FooterProps {
  config: BusinessConfig;
  onOpenOwnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenOwnerModal }) => {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#C9A44C]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white">
                VERMA JEWELLERS
              </h2>
              <p className="text-sm text-[#C9A44C] font-medium tracking-widest mt-0.5">
                वर्मा ज्वैलर्स · Kharagpur, Bihar
              </p>
            </div>

            <p className="font-serif italic text-base text-[#E8D8B5]">
              "Beauty, Elegance & Trust."
            </p>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Serving the people of Kharagpur with authentic jewellery designs, reliable craftsmanship, and humble customer service. Visit our store at Khas Bazar, Raipura Haveli.
            </p>

            {/* Google Rating verification badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded bg-stone-900 border border-[#C9A44C]/30 text-xs">
              <span className="text-[#C9A44C]">★★★★★</span>
              <span className="font-semibold text-stone-200">5.0 / 5.0 Google Rating</span>
              <span className="text-stone-500">·</span>
              <span className="text-stone-400">87 Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C9A44C] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <a href="#hero" className="hover:text-[#C9A44C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9A44C] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#C9A44C] transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#C9A44C] transition-colors">
                  Featured Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A44C] transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C9A44C] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C9A44C] transition-colors">
                  Contact & Store Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C9A44C] mb-4">
              Store Contact
            </h3>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
                <span>
                  {config.address} (Plus Code: {config.plusCode})
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A44C] shrink-0" />
                <a href={getCallUrl(config.rawPhone)} className="hover:text-[#C9A44C] transition-colors">
                  {config.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getGeneralWhatsAppUrl(config.rawPhone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +91 93086 47129
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-stone-400 mb-2.5 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={config.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#C9A44C] hover:border-[#C9A44C] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={config.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#C9A44C] hover:border-[#C9A44C] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={config.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#C9A44C] hover:border-[#C9A44C] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Verma Jewellers. All Rights Reserved. Kharagpur, Bihar.</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenOwnerModal}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-[#C9A44C] transition-colors cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Store Management & Customizer</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
