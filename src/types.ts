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
