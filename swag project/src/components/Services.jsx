import React from 'react';
import SectionTitle from './SectionTitle';
import { FiArrowRight, FiBox, FiGlobe, FiBarChart2, FiFilm } from 'react-icons/fi';

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
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Our Core Services" 
          subtitle="Comprehensive solutions that drive measurable business growth and create lasting impact"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <span className="text-gold-400 text-sm font-semibold">{service.category}</span>
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
        
        <div 
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Elevate Your Brand?</h3>
          <p className="text-xl text-silver-400 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <button 
            className="btn-gold inline-flex items-center group glow-pulse"
          >
            Start Your Project
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;