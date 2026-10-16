import React, { useState } from 'react';
/**
 * Image component with fallback to an elegant patisserie card illustration if external image fails
 */
export default function ImageWithFallback({
  src,
  alt = 'Bakery item',
  className = '',
  loading = 'lazy',
  aspectRatio = '4/3'
}) {
  const [error, setError] = useState(!src);
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      className={`img-container ${className}`} 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#F7EFE7',
        aspectRatio
      }}
    >
      {!error && src ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
            opacity: loaded ? 1 : 0.4
          }}
        />
      ) : (
        <div 
          className="img-fallback-wrapper"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #FAF4EB 0%, #EFE3D5 100%)',
            color: '#6A4432',
            padding: '1rem'
          }}
        >
          <svg
            viewBox="0 0 320 190"
            aria-hidden="true"
            focusable="false"
            style={{ display: 'block', width: 'min(100%, 280px)', height: 'auto', marginBottom: '0.6rem' }}
          >
            <rect width="320" height="190" rx="18" fill="#F2DFCF" />
            <circle cx="55" cy="42" r="23" fill="#FFFFFF" opacity=".28" />
            <circle cx="270" cy="62" r="34" fill="#FFFFFF" opacity=".22" />
            <ellipse cx="160" cy="157" rx="103" ry="14" fill="#9D684B" opacity=".17" />
            <ellipse cx="160" cy="145" rx="105" ry="17" fill="#FFF8EF" />
            <ellipse cx="160" cy="143" rx="82" ry="12" fill="#D9AD83" />
            <path d="M91 91 Q160 69 229 91 L221 132 Q160 157 99 132 Z" fill="#F8E4DF" />
            <ellipse cx="160" cy="91" rx="69" ry="19" fill="#FFF9F0" />
            <path d="M98 104 Q111 112 124 104 T150 104 T176 104 T202 104 T224 104" fill="none" stroke="#E8B4B8" strokeWidth="5" strokeLinecap="round" />
            <path d="M127 78 C115 62 132 49 144 65 C151 47 171 53 162 72 C179 59 191 74 172 86 Z" fill="#C86E6B" />
            <circle cx="145" cy="68" r="5" fill="#F7C2A0" />
            <circle cx="164" cy="67" r="5" fill="#F7C2A0" />
            <path d="M184 76 Q204 57 212 68 Q204 84 184 82 Z" fill="#84976B" />
            <path d="M184 80 L207 68" stroke="#F4E7C8" strokeWidth="2" />
            <circle cx="111" cy="124" r="3" fill="#C68B59" />
            <circle cx="145" cy="132" r="3" fill="#C68B59" />
            <circle cx="180" cy="130" r="3" fill="#C68B59" />
            <circle cx="207" cy="121" r="3" fill="#C68B59" />
          </svg>
          <span style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '0.95rem', 
            fontWeight: 600,
            textAlign: 'center',
            lineHeight: 1.2
          }}>
            {alt}
          </span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.2rem' }}>
            CRUMB & BLOOM PATISSERIE
          </span>
        </div>
      )}
    </div>
  );
}
