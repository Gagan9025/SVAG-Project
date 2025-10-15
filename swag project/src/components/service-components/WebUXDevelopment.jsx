import React from 'react';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';

const WebUXDevelopment = () => {
  const services = [
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Web Design",
      description: "Responsive, performance-driven web design that converts visitors into advocates.",
      features: ["UI/UX Design", "Responsive Layouts", "Conversion Optimization"]
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "E-commerce",
      description: "Complete online store solutions that drive sales and enhance customer experience.",
      features: ["Product Catalog", "Payment Integration", "Inventory Management"]
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "UX/UI",
      description: "User-centered design that improves engagement and usability.",
      features: ["User Research", "Wireframing", "Prototyping"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            WEB & UX DEVELOPMENT
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            Responsive, performance-driven web design that converts visitors into advocates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass h-full hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="flex items-start mb-6">
                <div className="text-gold-400 mr-4 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mt-1 text-ivory">{service.title}</h3>
                </div>
              </div>
              <p className="text-silver-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-gold-400 mr-2">✦</span>
                    <span className="text-silver-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="text-gold-400 font-semibold flex items-center group"
              >
                Learn more
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebUXDevelopment;