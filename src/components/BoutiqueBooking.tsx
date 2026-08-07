import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Calendar, CheckCircle } from 'lucide-react';
import { AppointmentRequest } from '../types/jewelry';

export const BoutiqueBooking: React.FC = () => {
  const { isBookingOpen, setIsBookingOpen, showToast } = useShop();

  const [formData, setFormData] = useState<AppointmentRequest>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '14:00',
    boutiqueLocation: 'Lahore Atelier & Boutique',
    interestCategory: 'Fashion Jewelry & Timepieces',
    notes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = 'SCL-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(refCode);
    showToast(`Appointment confirmed! Booking Reference: ${refCode}`);
  };

  const handleClose = () => {
    setIsBookingOpen(false);
    setSubmittedRef(null);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        backgroundColor: 'rgba(15, 62, 54, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto',
      }}
      onClick={handleClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '2.5rem',
          position: 'relative',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(163, 131, 73, 0.35)',
          boxShadow: '0 20px 50px rgba(15, 62, 54, 0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: '#FAF5EE',
            border: '1px solid rgba(163, 131, 73, 0.3)',
            color: '#0F3E36',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {submittedRef ? (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(163, 131, 73, 0.15)',
                border: '1px solid #A38349',
                color: '#A38349',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <CheckCircle size={38} />
            </div>

            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>VIP RESERVATION CONFIRMED</span>

            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#0F3E36', marginBottom: '0.5rem' }}>
              We Await Your Visit
            </h2>

            <p style={{ color: '#5A6B63', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Your private viewing at <strong>{formData.boutiqueLocation}</strong> has been reserved for{' '}
              <strong>{formData.preferredDate || 'your requested date'}</strong> at <strong>{formData.preferredTime}</strong>.
            </p>

            <div
              style={{
                backgroundColor: '#FAF5EE',
                border: '1px dashed #A38349',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '2rem',
              }}
            >
              <span style={{ fontSize: '0.75rem', color: '#72847C', textTransform: 'uppercase', display: 'block' }}>
                Private Concierge Booking Reference
              </span>
              <strong style={{ fontSize: '1.4rem', color: '#0F3E36', fontFamily: 'var(--font-serif)' }}>
                {submittedRef}
              </strong>
            </div>

            <button onClick={handleClose} className="btn-emerald">
              Return to Catalog
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>PRIVATE SALON VIEWING</span>
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: '#0F3E36' }}>
                Book a VIP Consultation
              </h2>
              <p style={{ color: '#5A6B63', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                Enjoy dedicated assistance from a Scarlet Senior Gemologist and private collection viewing.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#A38349', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#FAF5EE',
                      border: '1px solid rgba(163, 131, 73, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#A38349', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vip@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#FAF5EE',
                      border: '1px solid rgba(163, 131, 73, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#A38349', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#FAF5EE',
                      border: '1px solid rgba(163, 131, 73, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#A38349', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Boutique Location *
                  </label>
                  <select
                    value={formData.boutiqueLocation}
                    onChange={(e) => setFormData({ ...formData, boutiqueLocation: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#FAF5EE',
                      border: '1px solid rgba(163, 131, 73, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Lahore Atelier & Boutique">Lahore Atelier & Boutique</option>
                    <option value="Karachi Flagship Salon">Karachi Flagship Salon</option>
                    <option value="Islamabad Executive Suite">Islamabad Executive Suite</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#A38349', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#FAF5EE',
                      border: '1px solid rgba(163, 131, 73, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#A38349', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#FAF5EE',
                      border: '1px solid rgba(163, 131, 73, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#0F3E36',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#A38349', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Special Requests / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you wish to see specific ring sizes or watch models..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
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
              </div>

              <button type="submit" className="btn-emerald" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Calendar size={16} />
                <span>Confirm VIP Appointment</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
