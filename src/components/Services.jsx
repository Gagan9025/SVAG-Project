import React from 'react';
import { FiArrowRight, FiBox, FiGlobe, FiBarChart2, FiFilm } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiBox className="text-xl xs:text-2xl" />,
      title: "Brand Identity Design",
      category: "Brand Identity & Visual Design",
      description: "Craft cohesive, memorable brands that earn trust and command attention.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: <FiGlobe className="text-xl xs:text-2xl" />,
      title: "Web Development",
      category: "Web & UX Development",
      description: "Responsive, performance-driven web design that converts visitors into advocates.",
      features: ["Web Design", "E-commerce", "UX/UI"]
    },
    {
      icon: <FiBarChart2 className="text-xl xs:text-2xl" />,
      title: "Digital Marketing",
      category: "Digital Marketing & Strategy",
      description: "Align your digital presence with business strategy for sustainable growth.",
      features: ["SEO", "PPC", "Analytics"]
    },
    {
      icon: <FiFilm className="text-xl xs:text-2xl" />,
      title: "Motion Graphics",
      category: "Motion & Animation",
      description: "Bring your brand to life with compelling motion graphics and animations.",
      features: ["Motion Graphics", "Video Editing", "Animations"]
    }
  ];

  return (
    <section id="services" className="py-12 xs:py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Adding "Our Services" heading */}
        <div className="text-center mb-4 animate-fade-in-down">
          <h2 className="text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold text-gold-400 font-heading">
            OUR SERVICES
          </h2>
        </div>
        
        {/* Custom bold heading for "Our Core Services" */}
        <div className="mb-8 xs:mb-12 md:mb-16 text-center animate-fade-in-down">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            OUR CORE SERVICES
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-3 xs:my-4 animate-pulse">
            <div className="w-6 xs:w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
            Comprehensive solutions that drive measurable business growth and create lasting impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass h-full hover:scale-105 transition-all duration-300 animate-fade-in-up touch:min-h-64"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="flex items-start mb-3 xs:mb-4 md:mb-6">
                <div className="text-gold-400 mr-2 xs:mr-3 md:mr-4 mt-1 animate-bounce">{service.icon}</div>
                <div>
                  <span className="text-gold-400 text-xs md:text-sm font-semibold">{service.category}</span>
                  <h3 className="text-base xs:text-lg md:text-xl font-bold mt-1 text-ivory">{service.title}</h3>
                </div>
              </div>
              <p className="text-silver-400 mb-3 xs:mb-4 md:mb-6 text-xs xs:text-sm md:text-base">{service.description}</p>
              <ul className="space-y-1 xs:space-y-2 mb-3 xs:mb-4 md:mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center animate-fade-in-right">
                    <span className="text-gold-400 mr-1 xs:mr-2 react-icon text-xs">✦</span>
                    <span className="text-silver-300 text-xs xs:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="text-gold-400 font-semibold flex items-center group react-icon text-xs xs:text-sm touch:min-h-8 touch:p-2"
              >
                Learn more
                <FiArrowRight className="ml-1 xs:ml-2 react-icon" />
              </button>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-12 xs:mt-16 md:mt-20 text-center animate-fade-in-up"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {/* Aligned "Ready to Start?" heading with consistent styling */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
              READY TO START?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
            </h3>
            <div className="flex justify-center my-3 xs:my-4 animate-pulse">
              <div className="w-6 xs:w-8 h-1 bg-gold-400 rounded-full"></div>
            </div>
          </div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-silver-400 mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in">
            Let's discuss your project and create something amazing together.
          </p>
          <button 
            className="btn-gold inline-flex items-center group glow-pulse react-icon w-full xs:w-auto touch:min-h-12 touch:min-w-48 touch:p-4 touch:text-lg"
          >
            Start Your Project
            <FiArrowRight className="ml-2 react-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;