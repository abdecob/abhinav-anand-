/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { CollectionsGrid } from "./components/CollectionsGrid";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ImageGallery } from "./components/ImageGallery";
import { FestiveSection } from "./components/FestiveSection";
import { LocationContact } from "./components/LocationContact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { OwnerManagementModal } from "./components/OwnerManagementModal";

import {
  INITIAL_BUSINESS_CONFIG,
  INITIAL_PRODUCTS,
  CATEGORIES,
  GALLERY_ITEMS,
  BusinessConfig,
  ProductItem,
  GalleryItem,
} from "./data/jewelleryData";

export default function App() {
  // Store business config state with localStorage persistence
  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem("verma_business_config");
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          googleReviewUrl: INITIAL_BUSINESS_CONFIG.googleReviewUrl,
          googleMapsDirectionsUrl: INITIAL_BUSINESS_CONFIG.googleMapsDirectionsUrl,
        };
      }
      return INITIAL_BUSINESS_CONFIG;
    } catch {
      return INITIAL_BUSINESS_CONFIG;
    }
  });

  // Products state with localStorage persistence
  const [products, setProducts] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem("verma_products_list_v2");
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  // Gallery items with localStorage persistence
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem("verma_gallery_items");
      if (saved) {
        const parsed: GalleryItem[] = JSON.parse(saved);
        return parsed.map((item) =>
          item.id === "gal-5"
            ? {
                ...item,
                image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sm4VC5EFEBVG07nnNH_ZkmH7VSImw2QafXg4Sryyn7F5J_2LwdBneXww3ryd7nc9kG6wZW71zi4gLt6gJc816k_x_OaASmsewA6Bq5Ws8-DTz3rG19UJ07He4FrTB0qLe_tth-xg=w1200-h675-k-no",
              }
            : item
        );
      }
      return GALLERY_ITEMS;
    } catch {
      return GALLERY_ITEMS;
    }
  });

  // Interactive UI states
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  // Sync to localStorage
  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem("verma_business_config", JSON.stringify(newConfig));
    } catch (err) {
      console.warn("Storage failed", err);
    }
  };

  const handleSaveProducts = (newProducts: ProductItem[]) => {
    setProducts(newProducts);
    try {
      localStorage.setItem("verma_products_list_v2", JSON.stringify(newProducts));
    } catch (err) {
      console.warn("Storage failed", err);
    }
  };

  const handleSaveGallery = (newGallery: GalleryItem[]) => {
    setGalleryItems(newGallery);
    try {
      localStorage.setItem("verma_gallery_items", JSON.stringify(newGallery));
    } catch (err) {
      console.warn("Storage failed", err);
    }
  };

  const handleResetDefaults = () => {
    setConfig(INITIAL_BUSINESS_CONFIG);
    setProducts(INITIAL_PRODUCTS);
    setGalleryItems(GALLERY_ITEMS);
    try {
      localStorage.removeItem("verma_business_config");
      localStorage.removeItem("verma_products_list");
      localStorage.removeItem("verma_products_list_v2");
      localStorage.removeItem("verma_gallery_items");
    } catch (err) {
      console.warn("Clear storage failed", err);
    }
  };

  const handleCategorySelectFromCollections = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const element = document.getElementById("featured");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#242424]">
      {/* 1. Header Navigation */}
      <Navbar
        config={config}
        onOpenOwnerModal={() => setIsOwnerModalOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero config={config} />

        {/* 3. About Verma Jewellers Section */}
        <AboutSection config={config} />

        {/* 4. Jewellery Collections (10 Categories) */}
        <CollectionsGrid
          categories={CATEGORIES}
          onSelectCategory={handleCategorySelectFromCollections}
        />

        {/* 5. Featured Products Showcase with Category Filters */}
        <FeaturedProducts
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenDetails={(p) => setModalProduct(p)}
          rawPhone={config.rawPhone}
        />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Customer Testimonials & 5.0 Google Reviews */}
        <TestimonialsSection config={config} />

        {/* 8. Visual Image Gallery with Lightbox */}
        <ImageGallery
          items={galleryItems}
          rawPhone={config.rawPhone}
        />

        {/* 9. Special Festive Collection Section */}
        <FestiveSection rawPhone={config.rawPhone} />

        {/* 10. Store Location, Hours & Direct Inquiries */}
        <LocationContact config={config} />
      </main>

      {/* 11. Footer */}
      <Footer
        config={config}
        onOpenOwnerModal={() => setIsOwnerModalOpen(true)}
      />

      {/* 12. Floating WhatsApp Button on all screens */}
      <FloatingWhatsApp rawPhone={config.rawPhone} />

      {/* 13. Product Detail Modal */}
      <ProductDetailModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        rawPhone={config.rawPhone}
        phone={config.phone}
      />

      {/* 14. Store Owner Customizer & Management Modal */}
      <OwnerManagementModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        products={products}
        onSaveProducts={handleSaveProducts}
        galleryItems={galleryItems}
        onSaveGallery={handleSaveGallery}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
