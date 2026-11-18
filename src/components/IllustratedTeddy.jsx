import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../data/assets';

/**
 * Illustrated Teddy Component
 * Aesthetic Reference: One soft creamy white bear and one caramel-brown bear
 * Chubby, rounded proportions, small cute ears, soft blush, and gentle expressions.
 * Prioritizes user's actual image/GIF assets when available.
 */
export default function IllustratedTeddy({ variant = 'welcome', size = 240, className = '' }) {
  const [hasCustomGif, setHasCustomGif] = useState(false);

  // Check if a matching custom GIF exists in public/assets/
  const assetMap = {
    fight: assets.teddyFight?.src,
    welcome: assets.helloCat?.src || '/assets/hello-cat.gif',
    happy: assets.teddyHappy?.src,
    hug: assets.teddyHug?.src,
    together: assets.teddyTogether?.src,
  };

  const targetSrc = assetMap[variant];

  useEffect(() => {
    if (!targetSrc) {
      setHasCustomGif(false);
      return;
    }
    const img = new Image();
    img.src = targetSrc;
    img.onload = () => setHasCustomGif(true);
    img.onerror = () => setHasCustomGif(false);
  }, [targetSrc]);

  // If user supplied GIF exists (e.g. teddy-fight.gif), render as clean <img>!
  if (hasCustomGif && targetSrc) {
    return (
      <div
        className={`teddy-gif-container ${className}`}
        style={{
          width: '100%',
          maxWidth: size * 1.2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <img
          src={targetSrc}
          alt={`Teddy ${variant}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: size,
            objectFit: 'contain',
            borderRadius: '14px',
            display: 'block',
          }}
        />
      </div>
    );
  }

  // Fallback: If variant is 'fight' and custom GIF hasn't loaded, directly render the downloaded GIF file!
  if (variant === 'fight') {
    return (
      <div
        className={`teddy-fight-container ${className}`}
        style={{
          width: '100%',
          maxWidth: size * 1.2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <img
          src="/assets/teddy-fight.gif"
          alt="Teddy fight animation"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: size,
            objectFit: 'contain',
            borderRadius: '14px',
            display: 'block',
          }}
        />
      </div>
    );
  }

  // Variant: 'together' or 'hug' (Soft White Bear + Warm Caramel Bear cuddling)
  if (variant === 'hug' || variant === 'together') {
    return (
      <div
        className={`teddy-illustration-container ${className}`}
        style={{ width: size * 1.15, height: size, margin: '0 auto' }}
      >
        <svg viewBox="0 0 280 230" width="100%" height="100%" style={{ overflow: 'visible' }}>
          <defs>
            <filter id="gentleShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#51483F" floodOpacity="0.1" />
            </filter>
            {/* White Bear Gradient */}
            <linearGradient id="whiteBearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5EFE6" />
            </linearGradient>
            {/* Caramel Bear Gradient */}
            <linearGradient id="caramelBearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D5AF86" />
              <stop offset="100%" stopColor="#BE956B" />
            </linearGradient>
          </defs>

          {/* Floor Shadow */}
          <ellipse cx="140" cy="210" rx="95" ry="14" fill="rgba(81, 72, 63, 0.08)" />

          {/* Little Floating Heart above them */}
          <motion.g
            animate={{ y: [-2, -8, -2], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <path
              d="M 140 50 C 140 42, 126 42, 126 54 C 126 64, 140 74, 140 74 C 140 74, 154 64, 154 54 C 154 42, 140 42, 140 50 Z"
              fill="#D8C6A5"
            />
          </motion.g>

          {/* Cuddling Bears Breathing */}
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            {/* LEFT BEAR: Soft Creamy White Bear */}
            {/* White Bear Body */}
            <ellipse cx="105" cy="148" rx="46" ry="40" fill="url(#whiteBearGrad)" filter="url(#gentleShadow)" />
            {/* White Bear Head */}
            <circle cx="102" cy="100" r="36" fill="url(#whiteBearGrad)" />
            {/* White Bear Ears */}
            <circle cx="78" cy="74" r="12" fill="url(#whiteBearGrad)" />
            <circle cx="78" cy="74" r="6" fill="#FCECE7" />
            <circle cx="120" cy="72" r="11" fill="url(#whiteBearGrad)" />
            <circle cx="120" cy="72" r="5" fill="#FCECE7" />
            {/* White Bear Snout */}
            <ellipse cx="112" cy="108" rx="12" ry="9" fill="#FFFFFF" />
            <ellipse cx="112" cy="104" rx="4.5" ry="3.5" fill="#51483F" />
            <path d="M 108 111 Q 112 115 116 111" fill="none" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
            {/* Peaceful Sleeping / Smiling Eye ^_^ */}
            <path d="M 90 96 Q 96 91 100 96" fill="none" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
            {/* Rosy Cheek */}
            <ellipse cx="90" cy="105" rx="6" ry="4" fill="#F3ABA0" opacity="0.65" />

            {/* RIGHT BEAR: Warm Caramel-Brown Bear */}
            {/* Caramel Bear Body */}
            <ellipse cx="165" cy="148" rx="46" ry="40" fill="url(#caramelBearGrad)" filter="url(#gentleShadow)" />
            {/* Caramel Bear Head */}
            <circle cx="170" cy="100" r="36" fill="url(#caramelBearGrad)" />
            {/* Caramel Bear Ears */}
            <circle cx="194" cy="74" r="12" fill="url(#caramelBearGrad)" />
            <circle cx="194" cy="74" r="6" fill="#A87F56" />
            <circle cx="152" cy="72" r="11" fill="url(#caramelBearGrad)" />
            <circle cx="152" cy="72" r="5" fill="#A87F56" />
            {/* Caramel Bear Snout */}
            <ellipse cx="158" cy="108" rx="14" ry="10" fill="#FDF7EE" />
            <ellipse cx="158" cy="104" rx="5" ry="3.5" fill="#51483F" />
            <path d="M 153 111 Q 158 115 163 111" fill="none" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
            {/* Peaceful Closed Eye */}
            <path d="M 172 96 Q 177 91 182 96" fill="none" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
            {/* Rosy Cheek */}
            <ellipse cx="180" cy="105" rx="6" ry="4" fill="#ECA295" opacity="0.65" />

            {/* Hugging Arms Cuddling Together */}
            <path
              d="M 95 142 C 115 152, 155 154, 175 142"
              fill="none"
              stroke="url(#caramelBearGrad)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M 175 142 C 155 152, 115 152, 95 142"
              fill="none"
              stroke="url(#whiteBearGrad)"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      </div>
    );
  }

  // Variant: 'happy' (Bouncing celebration)
  if (variant === 'happy') {
    return (
      <div
        className={`teddy-illustration-container ${className}`}
        style={{ width: size, height: size, margin: '0 auto' }}
      >
        <svg viewBox="0 0 240 240" width="100%" height="100%" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="whiteBearH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5EFE6" />
            </linearGradient>
            <linearGradient id="caramelBearH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D5AF86" />
              <stop offset="100%" stopColor="#BE956B" />
            </linearGradient>
          </defs>

          {/* Floor Shadow */}
          <motion.ellipse
            cx="120"
            cy="225"
            rx="60"
            ry="10"
            fill="rgba(81, 72, 63, 0.08)"
            animate={{ scale: [1, 0.75, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />

          {/* Floating Stars */}
          <motion.g
            animate={{ y: [-3, 3, -3], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <text x="30" y="55" fontSize="20" fill="#D8C6A5">✨</text>
            <text x="190" y="55" fontSize="22" fill="#B8C4B0">⭐</text>
            <text x="180" y="140" fontSize="18" fill="#D8C6A5">✨</text>
          </motion.g>

          {/* Teddy Jumping */}
          <motion.g
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
          >
            {/* White Bear Happy Jump */}
            <ellipse cx="120" cy="148" rx="52" ry="44" fill="url(#whiteBearH)" />
            <circle cx="120" cy="92" r="40" fill="url(#whiteBearH)" />
            {/* Ears */}
            <circle cx="90" cy="62" r="14" fill="url(#whiteBearH)" />
            <circle cx="90" cy="62" r="7" fill="#FCECE7" />
            <circle cx="150" cy="62" r="14" fill="url(#whiteBearH)" />
            <circle cx="150" cy="62" r="7" fill="#FCECE7" />

            {/* Happy raised paws */}
            <ellipse cx="70" cy="115" rx="14" ry="24" transform="rotate(-35 70 115)" fill="url(#whiteBearH)" />
            <ellipse cx="170" cy="115" rx="14" ry="24" transform="rotate(35 170 115)" fill="url(#whiteBearH)" />

            {/* Snout */}
            <ellipse cx="120" cy="100" rx="16" ry="12" fill="#FFFFFF" />
            <ellipse cx="120" cy="95" rx="6" ry="4.5" fill="#51483F" />
            <path d="M 112 104 Q 120 112 128 104" fill="none" stroke="#51483F" strokeWidth="2.8" strokeLinecap="round" />

            {/* Joyful curved eyes ^_^ */}
            <path d="M 104 88 Q 110 82 115 88" fill="none" stroke="#51483F" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 125 88 Q 130 82 136 88" fill="none" stroke="#51483F" strokeWidth="2.8" strokeLinecap="round" />

            {/* Cheeks */}
            <circle cx="102" cy="98" r="6" fill="#F3ABA0" opacity="0.65" />
            <circle cx="138" cy="98" r="6" fill="#F3ABA0" opacity="0.65" />
          </motion.g>
        </svg>
      </div>
    );
  }

  // DEFAULT: 'welcome' (Supplied Tenor Animated Cat GIF)
  const catLocalSrc = assets.helloCat?.src || '/assets/hello-cat.gif';
  const catFallbackSrc = assets.helloCat?.fallbackSrc || 'https://media1.tenor.com/m/k4q_fhUFnX0AAAAd/cat.gif';
  const [currentCatSrc, setCurrentCatSrc] = useState(catLocalSrc);

  return (
    <div
      className={`cat-illustration-container ${className}`}
      style={{
        width: '100%',
        maxWidth: size,
        height: size,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img
        src={currentCatSrc}
        alt="Animated cat playfully saying hello"
        loading="eager"
        onError={() => {
          if (currentCatSrc !== catFallbackSrc) {
            setCurrentCatSrc(catFallbackSrc);
          }
        }}
        style={{
          maxWidth: '100%',
          height: 'auto',
          maxHeight: size,
          objectFit: 'contain',
          borderRadius: '16px',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </div>
  );
}
