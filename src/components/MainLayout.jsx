import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-royal-dark text-silver-800 font-sans">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;