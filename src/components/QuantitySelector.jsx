import React from 'react';
import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ quantity, onChange, min = 1, max = 99, size = 'md' }) {
  const isSmall = size === 'sm';

  const handleDecrement = (e) => {
    e.preventDefault();
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div 
      className="quantity-selector"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-pill)',
        backgroundColor: '#FFFFFF',
        padding: isSmall ? '2px 4px' : '4px 6px',
        userSelect: 'none'
      }}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        style={{
          border: 'none',
          background: 'none',
          cursor: quantity <= min ? 'not-allowed' : 'pointer',
          opacity: quantity <= min ? 0.35 : 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isSmall ? '26px' : '32px',
          height: isSmall ? '26px' : '32px',
          borderRadius: '50%',
          color: 'var(--text-primary)',
          transition: 'background-color 0.15s ease'
        }}
      >
        <Minus size={isSmall ? 14 : 16} />
      </button>

      <span 
        aria-live="polite"
        style={{
          minWidth: isSmall ? '24px' : '36px',
          textAlign: 'center',
          fontWeight: 600,
          fontSize: isSmall ? '0.85rem' : '0.95rem',
          color: 'var(--text-primary)'
        }}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        style={{
          border: 'none',
          background: 'none',
          cursor: quantity >= max ? 'not-allowed' : 'pointer',
          opacity: quantity >= max ? 0.35 : 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isSmall ? '26px' : '32px',
          height: isSmall ? '26px' : '32px',
          borderRadius: '50%',
          color: 'var(--text-primary)',
          transition: 'background-color 0.15s ease'
        }}
      >
        <Plus size={isSmall ? 14 : 16} />
      </button>
    </div>
  );
}

