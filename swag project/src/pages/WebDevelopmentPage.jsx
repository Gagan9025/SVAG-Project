import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiCode, FiMonitor, FiSmartphone, FiShoppingCart } from 'react-icons/fi';

const WebDevelopmentPage = () => {
  const webServices = [
    {
      title: "Custom Website Development",
      description: "Tailored websites designed for your specific business needs.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-Browser Compatibility"],
      details: "We create custom websites that perfectly align with your brand identity and business objectives. Our development process focuses on user experience, performance, and scalability to ensure your website stands out in the digital landscape."
    },
    {
      title: "E-Commerce Solutions",
      description: "Full-featured online stores that drive sales and growth.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      details: "Our e-commerce solutions are designed to maximize conversions and provide seamless shopping experiences. From small boutiques to enterprise-level platforms, we build scalable online stores that grow with your business."
    },
    {
      title: "Web Application Development",
      description: "Complex web applications built with cutting-edge technologies.",
      features: ["Single Page Applications", "Real-time Features", "API Development", "Cloud Integration"],
      details: "We specialize in developing sophisticated web applications that solve complex business challenges. Our team leverages modern frameworks and architectures to build robust, scalable applications that deliver exceptional user experiences."
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "Next.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Google Cloud", "Azure", "Netlify"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and defining project scope"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with clean, efficient code"
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing and seamless deployment"
    },
    {
      step: "05",
      title: "Maintenance & Support",
      description: "Ongoing support and continuous improvements"
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
                WEB DEVELOPMENT
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Custom websites and web applications built with cutting-edge technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Web Development Services */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR WEB DEVELOPMENT SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive web solutions designed to establish your online presence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                <div
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">💻</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-ivory">{service.title}</h3>
                      <p className="text-gold-400 font-medium">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-silver-400 mb-6">{service.details}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-gold-400 mr-2">✦</span>
                        <span className="text-silver-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                TECHNOLOGY STACK
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                We use cutting-edge technologies to build fast, secure, and scalable websites
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((stack, index) => (
                <div 
                  key={index}
                  className="card-glass p-8"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <h4 className="text-2xl font-bold text-ivory mb-6">{stack.category}</h4>
                  <ul className="space-y-3">
                    {stack.technologies.map((tech, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold-400 mr-2 mt-1">•</span>
                        <span className="text-silver-300">{tech}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR DEVELOPMENT PROCESS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                A systematic approach that ensures quality and timely delivery
              </p>
              
              <div className="relative mt-16">
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
                          <h4 className="text-xl md:text-2xl font-bold mb-2 text-ivory">{step.title}</h4>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                READY TO BUILD YOUR ONLINE PRESENCE?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our web development services can help you establish a powerful online presence that drives business growth.
              </p>
              <div className="mt-6 mb-10">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Custom Strategy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Ongoing Support</span>
                  </div>
                </div>
              </div>
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

export default WebDevelopmentPage;