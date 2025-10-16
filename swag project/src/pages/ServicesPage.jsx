import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiBox, FiCode, FiBarChart2, FiFilm, FiX, FiMonitor, FiSmartphone, FiTrendingUp, FiImage } from 'react-icons/fi';

const ServicesPage = () => {
  const [filteredServices, setFilteredServices] = useState(null);

  // All Services data
  const allServices = [
    {
      id: 1,
      icon: <FiMonitor className="text-2xl" />,
      title: "Digital Consulting",
      description: "Strategic guidance to transform your business for the digital age.",
      features: ["Digital Strategy", "Technology Assessment", "Process Optimization", "Innovation Roadmap"],
      details: "Our digital consulting services help businesses navigate the complexities of digital transformation. We work closely with your team to assess current capabilities, identify opportunities for improvement, and develop a comprehensive roadmap for digital success. Our experts provide strategic guidance on technology adoption, process optimization, and innovation initiatives that align with your business objectives.",
      link: "/services/digital-consulting"
    },
    {
      id: 2,
      icon: <FiCode className="text-2xl" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"],
      details: "We create modern, responsive websites and web applications tailored to your specific business needs. Our development process focuses on performance, security, and user experience. From simple landing pages to complex web applications, we use the latest technologies to build solutions that help achieve your business goals. We also provide ongoing maintenance and support to ensure your digital assets continue to perform optimally.",
      link: "/services/web-development"
    },
    {
      id: 3,
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that boost your online presence and drive growth.",
      features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Analytics & Reporting"],
      details: "Our digital marketing services are designed to increase your online visibility, attract qualified leads, and drive conversions. We combine data-driven strategies with creative execution to deliver measurable results. Our approach includes search engine optimization, pay-per-click advertising, content marketing, email campaigns, and comprehensive analytics to track and optimize performance. We continuously monitor and adjust campaigns to maximize ROI.",
      link: "/services/digital-marketing"
    },
    {
      id: 4,
      icon: <FiSmartphone className="text-2xl" />,
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand across social media platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Influencer Partnerships"],
      details: "We help brands build meaningful connections with their audiences through strategic social media marketing. Our services include content creation, community management, paid advertising campaigns, and influencer partnerships. We develop platform-specific strategies for Facebook, Instagram, Twitter, LinkedIn, and TikTok to maximize engagement and reach. Our team creates compelling content that resonates with your target audience and drives brand awareness.",
      link: "/services/social-media-marketing"
    },
    {
      id: 5,
      icon: <FiImage className="text-2xl" />,
      title: "Graphic Designing",
      description: "Visually stunning designs that communicate your brand message effectively.",
      features: ["Brand Identity", "Marketing Materials", "Digital Assets", "Print Design"],
      details: "Our graphic design services help brands communicate their message through visually compelling designs. We specialize in creating brand identities, marketing materials, digital assets, and print designs that capture attention and convey your brand values. Our designers work closely with clients to understand their vision and create designs that resonate with their target audience. From logos and business cards to social media graphics and packaging designs, we deliver high-quality visuals that make an impact.",
      link: "/services/graphic-designing"
    }
  ];

  const filterServices = (serviceTitle) => {
    if (serviceTitle === 'All Services') {
      setFilteredServices(null);
    } else {
      const filtered = allServices.filter(service => service.title === serviceTitle);
      setFilteredServices(filtered);
    }
  };

  // Get services to display (filtered or all)
  const servicesToDisplay = filteredServices || allServices;

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Simplified animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* All Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                ALL SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive digital solutions to elevate your brand and drive growth
              </p>
              
              {/* Service Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <button 
                  onClick={() => filterServices('All Services')}
                  className={`btn-royal-gold px-6 py-3 text-sm md:text-base ${filteredServices === null ? 'ring-2 ring-gold-400' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  ALL SERVICES
                </button>
                {allServices.map((service, index) => (
                  <button 
                    key={service.id}
                    onClick={() => filterServices(service.title)}
                    className={`btn-royal-gold px-6 py-3 text-sm md:text-base ${filteredServices && filteredServices[0]?.id === service.id ? 'ring-2 ring-gold-400' : ''}`}
                    data-aos="fade-up"
                    data-aos-delay={350 + index * 50}
                  >
                    {service.title.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesToDisplay.map((service, index) => (
                <Link
                  key={service.id}
                  to={service.link}
                  className="card-glass h-full hover:scale-105 transition-transform duration-300 block"
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </Link>
              ))}
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