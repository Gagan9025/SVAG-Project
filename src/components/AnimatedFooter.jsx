import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const AnimatedFooter = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Brand Identity Design',
    'Web Development',
    'Digital Marketing',
    'Motion Graphics'
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
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const iconVariants = {
    hover: {
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-royal-navy border-t border-gold-400/20 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
          >
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="/logo.jpg" alt="SVAG Design Hub" className="h-12 w-auto object-contain mb-4" />
            </motion.div>
            <motion.p 
              className="text-silver-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </motion.p>
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook size={20} />, href: '#' },
                { icon: <FiTwitter size={20} />, href: '#' },
                { icon: <FiInstagram size={20} />, href: '#' },
                { icon: <FiLinkedin size={20} />, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-ivory hover:bg-gold-400 hover:text-royal-dark react-icon"
                  variants={itemVariants}
                  whileHover={{ 
                    backgroundColor: "#ffd724",
                    color: "#0f0f1a",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-bold mb-6 text-ivory"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.a 
                    href={link.href} 
                    className="text-silver-400 hover:text-gold-400 flex items-center group"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.span 
                      className="mr-2 text-gold-400"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✦
                    </motion.span> 
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-bold mb-6 text-ivory"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.a 
                    href="#" 
                    className="text-silver-400 hover:text-gold-400 flex items-center group"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.span 
                      className="mr-2 text-gold-400"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✦
                    </motion.span> 
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-bold mb-6 text-ivory"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Info
            </motion.h3>
            <ul className="space-y-4 mb-8">
              {[
                { icon: <FiPhone size={20} />, text: '+974 71455795' },
                { icon: <FiMail size={20} />, text: 'Info@nextgendesignhub.com' }
              ].map((contact, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.span 
                    className="text-gold-400 mr-3 react-icon"
                    whileHover={{}}
                    transition={{ duration: 0.3 }}
                  >
                    {contact.icon}
                  </motion.span>
                  <span className="text-silver-400">{contact.text}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.h3 
              className="text-xl font-bold mb-6 text-ivory"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Company
            </motion.h3>
            <ul className="space-y-3">
              {[
                'Strategic Partnership',
                'CSR- Social Works',
                'Careers',
                'Privacy Policy'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.a 
                    href="#" 
                    className="text-silver-400 hover:text-gold-400 flex items-center group"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.span 
                      className="mr-2 text-gold-400"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✦
                    </motion.span> 
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="pt-8 border-t border-gold-400/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-silver-400 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Copyright © 2016-2025 SVAG Design Hub
            </motion.p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-silver-400 hover:text-gold-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    color: "#ffd724",
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;