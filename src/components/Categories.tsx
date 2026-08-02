import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCategory } from '../types/jewelry';

export const Categories: React.FC = () => {
  const { setActiveCategory } = useShop();

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId as ProductCategory);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{ backgroundColor: '#000000', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '1360px' }}>
        {/* Header with Title & Red Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                color: '#FFFFFF',
              }}
            >
              Summer Collections
            </h2>
            <span
              style={{
                backgroundColor: '#C81E1E',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.2rem 0.75rem',
                borderRadius: '999px',
                letterSpacing: '0.05em',
              }}
            >
              New 2026
            </span>
          </div>
        </div>

        {/* Moodboard Grid featuring authentic Scarlet Glitz p1, p4, p5, p6 product photos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div
            onClick={() => handleSelectCategory('necklaces')}
            style={{
              height: '320px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img
              src="/img/p1.png"
              alt="Heart Pendant Necklace"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            onClick={() => handleSelectCategory('bracelets')}
            style={{
              height: '320px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img
              src="/img/p4.png"
              alt="Zircon Bracelet Stack"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            onClick={() => handleSelectCategory('watches')}
            style={{
              height: '320px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img
              src="/img/p5.png"
              alt="Vintage Gold Watches"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            onClick={() => handleSelectCategory('necklaces')}
            style={{
              height: '320px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img
              src="/img/p6.png"
              alt="Swan & Butterfly Necklaces"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
