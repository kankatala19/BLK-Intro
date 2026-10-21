import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Palette, Cpu, Megaphone, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const iconMap = {
  'software-development': Code2,
  'design-digital': Palette,
  'ai-ml': Cpu,
  'digital-branding': Megaphone,
};

// Mapped to the official BLK 4-color brand logo: Yellow, Red, Blue, Green
const categoryThemes = {
  'software-development': {
    color: '#2563EB', // Blue
    name: 'Blue Quadrant',
    label: 'Engineering',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50/90 border-blue-200/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)]',
    badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
    topStripe: 'bg-blue-600',
    hoverBorder: 'group-hover:border-blue-500/60',
    bullet: 'bg-blue-600',
    titleHover: 'group-hover:text-blue-600',
    ctaText: 'text-blue-600 hover:text-blue-700',
    dotColor: '#2563EB',
  },
  'design-digital': {
    color: '#F59E0B', // Yellow / Amber
    name: 'Yellow Quadrant',
    label: 'Experience',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50/90 border-amber-200/80 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:shadow-[0_10px_25px_rgba(245,158,11,0.4)]',
    badge: 'bg-amber-50 text-amber-800 border-amber-200/80',
    topStripe: 'bg-amber-500',
    hoverBorder: 'group-hover:border-amber-500/60',
    bullet: 'bg-amber-500',
    titleHover: 'group-hover:text-amber-600',
    ctaText: 'text-amber-600 hover:text-amber-700',
    dotColor: '#F59E0B',
  },
  'ai-ml': {
    color: '#10B981', // Emerald Green
    name: 'Green Quadrant',
    label: 'Intelligence',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50/90 border-emerald-200/80 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-[0_10px_25px_rgba(16,185,129,0.4)]',
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    topStripe: 'bg-emerald-500',
    hoverBorder: 'group-hover:border-emerald-500/60',
    bullet: 'bg-emerald-500',
    titleHover: 'group-hover:text-emerald-600',
    ctaText: 'text-emerald-600 hover:text-emerald-700',
    dotColor: '#10B981',
  },
  'digital-branding': {
    color: '#DC2626', // Crimson Red
    name: 'Red Quadrant',
    label: 'Traction',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50/90 border-rose-200/80 text-rose-600 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 group-hover:shadow-[0_10px_25px_rgba(220,38,38,0.4)]',
    badge: 'bg-rose-50 text-rose-800 border-rose-200/80',
    topStripe: 'bg-rose-600',
    hoverBorder: 'group-hover:border-rose-500/60',
    bullet: 'bg-rose-600',
    titleHover: 'group-hover:text-rose-600',
    ctaText: 'text-rose-600 hover:text-rose-700',
    dotColor: '#DC2626',
  },
};

export const CapabilitiesSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="capabilities"
      className="py-20 md:py-28 bg-[#F1F5F9] border-t border-slate-200/80 relative transition-colors overflow-hidden w-full"
    >
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-blue-50/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-dots opacity-25 pointer-events-none" />

      <Container className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          {/* Brand 4-Color Header Pill */}
          <motion.div variants={fadeIn('down', 0.1)} className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-mono text-slate-800">
              <div className="flex items-center gap-1.5" title="BLK 4 Core Brand Disciplines">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <span className="w-2 h-2 rounded-full bg-[#DC2626] shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>
              <span className="font-semibold tracking-wider uppercase text-[11px] text-slate-800">
                Core Specialties
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Four Foundational <span className="text-gradient-crimson">Company Capabilities</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We focus our multidisciplinary practice across four integrated disciplines, delivering
            end-to-end technology solutions from initial architecture to market traction.
          </motion.p>
        </motion.div>

        {/* 4 Specialties Grid with Multi-Color Back Glow & Popup Effect */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {siteConfig.serviceCategories.map((cat, idx) => {
            const IconComp = iconMap[cat.id] || Code2;
            const theme = categoryThemes[cat.id] || categoryThemes['software-development'];

            return (
              <motion.div
                key={cat.id}
                variants={fadeIn('up', idx * 0.08)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group relative cursor-pointer"
                onClick={() => navigate(`/services?category=${cat.id}`)}
              >
                {/* 1. Multi-colour Ambient Back Glow (4 Logo Colors: Yellow, Red, Blue, Green) */}
                <div
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none -z-10 bg-gradient-to-tr from-[#2563EB]/40 via-[#F59E0B]/35 via-[#10B981]/35 to-[#DC2626]/40 scale-95 group-hover:scale-105"
                  aria-hidden="true"
                />

                {/* 2. Multi-colour Ambient Rim Highlight */}
                <div
                  className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-90 transition-all duration-500 blur-sm pointer-events-none -z-10 bg-[conic-gradient(at_top_left,_#F59E0B,_#DC2626,_#10B981,_#2563EB,_#F59E0B)]"
                  aria-hidden="true"
                />

                {/* 3. Card Surface */}
                <div
                  className={`h-full bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] group-hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)] ${theme.hoverBorder} transition-all duration-300`}
                >
                  {/* Top Colored Highlight Line */}
                  <div
                    className={`absolute top-0 left-0 h-[3px] w-0 ${theme.topStripe} group-hover:w-full transition-all duration-400 ease-out`}
                  />

                  {/* Corner Brand Accent: 4 Mini Dots */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  </div>

                  <div className="space-y-4 pt-1">
                    {/* Icon & Badge Row */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${theme.iconBg}`}
                      >
                        <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-md border font-semibold tracking-wider ${theme.badge}`}
                      >
                        {cat.badge}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div className="space-y-2">
                      <h3
                        className={`text-lg font-bold text-slate-900 transition-colors ${theme.titleHover}`}
                      >
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cat.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Service Items & Action Footer */}
                  <div className="pt-5 mt-6 border-t border-slate-100 space-y-3">
                    <div className="space-y-1.5">
                      {cat.services.slice(0, 3).map((item) => (
                        <div
                          key={item.name}
                          className="text-[11.5px] text-slate-700 font-medium flex items-center gap-2 px-1.5 py-1 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${theme.bullet}`}
                          />
                          <span className="line-clamp-1">{item.name}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/services?category=${cat.id}`);
                      }}
                      className={`w-full pt-2 flex items-center justify-between text-xs font-mono font-bold transition-all ${theme.ctaText}`}
                    >
                      <span className="group-hover:underline">Explore Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
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
