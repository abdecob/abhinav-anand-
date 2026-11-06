/**
 * Helper utilities for WhatsApp & Phone generation
 */

export const STORE_PHONE = "+91 93086 47129";
export const STORE_RAW_PHONE = "919308647129";

export function getGeneralWhatsAppUrl(customPhone?: string): string {
  const phone = customPhone || STORE_RAW_PHONE;
  const message = "Hello Verma Jewellers! I am interested in your jewellery collection. Please share more details.";
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string, category?: string, customPhone?: string): string {
  const phone = customPhone || STORE_RAW_PHONE;
  const message = `Hello Verma Jewellers! I would like to know more about ${productName}${category ? ` (${category})` : ""}. Please share its price and availability.`;
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
}

export function getCustomWhatsAppUrl(customMessage: string, customPhone?: string): string {
  const phone = customPhone || STORE_RAW_PHONE;
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(customMessage)}`;
}

export function getCallUrl(customPhone?: string): string {
  const phone = customPhone || STORE_RAW_PHONE;
  return `tel:+${phone.replace(/[^0-9]/g, "")}`;
}
