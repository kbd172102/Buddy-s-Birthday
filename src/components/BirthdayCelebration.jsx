import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, PartyPopper, Cake, ArrowRight, ArrowLeft, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { assets } from '../data/assets';
import CareerJourney from './CareerJourney';
import IllustratedTeddy from './IllustratedTeddy';
import { playCandleBlowSound, playCelebrationSound } from '../utils/soundEffects';

export default function BirthdayCelebration({ onNext, onPrev, onPlayClickSound, isSoundEnabled }) {
  const content = birthdayData.scene05.partB;
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showGrandLetter, setShowGrandLetter] = useState(false);

  const handleMakeWish = () => {
    if (candlesBlown) {
      // Re-trigger confetti if already blown
      triggerConfetti();
      return;
    }

    // 1. Play candle blow sound
    playCandleBlowSound(isSoundEnabled);
    setCandlesBlown(true);

    // 2. Play celebration sound
    setTimeout(() => {
      playCelebrationSound(isSoundEnabled);
      triggerConfetti();
      setShowGrandLetter(true);
    }, 400);
  };

  const triggerConfetti = () => {
    try {
      // Warm, elegant color palette confetti
      const colors = ['#D8C6A5', '#B8C4B0', '#C5D1D8', '#A99A88', '#F1EBDD', '#DFD3C3'];

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });
      }, 250);
    } catch {
      // Ignore confetti errors if any
    }
  };

  return (
    <section className="scene-container">
      <div className="scene-inner">
        {/* Scene Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scene-tag"
        >
          <PartyPopper size={14} color="var(--accent-champagne-dark)" />
          <span>{birthdayData.scene05.tag}</span>
        </motion.div>

        {/* PART A: Career Journey Section */}
        <CareerJourney />

        {/* PART B: Grand Birthday Celebration Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-taupe-dark)',
                fontWeight: 700,
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              PART II • {content.subheading}
            </span>

            <h2
              className="scene-title"
              style={{
                color: 'var(--text-dark)',
                marginBottom: '0.5rem',
              }}
            >
              {content.heading}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.4rem',
                color: 'var(--text-muted)',
              }}
            >
              "{content.prompt}"
            </p>
          </motion.div>
        </div>

        {/* Interactive Birthday Cake */}
        <motion.div
          className="paper-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '540px',
            width: '100%',
            background: 'var(--bg-offwhite)',
            borderRadius: '24px',
            padding: '2.25rem 1.5rem',
            textAlign: 'center',
            border: '1.5px solid var(--border-medium)',
            boxShadow: 'var(--shadow-paper)',
            marginBottom: '3rem',
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
              width: '120px',
            }}
          />

          {/* Interactive Cake SVG with Candles */}
          <div style={{ width: '220px', margin: '0 auto 1.5rem auto' }}>
            <svg viewBox="0 0 240 220" width="100%" height="100%" style={{ overflow: 'visible' }}>
              <defs>
                <filter id="cakeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#51483F" floodOpacity="0.1" />
                </filter>
                <linearGradient id="cakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF9" />
                  <stop offset="100%" stopColor="#F1EBDD" />
                </linearGradient>
              </defs>

              {/* Plate Stand */}
              <ellipse cx="120" cy="190" rx="95" ry="16" fill="#E8DFD1" stroke="#51483F" strokeWidth="2.5" />
              <rect x="95" y="190" width="50" height="15" fill="#DFD3C3" stroke="#51483F" strokeWidth="2.5" />
              <ellipse cx="120" cy="205" rx="55" ry="10" fill="#DFD3C3" stroke="#51483F" strokeWidth="2.5" />

              {/* Bottom Layer */}
              <rect x="50" y="125" width="140" height="60" rx="6" fill="url(#cakeGrad)" stroke="#51483F" strokeWidth="3" filter="url(#cakeGlow)" />
              {/* Bottom Frosting Pattern */}
              <path
                d="M 50 140 Q 64 150 78 140 Q 92 150 106 140 Q 120 150 134 140 Q 148 150 162 140 Q 176 150 190 140"
                fill="none"
                stroke="#D8C6A5"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Top Layer */}
              <rect x="75" y="80" width="90" height="48" rx="5" fill="#FFFEFA" stroke="#51483F" strokeWidth="2.5" />
              {/* Top Frosting Drips */}
              <path
                d="M 75 92 Q 86 100 97 92 Q 108 100 119 92 Q 130 100 141 92 Q 152 100 165 92"
                fill="none"
                stroke="#B8C4B0"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* 3 Candles */}
              {/* Left Candle */}
              <line x1="95" y1="80" x2="95" y2="52" stroke="#51483F" strokeWidth="3" strokeLinecap="round" />
              <line x1="95" y1="52" x2="95" y2="47" stroke="#A99A88" strokeWidth="1.5" />
              {/* Center Candle */}
              <line x1="120" y1="80" x2="120" y2="48" stroke="#51483F" strokeWidth="3" strokeLinecap="round" />
              <line x1="120" y1="48" x2="120" y2="43" stroke="#A99A88" strokeWidth="1.5" />
              {/* Right Candle */}
              <line x1="145" y1="80" x2="145" y2="52" stroke="#51483F" strokeWidth="3" strokeLinecap="round" />
              <line x1="145" y1="52" x2="145" y2="47" stroke="#A99A88" strokeWidth="1.5" />

              {/* Candle Flames (Only when NOT blown) */}
              {!candlesBlown ? (
                <>
                  {/* Left Flame */}
                  <motion.ellipse
                    cx="95"
                    cy="41"
                    rx="4.5"
                    ry="8"
                    fill="#ECA869"
                    animate={{ scaleY: [1, 1.25, 0.95, 1], scaleX: [1, 0.9, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                  />
                  <circle cx="95" cy="43" r="2.5" fill="#FFF2B2" />

                  {/* Center Flame */}
                  <motion.ellipse
                    cx="120"
                    cy="37"
                    rx="5"
                    ry="9"
                    fill="#ECA869"
                    animate={{ scaleY: [1, 1.3, 0.9, 1], scaleX: [1, 0.85, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 0.55, delay: 0.1 }}
                  />
                  <circle cx="120" cy="39" r="3" fill="#FFF2B2" />

                  {/* Right Flame */}
                  <motion.ellipse
                    cx="145"
                    cy="41"
                    rx="4.5"
                    ry="8"
                    fill="#ECA869"
                    animate={{ scaleY: [1, 1.2, 0.95, 1], scaleX: [1, 0.92, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 0.65, delay: 0.2 }}
                  />
                  <circle cx="145" cy="43" r="2.5" fill="#FFF2B2" />
                </>
              ) : (
                /* Smoke Wisps when blown out */
                <motion.g
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 0.7, 0], y: -20 }}
                  transition={{ duration: 1.5 }}
                >
                  <path d="M 95 46 Q 92 40 96 35 Q 98 30 94 25" fill="none" stroke="#A99A88" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 120 42 Q 117 35 122 30 Q 124 24 119 18" fill="none" stroke="#A99A88" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 145 46 Q 142 40 146 35 Q 148 30 144 25" fill="none" stroke="#A99A88" strokeWidth="1.5" strokeLinecap="round" />
                </motion.g>
              )}
            </svg>
          </div>

          {/* Action Button: Make a wish! */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={handleMakeWish}
            style={{
              padding: '0.95rem 2.2rem',
              fontSize: '1.05rem',
              boxShadow: '0 8px 24px rgba(81, 72, 63, 0.22)',
            }}
          >
            <Sparkles size={18} /> {candlesBlown ? "WISH GRANTED! CELEBRATE MORE ✨" : content.btnWish}
          </motion.button>
        </motion.div>

        {/* Revealed Grand Birthday Letter */}
        <AnimatePresence>
          {showGrandLetter && (
            <motion.div
              className="paper-card"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring' }}
              style={{
                maxWidth: '780px',
                width: '100%',
                background: 'linear-gradient(135deg, #FFFDF9 0%, #F5EFE3 100%)',
                borderRadius: '24px',
                padding: '3rem 2.25rem',
                border: '1.5px solid var(--accent-champagne-dark)',
                boxShadow: 'var(--shadow-float)',
                marginBottom: '3.5rem',
                position: 'relative',
              }}
            >
              {/* Washi Tape */}
              <div
                className="washi-tape"
                style={{
                  top: '-12px',
                  right: '25%',
                  transform: 'rotate(-2deg)',
                  width: '130px',
                }}
              />

              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-taupe-dark)',
                    fontWeight: 700,
                  }}
                >
                  THE OFFICIAL 25TH BIRTHDAY DISPATCH
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.85rem',
                    color: 'var(--text-dark)',
                    marginTop: '0.4rem',
                  }}
                >
                  {content.letterTitle}
                </h3>
              </div>

              {/* Letter Text */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '14px',
                  padding: '2.25rem 2rem',
                  lineHeight: 1.7,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    color: 'var(--text-dark)',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.75,
                  }}
                >
                  {content.letterBody}
                </p>
              </div>

              {/* Joyful Celebration Dancing Teddies GIF */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '2rem',
                  background: 'var(--bg-cream)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid var(--border-medium)',
                  textAlign: 'center',
                  maxWidth: '360px',
                  margin: '2rem auto 0 auto',
                  boxShadow: 'var(--shadow-paper)',
                }}
              >
                <img
                  src={assets.teddyDance?.src || '/assets/teddy-dance.gif'}
                  alt="Teddies dancing celebration"
                  loading="lazy"
                  onError={(e) => {
                    if (e.target.src !== assets.teddyDance?.fallbackSrc) {
                      e.target.src = assets.teddyDance?.fallbackSrc;
                    }
                  }}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '180px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    display: 'block',
                  }}
                />
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    color: 'var(--text-dark)',
                    marginTop: '0.65rem',
                    marginBottom: '0.2rem',
                  }}
                >
                  {content.celebrationDanceHeading || "WE SURVIVED ANOTHER YEAR OF EACH OTHER!"}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.35rem',
                    color: 'var(--accent-taupe-dark)',
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  {content.celebrationDanceSub || "LET'S GOOOOOOO! 😂🤍"}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
              <ArrowLeft size={16} /> Back to Calendar
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
            One Last Little Surprise <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
