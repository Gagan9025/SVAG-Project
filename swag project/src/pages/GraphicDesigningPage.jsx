import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiImage, FiLayout, FiType, FiPrinter } from 'react-icons/fi';

const GraphicDesigningPage = () => {
  const designServices = [
    {
      title: "Brand Identity",
      description: "Complete visual identity systems that represent your brand.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
      details: "We create comprehensive brand identity systems that communicate your brand values and differentiate you from competitors. Our approach includes logo design, color palette development, typography selection, and brand guidelines that ensure consistency across all touchpoints."
    },
    {
      title: "Marketing Materials",
      description: "Eye-catching designs for all your promotional needs.",
      features: ["Brochures", "Flyers", "Business Cards", "Posters"],
      details: "Our marketing design services help you make a strong impression with professionally designed materials. From business cards to large format banners, we create designs that capture attention and communicate your message effectively."
    },
    {
      title: "Digital Assets",
      description: "Visual content optimized for digital platforms.",
      features: ["Social Media Graphics", "Website Elements", "Email Templates", "Digital Ads"],
      details: "We design digital assets that perform well across all online platforms. Our team creates optimized graphics for social media, website elements, email campaigns, and digital advertising that maintain brand consistency while maximizing engagement."
    }
  ];

  const designElements = [
    {
      icon: <FiImage className="text-2xl" />,
      title: "Visual Impact",
      description: "Designs that capture attention and make lasting impressions"
    },
    {
      icon: <FiLayout className="text-2xl" />,
      title: "Strategic Layout",
      description: "Composition that guides the viewer's eye and communicates effectively"
    },
    {
      icon: <FiType className="text-2xl" />,
      title: "Typography",
      description: "Font choices that enhance readability and reinforce brand identity"
    },
    {
      icon: <FiPrinter className="text-2xl" />,
      title: "Print & Digital",
      description: "Designs optimized for both physical and digital applications"
    }
  ];

  const processSteps = [
    {
      step: "Research",
      title: "Discovery",
      description: "Understanding your brand, audience, and objectives"
    },
    {
      step: "Concept",
      title: "Ideation",
      description: "Developing creative concepts and initial designs"
    },
    {
      step: "Design",
      title: "Creation",
      description: "Bringing concepts to life with professional design tools"
    },
    {
      step: "Review",
      title: "Feedback",
      description: "Presenting designs and incorporating your feedback"
    },
    {
      step: "Delivery",
      title: "Finalize",
      description: "Providing final files in all required formats"
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
                GRAPHIC DESIGNING
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Visually stunning designs that communicate your brand message effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Graphic Designing Services */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR DESIGN SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive graphic design solutions for all your visual communication needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designServices.map((service, index) => (
                <div
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">🎨</div>
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

        {/* Design Elements */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                DESIGN ELEMENTS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Fundamental principles that make our designs effective and memorable
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designElements.map((element, index) => (
                <div
                  key={index}
                  className="card-glass p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-gold-400 mb-4 flex justify-center">{element.icon}</div>
                  <h3 className="text-xl font-bold text-ivory mb-2">{element.title}</h3>
                  <p className="text-silver-400">{element.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR DESIGN PROCESS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                A collaborative approach that ensures exceptional results
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
                READY TO ELEVATE YOUR BRAND VISUALS?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our graphic design services can help you create a strong visual identity that resonates with your audience.
              </p>
              <div className="mt-6 mb-10">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Free Design Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Custom Design Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Multiple Revisions</span>
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