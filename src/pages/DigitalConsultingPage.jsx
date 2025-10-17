import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiCheckCircle, FiSearch, FiMap, FiPlay, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const DigitalConsultingPage = () => {
  // Services data
  const services = [
    {
      title: "Digital Strategy",
      description: "Comprehensive digital roadmap aligned with business objectives",
      features: [
        "Digital maturity assessment",
        "Competitive analysis",
        "Technology roadmap development",
        "ROI-focused strategy planning"
      ]
    },
    {
      title: "Digital Transformation Consulting",
      description: "End-to-end transformation services for modern businesses",
      features: [
        "Change management",
        "Process optimization",
        "Technology implementation",
        "Performance monitoring"
      ]
    },
    {
      title: "Operational Excellence through Digitalisation",
      description: "Streamline operations with cutting-edge digital solutions",
      features: [
        "Workflow automation",
        "Data analytics integration",
        "Cloud migration services",
        "Continuous improvement frameworks"
      ]
    }
  ];

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "In-depth analysis of current state and future goals"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Development of tailored digital transformation roadmap"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execution of strategic initiatives with continuous support"
    },
    {
      number: "04",
      title: "Optimization",
      description: "Performance monitoring and continuous improvement"
    }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: <FiAward className="text-2xl text-gold-400" />,
      title: "Expertise",
      description: "Years of experience in digital transformation across industries"
    },
    {
      icon: <FiUsers className="text-2xl text-gold-400" />,
      title: "Collaborative Approach",
      description: "We work closely with your team for sustainable results"
    },
    {
      icon: <FiTrendingUp className="text-2xl text-gold-400" />,
      title: "Results-Driven",
      description: "Focus on measurable outcomes and business impact"
    }
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Background Beams animation is provided by MainLayout */}
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                DIGITAL CONSULTING
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Transform Your Business with Strategic Digital Solutions
              </p>
              <p className="text-lg text-silver-300 mt-6 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                Our digital consulting services help businesses navigate the complex digital landscape with confidence. We provide strategic guidance, operational excellence, and digital transformation solutions that drive measurable results and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Approach */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                STRATEGIC APPROACH
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Strategic Digital Transformation
              </p>
              <p className="text-lg text-silver-300 mt-6 max-w-3xl mx-auto font-sans">
                In today's rapidly evolving digital landscape, having the right strategy is crucial for business success. Our digital consulting approach goes beyond surface-level recommendations to deliver comprehensive, actionable strategies that drive real results.
              </p>
              <p className="text-lg text-silver-300 mt-4 max-w-3xl mx-auto font-sans">
                We work closely with your team to understand your unique business challenges, market position, and growth objectives. This deep understanding allows us to create tailored digital roadmaps that align with your business strategy and deliver measurable outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="card-glass p-8 text-center" data-aos="fade-up">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-royal-blue flex items-center justify-center">
                    <FiSearch className="text-2xl text-gold-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ivory">Analysis</h3>
                <h4 className="text-xl font-semibold mb-4 text-gold-400">Data Insights</h4>
                <div className="text-4xl font-bold text-gold-400">01</div>
              </div>
              
              <div className="card-glass p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-royal-blue flex items-center justify-center">
                    <FiMap className="text-2xl text-gold-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ivory">Planning</h3>
                <h4 className="text-xl font-semibold mb-4 text-gold-400">Strategic Roadmap</h4>
                <div className="text-4xl font-bold text-gold-400">02</div>
              </div>
              
              <div className="card-glass p-8 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-royal-blue flex items-center justify-center">
                    <FiPlay className="text-2xl text-gold-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ivory">Execution</h3>
                <h4 className="text-xl font-semibold mb-4 text-gold-400">Implementation</h4>
                <div className="text-4xl font-bold text-gold-400">03</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Digital Consulting Services
              </p>
              <p className="text-lg text-silver-300 mt-6 max-w-3xl mx-auto font-sans">
                Comprehensive digital strategy solutions designed to transform your business operations and drive sustainable growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="card-glass p-8"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-2xl font-bold mb-4 text-ivory">{service.title}</h3>
                  <p className="text-gold-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FiCheckCircle className="text-gold-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-silver-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
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
                Consulting Process
              </p>
              <p className="text-lg text-silver-300 mt-6 max-w-3xl mx-auto font-sans">
                A proven methodology that ensures successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="card-glass p-8 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-5xl font-bold text-gold-400 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-4 text-ivory">{step.title}</h3>
                  <p className="text-silver-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                WHY CHOOSE US
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Why Choose SVAG?
              </p>
              <p className="text-lg text-silver-300 mt-6 max-w-3xl mx-auto font-sans">
                Our unique approach combines strategic thinking with practical implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index} 
                  className="card-glass p-8 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-royal-blue flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-ivory">{item.title}</h3>
                  <p className="text-silver-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center bg-royal-blue/30 rounded-3xl p-12 border border-gold-400/30">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-xl text-silver-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our digital consulting services can help you achieve your business goals.
              </p>
              <button className="btn-royal-gold px-8 py-4 text-lg">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default DigitalConsultingPage;