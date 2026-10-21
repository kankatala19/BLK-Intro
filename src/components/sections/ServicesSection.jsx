import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Palette,
  Cpu,
  Megaphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

const iconMap = {
  'software-development': Code2,
  'design-digital': Palette,
  'ai-ml': Cpu,
  'digital-branding': Megaphone,
};

// 4 Distinct Visual Personalities for Each Service Category
const serviceVisualConfigs = {
  'software-development': {
    themeName: 'Cybernetic Sapphire',
    accentColor: '#2563EB',
    badge: 'Core Engineering',
    tagline: 'Enterprise Software Architecture • High-Throughput Systems • QA Rigor',
    metricChips: ['Scalable Microservices', '99.9% Production Uptime', 'Zero-Debt Clean Code'],
    tabColor: 'text-blue-700 border-blue-500 bg-blue-50/90 shadow-[0_0_20px_rgba(37,99,235,0.25)] font-bold',
    tabDot: 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.7)]',
    headerBanner: 'from-blue-600/10 via-indigo-600/5 to-transparent border-blue-200/90',
    headerIconBg: 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30',
    topStripe: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600',
    cardHoverBorder: 'group-hover:border-blue-500/60',
    cardAura: 'from-cyan-500/25 via-blue-600/30 to-indigo-600/25',
    cardBadge: 'bg-blue-50 text-blue-800 border-blue-200/80',
    ctaText: 'text-blue-600 hover:text-blue-700',
    ctaLabel: 'Engineer Solution',
  },
  'design-digital': {
    themeName: 'Sunset Aurora',
    accentColor: '#F59E0B',
    badge: 'Experience Design',
    tagline: 'Human-Centered UI/UX • Design Systems & Tokens • Interactive Motion',
    metricChips: ['WCAG AA Compliant', 'Figma to Code Tokens', 'Fluid Micro-Interactions'],
    tabColor: 'text-amber-800 border-amber-500 bg-amber-50/90 shadow-[0_0_20px_rgba(245,158,11,0.25)] font-bold',
    tabDot: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]',
    headerBanner: 'from-amber-600/10 via-rose-600/5 to-transparent border-amber-200/90',
    headerIconBg: 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/30',
    topStripe: 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600',
    cardHoverBorder: 'group-hover:border-amber-500/60',
    cardAura: 'from-amber-500/25 via-rose-500/30 to-purple-600/25',
    cardBadge: 'bg-amber-50 text-amber-800 border-amber-200/80',
    ctaText: 'text-amber-600 hover:text-amber-700',
    ctaLabel: 'Craft Experience',
  },
  'ai-ml': {
    themeName: 'Neural Matrix',
    accentColor: '#10B981',
    badge: 'Applied Intelligence',
    tagline: 'Custom Model Deployment • Workflow Automation Agents • Real-Time ETL',
    metricChips: ['Autonomous AI Agents', 'Vector Database Search', 'Predictive Pipelines'],
    tabColor: 'text-emerald-800 border-emerald-500 bg-emerald-50/90 shadow-[0_0_20px_rgba(16,185,129,0.25)] font-bold',
    tabDot: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]',
    headerBanner: 'from-emerald-600/10 via-teal-600/5 to-transparent border-emerald-200/90',
    headerIconBg: 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/30',
    topStripe: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500',
    cardHoverBorder: 'group-hover:border-emerald-500/60',
    cardAura: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/25',
    cardBadge: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    ctaText: 'text-emerald-600 hover:text-emerald-700',
    ctaLabel: 'Deploy AI Workflow',
  },
  'digital-branding': {
    themeName: 'Fiery Traction',
    accentColor: '#DC2626',
    badge: 'Market Traction',
    tagline: 'Technical SEO Optimization • High-ROAS PPC • Strategic Brand Architecture',
    metricChips: ['Google Core Vitals 95+', 'Conversion Funnel Sprints', 'Full-Funnel Tracking'],
    tabColor: 'text-rose-800 border-rose-500 bg-rose-50/90 shadow-[0_0_20px_rgba(220,38,38,0.25)] font-bold',
    tabDot: 'bg-rose-500 shadow-[0_0_8px_rgba(220,38,38,0.7)]',
    headerBanner: 'from-rose-600/10 via-orange-600/5 to-transparent border-rose-200/90',
    headerIconBg: 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-500/30',
    topStripe: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-500',
    cardHoverBorder: 'group-hover:border-rose-500/60',
    cardAura: 'from-red-600/30 via-orange-500/30 to-amber-500/25',
    cardBadge: 'bg-rose-50 text-rose-800 border-rose-200/80',
    ctaText: 'text-rose-600 hover:text-rose-700',
    ctaLabel: 'Accelerate Growth',
  },
};

const serviceSubTags = {
  'Bespoke Software Solutions': ['Custom Architecture', 'Clean Typing'],
  'CRM and ERP Systems': ['Workflow Automation', 'Data Ingestion'],
  'Enterprise Web Applications': ['React / Next.js', 'Low Latency'],
  'Cloud Architecture & DevOps': ['Containerization', 'CI/CD Pipelines'],
  'Quality Assurance (QA)': ['Automated Testing', 'Security Verification'],
  'High-Throughput APIs & Microservices': ['GraphQL / REST', 'High Concurrency'],
  'UI/UX Design': ['User Journeys', 'Interactive Wireframes'],
  'Design Systems & Token Architecture': ['Figma to Code', 'WCAG AA AA'],
  'Cross-Platform Mobile Design': ['iOS & Android', 'Consistent UI'],
  'Interactive Digital Experiences': ['60 FPS Motion', 'Micro-Interactions'],
  'Machine Learning Model Integration': ['Model Deployment', 'Production APIs'],
  'Intelligent Workflow Automation': ['Autonomous Agents', 'Bot Orchestration'],
  'Data Pipelines & Predictive Analytics': ['Real-Time Streaming', 'ETL Pipelines'],
  'Natural Language Processing (NLP)': ['Vector Embeddings', 'LLM Context Retrieval'],
  'Search Engine Optimization (SEO)': ['Technical SEO', 'Schema & Site Speed'],
  'PPC Advertising': ['Search & Social', 'ROAS Optimization'],
  'Lifecycle Marketing Campaigns': ['Onboarding Funnels', 'Automated Retention'],
  'Brand Identity & Digital Assets': ['Design Guidelines', 'Digital Collateral'],
};

export const ServicesSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read URL query parameter, fallback to 'software-development'
  const categoryParam = searchParams.get('category');
  const validCategory = siteConfig.serviceCategories.some((c) => c.id === categoryParam)
    ? categoryParam
    : 'software-development';

  const [activeCategory, setActiveCategory] = useState(validCategory);

  // Sync state if URL search params change
  useEffect(() => {
    if (categoryParam && siteConfig.serviceCategories.some((c) => c.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchParams({ category: categoryId });
  };

  const currentCategoryData =
    siteConfig.serviceCategories.find((c) => c.id === activeCategory) ||
    siteConfig.serviceCategories[0];

  const currentConfig =
    serviceVisualConfigs[activeCategory] || serviceVisualConfigs['software-development'];

  const CurrentIcon = iconMap[activeCategory] || Code2;

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-[#E6EDF6] via-[#EFF4F9] to-[#E3EAF4] relative transition-colors overflow-hidden w-full border-t border-slate-300/80"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-100/30 blur-3xl pointer-events-none rounded-full" />

      <Container className="relative z-10 w-full">
        {/* Navigation Tabs (All Disciplines Removed - Direct Focused Category Selection) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {siteConfig.serviceCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const CatIcon = iconMap[cat.id] || Code2;
            const config = serviceVisualConfigs[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? `${config.tabColor} border shadow-md scale-105`
                    : 'bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm'
                }`}
              >
                <CatIcon className={`w-4 h-4 ${isSelected ? config.tabColor : 'text-slate-500'}`} />
                <span className="font-semibold">{cat.title}</span>
                {isSelected && <span className={`w-2 h-2 rounded-full ${config.tabDot}`} />}
              </button>
            );
          })}
        </div>

        {/* Selected Service Showcase Hero Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            {/* Category Header Showcase Panel */}
            <div
              className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-r ${currentConfig.headerBanner} bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg relative overflow-hidden`}
            >
              <div
                className={`absolute top-0 left-0 h-[3px] w-full ${currentConfig.topStripe}`}
              />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start sm:items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${currentConfig.headerIconBg}`}
                  >
                    <CurrentIcon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {currentCategoryData.title}
                      </h2>
                      <span
                        className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-bold ${currentConfig.cardBadge}`}
                      >
                        {currentConfig.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {currentConfig.tagline}
                    </p>
                  </div>
                </div>

                {/* Metric Capability Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  {currentConfig.metricChips.map((chip) => (
                    <span
                      key={chip}
                      className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-semibold">{chip}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-Services Cards Grid (Unique Styling per category) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategoryData.services.map((sub, idx) => {
                const tags = serviceSubTags[sub.name] || ['Specialized Execution', 'Production Ready'];

                return (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative cursor-pointer"
                    onClick={() => navigate('/contact')}
                  >
                    {/* Glowing Back Aura on Hover */}
                    <div
                      className={`absolute -inset-1.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none -z-10 bg-gradient-to-tr ${currentConfig.cardAura} scale-95 group-hover:scale-105`}
                      aria-hidden="true"
                    />

                    {/* Card Surface */}
                    <div
                      className={`h-full bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] group-hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)] ${currentConfig.cardHoverBorder} transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
                    >
                      {/* Top Animated Stripe */}
                      <div
                        className={`absolute top-0 left-0 h-[3px] w-0 ${currentConfig.topStripe} group-hover:w-full transition-all duration-400 ease-out`}
                      />

                      <div className="space-y-4">
                        {/* Title & Service Number */}
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors leading-snug">
                            {sub.name}
                          </h3>
                          <span className="text-[10px] font-mono font-bold text-slate-400 shrink-0 mt-0.5">
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {sub.description}
                        </p>

                        {/* Tech & Capability Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200/80 text-slate-600 font-medium"
                            >
                              • {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer & Action */}
                      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider">
                          Ready for Deployment
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/contact');
                          }}
                          className={`text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${currentConfig.ctaText}`}
                        >
                          <span>{currentConfig.ctaLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
