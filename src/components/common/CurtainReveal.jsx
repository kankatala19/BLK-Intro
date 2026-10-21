import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

/**
 * CurtainReveal - An animated human character that physically grabs the edge of
 * a theatrical curtain and drags it open across the screen to reveal the Contact Us page.
 */
export const CurtainReveal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Start dragging the curtain shortly after mounting
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 250);

    // Complete transition and remove overlay from DOM
    const endTimer = setTimeout(() => {
      setIsCompleted(true);
    }, 2600);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, []);

  if (isCompleted) return null;

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 pointer-events-auto overflow-hidden select-none"
        >
          {/* Skip Button in Top Right so user can bypass instantly if in a hurry */}
          <button
            type="button"
            onClick={() => setIsCompleted(true)}
            className="absolute top-6 right-6 z-50 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white text-xs font-mono backdrop-blur-md border border-white/20 transition-all shadow-xl cursor-pointer"
            title="Skip Curtain Animation"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>

          {/* ========================================================
              THE CURTAIN DRAPE (PULLED FROM LEFT TO RIGHT)
          ======================================================== */}
          <motion.div
            initial={{ left: '0%' }}
            animate={isOpen ? { left: '100%' } : { left: '0%' }}
            transition={{
              duration: 2.1,
              ease: [0.25, 0.9, 0.35, 1],
            }}
            className="absolute top-0 bottom-0 right-0 z-30 shadow-[-25px_0_50px_rgba(0,0,0,0.85)] flex"
          >
            {/* The Leading Fabric Hem / Fold */}
            <div className="w-10 sm:w-16 h-full relative z-20 shrink-0 bg-gradient-to-r from-[#5B0B0B] via-[#8B1212] to-[#B91C1C] border-r border-[#DC2626]/40 shadow-2xl">
              {/* Vertical Fold Highlights */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
              {/* Gold Curtain Trim Cord along edge */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#F59E0B] via-[#FDE047] to-[#D97706] shadow-[0_0_10px_#F59E0B]" />
            </div>

            {/* Main Curtain Body with Realistic Velvet / Fabric Pleats */}
            <div className="flex-1 h-full bg-[#0B0F19] relative overflow-hidden">
              {/* Multi-layered Velvet Pleats Pattern */}
              <div
                className="w-full h-full opacity-95"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, #090D16 0px, #182030 35px, #0F1624 70px, #1F2A3E 105px, #0B0F19 140px)',
                }}
              />

              {/* Ambient Luxury Lighting across the curtain */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson-600/15 rounded-full blur-[140px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

              {/* Subtle Welcome Text on Curtain before being pulled */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-crimson-400" />
                  <span>BLK SOFTWARE SOLUTIONS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Opening Contact Portal...
                </h2>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================================
              ANIMATED HUMAN CHARACTER (GRABBING & DRAGGING THE CURTAIN)
          ======================================================== */}
          <motion.div
            initial={{ left: '0%' }}
            animate={isOpen ? { left: '100%' } : { left: '0%' }}
            transition={{
              duration: 2.1,
              ease: [0.25, 0.9, 0.35, 1],
            }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-[92%] z-40 flex items-center pointer-events-none"
          >
            {/* Sturdy Pulling Rope / Gold Cord connecting Hands to Curtain Hem */}
            <div className="relative w-8 sm:w-14 h-4 flex items-center justify-center">
              <div className="w-full h-1 bg-gradient-to-r from-[#F59E0B] to-[#FDE047] shadow-[0_0_8px_#F59E0B] rounded-full" />
              {/* Tassel on rope */}
              <div className="absolute right-1 w-2.5 h-4 bg-[#D97706] rounded-sm shadow-md" />
            </div>

            {/* Stylized Human Engineer Character */}
            <motion.div
              animate={
                isOpen
                  ? {
                      y: [0, -4, 0, -4, 0, -4, 0, -2, 0],
                      rotate: [-6, -10, -6, -10, -6, -2, 4],
                    }
                  : { y: 0, rotate: -6 }
              }
              transition={{
                duration: 2.1,
                repeat: 0,
                ease: 'easeInOut',
              }}
              className="relative w-24 sm:w-32 h-36 sm:h-44 flex flex-col items-center justify-center"
            >
              {/* Effort / Sweat Drop during pull */}
              <motion.div
                initial={{ opacity: 1, scale: 0.8 }}
                animate={
                  isOpen
                    ? { opacity: [1, 1, 1, 0], scale: [0.8, 1.2, 1, 0.4], y: [-2, -8, -14, -18] }
                    : { opacity: 0 }
                }
                transition={{ duration: 1.5 }}
                className="absolute -top-1 right-5 text-sky-400 font-bold text-xs"
              >
                💦
              </motion.div>

              {/* Sparkles / High Five at the finish */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isOpen ? { opacity: [0, 0, 0, 1], scale: [0, 0, 0, 1.2] } : { opacity: 0 }}
                transition={{ duration: 2.1 }}
                className="absolute -top-3 left-4 text-amber-400 font-bold text-sm"
              >
                ✨
              </motion.div>

              {/* SVG Human Figure Drawing */}
              <svg
                viewBox="0 0 120 160"
                className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
              >
                <defs>
                  {/* Skin Tone Gradient */}
                  <linearGradient id="skinTone" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>

                  {/* Hoodie / Tech Jacket Gradient (BLK Crimson) */}
                  <linearGradient id="jacketGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#991B1B" />
                  </linearGradient>

                  {/* Jeans / Pants Gradient */}
                  <linearGradient id="pantsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                </defs>

                {/* Ground Shadow underneath Character */}
                <ellipse cx="60" cy="154" rx="34" ry="5.5" fill="#000000" fillOpacity="0.45" />

                {/* --- BACK LEG (Pulling back stance) --- */}
                <g className="origin-top">
                  <path
                    d="M 45 105 L 32 135 L 20 148 L 12 148"
                    stroke="url(#pantsGradient)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Back Shoe (Sneaker with white sole) */}
                  <path
                    d="M 12 148 L 26 148 L 24 142 L 14 142 Z"
                    fill="#FFFFFF"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                  />
                </g>

                {/* --- TORSO / HOODIE (Leaning backward in pulling posture) --- */}
                <g transform="rotate(-12 60 85)">
                  {/* Body Jacket */}
                  <path
                    d="M 42 62 C 42 54, 78 54, 78 62 L 72 108 C 72 110, 48 110, 48 108 Z"
                    fill="url(#jacketGradient)"
                  />
                  {/* Jacket zipper */}
                  <line x1="60" y1="60" x2="60" y2="108" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" />
                  {/* BLK Tech Brand Dot on Chest */}
                  <circle cx="53" cy="74" r="2.5" fill="#38BDF8" />
                </g>

                {/* --- FRONT LEG (Bracing leg) --- */}
                <g className="origin-top">
                  <path
                    d="M 64 105 L 72 130 L 84 150 L 98 150"
                    stroke="url(#pantsGradient)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Front Shoe (Sneaker) */}
                  <path
                    d="M 84 150 L 102 150 L 98 143 L 84 143 Z"
                    fill="#FFFFFF"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                  />
                </g>

                {/* --- HEAD & HAIR --- */}
                <g transform="rotate(-10 60 40)">
                  {/* Neck */}
                  <rect x="55" y="46" width="10" height="12" fill="url(#skinTone)" rx="3" />

                  {/* Face */}
                  <circle cx="60" cy="36" r="17" fill="url(#skinTone)" />

                  {/* Stylish Tech Hair */}
                  <path
                    d="M 42 32 C 42 16, 78 16, 78 30 C 76 22, 68 20, 60 21 C 52 21, 46 25, 42 32 Z"
                    fill="#18181B"
                  />
                  <path d="M 42 32 L 46 36 L 43 40" fill="#18181B" />

                  {/* Glasses (Tech Designer / Engineer look) */}
                  <rect x="52" y="32" width="11" height="8" rx="2.5" fill="none" stroke="#0F172A" strokeWidth="1.8" />
                  <rect x="65" y="32" width="11" height="8" rx="2.5" fill="none" stroke="#0F172A" strokeWidth="1.8" />
                  <line x1="63" y1="35" x2="65" y2="35" stroke="#0F172A" strokeWidth="1.8" />

                  {/* Determined Eyes behind glasses */}
                  <circle cx="57.5" cy="36" r="1.8" fill="#0F172A" />
                  <circle cx="70.5" cy="36" r="1.8" fill="#0F172A" />

                  {/* Determined Smiling Mouth */}
                  <path d="M 58 44 Q 63 47, 68 44" fill="none" stroke="#78350F" strokeWidth="1.8" strokeLinecap="round" />
                </g>

                {/* --- BACK ARM (Pulling the rope) --- */}
                <path
                  d="M 52 68 L 74 76 L 96 79"
                  stroke="url(#jacketGradient)"
                  strokeWidth="8.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Back Hand Clenched on Rope */}
                <circle cx="97" cy="79" r="5" fill="url(#skinTone)" />

                {/* --- FRONT ARM (Dominant Pulling Arm stretched to the right) --- */}
                <path
                  d="M 66 68 L 88 74 L 108 76"
                  stroke="url(#jacketGradient)"
                  strokeWidth="8.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Front Hand Clenched on Rope */}
                <circle cx="109" cy="76" r="5.5" fill="url(#skinTone)" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
