import React, { useState } from "react";
import {
  X,
  Save,
  Plus,
  Trash2,
  Image as ImageIcon,
  Clock,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  Info,
  Edit2,
} from "lucide-react";
import { BusinessConfig, ProductItem, GalleryItem, CATEGORIES } from "../data/jewelleryData";

interface OwnerManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onSaveConfig: (newConfig: BusinessConfig) => void;
  products: ProductItem[];
  onSaveProducts: (newProducts: ProductItem[]) => void;
  galleryItems: GalleryItem[];
  onSaveGallery: (newGallery: GalleryItem[]) => void;
  onResetDefaults: () => void;
}

export const OwnerManagementModal: React.FC<OwnerManagementModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  products,
  onSaveProducts,
  galleryItems,
  onSaveGallery,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<"store" | "products" | "gallery">("store");

  // Local editable states
  const [localConfig, setLocalConfig] = useState<BusinessConfig>({ ...config });
  const [localProducts, setLocalProducts] = useState<ProductItem[]>([...products]);
  const [localGallery, setLocalGallery] = useState<GalleryItem[]>([...galleryItems]);

  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  // Product edit state
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [newProductName, setNewProductName] = useState("");
  const [newProductHindi, setNewProductHindi] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("Gold Jewellery");
  const [newProductPrice, setNewProductPrice] = useState("Price on Request");
  const [newProductDesc, setNewProductDesc] = useState("");
  const [newProductImage, setNewProductImage] = useState("");

  if (!isOpen) return null;

  const handleSaveStore = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(localConfig);
    setFeedbackMessage("Store information updated successfully!");
    setTimeout(() => setFeedbackMessage(""), 3000);
  };

  const handleSaveProductsList = () => {
    onSaveProducts(localProducts);
    setFeedbackMessage("Products catalog updated successfully!");
    setTimeout(() => setFeedbackMessage(""), 3000);
  };

  const handleAddOrUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName.trim()) return;

    if (editingProduct) {
      // Update existing
      const updated = localProducts.map((p) =>
        p.id === editingProduct.id
          ? {
              ...p,
              name: newProductName,
              hindiName: newProductHindi,
              category: newProductCategory,
              priceDisplay: newProductPrice,
              description: newProductDesc,
              image: newProductImage || p.image,
            }
          : p
      );
      setLocalProducts(updated);
      onSaveProducts(updated);
      setEditingProduct(null);
    } else {
      // Add new
      const newP: ProductItem = {
        id: `prod-${Date.now()}`,
        name: newProductName,
        hindiName: newProductHindi,
        category: newProductCategory,
        priceDisplay: newProductPrice || "Price on Request",
        description: newProductDesc || "Handcrafted jewellery design available at Verma Jewellers.",
        image:
          newProductImage ||
          "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg",
        featured: false,
      };
      const updated = [newP, ...localProducts];
      setLocalProducts(updated);
      onSaveProducts(updated);
    }

    // Reset inputs
    setNewProductName("");
    setNewProductHindi("");
    setNewProductCategory("Gold Jewellery");
    setNewProductPrice("Price on Request");
    setNewProductDesc("");
    setNewProductImage("");
    setFeedbackMessage("Product saved to showcase!");
    setTimeout(() => setFeedbackMessage(""), 3000);
  };

  const handleStartEdit = (p: ProductItem) => {
    setEditingProduct(p);
    setNewProductName(p.name);
    setNewProductHindi(p.hindiName || "");
    setNewProductCategory(p.category);
    setNewProductPrice(p.priceDisplay || "Price on Request");
    setNewProductDesc(p.description);
    setNewProductImage(p.image);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to remove this product from the showcase?")) {
      const updated = localProducts.filter((p) => p.id !== id);
      setLocalProducts(updated);
      onSaveProducts(updated);
    }
  };

  // Gallery replace image helper
  const handleUpdateGalleryImage = (id: string, newUrl: string) => {
    const updated = localGallery.map((g) => (g.id === id ? { ...g, image: newUrl } : g));
    setLocalGallery(updated);
    onSaveGallery(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF7F0] rounded-xl overflow-hidden shadow-2xl border border-[#C9A44C] z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#151515] text-white p-5 border-b border-[#C9A44C]/30 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white">
              Verma Jewellers · Store Management Studio
            </h2>
            <p className="text-xs text-[#C9A44C]">
              वर्मा ज्वैलर्स प्रबंधन केंद्र – Customize store hours, products & photos
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice strip */}
        <div className="bg-amber-50 px-5 py-2.5 border-b border-amber-200 text-amber-900 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              All modifications are saved locally to your device. To deploy cloud database sync, backend integration can be configured.
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (confirm("Reset all store details, products, and gallery to default verified data?")) {
                onResetDefaults();
                onClose();
              }
            }}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 underline shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset to Defaults</span>
          </button>
        </div>

        {feedbackMessage && (
          <div className="bg-green-600 text-white px-5 py-2 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{feedbackMessage}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center px-6 border-b border-[#E8D8B5] bg-white text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("store")}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === "store"
                ? "border-[#C9A44C] text-[#151515]"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            Store Information & Timings
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("products")}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === "products"
                ? "border-[#C9A44C] text-[#151515]"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            Products & Pricing ({localProducts.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("gallery")}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === "gallery"
                ? "border-[#C9A44C] text-[#151515]"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            Replace Showcase Photos
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* TAB 1: Store Information */}
          {activeTab === "store" && (
            <form onSubmit={handleSaveStore} className="space-y-5 max-w-2xl">
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Store Opening Hours & Timings
                </label>
                <input
                  type="text"
                  value={localConfig.timings}
                  onChange={(e) => setLocalConfig({ ...localConfig, timings: e.target.value })}
                  placeholder="e.g. Monday – Sunday: 10:00 AM – 8:00 PM"
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                />
                <p className="text-[11px] text-stone-500 mt-1">
                  Displayed in the Location & Contact section. Update anytime during festivals.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Google Maps Reviews Page URL
                </label>
                <input
                  type="url"
                  value={localConfig.googleReviewUrl}
                  onChange={(e) => setLocalConfig({ ...localConfig, googleReviewUrl: e.target.value })}
                  placeholder="https://www.google.com/maps/place/..."
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                />
                <p className="text-[11px] text-stone-500 mt-1">
                  Linked to the "Read More Google Reviews" button.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Phone Number for Calls & WhatsApp
                </label>
                <input
                  type="text"
                  value={localConfig.phone}
                  onChange={(e) =>
                    setLocalConfig({
                      ...localConfig,
                      phone: e.target.value,
                      rawPhone: e.target.value.replace(/[^0-9]/g, ""),
                    })
                  }
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Instagram URL
                  </label>
                  <input
                    type="url"
                    value={localConfig.socialLinks.instagram}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        socialLinks: { ...localConfig.socialLinks, instagram: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Facebook URL
                  </label>
                  <input
                    type="url"
                    value={localConfig.socialLinks.facebook}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        socialLinks: { ...localConfig.socialLinks, facebook: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    YouTube URL
                  </label>
                  <input
                    type="url"
                    value={localConfig.socialLinks.youtube}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        socialLinks: { ...localConfig.socialLinks, youtube: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#151515] text-[#FAF7F0] text-xs font-semibold hover:bg-stone-800 transition-colors shadow-sm"
              >
                <Save className="w-3.5 h-3.5 text-[#C9A44C]" />
                <span>Save Store Information</span>
              </button>
            </form>
          )}

          {/* TAB 2: Products & Pricing */}
          {activeTab === "products" && (
            <div className="space-y-8">
              {/* Add / Edit Form */}
              <div className="bg-white p-5 rounded-lg border border-[#E8D8B5]">
                <h3 className="font-serif text-base font-bold text-[#151515] mb-3">
                  {editingProduct ? `Edit Product: ${editingProduct.name}` : "Add New Jewellery Item"}
                </h3>

                <form onSubmit={handleAddOrUpdateProduct} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Product Name (English) *
                    </label>
                    <input
                      type="text"
                      required
                      value={newProductName}
                      onChange={(e) => setNewProductName(e.target.value)}
                      placeholder="e.g. Royal Antique Bridal Haar"
                      className="w-full px-3 py-2 text-xs rounded bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Hindi Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={newProductHindi}
                      onChange={(e) => setNewProductHindi(e.target.value)}
                      placeholder="e.g. शाही एंटीक ब्राइडल हार"
                      className="w-full px-3 py-2 text-xs rounded bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Category
                    </label>
                    <select
                      value={newProductCategory}
                      onChange={(e) => setNewProductCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Price Field (Editable placeholder)
                    </label>
                    <input
                      type="text"
                      value={newProductPrice}
                      onChange={(e) => setNewProductPrice(e.target.value)}
                      placeholder="e.g. Price on Request / ₹45,000 (Approx)"
                      className="w-full px-3 py-2 text-xs rounded bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Photo URL / Replace Image
                    </label>
                    <input
                      type="text"
                      value={newProductImage}
                      onChange={(e) => setNewProductImage(e.target.value)}
                      placeholder="Paste image URL (or leave blank to use high-quality default)"
                      className="w-full px-3 py-2 text-xs rounded bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={newProductDesc}
                      onChange={(e) => setNewProductDesc(e.target.value)}
                      placeholder="Details about craftsmanship, design elements, and finishing..."
                      className="w-full px-3 py-2 text-xs rounded bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#C9A44C] text-[#151515] text-xs font-bold hover:bg-[#d4af37] transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{editingProduct ? "Update Product" : "Add to Showcase"}</span>
                    </button>

                    {editingProduct && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingProduct(null);
                          setNewProductName("");
                          setNewProductHindi("");
                          setNewProductCategory("Gold Jewellery");
                          setNewProductPrice("Price on Request");
                          setNewProductDesc("");
                          setNewProductImage("");
                        }}
                        className="px-4 py-2 rounded bg-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-300"
                      >
                        Cancel Edit
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Existing Products List */}
              <div>
                <h4 className="font-serif text-sm font-bold text-stone-900 mb-3">
                  Current Showcase Items ({localProducts.length})
                </h4>

                <div className="space-y-2">
                  {localProducts.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E8D8B5] text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-10 h-10 object-cover rounded bg-stone-100"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="font-bold text-stone-900">{p.name}</p>
                          <p className="text-[11px] text-[#8E6C2D]">
                            {p.category} · {p.priceDisplay || "Price on Request"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleStartEdit(p)}
                          className="p-1.5 rounded text-stone-600 hover:text-[#151515] hover:bg-stone-100"
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-1.5 rounded text-red-600 hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Replace Showcase Photos */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <p className="text-xs text-stone-600">
                You can replace any demonstration photograph with your shop's actual live jewellery photographs by pasting an image URL or cloud storage link below.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {localGallery.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-lg bg-white border border-[#E8D8B5] flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded bg-stone-100 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-xs text-stone-900">{item.title}</h4>
                        <span className="text-[10px] text-[#8E6C2D] font-semibold uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-600 mb-1">
                        Replace with Custom Photo URL:
                      </label>
                      <input
                        type="text"
                        defaultValue={item.image}
                        onBlur={(e) => handleUpdateGalleryImage(item.id, e.target.value)}
                        placeholder="https://..."
                        className="w-full px-2.5 py-1.5 text-xs rounded bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
