import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPortfolio = () => {
  // Portfolio items data
  const portfolioItems = [
    {
      title: "TechStart Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "FashionHub E-commerce",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "GreenEats Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "TravelApp UI",
      category: "App Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Finance Dashboard",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Luxury Hotel",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 relative mobile:py-16 tablet:py-20 desktop:py-24 large:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 mobile:mb-12 tablet:mb-16 desktop:mb-20 large:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mobile:text-3xl tablet:text-4xl desktop:text-5xl large:text-6xl">
            FEATURED WORK
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4 mobile:my-3 tablet:my-4 desktop:my-5 large:my-6">
            <motion.div 
              className="w-8 h-1 bg-gold-400 rounded-full mobile:w-6 tablet:w-8 desktop:w-10 large:w-12"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <motion.p 
            className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A glimpse of our recent projects and creative solutions
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mobile:gap-6 tablet:gap-8 desktop:gap-10 large:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="card-glass overflow-hidden mobile:card-enhanced tablet:card-enhanced desktop:card-enhanced large:card-enhanced"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-60 object-cover mobile:h-48 tablet:h-56 desktop:h-64 large:h-72"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-gold-400 text-royal-dark px-3 py-1 rounded-full text-sm font-semibold mobile:top-3 mobile:right-3 mobile:px-2.5 mobile:py-1 mobile:text-xs tablet:top-4 tablet:right-4 tablet:px-3 tablet:py-1 tablet:text-sm desktop:top-5 desktop:right-5 desktop:px-4 desktop:py-1.5 desktop:text-base large:top-6 large:right-6 large:px-5 large:py-2 large:text-lg"
                  variants={categoryVariants}
                  whileHover="hover"
                >
                  {item.category}
                </motion.div>
              </div>
              <div className="p-6 mobile:p-5 tablet:p-6 desktop:p-7 large:p-8">
                <motion.h3 
                  className="text-xl font-bold mb-2 text-ivory mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl"
                  whileHover={{}}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.title}
                </motion.h3>
                <motion.button 
                  className="text-gold-400 font-semibold flex items-center group react-icon mobile:text-sm tablet:text-base desktop:text-lg large:text-xl"
                  whileHover={{}}
                  whileTap={{ scale: 1 }}
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 react-icon mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6 large:w-7 large:h-7" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12 mobile:mt-10 tablet:mt-12 desktop:mt-16 large:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="btn-royal-gold px-8 py-4 text-lg react-icon mobile:btn-full mobile:px-6 mobile:py-3 mobile:text-base tablet:btn-enhanced tablet:px-8 tablet:py-4 tablet:text-lg desktop:btn-enhanced desktop:px-10 desktop:py-5 desktop:text-xl large:btn-enhanced large:px-12 large:py-6 large:text-2xl"
            whileHover={{}}
            whileTap={{ scale: 1 }}
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedPortfolio;