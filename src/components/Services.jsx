import React from 'react';
import { FiArrowRight, FiBox, FiGlobe, FiBarChart2, FiFilm } from 'react-icons/fi';
import { BackgroundBeams } from './ui/background-beams';

const Services = () => {
  const services = [
    {
      icon: <FiBox className="text-xl xs:text-2xl mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl" />,
      title: "Brand Identity Design",
      category: "Brand Identity & Visual Design",
      description: "Craft cohesive, memorable brands that earn trust and command attention.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: <FiGlobe className="text-xl xs:text-2xl mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl" />,
      title: "Web Development",
      category: "Web & UX Development",
      description: "Responsive, performance-driven web design that converts visitors into advocates.",
      features: ["Web Design", "E-commerce", "UX/UI"]
    },
    {
      icon: <FiBarChart2 className="text-xl xs:text-2xl mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl" />,
      title: "Digital Marketing",
      category: "Digital Marketing & Strategy",
      description: "Align your digital presence with business strategy for sustainable growth.",
      features: ["SEO", "PPC", "Analytics"]
    },
    {
      icon: <FiFilm className="text-xl xs:text-2xl mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl" />,
      title: "Motion Graphics",
      category: "Motion & Animation",
      description: "Bring your brand to life with compelling motion graphics and animations.",
      features: ["Motion Graphics", "Video Editing", "Animations"]
    }
  ];

  return (
    <section id="services" className="py-12 xs:py-16 md:py-20 relative mobile:py-16 tablet:py-20 desktop:py-24 large:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
      <BackgroundBeams className="absolute inset-0 z-0" showStaticBeams={false} />
      <div className="container mx-auto px-4 relative z-10">
        {/* Adding "Our Services" heading */}
        <div className="text-center mb-4 animate-fade-in-down mobile:mb-6 tablet:mb-8 desktop:mb-10 large:mb-12">
          <h2 className="text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold text-gold-400 font-heading mobile:text-xl tablet:text-2xl desktop:text-3xl large:text-4xl">
            OUR SERVICES
          </h2>
        </div>
        
        {/* Custom bold heading for "Our Core Services" */}
        <div className="mb-8 xs:mb-12 md:mb-16 text-center animate-fade-in-down mobile:mb-10 tablet:mb-12 desktop:mb-16 large:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mobile:text-3xl tablet:text-4xl desktop:text-5xl large:text-6xl">
            OUR CORE SERVICES
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-3 xs:my-4 animate-pulse mobile:my-4 tablet:my-5 desktop:my-6 large:my-7">
            <div className="w-6 xs:w-8 h-1 bg-gold-400 rounded-full mobile:w-8 tablet:w-10 desktop:w-12 large:w-14"></div>
          </div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl">
            Comprehensive solutions that drive measurable business growth and create lasting impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 md:gap-8 mobile:gap-6 tablet:gap-8 desktop:gap-10 large:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass h-full hover:scale-105 transition-all duration-300 animate-fade-in-up touch:min-h-64 mobile:card-enhanced tablet:card-enhanced desktop:card-enhanced large:card-enhanced"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="flex items-start mb-3 xs:mb-4 md:mb-6 mobile:mb-4 tablet:mb-5 desktop:mb-6 large:mb-7">
                <div className="text-gold-400 mr-2 xs:mr-3 md:mr-4 mt-1 animate-bounce mobile:mr-3 tablet:mr-4 desktop:mr-5 large:mr-6">{service.icon}</div>
                <div>
                  <span className="text-gold-400 text-xs md:text-sm font-semibold mobile:text-sm tablet:text-base desktop:text-lg large:text-xl">{service.category}</span>
                  <h3 className="text-base xs:text-lg md:text-xl font-bold mt-1 text-ivory mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">{service.title}</h3>
                </div>
              </div>
              <p className="text-silver-400 mb-3 xs:mb-4 md:mb-6 text-xs xs:text-sm md:text-base mobile:text-sm tablet:text-base desktop:text-lg large:text-xl">{service.description}</p>
              <ul className="space-y-1 xs:space-y-2 mb-3 xs:mb-4 md:mb-6 mobile:space-y-2 tablet:space-y-2 desktop:space-y-3 large:space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center animate-fade-in-right mobile:text-sm tablet:text-base desktop:text-lg large:text-xl">
                    <span className="text-gold-400 mr-1 xs:mr-2 react-icon text-xs mobile:text-sm tablet:text-base desktop:text-lg large:text-xl">✦</span>
                    <span className="text-silver-300 text-xs xs:text-sm mobile:text-sm tablet:text-base desktop:text-lg large:text-xl">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="text-gold-400 font-semibold flex items-center group react-icon text-xs xs:text-sm touch:min-h-8 touch:p-2 mobile:text-sm tablet:text-base desktop:text-lg large:text-xl"
              >
                Learn more
                <FiArrowRight className="ml-1 xs:ml-2 react-icon mobile:ml-2 tablet:ml-2 desktop:ml-3 large:ml-3" />
              </button>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-12 xs:mt-16 md:mt-20 text-center animate-fade-in-up mobile:mt-16 tablet:mt-20 desktop:mt-24 large:mt-32"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {/* Aligned "Ready to Start?" heading with consistent styling */}
          <div className="mb-6 md:mb-8 mobile:mb-8 tablet:mb-10 desktop:mb-12 large:mb-16">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl">
              READY TO START?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
            </h3>
            <div className="flex justify-center my-3 xs:my-4 animate-pulse mobile:my-4 tablet:my-5 desktop:my-6 large:my-7">
              <div className="w-6 xs:w-8 h-1 bg-gold-400 rounded-full mobile:w-8 tablet:w-10 desktop:w-12 large:w-14"></div>
            </div>
          </div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-silver-400 mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl">
            Let's discuss your project and create something amazing together.
          </p>
          <button 
            className="btn-gold inline-flex items-center group glow-pulse react-icon w-full xs:w-auto touch:min-h-12 touch:min-w-48 touch:p-4 touch:text-lg mobile:btn-full tablet:btn-enhanced desktop:btn-enhanced large:btn-enhanced"
          >
            Start Your Project
            <FiArrowRight className="ml-2 react-icon mobile:ml-3 tablet:ml-3 desktop:ml-4 large:ml-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;