import React from 'react';
import HeroSection from '../components/common/HeroSection';
import StatsCounter from '../components/common/StatsCounter';
import ServicesPreview from '../components/common/ServicesPreview';
import PropertiesPreview from '../components/common/PropertiesPreview';
import AboutPreview from '../components/common/AboutPreview';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <main>
        <HeroSection />
        <StatsCounter />
        <ServicesPreview />
        <PropertiesPreview />
        <AboutPreview />
      </main>
    </div>
  );
};

export default Home;