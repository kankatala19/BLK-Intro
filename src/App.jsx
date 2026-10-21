import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollSideEffects } from './components/common/ScrollSideEffects';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <ScrollSideEffects />
        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-white flex flex-col relative selection:bg-crimson-600 selection:text-white transition-colors duration-200">
          {/* Global Header & Navigation */}
          <Navbar />

          {/* Multi-Page Routes */}
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/:sectorId" element={<SectorDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
