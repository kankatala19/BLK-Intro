import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, GitBranch, ShieldCheck, Layers, ArrowRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../data/siteConfig';
import { ApproachCultureSection } from '../components/sections/ApproachCultureSection';

const iconMap = {
  Users,
  GitBranch,
  ShieldCheck,
  Layers,
};

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-950 border-b border-slate-200/80 dark:border-white/5 relative">
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
            ABOUT OUR STUDIO
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            A Technology-Driven Partner for <span className="text-gradient-crimson">Long-Term Growth</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-muted-400 max-w-2xl mx-auto leading-relaxed">
            BLK Software Solutions is an ambitious software development company built on the conviction
            that honest communication, agile discipline, and zero-debt code build lasting digital value.
          </p>
        </Container>
      </section>

      {/* Narrative Section: Client Approach & Work Culture */}
      <section className="py-20 bg-white dark:bg-dark-900/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-xs font-mono">
                CLIENT PARTNERSHIPS
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                From Startups to Growing Organizations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-muted-300 leading-relaxed">
                {siteConfig.about.clientApproach}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-muted-300 leading-relaxed">
                Instead of treating software projects as transactional one-off tasks, we integrate
                closely with your product teams, engineering alongside you to adapt as your market evolves.
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => navigate('/contact')}
                >
                  Start a Conversation
                </Button>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-slate-200 dark:border-white/10 space-y-6 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-crimson-50 dark:bg-crimson-950/40 border border-crimson-200 dark:border-crimson-900/60 flex items-center justify-center text-crimson-600">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Our Work Culture
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-muted-400">
                    Collaborative & Technology-Driven
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-muted-300 leading-relaxed">
                {siteConfig.about.workCulture}
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                {[
                  'Direct communication with senior engineers',
                  'Rigorous automated testing & peer reviews',
                  'Iterative 2-week agile delivery cycles',
                  'Continuous post-launch support and telemetry',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700 dark:text-muted-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-crimson-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Core Pillars Grid */}
      <section className="py-20 bg-slate-50 dark:bg-dark-950 border-t border-slate-200/80 dark:border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <Badge variant="crimson" className="text-xs font-mono">
              ENGINEERING FOUNDATION
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              The Four Pillars of BLK Software Solutions
            </h2>
            <p className="text-sm text-slate-600 dark:text-muted-400">
              Guiding every technical decision, architecture draft, and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.about.pillars.map((pillar) => {
              const IconComp = iconMap[pillar.icon] || ShieldCheck;

              return (
                <div
                  key={pillar.title}
                  className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-crimson-600/40 transition-colors space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-crimson-600 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Development Approach & Culture Component */}
      <ApproachCultureSection />
    </div>
  );
};
