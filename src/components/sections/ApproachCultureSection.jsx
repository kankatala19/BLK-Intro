import React from 'react';
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
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

export const ApproachCultureSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="culture" className="py-24 md:py-32 bg-dark-950 border-t border-white/5 relative">
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
              {siteConfig.approachAndCulture.badge}
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineering Discipline & <span className="text-gradient-crimson">Work Culture</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-muted-400 font-normal leading-relaxed"
          >
            {siteConfig.approachAndCulture.subtitle}
          </motion.p>
        </motion.div>

        {/* 4-Step Agile Delivery Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.approachAndCulture.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-extrabold text-crimson-500">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-crimson-600/60" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-muted-500">
                <CheckCircle2 className="w-3 h-3 text-crimson-500" />
                <span>Verified Milestone Gate</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Work Culture Callout Banner */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden bg-dark-900/90">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-crimson-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <Badge variant="outline" className="text-xs font-mono">
                CULTURE & COLLABORATION
              </Badge>
              <h3 className="text-2xl font-bold text-white">
                How We Collaborate With Your Team
              </h3>
              <p className="text-sm text-muted-300 leading-relaxed max-w-2xl">
                We operate as an extension of your product organization. You get direct access to our
                senior engineers, transparent code repositories, automated staging previews, and
                weekly video syncs. No convoluted middle layers.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={scrollToContact}
                className="w-full sm:w-auto lg:w-full justify-center"
              >
                Hire Our Team
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={scrollToContact}
                className="w-full sm:w-auto lg:w-full justify-center text-xs"
              >
                Schedule Introduction
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

