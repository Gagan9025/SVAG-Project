import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ContactPage = () => {
  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Simplified animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;