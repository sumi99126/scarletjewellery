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
        backgroundColor: 'rgba(5, 8, 6, 0.92)',
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
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          <X size={26} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>HAUTE SEARCH</span>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>Search Our Archive</h2>
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
              color: 'var(--gold-primary)',
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
              backgroundColor: 'rgba(14, 26, 20, 0.9)',
              border: '1px solid var(--gold-primary)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-gold)',
              outline: 'none',
            }}
          />
        </div>

        {/* Search Suggestions or Results */}
        {!term ? (
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Popular Searches:</span>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              {['Colombian Emerald', 'Oval Solitaire', 'High Horology', 'Diamond Choker', '18K Yellow Gold'].map((suggest) => (
                <button
                  key={suggest}
                  onClick={() => setTerm(suggest)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--gold-light)',
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
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
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
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  />

                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                      {product.name}
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {product.specifications.metal} &bull; {product.specifications.gemstone || product.category}
                    </span>
                  </div>

                  <span style={{ fontSize: '1.1rem', color: 'var(--gold-light)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                    {formatPrice(product.priceUSD)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
