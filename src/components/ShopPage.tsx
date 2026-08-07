import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Search, Eye, Filter, Check, X } from 'lucide-react';
import { ProductCategory } from '../types/jewelry';

export const ShopPage: React.FC = () => {
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

  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories: { key: ProductCategory | 'all'; label: string; count: number }[] = [
    { key: 'all', label: 'All Products', count: products.length },
    { key: 'rings', label: 'Rings', count: products.filter(p => p.category === 'rings').length },
    { key: 'necklaces', label: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
    { key: 'bracelets', label: 'Bracelets', count: products.filter(p => p.category === 'bracelets').length },
    { key: 'watches', label: 'Watches', count: products.filter(p => p.category === 'watches').length },
    { key: 'earrings', label: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
  ];

  // Filter products by active category & search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      style={{
        backgroundColor: '#F5EEE4',
        minHeight: '100vh',
        paddingTop: '3.5rem',
        paddingBottom: '4rem',
        color: '#0F3E36',
      }}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.25rem' }}>
        {/* Header Title Banner */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
            FASHION JEWELRY & TIMEPIECES
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
              fontWeight: 400,
              color: '#0F3E36',
              lineHeight: 1.15,
            }}
          >
            {activeCategory === 'all' ? 'All Collections' : categories.find(c => c.key === activeCategory)?.label}
          </h1>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div style={{ display: 'none', marginBottom: '1.5rem' }} className="mobile-filter-toggle-wrap">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.35)',
              color: '#0F3E36',
              padding: '0.75rem 1.2rem',
              borderRadius: '14px',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={16} style={{ color: '#A38349' }} />
              <span>Filter Categories ({categories.find(c => c.key === activeCategory)?.label})</span>
            </div>
            {mobileFilterOpen ? <X size={18} /> : <span style={{ fontSize: '0.8rem' }}>▼</span>}
          </button>
        </div>

        {/* 2-Column Sidebar Layout: Left Sidebar + Right Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="shop-sidebar-layout"
        >
          {/* Left Sidebar (Filters & Search) */}
          <aside
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.25)',
              borderRadius: '20px',
              padding: '1.5rem',
              position: 'sticky',
              top: '5.5rem',
              boxShadow: '0 10px 30px rgba(15, 62, 54, 0.05)',
            }}
            className={`shop-sidebar ${mobileFilterOpen ? 'mobile-show' : ''}`}
          >
            {/* Search Input Box */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ display: 'block', color: '#A38349', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Search Store
              </label>
              <div style={{ position: 'relative' }}>
                <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#A38349' }} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#FAF5EE',
                    border: '1px solid rgba(163, 131, 73, 0.25)',
                    borderRadius: '999px',
                    padding: '0.5rem 0.8rem 0.5rem 2.2rem',
                    color: '#0F3E36',
                    fontSize: '0.8rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Vertical Category Filter List */}
            <div>
              <label style={{ display: 'block', color: '#A38349', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                Categories
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => {
                        setActiveCategory(cat.key);
                        setMobileFilterOpen(false);
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: isActive ? 'rgba(163, 131, 73, 0.12)' : 'transparent',
                        border: isActive ? '1px solid #A38349' : '1px solid transparent',
                        color: isActive ? '#A38349' : '#0F3E36',
                        padding: '0.6rem 0.85rem',
                        borderRadius: '10px',
                        fontSize: '0.84rem',
                        fontWeight: isActive ? 600 : 400,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      className="sidebar-category-btn"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        {isActive && <Check size={14} style={{ color: '#A38349' }} />}
                        <span>{cat.label}</span>
                      </div>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          backgroundColor: isActive ? '#A38349' : 'rgba(15, 62, 54, 0.08)',
                          color: isActive ? '#FFFFFF' : '#72847C',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '999px',
                          fontWeight: 600,
                        }}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Info Note */}
            <div style={{ marginTop: '2rem', paddingTop: '1.2rem', borderTop: '1px dashed rgba(163, 131, 73, 0.2)', fontSize: '0.75rem', color: '#72847C' }}>
              ✦ Price Range: <strong style={{ color: '#A38349' }}>Rs. 1,000 to Rs. 15,000</strong>
            </div>
          </aside>

          {/* Right Column (Product Grid) */}
          <main>
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(163, 131, 73, 0.25)' }}>
                <p style={{ color: '#5A6B63', fontSize: '1rem', marginBottom: '1rem' }}>
                  No products found matching your search.
                </p>
                <button
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  style={{
                    backgroundColor: '#0F3E36',
                    color: '#FFFFFF',
                    border: '1px solid #A38349',
                    padding: '0.6rem 1.4rem',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1.2rem',
                }}
                className="shop-main-grid"
              >
                {filteredProducts.map((product) => {
                  const isSaved = isInWishlist(product.id);

                  return (
                    <div
                      key={product.id}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(163, 131, 73, 0.25)',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(15, 62, 54, 0.05)',
                        transition: 'all 0.35s ease',
                      }}
                      className="shop-card"
                      onClick={() => setQuickViewProduct(product)}
                    >
                      {/* Image Pod */}
                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          height: '240px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '1.4rem',
                          position: 'relative',
                          overflow: 'hidden',
                          borderBottom: '1px solid rgba(163, 131, 73, 0.15)',
                        }}
                        className="shop-img-box"
                      >
                        {/* Wishlist Button */}
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
                          }}
                        >
                          <Heart size={17} fill={isSaved ? '#C81E1E' : 'none'} strokeWidth={1.8} />
                        </button>

                        {/* Image */}
                        <img
                          src={product.primaryImage}
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            objectPosition: 'center',
                            transition: 'transform 0.5s ease',
                          }}
                          className="shop-img"
                        />

                        {/* Quick View Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setQuickViewProduct(product);
                          }}
                          style={{
                            position: 'absolute',
                            bottom: '0.75rem',
                            left: '50%',
                            transform: 'translateX(-50%) translateY(40px)',
                            backgroundColor: '#FAF5EE',
                            backdropFilter: 'blur(6px)',
                            border: '1px solid #A38349',
                            color: '#0F3E36',
                            padding: '0.35rem 0.85rem',
                            borderRadius: '999px',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            opacity: 0,
                            transition: 'all 0.3s ease',
                            zIndex: 3,
                          }}
                          className="shop-quick-view-btn"
                        >
                          <Eye size={12} style={{ color: '#A38349' }} />
                          <span>Quick View</span>
                        </button>
                      </div>

                      {/* Info Underneath */}
                      <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <h3
                          style={{
                            fontSize: '0.92rem',
                            color: '#0F3E36',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 600,
                            marginBottom: '0.2rem',
                          }}
                        >
                          {product.name}
                        </h3>

                        <span
                          style={{
                            fontSize: '0.74rem',
                            color: '#5A6B63',
                            marginBottom: '0.75rem',
                            display: 'block',
                          }}
                        >
                          {product.subtitle}
                        </span>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', marginBottom: '0.85rem' }}>
                          <span
                            style={{
                              fontSize: '0.98rem',
                              color: '#0F3E36',
                              fontWeight: 700,
                            }}
                          >
                            {formatPrice(product.priceUSD)}
                          </span>

                          <span style={{ color: '#A38349', fontSize: '0.74rem' }}>
                            ★★★★★
                          </span>
                        </div>

                        {/* Add to Bag Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                          style={{
                            width: '100%',
                            background: 'linear-gradient(135deg, #092B24 0%, #0F3E36 100%)',
                            color: '#FFFFFF',
                            border: '1px solid #A38349',
                            padding: '0.6rem 1rem',
                            borderRadius: '999px',
                            fontSize: '0.76rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.35rem',
                            transition: 'all 0.3s ease',
                          }}
                          className="shop-add-btn"
                        >
                          <ShoppingBag size={13} />
                          <span>Add to Bag</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        .sidebar-category-btn:hover {
          color: #A38349 !important;
          background: rgba(163, 131, 73, 0.08) !important;
        }
        .shop-card:hover {
          transform: translateY(-6px);
          border-color: #A38349 !important;
          box-shadow: 0 15px 35px rgba(15, 62, 54, 0.12) !important;
        }
        .shop-card:hover .shop-img {
          transform: scale(1.06);
        }
        .shop-card:hover .shop-quick-view-btn {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        @media (max-width: 1200px) {
          .shop-main-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .shop-sidebar-layout {
            grid-template-columns: 1fr !important;
          }
          .mobile-filter-toggle-wrap {
            display: block !important;
          }
          .shop-sidebar {
            display: none;
            position: relative !important;
            top: 0 !important;
            margin-bottom: 1.5rem;
          }
          .shop-sidebar.mobile-show {
            display: block !important;
          }
          .shop-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 500px) {
          .shop-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};
