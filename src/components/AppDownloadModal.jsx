import { useEffect, useRef } from 'react';
import { X, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function AppDownloadModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div className="modal-container" ref={modalRef}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close download modal"
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              margin: '0 auto 1rem auto',
              borderRadius: '14px',
              backgroundColor: 'rgba(8, 183, 106, 0.12)',
              border: '1px solid rgba(8, 183, 106, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-emerald)'
            }}
          >
            <Smartphone size={28} />
          </div>
          <h3 id="download-modal-title" style={{ fontSize: 'var(--text-2xl)', marginBottom: '0.5rem' }}>
            Get the Funngro App
          </h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            Start your earning and learning journey on India's premier youth opportunity platform.
          </p>
        </div>

        {/* QR Code / Mobile Download Preview */}
        <div
          style={{
            backgroundColor: 'rgba(7, 21, 13, 0.7)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <div
            style={{
              width: '130px',
              height: '130px',
              margin: '0 auto 1rem auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
            }}
          >
            {/* SVG QR Code Simulation */}
            <svg viewBox="0 0 100 100" width="100%" height="100%" fill="#07150D">
              <rect x="0" y="0" width="30" height="30" rx="3" fill="#07150D"/>
              <rect x="4" y="4" width="22" height="22" rx="2" fill="#FFFFFF"/>
              <rect x="8" y="8" width="14" height="14" rx="1" fill="#08B76A"/>

              <rect x="70" y="0" width="30" height="30" rx="3" fill="#07150D"/>
              <rect x="74" y="4" width="22" height="22" rx="2" fill="#FFFFFF"/>
              <rect x="78" y="8" width="14" height="14" rx="1" fill="#08B76A"/>

              <rect x="0" y="70" width="30" height="30" rx="3" fill="#07150D"/>
              <rect x="4" y="74" width="22" height="22" rx="2" fill="#FFFFFF"/>
              <rect x="8" y="78" width="14" height="14" rx="1" fill="#08B76A"/>

              {/* Data modules */}
              <rect x="36" y="8" width="8" height="8" fill="#07150D"/>
              <rect x="50" y="8" width="12" height="8" fill="#07150D"/>
              <rect x="36" y="22" width="10" height="10" fill="#07150D"/>
              <rect x="52" y="22" width="10" height="6" fill="#07150D"/>

              <rect x="8" y="36" width="8" height="12" fill="#07150D"/>
              <rect x="22" y="40" width="14" height="8" fill="#07150D"/>
              <rect x="42" y="38" width="16" height="16" rx="2" fill="#08B76A"/>
              <rect x="64" y="36" width="10" height="10" fill="#07150D"/>
              <rect x="80" y="42" width="12" height="8" fill="#07150D"/>

              <rect x="36" y="60" width="8" height="14" fill="#07150D"/>
              <rect x="50" y="62" width="14" height="8" fill="#07150D"/>
              <rect x="70" y="60" width="10" height="12" fill="#07150D"/>
              <rect x="86" y="64" width="8" height="10" fill="#07150D"/>

              <rect x="38" y="80" width="14" height="12" fill="#07150D"/>
              <rect x="58" y="78" width="12" height="14" fill="#07150D"/>
              <rect x="76" y="80" width="16" height="12" fill="#07150D"/>
            </svg>
          </div>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            Scan with your mobile camera or barcode scanner
          </p>
          <span style={{ fontSize: '0.7rem', color: 'var(--emerald-light)', fontWeight: 600 }}>
            Official Funngro App (Android & iOS)
          </span>
        </div>

        {/* Feature Checkpoints */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            <CheckCircle2 size={16} color="var(--primary-emerald)" />
            <span>Curated, age-appropriate brand campaigns</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            <CheckCircle2 size={16} color="var(--primary-emerald)" />
            <span>Direct in-app task submission & verification</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            <ShieldCheck size={16} color="var(--primary-emerald)" />
            <span>Safe wallet with guardian oversight & consent</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Button
            href="https://play.google.com/store/apps/details?id=com.funngro"
            variant="primary"
            className="btn-full"
            showArrow
          >
            Download on Google Play
          </Button>
          <Button
            href="https://apps.apple.com/app/funngro/id1588636402"
            variant="secondary"
            className="btn-full"
          >
            Download on App Store
          </Button>
        </div>
      </div>
    </div>
  );
}
