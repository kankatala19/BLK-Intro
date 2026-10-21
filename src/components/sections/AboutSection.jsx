import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  GitBranch,
  ShieldCheck,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { CharminarSvg } from '../ui/CharminarSvg';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const pillarThemes = [
  {
    icon: Users,
    color: '#FF671F', // Saffron / Kesari
    name: 'Long-term Partnership',
    iconBg: 'bg-[#FF671F]/15 border-[#FF671F]/40 text-[#FF853E] group-hover:bg-[#FF671F] group-hover:text-white group-hover:border-[#FF671F] group-hover:shadow-[0_0_20px_rgba(255,103,31,0.6)]',
    topStripe: 'bg-[#FF671F]',
    hoverBorder: 'group-hover:border-[#FF671F]/60',
    aura: 'from-[#FF671F]/30 to-amber-500/25',
    titleHover: 'group-hover:text-[#FFA066]',
  },
  {
    icon: GitBranch,
    color: '#38BDF8', // Cyan / Electric Blue (Ashoka Blue Accent)
    name: 'Agile Precision',
    iconBg: 'bg-sky-500/15 border-sky-400/40 text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]',
    topStripe: 'bg-sky-400',
    hoverBorder: 'group-hover:border-sky-400/60',
    aura: 'from-sky-500/30 to-blue-600/25',
    titleHover: 'group-hover:text-sky-300',
  },
  {
    icon: ShieldCheck,
    color: '#10B981', // India Green / Emerald
    name: 'Zero-Debt Craftsmanship',
    iconBg: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]',
    topStripe: 'bg-emerald-500',
    hoverBorder: 'group-hover:border-emerald-500/60',
    aura: 'from-emerald-500/30 to-teal-600/25',
    titleHover: 'group-hover:text-emerald-300',
  },
  {
    icon: Layers,
    color: '#F59E0B', // Amber / Gold
    name: 'End-to-End Capabilities',
    iconBg: 'bg-amber-500/15 border-amber-400/40 text-amber-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]',
    topStripe: 'bg-amber-500',
    hoverBorder: 'group-hover:border-amber-500/60',
    aura: 'from-amber-500/30 to-rose-500/25',
    titleHover: 'group-hover:text-amber-300',
  },
];

export const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-[#021838] via-[#05295B] to-[#01142D] text-white relative transition-colors overflow-hidden w-full border-t border-white/10"
    >
      {/* 1. Indian Tricolor Top Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF671F] via-white to-[#10B981] z-20 shadow-[0_0_12px_rgba(255,103,31,0.5)]" />

      {/* 2. Indian Flag Tricolor Ambient Glow Effects */}
      {/* Saffron Aura (Top Left) */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[450px] bg-[#FF671F]/15 rounded-full blur-[140px] pointer-events-none" />
      {/* White / Ashoka Blue Sheen (Center) */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-blue-400/10 rounded-full blur-[160px] pointer-events-none" />
      {/* India Green Aura (Bottom Right) */}
      <div className="absolute -bottom-20 -right-20 w-[550px] h-[450px] bg-[#10B981]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 bg-tech-dots opacity-15 pointer-events-none" />

      {/* 4. Charminar Heritage Architectural Sketch Watermark (Like Zoho's monument in reference) */}
      <div className="absolute right-[-40px] sm:right-0 lg:right-6 bottom-0 w-[380px] sm:w-[500px] md:w-[580px] lg:w-[680px] text-white/18 pointer-events-none select-none z-0 mix-blend-screen transition-opacity">
        <CharminarSvg className="w-full h-auto drop-shadow-[0_0_30px_rgba(56,189,248,0.15)]" />
      </div>

      <Container className="relative z-10 w-full">
        {/* Top Header Block: Charminar Headline + Decreased Content */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl space-y-6"
        >
          {/* Header Brand Pill with Indian Flag Tricolor Dots */}
          <motion.div variants={fadeIn('down', 0.1)}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-mono shadow-lg">
              {/* Indian Tricolor Dots */}
              <div className="flex items-center gap-1.5" title="Made in India">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF671F] shadow-[0_0_8px_#FF671F]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
              </div>
              <span className="uppercase tracking-wider font-semibold text-[11px] text-slate-100">
                MADE IN INDIA • HYDERABAD HERITAGE
              </span>
            </div>
          </motion.div>

          {/* Charminar Headline with Indian Flag Color Gradient */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            From the City of Charminar.{' '}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#FF8C38] via-white to-[#10B981] bg-clip-text text-transparent drop-shadow-sm">
              Engineered for the World.
            </span>
          </motion.h2>

          {/* Decreased Matter (Clean, High-Impact Single Paragraph) */}
          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl"
          >
            Rooted in Hyderabad’s rich engineering heritage, BLK Software Solutions designs, builds,
            and scales resilient software architectures and intelligent AI systems for ambitious enterprises worldwide.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeIn('up', 0.4)} className="pt-2 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF671F] to-[#E05307] hover:from-[#FF7A38] hover:to-[#EB6118] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(255,103,31,0.45)] hover:shadow-[0_0_35px_rgba(255,103,31,0.65)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all border border-white/20 hover:border-white/40 backdrop-blur-sm cursor-pointer"
            >
              <span>Learn More About Us</span>
            </button>
          </motion.div>
        </motion.div>

        {/* 4 Core Pillars Laid Out SIDE BY SIDE (Preserving All Card Matter Exact) */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full pt-14 md:pt-18"
        >
          {siteConfig.about.pillars.map((pillar, idx) => {
            const theme = pillarThemes[idx] || pillarThemes[0];
            const IconComp = theme.icon;

            return (
              <motion.div
                key={pillar.title}
                variants={fadeIn('up', idx * 0.08)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group relative cursor-pointer"
              >
                {/* Glowing Back Aura on Hover */}
                <div
                  className={`absolute -inset-1.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none -z-10 bg-gradient-to-tr ${theme.aura} scale-95 group-hover:scale-105`}
                  aria-hidden="true"
                />

                {/* Glassmorphic Luxury Card Surface */}
                <div
                  className={`h-full bg-slate-900/60 lg:bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xl group-hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)] ${theme.hoverBorder} transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
                >
                  {/* Top Accent Stripe */}
                  <div
                    className={`absolute top-0 left-0 h-[3px] w-0 ${theme.topStripe} group-hover:w-full transition-all duration-400 ease-out`}
                  />

                  <div className="space-y-4">
                    {/* Icon Container & Pillar Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-inner ${theme.iconBg}`}
                      >
                        <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-slate-200 font-semibold backdrop-blur-sm">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    {/* Card Matter - Preserved 100% Exact */}
                    <div className="space-y-2 pt-1">
                      <h3
                        className={`text-base sm:text-lg font-bold text-white transition-colors leading-snug ${theme.titleHover}`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Subtle Bottom Indicator */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-slate-300">Foundation</span>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: theme.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
