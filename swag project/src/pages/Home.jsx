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
                That drive growth, build trust, and create lasting impact.
              </p>
            </div>
            
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
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-glass p-6 lg:p-8" data-aos="fade-left">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gold-400">Our Approach</h3>
                <div className="space-y-4">
                  {['Team Collaboration', 'Innovation Process', 'Creative Solutions'].map((item, index) => (
                    <div key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={100 * index}>
                      <span className="text-gold-400 mr-3 flex-shrink-0">✦</span>
                      <span className="text-silver-300 text-sm lg:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                Comprehensive solutions that drive measurable business growth and create lasting impact
              </p>
            </div>
            
            {/* Service Filter Buttons - Enhanced Design */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
              <button 
                onClick={() => handleServiceFilter('All Services')}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-gold-400 to-yellow-500 text-royal-dark hover:from-yellow-500 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                ALL SERVICES
              </button>
              <button 
                onClick={() => handleServiceFilter('Digital Services')}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-royal-blue to-indigo-700 text-ivory hover:from-indigo-700 hover:to-royal-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                DIGITAL SERVICES
              </button>
              <button 
                onClick={() => handleServiceFilter('Print Services')}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-ivory hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                PRINT SERVICES
              </button>
            </div>

            {/* Enhanced Services Grid - New Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-royal-blue/30 to-royal-dark/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  {/* Service Icon with enhanced styling */}
                  <div className="flex justify-center mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-gold-400/20 to-yellow-500/20 flex items-center justify-center text-2xl lg:text-3xl group-hover:from-gold-400/30 group-hover:to-yellow-500/30 transition-all duration-300 transform group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-center text-ivory group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-silver-400 mb-4 lg:mb-6 text-center text-xs lg:text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Service Features with new styling */}
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
                        </div>
                      </>
                    )}
                    {service.title === "Web & UX Development" && (
                      <>
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
                        </div>
                      </>
                    )}
                    {service.title === "Digital Marketing" && (
                      <>
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
                        </div>
                      </>
                    )}
                    {service.title === "Motion & Animation" && (
                      <>
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
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* View Details Button */}
                  <div className="mt-4 lg:mt-6 text-center">
                    <button 
                      onClick={() => navigate(service.page)}
                      className="text-gold-400 font-semibold text-xs lg:text-sm flex items-center justify-center group-hover:text-yellow-300 transition-colors duration-300"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                Showcasing our latest projects and creative solutions that drive real business results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className="card-glass overflow-hidden hover:scale-105 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
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
                      <span className="text-gold-400 font-semibold">{item.stats}</span>
                      <span className="text-silver-400">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
              <button className="btn-royal-gold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg hover:scale-105 transition-transform duration-300">
                View Full Portfolio
              </button>
            </div>
          </div>
        </section>

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
                Discover why leading brands trust SVAG Design Hub to transform their digital presence
              </p>
            </div>

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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                Ready to transform your business with creativity and strategy? Let's discuss your project and create something amazing together.
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                <a 
                  href="/contact" 
                  className="btn-royal-gold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg inline-block hover:scale-105 transition-transform duration-300"
                >
                  START YOUR PROJECT
                </a>
              </div>
            </div>
            
            {/* Services Overview */}
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
                    </li>
                  </ul>
                </div>
                
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
                    </li>
                  </ul>
                </div>
                
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
                    </li>
                  </ul>
                </div>
                
                <div className="card-glass p-4 lg:p-6" data-aos="fade-up" data-aos-delay="400">
                  <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-ivory">Graphic & Video</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Graphic Designing
                    </li>
                    <li className="flex items-center text-silver-300 text-sm">
                      <span className="text-gold-400 mr-2 text-xs">✓</span> Video Production
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