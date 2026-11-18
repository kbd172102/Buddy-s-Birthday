import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AssetImage from './AssetImage';

export default function PhotoLightbox({
  isOpen,
  onClose,
  memory,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onPlayClickSound
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen || !memory) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(81, 72, 63, 0.75)',
          backdropFilter: 'blur(6px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
        }}
      >
        <motion.div
          className="lightbox-card"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--bg-offwhite)',
            maxWidth: '680px',
            width: '100%',
            borderRadius: '16px',
            padding: '1.5rem',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            border: '1px solid var(--border-medium)',
          }}
        >
          {/* Decorative Washi Tape */}
          <div
            className="washi-tape"
            style={{
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-1deg)',
              width: '120px',
            }}
          />

          {/* Close Button */}
          <button
            onClick={() => {
              if (onPlayClickSound) onPlayClickSound();
              onClose();
            }}
            aria-label="Close photo preview"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--bg-cream)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-dark)',
              zIndex: 10,
            }}
          >
            <X size={20} />
          </button>

          {/* Image Display */}
          <div
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              background: 'var(--bg-cream)',
              border: '1px solid var(--border-light)',
              marginBottom: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            <AssetImage
              assetKey={memory.assetKey}
              aspectRatio="16/10"
              interactive={false}
              showPlaceholderHint={true}
            />
          </div>

          {/* Memory Text & Story */}
          <div style={{ textAlign: 'center', padding: '0 0.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-taupe-dark)',
                fontWeight: 600,
              }}
            >
              {memory.title}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                margin: '0.35rem 0 0.6rem 0',
                color: 'var(--text-dark)',
              }}
            >
              {memory.caption}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.35rem',
                color: 'var(--text-muted)',
                lineHeight: 1.35,
              }}
            >
              "{memory.note}"
            </p>
          </div>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1.25rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border-light)',
            }}
          >
            <button
              onClick={() => {
                if (onPlayClickSound) onPlayClickSound();
                if (onPrev) onPrev();
              }}
              disabled={!hasPrev}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.88rem',
                color: hasPrev ? 'var(--text-dark)' : 'var(--text-light)',
                opacity: hasPrev ? 1 : 0.4,
                cursor: hasPrev ? 'pointer' : 'default',
              }}
            >
              <ChevronLeft size={18} /> Previous Memory
            </button>

            <button
              onClick={() => {
                if (onPlayClickSound) onPlayClickSound();
                if (onNext) onNext();
              }}
              disabled={!hasNext}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.88rem',
                color: hasNext ? 'var(--text-dark)' : 'var(--text-light)',
                opacity: hasNext ? 1 : 0.4,
                cursor: hasNext ? 'pointer' : 'default',
              }}
            >
              Next Memory <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
