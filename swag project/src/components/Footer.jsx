import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
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

  const companyInfo = [
    'Strategic Partnership',
    'CSR- Social Works',
    'Careers',
    'Privacy Policy'
  ];

  return (
    <footer className="bg-royal-navy border-t border-gold-400/20 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div
            className="animate-fade-in-up"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-6">
              <img src="/logo.jpg" alt="SVAG Design Hub" className="h-12 w-auto object-contain mb-4 animate-fade-in-down" />
            </div>
            <p className="text-silver-400 mb-6 animate-fade-in">
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook size={20} />, href: '#' },
                { icon: <FiTwitter size={20} />, href: '#' },
                { icon: <FiInstagram size={20} />, href: '#' },
                { icon: <FiLinkedin size={20} />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-ivory hover:bg-gold-400 hover:text-royal-dark hover:scale-110 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div
            className="animate-fade-in-up"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold mb-6 text-ivory animate-fade-in-down">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-silver-400 hover:text-gold-400 flex items-center group react-icon"
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 50}
                  >
                    <span className="mr-2 text-gold-400 react-icon">✦</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div
            className="animate-fade-in-up"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-bold mb-6 text-ivory animate-fade-in-down">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-silver-400 hover:text-gold-400 flex items-center group react-icon"
                    data-aos="fade-up"
                    data-aos-delay={600 + index * 50}
                  >
                    <span className="mr-2 text-gold-400 react-icon">✦</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div
            className="animate-fade-in-up"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-xl font-bold mb-6 text-ivory animate-fade-in-down">Contact Info</h3>
            <ul className="space-y-4 mb-8">
              {[
                { icon: <FiPhone size={20} />, text: '+974 71455795' },
                { icon: <FiMail size={20} />, text: 'Info@nextgendesignhub.com' }
              ].map((contact, index) => (
                <li key={index} className="flex items-center animate-fade-in-right">
                  <span className="text-gold-400 mr-3 react-icon">{contact.icon}</span>
                  <span className="text-silver-400">{contact.text}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-bold mb-6 text-ivory animate-fade-in-down">Company</h3>
            <ul className="space-y-3">
              {companyInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-silver-400 hover:text-gold-400 flex items-center group react-icon"
                    data-aos="fade-up"
                    data-aos-delay={700 + index * 50}
                  >
                    <span className="mr-2 text-gold-400 react-icon">✦</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div 
          className="pt-8 border-t border-gold-400/20 animate-fade-in-up"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver-400 mb-4 md:mb-0 animate-fade-in">
              Copyright © 2016-2025 NEXTGEN DESIGN HUB
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-silver-400 hover:text-gold-400 react-icon">
                Privacy Policy
              </a>
              <a href="#" className="text-silver-400 hover:text-gold-400 react-icon">
                Terms of Service
              </a>
              <a href="#" className="text-silver-400 hover:text-gold-400 react-icon">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;