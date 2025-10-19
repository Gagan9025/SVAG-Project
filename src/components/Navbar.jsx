import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'All Services', href: '/all-services' },
    { name: 'Digital Consulting', href: '/services/digital-consulting' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { name: 'Graphic Designing', href: '/services/graphic-designing' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile detection and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.menu-button')) {
        setIsOpen(false);
        setMobileServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Add period after scroll indicator
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show scroll indicator when user has scrolled down
      setShowScrollIndicator(scrollTop > 100);
      
      // Hide scroll indicator when near bottom
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-royal-dark/95 backdrop-blur-md py-2 shadow-2xl border-b border-gold-400/20' : 'py-4 bg-transparent'
      }`}
    >
      {/* Scroll Progress Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-400/20">
          <div 
            className="h-full bg-gradient-to-r from-gold-400 to-yellow-500 transition-all duration-150 ease-out"
            style={{
              width: `${Math.min(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
                100
              )}%`
            }}
          />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              link.hasDropdown ? (
                <div 
                  key={index}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="text-ivory hover:text-gold-400 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center relative group"
                  >
                    {link.name}
                    <FiChevronDown className={`ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} size={16} />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-3/4"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-royal-dark/95 backdrop-blur-md border border-gold-400/30 rounded-xl shadow-2xl z-50 animate-fade-in-down">
                      <div className="py-2">
                        {serviceLinks.map((service, idx) => (
                          <div key={idx}>
                            <Link
                              to={service.href}
                              className="block px-4 py-3 text-ivory hover:bg-royal-navy/50 hover:text-gold-400 transition-all duration-300 text-sm hover:pl-6"
                              onClick={() => setServicesOpen(false)}
                            >
                              {service.name}
                            </Link>
                            {/* Add separator after "All Services" */}
                            {idx === 0 && (
                              <div className="mx-4 my-2 border-t border-gold-400/20"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className={`text-ivory hover:text-gold-400 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === link.href ? 'text-gold-400' : ''
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-3/4"></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-ivory hover:text-gold-400 p-2 rounded-lg hover:bg-royal-navy/50 transition-all duration-300 menu-button focus:outline-none focus:ring-2 focus:ring-gold-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ivory z-50 p-3 rounded-lg hover:bg-royal-navy transition-all duration-300 react-icon menu-button focus:outline-none focus:ring-2 focus:ring-gold-400 touch:min-h-14 touch:min-w-14 touch:p-4 touch:active-scale-md"
          onClick={() => setIsOpen(!isOpen)}
          data-aos="fade-down"
          data-aos-delay="200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={28} className="react-icon" /> : <FiMenu size={28} className="react-icon" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-royal-dark z-40 flex flex-col items-center justify-center md:hidden animate-fade-in mobile-menu"
            data-aos="fade-in"
          >
            <div className="flex flex-col items-center space-y-6 w-full px-4 max-h-[80vh] overflow-y-auto py-8">
              {navLinks.map((link, index) => (
                link.name === 'Services' ? (
                  <div key={index} className="w-full">
                    <button
                      className="text-2xl text-ivory hover:text-gold-400 py-4 w-full text-center border-b border-royal-navy hover:border-gold-400 transition-all duration-300 flex items-center justify-center hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg touch:min-h-14 touch:active-scale-md touch:text-3xl"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      data-aos="fade-up"
                      data-aos-delay={200 + index * 100}
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.name}
                      <FiChevronDown className={`ml-2 transition-transform duration-300 text-3xl ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {mobileServicesOpen && (
                      <div className="mt-4 space-y-3 animate-fade-in-down">
                        {serviceLinks.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.href}
                            className="block py-4 text-xl text-ivory hover:text-gold-400 text-center border-b border-royal-navy hover:border-gold-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:bg-royal-navy focus:text-gold-400 rounded-lg touch:min-h-14 touch:active-scale-md"
                            onClick={() => {
                              setMobileServicesOpen(false);
                              setIsOpen(false);
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-2xl text-ivory hover:text-gold-400 py-4 w-full text-center border-b border-royal-navy hover:border-gold-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg touch:min-h-14 touch:active-scale-md touch:text-3xl"
=======
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-royal-dark/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <div 
              ref={mobileMenuRef}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-royal-dark/95 backdrop-blur-md shadow-2xl border-l border-gold-400/20 transform transition-transform duration-300 ease-in-out"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gold-400/20">
                  <Logo />
                  <button
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    onClick={() => setIsOpen(false)}
                    className="text-ivory hover:text-gold-400 p-2 rounded-lg hover:bg-royal-navy/50 transition-all duration-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <nav className="space-y-2">
                    {navLinks.map((link, index) => (
                      link.hasDropdown ? (
                        <div key={index} className="space-y-2">
                          <button
                            className="w-full text-left text-lg text-ivory hover:text-gold-400 py-3 px-4 rounded-lg hover:bg-royal-navy/50 transition-all duration-300 flex items-center justify-between"
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          >
                            {link.name}
                            <FiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {/* Mobile Services Dropdown */}
                          {mobileServicesOpen && (
                            <div className="ml-4 space-y-1 animate-fade-in-down">
                              {serviceLinks.map((service, idx) => (
                                <div key={idx}>
                                  <Link
                                    to={service.href}
                                    className="block text-ivory hover:text-gold-400 py-2 px-4 rounded-lg hover:bg-royal-navy/50 transition-all duration-300"
                                    onClick={() => {
                                      setMobileServicesOpen(false);
                                      setIsOpen(false);
                                    }}
                                  >
                                    {service.name}
                                  </Link>
                                  {/* Add separator after "All Services" */}
                                  {idx === 0 && (
                                    <div className="mx-4 my-2 border-t border-gold-400/20"></div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={index}
                          to={link.href}
                          className={`block text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                            location.pathname === link.href 
                              ? 'text-gold-400 bg-royal-navy/50' 
                              : 'text-ivory hover:text-gold-400 hover:bg-royal-navy/50'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )
                    ))}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-gold-400/20">
                  <div className="text-center text-sm text-silver-400">
                    <p>Ready to start your project?</p>
                    <Link 
                      to="/contact" 
                      className="inline-block mt-2 text-gold-400 hover:text-gold-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Get in touch →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;