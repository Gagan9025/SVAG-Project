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
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-down">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                {heroData.title}
              </h1>
              <div className="flex justify-center my-6 animate-pulse-slow">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in" data-aos="fade-up" data-aos-delay="200">
                {heroData.description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                {heroData.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center animate-fade-in-up"
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.value}</div>
                    <div className="text-silver-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
                Our Service Offerings
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
                Discover our specialized services designed to elevate your brand and drive business growth.
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesOverview.map((service, index) => (
                <Link
                  key={service.id}
                  to={service.link}
                  className="card-glass h-full hover:scale-105 transition-all duration-300 block animate-fade-in-up hover:shadow-xl hover:border-gold-400 border-2 border-transparent"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mt-1 text-ivory mb-4">{service.title}</h3>
                    <p className="text-silver-400 mb-6">{service.description}</p>
                    <button 
                      className="text-gold-400 font-semibold flex items-center group hover:scale-105 transition-transform duration-300 mb-4"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                    <div className="btn-royal-gold px-6 py-3 text-center inline-block hover:scale-105 transition-transform duration-300 w-full">
                      View Service Details
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/all-services" 
                className="btn-royal-gold px-8 py-4 text-lg inline-block hover:scale-105 transition-transform duration-300"
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400 animate-fade-in-down" data-aos="fade-up">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans animate-fade-in" data-aos="fade-up" data-aos-delay="100">
                Let's start building your success story today with our comprehensive digital services.
              </p>
              
              <div className="mt-10 animate-fade-in-up" data-aos="fade-up" data-aos-delay="500">
                <Link 
                  to="/contact" 
                  className="btn-royal-gold px-8 py-4 text-lg inline-block hover:scale-105 transition-transform duration-300"
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