export type Language = 'EN' | 'DE';

export type ProductId = 
  | 'milky-moon'
  | 'choco-dream'
  | 'mango-sunset'
  | 'pistachio-glow'
  | 'raspberry-velvet'
  | 'launch-box'
  | 'monthly-box'
  | 'samazing-scoop'
  | 'mixer'
  | 'protein-milk'
  | 'popsicle-maker'
  | 'complete-kit';

export interface NutritionInfo {
  per100g: {
    energyKcal: number;
    fat: number;
    saturates: number;
    carbs: number;
    sugars: number;
    protein: number;
    salt: number;
  };
  per50gWithWater: {
    energyKcal: number;
    fat: number;
    saturates: number;
    carbs: number;
    sugars: number;
    protein: number;
    salt: number;
  };
  per50gWithProteinMilk: {
    energyKcal: number;
    fat: number;
    saturates: number;
    carbs: number;
    sugars: number;
    protein: number;
    salt: number;
  };
}

export interface Product {
  id: ProductId;
  name: string;
  category: 'flavour' | 'bundle' | 'accessory' | 'subscription';
  tagline: { EN: string; DE: string };
  description: { EN: string; DE: string };
  price: number;
  originalPrice?: number;
  image: string;
  galleryImages: string[];
  isFlavour?: boolean;
  proteinGrams?: number;
  caloriesWater?: number;
  preparedVolume?: string;
  ingredients?: { EN: string; DE: string };
  allergens?: { EN: string; DE: string };
  nutrition?: NutritionInfo;
  prepSteps?: { title: { EN: string; DE: string }; desc: { EN: string; DE: string } }[];
  inStock: boolean;
}

export interface Recipe {
  id: string;
  title: { EN: string; DE: string };
  flavourBase: ProductId;
  prepTime: string;
  servings: number;
  image: string;
  ingredients: { item: { EN: string; DE: string }; grams: string }[];
  steps: { EN: string; DE: string }[];
  macros: {
    protein: string;
    calories: string;
    carbs: string;
    fat: string;
  };
  reelUrl?: string;
}

export interface WishlistItem {
  productId: ProductId;
  quantity: number;
  flavorSelections?: Record<string, number>; // For monthly box custom selection
  addedAt: string;
}

export interface PreOrderInterest {
  id: string;
  firstName: string;
  email: string;
  interestType: 'wishlist' | 'newsletter' | 'monthly_box' | 'complete_kit';
  items: WishlistItem[];
  marketingConsent: boolean;
  notes?: string;
  createdAt: string;
}

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  payload: Record<string, unknown>;
  timestamp: string;
}

export type ViewTab = 'home' | 'shop' | 'flavours' | 'recipes' | 'how-it-works' | 'about' | 'monthly-box';
