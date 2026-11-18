import React from 'react';
import { motion } from 'framer-motion';
import IllustratedTeddy from './IllustratedTeddy';
import { birthdayData } from '../data/birthdayContent';

export default function TeddyFight({ onAccept, onPlayClickSound }) {
  const drama = birthdayData.scene01.rejectionDrama;

  return (
    <motion.div
      className="teddy-fight-modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', damping: 20 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(81, 72, 63, 0.82)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
    >
      <motion.div
        className="paper-card"
        style={{
          maxWidth: '560px',
          width: '100%',
          background: 'var(--bg-offwhite)',
          padding: '2.5rem 1.75rem',
          textAlign: 'center',
          borderRadius: '20px',
          position: 'relative',
          border: '2px solid var(--accent-champagne)',
        }}
      >
        {/* Playful washi tape */}
        <div
          className="washi-tape"
          style={{
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%) rotate(2deg)',
            width: '140px',
          }}
        />

        {/* Animated wrestling / playful biting teddy scene */}
        <div style={{ margin: '0 auto 1.25rem auto', display: 'flex', justifyContent: 'center' }}>
          <IllustratedTeddy variant="fight" size={240} />
        </div>

        {/* Drama Heading */}
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            color: 'var(--text-dark)',
            marginBottom: '0.4rem',
          }}
        >
          {drama.heading}
        </motion.h2>

        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--accent-taupe-dark)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '1rem',
          }}
        >
          {drama.subheading}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.35rem',
            color: 'var(--text-muted)',
            lineHeight: 1.4,
            marginBottom: '1.75rem',
          }}
        >
          "{drama.body}"
        </p>

        {/* Surrender / Fine show me button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="btn-primary"
          onClick={() => {
            if (onPlayClickSound) onPlayClickSound();
            onAccept();
          }}
          style={{
            padding: '1rem 2.25rem',
            fontSize: '1.05rem',
            background: 'var(--text-dark)',
            color: 'var(--bg-offwhite)',
            boxShadow: '0 8px 20px rgba(81, 72, 63, 0.25)',
          }}
        >
          {drama.btnAccept}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
