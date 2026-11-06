import React, { useState } from "react";
import { X, ZoomIn, MessageCircle, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GalleryItem } from "../data/jewelleryData";
import { getProductWhatsAppUrl } from "../utils/whatsapp";

interface ImageGalleryProps {
  items: GalleryItem[];
  rawPhone: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ items, rawPhone }) => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = ["All", "Bridal", "Necklaces", "Bangles", "Store", "Festive"];

  const filteredItems = items.filter((item) => {
    if (activeTab === "All") return true;
    return item.category.toLowerCase() === activeTab.toLowerCase();
  });

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8E6C2D] mb-2">
            Visual Craftsmanship
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] mb-3">
            Exquisite Jewellery Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#8E6C2D] font-medium">
            कारीगरी और सौंदर्य की झलक
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-[#151515] text-[#FAF7F0] shadow-sm"
                  : "bg-white text-stone-700 hover:bg-[#F3EFE6] border border-[#E8D8B5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Responsive Masonry-style layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-lg overflow-hidden bg-stone-900 border border-[#E8D8B5] hover:border-[#C9A44C] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer aspect-4/3"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#C9A44C]" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A44C]">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold text-white mt-0.5 group-hover:text-[#E8D8B5] transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-stone-900/80 text-white hover:text-[#C9A44C] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-900/80 text-white hover:text-[#C9A44C] transition-colors hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-900/80 text-white hover:text-[#C9A44C] transition-colors hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Card */}
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col bg-[#151515] rounded-xl overflow-hidden border border-[#C9A44C]/40 shadow-2xl">
            <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom info strip in lightbox */}
            <div className="p-5 bg-[#1A1A1A] border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9A44C] font-semibold">
                  {currentItem.category} · Photo {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                  {currentItem.title}
                </h3>
                {currentItem.description && (
                  <p className="text-xs text-stone-400 mt-1">
                    {currentItem.description}
                  </p>
                )}
              </div>

              <a
                href={getProductWhatsAppUrl(currentItem.title, currentItem.category, rawPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-all whitespace-nowrap shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire about this piece</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
