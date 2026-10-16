import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles, Info } from 'lucide-react';
import { isValidEmail } from '../utils/validation';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ submitted: false, error: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !isValidEmail(email)) {
      setStatus({ submitted: false, error: 'Please enter a valid email address.' });
      return;
    }

    // Honest handling: state that this is a portfolio demonstration
    setStatus({ submitted: true, error: '' });
  };

  return (
    <section 
      className="section-tight"
      style={{
        backgroundColor: '#FAF4EB',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: '#FFFFFF',
          padding: '0.35rem 0.85rem',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.8rem',
          color: 'var(--accent-caramel)',
          fontWeight: 600,
          marginBottom: '1rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Sparkles size={14} />
          <span>The Crumb & Bloom Journal</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', marginBottom: '0.75rem' }}>
          Secret Bakes & Weekend Menus
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Join our intimate circle of pastry lovers. Be the first to hear about seasonal cake drops, limited viennoiserie flavors, and private celebration bookings.
        </p>

        {status.submitted ? (
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              padding: '1.75rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
              animation: 'slideUpFade 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-success)', fontWeight: 600, marginBottom: '0.5rem' }}>
              <CheckCircle size={20} />
              <span>Demonstration Subscription Recorded!</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Thank you for exploring this feature with <strong>{email}</strong>.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-muted)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-pill)'
            }}>
              <Info size={13} />
              <span>Portfolio Notice: In production, this integrates with Klaviyo or Mailchimp.</span>
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxWidth: '520px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status.error) setStatus({ ...status, error: '' });
                }}
                placeholder="Enter your email address..."
                aria-label="Email address for bakery newsletter"
                className={`form-input ${status.error ? 'error' : ''}`}
                style={{
                  flex: 1,
                  minWidth: '240px',
                  borderRadius: 'var(--radius-pill)',
                  paddingLeft: '1.25rem',
                  paddingRight: '1.25rem'
                }}
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ flexShrink: 0 }}
              >
                Subscribe
              </button>
            </div>

            {status.error && (
              <span style={{ fontSize: '0.8rem', color: 'var(--color-error)', textAlign: 'left', paddingLeft: '1rem' }}>
                {status.error}
              </span>
            )}

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
              <span>We respect your inbox. No spam, only freshly baked stories.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

