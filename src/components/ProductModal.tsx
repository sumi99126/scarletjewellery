import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Star } from 'lucide-react';

export const ProductModal: React.FC = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    formatPrice 
  } = useShop();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!quickViewProduct) return null;

  const isSaved = isInWishlist(quickViewProduct.id);
  const currentImage = quickViewProduct.images[selectedImageIndex] || quickViewProduct.primaryImage;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.2rem',
        overflowY: 'auto',
      }}
      onClick={() => setQuickViewProduct(null)}
    >
      {/* Simple Clean Product Modal Box */}
      <div
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2rem',
          backgroundColor: '#0F0F0F',
          border: '1px solid rgba(230, 198, 135, 0.3)',
          borderRadius: '20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#FFFFFF',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background 0.2s ease',
          }}
          title="Close"
        >
          <X size={18} />
        </button>

        {/* 2-Column Simple Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="modal-grid-box"
        >
          {/* Left: Clean White Image Box */}
          <div>
            <div
              style={{
                height: '320px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                border: '1px solid rgba(230, 198, 135, 0.2)',
              }}
            >
              <img
                src={currentImage}
                alt={quickViewProduct.name}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Thumbnails if multiple */}
            {quickViewProduct.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {quickViewProduct.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: selectedImageIndex === idx ? '2px solid #E6C687' : '1px solid rgba(255, 255, 255, 0.2)',
                      backgroundColor: '#FFFFFF',
                      padding: '0.2rem',
                    }}
                  >
                    <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Clean Product Info & Simple Purchase Action */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
            <span
              style={{
                fontSize: '0.72rem',
                color: '#E6C687',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              {quickViewProduct.category}
            </span>

            <h2
              style={{
                fontSize: '1.8rem',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#FFFFFF',
                fontWeight: 600,
                marginBottom: '0.4rem',
                lineHeight: 1.2,
              }}
            >
              {quickViewProduct.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <span
                style={{
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  fontWeight: 700,
                }}
              >
                {formatPrice(quickViewProduct.priceUSD)}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#E0C896', fontSize: '0.8rem' }}>
                <Star size={14} fill="#E0C896" />
                <span>{quickViewProduct.rating} ({quickViewProduct.reviewsCount} Reviews)</span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
              {quickViewProduct.description}
            </p>

            {/* Simple Specifications List */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                marginBottom: '1.5rem',
                fontSize: '0.8rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
              }}
            >
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Metal:</span>{' '}
                <strong style={{ color: '#FFFFFF' }}>{quickViewProduct.specifications.metal}</strong>
              </div>
              {quickViewProduct.specifications.gemstone && (
                <div>
                  <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Gemstone:</span>{' '}
                  <strong style={{ color: '#FFFFFF' }}>{quickViewProduct.specifications.gemstone}</strong>
                </div>
              )}
            </div>

            {/* Simple Action Buttons */}
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                style={{
                  flex: '1 1 45%',
                  background: 'linear-gradient(135deg, #FAF0D9 0%, #E6C687 50%, #C59E4E 100%)',
                  color: '#070A08',
                  border: 'none',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 15px rgba(230, 198, 135, 0.3)',
                }}
              >
                <ShoppingBag size={15} />
                <span>ORDER NOW</span>
              </button>

              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                }}
                style={{
                  flex: '1 1 40%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(230, 198, 135, 0.35)',
                  padding: '0.8rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(230, 198, 135, 0.3)',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSaved ? '#C81E1E' : '#FFFFFF',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease',
                }}
                title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart size={18} fill={isSaved ? '#C81E1E' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-grid-box {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
