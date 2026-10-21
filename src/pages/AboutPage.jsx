import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  GitBranch,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Zap,
  Lock,
  Code2,
  TrendingUp,
} from 'lucide-react';
import { Container } from '../components/ui/Container';

// Differentiated, In-Depth Substance for The Four Pillars on About Page
const comprehensivePillars = [
  {
    id: 'pillar-1',
    roman: 'PILLAR I',
    title: 'Zero Technical Debt & Strict Architecture',
    subtitle: 'Architecture & Typing Rigor',
    color: '#2563EB',
    theme: {
      accentText: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBox: 'bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shadow-md shadow-blue-500/20',
      topStripe: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600',
      aura: 'from-cyan-500/30 via-blue-600/35 to-indigo-600/30',
      borderHover: 'group-hover:border-blue-500/60',
      checkColor: 'text-blue-500',
    },
    icon: ShieldCheck,
    summary:
      'We reject hasty hacks that accumulate compounding technical debt. Every system is engineered with strict type safety, modular microservice boundaries, automated regression suites, and migration-tested schemas.',
    deliverables: [
      '100% Type-Safe Contracts (TypeScript / REST / GraphQL)',
      'Automated CI/CD Regression Gates & Static Analysis',
      'Modular Service Boundaries with Zero Circular Sprawl',
      'Living Architecture & Schema Migration Documentation',
    ],
  },
  {
    id: 'pillar-2',
    roman: 'PILLAR II',
    title: 'Agile Transparency & Direct Engineer Access',
    subtitle: 'Velocity Without Intermediaries',
    color: '#F59E0B',
    theme: {
      accentText: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBox: 'bg-amber-50 text-amber-600 border-amber-200 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 shadow-md shadow-amber-500/20',
      topStripe: 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500',
      aura: 'from-amber-500/30 via-orange-500/35 to-rose-500/30',
      borderHover: 'group-hover:border-amber-500/60',
      checkColor: 'text-amber-500',
    },
    icon: GitBranch,
    summary:
      'We eliminate non-technical account intermediaries who obscure progress. You interface directly with lead engineers writing your code, review staging environments on every merge, and test features in rapid two-week cycles.',
    deliverables: [
      'Bi-Weekly Interactive Staging Previews for Stakeholders',
      'Direct Developer-to-Founder Communication Channels',
      'Transparent Pull Request Reviews & Clean Commit Histories',
      'Real-Time Milestone Velocity Dashboards & Burndown Metrics',
    ],
  },
  {
    id: 'pillar-3',
    roman: 'PILLAR III',
    title: 'Pragmatic Innovation & Applied Intelligence',
    subtitle: 'High-ROI Intelligence Integration',
    color: '#10B981',
    theme: {
      accentText: 'text-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBox: 'bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 shadow-md shadow-emerald-500/20',
      topStripe: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500',
      aura: 'from-emerald-500/30 via-teal-500/35 to-cyan-500/30',
      borderHover: 'group-hover:border-emerald-500/60',
      checkColor: 'text-emerald-500',
    },
    icon: Cpu,
    summary:
      'We implement artificial intelligence exclusively where it resolves acute operational bottlenecks or amplifies user conversion. We build production-hardened LLM pipelines and autonomous workflow bots that deliver measurable leverage.',
    deliverables: [
      'Production-Hardened LLM Pipelines with Latency Guarantees',
      'Sub-150ms Vector Semantic Search & Retrieval Systems',
      'Self-Healing Internal Workflow Automation Agents',
      'Transparent Model Token Budgeting & Cost Governance',
    ],
  },
  {
    id: 'pillar-4',
    roman: 'PILLAR IV',
    title: 'Shared Ownership & Long-Term Scaling',
    subtitle: 'Invested Technical Co-Foundership',
    color: '#DC2626',
    theme: {
      accentText: 'text-rose-600',
      badgeBg: 'bg-rose-50 text-rose-800 border-rose-200',
      iconBox: 'bg-rose-50 text-rose-600 border-rose-200 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 shadow-md shadow-rose-500/20',
      topStripe: 'bg-gradient-to-r from-red-600 via-rose-500 to-amber-500',
      aura: 'from-red-600/30 via-rose-500/35 to-amber-500/30',
      borderHover: 'group-hover:border-rose-500/60',
      checkColor: 'text-rose-500',
    },
    icon: Layers,
    summary:
      'We treat your runway, operational capital, and delivery targets with the same diligence as a founding partner. From early MVP validation to enterprise multi-region scaling under heavy traffic, we build for commercial longevity.',
    deliverables: [
      'Elastic Cloud Infrastructure (Docker / Containerized Deployments)',
      'Real-Time Production Observability & Automated Alerts',
      'Complete Intellectual Property & Clean Repository Ownership',
      'Dedicated SLA-Backed Ongoing Engineering Partnership',
    ],
  },
];

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 w-full max-w-full overflow-x-hidden">
      {/* 1. Page Header (Executive Dark Midnight with 3D Floating Identity Pill) */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#080B12] via-[#0E1424] to-[#0A0D16] text-white border-b border-white/10 relative w-full overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6 w-full">
          {/* 3D Floating Brand Indicator Pill */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-white shadow-lg cursor-default"
            >
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                <span className="w-2 h-2 rounded-full bg-[#DC2626] shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
              <span className="uppercase tracking-wider font-semibold text-[11px] text-slate-200">
                About BLK Software Solutions
              </span>
            </motion.div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engineered for Durability, <br className="hidden sm:block" />
            <span className="text-gradient-crimson">Built for Ambitious Growth</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We are an agile software engineering studio dedicated to craftsmanship, transparent teamwork,
            and reliable product delivery. We engineer scalable systems that power business milestones.
          </p>
        </Container>
      </section>

      {/* 2. Studio Narrative & Interactive 3D Execution Console */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#E6EDF6] via-[#EFF4F9] to-[#E3EAF4] border-b border-slate-300/80 relative transition-colors overflow-hidden w-full">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Column: Founding Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-mono text-slate-800">
                <span className="w-2 h-2 rounded-full bg-crimson-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Founding Philosophy
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Why Ambitious Companies Partner with BLK
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Modern software development has become burdened with bloated agencies, convoluted account management,
                and fragile codebases that collapse as soon as user traffic spikes.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                BLK Software Solutions was founded on the opposite conviction: small, multidisciplinary squads of
                senior engineers working directly alongside founders and technical leaders to build resilient,
                scalable products on time and within budget.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-mono font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Consult an Engineer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/services')}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-mono font-semibold text-xs uppercase tracking-wider transition-all border border-slate-300 shadow-sm"
                >
                  <span>Explore Capabilities</span>
                </button>
              </div>
            </div>

            {/* Right Column: 3D Technical Execution Console */}
            <div className="lg:col-span-6 perspective-1000">
              <motion.div
                whileHover={{ y: -6, rotateX: 2, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="bg-[#0B0F19] rounded-2xl p-7 sm:p-9 border border-white/10 text-white shadow-2xl relative overflow-hidden group cursor-default"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-crimson-600/20 border border-crimson-500/30 flex items-center justify-center text-crimson-400 shadow-inner">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          BLK Technical Execution Standards
                        </h3>
                        <p className="text-[11px] font-mono text-slate-400">
                          Non-Negotiable Engineering Quality Gates
                        </p>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        title: 'Sub-100ms API Latency Target',
                        desc: 'Optimized endpoints, database indexing, and Redis caching layers.',
                        icon: Zap,
                        color: 'text-amber-400',
                      },
                      {
                        title: '100% Codebase Ownership',
                        desc: 'Direct repository access from day one. You own all IP without lock-in.',
                        icon: Lock,
                        color: 'text-blue-400',
                      },
                      {
                        title: 'Continuous Automated Test Gates',
                        desc: 'Rigorous unit, integration, and security audits run on every pull request.',
                        icon: CheckCircle2,
                        color: 'text-emerald-400',
                      },
                      {
                        title: 'Bi-Weekly Stakeholder Sprints',
                        desc: 'Live interactive staging previews delivered on predictable 14-day cycles.',
                        icon: TrendingUp,
                        color: 'text-rose-400',
                      },
                    ].map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-start gap-3.5"
                        >
                          <ItemIcon className={`w-5 h-5 shrink-0 mt-0.5 ${item.color}`} />
                          <div className="space-y-0.5">
                            <div className="text-xs font-bold text-white tracking-tight">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-300 font-normal">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. The Four Pillars of BLK Software Solutions (3D Cards with Perspective Lift & Concrete Deliverables) */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#07090F] via-[#0D1222] to-[#080B14] text-white border-t border-white/10 relative transition-colors overflow-hidden w-full">
        {/* Ambient Lights */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-crimson-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        <Container className="relative z-10 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-white">
                <span className="w-2 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  The Architectural Blueprint
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              The Four Pillars of <span className="text-gradient-crimson">BLK Software Solutions</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              These four engineering commitments govern every technical draft, sprint plan, and client engagement.
              They provide the exact operational difference between fragile deliverables and lasting digital assets.
            </p>
          </div>

          {/* 4 Pillars Grid with 3D Depth & Perspective Lift */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
            {comprehensivePillars.map((pillar) => {
              const PillarIcon = pillar.icon;

              return (
                <motion.div
                  key={pillar.id}
                  whileHover={{ y: -10, rotateX: 2, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="group relative cursor-default"
                >
                  {/* Glowing 3D Back Aura on Hover */}
                  <div
                    className={`absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none -z-10 bg-gradient-to-tr ${pillar.theme.aura} scale-95 group-hover:scale-105`}
                    aria-hidden="true"
                  />

                  {/* 3D Card Surface */}
                  <div
                    className={`h-full bg-slate-900/90 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/10 shadow-2xl group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] ${pillar.theme.borderHover} transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
                  >
                    {/* Top Animated Color Stripe */}
                    <div
                      className={`absolute top-0 left-0 h-[3px] w-0 ${pillar.theme.topStripe} group-hover:w-full transition-all duration-400 ease-out`}
                    />

                    <div className="space-y-5">
                      {/* Roman Numeral Badge & Icon Row */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-13 h-13 rounded-2xl border flex items-center justify-center p-3 transition-all duration-300 ${pillar.theme.iconBox}`}
                        >
                          <PillarIcon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-md bg-white/5 border border-white/15 text-slate-300 font-bold tracking-widest">
                          {pillar.roman}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="space-y-1">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          {pillar.subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Detailed Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {pillar.summary}
                      </p>

                      {/* Tangible Engineering Deliverables Checklist */}
                      <div className="pt-4 border-t border-white/10 space-y-2.5">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          Concrete Deliverables & Safeguards:
                        </div>
                        <div className="space-y-2">
                          {pillar.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2.5 text-xs text-slate-200/90 font-medium"
                            >
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 mt-0.5 ${pillar.theme.checkColor}`}
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Footnote */}
                    <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Standard on all BLK engagements</span>
                      <span className="flex items-center gap-1.5 text-white font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Enforced
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Leadership & Engineering Principles (Executive Slate Background) */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#E6EDF6] via-[#EEF4F9] to-[#E3EAF4] border-t border-slate-300/80 relative transition-colors overflow-hidden w-full">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-mono text-slate-800">
                <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Operating Principles
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Core Tenets of Our <span className="text-gradient-crimson">Technical Practice</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              We operate without redundant management layers. These principles guarantee that every line of
              code we ship directly advances your commercial roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
            {[
              {
                title: 'Radical Code Transparency',
                icon: Code2,
                desc: 'You have full access to our git repositories, commit logs, and CI/CD pipelines from sprint one. There are no proprietary black boxes.',
                color: 'text-blue-600',
                border: 'hover:border-blue-500/50',
              },
              {
                title: 'Benchmarked Performance',
                icon: Zap,
                desc: 'Every endpoint, database query, and user interface is audited against strict latency budgets and Google Core Web Vitals targets.',
                color: 'text-amber-600',
                border: 'hover:border-amber-500/50',
              },
              {
                title: 'Direct Builder Access',
                icon: Terminal,
                desc: 'You communicate directly with senior engineers who understand architecture, eliminating communication friction and accelerating delivery.',
                color: 'text-emerald-600',
                border: 'hover:border-emerald-500/50',
              },
            ].map((principle) => {
              const PIcon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className={`bg-white/95 backdrop-blur-md rounded-2xl p-7 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)] ${principle.border} transition-all space-y-4 cursor-default`}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                    <PIcon className={`w-6 h-6 ${principle.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Executive Consultation Banner */}
      <section className="py-20 bg-gradient-to-b from-[#080B12] via-[#0D1222] to-[#080B14] border-t border-white/10 w-full overflow-hidden text-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-crimson-600/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="rounded-2xl p-8 sm:p-12 border border-white/10 bg-slate-900/80 backdrop-blur-md text-center max-w-3xl mx-auto space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-crimson-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO COLLABORATE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Build Your Next Project with BLK
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Whether you need to architect a custom web platform, integrate intelligent AI workflows,
              or scale mission-critical infrastructure, our team is ready to deliver.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-mono font-semibold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Initiate Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
