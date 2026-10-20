import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
  Palette,
  Cpu,
  Megaphone,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';

const categoryIcons = {
  'software-development': Code2,
  'design-digital': Palette,
  'ai-ml': Cpu,
  'digital-branding': Megaphone,
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (hash) => {
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
    const targetId = hash.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileCategory = (id) => {
    setMobileExpandedCategory(mobileExpandedCategory === id ? null : id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-dark-850 border border-dark-750 flex items-center justify-center group-hover:border-crimson-600/60 transition-colors shadow-inner">
              <span className="text-crimson-500 font-mono font-bold text-lg tracking-wider">
                B
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-lg text-white font-sans">
                  {siteConfig.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 shadow-glow-red-sm" />
              </div>
              <span className="text-[10px] tracking-widest text-muted-400 font-mono uppercase -mt-1 hidden sm:block">
                Software Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/75 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {siteConfig.navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                  >
                    <button
                      onClick={() => handleNavigate(item.href)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors flex items-center gap-1.5 ${
                        desktopServicesOpen
                          ? 'text-white bg-white/10'
                          : 'text-muted-300 hover:text-white hover:bg-white/5'
                      }`}
                      aria-expanded={desktopServicesOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          desktopServicesOpen ? 'rotate-180 text-crimson-500' : ''
                        }`}
                      />
                    </button>

                    {/* Services Mega Menu Dropdown */}
                    <AnimatePresence>
                      {desktopServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-dark-900/95 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl z-50"
                        >
                          {/* Mega menu header */}
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                            <div>
                              <div className="text-xs font-mono text-crimson-400 uppercase tracking-wider">
                                Core Capabilities & Solutions
                              </div>
                              <p className="text-[11px] text-muted-400">
                                Comprehensive software development, applied AI, design, and growth engineering.
                              </p>
                            </div>
                            <button
                              onClick={() => handleNavigate('#services')}
                              className="text-xs text-white hover:text-crimson-400 font-mono flex items-center gap-1 transition-colors"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3.5 h-3.5 text-crimson-500" />
                            </button>
                          </div>

                          {/* 4 Categories Grid */}
                          <div className="grid grid-cols-2 gap-5">
                            {siteConfig.serviceCategories.map((category) => {
                              const IconComp = categoryIcons[category.id] || Code2;

                              return (
                                <div
                                  key={category.id}
                                  className="p-3.5 rounded-xl bg-dark-850/50 border border-white/5 hover:border-crimson-600/30 transition-colors group/cat"
                                >
                                  <div className="flex items-center gap-2.5 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-crimson-500 group-hover/cat:border-crimson-600/50">
                                      <IconComp className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                      <h4 className="text-xs font-bold text-white group-hover/cat:text-crimson-400 transition-colors">
                                        {category.title}
                                      </h4>
                                    </div>
                                  </div>
                                  <ul className="space-y-1.5 pl-1">
                                    {category.services.slice(0, 3).map((sub) => (
                                      <li key={sub.name}>
                                        <button
                                          onClick={() => handleNavigate('#services')}
                                          className="text-[11px] text-muted-400 hover:text-white transition-colors block text-left"
                                        >
                                          • {sub.name}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.href);
                  }}
                  className="px-3.5 py-1.5 text-xs font-medium text-muted-300 hover:text-white rounded-full transition-colors hover:bg-white/5"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: "Hire Us" */}
          <div className="hidden lg:flex items-center gap-3">
            <Badge variant="crimson" showDot={true} className="hidden xl:inline-flex text-[11px]">
              {siteConfig.status}
            </Badge>

            <Button
              variant="primary"
              size="sm"
              icon={Briefcase}
              iconPosition="right"
              onClick={() => handleNavigate('#contact')}
              className="px-4 py-2 text-xs font-semibold"
            >
              Hire Us
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-850 border border-dark-750 text-muted-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-crimson-500" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Slide-Out Panel / Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-dark-950/98 border-b border-white/10 backdrop-blur-2xl overflow-y-auto max-h-[85vh] shadow-2xl"
          >
            <Container className="py-6 space-y-5">
              {/* Top Status */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <Badge variant="crimson" showDot={true} className="text-[10px]">
                  {siteConfig.status}
                </Badge>
                <span className="text-[10px] font-mono text-muted-400">
                  {siteConfig.companyName}
                </span>
              </div>

              {/* Navigation List */}
              <div className="space-y-1">
                {/* Home */}
                <button
                  onClick={() => handleNavigate('#home')}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-muted-200 hover:text-white hover:bg-dark-850 rounded-lg transition-colors"
                >
                  Home
                </button>

                {/* About Us */}
                <button
                  onClick={() => handleNavigate('#about')}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-muted-200 hover:text-white hover:bg-dark-850 rounded-lg transition-colors"
                >
                  About Us
                </button>

                {/* Expandable Services Accordion */}
                <div className="rounded-xl bg-dark-900/60 border border-white/5 overflow-hidden">
                  <button
                    onClick={() =>
                      setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-white hover:bg-dark-850 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-crimson-500" />
                      <span>Services</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-400 transition-transform ${
                        mobileServicesAccordionOpen ? 'rotate-180 text-crimson-500' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesAccordionOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-3 pb-3 pt-1 space-y-2 border-t border-white/5"
                      >
                        {siteConfig.serviceCategories.map((category) => {
                          const IconComp = categoryIcons[category.id] || Code2;
                          const isExpanded = mobileExpandedCategory === category.id;

                          return (
                            <div
                              key={category.id}
                              className="rounded-lg bg-dark-850/80 border border-white/5 overflow-hidden"
                            >
                              <button
                                onClick={() => toggleMobileCategory(category.id)}
                                className="w-full flex items-center justify-between p-2.5 text-xs font-semibold text-white text-left"
                              >
                                <span className="flex items-center gap-2">
                                  <IconComp className="w-3.5 h-3.5 text-crimson-400" />
                                  <span>{category.title}</span>
                                </span>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 text-muted-400 transition-transform ${
                                    isExpanded ? 'rotate-180 text-crimson-500' : ''
                                  }`}
                                />
                              </button>

                              {isExpanded && (
                                <div className="p-2.5 pt-1 space-y-1.5 bg-dark-900/50 border-t border-white/5">
                                  {category.services.map((sub) => (
                                    <button
                                      key={sub.name}
                                      onClick={() => handleNavigate('#services')}
                                      className="w-full text-left text-[11px] text-muted-300 hover:text-white py-1 px-2 rounded hover:bg-dark-800 transition-colors block"
                                    >
                                      • {sub.name}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries */}
                <button
                  onClick={() => handleNavigate('#industries')}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-muted-200 hover:text-white hover:bg-dark-850 rounded-lg transition-colors"
                >
                  Industries
                </button>

                {/* Insights */}
                <button
                  onClick={() => handleNavigate('#insights')}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-muted-200 hover:text-white hover:bg-dark-850 rounded-lg transition-colors"
                >
                  Insights
                </button>

                {/* Contact Us */}
                <button
                  onClick={() => handleNavigate('#contact')}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-muted-200 hover:text-white hover:bg-dark-850 rounded-lg transition-colors"
                >
                  Contact Us
                </button>
              </div>

              {/* Prominent Mobile "Hire Us" CTA */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <Button
                  variant="primary"
                  size="md"
                  icon={Briefcase}
                  className="w-full justify-center text-sm font-semibold py-3"
                  onClick={() => handleNavigate('#contact')}
                >
                  Hire Us
                </Button>
                <div className="text-center text-[10px] text-muted-500 font-mono">
                  Guaranteed response within 24 business hours
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
