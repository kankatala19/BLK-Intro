import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Coins,
  Activity,
  ShoppingBag,
  Rocket,
  Truck,
  GraduationCap,
  Server,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const industryThemes = {
  fintech: {
    icon: Coins,
    color: '#10B981', // Emerald
    iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.35)]',
    topStripe: 'bg-emerald-500',
    hoverBorder: 'group-hover:border-emerald-500/50',
    tagBg: 'bg-emerald-50/90 text-emerald-800 border-emerald-200/80',
    tagDot: 'bg-emerald-500',
    aura: 'from-emerald-500/30 to-teal-500/30',
    titleHover: 'group-hover:text-emerald-700',
    ctaText: 'text-emerald-700 hover:text-emerald-800',
  },
  healthtech: {
    icon: Activity,
    color: '#0EA5E9', // Sky / Cyan
    iconBg: 'bg-sky-50 border-sky-200 text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 group-hover:shadow-[0_8px_20px_rgba(14,165,233,0.35)]',
    topStripe: 'bg-sky-500',
    hoverBorder: 'group-hover:border-sky-500/50',
    tagBg: 'bg-sky-50/90 text-sky-800 border-sky-200/80',
    tagDot: 'bg-sky-500',
    aura: 'from-sky-500/30 to-blue-500/30',
    titleHover: 'group-hover:text-sky-700',
    ctaText: 'text-sky-700 hover:text-sky-800',
  },
  ecommerce: {
    icon: ShoppingBag,
    color: '#F59E0B', // Amber
    iconBg: 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:shadow-[0_8px_20px_rgba(245,158,11,0.35)]',
    topStripe: 'bg-amber-500',
    hoverBorder: 'group-hover:border-amber-500/50',
    tagBg: 'bg-amber-50/90 text-amber-800 border-amber-200/80',
    tagDot: 'bg-amber-500',
    aura: 'from-amber-500/30 to-orange-500/30',
    titleHover: 'group-hover:text-amber-700',
    ctaText: 'text-amber-700 hover:text-amber-800',
  },
  saas: {
    icon: Rocket,
    color: '#8B5CF6', // Purple
    iconBg: 'bg-purple-50 border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 group-hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)]',
    topStripe: 'bg-purple-500',
    hoverBorder: 'group-hover:border-purple-500/50',
    tagBg: 'bg-purple-50/90 text-purple-800 border-purple-200/80',
    tagDot: 'bg-purple-500',
    aura: 'from-purple-500/30 to-indigo-500/30',
    titleHover: 'group-hover:text-purple-700',
    ctaText: 'text-purple-700 hover:text-purple-800',
  },
  enterprise: {
    icon: Server,
    color: '#3B82F6', // Blue
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_8px_20px_rgba(59,130,246,0.35)]',
    topStripe: 'bg-blue-500',
    hoverBorder: 'group-hover:border-blue-500/50',
    tagBg: 'bg-blue-50/90 text-blue-800 border-blue-200/80',
    tagDot: 'bg-blue-500',
    aura: 'from-blue-500/30 to-cyan-500/30',
    titleHover: 'group-hover:text-blue-700',
    ctaText: 'text-blue-700 hover:text-blue-800',
  },
  logistics: {
    icon: Truck,
    color: '#2563EB', // Blue
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)]',
    topStripe: 'bg-blue-600',
    hoverBorder: 'group-hover:border-blue-500/50',
    tagBg: 'bg-blue-50/90 text-blue-800 border-blue-200/80',
    tagDot: 'bg-blue-600',
    aura: 'from-blue-500/30 to-cyan-500/30',
    titleHover: 'group-hover:text-blue-700',
    ctaText: 'text-blue-700 hover:text-blue-800',
  },
  education: {
    icon: GraduationCap,
    color: '#DC2626', // Crimson / Rose
    iconBg: 'bg-rose-50 border-rose-200 text-rose-600 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 group-hover:shadow-[0_8px_20px_rgba(220,38,38,0.35)]',
    topStripe: 'bg-rose-600',
    hoverBorder: 'group-hover:border-rose-500/50',
    tagBg: 'bg-rose-50/90 text-rose-800 border-rose-200/80',
    tagDot: 'bg-rose-600',
    aura: 'from-rose-500/30 to-red-500/30',
    titleHover: 'group-hover:text-rose-700',
    ctaText: 'text-rose-700 hover:text-rose-800',
  },
  'real-estate': {
    icon: Briefcase,
    color: '#7C3AED', // Violet
    iconBg: 'bg-violet-50 border-violet-200 text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 group-hover:shadow-[0_8px_20px_rgba(124,58,237,0.35)]',
    topStripe: 'bg-violet-600',
    hoverBorder: 'group-hover:border-violet-500/50',
    tagBg: 'bg-violet-50/90 text-violet-800 border-violet-200/80',
    tagDot: 'bg-violet-600',
    aura: 'from-violet-500/30 to-purple-500/30',
    titleHover: 'group-hover:text-violet-700',
    ctaText: 'text-violet-700 hover:text-violet-800',
  },
};

export const IndustriesSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="industries"
      className="py-24 md:py-32 bg-gradient-to-b from-[#E6EDF6] via-[#EDF3F9] to-[#E3EAF4] border-t border-slate-200/90 relative transition-colors overflow-hidden w-full"
    >
      {/* Decorative Grid Texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-200/25 blur-3xl pointer-events-none rounded-full" />

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-mono text-slate-800">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                Sectors We Support
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Tailored Solutions Across <span className="text-gradient-crimson">Dynamic Industries</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We customize our engineering, design, and AI capabilities to match the distinct operational
            requirements and compliance environments of each sector.
          </motion.p>
        </motion.div>

        {/* 6-Card Industries Grid with Unique Themes and Hover Popups */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          {siteConfig.industries.map((ind, index) => {
            const theme = industryThemes[ind.id] || industryThemes.fintech;
            const IconComp = theme.icon;

            return (
              <motion.div
                key={ind.id}
                variants={fadeIn('up', index * 0.06)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group relative cursor-pointer"
                onClick={() => navigate(`/industries/${ind.id}`)}
              >
                {/* Glowing Back Aura on Hover */}
                <div
                  className={`absolute -inset-1.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none -z-10 bg-gradient-to-tr ${theme.aura} scale-95 group-hover:scale-105`}
                  aria-hidden="true"
                />

                {/* Card Surface */}
                <div
                  className={`h-full bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] group-hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)] ${theme.hoverBorder} transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Top Colored Highlight Line */}
                  <div
                    className={`absolute top-0 left-0 h-[3px] w-0 ${theme.topStripe} group-hover:w-full transition-all duration-400 ease-out`}
                  />

                  <div className="space-y-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${theme.iconBg}`}
                    >
                      <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3
                        className={`text-lg font-bold text-slate-900 transition-colors ${theme.titleHover}`}
                      >
                        {ind.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  {/* Focus Badges & CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {ind.focus.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10.5px] font-mono px-2.5 py-1 rounded-md border flex items-center gap-1.5 font-medium ${theme.tagBg}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.tagDot}`} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/industries/${ind.id}`);
                      }}
                      className={`text-xs font-mono font-bold flex items-center justify-between w-full pt-1 transition-colors ${theme.ctaText}`}
                    >
                      <span>Explore Sector Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
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
