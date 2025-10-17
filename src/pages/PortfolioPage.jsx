import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const PortfolioPage = () => {
  // Unique portfolio data for this page
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity for TechStart",
      category: "Branding",
      description: "Complete brand identity for a tech startup including logo, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "E-commerce Website for FashionHub",
      category: "Web Design",
      description: "Modern e-commerce platform with seamless user experience and integrated payment system.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Social Media Campaign for GreenEats",
      category: "Marketing",
      description: "30-day social media campaign that increased engagement by 150% and followers by 200%.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Animated Explainer Video for HealthPlus",
      category: "Animation",
      description: "60-second explainer video that clearly communicates the benefits of the HealthPlus app.",
      image: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Mobile App UI for TravelGo",
      category: "UI/UX",
      description: "Intuitive mobile app interface for a travel booking platform with seamless user flow.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Corporate Website for FinSecure",
      category: "Web Development",
      description: "Professional corporate website with responsive design and integrated CRM system.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Simplified animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Portfolio Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR PORTFOLIO
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Showcasing our best work and successful projects
              </p>
            </div>

            {/* Portfolio Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Branding', 'Web Design', 'Marketing', 'Animation', 'UI/UX', 'Web Development'].map((filter, index) => (
                <button 
                  key={index}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    filter === 'All' 
                      ? 'bg-gold-400 text-royal-dark font-semibold' 
                      : 'bg-royal-blue/50 text-gold-400 hover:bg-gold-400 hover:text-royal-dark'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div 
                  key={item.id}
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
                    <p className="text-silver-400 mb-4">{item.description}</p>
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

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <h3 className="text-3xl font-bold mb-6 text-ivory-light">Want to see more of our work?</h3>
              <p className="text-xl text-gold-300 max-w-2xl mx-auto mb-8">
                We have many more projects that showcase our expertise and creativity.
              </p>
              <button className="btn-royal-gold px-8 py-4 text-lg">
                View Full Portfolio
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

export default PortfolioPage;