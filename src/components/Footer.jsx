import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer 
      className="site-footer"
      style={{
        backgroundColor: '#20120B',
        color: '#FAF6F0',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div 
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Column */}
          <div className="footer-col">
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: '#FFFFFF',
              display: 'block',
              marginBottom: '0.35rem'
            }}>
              CRUMB & BLOOM
            </span>
            <p style={{
              color: '#C68B59',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              "{SITE_CONFIG.tagline}"
            </p>
            <p style={{ color: 'rgba(250, 246, 240, 0.75)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {SITE_CONFIG.shortDescription}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.85rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-pill)', fontSize: '0.78rem', color: '#E8B4B8' }}>
              <Sparkles size={14} color="#C68B59" />
              <span>Small-batch artisan kitchen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-serif)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em'
            }}>
              Explore Our Kitchen
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <Link to="/shop" style={{ color: 'rgba(250, 246, 240, 0.8)', transition: 'color 0.2s' }}>
                  Artisanal Shop & Bakes
                </Link>
              </li>
              <li>
                <Link to="/custom-cakes" style={{ color: '#E8B4B8', fontWeight: 600 }}>
                  Custom Celebration Cakes
                </Link>
              </li>
              <li>
                <Link to="/#story" style={{ color: 'rgba(250, 246, 240, 0.8)' }}>
                  Our Philosophy & Story
                </Link>
              </li>
              <li>
                <Link to="/#gallery" style={{ color: 'rgba(250, 246, 240, 0.8)' }}>
                  Visual Patisserie Gallery
                </Link>
              </li>
              <li>
                <Link to="/cart" style={{ color: 'rgba(250, 246, 240, 0.8)' }}>
                  Shopping Basket
                </Link>
              </li>
              <li>
                <Link to="/#contact" style={{ color: 'rgba(250, 246, 240, 0.8)' }}>
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Hours */}
          <div className="footer-col">
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-serif)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em'
            }}>
              Opening & Oven Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              {SITE_CONFIG.openingHours.map((slot, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px dashed rgba(255,255,255,0.1)' }}>
                  <span style={{ color: 'rgba(250, 246, 240, 0.7)' }}>{slot.days}</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 500 }}>{slot.hours}</span>
                </div>
              ))}
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#C68B59', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={14} />
                <span>Morning viennoiserie hot at 7:30 AM</span>
              </div>
            </div>
          </div>

          {/* Studio Location & Contact */}
          <div id="contact" className="footer-col">
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-serif)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em'
            }}>
              Studio & Orders
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'rgba(250, 246, 240, 0.8)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="#C68B59" style={{ flexShrink: 0, marginTop: '2px' }} />
                <a href={SITE_CONFIG.contact.googleMapsEmbedUrl} target="_blank" rel="noreferrer">
                  {SITE_CONFIG.contact.address}, {SITE_CONFIG.contact.city}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="#C68B59" style={{ flexShrink: 0 }} />
                <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^+\d]/g, '')}`}>{SITE_CONFIG.contact.phone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="#C68B59" style={{ flexShrink: 0 }} />
                <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
              </div>

              <div style={{ marginTop: '0.75rem' }}>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="btn btn-outline btn-sm"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    color: '#FAF6F0',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  Send Direct Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Portfolio Disclaimer & Copyright */}
        <div 
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'rgba(250, 246, 240, 0.6)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
            <span style={{ marginLeft: '0.75rem', color: '#C68B59' }}>
              Crafted with authentic artisanal passion.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} color="#C68B59" />
              <span>Commercial Showcase Portfolio</span>
            </span>
            <a href="/IMAGE-CREDITS.txt" style={{ color: 'rgba(250, 246, 240, 0.8)' }}>
              Photo credits
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
