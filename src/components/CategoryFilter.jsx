import React from 'react';
import { CATEGORIES } from '../data/products';

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div 
      className="category-filter-wrapper"
      role="tablist"
      aria-label="Filter products by bakery category"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {CATEGORIES.map(category => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onSelectCategory(category)}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.88rem',
              fontWeight: isActive ? 600 : 500,
              backgroundColor: isActive ? 'var(--text-primary)' : 'var(--bg-secondary)',
              color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
              border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-medium)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

