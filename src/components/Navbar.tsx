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
        backgroundColor: '#000000',
        padding: '1.25rem 4.5rem',
        borderBottom: 'none',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
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
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '0.2rem',
            display: 'none',
          }}
          className="mobile-hamburger-btn"
          title="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center/Left: Brand Logo */}
        <a href="#" onClick={handleGoHome} style={{ display: 'flex', alignItems: 'center' }} className="navbar-logo-link">
          <img
            src="/img/logo3.png"
            alt="Scarlet Jewelry Logo"
            style={{
              height: '62px',
              width: 'auto',
              maxHeight: '62px',
              objectFit: 'contain',
            }}
            className="navbar-logo-img"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav-menu">
          <button
            onClick={handleGoHome}
            className="nav-link-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === 'home' ? '#E6C687' : '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.04em',
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
              color: currentPage === 'shop' && activeCategory === 'all' ? '#E6C687' : '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.04em',
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
              color: currentPage === 'shop' && activeCategory === 'rings' ? '#E6C687' : '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 400,
              cursor: 'pointer',
              letterSpacing: '0.04em',
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
              color: currentPage === 'shop' && activeCategory === 'earrings' ? '#E6C687' : '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 400,
              cursor: 'pointer',
              letterSpacing: '0.04em',
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
              color: currentPage === 'shop' && activeCategory === 'bracelets' ? '#E6C687' : '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 400,
              cursor: 'pointer',
              letterSpacing: '0.04em',
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
              color: currentPage === 'shop' && activeCategory === 'necklaces' ? '#E6C687' : '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 400,
              cursor: 'pointer',
              letterSpacing: '0.04em',
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
              color: currentPage === 'shop' && activeCategory === 'watches' ? '#E6C687' : '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 400,
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            Watches
          </button>
        </nav>

        {/* Right: Action Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }} className="navbar-action-icons">
          <button
            onClick={() => setIsSearchOpen(true)}
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.2rem' }}
            title="Search"
          >
            <Search size={19} />
          </button>

          <button
            onClick={() => setIsWishlistOpen(true)}
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', position: 'relative', padding: '0.2rem' }}
            title="Wishlist"
          >
            <Heart size={19} />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  backgroundColor: '#E6C687',
                  color: '#070A08',
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
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', position: 'relative', padding: '0.2rem' }}
            title="Cart"
          >
            <ShoppingBag size={19} />
            {cartItemCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  backgroundColor: '#E6C687',
                  color: '#070A08',
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
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.2rem' }}
            title="Account"
            className="user-icon-btn"
          >
            <User size={19} />
          </button>
        </div>
      </div>

      {/* Mobile Left Slide-In Animated Navigation Panel & Backdrop */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(6px)',
            zIndex: 2500,
            display: 'flex',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Animated Left Slide-In Drawer Panel */}
          <div
            style={{
              width: '290px',
              maxWidth: '85vw',
              height: '100%',
              backgroundColor: '#070A08',
              borderRight: '1px solid rgba(230, 198, 135, 0.3)',
              padding: '2rem 1.6rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '10px 0 30px rgba(0, 0, 0, 0.9)',
              animation: 'slideInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', borderBottom: '1px solid rgba(230, 198, 135, 0.2)', paddingBottom: '1rem' }}>
              <img
                src="/img/logo3.png"
                alt="Scarlet Logo"
                style={{ height: '42px', width: 'auto' }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
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
                  color: currentPage === 'home' ? '#E6C687' : '#FFFFFF',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>Home</span>
                {currentPage === 'home' && <span style={{ color: '#E6C687', fontSize: '0.8rem' }}>●</span>}
              </button>

              <button
                onClick={() => handleNavCategory('all')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentPage === 'shop' && activeCategory === 'all' ? '#E6C687' : '#FFFFFF',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>All Products (Shop)</span>
                {currentPage === 'shop' && activeCategory === 'all' && <span style={{ color: '#E6C687', fontSize: '0.8rem' }}>●</span>}
              </button>

              <div style={{ height: '1px', backgroundColor: 'rgba(230, 198, 135, 0.15)', margin: '0.4rem 0' }} />

              <span style={{ color: '#E6C687', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                CATEGORIES
              </span>

              <button
                onClick={() => handleNavCategory('rings')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeCategory === 'rings' ? '#E6C687' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.96rem',
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
                  color: activeCategory === 'earrings' ? '#E6C687' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.96rem',
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
                  color: activeCategory === 'bracelets' ? '#E6C687' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.96rem',
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
                  color: activeCategory === 'necklaces' ? '#E6C687' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.96rem',
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
                  color: activeCategory === 'watches' ? '#E6C687' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.96rem',
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
          background-color: #E6C687;
          box-shadow: 0 0 8px rgba(230, 198, 135, 0.6);
          transition: width 0.3s ease;
        }
        .nav-link-btn:hover {
          color: #E6C687 !important;
        }
        .nav-link-btn:hover::after {
          width: 100%;
        }
        @media (max-width: 900px) {
          .site-navbar {
            padding: 0.85rem 1rem !important;
          }
          .navbar-logo-img {
            height: 46px !important;
            max-height: 46px !important;
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
