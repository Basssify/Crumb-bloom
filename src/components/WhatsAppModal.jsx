import React, { useState } from 'react';
import { MessageSquare, Copy, Check, ExternalLink, X, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

export default function WhatsAppModal({ 
  isOpen, 
  onClose, 
  messageText, 
  title = 'WhatsApp Order Dispatch', 
  subtitle = 'Review message & launch WhatsApp consultation',
  onConfirmCompleted
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPlaceholder = SITE_CONFIG.isPlaceholderNumber || SITE_CONFIG.whatsappNumber === '2348000000000';
  const whatsappUrl = buildWhatsAppLink(SITE_CONFIG.whatsappNumber, messageText);

  const handleLaunchWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (onConfirmCompleted) {
      onConfirmCompleted();
    }
  };

  return (
    <div 
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '620px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                backgroundColor: '#25D366', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#FFFFFF' 
              }}>
                <MessageSquare size={18} />
              </span>
              <h3 id="whatsapp-modal-title" style={{ fontSize: '1.35rem' }}>
                {title}
              </h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'none',
              border: 'none',
              padding: '0.4rem',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Configuration Notice if placeholder number */}
        {isPlaceholder && (
          <div 
            style={{
              padding: '0.9rem 1.1rem',
              backgroundColor: 'var(--color-warning-bg)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(230, 81, 0, 0.25)',
              marginBottom: '1.25rem',
              fontSize: '0.82rem',
              color: '#8D3600',
              display: 'flex',
              gap: '0.65rem'
            }}
          >
            <AlertTriangle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Bakery Configuration Notice:</strong> The WhatsApp destination is currently set to sample placeholder (<code>{SITE_CONFIG.whatsappNumber}</code> in <code>src/data/siteConfig.js</code>). In production, configure your active international phone number (e.g. <code>2348012345678</code>). You can test the link below or copy the pre-formatted text.
            </div>
          </div>
        )}

        {/* Formatted Message Preview */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
              Formatted WhatsApp Dispatch Message
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-subtle btn-sm"
              style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', gap: '0.35rem' }}
            >
              {copied ? <Check size={13} color="green" /> : <Copy size={13} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
          </div>

          <pre
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              fontSize: '0.82rem',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              maxHeight: '220px',
              overflowY: 'auto',
              color: 'var(--text-primary)',
              lineHeight: 1.5
            }}
          >
            {messageText}
          </pre>
        </div>

        {/* Disclaimer on confirmation */}
        <div style={{
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          backgroundColor: 'var(--bg-primary)',
          padding: '0.75rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <ShieldCheck size={16} color="var(--accent-caramel)" style={{ flexShrink: 0 }} />
          <span>
            Orders submitted via WhatsApp require confirmation by our patisserie team before scheduling.
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline btn-sm"
          >
            Close / Review Form
          </button>

          <button
            type="button"
            onClick={handleLaunchWhatsApp}
            className="btn btn-sm"
            style={{
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontWeight: 600,
              gap: '0.4rem'
            }}
          >
            <ExternalLink size={15} />
            <span>Open in WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}

