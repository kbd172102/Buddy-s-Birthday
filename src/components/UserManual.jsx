import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Moon,
  Utensils,
  Zap,
  Heart,
  ChevronDown,
  Sparkles,
  Smile,
  ShieldAlert
} from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import IllustratedTeddy from './IllustratedTeddy';

export default function UserManual({ onNext, onPrev, onPlayClickSound }) {
  const content = birthdayData.scene03;
  const profile = content.profile;
  const [expandedCard, setExpandedCard] = useState('card-1');

  const cardIcons = {
    moon: <Moon size={20} color="var(--accent-dusty-blue-dark)" />,
    snack: <Utensils size={20} color="var(--accent-champagne-dark)" />,
    chase: <span>🐱🐭</span>,
    zap: <Zap size={20} color="var(--accent-sage-dark)" />,
    heart: <Heart size={20} color="var(--accent-taupe-dark)" />,
  };

  const toggleCard = (id) => {
    if (onPlayClickSound) onPlayClickSound();
    setExpandedCard(prev => (prev === id ? null : id));
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
          <BookOpen size={14} color="var(--accent-taupe-dark)" />
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

        {/* ================================================================ */}
        {/* PART A: CHARACTER PROFILE CARD (Vintage Dossier / Specimen ID)  */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="paper-card"
          style={{
            maxWidth: '820px',
            width: '100%',
            background: 'linear-gradient(145deg, #FFFEFA 0%, #F6EFE2 100%)',
            borderRadius: '20px',
            padding: '2rem 1.75rem',
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
              transform: 'translateX(-50%) rotate(-1deg)',
              width: '130px',
            }}
          />

          {/* Dossier Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '0.85rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-taupe-dark)',
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                {profile.tagline}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  color: 'var(--text-dark)',
                  margin: 0,
                }}
              >
                Subject: {profile.nickname}
              </h3>
            </div>

            {/* Stamp Badge */}
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.1rem',
                color: 'var(--accent-sage-dark)',
                border: '1.5px dashed var(--accent-sage-dark)',
                borderRadius: '8px',
                padding: '0.2rem 0.65rem',
                transform: 'rotate(2deg)',
              }}
            >
              Verified Kumbhkaran ✓
            </span>
          </div>

          {/* Profile Details Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* Field: Name */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
              }}
            >
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.08em', fontWeight: 600 }}>
                Formal Designation
              </span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.12rem', color: 'var(--text-dark)', margin: '0.2rem 0 0 0', fontWeight: 600 }}>
                {profile.name}
              </p>
            </div>

            {/* Field: Nickname */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
              }}
            >
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.08em', fontWeight: 600 }}>
                Alias / Code Name
              </span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--text-dark)', margin: '0.2rem 0 0 0', fontWeight: 600 }}>
                {profile.nickname} 😴
              </p>
            </div>

            {/* Field: Category */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
              }}
            >
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.08em', fontWeight: 600 }}>
                Biological Category
              </span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', color: 'var(--text-dark)', margin: '0.2rem 0 0 0' }}>
                {profile.category}
              </p>
            </div>

            {/* Field: Availability */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
              }}
            >
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.08em', fontWeight: 600 }}>
                Network Availability
              </span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', color: 'var(--text-dark)', margin: '0.2rem 0 0 0' }}>
                {profile.availability}
              </p>
            </div>

            {/* Field: Special Feature */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
              }}
            >
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.08em', fontWeight: 600 }}>
                Default Primary Feature
              </span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--accent-taupe-dark)', margin: '0.2rem 0 0 0', fontWeight: 600 }}>
                {profile.specialFeature}
              </p>
            </div>

            {/* Field: Caution / Warning */}
            <div
              style={{
                background: 'rgba(216, 198, 165, 0.25)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(169, 154, 136, 0.4)',
              }}
            >
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-taupe-dark)', letterSpacing: '0.08em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <ShieldAlert size={12} /> Cautionary Advisory
              </span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-dark)', margin: '0.2rem 0 0 0', fontWeight: 500 }}>
                {profile.warning}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================================================================ */}
        {/* PART B: OPERATING INSTRUCTIONS (Expandable System Modes)         */}
        {/* ================================================================ */}
        <div style={{ width: '100%', maxWidth: '820px', marginBottom: '3.5rem' }}>
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
              SECTION B • OPERATING PROTOCOLS
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                color: 'var(--text-dark)',
                marginTop: '0.3rem',
              }}
            >
              Five Essential Operational Modes
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
              }}
            >
              Click any mode below to view diagnostics & handling instructions
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {content.instructions.map((item) => {
              const isOpen = expandedCard === item.id;
              const isTomJerryCard = item.id === 'card-3';

              return (
                <motion.div
                  key={item.id}
                  className="paper-card"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: isOpen ? 'var(--bg-offwhite)' : 'rgba(255, 254, 250, 0.85)',
                    border: isOpen
                      ? '1.5px solid var(--accent-champagne-dark)'
                      : '1px solid var(--border-medium)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: isOpen ? 'var(--shadow-float)' : 'var(--shadow-paper)',
                  }}
                  onClick={() => toggleCard(item.id)}
                >
                  {/* Card Header Bar */}
                  <div
                    style={{
                      padding: '1.15rem 1.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      {/* Mode Number badge */}
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: 'var(--accent-taupe-dark)',
                          background: 'var(--bg-cream)',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.num}
                      </span>

                      <div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.15rem',
                            color: 'var(--text-dark)',
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {item.title}
                        </h4>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.04em',
                          }}
                        >
                          Protocol: {item.modeName}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      {isTomJerryCard && (
                        <span
                          style={{
                            fontSize: '0.75rem',
                            background: 'rgba(216, 198, 165, 0.3)',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '999px',
                            fontWeight: 600,
                            color: 'var(--accent-taupe-dark)',
                          }}
                        >
                          Tom & Jerry 🐱⚡🐭
                        </span>
                      )}

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={18} color="var(--text-dark)" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          padding: '0 1.4rem 1.4rem 1.4rem',
                          borderTop: '1px dashed var(--border-light)',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1.02rem',
                            color: 'var(--text-dark)',
                            lineHeight: 1.6,
                            marginTop: '0.85rem',
                            marginBottom: '0.65rem',
                          }}
                        >
                          {item.description}
                        </p>

                        <div
                          style={{
                            background: 'var(--bg-cream)',
                            borderRadius: '8px',
                            padding: '0.65rem 1rem',
                            border: '1px solid var(--border-medium)',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-hand)',
                              fontSize: '1.22rem',
                              color: 'var(--accent-taupe-dark)',
                              fontWeight: 600,
                            }}
                          >
                            💡 {item.tip}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* PART C: A LITTLE SERIOUS NOW (Warm transition straight from heart)*/}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="paper-card"
          style={{
            maxWidth: '780px',
            width: '100%',
            background: 'linear-gradient(135deg, #FFFDF9 0%, #F5ECE0 100%)',
            borderRadius: '24px',
            padding: '2.75rem 2rem',
            border: '1.5px solid var(--accent-champagne-dark)',
            boxShadow: 'var(--shadow-paper)',
            marginBottom: '3.5rem',
            position: 'relative',
          }}
        >
          {/* Washi Tape */}
          <div
            className="washi-tape"
            style={{
              top: '-11px',
              left: '50%',
              transform: 'translateX(-50%) rotate(1deg)',
              width: '140px',
            }}
          />

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
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
              PART C • STRAIGHT FROM THE HEART
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                color: 'var(--text-dark)',
                marginTop: '0.4rem',
                marginBottom: '0.3rem',
              }}
            >
              {content.seriousPart.heading}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: 'var(--accent-sage-dark)',
              }}
            >
              "{content.seriousPart.subheading}"
            </p>
          </div>

          {/* Emotional Heartfelt Message */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2rem 1.75rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-dark)',
                lineHeight: 1.8,
                whiteSpace: 'pre-line',
              }}
            >
              {content.seriousPart.message}
            </p>
          </div>

          {/* White and Caramel Teddy Bears sitting together gently */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IllustratedTeddy variant="together" size={190} />
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                marginTop: '0.6rem',
              }}
            >
              Best friends through all the seasons of life 🤍
            </p>
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
