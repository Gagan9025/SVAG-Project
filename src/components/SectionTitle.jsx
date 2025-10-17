import React from 'react';
// Removed Framer Motion import

const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div 
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block font-heading">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
      </h2>
      <div className="flex justify-center my-4">
        <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
      </div>
      {subtitle && (
        <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;