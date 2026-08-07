import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { ProductCategory } from '../types/jewelry';

export const Navbar: React.FC = () => {
  const { 
    cartItemCount, 
    wishlist,
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsSearchOpen,
    activeCategory,
    setActiveCategory,
    setCurrentPage,
    currentPage,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('home');
    setActiveCategory('all');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavCategory = (cat: ProductCategory) => {
    setActiveCategory(cat);
    setCurrentPage('shop');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        backgroundColor: 'rgba(226, 213, 190, 0.98)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '0.85rem 4.5rem',
        borderBottom: '1px solid rgba(163, 131, 73, 0.35)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(15, 62, 54, 0.08)',
      }}
      className="site-navbar"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
        className="site-navbar-container"
      >
        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#000000',
            cursor: 'pointer',
            padding: '0.2rem',
            display: 'none',
          }}
          className="mobile-hamburger-btn"
          title="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center/Left: Brand Logo (76px Height) */}
        <a href="#" onClick={handleGoHome} style={{ display: 'flex', alignItems: 'center' }} className="navbar-logo-link">
          <img
            src="/img/scarletlogo.png"
            alt="Scarlet Jewelry Logo"
            style={{
              height: '76px',
              width: 'auto',
              maxHeight: '76px',
              objectFit: 'contain',
            }}
            className="navbar-logo-img"
          />
        </a>

        {/* Center: Desktop Navigation Links (Bold Black Menu Text) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav-menu">
          <button
            onClick={handleGoHome}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'home' ? '#816430' : '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Home
          </button>

          <button
            onClick={() => handleNavCategory('all')}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'shop' && activeCategory === 'all' ? '#816430' : '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Shop
          </button>

          <button
            onClick={() => handleNavCategory('rings')}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'shop' && activeCategory === 'rings' ? '#816430' : '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Rings
          </button>

          <button
            onClick={() => handleNavCategory('earrings')}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'shop' && activeCategory === 'earrings' ? '#816430' : '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Earrings
          </button>

          <button
            onClick={() => handleNavCategory('bracelets')}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'shop' && activeCategory === 'bracelets' ? '#816430' : '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Bracelets
          </button>

          <button
            onClick={() => handleNavCategory('necklaces')}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'shop' && activeCategory === 'necklaces' ? '#816430' : '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Necklaces
          </button>

          <button
            onClick={() => handleNavCategory('watches')}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'shop' && activeCategory === 'watches' ? '#816430' : '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Watches
          </button>
        </nav>

        {/* Right: Action Icons in Crisp Black */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }} className="navbar-action-icons">
          <button
            onClick={() => setIsSearchOpen(true)}
            style={{ background: 'transparent', border: 'none', color: '#000000', cursor: 'pointer', padding: '0.2rem' }}
            title="Search"
          >
            <Search size={20} strokeWidth={2.2} />
          </button>

          <button
            onClick={() => setIsWishlistOpen(true)}
            style={{ background: 'transparent', border: 'none', color: '#000000', cursor: 'pointer', position: 'relative', padding: '0.2rem' }}
            title="Wishlist"
          >
            <Heart size={20} strokeWidth={2.2} />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  borderRadius: '50%',
                  width: '15px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            style={{ background: 'transparent', border: 'none', color: '#000000', cursor: 'pointer', position: 'relative', padding: '0.2rem' }}
            title="Cart"
          >
            <ShoppingBag size={20} strokeWidth={2.2} />
            {cartItemCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  borderRadius: '50%',
                  width: '15px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsWishlistOpen(true)}
            style={{ background: 'transparent', border: 'none', color: '#000000', cursor: 'pointer', padding: '0.2rem' }}
            title="Account"
            className="user-icon-btn"
          >
            <User size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Slide-In Drawer with Solid Light Cream Background */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 99999,
            display: 'flex',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Animated Left Slide-In Drawer Panel with 100% Solid Opaque Light Cream Background */}
          <div
            style={{
              width: '300px',
              maxWidth: '85vw',
              height: '100vh',
              minHeight: '100vh',
              backgroundColor: '#FAF5EE',
              borderRight: '1px solid rgba(163, 131, 73, 0.4)',
              padding: '2rem 1.6rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '10px 0 35px rgba(0, 0, 0, 0.4)',
              animation: 'slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              position: 'relative',
              zIndex: 100000,
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', borderBottom: '1px solid rgba(163, 131, 73, 0.25)', paddingBottom: '1rem' }}>
              <img
                src="/img/scarletlogo.png"
                alt="Scarlet Logo"
                style={{ height: '52px', width: 'auto' }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(163, 131, 73, 0.25)',
                  color: '#0F3E36',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Menu Links List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <button
                onClick={handleGoHome}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentPage === 'home' ? '#A38349' : '#0F3E36',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>Home</span>
                {currentPage === 'home' && <span style={{ color: '#A38349', fontSize: '0.8rem' }}>●</span>}
              </button>

              <button
                onClick={() => handleNavCategory('all')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentPage === 'shop' && activeCategory === 'all' ? '#A38349' : '#0F3E36',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>All Products (Shop)</span>
                {currentPage === 'shop' && activeCategory === 'all' && <span style={{ color: '#A38349', fontSize: '0.8rem' }}>●</span>}
              </button>

              <div style={{ height: '1px', backgroundColor: 'rgba(163, 131, 73, 0.25)', margin: '0.4rem 0' }} />

              <span style={{ color: '#A38349', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                CATEGORIES
              </span>

              <button
                onClick={() => handleNavCategory('rings')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeCategory === 'rings' ? '#A38349' : '#0F3E36',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  paddingLeft: '0.5rem',
                }}
              >
                Rings
              </button>

              <button
                onClick={() => handleNavCategory('earrings')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeCategory === 'earrings' ? '#A38349' : '#0F3E36',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  paddingLeft: '0.5rem',
                }}
              >
                Earrings
              </button>

              <button
                onClick={() => handleNavCategory('bracelets')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeCategory === 'bracelets' ? '#A38349' : '#0F3E36',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  paddingLeft: '0.5rem',
                }}
              >
                Bracelets
              </button>

              <button
                onClick={() => handleNavCategory('necklaces')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeCategory === 'necklaces' ? '#A38349' : '#0F3E36',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  paddingLeft: '0.5rem',
                }}
              >
                Necklaces
              </button>

              <button
                onClick={() => handleNavCategory('watches')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeCategory === 'watches' ? '#A38349' : '#0F3E36',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  paddingLeft: '0.5rem',
                }}
              >
                Watches
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .nav-link-btn {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #816430;
          box-shadow: 0 0 8px rgba(129, 100, 48, 0.6);
          transition: width 0.3s ease;
        }
        .nav-link-btn:hover {
          color: #816430 !important;
        }
        .nav-link-btn:hover::after {
          width: 100%;
        }
        @media (max-width: 900px) {
          .site-navbar {
            padding: 0.85rem 1rem !important;
          }
          .navbar-logo-img {
            height: 56px !important;
            max-height: 56px !important;
          }
          .site-navbar-container {
            display: grid !important;
            grid-template-columns: 1fr auto 1fr !important;
            align-items: center !important;
            width: 100% !important;
          }
          .mobile-hamburger-btn {
            display: block !important;
            justify-self: start !important;
          }
          .navbar-logo-link {
            justify-self: center !important;
            display: flex !important;
            align-items: center !important;
          }
          .navbar-action-icons {
            justify-self: end !important;
          }
          .desktop-nav-menu {
            display: none !important;
          }
          .user-icon-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
