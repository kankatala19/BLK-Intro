import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  GitBranch,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const pillarThemes = [
  {
    icon: ShieldCheck,
    color: '#2563EB', // Blue
    name: 'Software Excellence',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]',
    topStripe: 'bg-blue-500',
    hoverBorder: 'group-hover:border-blue-500/60',
    aura: 'from-blue-600/30 to-indigo-600/30',
    titleHover: 'group-hover:text-blue-400',
  },
  {
    icon: GitBranch,
    color: '#F59E0B', // Amber / Yellow
    name: 'Agile Precision',
    iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]',
    topStripe: 'bg-amber-500',
    hoverBorder: 'group-hover:border-amber-500/60',
    aura: 'from-amber-600/30 to-yellow-600/30',
    titleHover: 'group-hover:text-amber-400',
  },
  {
    icon: Users,
    color: '#10B981', // Emerald Green
    name: 'Direct Founder Access',
    iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]',
    topStripe: 'bg-emerald-500',
    hoverBorder: 'group-hover:border-emerald-500/60',
    aura: 'from-emerald-600/30 to-teal-600/30',
    titleHover: 'group-hover:text-emerald-400',
  },
  {
    icon: Layers,
    color: '#DC2626', // Crimson Red
    name: 'Long-term Partnership',
    iconBg: 'bg-rose-500/10 border-rose-500/30 text-rose-400 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]',
    topStripe: 'bg-rose-500',
    hoverBorder: 'group-hover:border-rose-500/60',
    aura: 'from-rose-600/30 to-red-600/30',
    titleHover: 'group-hover:text-rose-400',
  },
];

export const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-[#080B12] via-[#0E1424] to-[#0A0D16] text-white relative transition-colors overflow-hidden w-full border-t border-white/10"
    >
      {/* Ambient Lighting & High-Tech Dots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-crimson-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Client Approach & Culture Overview */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="w-full lg:col-span-5 space-y-6"
          >
            {/* Header Brand Pill */}
            <motion.div variants={fadeIn('down', 0.1)}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-crimson-400">
                <span className="w-2 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                <span className="uppercase tracking-wider font-semibold text-[11px] text-white">
                  {siteConfig.about.badge}
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn('up', 0.2)}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Engineering Discipline <br />
              <span className="text-gradient-crimson">Backed by Agile Methodologies</span>
            </motion.h2>

            <motion.div
              variants={fadeIn('up', 0.3)}
              className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              <p>{siteConfig.about.clientApproach}</p>
              <p className="text-slate-400">{siteConfig.about.workCulture}</p>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.4)} className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:-translate-y-0.5"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all border border-white/15 hover:border-white/30 backdrop-blur-sm"
              >
                <span>Learn More About Us</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: 4 Core Pillars Grid (Dark Luxury Theme with 4-Color Accents) */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="w-full lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
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

                  {/* Glassmorphic Dark Card Surface */}
                  <div
                    className={`h-full bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl group-hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.5)] ${theme.hoverBorder} transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Top Accent Stripe */}
                    <div
                      className={`absolute top-0 left-0 h-[3px] w-0 ${theme.topStripe} group-hover:w-full transition-all duration-400 ease-out`}
                    />

                    {/* Icon Container */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-inner ${theme.iconBg}`}
                      >
                        <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 font-semibold">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3
                        className={`text-base sm:text-lg font-bold text-white transition-colors ${theme.titleHover}`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
