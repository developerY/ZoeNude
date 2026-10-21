export interface Shade {
  id: string;
  name: string;
  code: string;
  hex: string;
  undertone: 'Warm' | 'Neutral' | 'Cool' | 'Olive';
  spectrum: 'Fair' | 'Light-Med' | 'Tan' | 'Deep';
  description: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription: string;
  keyIngredients: string[];
  benefits: string[];
  image: string;
  shades: Shade[];
  isBestSeller?: boolean;
  volume?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  shade: Shade;
  quantity: number;
  image: string;
  category: string;
}

export interface Pillar {
  number: string;
  tag: string;
  badge?: string;
  title: string;
  description: string;
  extendedStory: string;
  image: string;
  isDarkCard?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  shadeWorn: string;
  quote: string;
  rating: number;
  avatar: string;
  skinType?: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  author: string;
  image: string;
  tag: string;
  likes: number;
}

export type JournalCategory =
  | 'ALL'
  | 'APPLICATION TIPS'
  | 'BIOMIMETIC SCIENCE'
  | 'LIVING RITUALS'
  | 'SHADE & COLOR SCIENCE'
  | 'SKIN PREP';

export type SkinConcern =
  | 'ALL'
  | 'DEHYDRATED_BARRIER'
  | 'ROSACEA_FLUSH'
  | 'MATURE_LINES'
  | 'TEXTURE_PORES'
  | 'DULL_PIGMENT';

export type SkinClimate =
  | 'ALL'
  | 'ARID_COLD'
  | 'HUMID_HEAT'
  | 'TEMPERATE'
  | 'URBAN_POLLUTION';

export interface ClinicalStudyMetric {
  metric: string;
  label: string;
  context: string;
  duration: string;
  verifiedBy: string;
}

export interface RoutineCapsule {
  bundleTitle: string;
  savingsNote: string;
  discountPercent: number;
  productIds: string[];
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: JournalCategory;
  categoryLabel: string;
  publishedDate: string; // e.g. 'March 2027'
  readTime: string; // e.g. '4 MIN READ'
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coReviewer?: {
    name: string;
    credentials: string;
    institution: string;
  };
  heroImage: string;
  excerpt: string;
  atelierRule: string; // The core memorable beauty tip rule
  contentParagraphs: string[];
  keyTips: string[];
  scientificNote?: string;
  clinicalStudy?: ClinicalStudyMetric;
  routineCapsule?: RoutineCapsule;
  skinConcerns?: SkinConcern[];
  climateFit?: SkinClimate[];
  videoClip?: {
    poster: string;
    title: string;
    duration: string;
  };
  pullQuote?: {
    text: string;
    attribution: string;
  };
  steps?: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  relatedProductIds: string[];
}

export interface QuickBeautyTip {
  id: string;
  title: string;
  tagline: string;
  tip: string;
  category: string;
  technique: string;
  skinConcern?: SkinConcern;
}

export interface AdvisoryExpert {
  id: string;
  name: string;
  title: string;
  credentials: string;
  institution: string;
  location: string;
  portrait: string;
  focusArea: string;
  quote: string;
  verifiedBadges: string[];
}

export interface IngredientCodexEntry {
  id: string;
  inciName: string;
  commonName: string;
  origin: string;
  biomimeticRole: string;
  replacesSynthetic: string;
  clinicalBenefit: string;
  skinAffinity: string;
  featuredInProducts: string[];
}

export interface MasterclassReel {
  id: string;
  title: string;
  subtitle: string;
  artist: string;
  artistRole: string;
  duration: string;
  thumbnail: string;
  viewsCount: string;
  techniqueBadge: string;
  stepsSummary: string;
  matchedProductId: string;
}

export interface ConsultationBooking {
  id: string;
  clientName: string;
  clientEmail: string;
  date: string;
  timeSlot: string;
  atelierLocation: 'Paris Ateliers (Rue Saint-Honoré)' | 'New York Atelier (SoHo)' | 'Virtual Global Concierge';
  skinConcern: string;
  shadeAssistance: boolean;
  notes?: string;
}

