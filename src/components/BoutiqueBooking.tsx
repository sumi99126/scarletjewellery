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
    boutiqueLocation: 'Geneva Atelier & Flagship',
    interestCategory: 'Haute Joaillerie & Rare Emeralds',
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
        backgroundColor: 'rgba(5, 8, 6, 0.88)',
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
          backgroundColor: '#0E1A14',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(7, 10, 8, 0.6)',
            border: '1px solid var(--gold-border)',
            color: 'var(--gold-light)',
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
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--gold-primary)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <CheckCircle size={38} />
            </div>

            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>VIP RESERVATION CONFIRMED</span>

            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
              We Await Your Visit
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Your private viewing at <strong>{formData.boutiqueLocation}</strong> has been reserved for{' '}
              <strong>{formData.preferredDate || 'your requested date'}</strong> at <strong>{formData.preferredTime}</strong>.
            </p>

            <div
              style={{
                backgroundColor: 'rgba(7, 10, 8, 0.6)',
                border: '1px dashed var(--gold-primary)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '2rem',
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>
                Private Concierge Booking Reference
              </span>
              <strong style={{ fontSize: '1.4rem', color: 'var(--gold-light)', fontFamily: 'var(--font-serif)' }}>
                {submittedRef}
              </strong>
            </div>

            <button onClick={handleClose} className="btn-gold">
              Return to Catalog
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>PRIVATE SALON VIEWING</span>
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)' }}>
                Book a VIP <span className="text-gold-gradient">Boutique Consultation</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                Enjoy champagne, private vault access, and dedicated assistance from a Scarlet Senior Gemologist.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lady / Lord Harrington"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'rgba(7, 10, 8, 0.7)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
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
                      backgroundColor: 'rgba(7, 10, 8, 0.7)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+41 22 819 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'rgba(7, 10, 8, 0.7)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
                    Boutique Location *
                  </label>
                  <select
                    value={formData.boutiqueLocation}
                    onChange={(e) => setFormData({ ...formData, boutiqueLocation: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'rgba(7, 10, 8, 0.7)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Geneva Atelier & Flagship">Geneva Atelier & Flagship (Switzerland)</option>
                    <option value="Paris Place Vendôme Salon">Paris Place Vendôme Salon (France)</option>
                    <option value="Dubai Mall Fashion Avenue">Dubai Mall Fashion Avenue (UAE)</option>
                    <option value="London New Bond Street">London New Bond Street (UK)</option>
                    <option value="New York Fifth Avenue">New York Fifth Avenue (USA)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
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
                      backgroundColor: 'rgba(7, 10, 8, 0.7)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'rgba(7, 10, 8, 0.7)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  >
                    <option value="11:00 AM">11:00 AM - Morning Champagne</option>
                    <option value="14:00 PM">02:00 PM - Afternoon Tea</option>
                    <option value="17:00 PM">05:00 PM - Evening Vault Access</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
                  Interest / Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Bespoke 5ct Muzo Emerald Ring, Custom Bridal Solitaire, Private High Horology Watch viewing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'rgba(7, 10, 8, 0.7)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Calendar size={18} />
                <span>Confirm VIP Consultation</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
