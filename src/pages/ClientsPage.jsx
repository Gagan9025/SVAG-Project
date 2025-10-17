import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ClientsPage = () => {
  // Client data
  const clients = [
    "EAS Traders",
    "Top Hill",
    "Calibre Engineering",
    "Qatar Corp",
    "EAS Traders",
    "Top Hill",
    "Calibre Engineering",
    "Qatar Corp",
    "EAS Traders",
    "Top Hill",
    "Calibre Engineering",
    "Qatar Corp",
    "EAS Traders",
    "Top Hill",
    "Calibre Engineering",
    "Qatar Corp",
    "EAS Traders",
    "Top Hill",
    "Calibre Engineering",
    "Qatar Corp",
    "EAS Traders",
    "Top Hill",
    "Calibre Engineering",
    "Qatar Corp"
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Background Beams animation is provided by MainLayout */}
      
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-heading text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-ivory">
                Our Clients
              </h1>
              <p className="text-2xl text-gold-300 mt-6 max-w-3xl mx-auto font-sans">
                Trusted by leading companies across Qatar
              </p>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                TRUSTED PARTNERS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                We're proud to work with innovative companies across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="card-glass text-center p-6 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-delay={100 + (index % 8) * 50}
                >
                  <h3 className="text-xl font-bold text-ivory">{client}</h3>
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

export default ClientsPage;