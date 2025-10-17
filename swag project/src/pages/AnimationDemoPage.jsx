import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiBox, FiGlobe, FiBarChart2, FiFilm, FiArrowRight } from 'react-icons/fi';

const AnimationDemoPage = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      transition: {
        duration: 0.3
      }
    },
    tap: { scale: 0.95 }
  };

  const services = [
    {
      icon: <FiBox className="text-2xl" />,
      title: "CSS Animations",
      description: "Smooth transitions and effects using pure CSS animations"
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "AOS Library",
      description: "Animate on scroll effects for engaging user experiences"
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Hover Effects",
      description: "Interactive animations that respond to user actions"
    },
    {
      icon: <FiFilm className="text-2xl" />,
      title: "Framer Motion",
      description: "Advanced animations with powerful JavaScript library"
    }
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Animated background */}
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
        <div className="particle particle-10"></div>
        <div className="particle particle-11"></div>
        <div className="particle particle-12"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-6 font-heading text-gold-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ANIMATION SHOWCASE
              </motion.h1>
              <motion.div 
                className="flex justify-center my-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </motion.div>
              <motion.p 
                className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Experience the power of modern web animations that bring your digital experiences to life
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Animation Types Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                ANIMATION TYPES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Explore the different animation techniques we've implemented throughout the site
              </p>
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
                    <div className="text-gold-400 mr-4 mt-1 react-icon">
                      {service.icon}
                    </div>
                    <div>
                      <motion.h3 
                        className="text-xl font-bold mt-1 text-ivory"
                        whileHover={{}}
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
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.button 
                    className="text-gold-400 font-semibold flex items-center group react-icon"
                    whileHover={{}}
                    whileTap={{ scale: 1 }}
                  >
                    Learn more
                    <FiArrowRight className="ml-2 react-icon" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                INTERACTIVE DEMO
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Try out different animations by interacting with the elements below
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hover Animation Demo */}
              <motion.div 
                className="card-glass p-8 text-center react-icon"
                whileHover={{ 
                  boxShadow: "0 20px 25px rgba(255, 215, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-ivory">Hover Effects</h3>
                <p className="text-silver-400 mb-6">Hover over this card to see the animation</p>
                <div className="flex justify-center space-x-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gold-400"
                      whileHover={{}}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Click Animation Demo */}
              <motion.div 
                className="card-glass p-8 text-center"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-ivory">Click Effects</h3>
                <p className="text-silver-400 mb-6">Click on this card to see the animation</p>
                <motion.button
                  className="btn-royal-gold px-6 py-3 react-icon"
                  whileHover={{}}
                  whileTap={{ scale: 1 }}
                >
                  Click Me!
                </motion.button>
              </motion.div>
              
              {/* Drag Animation Demo */}
              <motion.div 
                className="card-glass p-8 text-center md:col-span-2 react-icon"
                drag
                dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                whileDrag={{ scale: 1 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-ivory">Drag Effects</h3>
                <p className="text-silver-400 mb-6">Drag this card around the screen</p>
                <div className="w-24 h-24 mx-auto bg-gold-400 rounded-full flex items-center justify-center">
                  <span className="text-royal-dark font-bold">DRAG</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                BENEFITS OF ANIMATIONS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                How animations enhance user experience and engagement
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "User Engagement", 
                  description: "Animations capture attention and keep users engaged with your content longer",
                  icon: "🎯"
                },
                { 
                  title: "Visual Feedback", 
                  description: "Provide immediate feedback for user actions, improving usability",
                  icon: "💬"
                },
                { 
                  title: "Brand Personality", 
                  description: "Animations help express your brand's character and values",
                  icon: "🎨"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="card-glass p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px rgba(255, 215, 0, 0.2)"
                  }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-ivory">{benefit.title}</h3>
                  <p className="text-silver-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400">
                READY TO BRING YOUR WEBSITE TO LIFE?
              </h2>
              <motion.p 
                className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's create stunning animations that captivate your audience and elevate your brand.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="btn-royal-gold px-8 py-4 text-lg react-icon"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  GET STARTED TODAY
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AnimationDemoPage;