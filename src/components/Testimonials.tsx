import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      quote: "The Queen Solitaire Ring is even more breathtaking in person. The gold shine, zircon brilliance, and fit feel exceptionally premium!",
      author: "Sophia R.",
      location: "Lahore",
      itemPurchased: "Queen Solitaire Ring",
      rating: 5,
    },
    {
      id: 2,
      quote: "Ordered the Laura Chain Bracelet for my anniversary. The anti-tarnish finish is gorgeous, packaging is luxury grade, and delivery was fast.",
      author: "Ahmad K.",
      location: "Karachi",
      itemPurchased: "laura Chain Bracelet",
      rating: 5,
    },
    {
      id: 3,
      quote: "The Teardrop Diamond Necklace is my go-to piece now. It sits so comfortably and gets endless compliments at every event!",
      author: "Zara",
      location: "Islamabad",
      itemPurchased: "Teardrop Diamond Necklace",
      rating: 5,
    },
    {
      id: 4,
      quote: "The Glossy Gold Steel Watch exceeded all my expectations! Superior anti-tarnish quality and fast 2-day delivery across Pakistan.",
      author: "Hania S.",
      location: "Faisalabad",
      itemPurchased: "Glossy Gold Steel Watch",
      rating: 5,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#F5EEE4',
        padding: '3.5rem 1.5rem 4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              color: '#A38349',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.4rem',
            }}
          >
            CLIENT STORIES & REVIEWS
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
              fontWeight: 600,
              color: '#0F3E36',
              lineHeight: 1.15,
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* 4 Review Cards Row on Desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="testimonials-grid"
        >
          {reviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(163, 131, 73, 0.25)',
                borderRadius: '20px',
                padding: '1.6rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 8px 25px rgba(15, 62, 54, 0.05)',
                transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
              }}
              className="testimonial-card"
            >
              {/* Quote Icon Accent */}
              <Quote size={24} style={{ color: '#A38349', marginBottom: '0.8rem', opacity: 0.6 }} />

              {/* 5 Gold Stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginBottom: '0.85rem' }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#A38349" style={{ color: '#A38349' }} />
                ))}
              </div>

              {/* Review Text */}
              <p
                style={{
                  color: '#455850',
                  fontSize: '0.85rem',
                  lineHeight: 1.55,
                  marginBottom: '1.5rem',
                  flexGrow: 1,
                  fontStyle: 'italic',
                }}
              >
                "{rev.quote}"
              </p>

              {/* Author & Item */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(163, 131, 73, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F3E36' }}>{rev.author}</span>
                    <CheckCircle2 size={13} style={{ color: '#A38349' }} />
                  </div>
                  <span style={{ fontSize: '0.74rem', color: '#72847C' }}>{rev.location}</span>
                </div>

                <span
                  style={{
                    fontSize: '0.7rem',
                    color: '#0F3E36',
                    backgroundColor: 'rgba(163, 131, 73, 0.12)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    fontWeight: 600,
                  }}
                >
                  {rev.itemPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: #A38349 !important;
          box-shadow: 0 15px 35px rgba(15, 62, 54, 0.12) !important;
        }
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
