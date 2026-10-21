import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

/**
 * CurtainReveal - Premium lightweight curtain-reveal animation for Contact Us.
 * Features an animated modern architect/engineer near the top gently pulling
 * down on a golden pull-cord, smoothly gliding a lightweight translucent veil
 * downward from top to bottom over 3.6s (cubic-bezier(0.22, 1, 0.36, 1)).
 *
 * Content is progressively unveiled with pristine clarity as the veil hem descends.
 */
export const CurtainReveal = ({ onProgress, onComplete }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isCompleted, setIsCompleted] = useState(false);
  const [characterPhase, setCharacterPhase] = useState('pulling'); // 'pulling' | 'celebrate' | 'done'

  useEffect(() => {
    if (shouldReduceMotion) {
      if (onProgress) onProgress(1);
      if (onComplete) onComplete();
      setIsCompleted(true);
      return;
    }

    // Phase 1: Pulling down (0s to 3.5s)
    // Synchronize progressive stages with parent
    const s1 = setTimeout(() => onProgress && onProgress(0.2), 500);  // Heading
    const s2 = setTimeout(() => onProgress && onProgress(0.4), 1100); // Subtitle
    const s3 = setTimeout(() => onProgress && onProgress(0.6), 1900); // Contact Info
    const s4 = setTimeout(() => onProgress && onProgress(0.8), 2600); // Form
    const s5 = setTimeout(() => onProgress && onProgress(1.0), 3300); // FAQ & Footer

    // Phase 2: Touchdown & polite celebratory salute (3.5s to 4.2s)
    const saluteTimer = setTimeout(() => {
      setCharacterPhase('celebrate');
    }, 3500);

    // Phase 3: Complete & clean DOM unmount (4.2s)
    const completeTimer = setTimeout(() => {
      setCharacterPhase('done');
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, 4200);

    return () => {
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(s4);
      clearTimeout(s5);
      clearTimeout(saluteTimer);
      clearTimeout(completeTimer);
    };
  }, [onProgress, onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    setIsCompleted(true);
    if (onProgress) onProgress(1);
    if (onComplete) onComplete();
  };

  if (isCompleted) return null;

  return (
    <AnimatePresence>
      {!isCompleted && (
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden select-none">
          {/* Quick Skip Control in Top-Right */}
          <button
            type="button"
            onClick={handleSkip}
            className="pointer-events-auto absolute top-4 right-4 z-50 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 hover:bg-slate-900/90 text-white/90 hover:text-white text-xs font-mono backdrop-blur-md border border-white/20 transition-all shadow-lg cursor-pointer"
            title="Skip Curtain Reveal"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>

          {/* ========================================================
              ANIMATED MAN (TECH ARCHITECT) NEAR THE TOP
              Gently pulling down on the gold cord with natural gestures
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-2 sm:top-4 right-[6%] sm:right-[12%] lg:right-[16%] z-40 flex flex-col items-center pointer-events-none"
          >
            {/* The Character Motion Wrapper */}
            <motion.div
              animate={
                characterPhase === 'pulling'
                  ? {
                      y: [0, 4, 0, 4, 0, 3, 0],
                      rotate: [-1.5, 1.5, -1.5, 1.5, -1, 0],
                    }
                  : {
                      y: 0,
                      rotate: 0,
                    }
              }
              transition={
                characterPhase === 'pulling'
                  ? { duration: 3.5, repeat: 0, ease: 'easeInOut' }
                  : { duration: 0.3 }
              }
              className="relative w-16 sm:w-20 h-28 sm:h-32 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
            >
              {/* Effort / Pull sparkle effect */}
              {characterPhase === 'pulling' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.9, 0], y: [-2, -8, -2] }}
                  transition={{ duration: 1.6, repeat: 1, delay: 0.8 }}
                  className="absolute -top-1 -right-2 text-amber-400 text-xs font-bold"
                >
                  ✨
                </motion.div>
              )}

              {/* Polite Welcome Sparkle upon completion */}
              {characterPhase === 'celebrate' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-crimson-600 text-white text-[10px] font-mono px-2 py-0.5 rounded-full shadow-md font-bold"
                >
                  Welcome! 👋
                </motion.div>
              )}

              {/* Vector SVG Modern Architect Character */}
              <svg viewBox="0 0 80 120" className="w-full h-full">
                <defs>
                  <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>

                  <linearGradient id="jacket" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#991B1B" />
                  </linearGradient>

                  <linearGradient id="trousers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                </defs>

                {/* Ground Shadow */}
                <ellipse cx="40" cy="116" rx="16" ry="3" fill="#000000" fillOpacity="0.3" />

                {/* Legs (Firm, comfortable stance) */}
                <g>
                  {/* Left Leg */}
                  <path
                    d="M 34 76 L 30 96 L 26 114 L 18 114"
                    stroke="url(#trousers)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path d="M 16 114 L 27 114 L 26 110 L 18 110 Z" fill="#FFFFFF" />

                  {/* Right Leg */}
                  <path
                    d="M 46 76 L 50 96 L 54 114 L 62 114"
                    stroke="url(#trousers)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path d="M 54 114 L 64 114 L 62 110 L 55 110 Z" fill="#FFFFFF" />
                </g>

                {/* Torso / BLK Crimson Modern Jacket */}
                <g transform="rotate(2 40 58)">
                  <path
                    d="M 30 40 C 30 35, 50 35, 50 40 L 48 76 C 48 78, 32 78, 32 76 Z"
                    fill="url(#jacket)"
                  />
                  {/* Shirt / Collar */}
                  <path d="M 36 40 L 40 48 L 44 40" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
                  {/* Cyan Brand Accent Dot */}
                  <circle cx="36" cy="50" r="1.6" fill="#38BDF8" />
                </g>

                {/* Head & Glasses */}
                <g>
                  <rect x="37" y="30" width="6" height="8" fill="url(#skin)" rx="1.5" />
                  <circle cx="40" cy="22" r="11" fill="url(#skin)" />

                  {/* Modern Hair */}
                  <path
                    d="M 29 19 C 29 8, 51 8, 51 17 C 48 13, 43 12, 40 13 C 36 13, 32 16, 29 19 Z"
                    fill="#1E293B"
                  />

                  {/* Glasses */}
                  <rect x="34" y="20" width="6.5" height="5" rx="1.5" fill="none" stroke="#0F172A" strokeWidth="1.2" />
                  <rect x="42" y="20" width="6.5" height="5" rx="1.5" fill="none" stroke="#0F172A" strokeWidth="1.2" />
                  <line x1="40.5" y1="22.5" x2="42" y2="22.5" stroke="#0F172A" strokeWidth="1.2" />

                  {/* Eyes */}
                  <circle cx="37" cy="22.5" r="1" fill="#0F172A" />
                  <circle cx="45" cy="22.5" r="1" fill="#0F172A" />

                  {/* Friendly Smile */}
                  <path d="M 37 27 Q 40 30, 43 27" fill="none" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
                </g>

                {/* Arms & Hands (Pulling cord or Waving on complete) */}
                {characterPhase === 'pulling' ? (
                  <g>
                    {/* Left Arm holding cord */}
                    <path
                      d="M 31 42 L 26 58 L 35 74"
                      stroke="url(#jacket)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="35" cy="74" r="3.2" fill="url(#skin)" />

                    {/* Right Arm holding cord lower */}
                    <path
                      d="M 49 42 L 52 58 L 43 78"
                      stroke="url(#jacket)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="43" cy="78" r="3.2" fill="url(#skin)" />
                  </g>
                ) : (
                  <g>
                    {/* Left Arm Resting */}
                    <path
                      d="M 31 42 L 26 62 L 28 78"
                      stroke="url(#jacket)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="28" cy="78" r="3.2" fill="url(#skin)" />

                    {/* Right Arm Waving / Thumbs Up */}
                    <path
                      d="M 49 42 L 60 32 L 64 18"
                      stroke="url(#jacket)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="64" cy="18" r="3.5" fill="url(#skin)" />
                  </g>
                )}
              </svg>
            </motion.div>

            {/* Continuous Golden Pull-Cord dropping from hands down to the descending hem */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          </motion.div>

          {/* ========================================================
              THE LIGHTWEIGHT TRANSLUCENT CURTAIN LAYER (GLIDES DOWNWARD)
              Top moves from 0% -> 100% over 3.6s with cubic-bezier(0.22, 1, 0.36, 1)
              Above the hem bar: Content is 100% crystal clear.
              Below the hem bar: Content is softly veiled by frosted glass silk.
          ======================================================== */}
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{
              duration: 3.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-0 bottom-0 pointer-events-none"
          >
            {/* The Leading Hem Bar (Delicate gold/crimson trim spanning the width) */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FF671F] via-[#F59E0B] to-transparent shadow-[0_2px_14px_rgba(245,158,11,0.45)] z-20 flex items-center justify-center">
              {/* Center Pull Ring Accent */}
              <div className="w-10 h-3 rounded-b-md border border-amber-300/80 bg-amber-500/30 backdrop-blur-sm flex items-center justify-center shadow-md">
                <div className="w-5 h-0.5 bg-amber-200/90 rounded-full" />
              </div>
            </div>

            {/* Soft Translucent Frosted Veil Layer */}
            <div className="w-full h-full relative overflow-hidden backdrop-blur-[7px] bg-gradient-to-b from-white/60 via-slate-100/75 to-slate-200/85 dark:from-slate-900/60 dark:via-slate-950/75 dark:to-slate-950/90 border-t border-white/25">
              {/* Elegant Silk Pleat Sheen */}
              <div
                className="w-full h-full opacity-30"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.06) 35px, transparent 70px, rgba(0,0,0,0.03) 105px, transparent 140px)',
                }}
              />
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
