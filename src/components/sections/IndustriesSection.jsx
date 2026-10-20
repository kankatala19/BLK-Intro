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
  ArrowRight,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const iconMap = {
  Coins,
  Activity,
  ShoppingBag,
  Rocket,
  Truck,
  GraduationCap,
};

export const IndustriesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="industries" className="py-24 md:py-32 bg-white dark:bg-dark-900/40 border-t border-slate-200/80 dark:border-white/5 relative transition-colors overflow-hidden w-full">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

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
            <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
              SECTORS WE SUPPORT
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Tailored Solutions Across <span className="text-gradient-crimson">Dynamic Industries</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-slate-600 dark:text-muted-400 font-normal leading-relaxed"
          >
            We customize our engineering, design, and AI capabilities to match the distinct operational
            requirements and compliance environments of each sector.
          </motion.p>
        </motion.div>

        {/* 6-Card Industries Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteConfig.industries.map((ind, index) => {
            const IconComp = iconMap[ind.icon] || Rocket;

            return (
              <motion.div
                key={ind.id}
                variants={fadeIn('up', index * 0.06)}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-crimson-600 group-hover:border-crimson-600/50 group-hover:bg-crimson-50 dark:group-hover:bg-crimson-950/30 transition-colors shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-crimson-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>

                {/* Focus Badges */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {ind.focus.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-muted-300 border border-slate-200 dark:border-dark-750 flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="text-xs font-semibold text-crimson-600 hover:text-crimson-700 flex items-center gap-1 transition-colors pt-1"
                  >
                    <span>Discuss industry project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
