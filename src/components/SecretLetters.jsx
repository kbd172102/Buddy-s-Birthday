import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, ArrowLeft, X, Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { playEnvelopeSound } from '../utils/soundEffects';

export default function SecretLetters({ onNext, onPrev, onPlayClickSound, isSoundEnabled }) {
  const content = birthdayData.scene03;
  const [activeLetter, setActiveLetter] = useState(null);
  const [openedLetters, setOpenedLetters] = useState({});

  const handleOpenLetter = (letter) => {
    playEnvelopeSound(isSoundEnabled);
    setActiveLetter(letter);
    setOpenedLetters((prev) => ({ ...prev, [letter.id]: true }));
  };

  const handleCloseLetter = () => {
    if (onPlayClickSound) onPlayClickSound();
    setActiveLetter(null);
  };

  return (
    <section className="scene-container">
      <div className="scene-inner">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scene-tag"
        >
          <Mail size={14} color="var(--accent-taupe-dark)" />
          <span>{content.tag}</span>
        </motion.div>

        {/* Heading & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="scene-title"
        >
          {content.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="scene-subtitle"
        >
          {content.subheading}
        </motion.p>

        {/* 4 Interactive Envelopes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem 1.75rem',
            width: '100%',
            maxWidth: '1050px',
            marginBottom: '3.5rem',
          }}
        >
          {(content.letters || []).map((letter, idx) => {
            const isOpened = openedLetters[letter.id];

            return (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOpenLetter(letter)}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  perspective: '1000px',
                }}
              >
                {/* Envelope Stationery Body */}
                <div
                  className="paper-envelope"
                  style={{
                    background: 'linear-gradient(145deg, #FFFEFA 0%, #F5EFE3 100%)',
                    border: '1.5px solid var(--border-medium)',
                    borderRadius: '14px',
                    padding: '2.25rem 1.5rem 1.75rem 1.5rem',
                    boxShadow: 'var(--shadow-paper)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '220px',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Triangular Top Flap Fold Accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '70px',
                      background: 'rgba(216, 198, 165, 0.22)',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      borderBottom: '1px solid rgba(169, 154, 136, 0.3)',
                    }}
                  />

                  {/* Envelope Wax Seal / Stamp Button */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 3,
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'var(--bg-cream)',
                      border: '2px solid var(--accent-champagne-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(81, 72, 63, 0.12)',
                      fontSize: '1.25rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    <span>{letter.stamp}</span>
                  </div>

                  {/* Letter Details */}
                  <div style={{ textAlign: 'center', zIndex: 2, marginTop: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-taupe-dark)',
                        fontWeight: 700,
                        display: 'block',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {letter.badge}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        color: 'var(--text-dark)',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        marginBottom: '0.6rem',
                      }}
                    >
                      {letter.title}
                    </h3>
                  </div>

                  {/* Status Indicator */}
                  <div style={{ zIndex: 2 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.15rem',
                        color: isOpened ? 'var(--accent-sage-dark)' : 'var(--accent-champagne-dark)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      {isOpened ? 'Read again 💌' : 'Click to unfold ✉️'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div
          className="button-group"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          {onPrev && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary"
              onClick={() => {
                if (onPlayClickSound) onPlayClickSound();
                onPrev();
              }}
            >
              <ArrowLeft size={16} /> Previous
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            onClick={() => {
              if (onPlayClickSound) onPlayClickSound();
              onNext();
            }}
          >
            Go to Birthday Calendar <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* Full Letter Modal View */}
      <AnimatePresence>
        {activeLetter && (
          <motion.div
            className="letter-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLetter}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(81, 72, 63, 0.72)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem',
            }}
          >
            <motion.div
              className="parchment-letter"
              initial={{ scale: 0.85, y: 35, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 35, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '620px',
                width: '100%',
                background: 'linear-gradient(135deg, #FFFDF9 0%, #F6EFE2 100%)',
                padding: '3rem 2.25rem 2.5rem 2.25rem',
                borderRadius: '16px',
                border: '1.5px solid var(--border-medium)',
                boxShadow: '0 25px 60px -15px rgba(81, 72, 63, 0.35)',
                position: 'relative',
              }}
            >
              {/* Washi Tape */}
              <div
                className="washi-tape"
                style={{
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(1deg)',
                  width: '130px',
                }}
              />

              {/* Close Button */}
              <button
                onClick={handleCloseLetter}
                aria-label="Close letter"
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-cream)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-dark)',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>

              {/* Letter Header */}
              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-taupe-dark)',
                    fontWeight: 700,
                  }}
                >
                  {activeLetter.badge} • {activeLetter.stamp}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: 'var(--text-dark)',
                    marginTop: '0.4rem',
                  }}
                >
                  {activeLetter.title}
                </h3>
              </div>

              {/* Letter Content (Paper lined styling) */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  padding: '1.75rem 1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.45rem',
                    color: 'var(--text-dark)',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {activeLetter.content}
                </p>
              </div>

              {/* Footer Button */}
              <div style={{ textAlign: 'center' }}>
                <button
                  className="btn-primary"
                  onClick={handleCloseLetter}
                  style={{ padding: '0.75rem 2rem' }}
                >
                  Fold Letter Back 🤍
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
