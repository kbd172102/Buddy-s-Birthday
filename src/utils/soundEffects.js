/**
 * Sound Engine
 * Provides Web Audio API synthesized sounds + fallback for custom MP3s.
 * Ensures the website works seamlessly with or without audio files.
 */

let audioCtx = null;
let bgmOscillators = [];
let bgmInterval = null;
let isBgmPlaying = false;
let userAudioElement = null;

// Audio Context Lazy Initializer (must be after user gesture)
function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a soft, warm button click sound
 */
export function playClickSound(soundEnabled = true) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    // Gentle warm pop from 440Hz down to 220Hz
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.06);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  } catch {
    // Gracefully ignore audio errors
  }
}

/**
 * Play a gentle paper envelope opening rustle sound
 */
export function playEnvelopeSound(soundEnabled = true) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Filtered noise buffer for paper flutter
    const bufferSize = ctx.sampleRate * 0.25;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(700, now + 0.25);
    filter.Q.value = 3;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.26);

    // Complement with a soft chime note
    const chime = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    chime.type = 'triangle';
    chime.frequency.setValueAtTime(659.25, now + 0.05); // E5
    chimeGain.gain.setValueAtTime(0.06, now + 0.05);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    chime.connect(chimeGain);
    chimeGain.connect(ctx.destination);
    chime.start(now + 0.05);
    chime.stop(now + 0.42);
  } catch {
    // Ignore audio errors
  }
}

/**
 * Play candle blow out sound (gentle puff of wind)
 */
export function playCandleBlowSound(soundEnabled = true) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const bufferSize = ctx.sampleRate * 0.45;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(180, now + 0.4);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.45);
  } catch {
    // Ignore
  }
}

/**
 * Play birthday celebration sparkle/chime cascade
 */
export function playCelebrationSound(soundEnabled = true, customAudioSrc = '/assets/celebration.mp3') {
  if (!soundEnabled) return;

  // Try custom celebration audio first if available
  if (customAudioSrc) {
    const audio = new Audio(customAudioSrc);
    audio.volume = 0.5;
    audio.play().catch(() => {
      // If file not found, fall back to Web Audio music box cascade!
      playSynthCelebration();
    });
    return;
  }
  playSynthCelebration();
}

function playSynthCelebration() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6
    notes.forEach((freq, idx) => {
      const startTime = ctx.currentTime + idx * 0.08;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.65);
    });
  } catch {
    // Ignore
  }
}

/**
 * Ambient Lofi Background Melody Synthesizer
 * Plays a soft, calming Ghibli-inspired music box progression:
 * Cmaj7 -> Am7 -> Fmaj7 -> G6
 */
const ambientMelody = [
  523.25, 659.25, 783.99, 987.77, // C5, E5, G5, B5 (Cmaj7)
  440.00, 523.25, 659.25, 783.99, // A4, C5, E5, G5 (Am7)
  349.23, 440.00, 523.25, 698.46, // F4, A4, C5, F5 (Fmaj7)
  392.00, 493.88, 587.33, 783.99  // G4, B4, D5, G5 (G6)
];

export function startBackgroundMusic(customAudioSrc = '/assets/background-music.mp3') {
  if (isBgmPlaying) return;

  // Try custom MP3 audio file first
  if (customAudioSrc && !userAudioElement) {
    const audio = new Audio(customAudioSrc);
    audio.loop = true;
    audio.volume = 0.35;
    
    audio.play().then(() => {
      userAudioElement = audio;
      isBgmPlaying = true;
    }).catch(() => {
      // If audio file is missing or blocked, start synthesizer!
      startSynthBgm();
    });
    return;
  }

  if (userAudioElement) {
    userAudioElement.play().then(() => {
      isBgmPlaying = true;
    }).catch(() => {
      startSynthBgm();
    });
    return;
  }

  startSynthBgm();
}

function startSynthBgm() {
  const ctx = getAudioContext();
  if (!ctx) return;
  isBgmPlaying = true;

  let noteIndex = 0;

  function scheduleNextNote() {
    if (!isBgmPlaying) return;
    try {
      const now = ctx.currentTime;
      const freq = ambientMelody[noteIndex % ambientMelody.length];
      noteIndex++;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Delicate music box envelope
      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.3);
      bgmOscillators.push(osc);

      if (bgmOscillators.length > 20) {
        bgmOscillators = bgmOscillators.slice(-10);
      }
    } catch {
      // Ignore
    }
  }

  scheduleNextNote();
  bgmInterval = setInterval(scheduleNextNote, 620); // tranquil tempo
}

export function stopBackgroundMusic() {
  isBgmPlaying = false;
  if (bgmInterval) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
  if (userAudioElement) {
    userAudioElement.pause();
  }
  bgmOscillators.forEach(osc => {
    try { osc.stop(); } catch { /* ignore */ }
  });
  bgmOscillators = [];
}
