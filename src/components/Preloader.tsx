import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#F5EEE4',
        backgroundImage: 'radial-gradient(circle at center, rgba(163, 131, 73, 0.15) 0%, rgba(245, 238, 228, 0.98) 70%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      {/* Gold Crest Logo */}
      <div style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
        <img
          src="/img/scarletlogo.png"
          alt="Scarlet Emblem"
          className="animate-pulse-gold"
          style={{
            height: '160px',
            maxWidth: '90vw',
            width: 'auto',
            objectFit: 'contain',
            margin: '0 auto',
          }}
        />
      </div>

      {/* Progress Bar Container */}
      <div
        style={{
          width: '260px',
          height: '2px',
          backgroundColor: 'rgba(163, 131, 73, 0.2)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--gold-gradient)',
            boxShadow: '0 0 12px var(--gold-primary)',
            transition: 'width 0.15s ease-out',
          }}
        />
      </div>

      {/* Percentage Counter */}
      <div
        style={{
          marginTop: '0.8rem',
          textAlign: 'center',
          width: '260px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.9rem',
            color: 'var(--gold-primary)',
            fontWeight: 600,
            letterSpacing: '0.1em',
          }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};
