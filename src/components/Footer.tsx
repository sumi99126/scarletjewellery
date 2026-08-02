import React from 'react';
import { useShop } from '../context/ShopContext';
import { Instagram, MapPin, ShieldCheck, Gem } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveCategory } = useShop();

  return (
    <footer
      style={{
        backgroundColor: '#040605',
        borderTop: '1px solid rgba(230, 198, 135, 0.2)',
        padding: '4rem 1.5rem 2.5rem 1.5rem',
        color: '#FFFFFF',
      }}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Simple & Clean 4-Column Footer Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Brand & Logo */}
          <div>
            <a href="#" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>
              <img
                src="/img/logo3.png"
                alt="Scarlet Fine Jewelry"
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
              />
            </a>
            <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Scarlet Fine Artificial Jewelry & Luxury Timepieces. Premium gold plated, anti-tarnish & crystal gemstone creations.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#E6C687' }}>
              <MapPin size={15} style={{ flexShrink: 0 }} />
              <span>Lahore Boutique Atelier &bull; Express Delivery Across Pakistan</span>
            </div>
          </div>

          {/* Col 2: Quick Collections */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#FAF0D9', marginBottom: '1.1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Fashion Collections
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.84rem' }}>
              <li>
                <button
                  onClick={() => setActiveCategory('rings')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', padding: 0 }}
                  className="footer-link"
                >
                  Gold Plated Rings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('necklaces')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', padding: 0 }}
                  className="footer-link"
                >
                  Pendant & Emerald Necklaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('bracelets')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', padding: 0 }}
                  className="footer-link"
                >
                  Gold Bracelet Stacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('watches')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', padding: 0 }}
                  className="footer-link"
                >
                  Luxury Watches Collection
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Care */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#FAF0D9', marginBottom: '1.1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Client Care
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.84rem' }}>
              <li>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Anti-Tarnish Guarantee</span>
              </li>
              <li>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Luxury Box Packaging</span>
              </li>
              <li>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>7-Day Easy Exchanges</span>
              </li>
              <li>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Cash on Delivery Available</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Instagram */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#FAF0D9', marginBottom: '1.1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Quality & Social
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <ShieldCheck size={16} style={{ color: '#E6C687' }} />
                <span>Anti-Tarnish Gold Plating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Gem size={16} style={{ color: '#E6C687' }} />
                <span>High-Grade Zircon & Crystals</span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/shop.scarletpk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#E6C687',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
              className="footer-insta-btn"
            >
              <Instagram size={16} />
              <span>@SHOP.SCARLETPK</span>
            </a>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div
          style={{
            borderTop: '1px solid rgba(230, 198, 135, 0.15)',
            paddingTop: '1.8rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.76rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <span>&copy; {new Date().getFullYear()} SCARLET FINE JEWELRY. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Shipping Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #E6C687 !important;
        }
        .footer-insta-btn:hover {
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};
