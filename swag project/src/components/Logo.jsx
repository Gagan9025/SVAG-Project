import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      {/* Your exact logo */}
      <img src="/logo.jpg" alt="SVAG Design Hub" className="h-10 w-auto object-contain rounded-lg" />
      
      {/* Brand name - removed DH */}
      <div className="hidden sm:block">
        <span className="text-gold-400 font-heading font-bold text-xl">SVAG</span>
      </div>
    </Link>
  );
};

export default Logo;