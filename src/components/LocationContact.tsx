import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  ShoppingBag,
  Truck,
  CheckCircle2,
  Send,
  AlertCircle,
} from "lucide-react";
import { BusinessConfig } from "../data/jewelleryData";
import { getCallUrl, getGeneralWhatsAppUrl, getCustomWhatsAppUrl } from "../utils/whatsapp";

interface LocationContactProps {
  config: BusinessConfig;
}

export const LocationContact: React.FC<LocationContactProps> = ({ config }) => {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSubject, setFormSubject] = useState("Bridal / Wedding Enquiry");
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) {
      setFormError("Please enter your name and contact phone number.");
      return;
    }
    setFormError("");
    setFormSuccess(true);

    // Format query for WhatsApp lead generation
    const preparedMessage = `Hello Verma Jewellers! My name is ${formName.trim()} (Phone: ${formPhone.trim()}). I am enquiring regarding: ${formSubject}. ${formMessage.trim() ? `Message: ${formMessage.trim()}` : "Please contact me with more information."}`;

    // Open WhatsApp with prefilled message
    const waUrl = getCustomWhatsAppUrl(preparedMessage, config.rawPhone);
    window.open(waUrl, "_blank");
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-[#E8D8B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8E6C2D] mb-2">
            Showroom & Inquiries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] mb-3">
            Visit Verma Jewellers
          </h2>
          <p className="text-base sm:text-lg text-[#8E6C2D] font-medium">
            वर्मा ज्वैलर्स – खास बाज़ार, खड़गपुर, बिहार
          </p>
          <div className="w-16 h-0.5 bg-[#C9A44C] mx-auto mt-4" />
        </div>

        {/* 2-Column Main Layout: Store Information & Contact/Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Business Details & Timing Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Main Store Address Card */}
            <div className="bg-white rounded-xl p-8 border border-[#E8D8B5] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#C9A44C]/40 flex items-center justify-center text-[#8E6C2D] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#151515]">
                    {config.name}
                  </h3>
                  <p className="text-xs text-[#8E6C2D] font-medium mb-3">
                    {config.hindiName}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed font-normal">
                    {config.address}
                  </p>
                  <p className="text-xs text-stone-500 mt-2 font-mono">
                    Plus Code: {config.plusCode}
                  </p>
                </div>
              </div>

              {/* Verified Services Strip */}
              <div className="mt-6 pt-5 border-t border-[#F2EDE2] grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                  <ShoppingBag className="w-4 h-4 text-[#C9A44C]" />
                  <span>In-store Shopping</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                  <Truck className="w-4 h-4 text-[#C9A44C]" />
                  <span>Delivery Available</span>
                </div>
              </div>

              {/* Action Buttons: Call Now, WhatsApp, Directions */}
              <div className="mt-6 pt-6 border-t border-[#F2EDE2] grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={getCallUrl(config.rawPhone)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#151515] text-[#FAF7F0] text-xs font-semibold hover:bg-stone-800 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A44C]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getGeneralWhatsAppUrl(config.rawPhone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-white border border-[#C9A44C] text-[#8E6C2D] text-xs font-semibold hover:bg-[#FAF7F0] transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Store Opening Hours Card (Editable) */}
            <div className="bg-white rounded-xl p-6 border border-[#E8D8B5] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#8E6C2D]" />
                <h3 className="font-serif text-lg font-bold text-[#151515]">
                  Store Opening Hours
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center justify-between py-1.5 border-b border-[#F2EDE2]">
                  <span className="font-medium">Monday – Sunday</span>
                  <span className="font-semibold text-[#151515]">
                    10:00 AM – 8:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#F2EDE2]">
                  <span className="font-medium">Festival Schedules</span>
                  <span className="text-stone-500">
                    Extended festive hours during Diwali & Dhanteras
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500 mt-4 italic">
                *Note: Timings can be customized by the owner via the Store Settings panel.
              </p>
            </div>

            {/* Interactive Map Visual */}
            <div className="bg-[#151515] text-white rounded-xl p-6 border border-[#C9A44C]/30 overflow-hidden relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A44C]" />
                  <span className="text-xs font-bold text-stone-200">
                    Kharagpur, Bihar · 811213
                  </span>
                </div>
                <span className="text-[11px] text-[#C9A44C] font-mono">
                  4HF2+9R Kharagpur
                </span>
              </div>
              <p className="text-xs text-stone-300 mb-4">
                Located centrally in Khas Bazar, Raipura Haveli. Easily accessible from main bazaar thoroughfares with parking assistance available nearby.
              </p>
              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded bg-[#C9A44C] text-[#151515] font-semibold text-xs hover:bg-[#d4af37] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps Application</span>
              </a>
            </div>
          </div>

          {/* Right Column: Customer Enquiry Form (Dispatches direct WhatsApp lead) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl p-8 border border-[#E8D8B5] shadow-xs">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#151515] mb-1">
                  Send a Direct Jewellery Enquiry
                </h3>
                <p className="text-xs text-stone-600">
                  Fill in your requirements below. Our team connects immediately via WhatsApp or phone.
                </p>
              </div>

              {formError && (
                <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {formSuccess && (
                <div className="mb-4 p-3 rounded bg-green-50 border border-green-200 text-xs text-green-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-green-600" />
                  <span>Enquiry created! WhatsApp chat window opened to contact Verma Jewellers directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C] text-[#151515]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C] text-[#151515]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C] text-[#151515]"
                  >
                    <option value="Bridal / Wedding Jewellery">Bridal / Wedding Jewellery</option>
                    <option value="Gold Necklace Sets">Gold Necklace Sets</option>
                    <option value="Bangles & Kadas">Bangles & Kadas</option>
                    <option value="Daily Wear & Rings">Daily Wear & Rings</option>
                    <option value="Festive / Gifting Collection">Festive / Gifting Collection</option>
                    <option value="In-Store Visit Appointment">In-Store Visit Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message / Specific Design Request (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe the design style, preferred celebration date, or any specific questions..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-[#FAF7F0] border border-[#E8D8B5] focus:outline-none focus:border-[#C9A44C] text-[#151515] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#25D366] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#20ba59] transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-stone-400 mt-2 text-center">
                    Instant response during store opening hours (10:00 AM – 8:00 PM).
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
