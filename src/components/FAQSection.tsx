import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ScrollReveal } from './ScrollReveal';

export const FAQSection: React.FC = () => {
  const { setIsBookingOpen } = useShop();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Are your jewelry pieces anti-tarnish and long-lasting?',
      answer: 'Yes! All our artificial jewelry pieces feature premium gold plating with advanced anti-tarnish protective coating to ensure long-lasting shine and luster.',
    },
    {
      question: 'What materials are used in your artificial jewelry?',
      answer: 'Our pieces are crafted using high-grade stainless steel and premium alloy bases, studded with AAA+ cubic zirconia, synthetic emeralds, and crystal stones.',
    },
    {
      question: 'What is the estimated delivery time across Pakistan?',
      answer: 'We provide nationwide express delivery within 3 to 5 business days. All orders are carefully packed in luxury gift boxes with full tracking updates.',
    },
    {
      question: 'How should I care for my fashion jewelry to maintain its shine?',
      answer: 'To preserve the sparkle, avoid direct contact with perfumes, hairsprays, and harsh chemicals. Store your jewelry in the pouch provided when not in use.',
    },
    {
      question: 'What payment methods do you accept for online orders?',
      answer: 'We offer Cash on Delivery (COD) across Pakistan, as well as Direct Bank Transfers (IBFT) and online credit/debit card payments.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      style={{
        backgroundColor: '#000000',
        padding: '4rem 1.5rem 4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100vw',
        width: '100%',
      }}
    >
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#E6C687', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            <HelpCircle size={14} />
            <span>FAQS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>
        </ScrollReveal>

        {/* Minimal Accordion List (5 Items for Artificial Jewelry) */}
        <ScrollReveal animation="fade-up" delay={150}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#070A08',
                  border: isOpen ? '1px solid rgba(230, 198, 135, 0.45)' : '1px solid rgba(230, 198, 135, 0.18)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.1rem 1.4rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.94rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                  }}
                  className="faq-minimal-btn"
                >
                  <span style={{ color: isOpen ? '#FAF0D9' : '#FFFFFF', transition: 'color 0.2s ease' }}>
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'rgba(230, 198, 135, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#E6C687' : 'rgba(255, 255, 255, 0.5)',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.4rem 1.2rem 1.4rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-sans)',
                      borderTop: '1px dashed rgba(230, 198, 135, 0.15)',
                      paddingTop: '0.85rem',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollReveal>

        {/* Minimal Sub-Link */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.82rem' }}>
            Have any other questions?{' '}
            <button
              onClick={() => setIsBookingOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#E6C687',
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Contact Support
            </button>
          </span>
        </div>
      </div>

      <style>{`
        .faq-minimal-btn:hover span {
          color: #E6C687 !important;
        }
      `}</style>
    </section>
  );
};
