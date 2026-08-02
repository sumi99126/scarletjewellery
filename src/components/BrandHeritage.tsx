import React from 'react';
import { useShop } from '../context/ShopContext';

export const BrandHeritage: React.FC = () => {
  const { setIsBookingOpen } = useShop();

  return (
    <section style={{ backgroundColor: '#000000', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1360px' }}>
        {/* Section 1: "Elegance in Every Details" with 3D Velvet Jewelry Box Presentation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '7rem',
          }}
        >
          {/* Left Text */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                color: '#D4AF37',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Elegance in <br />
              Every Details
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '420px', marginBottom: '2rem' }}>
              Handcrafted bespoke velvet presentation boxes stamped with our signature gold seal, protecting your heirloom emerald rings for generations.
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #D4AF37',
                color: '#D4AF37',
                padding: '0.75rem 2rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Book Private Consultation
            </button>
          </div>

          {/* Right: Authentic Velvet Box Ring Product Photo (p3.png) */}
          <div
            style={{
              position: 'relative',
              height: '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/img/p3.png"
              alt="Scarlet Glitz Emerald Stacking Ring"
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            />
          </div>
        </div>

        {/* Section 2: "About Us" Deep Burgundy Red Card with Authentic Model Product Photo (p2.png) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Authentic Scarlet Glitz Model & Jewelry Photo (p2.png) */}
          <div
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              height: '440px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <img
              src="/img/p2.png"
              alt="Scarlet Glitz Model"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Right: Deep Burgundy Red About Us Card */}
          <div
            style={{
              backgroundColor: '#800000',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 20px 50px rgba(128, 0, 0, 0.4)',
            }}
          >
            <h3
              style={{
                fontSize: '2.2rem',
                fontFamily: 'var(--font-serif)',
                color: '#FFFFFF',
                fontWeight: 500,
                marginBottom: '1.25rem',
              }}
            >
              About Us
            </h3>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.925rem',
                lineHeight: 1.75,
                fontWeight: 300,
                fontFamily: 'var(--font-sans)',
              }}
            >
              At Scarlet Glitz, we believe that jewelry is more than just adornment—it is an intimate expression of elegance, 
              confidence, and timeless beauty. Born from a passion for artistry and refined craftsmanship, Scarlet Glitz 
              creates pieces that are as meaningful as they are exquisite. Every design is thoughtfully crafted with precision, 
              combining luxurious materials and modern sophistication to capture the essence of understated glamour.
              <br /><br />
              From the sleek lines of contemporary design to the enduring allure of classic forms, Scarlet Glitz reflects 
              a harmony between tradition and innovation. Scarlet Glitz is not just jewelry. It is the art of wearing elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
