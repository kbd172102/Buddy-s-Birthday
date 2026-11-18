import React from 'react';
import { motion } from 'framer-motion';
import AssetImage from './AssetImage';
import { Paperclip, Coffee, Star, Sparkles, Heart } from 'lucide-react';

export default function MemoryCard({ memory, onOpenLightbox, onPlayClickSound }) {
  const doodleIcons = {
    paperclip: <Paperclip size={18} color="var(--accent-taupe-dark)" />,
    coffee: <Coffee size={18} color="var(--accent-champagne-dark)" />,
    star: <Star size={18} color="var(--accent-sage-dark)" />,
    sparkle: <Sparkles size={18} color="var(--accent-champagne-dark)" />,
    heart: <Heart size={18} color="var(--accent-taupe-dark)" />
  };

  return (
    <motion.div
      whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        transform: `rotate(${memory.rotate || 0}deg)`,
        position: 'relative',
        cursor: 'pointer',
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
          background: 'var(--bg-offwhite)',
          padding: '1rem 1rem 1.4rem 1rem',
          borderRadius: '12px',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-polaroid)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Washi Tape Strip on Top */}
        <div
          className="washi-tape"
          style={{
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-1deg)',
            width: '90px',
          }}
        />

        {/* Photo Area */}
        <div
          style={{
            width: '100%',
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            background: 'var(--bg-cream)',
            position: 'relative',
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
            marginTop: '0.85rem',
            textAlign: 'center',
            padding: '0 0.25rem',
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--accent-taupe-dark)',
              display: 'block',
              marginBottom: '0.2rem',
            }}
          >
            {memory.title}
          </span>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.98rem',
              color: 'var(--text-dark)',
              fontWeight: 600,
              lineHeight: 1.25,
              marginBottom: '0.35rem',
            }}
          >
            {memory.caption}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.18rem',
              color: 'var(--text-muted)',
              lineHeight: 1.2,
            }}
          >
            "{memory.note}"
          </p>
        </div>

        {/* Small Doodle / Sticker badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '-8px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--bg-cream)',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-paper)',
          }}
        >
          {doodleIcons[memory.doodle] || <Sparkles size={16} />}
        </div>
      </div>
    </motion.div>
  );
}
