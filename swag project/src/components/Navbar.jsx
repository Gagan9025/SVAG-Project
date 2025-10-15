import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/contact' },
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
        <div data-aos="fade-down" data-aos-delay="200">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-ivory hover:text-gold-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 relative group"
              data-aos="fade-down"
              data-aos-delay={300 + index * 50}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          ))}
          
          <Link 
            to="/contact"
            className="ml-4 bg-gold-400 text-royal-dark hover:bg-gold-300 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg glow-pulse"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ivory z-50 p-2 rounded-lg hover:bg-royal-navy transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-royal-dark z-40 flex flex-col items-center justify-center md:hidden"
            data-aos="fade-in"
          >
            <div className="flex flex-col items-center space-y-8 w-full px-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-2xl text-ivory hover:text-gold-400 py-2 w-full text-center border-b border-royal-navy hover:border-gold-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="btn-gold mt-8 w-64 py-3 text-lg glow-pulse"
                onClick={() => setIsOpen(false)}
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;