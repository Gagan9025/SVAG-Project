import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const DigitalServicesPage = () => {
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

  // Web Development Services data
  const webDevServices = [
    {
      title: "Custom Website Builds",
      description: "Tailored websites designed for your specific business needs:",
      features: ["Custom design and development", "Responsive layouts for all devices", "SEO-optimized structure", "Content management systems", "Performance optimization"]
    },
    {
      title: "E-Commerce Solutions",
      description: "Full-featured online stores that drive sales and growth:",
      features: ["Secure payment gateways", "Inventory management systems", "Order processing automation", "Customer account management", "Analytics and reporting"]
    },
    {
      title: "Site Redesign & UX Optimization",
      description: "Transform existing sites with modern design and user experience:",
      features: ["User experience audits", "Conversion rate optimization", "Modern design implementation", "Performance improvements", "Mobile-first approach"]
    },
    {
      title: "Hosting, Maintenance & Performance Tuning",
      description: "Complete web infrastructure management and optimization:",
      features: ["Reliable hosting solutions", "Regular security updates", "Performance monitoring", "Backup and recovery", "24/7 technical support"]
    }
  ];

  // Tech Stack data
  const techStack = [
    {
      category: "Frontend",
      technologies: ["HTML5, CSS3, JavaScript", "React", "Vue.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "PHP", "Python", "Database systems"]
    },
    {
      category: "Responsive",
      technologies: ["Mobile-first design", "Bootstrap", "CSS Grid", "Flexbox"]
    },
    {
      category: "Performance",
      technologies: ["CDN", "caching", "image optimization", "lazy loading"]
    }
  ];

  // Process data
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Requirements gathering, user research, and project planning"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "UI/UX design, wireframes, and interactive prototypes"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Clean coding, testing, and quality assurance"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment, training, and ongoing maintenance"
    }
  ];

  // Why Choose Us data
  const whyChooseUs = [
    {
      title: "Mobile-First Design",
      description: "All our websites are designed mobile-first, ensuring perfect functionality across all devices"
    },
    {
      title: "Performance Optimized",
      description: "We prioritize speed and performance, ensuring your website loads quickly and ranks well"
    },
    {
      title: "Security First",
      description: "Built-in security measures protect your website and customer data from threats"
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
                DIGITAL SERVICES
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Innovative digital solutions to elevate your brand and drive growth in the online space.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Services Sections */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR DIGITAL EXPERTISE
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
              {digitalServices.map((service, index) => (
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

        {/* Modern Web Solutions Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                MODERN WEB SOLUTIONS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                In today's digital-first world, your website is often the first impression potential customers have of your business. We build websites that not only look stunning but also perform exceptionally, driving conversions and user engagement.
              </p>
              <p className="text-silver-400 mt-6 max-w-3xl mx-auto font-sans">
                Our web development approach combines cutting-edge technology with proven design principles to create websites that are fast, secure, and optimized for search engines. From simple business sites to complex e-commerce platforms, we deliver solutions that grow with your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="card-glass p-6 text-center" data-aos="fade-up">
                <div className="text-3xl text-gold-400 mb-4">📱</div>
                <h3 className="text-xl font-bold text-ivory mb-2">Responsive Design</h3>
                <p className="text-silver-400">Flawless experience across all devices</p>
              </div>
              <div className="card-glass p-6 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl text-gold-400 mb-4">🔍</div>
                <h3 className="text-xl font-bold text-ivory mb-2">SEO Optimized</h3>
                <p className="text-silver-400">Higher search engine rankings</p>
              </div>
              <div className="card-glass p-6 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl text-gold-400 mb-4">⚡</div>
                <h3 className="text-xl font-bold text-ivory mb-2">Fast Performance</h3>
                <p className="text-silver-400">Lightning-fast loading speeds</p>
              </div>
              <div className="card-glass p-6 text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl text-gold-400 mb-4">🔒</div>
                <h3 className="text-xl font-bold text-ivory mb-2">Secure & Reliable</h3>
                <p className="text-silver-400">Protected against threats</p>
              </div>
            </div>

            {/* Our Web Development Services */}
            <div className="mb-20">
              <h3 className="text-3xl font-extrabold mb-12 text-center relative inline-block font-heading text-gold-400 mx-auto">
                OUR WEB DEVELOPMENT SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h3>
              <p className="text-xl text-gold-300 text-center max-w-3xl mx-auto mb-16 font-sans">
                Comprehensive web solutions designed to establish your online presence and drive business growth
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {webDevServices.map((service, index) => (
                  <div 
                    key={index}
                    className="card-glass p-8"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    <h4 className="text-2xl font-bold text-ivory mb-4">{service.title}</h4>
                    <p className="text-gold-400 mb-6">{service.description}</p>
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

            {/* Tech Stack */}
            <div className="mb-20">
              <h3 className="text-3xl font-extrabold mb-12 text-center relative inline-block font-heading text-gold-400 mx-auto">
                OUR TECHNOLOGY STACK
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h3>
              <p className="text-xl text-gold-300 text-center max-w-3xl mx-auto mb-16 font-sans">
                We use cutting-edge technologies to build fast, secure, and scalable websites
              </p>
              
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

            {/* Our Process */}
            <div className="mb-20">
              <h3 className="text-3xl font-extrabold mb-12 text-center relative inline-block font-heading text-gold-400 mx-auto">
                OUR DEVELOPMENT PROCESS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h3>
              <p className="text-xl text-gold-300 text-center max-w-3xl mx-auto mb-16 font-sans">
                A systematic approach that ensures quality and timely delivery
              </p>
              
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

            {/* Why Choose Us */}
            <div className="mb-20">
              <h3 className="text-3xl font-extrabold mb-12 text-center relative inline-block font-heading text-gold-400 mx-auto">
                WHY CHOOSE US FOR WEB DEVELOPMENT?
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h3>
              <p className="text-xl text-gold-300 text-center max-w-3xl mx-auto mb-16 font-sans">
                Our expertise and commitment to quality set us apart
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index}
                    className="card-glass p-8 text-center"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    <h4 className="text-2xl font-bold text-ivory mb-4">{item.title}</h4>
                    <p className="text-silver-300">{item.description}</p>
                  </div>
                ))}
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

export default DigitalServicesPage;