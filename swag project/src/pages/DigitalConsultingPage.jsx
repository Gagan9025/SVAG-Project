import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiMonitor, FiBarChart2, FiCode, FiTrendingUp, FiSmartphone } from 'react-icons/fi';

const DigitalConsultingPage = () => {
  const consultingServices = [
    {
      title: "Digital Strategy Development",
      description: "Comprehensive digital roadmaps aligned with business objectives.",
      features: ["Market Analysis", "Technology Assessment", "Roadmap Planning", "ROI Projections"],
      details: "We develop tailored digital strategies that align with your business goals. Our approach includes thorough market analysis, competitive benchmarking, and identification of digital opportunities that drive measurable results."
    },
    {
      title: "Business Transformation",
      description: "End-to-end digital transformation services for modern enterprises.",
      features: ["Process Automation", "System Integration", "Change Management", "Performance Metrics"],
      details: "Our digital transformation services help organizations adapt to the rapidly evolving digital landscape. We guide you through every stage of transformation, from strategy to implementation, ensuring seamless adoption and maximum ROI."
    },
    {
      title: "Innovation Consulting",
      description: "Fostering innovation culture and implementing emerging technologies.",
      features: ["Innovation Workshops", "Technology Trends", "Prototype Development", "Scalability Planning"],
      details: "We help businesses stay ahead of the curve by fostering a culture of innovation and identifying opportunities to leverage emerging technologies. Our consultants work with your team to develop innovative solutions that create competitive advantages."
    }
  ];

  const benefits = [
    {
      icon: <FiMonitor className="text-2xl" />,
      title: "Strategic Alignment",
      description: "Ensure all digital initiatives align with core business objectives"
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Measurable ROI",
      description: "Focus on initiatives that deliver quantifiable business results"
    },
    {
      icon: <FiCode className="text-2xl" />,
      title: "Future-Proof Solutions",
      description: "Implement technologies that scale with your business growth"
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Competitive Advantage",
      description: "Stay ahead with data-driven digital strategies"
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
                DIGITAL CONSULTING
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Strategic guidance to transform your business for the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Consulting Services */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR CONSULTING APPROACH
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive digital consulting services tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <div
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">📊</div>
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

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                KEY BENEFITS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Transform your business with our expert digital consulting services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="card-glass p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-gold-400 mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-ivory mb-2">{benefit.title}</h3>
                  <p className="text-silver-400">{benefit.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our digital consulting services can help you navigate the digital landscape and achieve your business goals.
              </p>
              <div className="mt-6 mb-10">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Custom Strategy Development</span>
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
                  SCHEDULE CONSULTATION
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

export default DigitalConsultingPage;