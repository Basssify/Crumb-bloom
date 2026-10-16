import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../utils/currency';
import ImageWithFallback from './ImageWithFallback';
import QuantitySelector from './QuantitySelector';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const itemSubtotal = item.price * item.quantity;

  return (
    <div 
      className="cart-item-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        gap: '1rem',
        padding: '1.25rem 0',
        borderBottom: '1px solid var(--border-light)',
        alignItems: 'center'
      }}
    >
      {/* Thumbnail */}
      <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
        <ImageWithFallback
          src={item.imageUrl}
          alt={item.name}
          aspectRatio="1/1"
        />
      </div>

      {/* Item Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--text-primary)' }}>
          {item.name}
        </h4>

        {item.selectedOption && (
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-caramel)', fontWeight: 500 }}>
            Option: {item.selectedOption}
          </div>
        )}

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {formatNaira(item.price)} each
        </div>

        {/* Quantity selector on mobile layout */}
        <div className="cart-item-mobile-actions" style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <QuantitySelector
            quantity={item.quantity}
            onChange={(qty) => updateQuantity(item.cartItemId, qty)}
            size="sm"
          />

          <button
            type="button"
            onClick={() => removeFromCart(item.cartItemId)}
            aria-label={`Remove ${item.name} from basket`}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-error)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <Trash2 size={14} />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Line Total */}
      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-primary)'
        }}>
          {formatNaira(itemSubtotal)}
        </span>
      </div>
    </div>
  );
}

