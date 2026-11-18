import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import IllustratedTeddy from './IllustratedTeddy';
import TeddyFight from './TeddyFight';

export default function WelcomeScreen({ onNext, onPlayClickSound }) {
  const content = birthdayData.scene01;
  const [teddyState, setTeddyState] = useState('welcome'); // 'welcome' | 'happy'
  const [showFightModal, setShowFightModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleYes = () => {
    if (onPlayClickSound) onPlayClickSound();
    setTeddyState('happy');
    setIsTransitioning(true);

    setTimeout(() => {
      onNext();
    }, 1200);
  };

  const handleNo = () => {
    if (onPlayClickSound) onPlayClickSound();
    setShowFightModal(true);
  };

  const handleFightAccept = () => {
    setShowFightModal(false);
    setTeddyState('happy');
    setTimeout(() => {
      onNext();
    }, 700);
  };

  return (
    <section className="scene-container">
      <div className="scene-inner">
        {/* Playful Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scene-tag"
        >
          <Sparkles size={14} color="var(--accent-champagne-dark)" />
          <span>{content.tag}</span>
        </motion.div>

        {/* Small Tom & Jerry Playful Chase Tease Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.25rem 0.8rem',
            background: 'rgba(216, 198, 165, 0.22)',
            borderRadius: '999px',
            border: '1px dashed var(--accent-champagne-dark)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--text-dark)',
            marginBottom: '1rem',
          }}
        >
          <span>🐱💨 🐭</span>
          <span>Tom & Jerry Mode: Active</span>
        </motion.div>

        {/* Two-Column Scrapbook Layout on Desktop / Stacked on Mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            width: '100%',
            maxWidth: '920px',
            marginTop: '0.5rem',
          }}
        >
          {/* Left Column: Soft Teddy Bear */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Vintage Paper Frame backing */}
            <div
              style={{
                position: 'relative',
                padding: '1.5rem',
                background: 'var(--bg-offwhite)',
                borderRadius: '24px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-paper)',
              }}
            >
              {/* Tape strip */}
              <div
                className="washi-tape"
                style={{
                  top: '-10px',
                  right: '25%',
                  width: '90px',
                  transform: 'rotate(-4deg)',
                }}
              />

              <IllustratedTeddy
                variant={teddyState}
                size={230}
              />

              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.25rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  marginTop: '0.75rem',
                }}
              >
                {teddyState === 'happy' ? "YAYYY! HE'S AWAKE! 🎉" : "Kumbhkaran, wake up! 🤍"}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Teasing Letter & Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <h1
              className="scene-title"
              style={{
                textAlign: 'left',
                marginBottom: '1rem',
              }}
            >
              {content.heading}
            </h1>

            {/* Teasing Paragraphs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.75rem',
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.6,
              }}
            >
              {content.introLines.map((line, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Question prompt */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.18rem',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}
            >
              {content.question}
            </p>

            {/* Choice Buttons */}
            <div
              className="button-group"
              style={{
                display: 'flex',
                gap: '1rem',
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                onClick={handleYes}
                disabled={isTransitioning}
                style={{ flex: '1 1 180px' }}
              >
                <Sparkles size={16} /> {content.btnYes}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
                onClick={handleNo}
                disabled={isTransitioning}
                style={{ flex: '1 1 180px' }}
              >
                <Moon size={15} /> {content.btnNo}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Playful Rejection Drama Modal (using user's provided GIF) */}
      <AnimatePresence>
        {showFightModal && (
          <TeddyFight
            onAccept={handleFightAccept}
            onPlayClickSound={onPlayClickSound}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
