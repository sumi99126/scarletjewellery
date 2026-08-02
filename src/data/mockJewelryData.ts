import { Product, CurrencyConfig } from '../types/jewelry';

export const CURRENCY_RATES: Record<string, CurrencyConfig> = {
  PKR: { code: 'PKR', symbol: 'Rs. ', rateFromUSD: 1 },
  USD: { code: 'USD', symbol: '$', rateFromUSD: 0.0036 },
  EUR: { code: 'EUR', symbol: '€', rateFromUSD: 0.0033 },
  GBP: { code: 'GBP', symbol: '£', rateFromUSD: 0.0028 },
  AED: { code: 'AED', symbol: 'AED ', rateFromUSD: 0.013 },
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'veloura-01',
    name: 'Queen Solitaire Ring',
    subtitle: 'Gold Plated Zircon Solitaire Ring',
    priceUSD: 4850,
    category: 'rings',
    tag: 'bestseller',
    primaryImage: '/img/queen_ring.png',
    hoverImage: '/img/queen_ring.png',
    images: ['/img/queen_ring.png'],
    description: 'An iconic signature gold plated solitaire ring featuring a brilliant pear-cut zircon stone.',
    specifications: {
      metal: 'Gold Plated Stainless Steel',
      gemstone: 'AAA+ Cubic Zirconia',
      caratWeight: '1.5ct eq',
      cut: 'Brilliant Round Cut',
      clarity: 'VVS Finish',
      origin: 'Scarlet Atelier',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 5.0,
    reviewsCount: 48,
    isFeatured: true
  },
  {
    id: 'veloura-02',
    name: 'laura Chain Bracelet',
    subtitle: 'Gold Bold Chain Link Bracelet',
    priceUSD: 3450,
    category: 'bracelets',
    tag: 'bestseller',
    primaryImage: '/img/laura_bracelet.png',
    hoverImage: '/img/laura_bracelet.png',
    images: ['/img/laura_bracelet.png'],
    description: 'Architectural snake chain link bracelet crafted in high-polish gold plating.',
    specifications: {
      metal: 'Gold Plated Alloy',
      gemstone: 'None',
      caratWeight: 'N/A',
      cut: 'Custom Chain Link',
      clarity: 'High Polish',
      origin: 'Scarlet Atelier',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 4.9,
    reviewsCount: 32,
    isFeatured: true
  },
  {
    id: 'veloura-03',
    name: 'Teardrop Diamond Necklace',
    subtitle: 'Gold Chain Teardrop Pendant',
    priceUSD: 6800,
    category: 'necklaces',
    tag: 'new-arrival',
    primaryImage: '/img/diamond_necklace.png',
    hoverImage: '/img/diamond_necklace.png',
    images: ['/img/diamond_necklace.png'],
    description: 'Minimalist gold chain supporting a pear-shaped teardrop crystal pendant.',
    specifications: {
      metal: 'Gold Plated Stainless Steel',
      gemstone: 'Pear-Cut Zircon',
      caratWeight: '1.2ct eq',
      cut: 'Pear Cut',
      clarity: 'High Luster',
      origin: 'Scarlet Fine Vault',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 5.0,
    reviewsCount: 29,
    isFeatured: true
  },
  {
    id: 'veloura-04',
    name: 'Yuna Dainty Bracelet',
    subtitle: 'Dainty Gold Interlocking Link Wristlet',
    priceUSD: 2950,
    category: 'bracelets',
    tag: 'new-arrival',
    primaryImage: '/img/yuna_bracelet.png',
    hoverImage: '/img/yuna_bracelet.png',
    images: ['/img/yuna_bracelet.png'],
    description: 'Delicate gold link chain bracelet designed for everyday fashion layering.',
    specifications: {
      metal: 'Gold Plated Finish',
      gemstone: 'N/A',
      caratWeight: 'N/A',
      cut: 'Dainty Oval Links',
      clarity: 'High Luster',
      origin: 'Scarlet Collection',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 4.8,
    reviewsCount: 21,
    isFeatured: true
  },
  {
    id: 'veloura-05',
    name: 'Occa Hoop Earrings',
    subtitle: 'Yellow Gold Chunky Huggie Hoops',
    priceUSD: 2450,
    category: 'earrings',
    tag: 'bestseller',
    primaryImage: '/img/occa_earrings.png',
    hoverImage: '/img/occa_earrings.png',
    images: ['/img/occa_earrings.png'],
    description: 'Timeless thick gold hoop earrings offering a modern, minimalist chic silhouette.',
    specifications: {
      metal: 'Gold Plated Stainless Steel',
      gemstone: 'None',
      caratWeight: 'N/A',
      cut: 'Polished Smooth Curve',
      clarity: 'Mirror Finish',
      origin: 'Scarlet Atelier',
      warranty: 'Anti-Allergy & Anti-Tarnish'
    },
    inStock: true,
    rating: 4.9,
    reviewsCount: 54,
    isFeatured: true
  },
  {
    id: 'watch-01',
    name: 'Glossy Gold Steel Watch',
    subtitle: 'Two-Tone Gold Steel & Diamond Dial',
    priceUSD: 9500,
    category: 'watches',
    tag: 'bestseller',
    primaryImage: '/img/glossy_watch.png',
    hoverImage: '/img/glossy_watch.png',
    images: ['/img/glossy_watch.png'],
    description: 'Elegant two-tone gold and stainless steel wristwatch presented in a luxury gift box.',
    specifications: {
      metal: 'Gold Plated Stainless Steel',
      gemstone: 'Crystal Markers',
      caratWeight: 'N/A',
      cut: 'Oval Bezel',
      clarity: 'Mirror Polish',
      origin: 'Scarlet Atelier',
      warranty: '1 Year Warranty'
    },
    inStock: true,
    rating: 5.0,
    reviewsCount: 48,
    isFeatured: true
  },
  {
    id: 'watch-02',
    name: 'Emerald Green Oval Watch',
    subtitle: 'Gold Finish & Emerald Green Dial',
    priceUSD: 8800,
    category: 'watches',
    tag: 'new-arrival',
    primaryImage: '/img/emerald_oval_watch.png',
    hoverImage: '/img/emerald_oval_watch.png',
    images: ['/img/emerald_oval_watch.png'],
    description: 'Stunning vintage emerald green dial wristwatch encased in high-polish gold with gift box.',
    specifications: {
      metal: 'Gold Plated Finish',
      gemstone: 'Emerald Green Dial',
      caratWeight: 'N/A',
      cut: 'Oval Dial',
      clarity: 'High Luster',
      origin: 'Scarlet Vault',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 5.0,
    reviewsCount: 52,
    isFeatured: true
  },
  {
    id: 'watch-03',
    name: 'Silver Octagonal Diamond Watch',
    subtitle: 'Octagonal Bezel & Diamond Markers',
    priceUSD: 12500,
    category: 'watches',
    tag: 'bestseller',
    primaryImage: '/img/silver_octagonal_watch.png',
    hoverImage: '/img/silver_octagonal_watch.png',
    images: ['/img/silver_octagonal_watch.png'],
    description: 'Architectural octagonal silver watch featuring sparkling diamond bezel markers.',
    specifications: {
      metal: 'Stainless Steel & Rhodium',
      gemstone: 'Crystal Bezel',
      caratWeight: '0.8ct eq',
      cut: 'Octagonal Bezel',
      clarity: 'VVS Gem Quality',
      origin: 'Scarlet Horology',
      warranty: '2 Year Guarantee'
    },
    inStock: true,
    rating: 4.9,
    reviewsCount: 38,
    isFeatured: true
  },
  {
    id: 'watch-04',
    name: 'Royal Datejust Gold Watch',
    subtitle: 'Gold Mesh Watch & Diamond Bezel',
    priceUSD: 14800,
    category: 'watches',
    tag: 'bestseller',
    primaryImage: '/img/rolex_gold_watch.png',
    hoverImage: '/img/rolex_gold_watch.png',
    images: ['/img/rolex_gold_watch.png'],
    description: 'Classic gold Datejust style wristwatch in signature green gift box.',
    specifications: {
      metal: 'Gold Plated Steel',
      gemstone: 'Crystal Markers',
      caratWeight: '1.0ct eq',
      cut: 'Round Bezel',
      clarity: 'High Polish',
      origin: 'Scarlet Atelier',
      warranty: '2 Year Warranty'
    },
    inStock: true,
    rating: 5.0,
    reviewsCount: 64,
    isFeatured: true
  },
  {
    id: 'watch-05',
    name: 'Swiss Oval Gold Watch',
    subtitle: 'Gold Mesh Bracelet & Black Dial',
    priceUSD: 11500,
    category: 'watches',
    tag: 'bestseller',
    primaryImage: '/img/luxury_watch.png',
    hoverImage: '/img/luxury_watch.png',
    images: ['/img/luxury_watch.png'],
    description: 'Sophisticated movement timepiece with black oval dial and gold mesh strap.',
    specifications: {
      metal: 'Gold Plated Steel',
      gemstone: 'Crystal Hour Markers',
      caratWeight: 'N/A',
      cut: 'Roman Numeral Dial',
      clarity: 'Hardened Glass',
      origin: 'Scarlet Horology',
      warranty: '2 Year Guarantee'
    },
    inStock: true,
    rating: 4.9,
    reviewsCount: 36,
    isFeatured: true
  },
  {
    id: 'veloura-06',
    name: 'Gold Bow Knot Ring',
    subtitle: 'Gold Plated Bow Ring in Gift Box',
    priceUSD: 2150,
    category: 'rings',
    tag: 'new-arrival',
    primaryImage: '/img/gold_bow_ring.png',
    hoverImage: '/img/gold_bow_ring.png',
    images: ['/img/gold_bow_ring.png'],
    description: 'Charming bow tie gold ring studded with delicate zircons in a white hexagonal box.',
    specifications: {
      metal: 'Gold Plated Steel',
      gemstone: 'Cubic Zirconia',
      caratWeight: '0.4ct eq',
      cut: 'Bow Design',
      clarity: 'High Luster',
      origin: 'Scarlet Atelier',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 4.9,
    reviewsCount: 37,
    isFeatured: true
  },
  {
    id: 'veloura-07',
    name: 'Emerald Pendant Set',
    subtitle: 'Emerald Necklace & Matching Earrings',
    priceUSD: 8900,
    category: 'necklaces',
    tag: 'bestseller',
    primaryImage: '/img/emerald_set_box.png',
    hoverImage: '/img/emerald_set_box.png',
    images: ['/img/emerald_set_box.png'],
    description: 'Royal emerald green round stone pendant necklace with matching halo stud earrings.',
    specifications: {
      metal: 'Gold Plated Finish',
      gemstone: 'Synthetic Emerald',
      caratWeight: '2.5ct eq',
      cut: 'Round Halo Cut',
      clarity: 'Deep Green',
      origin: 'Scarlet Collection',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 5.0,
    reviewsCount: 43,
    isFeatured: true
  },
  {
    id: 'veloura-08',
    name: 'Swan & Emerald Chains',
    subtitle: 'Dual Gold Pendant Chain Set',
    priceUSD: 5600,
    category: 'necklaces',
    tag: 'new-arrival',
    primaryImage: '/img/swan_emerald_necklaces.jpg',
    hoverImage: '/img/swan_emerald_necklaces.jpg',
    images: ['/img/swan_emerald_necklaces.jpg'],
    description: 'Gorgeous diamond swan pendant and emerald square pendant gold layered chains.',
    specifications: {
      metal: 'Gold Plated Chains',
      gemstone: 'Emerald & Zircons',
      caratWeight: '1.8ct eq',
      cut: 'Swan & Square Cut',
      clarity: 'VVS Finish',
      origin: 'Scarlet Atelier',
      warranty: 'Anti-Tarnish Guarantee'
    },
    inStock: true,
    rating: 4.8,
    reviewsCount: 29,
    isFeatured: true
  }
];

export const MOCK_CATEGORIES = [
  {
    id: 'all',
    name: 'All Collections',
    description: 'Explore the full Scarlet fashion jewelry collection',
    image: '/img/p3.png'
  },
  {
    id: 'rings',
    name: 'Gold Plated Rings',
    description: 'Solitaire & bow knot rings',
    image: '/img/queen_ring.png'
  },
  {
    id: 'necklaces',
    name: 'Necklaces & Sets',
    description: 'Pendants & emerald set creations',
    image: '/img/diamond_necklace.png'
  },
  {
    id: 'bracelets',
    name: 'Bracelet Stacks',
    description: 'Bold chain & dainty link bracelets',
    image: '/img/laura_bracelet.png'
  },
  {
    id: 'watches',
    name: 'Luxury Watches',
    description: 'Steel & gold mesh timepieces',
    image: '/img/glossy_watch.png'
  },
  {
    id: 'earrings',
    name: 'Earrings & Hoops',
    description: 'Chunky huggies & studs',
    image: '/img/occa_earrings.png'
  }
];
