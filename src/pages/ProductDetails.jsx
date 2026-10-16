import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ShieldAlert, Sparkles, Check, ShoppingBag, Heart } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../utils/currency';
import ImageWithFallback from '../components/ImageWithFallback';
import QuantitySelector from '../components/QuantitySelector';
import ProductGrid from '../components/ProductGrid';

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Initialize selected option when product changes
  useEffect(() => {
    if (product?.options && product.options.length > 0) {
      setSelectedOption(product.options[0]);
    } else {
      setSelectedOption(null);
    }
    setQuantity(1);
    setAddedSuccess(false);
    window.scrollTo(0, 0);
  }, [id, product]);

  // Invalid Product ID Handling
  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{
          maxWidth: '520px',
          margin: '0 auto',
          padding: '3rem 2rem',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border-light)'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Bake Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            The item you are looking for may have been rotated out of today's oven schedule or the link is invalid.
          </p>
          <Link to="/shop" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Return to Bakery Catalogue</span>
          </Link>
        </div>
      </div>
    );
  }

  // Calculate dynamic price based on selected option
  const effectivePrice = product.price + (selectedOption?.priceModifier || 0);
  const relatedProducts = getRelatedProducts(product.id, product.category, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOption);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  return (
    <div className="product-details-page" style={{ paddingBottom: '6rem' }}>
      {/* Breadcrumb Navigation */}
      <div 
        style={{
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '1rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
          <Link to="/shop" style={{ color: 'var(--accent-caramel)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
            <ArrowLeft size={14} /> Back to Shop
          </Link>
          <span style={{ color: 'var(--text-muted)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>{product.category}</span>
          <span style={{ color: 'var(--text-muted)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.name}</span>
        </div>
      </div>

      {/* Main Details Grid */}
      <section className="container" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Product Gallery / Large Photo */}
          <div>
            <div 
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-light)',
                backgroundColor: '#FFFFFF'
              }}
            >
              <ImageWithFallback
                src={product.imageUrl}
                alt={product.name}
                aspectRatio="1/1"
              />
            </div>

            {/* Quick Guarantees Under Image */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1.25rem'
              }}
            >
              <div style={{
                padding: '0.85rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.82rem'
              }}>
                <Clock size={16} color="var(--accent-caramel)" />
                <span>{product.leadTime || 'Fresh daily'}</span>
              </div>

              <div style={{
                padding: '0.85rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.82rem'
              }}>
                <Users size={16} color="var(--accent-caramel)" />
                <span>{product.servings || 'Individual / Share'}</span>
              </div>
            </div>
          </div>

          {/* Details & Customisation Section */}
          <div style={{ maxWidth: '560px' }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--accent-caramel)',
              backgroundColor: 'var(--accent-caramel-light)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '0.75rem'
            }}>
              {product.category}
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              {product.name}
            </h1>

            {/* Price display with real-time variation calculation */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}>
                {formatNaira(effectivePrice)}
              </span>

              {selectedOption?.priceModifier > 0 && (
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-caramel)', fontWeight: 500 }}>
                  (Includes {formatNaira(selectedOption.priceModifier)} for selected size/tier)
                </span>
              )}
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              {product.description}
            </p>

            {/* Options Selection (Sizes, Flavours or Packs) */}
            {product.options && product.options.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <label className="form-label" style={{ fontSize: '0.92rem', marginBottom: '0.65rem' }}>
                  Select Size / Presentation:
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {product.options.map((opt, idx) => {
                    const isSelected = selectedOption?.name === opt.name;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedOption(opt)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1.1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: isSelected ? '2px solid var(--accent-caramel)' : '1px solid var(--border-medium)',
                          backgroundColor: isSelected ? 'var(--accent-caramel-light)' : '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontWeight: isSelected ? 700 : 500, color: 'var(--text-primary)' }}>
                          {opt.name}
                        </span>
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-caramel)' }}>
                          {opt.priceModifier > 0 ? `+${formatNaira(opt.priceModifier)}` : 'Standard'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart Row */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Quantity
                </span>
                <QuantitySelector
                  quantity={quantity}
                  onChange={setQuantity}
                />
              </div>

              <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'transparent', marginBottom: '0.35rem' }}>
                  Action
                </span>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`btn btn-lg ${addedSuccess ? 'btn-secondary' : 'btn-primary'}`}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    gap: '0.6rem'
                  }}
                >
                  {addedSuccess ? (
                    <>
                      <Check size={20} />
                      <span>Added to Basket!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={20} />
                      <span>Add to Basket &bull; {formatNaira(effectivePrice * quantity)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Custom Cake Enquiry Link Callout if on a cake page */}
            {product.category === 'Celebration Cakes' && (
              <div 
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-muted)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                    Need multi-tiered or bespoke theme styling?
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Our master decorators can tailor colors, florals, and tiered architectures.
                  </p>
                </div>
                <Link to="/custom-cakes" className="btn btn-secondary btn-sm" style={{ flexShrink: 0 }}>
                  Custom Order
                </Link>
              </div>
            )}

            {/* Ingredients & Allergens Accordion/Card */}
            <div 
              style={{
                borderTop: '1px solid var(--border-medium)',
                paddingTop: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {product.ingredients && (
                <div>
                  <h4 style={{ fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-caramel)', marginBottom: '0.4rem' }}>
                    Artisanal Ingredients
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {product.ingredients.join(' • ')}
                  </p>
                </div>
              )}

              {product.allergens && (
                <div>
                  <h4 style={{ fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldAlert size={15} color="#C68B59" /> Allergen Notice
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Contains: {product.allergens.join(', ')}. Prepared in an artisanal kitchen handling wheat flour, dairy, and tree nuts.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section 
          className="section-tight"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-light)'
          }}
        >
          <div className="container">
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-eyebrow">Pair With Your Order</span>
              <h2 className="section-title">You Might Also Adore</h2>
            </div>

            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
}

