import React from 'react';
import ProductCard from './ProductCard';
import { SearchX } from 'lucide-react';

export default function ProductGrid({ products, onResetFilters }) {
  if (!products || products.length === 0) {
    return (
      <div 
        className="empty-products-state"
        style={{
          textAlign: 'center',
          padding: '4rem 1.5rem',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-medium)',
          maxWidth: '560px',
          margin: '2rem auto'
        }}
      >
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem auto',
          color: 'var(--accent-caramel)'
        }}>
          <SearchX size={32} />
        </div>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          No bakes found
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
          We couldn't find any items matching your selected criteria or search term. Try resetting your filters to explore our full daily bakery menu.
        </p>
        {onResetFilters && (
          <button 
            type="button" 
            onClick={onResetFilters}
            className="btn btn-outline btn-sm"
          >
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div 
      className="product-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 'clamp(1.25rem, 2.5vw, 2rem)'
      }}
    >
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

