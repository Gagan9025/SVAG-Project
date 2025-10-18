import React from 'react';
import { FiArrowRight, FiBox, FiGlobe, FiSmartphone, FiFilm } from 'react-icons/fi';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-royal-gradient z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div 
            className="text-center xl:text-left space-y-6 lg:space-y-8 order-first xl:order-first"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-sm font-medium">
              <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse"></span>
              Premium Digital Solutions
            </div>
            
            {/* Main Heading */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="block text-white mb-2">Crafting Tomorrow's</span>
              <span className="block text-gold-400 animate-pulse-slow">Brands, Today</span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto xl:mx-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </p>
            
            {/* Description */}
            <p 
              className="text-sm sm:text-base md:text-lg text-silver-200 max-w-2xl mx-auto xl:mx-0"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              We transform ideas into powerful digital experiences that drive growth, build trust, and create lasting impact.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <AnimatedButton 
                variant="gold" 
                icon={<FiArrowRight />}
                className="group glow-pulse w-full sm:w-auto px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </AnimatedButton>
              
              <AnimatedButton 
                variant="royal" 
                icon={<FiArrowRight />}
                className="group w-full sm:w-auto px-8 py-4 text-lg font-semibold"
              >
                View Our Work
              </AnimatedButton>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div 
            className="relative order-last xl:order-last"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="glass-effect rounded-3xl p-6 lg:p-8 border border-gold-400/20 animate-fade-in">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { icon: <FiBox />, title: 'Brand Identity', desc: 'Creating memorable brands that command attention.' },
                  { icon: <FiGlobe />, title: 'Digital Strategy', desc: 'Aligning digital presence with business strategy.' },
                  { icon: <FiSmartphone />, title: 'Web Development', desc: 'Performance-driven web design that converts.' },
                  { icon: <FiFilm />, title: 'Motion Design', desc: 'Compelling motion graphics and animations.' }
                ].map((item, i) => (
                  <AnimatedCard
                    key={i}
                    variant="royal"
                    className="bg-royal-navy/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-gold-400/10 hover:scale-105 transition-all duration-300 hover:border-gold-400/30"
                    data-aos="zoom-in"
                    data-aos-delay={700 + i * 100}
                  >
                    <div className="text-2xl lg:text-3xl text-gold-400 mb-3 animate-bounce-slow">
                      {item.icon}
                    </div>
                    <h3 className="text-sm lg:text-base font-semibold mb-2 text-gold-300">
                      {item.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-silver-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;