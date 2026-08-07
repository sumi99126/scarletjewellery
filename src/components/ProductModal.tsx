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
        backgroundColor: 'rgba(15, 62, 54, 0.6)',
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
      {/* Simple Clean Product Modal Box with Light Cream Background */}
      <div
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2rem',
          backgroundColor: '#FAF5EE',
          border: '1px solid rgba(163, 131, 73, 0.35)',
          borderRadius: '20px',
          boxShadow: '0 20px 50px rgba(15, 62, 54, 0.2)',
        }}
        className="modal-box-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#FFFFFF',
            border: '1px solid rgba(163, 131, 73, 0.25)',
            color: '#0F3E36',
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
                border: '1px solid rgba(163, 131, 73, 0.25)',
              }}
              className="modal-img-container"
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
                      border: selectedImageIndex === idx ? '2px solid #A38349' : '1px solid rgba(163, 131, 73, 0.2)',
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
                color: '#A38349',
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
                color: '#0F3E36',
                fontWeight: 700,
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
                  color: '#0F3E36',
                  fontWeight: 700,
                }}
              >
                {formatPrice(quickViewProduct.priceUSD)}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#A38349', fontSize: '0.8rem' }}>
                <Star size={14} fill="#A38349" />
                <span>{quickViewProduct.rating} ({quickViewProduct.reviewsCount} Reviews)</span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#455850', lineHeight: 1.5, marginBottom: '1.2rem' }}>
              {quickViewProduct.description}
            </p>

            {/* Simple Specifications List */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(163, 131, 73, 0.25)',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                marginBottom: '1.5rem',
                fontSize: '0.8rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
              }}
              className="modal-specs-box"
            >
              <div>
                <span style={{ color: '#72847C' }}>Metal:</span>{' '}
                <strong style={{ color: '#0F3E36' }}>{quickViewProduct.specifications.metal}</strong>
              </div>
              {quickViewProduct.specifications.gemstone && (
                <div>
                  <span style={{ color: '#72847C' }}>Gemstone:</span>{' '}
                  <strong style={{ color: '#0F3E36' }}>{quickViewProduct.specifications.gemstone}</strong>
                </div>
              )}
            </div>

            {/* Proportionate Action Buttons for Desktop and Mobile */}
            <div
              style={{
                display: 'flex',
                gap: '0.6rem',
                alignItems: 'center',
                flexWrap: 'nowrap',
              }}
              className="modal-actions-row"
            >
              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                style={{
                  flex: '1 1 50%',
                  background: 'linear-gradient(135deg, #092B24 0%, #0F3E36 100%)',
                  color: '#FFFFFF',
                  border: '1px solid #A38349',
                  padding: '0.65rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 12px rgba(15, 62, 54, 0.18)',
                  height: '42px',
                  whiteSpace: 'nowrap',
                }}
                className="modal-order-btn"
              >
                <ShoppingBag size={14} style={{ flexShrink: 0 }} />
                <span>ORDER NOW</span>
              </button>

              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                }}
                style={{
                  flex: '1 1 38%',
                  backgroundColor: '#FAF5EE',
                  color: '#0F3E36',
                  border: '1px solid #A38349',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  height: '42px',
                  whiteSpace: 'nowrap',
                }}
                className="modal-add-btn"
              >
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                style={{
                  backgroundColor: '#FAF5EE',
                  border: '1px solid rgba(163, 131, 73, 0.3)',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSaved ? '#C81E1E' : '#0F3E36',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease',
                }}
                className="modal-wish-btn"
                title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart size={16} fill={isSaved ? '#C81E1E' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-box-card {
            padding: 1.25rem !important;
            border-radius: 16px !important;
          }
          .modal-grid-box {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
          .modal-img-container {
            height: 220px !important;
            padding: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .modal-specs-box {
            padding: 0.65rem 0.85rem !important;
            margin-bottom: 1.1rem !important;
          }
          .modal-actions-row {
            gap: 0.4rem !important;
          }
          .modal-order-btn {
            height: 38px !important;
            padding: 0.5rem 0.75rem !important;
            font-size: 0.72rem !important;
          }
          .modal-add-btn {
            height: 38px !important;
            padding: 0.5rem 0.65rem !important;
            font-size: 0.72rem !important;
          }
          .modal-wish-btn {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </div>
  );
};
