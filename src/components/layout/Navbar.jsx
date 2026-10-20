import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';
import { useTheme } from '../../context/ThemeContext';

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
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Scroll detection for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Screen size change detection: auto close mobile drawer when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileCategory = (id) => {
    setMobileExpandedCategory(mobileExpandedCategory === id ? null : id);
  };

  return (
    <>
      {/* Top Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-2xl py-3'
            : 'bg-white/80 dark:bg-dark-950/70 backdrop-blur-sm lg:bg-transparent py-3.5 lg:py-4 border-b border-slate-200/50 dark:border-white/5 lg:border-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-dark-750 flex items-center justify-center group-hover:border-crimson-600/60 transition-colors shadow-inner">
                <span className="text-crimson-600 font-mono font-bold text-lg tracking-wider">
                  B
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold tracking-tight text-lg text-slate-900 dark:text-white font-sans">
                    {siteConfig.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 shadow-glow-red-sm" />
                </div>
                <span className="text-[10px] tracking-widest text-slate-500 dark:text-muted-400 font-mono uppercase -mt-1 hidden sm:block">
                  Software Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (Visible on lg: >= 1024px) */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-dark-900/75 p-1 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none">
              {siteConfig.navLinks.map((item) => {
                const active = isActive(item.path);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setDesktopServicesOpen(true)}
                      onMouseLeave={() => setDesktopServicesOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors flex items-center gap-1.5 ${
                          active
                            ? 'text-white bg-crimson-600 font-semibold shadow-sm'
                            : desktopServicesOpen
                            ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10'
                            : 'text-slate-600 dark:text-muted-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                        aria-expanded={desktopServicesOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            desktopServicesOpen ? 'rotate-180 text-crimson-600' : ''
                          }`}
                        />
                      </Link>

                      {/* Services Mega Menu Dropdown */}
                      <AnimatePresence>
                        {desktopServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white dark:bg-dark-900/95 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl z-50 text-slate-800 dark:text-white"
                          >
                            {/* Mega menu header */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-white/5">
                              <div>
                                <div className="text-xs font-mono text-crimson-600 dark:text-crimson-400 uppercase tracking-wider font-semibold">
                                  Core Capabilities & Solutions
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-muted-400">
                                  Comprehensive software development, applied AI, design, and growth engineering.
                                </p>
                              </div>
                              <Link
                                to="/services"
                                className="text-xs text-crimson-600 hover:text-crimson-700 dark:text-white dark:hover:text-crimson-400 font-mono flex items-center gap-1 transition-colors font-medium"
                              >
                                <span>Explore All Services</span>
                                <ArrowRight className="w-3.5 h-3.5 text-crimson-600" />
                              </Link>
                            </div>

                            {/* 4 Categories Grid */}
                            <div className="grid grid-cols-2 gap-5">
                              {siteConfig.serviceCategories.map((category) => {
                                const IconComp = categoryIcons[category.id] || Code2;

                                return (
                                  <div
                                    key={category.id}
                                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-850/50 border border-slate-200/60 dark:border-white/5 hover:border-crimson-600/30 transition-colors group/cat"
                                  >
                                    <div className="flex items-center gap-2.5 mb-2">
                                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-crimson-600 group-hover/cat:border-crimson-600/50 shadow-sm">
                                        <IconComp className="w-3.5 h-3.5" />
                                      </div>
                                      <div>
                                        <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover/cat:text-crimson-600 transition-colors">
                                          {category.title}
                                        </h4>
                                      </div>
                                    </div>
                                    <ul className="space-y-1.5 pl-1">
                                      {category.services.slice(0, 3).map((sub) => (
                                        <li key={sub.name}>
                                          <Link
                                            to="/services"
                                            className="text-[11px] text-slate-600 dark:text-muted-400 hover:text-crimson-600 dark:hover:text-white transition-colors block text-left"
                                          >
                                            • {sub.name}
                                          </Link>
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
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      active
                        ? 'text-white bg-crimson-600 font-semibold shadow-sm'
                        : 'text-slate-600 dark:text-muted-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Actions (Theme Toggle & Hire Us) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-700 dark:text-muted-300 hover:text-crimson-600 hover:border-crimson-600/40 transition-colors shadow-sm"
                aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-slate-700" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>

              <Badge variant="crimson" showDot={true} className="hidden xl:inline-flex text-[11px]">
                {siteConfig.status}
              </Badge>

              <Button
                variant="primary"
                size="sm"
                icon={Briefcase}
                iconPosition="right"
                onClick={() => navigate('/contact')}
                className="px-4 py-2 text-xs font-semibold"
              >
                Hire Us
              </Button>
            </div>

            {/* Mobile / Small Screen Navbar Controls (Visible below lg: < 1024px) */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Quick Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-700 dark:text-muted-300 hover:text-crimson-600 focus:outline-none shadow-sm"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-slate-700" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>

              {/* Mobile Menu Hamburger / Close Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-700 dark:text-muted-300 hover:text-crimson-600 focus:outline-none shadow-sm"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-crimson-600" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Slide-Out Drawer Panel (Responsive based on screen size) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dimmed Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Slide-Out Drawer Panel from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-[380px] bg-white dark:bg-dark-950 border-l border-slate-200 dark:border-white/10 shadow-2xl z-50 flex flex-col justify-between overflow-hidden lg:hidden"
            >
              {/* Drawer Top Header */}
              <div className="p-5 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between bg-slate-50/70 dark:bg-dark-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 flex items-center justify-center text-crimson-600 font-mono font-bold text-sm shadow-sm">
                    B
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm font-sans block leading-none">
                      {siteConfig.name}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-muted-400 font-mono">
                      Navigation
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleTheme}
                    className="p-1.5 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 shadow-sm"
                    aria-label="Toggle Theme"
                  >
                    {theme === 'light' ? (
                      <Moon className="w-4 h-4" />
                    ) : (
                      <Sun className="w-4 h-4 text-amber-400" />
                    )}
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 shadow-sm hover:text-crimson-600"
                    aria-label="Close Drawer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Drawer Middle Navigation Links (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-5 space-y-2">
                {/* Home */}
                <Link
                  to="/"
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive('/')
                      ? 'bg-crimson-50 dark:bg-crimson-950/40 text-crimson-600 dark:text-crimson-400 font-semibold shadow-sm'
                      : 'text-slate-700 dark:text-muted-200 hover:bg-slate-100 dark:hover:bg-dark-850'
                  }`}
                >
                  <span>Home</span>
                  {isActive('/') && <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />}
                </Link>

                {/* About Us */}
                <Link
                  to="/about"
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive('/about')
                      ? 'bg-crimson-50 dark:bg-crimson-950/40 text-crimson-600 dark:text-crimson-400 font-semibold shadow-sm'
                      : 'text-slate-700 dark:text-muted-200 hover:bg-slate-100 dark:hover:bg-dark-850'
                  }`}
                >
                  <span>About Us</span>
                  {isActive('/about') && <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />}
                </Link>

                {/* Services with Expandable Categories Accordion */}
                <div className="rounded-xl bg-slate-50 dark:bg-dark-900/60 border border-slate-200/80 dark:border-white/5 overflow-hidden">
                  <div className="flex items-center justify-between px-3.5 py-2.5">
                    <Link
                      to="/services"
                      className="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-2"
                    >
                      <Layers className="w-4 h-4 text-crimson-600" />
                      <span>Services</span>
                    </Link>
                    <button
                      onClick={() =>
                        setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)
                      }
                      className="p-1 text-slate-500 hover:text-slate-900 dark:text-muted-400"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesAccordionOpen ? 'rotate-180 text-crimson-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileServicesAccordionOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-3 pb-3 pt-1 space-y-2 border-t border-slate-200 dark:border-white/5"
                      >
                        {siteConfig.serviceCategories.map((category) => {
                          const IconComp = categoryIcons[category.id] || Code2;
                          const isExpanded = mobileExpandedCategory === category.id;

                          return (
                            <div
                              key={category.id}
                              className="rounded-lg bg-white dark:bg-dark-850/80 border border-slate-200/80 dark:border-white/5 overflow-hidden shadow-sm"
                            >
                              <button
                                onClick={() => toggleMobileCategory(category.id)}
                                className="w-full flex items-center justify-between p-2.5 text-xs font-semibold text-slate-900 dark:text-white text-left"
                              >
                                <span className="flex items-center gap-2">
                                  <IconComp className="w-3.5 h-3.5 text-crimson-600" />
                                  <span>{category.title}</span>
                                </span>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                                    isExpanded ? 'rotate-180 text-crimson-600' : ''
                                  }`}
                                />
                              </button>

                              {isExpanded && (
                                <div className="p-2.5 pt-1 space-y-1.5 bg-slate-50 dark:bg-dark-900/50 border-t border-slate-100 dark:border-white/5">
                                  {category.services.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      to="/services"
                                      className="w-full text-left text-[11px] text-slate-600 dark:text-muted-300 hover:text-crimson-600 dark:hover:text-white py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors block"
                                    >
                                      • {sub.name}
                                    </Link>
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
                <Link
                  to="/industries"
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive('/industries')
                      ? 'bg-crimson-50 dark:bg-crimson-950/40 text-crimson-600 dark:text-crimson-400 font-semibold shadow-sm'
                      : 'text-slate-700 dark:text-muted-200 hover:bg-slate-100 dark:hover:bg-dark-850'
                  }`}
                >
                  <span>Industries</span>
                  {isActive('/industries') && <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />}
                </Link>

                {/* Contact Us */}
                <Link
                  to="/contact"
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive('/contact')
                      ? 'bg-crimson-50 dark:bg-crimson-950/40 text-crimson-600 dark:text-crimson-400 font-semibold shadow-sm'
                      : 'text-slate-700 dark:text-muted-200 hover:bg-slate-100 dark:hover:bg-dark-850'
                  }`}
                >
                  <span>Contact Us</span>
                  {isActive('/contact') && <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />}
                </Link>
              </div>

              {/* Drawer Bottom CTA Area */}
              <div className="p-5 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-dark-900/50 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-muted-400 font-mono text-[11px]">
                    Status:
                  </span>
                  <Badge variant="crimson" showDot={true} className="text-[10px]">
                    {siteConfig.status}
                  </Badge>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  icon={Briefcase}
                  className="w-full justify-center text-sm font-semibold py-3"
                  onClick={() => navigate('/contact')}
                >
                  Hire Us
                </Button>

                <p className="text-center text-[10px] text-slate-500 dark:text-muted-500 font-mono">
                  SLA response within 24 business hours
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
