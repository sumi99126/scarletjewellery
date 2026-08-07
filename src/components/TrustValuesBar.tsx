import React from 'react';
import { RotateCcw, ShieldCheck, Gem, Headphones } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TrustValuesBar: React.FC = () => {
  const trustItems = [
    {
      id: 1,
      icon: <RotateCcw size={20} />,
      title: 'Easy Returns',
      desc: '30-day return policy',
      delay: 0,
    },
    {
      id: 2,
      icon: <ShieldCheck size={20} />,
      title: 'Secure Payment',
      desc: '100% secure checkout',
      delay: 100,
    },
    {
      id: 3,
      icon: <Gem size={20} />,
      title: 'Premium Quality',
      desc: 'Anti-tarnish 18K gold',
      delay: 200,
    },
    {
      id: 4,
      icon: <Headphones size={20} />,
      title: 'Dedicated Support',
      desc: '24/7 customer assistance',
      delay: 300,
    },
  ];

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
        {/* Trust & Service Values Grid (4 Equal Columns & Equal Row Heights) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            alignItems: 'stretch',
          }}
          className="trust-values-grid"
        >
          {trustItems.map((item) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={item.delay} style={{ height: '100%', display: 'flex' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '78px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '1rem 1.1rem',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(163, 131, 73, 0.25)',
                  boxShadow: '0 10px 25px rgba(15, 62, 54, 0.05)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  boxSizing: 'border-box',
                }}
                className="trust-card"
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(163, 131, 73, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#A38349',
                    flexShrink: 0,
                  }}
                  className="trust-icon-box"
                >
                  {item.icon}
                </div>

                {/* Text Container */}
                <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                  <h4
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#0F3E36',
                      marginBottom: '0.15rem',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    className="trust-title"
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.74rem',
                      color: '#5A6B63',
                      margin: 0,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    className="trust-desc"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .trust-values-grid > div {
          height: 100% !important;
          display: flex !important;
        }
        .trust-card {
          width: 100% !important;
          height: 100% !important;
          box-sizing: border-box !important;
        }
        .trust-card:hover {
          transform: translateY(-3px);
          border-color: #A38349 !important;
          box-shadow: 0 12px 30px rgba(15, 62, 54, 0.12) !important;
        }
        @media (max-width: 1024px) {
          .trust-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 1fr !important;
            gap: 0.85rem !important;
          }
        }
        @media (max-width: 640px) {
          .trust-values-section {
            padding-top: 0.6rem !important;
            padding-bottom: 1.5rem !important;
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          .trust-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 1fr !important;
            gap: 0.5rem !important;
            align-items: stretch !important;
          }
          .trust-card {
            padding: 0.75rem 0.65rem !important;
            gap: 0.5rem !important;
            border-radius: 14px !important;
            min-height: 68px !important;
            height: 100% !important;
          }
          .trust-icon-box {
            width: 32px !important;
            height: 32px !important;
          }
          .trust-icon-box svg {
            width: 16px !important;
            height: 16px !important;
          }
          .trust-title {
            font-size: 0.74rem !important;
            line-height: 1.2 !important;
          }
          .trust-desc {
            font-size: 0.63rem !important;
            line-height: 1.2 !important;
          }
        }
      `}</style>
    </section>
  );
};
