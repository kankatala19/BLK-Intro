import React from 'react';
import { ServicesSection } from '../components/sections/ServicesSection';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 w-full max-w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-950 border-b border-slate-200/80 dark:border-white/5 relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6 w-full">
          <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
            ENGINEERING & DIGITAL SERVICES
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Comprehensive Solutions Across <span className="text-gradient-crimson">Four Core Disciplines</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-muted-400 max-w-2xl mx-auto leading-relaxed">
            From custom CRM and ERP development to intelligent machine learning workflows, modern UI/UX design systems,
            and high-ROI digital marketing campaigns.
          </p>
        </Container>
      </section>

      {/* Services Section with Category Tabs */}
      <ServicesSection />

      {/* Consultation Banner */}
      <section className="py-16 bg-white dark:bg-dark-900/60 border-t border-slate-200/80 dark:border-white/5 w-full overflow-hidden">
        <Container className="w-full">
          <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-white/10 text-center max-w-3xl mx-auto space-y-6 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Have a Custom Technical Requirement?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-muted-300">
              We specialize in custom-scoped engineering engagements tailored around your company's
              exact technical infrastructure and business milestones.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => navigate('/contact')}
              >
                Request Service Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

