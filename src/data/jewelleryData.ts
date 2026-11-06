export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarText: string;
}

export interface ProductItem {
  id: string;
  name: string;
  hindiName?: string;
  category: string;
  priceDisplay?: string; // Editable placeholder as specified
  image: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}

export interface CollectionCategory {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  image: string;
  itemCountNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface BusinessConfig {
  name: string;
  hindiName: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  rawPhone: string;
  plusCode: string;
  services: string[];
  timings: string;
  googleReviewUrl: string;
  googleMapsDirectionsUrl: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const INITIAL_BUSINESS_CONFIG: BusinessConfig = {
  name: "Verma Jewellers",
  hindiName: "वर्मा ज्वैलर्स",
  category: "Jewellery Shop / Costume Jewellery Shop",
  rating: 5.0,
  reviewCount: 87,
  address: "Khas Bazar, Raipura Haveli, Kharagpur, Bihar 811213, India",
  phone: "+91 93086 47129",
  rawPhone: "919308647129",
  plusCode: "4HF2+9R Kharagpur, Bihar",
  services: ["In-store Shopping", "Delivery"],
  timings: "Monday – Sunday: 10:00 AM – 8:00 PM (Editable store hours)",
  googleReviewUrl: "https://www.google.com/maps/place/Verma+jewellers/@25.1234972,86.5520758,17z/data=!4m13!1m2!2m1!1sjewellery+shop+near+me!3m9!1s0x39f1976aa0b59753:0x2fdd274f410faa72!8m2!3d25.1234972!4d86.5520758!10e5!14m1!1BCgIgAQ!15sChZqZXdlbGxlcnkgc2hvcCBuZWFyIG1lIgOQAQFaGCIWamV3ZWxsZXJ5IHNob3AgbmVhciBtZZIBFGNvc3R1bWVfamV3ZWxyeV9zaG9w4AEA!16s%2Fg%2F11f5yg4t42",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Verma+jewellers/@25.1234972,86.5520758,17z/data=!4m13!1m2!2m1!1sjewellery+shop+near+me!3m9!1s0x39f1976aa0b59753:0x2fdd274f410faa72!8m2!3d25.1234972!4d86.5520758!10e5!14m1!1BCgIgAQ!15sChZqZXdlbGxlcnkgc2hvcCBuZWFyIG1lIgOQAQFaGCIWamV3ZWxsZXJ5IHNob3AgbmVhciBtZZIBFGNvc3R1bWVfamV3ZWxyeV9zaG9w4AEA!16s%2Fg%2F11f5yg4t42",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Alish",
    rating: 5.0,
    date: "Google Verified Review",
    comment:
      "They did a great job!! I loved the finishing of jewellery. The shopkeeper was very humble and trustworthy. The variety of designs was vast and beautiful.",
    verified: true,
    avatarText: "A",
  },
  {
    id: "rev-2",
    name: "Prince Arya",
    rating: 5.0,
    date: "Google Verified Review",
    comment: "आज मैं होलसेल रेट पर गोल्ड की खरीदारी किया। Nice price Verma Ji!",
    verified: true,
    avatarText: "P",
  },
  {
    id: "rev-3",
    name: "Mouli Nadhan",
    rating: 5.0,
    date: "Google Verified Review",
    comment: "Good shop.",
    verified: true,
    avatarText: "M",
  },
];

export const CATEGORIES: CollectionCategory[] = [
  {
    id: "traditional",
    name: "Traditional Jewellery",
    hindiName: "पारंपरिक आभूषण",
    description: "Heritage-inspired ornate ornaments crafted with timeless cultural motifs and artistic detailing.",
    image: "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg",
  },
  {
    id: "bridal",
    name: "Bridal Jewellery",
    hindiName: "दुल्हन के गहने",
    description: "Opulent wedding choker sets, matching jhumkas, and maang tikkas for your most auspicious celebration.",
    image: "/src/assets/images/product_bridal_choker_1793971587228.jpg",
  },
  {
    id: "gold",
    name: "Gold Jewellery",
    hindiName: "सोने के आभूषण",
    description: "Exquisite gold creations featuring filigree craftsmanship, temple carvings, and radiant finishes.",
    image: "/src/assets/images/product_gold_necklace_1793971588314.jpg",
  },
  {
    id: "earrings",
    name: "Earrings",
    hindiName: "झुमके और कान की बालियां",
    description: "Intricately carved jhumkis, chandbalis, drop earrings, and lightweight daily studs.",
    image: "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    hindiName: "हार एवं चोकर",
    description: "From regal layered rani haars to elegant minimalist chains with gemstone centerpieces.",
    image: "/src/assets/images/product_gold_necklace_1793971588314.jpg",
  },
  {
    id: "bangles",
    name: "Bangles",
    hindiName: "कंगन और चूड़ियां",
    description: "Handcrafted kadas, antique carved bangles, and festive wrist wear with royal patterns.",
    image: "/src/assets/images/product_gold_bangles_1793971587771.jpg",
  },
  {
    id: "rings",
    name: "Rings",
    hindiName: "अंगूठियां",
    description: "Floral cocktail rings, statement solitaire designs, and classic daily bands.",
    image: "/src/assets/images/product_gold_necklace_1793971588314.jpg",
  },
  {
    id: "daily-wear",
    name: "Daily Wear Jewellery",
    hindiName: "दैनिक पहनने के गहने",
    description: "Lightweight, comfortable, and durable designs crafted for everyday elegance.",
    image: "/src/assets/images/product_gold_bangles_1793971587771.jpg",
  },
  {
    id: "party-wear",
    name: "Party Wear Jewellery",
    hindiName: "पार्टी वियर आभूषण",
    description: "Dazzling statement pieces with gemstone sparkle tailored for receptions and evening galas.",
    image: "/src/assets/images/product_bridal_choker_1793971587228.jpg",
  },
  {
    id: "fashion",
    name: "Fashion Jewellery",
    hindiName: "फैशन वियर आभूषण",
    description: "Trendsetting costume and designer ornaments with contemporary flair and affordable elegance.",
    image: "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg",
  },
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    name: "Exquisite Handcrafted Bridal Gold Set",
    hindiName: "विशेष हस्तनिर्मित ब्राइडल सेट",
    category: "Bridal Jewellery",
    priceDisplay: "Price on Request",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RAJWc3a13iud-ApwQtk4A2Y7Z-JlsqTf1QaEnPfgbjUAel7JwwE0npCv41zu9Pg7N_01QSH5qGZ3Oj3zEUOVsKTst7tiMNopxScvX8FwGZzS2SIIS-KEAxeGLaem2Lkxp72Cs=w1200-h900-k-no",
    description:
      "Authentic bridal ensemble with traditional filigree work, matching earrings, and intricate gemstone detailing from Verma Jewellers showroom collection.",
    tags: ["Google Verified", "In-Store Available", "Bestseller"],
    featured: true,
  },
  {
    id: "prod-2",
    name: "Traditional Heritage Gold Rani Haar",
    hindiName: "पारंपरिक हेरिटेज रानी हार",
    category: "Traditional Jewellery",
    priceDisplay: "Price on Request",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QM0Sav4umcUOlvYsaa8gG9IzZM4dkkKkKtgC2lULDudM8Je9Ys6DzMKmFKGt2AS-dF3Visb9f3NgzBFEBcaqE9UYhRcV4QgTHO04EkZZwCXgMkB9HB90zZNxqkZnMSAmmafDOe=w1200-h1200-k-no",
    description:
      "Long layered royal rani haar adorned with heritage patterns and exquisite golden finishing, showcased at our Kharagpur showroom.",
    tags: ["Heritage", "Handcrafted", "Featured"],
    featured: true,
  },
  {
    id: "prod-3",
    name: "Royal Filigree Choker & Earring Suite",
    hindiName: "रॉयल फिलीग्री चोकर व झुमका",
    category: "Necklaces",
    priceDisplay: "Price on Request",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RdEt3mG1UEvcqyNqFkmtXzgdl1xcxAxlgJldxp6-lPHdM6T9Z_Vj-n2GsTB-Mw8To-rHefrDBCAa0fK09h4ZcrIE3SR4HcL-xDiXHyNjL-U89RLmqHJ4M3f_YcyrR796w_NJ2q=w1200-h1200-k-no",
    description:
      "Magnificent gold neckpiece accompanied by matching jhumkis, showcasing the signature finishing appreciated by customers.",
    tags: ["Wedding Special", "Necklaces"],
    featured: true,
  },
  {
    id: "prod-4",
    name: "Auspicious Festive Gold Ornaments",
    hindiName: "शुभ उत्सव स्वर्ण आभूषण",
    category: "Gold Jewellery",
    priceDisplay: "Price on Request",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ra7kd29a0SDQK3-m8oPnvAFs6kJ3hZPC_7yt4kUwQDhSSDl3NuoU0oO7-lm8Os_h7br7Rtf1e_hYa3W7Ltass4CgRu8zImJN1axA2HRN0ooXDUZmHwwA3jfGKZVn1GNjRheInhBw=w1200-h1200-k-no",
    description:
      "Pure festive gold articles, devotional pieces, and gifting jewellery specially prepared for auspicious family occasions.",
    tags: ["Festive Special", "Gold Art"],
    featured: true,
  },
  {
    id: "prod-5",
    name: "Verma Jewellers Boutique Showcase Collection",
    hindiName: "वर्मा ज्वैलर्स शोरूम कलेक्शन",
    category: "Party Wear Jewellery",
    priceDisplay: "Price on Request",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sm4VC5EFEBVG07nnNH_ZkmH7VSImw2QafXg4Sryyn7F5J_2LwdBneXww3ryd7nc9kG6wZW71zi4gLt6gJc816k_x_OaASmsewA6Bq5Ws8-DTz3rG19UJ07He4FrTB0qLe_tth-xg=w1200-h675-k-no",
    description:
      "Complete display of exclusive bangles, kadas, chokers, and designer sets currently showcased at our Khas Bazar showroom counters.",
    tags: ["Showroom Display", "In-Store Available"],
    featured: true,
  },
  {
    id: "prod-6",
    name: "Festive Blossom Statement Ring",
    hindiName: "उत्सव कॉकटेल रिंग",
    category: "Rings",
    priceDisplay: "Price on Request",
    image: "/src/assets/images/product_gold_necklace_1793971588314.jpg",
    description:
      "A bold yet graceful statement ring displaying radiating petal patterns with fine polish and adjustable comfortable band.",
    tags: ["Rings", "Party Wear"],
    featured: false,
  },
  {
    id: "prod-7",
    name: "Lightweight Daily Gold Chain & Pendant",
    hindiName: "डेली वियर पेंडेंट चेन",
    category: "Daily Wear Jewellery",
    priceDisplay: "Price on Request",
    image: "/src/assets/images/product_gold_necklace_1793971588314.jpg",
    description:
      "Subtle, resilient gold chain designed for daily office and casual wear, featuring a refined geometric pendant.",
    tags: ["Daily Wear", "Comfortable"],
    featured: false,
  },
  {
    id: "prod-8",
    name: "Grand Reception Diamond Cut Bangles",
    hindiName: "डायमंड कट पार्टी कंगन",
    category: "Party Wear Jewellery",
    priceDisplay: "Price on Request",
    image: "/src/assets/images/product_gold_bangles_1793971587771.jpg",
    description:
      "Glittering precision-cut facet bangles that catch evening indoor lights with maximum brilliance and allure.",
    tags: ["Party Wear", "Gala"],
    featured: false,
  },
  {
    id: "prod-9",
    name: "Contemporary Fusion Choker Set",
    hindiName: "फ्यूजन फैशन चोकर",
    category: "Fashion Jewellery",
    priceDisplay: "Price on Request",
    image: "/src/assets/images/product_bridal_choker_1793971587228.jpg",
    description:
      "Modern Indo-Western fusion necklace designed with sleek lines, pearl fringes, and versatile styling appeal for modern attire.",
    tags: ["Fashion", "Modern"],
    featured: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Bridal Choker & Jhumka Set",
    category: "Bridal",
    image: "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg",
    description: "Richly detailed Indian bridal wedding ornament set with royal crimson textile styling.",
  },
  {
    id: "gal-2",
    title: "Artisan Navratna Floral Necklace",
    category: "Necklaces",
    image: "/src/assets/images/product_gold_necklace_1793971588314.jpg",
    description: "Close-up macro craftsmanship on warm ivory stone pedestal.",
  },
  {
    id: "gal-3",
    title: "Embossed Heritage Kadas",
    category: "Bangles",
    image: "/src/assets/images/product_gold_bangles_1793971587771.jpg",
    description: "Detailed engraving of traditional peacock and floral border work.",
  },
  {
    id: "gal-4",
    title: "Peacock Choker Masterpiece",
    category: "Bridal",
    image: "/src/assets/images/product_bridal_choker_1793971587228.jpg",
    description: "Intricate filigree and pearl hangings displayed on royal velvet.",
  },
  {
    id: "gal-5",
    title: "Verma Jewellers Showroom Interior",
    category: "Store",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sm4VC5EFEBVG07nnNH_ZkmH7VSImw2QafXg4Sryyn7F5J_2LwdBneXww3ryd7nc9kG6wZW71zi4gLt6gJc816k_x_OaASmsewA6Bq5Ws8-DTz3rG19UJ07He4FrTB0qLe_tth-xg=w1200-h675-k-no",
    description: "Authentic showroom interior photograph of Verma Jewellers in Khas Bazar, Raipura Haveli, Kharagpur.",
  },
  {
    id: "gal-6",
    title: "Festive Gold Collection Showcase",
    category: "Festive",
    image: "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg",
    description: "Traditional festival celebratory arrangements with radiant gold luster.",
  },
];

export const FESTIVE_COLLECTIONS = [
  {
    id: "fest-1",
    title: "Diwali Special Collection",
    hindiTitle: "दीपावली विशेष संग्रह",
    subtitle: "Auspicious gold and gemstone ornaments to illuminate your home and festivities.",
    image: "/src/assets/images/product_gold_necklace_1793971588314.jpg",
    features: ["Laxmi-Ganesh gold coins & charms", "Radiant festive necklaces", "Special festival gifting ornaments"],
  },
  {
    id: "fest-2",
    title: "Wedding Season Collection",
    hindiTitle: "शुभ विवाह संग्रह",
    subtitle: "Complete bridal sets, matha pattis, and heirloom bangles crafted for brides and families.",
    image: "/src/assets/images/product_bridal_choker_1793971587228.jpg",
    features: ["Grand bridal chokers", "Matching jhumka & tika sets", "Traditional mangalsutras"],
  },
  {
    id: "fest-3",
    title: "Festive Jewellery & Puja Ornaments",
    hindiTitle: "पूजा व उत्सव आभूषण",
    subtitle: "Sacred designs, lightweight temple jewellery, and auspicious silver & gold articles.",
    image: "/src/assets/images/hero_bridal_jewellery_1793971586733.jpg",
    features: ["Temple motifs", "Chhath & Teej traditional picks", "Sacred devotional designs"],
  },
  {
    id: "fest-4",
    title: "Party Wear & Reception Collection",
    hindiTitle: "पार्टी वियर संग्रह",
    subtitle: "Glistening statement bangles, cocktail rings, and modern evening wear sets.",
    image: "/src/assets/images/product_gold_bangles_1793971587771.jpg",
    features: ["High-sparkle diamond cuts", "Statement cocktail rings", "Contemporary party chokers"],
  },
];
