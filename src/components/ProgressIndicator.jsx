import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressIndicator({ currentScene, totalScenes = 6, onSelectScene }) {
  const formattedCurrent = String(currentScene).padStart(2, '0');
  const formattedTotal = String(totalScenes).padStart(2, '0');

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        background: 'rgba(255, 254, 250, 0.92)',
        backdropFilter: 'blur(8px)',
        padding: '0.45rem 1.15rem',
        borderRadius: '9999px',
        border: '1px solid var(--border-medium)',
        boxShadow: 'var(--shadow-paper)',
      }}
    >
      {/* Journal Page Counter */}
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.88rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: 'var(--text-dark)',
        }}
      >
        {formattedCurrent} <span style={{ color: 'var(--accent-taupe)', fontWeight: 400 }}>/</span> {formattedTotal}
      </span>

      {/* Subtle Divider */}
      <span style={{ width: '1px', height: '14px', background: 'var(--border-medium)' }} />

      {/* Scene Dots */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {Array.from({ length: totalScenes }).map((_, index) => {
          const sceneNum = index + 1;
          const isActive = sceneNum === currentScene;
          const isPassed = sceneNum < currentScene;

          return (
            <button
              key={sceneNum}
              onClick={() => onSelectScene && onSelectScene(sceneNum)}
              aria-label={`Go to scene ${sceneNum}`}
              style={{
                width: isActive ? '18px' : '7px',
                height: '7px',
                borderRadius: '9999px',
                background: isActive
                  ? 'var(--text-dark)'
                  : isPassed
                  ? 'var(--accent-taupe)'
                  : 'var(--bg-beige)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s var(--transition-smooth)',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
