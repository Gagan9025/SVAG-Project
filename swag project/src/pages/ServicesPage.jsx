import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ServicesPage = () => {
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
        <Services />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;