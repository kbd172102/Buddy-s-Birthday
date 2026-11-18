import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Star, RotateCcw, Heart, Sparkles, ArrowLeft } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import IllustratedTeddy from './IllustratedTeddy';

export default function FinalSurprise({ onReplay, onPrev, onPlayClickSound }) {
  const content = birthdayData.scene06;
  const [isLetterRevealed, setIsLetterRevealed] = useState(false);

  const handleReveal = () => {
    if (onPlayClickSound) onPlayClickSound();
    setIsLetterRevealed(true);
  };

  return (
    <section
      className="scene-container"
      style={{
        background: 'linear-gradient(180deg, #F5F1E8 0%, #E3EBEF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dreamy Crescent Moon in background */}
      <div
        style={{
          position: 'absolute',
          top: '3rem',
          right: '8%',
          pointerEvents: 'none',
          opacity: 0.85,
        }}
      >
        <svg width="90" height="90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="moonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="100%" stopColor="#E8DFD1" />
            </linearGradient>
            <filter id="moonShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#D8C6A5" floodOpacity="0.4" />
            </filter>
          </defs>
          <path
            d="M 50 15 C 30 15, 15 30, 15 50 C 15 70, 30 85, 50 85 C 40 75, 40 45, 50 15 Z"
            fill="url(#moonGlow)"
            filter="url(#moonShadow)"
          />
        </svg>
      </div>

      <div className="scene-inner">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scene-tag"
          style={{ background: 'rgba(255, 255, 255, 0.7)' }}
        >
          <Moon size={14} color="var(--accent-dusty-blue-dark)" />
          <span>{content.tag}</span>
        </motion.div>

        {/* Heading */}
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
          "{content.subheading}"
        </motion.p>

        {/* Two Teddy Bears Hugging Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            margin: '0 auto 2.25rem auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IllustratedTeddy variant="hug" size={250} />
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.35rem',
              color: 'var(--text-muted)',
              marginTop: '0.75rem',
            }}
          >
            Forever grateful for our friendship 🤍
          </p>
        </motion.div>

        {/* Reveal Button (if not yet clicked) */}
        {!isLetterRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ marginBottom: '3rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={handleReveal}
              style={{
                padding: '1.05rem 2.5rem',
                fontSize: '1.05rem',
                boxShadow: '0 10px 28px rgba(81, 72, 63, 0.22)',
              }}
            >
              <Heart size={16} fill="var(--bg-offwhite)" /> {content.btnReveal}
            </motion.button>
          </motion.div>
        )}

        {/* Revealed Final Heartfelt Letter */}
        <AnimatePresence>
          {isLetterRevealed && (
            <motion.div
              className="paper-card"
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              style={{
                maxWidth: '720px',
                width: '100%',
                background: 'linear-gradient(145deg, #FFFDF9 0%, #F5ECE0 100%)',
                borderRadius: '24px',
                padding: '3rem 2.25rem',
                border: '1.5px solid var(--accent-champagne-dark)',
                boxShadow: '0 20px 45px -10px rgba(81, 72, 63, 0.2)',
                marginBottom: '3.5rem',
                position: 'relative',
              }}
            >
              {/* Washi Tape */}
              <div
                className="washi-tape"
                style={{
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(1deg)',
                  width: '140px',
                }}
              />

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  padding: '2.5rem 2rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.48rem',
                    color: 'var(--text-dark)',
                    lineHeight: 1.65,
                    whiteSpace: 'pre-line',
                    textAlign: 'center',
                  }}
                >
                  {content.finalLetter}
                </p>
              </div>

              {/* Heart Stamp */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '1.75rem',
                }}
              >
                <span style={{ fontSize: '2rem' }}>🤍</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final Footer Credits */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '550px',
            padding: '2rem 1rem 1.5rem 1rem',
            borderTop: '1px solid var(--border-light)',
            width: '100%',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-dark)',
              fontWeight: 700,
              marginBottom: '0.4rem',
            }}
          >
            {content.footerQuote}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.3rem',
              color: 'var(--accent-taupe-dark)',
            }}
          >
            {content.footerSignature}
          </p>
        </div>

        {/* Bottom Actions: Replay & Back */}
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
              <ArrowLeft size={16} /> Back
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => {
              if (onPlayClickSound) onPlayClickSound();
              onReplay();
            }}
            style={{
              padding: '0.85rem 2rem',
            }}
          >
            <RotateCcw size={16} /> {content.replayBtn}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
