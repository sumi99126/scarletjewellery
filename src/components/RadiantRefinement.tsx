import React from 'react';
import { useShop } from '../context/ShopContext';
import { Star, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const RadiantRefinement: React.FC = () => {
  const { setIsBookingOpen } = useShop();

  return (
    <section
      id="radiant-refinement-section"
      style={{
        backgroundColor: '#000000',
        padding: '3.5rem 1.5rem 4.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* 3-Column Asymmetric Layout - Narrow Image Widths & Clean Design matching Reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.75fr 1.4fr 0.65fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="radiant-grid"
        >
          {/* Left Column: Taller Image Card (Narrow Width, Rating Badge, NO Bottom Text) */}
          <ScrollReveal animation="slide-left" delay={0}>
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '320px',
              border: '1px solid rgba(230, 198, 135, 0.25)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.85)',
              backgroundColor: '#070A08',
            }}
            className="radiant-card-left"
          >
            {/* Rating Badge Top Left matching Reference Image */}
            <div
              style={{
                position: 'absolute',
                top: '0.85rem',
                left: '0.85rem',
                backgroundColor: 'rgba(7, 10, 8, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(230, 198, 135, 0.3)',
                borderRadius: '999px',
                padding: '0.3rem 0.7rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                zIndex: 3,
              }}
            >
              <div style={{ display: 'flex', gap: '0.1rem', color: '#E0C896' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#E0C896" />
                ))}
              </div>
              <span style={{ color: '#FFFFFF', fontSize: '0.68rem', fontWeight: 700 }}>
                (5/5)
              </span>
            </div>

            {/* Display Stand Photo (Clean Image, No Bottom Text) */}
            <img
              src="/img/display_stand.png"
              alt="Art of Radiant Refinement"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.6s ease',
              }}
              className="radiant-img-zoom"
            />
          </div>
          </ScrollReveal>

          {/* Center Column: Clean Heading, Richer Paragraph Text & Simple Pill Button */}
          <ScrollReveal animation="fade-up" delay={200}>
          <div style={{ padding: '0 1rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: '1.2rem',
                letterSpacing: '0.01em',
              }}
            >
              Crafted For Every <br />
              Special Moment
            </h2>

            {/* Richer Sub-Text Paragraph matching Reference Image */}
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.72)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                fontFamily: 'var(--font-sans)',
                marginBottom: '2rem',
                maxWidth: '480px',
              }}
            >
              Exquisite fashion jewelry pieces designed to celebrate life's most precious moments. Crafted with premium gold plating, anti-tarnish finish, and brilliant crystal gemstones. Created to bring timeless elegance, exceptional luster, and unmatched sophistication to your personal collection.
            </p>

            {/* Clean Simple Rounded Pill Button matching Reference */}
            <button
              onClick={() => setIsBookingOpen(true)}
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                padding: '0.65rem 1.8rem',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
              }}
              className="clean-pill-btn"
            >
              <span>Learn More</span>
              <ArrowRight size={14} />
            </button>
          </div>
          </ScrollReveal>

          {/* Right Column: Shorter Height & Narrower Width Image Card (NO Bottom Text) */}
          <ScrollReveal animation="slide-right" delay={400}>
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '210px',
              border: '1px solid rgba(230, 198, 135, 0.25)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.85)',
              backgroundColor: '#070A08',
              alignSelf: 'center',
            }}
            className="radiant-card-right"
          >
            {/* Emerald Ring Box Photo (Clean Image, No Bottom Text) */}
            <img
              src="/img/emerald_ring_box.png"
              alt="Emerald Ring Close-up"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.6s ease',
              }}
              className="radiant-img-zoom"
            />
          </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .radiant-card-left:hover .radiant-img-zoom,
        .radiant-card-right:hover .radiant-img-zoom {
          transform: scale(1.06);
        }
        .clean-pill-btn:hover {
          border-color: #E6C687 !important;
          color: #E6C687 !important;
          background: rgba(230, 198, 135, 0.08) !important;
        }
        @media (max-width: 1024px) {
          .radiant-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .radiant-card-right {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
};
