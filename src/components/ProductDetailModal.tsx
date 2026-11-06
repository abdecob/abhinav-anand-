import React, { useEffect } from "react";
import { X, MessageCircle, Phone, MapPin, Sparkles, Shield, Check } from "lucide-react";
import { ProductItem } from "../data/jewelleryData";
import { getProductWhatsAppUrl, getCallUrl } from "../utils/whatsapp";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  rawPhone: string;
  phone: string;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  rawPhone,
  phone,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getProductWhatsAppUrl(product.name, product.category, rawPhone);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#FAF7F0] rounded-xl overflow-hidden shadow-2xl border border-[#C9A44C]/50 z-10 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black hover:text-[#C9A44C] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="relative aspect-square md:aspect-auto bg-stone-900 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes("hero_bridal_jewellery")) {
                  target.src = "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg";
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="bg-black/70 px-2.5 py-1 rounded text-[#C9A44C] font-medium backdrop-blur-xs">
                Verma Jewellers · Kharagpur
              </span>
            </div>
          </div>

          {/* Right: Product Details & Inquiries */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category */}
              <div className="text-xs uppercase tracking-widest text-[#8E6C2D] font-bold mb-1">
                {product.category}
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#151515] leading-tight">
                {product.name}
              </h2>
              {product.hindiName && (
                <p className="text-sm font-medium text-[#8E6C2D] mt-1">
                  {product.hindiName}
                </p>
              )}

              {/* Price Field */}
              <div className="mt-4 p-3 bg-white rounded-lg border border-[#E8D8B5] flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Pricing Status</span>
                <span className="text-sm font-bold text-[#151515] font-serif">
                  {product.priceDisplay || "Price on Request"}
                </span>
              </div>

              {/* Description */}
              <div className="mt-4">
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                  Design Overview
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Trust assurances */}
              <div className="mt-5 space-y-1.5 pt-4 border-t border-[#E8D8B5]/60 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A44C]" />
                  <span>Available for in-person viewing at our Kharagpur showroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A44C]" />
                  <span>In-store shopping and delivery options available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A44C]" />
                  <span>5.0 Google Rating backed by 87 authentic reviews</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-4 border-t border-[#E8D8B5] flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] transition-all shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={getCallUrl(rawPhone)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#151515] text-[#FAF7F0] font-medium text-xs hover:bg-stone-800 transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A44C]" />
                <span>Call Store: {phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
