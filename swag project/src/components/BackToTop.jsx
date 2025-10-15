import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-50 transition-opacity duration-300"
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <button
        onClick={scrollToTop}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-royal-dark flex items-center justify-center shadow-lg border-2 border-gold-300 hover:from-gold-300 hover:to-gold-500 transition-all duration-300 hover:scale-110"
      >
        <FiArrowUp size={24} className="font-bold animate-bounce" />
      </button>
    </div>
  );
};

export default BackToTop;