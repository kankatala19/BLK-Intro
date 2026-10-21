import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck, Zap, Server, Briefcase } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, heroHeadlineVariant } from '../../utils/motion';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#07090E] text-white transition-colors w-full min-h-[85vh] lg:min-h-[88vh] flex items-center">
      {/* Background Image Layer: Modern Engineering Collaboration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Collaborative Team Photo - Highlighted & Cinematic Across Full Hero */}
        <motion.img
          src="/images/blk-img.jpg"
          alt="BLK Engineering Team"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: [1.06, 1.01, 1.04], opacity: 1 }}
          transition={{
            scale: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 1, ease: 'easeOut' },
          }}
          className="w-full h-full object-cover object-[75%_25%] md:object-[70%_25%] lg:object-[65%_30%] opacity-90 brightness-[0.88] contrast-[1.12] saturate-[1.1] transition-all"
        />

        {/* Ambient Gradient Overlays: Deep cinematic gradient for maximum text contrast on left, fully highlighted image across right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/95 via-[#07090E]/80 via-48% to-[#07090E]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-transparent via-20% to-[#07090E]" />

        {/* Subtle Tech Grid Overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-15 mix-blend-overlay" />

        {/* Crimson Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-crimson-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-crimson-700/10 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-3xl lg:max-w-4xl py-6 sm:py-10">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="show"
            className="space-y-8 text-left"
          >
            {/* Status / Eyebrow pill */}
            <motion.div variants={fadeIn('down', 0.1)} className="flex items-center gap-3">
              <Badge variant="crimson" showDot={true} className="py-1.5 px-3.5 text-xs font-mono tracking-wide shadow-sm">
                {siteConfig.hero.badge}
              </Badge>
              <span className="text-xs font-mono text-slate-300 hidden sm:inline-block">
                // {siteConfig.companyName}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={heroHeadlineVariant}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              We Build <span className="text-gradient-crimson">Digital Products</span> That Move Businesses Forward.
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={fadeIn('up', 0.25)}
              className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed"
            >
              {siteConfig.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeIn('up', 0.35)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto justify-center shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)]"
              >
                {siteConfig.hero.primaryCta}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Layers}
                iconPosition="left"
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto justify-center bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40 backdrop-blur-md"
              >
                {siteConfig.hero.secondaryCta}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                icon={Briefcase}
                iconPosition="left"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto justify-center bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 backdrop-blur-md hover:border-crimson-600/40"
              >
                {siteConfig.hero.hireCta}
              </Button>
            </motion.div>

            {/* Operational Highlights Bar */}
            <motion.div
              variants={fadeIn('up', 0.45)}
              className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4 text-xs"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-slate-200 font-medium shadow-sm">
                <ShieldCheck className="w-4 h-4 text-crimson-500 shrink-0" />
                <span>Agile Engineering</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-slate-200 font-medium shadow-sm">
                <Zap className="w-4 h-4 text-crimson-500 shrink-0" />
                <span>Modern Tech Stack</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-slate-200 font-medium shadow-sm">
                <Server className="w-4 h-4 text-crimson-500 shrink-0" />
                <span>Startups to Enterprise Scale</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
