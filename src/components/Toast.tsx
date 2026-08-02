import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 3000,
        backgroundColor: '#0E1A14',
        border: '1px solid var(--gold-primary)',
        boxShadow: 'var(--shadow-gold)',
        borderRadius: 'var(--radius-sm)',
        padding: '0.85rem 1.4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: 'var(--gold-light)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.85rem',
        animation: 'floatSoft 0.4s ease-out',
      }}
    >
      <Sparkles size={16} style={{ color: 'var(--gold-primary)' }} />
      <span>{toastMessage}</span>
    </div>
  );
};
