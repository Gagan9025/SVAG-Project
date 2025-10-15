import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const PrintServicesPage = () => {
  const printServices = [
    {
      title: "Business Cards",
      description: "Professional business cards that make a lasting first impression.",
      features: ["Premium Paper Options", "Custom Design", "Various Finishes", "Fast Turnaround"],
      details: "Our business card designs are crafted to reflect your brand identity and leave a memorable impression. We offer a variety of paper stocks, finishes, and design options to create cards that stand out. From classic to contemporary, we ensure your business cards represent your brand professionally."
    },
    {
      title: "Brochures",
      description: "Informative brochures that effectively communicate your brand message.",
      features: ["Tri-fold & Bi-fold Options", "Custom Sizes", "High-quality Printing", "Creative Layouts"],
      details: "Our brochure designs combine compelling visuals with persuasive copy to effectively communicate your products or services. We create brochures that capture attention and drive action, whether for trade shows, retail locations, or direct mail campaigns."
    },
    {
      title: "Posters & Flyers",
      description: "Eye-catching promotional materials for events and marketing campaigns.",
      features: ["Various Sizes", "Bold Visuals", "Quick Production", "Bulk Printing"],
      details: "We design and print posters and flyers that grab attention and deliver your message effectively. Perfect for events, promotions, or general marketing, our team creates visually striking materials that align with your brand and achieve your marketing objectives."
    },
    {
      title: "Packaging Design",
      description: "Custom packaging solutions that enhance your product's appeal.",
      features: ["Box Design", "Label Creation", "Branding Integration", "Material Selection"],
      details: "Our packaging design services help your products stand out on the shelf while protecting your items during shipping. We create packaging that tells your brand story and provides an unboxing experience that delights your customers."
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
                PRINT SERVICES
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                High-quality print materials that make a lasting impression in the physical world.
              </p>
            </div>
          </div>
        </section>

        {/* Print Services Sections */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR PRINT EXPERTISE
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Premium print solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {printServices.map((service, index) => (
                <div
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">🖨️</div>
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

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                READY TO MAKE A LASTING IMPRESSION?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our print expertise can help you achieve your marketing goals.
              </p>
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

export default PrintServicesPage;