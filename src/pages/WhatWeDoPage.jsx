import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import AOS from 'aos';

const WhatWeDoPage = () => {
  const location = useLocation();
  const [filteredService, setFilteredService] = useState(null);

  // Check for filter state passed from Home page
  useEffect(() => {
    if (location.state && location.state.filter) {
      if (location.state.filter === 'All Services') {
        setFilteredService(null);
      } else {
        setFilteredService(location.state.filter);
      }
      // Clear the state after using it
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    // Reinitialize AOS when component mounts or updates
    AOS.refresh();
  }, [filteredService]);

  // Digital Services data
  const digitalServices = [
    {
      title: "Web Design & Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"],
      details: "We create modern, responsive websites and web applications tailored to your specific business needs. Our development process focuses on performance, security, and user experience. From simple landing pages to complex web applications, we use the latest technologies to build solutions that help achieve your business goals."
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that boost your online presence and drive growth.",
      features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Analytics & Reporting"],
      details: "Our digital marketing services are designed to increase your online visibility, attract qualified leads, and drive conversions. We combine data-driven strategies with creative execution to deliver measurable results. Our approach includes search engine optimization, pay-per-click advertising, content marketing, email campaigns, and comprehensive analytics to track and optimize performance."
    },
    {
      title: "Social Media Management",
      description: "Engage your audience and grow your brand across social media platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Influencer Partnerships"],
      details: "We help brands build meaningful connections with their audiences through strategic social media marketing. Our services include content creation, community management, paid advertising campaigns, and influencer partnerships. We develop platform-specific strategies for Facebook, Instagram, Twitter, LinkedIn, and TikTok to maximize engagement and reach."
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Content Strategy"],
      details: "Our SEO services help businesses improve their visibility in search engine results pages (SERPs). We conduct comprehensive audits of your website, perform keyword research, optimize on-page elements, and implement technical improvements to boost your rankings. Our goal is to increase organic traffic and generate more qualified leads for your business."
    }
  ];

  // Print Services data
  const printServices = [
    {
      title: "Business Cards",
      description: "Professional business cards that make a lasting first impression.",
      features: ["Premium Paper Options", "Custom Design", "Various Finishes", "Fast Turnaround"],
      details: "Our business card designs are crafted to reflect your brand identity and leave a memorable impression. We offer a variety of paper stocks, finishes, and design options to create cards that stand out. From classic to contemporary, we ensure your business cards represent your brand professionally."
    },
    {
      title: "Brochures",
      description: "Informative brochures that effectively communicate your brand message.",
      features: ["Tri-fold & Bi-fold Options", "Custom Sizes", "High-quality Printing", "Creative Layouts"],
      details: "Our brochure designs combine compelling visuals with persuasive copy to effectively communicate your products or services. We create brochures that capture attention and drive action, whether for trade shows, retail locations, or direct mail campaigns."
    },
    {
      title: "Posters & Flyers",
      description: "Eye-catching promotional materials for events and marketing campaigns.",
      features: ["Various Sizes", "Bold Visuals", "Quick Production", "Bulk Printing"],
      details: "We design and print posters and flyers that grab attention and deliver your message effectively. Perfect for events, promotions, or general marketing, our team creates visually striking materials that align with your brand and achieve your marketing objectives."
    },
    {
      title: "Packaging Design",
      description: "Custom packaging solutions that enhance your product's appeal.",
      features: ["Box Design", "Label Creation", "Branding Integration", "Material Selection"],
      details: "Our packaging design services help your products stand out on the shelf while protecting your items during shipping. We create packaging that tells your brand story and provides an unboxing experience that delights your customers."
    }
  ];

  // What We Do sections data
  const whatWeDoSections = [
    {
      title: "Brand Identity & Strategy",
      description: "We craft distinctive brand identities that resonate with your target audience and differentiate you from competitors.",
      details: "Our brand identity services encompass logo design, color palette development, typography selection, and brand guidelines creation. We work closely with you to understand your business values, mission, and vision to create a cohesive brand identity that speaks directly to your ideal customers.",
      icon: "🎯"
    },
    {
      title: "Web & UX Development",
      description: "We build responsive, user-friendly websites and applications that engage visitors and convert them into customers.",
      details: "Our web development process begins with user research and wireframing to ensure optimal user experience. We then proceed to design and develop custom websites using modern technologies that are fast, secure, and scalable. Our approach ensures your digital presence reflects your brand while delivering exceptional user experience.",
      icon: "💻"
    },
    {
      title: "Digital Marketing",
      description: "We create data-driven marketing strategies that boost your online presence and drive growth.",
      details: "Our digital marketing services include SEO optimization, content marketing, social media management, and paid advertising campaigns. We focus on understanding your audience and creating compelling content that attracts, engages, and converts. Our team continuously monitors and optimizes campaigns to maximize ROI.",
      icon: "📈"
    },
    {
      title: "Motion Design & Animation",
      description: "We produce engaging animations and motion graphics that bring your brand stories to life.",
      details: "From explainer videos to social media animations, our motion design services enhance your digital presence with dynamic visual content. We specialize in creating custom animations that align with your brand identity and communicate your message effectively across various platforms.",
      icon: "🎬"
    }
  ];

  // Process data
  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description: "We begin by getting to know your business, goals, target audience, and challenges to develop a clear understanding of what success looks like for your project. This phase includes stakeholder interviews, market research, and competitive analysis."
    },
    {
      step: "2",
      title: "Strategy",
      description: "Based on our discovery findings, we create a strategic plan that outlines project scope, timeline, deliverables, and success metrics. We define key performance indicators and establish project milestones."
    },
    {
      step: "3",
      title: "Design",
      description: "Our design team brings ideas to life through wireframes, prototypes, and high-fidelity designs that reflect your brand and meet user needs. We focus on user experience, visual design, and brand consistency."
    },
    {
      step: "4",
      title: "Execution",
      description: "We bring the approved designs to life through expert development, ensuring quality, performance, and seamless user experience. This includes front-end and back-end development, integration, and testing."
    },
    {
      step: "5",
      title: "Optimization",
      description: "We thoroughly test all deliverables and make necessary refinements to ensure optimal performance and user satisfaction. This includes quality assurance, performance optimization, and user acceptance testing."
    },
    {
      step: "6",
      title: "Launch & Support",
      description: "We assist with the launch process and provide ongoing support to ensure continued success and address any evolving needs. Post-launch monitoring, maintenance, and continuous improvement are part of our commitment."
    }
  ];

  // Get services to display (filtered or all)
  let servicesToDisplay = [];
  if (filteredService === 'Digital Services') {
    servicesToDisplay = digitalServices;
  } else if (filteredService === 'Print Services') {
    servicesToDisplay = printServices;
  }

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        <div className="particle particle-9"></div>
        <div className="particle particle-10"></div>
        <div className="particle particle-11"></div>
        <div className="particle particle-12"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-heading text-gold-400 animate-fade-in-down" data-aos="fade-up">
                WHAT WE DO
              </h1>
              <div className="flex justify-center my-6 animate-pulse-slow">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in" data-aos="fade-up" data-aos-delay="200">
                We blend creativity with technology to deliver innovative digital solutions that drive growth and transform businesses.
              </p>
              
              {/* Digital & Print Service Cards (always visible at the top) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                <Link 
                  to="/digital-services"
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center group animate-fade-in-left"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-5xl mb-6 text-gold-400 group-hover:text-white transition-colors duration-300 animate-bounce">💻</div>
                  <h3 className="text-2xl font-bold mb-4 text-ivory">DIGITAL SERVICES</h3>
                  <p className="text-silver-400 mb-6">Innovative digital solutions to elevate your brand and drive growth in the online space.</p>
                </Link>
                
                <Link 
                  to="/print-services"
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center group animate-fade-in-right"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-5xl mb-6 text-gold-400 group-hover:text-white transition-colors duration-300 animate-bounce">🖨️</div>
                  <h3 className="text-2xl font-bold mb-4 text-ivory">PRINT SERVICES</h3>
                  <p className="text-silver-400 mb-6">High-quality print materials that make a lasting impression in the physical world.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Sections (only shown when no filter is active) */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
                OUR EXPERTISE
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatWeDoSections.map((section, index) => (
                <div
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 animate-bounce">{section.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-ivory">{section.title}</h3>
                      <p className="text-gold-400 font-medium">{section.description}</p>
                    </div>
                  </div>
                  <p className="text-silver-400">{section.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Web Solutions Preview */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
                MODERN WEB SOLUTIONS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
                In today's digital-first world, your website is often the first impression potential customers have of your business.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-silver-400 mb-8 text-lg animate-fade-in">
                We build websites that not only look stunning but also perform exceptionally, driving conversions and user engagement. Our web development approach combines cutting-edge technology with proven design principles to create websites that are fast, secure, and optimized for search engines.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {icon: "📱", title: "Responsive Design"},
                  {icon: "🔍", title: "SEO Optimized"},
                  {icon: "⚡", title: "Fast Performance"},
                  {icon: "🔒", title: "Secure & Reliable"}
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="card-glass p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    <div className="text-3xl text-gold-400 mb-4 animate-bounce">{item.icon}</div>
                    <h3 className="text-xl font-bold text-ivory mb-2">{item.title}</h3>
                  </div>
                ))}
              </div>
              
              <div className="text-center animate-fade-in-up">
                <Link 
                  to="/digital-services"
                  className="btn-royal-gold px-8 py-4 text-lg inline-block hover:scale-105 transition-transform duration-300"
                >
                  LEARN MORE ABOUT OUR WEB SOLUTIONS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 relative process-section">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 animate-fade-in-down">
                OUR PROCESS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
                A proven methodology for delivering exceptional results
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-400 transform md:translate-x-[-1px] animate-fade-in timeline-line"></div>
              
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-start animate-fade-in-up`}
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    {/* Step indicator */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 rounded-full bg-gold-400 text-royal-dark flex items-center justify-center font-bold text-lg z-10 transform md:translate-x-[-20px] animate-pulse shadow-lg step-number">
                      {index + 1}
                    </div>
                    
                    {/* Content card */}
                    <div className={`ml-16 md:ml-0 md:mr-8 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12 md:pl-0' : 'md:text-left md:pl-12 md:pr-0'}`}>
                      <div className="process-step-card hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-ivory">{step.title}</h3>
                        <p className="text-silver-300">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Spacer for alignment */}
                    <div className="md:w-5/12 h-8 md:h-0"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400 animate-fade-in-down" data-aos="fade-up">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans animate-fade-in" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our expertise can help you achieve your goals.
              </p>
              <div className="mt-10 animate-fade-in-up">
                <a 
                  href="/contact" 
                  className="btn-royal-gold px-8 py-4 text-lg inline-block hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  START YOUR PROJECT
                </a>
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

export default WhatWeDoPage;