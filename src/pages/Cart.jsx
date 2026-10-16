import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ArrowLeft, Trash2, ShieldCheck, Truck, Store, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../utils/currency';
import { SITE_CONFIG } from '../data/siteConfig';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { items, totals, deliveryOption, setDeliveryOption, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="cart-page-empty" style={{ padding: '6rem 1.5rem', minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div 
          className="container"
          style={{
            maxWidth: '540px',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            padding: '3.5rem 2rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px dashed var(--border-medium)'
          }}
        >
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            color: 'var(--accent-caramel)'
          }}>
            <ShoppingBag size={34} />
          </div>

          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Your Basket is Empty
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Looks like you haven't selected any treats yet! Discover our fresh morning pastries, decadent celebration cakes, and flaky viennoiserie.
          </p>

          <Link to="/shop" className="btn btn-primary btn-lg">
            <span>Shop Our Bakes Now</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page" style={{ paddingBottom: '6rem' }}>
      {/* Cart Header */}
      <section 
        style={{
          backgroundColor: '#FAF6F0',
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">Review Your Bakes</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>Shopping Basket</h1>
            </div>

            <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-caramel)', fontWeight: 600, fontSize: '0.9rem' }}>
              <ArrowLeft size={16} /> Continue Exploring Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Main Cart Content */}
      <section className="container" style={{ marginTop: '2.5rem' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Cart Items List */}
          <div style={{ flex: '2 1 500px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '1rem',
              borderBottom: '2px solid var(--border-medium)',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                Item & Details
              </span>
              <button
                type="button"
                onClick={clearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <Trash2 size={13} /> Clear Basket
              </button>
            </div>

            {/* List of items */}
            <div>
              {items.map(item => (
                <CartItem key={item.cartItemId} item={item} />
              ))}
            </div>

            {/* Delivery Method Selector */}
            <div 
              style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)'
              }}
            >
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Fulfillment Preference</span>
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setDeliveryOption('delivery')}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: deliveryOption === 'delivery' ? '2px solid var(--accent-caramel)' : '1px solid var(--border-medium)',
                    backgroundColor: deliveryOption === 'delivery' ? '#FFFFFF' : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontWeight: 600 }}>
                    <Truck size={18} color="var(--accent-caramel)" />
                    <span>Lagos Delivery</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {totals.isFreeDelivery ? 'Free Delivery Qualified!' : `${formatNaira(SITE_CONFIG.delivery.standardFee)} flat fee`}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryOption('pickup')}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: deliveryOption === 'pickup' ? '2px solid var(--accent-caramel)' : '1px solid var(--border-medium)',
                    backgroundColor: deliveryOption === 'pickup' ? '#FFFFFF' : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontWeight: 600 }}>
                    <Store size={18} color="var(--accent-caramel)" />
                    <span>Studio Pickup</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Lekki Phase 1 (Free)
                  </div>
                </button>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Info size={14} color="var(--accent-caramel)" />
                <span>
                  Complimentary doorstep delivery automatically unlocks on bakes totaling over {formatNaira(SITE_CONFIG.delivery.freeThreshold)}.
                </span>
              </div>
            </div>
          </div>

          {/* Order Summary Card */}
          <div style={{ flex: '1 1 320px' }}>
            <div 
              className="card-base"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                position: 'sticky',
                top: '100px'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                Order Summary
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Items Subtotal</span>
                  <span style={{ fontWeight: 600 }}>{formatNaira(totals.subtotal)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {deliveryOption === 'pickup' ? 'Studio Pickup' : 'Estimated Delivery Fee'}
                  </span>
                  <span style={{ fontWeight: 600, color: totals.deliveryFee === 0 ? 'var(--color-success)' : 'inherit' }}>
                    {totals.deliveryFee === 0 ? 'FREE' : formatNaira(totals.deliveryFee)}
                  </span>
                </div>

                {totals.isFreeDelivery && (
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-success)',
                    backgroundColor: 'var(--color-success-bg)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <ShieldCheck size={14} />
                    <span>Free Delivery Reward Applied</span>
                  </div>
                )}

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '2px solid var(--border-medium)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Estimated Total</span>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}>
                    {formatNaira(totals.grandTotal)}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout Action */}
              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="btn btn-primary btn-lg btn-full"
                style={{ marginBottom: '1rem' }}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                Orders are reviewed & scheduled with bakery confirmation via WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

