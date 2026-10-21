import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GitBranch,
  ShieldCheck,
  Cpu,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

// 4-step framework mapped to BLK's 4 Brand Colors: Blue, Yellow, Green, Red
const stepThemes = [
  {
    number: '01',
    color: '#2563EB', // Blue
    numberColor: 'text-blue-400 group-hover:text-blue-300',
    dotBg: 'bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]',
    topStripe: 'bg-blue-500',
    aura: 'from-blue-600/30 to-indigo-600/30',
    hoverBorder: 'group-hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    tagText: 'text-blue-300',
  },
  {
    number: '02',
    color: '#F59E0B', // Yellow / Amber
    numberColor: 'text-amber-400 group-hover:text-amber-300',
    dotBg: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]',
    topStripe: 'bg-amber-500',
    aura: 'from-amber-600/30 to-yellow-600/30',
    hoverBorder: 'group-hover:border-amber-500/50',
    iconColor: 'text-amber-400',
    tagText: 'text-amber-300',
  },
  {
    number: '03',
    color: '#10B981', // Emerald Green
    numberColor: 'text-emerald-400 group-hover:text-emerald-300',
    dotBg: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]',
    topStripe: 'bg-emerald-500',
    aura: 'from-emerald-600/30 to-teal-600/30',
    hoverBorder: 'group-hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    tagText: 'text-emerald-300',
  },
  {
    number: '04',
    color: '#DC2626', // Crimson Red
    numberColor: 'text-rose-400 group-hover:text-rose-300',
    dotBg: 'bg-rose-500 shadow-[0_0_10px_rgba(220,38,38,0.8)]',
    topStripe: 'bg-rose-500',
    aura: 'from-rose-600/30 to-red-600/30',
    hoverBorder: 'group-hover:border-rose-500/50',
    iconColor: 'text-rose-400',
    tagText: 'text-rose-300',
  },
];

export const ApproachCultureSection = ({ showCultureBanner = true }) => {
  const navigate = useNavigate();

  return (
    <section
      id="culture"
      className="py-24 md:py-32 bg-gradient-to-b from-[#07090F] via-[#0D1222] to-[#080B14] text-white border-t border-white/10 relative transition-colors overflow-hidden w-full"
    >
      {/* Ambient Glows & Tech Dots */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-crimson-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <Container className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <motion.div variants={fadeIn('down', 0.1)} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                {siteConfig.approachAndCulture.badge}
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineering Discipline & <span className="text-gradient-crimson">Work Culture</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {siteConfig.approachAndCulture.subtitle}
          </motion.p>
        </motion.div>

        {/* 4-Step Agile Delivery Framework with BLK 4-Color Accents */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
            showCultureBanner ? 'mb-16' : ''
          }`}
        >
          {siteConfig.approachAndCulture.steps.map((step, index) => {
            const theme = stepThemes[index] || stepThemes[0];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer"
                onClick={() => navigate('/services')}
              >
                {/* Glowing Back Aura on Hover */}
                <div
                  className={`absolute -inset-1.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none -z-10 bg-gradient-to-tr ${theme.aura} scale-95 group-hover:scale-105`}
                  aria-hidden="true"
                />

                {/* Card Surface */}
                <div
                  className={`h-full bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden flex flex-col justify-between shadow-xl group-hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)] ${theme.hoverBorder} transition-all duration-300`}
                >
                  {/* Top Colored Highlight Line */}
                  <div
                    className={`absolute top-0 left-0 h-[3px] w-0 ${theme.topStripe} group-hover:w-full transition-all duration-400 ease-out`}
                  />

                  <div className="space-y-4">
                    {/* Step Number & Pulse Indicator */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-3xl font-mono font-extrabold tracking-tight transition-colors ${theme.numberColor}`}
                      >
                        {step.number}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full ${theme.dotBg}`} />
                    </div>

                    {/* Step Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Gate Footer */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                      <span>Milestone Verified</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Work Culture Callout Banner (when enabled) */}
        {showCultureBanner && (
          <div className="rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-slate-900/90 backdrop-blur-md shadow-2xl w-full">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-crimson-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-crimson-400">
                  <span>CULTURE & COLLABORATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  How We Collaborate With Your Team
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                  We operate as an extension of your product organization. You get direct access to our
                  senior engineers, transparent code repositories, automated staging previews, and
                  weekly video syncs. No convoluted middle layers.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2"
                >
                  <span>Hire Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all border border-white/15 flex items-center justify-center"
                >
                  <span>Schedule Introduction</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
