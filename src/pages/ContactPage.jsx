import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { ContactSection } from '../components/sections/ContactSection';
import { PagePullDownReveal } from '../components/common/PagePullDownReveal';
import { Shield, Clock, CheckCircle2, MessageSquare, Play } from 'lucide-react';

export const ContactPage = () => {
  const [revealKey, setRevealKey] = useState(1);
  const [isPulling, setIsPulling] = useState(true);

  const handleReplay = () => {
    setIsPulling(true);
    setRevealKey((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden relative min-h-screen bg-slate-50 dark:bg-dark-950">
      {/* Animated Human Character pulling the page down */}
      {isPulling && (
        <PagePullDownReveal
          key={`pull-${revealKey}`}
          onComplete={() => setIsPulling(false)}
        />
      )}

      {/* The Actual Contact Us Page being pulled down from above */}
      <motion.div
        key={`page-${revealKey}`}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1], // Natural heavy pull physics
        }}
        className="w-full pt-28 pb-20 origin-top shadow-[0_30px_70px_rgba(0,0,0,0.4)]"
      >
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-950 border-b border-slate-200/80 dark:border-white/5 relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
          <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6 w-full">
            <div className="flex items-center justify-center gap-2.5 flex-wrap">
              <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
                GET IN TOUCH // HIRE US
              </Badge>
              <button
                type="button"
                onClick={handleReplay}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-[11px] font-mono text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-white/15 transition-all shadow-sm cursor-pointer"
                title="Replay Page Pull Down"
              >
                <Play className="w-3 h-3 text-crimson-600 fill-crimson-600" />
                <span>Replay Pull Down</span>
              </button>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Ready to Build With an <span className="text-gradient-crimson">Agile Partner?</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-muted-400 max-w-2xl mx-auto leading-relaxed">
              Tell us about your product goals, technical hurdles, or team requirements.
              Our engineering architects respond within 24 business hours.
            </p>
          </Container>
        </section>

        {/* Main Interactive Contact Section */}
        <ContactSection />

        {/* Frequently Asked Partnership Questions */}
        <section className="py-20 bg-white dark:bg-dark-900/60 border-t border-slate-200/80 dark:border-white/5 w-full overflow-hidden">
          <Container className="w-full">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <Badge variant="outline" className="text-xs font-mono">
                WORKING WITH BLK
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Partnership Questions
              </h2>
              <p className="text-sm text-slate-600 dark:text-muted-400">
                Clear answers regarding our engagement models, security standards, and timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2.5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-crimson-600 shrink-0" />
                  <span>What happens after I submit a request?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 leading-relaxed">
                  A senior technical lead reviews your submission and replies within 24 business hours
                  to schedule a focused 30-minute introductory discovery session.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2.5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-crimson-600 shrink-0" />
                  <span>Do you execute mutual non-disclosure agreements?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 leading-relaxed">
                  Yes. We readily sign mutual NDAs before reviewing sensitive product specifications,
                  business data, or existing codebases.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2.5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0" />
                  <span>What business stages do you support?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 leading-relaxed">
                  We partner with pre-seed/seed startups validating an initial MVP as well as established
                  organizations seeking dedicated engineering squads to accelerate product roadmaps.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2.5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-crimson-600 shrink-0" />
                  <span>How are project sprints communicated?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 leading-relaxed">
                  You receive weekly sprint video syncs, direct Slack or Teams collaboration channels,
                  transparent Git access, and staging deployment links.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </motion.div>
    </div>
  );
};


