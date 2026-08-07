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
        backgroundColor: 'rgba(15, 62, 54, 0.65)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: '#FAF5EE',
          border: '1px solid rgba(163, 131, 73, 0.35)',
          borderRadius: '24px',
          padding: '2.2rem',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(15, 62, 54, 0.2)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSearchOpen(false)}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
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

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.4rem' }}>HAUTE SEARCH</span>
          <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: '#0F3E36', fontWeight: 700 }}>
            Search Our Archive
          </h2>
        </div>

        {/* Input Field */}
        <div
          style={{
            position: 'relative',
            marginBottom: '1.5rem',
          }}
        >
          <Search
            size={20}
            style={{
              position: 'absolute',
              left: '1.1rem',
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
              padding: '0.95rem 1.1rem 0.95rem 3rem',
              fontSize: '1rem',
              fontFamily: 'var(--font-sans)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #A38349',
              borderRadius: 'var(--radius-md)',
              color: '#0F3E36',
              boxShadow: '0 4px 15px rgba(15, 62, 54, 0.06)',
              outline: 'none',
            }}
          />
        </div>

        {/* Search Suggestions or Results */}
        {!term ? (
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.74rem', color: '#72847C' }}>
            <span>Popular Searches:</span>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              {['Emerald', 'Solitaire Ring', 'Gold Watch', 'Choker', 'Bracelet Stack'].map((suggest) => (
                <button
                  key={suggest}
                  onClick={() => setTerm(suggest)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(163, 131, 73, 0.35)',
                    borderRadius: 'var(--radius-full)',
                    color: '#0F3E36',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {suggest}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ maxHeight: '48vh', overflowY: 'auto' }}>
            <div style={{ fontSize: '0.8rem', color: '#5A6B63', marginBottom: '0.85rem' }}>
              Found {matches.length} matching piece{matches.length === 1 ? '' : 's'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {matches.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setQuickViewProduct(product);
                    setIsSearchOpen(false);
                  }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(163, 131, 73, 0.25)',
                    borderRadius: '14px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(15, 62, 54, 0.05)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(163, 131, 73, 0.2)' }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.95rem', color: '#0F3E36', fontWeight: 700 }}>{product.name}</h4>
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
