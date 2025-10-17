import React from 'react';
import { FiArrowRight, FiBox, FiGlobe, FiBarChart2, FiFilm } from 'react-icons/fi';
import { BackgroundBeams } from './ui/background-beams';

const Services = () => {
  const services = [
    {
      icon: <FiBox className="text-2xl" />,
      title: "Brand Identity Design",
      category: "Brand Identity & Visual Design",
      description: "Craft cohesive, memorable brands that earn trust and command attention.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Web Development",
      category: "Web & UX Development",
      description: "Responsive, performance-driven web design that converts visitors into advocates.",
      features: ["Web Design", "E-commerce", "UX/UI"]
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Digital Marketing",
      category: "Digital Marketing & Strategy",
      description: "Align your digital presence with business strategy for sustainable growth.",
      features: ["SEO", "PPC", "Analytics"]
    },
    {
      icon: <FiFilm className="text-2xl" />,
      title: "Motion Graphics",
      category: "Motion & Animation",
      description: "Bring your brand to life with compelling motion graphics and animations.",
      features: ["Motion Graphics", "Video Editing", "Animations"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
      <BackgroundBeams className="absolute inset-0 z-0" showStaticBeams={false} />
      <div className="container mx-auto px-4 relative z-10">
        {/* Adding "Our Services" heading */}
        <div className="text-center mb-4 animate-fade-in-down">
          <h2 className="text-2xl md:text-3xl font-bold text-gold-400 font-heading">
            OUR SERVICES
          </h2>
        </div>
        
        {/* Custom bold heading for "Our Core Services" */}
        <div className="mb-16 text-center animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            OUR CORE SERVICES
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4 animate-pulse">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
            Comprehensive solutions that drive measurable business growth and create lasting impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass h-full hover:scale-105 transition-all duration-300 animate-fade-in-up"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="flex items-start mb-6">
                <div className="text-gold-400 mr-4 mt-1 animate-bounce">{service.icon}</div>
                <div>
                  <span className="text-gold-400 text-sm font-semibold">{service.category}</span>
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
                className="text-gold-400 font-semibold flex items-center group react-icon"
              >
                Learn more
                <FiArrowRight className="ml-2 react-icon" />
              </button>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-20 text-center animate-fade-in-up"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {/* Aligned "Ready to Start?" heading with consistent styling */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
              READY TO START?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
            </h3>
            <div className="flex justify-center my-4 animate-pulse">
              <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
            </div>
          </div>
          <p className="text-xl text-silver-400 mb-8 max-w-3xl mx-auto animate-fade-in">
            Let's discuss your project and create something amazing together.
          </p>
          <button 
            className="btn-gold inline-flex items-center group glow-pulse react-icon"
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