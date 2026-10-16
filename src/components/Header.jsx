import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Custom Cakes', path: '/custom-cakes', highlight: true },
    { label: 'Our Story', path: '/#story' },
    { label: 'Gallery', path: '/#gallery' },
    { label: 'Contact', path: '/#contact' }
  ];

  return (
    <>
      <header 
        className="site-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(253, 251, 247, 0.94)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-light)',
          transition: 'all 0.25s ease'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            gap: '1rem'
          }}
        >
          {/* Brand Wordmark */}
          <Link 
            to="/" 
            className="brand-logo"
            aria-label="CRUMB & BLOOM Homepage"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none'
            }}
          >
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              lineHeight: 1
            }}>
              CRUMB & BLOOM
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent-caramel)',
              marginTop: '0.25rem'
            }}>
              Artisanal Bakery & Patisserie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="desktop-nav"
            aria-label="Main Navigation"
            style={{
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => 
                  `nav-item-link ${isActive ? 'active' : ''}`
                }
                style={({ isActive }) => ({
                  fontSize: '0.92rem',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '0.25rem 0',
                  letterSpacing: '0.02em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                })}
              >
                {item.label}
                {item.highlight && (
                  <span style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-caramel)'
                  }} />
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Quick Custom Cake CTA for desktop */}
            <Link
              to="/custom-cakes"
              className="btn btn-subtle btn-sm hide-on-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.82rem',
                padding: '0.45rem 0.95rem'
              }}
            >
              <Sparkles size={14} color="var(--accent-caramel)" />
              <span>Custom Cake</span>
            </Link>

            {/* Cart Icon Button */}
            <Link
              to="/cart"
              className="cart-icon-btn"
              aria-label={`Shopping basket, ${cartCount} items`}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-light)',
                transition: 'all 0.2s ease'
              }}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span 
                  className="cart-badge-count"
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    backgroundColor: 'var(--accent-caramel)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    minWidth: '20px',
                    height: '20px',
                    borderRadius: 'var(--radius-pill)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 4px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: 'var(--text-primary)',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        cartCount={cartCount}
      />
    </>
  );
}
