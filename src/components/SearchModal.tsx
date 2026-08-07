import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Search } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    products, 
    setQuickViewProduct, 
    formatPrice 
  } = useShop();

  const [term, setTerm] = useState('');

  if (!isSearchOpen) return null;

  const matches = term.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(term.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(term.toLowerCase()) ||
          p.category.toLowerCase().includes(term.toLowerCase()) ||
          (p.specifications.gemstone && p.specifications.gemstone.toLowerCase().includes(term.toLowerCase())) ||
          p.specifications.metal.toLowerCase().includes(term.toLowerCase())
      )
    : [];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2400,
        backgroundColor: 'rgba(15, 62, 54, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1.5rem',
      }}
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSearchOpen(false)}
          style={{
            position: 'absolute',
            top: '-1rem',
            right: '0',
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
        >
          <X size={26} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>HAUTE SEARCH</span>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>Search Our Archive</h2>
        </div>

        {/* Input Field */}
        <div
          style={{
            position: 'relative',
            marginBottom: '2rem',
          }}
        >
          <Search
            size={22}
            style={{
              position: 'absolute',
              left: '1.2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#A38349',
            }}
          />
          <input
            type="text"
            autoFocus
            placeholder="Search by gemstone, diamond cut, ring, emerald, watch..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1.1rem 1.2rem 1.1rem 3.2rem',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-sans)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #A38349',
              borderRadius: 'var(--radius-md)',
              color: '#0F3E36',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              outline: 'none',
            }}
          />
        </div>

        {/* Search Suggestions or Results */}
        {!term ? (
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', color: '#FAF5EE' }}>
            <span>Popular Searches:</span>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              {['Emerald', 'Solitaire Ring', 'Gold Watch', 'Choker', 'Bracelet Stack'].map((suggest) => (
                <button
                  key={suggest}
                  onClick={() => setTerm(suggest)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(163, 131, 73, 0.4)',
                    borderRadius: 'var(--radius-full)',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                  }}
                >
                  {suggest}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ maxHeight: '55vh', overflowY: 'auto' }}>
            <div style={{ fontSize: '0.8rem', color: '#FAF5EE', marginBottom: '1rem' }}>
              Found {matches.length} matching piece{matches.length === 1 ? '' : 's'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {matches.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setQuickViewProduct(product);
                    setIsSearchOpen(false);
                  }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '8px' }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.95rem', color: '#0F3E36', fontWeight: 600 }}>{product.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: '#72847C' }}>{product.subtitle}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.95rem', color: '#A38349', fontWeight: 700 }}>{formatPrice(product.priceUSD)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
