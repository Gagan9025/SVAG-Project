import React from 'react';

const MainLayout = ({ children }) => {
  return (
<<<<<<< HEAD
    <div className="relative min-h-screen bg-royal-dark text-silver-800 font-sans professional-section">
      <BackgroundBeams className="fixed inset-0 z-0" showStaticBeams={false} />
      <RoyalParticles />
=======
    <div className="relative min-h-screen bg-royal-dark text-silver-800 font-sans">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;