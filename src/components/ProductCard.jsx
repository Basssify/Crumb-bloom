import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../utils/currency';
import ImageWithFallback from './ImageWithFallback';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Use default first option if options exist, or null
    const defaultOption = product.options && product.options.length > 0 ? product.options[0] : null;
    addToCart(product, 1, defaultOption);

    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1800);
  };

  return (
    <article 
      className="product-card card-base"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Category Pill Tag */}
      <div 
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          zIndex: 2,
          backgroundColor: 'rgba(253, 251, 247, 0.92)',
          backdropFilter: 'blur(4px)',
          padding: '0.25rem 0.65rem',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
        }}
      >
        {product.category}
      </div>

      {/* Product Image Link */}
      <Link 
        to={`/product/${product.id}`}
        aria-label={`View details for ${product.name}`}
        style={{
          display: 'block',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.name}
          aspectRatio="4/3"
        />

        {/* Hover Overlay Hint */}
        <div 
          className="product-image-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(44, 24, 16, 0.15)',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.25s ease'
          }}
        >
          <span 
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--text-primary)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <Eye size={14} /> View Details
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div 
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <h3 
          style={{
            fontSize: '1.15rem',
            marginBottom: '0.4rem',
            lineHeight: 1.3
          }}
        >
          <Link 
            to={`/product/${product.id}`}
            style={{
              color: 'var(--text-primary)',
              transition: 'color 0.2s'
            }}
          >
            {product.name}
          </Link>
        </h3>

        <p 
          style={{
            fontSize: '0.86rem',
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
            flex: 1,
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.shortDescription}
        </p>

        {/* Footer with Price and Quick Add */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border-light)'
          }}
        >
          <div>
            <span style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '-0.02em'
            }}>
              {formatNaira(product.price)}
            </span>
            {product.options && product.options.length > 1 && (
              <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                options available
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to basket`}
            className={`btn btn-sm ${justAdded ? 'btn-secondary' : 'btn-primary'}`}
            style={{
              padding: '0.5rem 0.95rem',
              fontSize: '0.82rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease'
            }}
          >
            {justAdded ? (
              <>
                <Check size={14} />
                <span>Added!</span>
              </>
            ) : (
              <>
                <Plus size={14} />
                <span>Add to Basket</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

