import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

const BackgroundBeamsWrapper = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen ${className}`}>
      <BackgroundBeams className="fixed inset-0 z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundBeamsWrapper;