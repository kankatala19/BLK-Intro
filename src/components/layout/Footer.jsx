import React from 'react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { Github, Twitter, Linkedin, Terminal, ShieldCheck, ArrowRight, Briefcase } from 'lucide-react';

export const Footer = () => {
  const scrollTo = (hash) => {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-950 relative z-10 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-dark-850 border border-dark-750 flex items-center justify-center">
                <span className="text-crimson-500 font-mono font-bold text-base">B</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold tracking-tight text-white font-sans text-lg">
                    {siteConfig.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 shadow-glow-red-sm" />
                </div>
                <span className="text-[10px] tracking-wider text-muted-400 font-mono uppercase -mt-1">
                  {siteConfig.companyName}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 border border-dark-750 text-xs font-mono text-muted-300 hover:text-white hover:border-crimson-600/50 transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5 text-crimson-500" />
                <span>Hire BLK Software Solutions</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-300">
              Site Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-400">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Four Core Categories */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-300">
              Core Disciplines
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-400">
              {siteConfig.serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="w-1 h-1 rounded-full bg-crimson-500" />
                    <span>{cat.title}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-lg bg-dark-900 border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-muted-400 uppercase">
                  Quality Assurance
                </div>
                <div className="text-xs text-muted-300">
                  Manual • Automated • Security • Performance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-500">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-muted-400 font-mono">Agile Engineering Studio</span>
            <button onClick={() => scrollTo('#contact')} className="hover:text-muted-300 transition-colors">
              Inquire Project
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
