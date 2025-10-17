import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const GraphicDesigningPage = () => {
  // Design Categories
  const designCategories = [
    {
      title: "Brand Identity",
      description: "Distinctive logos and comprehensive brand identity packages that capture your essence"
    },
    {
      title: "Print Design",
      description: "Brochures, flyers, business cards, and marketing materials that convert"
    },
    {
      title: "Digital Assets",
      description: "Social media templates, stories, and digital marketing graphics"
    },
    {
      title: "Motion Graphics",
      description: "Thumbnails, overlays, and motion graphics"
    },
    {
      title: "Animations",
      description: "Logo animations and motion graphics"
    }
  ];

  // Services
  const services = [
    {
      title: "Brand Identity & Logo Design",
      description: "Distinctive logos and comprehensive visual identity packages that capture your brand essence:",
      features: [
        "Logo design and variations",
        "Brand color palette",
        "Typography selection",
        "Brand guidelines",
        "Visual identity system"
      ]
    },
    {
      title: "Marketing Materials",
      description: "Brochures, flyers, business cards, and other marketing collateral that maintain brand consistency:",
      features: [
        "Business card design",
        "Brochure and flyer design",
        "Poster and banner design",
        "Product catalogs",
        "Trade show materials"
      ]
    },
    {
      title: "Digital Assets",
      description: "Social media templates, email graphics, and digital marketing materials:",
      features: [
        "Social media post templates",
        "Email header graphics",
        "Website graphics",
        "Digital advertisements",
        "App icon design"
      ]
    },
    {
      title: "Motion Graphics",
      description: "Animated logos, explainer videos, and motion graphics that bring your brand to life:",
      features: [
        "Logo animations",
        "Explainer video graphics",
        "Social media animations",
        "Presentation graphics",
        "Video overlays"
      ]
    },
    {
      title: "Packaging Design",
      description: "Eye-catching packaging that enhances product appeal and brand recognition:",
      features: [
        "Product packaging design",
        "Label design",
        "Box and container design",
        "Retail display design",
        "Product photography"
      ]
    },
    {
      title: "Presentation Templates",
      description: "Professional presentation templates that maintain brand consistency across all communications:",
      features: [
        "PowerPoint templates",
        "Keynote templates",
        "Slide layouts",
        "Chart and graph designs",
        "Presentation graphics"
      ]
    }
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Briefing",
      description: "Understanding your needs, goals, and vision for the project through detailed consultation and requirements gathering."
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Creating initial concepts and design directions that align with your brand and target audience preferences."
    },
    {
      number: "03",
      title: "Design & Refinement",
      description: "Developing the chosen concept with feedback integration and iterative improvements until perfection."
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "Providing final files and design guidelines with ongoing support for implementation and future needs."
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: "Creative Excellence",
      description: "Talented designers with years of experience creating impactful visual communications that capture attention and drive engagement."
    },
    {
      title: "Strategic Thinking",
      description: "Designs that not only look great but also serve your business objectives and resonate with your target audience for maximum impact."
    },
    {
      title: "Timely Delivery",
      description: "Consistent on-time delivery without compromising on quality or creativity, ensuring your projects stay on schedule."
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with you throughout the design process to ensure your vision is perfectly realized."
    },
    {
      title: "Professional Tools",
      description: "Industry-standard design software and tools to create high-quality, scalable designs."
    }
  ];

  // Stats
  const stats = [
    { value: "1000+", label: "Designs Created" },
    { value: "50+", label: "Brand Identities" },
    { value: "24hr", label: "Turnaround Time" }
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
                Graphic Design
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400 mt-8" data-aos="fade-up" data-aos-delay="100">
                Visual Stories That Captivate and Convert
              </h2>
              <p className="text-lg md:text-xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Our graphic design services transform ideas into compelling visual experiences. From brand identity to marketing materials, we create designs that not only look stunning but also communicate your message effectively and drive business results.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Storytelling Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Visual Storytelling
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Visual Storytelling Excellence
              </h3>
              <p className="text-lg text-silver-400 mt-8 max-w-3xl mx-auto font-sans leading-relaxed">
                Great design has the power to communicate complex ideas instantly, evoke emotions, and create lasting connections with your audience. Our graphic design services transform your vision into compelling visual narratives that capture attention and drive engagement.
              </p>
              <p className="text-lg text-silver-400 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
                Whether you need a complete brand identity system or individual design elements, our creative team combines artistic talent with strategic thinking to deliver designs that not only look stunning but also serve your business objectives and resonate with your target audience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">🎨</div>
                <h3 className="text-lg font-bold text-ivory">Brand Identity</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">🖨️</div>
                <h3 className="text-lg font-bold text-ivory">Print Design</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">💻</div>
                <h3 className="text-lg font-bold text-ivory">Digital Assets</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">🎬</div>
                <h3 className="text-lg font-bold text-ivory">Motion Graphics</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our Categories Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Our Categories
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Our Design Categories
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Comprehensive design solutions across all visual communication needs with professional quality and creative excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {designCategories.map((category, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-ivory mb-4">{category.title}</h3>
                  <p className="text-silver-400">{category.description}</p>
                </div>
              ))}
              
              <div className="card-glass p-8 text-center flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-ivory mb-4">Branding & Identity</h3>
                <p className="text-silver-400 mb-4">Logo & Visual Identity Systems</p>
                <p className="text-silver-400">Distinctive logos and comprehensive brand identity packages that capture your essence</p>
              </div>
              
              <div className="card-glass p-8 text-center flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-ivory mb-4">Print & Collateral</h3>
                <p className="text-silver-400 mb-4">Marketing Collateral</p>
                <p className="text-silver-400">Brochures, flyers, business cards, and marketing materials that convert</p>
              </div>
              
              <div className="card-glass p-8 text-center flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-ivory mb-4">Digital Assets</h3>
                <p className="text-silver-400 mb-4">Social Media & Web</p>
                <p className="text-silver-400">Post templates, stories, and digital marketing graphics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Our Services
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Our Graphic Design Services
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Professional design solutions that elevate your brand and communicate your message effectively with creative excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-ivory mb-4">{service.title}</h3>
                  <p className="text-gold-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold-400 mr-2 mt-1">•</span>
                        <span className="text-silver-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                Our Process
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Our Design Process
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                A systematic approach that ensures creative excellence and client satisfaction with transparent communication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 text-center hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-3xl font-bold text-gold-400 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-ivory mb-4">{step.title}</h3>
                  <p className="text-silver-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Why Choose Us
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Why Choose SVAG for Graphic Design?
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Our creative expertise and attention to detail deliver exceptional design results that make your brand stand out
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-ivory mb-4">{item.title}</h3>
                  <p className="text-silver-400">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="card-glass p-8 max-w-4xl mx-auto mt-12 text-center" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-bold text-ivory mb-4">Creative Excellence</h3>
              <h4 className="text-xl text-gold-400 mb-6">Ready to Bring Your Imagination to Life?</h4>
              <p className="text-silver-400 mb-8">
                Let's discuss how our graphic design services can transform your vision into compelling visual communications that make a lasting impact on your audience.
              </p>
              
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.value}</div>
                    <p className="text-silver-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-silver-400 mb-4">No long-term contracts • 30-day money-back guarantee</p>
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Custom Design</span>
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
                  START YOUR DESIGN PROJECT
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

export default GraphicDesigningPage;