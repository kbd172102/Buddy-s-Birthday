import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, ArrowRight, ArrowLeft, Bookmark } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { assets } from '../data/assets';
import MemoryCard from './MemoryCard';
import PhotoLightbox from './PhotoLightbox';

export default function OfficeMuseum({ onNext, onPrev, onPlayClickSound }) {
  const content = birthdayData.scene02;
  const [selectedMemory, setSelectedMemory] = useState(null);

  const selectedIndex = selectedMemory
    ? content.memories.findIndex((m) => m.id === selectedMemory.id)
    : -1;

  const handleOpenLightbox = (memory) => {
    setSelectedMemory(memory);
  };

  const handleCloseLightbox = () => {
    setSelectedMemory(null);
  };

  const handleLightboxPrev = () => {
    if (selectedIndex > 0) {
      setSelectedMemory(content.memories[selectedIndex - 1]);
    }
  };

  const handleLightboxNext = () => {
    if (selectedIndex < content.memories.length - 1) {
      setSelectedMemory(content.memories[selectedIndex + 1]);
    }
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
          <Coffee size={14} color="var(--accent-taupe-dark)" />
          <span>{content.tag}</span>
        </motion.div>

        {/* Heading & Subheading */}
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

        {/* Scrapbook Sticky Note */}
        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          animate={{ opacity: 1, rotate: -1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'var(--bg-cream)',
            border: '1px dashed var(--border-medium)',
            padding: '0.65rem 1.4rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: 'var(--shadow-paper)',
          }}
        >
          <Bookmark size={15} color="var(--accent-taupe-dark)" />
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.2rem',
              color: 'var(--text-dark)',
            }}
          >
            {content.description}
          </span>
        </motion.div>

        {/* Playful Cat & Mouse Office Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: 'var(--accent-taupe-dark)',
            fontWeight: 600,
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span>🐱⚡🐭 Desk Policy: When deadlines hit, Tom & Jerry mode activates automatically!</span>
        </motion.div>

        {/* Scrapbook Polaroid Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.25rem 1.85rem',
            width: '100%',
            maxWidth: '1050px',
            marginBottom: '3.5rem',
            alignItems: 'start',
          }}
        >
          {content.memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <MemoryCard
                memory={memory}
                onOpenLightbox={handleOpenLightbox}
                onPlayClickSound={onPlayClickSound}
              />
            </motion.div>
          ))}
        </div>

        {/* Special Featured Memory: When I send nonstop messages */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="paper-card"
          style={{
            maxWidth: '920px',
            width: '100%',
            background: 'linear-gradient(135deg, #FFFDF9 0%, #F5ECE0 100%)',
            borderRadius: '20px',
            padding: '2rem 1.75rem',
            border: '1.5px solid var(--accent-champagne-dark)',
            boxShadow: 'var(--shadow-paper)',
            marginBottom: '3.5rem',
            position: 'relative',
          }}
        >
          {/* Washi tape */}
          <div
            className="washi-tape"
            style={{
              top: '-10px',
              left: '15%',
              transform: 'rotate(-2deg)',
              width: '120px',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {/* The Animated Tenor GIF */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--bg-offwhite)',
                padding: '1rem',
                borderRadius: '16px',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 6px 18px rgba(81, 72, 63, 0.08)',
              }}
            >
              <img
                src={assets.nonstopMessages?.src || '/assets/nonstop-messages.gif'}
                alt="Sending nonstop messages"
                loading="lazy"
                onError={(e) => {
                  if (e.target.src !== assets.nonstopMessages?.fallbackSrc) {
                    e.target.src = assets.nonstopMessages?.fallbackSrc;
                  }
                }}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '260px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  display: 'block',
                }}
              />
            </div>

            {/* The Cute Message Card */}
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--accent-taupe-dark)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span>💬</span> DESK CHAT LOG • UNANSWERED PINGS
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--text-dark)',
                  lineHeight: 1.35,
                  marginBottom: '0.85rem',
                }}
              >
                {content.nonstopMessages?.caption}
              </h3>

              {/* Sticky handwritten note */}
              <div
                style={{
                  background: 'var(--bg-cream)',
                  border: '1.5px dashed var(--accent-taupe)',
                  borderRadius: '10px',
                  padding: '0.85rem 1.15rem',
                  marginBottom: '1rem',
                  transform: 'rotate(-1deg)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.45rem',
                    color: 'var(--accent-taupe-dark)',
                    margin: 0,
                    lineHeight: 1.25,
                    fontWeight: 600,
                  }}
                >
                  "{content.nonstopMessages?.handwritten}"
                </p>
              </div>

              {/* Chat bubbles preview */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                }}
              >
                <div style={{ alignSelf: 'flex-end', background: 'var(--accent-champagne-light)', padding: '0.3rem 0.75rem', borderRadius: '12px 12px 2px 12px', border: '1px solid var(--border-light)', color: 'var(--text-dark)' }}>
                  Oi Kumbhkaran
                </div>
                <div style={{ alignSelf: 'flex-end', background: 'var(--accent-champagne-light)', padding: '0.3rem 0.75rem', borderRadius: '12px 12px 2px 12px', border: '1px solid var(--border-light)', color: 'var(--text-dark)' }}>
                  Sun na food manga le?
                </div>
                <div style={{ alignSelf: 'flex-start', background: 'var(--bg-offwhite)', padding: '0.3rem 0.75rem', borderRadius: '12px 12px 12px 2px', border: '1px solid var(--border-light)', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  *crickets chirping... seen 3 hours ago* 😴
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
              <ArrowLeft size={16} /> Back
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
            Open User Manual <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* Lightbox for zooming into any memory */}
      <PhotoLightbox
        isOpen={Boolean(selectedMemory)}
        memory={selectedMemory}
        onClose={handleCloseLightbox}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
        hasPrev={selectedIndex > 0}
        hasNext={selectedIndex < content.memories.length - 1}
        onPlayClickSound={onPlayClickSound}
      />
    </section>
  );
}
