import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Sparkles, Cake, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BirthdayCalendar({ onNext, onPrev, onPlayClickSound }) {
  const content = birthdayData.scene04;
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState(20); // Default to birthday
  const [isSparkleActive, setIsSparkleActive] = useState(true);

  const startYear = content.birthYear; // 2001
  const endYear = content.currentCelebrationYear; // 2026

  // Real Dynamic Calendar Calculation for November of selectedYear
  const calendarDays = useMemo(() => {
    // Month 10 in JS Date is November (0-indexed)
    const firstDay = new Date(selectedYear, 10, 1);
    const startWeekday = firstDay.getDay(); // 0 (Sun) to 6 (Sat)
    const totalDaysInNov = 30; // November always has 30 days

    const days = [];
    // Leading empty padding slots
    for (let i = 0; i < startWeekday; i++) {
      days.push({ day: null, key: `empty-${i}` });
    }
    // Days 1 through 30
    for (let d = 1; d <= totalDaysInNov; d++) {
      days.push({
        day: d,
        key: `day-${d}`,
        isBirthday: d === 20,
      });
    }
    return days;
  }, [selectedYear]);

  // Accurate Age Calculation
  const age = selectedYear - startYear;

  const handlePrevYear = () => {
    if (selectedYear > startYear) {
      if (onPlayClickSound) onPlayClickSound();
      setSelectedYear((prev) => prev - 1);
    }
  };

  const handleNextYear = () => {
    if (selectedYear < endYear) {
      if (onPlayClickSound) onPlayClickSound();
      setSelectedYear((prev) => prev + 1);
    }
  };

  const handleSelectDay = (day) => {
    if (!day) return;
    if (onPlayClickSound) onPlayClickSound();
    setSelectedDay(day);
    if (day === 20) {
      setIsSparkleActive(true);
    }
  };

  const isNov20 = selectedDay === 20;

  return (
    <section className="scene-container">
      <div className="scene-inner">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scene-tag"
        >
          <CalendarIcon size={14} color="var(--accent-taupe-dark)" />
          <span>{content.tag}</span>
        </motion.div>

        {/* Heading */}
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
          {content.subheading}
        </motion.p>

        {/* Main Calendar Card */}
        <motion.div
          className="paper-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            maxWidth: '680px',
            width: '100%',
            background: 'var(--bg-offwhite)',
            borderRadius: '24px',
            padding: '2rem 1.75rem',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-paper)',
            marginBottom: '2.5rem',
            position: 'relative',
          }}
        >
          {/* Decorative Washi Tape */}
          <div
            className="washi-tape"
            style={{
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%) rotate(1deg)',
              width: '130px',
            }}
          />

          {/* Year Navigator Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <button
              onClick={handlePrevYear}
              disabled={selectedYear <= startYear}
              aria-label="Previous year"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-cream)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-dark)',
                opacity: selectedYear <= startYear ? 0.35 : 1,
                cursor: selectedYear <= startYear ? 'not-allowed' : 'pointer',
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Selected Month & Year Display */}
            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-taupe-dark)',
                  fontWeight: 600,
                  display: 'block',
                }}
              >
                NOVEMBER
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: 'var(--text-dark)',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {selectedYear}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.15rem',
                  color: 'var(--accent-sage-dark)',
                }}
              >
                {selectedYear === 2001
                  ? "Birth Year (Age 0)"
                  : selectedYear === 2026
                  ? "25th Birthday Celebration!"
                  : `Age: ${age} years old`}
              </span>
            </div>

            <button
              onClick={handleNextYear}
              disabled={selectedYear >= endYear}
              aria-label="Next year"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-cream)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-dark)',
                opacity: selectedYear >= endYear ? 0.35 : 1,
                cursor: selectedYear >= endYear ? 'not-allowed' : 'pointer',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Quick Year Selector Slider / Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              overflowX: 'auto',
              paddingBottom: '0.75rem',
              marginBottom: '1.25rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {[2001, 2005, 2010, 2015, 2020, 2024, 2026].map((yr) => (
              <button
                key={yr}
                onClick={() => {
                  if (onPlayClickSound) onPlayClickSound();
                  setSelectedYear(yr);
                }}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: selectedYear === yr ? 600 : 400,
                  background: selectedYear === yr ? 'var(--text-dark)' : 'var(--bg-cream)',
                  color: selectedYear === yr ? 'var(--bg-offwhite)' : 'var(--text-muted)',
                  border: '1px solid var(--border-medium)',
                  whiteSpace: 'nowrap',
                }}
              >
                {yr} {yr === 2001 ? '🌱' : yr === 2026 ? '🎂' : ''}
              </button>
            ))}
          </div>

          {/* Weekday Header Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              textAlign: 'center',
              marginBottom: '0.6rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--accent-taupe-dark)',
            }}
          >
            {WEEKDAYS.map((day) => (
              <div key={day} style={{ padding: '0.4rem 0' }}>
                {day}
              </div>
            ))}
          </div>

          {/* Monthly Dates Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '6px',
            }}
          >
            {calendarDays.map((item) => {
              if (!item.day) {
                return <div key={item.key} style={{ minHeight: '44px' }} />;
              }

              const isSelected = selectedDay === item.day;
              const isNov20 = item.day === 20;

              return (
                <motion.button
                  key={item.key}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectDay(item.day)}
                  style={{
                    minHeight: '46px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isNov20
                      ? 'linear-gradient(135deg, #F3EBDD 0%, #D8C6A5 100%)'
                      : isSelected
                      ? 'var(--bg-cream)'
                      : 'transparent',
                    border: isNov20
                      ? '2px solid var(--accent-champagne-dark)'
                      : isSelected
                      ? '1.5px solid var(--accent-taupe)'
                      : '1px solid transparent',
                    boxShadow: isNov20 ? '0 4px 12px rgba(216, 198, 165, 0.45)' : 'none',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: isNov20 ? 'var(--font-serif)' : 'var(--font-sans)',
                      fontSize: isNov20 ? '1.08rem' : '0.92rem',
                      fontWeight: isNov20 || isSelected ? 700 : 400,
                      color: isNov20 ? '#3C342D' : 'var(--text-dark)',
                    }}
                  >
                    {item.day}
                  </span>

                  {isNov20 && (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        lineHeight: 1,
                        color: 'var(--text-dark)',
                        marginTop: '1px',
                      }}
                    >
                      👑
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Special Birthday Card Popup when Nov 20 is selected */}
          <AnimatePresence mode="wait">
            {isNov20 && (
              <motion.div
                key={`bday-card-${selectedYear}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{
                  marginTop: '1.75rem',
                  background: 'linear-gradient(135deg, #F9F6F0 0%, #F1EBDD 100%)',
                  borderRadius: '16px',
                  padding: '1.4rem 1.25rem',
                  border: '1.5px solid var(--accent-champagne-dark)',
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(81, 72, 63, 0.08)',
                  position: 'relative',
                }}
              >
                {/* Floating sparkle animation */}
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  style={{ display: 'inline-block', marginBottom: '0.4rem' }}
                >
                  <Cake size={26} color="var(--accent-champagne-dark)" />
                </motion.div>

                {selectedYear === 2001 ? (
                  <>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.3rem',
                        color: 'var(--text-dark)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {content.birthdayCard2001.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-taupe-dark)',
                        fontWeight: 600,
                        marginBottom: '0.4rem',
                      }}
                    >
                      {content.birthdayCard2001.dateText}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      "{content.birthdayCard2001.note}"
                    </p>
                  </>
                ) : selectedYear === 2026 ? (
                  <>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-taupe-dark)',
                        fontWeight: 700,
                      }}
                    >
                      {content.birthdayCard2026.title}
                    </p>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        color: 'var(--text-dark)',
                        margin: '0.2rem 0',
                      }}
                    >
                      {content.birthdayCard2026.subtitle}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.35rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      "{content.birthdayCard2026.note}"
                    </p>
                  </>
                ) : (
                  <>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        color: 'var(--text-dark)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {content.birthdayCardDefault.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-taupe-dark)',
                        fontWeight: 600,
                        marginBottom: '0.35rem',
                      }}
                    >
                      20 NOVEMBER {selectedYear} • {age} YEARS OLD
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      "{content.birthdayCardDefault.note}"
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Birthday Timeline Section */}
        <div style={{ width: '100%', maxWidth: '850px', marginBottom: '3.5rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              textAlign: 'center',
              marginBottom: '0.5rem',
              color: 'var(--text-dark)',
            }}
          >
            Chapters of Time
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              marginBottom: '1.75rem',
            }}
          >
            A journey from 2001 to the grand 2026 milestone
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {content.timeline.map((item) => (
              <motion.div
                key={item.year}
                whileHover={{ y: -4 }}
                onClick={() => {
                  if (onPlayClickSound) onPlayClickSound();
                  setSelectedYear(item.year);
                }}
                style={{
                  background: selectedYear === item.year ? 'var(--bg-cream)' : 'var(--bg-offwhite)',
                  border: selectedYear === item.year
                    ? '1.5px solid var(--accent-champagne-dark)'
                    : '1px solid var(--border-light)',
                  borderRadius: '14px',
                  padding: '1.15rem 1rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-paper)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                    }}
                  >
                    {item.year}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-taupe-dark)' }}>•</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--accent-taupe-dark)',
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

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
              <ArrowLeft size={16} /> Back to User Manual
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
            To Celebration & Wishes <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
