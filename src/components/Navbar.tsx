import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { BusinessConfig } from "../data/jewelleryData";
import { getGeneralWhatsAppUrl, getCallUrl } from "../utils/whatsapp";

interface NavbarProps {
  config: BusinessConfig;
  onOpenOwnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenOwnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Collections", href: "#collections" },
    { label: "Featured", href: "#featured" },
    { label: "About Us", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit Store", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#151515]/95 backdrop-blur-md shadow-lg border-b border-[#C9A44C]/30 py-3 text-white"
            : "bg-gradient-to-b from-[#151515]/90 via-[#151515]/50 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              className="group flex flex-col items-start whitespace-nowrap shrink-0 focus:outline-none"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#C9A44C] transition-colors">
                VERMA JEWELLERS
              </span>
              <span className="text-xs text-[#C9A44C] font-medium tracking-widest -mt-0.5">
                वर्मा ज्वैलर्स
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone-200 hover:text-[#C9A44C] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A44C] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (Call, WhatsApp, Mobile Toggle) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* WhatsApp direct action */}
              <a
                href={getGeneralWhatsAppUrl(config.rawPhone)}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Call Now Button */}
              <a
                href={getCallUrl(config.rawPhone)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#C9A44C] text-[#151515] hover:bg-[#d4af37] transition-all shadow-sm whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Call:</span>
                <span>{config.phone}</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-stone-200 hover:text-white hover:bg-stone-800/60 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#151515] border-l border-[#C9A44C]/30 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-stone-800">
                <div>
                  <h2 className="font-serif text-lg font-bold text-white tracking-wide">
                    VERMA JEWELLERS
                  </h2>
                  <p className="text-xs text-[#C9A44C]">वर्मा ज्वैलर्स · Kharagpur</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-stone-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Verified badge */}
              <div className="mt-4 py-2 px-3 rounded bg-stone-900 border border-stone-800 flex items-center gap-2 text-xs text-stone-300">
                <span className="text-[#C9A44C]">★★★★★</span>
                <span>5.0 Google Rating · 87 Reviews</span>
              </div>

              {/* Nav links */}
              <nav className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 px-3 rounded-md text-stone-200 hover:text-[#C9A44C] hover:bg-stone-900 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-stone-800 flex flex-col gap-3">
              <a
                href={getGeneralWhatsAppUrl(config.rawPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#25D366] text-white font-medium text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={getCallUrl(config.rawPhone)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#C9A44C] text-[#151515] font-semibold text-sm shadow-md hover:bg-[#d4af37]"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 93086 47129</span>
              </a>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOwnerModal();
                  }}
                  className="text-xs text-stone-400 hover:text-[#C9A44C] underline transition-colors"
                >
                  Store Owner Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
