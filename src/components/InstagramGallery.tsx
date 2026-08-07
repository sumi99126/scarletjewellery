import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const InstagramGallery: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/shop.scarletpk/';

  const socialPosts = [
    {
      id: 1,
      image: '/img/rolex_gold_watch.png',
      caption: 'Classic 18K Gold Datejust Edition in Signature Box ✨ #ScarletWatches',
      likes: '2,480',
      comments: '82',
      tag: 'New Watch Arrival',
      rotation: '-2deg',
    },
    {
      id: 2,
      image: '/img/gold_bow_ring.png',
      caption: 'Delicate 18K Gold Bow Knot Ring in Hexagonal Box 🎀 #ScarletRings',
      likes: '1,950',
      comments: '64',
      tag: 'Best Seller Ring',
      rotation: '2.5deg',
    },
    {
      id: 3,
      image: '/img/emerald_set_box.png',
      caption: 'Royal Emerald Green Pendant & Matching Earrings Set 💚 #ScarletJewels',
      likes: '3,120',
      comments: '105',
      tag: 'Complete Luxury Set',
      rotation: '-1.5deg',
    },
    {
      id: 4,
      image: '/img/swan_emerald_necklaces.jpg',
      caption: 'Diamond Swan & Emerald Pendant Gold Chains 🦢 #GoldNecklaces',
      likes: '2,140',
      comments: '58',
      tag: 'Trending Stacks',
      rotation: '3deg',
    },
  ];

  return (
    <section
      id="instagram-gallery-section"
      style={{
        backgroundColor: '#FAF3E8',
        borderTop: '1px solid rgba(163, 131, 73, 0.25)',
        borderBottom: '1px solid rgba(163, 131, 73, 0.25)',
        padding: '4.5rem 1.5rem 4.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* 2-Column Creative Layout: Left Instagram Profile Card + Right Tilted Feed */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="insta-social-grid"
        >
          {/* Left Column: Live Instagram Profile Card Mockup */}
          <ScrollReveal animation="slide-left" delay={0}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.35)',
              borderRadius: '28px',
              padding: '2rem',
              boxShadow: '0 15px 40px rgba(15, 62, 54, 0.08)',
              position: 'relative',
            }}
            className="insta-profile-card"
          >
            {/* Header: Instagram Logo & Verified Handle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    padding: '2px',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/img/insta_profile.png"
                    alt="Scarlet PK Profile"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #FFFFFF',
                    }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ color: '#0F3E36', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>
                      shop.scarletpk
                    </span>
                    <CheckCircle size={16} style={{ color: '#A38349', fill: '#A38349' }} />
                  </div>
                  <span style={{ color: '#5A6B63', fontSize: '0.78rem' }}>
                    Fine Jewelry & Luxury Watches
                  </span>
                </div>
              </div>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(163, 131, 73, 0.15)',
                  border: '1px solid rgba(163, 131, 73, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A38349',
                  transition: 'all 0.2s ease',
                }}
                className="insta-icon-link"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Profile Bio & Stats */}
            <p style={{ color: '#455850', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.4rem' }}>
              ✨ Crafting timeless 18K solid gold & bespoke diamond timepieces. Worldwide shipping from Pakistan.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'rgba(163, 131, 73, 0.08)',
                borderRadius: '16px',
                padding: '0.85rem',
                border: '1px solid rgba(163, 131, 73, 0.18)',
                marginBottom: '1.8rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', color: '#0F3E36', fontSize: '1.05rem', fontWeight: 700 }}>482</span>
                <span style={{ color: '#72847C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Posts</span>
              </div>
              <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(163, 131, 73, 0.2)' }} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', color: '#A38349', fontSize: '1.05rem', fontWeight: 700 }}>24.8K</span>
                <span style={{ color: '#72847C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Followers</span>
              </div>
              <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(163, 131, 73, 0.2)' }} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', color: '#0F3E36', fontSize: '1.05rem', fontWeight: 700 }}>100%</span>
                <span style={{ color: '#72847C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Authentic</span>
              </div>
            </div>

            {/* Direct Follow CTA Button */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #092B24 0%, #0F3E36 100%)',
                color: '#FFFFFF',
                padding: '0.85rem 1.2rem',
                borderRadius: '999px',
                fontSize: 'clamp(0.72rem, 2.9vw, 0.82rem)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(15, 62, 54, 0.25)',
                border: '1px solid #A38349',
                transition: 'all 0.35s ease',
                whiteSpace: 'nowrap',
                width: '100%',
              }}
              className="follow-profile-btn"
            >
              <Instagram size={16} style={{ flexShrink: 0 }} />
              <span style={{ whiteSpace: 'nowrap' }}>FOLLOW @SHOP.SCARLETPK</span>
              <ArrowRight size={14} style={{ flexShrink: 0 }} />
            </a>
          </div>
          </ScrollReveal>

          {/* Right Column: 4 Tilted Polaroid Social Post Cards */}
          <ScrollReveal animation="slide-right" delay={200}>
          <div>
            <div style={{ marginBottom: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#A38349', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                <Sparkles size={14} />
                <span>COMMUNITY & ATELIER JOURNAL</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
                  fontWeight: 400,
                  color: '#0F3E36',
                  lineHeight: 1.18,
                }}
              >
                As Seen On Instagram
              </h2>
            </div>

            {/* 2x2 Tilted Polaroid Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.4rem',
              }}
              className="polaroid-grid"
            >
              {socialPosts.map((post) => (
                <a
                  key={post.id}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'relative',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(163, 131, 73, 0.25)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'block',
                    textDecoration: 'none',
                    boxShadow: '0 10px 30px rgba(15, 62, 54, 0.07)',
                    transform: `rotate(${post.rotation})`,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="tilted-polaroid-card"
                >
                  {/* Image Box */}
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img
                      src={post.image}
                      alt={post.tag}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                      className="polaroid-img"
                    />

                    {/* Location Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: 'rgba(250, 243, 232, 0.95)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(163, 131, 73, 0.4)',
                        borderRadius: '999px',
                        padding: '0.25rem 0.65rem',
                        color: '#0F3E36',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                      }}
                    >
                      📍 {post.tag}
                    </div>
                  </div>

                  {/* Post Footer with Likes & Comments */}
                  <div style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#A38349', fontSize: '0.75rem', fontWeight: 600 }}>
                          <Heart size={14} fill="#A38349" />
                          <span>{post.likes}</span>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#72847C', fontSize: '0.75rem' }}>
                          <MessageCircle size={14} />
                          <span>{post.comments}</span>
                        </span>
                      </div>
                      <ExternalLink size={13} style={{ color: '#A38349' }} />
                    </div>

                    <p style={{ color: '#455850', fontSize: '0.75rem', lineHeight: 1.35, margin: 0 }}>
                      {post.caption}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .tilted-polaroid-card:hover {
          transform: rotate(0deg) translateY(-8px) scale(1.03) !important;
          border-color: #A38349 !important;
          box-shadow: 0 20px 40px rgba(15, 62, 54, 0.15) !important;
          z-index: 10;
        }
        .tilted-polaroid-card:hover .polaroid-img {
          transform: scale(1.08);
        }
        .follow-profile-btn {
          white-space: nowrap !important;
        }
        .follow-profile-btn span {
          white-space: nowrap !important;
        }
        .follow-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(15, 62, 54, 0.3) !important;
        }
        @media (max-width: 1024px) {
          .insta-social-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .polaroid-grid {
            grid-template-columns: 1fr !important;
          }
          .tilted-polaroid-card {
            transform: none !important;
          }
          .follow-profile-btn {
            padding: 0.75rem 0.85rem !important;
            font-size: 0.72rem !important;
            gap: 0.35rem !important;
          }
        }
      `}</style>
    </section>
  );
};
