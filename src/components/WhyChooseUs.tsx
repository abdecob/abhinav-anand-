import React from "react";
import { Sparkles, Award, Wallet, Smile, CheckCircle } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      num: "01",
      title: "Beautiful Designs",
      hindi: "आकर्षक डिज़ाइन",
      text: "Explore a variety of attractive jewellery designs crafted to celebrate tradition and personal style.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "Excellent Finishing",
      hindi: "उत्कृष्ट फिनिशिंग",
      text: "Beautiful finishing that customers appreciate, with meticulous attention to stone settings and surface polish.",
      icon: Award,
    },
    {
      num: "03",
      title: "Affordable Choices",
      hindi: "किफायती विकल्प",
      text: "Jewellery options to suit different preferences and budgets, ensuring high value without compromise.",
      icon: Wallet,
    },
    {
      num: "04",
      title: "Friendly Service",
      hindi: "सहज व विनम्र सेवा",
      text: "Experience a welcoming and helpful shopping environment where your satisfaction is our top priority.",
      icon: Smile,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#151515] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A44C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A44C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A44C] mb-2">
            The Verma Jewellers Difference
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Why Customers Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[#E8D8B5] font-medium">
            हमारी विशेषताएँ और आपकी संतुष्टि
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="group relative bg-[#1E1E1E] rounded-lg p-7 border border-[#C9A44C]/20 hover:border-[#C9A44C] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9A44C]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#C9A44C]/40 group-hover:text-[#C9A44C] transition-colors">
                      {item.num}.
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#151515] border border-[#C9A44C]/30 flex items-center justify-center text-[#C9A44C] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Hindi Label */}
                  <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#E8D8B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C9A44C] font-medium mb-3">
                    {item.hindi}
                  </p>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-stone-800 flex items-center gap-1.5 text-[11px] text-stone-400">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A44C]" />
                  <span>Verified by customer reviews</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
