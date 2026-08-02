import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Gift, Sparkles, Watch } from 'lucide-react';

export const ModernGlamourBanner: React.FC = () => {
  const { setIsBookingOpen, setActiveCategory } = useShop();

  return (
    <section
      style={{
        backgroundColor: '#000000',
        padding: '3rem 1.5rem 5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Simple & Elegant Luxury Watch Collection Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0E0E0E 0%, #050505 100%)',
            border: '1px solid rgba(230, 198, 135, 0.3)',
            borderRadius: '24px',
            padding: '3rem 3.5rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(230, 198, 135, 0.08)',
          }}
          className="watch-banner-card"
        >
          {/* Background Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '550px',
              height: '550px',
              background: 'radial-gradient(circle, rgba(230, 198, 135, 0.09) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.15fr',
              gap: '3.5rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
            className="watch-banner-grid"
          >
            {/* Left Column: User's Uploaded Watch Image */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                height: '380px',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.85)',
                border: '1px solid rgba(230, 198, 135, 0.25)',
                position: 'relative',
                backgroundColor: '#070A08',
              }}
            >
              <img
                src="/img/glossy_watch.png"
                alt="Elegant Luxury Watch in Gift Box"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.6s ease',
                }}
                className="single-watch-img"
              />
            </div>

            {/* Right Column: Simple & Clear English Description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Sparkles size={14} style={{ color: '#E6C687' }} />
                <span
                  style={{
                    color: '#E6C687',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  ELEGANT WATCHES
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                  letterSpacing: '0.01em',
                }}
              >
                Beautiful Watches for <br />
                Every Moment
              </h2>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontSize: '0.96rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  marginBottom: '1.75rem',
                }}
              >
                Discover our collection of stylish wristwatches designed with quality materials and classic elegance. Perfect for special gifts or daily style.
              </p>

              {/* Feature Highlights */}
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '2.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E6C687', fontSize: '0.82rem', fontWeight: 600 }}>
                  <Watch size={16} />
                  <span>Premium Quality & Finish</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E6C687', fontSize: '0.82rem', fontWeight: 600 }}>
                  <Gift size={16} />
                  <span>Includes Luxury Gift Box</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveCategory('watches');
                  setIsBookingOpen(true);
                }}
                style={{
                  background: 'transparent',
                  color: '#FAF0D9',
                  border: '1px solid #E6C687',
                  padding: '0.85rem 2.2rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="discover-btn"
              >
                <span>VIEW WATCH COLLECTION</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .discover-btn:hover {
          background: linear-gradient(135deg, #FAF0D9 0%, #E6C687 50%, #C59E4E 100%) !important;
          color: #070A08 !important;
          box-shadow: 0 8px 25px rgba(230, 198, 135, 0.4) !important;
        }
        .single-watch-img:hover {
          transform: scale(1.05);
        }
        @media (max-width: 1024px) {
          .watch-banner-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .watch-banner-card {
            padding: 1.8rem 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
