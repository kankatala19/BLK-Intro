import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

/**
 * CurtainManReveal - Premium, interactive reveal animation featuring an animated
 * modern engineer/architect gently pulling down a lightweight translucent curtain,
 * progressively revealing the Contact Us page in coordinated stages.
 *
 * Easing: cubic-bezier(0.22, 1, 0.36, 1)
 * Target duration: ~3.8s for complete reveal
 */
export const CurtainManReveal = ({ onStageChange, onComplete }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isCompleted, setIsCompleted] = useState(false);
  const [pullProgress, setPullProgress] = useState(0); // 0 (top) -> 1 (bottom)

  useEffect(() => {
    if (shouldReduceMotion) {
      if (onStageChange) onStageChange(5);
      if (onComplete) onComplete();
      setIsCompleted(true);
      return;
    }

    // Coordinated stage reveals synchronized with the 3.8s curtain descent:
    // Stage 1: Heading (at 0.5s)
    const t1 = setTimeout(() => onStageChange && onStageChange(1), 500);
    // Stage 2: Subtitle & Intro (at 1.2s)
    const t2 = setTimeout(() => onStageChange && onStageChange(2), 1200);
    // Stage 3: Contact Info Console (at 2.0s)
    const t3 = setTimeout(() => onStageChange && onStageChange(3), 2000);
    // Stage 4: Contact Form (at 2.7s)
    const t4 = setTimeout(() => onStageChange && onStageChange(4), 2700);
    // Stage 5: FAQ & Socials (at 3.4s)
    const t5 = setTimeout(() => onStageChange && onStageChange(5), 3400);

    // Complete reveal (at 4.0s)
    const tComplete = setTimeout(() => {
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(tComplete);
    };
  }, [onStageChange, onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    setIsCompleted(true);
    if (onStageChange) onStageChange(5);
    if (onComplete) onComplete();
  };

  if (isCompleted) return null;

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none"
        >
          {/* Quick Skip Control */}
          <button
            type="button"
            onClick={handleSkip}
            className="pointer-events-auto absolute top-6 right-6 z-50 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white/90 hover:text-white text-xs font-mono backdrop-blur-md border border-white/20 transition-all shadow-lg cursor-pointer"
            title="Skip Animation"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>

          {/* ========================================================
              THE LIGHTWEIGHT TRANSLUCENT CURTAIN LAYER (PULLED DOWN)
              Below the hem bar: Content is softly veiled by translucent frosted layer.
              Above the hem bar: Content is 100% revealed and clear.
          ======================================================== */}
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{
              duration: 3.6,
              ease: [0.22, 1, 0.36, 1], // Natural, smooth downward pull curve
            }}
            className="absolute inset-x-0 bottom-0 pointer-events-none"
          >
            {/* The Leading Hem Bar (Thin, Elegant Edge with subtle amber/crimson trim) */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#FF671F] via-[#F59E0B] to-transparent shadow-[0_2px_12px_rgba(245,158,11,0.35)] z-20 flex items-center justify-center">
              {/* Subtle Center Brass Pull Ring / Handle */}
              <div className="w-12 h-3.5 rounded-b-md border border-amber-300/80 bg-amber-500/30 backdrop-blur-sm flex items-center justify-center shadow-md">
                <div className="w-6 h-0.5 bg-amber-200/90 rounded-full" />
              </div>
            </div>

            {/* Soft Translucent Veil (Lightweight fabric layer with soft gradient and blur) */}
            <div className="w-full h-full relative overflow-hidden backdrop-blur-[7px] bg-gradient-to-b from-white/70 via-slate-100/80 to-slate-200/90 dark:from-slate-900/65 dark:via-slate-950/80 dark:to-slate-950/95 border-t border-white/20">
              {/* Subtle translucent silk fold textures */}
              <div
                className="w-full h-full opacity-35"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.08) 30px, transparent 60px, rgba(0,0,0,0.04) 90px, transparent 120px)',
                }}
              />
              {/* Gentle ambient light reflection */}
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* ========================================================
                ANIMATED MAN (TECH ARCHITECT) GENTLY PULLING DOWN
                Positioned at the curtain hem, with natural pulling gestures
            ======================================================== */}
            <div className="absolute -top-[108px] sm:-top-[118px] right-[10%] sm:right-[14%] lg:right-[18%] z-30 flex flex-col items-center pointer-events-none">
              
              {/* Pull Cord hanging to the hem */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400 to-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.5)]" />

              {/* Character Motion Wrapper with Subtle Natural Pulling Gestures */}
              <motion.div
                animate={{
                  y: [0, 3, 0, 3, 0, 2, 0],
                  rotate: [-1, 1.5, -1, 1.5, -0.5, 0],
                }}
                transition={{
                  duration: 3.6,
                  ease: 'easeInOut',
                  repeat: 0,
                }}
                className="relative w-16 sm:w-20 h-24 sm:h-28 drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
              >
                {/* Subtle effort/pulling sparkle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0], y: [-2, -6, -2] }}
                  transition={{ duration: 1.8, repeat: 1, delay: 0.6 }}
                  className="absolute -top-2 -right-1 text-amber-400 text-xs"
                >
                  ✨
                </motion.div>

                {/* Modern Vector Man Character (BLK Software Solutions Architect) */}
                <svg viewBox="0 0 80 120" className="w-full h-full">
                  <defs>
                    <linearGradient id="manSkin" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FCD34D" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>

                    <linearGradient id="manJacket" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>

                    <linearGradient id="manPants" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                  </defs>

                  {/* Soft Ground Shadow */}
                  <ellipse cx="40" cy="116" rx="16" ry="3" fill="#000000" fillOpacity="0.25" />

                  {/* --- LEGS IN NATURAL STEPPING/BRACING STANCE --- */}
                  <g>
                    {/* Back Leg */}
                    <path
                      d="M 35 78 L 30 96 L 26 114 L 20 114"
                      stroke="url(#manPants)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path d="M 18 114 L 28 114 L 27 110 L 20 110 Z" fill="#FFFFFF" />

                    {/* Front Leg */}
                    <path
                      d="M 45 78 L 50 97 L 54 114 L 62 114"
                      stroke="url(#manPants)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path d="M 54 114 L 64 114 L 62 110 L 55 110 Z" fill="#FFFFFF" />
                  </g>

                  {/* --- TORSO / MODERN SMART JACKET (Leaning slightly into the pull) --- */}
                  <g transform="rotate(3 40 60)">
                    <path
                      d="M 31 42 C 31 37, 49 37, 49 42 L 47 79 C 47 81, 33 81, 33 79 Z"
                      fill="url(#manJacket)"
                    />
                    {/* Inner collar & shirt */}
                    <path d="M 36 42 L 40 50 L 44 42" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
                    {/* BLK Signature Dot */}
                    <circle cx="36" cy="52" r="1.5" fill="#38BDF8" />
                  </g>

                  {/* --- HEAD & FACE --- */}
                  <g>
                    {/* Neck */}
                    <rect x="37" y="32" width="6" height="8" fill="url(#manSkin)" rx="1.5" />
                    {/* Face */}
                    <circle cx="40" cy="24" r="11" fill="url(#manSkin)" />

                    {/* Clean Modern Hair */}
                    <path
                      d="M 29 21 C 29 10, 51 10, 51 19 C 48 15, 43 14, 40 15 C 36 15, 32 18, 29 21 Z"
                      fill="#1E293B"
                    />

                    {/* Smart Minimalist Glasses */}
                    <rect x="34" y="22" width="6.5" height="5" rx="1.5" fill="none" stroke="#0F172A" strokeWidth="1.2" />
                    <rect x="42" y="22" width="6.5" height="5" rx="1.5" fill="none" stroke="#0F172A" strokeWidth="1.2" />
                    <line x1="40.5" y1="24.5" x2="42" y2="24.5" stroke="#0F172A" strokeWidth="1.2" />

                    {/* Friendly Eyes */}
                    <circle cx="37" cy="24.5" r="1" fill="#0F172A" />
                    <circle cx="45" cy="24.5" r="1" fill="#0F172A" />

                    {/* Calm, Gentle Smile */}
                    <path d="M 37 30 Q 40 33, 43 30" fill="none" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
                  </g>

                  {/* --- ARMS EXTENDING DOWN TO PULL CORD / HEM --- */}
                  <g>
                    {/* Left Arm grasping pull cord */}
                    <path
                      d="M 32 44 L 28 62 L 36 76"
                      stroke="url(#manJacket)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="36" cy="76" r="3.2" fill="url(#manSkin)" />

                    {/* Right Arm grasping pull cord */}
                    <path
                      d="M 48 44 L 52 62 L 44 76"
                      stroke="url(#manJacket)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="44" cy="76" r="3.2" fill="url(#manSkin)" />
                  </g>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
