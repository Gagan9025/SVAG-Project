import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "TechCorp Rebrand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Complete brand transformation for a leading tech company",
      results: ["40% Growth", "6 Weeks"]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Modern e-commerce solution with advanced features",
      results: ["10K+ Users", "200% Sales"]
    },
    {
      id: 3,
      title: "Product Explainer",
      category: "motion",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Engaging video content that explains complex products",
      results: ["50K Views", "95% Engagement"]
    }
  ];

  const filters = [
    { id: 'all', label: 'Featured Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Development' },
    { id: 'motion', label: 'Motion Graphics' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Custom bold heading for "Our Work" */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            OUR WORK
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            Showcasing our latest projects and creative solutions that drive real business results
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base relative overflow-hidden ${
                activeFilter === filter.id
                  ? 'bg-gold-400 text-royal-dark'
                  : 'text-ivory border border-gold-400/30 hover:bg-gold-400/10'
              }`}
              onClick={() => setActiveFilter(filter.id)}
              data-aos="fade-up"
              data-aos-delay={300 + filters.indexOf(filter) * 50}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <div 
                  className="absolute inset-0 bg-gold-400 opacity-20"
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-glass cursor-pointer overflow-hidden react-icon"
              onClick={() => setSelectedProject(project)}
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
            >
              <div className="overflow-hidden rounded-lg mb-4 md:mb-6 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-60 object-cover react-icon"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-dark to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                  <span className="px-2 py-1 md:px-3 md:py-1 bg-gold-400/20 text-gold-300 rounded-full text-xs md:text-sm">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-ivory">{project.title}</h3>
              <p className="text-silver-400 mb-4 text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.results.map((result, idx) => (
                  <span key={idx} className="px-2 py-1 md:px-3 md:py-1 bg-gold-400/10 text-gold-300 rounded-full text-xs md:text-sm">
                    {result}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-royal-dark/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          data-aos="fade-in"
        >
          <div
            className="bg-royal-blue rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gold-400/30"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="p-4 md:p-8">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div>
                  <span className="px-2 py-1 md:px-3 md:py-1 bg-gold-400/20 text-gold-300 rounded-full text-xs md:text-sm">
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-ivory mt-2">{selectedProject.title}</h3>
                </div>
                <button 
                  className="text-ivory hover:text-gold-400 text-xl md:text-2xl react-icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX className="react-icon" />
                </button>
              </div>
              
              <div className="rounded-xl overflow-hidden mb-4 md:mb-6 relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-dark to-transparent opacity-50"></div>
              </div>
              
              <p className="text-silver-400 text-base md:text-lg mb-4 md:mb-6">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
                {selectedProject.results.map((result, idx) => (
                  <div key={idx} className="px-3 py-1 md:px-4 md:py-2 bg-gold-400/10 text-gold-300 rounded-full text-sm md:text-base">
                    {result}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  className="btn-gold w-full sm:w-auto"
                >
                  View Case Study
                </button>
                <button 
                  className="btn-royal w-full sm:w-auto"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;