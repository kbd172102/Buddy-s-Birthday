import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles({ count = 18 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.4 + 0.15,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
      symbol: i % 4 === 0 ? '✦' : i % 7 === 0 ? '✧' : '•',
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: `${p.y}vh`, x: `${p.x}vw`, opacity: p.opacity }}
          animate={{
            y: [`${p.y}vh`, `${(p.y - 15 + 100) % 100}vh`, `${p.y}vh`],
            x: [`${p.x}vw`, `${(p.x + 4) % 100}vw`, `${p.x}vw`],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            fontSize: `${p.size + 4}px`,
            color: p.id % 2 === 0 ? 'var(--accent-champagne-dark)' : 'var(--accent-sage-dark)',
            userSelect: 'none',
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
}
