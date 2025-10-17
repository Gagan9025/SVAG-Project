import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
                  className="text-ivory hover:text-gold-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center relative group hover:scale-105"
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
                          className="block px-4 py-3 text-ivory hover:bg-royal-navy hover:text-gold-400 transition-all duration-300 text-sm hover:pl-6"
                          onClick={() => setServicesOpen(false)}
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
                className="text-ivory hover:text-gold-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group hover:scale-105"
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
          className="md:hidden text-ivory z-50 p-2 rounded-lg hover:bg-royal-navy transition-all duration-300 react-icon"
          onClick={() => setIsOpen(!isOpen)}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {isOpen ? <FiX size={24} className="react-icon" /> : <FiMenu size={24} className="react-icon" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-royal-dark z-40 flex flex-col items-center justify-center md:hidden animate-fade-in"
            data-aos="fade-in"
          >
            <div className="flex flex-col items-center space-y-8 w-full px-4">
              {navLinks.map((link, index) => (
                link.name === 'Services' ? (
                  <div key={index} className="w-full">
                    <button
                      className="text-2xl text-ivory hover:text-gold-400 py-2 w-full text-center border-b border-royal-navy hover:border-gold-400 transition-all duration-300 flex items-center justify-center hover:scale-105"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      data-aos="fade-up"
                      data-aos-delay={200 + index * 100}
                    >
                      {link.name}
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {servicesOpen && (
                      <div className="mt-4 space-y-2 animate-fade-in-down">
                        {serviceLinks.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.href}
                            className="block py-3 text-ivory hover:text-gold-400 text-center border-b border-royal-navy hover:border-gold-400 transition-all duration-300 hover:scale-105"
                            onClick={() => {
                              setServicesOpen(false);
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
                    className="text-2xl text-ivory hover:text-gold-400 py-2 w-full text-center border-b border-royal-navy hover:border-gold-400 transition-all duration-300 hover:scale-105"
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