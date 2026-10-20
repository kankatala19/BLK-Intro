import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

export const InsightsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="insights" className="py-24 md:py-32 bg-white dark:bg-dark-900/40 border-t border-slate-200/80 dark:border-white/5 relative transition-colors">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

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
              ENGINEERING INSIGHTS
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Technical Perspectives & <span className="text-gradient-crimson">Thought Leadership</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-slate-600 dark:text-muted-400 font-normal leading-relaxed"
          >
            Pragmatic write-ups on modern architecture choices, applied AI implementation, and
            accessible design token engineering.
          </motion.p>
        </motion.div>

        {/* Insights 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.insights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-crimson-600 font-semibold">{item.category}</span>
                  <span className="text-slate-500 dark:text-muted-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-crimson-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 dark:text-muted-500">
                  {item.date}
                </span>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-xs font-mono text-crimson-600 hover:text-crimson-700 flex items-center gap-1 transition-colors font-semibold"
                >
                  <span>Discuss topic</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
