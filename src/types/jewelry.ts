export type ProductCategory = 
  | 'all' 
  | 'haute-joaillerie' 
  | 'rings' 
  | 'necklaces' 
  | 'earrings' 
  | 'bracelets' 
  | 'watches';

export type ProductTag = 
  | 'bestseller' 
  | 'new-arrival' 
  | 'rare-gem' 
  | 'bridal' 
  | 'limited-edition'
  | 'haute-joaillerie';

export interface ProductSpecifications {
  metal: string;
  gemstone?: string;
  caratWeight?: string;
  cut?: string;
  clarity?: string;
  origin?: string;
  warranty?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  priceUSD: number;
  category: ProductCategory;
  tag?: ProductTag;
  primaryImage: string;
  hoverImage: string;
  images: string[];
  description: string;
  specifications: ProductSpecifications;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  isFeatured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedRingSize?: string;
  giftWrapped: boolean;
  giftNote?: string;
}

export type Currency = 'PKR' | 'USD' | 'EUR' | 'GBP' | 'AED';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rateFromUSD: number;
}

export interface AppointmentRequest {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  boutiqueLocation: string;
  interestCategory: string;
  notes?: string;
}
