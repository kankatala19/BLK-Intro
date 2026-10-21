import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import { ServicesSection } from '../components/sections/ServicesSection';
import { Container } from '../components/ui/Container';

export const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 w-full max-w-full overflow-x-hidden">
      {/* Page Header (Executive Dark Midnight Theme) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#080B12] via-[#0E1424] to-[#0A0D16] text-white border-b border-white/10 relative w-full overflow-hidden">
        {/* Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6 w-full">
          {/* Brand Header Pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-white">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>
              <span className="uppercase tracking-wider font-semibold text-[11px] text-slate-200">
                Specialized Engineering & Growth
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Comprehensive Solutions Across <br className="hidden sm:block" />
            <span className="text-gradient-crimson">Four Core Disciplines</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            From custom CRM and ERP development to intelligent machine learning workflows, modern UI/UX design systems,
            and high-ROI digital marketing campaigns.
          </p>
        </Container>
      </section>

      {/* Main Services Interactive Directory Section */}
      <ServicesSection />

      {/* Bottom Consultation Banner (Dark Obsidian Theme) */}
      <section className="py-20 bg-gradient-to-b from-[#080B12] via-[#0D1222] to-[#080B14] border-t border-white/10 w-full overflow-hidden text-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-crimson-600/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="rounded-2xl p-8 sm:p-12 border border-white/10 bg-slate-900/80 backdrop-blur-md text-center max-w-3xl mx-auto space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-crimson-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM SCOPING AVAILABLE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Have a Custom Technical Requirement?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              We specialize in custom-scoped engineering engagements tailored around your company's
              exact technical infrastructure, operational workflows, and business milestones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-mono font-semibold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Service Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
