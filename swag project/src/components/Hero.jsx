import React from 'react';
import { FiArrowRight, FiBox, FiGlobe, FiSmartphone, FiFilm } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden overflow-y-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-royal-gradient z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="block text-ivory">Crafting Tomorrow's</span>
              <span className="block text-gold-400">Brands, Today</span>
            </h1>
            
            <p 
              className="text-xl text-ivory-light mb-8 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </p>
            
            <p 
              className="text-lg text-silver-400 mb-10 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              We transform ideas into powerful digital experiences that drive growth, build trust, and create lasting impact.
            </p>
            
            <div 
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button 
                className="btn-gold flex items-center group glow-pulse"
              >
                Get Started
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                className="btn-royal flex items-center group"
              >
                View Our Work
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          <div 
            className="relative"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="glass-effect rounded-2xl p-8 border border-gold-400/20">
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-royal-navy rounded-xl p-6 border border-gold-400/10 hover:scale-105 transition-transform duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={700 + i * 100}
                  >
                    <div className="text-3xl text-gold-400 mb-4">
                      {i === 0 && <FiBox />}
                      {i === 1 && <FiGlobe />}
                      {i === 2 && <FiSmartphone />}
                      {i === 3 && <FiFilm />}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gold-300">
                      {i === 0 && 'Brand Identity'}
                      {i === 1 && 'Digital Strategy'}
                      {i === 2 && 'Web Development'}
                      {i === 3 && 'Motion Design'}
                    </h3>
                    <p className="text-silver-400 text-sm">
                      {i === 0 && 'Creating memorable brands that command attention.'}
                      {i === 1 && 'Aligning digital presence with business strategy.'}
                      {i === 2 && 'Performance-driven web design that converts.'}
                      {i === 3 && 'Compelling motion graphics and animations.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator removed as per user request */}
    </section>
  );
};

export default Hero;