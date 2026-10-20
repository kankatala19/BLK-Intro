import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

export const ProcessSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-dark-900/60 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20"
        >
          <motion.div variants={fadeIn('down', 0.1)} className="flex justify-center">
            <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
              ENGINEERING LIFECYCLE
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Disciplined <span className="text-gradient-crimson">5-Stage Execution</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-base text-muted-400 font-normal leading-relaxed"
          >
            From domain discovery through post-deployment telemetry, our development framework eliminates
            guesswork and guarantees production-grade reliability.
          </motion.p>
        </motion.div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Subtle connecting vertical line on desktop */}
          <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-[80%] bg-gradient-to-b from-crimson-600 via-dark-750 to-transparent pointer-events-none opacity-40" />

          <div className="space-y-8 lg:space-y-12">
            {siteConfig.process.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  {/* Step Card */}
                  <div
                    className={`lg:col-span-12 ${
                      isEven ? 'lg:pr-16' : 'lg:pl-16'
                    }`}
                  >
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                      {/* Crimson Accent Marker */}
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-crimson-600" />

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-crimson-500">
                            {step.step}
                          </span>
                          <div>
                            <span className="text-xs font-mono text-muted-400 uppercase tracking-widest">
                              {step.timeline}
                            </span>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              {step.name}
                            </h3>
                          </div>
                        </div>

                        <Badge variant="outline" className="w-fit text-[11px] font-mono">
                          Verified Gate
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-300 py-4 leading-relaxed max-w-3xl">
                        {step.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="pt-2">
                        <div className="text-xs font-mono text-muted-400 uppercase mb-2">
                          Phase Deliverables:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {step.deliverables.map((deliv) => (
                            <div
                              key={deliv}
                              className="flex items-center gap-2 text-xs text-muted-300 bg-dark-850/60 p-2 rounded border border-dark-750/70"
                            >
                              <Check className="w-3.5 h-3.5 text-crimson-500 shrink-0" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Footer CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            onClick={scrollToContact}
          >
            Initiate Project Discovery
          </Button>
        </div>
      </Container>
    </section>
  );
};

