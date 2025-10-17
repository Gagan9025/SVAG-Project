import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Our Story Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            OUR STORY
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <h3 className="text-3xl font-bold mt-8 mb-4 text-ivory-light">About SVAG</h3>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            Crafting Digital Excellence Since 2016
          </p>
          <p className="text-lg text-ivory-light mt-8 max-w-4xl mx-auto leading-relaxed">
            We transform ideas into powerful digital experiences that drive growth, build trust, and create lasting impact.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            OUR MISSION
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <h3 className="text-3xl font-bold mt-8 mb-4 text-ivory-light">Empowering Business Growth Through Creative Excellence</h3>
          <p className="text-lg text-ivory-light mt-8 max-w-4xl mx-auto leading-relaxed">
            We empower businesses through identity design, strategic digital solutions, tech-powered platforms, and animated storytelling—delivering impact that resonates.
          </p>
          
          {/* Mission Values */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Strategic Design Thinking", description: "Creating solutions with purpose and intent" },
              { title: "Data-Driven Solutions", description: "Making informed decisions based on insights" },
              { title: "Innovation at Core", description: "Pushing boundaries to deliver cutting-edge solutions" },
              { title: "Business Strategy", description: "Aligning creative solutions with business objectives" },
              { title: "Team Collaboration", description: "Working together to achieve exceptional results" },
              { title: "Innovation Process", description: "Following a structured approach to creativity" }
            ].map((value, index) => (
              <div key={index} className="card-royal-gold p-6">
                <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-royal-dark text-xl">★</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-ivory-light">{value.title}</h3>
                <p className="text-ivory-light text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mt-16">
            WHO WE ARE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect-dark rounded-3xl p-8 border border-gold-400/30 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-ivory-light">4 Young Individuals</h3>
              <p className="text-ivory-light leading-relaxed">
                From different fields, sharing a passion for making a difference. When destiny brought them together, their passion burns up! They dream to achieve big and create a hub of creatives where their skills play for your game.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Team collaboration', 'Creative workspace', 'Young professionals', 'Business meeting', 'Partnership handshake', 'Client consultation'].map((item, index) => (
                <div key={index} className="card-royal-gold p-4 flex items-center justify-center h-full">
                  <span className="text-gold-400 font-medium text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why SVAG Design Hub Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mt-16">
            WHY NEXT GEN DESIGN HUB?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="glass-effect-dark rounded-3xl p-8 border border-gold-400/30 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center mr-4">
                  <span className="text-royal-dark text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-ivory-light">Long-term Partnership</h3>
              </div>
              <p className="text-ivory-light text-lg leading-relaxed">
                We focus on building long-term business relationships with our clients by delivering what is best for the brand rather than merely giving out our best.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mt-16">
            OUR PROCESS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            A proven methodology that ensures success at every stage
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "01", 
                title: "Discover", 
                description: "Understand your brand vision, business goals, and target audience through comprehensive research and strategic analysis.",
                steps: ["Research", "Analysis", "Strategy"]
              },
              { 
                number: "02", 
                title: "Design & Strategize", 
                description: "Create identity, UX, motion, and digital plans that align with your business objectives and resonate with your audience.",
                steps: ["Design", "UX/UI", "Planning"]
              },
              { 
                number: "03", 
                title: "Launch & Optimize", 
                description: "Deploy solutions and iteratively improve based on performance data and user feedback for continuous growth.",
                steps: ["Launch", "Optimize", "Growth"]
              }
            ].map((process, index) => (
              <div key={index} className="glass-effect-dark rounded-3xl p-8 border border-gold-400/30 shadow-2xl">
                <div className="text-gold-400 text-5xl font-bold mb-4">{process.number}</div>
                <h3 className="text-2xl font-bold mb-4 text-ivory-light">{process.title}</h3>
                <p className="text-ivory-light mb-6">{process.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {process.steps.map((step, stepIndex) => (
                    <span key={stepIndex} className="px-4 py-2 bg-royal-blue/50 rounded-full text-gold-400 text-sm">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mt-16">
            OUR VALUES
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            The principles that guide our work and define our culture
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Innovation", description: "We constantly push boundaries and explore new creative possibilities to deliver cutting-edge solutions." },
              { title: "Collaboration", description: "We believe in the power of teamwork and close collaboration with our clients to achieve exceptional results." },
              { title: "Results-Driven", description: "Every project is measured by its impact on business growth and user engagement." },
              { title: "Excellence", description: "We maintain the highest standards of quality in every aspect of our work." }
            ].map((value, index) => (
              <div key={index} className="card-royal-gold p-6">
                <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-royal-dark text-xl">★</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-ivory-light">{value.title}</h3>
                <p className="text-ivory-light text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Achievements Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mt-16">
            OUR ACHIEVEMENTS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            Numbers That Speak
          </p>
          <p className="text-lg text-ivory-light mt-4 max-w-3xl mx-auto font-sans">
            Our track record of success and growth over the years
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24h", label: "Response Time" }
            ].map((achievement, index) => (
              <div key={index} className="glass-effect-dark rounded-3xl p-8 border border-gold-400/30 shadow-2xl text-center">
                <div className="text-4xl font-bold text-gold-400 mb-2">{achievement.number}</div>
                <div className="text-ivory-light">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Start Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400 mt-16">
            READY TO START?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            Ready to Work Together?
          </p>
          <p className="text-lg text-ivory-light mt-4 max-w-3xl mx-auto font-sans">
            Let's discuss your project and create something amazing that drives real business results.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {['Developers', 'Social Media', 'Designers', 'eCommerce', 'Lead Gen', 'Websites', 'Marketing'].map((service, index) => (
              <div key={index} className="card-royal-gold p-4">
                <span className="text-gold-400">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button className="btn-royal-gold px-8 py-4 text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;