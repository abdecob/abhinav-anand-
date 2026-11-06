import React from "react";
import { Sparkles, CheckCircle2, HeartHandshake, Gem, Shield, MapPin, ArrowRight } from "lucide-react";
import { BusinessConfig } from "../data/jewelleryData";

interface AboutSectionProps {
  config: BusinessConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  const [interiorImg, setInteriorImg] = React.useState(
    "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sm4VC5EFEBVG07nnNH_ZkmH7VSImw2QafXg4Sryyn7F5J_2LwdBneXww3ryd7nc9kG6wZW71zi4gLt6gJc816k_x_OaASmsewA6Bq5Ws8-DTz3rG19UJ07He4FrTB0qLe_tth-xg=w1200-h675-k-no"
  );
  const highlights = [
    {
      title: "Beautiful Jewellery Designs",
      hindi: "सुंदर और आकर्षक डिज़ाइन",
      desc: "Curated collections capturing traditional royal aesthetics and contemporary elegance.",
    },
    {
      title: "Excellent Finishing",
      hindi: "उत्कृष्ट फिनिशिंग और चमक",
      desc: "Detailed filigree, smooth polish, and meticulous craftsmanship praised by our customers.",
    },
    {
      title: "Affordable Choices",
      hindi: "किफायती और सही मूल्य",
      desc: "A wide variety of options tailored to every celebration, budget, and family occasion.",
    },
    {
      title: "Friendly Customer Service",
      hindi: "सहज और विनम्र सेवा",
      desc: "Humble, welcoming staff committed to making every visit warm, honest, and satisfying.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-b border-[#E8D8B5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8E6C2D] mb-2">
            Heritage & Trust
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] mb-3">
            Our Story – A Tradition of Trust
          </h2>
          <p className="text-base sm:text-lg text-[#8E6C2D] font-medium">
            विश्वास और खूबसूरती का नाम – वर्मा ज्वैलर्स
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Image & Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Showroom Image with Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#C9A44C]/40 bg-stone-900 group">
              <img
                src={interiorImg}
                alt="Verma Jewellers Authentic Showroom Interior in Kharagpur, Bihar"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={() => {
                  setInteriorImg("/src/assets/images/store_interior_counter_1793971590082.jpg");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-md bg-[#151515]/90 border border-[#C9A44C]/50 backdrop-blur-md text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-semibold text-[#C9A44C] uppercase tracking-wider bg-[#C9A44C]/20 px-2 py-0.5 rounded">
                        Authentic Store Interior
                      </span>
                    </div>
                    <p className="font-serif font-bold text-base text-[#E8D8B5]">
                      Verma Jewellers Showroom
                    </p>
                    <p className="text-xs text-stone-300">
                      Khas Bazar, Raipura Haveli, Kharagpur, Bihar
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#C9A44C]">
                      ★★★★★ 5.0
                    </span>
                    <p className="text-[11px] text-stone-400">87 Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A44C]/30 rounded-lg -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-5 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="first-letter:font-serif first-letter:text-4xl first-letter:font-bold first-letter:text-[#C9A44C] first-letter:mr-2 first-letter:float-left">
                Verma Jewellers is your destination for beautiful jewellery designs and a welcoming shopping experience in Kharagpur, Bihar. We focus on attractive designs, excellent finishing, affordable choices, and customer satisfaction.
              </p>
              <p>
                Our commitment to quality and friendly service has helped us earn the trust and appreciation of our customers across generations. Whether you are seeking a grand bridal set or graceful daily wear, our showroom offers a transparent and delightful atmosphere.
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E8D8B5]/60">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-white/80 border border-[#E8D8B5] hover:border-[#C9A44C] transition-colors shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A44C] shrink-0" />
                    <h3 className="text-sm font-bold text-[#151515]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8E6C2D] font-medium mb-1">
                    {item.hindi}
                  </p>
                  <p className="text-xs text-stone-600 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Location Link */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#location"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8E6C2D] hover:text-[#151515] transition-colors group"
              >
                <span>Find our store location & timings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
