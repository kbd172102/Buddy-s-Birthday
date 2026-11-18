import React, { useState, useEffect } from 'react';
import { assets, getAsset } from '../data/assets';
import IllustratedTeddy from './IllustratedTeddy';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

/**
 * Intelligent Asset Loader Component
 * Respects user's actual files in /public/assets/
 * Provides tasteful, handcrafted illustrated scrap-paper fallbacks if files aren't provided yet.
 * Never displays broken image icons.
 */
export default function AssetImage({
  assetKey,
  className = '',
  alt = '',
  aspectRatio = '4/3',
  onClick = null,
  showPlaceholderHint = true,
  interactive = true,
}) {
  const assetConfig = getAsset(assetKey);
  const [loadState, setLoadState] = useState('loading'); // 'loading' | 'loaded' | 'fallback'

  // If asset is a teddy variant, we can directly render IllustratedTeddy if desired,
  // but if the user has a real GIF in public/assets/, we check that first!
  const isTeddyVariant = ['teddyWelcome', 'teddyFight', 'teddyHappy', 'teddyHug'].includes(assetKey);

  useEffect(() => {
    if (!assetConfig.src) {
      setLoadState('fallback');
      return;
    }

    setLoadState('loading');
    const img = new Image();
    img.src = assetConfig.src;
    img.onload = () => {
      setLoadState('loaded');
    };
    img.onerror = () => {
      setLoadState('fallback');
    };
  }, [assetConfig.src]);

  // If loaded successfully, render the actual image/gif with responsive preservation
  if (loadState === 'loaded') {
    return (
      <div
        className={`asset-image-wrapper ${interactive ? 'cursor-pointer' : ''} ${className}`}
        style={{ aspectRatio, width: '100%', overflow: 'hidden', position: 'relative' }}
        onClick={onClick}
      >
        <img
          src={assetConfig.src}
          alt={alt || assetConfig.alt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            transition: 'transform 0.4s var(--transition-smooth)',
          }}
          className="scrapbook-actual-img"
        />
      </div>
    );
  }

  // If it's a teddy asset and in fallback mode, render our rich SVG teddy!
  if (isTeddyVariant) {
    const variantMap = {
      teddyWelcome: 'welcome',
      teddyFight: 'fight',
      teddyHappy: 'happy',
      teddyHug: 'hug'
    };
    return (
      <div 
        className={`asset-teddy-fallback ${className}`} 
        onClick={onClick}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <IllustratedTeddy variant={variantMap[assetKey] || 'welcome'} />
      </div>
    );
  }

  // Otherwise, render a tasteful, hand-crafted illustrated scrapbook placeholder
  return (
    <div
      className={`asset-fallback-container ${interactive ? 'cursor-pointer' : ''} ${className}`}
      style={{
        aspectRatio,
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FBF8F2 0%, #F1EBDD 100%)',
        border: '1.5px dashed rgba(169, 154, 136, 0.45)',
        borderRadius: '8px',
        padding: '1.25rem',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Background paper texture & grid */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${assetKey}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#51483F" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${assetKey})`} />
      </svg>

      {/* Handcrafted Category Doodle */}
      <div style={{ position: 'relative', zIndex: 2, marginBottom: '0.6rem' }}>
        {renderCategoryDoodle(assetKey)}
      </div>

      {/* Caption & Placeholder hint */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '90%' }}>
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.25rem',
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '0.2rem'
          }}
        >
          {assetConfig.caption || 'Special Memory Captured Here'}
        </p>

        {showPlaceholderHint && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--accent-taupe-dark)',
              background: 'rgba(255, 255, 255, 0.85)',
              padding: '0.2rem 0.55rem',
              borderRadius: '999px',
              border: '1px solid rgba(169, 154, 136, 0.25)',
              marginTop: '0.3rem'
            }}
          >
            <Camera size={11} /> Drop {assetConfig.src.replace('/assets/', '')}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * Custom hand-drawn style SVG illustrations for each memory
 */
function renderCategoryDoodle(assetKey) {
  switch (assetKey) {
    case 'office01':
      // Irritating each other - dual computer monitors + coffee spill + funny sticky note
      return (
        <svg width="70" height="60" viewBox="0 0 100 80" fill="none">
          {/* Laptop & desk */}
          <rect x="15" y="25" width="45" height="30" rx="3" fill="#E8DFD1" stroke="#51483F" strokeWidth="2.5" />
          <line x1="10" y1="55" x2="65" y2="55" stroke="#51483F" strokeWidth="3" strokeLinecap="round" />
          {/* Funny Code / Error on screen */}
          <line x1="22" y1="33" x2="40" y2="33" stroke="#B8C4B0" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="39" x2="50" y2="39" stroke="#97AAB5" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="45" x2="35" y2="45" stroke="#D8C6A5" strokeWidth="2" strokeLinecap="round" />
          {/* Sticky note saying 'STOP' */}
          <rect x="52" y="15" width="26" height="26" rx="2" fill="#F4EFE6" stroke="#A99A88" strokeWidth="1.5" transform="rotate(12 52 15)" />
          <text x="60" y="32" fontSize="11" fontFamily="var(--font-hand)" fill="#51483F" fontWeight="bold" transform="rotate(12 52 15)">BUSY!</text>
          {/* Coffee cup */}
          <rect x="75" y="44" width="14" height="18" rx="2" fill="#D8C6A5" stroke="#51483F" strokeWidth="2" />
          <path d="M 89 48 Q 94 53 89 58" fill="none" stroke="#51483F" strokeWidth="2" />
          {/* Steam */}
          <path d="M 80 38 Q 82 34 80 30" fill="none" stroke="#A99A88" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'snacks01':
      // Snacks - Chai cup + crunchy samosa + biscuit doodle
      return (
        <svg width="70" height="60" viewBox="0 0 100 80" fill="none">
          {/* Chai Glass */}
          <path d="M 25 25 L 30 60 L 45 60 L 50 25 Z" fill="#F4EFE6" stroke="#51483F" strokeWidth="2.5" />
          <path d="M 28 35 L 32 58 L 43 58 L 47 35 Z" fill="#D8C6A5" />
          {/* Samosa */}
          <polygon points="65,22 88,58 48,58" fill="#E8DFD1" stroke="#51483F" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="68" cy="42" r="1.5" fill="#51483F" />
          <circle cx="62" cy="48" r="1.5" fill="#51483F" />
          <circle cx="74" cy="50" r="1.5" fill="#51483F" />
          {/* Chai steam */}
          <path d="M 35 18 Q 38 12 35 6" fill="none" stroke="#A99A88" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'team01':
      // Team masti - Meeting whiteboard + paper airplane + celebration doodle
      return (
        <svg width="70" height="60" viewBox="0 0 100 80" fill="none">
          {/* Whiteboard */}
          <rect x="20" y="15" width="60" height="42" rx="3" fill="#FFFEFA" stroke="#51483F" strokeWidth="2.5" />
          <line x1="30" y1="57" x2="25" y2="70" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="70" y1="57" x2="75" y2="70" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
          {/* Whiteboard doodle - Team hearts & tick */}
          <text x="32" y="38" fontSize="16" fontFamily="var(--font-hand)" fill="#B8C4B0" fontWeight="bold">TEAM ✨</text>
          {/* Flying paper airplane */}
          <path d="M 68 12 L 88 18 L 74 26 Z" fill="#E8DFD1" stroke="#51483F" strokeWidth="1.8" />
          <path d="M 68 12 L 74 26" stroke="#51483F" strokeWidth="1.5" />
        </svg>
      );

    case 'office02':
      // Random moments - Mechanical keyboard / desk clock / tea break
      return (
        <svg width="70" height="60" viewBox="0 0 100 80" fill="none">
          {/* Desk clock at 4 PM */}
          <circle cx="40" cy="40" r="24" fill="#F4EFE6" stroke="#51483F" strokeWidth="2.5" />
          <line x1="40" y1="40" x2="40" y2="24" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="40" y1="40" x2="52" y2="40" stroke="#A99A88" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="40" r="2.5" fill="#51483F" />
          {/* Floating 'Zzz' or laughter marks */}
          <text x="68" y="30" fontSize="16" fontFamily="var(--font-hand)" fill="#51483F" fontWeight="bold">HA!</text>
          <text x="74" y="48" fontSize="18" fill="#D8C6A5">✨</text>
        </svg>
      );

    case 'office03':
      // The Little Things - Polaroid frame + paper clips + hand heart
      return (
        <svg width="70" height="60" viewBox="0 0 100 80" fill="none">
          {/* Mini Polaroid frame */}
          <rect x="25" y="15" width="46" height="52" rx="3" fill="#FFFEFA" stroke="#51483F" strokeWidth="2" transform="rotate(-6 25 15)" />
          <rect x="29" y="20" width="38" height="34" fill="#E8DFD1" transform="rotate(-6 25 15)" />
          {/* Heart inside polaroid */}
          <path
            d="M 48 35 C 48 30, 40 30, 40 36 C 40 42, 48 48, 48 48 C 48 48, 56 42, 56 36 C 56 30, 48 30, 48 35 Z"
            fill="#B8C4B0"
            transform="rotate(-6 48 35)"
          />
          {/* Paperclip */}
          <path d="M 72 32 C 72 26 78 26 78 32 L 78 54 C 78 62 68 62 68 54 L 68 34" fill="none" stroke="#A99A88" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'birthdayCake':
      // Multi-layer birthday cake with glowing candles
      return (
        <svg width="80" height="70" viewBox="0 0 100 90" fill="none">
          {/* Stand */}
          <ellipse cx="50" cy="78" rx="38" ry="8" fill="#E8DFD1" stroke="#51483F" strokeWidth="2" />
          {/* Bottom Tier */}
          <rect x="20" y="52" width="60" height="24" rx="4" fill="#F1EBDD" stroke="#51483F" strokeWidth="2.5" />
          {/* Middle Tier */}
          <rect x="28" y="34" width="44" height="18" rx="3" fill="#FFFEFA" stroke="#51483F" strokeWidth="2.2" />
          {/* Frosting drips */}
          <path d="M 28 39 Q 34 45 40 39 Q 46 45 52 39 Q 58 45 64 39 Q 70 45 72 39" fill="none" stroke="#D8C6A5" strokeWidth="2" strokeLinecap="round" />
          {/* Candles */}
          <line x1="42" y1="34" x2="42" y2="22" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="34" x2="50" y2="20" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="34" x2="58" y2="22" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
          {/* Candle Flames */}
          <ellipse cx="42" cy="18" rx="2.5" ry="4" fill="#D8C6A5" />
          <ellipse cx="50" cy="16" rx="3" ry="5" fill="#E8A87C" />
          <ellipse cx="58" cy="18" rx="2.5" ry="4" fill="#D8C6A5" />
        </svg>
      );

    default:
      return <ImageIcon size={38} color="#A99A88" strokeWidth={1.5} />;
  }
}
