import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBox, FiGlobe, FiBarChart2, FiFilm } from 'react-icons/fi';

const AnimatedServices = () => {
  const services = [
    {
      icon: <FiBox className="text-2xl" />,
      title: "Brand Identity Design",
      category: "Brand Identity & Visual Design",
      description: "Craft cohesive, memorable brands that earn trust and command attention.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Web Development",
      category: "Web & UX Development",
      description: "Responsive, performance-driven web design that converts visitors into advocates.",
      features: ["Web Design", "E-commerce", "UX/UI"]
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Digital Marketing",
      category: "Digital Marketing & Strategy",
      description: "Align your digital presence with business strategy for sustainable growth.",
      features: ["SEO", "PPC", "Analytics"]
    },
    {
      icon: <FiFilm className="text-2xl" />,
      title: "Motion Graphics",
      category: "Motion & Animation",
      description: "Bring your brand to life with compelling motion graphics and animations.",
      features: ["Motion Graphics", "Video Editing", "Animations"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Adding "Our Services" heading */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gold-400 font-heading">
            OUR SERVICES
          </h2>
        </motion.div>
        
        {/* Custom bold heading for "Our Core Services" */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            OUR CORE SERVICES
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <motion.div 
              className="w-8 h-1 bg-gold-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>
          <motion.p 
            className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Comprehensive solutions that drive measurable business growth and create lasting impact
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-glass h-full"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start mb-6">
                <motion.div
                  className="text-gold-400 mr-4 mt-1 react-icon"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <div>
                  <span className="text-gold-400 text-sm font-semibold">{service.category}</span>
                  <motion.h3 
                    className="text-xl font-bold mt-1 text-ivory"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
              </div>
              <motion.p 
                className="text-silver-400 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.description}
              </motion.p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="text-gold-400 mr-2"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✦
                    </motion.span>
                    <span className="text-silver-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className="text-gold-400 font-semibold flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Aligned "Ready to Start?" heading with consistent styling */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
              READY TO START?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
            </h3>
            <div className="flex justify-center my-4">
              <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
            </div>
          </div>
          <motion.p 
            className="text-xl text-silver-400 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your project and create something amazing together.
          </motion.p>
          <motion.button 
            className="btn-gold inline-flex items-center group glow-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start Your Project
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedServices;