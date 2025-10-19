import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import AOS from 'aos';

const Home = () => {
  const navigate = useNavigate();
  
  // Function to handle service filter navigation
  const handleServiceFilter = (filter) => {
    navigate('/what-we-do', { state: { filter } });
  };

  // Services data
  const services = [
    {
      title: "Brand Identity Design",
      description: "Craft cohesive, memorable brands that earn trust and command attention.",
      icon: "🎨",
      page: "/services/graphic-design"
    },
    {
      title: "Web & UX Development",
      description: "Responsive, performance-driven web design that converts visitors into advocates.",
      icon: "💻",
      page: "/services/web-development"
    },
    {
      title: "Digital Marketing",
      description: "Align your digital presence with business strategy for sustainable growth.",
      icon: "📈",
      page: "/services/digital-marketing"
    },
    {
      title: "Motion & Animation",
      description: "Bring your brand to life with compelling motion graphics and animations.",
      icon: "🎬",
      page: "/services/digital-marketing"
    }
  ];

  // Portfolio data
  const portfolioItems = [
    {
      title: "TechCorp Rebrand",
      category: "Branding",
      description: "Complete brand transformation for a leading tech company",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      stats: "40% Growth",
      duration: "6 Weeks"
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      stats: "10K+ Users",
      duration: "200% Sales"
    },
    {
      title: "Product Explainer",
      category: "Motion Graphics",
      description: "Engaging video content that explains complex products",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      stats: "50K Views",
      duration: "95% Engagement"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "SVAG Design Hub transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. Our new website has increased our conversion rates by 40%.",
      author: "Sarah Johnson",
      position: "CEO, TechFlow Solutions"
    },
    {
      quote: "Working with SVAG was a game-changer for our startup. They understood our vision perfectly and delivered a stunning website that perfectly represents our innovative approach.",
      author: "Michael Chen",
      position: "Founder, InnovateLab"
    },
    {
      quote: "The team at SVAG Design Hub is incredibly professional and talented. They delivered our e-commerce platform on time and within budget. Our customers love the new user experience!",
      author: "Emily Rodriguez",
      position: "Marketing Director, StyleHub"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-royal-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
<<<<<<< HEAD
        {/* About Section - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12 mobile:mb-10 tablet:mb-12 desktop:mb-16 large:mb-20">
              <h2 className="mobile:page-title tablet:text-3xl desktop:text-4xl large:text-5xl">WE TRANSFORM IDEAS INTO POWERFUL DIGITAL EXPERIENCES</h2>
              <div className="flex justify-center my-3 mobile:my-2 tablet:my-3 desktop:my-4 large:my-5">
                <div className="w-8 h-1 bg-gold-400 rounded-full mobile:w-6 tablet:w-8 desktop:w-10 large:w-12"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-6 max-w-3xl mx-auto font-sans mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">
=======
        {/* About Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 relative inline-block font-heading text-gold-400" data-aos="fade-up">
                WE TRANSFORM IDEAS INTO POWERFUL DIGITAL EXPERIENCES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                That drive growth, build trust, and create lasting impact.
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mobile:gap-6 max-w-6xl mx-auto tablet:gap-8 desktop:gap-10 large:gap-12">
              <div className="card-glass p-6 mobile:p-5 mobile:content-block touch:card-enhanced tablet:p-8 desktop:p-10 large:p-12" data-aos="fade-right">
                <h3 className="mobile:content-title tablet:text-2xl desktop:text-3xl large:text-4xl">Our Mission</h3>
                <h4 className="text-lg mobile:text-xl font-semibold mb-4 text-ivory mobile:text-xl tablet:text-2xl desktop:text-3xl large:text-4xl">Empowering Business Growth Through Creative Excellence</h4>
                <p className="mobile:content-text tablet:text-lg desktop:text-xl large:text-2xl">
                  We empower businesses through identity design, strategic digital solutions, tech-powered platforms, and animated storytelling—delivering impact that resonates.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 tablet:gap-4 desktop:gap-5 large:gap-6">
                  {['Strategic Design Thinking', 'Data-Driven Solutions', 'Innovation at Core', 'Business Strategy'].map((item, index) => (
                    <div key={index} className="flex items-center touch:p-3 mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl" data-aos="fade-up" data-aos-delay={100 * index}>
                      <span className="text-gold-400 mr-2 touch:text-lg mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">✦</span>
                      <span className="text-silver-300 text-sm mobile:text-base touch:text-base tablet:text-lg desktop:text-xl large:text-2xl">{item}</span>
=======
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <div className="card-glass p-6 lg:p-8" data-aos="fade-right">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gold-400">Our Mission</h3>
                <h4 className="text-lg lg:text-xl font-semibold mb-4 text-ivory">Empowering Business Growth Through Creative Excellence</h4>
                <p className="text-silver-400 mb-6 leading-relaxed">
                  We empower businesses through identity design, strategic digital solutions, tech-powered platforms, and animated storytelling—delivering impact that resonates.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {['Strategic Design Thinking', 'Data-Driven Solutions', 'Innovation at Core', 'Business Strategy'].map((item, index) => (
                    <div key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={100 * index}>
                      <span className="text-gold-400 mr-2 flex-shrink-0">✦</span>
                      <span className="text-silver-300 text-sm lg:text-base">{item}</span>
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    </div>
                  ))}
                </div>
              </div>
              
<<<<<<< HEAD
              <div className="card-glass p-6 mobile:p-5 mobile:content-block touch:card-enhanced tablet:p-8 desktop:p-10 large:p-12" data-aos="fade-left">
                <h3 className="mobile:content-title tablet:text-2xl desktop:text-3xl large:text-4xl">Our Approach</h3>
                <div className="grid grid-cols-1 gap-3 mt-4 tablet:gap-4 desktop:gap-5 large:gap-6">
                  {['Team Collaboration', 'Innovation Process', 'Creative Solutions'].map((item, index) => (
                    <div key={index} className="flex items-center touch:p-3 mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl" data-aos="fade-up" data-aos-delay={100 * index}>
                      <span className="text-gold-400 mr-2 touch:text-lg mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">✦</span>
                      <span className="text-silver-300 text-sm mobile:text-base touch:text-base tablet:text-lg desktop:text-xl large:text-2xl">{item}</span>
=======
              <div className="card-glass p-6 lg:p-8" data-aos="fade-left">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gold-400">Our Approach</h3>
                <div className="space-y-4">
                  {['Team Collaboration', 'Innovation Process', 'Creative Solutions'].map((item, index) => (
                    <div key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={100 * index}>
                      <span className="text-gold-400 mr-3 flex-shrink-0">✦</span>
                      <span className="text-silver-300 text-sm lg:text-base">{item}</span>
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Section - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-12 mobile:mb-10 tablet:mb-12 desktop:mb-16 large:mb-20">
              <h2 className="mobile:page-title tablet:text-3xl desktop:text-4xl large:text-5xl">OUR CORE SERVICES</h2>
              <div className="flex justify-center my-3 mobile:my-2 tablet:my-3 desktop:my-4 large:my-5">
                <div className="w-8 h-1 bg-gold-400 rounded-full mobile:w-6 tablet:w-8 desktop:w-10 large:w-12"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">
=======
        {/* Services Section - Redesigned */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 relative inline-block font-heading text-gold-400" data-aos="fade-up">
                OUR CORE SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                Comprehensive solutions that drive measurable business growth and create lasting impact
              </p>
            </div>
            
            {/* Service Filter Buttons - Enhanced Design */}
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10 mobile:gap-3 tablet:gap-4 desktop:gap-5 large:gap-6">
              <button 
                onClick={() => handleServiceFilter('All Services')}
                className="px-5 py-2.5 mobile:px-4 mobile:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-gold-400 to-yellow-500 text-royal-dark hover:from-yellow-500 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch:active-scale-md touch:min-h-12 touch:min-w-12 touch:p-4 touch:btn-enhanced mobile:btn-full tablet:px-6 tablet:py-3.5 desktop:px-7 desktop:py-4 large:px-8 large:py-5"
=======
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
              <button 
                onClick={() => handleServiceFilter('All Services')}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-gold-400 to-yellow-500 text-royal-dark hover:from-yellow-500 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              >
                <span className="relative z-10 font-bold text-sm mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl">ALL SERVICES</span>
              </button>
              <button 
                onClick={() => handleServiceFilter('Digital Services')}
<<<<<<< HEAD
                className="px-5 py-2.5 mobile:px-4 mobile:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-royal-blue to-indigo-700 text-ivory hover:from-indigo-700 hover:to-royal-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch:active-scale-md touch:min-h-12 touch:min-w-12 touch:p-4 touch:btn-enhanced mobile:btn-full tablet:px-6 tablet:py-3.5 desktop:px-7 desktop:py-4 large:px-8 large:py-5"
=======
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-royal-blue to-indigo-700 text-ivory hover:from-indigo-700 hover:to-royal-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              >
                <span className="relative z-10 font-bold text-sm mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl">DIGITAL SERVICES</span>
              </button>
              <button 
                onClick={() => handleServiceFilter('Print Services')}
<<<<<<< HEAD
                className="px-5 py-2.5 mobile:px-4 mobile:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-ivory hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch:active-scale-md touch:min-h-12 touch:min-w-12 touch:p-4 touch:btn-enhanced mobile:btn-full tablet:px-6 tablet:py-3.5 desktop:px-7 desktop:py-4 large:px-8 large:py-5"
=======
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-ivory hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              >
                <span className="relative z-10 font-bold text-sm mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl">PRINT SERVICES</span>
              </button>
            </div>

            {/* Enhanced Services Grid - New Design */}
<<<<<<< HEAD
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mobile:gap-4 mt-6 tablet:gap-6 desktop:gap-8 large:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-royal-blue/30 to-royal-dark/50 backdrop-blur-sm rounded-2xl p-5 mobile:p-4 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group touch:active-scale-md touch:card-enhanced tablet:p-6 desktop:p-7 large:p-8"
=======
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-royal-blue/30 to-royal-dark/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  {/* Service Icon with enhanced styling */}
<<<<<<< HEAD
                  <div className="flex justify-center mb-5 mobile:mb-4 tablet:mb-6 desktop:mb-7 large:mb-8">
                    <div className="w-16 h-16 mobile:w-14 mobile:h-14 rounded-full bg-gradient-to-br from-gold-400/20 to-yellow-500/20 flex items-center justify-center text-2xl mobile:text-xl group-hover:from-gold-400/30 group-hover:to-yellow-500/30 transition-all duration-300 transform group-hover:scale-110 touch:text-3xl tablet:w-20 tablet:h-20 tablet:text-3xl desktop:w-24 desktop:h-24 desktop:text-4xl large:w-28 large:h-28 large:text-5xl">
=======
                  <div className="flex justify-center mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-gold-400/20 to-yellow-500/20 flex items-center justify-center text-2xl lg:text-3xl group-hover:from-gold-400/30 group-hover:to-yellow-500/30 transition-all duration-300 transform group-hover:scale-110">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Title */}
<<<<<<< HEAD
                  <h3 className="text-lg mobile:text-xl font-bold mb-3 text-center text-ivory group-hover:text-gold-400 transition-colors duration-300 touch:text-2xl tablet:text-2xl desktop:text-3xl large:text-4xl">
=======
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-center text-ivory group-hover:text-gold-400 transition-colors duration-300">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
<<<<<<< HEAD
                  <p className="text-silver-400 mb-5 text-center text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">
=======
                  <p className="text-silver-400 mb-4 lg:mb-6 text-center text-xs lg:text-sm leading-relaxed">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    {service.description}
                  </p>
                  
                  {/* Service Features with new styling */}
<<<<<<< HEAD
                  <div className="mt-4 space-y-2 tablet:space-y-3 desktop:space-y-4 large:space-y-5">
                    {service.title === "Brand Identity Design" && (
                      <>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Logo Design</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Brand Guidelines</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Visual Identity</span>
=======
                  <div className="space-y-2">
                    {service.title === "Brand Identity Design" && (
                      <>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Logo Design</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Brand Guidelines</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Visual Identity</span>
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                        </div>
                      </>
                    )}
                    {service.title === "Web & UX Development" && (
                      <>
<<<<<<< HEAD
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Web Design</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">E-commerce</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">UX/UI</span>
=======
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Web Design</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">E-commerce</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">UX/UI</span>
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                        </div>
                      </>
                    )}
                    {service.title === "Digital Marketing" && (
                      <>
<<<<<<< HEAD
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">SEO</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">PPC</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Analytics</span>
=======
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">SEO</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">PPC</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Analytics</span>
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                        </div>
                      </>
                    )}
                    {service.title === "Motion & Animation" && (
                      <>
<<<<<<< HEAD
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Motion Graphics</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Video Editing</span>
                        </div>
                        <div className="flex items-center p-3 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300 touch:p-4 mobile:p-2.5 tablet:p-4 desktop:p-5 large:p-6">
                          <span className="text-gold-400 mr-2 text-lg touch:text-xl mobile:text-base tablet:text-xl desktop:text-2xl large:text-3xl">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm touch:text-base tablet:text-base desktop:text-lg large:text-xl">Animations</span>
=======
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Motion Graphics</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Video Editing</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-sm">✓</span>
                          <span className="text-silver-300 text-xs lg:text-sm">Animations</span>
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* View Details Button */}
<<<<<<< HEAD
                  <div className="mt-5 text-center">
                    <button 
                      onClick={() => navigate(service.page)}
                      className="text-gold-400 font-semibold text-sm flex items-center justify-center group-hover:text-yellow-300 transition-colors duration-300 touch:text-base touch:p-3 mobile:text-xs tablet:text-sm desktop:text-base large:text-lg"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300 touch:text-lg mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6 large:w-7 large:h-7" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
=======
                  <div className="mt-4 lg:mt-6 text-center">
                    <button 
                      onClick={() => navigate(service.page)}
                      className="text-gold-400 font-semibold text-xs lg:text-sm flex items-center justify-center group-hover:text-yellow-300 transition-colors duration-300"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Portfolio Section - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-12 mobile:mb-10 tablet:mb-12 desktop:mb-16 large:mb-20">
              <h2 className="mobile:page-title tablet:text-3xl desktop:text-4xl large:text-5xl">FEATURED WORK</h2>
              <div className="flex justify-center my-3 mobile:my-2 tablet:my-3 desktop:my-4 large:my-5">
                <div className="w-8 h-1 bg-gold-400 rounded-full mobile:w-6 tablet:w-8 desktop:w-10 large:w-12"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">
=======
        {/* Portfolio Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 relative inline-block font-heading text-gold-400" data-aos="fade-up">
                FEATURED WORK
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                Showcasing our latest projects and creative solutions that drive real business results
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mobile:gap-4 tablet:gap-6 desktop:gap-8 large:gap-10">
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className="card-glass overflow-hidden hover:scale-105 transition-all duration-300 touch:active-scale-md touch:card-enhanced tablet:p-6 desktop:p-7 large:p-8"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
<<<<<<< HEAD
                      className="w-full h-48 mobile:h-40 object-cover touch:h-44 tablet:h-52 desktop:h-60 large:h-64"
                    />
                    <div className="absolute top-3 right-3 bg-gold-400 text-royal-dark px-2.5 py-1 rounded-full text-xs font-semibold touch:text-sm mobile:text-xs tablet:top-4 tablet:right-4 tablet:px-3 tablet:py-1.5 tablet:text-sm desktop:top-5 desktop:right-5 desktop:px-4 desktop:py-2 desktop:text-base large:top-6 large:right-6 large:px-5 large:py-2.5 large:text-lg">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-5 mobile:p-4 tablet:p-5 desktop:p-6 large:p-7">
                    <h3 className="text-lg mobile:text-xl font-bold mb-2 text-ivory touch:text-2xl tablet:text-2xl desktop:text-3xl large:text-4xl">{item.title}</h3>
                    <p className="text-silver-400 text-sm mobile:text-xs mb-4 touch:text-base tablet:text-sm desktop:text-base large:text-lg">{item.description}</p>
                    <div className="flex justify-between text-xs mobile:text-xs touch:text-sm tablet:text-sm desktop:text-base large:text-lg">
=======
                      className="w-full h-48 sm:h-56 lg:h-60 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-gold-400 text-royal-dark px-2 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold mb-2 text-ivory">{item.title}</h3>
                    <p className="text-silver-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex justify-between text-xs lg:text-sm">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                      <span className="text-gold-400 font-semibold">{item.stats}</span>
                      <span className="text-silver-400">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="text-center mt-10 mobile:mt-8 tablet:mt-10 desktop:mt-12 large:mt-16">
              <button className="btn-royal-gold px-6 py-3 mobile:btn-full text-lg hover:scale-105 transition-transform duration-300 touch:active-scale-md touch:btn-enhanced tablet:px-8 tablet:py-4 tablet:text-xl desktop:px-10 desktop:py-5 desktop:text-2xl large:px-12 large:py-6 large:text-3xl">
=======
            <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
              <button className="btn-royal-gold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg hover:scale-105 transition-transform duration-300">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                View Full Portfolio
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Testimonials Section - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-12 mobile:mb-10 tablet:mb-12 desktop:mb-16 large:mb-20">
              <h2 className="mobile:page-title tablet:text-3xl desktop:text-4xl large:text-5xl">TESTIMONIALS</h2>
              <div className="flex justify-center my-3 mobile:my-2 tablet:my-3 desktop:my-4 large:my-5">
                <div className="w-8 h-1 bg-gold-400 rounded-full mobile:w-6 tablet:w-8 desktop:w-10 large:w-12"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans mobile:text-lg tablet:text-xl desktop:text-2xl large:text-3xl">
                What Our Clients Say
              </p>
              <p className="text-base mobile:text-lg text-silver-400 mt-2 max-w-2xl mx-auto font-sans mobile:text-base tablet:text-lg desktop:text-xl large:text-2xl">
=======
        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 relative inline-block font-heading text-gold-400" data-aos="fade-up">
                TESTIMONIALS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                What Our Clients Say
              </p>
              <p className="text-base sm:text-lg text-silver-400 mt-2 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="200">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                Discover why leading brands trust SVAG Design Hub to transform their digital presence
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mobile:gap-4 max-w-6xl mx-auto tablet:gap-6 desktop:gap-8 large:gap-10">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="card-glass p-6 mobile:p-5 hover:scale-105 transition-all duration-300 touch:active-scale-md touch:card-enhanced tablet:p-7 desktop:p-8 large:p-10"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-gold-400 text-4xl mb-3 touch:text-5xl mobile:text-3xl tablet:text-4xl desktop:text-5xl large:text-6xl">❝</div>
                  <p className="text-silver-300 mb-5 italic text-sm mobile:text-base touch:text-lg tablet:text-base desktop:text-lg large:text-xl">"{testimonial.quote}"</p>
                  <div className="border-t border-gold-400/20 pt-4">
                    <h4 className="text-base mobile:text-lg font-bold text-ivory touch:text-xl tablet:text-lg desktop:text-xl large:text-2xl">{testimonial.author}</h4>
                    <p className="text-gold-400 text-xs mobile:text-sm touch:text-base tablet:text-sm desktop:text-base large:text-lg">{testimonial.position}</p>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="card-glass p-6 lg:p-8 hover:scale-105 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-gold-400 text-4xl lg:text-5xl mb-4">❝</div>
                  <p className="text-silver-300 mb-6 italic text-sm lg:text-base leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-gold-400/20 pt-4">
                    <h4 className="text-base lg:text-lg font-bold text-ivory">{testimonial.author}</h4>
                    <p className="text-gold-400 text-xs lg:text-sm">{testimonial.position}</p>
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section tablet:py-20 desktop:py-24 large:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mobile:page-title tablet:text-3xl desktop:text-4xl large:text-5xl">READY TO START?</h2>
              <h3 className="text-xl mobile:text-2xl md:text-3xl font-bold mb-5 text-ivory" data-aos="fade-up" data-aos-delay="100">
                Ready to Elevate Your Brand?
              </h3>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 mb-6 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="200">
=======
        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                READY TO START?
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-ivory" data-aos="fade-up" data-aos-delay="100">
                Ready to Elevate Your Brand?
              </h3>
              <p className="text-lg sm:text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                Ready to transform your business with creativity and strategy? Let's discuss your project and create something amazing together.
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                <a 
                  href="/contact" 
<<<<<<< HEAD
                  className="btn-royal-gold px-6 py-3 mobile:btn-full text-lg inline-block hover:scale-105 transition-transform duration-300 touch:active-scale tablet:px-8 tablet:py-4 tablet:text-xl desktop:px-10 desktop:py-5 desktop:text-2xl large:px-12 large:py-6 large:text-3xl"
=======
                  className="btn-royal-gold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg inline-block hover:scale-105 transition-transform duration-300"
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                >
                  START YOUR PROJECT
                </a>
              </div>
            </div>
            
            {/* Services Overview */}
<<<<<<< HEAD
            <div className="mt-16 max-w-6xl mx-auto mobile:mt-12 tablet:mt-16 desktop:mt-20 large:mt-24">
              <h3 className="text-xl mobile:text-2xl md:text-3xl font-bold text-center mb-10 text-gold-400" data-aos="fade-up">
                Our Comprehensive Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mobile:gap-4 tablet:gap-6 desktop:gap-8 large:gap-10">
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory tablet:text-xl desktop:text-2xl large:text-3xl">Digital Consulting</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Digital Strategy
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Digital Transformation Consulting
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Operational Excellence through Digitalisation
=======
            <div className="mt-16 lg:mt-20 max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 text-gold-400" data-aos="fade-up">
                Our Comprehensive Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="card-glass p-4 lg:p-6" data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-ivory">Digital Consulting</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Digital Strategy
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Digital Transformation
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Operational Excellence
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    </li>
                  </ul>
                </div>
                
<<<<<<< HEAD
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory tablet:text-xl desktop:text-2xl large:text-3xl">Digital Marketing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Social Media Management
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Online Marketing
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> SEO & Analytics
=======
                <div className="card-glass p-4 lg:p-6" data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-ivory">Digital Marketing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Social Media Management
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Online Marketing
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> SEO & Analytics
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    </li>
                  </ul>
                </div>
                
<<<<<<< HEAD
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="300">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory tablet:text-xl desktop:text-2xl large:text-3xl">Web Development</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Website Development
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> e-commerce Solutions
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Website Re-designing
=======
                <div className="card-glass p-4 lg:p-6" data-aos="fade-up" data-aos-delay="300">
                  <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-ivory">Web Development</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Website Development
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> E-commerce Solutions
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Website Re-designing
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    </li>
                  </ul>
                </div>
                
<<<<<<< HEAD
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="400">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory tablet:text-xl desktop:text-2xl large:text-3xl">Graphic & Video</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Graphic Designing
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base tablet:text-base desktop:text-lg large:text-xl">
                      <span className="text-gold-400 mr-2">✓</span> Video Production and Editing
=======
                <div className="card-glass p-4 lg:p-6" data-aos="fade-up" data-aos-delay="400">
                  <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-ivory">Graphic & Video</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Graphic Designing
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Video Production
>>>>>>> ddb2044689f676b46da20b315d5a008e709912fb
                    </li>
                  </ul>
                </div>
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

export default Home;