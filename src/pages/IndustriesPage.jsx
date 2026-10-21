import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { ArrowRight, ShieldCheck, Lock, Activity, Server, FileCheck, Sparkles } from 'lucide-react';

export const IndustriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-20 w-full max-w-full overflow-x-hidden">
      {/* 1. Page Header (Executive Dark Midnight Theme) */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#080B12] via-[#0E1424] to-[#0A0D16] text-white border-b border-white/10 relative w-full overflow-hidden">
        {/* Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6 w-full">
          {/* Brand Indicator Pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-white shadow-lg">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>
              <span className="uppercase tracking-wider font-semibold text-[11px] text-slate-200">
                Industry Practice Groups
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Sector-Specific Architecture & <br className="hidden sm:block" />
            <span className="text-gradient-crimson">Compliance Expertise</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We adapt our engineering methodologies, data governance protocols, and security frameworks to meet
            the operational, regulatory, and performance demands of each industry sector.
          </p>
        </Container>
      </section>

      {/* 2. Industries Section with 8 Dedicated Sector Cards */}
      <IndustriesSection />

      {/* 3. Compliance Standards & Protocol Safeguards */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#080B12] via-[#0D1222] to-[#080B14] border-t border-white/10 w-full overflow-hidden text-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SECURITY & GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Compliance-First Engineering by Default
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Every system is engineered to satisfy the highest tier of operational safety and industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 space-y-3.5 shadow-xl hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Data Privacy & Encryption
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Zero-trust authentication, TLS 1.3 encryption, and strict data confidentiality protocols
                protecting client and customer records.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 space-y-3.5 shadow-xl hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Audit Logging & Traceability
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Immutable event logging and structured audit trails essential for financial transactions
                and healthcare compliance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 space-y-3.5 shadow-xl hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                High Concurrency & 99.99% SLA
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Containerized failover, load balancing, and edge caching maintaining high availability
                under peak operational stress.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-mono font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] cursor-pointer"
            >
              <span>Discuss Your Industry Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};
