import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { ArrowRight, ShieldCheck, Lock, Activity, Server, FileCheck } from 'lucide-react';

export const IndustriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-950 border-b border-slate-200/80 dark:border-white/5 relative">
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
            SECTOR SPECIALIZATION
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Sector-Specific Architecture & <span className="text-gradient-crimson">Compliance Expertise</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-muted-400 max-w-2xl mx-auto leading-relaxed">
            We adapt our engineering methodologies and security frameworks to meet the regulatory,
            performance, and privacy standards required across key industry sectors.
          </p>
        </Container>
      </section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Compliance Standards Callout */}
      <section className="py-16 bg-white dark:bg-dark-900/60 border-t border-slate-200/80 dark:border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="outline" className="text-xs font-mono">
              STANDARDS & PROTOCOLS
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Compliance-First Engineering by Default
            </h2>
            <p className="text-sm text-slate-600 dark:text-muted-400">
              We engineer mission-critical systems with strict adherence to industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-crimson-50 dark:bg-crimson-950/40 text-crimson-600 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Data Privacy & Encryption
              </h3>
              <p className="text-xs text-slate-600 dark:text-muted-400 leading-relaxed">
                Zero-trust authentication, TLS 1.3 encryption, and strict data confidentiality protocols
                protecting client and customer records.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-crimson-50 dark:bg-crimson-950/40 text-crimson-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Audit Logging & Traceability
              </h3>
              <p className="text-xs text-slate-600 dark:text-muted-400 leading-relaxed">
                Immutable event logging and structured audit trails essential for financial transactions
                and healthcare reporting.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-crimson-50 dark:bg-crimson-950/40 text-crimson-600 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                High Concurrency & SLA
              </h3>
              <p className="text-xs text-slate-600 dark:text-muted-400 leading-relaxed">
                Containerized failover, load balancing, and edge caching maintaining high availability
                under peak operational stress.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => navigate('/contact')}
            >
              Discuss Your Industry Project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
