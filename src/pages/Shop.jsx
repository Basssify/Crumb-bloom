import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import CategoryFilter from '../components/CategoryFilter';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Products';

  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All Products'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Sync category changes with URL query string
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === 'All Products') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All Products');
    setSearchQuery('');
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filter & Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (selectedCategory !== 'All Products') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    // Sort results
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Featured first, then alphabetical
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="shop-page" style={{ paddingBottom: '5rem' }}>
      {/* Shop Header Banner */}
      <section 
        style={{
          backgroundColor: '#FAF6F0',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="section-eyebrow">Fresh Daily Collection</span>
          <h1 style={{ marginBottom: '0.85rem' }}>The Artisanal Bakery Shop</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Every morning our bakers craft celebration cakes, flaky viennoiserie, brioche doughnuts, and slow-proved sourdough loaves. Order for same-day delivery or pickup.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="container" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
        {/* Search & Sort Controls */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.75rem'
          }}
        >
          {/* Search Box */}
          <div 
            style={{
              position: 'relative',
              flex: '1 1 300px',
              maxWidth: '450px'
            }}
          >
            <Search 
              size={18} 
              color="var(--text-muted)" 
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cakes, croissants, doughnuts..."
              aria-label="Search bakery products"
              className="form-input"
              style={{
                paddingLeft: '2.6rem',
                paddingRight: searchQuery ? '2.4rem' : '1.1rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: '#FFFFFF'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <SlidersHorizontal size={14} /> Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products by"
              className="form-select"
              style={{
                width: 'auto',
                padding: '0.6rem 2rem 0.6rem 1rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.88rem',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Product Name (A–Z)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Result Counter & Active Filters Display */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-light)',
            fontSize: '0.88rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div>
            Showing <strong>{filteredAndSortedProducts.length}</strong> {filteredAndSortedProducts.length === 1 ? 'bake' : 'bakes'}
            {selectedCategory !== 'All Products' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>

          {(selectedCategory !== 'All Products' || searchQuery) && (
            <button
              type="button"
              onClick={handleResetFilters}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-caramel)',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="container">
        <ProductGrid
          products={filteredAndSortedProducts}
          onResetFilters={handleResetFilters}
        />
      </section>
    </div>
  );
}

