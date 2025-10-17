import React from 'react';
import { FiArrowRight, FiBox, FiGlobe, FiSmartphone, FiFilm } from 'react-icons/fi';
import { BackgroundBeams } from './ui/background-beams';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-royal-gradient z-0"></div>
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className="animate-fade-in-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-down"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="block text-ivory">Crafting Tomorrow's</span>
              <span className="block text-gold-400 animate-pulse-slow">Brands, Today</span>
            </h1>
            
            <p 
              className="text-xl text-ivory-light mb-8 max-w-2xl animate-fade-in"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </p>
            
            <p 
              className="text-lg text-silver-400 mb-10 max-w-2xl animate-fade-in"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              We transform ideas into powerful digital experiences that drive growth, build trust, and create lasting impact.
            </p>
            
            <div 
              className="flex flex-wrap gap-4 animate-fade-in-up"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <AnimatedButton 
                variant="gold" 
                icon={<FiArrowRight />}
                className="group glow-pulse"
              >
                Get Started
              </AnimatedButton>
              
              <AnimatedButton 
                variant="royal" 
                icon={<FiArrowRight />}
                className="group"
              >
                View Our Work
              </AnimatedButton>
            </div>
          </div>
          
          <div 
            className="relative animate-fade-in-right"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="glass-effect rounded-2xl p-8 border border-gold-400/20 animate-fade-in">
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <AnimatedCard
                    key={i}
                    variant="royal"
                    className="bg-royal-navy rounded-xl p-6 border border-gold-400/10 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    data-aos="zoom-in"
                    data-aos-delay={700 + i * 100}
                  >
                    <div className="text-3xl text-gold-400 mb-4 animate-bounce-slow">
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
                  </AnimatedCard>
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