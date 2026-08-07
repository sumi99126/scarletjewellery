import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface HeroCardItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const Hero: React.FC = () => {
  const { setActiveCategory } = useShop();
  const [isPaused, setIsPaused] = useState(false);

  const initialImages: HeroCardItem[] = [
    {
      id: 'p1',
      title: 'Heart Gold Pendant',
      category: 'necklaces',
      image: '/img/p1.png',
    },
    {
      id: 'p2',
      title: 'Rings & Hand Harness',
      category: 'rings',
      image: '/img/p2.png',
    },
    {
      id: 'p3',
      title: 'Emerald Stacking Ring',
      category: 'haute-joaillerie',
      image: '/img/p3.png',
    },
    {
      id: 'p4',
      title: 'Vintage Gold Watches',
      category: 'watches',
      image: '/img/p5.png',
    },
    {
      id: 'p5',
      title: 'Zircon Bracelet Stack',
      category: 'bracelets',
      image: '/img/p4.png',
    },
    {
      id: 'p6',
      title: 'Swan & Butterfly Chokers',
      category: 'necklaces',
      image: '/img/p6.png',
    },
    {
      id: 'p7',
      title: 'Rose Gold Deluxe Watches',
      category: 'watches',
      image: '/img/p7.png',
    },
  ];

  const [cards, setCards] = useState(initialImages);

  const handleNext = () => {
    setCards((prev) => {
      const nextArr = [...prev];
      const first = nextArr.shift()!;
      nextArr.push(first);
      return nextArr;
    });
  };

  const handlePrev = () => {
    setCards((prev) => {
      const nextArr = [...prev];
      const last = nextArr.pop()!;
      nextArr.unshift(last);
      return nextArr;
    });
  };

  // Continuous auto-loop carousel interval every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleCardClick = (cat: string) => {
    setActiveCategory(cat as any);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#F5EEE4',
        padding: '2.5rem 1.5rem 1.5rem 1.5rem',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="animate-fade-in-up"
    >
      <div className="container" style={{ maxWidth: '1360px' }}>
        {/* Luxury Section Heading above Carousel */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="hero-heading-block">
          <span
            style={{
              color: '#A38349',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.4rem',
            }}
            className="hero-sub-tag"
          >
            Exquisite Fine Jewelry Collection
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
              fontWeight: 600,
              color: '#0F3E36',
              lineHeight: 1.22,
              letterSpacing: '0.02em',
            }}
            className="hero-h1-heading"
          >
            <span>Crafted for Moments of Pure</span>
            <br />
            <span>Radiance & Luxury</span>
          </h1>
        </div>

        {/* 5-Card Arc Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.2rem',
            alignItems: 'center',
            marginBottom: '1rem',
            minHeight: '435px',
          }}
          className="hero-cards-grid"
        >
          {cards.slice(0, 5).map((card, idx) => {
            const isCenter = idx === 2;
            const isNearCenter = Math.abs(idx - 2) === 1;

            // Height mapping for 5-card arc
            const cardHeight = isCenter ? '435px' : isNearCenter ? '365px' : '320px';
            
            // Inward tilt angle mapping
            const rotationDegree = idx === 0 ? -5 : idx === 1 ? -2.5 : idx === 2 ? 0 : idx === 3 ? 2.5 : 5;
            const translateYVal = idx === 0 || idx === 4 ? 14 : idx === 1 || idx === 3 ? 4 : -10;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.category)}
                style={{
                  position: 'relative',
                  height: cardHeight,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isCenter
                    ? '0 25px 50px rgba(15, 62, 54, 0.25), 0 0 25px rgba(163, 131, 73, 0.25)'
                    : '0 10px 25px rgba(15, 62, 54, 0.1)',
                  border: isCenter ? '2px solid #A38349' : '1px solid rgba(163, 131, 73, 0.25)',
                  transform: `rotate(${rotationDegree}deg) translateY(${translateYVal}px)`,
                }}
                className={`hero-card-item card-pos-${idx}`}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="card-img"
                />
              </div>
            );
          })}
        </div>

        {/* Circular Arrow Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2.2rem' }}>
          <button
            onClick={handlePrev}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.4)',
              color: '#0F3E36',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(15, 62, 54, 0.08)',
              transition: 'var(--transition-fast)',
            }}
            className="arrow-btn"
            title="Previous"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(163, 131, 73, 0.4)',
              color: '#0F3E36',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(15, 62, 54, 0.08)',
              transition: 'var(--transition-fast)',
            }}
            className="arrow-btn"
            title="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .hero-card-item:hover .card-img {
          transform: scale(1.08);
        }
        .arrow-btn:hover {
          border-color: #A38349 !important;
          background: #FAF5EE !important;
          color: #A38349 !important;
        }
        @media (max-width: 768px) {
          .hero-sub-tag {
            font-size: 0.66rem !important;
            letter-spacing: 0.18em !important;
          }
          .hero-heading-block {
            margin-bottom: 2.5rem !important;
          }
          .hero-h1-heading {
            font-size: 1.7rem !important;
            line-height: 1.25 !important;
          }
          .hero-h1-heading span {
            white-space: nowrap !important;
            display: inline-block !important;
          }
          .hero-cards-grid {
            grid-template-columns: 0.38fr 1.3fr 0.38fr !important;
            gap: 0.35rem !important;
            min-height: 270px !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          .card-pos-0, .card-pos-4 {
            display: none !important;
          }
          .card-pos-1 {
            display: block !important;
            height: 220px !important;
            border-radius: 14px !important;
            opacity: 0.65 !important;
            transform: scale(0.92) translateX(-15px) !important;
          }
          .card-pos-2 {
            display: block !important;
            height: 275px !important;
            border-radius: 20px !important;
            opacity: 1 !important;
            transform: scale(1) translateY(-6px) !important;
            z-index: 5 !important;
          }
          .card-pos-3 {
            display: block !important;
            height: 220px !important;
            border-radius: 14px !important;
            opacity: 0.65 !important;
            transform: scale(0.92) translateX(15px) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-sub-tag {
            font-size: 0.62rem !important;
          }
          .hero-heading-block {
            margin-bottom: 2.2rem !important;
          }
          .hero-h1-heading {
            font-size: 1.48rem !important;
            line-height: 1.25 !important;
          }
          .hero-cards-grid {
            grid-template-columns: 0.36fr 1.35fr 0.36fr !important;
            gap: 0.25rem !important;
            min-height: 240px !important;
          }
          .card-pos-1 {
            height: 195px !important;
            border-radius: 12px !important;
            transform: scale(0.9) translateX(-10px) !important;
          }
          .card-pos-2 {
            height: 245px !important;
            border-radius: 16px !important;
          }
          .card-pos-3 {
            height: 195px !important;
            border-radius: 12px !important;
            transform: scale(0.9) translateX(10px) !important;
          }
        }
      `}</style>
    </section>
  );
};
