import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Home = () => {
  // Unique services data for the home page
  const services = [
    {
      title: "Brand Identity",
      description: "Creating memorable brands that stand out in the market",
      icon: "🎨"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors to customers",
      icon: "💻"
    },
    {
      title: "Digital Marketing",
      description: "Strategies that boost your online presence and drive growth",
      icon: "📈"
    },
    {
      title: "Motion Design",
      description: "Engaging animations that bring your brand stories to life",
      icon: "🎬"
    }
  ];

  // Unique testimonials data for the home page
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechInnovate",
      content: "Swag transformed our brand identity and helped us stand out in a crowded market. Their attention to detail and creative approach exceeded our expectations.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupHub",
      content: "The website developed by Swag has significantly increased our conversion rates. Their technical expertise combined with creative design is impressive.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Our social media engagement increased by 200% after implementing Swag's digital marketing strategy. They truly understand how to connect with audiences.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Unique portfolio data for the home page
  const portfolioItems = [
    {
      title: "TechStart Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "FashionHub E-commerce",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "GreenEats Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Simplified animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="orb orb-1"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive digital solutions to elevate your brand and drive growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="card-glass text-center p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-ivory">{service.title}</h3>
                  <p className="text-silver-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                FEATURED WORK
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                A glimpse of our recent projects and creative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className="card-glass overflow-hidden hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gold-400 text-royal-dark px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-ivory">{item.title}</h3>
                    <button className="text-gold-400 font-semibold flex items-center group">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="btn-royal-gold px-8 py-4 text-lg">
                View Full Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                CLIENT TESTIMONIALS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                What our clients say about working with us
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-ivory">{testimonial.name}</h3>
                      <p className="text-gold-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-silver-300 italic">"{testimonial.content}"</p>
                  <div className="flex text-gold-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
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