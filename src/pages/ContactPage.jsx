import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { ContactSection } from '../components/sections/ContactSection';
import { CurtainReveal } from '../components/common/CurtainReveal';
import { Shield, Clock, CheckCircle2, MessageSquare, Play } from 'lucide-react';

export const ContactPage = () => {
  const [revealKey, setRevealKey] = useState(1);
  const [revealStage, setRevealStage] = useState(0); // 0 -> 1 -> 2 -> 3 -> 4 -> 5
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const handleReplay = () => {
    setRevealStage(0);
    setIsAnimationDone(false);
    setRevealKey((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden relative min-h-screen bg-slate-50 dark:bg-dark-950">
      {/* Lightweight Translucent Curtain with Animated Man Pulling Down */}
      {!isAnimationDone && (
        <CurtainReveal
          key={`curtain-${revealKey}`}
          onProgress={(prog) => {
            if (prog >= 1.0) setRevealStage(5);
            else if (prog >= 0.8) setRevealStage(4);
            else if (prog >= 0.6) setRevealStage(3);
            else if (prog >= 0.4) setRevealStage(2);
            else if (prog >= 0.2) setRevealStage(1);
          }}
          onComplete={() => {
            setRevealStage(5);
            setIsAnimationDone(true);
          }}
        />
      )}

      {/* Main Page Content - Unveiled progressively as the curtain moves downward */}
      <div className="w-full pt-28 pb-20 origin-top">
        {/* 1. Page Header (Revealed at Stage 1 & 2) */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-950 border-b border-slate-200/80 dark:border-white/5 relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
          <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6 w-full">
            {/* Stage 1: Heading & Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={revealStage >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-2.5 flex-wrap">
                <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
                  GET IN TOUCH // HIRE US
                </Badge>
                <button
                  type="button"
                  onClick={handleReplay}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-[11px] font-mono text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-white/15 transition-all shadow-sm cursor-pointer"
                  title="Replay Curtain Reveal"
                >
                  <Play className="w-3 h-3 text-crimson-600 fill-crimson-600" />
                  <span>Replay Curtain Reveal</span>
                </button>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Ready to Build With an <span className="text-gradient-crimson">Agile Partner?</span>
              </h1>
            </motion.div>

            {/* Stage 2: Subtitle & Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={revealStage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-slate-600 dark:text-muted-400 max-w-2xl mx-auto leading-relaxed"
            >
              Tell us about your product goals, technical hurdles, or team requirements.
              Our engineering architects respond within 24 business hours.
            </motion.p>
          </Container>
        </section>

        {/* 2. Main Interactive Contact Section (Stages 3 & 4: Contact Info & Form) */}
        <ContactSection revealStage={revealStage} />

        {/* 3. Frequently Asked Partnership Questions & Footer Details (Stage 5) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={revealStage >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="py-20 bg-white dark:bg-dark-900/60 border-t border-slate-200/80 dark:border-white/5 w-full overflow-hidden"
        >
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
        </motion.section>
      </div>
    </div>
  );
};
