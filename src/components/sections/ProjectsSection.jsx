import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  Sparkles,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

export const ProjectsSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-dark-900/40 border-t border-white/5 relative">
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
              TECHNICAL DEMONSTRATIONS
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineering Prototypes & <span className="text-gradient-crimson">Architecture Models</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-sm sm:text-base text-muted-400 font-normal leading-relaxed"
          >
            A transparent view of our technical capabilities across enterprise CRM/ERP systems,
            predictive AI workflows, design system tokens, and multi-channel marketing engines.
          </motion.p>
        </motion.div>

        {/* Demonstrations Grid */}
        <div className="space-y-12">
          {siteConfig.demonstrations.map((demo, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Demo Specs */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <Badge variant="crimson" className="text-[10px] font-mono py-0.5 px-2.5">
                          {demo.type}
                        </Badge>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-xs font-mono text-muted-400">
                          {demo.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {demo.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-300 leading-relaxed">
                      {demo.description}
                    </p>

                    {/* Architecture Highlights */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-muted-400 uppercase">
                        Technical Implementations:
                      </div>
                      <div className="space-y-1.5">
                        {demo.highlights.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs text-muted-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-crimson-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {demo.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded bg-dark-850 border border-dark-750 text-muted-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <Button
                        variant="secondary"
                        size="md"
                        icon={ArrowUpRight}
                        onClick={scrollToContact}
                      >
                        Request Technical Walkthrough
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: High-Tech Telemetry & Code Console */}
                  <div className={`space-y-4 ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                    <div className="rounded-xl bg-dark-900 border border-white/10 p-5 space-y-5 shadow-2xl relative overflow-hidden">
                      {/* Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs font-mono text-muted-400">
                        <span className="flex items-center gap-1.5 text-white">
                          <Terminal className="w-3.5 h-3.5 text-crimson-500" />
                          <span>ARCHITECTURE_PROFILE</span>
                        </span>
                        <span className="text-emerald-400 text-[10px]">VERIFIED_SPEC</span>
                      </div>

                      {/* Metrics Display */}
                      <div className="grid grid-cols-3 gap-2">
                        {demo.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="p-3 rounded-lg bg-dark-850/80 border border-dark-750/70 text-center"
                          >
                            <div className="text-sm sm:text-base font-mono font-bold text-crimson-400">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-muted-400 uppercase mt-0.5 font-mono line-clamp-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mockup Terminal Output */}
                      <div className="rounded-lg bg-dark-950 p-4 font-mono text-[11px] space-y-2 border border-white/5">
                        <div className="text-muted-500 flex justify-between">
                          <span>// BLK Architecture Rig</span>
                          <span className="text-crimson-500">Passing</span>
                        </div>
                        <div className="text-muted-300">
                          <span className="text-crimson-500">&gt;</span> Stack: Modern, Typed,
                          Modular
                        </div>
                        <div className="text-muted-300">
                          <span className="text-crimson-500">&gt;</span> Standard: Strict Linting
                          & Unit Checks
                        </div>
                        <div className="text-emerald-400 text-[10px] pt-1">
                          ✓ Prototype status: Ready for custom adaptation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
