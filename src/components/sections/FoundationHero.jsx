import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Cpu, Layers } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, heroHeadlineVariant } from '../../utils/motion';

export const FoundationHero = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-dark-950">
      {/* Background ambient radial gradients & grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-crimson-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-dark-800/40 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeIn('down', 0.1)} className="flex justify-center">
            <Badge variant="crimson" showDot={true} className="py-1.5 px-4 text-xs font-mono">
              ENGINEERING DIGITAL SUPREMACY
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={heroHeadlineVariant}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
          >
            Architecting <span className="text-gradient-crimson">High-Performance</span> Software & Scalable Systems.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn('up', 0.25)}
            className="text-base sm:text-lg md:text-xl text-muted-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            We partner with tech leaders to build mission-critical web platforms, 
            distributed enterprise architectures, and bespoke interfaces that outpace the competition.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeIn('up', 0.35)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Explore Capabilities
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={Code2}
              iconPosition="left"
              className="w-full sm:w-auto min-w-[180px]"
            >
              Architecture Spec
            </Button>
          </motion.div>

          {/* Architectural Feature Pills */}
          <motion.div
            variants={fadeIn('up', 0.45)}
            className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {siteConfig.techBadges.map((badge, idx) => (
              <span
                key={badge}
                className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-md bg-dark-850/80 border border-dark-750 text-muted-300 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Foundation Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {siteConfig.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-xl relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-crimson-600 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-crimson-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-muted-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-muted-500 mt-1 line-clamp-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

