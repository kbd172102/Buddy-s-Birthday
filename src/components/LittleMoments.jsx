import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Heart
} from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import IllustratedTeddy from './IllustratedTeddy';

/**
 * ScrapbookMemoryCard
 * A tactile polaroid / scrapbook card with washi tape, gentle tilt,
 * photo frame, lively caption, and interactive like reaction.
 */
function ScrapbookMemoryCard({
  item,
  index,
  onPlayClickSound
}) {
  const [isLoved, setIsLoved] = useState(false);
  const [imgSrc, setImgSrc] = useState(item.gifSrc);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    if (onPlayClickSound) onPlayClickSound();
    setIsLoved((prev) => !prev);
  };

  const handleCardClick = () => {
    if (onPlayClickSound) onPlayClickSound();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, rotate: item.washiAngle }}
      whileInView={{ opacity: 1, y: 0, rotate: item.washiAngle }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        rotate: 0,
        scale: 1.02,
        transition: { duration: 0.28, ease: 'easeOut' }
      }}
      transition={{ duration: 0.6, delay: 0.12 * index }}
      onClick={handleCardClick}
      className="paper-card"
      style={{
        background: '#FFFEFA',
        borderRadius: '20px',
        border: '1.5px solid var(--border-medium)',
        boxShadow: 'var(--shadow-polaroid)',
        padding: '1.4rem 1.35rem 1.6rem 1.35rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Authentic Washi Tape strip */}
      <div
        className="washi-tape"
        style={{
          top: '-11px',
          left: '50%',
          transform: `translateX(-50%) rotate(${item.washiAngle * -1.2}deg)`,
          width: '110px',
          height: '22px',
        }}
      />

      {/* Card Header: Number & Tag */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          paddingTop: '0.2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-taupe-dark)',
              background: 'var(--bg-cream)',
              padding: '0.25rem 0.65rem',
              borderRadius: '999px',
              border: '1px solid var(--border-light)',
            }}
          >
            {item.num}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-light)',
            }}
          >
            {item.tag}
          </span>
        </div>

        {/* Interactive Heart Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleHeartClick}
          aria-label="React with love"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: isLoved ? 'rgba(236, 162, 149, 0.2)' : 'var(--bg-cream)',
            border: isLoved
              ? '1px solid rgba(236, 162, 149, 0.6)'
              : '1px solid var(--border-light)',
            color: isLoved ? '#D9534F' : 'var(--text-light)',
            transition: 'all 0.25s ease',
          }}
        >
          <Heart
            size={16}
            fill={isLoved ? '#D9534F' : 'none'}
            stroke={isLoved ? '#D9534F' : 'currentColor'}
          />
        </motion.button>
      </div>

      {/* Polaroid Photo Frame for the Supplied GIF */}
      <div
        style={{
          width: '100%',
          borderRadius: '14px',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #F9F7F2 0%, #EFE9DC 100%)',
          border: '1px solid var(--border-light)',
          padding: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '210px',
          boxShadow: 'inset 0 1px 4px rgba(81, 72, 63, 0.06)',
          position: 'relative',
        }}
      >
        <img
          src={imgSrc}
          alt={item.alt}
          loading="lazy"
          onError={() => {
            if (imgSrc !== item.fallbackSrc) {
              setImgSrc(item.fallbackSrc);
            }
          }}
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '185px',
            objectFit: 'contain',
            borderRadius: '10px',
            display: 'block',
            margin: '0 auto',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>

      {/* Polaroid Caption Area */}
      <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.22rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            margin: '0 0 0.55rem 0',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.96rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            margin: 0,
            flex: 1,
          }}
        >
          "{item.text}"
        </p>

        {/* Playful Handwritten Sticky Footer */}
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '0.65rem',
            borderTop: '1px dashed var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.12rem',
              color: isLoved ? 'var(--text-dark)' : 'var(--accent-taupe-dark)',
              fontWeight: 600,
            }}
          >
            {isLoved ? 'Saved to memory album 🤍' : 'Tap to react ✨'}
          </span>
          <span style={{ fontSize: '0.82rem', opacity: 0.7 }}>
            {item.num === '01' ? '⚡' : item.num === '02' ? '💬' : '🧸'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * LittleMoments Component
 * Page 3 Replacement: "LITTLE MOMENTS, BIG MEMORIES 🤍"
 * Features 3 interactive scrapbook memory cards followed by
 * an emotional transition note with decorative white & caramel teddy bears.
 */
export default function LittleMoments({ onNext, onPrev, onPlayClickSound }) {
  const content = birthdayData.scene03;
  const cards = content.memoryCards || [];
  const transition = content.transition || {};

  return (
    <section className="scene-container">
      <div className="scene-inner">
        {/* Scrapbook Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scene-tag"
        >
          <Sparkles size={14} color="var(--accent-taupe-dark)" />
          <span>{content.tag}</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="scene-title"
        >
          {content.heading}
        </motion.h2>

        {/* Subtitle / Intro Note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="scene-subtitle"
        >
          "{content.subheading}"
        </motion.p>

        {/* ================================================================ */}
        {/* PART 1: THREE BEAUTIFUL SCRAPBOOK MEMORY CARDS                   */}
        {/* ================================================================ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.25rem 1.85rem',
            width: '100%',
            maxWidth: '1060px',
            marginBottom: '3.75rem',
            alignItems: 'stretch',
          }}
        >
          {cards.map((card, index) => (
            <ScrapbookMemoryCard
              key={card.id || index}
              item={card}
              index={index}
              onPlayClickSound={onPlayClickSound}
            />
          ))}
        </div>

        {/* ================================================================ */}
        {/* PART 2: BEAUTIFUL EMOTIONAL TRANSITION                           */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="paper-card"
          style={{
            maxWidth: '820px',
            width: '100%',
            background: 'linear-gradient(145deg, #FFFDF9 0%, #F5ECE0 100%)',
            borderRadius: '24px',
            padding: '2.8rem 2.25rem',
            border: '1.5px solid var(--accent-champagne-dark)',
            boxShadow: 'var(--shadow-float)',
            marginBottom: '3.5rem',
            position: 'relative',
          }}
        >
          {/* Decorative Top Washi Tape */}
          <div
            className="washi-tape"
            style={{
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%) rotate(1deg)',
              width: '150px',
              height: '24px',
            }}
          />

          {/* Section Tag */}
          <div style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-taupe-dark)',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Heart size={13} fill="var(--accent-taupe-dark)" /> A Heartfelt Note
            </span>
          </div>

          {/* Heading */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.15rem)',
              color: 'var(--text-dark)',
              textAlign: 'center',
              margin: '0 0 1.75rem 0',
              lineHeight: 1.25,
            }}
          >
            {transition.heading}
          </h3>

          {/* Message Content with Elegant Styling */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.75)',
              borderRadius: '18px',
              border: '1px solid var(--border-light)',
              padding: '2.1rem 1.85rem',
              marginBottom: '2.25rem',
              boxShadow: 'inset 0 1px 3px rgba(81, 72, 63, 0.04)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2vw, 1.08rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.85,
                whiteSpace: 'pre-line',
                margin: 0,
                textAlign: 'left',
              }}
            >
              {transition.message}
            </p>
          </div>

          {/* Small Decorative Visual: White and Caramel Teddy Bears sitting together */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '0.5rem',
            }}
          >
            <div
              style={{
                padding: '0.5rem',
                borderRadius: '50%',
                background: 'rgba(255, 254, 250, 0.6)',
                border: '1px dashed var(--accent-champagne-dark)',
                display: 'inline-block',
              }}
            >
              <IllustratedTeddy variant="together" size={130} />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.3rem',
                color: 'var(--accent-taupe-dark)',
                margin: '0.65rem 0 0 0',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Best mittr forever through every chapter 🤍
            </p>
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
            width: '100%',
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
              <ArrowLeft size={16} /> Back to Office Days
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
    </section>
  );
}
