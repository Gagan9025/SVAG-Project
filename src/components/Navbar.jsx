import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Services', href: '/services' },
    { name: 'All Services', href: '/all-services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Digital Consulting', href: '/services/digital-consulting' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { name: 'Graphic Designing', href: '/services/graphic-designing' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to larger screens
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-royal-dark/95 backdrop-blur-sm py-2 shadow-xl' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="animate-fade-in-down" data-aos="fade-down" data-aos-delay="200">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            link.name === 'Services' ? (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="text-ivory hover:text-gold-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center relative group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  data-aos="fade-down"
                  data-aos-delay={300 + index * 50}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-3/4"></span>
                </button>
                
                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-royal-dark border border-gold-400 rounded-lg shadow-xl z-50 animate-fade-in-down"
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    <div className="py-2">
                      {serviceLinks.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.href}
                          className="block px-4 py-3 text-ivory hover:bg-royal-navy hover:text-gold-400 transition-all duration-300 text-sm hover:pl-6 focus:bg-royal-navy focus:text-gold-400 focus:outline-none"
                          onClick={() => {
                            setServicesOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={link.href}
                className="text-ivory hover:text-gold-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-400"
                data-aos="fade-down"
                data-aos-delay={300 + index * 50}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            )
          ))}
        </div>

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
                    onClick={() => setIsOpen(false)}
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;