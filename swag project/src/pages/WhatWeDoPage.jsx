import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const WhatWeDoPage = () => {
  // Digital and Print services data
  const digitalPrintServices = [
    {
      title: "Digital",
      description: "Online and digital solutions to enhance your brand presence",
      features: [
        "Web Design & Development",
        "Digital Marketing",
        "Social Media Management",
        "SEO Optimization",
        "Email Campaigns"
      ],
      icon: "💻"
    },
    {
      title: "Print",
      description: "Traditional print materials that make a lasting impression",
      features: [
        "Business Cards",
        "Brochures",
        "Posters & Flyers",
        "Packaging Design",
        "Stationery"
      ],
      icon: "🖨️"
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
      description: "We create data-driven marketing strategies that increase your online visibility and drive targeted traffic to your business.",
      details: "Our digital marketing services include SEO optimization, content marketing, social media management, and paid advertising campaigns. We focus on understanding your audience and creating compelling content that attracts, engages, and converts. Our team continuously monitors and optimizes campaigns to maximize ROI.",
      icon: "📈"
    },
    {
      title: "Motion Design & Animation",
      description: "We produce engaging animations and motion graphics that bring your brand stories to life and captivate your audience.",
      details: "From explainer videos to social media animations, our motion design services enhance your digital presence with dynamic visual content. We specialize in creating custom animations that align with your brand identity and communicate your message effectively across various platforms.",
      icon: "🎬"
    }
  ];

  // Process data
  const processSteps = [
    {
      step: "Discovery",
      title: "Understanding Your Vision",
      description: "We begin by getting to know your business, goals, target audience, and challenges to develop a clear understanding of what success looks like for your project."
    },
    {
      step: "Strategy",
      title: "Planning & Research",
      description: "Based on our discovery findings, we create a strategic plan that outlines project scope, timeline, deliverables, and success metrics."
    },
    {
      step: "Design",
      title: "Creative Development",
      description: "Our design team brings ideas to life through wireframes, prototypes, and high-fidelity designs that reflect your brand and meet user needs."
    },
    {
      step: "Execution",
      title: "Implementation",
      description: "We bring the approved designs to life through expert development, ensuring quality, performance, and seamless user experience."
    },
    {
      step: "Optimization",
      title: "Testing & Refinement",
      description: "We thoroughly test all deliverables and make necessary refinements to ensure optimal performance and user satisfaction."
    },
    {
      step: "Launch & Support",
      title: "Go Live & Beyond",
      description: "We assist with the launch process and provide ongoing support to ensure continued success and address any evolving needs."
    }
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="orb orb-1"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                WHAT WE DO
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                We blend creativity with technology to deliver innovative digital solutions that drive growth and transform businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Digital & Print Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                DIGITAL & PRINT
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive solutions across both digital and traditional media
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {digitalPrintServices.map((service, index) => (
                <Link 
                  to={service.title === "Digital" ? "/digital-services" : "/print-services"}
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300 block"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-ivory">{service.title}</h3>
                      <p className="text-gold-400 font-medium">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-gold-400 mr-2">✦</span>
                        <span className="text-silver-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Sections */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR EXPERTISE
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatWeDoSections.map((section, index) => (
                <div
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">{section.icon}</div>
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

        {/* Our Process Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR PROCESS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                A proven methodology for delivering exceptional results
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-400 transform md:translate-x-[-1px]"></div>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center`}
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    {/* Step indicator */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-gold-400 text-royal-dark flex items-center justify-center font-bold z-10 transform md:translate-x-[-16px]">
                      {step.step}
                    </div>
                    
                    {/* Content card */}
                    <div className={`ml-12 md:ml-0 md:mr-8 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card-glass p-6">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-ivory">{step.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our expertise can help you achieve your goals.
              </p>
              <div className="mt-10">
                <a 
                  href="/contact" 
                  className="btn-royal-gold px-8 py-4 text-lg inline-block"
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