import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBox, FiGlobe, FiSmartphone, FiFilm } from 'react-icons/fi';

const AnimatedHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-royal-gradient z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <motion.span 
                className="block text-ivory"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Innovation Meets
              </motion.span>
              <motion.span 
                className="block text-gold-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Excellence
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-ivory-light max-w-2xl"
              variants={itemVariants}
            >
              Crafting Tomorrow's Brands, Today.
            </motion.p>
            
            <motion.p 
              className="text-lg text-silver-400 max-w-2xl"
              variants={itemVariants}
            >
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="btn-gold flex items-center group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get Started
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button 
                className="btn-royal flex items-center group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View Our Work
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-effect rounded-2xl p-8 border border-gold-400/20">
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-royal-navy rounded-xl p-6 border border-gold-400/10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(255, 215, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-3xl text-gold-400 mb-4 react-icon"
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                    >
                      {i === 0 && <FiBox />}
                      {i === 1 && <FiGlobe />}
                      {i === 2 && <FiSmartphone />}
                      {i === 3 && <FiFilm />}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold mb-2 text-gold-300"
                      variants={itemVariants}
                    >
                      {i === 0 && 'Brand Identity'}
                      {i === 1 && 'Digital Strategy'}
                      {i === 2 && 'Web Development'}
                      {i === 3 && 'Motion Design'}
                    </motion.h3>
                    <motion.p 
                      className="text-silver-400 text-sm"
                      variants={itemVariants}
                    >
                      {i === 0 && 'Creating memorable brands that command attention.'}
                      {i === 1 && 'Aligning digital presence with business strategy.'}
                      {i === 2 && 'Performance-driven web design that converts.'}
                      {i === 3 && 'Compelling motion graphics and animations.'}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;