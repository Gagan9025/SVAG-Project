import React from 'react';

const RoyalParticles = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Royal Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>
      <div className="orb orb-5"></div>
      
      {/* Royal Particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      <div className="particle particle-7"></div>
      <div className="particle particle-8"></div>
      <div className="particle particle-9"></div>
      <div className="particle particle-10"></div>
      <div className="particle particle-11"></div>
      <div className="particle particle-12"></div>
    </div>
  );
};

export default RoyalParticles;