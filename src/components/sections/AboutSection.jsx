import React from 'react';
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
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const iconMap = {
  Users,
  GitBranch,
  ShieldCheck,
  Layers,
};

export const AboutSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-dark-950 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Client Approach & Culture Overview */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5 space-y-6"
          >
            <motion.div variants={fadeIn('down', 0.1)}>
              <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
                {siteConfig.about.badge}
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeIn('up', 0.2)}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight"
            >
              {siteConfig.about.title}
            </motion.h2>

            <motion.div variants={fadeIn('up', 0.3)} className="space-y-4 text-sm text-muted-300 leading-relaxed">
              <p>{siteConfig.about.clientApproach}</p>
              <p>{siteConfig.about.workCulture}</p>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.4)} className="pt-2 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => scrollTo('contact')}
              >
                Start a Conversation
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => scrollTo('culture')}
              >
                Our Work Culture
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: 4 Core Pillars Grid */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {siteConfig.about.pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || ShieldCheck;

              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeIn('up', idx * 0.08)}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-crimson-600/40 transition-colors space-y-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-dark-850 border border-dark-750 flex items-center justify-center text-crimson-500 shadow-inner">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-400 leading-relaxed">
                      {pillar.description}
                    </p>
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
