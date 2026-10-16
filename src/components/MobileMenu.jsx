import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ShoppingBag, Phone, MapPin, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function MobileMenu({ isOpen, onClose, cartCount }) {
  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop Bakes', path: '/shop' },
    { label: 'Custom Cakes', path: '/custom-cakes' },
    { label: 'Our Story', path: '/#story' },
    { label: 'Gallery', path: '/#gallery' },
    { label: 'Contact & Location', path: '/#contact' }
  ];

  return (
    <div 
      className="mobile-drawer-overlay"
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(32, 18, 11, 0.75)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        className="mobile-drawer-content"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        style={{
          width: '85%',
          maxWidth: '380px',
          height: '100%',
          backgroundColor: '#FDFBF7',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.75rem 1.5rem',
          boxShadow: '-8px 0 25px rgba(0, 0, 0, 0.2)',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--border-light)'
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: 'var(--text-primary)'
            }}>
              CRUMB & BLOOM
            </span>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Artisanal Bakery & Patisserie
            </div>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: 'none',
              padding: '0.4rem',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ margin: '1.5rem 0', flex: 1, overflowY: 'auto' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? 'var(--accent-caramel)' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--accent-caramel-light)' : 'transparent',
                    transition: 'all 0.2s ease'
                  })}
                >
                  <span>{link.label}</span>
                  {link.path === '/custom-cakes' && (
                    <span style={{
                      fontSize: '0.7rem',
                      background: '#E8B4B8',
                      color: '#2C1810',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '10px',
                      fontWeight: 600
                    }}>
                      Bespoke
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              <MapPin size={15} color="var(--accent-caramel)" />
              <span>Studio Address</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {SITE_CONFIG.contact.address}, {SITE_CONFIG.contact.city}
            </p>
          </div>
        </nav>

        {/* Drawer Footer Actions */}
        <div style={{
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <Link
            to="/cart"
            onClick={onClose}
            className="btn btn-primary btn-full"
            style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
          >
            <ShoppingBag size={18} />
            <span>View Shopping Basket ({cartCount})</span>
          </Link>

          <Link
            to="/custom-cakes"
            onClick={onClose}
            className="btn btn-outline btn-full"
            style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
          >
            <Sparkles size={16} color="var(--accent-caramel)" />
            <span>Design Custom Cake</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
