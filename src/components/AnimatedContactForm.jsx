import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiSend } from 'react-icons/fi';

const AnimatedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(255, 215, 0, 0.5)",
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 5px 15px rgba(255, 215, 0, 0.3)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(255, 215, 0, 0.4)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <motion.div 
        className="h-full"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="glass-effect rounded-2xl p-8 border border-gold-400/20 h-full">
          <motion.h3 
            className="text-3xl font-bold mb-6 text-ivory"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h3>
          
          <div className="space-y-6 mb-8">
            {[
              "Digital Consulting",
              "Digital Strategy",
              "Digital Transformation Consulting",
              "Operational Excellence through Digitalisation",
              "Digital Marketing",
              "Social Media Management",
              "Online Marketing",
              "Web Development",
              "Website Development",
              "e-commerce Solutions",
              "Website Re-designing",
              "Graphic & Video",
              "Graphic Designing",
              "Video Production and Editing"
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <motion.span 
                  className="text-gold-400 mr-3"
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  ✦
                </motion.span>
                <span className="text-silver-300">{service}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.h3 
            className="text-2xl font-bold mb-6 text-ivory"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Office
          </motion.h3>
          <div className="space-y-4">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <FiPhone className="text-gold-400 mr-3 text-xl react-icon" />
              <span className="text-silver-300">+974 71455795</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <FiMail className="text-gold-400 mr-3 text-xl react-icon" />
              <span className="text-silver-300">Info@nextgendesignhub.com</span>
            </motion.div>
          </div>
          
          <motion.h3 
            className="text-2xl font-bold mt-8 mb-6 text-ivory"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Company
          </motion.h3>
          <div className="space-y-4">
            {[
              "Strategic Partnership",
              "CSR- Social Works",
              "Careers",
              "Privacy Policy"
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <motion.span 
                  className="text-gold-400 mr-3"
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  ✦
                </motion.span>
                <span className="text-silver-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="h-full"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="glass-effect rounded-2xl p-8 border border-gold-400/20 h-full">
          <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label 
                htmlFor="name" 
                className="block text-ivory mb-2"
                variants={itemVariants}
              >
                Full Name
              </motion.label>
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-gold w-full"
                  placeholder="Enter your name"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label 
                htmlFor="email" 
                className="block text-ivory mb-2"
                variants={itemVariants}
              >
                Email Address
              </motion.label>
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-gold w-full"
                  placeholder="Enter your email"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label 
                htmlFor="subject" 
                className="block text-ivory mb-2"
                variants={itemVariants}
              >
                Subject
              </motion.label>
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-gold w-full"
                  placeholder="Enter subject"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-grow"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label 
                htmlFor="message" 
                className="block text-ivory mb-2"
                variants={itemVariants}
              >
                Your Message
              </motion.label>
              <motion.div 
                className="relative h-full"
                variants={itemVariants}
              >
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="input-gold w-full h-full"
                  placeholder="Enter your message"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                ></motion.textarea>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button 
                type="submit"
                className="btn-gold w-full"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
                <FiSend className="ml-2 react-icon" />
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedContactForm;