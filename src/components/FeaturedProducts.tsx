import React, { useState, useMemo } from "react";
import { MessageCircle, Eye, Search, Sparkles, Filter, Check } from "lucide-react";
import { ProductItem } from "../data/jewelleryData";
import { getProductWhatsAppUrl } from "../utils/whatsapp";

interface FeaturedProductsProps {
  products: ProductItem[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenDetails: (product: ProductItem) => void;
  rawPhone: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onOpenDetails,
  rawPhone,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique category names
  const categoriesList = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.hindiName && p.hindiName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section id="featured" className="py-20 lg:py-28 bg-[#F3EFE6] border-t border-b border-[#E8D8B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8E6C2D] mb-2">
            Selected Masterpieces
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] mb-3">
            Featured Jewellery Showcase
          </h2>
          <p className="text-base sm:text-lg text-[#8E6C2D] font-medium">
            विशेष उत्पाद और आभूषण
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
          <p className="text-sm text-stone-600 mt-4">
            Directly enquire with Verma Jewellers on WhatsApp for current availability and custom crafting.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Tabs (Single-line interactive buttons per §1.A) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? "bg-[#151515] text-[#FAF7F0] shadow-sm"
                    : "bg-white/80 text-stone-700 hover:bg-white hover:text-[#151515] border border-[#E8D8B5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search necklace, bangles, bridal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white rounded-md border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C] text-[#151515] placeholder-stone-400 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid (3-column desktop baseline per domain guidelines) */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-[#E8D8B5] max-w-md mx-auto my-8">
            <Filter className="w-8 h-8 text-[#C9A44C] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[#151515] mb-1">
              No Matching Designs Found
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Try searching for different terms or reset your category filter.
            </p>
            <button
              onClick={() => {
                onSelectCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-md bg-[#151515] text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const whatsappUrl = getProductWhatsAppUrl(product.name, product.category, rawPhone);

              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white rounded-lg overflow-hidden border border-[#E8D8B5] hover:border-[#C9A44C] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Product Image: 65%-75% visual weight per retail design guidelines */}
                  <div
                    className="relative aspect-4/3 w-full overflow-hidden bg-stone-100 cursor-pointer"
                    onClick={() => onOpenDetails(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes("hero_bridal_jewellery")) {
                          target.src = "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg";
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                    {/* Verified tag */}
                    {product.tags?.includes("Google Verified") && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold text-[#151515] bg-[#C9A44C] px-2 py-0.5 rounded shadow-sm z-10">
                        In-Store Piece
                      </span>
                    )}

                    {/* Quick View Button on Image */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-xs">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenDetails(product);
                        }}
                        className="px-4 py-2 rounded-md bg-white text-[#151515] text-xs font-semibold shadow-lg hover:bg-[#FAF7F0] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C9A44C]" />
                        <span>View Details</span>
                      </button>
                    </div>

                    {/* Hindi subtitle badge */}
                    {product.hindiName && (
                      <span className="absolute bottom-3 left-3 text-[11px] font-medium text-stone-200 bg-black/70 px-2 py-0.5 rounded backdrop-blur-xs">
                        {product.hindiName}
                      </span>
                    )}
                  </div>

                  {/* Product Details Section */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Clean metadata without pill boxes */}
                      <div className="text-[11px] uppercase tracking-wider text-[#8E6C2D] font-semibold mb-1">
                        {product.category}
                      </div>

                      <h3
                        className="font-serif text-lg font-bold text-[#151515] group-hover:text-[#8E6C2D] transition-colors cursor-pointer line-clamp-1"
                        onClick={() => onOpenDetails(product)}
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & Action Row */}
                    <div className="mt-5 pt-4 border-t border-[#F2EDE2] flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] text-stone-400 block">Price</span>
                        <span className="text-xs font-semibold text-[#151515] tabular-nums">
                          {product.priceDisplay || "Price on Request"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* View Details */}
                        <button
                          type="button"
                          onClick={() => onOpenDetails(product)}
                          className="px-3 py-1.5 rounded text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                        >
                          Details
                        </button>

                        {/* WhatsApp Enquiry Button */}
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-all shadow-xs"
                          title="Enquire on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Enquire</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
