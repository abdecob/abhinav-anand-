import React from "react";
import { Sparkles, MessageCircle, ArrowRight, Check } from "lucide-react";
import { FESTIVE_COLLECTIONS } from "../data/jewelleryData";
import { getProductWhatsAppUrl } from "../utils/whatsapp";

interface FestiveSectionProps {
  rawPhone: string;
}

export const FestiveSection: React.FC<FestiveSectionProps> = ({ rawPhone }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#181818] text-white relative overflow-hidden border-t border-b border-[#C9A44C]/30">
      {/* Subtle luxury background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A44C]/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A44C] mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seasonal & Auspicious Ornaments</span>
            <Sparkles className="w-3.5 h-3.5" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Celebrate Every Occasion with Timeless Elegance
          </h2>
          <p className="text-base sm:text-lg text-[#E8D8B5] font-medium">
            त्योहारों और शुभ प्रसंगों की विशेष तैयारी
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-stone-300 mt-4 max-w-2xl mx-auto">
            From Diwali puja jewellery and grand wedding ensembles to auspicious celebratory gifts, explore handcrafted designs tailored for joyous moments.
          </p>
        </div>

        {/* Festive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FESTIVE_COLLECTIONS.map((fest) => {
            const whatsappUrl = getProductWhatsAppUrl(fest.title, "Festive Collection", rawPhone);

            return (
              <div
                key={fest.id}
                className="group flex flex-col bg-[#222222] rounded-lg overflow-hidden border border-[#C9A44C]/30 hover:border-[#C9A44C] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C9A44C]/15"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-900">
                  <img
                    src={fest.image}
                    alt={fest.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-[#C9A44C] bg-black/75 px-2 py-0.5 rounded backdrop-blur-xs">
                    {fest.hindiTitle}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#E8D8B5] transition-colors">
                      {fest.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                      {fest.subtitle}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-stone-800 text-[11px] text-stone-300">
                      {fest.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#C9A44C] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded bg-[#C9A44C] text-[#151515] font-semibold text-xs tracking-wide uppercase hover:bg-[#d4af37] transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
