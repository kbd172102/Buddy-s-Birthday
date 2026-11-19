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

        {/* Right Side: The Grand Moment Image */}
        <div
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1.5px solid var(--border-medium)',
            background: 'var(--bg-cream)',
            padding: '0.65rem',
            boxShadow: 'var(--shadow-paper)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <img
            src="/assets/grand-moment.png"
            alt="New Field. New Dreams. Same Legend."
            loading="lazy"
            onError={(e) => {
              const fallback =
                'https://images.openai.com/static-rsc-4/_KFkO-llHArZjqNwGG4VEoVEUXfM6Vvlf8zAOIs2SOdNQYoDJWFJsWcot2eggdw3Mu6qe71_1Q8ND9sdiog3etKFRZs4txuvYkQf0-Xvi0LoHhaFcigpQ_6P0nPikRsrx0sIlvLewfdLqUntK0EPIamv5Ca1fmk9kSm4IDLfoFLZa6ielLSTUQGPUaL0uyAB?purpose=fullsize';
              if (e.target.src !== fallback) {
                e.target.src = fallback;
              }
            }}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '340px',
              objectFit: 'cover',
              borderRadius: '12px',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
}
