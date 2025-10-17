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
    <div className="min-h-screen flex flex-col">
      {/* Static background instead of animated background */}
      <div className="static-background overflow-hidden">
        {/* Removed animated particles and orbs to stop jumping */}
      </div>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section className="py-16 mobile:section-py relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12 mobile:mb-10">
              <h2 className="text-2xl mobile:text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                WE TRANSFORM IDEAS INTO POWERFUL DIGITAL EXPERIENCES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-6 max-w-3xl mx-auto font-sans">
                That drive growth, build trust, and create lasting impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mobile:gap-6 max-w-6xl mx-auto">
              <div className="card-glass p-6 mobile:p-5" data-aos="fade-right">
                <h3 className="text-xl mobile:text-2xl font-bold mb-5 text-gold-400">Our Mission</h3>
                <h4 className="text-lg mobile:text-xl font-semibold mb-4 text-ivory">Empowering Business Growth Through Creative Excellence</h4>
                <p className="text-silver-400 mb-5 text-sm mobile:text-base">
                  We empower businesses through identity design, strategic digital solutions, tech-powered platforms, and animated storytelling—delivering impact that resonates.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Strategic Design Thinking', 'Data-Driven Solutions', 'Innovation at Core', 'Business Strategy'].map((item, index) => (
                    <div key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={100 * index}>
                      <span className="text-gold-400 mr-2">✦</span>
                      <span className="text-silver-300 text-sm mobile:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-glass p-6 mobile:p-5" data-aos="fade-left">
                <h3 className="text-xl mobile:text-2xl font-bold mb-5 text-gold-400">Our Approach</h3>
                <div className="grid grid-cols-1 gap-3">
                  {['Team Collaboration', 'Innovation Process', 'Creative Solutions'].map((item, index) => (
                    <div key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={100 * index}>
                      <span className="text-gold-400 mr-2">✦</span>
                      <span className="text-silver-300 text-sm mobile:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Redesigned */}
        <section className="py-16 mobile:section-py relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-4 relative z-10">
            <div className="text-center mb-12 mobile:mb-10">
              <h2 className="text-2xl mobile:text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR CORE SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive solutions that drive measurable business growth and create lasting impact
              </p>
            </div>
            
            {/* Service Filter Buttons - Enhanced Design */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10 mobile:gap-2">
              <button 
                onClick={() => handleServiceFilter('All Services')}
                className="px-5 py-2.5 mobile:px-4 mobile:py-2 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-gold-400 to-yellow-500 text-royal-dark hover:from-yellow-500 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch:active-scale touch:min-h-10"
              >
                <span className="relative z-10 font-bold text-sm mobile:text-base">ALL SERVICES</span>
              </button>
              <button 
                onClick={() => handleServiceFilter('Digital Services')}
                className="px-5 py-2.5 mobile:px-4 mobile:py-2 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-royal-blue to-indigo-700 text-ivory hover:from-indigo-700 hover:to-royal-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch:active-scale touch:min-h-10"
              >
                <span className="relative z-10 font-bold text-sm mobile:text-base">DIGITAL SERVICES</span>
              </button>
              <button 
                onClick={() => handleServiceFilter('Print Services')}
                className="px-5 py-2.5 mobile:px-4 mobile:py-2 rounded-full font-semibold relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-ivory hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch:active-scale touch:min-h-10"
              >
                <span className="relative z-10 font-bold text-sm mobile:text-base">PRINT SERVICES</span>
              </button>
            </div>

            {/* Enhanced Services Grid - New Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mobile:gap-4 mt-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-royal-blue/30 to-royal-dark/50 backdrop-blur-sm rounded-2xl p-5 mobile:p-4 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group touch:active-scale"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  {/* Service Icon with enhanced styling */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 mobile:w-14 mobile:h-14 rounded-full bg-gradient-to-br from-gold-400/20 to-yellow-500/20 flex items-center justify-center text-2xl mobile:text-xl group-hover:from-gold-400/30 group-hover:to-yellow-500/30 transition-all duration-300 transform group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-lg mobile:text-xl font-bold mb-3 text-center text-ivory group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-silver-400 mb-5 text-center text-xs mobile:text-sm">
                    {service.description}
                  </p>
                  
                  {/* Service Features with new styling */}
                  <div className="mt-4 space-y-2">
                    {service.title === "Brand Identity Design" && (
                      <>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Logo Design</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Brand Guidelines</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Visual Identity</span>
                        </div>
                      </>
                    )}
                    {service.title === "Web & UX Development" && (
                      <>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Web Design</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">E-commerce</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">UX/UI</span>
                        </div>
                      </>
                    )}
                    {service.title === "Digital Marketing" && (
                      <>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">SEO</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">PPC</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Analytics</span>
                        </div>
                      </>
                    )}
                    {service.title === "Motion & Animation" && (
                      <>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Motion Graphics</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Video Editing</span>
                        </div>
                        <div className="flex items-center p-2 bg-royal-dark/30 rounded-lg hover:bg-royal-dark/50 transition-colors duration-300">
                          <span className="text-gold-400 mr-2 text-lg">✓</span>
                          <span className="text-silver-300 text-xs mobile:text-sm">Animations</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* View Details Button */}
                  <div className="mt-5 text-center">
                    <button 
                      onClick={() => navigate(service.page)}
                      className="text-gold-400 font-semibold text-sm flex items-center justify-center group-hover:text-yellow-300 transition-colors duration-300 touch:text-base"
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
        <section className="py-16 mobile:section-py relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-4 relative z-10">
            <div className="text-center mb-12 mobile:mb-10">
              <h2 className="text-2xl mobile:text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                FEATURED WORK
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Showcasing our latest projects and creative solutions that drive real business results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mobile:gap-4">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className="card-glass overflow-hidden hover:scale-105 transition-all duration-300 touch:active-scale"
                  data-aos="fade-up"
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 mobile:h-40 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-gold-400 text-royal-dark px-2.5 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-5 mobile:p-4">
                    <h3 className="text-lg mobile:text-xl font-bold mb-2 text-ivory">{item.title}</h3>
                    <p className="text-silver-400 text-sm mobile:text-xs mb-4">{item.description}</p>
                    <div className="flex justify-between text-xs mobile:text-xs">
                      <span className="text-gold-400 font-semibold">{item.stats}</span>
                      <span className="text-silver-400">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="btn-royal-gold px-6 py-3 mobile:btn-full text-lg hover:scale-105 transition-transform duration-300 touch:active-scale">
                View Full Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 mobile:section-py relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-4 relative z-10">
            <div className="text-center mb-12 mobile:mb-10">
              <h2 className="text-2xl mobile:text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                TESTIMONIALS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                What Our Clients Say
              </p>
              <p className="text-base mobile:text-lg text-silver-400 mt-2 max-w-2xl mx-auto font-sans">
                Discover why leading brands trust SVAG Design Hub to transform their digital presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mobile:gap-4 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="card-glass p-6 mobile:p-5 hover:scale-105 transition-all duration-300 touch:active-scale"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-gold-400 text-4xl mb-3">❝</div>
                  <p className="text-silver-300 mb-5 italic text-sm mobile:text-base">"{testimonial.quote}"</p>
                  <div className="border-t border-gold-400/20 pt-4">
                    <h4 className="text-base mobile:text-lg font-bold text-ivory">{testimonial.author}</h4>
                    <p className="text-gold-400 text-xs mobile:text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 mobile:section-py relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl mobile:text-3xl md:text-4xl font-extrabold mb-5 font-heading text-gold-400" data-aos="fade-up">
                READY TO START?
              </h2>
              <h3 className="text-xl mobile:text-2xl md:text-3xl font-bold mb-5 text-ivory" data-aos="fade-up" data-aos-delay="100">
                Ready to Elevate Your Brand?
              </h3>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 mb-6 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="200">
                Ready to transform your business with creativity and strategy? Let's discuss your project and create something amazing together.
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                <a 
                  href="/contact" 
                  className="btn-royal-gold px-6 py-3 mobile:btn-full text-lg inline-block hover:scale-105 transition-transform duration-300 touch:active-scale"
                >
                  START YOUR PROJECT
                </a>
              </div>
            </div>
            
            {/* Services Overview */}
            <div className="mt-16 max-w-6xl mx-auto">
              <h3 className="text-xl mobile:text-2xl md:text-3xl font-bold text-center mb-10 text-gold-400" data-aos="fade-up">
                Our Comprehensive Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mobile:gap-4">
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory">Digital Consulting</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Digital Strategy
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Digital Transformation Consulting
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Operational Excellence through Digitalisation
                    </li>
                  </ul>
                </div>
                
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory">Digital Marketing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Social Media Management
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Online Marketing
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> SEO & Analytics
                    </li>
                  </ul>
                </div>
                
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="300">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory">Web Development</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Website Development
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> e-commerce Solutions
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Website Re-designing
                    </li>
                  </ul>
                </div>
                
                <div className="card-glass p-5 mobile:p-4" data-aos="fade-up" data-aos-delay="400">
                  <h4 className="text-lg mobile:text-xl font-bold mb-3 text-ivory">Graphic & Video</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Graphic Designing
                    </li>
                    <li className="flex items-center text-silver-300 text-sm mobile:text-base">
                      <span className="text-gold-400 mr-2">✓</span> Video Production and Editing
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