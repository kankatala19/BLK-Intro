import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { ApproachCultureSection } from './components/sections/ApproachCultureSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white flex flex-col relative selection:bg-crimson-600 selection:text-white">
      {/* 1. Header and Navigation with Mega Menu & Mobile Drawer */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section Introducing BLK Software Solutions */}
        <Hero />

        {/* 3. Company Capabilities (4 Core Specialties Overview) */}
        <CapabilitiesSection />

        {/* 4. Services Overview (Detailed Categories, QA Suite, CRM/ERP, etc.) */}
        <ServicesSection />

        {/* 5. Featured Projects & Technical Demonstrations (Clearly Labeled) */}
        <ProjectsSection />

        {/* 6. About the Company (Client Approach, Partnerships & Values) */}
        <AboutSection />

        {/* 7. Industries Served */}
        <IndustriesSection />

        {/* 8. Development Approach and Work Culture */}
        <ApproachCultureSection />

        {/* 9. Engineering Insights & Thought Leadership */}
        <InsightsSection />

        {/* 10. Contact and Project Inquiry (Hire Us) */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
