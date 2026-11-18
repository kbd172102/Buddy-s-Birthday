import React from 'react';
import { motion } from 'framer-motion';

/**
 * Illustrated Teddy Component
 * Renders custom animated SVG teddy bears for all states:
 * - 'welcome': waving, smiling, curious
 * - 'fight': comedic playful fight (one sits on other, playful bite, funny bouncing/shaking)
 * - 'happy': jumping with stars and excitement
 * - 'hug': warm, emotional best-friend embrace
 */
export default function IllustratedTeddy({ variant = 'welcome', size = 260, className = '' }) {
  if (variant === 'fight') {
    return (
      <div 
        className={`teddy-illustration-container teddy-fight-scene ${className}`} 
        style={{ width: size * 1.3, maxWidth: '100%', height: size, position: 'relative' }}
      >
        <svg viewBox="0 0 400 300" width="100%" height="100%" style={{ overflow: 'visible' }}>
          <defs>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#51483F" floodOpacity="0.12" />
            </filter>
            <linearGradient id="furWarm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFD3C3" />
              <stop offset="100%" stopColor="#C8B6A6" />
            </linearGradient>
            <linearGradient id="furDarker" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBB8A3" />
              <stop offset="100%" stopColor="#B39F8A" />
            </linearGradient>
          </defs>

          {/* Floor Shadow */}
          <ellipse cx="200" cy="275" rx="140" ry="16" fill="rgba(81, 72, 63, 0.09)" />

          {/* Comic dust cloud / wrestling action marks */}
          <motion.g
            animate={{ scale: [1, 1.15, 0.95, 1], rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            <ellipse cx="200" cy="225" rx="120" ry="40" fill="rgba(241, 235, 221, 0.7)" stroke="#A99A88" strokeWidth="2" strokeDasharray="6 4" />
            <text x="290" y="140" fontSize="24" fontFamily="var(--font-hand)" fill="#51483F" fontWeight="bold">NOM! 💥</text>
            <text x="70" y="160" fontSize="20" fontFamily="var(--font-hand)" fill="#51483F" fontWeight="bold">HEY! 😂</text>
            <text x="180" y="80" fontSize="22" fontFamily="var(--font-hand)" fill="#51483F" fontWeight="bold">POW! 🥊</text>
          </motion.g>

          {/* Action Stars & Sweat Drops */}
          <motion.g
            animate={{ opacity: [0.4, 1, 0.4], y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            {/* Sparkles */}
            <path d="M 120 110 Q 130 110 130 100 Q 130 110 140 110 Q 130 110 130 120 Q 130 110 120 110" fill="#D8C6A5" />
            <path d="M 280 90 Q 288 90 288 82 Q 288 90 296 90 Q 288 90 288 98 Q 288 90 280 90" fill="#D8C6A5" />
            {/* Sweat teardrop */}
            <path d="M 240 120 C 240 112 248 110 248 120 C 248 125 240 125 240 120 Z" fill="#97AAB5" />
          </motion.g>

          {/* BOTTOM TEDDY (Pinned down, playfully biting foot/arm) */}
          <motion.g
            animate={{ rotate: [-2, 3, -2], y: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 0.4 }}
          >
            {/* Bottom Teddy Body */}
            <ellipse cx="180" cy="230" rx="70" ry="40" fill="url(#furDarker)" filter="url(#softShadow)" />
            {/* Bottom Teddy Legs kicking up */}
            <ellipse cx="120" cy="220" rx="24" ry="32" transform="rotate(-30 120 220)" fill="url(#furDarker)" />
            <ellipse cx="120" cy="220" rx="14" ry="20" transform="rotate(-30 120 220)" fill="#E8DFD1" />
            {/* Bottom Teddy Head lying down */}
            <circle cx="240" cy="210" r="38" fill="url(#furDarker)" />
            <circle cx="270" cy="188" r="14" fill="url(#furDarker)" />
            <circle cx="270" cy="188" r="8" fill="#E8DFD1" />
            {/* Playful Chomping Mouth & Grin */}
            <path d="M 245 205 Q 260 215 272 205" fill="none" stroke="#51483F" strokeWidth="4" strokeLinecap="round" />
            {/* Biting little teeth */}
            <polygon points="252,207 256,213 260,207" fill="#FFFEFA" />
            <polygon points="262,207 266,213 270,207" fill="#FFFEFA" />
            {/* Wink eyes >_< */}
            <path d="M 230 195 L 238 200 L 230 205" fill="none" stroke="#51483F" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="255" cy="198" r="4.5" fill="#51483F" />
            {/* Rosy blush */}
            <ellipse cx="232" cy="214" rx="8" ry="5" fill="#E0A899" opacity="0.6" />
          </motion.g>

          {/* TOP TEDDY (Sitting on bottom teddy, playful chaos) */}
          <motion.g
            animate={{ y: [-4, 5, -4], rotate: [3, -3, 3] }}
            transition={{ repeat: Infinity, duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Top Teddy Body */}
            <ellipse cx="205" cy="165" rx="58" ry="46" fill="url(#furWarm)" filter="url(#softShadow)" />
            <ellipse cx="205" cy="165" rx="36" ry="28" fill="#F4EFE6" />

            {/* Top Teddy Head */}
            <circle cx="205" cy="115" r="42" fill="url(#furWarm)" />
            {/* Ears */}
            <circle cx="175" cy="85" r="15" fill="url(#furWarm)" />
            <circle cx="175" cy="85" r="9" fill="#E8DFD1" />
            <circle cx="235" cy="85" r="15" fill="url(#furWarm)" />
            <circle cx="235" cy="85" r="9" fill="#E8DFD1" />

            {/* Snout */}
            <ellipse cx="205" cy="123" rx="16" ry="12" fill="#F4EFE6" />
            <ellipse cx="205" cy="117" rx="7" ry="5" fill="#51483F" />
            {/* Surprised / dramatic mouth :O */}
            <ellipse cx="205" cy="128" rx="6" ry="7" fill="#51483F" />
            <ellipse cx="205" cy="130" rx="4" ry="4" fill="#C57D74" />

            {/* Eyes wide */}
            <circle cx="192" cy="108" r="5" fill="#51483F" />
            <circle cx="194" cy="106" r="1.8" fill="#FFFEFA" />
            <circle cx="218" cy="108" r="5" fill="#51483F" />
            <circle cx="220" cy="106" r="1.8" fill="#FFFEFA" />

            {/* Drama eyebrows */}
            <path d="M 186 98 Q 193 94 200 99" fill="none" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 210 99 Q 217 94 224 98" fill="none" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />

            {/* Arms flailing playfully */}
            <motion.ellipse
              cx="150"
              cy="145"
              rx="15"
              ry="26"
              transform="rotate(35 150 145)"
              fill="url(#furWarm)"
              animate={{ rotate: [25, 45, 25] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
            />
            <motion.ellipse
              cx="260"
              cy="150"
              rx="15"
              ry="26"
              transform="rotate(-40 260 150)"
              fill="url(#furWarm)"
              animate={{ rotate: [-30, -50, -30] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
            />
            {/* Sitting chubby legs */}
            <ellipse cx="170" cy="200" rx="20" ry="14" fill="url(#furWarm)" />
            <circle cx="170" cy="200" r="8" fill="#E8DFD1" />
            <ellipse cx="240" cy="200" rx="20" ry="14" fill="url(#furWarm)" />
            <circle cx="240" cy="200" r="8" fill="#E8DFD1" />
          </motion.g>
        </svg>
      </div>
    );
  }

  if (variant === 'happy') {
    return (
      <div className={`teddy-illustration-container ${className}`} style={{ width: size, height: size }}>
        <svg viewBox="0 0 240 240" width="100%" height="100%" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="happyFur" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2D6C6" />
              <stop offset="100%" stopColor="#C9B6A1" />
            </linearGradient>
            <filter id="shadowH" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#51483F" floodOpacity="0.1" />
            </filter>
          </defs>

          {/* Bouncing Floor Shadow */}
          <motion.ellipse
            cx="120"
            cy="225"
            rx="55"
            ry="10"
            fill="rgba(81, 72, 63, 0.08)"
            animate={{ scale: [1, 0.7, 1], opacity: [0.2, 0.08, 0.2] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
          />

          {/* Floating Stars and Hearts */}
          <motion.g
            animate={{ y: [-4, 4, -4], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <text x="35" y="60" fontSize="20" fill="#D8C6A5">✨</text>
            <text x="185" y="55" fontSize="22" fill="#B8C4B0">⭐</text>
            <text x="25" y="140" fontSize="18" fill="#A99A88">🤍</text>
            <text x="195" y="130" fontSize="20" fill="#D8C6A5">✨</text>
          </motion.g>

          {/* Teddy Jumping */}
          <motion.g
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
          >
            {/* Body */}
            <ellipse cx="120" cy="145" rx="50" ry="42" fill="url(#happyFur)" filter="url(#shadowH)" />
            <ellipse cx="120" cy="147" rx="30" ry="26" fill="#F4EFE6" />

            {/* Happy raised arms */}
            <motion.ellipse
              cx="72"
              cy="115"
              rx="14"
              ry="24"
              transform="rotate(-40 72 115)"
              fill="url(#happyFur)"
              animate={{ rotate: [-35, -48, -35] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
            />
            <motion.ellipse
              cx="168"
              cy="115"
              rx="14"
              ry="24"
              transform="rotate(40 168 115)"
              fill="url(#happyFur)"
              animate={{ rotate: [35, 48, 35] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
            />

            {/* Feet */}
            <ellipse cx="95" cy="185" rx="18" ry="14" fill="url(#happyFur)" />
            <circle cx="95" cy="185" r="8" fill="#F4EFE6" />
            <ellipse cx="145" cy="185" rx="18" ry="14" fill="url(#happyFur)" />
            <circle cx="145" cy="185" r="8" fill="#F4EFE6" />

            {/* Head */}
            <circle cx="120" cy="90" r="38" fill="url(#happyFur)" />
            {/* Ears */}
            <circle cx="92" cy="62" r="14" fill="url(#happyFur)" />
            <circle cx="92" cy="62" r="8" fill="#F4EFE6" />
            <circle cx="148" cy="62" r="14" fill="url(#happyFur)" />
            <circle cx="148" cy="62" r="8" fill="#F4EFE6" />

            {/* Snout */}
            <ellipse cx="120" cy="98" rx="16" ry="12" fill="#F4EFE6" />
            <ellipse cx="120" cy="93" rx="6" ry="4.5" fill="#51483F" />
            {/* Big Grin */}
            <path d="M 112 102 Q 120 112 128 102" fill="none" stroke="#51483F" strokeWidth="2.8" strokeLinecap="round" />

            {/* Joyful happy curved eyes ^_^ */}
            <path d="M 104 86 Q 110 80 114 86" fill="none" stroke="#51483F" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 126 86 Q 130 80 136 86" fill="none" stroke="#51483F" strokeWidth="2.8" strokeLinecap="round" />

            {/* Cheeks */}
            <circle cx="102" cy="96" r="6" fill="#E8B5A5" opacity="0.6" />
            <circle cx="138" cy="96" r="6" fill="#E8B5A5" opacity="0.6" />
          </motion.g>
        </svg>
      </div>
    );
  }

  if (variant === 'hug') {
    return (
      <div className={`teddy-illustration-container ${className}`} style={{ width: size * 1.15, height: size }}>
        <svg viewBox="0 0 260 220" width="100%" height="100%" style={{ overflow: 'visible' }}>
          <defs>
            <filter id="shadowHug" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#51483F" floodOpacity="0.1" />
            </filter>
            <linearGradient id="hugFur1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFD3C3" />
              <stop offset="100%" stopColor="#C4B09C" />
            </linearGradient>
            <linearGradient id="hugFur2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CEB9A1" />
              <stop offset="100%" stopColor="#B39E87" />
            </linearGradient>
          </defs>

          {/* Floor Shadow */}
          <ellipse cx="130" cy="205" rx="90" ry="12" fill="rgba(81, 72, 63, 0.08)" />

          {/* Floating glowing heart between them */}
          <motion.g
            animate={{ scale: [1, 1.25, 1], y: [-2, -8, -2] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <path
              d="M 130 55 C 130 45, 115 45, 115 58 C 115 68, 130 80, 130 80 C 130 80, 145 68, 145 58 C 145 45, 130 45, 130 55 Z"
              fill="#D8C6A5"
              filter="url(#shadowHug)"
            />
          </motion.g>

          {/* Gentle breathing movement */}
          <motion.g
            animate={{ scale: [1, 1.02, 1], y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            {/* LEFT TEDDY */}
            {/* Left Body */}
            <ellipse cx="105" cy="145" rx="44" ry="38" fill="url(#hugFur1)" filter="url(#shadowHug)" />
            {/* Left Head */}
            <circle cx="100" cy="98" r="34" fill="url(#hugFur1)" />
            <circle cx="76" cy="74" r="12" fill="url(#hugFur1)" />
            <circle cx="76" cy="74" r="6" fill="#F4EFE6" />
            <circle cx="118" cy="70" r="11" fill="url(#hugFur1)" />

            {/* Left Snout */}
            <ellipse cx="112" cy="106" rx="13" ry="10" fill="#F4EFE6" />
            <ellipse cx="112" cy="102" rx="5" ry="3.5" fill="#51483F" />
            <path d="M 107 110 Q 113 115 118 110" fill="none" stroke="#51483F" strokeWidth="2.2" strokeLinecap="round" />
            {/* Closed peaceful eyes ^_^ */}
            <path d="M 88 94 Q 94 90 98 94" fill="none" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="88" cy="103" rx="5" ry="3.5" fill="#E8B5A5" opacity="0.6" />

            {/* RIGHT TEDDY */}
            {/* Right Body */}
            <ellipse cx="155" cy="145" rx="44" ry="38" fill="url(#hugFur2)" filter="url(#shadowHug)" />
            {/* Right Head */}
            <circle cx="160" cy="98" r="34" fill="url(#hugFur2)" />
            <circle cx="184" cy="74" r="12" fill="url(#hugFur2)" />
            <circle cx="184" cy="74" r="6" fill="#F4EFE6" />
            <circle cx="142" cy="70" r="11" fill="url(#hugFur2)" />

            {/* Right Snout */}
            <ellipse cx="148" cy="106" rx="13" ry="10" fill="#F4EFE6" />
            <ellipse cx="148" cy="102" rx="5" ry="3.5" fill="#51483F" />
            <path d="M 142 110 Q 148 115 153 110" fill="none" stroke="#51483F" strokeWidth="2.2" strokeLinecap="round" />
            {/* Closed peaceful eyes */}
            <path d="M 162 94 Q 166 90 172 94" fill="none" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="172" cy="103" rx="5" ry="3.5" fill="#E8B5A5" opacity="0.6" />

            {/* Hugging Arms Wrapping around each other */}
            <path
              d="M 90 140 C 110 148, 150 152, 168 140"
              fill="none"
              stroke="url(#hugFur1)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 170 140 C 150 148, 110 152, 92 140"
              fill="none"
              stroke="url(#hugFur2)"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      </div>
    );
  }

  // DEFAULT: 'welcome'
  return (
    <div className={`teddy-illustration-container ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 240 240" width="100%" height="100%" style={{ overflow: 'visible' }}>
        <defs>
          <filter id="softTeddyShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#51483F" floodOpacity="0.12" />
          </filter>
          <linearGradient id="warmFur" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFD3C3" />
            <stop offset="100%" stopColor="#C8B6A6" />
          </linearGradient>
        </defs>

        {/* Floor Shadow */}
        <ellipse cx="120" cy="220" rx="65" ry="12" fill="rgba(81, 72, 63, 0.08)" />

        {/* Floating Sparkles */}
        <motion.g
          animate={{ y: [-3, 3, -3], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <text x="35" y="70" fontSize="18" fill="#D8C6A5">✨</text>
          <text x="180" y="80" fontSize="16" fill="#B8C4B0">⭐</text>
        </motion.g>

        {/* Teddy Body */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          {/* Main Body */}
          <ellipse cx="120" cy="148" rx="52" ry="44" fill="url(#warmFur)" filter="url(#softTeddyShadow)" />
          {/* Belly Patch */}
          <ellipse cx="120" cy="150" rx="34" ry="28" fill="#F4EFE6" />

          {/* Left Arm Resting */}
          <ellipse cx="68" cy="146" rx="16" ry="26" transform="rotate(18 68 146)" fill="url(#warmFur)" />

          {/* Right Arm Waving Playfully */}
          <motion.g
            animate={{ rotate: [-8, 22, -8] }}
            transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
            style={{ transformOrigin: '165px 125px' }}
          >
            <ellipse cx="170" cy="120" rx="16" ry="26" transform="rotate(38 170 120)" fill="url(#warmFur)" />
            <circle cx="178" cy="106" r="9" fill="#F4EFE6" />
          </motion.g>

          {/* Feet */}
          <ellipse cx="92" cy="190" rx="20" ry="15" fill="url(#warmFur)" />
          <circle cx="92" cy="190" r="9" fill="#F4EFE6" />
          <ellipse cx="148" cy="190" rx="20" ry="15" fill="url(#warmFur)" />
          <circle cx="148" cy="190" r="9" fill="#F4EFE6" />

          {/* Head */}
          <circle cx="120" cy="88" r="40" fill="url(#warmFur)" />

          {/* Ears */}
          <circle cx="88" cy="58" r="15" fill="url(#warmFur)" />
          <circle cx="88" cy="58" r="8" fill="#F4EFE6" />
          <circle cx="152" cy="58" r="15" fill="url(#warmFur)" />
          <circle cx="152" cy="58" r="8" fill="#F4EFE6" />

          {/* Snout */}
          <ellipse cx="120" cy="98" rx="18" ry="13" fill="#F4EFE6" />
          <ellipse cx="120" cy="93" rx="7" ry="5" fill="#51483F" />
          <path d="M 112 102 Q 120 110 128 102" fill="none" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />

          {/* Curious Blinking Eyes */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.92, 0.95, 1] }}
            style={{ transformOrigin: '120px 80px' }}
          >
            <circle cx="106" cy="80" r="5" fill="#51483F" />
            <circle cx="108" cy="78" r="1.8" fill="#FFFEFA" />
            <circle cx="134" cy="80" r="5" fill="#51483F" />
            <circle cx="136" cy="78" r="1.8" fill="#FFFEFA" />
          </motion.g>

          {/* Rosy Cheeks */}
          <circle cx="98" cy="92" r="6" fill="#E8B5A5" opacity="0.6" />
          <circle cx="142" cy="92" r="6" fill="#E8B5A5" opacity="0.6" />
        </motion.g>
      </svg>
    </div>
  );
}
