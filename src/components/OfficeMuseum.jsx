import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, ArrowRight, ArrowLeft, Bookmark, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
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
        {/* Scrapbook Scene Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scene-tag"
        >
          <Coffee size={14} color="var(--accent-taupe-dark)" />
          <span>{content.tag}</span>
        </motion.div>

        {/* Section Heading & Subtitle */}
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

        {/* Scrapbook Sticky Note Banner */}
        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          animate={{ opacity: 1, rotate: -1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'var(--bg-cream)',
            border: '1px dashed var(--border-medium)',
            padding: '0.65rem 1.4rem',
            borderRadius: '10px',
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
              fontSize: '1.25rem',
              color: 'var(--text-dark)',
              fontWeight: 600,
            }}
          >
            {content.description}
          </span>
        </motion.div>

        {/* Playful Tom & Jerry Office Mascot Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'rgba(255, 254, 250, 0.9)',
            border: '1px solid var(--border-medium)',
            borderRadius: '999px',
            padding: '0.45rem 1.25rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            color: 'var(--accent-taupe-dark)',
            fontWeight: 600,
            marginBottom: '2.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            boxShadow: '0 2px 8px rgba(81, 72, 63, 0.05)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>🐱⚡🐭</span>
          <span>Official Desk Rule: Deadlines are temporary, team lunches, KitKat breaks and masti are forever!</span>
        </motion.div>

        {/* ================================================================ */}
        {/* SCRAPBOOK POLAROID GRID (THE 5 MEMORY SECTIONS)                  */}
        {/* ================================================================ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2.5rem 2rem',
            width: '100%',
            maxWidth: '1060px',
            marginBottom: '3.75rem',
            alignItems: 'stretch',
          }}
        >
          {content.memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 * index }}
            >
              <MemoryCard
                memory={memory}
                onOpenLightbox={handleOpenLightbox}
                onPlayClickSound={onPlayClickSound}
              />
            </motion.div>
          ))}
        </div>

        {/* ================================================================ */}
        {/* CLOSING MESSAGE SECTION                                          */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="paper-card"
          style={{
            maxWidth: '820px',
            width: '100%',
            background: 'linear-gradient(145deg, #FFFDF9 0%, #F5ECE0 100%)',
            borderRadius: '24px',
            padding: '2.8rem 2.2rem',
            border: '1.5px solid var(--accent-champagne-dark)',
            boxShadow: 'var(--shadow-float)',
            marginBottom: '3.5rem',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          {/* Decorative Washi Tape */}
          <div
            className="washi-tape"
            style={{
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-1deg)',
              width: '150px',
              height: '24px',
            }}
          />

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-taupe-dark)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.85rem',
            }}
          >
            <Heart size={13} fill="var(--accent-taupe-dark)" /> {content.closingMessage?.tag || "THE BEST MEMORIES 🤍"}
          </span>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3.2vw, 2rem)',
              color: 'var(--text-dark)',
              margin: '0 0 1.5rem 0',
              lineHeight: 1.25,
            }}
          >
            {content.closingMessage?.title || "LOOKING BACK AT OUR OFFICE DAYS"}
          </h3>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.75)',
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2rem 1.85rem',
              margin: '0 auto 1.85rem auto',
              maxWidth: '720px',
              boxShadow: 'inset 0 1px 3px rgba(81, 72, 63, 0.04)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.02rem, 2vw, 1.12rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.85,
                whiteSpace: 'pre-line',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {content.closingMessage?.text}
            </p>
          </div>

          {/* Doodles row: coffee, pizza, chocolate, laptop, happy faces */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '1.45rem',
              opacity: 0.9,
              userSelect: 'none',
              flexWrap: 'wrap',
            }}
          >
            <motion.span whileHover={{ scale: 1.25, rotate: -8 }} style={{ cursor: 'pointer' }} title="Office Coffee">☕</motion.span>
            <motion.span whileHover={{ scale: 1.25, rotate: 8 }} style={{ cursor: 'pointer' }} title="Team Lunch">🍕</motion.span>
            <motion.span whileHover={{ scale: 1.25, rotate: -8 }} style={{ cursor: 'pointer' }} title="KitKat Break">🍫</motion.span>
            <motion.span whileHover={{ scale: 1.25, rotate: 8 }} style={{ cursor: 'pointer' }} title="Work Laptop">💻</motion.span>
            <motion.span whileHover={{ scale: 1.25, rotate: -8 }} style={{ cursor: 'pointer' }} title="Happy Faces">😊</motion.span>
            <motion.span whileHover={{ scale: 1.25, rotate: 8 }} style={{ cursor: 'pointer' }} title="Pure Love">🫶</motion.span>
          </div>
        </motion.div>

        {/* ================================================================ */}
        {/* NAVIGATION BUTTONS                                               */}
        {/* ================================================================ */}
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
            {content.closingMessage?.buttonText || "MORE MEMORIES AHEAD →"} <ArrowRight size={16} />
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
