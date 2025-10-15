import React from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const PortfolioPage = () => {
  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative overflow-x-hidden">
      {/* Animated background with floating particles */}
      <div className="animated-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
      
      <Navbar />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PortfolioPage;