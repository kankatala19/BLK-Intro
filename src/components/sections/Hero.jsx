import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Cpu, ShieldCheck, Activity, Zap, Server, Briefcase } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, heroHeadlineVariant } from '../../utils/motion';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-dark-950 transition-colors w-full">
      {/* Background Image Layer: Modern Engineering Collaboration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Collaborative Team Photo */}
        <motion.img
          src="/images/blk-img.jpg"
          alt="BLK Engineering Team"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: [1.08, 1.02, 1.06], opacity: 1 }}
          transition={{
            scale: { duration: 24, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1.2, ease: "easeOut" }
          }}
          className="w-full h-full object-cover object-[center_35%] opacity-25 lg:opacity-35 dark:opacity-15 brightness-[1.02] contrast-[1.05] dark:brightness-75 dark:contrast-125 dark:grayscale-[25%] transition-all"
        />

        {/* Ambient Gradient Overlays for High-Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/50 dark:from-dark-950 dark:via-dark-950/95 dark:to-dark-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-transparent to-slate-50 dark:from-dark-950/90 dark:via-transparent dark:to-dark-950" />

        {/* Tech Grid Overlay over Photo */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 mix-blend-overlay" />

        {/* Crimson Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[700px] h-[250px] sm:h-[350px] lg:h-[400px] bg-crimson-600/10 dark:bg-crimson-700/15 rounded-full blur-[90px] sm:blur-[140px]" />
        <div className="absolute bottom-10 -left-10 w-48 sm:w-[300px] h-48 sm:h-[300px] bg-slate-200/50 dark:bg-dark-850/50 rounded-full blur-[90px] sm:blur-[120px]" />

        {/* Floating Atmospheric Crimson Shimmer */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            x: ['-5%', '5%', '-5%'],
            y: ['0%', '-4%', '0%']
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 right-1/4 w-[500px] h-[300px] bg-gradient-to-br from-crimson-500/20 via-crimson-600/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          {/* Left Column: Introduction & Headlines */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="show"
            className="w-full lg:col-span-7 space-y-7 text-left"
          >
            {/* Status / Eyebrow pill */}
            <motion.div variants={fadeIn('down', 0.1)} className="flex items-center gap-3">
              <Badge variant="crimson" showDot={true} className="py-1.5 px-3.5 text-xs font-mono">
                {siteConfig.hero.badge}
              </Badge>
              <span className="text-xs font-mono text-slate-500 dark:text-muted-400 hidden sm:inline-block">
                // {siteConfig.companyName}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={heroHeadlineVariant}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white"
            >
              We Build <span className="text-gradient-crimson">Digital Products</span> That Move Businesses Forward.
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={fadeIn('up', 0.25)}
              className="text-base sm:text-lg text-slate-600 dark:text-muted-400 max-w-xl font-normal leading-relaxed"
            >
              {siteConfig.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeIn('up', 0.35)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto justify-center"
              >
                {siteConfig.hero.primaryCta}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Layers}
                iconPosition="left"
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto justify-center"
              >
                {siteConfig.hero.secondaryCta}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                icon={Briefcase}
                iconPosition="left"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto justify-center border border-slate-300 dark:border-white/10 hover:border-crimson-600/40"
              >
                {siteConfig.hero.hireCta}
              </Button>
            </motion.div>

            {/* Operational Highlights Bar */}
            <motion.div
              variants={fadeIn('up', 0.45)}
              className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 dark:text-muted-400 w-full"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-crimson-600 shrink-0" />
                <span className="font-medium">Agile Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-crimson-600 shrink-0" />
                <span className="font-medium">Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-crimson-600 shrink-0" />
                <span className="font-medium">Startups to Enterprise Scale</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Abstract Technology Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:col-span-5 relative"
          >
            {/* Floating Studio Pulse Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-3.5 right-3 sm:right-5 z-20 glass-panel py-1 px-3 rounded-full border border-slate-200/90 dark:border-white/10 shadow-md flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-700 dark:text-muted-200 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-slate-800 dark:text-white">Active Engineering Squad</span>
            </motion.div>

            {/* Outer Glow Halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-crimson-500/20 to-transparent rounded-2xl blur-xl opacity-50 pointer-events-none" />

            {/* Main Interactive Glass Console */}
            <div className="relative glass-panel rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-card-dark overflow-hidden bg-white/95 dark:bg-dark-900/90 backdrop-blur-xl w-full">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-dark-850/80 border-b border-slate-200/80 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-crimson-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-600 dark:text-muted-400 ml-2">
                    blk-solutions // runtime
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-crimson-700 dark:text-crimson-400 bg-crimson-50 dark:bg-crimson-950/60 px-2 py-0.5 rounded border border-crimson-200 dark:border-crimson-900/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 animate-pulse" />
                  ACTIVE_PIPELINE
                </div>
              </div>

              {/* Console Body: Abstract Technology Topology */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Visual Topology Map */}
                <div className="relative h-44 rounded-xl bg-slate-900 dark:bg-dark-950/70 border border-slate-800 dark:border-white/5 p-4 overflow-hidden flex flex-col justify-between text-white w-full">
                  <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />

                  {/* Circuit Nodes SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#DC2626" strokeWidth="1.5" />
                    <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                    <circle cx="20%" cy="30%" r="5" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="50%" cy="50%" r="7" fill="#DC2626" />
                    <circle cx="80%" cy="35%" r="5" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="50%" cy="85%" r="4" fill="#94A3B8" />
                  </svg>

                  {/* Top Status */}
                  <div className="relative z-10 flex justify-between items-center text-[11px] font-mono">
                    <span className="text-slate-400">ENGINEERING CORE</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      ONLINE & READY
                    </span>
                  </div>

                  {/* Center Node Data Bubble */}
                  <div className="relative z-10 mx-auto bg-slate-800/90 dark:bg-dark-850/90 border border-crimson-500/50 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-crimson-400 shrink-0" />
                    <span className="text-xs font-mono text-white">BLK Agile Delivery</span>
                  </div>

                  {/* Bottom Telemetry Metrics */}
                  <div className="relative z-10 flex flex-wrap justify-between items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800 dark:border-white/5">
                    <span>SPRINTS: 2 WEEKS</span>
                    <span>QA: MULTI-LAYER</span>
                    <span>SCALE: ENTERPRISE</span>
                  </div>
                </div>

                {/* Secondary Telemetry Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-dark-850/60 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-muted-400 uppercase">Architecture</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>Bespoke & Scalable</span>
                      <Activity className="w-3.5 h-3.5 text-crimson-600 shrink-0" />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-dark-850/60 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-muted-400 uppercase">Code Standard</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>Full QA Rigor</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-crimson-600 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Terminal Snippet */}
                <div className="rounded-lg bg-slate-900 dark:bg-dark-950/80 p-3 font-mono text-[11px] text-slate-400 dark:text-muted-400 border border-slate-800 dark:border-white/5 space-y-1">
                  <div className="text-slate-500">// BLK Software Solutions runtime initialized</div>
                  <div className="text-white flex items-center gap-1.5 flex-wrap">
                    <span className="text-crimson-500">&gt;</span>
                    <span>blk --build --quality-first --deliver</span>
                  </div>
                  <div className="text-emerald-400 text-[10px]">
                    ✓ Solutions online: Software, Design, AI/ML, Branding
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
