import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ArrowRight, Code2, Terminal, CheckCircle2 } from 'lucide-react';

export const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-950 border-b border-slate-200/80 dark:border-white/5 relative">
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
            TECHNICAL DEMONSTRATIONS
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Proof of Work & <span className="text-gradient-crimson">Architecture Models</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-muted-400 max-w-2xl mx-auto leading-relaxed">
            Transparent technical demonstrations engineered to illustrate our architectural standards,
            UI performance, AI workflows, and data pipelines.
          </p>
        </Container>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Architectural Guarantee Section */}
      <section className="py-16 bg-white dark:bg-dark-900/60 border-t border-slate-200/80 dark:border-white/5">
        <Container>
          <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-white/10 text-center max-w-3xl mx-auto space-y-6 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Want a Tailored Technical Walkthrough?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-muted-300">
              We are pleased to walk your engineering and product leadership through our codebases,
              demonstrating how we structure state machines, automated testing suites, and data models.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => navigate('/contact')}
              >
                Schedule Code Walkthrough
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
