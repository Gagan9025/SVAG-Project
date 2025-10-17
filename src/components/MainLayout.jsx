import React from 'react';
import { BackgroundBeams } from './ui/background-beams';
import RoyalParticles from './RoyalParticles';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-royal-dark text-silver-800 font-sans">
      <BackgroundBeams className="fixed inset-0 z-0" />
      <RoyalParticles />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;