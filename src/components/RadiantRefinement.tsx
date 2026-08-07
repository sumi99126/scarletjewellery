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
        background: 'linear-gradient(135deg, #092B24 0%, #0F3E36 100%)',
        padding: '3.5rem 1.5rem 4.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.2)',
      }}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* 3-Column Asymmetric Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.75fr 1.4fr 0.65fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="radiant-grid"
        >
          {/* Left Column: Taller Image Card */}
          <ScrollReveal animation="slide-left" delay={0}>
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '320px',
              border: '1px solid rgba(163, 131, 73, 0.4)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
              backgroundColor: '#092B24',
            }}
            className="radiant-card-left"
          >
            {/* Rating Badge Top Left */}
            <div
              style={{
                position: 'absolute',
                top: '0.85rem',
                left: '0.85rem',
                backgroundColor: 'rgba(9, 43, 36, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(163, 131, 73, 0.5)',
                borderRadius: '999px',
                padding: '0.3rem 0.7rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                zIndex: 3,
              }}
            >
              <div style={{ display: 'flex', gap: '0.1rem', color: '#C8AA6E' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#C8AA6E" />
                ))}
              </div>
              <span style={{ color: '#FFFFFF', fontSize: '0.68rem', fontWeight: 700 }}>
                (5/5)
              </span>
            </div>

            {/* Display Stand Photo */}
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

          {/* Center Column: Clean Heading, Richer Paragraph Text */}
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

            {/* Sub-Text Paragraph */}
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                fontFamily: 'var(--font-sans)',
                marginBottom: '2rem',
                maxWidth: '480px',
              }}
            >
              Exquisite fashion jewelry pieces designed to celebrate life's most precious moments. Crafted with premium gold plating, anti-tarnish finish, and brilliant crystal gemstones. Created to bring timeless elegance, exceptional luster, and unmatched sophistication to your personal collection.
            </p>

            {/* Clean Simple Rounded Pill Button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid #A38349',
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

          {/* Right Column: Shorter Height Card */}
          <ScrollReveal animation="slide-right" delay={400}>
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '210px',
              border: '1px solid rgba(163, 131, 73, 0.4)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
              backgroundColor: '#092B24',
              alignSelf: 'center',
            }}
            className="radiant-card-right"
          >
            {/* Emerald Ring Box Photo */}
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
          border-color: #C8AA6E !important;
          color: #C8AA6E !important;
          background: rgba(163, 131, 73, 0.2) !important;
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
