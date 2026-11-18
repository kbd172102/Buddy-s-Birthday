import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scenes & Components
import WelcomeScreen from './components/WelcomeScreen';
import OfficeMuseum from './components/OfficeMuseum';
import SecretLetters from './components/SecretLetters';
import BirthdayCalendar from './components/BirthdayCalendar';
import BirthdayCelebration from './components/BirthdayCelebration';
import FinalSurprise from './components/FinalSurprise';
import ProgressIndicator from './components/ProgressIndicator';
import MusicToggle from './components/MusicToggle';
import FloatingParticles from './components/FloatingParticles';

// Audio & Sound
import {
  playClickSound,
  startBackgroundMusic,
  stopBackgroundMusic,
} from './utils/soundEffects';

export default function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const totalScenes = 6;

  // Sound handler wrapper
  const handlePlayClickSound = useCallback(() => {
    playClickSound(true);
  }, []);

  // Music toggle handler
  const handleToggleMusic = useCallback(() => {
    if (isMusicOn) {
      stopBackgroundMusic();
      setIsMusicOn(false);
    } else {
      startBackgroundMusic();
      setIsMusicOn(true);
    }
  }, [isMusicOn]);

  // First interaction helper: if user hasn't explicitly muted and hasn't started music yet,
  // we can optionally start music or keep it as user choice.
  const registerUserInteraction = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  }, [hasInteracted]);

  // Navigation handlers
  const goToNextScene = useCallback(() => {
    registerUserInteraction();
    handlePlayClickSound();
    if (currentScene < totalScenes) {
      setDirection(1);
      setCurrentScene((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentScene, totalScenes, registerUserInteraction, handlePlayClickSound]);

  const goToPrevScene = useCallback(() => {
    registerUserInteraction();
    handlePlayClickSound();
    if (currentScene > 1) {
      setDirection(-1);
      setCurrentScene((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentScene, registerUserInteraction, handlePlayClickSound]);

  const goToScene = useCallback((sceneNum) => {
    registerUserInteraction();
    handlePlayClickSound();
    if (sceneNum >= 1 && sceneNum <= totalScenes && sceneNum !== currentScene) {
      setDirection(sceneNum > currentScene ? 1 : -1);
      setCurrentScene(sceneNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentScene, totalScenes, registerUserInteraction, handlePlayClickSound]);

  const handleReplay = useCallback(() => {
    registerUserInteraction();
    handlePlayClickSound();
    setDirection(-1);
    setCurrentScene(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [registerUserInteraction, handlePlayClickSound]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight' && currentScene < totalScenes) {
        goToNextScene();
      } else if (e.key === 'ArrowLeft' && currentScene > 1) {
        goToPrevScene();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScene, totalScenes, goToNextScene, goToPrevScene]);

  // Journal page transition variants
  const pageVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      scale: 0.985,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      scale: 0.985,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <div
      onClick={registerUserInteraction}
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Floating Dreamy Dust & Sparkle Particles */}
      <FloatingParticles count={16} />

      {/* Floating Top-Right Music Toggle */}
      <MusicToggle
        isMusicOn={isMusicOn}
        onToggle={handleToggleMusic}
        onPlayClickSound={handlePlayClickSound}
      />

      {/* Main Journal Story Pages Container */}
      <main style={{ flex: 1, width: '100%', position: 'relative' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentScene}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', minHeight: '100vh' }}
          >
            {currentScene === 1 && (
              <WelcomeScreen
                onNext={goToNextScene}
                onPlayClickSound={handlePlayClickSound}
              />
            )}

            {currentScene === 2 && (
              <OfficeMuseum
                onNext={goToNextScene}
                onPrev={goToPrevScene}
                onPlayClickSound={handlePlayClickSound}
              />
            )}

            {currentScene === 3 && (
              <SecretLetters
                onNext={goToNextScene}
                onPrev={goToPrevScene}
                onPlayClickSound={handlePlayClickSound}
                isSoundEnabled={true}
              />
            )}

            {currentScene === 4 && (
              <BirthdayCalendar
                onNext={goToNextScene}
                onPrev={goToPrevScene}
                onPlayClickSound={handlePlayClickSound}
              />
            )}

            {currentScene === 5 && (
              <BirthdayCelebration
                onNext={goToNextScene}
                onPrev={goToPrevScene}
                onPlayClickSound={handlePlayClickSound}
                isSoundEnabled={true}
              />
            )}

            {currentScene === 6 && (
              <FinalSurprise
                onReplay={handleReplay}
                onPrev={goToPrevScene}
                onPlayClickSound={handlePlayClickSound}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Fixed Bottom Progress Journal Indicator */}
      <ProgressIndicator
        currentScene={currentScene}
        totalScenes={totalScenes}
        onSelectScene={goToScene}
      />
    </div>
  );
}
