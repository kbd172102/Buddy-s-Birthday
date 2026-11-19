import React from 'react';
import { motion } from 'framer-motion';
import AssetImage from './AssetImage';
import { Paperclip, Coffee, Star, Sparkles } from 'lucide-react';

export default function MemoryCard({ memory, onOpenLightbox, onPlayClickSound }) {
  const doodleIcons = {
    team: <span style={{ fontSize: '1.05rem' }}>👥</span>,
    pizza: <span style={{ fontSize: '1.1rem' }}>🍕</span>,
    chocolate: <span style={{ fontSize: '1.1rem' }}>🍫</span>,
    laugh: <span style={{ fontSize: '1.1rem' }}>😂</span>,
    heart: <span style={{ fontSize: '1.05rem' }}>🫶</span>,
    paperclip: <Paperclip size={18} color="var(--accent-taupe-dark)" />,
    coffee: <Coffee size={18} color="var(--accent-champagne-dark)" />,
    star: <Star size={18} color="var(--accent-sage-dark)" />,
    sparkle: <Sparkles size={18} color="var(--accent-champagne-dark)" />
  };

  return (
    <motion.div
      whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      style={{
        transform: `rotate(${memory.rotate || 0}deg)`,
        position: 'relative',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
      }}
      onClick={() => {
        if (onPlayClickSound) onPlayClickSound();
        onOpenLightbox(memory);
      }}
    >
      {/* Polaroid Container */}
      <div
        className="polaroid-card"
        style={{
          background: '#FFFEFA',
          padding: '1.15rem 1.15rem 1.5rem 1.15rem',
          borderRadius: '16px',
          border: '1.5px solid var(--border-medium)',
          boxShadow: 'var(--shadow-polaroid)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Washi Tape Strip on Top */}
        <div
          className="washi-tape"
          style={{
            top: '-11px',
            left: '50%',
            transform: `translateX(-50%) rotate(${-(memory.rotate || 0) * 0.9}deg)`,
            width: '100px',
            height: '22px',
          }}
        />

        {/* Section Badge Header */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.65rem',
            padding: '0 0.2rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--accent-taupe-dark)',
              background: 'var(--bg-cream)',
              padding: '0.2rem 0.6rem',
              borderRadius: '999px',
              border: '1px solid var(--border-light)',
            }}
          >
            {memory.badge || `Memory ${memory.num || ''}`}
          </span>

          <span
            style={{
              fontSize: '0.74rem',
              color: 'var(--text-light)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontFamily: 'var(--font-sans)',
            }}
          >
            🔍 Tap to zoom
          </span>
        </div>

        {/* Photo Area */}
        <div
          style={{
            width: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            background: 'var(--bg-cream)',
            position: 'relative',
            boxShadow: 'inset 0 1px 3px rgba(81, 72, 63, 0.05)',
          }}
        >
          <AssetImage
            assetKey={memory.assetKey}
            aspectRatio="4/3"
            showPlaceholderHint={true}
            interactive={false}
          />
        </div>

        {/* Polaroid Handwritten Caption Section */}
        <div
          style={{
            width: '100%',
            marginTop: '1.1rem',
            textAlign: 'center',
            padding: '0 0.35rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.18rem',
              color: 'var(--text-dark)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '0.45rem',
            }}
          >
            {memory.title}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.94rem',
              color: 'var(--text-dark)',
              lineHeight: 1.55,
              marginBottom: '0.75rem',
              flex: 1,
            }}
          >
            {memory.caption}
          </p>

          {/* Sticky Handwritten Note Box */}
          <div
            style={{
              background: 'var(--bg-cream)',
              borderRadius: '8px',
              border: '1px dashed var(--border-medium)',
              padding: '0.55rem 0.85rem',
              marginTop: 'auto',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.2rem',
                color: 'var(--accent-taupe-dark)',
                lineHeight: 1.3,
                fontWeight: 600,
                margin: 0,
              }}
            >
              "{memory.note}"
            </p>
          </div>
        </div>

        {/* Small Animated Doodle / Sticker badge */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 12 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '-12px',
            right: '-10px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-offwhite)',
            border: '1.5px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 8px rgba(81, 72, 63, 0.12)',
            zIndex: 3,
          }}
        >
          {doodleIcons[memory.doodle] || <Sparkles size={16} color="var(--accent-champagne-dark)" />}
        </motion.div>
      </div>
    </motion.div>
  );
}
