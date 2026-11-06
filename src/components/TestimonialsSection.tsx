import React from "react";
import { Star, ExternalLink, ShieldCheck, Quote } from "lucide-react";
import { VERIFIED_REVIEWS, BusinessConfig } from "../data/jewelleryData";

interface TestimonialsSectionProps {
  config: BusinessConfig;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ config }) => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-b border-[#E8D8B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8E6C2D] mb-2">
            Verified Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] mb-3">
            Trusted by Our Customers
          </h2>
          <p className="text-base sm:text-lg text-[#8E6C2D] font-medium">
            Your Trust Is Our Greatest Achievement
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
        </div>

        {/* 5.0 Rating Showcase Box */}
        <div className="bg-white rounded-xl p-8 sm:p-10 border border-[#E8D8B5] shadow-sm max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-1.5 mb-3 text-[#C9A44C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#C9A44C] text-[#C9A44C]" />
            ))}
          </div>

          <div className="font-serif text-4xl sm:text-5xl font-bold text-[#151515] mb-1">
            5.0 <span className="text-stone-400 text-2xl font-normal">/ 5.0</span>
          </div>

          <p className="text-sm font-semibold text-stone-700 mb-2">
            Based on 87 Google Customer Reviews
          </p>

          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Verma Jewellers has maintained a perfect 5.0-star rating in Kharagpur, Bihar, through transparent dealings, warm service, and exquisite finishing.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-lg p-7 border border-[#E8D8B5] shadow-xs hover:border-[#C9A44C] hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              {/* Quote Watermark Icon */}
              <Quote className="w-8 h-8 text-[#C9A44C]/20 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C9A44C] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A44C] text-[#C9A44C]" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verification Info */}
              <div className="pt-4 border-t border-[#F2EDE2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#C9A44C]/50 flex items-center justify-center font-serif font-bold text-sm text-[#8E6C2D]">
                    {rev.avatarText}
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-[#151515]">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#C9A44C]" />
                      <span>{rev.date}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-[#8E6C2D] font-semibold bg-[#FAF7F0] px-2 py-0.5 rounded">
                  5.0 ★
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={config.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#151515] text-[#FAF7F0] text-xs font-semibold tracking-wider uppercase hover:bg-stone-800 transition-all shadow-sm"
          >
            <span>Read More Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A44C]" />
          </a>
        </div>
      </div>
    </section>
  );
};
