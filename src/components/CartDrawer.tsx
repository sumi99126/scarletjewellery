import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartTotalUSD,
    formatPrice,
    clearCart,
    showToast,
  } = useShop();

  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutPhone, setCheckoutPhone] = useState('');
  const [checkoutAddress, setCheckoutAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>('cod');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutCompleteRef, setCheckoutCompleteRef] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutName || !checkoutPhone || !checkoutAddress) {
      showToast('Please complete all delivery fields');
      return;
    }

    const orderRef = 'SCL-' + Math.floor(100000 + Math.random() * 900000);
    setCheckoutCompleteRef(orderRef);
    clearCart();
    setIsCheckingOut(false);
    showToast(`Order confirmed! Tracking Ref: ${orderRef}`);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2200,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={() => {
        setIsCartOpen(false);
        setCheckoutCompleteRef(null);
      }}
    >
      {/* Drawer Panel */}
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          borderLeft: '1px solid rgba(163, 131, 73, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(15, 62, 54, 0.2)',
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
              color: '#0F3E36',
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
                  backgroundColor: 'rgba(163, 131, 73, 0.15)',
                  border: '1px solid #A38349',
                  color: '#A38349',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                }}
              >
                <Check size={32} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: '#0F3E36', marginBottom: '0.5rem' }}>
                Order Received
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#5A6B63', marginBottom: '1.5rem' }}>
                Thank you for choosing Scarlet Fine Jewelry. Your shipment is being prepared with insured express courier.
              </p>
              <div
                style={{
                  backgroundColor: '#FAF5EE',
                  border: '1px dashed #A38349',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: '#72847C', display: 'block' }}>Tracking Reference</span>
                <strong style={{ fontSize: '1.2rem', color: '#0F3E36' }}>{checkoutCompleteRef}</strong>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setCheckoutCompleteRef(null);
                }}
                className="btn-emerald"
              >
                Continue Browsing
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <ShoppingBag size={48} style={{ color: '#72847C', opacity: 0.35, marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: '#0F3E36', marginBottom: '0.5rem' }}>
                Your Bag is Currently Empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#5A6B63', marginBottom: '1.5rem' }}>
                Explore our fine rings, necklaces, bracelets, and Swiss chronographs.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-emerald"
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
                    backgroundColor: '#FAF5EE',
                    border: '1px solid rgba(163, 131, 73, 0.3)',
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
                      border: '1px solid rgba(163, 131, 73, 0.2)',
                    }}
                  />

                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-serif)', color: '#0F3E36', lineHeight: 1.2 }}>
                        {item.product.name}
                      </h4>
                      {item.selectedRingSize && (
                        <span style={{ fontSize: '0.7rem', color: '#A38349' }}>
                          Size: {item.selectedRingSize}
                        </span>
                      )}
                      <div style={{ fontSize: '0.9rem', color: '#A38349', fontWeight: 600, marginTop: '0.2rem' }}>
                        {formatPrice(item.product.priceUSD)}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(163, 131, 73, 0.35)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.2rem 0.5rem',
                        }}
                      >
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          style={{ background: 'transparent', border: 'none', color: '#0F3E36', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.8rem', color: '#0F3E36', fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          style={{ background: 'transparent', border: 'none', color: '#0F3E36', cursor: 'pointer' }}
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

          {/* Optional Checkout Form View */}
          {isCheckingOut && cart.length > 0 && (
            <form onSubmit={handlePlaceOrder} style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(163, 131, 73, 0.25)', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', color: '#0F3E36', marginBottom: '1rem' }}>
                Delivery Details
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    backgroundColor: '#FAF5EE',
                    border: '1px solid rgba(163, 131, 73, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#0F3E36',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number (+92)"
                  value={checkoutPhone}
                  onChange={(e) => setCheckoutPhone(e.target.value)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    backgroundColor: '#FAF5EE',
                    border: '1px solid rgba(163, 131, 73, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#0F3E36',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />

                <textarea
                  required
                  rows={2}
                  placeholder="Complete Delivery Street Address & City"
                  value={checkoutAddress}
                  onChange={(e) => setCheckoutAddress(e.target.value)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    backgroundColor: '#FAF5EE',
                    border: '1px solid rgba(163, 131, 73, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#0F3E36',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      fontSize: '0.75rem',
                      backgroundColor: paymentMethod === 'cod' ? 'rgba(163, 131, 73, 0.2)' : '#FAF5EE',
                      border: paymentMethod === 'cod' ? '1px solid #A38349' : '1px solid rgba(163, 131, 73, 0.25)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Cash on Delivery (COD)
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      fontSize: '0.75rem',
                      backgroundColor: paymentMethod === 'card' ? 'rgba(163, 131, 73, 0.2)' : '#FAF5EE',
                      border: paymentMethod === 'card' ? '1px solid #A38349' : '1px solid rgba(163, 131, 73, 0.25)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Card / Bank Transfer
                  </button>
                </div>

                <button
                  type="submit"
                  className="btn-emerald"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                >
                  <span>Confirm Order ({formatPrice(cartTotalUSD)})</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && !checkoutCompleteRef && (
          <div
            style={{
              padding: '1.4rem 1.5rem',
              borderTop: '1px solid rgba(163, 131, 73, 0.25)',
              backgroundColor: '#FAF5EE',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#5A6B63' }}>Subtotal</span>
              <span style={{ fontSize: '1.3rem', color: '#0F3E36', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>
                {formatPrice(cartTotalUSD)}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#72847C', marginBottom: '1.2rem' }}>
              <ShieldCheck size={14} style={{ color: '#A38349' }} />
              <span>Free Insured Delivery Across Pakistan</span>
            </div>

            {!isCheckingOut ? (
              <button
                onClick={() => setIsCheckingOut(true)}
                className="btn-emerald"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setIsCheckingOut(false)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: '#72847C',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Back to Cart Items
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
