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
<<<<<<< HEAD
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in-down mobile:text-4xl tablet:text-5xl desktop:text-6xl large:text-7xl"
=======
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="block text-white mb-2">Crafting Tomorrow's</span>
              <span className="block text-gold-400 animate-pulse-slow">Brands, Today</span>
            </h1>
            
            {/* Subtitle */}
            <p 
<<<<<<< HEAD
              className="text-base xs:text-lg sm:text-xl text-ivory-light mb-6 md:mb-8 max-w-2xl animate-fade-in mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl"
=======
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto xl:mx-0"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              data-aos="fade-up"
              data-aos-delay="400"
            >
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </p>
            
            {/* Description */}
            <p 
<<<<<<< HEAD
              className="text-sm xs:text-base sm:text-lg text-silver-400 mb-8 md:mb-10 max-w-2xl animate-fade-in mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl"
=======
              className="text-sm sm:text-base md:text-lg text-silver-200 max-w-2xl mx-auto xl:mx-0"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              data-aos="fade-up"
              data-aos-delay="500"
            >
              We transform ideas into powerful digital experiences that drive growth, build trust, and create lasting impact.
            </p>
            
            {/* CTA Buttons */}
            <div 
<<<<<<< HEAD
              className="flex flex-wrap gap-4 animate-fade-in-up mobile:flex-col mobile:items-center mobile:gap-3 tablet:flex-row tablet:gap-4"
=======
              className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <AnimatedButton 
                variant="gold" 
                icon={<FiArrowRight />}
<<<<<<< HEAD
                className="group glow-pulse w-full xs:w-auto touch:min-h-14 touch:min-w-14 touch:p-5 touch:text-xl touch:active-scale-md touch:btn-enhanced mobile:btn-full tablet:btn-enhanced desktop:btn-enhanced large:btn-enhanced"
=======
                className="group glow-pulse w-full sm:w-auto px-8 py-4 text-lg font-semibold"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              >
                Get Started
              </AnimatedButton>
              
              <AnimatedButton 
                variant="royal" 
                icon={<FiArrowRight />}
<<<<<<< HEAD
                className="group w-full xs:w-auto touch:min-h-14 touch:min-w-14 touch:p-5 touch:text-xl touch:active-scale-md touch:btn-enhanced mobile:btn-full tablet:btn-enhanced desktop:btn-enhanced large:btn-enhanced"
=======
                className="group w-full sm:w-auto px-8 py-4 text-lg font-semibold"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
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
<<<<<<< HEAD
            <div className="glass-effect rounded-2xl p-4 xs:p-6 md:p-8 border border-gold-400/20 animate-fade-in mobile:p-5 tablet:p-8 desktop:p-10 large:p-12">
              <div className="grid grid-cols-2 gap-3 xs:gap-4 md:gap-6 mobile:gap-4 tablet:gap-6 desktop:gap-8 large:gap-10">
                {[...Array(4)].map((_, i) => (
                  <AnimatedCard
                    key={i}
                    variant="royal"
                    className="bg-royal-navy rounded-xl p-4 xs:p-5 md:p-6 border border-gold-400/10 hover:scale-105 transition-all duration-300 animate-fade-in-up touch:min-h-28 touch:min-w-28 touch:p-5 touch:active-scale-md touch:card-enhanced mobile:card-enhanced tablet:card-enhanced desktop:card-enhanced large:card-enhanced"
                    data-aos="zoom-in"
                    data-aos-delay={700 + i * 100}
                  >
                    <div className="text-2xl xs:text-3xl md:text-4xl text-gold-400 mb-3 xs:mb-4 md:mb-5 animate-bounce-slow mobile:text-3xl tablet:text-4xl desktop:text-5xl large:text-6xl">
                      {i === 0 && <FiBox />}
                      {i === 1 && <FiGlobe />}
                      {i === 2 && <FiSmartphone />}
                      {i === 3 && <FiFilm />}
                    </div>
                    <h3 className="text-lg xs:text-xl md:text-2xl font-semibold mb-2 xs:mb-3 text-gold-300 mobile:text-xl tablet:text-2xl desktop:text-3xl large:text-4xl">
                      {i === 0 && 'Brand Identity'}
                      {i === 1 && 'Digital Strategy'}
                      {i === 2 && 'Web Development'}
                      {i === 3 && 'Motion Design'}
                    </h3>
                    <p className="text-sm sm:text-base text-silver-400 mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl">
                      {i === 0 && 'Creating memorable brands that command attention.'}
                      {i === 1 && 'Aligning digital presence with business strategy.'}
                      {i === 2 && 'Performance-driven web design that converts.'}
                      {i === 3 && 'Compelling motion graphics and animations.'}
=======
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
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
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