import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicToggle({ isMusicOn, onToggle, onPlayClickSound }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: '1.25rem',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (onPlayClickSound) onPlayClickSound();
          onToggle();
        }}
        aria-label={isMusicOn ? 'Turn background music off' : 'Turn background music on'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.55rem 0.95rem',
          background: 'rgba(255, 254, 250, 0.88)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border-medium)',
          borderRadius: '9999px',
          boxShadow: 'var(--shadow-paper)',
          color: 'var(--text-dark)',
          fontSize: '0.82rem',
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        {isMusicOn ? (
          <>
            <Volume2 size={16} color="var(--accent-taupe-dark)" />
            <span>Music On</span>
            {/* Soft animated sound equalizer wave */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}>
              <motion.span
                animate={{ height: ['4px', '12px', '4px'] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                style={{ width: '2px', background: 'var(--accent-taupe-dark)', borderRadius: '1px' }}
              />
              <motion.span
                animate={{ height: ['10px', '4px', '10px'] }}
                transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
                style={{ width: '2px', background: 'var(--accent-taupe-dark)', borderRadius: '1px' }}
              />
              <motion.span
                animate={{ height: ['5px', '11px', '5px'] }}
                transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut', delay: 0.4 }}
                style={{ width: '2px', background: 'var(--accent-taupe-dark)', borderRadius: '1px' }}
              />
            </div>
          </>
        ) : (
          <>
            <VolumeX size={16} color="var(--text-light)" />
            <span style={{ color: 'var(--text-muted)' }}>Music Off</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
