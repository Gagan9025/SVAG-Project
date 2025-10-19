import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiClock, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Services', href: '/all-services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'All Services', href: '/all-services' },
    { name: 'Digital Consulting', href: '/services/digital-consulting' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { name: 'Graphic Designing', href: '/services/graphic-designing' }
  ];

  const companyInfo = [
    { name: 'Strategic Partnership', href: '/about' },
    { name: 'CSR - Social Works', href: '/about' },
    { name: 'Careers', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-navy border-t border-gold-400/20 pt-16 pb-8 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gold-400 hover:bg-gold-300 text-royal-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Company Info */}
          <div
            className="lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-6">
              <img src="/logo.jpg" alt="SVAG Design Hub" className="h-12 w-auto object-contain mb-4" />
            </div>
            <p className="text-silver-400 mb-6 text-sm lg:text-base leading-relaxed">
              SVAG Design Hub—where branding, digital strategy, and motion converge to elevate your business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FiMapPin className="text-gold-400 mr-3 flex-shrink-0" size={16} />
                <span className="text-silver-400 text-sm">Doha, Qatar</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-gold-400 mr-3 flex-shrink-0" size={16} />
                <a href="tel:+97471455795" className="text-silver-400 hover:text-gold-400 text-sm transition-colors duration-300">
                  +974 71455795
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="text-gold-400 mr-3 flex-shrink-0" size={16} />
                <a href="mailto:Info@nextgendesignhub.com" className="text-silver-400 hover:text-gold-400 text-sm transition-colors duration-300">
                  Info@nextgendesignhub.com
                </a>
              </div>
              <div className="flex items-center">
                <FiClock className="text-gold-400 mr-3 flex-shrink-0" size={16} />
                <span className="text-silver-400 text-sm">Sun - Thu: 9AM - 6PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              {[
                { icon: <FiFacebook size={18} />, href: '#', label: 'Facebook' },
                { icon: <FiTwitter size={18} />, href: '#', label: 'Twitter' },
                { icon: <FiInstagram size={18} />, href: '#', label: 'Instagram' },
                { icon: <FiLinkedin size={18} />, href: '#', label: 'LinkedIn' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-ivory hover:bg-gold-400 hover:text-royal-dark hover:scale-110 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-ivory">Quick Links</h3>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-silver-400 hover:text-gold-400 flex items-center group transition-all duration-300 text-sm lg:text-base"
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 50}
                  >
                    <span className="mr-2 text-gold-400 group-hover:scale-110 transition-transform duration-300">✦</span> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Our Services */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-ivory">Our Services</h3>
            <ul className="space-y-2 lg:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-silver-400 hover:text-gold-400 flex items-center group transition-all duration-300 text-sm lg:text-base"
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 50}
                  >
                    <span className="mr-2 text-gold-400 group-hover:scale-110 transition-transform duration-300">✦</span> 
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Info */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-ivory">Company</h3>
            <ul className="space-y-2 lg:space-y-3">
              {companyInfo.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className="text-silver-400 hover:text-gold-400 flex items-center group transition-all duration-300 text-sm lg:text-base"
                    data-aos="fade-up"
                    data-aos-delay={600 + index * 50}
                  >
                    <span className="mr-2 text-gold-400 group-hover:scale-110 transition-transform duration-300">✦</span> 
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div 
          className="pt-6 lg:pt-8 border-t border-gold-400/20"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-silver-400 text-sm lg:text-base">
                Copyright © 2016-2025 <span className="text-gold-400 font-semibold">NEXTGEN DESIGN HUB</span>
              </p>
              <p className="text-silver-400 text-xs mt-1">
                All rights reserved. Crafting digital excellence since 2016.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
              <Link to="/privacy" className="text-silver-400 hover:text-gold-400 text-xs lg:text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-silver-400 hover:text-gold-400 text-xs lg:text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-silver-400 hover:text-gold-400 text-xs lg:text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/contact" className="text-silver-400 hover:text-gold-400 text-xs lg:text-sm transition-colors duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;