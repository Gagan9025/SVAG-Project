import React from 'react';
// Removed SectionTitle import

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Custom bold heading for "Our Mission" */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            OUR MISSION
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            Empowering Business Growth Through Creative Excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative">
              <div className="glass-effect-dark rounded-3xl p-8 border border-gold-400/30 shadow-2xl">
                <div className="absolute -inset-4 bg-purple-gradient rounded-3xl blur-xl opacity-30"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gold-400 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold-400 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gold-400 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gold-400 rounded-br-2xl"></div>
                
                <div className="relative">
                  <p className="text-ivory-light mb-6 leading-relaxed text-lg font-sans">
                    We empower businesses through identity design, strategic digital solutions, tech-powered platforms, and animated storytelling—delivering impact that resonates.
                  </p>
                  
                  <div className="flex items-center mt-8">
                    <div className="w-12 h-0.5 bg-gold-400 mr-4"></div>
                    <span className="text-gold-400 font-script text-xl">Crafted with Excellence</span>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400 rounded-full blur-2xl opacity-20"
              />
            </div>
          </div>
          
          <div
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "★", title: "Strategic Design Thinking" },
                { icon: "★", title: "Data-Driven Solutions" },
                { icon: "★", title: "Innovation at Core" },
                { icon: "★", title: "Business Strategy" },
                { icon: "★", title: "Team Collaboration" },
                { icon: "★", title: "Innovation Process" },
                { icon: "★", title: "Creative Solutions" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-royal-gold hover:scale-105 transition-transform duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 50}
                >
                  <div className="text-2xl mr-3 text-gold-400">{item.icon}</div>
                  <div className="text-ivory-light font-medium font-heading text-sm">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;