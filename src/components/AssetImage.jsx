import React, { useState, useEffect } from 'react';
import { getAsset } from '../data/assets';
import IllustratedTeddy from './IllustratedTeddy';
import { Camera, Image as ImageIcon } from 'lucide-react';

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
  const [resolvedSrc, setResolvedSrc] = useState(assetConfig.src);

  // If asset is a teddy variant, we can directly render IllustratedTeddy if desired,
  // but if the user has a real GIF in public/assets/, we check that first!
  const isTeddyVariant = ['teddyWelcome', 'teddyFight', 'teddyHappy', 'teddyHug'].includes(assetKey);

  // Alternate file mapping helper to check alternate filenames
  const getAlternateSrc = (key) => {
    const alternates = {
      teamGroup: '/assets/team-01.jpg',
      team01: '/assets/team-group.jpg',
      teamLunch: '/assets/snacks-01.jpg',
      snacks01: '/assets/team-lunch.jpg',
      kitkatBreak: '/assets/office-03.jpg',
      office03: '/assets/kitkat-break.jpg',
      everydayMasti: '/assets/office-01.jpg',
      office01: '/assets/everyday-masti.jpg',
      peopleSpecial: '/assets/office-02.jpg',
      office02: '/assets/people-special.jpg',
    };
    return alternates[key] || null;
  };

  useEffect(() => {
    if (!assetConfig.src) {
      setLoadState('fallback');
      return;
    }

    setLoadState('loading');
    const primaryImg = new Image();
    primaryImg.src = assetConfig.src;
    primaryImg.onload = () => {
      setResolvedSrc(assetConfig.src);
      setLoadState('loaded');
    };
    primaryImg.onerror = () => {
      // Try alternate candidate filename if available
      const altSrc = getAlternateSrc(assetKey);
      if (altSrc) {
        const altImg = new Image();
        altImg.src = altSrc;
        altImg.onload = () => {
          setResolvedSrc(altSrc);
          setLoadState('loaded');
        };
        altImg.onerror = () => {
          setLoadState('fallback');
        };
      } else {
        setLoadState('fallback');
      }
    };
  }, [assetConfig.src, assetKey]);

  // If loaded successfully, render the actual image/gif with responsive preservation
  if (loadState === 'loaded') {
    return (
      <div
        className={`asset-image-wrapper ${interactive ? 'cursor-pointer' : ''} ${className}`}
        style={{ aspectRatio, width: '100%', overflow: 'hidden', position: 'relative' }}
        onClick={onClick}
      >
        <img
          src={resolvedSrc}
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
            <Camera size={11} /> 
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
    case 'teamGroup':
    case 'team01':
      // Team masti - Meeting whiteboard + paper airplane + celebration hearts
      return (
        <svg width="74" height="62" viewBox="0 0 100 80" fill="none">
          <rect x="18" y="14" width="64" height="44" rx="4" fill="#FFFEFA" stroke="#51483F" strokeWidth="2.5" />
          <line x1="28" y1="58" x2="22" y2="72" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="72" y1="58" x2="78" y2="72" stroke="#51483F" strokeWidth="2.5" strokeLinecap="round" />
          <text x="28" y="38" fontSize="15" fontFamily="var(--font-hand)" fill="#B8C4B0" fontWeight="bold">TEAM 🤍</text>
          <text x="36" y="50" fontSize="10" fontFamily="var(--font-sans)" fill="#7E7367">Squad Goals</text>
          <path d="M 68 12 L 88 18 L 74 26 Z" fill="#E8DFD1" stroke="#51483F" strokeWidth="1.8" />
          <path d="M 68 12 L 74 26" stroke="#51483F" strokeWidth="1.5" />
          <circle cx="82" cy="38" r="2" fill="#D8C6A5" />
          <circle cx="22" cy="22" r="1.5" fill="#D8C6A5" />
        </svg>
      );

    case 'teamLunch':
    case 'snacks01':
      // Team Lunch - Pizza slice with melting cheese + chai + yum snacks
      return (
        <svg width="74" height="64" viewBox="0 0 100 80" fill="none">
          <polygon points="50,15 84,65 16,65" fill="#E8C382" stroke="#51483F" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M 16 65 Q 50 72 84 65" fill="#C99B5B" stroke="#51483F" strokeWidth="2.5" />
          <circle cx="48" cy="48" r="4.5" fill="#B85D43" />
          <circle cx="34" cy="56" r="3.5" fill="#B85D43" />
          <circle cx="62" cy="54" r="4" fill="#B85D43" />
          <circle cx="50" cy="32" r="3" fill="#B85D43" />
          <circle cx="40" cy="40" r="1.5" fill="#6E8E62" />
          <circle cx="58" cy="42" r="1.5" fill="#6E8E62" />
          <path d="M 46 10 Q 50 6 48 2" fill="none" stroke="#A99A88" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M 54 11 Q 58 7 56 3" fill="none" stroke="#A99A88" strokeWidth="1.6" strokeLinecap="round" />
          <text x="68" y="26" fontSize="13" fontFamily="var(--font-hand)" fill="#51483F" fontWeight="bold">YUM!</text>
          <text x="74" y="42" fontSize="14">🍕</text>
        </svg>
      );

    case 'kitkatBreak':
    case 'office03':
      // KitKat break - Chocolate wafer fingers with golden wrapper & sparkles (strictly no trademarked logos)
      return (
        <svg width="74" height="64" viewBox="0 0 100 80" fill="none">
          <path d="M 22 42 L 78 42 L 74 72 L 26 72 Z" fill="#D8C6A5" stroke="#7F7160" strokeWidth="2" />
          <line x1="34" y1="45" x2="32" y2="70" stroke="#BFA57B" strokeWidth="1.5" />
          <line x1="50" y1="44" x2="50" y2="71" stroke="#BFA57B" strokeWidth="1.5" />
          <line x1="66" y1="45" x2="68" y2="70" stroke="#BFA57B" strokeWidth="1.5" />
          <rect x="28" y="14" width="18" height="34" rx="4" fill="#5A3825" stroke="#3D2416" strokeWidth="2" />
          <rect x="32" y="18" width="10" height="26" rx="2" fill="#6B432D" />
          <rect x="52" y="14" width="18" height="34" rx="4" fill="#5A3825" stroke="#3D2416" strokeWidth="2" />
          <rect x="56" y="18" width="10" height="26" rx="2" fill="#6B432D" />
          <circle cx="23" cy="24" r="1.5" fill="#5A3825" />
          <circle cx="76" cy="28" r="2" fill="#5A3825" />
          <text x="73" y="16" fontSize="13" fill="#D8C6A5">✨</text>
          <text x="13" y="38" fontSize="12" fill="#B8C4B0">✦</text>
          <rect x="33" y="52" width="34" height="13" rx="3" fill="#FFFDF9" stroke="#7F7160" strokeWidth="1" />
          <text x="37" y="62" fontSize="9" fontFamily="var(--font-hand)" fill="#51483F" fontWeight="bold">BREAK 🍫</text>
        </svg>
      );

    case 'everydayMasti':
    case 'office01':
      // Everyday Masti - Dual computer monitors + Tom & Jerry cat-and-mouse sticker
      return (
        <svg width="74" height="64" viewBox="0 0 100 80" fill="none">
          <rect x="18" y="22" width="46" height="32" rx="3" fill="#FFFEFA" stroke="#51483F" strokeWidth="2.5" />
          <line x1="41" y1="54" x2="41" y2="65" stroke="#51483F" strokeWidth="2.5" />
          <line x1="28" y1="65" x2="54" y2="65" stroke="#51483F" strokeWidth="3" strokeLinecap="round" />
          <circle cx="35" cy="36" r="2.5" fill="#51483F" />
          <circle cx="47" cy="36" r="2.5" fill="#51483F" />
          <path d="M 34 43 Q 41 50 48 43" fill="none" stroke="#51483F" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="62" y="16" width="30" height="28" rx="3" fill="#F4EFE6" stroke="#A99A88" strokeWidth="1.5" transform="rotate(10 62 16)" />
          <text x="66" y="32" fontSize="12" transform="rotate(10 62 16)">🐱⚡🐭</text>
          <path d="M 68 56 L 86 50 L 74 66 Z" fill="#E8DFD1" stroke="#51483F" strokeWidth="1.6" />
        </svg>
      );

    case 'peopleSpecial':
    case 'office02':
      // The People Who Made It Special - Polaroid + golden paperclip + hearts
      return (
        <svg width="74" height="64" viewBox="0 0 100 80" fill="none">
          <rect x="22" y="14" width="52" height="58" rx="4" fill="#FFFEFA" stroke="#51483F" strokeWidth="2.2" transform="rotate(-4 22 14)" />
          <rect x="27" y="20" width="42" height="38" fill="#F4EFE6" transform="rotate(-4 27 20)" />
          <path
            d="M 48 36 C 48 29, 38 29, 38 37 C 38 45, 48 52, 48 52 C 48 52, 58 45, 58 37 C 58 29, 48 29, 48 36 Z"
            fill="#B8C4B0"
            transform="rotate(-4 48 36)"
          />
          <path d="M 38 10 C 38 4 45 4 45 10 L 45 22 C 45 27 34 27 34 22 L 34 11" fill="none" stroke="#D8C6A5" strokeWidth="2.2" strokeLinecap="round" />
          <text x="76" y="32" fontSize="16" fill="#D8C6A5">✨</text>
          <text x="12" y="55" fontSize="14">🫶</text>
        </svg>
      );

    case 'birthdayCake':
      // Multi-layer birthday cake with glowing candles
      return (
        <svg width="80" height="70" viewBox="0 0 100 90" fill="none">
          <ellipse cx="50" cy="78" rx="38" ry="8" fill="#E8DFD1" stroke="#51483F" strokeWidth="2" />
          <rect x="20" y="52" width="60" height="24" rx="4" fill="#F1EBDD" stroke="#51483F" strokeWidth="2.5" />
          <rect x="28" y="34" width="44" height="18" rx="3" fill="#FFFEFA" stroke="#51483F" strokeWidth="2.2" />
          <path d="M 28 39 Q 34 45 40 39 Q 46 45 52 39 Q 58 45 64 39 Q 70 45 72 39" fill="none" stroke="#D8C6A5" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="34" x2="42" y2="22" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="34" x2="50" y2="20" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="34" x2="58" y2="22" stroke="#51483F" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="42" cy="18" rx="2.5" ry="4" fill="#D8C6A5" />
          <ellipse cx="50" cy="16" rx="3" ry="5" fill="#E8A87C" />
          <ellipse cx="58" cy="18" rx="2.5" ry="4" fill="#D8C6A5" />
        </svg>
      );

    default:
      return <ImageIcon size={38} color="#A99A88" strokeWidth={1.5} />;
  }
}
