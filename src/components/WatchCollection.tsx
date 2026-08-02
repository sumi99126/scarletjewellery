import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types/jewelry';

export const WatchCollection: React.FC = () => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct,
    formatPrice,
    setActiveCategory 
  } = useShop();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Dedicated Real Watch Products List using user's uploaded images
  const watchProducts: Product[] = [
    {
      id: 'watch-01',
      name: 'Glossy Gold Steel Watch',
      subtitle: 'Two-Tone Gold Steel & Diamond Dial',
      priceUSD: 9500,
      category: 'watches',
      primaryImage: '/img/glossy_watch.png',
      hoverImage: '/img/glossy_watch.png',
      images: ['/img/glossy_watch.png'],
      description: 'Elegant two-tone gold and stainless steel wristwatch presented in a luxury gift box.',
      specifications: {
        metal: 'Gold Plated Steel',
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
      isFeatured: true,
    },
    {
      id: 'watch-02',
      name: 'Emerald Green Oval Watch',
      subtitle: 'Gold Finish & Emerald Green Dial',
      priceUSD: 8800,
      category: 'watches',
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
      isFeatured: true,
    },
    {
      id: 'watch-03',
      name: 'Silver Octagonal Diamond Watch',
      subtitle: 'Octagonal Bezel & Diamond Markers',
      priceUSD: 12500,
      category: 'watches',
      primaryImage: '/img/silver_octagonal_watch.png',
      hoverImage: '/img/silver_octagonal_watch.png',
      images: ['/img/silver_octagonal_watch.png'],
      description: 'Architectural octagonal silver watch featuring sparkling diamond bezel markers.',
      specifications: {
        metal: 'Stainless Steel & Rhodium',
        gemstone: 'Crystal Bezel',
        caratWeight: '0.8ct',
        cut: 'Octagonal Bezel',
        clarity: 'VVS Gem Quality',
        origin: 'Scarlet Precision',
        warranty: '2 Year Guarantee'
      },
      inStock: true,
      rating: 4.9,
      reviewsCount: 38,
      isFeatured: true,
    },
    {
      id: 'watch-04',
      name: 'Royal Watch Collection Tray',
      subtitle: 'Luxury Gold & Diamond Watch Set',
      priceUSD: 14800,
      category: 'watches',
      primaryImage: '/img/watch_tray.png',
      hoverImage: '/img/watch_tray.png',
      images: ['/img/watch_tray.png'],
      description: 'Exclusive royal presentation tray featuring gold timepieces and diamond leaf stacks.',
      specifications: {
        metal: 'Gold Plated Steel',
        gemstone: 'Cubic Zirconia',
        caratWeight: '3.5ct Total',
        cut: 'Multifaceted',
        clarity: 'High Polish',
        origin: 'Scarlet Atelier',
        warranty: 'Anti-Tarnish Guarantee'
      },
      inStock: true,
      rating: 5.0,
      reviewsCount: 64,
      isFeatured: true,
    },
    {
      id: 'watch-05',
      name: 'Swiss Oval Gold Watch',
      subtitle: 'Gold Mesh Bracelet & Black Dial',
      priceUSD: 11500,
      category: 'watches',
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
      isFeatured: true,
    },
  ];

  // Duplicate watch items for infinite auto-sliding
  const extendedWatches = [...watchProducts, ...watchProducts, ...watchProducts];

  // Auto-sliding interval every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless reset when loop finishes
  useEffect(() => {
    if (currentIndex >= watchProducts.length) {
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 850);

      return () => clearTimeout(resetTimeout);
    }
    return undefined;
  }, [currentIndex, watchProducts.length]);

  return (
    <section
      id="watch-collection-section"
      style={{
        backgroundColor: '#000000',
        padding: '3.5rem 1.5rem 4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        {/* Section Header Row */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              color: '#E6C687',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.4rem',
            }}
          >
            LUXURY TIMEPIECES
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
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              Signature Watch Collection
            </h2>

            {/* Right: View All Watches Link */}
            <a
              href="#watch-collection-section"
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory('watches');
              }}
              style={{
                color: '#E6C687',
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
              <span>VIEW ALL WATCHES</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* 5 Watch Product Cards in 1 Row - Visual Sliding Carousel */}
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.1rem',
              transform: `translateX(calc(-${currentIndex} * (20% + 0.22rem)))`,
              transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            }}
            className="watch-slider-track"
          >
            {extendedWatches.map((product, idx) => {
              const isSaved = isInWishlist(product.id);
              const isDarkImg = product.primaryImage !== '/img/p5.png';

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
                  className="watch-product-card"
                  onClick={() => setQuickViewProduct(product)}
                >
                  {/* Image Pod */}
                  <div
                    style={{
                      backgroundColor: isDarkImg ? '#070A08' : '#FFFFFF',
                      borderRadius: '16px',
                      height: '245px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: isDarkImg ? '0' : '1.2rem',
                      position: 'relative',
                      overflow: 'hidden',
                      marginBottom: '0.9rem',
                      border: '1px solid rgba(230, 198, 135, 0.25)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="watch-img-box"
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
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSaved ? '#C81E1E' : 'rgba(0, 0, 0, 0.5)',
                        cursor: 'pointer',
                        zIndex: 2,
                        transition: 'all 0.2s ease',
                      }}
                      className="heart-icon-btn"
                      title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart size={18} fill={isSaved ? '#C81E1E' : 'none'} strokeWidth={1.8} />
                    </button>

                    {/* Product Image */}
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: isDarkImg ? 'cover' : 'contain',
                        objectPosition: 'center',
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
                        background: 'linear-gradient(135deg, #FAF0D9 0%, #E6C687 50%, #C59E4E 100%)',
                        color: '#070A08',
                        border: 'none',
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
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
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
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
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
                      color: 'rgba(255, 255, 255, 0.6)',
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
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                      }}
                    >
                      {formatPrice(product.priceUSD)}
                    </span>

                    {/* Star Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span style={{ color: '#E0C896', fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                        ★★★★★
                      </span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.7rem' }}>
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
        .watch-img-box:hover {
          transform: translateY(-5px);
          border-color: rgba(230, 198, 135, 0.6) !important;
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.15);
        }
        .watch-img-box:hover .product-img {
          transform: scale(1.08);
        }
        .watch-img-box:hover .quick-add-btn {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        .watch-product-card:hover .product-name-heading {
          color: #FAF0D9 !important;
        }
        .heart-icon-btn:hover {
          transform: scale(1.12);
          background-color: #FFFFFF !important;
        }
        .view-all-link:hover {
          opacity: 0.8;
        }
        @media (max-width: 1150px) {
          .watch-slider-track > div {
            flex: 0 0 calc((100% - 2 * 1.1rem) / 3) !important;
            min-width: calc((100% - 2 * 1.1rem) / 3) !important;
          }
        }
        @media (max-width: 640px) {
          .watch-slider-track > div {
            flex: 0 0 calc((100% - 1.1rem) / 2) !important;
            min-width: calc((100% - 1.1rem) / 2) !important;
          }
        }
      `}</style>
    </section>
  );
};
