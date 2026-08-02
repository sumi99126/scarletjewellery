import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ProductCategory, Currency } from '../types/jewelry';
import { MOCK_PRODUCTS, CURRENCY_RATES } from '../data/mockJewelryData';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  activeCategory: ProductCategory;
  searchQuery: string;
  selectedCurrency: Currency;
  quickViewProduct: Product | null;
  currentPage: 'home' | 'shop';
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isBookingOpen: boolean;
  isSearchOpen: boolean;
  toastMessage: string | null;
  
  // Actions
  setActiveCategory: (cat: ProductCategory) => void;
  setCurrentPage: (page: 'home' | 'shop') => void;
  setSearchQuery: (query: string) => void;
  setSelectedCurrency: (curr: Currency) => void;
  addToCart: (product: Product, size?: string, giftWrapped?: boolean) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  setQuickViewProduct: (product: Product | null) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsBookingOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  showToast: (msg: string) => void;
  formatPrice: (priceUSD: number) => string;
  cartTotalUSD: number;
  cartItemCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('scarlet_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('scarlet_wishlist');
    return saved ? JSON.parse(saved) : ['scarlet-01', 'scarlet-03'];
  });
  
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [currentPage, setCurrentPage] = useState<'home' | 'shop'>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('PKR');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('scarlet_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('scarlet_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product: Product, size?: string, giftWrapped: boolean = false) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.selectedRingSize === size);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedRingSize === size
            ? { ...item, quantity: item.quantity + 1, giftWrapped: giftWrapped || item.giftWrapped }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedRingSize: size, giftWrapped }];
    });
    showToast(`Added "${product.name}" to your Haute Joaillerie bag.`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from bag.');
  };

  const updateCartQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from your private wishlist.');
        return prev.filter((id) => id !== productId);
      } else {
        const prod = products.find((p) => p.id === productId);
        showToast(`Saved "${prod?.name || 'Item'}" to your private wishlist.`);
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const formatPrice = (priceUSD: number) => {
    const config = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES.USD;
    const converted = Math.round(priceUSD * config.rateFromUSD);
    return `${config.symbol}${converted.toLocaleString()}`;
  };

  const cartTotalUSD = cart.reduce((total, item) => total + item.product.priceUSD * item.quantity, 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        activeCategory,
        searchQuery,
        selectedCurrency,
        quickViewProduct,
        currentPage,
        isCartOpen,
        isWishlistOpen,
        isBookingOpen,
        isSearchOpen,
        toastMessage,
        setActiveCategory,
        setCurrentPage,
        setSearchQuery,
        setSelectedCurrency,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        setQuickViewProduct,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsBookingOpen,
        setIsSearchOpen,
        showToast,
        formatPrice,
        cartTotalUSD,
        cartItemCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
