import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * ScrollSideEffects - Dynamic ambient coloring effect on both the left and right flanks
 * of the application that smoothly flows, glows, and tracks the user as they scroll up and down.
 * Incorporates BLK's signature brand colors and vibrant Indian tricolor palette.
 */
export const ScrollSideEffects = () => {
  const { scrollYProgress } = useScroll();

  // Silk-smooth physics-based scroll spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate runner positions for the glowing light pulses along the sides
  const runnerTop = useTransform(smoothProgress, [0, 1], ['4vh', 'calc(96vh - 80px)']);

  // Dynamic gradient offset to make the light stream shift as you scroll
  const gradientOffsetLeft = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);
  const gradientOffsetRight = useTransform(smoothProgress, [0, 1], ['-50%', '0%']);

  // Dynamic glow pulse intensity based on scroll progress
  const glowOpacity = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0.45, 0.7, 0.55, 0.75, 0.5]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
    >
      {/* ========================================================
          LEFT FLANK EFFECTS
      ======================================================== */}
      {/* 1. Left Ambient Diffuse Glow Aura */}
      <motion.div
        style={{
          opacity: glowOpacity,
          y: gradientOffsetLeft,
        }}
        className="absolute left-0 top-[-25%] bottom-[-25%] w-8 sm:w-14 lg:w-20 blur-2xl lg:blur-3xl"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#FF671F] via-[#DC2626] via-[#2563EB] via-[#10B981] to-[#8B5CF6] opacity-60" />
      </motion.div>

      {/* 2. Left Sleek Core Light Beam Line */}
      <motion.div
        style={{
          y: gradientOffsetLeft,
        }}
        className="absolute left-0 top-[-50%] bottom-[-50%] w-[2px] sm:w-[2.5px] opacity-75"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#FF8C38] via-[#EF4444] via-[#38BDF8] via-[#10B981] via-[#F59E0B] to-[#FF671F]" />
      </motion.div>

      {/* 3. Left Traveling Light Orb (Tracks Scroll Position) */}
      <motion.div
        style={{
          top: runnerTop,
        }}
        className="absolute left-0 w-3 h-20 -translate-x-1/2 flex items-center justify-center"
      >
        {/* Core hot spot */}
        <div className="w-2 h-14 rounded-full bg-white shadow-[0_0_15px_#FF671F,0_0_30px_#EF4444,0_0_45px_#2563EB]" />
        {/* Intense localized ambient bloom */}
        <div className="absolute w-12 h-24 rounded-full bg-gradient-to-r from-[#FF671F] to-[#2563EB] blur-md opacity-80" />
      </motion.div>


      {/* ========================================================
          RIGHT FLANK EFFECTS
      ======================================================== */}
      {/* 1. Right Ambient Diffuse Glow Aura */}
      <motion.div
        style={{
          opacity: glowOpacity,
          y: gradientOffsetRight,
        }}
        className="absolute right-0 top-[-25%] bottom-[-25%] w-8 sm:w-14 lg:w-20 blur-2xl lg:blur-3xl"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#10B981] via-[#2563EB] via-[#DC2626] via-[#FF671F] to-[#0EA5E9] opacity-60" />
      </motion.div>

      {/* 2. Right Sleek Core Light Beam Line */}
      <motion.div
        style={{
          y: gradientOffsetRight,
        }}
        className="absolute right-0 top-[-50%] bottom-[-50%] w-[2px] sm:w-[2.5px] opacity-75"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#10B981] via-[#38BDF8] via-[#EF4444] via-[#FF8C38] via-[#8B5CF6] to-[#10B981]" />
      </motion.div>

      {/* 3. Right Traveling Light Orb (Tracks Scroll Position) */}
      <motion.div
        style={{
          top: runnerTop,
        }}
        className="absolute right-0 w-3 h-20 translate-x-1/2 flex items-center justify-center"
      >
        {/* Core hot spot */}
        <div className="w-2 h-14 rounded-full bg-white shadow-[0_0_15px_#10B981,0_0_30px_#38BDF8,0_0_45px_#FF671F]" />
        {/* Intense localized ambient bloom */}
        <div className="absolute w-12 h-24 rounded-full bg-gradient-to-l from-[#10B981] to-[#FF671F] blur-md opacity-80" />
      </motion.div>
    </div>
  );
};
