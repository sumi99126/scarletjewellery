import React from 'react';
import { RotateCcw, ShieldCheck, Gem, Headphones } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TrustValuesBar: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#F5EEE4',
        padding: '2rem 1.5rem 2.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
      className="trust-values-section"
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Trust & Service Values Grid (4 Columns) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="trust-values-grid"
        >
          {/* Item 1 */}
          <ScrollReveal animation="fade-up" delay={0}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.2rem 1.2rem',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.25)',
              boxShadow: '0 10px 25px rgba(15, 62, 54, 0.05)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            className="trust-card"
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(163, 131, 73, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A38349',
                flexShrink: 0,
              }}
            >
              <RotateCcw size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0F3E36', marginBottom: '0.15rem' }}>
                Easy Returns
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#5A6B63', margin: 0 }}>
                30-day return policy
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Item 2 */}
          <ScrollReveal animation="fade-up" delay={150}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.2rem 1.2rem',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.25)',
              boxShadow: '0 10px 25px rgba(15, 62, 54, 0.05)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            className="trust-card"
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(163, 131, 73, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A38349',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0F3E36', marginBottom: '0.15rem' }}>
                Secure Payment
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#5A6B63', margin: 0 }}>
                100% secure checkout
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Item 3 */}
          <ScrollReveal animation="fade-up" delay={300}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.2rem 1.2rem',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.25)',
              boxShadow: '0 10px 25px rgba(15, 62, 54, 0.05)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            className="trust-card"
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(163, 131, 73, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A38349',
                flexShrink: 0,
              }}
            >
              <Gem size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0F3E36', marginBottom: '0.15rem' }}>
                Exceptional Quality
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#5A6B63', margin: 0 }}>
                Crafted with precision
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Item 4 */}
          <ScrollReveal animation="fade-up" delay={450}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.2rem 1.2rem',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.25)',
              boxShadow: '0 10px 25px rgba(15, 62, 54, 0.05)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            className="trust-card"
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(163, 131, 73, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A38349',
                flexShrink: 0,
              }}
            >
              <Headphones size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0F3E36', marginBottom: '0.15rem' }}>
                Dedicated Support
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#5A6B63', margin: 0 }}>
                24/7 customer support
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .trust-card {
          min-width: 0;
          box-sizing: border-box;
        }
        .trust-card:hover {
          transform: translateY(-4px);
          border-color: #A38349 !important;
          box-shadow: 0 12px 30px rgba(15, 62, 54, 0.12) !important;
        }
        @media (max-width: 1024px) {
          .trust-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 640px) {
          .trust-values-section {
            padding-top: 0.5rem !important;
            padding-bottom: 1.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .trust-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
          .trust-card {
            padding: 0.75rem 0.5rem !important;
            gap: 0.45rem !important;
            border-radius: 12px !important;
          }
          .trust-card h4 {
            font-size: 0.75rem !important;
            line-height: 1.15 !important;
          }
          .trust-card p {
            font-size: 0.65rem !important;
            line-height: 1.15 !important;
          }
          .trust-card > div:first-child {
            width: 32px !important;
            height: 32px !important;
          }
          .trust-card svg {
            width: 15px !important;
            height: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};
