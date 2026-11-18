import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';

export default function CareerJourney() {
  const content = birthdayData.scene05.partA;

  return (
    <div
      className="paper-card"
      style={{
        maxWidth: '920px',
        width: '100%',
        background: 'var(--bg-offwhite)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        border: '1px solid var(--border-medium)',
        boxShadow: 'var(--shadow-paper)',
        marginBottom: '3.5rem',
        position: 'relative',
      }}
    >
      {/* Decorative Washi Tape */}
      <div
        className="washi-tape"
        style={{
          top: '-10px',
          left: '20%',
          transform: 'rotate(-2deg)',
          width: '110px',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Editorial Note */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent-taupe-dark)',
              fontWeight: 700,
              marginBottom: '0.6rem',
            }}
          >
            <Compass size={15} /> PART I • NEW CHAPTER
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.25,
              marginBottom: '0.5rem',
            }}
          >
            {content.heading}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.25rem',
              color: 'var(--accent-sage-dark)',
              marginBottom: '1.25rem',
            }}
          >
            "{content.subheading}"
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.98rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
            }}
          >
            {content.message}
          </p>
        </div>

        {/* Right Side: Scenic Sunrise & Road Illustration */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border-medium)',
            background: 'linear-gradient(180deg, #F9F5EC 0%, #E8DFD1 100%)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-paper)',
          }}
        >
          <svg viewBox="0 0 400 300" width="100%" height="100%" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E9EEF2" />
                <stop offset="60%" stopColor="#F7EED9" />
                <stop offset="100%" stopColor="#F1DFC4" />
              </linearGradient>
              <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE8B5" />
                <stop offset="100%" stopColor="#E6C48B" />
              </linearGradient>
              <linearGradient id="hillFar" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CAD5C5" />
                <stop offset="100%" stopColor="#B4C2AF" />
              </linearGradient>
              <linearGradient id="hillNear" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B5C3AC" />
                <stop offset="100%" stopColor="#9EAF95" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="400" height="300" rx="10" fill="url(#skyGrad)" />

            {/* Rising Golden Sun */}
            <motion.circle
              cx="200"
              cy="140"
              r="48"
              fill="url(#sunGlow)"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            {/* Sun Aura */}
            <circle cx="200" cy="140" r="75" fill="rgba(255, 232, 181, 0.25)" />

            {/* Distant Birds */}
            <path d="M 90 70 Q 98 64 106 70 Q 114 64 122 70" fill="none" stroke="#7E7367" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 290 85 Q 296 80 302 85 Q 308 80 314 85" fill="none" stroke="#7E7367" strokeWidth="1.4" strokeLinecap="round" />

            {/* Distant Hills */}
            <path d="M 0 170 Q 110 135 220 160 Q 320 140 400 175 L 400 300 L 0 300 Z" fill="url(#hillFar)" />
            <path d="M 0 190 Q 90 165 200 185 Q 300 165 400 205 L 400 300 L 0 300 Z" fill="url(#hillNear)" />

            {/* Winding Open Road Heading to Sunrise */}
            <path
              d="M 170 300 C 180 250, 190 200, 200 165 C 205 165, 205 165, 206 165 C 215 200, 225 250, 245 300 Z"
              fill="#E1D5C1"
              stroke="#8F7E6C"
              strokeWidth="1.5"
            />
            {/* Road Dashed Centerline */}
            <path
              d="M 207 300 C 203 260, 201 210, 203 165"
              fill="none"
              stroke="#FFF8EE"
              strokeWidth="2.5"
              strokeDasharray="6 8"
            />

            {/* Little Signpost "NEW PATH" */}
            <line x1="285" y1="230" x2="285" y2="260" stroke="#51483F" strokeWidth="2.5" />
            <rect x="260" y="220" width="55" height="20" rx="3" fill="#FFFEFA" stroke="#51483F" strokeWidth="1.5" />
            <text x="267" y="234" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" fill="#51483F">
              NEXT GOAL ➔
            </text>

            {/* Sparkles */}
            <text x="140" y="120" fontSize="16" fill="#D8C6A5">✨</text>
            <text x="250" y="110" fontSize="14" fill="#D8C6A5">✨</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
