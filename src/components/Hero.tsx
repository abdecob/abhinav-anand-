import React from "react";
import { Star, ArrowRight, MapPin, MessageCircle, Phone, Award } from "lucide-react";
import { BusinessConfig } from "../data/jewelleryData";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

interface HeroProps {
  config: BusinessConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#151515] pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Background Photography with Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_bridal_jewellery_1793971586733.jpg"
          alt="Traditional Indian Bridal Gold Necklace and Ornaments by Verma Jewellers"
          className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 transform animate-pulse duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/60 to-[#151515]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-[#151515]/90" />
      </div>

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-20 left-6 sm:left-12 w-24 h-24 border-t-2 border-l-2 border-[#C9A44C]/30 pointer-events-none hidden md:block" />
      <div className="absolute top-20 right-6 sm:right-12 w-24 h-24 border-t-2 border-r-2 border-[#C9A44C]/30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-6 sm:left-12 w-24 h-24 border-b-2 border-l-2 border-[#C9A44C]/30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-6 sm:right-12 w-24 h-24 border-b-2 border-r-2 border-[#C9A44C]/30 pointer-events-none hidden md:block" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Rating and Social Proof Banner (Clean unboxed typography) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-[#C9A44C]/40 backdrop-blur-md mb-6 shadow-md">
          <div className="flex items-center gap-1 text-[#C9A44C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C9A44C] text-[#C9A44C]" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-stone-200">
            5.0 Google Rating
          </span>
          <span className="text-stone-500" aria-hidden="true">
            ·
          </span>
          <span className="text-xs sm:text-sm text-stone-300">
            87 Customer Reviews
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight text-balance">
          Elegance That <span className="text-gold-gradient">Defines You</span>
        </h1>

        {/* Hindi Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#E8D8B5] font-medium tracking-wide mb-5 max-w-3xl mx-auto text-balance">
          "आपकी खूबसूरती में चार चाँद लगाने वाले खूबसूरत आभूषण।"
        </p>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto mb-9 font-normal leading-relaxed text-balance">
          Discover beautiful jewellery designs, exceptional finishing, and a shopping experience built on trust at Khas Bazar, Kharagpur, Bihar.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          {/* Primary CTA */}
          <a
            href="#collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-md bg-[#C9A44C] text-[#151515] font-semibold text-sm tracking-wide uppercase hover:bg-[#d4af37] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C9A44C]/20 whitespace-nowrap"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#location"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-stone-900/80 border border-[#C9A44C]/60 text-stone-100 font-semibold text-sm tracking-wide uppercase hover:bg-stone-800 hover:border-[#C9A44C] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MapPin className="w-4 h-4 text-[#C9A44C]" />
            <span>Visit Our Store</span>
          </a>

          {/* WhatsApp Direct Inquiry */}
          <a
            href={getGeneralWhatsAppUrl(config.rawPhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] text-white font-semibold text-sm tracking-wide hover:bg-[#20ba59] transition-all transform hover:-translate-y-0.5 shadow-md whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2">
            <p className="text-xl sm:text-2xl font-bold text-[#C9A44C] font-serif">5.0 / 5.0</p>
            <p className="text-xs text-stone-400 mt-1">Google Star Rating</p>
          </div>
          <div className="p-2">
            <p className="text-xl sm:text-2xl font-bold text-[#C9A44C] font-serif">87 Reviews</p>
            <p className="text-xs text-stone-400 mt-1">Verified Customers</p>
          </div>
          <div className="p-2">
            <p className="text-xl sm:text-2xl font-bold text-[#C9A44C] font-serif">Kharagpur, BR</p>
            <p className="text-xs text-stone-400 mt-1">Khas Bazar, Raipura Haveli</p>
          </div>
          <div className="p-2">
            <p className="text-xl sm:text-2xl font-bold text-[#C9A44C] font-serif">In-Store & Delivery</p>
            <p className="text-xs text-stone-400 mt-1">Available Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};
