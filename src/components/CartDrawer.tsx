import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, ShoppingBag, Trash2, Plus, Minus, Check, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart,
    cartTotalUSD, 
    formatPrice,
    showToast
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [checkoutCompleteRef, setCheckoutCompleteRef] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HAUTE10' || promoCode.trim().toUpperCase() === 'SCARLET') {
      setDiscountPercent(10);
      showToast('10% VIP Privilege discount applied to your order.');
    } else {
      showToast('Invalid VIP code. Try "HAUTE10"');
    }
  };

  const finalTotalUSD = cartTotalUSD * (1 - discountPercent / 100);

  const handleCheckout = () => {
    const ref = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setCheckoutCompleteRef(ref);
    clearCart();
    showToast(`Order placed successfully! Reference: ${ref}`);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2200,
        backgroundColor: 'rgba(5, 8, 6, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={() => {
        setIsCartOpen(false);
        setCheckoutCompleteRef(null);
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          borderLeft: '1px solid rgba(163, 131, 73, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(15, 62, 54, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.4rem 1.5rem',
            borderBottom: '1px solid rgba(163, 131, 73, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FAF5EE',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} style={{ color: '#A38349' }} />
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', fontWeight: 600, color: '#0F3E36' }}>Your Shopping Bag</h3>
            <span style={{ fontSize: '0.8rem', color: '#72847C' }}>({cart.length})</span>
          </div>

          <button
            onClick={() => {
              setIsCartOpen(false);
              setCheckoutCompleteRef(null);
            }}
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

        {/* Drawer Body */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {checkoutCompleteRef ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--gold-primary)',
                  color: 'var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                }}
              >
                <Check size={32} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                Order Received
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Thank you for choosing Scarlet Haute Joaillerie. Your dedicated concierge team is preparing your insured shipment.
              </p>
              <div
                style={{
                  backgroundColor: 'rgba(7, 10, 8, 0.6)',
                  border: '1px dashed var(--gold-primary)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Tracking Reference</span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--gold-light)' }}>{checkoutCompleteRef}</strong>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setCheckoutCompleteRef(null);
                }}
                className="btn-gold"
              >
                Continue Browsing
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <ShoppingBag size={48} style={{ color: 'var(--text-muted)', opacity: 0.4, marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Your Bag is Currently Empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Explore our rare emerald tiaras, diamond solitaires, and Swiss chronographs.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-outline-gold"
                style={{ fontSize: '0.75rem' }}
              >
                Explore Collections
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedRingSize || ''}`}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    backgroundColor: 'rgba(7, 10, 8, 0.6)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    position: 'relative',
                  }}
                >
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
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
                        {item.product.name}
                      </h4>
                      {item.selectedRingSize && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--gold-light)' }}>
                          Size: {item.selectedRingSize}
                        </span>
                      )}
                      <div style={{ fontSize: '0.9rem', color: 'var(--gold-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                        {formatPrice(item.product.priceUSD)}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          backgroundColor: 'rgba(14, 26, 20, 0.8)',
                          border: '1px solid var(--gold-border)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.2rem 0.5rem',
                        }}
                      >
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#EF4444',
                          cursor: 'pointer',
                          opacity: 0.8,
                        }}
                        title="Remove item"
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

        {/* Drawer Footer / Checkout Summary */}
        {cart.length > 0 && !checkoutCompleteRef && (
          <div
            style={{
              padding: '1.5rem',
              borderTop: '1px solid var(--gold-border)',
              backgroundColor: '#FAF5EE',
            }}
          >
            {/* VIP Promo Form */}
            <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <input
                type="text"
                placeholder="VIP Code (e.g. HAUTE10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.75rem',
                  backgroundColor: 'rgba(14, 26, 20, 0.8)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn-outline-gold" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                Apply
              </button>
            </form>

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span>{formatPrice(cartTotalUSD)}</span>
              </div>
              {discountPercent > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gold-primary)' }}>
                  <span>VIP Discount ({discountPercent}%)</span>
                  <span>-{formatPrice(cartTotalUSD * (discountPercent / 100))}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Insured Express Delivery</span>
                <span style={{ color: '#8CF5C2', fontSize: '0.75rem', textTransform: 'uppercase' }}>Complimentary</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.1rem',
                  color: 'var(--gold-light)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  borderTop: '1px solid var(--gold-border)',
                  paddingTop: '0.6rem',
                  marginTop: '0.2rem',
                }}
              >
                <span>Total Amount</span>
                <span>{formatPrice(finalTotalUSD)}</span>
              </div>
            </div>

            <button onClick={handleCheckout} className="btn-gold" style={{ width: '100%' }}>
              <span>Proceed to Insured Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
