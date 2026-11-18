import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, ArrowRight, ArrowLeft, Bookmark } from 'lucide-react';
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
