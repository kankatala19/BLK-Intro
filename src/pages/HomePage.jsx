import React from 'react';
import { Hero } from '../components/sections/Hero';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { AboutSection } from '../components/sections/AboutSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { ApproachCultureSection } from '../components/sections/ApproachCultureSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <CapabilitiesSection />
      <AboutSection />
      <IndustriesSection />
      <ApproachCultureSection showCultureBanner={false} />
      <ContactSection />
    </>
  );
};
