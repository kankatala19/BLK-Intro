import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Coins,
  Activity,
  ShoppingBag,
  Rocket,
  Server,
  Truck,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Zap,
  Layers,
  ArrowLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { siteConfig } from '../data/siteConfig';

const sectorIconMap = {
  fintech: Coins,
  healthtech: Activity,
  ecommerce: ShoppingBag,
  saas: Rocket,
  logistics: Truck,
  education: GraduationCap,
  'real-estate': Briefcase,
};

export const SectorDetailPage = () => {
  const { sectorId } = useParams();
  const navigate = useNavigate();

  // Find matching sector from siteConfig.industries
  const sector =
    siteConfig.industries.find((s) => s.id === sectorId) || siteConfig.industries[0];

  const IconComp = sectorIconMap[sector.id] || Server;

  // Other sectors for related switcher
  const otherSectors = siteConfig.industries.filter((s) => s.id !== sector.id);

  return (
    <div className="pt-20 pb-20 w-full max-w-full overflow-x-hidden">
      {/* 1. Sector Hero Header (Full Cinematic Background like Home Hero) */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#07090E] text-white transition-colors w-full min-h-[75vh] lg:min-h-[80vh] flex items-center border-b border-white/10">
        {/* Background Image Layer: Sector-Specific Architecture Photo */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <motion.img
            src={sector.image}
            alt={`${sector.name} Architecture`}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: [1.06, 1.01, 1.04], opacity: 1 }}
            transition={{
              scale: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 1, ease: 'easeOut' },
            }}
            className="w-full h-full object-cover object-[75%_25%] md:object-[70%_25%] lg:object-[65%_30%] opacity-90 brightness-[0.88] contrast-[1.12] saturate-[1.1] transition-all"
            onError={(e) => {
              // Fallback image if custom sector image not found
              e.currentTarget.src = '/images/blk-img.jpg';
            }}
          />

          {/* Ambient Gradient Overlays: Deep cinematic gradient for maximum text contrast on left, fully highlighted image across right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/95 via-[#07090E]/80 via-50% to-[#07090E]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-transparent via-20% to-[#07090E]" />

          {/* Subtle Tech Grid Overlay */}
          <div className="absolute inset-0 bg-tech-grid opacity-15 mix-blend-overlay" />

          {/* Sector-Specific Colored Ambient Glows */}
          <div
            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] rounded-full blur-[140px] opacity-25"
            style={{ backgroundColor: sector.color || '#2563EB' }}
          />
          <div
            className="absolute top-1/3 right-10 w-[450px] h-[300px] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: sector.color || '#DC2626' }}
          />
        </div>

        <Container className="relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl py-4 sm:py-8 space-y-7">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/industries" className="hover:text-white transition-colors">
                Industries
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-white font-semibold">{sector.name}</span>
            </div>

            {/* Sector Identity & Logo Row */}
            <div className="flex items-center gap-4">
              {/* Sector Dedicated Logo Container (Ready for provided sector logo) */}
              <div
                className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center p-2.5 shadow-2xl relative group overflow-hidden"
                title={`${sector.name} Logo`}
              >
                {sector.logo && !sector.logo.includes('sectors/') ? (
                  <img
                    src={sector.logo}
                    alt={`${sector.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-white"
                    style={{ color: sector.color }}
                  >
                    <IconComp className="w-8 h-8" />
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 backdrop-blur-md text-xs font-mono text-slate-200">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: sector.color }}
                  />
                  <span>{sector.badge || 'SECTOR ARCHITECTURE'}</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Specialized Practice Group
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              {sector.navLabel || `BLK for ${sector.name}`}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-medium text-slate-200">
              {sector.tagline}
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {sector.description}
            </p>

            {/* Focus Tags Bar */}
            {sector.focus && (
              <div className="flex flex-wrap gap-2 pt-1">
                {sector.focus.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-slate-300 flex items-center gap-1.5"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: sector.color }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="px-7 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-mono font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] cursor-pointer"
              >
                <span>Consult {sector.shortTitle || 'Sector'} Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/industries"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-semibold text-xs uppercase tracking-wider transition-all border border-white/20 backdrop-blur-md flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Sectors</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Key Metrics & Compliance Protocols */}
      <section className="py-8 bg-[#0D1220] border-b border-white/10 text-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sector.metrics?.map((m, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${sector.color}25`, color: sector.color }}
                >
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-white">{m.value}</div>
                  <div className="text-xs text-slate-400 font-mono uppercase">{m.label}</div>
                </div>
              </div>
            )) || (
              <div className="text-xs font-mono text-slate-400">
                Industry-standard compliance SLA and zero-downtime architecture.
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 3. Industry Challenges & Tailored BLK Engineering Solutions */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#E6EDF6] via-[#EEF4F9] to-[#E3EAF4] border-b border-slate-300/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Sector Challenges */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-mono text-slate-800">
                <span className="w-2 h-2 rounded-full bg-crimson-600" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Sector Challenges
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Operational Realities We Address for {sector.shortTitle || sector.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Generic boilerplate code fails under sector-specific regulatory constraints and high data volumes.
                We engineer around these exact operational friction points:
              </p>

              <div className="space-y-3 pt-2">
                {sector.challenges?.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-crimson-50 text-crimson-600 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                      0{i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tailored BLK Engineering Solutions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-mono text-slate-800">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Engineered Solutions
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Specialized Architectural Frameworks
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {sector.solutions?.map((sol, idx) => (
                  <motion.div
                    key={sol.title}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] hover:shadow-xl transition-all space-y-3 flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-crimson-600 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-crimson-600 transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {sol.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Ready for Integration</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Switch to Another Sector (Dropdown Reference) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Explore Other Sector Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Switch between dedicated industry practices tailored for your business domain.
              </p>
            </div>
            <Link
              to="/industries"
              className="text-xs font-mono text-crimson-600 hover:text-crimson-700 font-semibold flex items-center gap-1"
            >
              <span>View All Sector Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {otherSectors.slice(0, 8).map((sec) => (
              <Link
                key={sec.id}
                to={`/industries/${sec.id}`}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-crimson-600/40 hover:bg-slate-100/80 transition-all text-left flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-slate-800 group-hover:text-crimson-600 transition-colors line-clamp-1">
                  {sec.navLabel || sec.name}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-crimson-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Consultation & Next Steps Banner */}
      <section className="py-20 bg-gradient-to-b from-[#080B12] via-[#0D1222] to-[#080B14] text-white">
        <Container>
          <div className="rounded-2xl p-8 sm:p-12 border border-white/10 bg-slate-900/80 backdrop-blur-md text-center max-w-3xl mx-auto space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-crimson-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{sector.badge || 'CONFIDENTIAL INQUIRY'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Initiate Your {sector.shortTitle || sector.name} Project
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Schedule a technical discovery session with our senior solutions architect to review your
              operational roadmap, technical compliance requirements, and integration milestones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-mono font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] cursor-pointer"
              >
                <span>Request Project Scope & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

