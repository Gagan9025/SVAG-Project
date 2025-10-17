import React from 'react';
import { FiBox, FiArrowRight } from 'react-icons/fi';

const BrandIdentity = () => {
  const services = [
    {
      icon: <FiBox className="text-2xl" />,
      title: "Logo Design",
      description: "Create a memorable and unique logo that represents your brand identity.",
      features: ["Concept Development", "Vector Formats", "Brand Guidelines"]
    },
    {
      icon: <FiBox className="text-2xl" />,
      title: "Brand Guidelines",
      description: "Comprehensive documentation to ensure consistent brand application.",
      features: ["Color Palette", "Typography", "Usage Rules"]
    },
    {
      icon: <FiBox className="text-2xl" />,
      title: "Visual Identity",
      description: "Complete visual system that reflects your brand's personality.",
      features: ["Stationery Design", "Social Media Assets", "Brand Applications"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            BRAND IDENTITY & VISUAL DESIGN
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4 animate-pulse">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
            Crafting cohesive, memorable brands that earn trust and command attention
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass h-full hover:scale-105 transition-all duration-300 animate-fade-in-up"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="flex items-start mb-6">
                <div className="text-gold-400 mr-4 mt-1 react-icon">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mt-1 text-ivory">{service.title}</h3>
                </div>
              </div>
              <p className="text-silver-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center animate-fade-in-right">
                    <span className="text-gold-400 mr-2 react-icon">✦</span>
                    <span className="text-silver-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="text-gold-400 font-semibold flex items-center group hover:scale-105 transition-transform duration-300"
              >
                Learn more
                <FiArrowRight className="ml-2 react-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;