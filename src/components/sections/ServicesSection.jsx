import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Palette,
  Cpu,
  Megaphone,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const iconMap = {
  'software-development': Code2,
  'design-digital': Palette,
  'ai-ml': Cpu,
  'digital-branding': Megaphone,
};

export const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categoriesToDisplay =
    selectedCategory === 'all'
      ? siteConfig.serviceCategories
      : siteConfig.serviceCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 dark:bg-dark-950 border-t border-slate-200/80 dark:border-white/5 relative transition-colors overflow-hidden w-full">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <motion.div variants={fadeIn('down', 0.1)} className="flex justify-center">
            <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
              SERVICES DIRECTORY
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Specialized Services Built for <span className="text-gradient-crimson">Impact</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-slate-600 dark:text-muted-400 font-normal leading-relaxed"
          >
            From custom CRM/ERP pipelines and bespoke software to conversion-focused digital marketing
            and rigorous quality assurance suites.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-crimson-600 text-white shadow-sm font-semibold'
                : 'bg-white dark:bg-dark-850 text-slate-600 dark:text-muted-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-dark-750'
            }`}
          >
            All Disciplines
          </button>
          {siteConfig.serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-crimson-600 text-white shadow-sm font-semibold'
                  : 'bg-white dark:bg-dark-850 text-slate-600 dark:text-muted-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-dark-750'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Services Display Grid */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {categoriesToDisplay.map((cat) => {
              const IconComp = iconMap[cat.id] || Code2;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Category Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-crimson-50 dark:bg-crimson-950/40 border border-crimson-200 dark:border-crimson-900/60 flex items-center justify-center text-crimson-600 shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-muted-400">{cat.shortDescription}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit text-[11px] font-mono">
                      {cat.services.length} Specialized Offerings
                    </Badge>
                  </div>

                  {/* Sub-Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.services.map((sub) => (
                      <div
                        key={sub.name}
                        className="glass-panel glass-panel-hover rounded-xl p-5 border border-slate-200/80 dark:border-white/5 flex flex-col justify-between group"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-start justify-between">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-crimson-600 transition-colors">
                              {sub.name}
                            </h4>
                            <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 shrink-0 mt-1.5 opacity-60 group-hover:opacity-100" />
                          </div>
                          <p className="text-xs text-slate-600 dark:text-muted-400 leading-relaxed">
                            {sub.description}
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                          <span className="text-[10px] font-mono text-slate-400 dark:text-muted-500 uppercase">
                            Available Now
                          </span>
                          <button
                            onClick={() => navigate('/contact')}
                            className="text-xs text-crimson-600 hover:text-crimson-700 font-mono flex items-center gap-1 transition-colors font-semibold"
                          >
                            <span>Inquire</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
