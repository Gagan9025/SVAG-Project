import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiBox, FiCode, FiBarChart2, FiFilm, FiX, FiMonitor, FiSmartphone, FiTrendingUp, FiImage, FiGlobe, FiSearch, FiUsers, FiAward } from 'react-icons/fi';

const AllServicesPage = () => {
  const [filteredServices, setFilteredServices] = useState(null);

  // Hero Section Data
  const heroData = {
    title: "Transform Your Brand with Strategic Design",
    description: "From digital consulting to graphic design, we craft solutions that don't just look good—they drive real business results. Every service is built on strategy, creativity, and measurable outcomes.",
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "50+", label: "Happy Clients" },
      { value: "5+", label: "Years Experience" },
      { value: "24h", label: "Response Time" }
    ]
  };

  // Services Ecosystem Data
  const ecosystemData = {
    title: "Our Service Ecosystem",
    description: "We don't just provide services—we create comprehensive digital ecosystems that work together to amplify your brand's impact and drive sustainable growth."
  };

  // All Services data
  const allServices = [
    {
      id: 1,
      icon: <FiMonitor className="text-4xl" />,
      title: "Strategy First",
      subtitle: "Digital Consulting",
      tagline: "Right Strategy. Expected Results",
      description: "Transform your business with data-driven digital strategies. We analyze, plan, and execute comprehensive digital transformations that align creative vision with measurable business outcomes.",
      features: ["Strategic Planning", "Digital Transformation", "AI Integration", "Performance Analytics"],
      results: ["Increased ROI by 40%", "Faster Time to Market"],
      link: "/services/digital-consulting"
    },
    {
      id: 2,
      icon: <FiCode className="text-4xl" />,
      title: "Performance Driven",
      subtitle: "Web Development",
      tagline: "Building Your Business Online",
      description: "Create stunning, high-performance websites that convert visitors into customers. From responsive design to e-commerce platforms, we build digital experiences that drive results.",
      features: ["Responsive Design", "E-commerce Solutions", "Performance Optimization", "SEO Integration"],
      results: ["Mobile-First Approach", "Lightning Fast Speed"],
      link: "/services/web-development"
    },
    {
      id: 3,
      icon: <FiBarChart2 className="text-4xl" />,
      title: "Results Focused",
      subtitle: "Digital Marketing",
      tagline: "Bring You to Your Customers",
      description: "Dominate your market with data-driven digital marketing strategies. Our comprehensive approach combines SEO, content marketing, and paid campaigns for maximum visibility and ROI.",
      features: ["SEO & SEM", "Content Strategy", "Paid Advertising", "Conversion Optimization"],
      results: ["Top Search Rankings", "Targeted Audience Reach"],
      link: "/services/digital-marketing"
    },
    {
      id: 4,
      icon: <FiUsers className="text-4xl" />,
      title: "Community Built",
      subtitle: "Social Media Marketing",
      tagline: "Reach Your Customers Soon",
      description: "Build meaningful connections with your audience through strategic social media management. We create engaging content that builds communities and drives brand loyalty.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics & Reporting"],
      results: ["Increased Engagement", "Viral Content Potential"],
      link: "/services/social-media-marketing"
    },
    {
      id: 5,
      icon: <FiImage className="text-4xl" />,
      title: "Creativity First",
      subtitle: "Graphic Designing",
      tagline: "We Draw Your Imagination",
      description: "Transform your brand vision into stunning visual assets. From logos to packaging, we create designs that capture attention, communicate your message, and build brand recognition.",
      features: ["Brand Identity", "Marketing Collateral", "Motion Graphics", "Print & Digital"],
      results: ["Memorable Brand Impact", "Consistent Visual Language"],
      link: "/services/graphic-design"
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

  // CTA Section Data
  const ctaData = {
    title: "Ready to Transform Your Brand?",
    description: "Every service we offer is designed to work together, creating a comprehensive digital ecosystem that drives real business results. Let's start building your success story today.",
    benefits: ["Free Consultation", "Custom Strategy", "Ongoing Support"]
  };

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

        {/* Quick Navigation Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
                Quick Service Navigation
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
                Jump directly to any service category
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
              {allServices.map((service, index) => (
                <Link
                  key={`nav-${service.id}`}
                  to={service.link}
                  className="flex flex-col items-center p-6 card-glass hover:scale-105 transition-all duration-300 animate-fade-in-up hover:shadow-xl hover:border-gold-400 border-2 border-transparent"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  <div className="text-gold-400 mb-4 p-3 rounded-full bg-royal-blue">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ivory text-center mb-3">{service.subtitle}</h3>
                  <button className="btn-royal-gold px-4 py-2 text-sm">
                    View Details
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Ecosystem Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
                {ecosystemData.title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
                {ecosystemData.description}
              </p>
            </div>
            
            {/* Service Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
              <button 
                onClick={() => filterServices('All Services')}
                className={`px-6 py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-gold-400 to-yellow-500 text-royal-dark hover:from-yellow-500 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${filteredServices === null ? 'ring-2 ring-gold-400' : ''}`}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="relative z-10 font-bold">ALL SERVICES</span>
              </button>
              {allServices.map((service, index) => (
                <button 
                  key={service.id}
                  onClick={() => filterServices(service.title)}
                  className={`px-6 py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-royal-blue to-indigo-700 text-ivory hover:from-indigo-700 hover:to-royal-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center ${filteredServices && filteredServices[0]?.id === service.id ? 'ring-2 ring-gold-400' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={350 + index * 50}
                >
                  <span className="mr-2">{service.icon}</span>
                  <span className="relative z-10 font-bold">{service.title.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesToDisplay.map((service, index) => (
                <div
                  key={service.id}
                  className="card-glass h-full hover:scale-105 transition-all duration-300 block animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex flex-col items-center mb-6">
                    <div className="text-gold-400 mb-4 p-4 rounded-full bg-royal-blue animate-bounce">{service.icon}</div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mt-1 text-ivory">{service.title}</h3>
                      <h4 className="text-lg font-semibold text-gold-400">{service.subtitle}</h4>
                      <p className="text-gold-300 font-medium mt-2">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-silver-400 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h5 className="text-ivory font-semibold mb-2">Key Features:</h5>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center animate-fade-in-right">
                          <span className="text-gold-400 mr-2 animate-pulse">✦</span>
                          <span className="text-silver-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h5 className="text-ivory font-semibold mb-2">Expected Results:</h5>
                    <ul className="space-y-2">
                      {service.results.map((result, idx) => (
                        <li key={idx} className="flex items-center animate-fade-in-right">
                          <span className="text-emerald-400 mr-2">✓</span>
                          <span className="text-silver-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.link}
                    className="text-gold-400 font-semibold flex items-center group hover:scale-105 transition-transform duration-300"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  {/* Main CTA Button for Each Service */}
                  <Link 
                    to={service.link}
                    className="mt-4 btn-royal-gold px-6 py-3 text-center inline-block hover:scale-105 transition-transform duration-300 w-full"
                  >
                    View Service Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400 animate-fade-in-down" data-aos="fade-up">
                {ctaData.title}
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans animate-fade-in" data-aos="fade-up" data-aos-delay="100">
                {ctaData.description}
              </p>
              
              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
                {ctaData.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="px-6 py-3 rounded-full bg-royal-purple/50 border border-gold-400/30 text-ivory flex items-center animate-fade-in-up"
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                  >
                    <span className="text-gold-400 mr-2">✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
              
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

export default AllServicesPage;