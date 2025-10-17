import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

const BackgroundBeamsSection = ({ 
  children, 
  className = "",
  showStaticBeams = true,
  beamClassName = ""
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <BackgroundBeams 
        className={`absolute inset-0 ${beamClassName}`}
        showStaticBeams={showStaticBeams}
      />
    </div>
  );
};

export default BackgroundBeamsSection;