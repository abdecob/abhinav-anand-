import React from "react";
import { ArrowRight, Sparkles, Info } from "lucide-react";
import { CollectionCategory } from "../data/jewelleryData";

interface CollectionsGridProps {
  categories: CollectionCategory[];
  onSelectCategory: (categoryId: string) => void;
}

export const CollectionsGrid: React.FC<CollectionsGridProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <section id="collections" className="py-20 lg:py-28 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8E6C2D] mb-2">
            Curated Showcases
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] mb-3">
            Jewellery Collections
          </h2>
          <p className="text-base sm:text-lg text-[#8E6C2D] font-medium">
            हमारे विशेष आभूषण संग्रह
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
          <p className="text-sm text-stone-600 mt-4 max-w-2xl mx-auto">
            Explore diverse designs ranging from heirloom bridal suites to lightweight daily wear.
          </p>
        </div>

        {/* 10 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className="group flex flex-col bg-white rounded-lg overflow-hidden border border-[#E8D8B5] hover:border-[#C9A44C] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-[#FAF7F0] tracking-wider uppercase bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                  {cat.hindiName}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#151515] group-hover:text-[#8E6C2D] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Explore button */}
                <button
                  type="button"
                  onClick={() => onSelectCategory(cat.name)}
                  className="mt-4 inline-flex items-center justify-between w-full text-xs font-semibold text-[#8E6C2D] group-hover:text-[#151515] pt-3 border-t border-[#F2EDE2] transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding suggested categories & availability */}
        <div className="mt-12 p-4 rounded-lg bg-[#FAF7F0] border border-[#E8D8B5] max-w-3xl mx-auto flex items-start gap-3 text-stone-600 text-xs">
          <Info className="w-4 h-4 text-[#8E6C2D] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-stone-800">Catalogue Note:</span> These are suggested collection categories showcasing the variety of designs crafted and sourced by Verma Jewellers. Please visit our store or enquire directly on WhatsApp for live in-store piece availability, custom weights, and design viewings.
          </div>
        </div>
      </div>
    </section>
  );
};
