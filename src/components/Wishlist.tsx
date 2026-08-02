import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const Wishlist: React.FC = () => {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlist, 
    products, 
    toggleWishlist, 
    addToCart, 
    formatPrice 
  } = useShop();

  if (!isWishlistOpen) return null;

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2250,
        backgroundColor: 'rgba(5, 8, 6, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={() => setIsWishlistOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#000000',
          borderLeft: '1px solid rgba(230, 198, 135, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.4rem 1.5rem',
            borderBottom: '1px solid rgba(230, 198, 135, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#000000',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Heart size={20} fill="#E6C687" style={{ color: '#E6C687' }} />
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', fontWeight: 600, color: '#FFFFFF' }}>Your Wishlist</h3>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>({savedProducts.length})</span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {savedProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <Heart size={48} style={{ color: 'var(--text-muted)', opacity: 0.3, marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Your Private Wishlist is Empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Click the heart icon on any jewelry masterpiece to save it to your private vault.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {savedProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    backgroundColor: 'rgba(7, 10, 8, 0.6)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                  }}
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    style={{
                      width: '75px',
                      height: '75px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                  />

                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                        {product.name}
                      </h4>
                      <div style={{ fontSize: '0.9rem', color: 'var(--gold-primary)', fontWeight: 600, marginTop: '0.25rem' }}>
                        {formatPrice(product.priceUSD)}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <button
                        onClick={() => {
                          addToCart(product);
                          toggleWishlist(product.id);
                        }}
                        className="btn-gold"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}
                      >
                        <ShoppingBag size={12} />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => toggleWishlist(product.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#EF4444',
                          cursor: 'pointer',
                          opacity: 0.8,
                          padding: '0.4rem',
                        }}
                        title="Remove from Wishlist"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
