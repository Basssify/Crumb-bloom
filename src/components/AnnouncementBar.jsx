import React from 'react';
import { Sparkles, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { formatNaira } from '../utils/currency';

export default function AnnouncementBar() {
  return (
    <aside 
      className="announcement-bar" 
      aria-label="Fresh bakes announcement"
      style={{
        backgroundColor: '#20120B',
        color: '#FAF6F0',
        fontSize: '0.82rem',
        padding: '0.55rem 1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={14} color="#C68B59" />
          <span>
            <strong>Fresh Morning Bakes</strong> ready from 7:30 AM daily in Lekki Phase 1
          </span>
        </div>

        <div className="announcement-sub" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Truck size={14} color="#C68B59" />
            <span>Complimentary delivery on orders over {formatNaira(SITE_CONFIG.delivery.freeThreshold)}</span>
          </div>

          <Link 
            to="/custom-cakes"
            style={{
              color: '#E8B4B8',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              textDecoration: 'underline',
              textUnderlineOffset: '2px'
            }}
          >
            Custom Cakes 48h Notice &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}

