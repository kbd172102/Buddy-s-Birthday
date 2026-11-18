import React from 'react';
import { motion } from 'framer-motion';
import { birthdayData } from '../data/birthdayContent';
import { assets } from '../data/assets';

export default function TeddyFight({ onAccept, onPlayClickSound }) {
  const drama = birthdayData.scene01.rejectionDrama;
  const gifSrc = assets.teddyFight?.src || '/assets/teddy-fight.gif';

  return (
    <motion.div
      className="teddy-fight-modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', damping: 22 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(81, 72, 63, 0.78)',
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
          maxWidth: '520px',
          width: '100%',
          background: 'var(--bg-offwhite)',
          padding: '2.25rem 1.75rem',
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
            width: '130px',
          }}
        />

        {/* Provided Animated GIF Image - Clean <img> element with subtle shadow, centered, no stretch */}
        <div
          style={{
            margin: '0 auto 1.5rem auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: '320px',
            minHeight: '180px',
          }}
        >
          <img
            src={gifSrc}
            alt="Playful teddy fight"
            loading="eager"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '220px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              borderRadius: '14px',
              boxShadow: '0 8px 24px rgba(81, 72, 63, 0.12)',
            }}
          />
        </div>

        {/* Heading: OH HELLOOOO, KUMBHKARAN! */}
        <motion.h2
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: 'var(--text-dark)',
            marginBottom: '0.4rem',
            lineHeight: 1.2,
          }}
        >
          {drama.heading}
        </motion.h2>

        {/* Subheading: Birthday hai tumhara, attitude nahi dikhana! 😂 */}
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.02rem',
            color: 'var(--accent-taupe-dark)',
            letterSpacing: '0.02em',
            fontWeight: 700,
            marginBottom: '0.6rem',
          }}
        >
          {drama.subheading}
        </h3>

        {/* Body: Ab chupchaap aage badho! */}
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.45rem',
            color: 'var(--text-muted)',
            lineHeight: 1.35,
            marginBottom: '1.75rem',
          }}
        >
          "{drama.body}"
        </p>

        {/* Button: OKAY OKAY, I'M COMING! */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="btn-primary"
          onClick={() => {
            if (onPlayClickSound) onPlayClickSound();
            onAccept();
          }}
          style={{
            padding: '0.95rem 2.25rem',
            fontSize: '1.05rem',
            boxShadow: '0 8px 20px rgba(81, 72, 63, 0.22)',
          }}
        >
          {drama.btnAccept}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
