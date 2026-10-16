import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function TestimonialsSection() {
  return (
    <section 
      className="section"
      style={{
        backgroundColor: '#FDFBF7',
        borderTop: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Moments Celebrated</span>
          <h2 className="section-title">Loved by Lagos Pastry Enthusiasts</h2>
          <p className="section-subtitle">
            From intimate morning coffees to milestone weddings, hear what our patrons have to say.
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            backgroundColor: 'var(--bg-muted)',
            padding: '0.3rem 0.8rem',
            borderRadius: 'var(--radius-pill)',
            marginTop: '0.75rem'
          }}>
            <Award size={13} color="var(--accent-caramel)" />
            <span>Clearly identified sample customer testimonials for portfolio showcase</span>
          </div>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem'
          }}
        >
          {SITE_CONFIG.sampleTestimonials.map(t => (
            <div 
              key={t.id}
              className="card-base"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div>
                {/* Star Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#C68B59" color="#C68B59" />
                  ))}
                </div>

                <Quote size={28} color="rgba(198, 139, 89, 0.25)" style={{ marginBottom: '0.5rem' }} />

                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem'
                }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    {t.author}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-caramel)', fontWeight: 500 }}>
                    {t.role}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

