import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { Briefcase, ShieldCheck, Terminal, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-dark-950 text-slate-800 dark:text-white relative z-10 pt-16 pb-12 transition-colors overflow-hidden w-full">
      <Container className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 flex items-center justify-center shadow-sm">
                <span className="text-crimson-600 font-mono font-bold text-base">B</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold tracking-tight text-slate-900 dark:text-white font-sans text-lg">
                    {siteConfig.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 shadow-glow-red-sm" />
                </div>
                <span className="text-[10px] tracking-wider text-slate-500 dark:text-muted-400 font-mono uppercase -mt-1">
                  {siteConfig.companyName}
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-xs font-mono text-slate-700 dark:text-muted-300 hover:text-crimson-600 hover:border-crimson-600/50 transition-colors shadow-sm"
              >
                <Briefcase className="w-3.5 h-3.5 text-crimson-600" />
                <span>Hire BLK Software Solutions</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-muted-300">
              Site Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-muted-400">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-crimson-600 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Four Core Categories */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-muted-300">
              Core Disciplines
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-muted-400">
              {siteConfig.serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to="/services"
                    className="hover:text-crimson-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-crimson-600" />
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/5 space-y-1 shadow-sm">
                <div className="text-[10px] font-mono text-crimson-600 dark:text-crimson-400 uppercase font-semibold">
                  Quality Assurance
                </div>
                <div className="text-xs text-slate-600 dark:text-muted-300">
                  Manual • Automated • Security • Performance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-muted-500">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-600 dark:text-muted-400">Agile Engineering Studio</span>
            <Link to="/contact" className="hover:text-crimson-600 dark:hover:text-muted-300 transition-colors">
              Inquire Project
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
