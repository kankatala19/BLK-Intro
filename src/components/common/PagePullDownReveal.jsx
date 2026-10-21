import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * PagePullDownReveal - An animated human character that physically pulls the entire
 * Contact Us page down from above the screen like a roller blind / projector screen,
 * landing on the ground and celebrating the reveal.
 */
export const PagePullDownReveal = ({ onComplete }) => {
  const [phase, setPhase] = useState('pulling'); // 'pulling' | 'landed' | 'finished'

  useEffect(() => {
    // Phase 1: Pulling down (0s -> 1.5s)
    const landTimer = setTimeout(() => {
      setPhase('landed');
    }, 1500);

    // Phase 2: Landed celebration & fade out (1.5s -> 2.4s)
    const finishTimer = setTimeout(() => {
      setPhase('finished');
      if (onComplete) onComplete();
    }, 2400);

    return () => {
      clearTimeout(landTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  if (phase === 'finished') return null;

  return (
    <AnimatePresence>
      {phase !== 'finished' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 top-0 pointer-events-none z-50 overflow-hidden select-none"
        >
          {/* Quick Skip Button */}
          <button
            type="button"
            onClick={() => {
              setPhase('finished');
              if (onComplete) onComplete();
            }}
            className="pointer-events-auto absolute top-6 right-6 z-50 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white text-xs font-mono backdrop-blur-md border border-white/20 transition-all shadow-xl cursor-pointer"
            title="Skip Pull Animation"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>

          {/* ========================================================
              CHARACTER ATTACHED TO BOTTOM EDGE OF PULL
          ======================================================== */}
          <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: '0vh' }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1], // Smooth physical descent
            }}
            className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-end items-center"
          >
            {/* The Bottom Grip Bar of the Page */}
            <div className="w-full relative flex items-center justify-center">
              {/* Chrome / Gold Page Pull-Edge Bar */}
              <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#FF671F] via-[#F59E0B] to-transparent shadow-[0_4px_15px_rgba(245,158,11,0.5)]" />

              {/* Center Hanging Handle / Grip Ring */}
              <div className="absolute top-0 w-16 h-5 rounded-b-xl border-2 border-amber-400 bg-amber-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <div className="w-8 h-1 bg-amber-300 rounded-full" />
              </div>

              {/* Character Hanging & Pulling Down */}
              <div className="absolute top-3 flex flex-col items-center">
                {/* Sweat effort drop during the pull */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={
                    phase === 'pulling'
                      ? { opacity: [1, 0.6, 1], y: [-2, -6, -2] }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute -top-3 right-0 text-sky-400 font-bold text-xs"
                >
                  💦
                </motion.div>

                {/* Celebration Sparkles after landing */}
                {phase === 'landed' && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-6 text-amber-300 font-bold text-base flex items-center gap-1"
                  >
                    <span>✨</span>
                    <span className="text-[11px] font-mono text-white bg-crimson-600 px-2 py-0.5 rounded-full shadow-md font-bold uppercase tracking-wider">
                      Welcome!
                    </span>
                    <span>✨</span>
                  </motion.div>
                )}

                {/* Character SVG with Body, Raised Arms, and Walking/Hanging Legs */}
                <motion.div
                  animate={
                    phase === 'pulling'
                      ? {
                          rotate: [-3, 3, -3, 3, 0],
                          y: [0, 2, 0, 2, 0],
                        }
                      : {
                          scaleY: [0.85, 1.1, 1],
                          scaleX: [1.1, 0.95, 1],
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={
                    phase === 'pulling'
                      ? { duration: 1.5, repeat: 0, ease: 'easeInOut' }
                      : { duration: 0.4, ease: 'easeOut' }
                  }
                  className="w-24 sm:w-28 h-36 sm:h-40 drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                >
                  <svg viewBox="0 0 100 150" className="w-full h-full">
                    <defs>
                      <linearGradient id="charSkin" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FCD34D" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>

                      <linearGradient id="charJacket" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>

                      <linearGradient id="charPants" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                    </defs>

                    {/* Shadow underneath feet */}
                    <ellipse
                      cx="50"
                      cy="146"
                      rx={phase === 'landed' ? '28' : '18'}
                      ry="4"
                      fill="#000000"
                      fillOpacity={phase === 'landed' ? '0.45' : '0.2'}
                    />

                    {/* --- LEGS --- */}
                    {phase === 'pulling' ? (
                      /* Kicking / Hanging Legs during pull down */
                      <g>
                        <path
                          d="M 43 96 L 36 120 L 28 136 L 22 136"
                          stroke="url(#charPants)"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <path d="M 20 136 L 32 136 L 30 131 L 22 131 Z" fill="#FFFFFF" />

                        <path
                          d="M 57 96 L 64 122 L 72 138 L 80 138"
                          stroke="url(#charPants)"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <path d="M 72 138 L 84 138 L 82 133 L 74 133 Z" fill="#FFFFFF" />
                      </g>
                    ) : (
                      /* Standing Legs when landed */
                      <g>
                        <path
                          d="M 44 96 L 40 124 L 35 144 L 27 144"
                          stroke="url(#charPants)"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <path d="M 26 144 L 38 144 L 36 139 L 28 139 Z" fill="#FFFFFF" />

                        <path
                          d="M 56 96 L 60 124 L 65 144 L 73 144"
                          stroke="url(#charPants)"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <path d="M 64 144 L 76 144 L 74 139 L 66 139 Z" fill="#FFFFFF" />
                      </g>
                    )}

                    {/* --- TORSO / HOODIE --- */}
                    <g>
                      <path
                        d="M 38 52 C 38 46, 62 46, 62 52 L 59 98 C 59 100, 41 100, 41 98 Z"
                        fill="url(#charJacket)"
                      />
                      {/* Zipper */}
                      <line x1="50" y1="50" x2="50" y2="98" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" />
                      {/* BLK Cyan Dot */}
                      <circle cx="45" cy="62" r="2.2" fill="#38BDF8" />
                    </g>

                    {/* --- HEAD & FACE --- */}
                    <g>
                      {/* Neck */}
                      <rect x="46" y="38" width="8" height="10" fill="url(#charSkin)" rx="2" />
                      {/* Face */}
                      <circle cx="50" cy="30" r="15" fill="url(#charSkin)" />

                      {/* Hair */}
                      <path
                        d="M 35 26 C 35 12, 65 12, 65 24 C 62 18, 56 16, 50 17 C 44 17, 38 21, 35 26 Z"
                        fill="#18181B"
                      />

                      {/* Glasses */}
                      <rect x="42" y="27" width="9" height="7" rx="2" fill="none" stroke="#0F172A" strokeWidth="1.6" />
                      <rect x="53" y="27" width="9" height="7" rx="2" fill="none" stroke="#0F172A" strokeWidth="1.6" />
                      <line x1="51" y1="30" x2="53" y2="30" stroke="#0F172A" strokeWidth="1.6" />

                      {/* Eyes */}
                      <circle cx="46.5" cy="30.5" r="1.5" fill="#0F172A" />
                      <circle cx="57.5" cy="30.5" r="1.5" fill="#0F172A" />

                      {/* Mouth */}
                      {phase === 'pulling' ? (
                        /* Determined Effort Mouth */
                        <path d="M 46 38 L 54 38" stroke="#78350F" strokeWidth="1.8" strokeLinecap="round" />
                      ) : (
                        /* Big Happy Smile when landed */
                        <path d="M 45 37 Q 50 42, 55 37" fill="none" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
                      )}
                    </g>

                    {/* --- ARMS & HANDS --- */}
                    {phase === 'pulling' ? (
                      /* Both arms reaching UP gripping the handle bar */
                      <g>
                        {/* Left Arm UP */}
                        <path
                          d="M 39 54 L 32 30 L 37 12"
                          stroke="url(#charJacket)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        {/* Left Hand gripping handle */}
                        <circle cx="37" cy="11" r="4.5" fill="url(#charSkin)" />

                        {/* Right Arm UP */}
                        <path
                          d="M 61 54 L 68 30 L 63 12"
                          stroke="url(#charJacket)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        {/* Right Hand gripping handle */}
                        <circle cx="63" cy="11" r="4.5" fill="url(#charSkin)" />
                      </g>
                    ) : (
                      /* Both arms raised in VICTORY / CHEER \o/ */
                      <g>
                        {/* Left Arm Waving */}
                        <path
                          d="M 39 54 L 26 36 L 22 18"
                          stroke="url(#charJacket)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <circle cx="21" cy="17" r="4.5" fill="url(#charSkin)" />

                        {/* Right Arm Waving */}
                        <path
                          d="M 61 54 L 74 36 L 78 18"
                          stroke="url(#charJacket)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <circle cx="79" cy="17" r="4.5" fill="url(#charSkin)" />
                      </g>
                    )}
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
