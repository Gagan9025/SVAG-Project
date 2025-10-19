import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ServicesPage = () => {
  // Hero Section Data
  const heroData = {
    title: "Our Premium Services",
    description: "We offer a comprehensive range of digital services designed to transform your brand and drive measurable results. Explore our specialized offerings below.",
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "50+", label: "Happy Clients" },
      { value: "5+", label: "Years Experience" },
      { value: "24h", label: "Response Time" }
    ]
  };

  // Services Overview Data
  const servicesOverview = [
    {
      id: 1,
      title: "Digital Consulting",
      description: "Transform your business with data-driven digital strategies and comprehensive digital transformations.",
      link: "/services/digital-consulting"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Create stunning, high-performance websites that convert visitors into customers with our expert development team.",
      link: "/services/web-development"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Dominate your market with data-driven digital marketing strategies that deliver measurable ROI.",
      link: "/services/digital-marketing"
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Build meaningful connections with your audience through strategic social media management.",
      link: "/services/social-media-marketing"
    },
    {
      id: 5,
      title: "Graphic Designing",
      description: "Transform your brand vision into stunning visual assets that capture attention and build recognition.",
      link: "/services/graphic-design"
    }
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative mobile:py-16 tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-down mobile:mb-12 tablet:mb-16 desktop:mb-20 large:mb-24">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                {heroData.title}
              </h1>
              <div className="flex justify-center my-6 animate-pulse-slow mobile:my-4 tablet:my-5 desktop:my-6 large:my-7">
                <div className="w-16 h-1 bg-gold-400 rounded-full mobile:w-12 tablet:w-16 desktop:w-20 large:w-24"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl" data-aos="fade-up" data-aos-delay="200">
                {heroData.description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto mobile:gap-4 mobile:mt-12 tablet:gap-6 tablet:mt-16 desktop:gap-8 desktop:mt-20 large:gap-10 large:mt-24">
                {heroData.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center animate-fade-in-up"
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2 mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl">{stat.value}</div>
                    <div className="text-silver-400 mobile:text-sm tablet:text-base desktop:text-lg large:text-xl">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 relative mobile:py-16 tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 mobile:mb-12 tablet:mb-16 desktop:mb-20 large:mb-24">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl">
                Our Service Offerings
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse mobile:my-3 tablet:my-4 desktop:my-5 large:my-6">
                <div className="w-8 h-1 bg-gold-400 rounded-full mobile:w-6 tablet:w-8 desktop:w-10 large:w-12"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">
                Discover our specialized services designed to elevate your brand and drive business growth.
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mobile:gap-6 tablet:gap-8 desktop:gap-10 large:gap-12">
              {servicesOverview.map((service, index) => (
                <Link
                  key={service.id}
                  to={service.link}
                  className="card-glass h-full hover:scale-105 transition-all duration-300 block animate-fade-in-up hover:shadow-xl hover:border-gold-400 border-2 border-transparent mobile:card-enhanced tablet:card-enhanced desktop:card-enhanced large:card-enhanced"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="p-6 mobile:p-5 tablet:p-7 desktop:p-8 large:p-10">
                    <h3 className="text-2xl font-bold mt-1 text-ivory mb-4 mobile:text-xl tablet:text-2xl desktop:text-3xl large:text-4xl">{service.title}</h3>
                    <p className="text-silver-400 mb-6 mobile:text-sm tablet:text-base desktop:text-lg large:text-xl">{service.description}</p>
                    <button 
                      className="text-gold-400 font-semibold flex items-center group hover:scale-105 transition-transform duration-300 mb-4 mobile:text-sm tablet:text-base desktop:text-lg large:text-xl"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300 mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6 large:w-7 large:h-7" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                    <div className="btn-royal-gold px-6 py-3 text-center inline-block hover:scale-105 transition-transform duration-300 w-full mobile:px-4 mobile:py-2.5 mobile:text-sm tablet:px-6 tablet:py-3.5 tablet:text-base desktop:px-7 desktop:py-4 desktop:text-lg large:px-8 large:py-5 large:text-xl">
                      View Service Details
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12 mobile:mt-10 tablet:mt-12 desktop:mt-16 large:mt-20">
              <Link 
                to="/all-services" 
                className="btn-royal-gold px-8 py-4 text-lg inline-block hover:scale-105 transition-transform duration-300 mobile:btn-full mobile:px-6 mobile:py-3 mobile:text-base tablet:px-8 tablet:py-4 tablet:text-lg desktop:px-10 desktop:py-5 desktop:text-xl large:px-12 large:py-6 large:text-2xl"
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative mobile:py-16 tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400 animate-fade-in-down mobile:text-2xl tablet:text-3xl desktop:text-4xl large:text-5xl" data-aos="fade-up">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans animate-fade-in mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl" data-aos="fade-up" data-aos-delay="100">
                Let's start building your success story today with our comprehensive digital services.
              </p>
              
              <div className="mt-10 animate-fade-in-up mobile:mt-8 tablet:mt-10 desktop:mt-12 large:mt-16" data-aos="fade-up" data-aos-delay="500">
                <Link 
                  to="/contact" 
                  className="btn-royal-gold px-8 py-4 text-lg inline-block hover:scale-105 transition-transform duration-300 mobile:btn-full mobile:px-6 mobile:py-3 mobile:text-base tablet:px-8 tablet:py-4 tablet:text-lg desktop:px-10 desktop:py-5 desktop:text-xl large:px-12 large:py-6 large:text-2xl"
                >
                  START YOUR PROJECT
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;