import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Palette, Cpu, Megaphone, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const iconMap = {
  'software-development': Code2,
  'design-digital': Palette,
  'ai-ml': Cpu,
  'digital-branding': Megaphone,
};

export const CapabilitiesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white dark:bg-dark-900/40 border-t border-slate-200/80 dark:border-white/5 relative transition-colors">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <motion.div variants={fadeIn('down', 0.1)} className="flex justify-center">
            <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
              CORE SPECIALTIES
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Four Foundational <span className="text-gradient-crimson">Company Capabilities</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-slate-600 dark:text-muted-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We focus our multidisciplinary practice across four integrated disciplines, delivering
            end-to-end technology solutions from initial architecture to market traction.
          </motion.p>
        </motion.div>

        {/* 4 Specialties Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {siteConfig.serviceCategories.map((cat, idx) => {
            const IconComp = iconMap[cat.id] || Code2;

            return (
              <motion.div
                key={cat.id}
                variants={fadeIn('up', idx * 0.08)}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Crimson Highlight */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-crimson-600 group-hover:w-full transition-all duration-400 ease-out" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-crimson-600 group-hover:border-crimson-600/50 group-hover:bg-crimson-50 dark:group-hover:bg-crimson-950/30 transition-colors shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-850 text-slate-600 dark:text-muted-400 border border-slate-200 dark:border-dark-750">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-crimson-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-muted-400 leading-relaxed">
                      {cat.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="space-y-1">
                    {cat.services.slice(0, 3).map((item) => (
                      <div
                        key={item.name}
                        className="text-[11px] text-slate-600 dark:text-muted-300 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />
                        <span className="line-clamp-1">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/services')}
                    className="w-full pt-2 flex items-center justify-between text-xs font-mono text-crimson-600 hover:text-crimson-700 transition-colors font-semibold"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
