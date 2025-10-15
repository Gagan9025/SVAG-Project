import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Home = () => {
  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative overflow-x-hidden overflow-y-auto">
      {/* Animated background with floating particles */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        <div className="particle particle-9"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Services />
        <div className="section-divider"></div>
        <Portfolio />
        <div className="section-divider"></div>
        <Testimonials />
        <div className="section-divider"></div>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;