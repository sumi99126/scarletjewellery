import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ArrowRight, ShoppingBag } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { 
    products, 
    activeCategory, 
    setActiveCategory,
    addToCart,
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct,
    formatPrice 
  } = useShop();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Filter products by active category
  const filteredProducts = products.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Duplicate products array for smooth infinite slide loop
  const extendedProducts = filteredProducts.length > 0 
    ? [...filteredProducts, ...filteredProducts, ...filteredProducts]
    : [];

  // Continuous auto-sliding timer every 3 seconds
  useEffect(() => {
    if (filteredProducts.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [filteredProducts.length, isPaused]);

  // Seamless reset when completing a loop pass
  useEffect(() => {
    if (filteredProducts.length > 0 && currentIndex >= filteredProducts.length) {
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 850); // Reset after 0.8s slide transition finishes

      return () => clearTimeout(resetTimeout);
    }
    return undefined;
  }, [currentIndex, filteredProducts.length]);

  return (
    <section 
      id="catalog-section" 
      style={{ 
        padding: '3.5rem 1.5rem 4rem 1.5rem', 
        backgroundColor: '#F5EEE4', 
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container" style={{ maxWidth: '1360px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        {/* Section Sub-Tag & Header Row */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              color: '#A38349',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.4rem',
            }}
          >
            BEST SELLERS
          </span>

          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-end', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap',
              gap: '1.2rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
                fontWeight: 600,
                color: '#0F3E36',
                lineHeight: 1.15,
              }}
            >
              Our Most Loved Pieces
            </h2>

            {/* Right: View All Products Link */}
            <a
              href="#catalog-section"
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory('all');
              }}
              style={{
                color: '#A38349',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'opacity 0.2s ease',
              }}
              className="view-all-link"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* 5 Products in 1 Row - Real Visual Sliding Track Carousel */}
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.1rem',
              transform: `translateX(calc(-${currentIndex} * (20% + 0.22rem)))`,
              transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            }}
            className="lumiere-slider-track"
          >
            {extendedProducts.map((product, idx) => {
              const isSaved = isInWishlist(product.id);
              return (
                <div
                  key={`${product.id}-${idx}`}
                  style={{
                    flex: '0 0 calc((100% - 4 * 1.1rem) / 5)',
                    minWidth: 'calc((100% - 4 * 1.1rem) / 5)',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  className="lumiere-product-card"
                  onClick={() => setQuickViewProduct(product)}
                >
                  {/* White Luxury Image Pod */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      height: '245px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.4rem',
                      position: 'relative',
                      overflow: 'hidden',
                      marginBottom: '0.9rem',
                      border: '1px solid rgba(163, 131, 73, 0.25)',
                      boxShadow: '0 8px 25px rgba(15, 62, 54, 0.05)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="lumiere-img-box"
                  >
                    {/* Outline Heart Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: 'rgba(245, 238, 228, 0.85)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSaved ? '#C81E1E' : '#0F3E36',
                        cursor: 'pointer',
                        zIndex: 2,
                        transition: 'all 0.2s ease',
                      }}
                      className="heart-icon-btn"
                      title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart size={18} fill={isSaved ? '#C81E1E' : 'none'} strokeWidth={1.8} />
                    </button>

                    {/* Primary Product Image */}
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      className="product-img"
                    />

                    {/* Quick Add Hover Overlay Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(50px)',
                        background: 'linear-gradient(135deg, #092B24 0%, #0F3E36 100%)',
                        color: '#FFFFFF',
                        border: '1px solid #A38349',
                        padding: '0.45rem 1.1rem',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        boxShadow: '0 4px 15px rgba(15, 62, 54, 0.25)',
                        opacity: 0,
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 3,
                      }}
                      className="quick-add-btn"
                    >
                      <ShoppingBag size={12} />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  {/* Product Info underneath */}
                  <h3
                    style={{
                      fontSize: '0.92rem',
                      color: '#0F3E36',
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      marginBottom: '0.2rem',
                      lineHeight: 1.25,
                    }}
                    className="product-name-heading"
                  >
                    {product.name}
                  </h3>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      color: '#5A6B63',
                      fontFamily: 'var(--font-sans)',
                      marginBottom: '0.35rem',
                      display: 'block',
                    }}
                  >
                    {product.subtitle}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span
                      style={{
                        fontSize: '0.98rem',
                        color: '#0F3E36',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                      }}
                    >
                      {formatPrice(product.priceUSD)}
                    </span>

                    {/* Star Rating & Review Count */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span style={{ color: '#A38349', fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                        ★★★★★
                      </span>
                      <span style={{ color: '#72847C', fontSize: '0.7rem' }}>
                        ({product.reviewsCount || 48})
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .lumiere-img-box:hover {
          transform: translateY(-5px);
          border-color: #A38349 !important;
          box-shadow: 0 12px 30px rgba(15, 62, 54, 0.12);
        }
        .lumiere-img-box:hover .product-img {
          transform: scale(1.08);
        }
        .lumiere-img-box:hover .quick-add-btn {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        .lumiere-product-card:hover .product-name-heading {
          color: #A38349 !important;
        }
        .heart-icon-btn:hover {
          transform: scale(1.12);
          background-color: #FFFFFF !important;
        }
        .view-all-link:hover {
          opacity: 0.8;
        }
        @media (max-width: 1150px) {
          .lumiere-slider-track > div {
            flex: 0 0 calc((100% - 2 * 1.1rem) / 3) !important;
            min-width: calc((100% - 2 * 1.1rem) / 3) !important;
          }
        }
        @media (max-width: 640px) {
          .lumiere-slider-track > div {
            flex: 0 0 calc((100% - 1.1rem) / 2) !important;
            min-width: calc((100% - 1.1rem) / 2) !important;
          }
        }
      `}</style>
    </section>
  );
};
